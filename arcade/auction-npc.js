/* Observation-only NPC behaviour tree. Never accepts a hidden warehouse or player current bid. */
(function(root){
'use strict';
const D=root.AuctionData,I=root.AuctionIntel;
const BID_STRENGTH=1; // Offline sensitivity probe may override; production is fixed, never adaptive to player wealth.
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const pick=(xs,rng)=>xs[Math.floor(rng()*xs.length)];
const TYPES={
 collector:{name:'Sưu tầm toàn bộ',hint:'Sẵn sàng chi thêm để bù món còn thiếu, nhưng bảo vật trùng lặp ít hấp dẫn',margin:.015,risk:.12,premium:.22,exposure:.84},
 dealer:{name:'Săn món hời cẩn trọng',hint:'Tính lợi nhuận trước; khi giá quá nóng có xu hướng rời cuộc chơi',margin:.15,risk:.28,premium:0,exposure:.65},
 specialist:{name:'Chuyên gia ngành hàng',hint:'Ưa chuộng ngành hàng quen thuộc, thận trọng hơn với ngành hàng lạ',margin:.075,risk:.20,premium:.16,exposure:.77},
 analyst:{name:'Định giá vững chắc',hint:'Bổ sung tình báo trước, rồi mới đặt giá theo định giá của bản thân',margin:.065,risk:.14,premium:0,exposure:.76},
 gambler:{name:'Mạo hiểm đặt cược',hint:'Sẵn lòng cược vào phẩm cấp chưa biết, nhưng vẫn giữ ngân sách cắt lỗ',margin:-.025,risk:-.07,premium:0,exposure:.80},
 tactician:{name:'Dò xét tranh đua',hint:'Quan sát lịch sử báo giá, chọn thời cơ giành giật hoặc rút lui',margin:.065,risk:.12,premium:0,exposure:.76}
};
const qualityCounts=D.qualities.map((_,q)=>D.catalog.filter(x=>x.quality===q).length);
const poolCache=new Map();
function poolFor(slot,venue){
 const key=[venue.id,slot.w,slot.h,slot.quality,slot.category,slot.identified].join('|');
 if(!poolCache.has(key)){
  const pool=D.catalog.filter(c=>(slot.w==null||c.w===slot.w)&&(slot.h==null||c.h===slot.h)&&(slot.quality==null||c.quality===slot.quality)&&(!slot.category||c.category===slot.category)&&(slot.identified==null||c.id===slot.identified));
  if(!pool.length)throw Error('NPC observation has no compatible catalog candidates');
  const weights=pool.map(c=>venue.rarity[c.quality]/qualityCounts[c.quality]);
  const sum=weights.reduce((a,b)=>a+b,0);
  poolCache.set(key,pool.map((item,i)=>({item,p:weights[i]/sum})));
 }
 return poolCache.get(key);
}
function create(host,venue,rng,type){
 type=type||pick(Object.keys(TYPES),rng);const t=TYPES[type],series=pick(D.series,rng);
 const inventory=D.catalog.filter(c=>rng()<(c.series===series.id?(type==='collector'?.58:.32):.12)).map(c=>c.id);
 return {host,type,series:series.id,category:series.category,inventory,bank:Math.round(Math.max(1000,venue.npcBudget||venue.min)*(.9+rng()*.5)),
  traits:{patience:.2+rng()*.7,confidence:.55+rng()*.4,accuracy:.62+rng()*.32,
   reserve:.08+rng()*.14,lossTolerance:.045+rng()*.065,margin:t.margin+(rng()-.5)*.055,
   premium:t.premium*(.8+rng()*.4),exposure:t.exposure+(rng()-.5)*.10,bluff:.12+rng()*.35},
  tool:null,stock:{},loadout:[],
  memory:{boxes:0,cashDelta:0,valueProfit:0,calibration:1,heat:.85,lossStreak:0,compensationClaimed:0},lot:null};
}
function beginLot(bot,rng){
 bot.stock??={};const tier=bot.bank>=10000?3:bot.bank>=2400?2:0;
 const wishes=bot.type==='specialist'?['category-'+bot.series,'count-3','shape-'+tier]:bot.type==='collector'?['identify-'+tier,'quality-'+tier,'count-4']:bot.type==='analyst'?['total-3','count-3','identify-'+tier]:bot.type==='dealer'?['quality-0','count-2','shape-0']:bot.type==='gambler'?['identify-'+tier,'quality-'+tier,'largest-shape']:['shape-'+tier,'quality-'+tier,'identify-'+tier];
 bot.loadout=wishes;bot.tool=wishes[0];let procurement=Math.floor(bot.bank*.12);
 for(const id of wishes){const t=D.tools.find(t=>t.id===id);if(!(bot.stock[id]>0)&&t.cost<=procurement&&t.cost<=bot.bank){bot.bank-=t.cost;procurement-=t.cost;bot.stock[id]=1;bot.memory.toolPurchases=(bot.memory.toolPurchases||0)+t.cost;}}
 const amplitude=(1-bot.traits.accuracy)*.45;
 bot.lot={usedTools:[],failedTools:[],toolRound:0,instrumentCost:0,toolUsed:false,skillUsed:false,usedRound:null,error:1+(rng()-.5)*2*amplitude,
  urgency:rng(),opportunity:rng(),lastDecision:null,lastAction:'Đang quan sát kho',previousEstimate:null,decisions:[]};
}
function assess(bot,ctx){
 const owned=new Set(bot.inventory);let mean=0,variance=0,floor=0,ceiling=0,desired=0,special=0,known=0;
 const slots=ctx.items.map(slot=>{
  const pool=poolFor(slot,ctx.venue);let m=0,v2=0,missing=0,familiar=0,min=Infinity,max=0;
  for(const {item,p}of pool){const value=D.catalogPrice(item,ctx.venue.scale,ctx.venue.pricingVersion);m+=p*value;v2+=p*value*value;min=Math.min(min,value);max=Math.max(max,value);
   if(!owned.has(item.id)&&item.series===bot.series&&(ctx.policyVersion<2||ctx.policyVersion==null||slot.identified!=null))missing+=p*value;
   if(item.category===bot.category&&(ctx.policyVersion<2||ctx.policyVersion==null||slot.identified!=null))familiar+=p*value;
  }
  mean+=m;variance+=Math.max(0,v2-m*m);floor+=min;ceiling+=max;desired+=missing;special+=familiar;if(slot.identified!=null)known++;
  return {slot:slot.slot,mean:m,sd:Math.sqrt(Math.max(0,v2-m*m)),missing,familiar,identified:slot.identified!=null,qualityKnown:slot.quality!=null,categoryKnown:!!slot.category};
 });
 // Aggregates change valuation using only the observer's own facts; never the hidden contents.
 const groups=new Map();
 for(const f of ctx.facts||[]){if(!['count','total','mean'].includes(f.stat))continue;const key=JSON.stringify([f.filter,f.scope||null]);if(!groups.has(key))groups.set(key,{filter:f.filter,scope:f.scope});groups.get(key)[f.stat]=f.value;}
 for(const f of groups.values()){
  const observed=f.scope?ctx.items.filter(i=>f.scope.includes(i.slot)):ctx.items;
  if(f.mean!=null&&!Object.keys(f.filter).length){mean+=(f.mean+.5)*observed.length-slots.filter(i=>!f.scope||f.scope.includes(i.slot)).reduce((n,i)=>n+i.mean,0);if(!f.scope)variance=Math.min(variance,ctx.items.length**2/12);continue;}
  let expectedCount=0,groupValue=0,otherValue=0,otherCount=0;
  for(const slot of observed)for(const {item,p} of poolFor(slot,ctx.venue)){if(I.match(item,f.filter)){expectedCount+=p;groupValue+=p*D.catalogPrice(item,ctx.venue.scale,ctx.venue.pricingVersion);}else{otherCount+=p;otherValue+=p*D.catalogPrice(item,ctx.venue.scale,ctx.venue.pricingVersion);}}
  const count=f.count??expectedCount,unit=f.mean!=null?f.mean+.5:expectedCount?groupValue/expectedCount:0;
  mean+=(f.total??(count*unit))-groupValue;
  if(f.count!=null&&otherCount)mean+=(expectedCount-count)*otherValue/otherCount;
 }
 const bounds=I.bounds(ctx.items,ctx.facts||[],ctx.venue.scale,ctx.venue.pricingVersion);floor=bounds.low;ceiling=bounds.high;mean=clamp(mean,floor,ceiling);
 const sd=Math.min(Math.sqrt(variance),(ceiling-floor)/2),uncertainty=mean?sd/mean:0;
 const bias=1+(bot.lot.error*bot.memory.calibration-1)*clamp(uncertainty*2.5,0,1);
 return {mean:clamp(mean*bias,floor,ceiling),objectiveMean:mean,sd,floor,ceiling,desired,special,known,slots,uncertainty};
}

function contextTrace(node,reason){return {node,reason};}
function chooseSkillSlots(bot,ctx,count){
 const a=assess(bot,ctx);return a.slots.map(i=>({slot:i.slot,score:i.sd+i.missing*.3+i.familiar*.2})).sort((a,b)=>b.score-a.score||a.slot-b.slot).slice(0,count).map(i=>i.slot);
}
function planTool(bot,ctx){
 if(bot.lot.toolRound===ctx.round||!ctx.active[ctx.seat])return null;
 const a=assess(bot,ctx),heat=Math.max(0,...(ctx.history.at(-1)?.bids||[]).filter(x=>x!=null));
 if(heat>a.mean*(1+bot.traits.premium)||bot.bank<a.floor*.35||a.uncertainty<.015)return null;
 const ranked=(bot.loadout||[]).filter(id=>bot.stock[id]>0&&!bot.lot.usedTools.includes(id)&&!bot.lot.failedTools.includes(id)).map(id=>D.tools.find(t=>t.id===id)).filter(t=>{
  if(ctx.round<(t.minRound||1))return false;
  if(t.effect.kind==='stat')return !(ctx.facts||[]).some(f=>f.key===JSON.stringify([t.effect.stat,t.effect.filter||{}]));
  return ctx.items.some(i=>t.effect.kind==='identify'?i.identified==null:t.effect.kind==='shape'?i.w==null:i.quality==null);
 }).map(t=>{const count=t.effect.count||2,benefit=a.sd*Math.min(.65,count/Math.max(1,ctx.items.length))*(bot.type==='collector'?1.25:1);return {tool:t.id,benefit,net:benefit-t.cost};}).filter(t=>t.net>0).sort((a,b)=>b.net-a.net);
 // A paid scan competes with cash reserved for the actual auction; sunk purchase cost does not force use.
 if(!ranked.length)return null;
 if(ctx.round===1&&bot.traits.patience>.6&&bot.type!=='analyst')return null;
 return {...ranked[0],reason:'Lợi ích tình báo dự kiến vượt chi phí tiêu hao, và mức giá lịch sử vẫn trong khoảng chịu đựng'};
}
function decide(bot,ctx,rng){
 const path=[contextTrace('root','Kiểm tra tư cách tham gia')];
 const finish=(amount,node,reason,extra={})=>{path.push(contextTrace(node,reason));const decision={amount,node,reason,path,...extra};bot.lot.lastDecision=decision;bot.lot.decisions.push(decision);bot.lot.lastAction=amount===null?'Chọn rút khỏi kiện này':node==='early-close'?'Thử chốt giá sớm':node==='pressure'?'Đặt giá thăm dò':node==='wait-info'?'Thận trọng quan sát':'Gửi mức giá kín';return decision;};
 if(!ctx.active[ctx.seat])return finish(null,'inactive','Đã rút lui hoặc chưa đủ tư cách đấu phụ');
 if(bot.bank<1)return finish(null,'no-cash','Vốn lưu động đã cạn kiệt');
 const a=assess(bot,ctx),t=TYPES[bot.type];path.push(contextTrace('appraise','Chỉ sử dụng kỹ năng bản thân, tình báo thiết bị và lịch sử công khai'));
 const familiarRatio=a.special/Math.max(1,a.objectiveMean);
 const premium=bot.type==='collector'?a.desired*bot.traits.premium:bot.type==='specialist'?a.special*bot.traits.premium:0;
 const margin=bot.traits.margin+(bot.type==='specialist'?(1-familiarRatio)*.075:0);
 const modern=ctx.policyVersion>=2;
 const lossCooling=1-Math.min(modern?.30:.12,bot.memory.lossStreak*(modern?.06:.035));
 let willingness=(a.mean*(1-margin)+premium-a.sd*t.risk*(1.5-bot.traits.confidence))*lossCooling;
 // Three independent hard stops: own valuation, cash reserve, maximum plausible overpayment.
 const lossBudget=bot.bank*bot.traits.lossTolerance;
 const valueCap=Math.min(a.ceiling*1.22,a.mean+Math.min(premium+a.mean*.10,lossBudget));
 const reserve=ctx.lotIndex<ctx.lots?bot.bank*bot.traits.reserve:0;
 const cashCap=Math.floor(Math.min(bot.bank-reserve,bot.bank*clamp(bot.traits.exposure,0.4,.95)));
 // Modern policy never adds a positive uncertainty bonus, even for gamblers.
 if(modern)willingness=Math.min(willingness,(a.mean*(1-Math.max(.04,margin))+premium-a.sd*Math.max(.12,t.risk)-ctx.entryFee-bot.lot.instrumentCost)*lossCooling);
 const prudentCap=modern?Math.min(a.ceiling+premium,a.mean+Math.min(premium,lossBudget)):valueCap;
 const cap=Math.max(0,Math.floor(Math.min(willingness,valueCap,prudentCap,cashCap)));
 bot.lot.previousEstimate=a.objectiveMean;
 path.push(contextTrace('risk-gates','Trần định giá, phụ phí sưu tập, tiền mặt giữ lại và hạ nhiệt khi thua lỗ liên tục'));
 const details={estimate:Math.round(a.mean),uncertainty:a.uncertainty,premium:Math.round(premium),cap,cashCap};
 if(cap<1)return finish(null,'reserve-cash','Mức giá có thể chi trả không đủ',details);
 const previous=ctx.history.at(-1)?.bids||[];
 const others=previous.filter((x,i)=>i!==ctx.seat&&ctx.active[i]&&x!=null);
 const high=others.length?Math.max(...others):0;
 const competition=ctx.active.filter((active,i)=>active&&i!==ctx.seat).length;
 const tooHot=high>cap*(1.03+(1-bot.traits.patience)*.08);
 // A sealed historical offer is not a standing ask: hold our limit instead of handing the lot to a token bid.
 if(modern&&ctx.round>1&&high>cap)return finish(Math.max(1,Math.floor(cap*.95)),'hold-cap','Không bám theo mức giá cao lịch sử；Chỉ gửi mức giá trong phạm vi giá cắt lỗ của bản thân',details);
 if(!modern&&ctx.round>1&&tooHot&&(bot.type==='dealer'||bot.type==='specialist'||ctx.round>=4||rng()>bot.traits.patience*.65))return finish(null,'walk-away','Mức giá lịch sử đã vượt quá ngưỡng chịu đựng của bản thân；Không đuổi theo chi phí chìm',details);
 const fractions=[0,.69,.79,.89,.96,1,1];
 let fraction=fractions[ctx.round]+(bot.lot.urgency-.5)*.10;
 if(bot.type==='collector'&&premium>a.mean*.04)fraction+=.07;
 if(bot.type==='dealer')fraction-=ctx.round<3?.07:0;
 if(bot.type==='gambler')fraction+=.08;
 if(bot.type==='analyst'&&a.uncertainty>.25&&ctx.round<3)fraction-=.07;
 let quote=cap*clamp(fraction,.45,1),node='value-bid',reason='Gửi mức giá theo định giá, cạnh tranh và ngân sách';
 if(competition===0){quote=Math.min(cap,Math.max(1,a.floor*.45));node='sole-bidder';reason='Chỉ còn lại mình, giữ lại dư địa trả giá';}
 else if(ctx.round<=2&&a.uncertainty>.30&&bot.traits.patience>.62){quote=Math.min(quote,cap*.62);node='wait-info';reason='Tỷ lệ giá trị chưa biết khá lớn, chờ đợi tình báo công khai tiếp theo';}
 const predicted=high*(.94+bot.memory.heat*.10);
 if(ctx.round>=2&&predicted>0&&predicted<cap){quote=Math.max(quote,Math.min(cap,predicted*(1.005+rng()*.025)));}
 if(bot.type==='tactician'&&ctx.round<=3&&rng()<bot.traits.bluff&&!tooHot){quote=Math.min(cap,quote*(1.03+rng()*.07));node='pressure';reason='Gây áp lực trong mức giá bản thân sẵn sàng ôm hàng, đồng thời chấp nhận rủi ro trúng thầu';}
 // Early-close attempt uses only last round's visible bids; never guarantees the unknown current outcome.
 const thresholds=[0,2,1.6,1.3,1.1];
 if(ctx.round>=2&&ctx.round<=4&&high>0){const target=Math.floor(predicted*thresholds[ctx.round]+1);if(target<=cap&&rng()<.25+bot.lot.urgency*.4){quote=Math.max(quote,target);node='early-close';reason='Dự đoán cạnh tranh lịch sử để thử cướp quyền chốt giá, không phá vỡ ngưỡng cắt lỗ';}}
 quote=Math.min(cap,quote*BID_STRENGTH*(.98+rng()*.04));
 const step=quote>=1500?10:quote>=250?5:1;
 quote=Math.max(1,Math.min(cap,Math.floor(quote/step)*step));
 return finish(quote,node,reason,details);
}
function settle(bot,ctx){
 const {winner,seat,price,items,trueValue,compensation}=ctx;const before=bot.bank;let retained=0,received=0;
 if(winner===seat){
  bot.bank-=price;const owned=new Set(bot.inventory);
  for(const item of items){const keep=(bot.type==='collector'||bot.type==='specialist')&&!owned.has(item.id)&&item.series===bot.series;
   if(keep){retained+=item.value;owned.add(item.id);}else bot.bank+=item.value;
  }
  bot.inventory=[...owned];const gain=trueValue-price-(bot.lot.instrumentCost||0)-(ctx.policyVersion>=2?ctx.entryFee||0:0);bot.memory.valueProfit+=gain;bot.memory.lossStreak=gain<0?bot.memory.lossStreak+1:0;
 }else{const rebate=ctx.policyVersion>=2?compensation:Math.min(compensation,Math.max(0,D.economy.compensationDaily-bot.memory.compensationClaimed));received=rebate;bot.bank+=rebate;bot.memory.compensationClaimed+=rebate;
  if(ctx.policyVersion>=2){const gain=rebate-(ctx.entryFee||0)-(bot.lot.instrumentCost||0);bot.memory.valueProfit+=gain;bot.memory.lossStreak=gain<0?bot.memory.lossStreak+1:0;}
 }
 // Revealed result calibrates future lots, never retroactively changes an earlier sealed bid.
 if(bot.lot.previousEstimate){const ratio=clamp(trueValue/bot.lot.previousEstimate,ctx.policyVersion>=2?.5:.75,1.25);bot.memory.calibration=clamp(bot.memory.calibration*.80+ratio*.20,ctx.policyVersion>=2?.80:.90,1.10);}
 const histories=ctx.history.flatMap(h=>h.bids.filter(x=>x!=null));if(histories.length){bot.memory.heat=clamp(histories.reduce((a,b)=>a+b,0)/histories.length/Math.max(1,trueValue),.5,1.2);}
 bot.memory.boxes++;bot.memory.cashDelta+=bot.bank-before;bot.memory.lastRetained=retained;
 if(!Number.isSafeInteger(bot.bank)||bot.bank<0)throw Error('NPC settlement violated budget');
 const entryFee=ctx.policyVersion>=2?(ctx.entryFee||0):0,instrumentCost=bot.lot.instrumentCost||0;
 return {host:bot.host,role:'npc',net:(winner===seat?trueValue-price:received)-entryFee-instrumentCost,entryFee,instrumentCost,compensation:received};
}
function publicProfile(bot){const series=D.series.find(s=>s.id===bot.series),tool=D.tools.find(t=>t.id===bot.tool);return {host:bot.host,tendency:TYPES[bot.type].name,hint:TYPES[bot.type].hint,interest:series.name,tool:tool?.name||'Chưa trang bị thiết bị',toolUsed:!!bot.lot?.toolUsed,skillUsed:!!bot.lot?.skillUsed,action:bot.lot?.lastAction||'Đang chờ vào hội trường'};}
root.AuctionNPC=Object.freeze({TYPES,create,beginLot,assess,chooseSkillSlots,planTool,decide,settle,publicProfile});
})(globalThis);
