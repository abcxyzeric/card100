/* Presentation-only randomness: never advances the auction/economy RNG. */
(()=>{
'use strict';
const bank={
 'Sưu tầm toàn bộ':['Chỉ còn thiếu một món là đủ bộ rồi.','Để xem có duyên mắt không đã.','Thích thì thích, nhưng phải xem giá.','Kiện này có vẻ có món mình cần.','Dành thêm chút ngân sách cho bộ sưu tập.','Món trùng thì tôi không muốn thu.','Rung động rồi, nhưng phải nghĩ thêm.','Không rẻ thì cũng phải có giới hạn.'],
 'Săn món hời cẩn trọng':['Tôi chỉ đợi một mức giá hợp lý.','Đừng vội, tính toán một chút đã.','Để lại chút lợi nhuận rồi hãy nói.','Rẻ mới đáng để ra tay.','Kiện này xem thêm chút nữa.','Tiền phải tiêu vào chỗ xứng đáng.','Không việc gì phải làm khó ví tiền của mình.','Cơ hội còn nhiều, không vội.'],
 'Chuyên gia ngành hàng':['Đường nét này trông quen quen.','Hình như là loại mình hay xem.','Đối chiếu lại manh mối trước đã.','Chi tiết này đáng để suy ngẫm.','Trông quen cũng phải cẩn thận nhìn nhầm.','Có vài món thực sự khó nhận ra.','Tôi có chút ý tưởng rồi.','Chỉ cược vào thứ mình hiểu rõ.'],
 'Định giá vững chắc':['Đợi tôi tính lại một lần nữa.','Manh mối vẫn còn thiếu một chút.','Chừa lại chút đường lui đã.','Khoảng giá này phải thu hẹp lại.','Nghĩ kỹ rồi mới ra tay.','Định giá sai một ly là công cốc.','Loại trừ vài khả năng trước.','Vững vàng một chút, không bao giờ thừa.'],
 'Mạo hiểm đặt cược':['Haha, ván này tôi muốn đoạt lấy.','Kiện này có vẻ thú vị đấy.','Liều một phen? Để tôi nghĩ xem.','Cảm giác có thể mở ra đồ tốt.','Lần này tin vào trực giác xem sao.','Gan dạ thì cũng phải chừa đường lui.','Đồ tốt thì đừng trốn kỹ quá nhé.','Để tôi cân nhắc lại ví tiền đã.'],
 'Dò xét tranh đua':['Các người đã tính xong chưa?','Vòng này sẽ ra giá thế nào đây.','Ai sẽ mất bình tĩnh trước?','Đừng vội, kịch hay còn ở phía sau.','Trận này khá thú vị đấy.','Để tôi đoán xem ý định của các người.','Lần này phải đổi cách nghĩ thôi.','Ai nấy đều giữ bình tĩnh ghê nhỉ.'],
 thinking:['Để tôi nghĩ một lát.','Mức giá này phải cân nhắc kỹ.','Khoan vội bấm.','Ừm... xem lại manh mối một lần nữa.','Suýt chút nữa là bốc đồng rồi.','Kiện này thật khiến người ta đắn đo.','Hình như có chút manh mối rồi.','Chờ chút, tính toán lần cuối đã.'],
 submitted:['Chốt giá này thôi.','Nghĩ kỹ rồi, nộp bài.','Trông chờ vào các người đấy.','Đặt cờ không hối hận.','Bên tôi đã quyết định.','Chờ hé lộ xem sao.','Xem ai đoán chuẩn nhất.','Được, cược vào phán đoán này.'],
 high:['Mức giá này của bạn kiếm lại nổi không?','Đáng ghét, đặt giá cao thế.','Vòng này bạn liều thật đấy.','Đẩy giá cao thế chắc phải có hàng ngon.','Mức giá này tôi phải nghĩ lại.','Tôi không hùa theo đâu.','Ví tiền vững vàng ghê nhỉ.','Cao hơn nữa là nguy hiểm đấy.'],
 lead:['Tạm thời dẫn trước, đừng vội.','Hehe, vòng này tôi đi trước rồi.','Mức giá này tôi đã suy nghĩ nghiêm túc.','Khoan ăn mừng, còn chưa mở mà.','Chỉ xem bên trong có đáng giá không thôi.','Giành được cũng phải hồi vốn đã.','Có phải tôi hơi bốc đồng không nhỉ?','Mong là mắt nhìn không sai.'],
 pass:['Kiện này nhường các bạn đấy.','Vượt quá dự tính của tôi rồi.','Chừa lại chút tiền chờ kiện sau.','Không tranh nữa, xem kết quả thôi.','Lần này coi như đứng ngoài xem kịch.','Có thích đến mấy cũng phải nhìn ngân sách.','Tôi dừng tay trước đây.','Hôm nay không cố đuổi theo nữa.'],
 tie:['Không ngờ lại cùng ý tưởng.','Thế này mà cũng trùng giá ư?','Đúng là bất phân thắng bại.','Vòng sau sẽ rõ hồi kết.','Ai cũng biết tính toán ghê.','Thú vị thật, lại giống hệt nhau.','Xem ra đều nhắm vào kiện này rồi.','Đấu phụ thì phải suy ngẫm thêm thôi.']
};
const pick=(xs,r)=>xs[Math.min(xs.length-1,Math.floor(r()*xs.length))];
function create(before,random=Math.random,now=Date.now()){
 const order=[1,2,3].filter(i=>before.active[i]);
 for(let i=order.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
 const readyAt=[before.active[0]?now:null,null,null,null],bubbles=[];let elapsed=0;
 for(const [index,seat] of order.entries()){
  elapsed+=index===0?1120+Math.floor(random()*1761):880+Math.floor(random()*2241);
  readyAt[seat]=now+elapsed;
  // Each speech opportunity rolls once at creation; saves/repaints never reroll.
  if(index===0&&random()<.25)bubbles.push({seat,at:now+400,until:readyAt[seat],text:pick(bank[before.opponents?.[seat-1]?.tendency]||bank.thinking,random)});
  if(index===1&&random()<.25)bubbles.push({seat,at:readyAt[seat],until:readyAt[seat]+2200,text:pick(bank.submitted,random)});
 }
 const revealAt=now+elapsed+850;
 const reactionSeat=order.length&&random()<.25?pick(order,random):null;
 // Preselect alternatives without access to this round's sealed prices.
 const replies=Object.fromEntries(['high','lead','pass','tie'].map(k=>[k,pick(bank[k],random)]));
 return {id:before.id,round:before.round,before,startedAt:now,readyAt,revealAt,endAt:revealAt+3300,bubbles,reactionSeat,replies};
}
function speech(p,publicRow,now=Date.now()){
 if(now>=p.revealAt&&now<p.endAt&&p.reactionSeat&&publicRow){
  const bids=publicRow.bids,seat=p.reactionSeat,high=Math.max(0,...bids.filter(x=>x!=null)),leaders=bids.filter(x=>x===high).length;
  const kind=bids[seat]==null?'pass':bids[seat]===high?(leaders>1?'tie':'lead'):'high';
  return p.replies?.[kind]?{seat,text:p.replies[kind],key:`${p.id}:${p.round}:reaction`}:null;
 }
 const b=(p.bubbles||[]).find(b=>now>=b.at&&now<b.until&&now<p.revealAt);
 return b?{...b,key:`${p.id}:${p.round}:${b.at}`}:null;
}
function dragScroll(el){
 let drag=null,suppress=false,motion=0;
 const stop=()=>{cancelAnimationFrame(motion);motion=0;};
 const inertia=velocity=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||Math.abs(velocity)<.08)return;
  let last=performance.now();
  const step=now=>{const dt=Math.min(32,now-last);last=now;const top=el.scrollTop;el.scrollTop-=velocity*dt;velocity*=Math.pow(.91,dt/16.67);if(Math.abs(velocity)>.025&&Math.abs(el.scrollTop-top)>.1)motion=requestAnimationFrame(step);};
  motion=requestAnimationFrame(step);
 };
 el.tabIndex=0;el.setAttribute('aria-label','Tình báo giám định bảo vật, có thể kéo hoặc cuộn để xem');
 el.addEventListener('pointerdown',e=>{
  if(e.button!==0||!e.isPrimary||e.target.closest('button,a,input,select,textarea'))return;
  stop();drag={id:e.pointerId,y:e.clientY,top:el.scrollTop,lastY:e.clientY,lastAt:e.timeStamp,velocity:0,moved:false,touch:e.pointerType!=='mouse'};suppress=false;
  el.setPointerCapture(e.pointerId);
 });
 el.addEventListener('pointermove',e=>{
  if(!drag||e.pointerId!==drag.id)return;
  const dy=e.clientY-drag.y;if(Math.abs(dy)>4)drag.moved=true;
  if(drag.moved){e.preventDefault();el.classList.add('dragging');el.scrollTop=drag.top-dy;const dt=Math.max(1,e.timeStamp-drag.lastAt);drag.velocity=Math.max(-1.8,Math.min(1.8,(e.clientY-drag.lastY)/dt));drag.lastY=e.clientY;drag.lastAt=e.timeStamp;}
 },{passive:false});
 const end=e=>{if(!drag||e.pointerId!==drag.id)return;const old=drag;suppress=drag.moved;drag=null;el.classList.remove('dragging');if(el.hasPointerCapture(e.pointerId))el.releasePointerCapture(e.pointerId);if(old.touch&&old.moved&&e.type==='pointerup'&&e.timeStamp-old.lastAt<100)inertia(old.velocity);};
 for(const name of ['pointerup','pointercancel','lostpointercapture'])el.addEventListener(name,end);
 el.addEventListener('wheel',stop,{passive:true});el.addEventListener('keydown',stop);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();drag=null;el.classList.remove('dragging');}});
 el.addEventListener('click',e=>{if(suppress){e.preventDefault();e.stopPropagation();suppress=false;}},true);
}

globalThis.AuctionPresentation=Object.freeze({create,speech,dragScroll,bank});
})();
