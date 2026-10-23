(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const Ha="https://testingcf.jsdelivr.net/gh/abcxyzeric/card100@main/public/assets/";function Dn(){try{const e=globalThis.window?.__linjiangHudBase;if(typeof e=="string"&&e)return e}catch{}return globalThis.document?.baseURI||globalThis.location?.href||""}function Kt(e){const t=`./${String(e||"").replace(/^\//,"")}`;try{const a=Dn();return a?new URL(t,a).href:t}catch{return t}}function Ze(e){const t=String(e||"").replace(/^.*\/assets\//,"").replace(/^assets\//,"").replace(/^\//,""),a=`${Ha}${t}`;try{const n=Dn();return n?new URL(a,n).href:a}catch{return a}}function us(e){return`url("${Ze(e)}")`}function fs(e){return!e||typeof e!="object"||typeof e.src!="string"?e:{...e,src:Ze(e.src)}}function Ua(e){const t={};return Object.entries(e||{}).forEach(([a,n])=>{t[a]=fs(n)}),t}const hs=new Set(["SCRIPT","STYLE","IFRAME","OBJECT","EMBED","LINK","META","BASE"]),ms=new Set(["href","src","xlink:href","formaction"]);function gs(e){return/^\s*(?:javascript|vbscript|data\s*:\s*text\/html)/i.test(String(e||""))}function ys(e){const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),a=[];for(;t.nextNode();)a.push(t.currentNode);for(const n of a){if(hs.has(n.tagName)){n.remove();continue}for(const o of[...n.attributes]){const s=o.name.toLowerCase(),i=o.value;if(s.startsWith("on")||s==="srcdoc"){n.removeAttribute(o.name);continue}if(ms.has(s)&&gs(i)){n.removeAttribute(o.name);continue}s==="style"&&/(?:javascript\s*:|data\s*:\s*text\/html|expression\s*\()/i.test(i)&&n.removeAttribute(o.name)}}return e}function _a(e,t=document){const a=t.createElement("template");return a.innerHTML=String(e??""),ys(a.content)}function vt(e,t){return e.replaceChildren(_a(t,e.ownerDocument)),e}function ft(e,t=document){return _a(e,t).firstElementChild}function xe(e,t,a){const n=_a(a,e.ownerDocument);if(t==="afterbegin")e.prepend(n);else if(t==="beforeend")e.append(n);else if(t==="beforebegin")e.before(n);else if(t==="afterend")e.after(n);else throw new TypeError(`Unsupported insert position: ${t}`);return e}let on=!1;function bs(e=document){on||(on=!0,e.addEventListener("error",t=>{const a=t.target;if(!(a instanceof HTMLImageElement))return;const n=a.dataset.fallbackSrc;if(n&&a.src!==n){delete a.dataset.fallbackSrc,a.src=n;return}a.hasAttribute("data-remove-on-error")&&a.remove()},!0))}const vs=6e3;function Jt(e,t,{label:a="trang",onClose:n}={}){if(!e||!t)return()=>{};const o=e.ownerDocument||document,s=e.getRootNode?.()||o,i=o.createElement("div");i.className="overlay-loading",i.style.cssText=["position:absolute","inset:0","z-index:5","display:flex","flex-direction:column","align-items:center","justify-content:center","gap:16px","padding:22px","box-sizing:border-box","text-align:center","background:#1a2340","color:#eef3ff","pointer-events:none",'font:500 15px/1.65 ui-sans-serif,system-ui,"PingFang SC","Microsoft YaHei",sans-serif'].join(";");const r=o.createElement("div");r.style.cssText=["display:flex","flex-direction:column","align-items:center","gap:14px","width:min(21em,100%)","padding:22px 20px","box-sizing:border-box","border:1px solid #6f8ec9","border-radius:16px","background:#26325a","box-shadow:0 10px 30px rgba(0,0,0,.35)"].join(";");const c=o.createElement("div");if(c.style.cssText=["width:40px","height:40px","border-radius:50%","border:4px solid rgba(238,243,255,.34)","border-top-color:#b9dcff","animation:overlay-spin 900ms linear infinite"].join(";"),!s.querySelector?.("[data-overlay-loading-kf]")){const $=o.createElement("style");$.dataset.overlayLoadingKf="1",$.textContent="@keyframes overlay-spin{to{transform:rotate(360deg)}}",s instanceof o.defaultView.ShadowRoot?s.appendChild($):(o.head||s).appendChild($)}const p=o.createElement("div");p.textContent=`Đang tải ${a}…`,p.style.cssText="font-size:17px;font-weight:600;color:#eef3ff";const f=o.createElement("div");f.style.cssText="font-size:13px;line-height:1.75;color:#c3d2f0;display:none";const m=o.createElement("div");m.style.cssText="display:none;gap:10px;flex-wrap:wrap;justify-content:center";const y=($,j)=>{const L=o.createElement("button");return L.type="button",L.textContent=$,L.style.cssText=["min-height:40px","padding:0 16px","border-radius:10px",`border:1px solid ${j?"#b9dcff":"rgba(238,243,255,.45)"}`,`background:${j?"#2f5f92":"rgba(238,243,255,.08)"}`,"color:#eef3ff","font:600 14px/1 inherit","touch-action:manipulation","cursor:pointer","pointer-events:auto"].join(";"),L},g=y("Thử lại",!0),d=y("Đóng",!1);m.append(g,d),r.append(c,p,f,m),i.appendChild(r),e.appendChild(i);let u=!1,S=0;const b=()=>{u||(p.textContent=`${a} tải chậm hơn bình thường`,f.style.display="block",f.textContent="Các trang này được tải từ GitHub Pages, đôi khi mạng có thể chậm. Bạn có thể thử lại hoặc đóng để vào lại sau — sau khi tải xong một lần sẽ được lưu bộ nhớ đệm rất nhanh.",m.style.display="flex",c.style.display="none")},l=()=>{u||(u=!0,clearTimeout(S),i.remove())},v=()=>{clearTimeout(S),S=setTimeout(b,vs)};return t.addEventListener("load",()=>{let $=!1;try{$=!t.contentWindow?.location?.href||t.contentWindow.location.href==="about:blank"}catch{$=!1}$||l()}),t.addEventListener("error",b),g.addEventListener("click",()=>{p.textContent=`Đang tải lại ${a}…`,f.style.display="none",m.style.display="none",c.style.display="";const $=t.dataset.baseSrc||t.src;t.dataset.baseSrc=$,t.src=`${$}${$.includes("?")?"&":"?"}retry=${Date.now()}`,v()}),d.addEventListener("click",()=>{try{n?.()}catch{}}),v(),l}function $s(e){if(!Array.isArray(e)||!e.length)return;const t=()=>{for(const a of e)if(a)try{fetch(a,{credentials:"omit"}).catch(()=>{})}catch{}};try{typeof requestIdleCallback=="function"?requestIdleCallback(t,{timeout:4e3}):setTimeout(t,1500)}catch{setTimeout(t,1500)}}const ws={"consumable-daily":3,"consumable-drink":3,"consumable-food":3,"consumable-medicine":3,"consumable-other":3,"goods-accessory":3,"goods-clothing":3,"goods-equipment":3,"goods-implement":3,"goods-other":3,"material-animal":3,"material-chemical":3,"material-fabric":3,"material-mineral":3,"material-other":3,"material-plant":3},Ee=["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ Nhật"],Qt=["Phố xá đông đúc","Công cộng mở","Phòng riêng","Khuất tầm nhìn","Hoang vắng","Tuyệt đối kín đáo"],Se=["Chưa khai phá","Mới chạm","Thức tỉnh","Nhạy cảm","Thuần thục","Hoàn toàn"],Ue=[["oral","Khoang miệng","口腔"],["chest","Ngực","胸部"],["vagina","Tiểu huyệt","小穴"],["anus","Hậu môn","肛门"]],ks=[40,80,130,190,260],ya=60;function Ya(e,t,a=0){const n=Math.max(0,Math.min(Se.length-1,Math.floor(Number(e)||0))),o=ks[n]||0,s=Math.max(0,Math.min(ya,Math.floor(Number(a)||0))),i=s>=ya,r={tier:n,today:s,daily:ya,dayFull:i};if(!o)return{...r,value:0,need:0,pct:100,todayPct:0,fromPct:100,capped:!0};const c=Math.max(0,Math.min(o,Math.floor(Number(t)||0))),p=Math.round(c/o*100),f=Math.min(p,Math.round(Math.min(s,c)/o*100));return{...r,value:c,need:o,pct:p,todayPct:f,fromPct:p-f,capped:!1}}const Ke=[["recentCount","Số lần kinh nghiệm gần đây","近期性经验次数"],["exposure","Kinh nghiệm phơi bày","露出经验"],["masturbation","Kinh nghiệm tự sướng","自慰经验"],["excretion","Kinh nghiệm play bài tiết","排泄play经验"],["toy","Kinh nghiệm play đạo cụ","道具play经验"],["abuse","Kinh nghiệm play phục tùng","服从play经验"],["hidden","Kinh nghiệm lén lút","隐奸经验"],["outdoor","Kinh nghiệm ngoài trời","青奸经验"],["sleeping","Kinh nghiệm play ngủ say","昏睡Play经验"],["hypnosis","Kinh nghiệm play thôi miên","催眠play经验"],["roleplay","Kinh nghiệm nhập vai tình thú","情趣扮演经验"],["voyeur","Kinh nghiệm chụp lén","盗摄经验"],["stream","Kinh nghiệm phát sóng nhạy cảm","性直播经验"]],rt=[{at:0,name:"Chưa có",hue:228},{at:1,name:"Lần đầu",hue:208},{at:3,name:"Thử nghiệm",hue:262},{at:6,name:"Quen thuộc",hue:320},{at:12,name:"Thường xuyên",hue:344},{at:24,name:"Đắm chìm",hue:22}];function Fn(e){const t=Math.max(0,Math.round(e)||0);let a=0;for(;a+1<rt.length&&t>=rt[a+1].at;)a++;const n=rt[a],o=rt[a+1],s=o?(t-n.at)/(o.at-n.at):0,i=o?(a+s)/(rt.length-1)*100:100;return{level:a,name:n.name,hue:n.hue,pct:Math.round(i*10)/10}}const re={obedience:[350,600],desire:[91],stamina:[20],bladder:[60,80]};function xs(e){const t=Math.max(0,Number(e)||0);return t<=0?0:t>=2e5?20:Math.min(20,Math.floor(20*(t/2e5)**(1/3.5)))}function ea(e){const t=e.tipped?`￥${e.tipped.toLocaleString("en-US")}`:"Chưa donate",a=e.tier&&e.tier!=="无"&&e.tier!=="Không"?e.tier:"Chưa có huy hiệu",n=`Lv.${e.badge||0}`;return{tier:a,lv:n,yen:t,follow:!!e.follow}}function se({follow:e=!1,tipped:t=0,tier:a="Không",days:n=0,mod:o=!1,muted:s=!1,muteDays:i=0}={}){return{follow:e,tipped:t,badge:xs(t),tier:a,days:(a==="无"||a==="Không")?0:n,mod:o,muted:s,muteDays:s?i:0}}const Qe="Bản vẽ quy hoạch đô thị",ce=1e6,Ss=`Sau khi sử dụng, thêm địa điểm tùy chỉnh của riêng bạn vào bản đồ và Lorebook, đồng thời tự động sở hữu làm tài sản riêng. Mỗi lần xác nhận xây dựng cần trả thêm ￥${ce.toLocaleString("en-US")} phí xây dựng, không đủ tiền sẽ không thể khởi công; bản vẽ không bị tiêu hao, có thể tái sử dụng nhiều lần.`,Ft=[],T={calendar:{full:"17/04/2026",date:"17/04",weekday:"Thứ Sáu",season:"Mùa xuân",week:"Tuần 16"},time:{clock:"20:45",period:"Tối"},location:{area:"Khu Cổ Lĩnh · Chung cư Vân Đình",place:"Phòng khách",privacy:5}},E={stamina:82,money:286450,companion:"东雪莲",work:{job:"便利店店员",place:"鼓岭区 · 梧桐里",daily:12e3,workedToday:!1},home:"鼓岭区 · 云庭公寓",watching:"璃亚梦",property:{云庭公寓:{name:"云庭公寓",area:"鼓岭区 · 云庭公寓",tenure:"租住",desc:"主播和自由职业者聚居的高层，一居，能把人带回来。"}},inventory:{materials:[{name:"蓝色野生花瓣",category:"植物",quantity:6,source:"青屏山采集",description:"带有清凉香气的调配素材。"},{name:"月见草籽",category:"植物",quantity:3,source:"梧桐里花市",description:"适合制作夜间使用的恢复类道具。"},{name:"玻璃露珠",category:"矿物",quantity:2,source:"明湖区采集",description:"折射着浅蓝光泽的稀有素材。"}],consumables:[{name:"微醺甜果酒",category:"饮料",quantity:2,potency:2,description:"果香柔和的便携气泡酒，喝下会微醺，防备略降。"},{name:"体能补给饮",category:"饮料",quantity:3,potency:3,description:"运动饮料，行动后饮用可较快恢复体力。"},{name:"清醒薄荷糖",category:"药物",quantity:5,potency:1,description:"强薄荷含片，缓解困倦，适合长时间外出。"},{name:"便当",category:"食物",quantity:1,potency:3,description:"梧桐里便利店的照烧鸡便当，吃完能回不少体力。"}],goods:[{name:"项圈与牵引绳",category:"器具",quantity:1,worn:!1,description:"细软皮革项圈配一条短绳，扣上后便于近距离带着走。"},{name:"无线遥控跳蛋",category:"器具",quantity:1,worn:!0,description:"静音款遥控跳蛋，放入后可远距离调节强度。"},{name:"护士服与白丝",category:"服装",quantity:1,worn:!1,description:"短款护士服配白色长袜，适合诊疗扮演。"}]}},Ea=3,Ms=[{id:"slot-golden-grape",unlock:"slot_golden_grape",game:"幸运机",field:"旋转次数",target:50},{id:"fish-golden-clown",unlock:"fish_golden_clown",game:"捕鱼",field:"捕获次数",target:100},{id:"fish-starlight-jelly",unlock:"fish_starlight_jelly",game:"捕鱼",field:"捕获次数",target:500},{id:"slot-mystery-cloud",unlock:"slot_mystery_cloud",game:"幸运机",field:"旋转次数",target:500},{id:"fish-deep-bomb",unlock:"fish_deep_bomb",game:"捕鱼",field:"捕获次数",target:2e3}],fe={版本:Ea,统计:{刮刮乐:{结算次数:0,中奖次数:0,最高倍率:0,累计返奖:0},幸运机:{旋转次数:0,中奖次数:0,最高倍率:0,累计返奖:0},捕鱼:{结算次数:0,捕获次数:0,最高倍率:0,累计返奖:0,清屏次数:0}},已解锁:{},已达成:{}},As={"Thực vật":{bucket:"material",slug:"material-plant",hue:152},"Động vật":{bucket:"material",slug:"material-animal",hue:38},"Khoáng vật":{bucket:"material",slug:"material-mineral",hue:262},"Hóa chất":{bucket:"material",slug:"material-chemical",hue:22},"Vải vóc":{bucket:"material",slug:"material-fabric",hue:200},"Thức ăn":{bucket:"consumable",slug:"consumable-food",hue:32},"Đồ uống":{bucket:"consumable",slug:"consumable-drink",hue:196},"Dược phẩm":{bucket:"consumable",slug:"consumable-medicine",hue:320},"Đồ dùng hàng ngày":{bucket:"consumable",slug:"consumable-daily",hue:170},"Trang phục":{bucket:"goods",slug:"goods-clothing",hue:340},"Phụ kiện":{bucket:"goods",slug:"goods-accessory",hue:44},"Dụng cụ":{bucket:"goods",slug:"goods-implement",hue:300},"Thiết bị":{bucket:"goods",slug:"goods-equipment",hue:208},植物:{bucket:"material",slug:"material-plant",hue:152},动物:{bucket:"material",slug:"material-animal",hue:38},矿物:{bucket:"material",slug:"material-mineral",hue:262},化学:{bucket:"material",slug:"material-chemical",hue:22},织物:{bucket:"material",slug:"material-fabric",hue:200},食物:{bucket:"consumable",slug:"consumable-food",hue:32},饮料:{bucket:"consumable",slug:"consumable-drink",hue:196},药物:{bucket:"consumable",slug:"consumable-medicine",hue:320},日用:{bucket:"consumable",slug:"consumable-daily",hue:170},服装:{bucket:"goods",slug:"goods-clothing",hue:340},饰品:{bucket:"goods",slug:"goods-accessory",hue:44},器具:{bucket:"goods",slug:"goods-implement",hue:300},器材:{bucket:"goods",slug:"goods-equipment",hue:208}},Ls={material:{slug:"material-other",hue:228},consumable:{slug:"consumable-other",hue:228},goods:{slug:"goods-other",hue:228}};function Gn(e,t){const a=As[t];return a&&a.bucket===e?{label:t,...a}:{label:"Khác",bucket:e,...Ls[e]}}const sn=`${Ha}items`,Es=3,Ts=5,rn=[-7,-3.5,0,3.5,7],Ps=[.96,1.03,1,.98,1.05];function Hn(e){let t=2166136261;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,16777619);return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}const Un=e=>Math.max(1,Math.min(Es,ws[e]||1));let qt=null;function Cs(){const e=new Map;for(const[t,,a]of Yn){const n=new Map;for(const o of E.inventory[t]||[]){const{slug:s}=Gn(a,o.category),i=Un(s),r=n.get(s)||new Set;let c=Hn(o.name)%i;for(;r.size<i&&r.has(c);)c=(c+1)%i;r.add(c),n.set(s,r),e.set(o.name,c)}}return e}function js(){qt=null}function _n(e,t){const a=Gn(e,t.category),n=Hn(t.name);qt||(qt=Cs());const o=qt.get(t.name)??n%Un(a.slug),s=(n>>>8)%rn.length,i=`${sn}/${a.slug}.png`;return{...a,set:o,placing:s,tilt:rn[s],scale:Ps[s],src:o?`${sn}/${a.slug}-${o+1}.png`:i,fallback:o?i:null}}function Oe(e,t){const a=e.fallback?` data-fallback-src="${e.fallback}"`:"";return`<img class="${t}" src="${e.src}" alt="" draggable="false"
    decoding="async" loading="lazy"${a} data-remove-on-error>`}function xt(e,t="item-notch"){return e?`<span class="${t}" aria-hidden="true">${Array.from({length:Ts},(a,n)=>`<i${n<e?' class="on"':""}></i>`).join("")}</span>`:""}const Yn=[["goods","Đồ dùng","goods"],["consumables","Vật phẩm tiêu hao","consumable"],["materials","Nguyên liệu","material"]];function St(){return Yn.map(([e,t,a])=>({bucket:a,label:t,items:(E.inventory[e]||[]).map(n=>({...n,bucket:a,icon:_n(a,n)}))})).filter(e=>e.items.length>0)}const He=[{id:"evt-01",area:"鼓岭区 · 云庭公寓",place:"客厅",title:"晚风里的来电",category:"日常",priority:88,status:"可触发",conditions:{好感度:600},summary:"熟悉的头像在夜色中亮起，似乎有人正等着你的回应。"},{id:"evt-02",area:"明湖区 · 湖滨商街",place:"日料包厢",title:"迟到的预约",category:["纯爱","调教"],priority:72,status:"待触发",conditions:{好感度:700,时段:["暮","夜"]},summary:"一场被临时推迟的晚餐，还留着重新赴约的可能。"},{id:"evt-03",area:"青屏山风景区 · 青屏山密林",place:"观景崖边",title:"山雾中的微光",category:"生理窘迫",priority:64,status:"待触发",conditions:{顺从度:600,尿意:80},summary:"远处有一束反常的蓝光，附近却找不到任何遮蔽。"},{id:"evt-04",area:"鼓岭区 · 云庭公寓",place:"自宅卧室",title:"力竭的夜",category:"睡奸",priority:58,status:"待触发",conditions:{体力上限:20,需携带道具:"无线遥控跳蛋"},summary:"她在沙发上睡得很沉，呼吸绵长，怎么叫都没有反应。"}],ln={"Có thể kích hoạt":0,"Chờ kích hoạt":1,"Đã hoàn thành":2,"Đã hết hạn":3,可触发:0,待触发:1,已完成:2,已过期:3};function zn(){const e=T.location.area;return[...He].sort((t,a)=>(ln[t.status]??9)-(ln[a.status]??9)||(t.area===e?0:1)-(a.area===e?0:1)||a.priority-t.priority)}const ht={stats:[{icon:"coin",label:"Tiền bạc",valueIcon:"wallet",unit:"￥",value:"286,450",sub:{pill:`+${E.work.daily.toLocaleString("en-US")}`}}],stamina:{label:"Thể lực",value:E.stamina,max:100,action:"Hồ sơ nhân vật chính"}},__VI_TO_CN_CHAR={"Azuma Seren":"东雪莲","Taffy":"塔菲","Ace Taffy":"塔菲","Sakamata":"沙花叉","Sakamata Chloe":"沙花叉","Shigure Ui":"时雨羽衣","Hồng Tường Vi":"红蔷薇","Stella":"斯黛拉","Iga Sutora":"斯黛拉","Riamu":"璃亚梦","Yumemi Riamu":"梦见璃亚梦","Miku Rabbit Hole":"兔子洞初音","Kagura Nana":"神乐七奈","Bé Cá Voi":"鲸鱼娘","Neuro":"牛肉"},__toCnChar=e=>__VI_TO_CN_CHAR[String(e||"").trim()]||e,__VI_TO_CN_PART={"Khoang miệng":"口腔","Ngực":"胸部","Tiểu huyệt":"小穴","Hậu môn":"肛门","oral":"口腔","chest":"胸部","vagina":"小穴","anus":"肛门"},__toCnPart=e=>__VI_TO_CN_PART[String(e||"").trim()]||Rs(e),qs="https://anchor.rown.dpdns.org/封面",Wn=e=>`${qs}/${__toCnChar(e)}.webp`,Ns="https://anchor.rown.dpdns.org/部位",Rs=e=>{const t=Ue.find(([a])=>a===e);return t?t[2]||t[1]:e};function Os(e){const t=String(e||"").trim();try{const a=new URL(t);return a.protocol==="https:"||a.protocol==="http:"?a.href:""}catch{return""}}const Xn=e=>Object.fromEntries(Ue.map(([t,a,n])=>{const o=e?.部位图?.[n||a]??e?.部位图?.[a]??e?.部位图?.[t];return[t,Os(o)]}).filter(([,t])=>t)),Vn=(e,t)=>ta.get(e)?.partArts?.[t]||"",Gt=(e,t)=>Vn(e,t)||(Zn.has(e)?`${Ns}/${__toCnChar(e)}/${__toCnPart(t)}.webp`:""),Ne=[{name:"Azuma Seren",romaji:"Seren",theme:"ice",ornament:"sparkle",artFx:.5,artFy:.2,artZ:1.3,artOx:.03,artTx:.3,artTy:.36,bond:{favor:780,obedience:260,mood:"害羞"},physiology:{desire:18,stamina:88,bladder:26,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:1,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:1,chest:1,vagina:0,anus:0},developmentProgress:{oral:34,chest:12,vagina:21,anus:0},developmentToday:{oral:20,chest:0,vagina:60,anus:0},location:{area:"鼓岭区 · 云庭公寓",place:"客厅",privacy:5},fan:se({follow:!0}),stream:{live:!1,title:"",heat:0,schedule:{start:"21:30",end:"00:30",days:["周一","周二","周三","周四","周五","周六"],note:"Tán gẫu đêm khuya · Nghỉ CN"}}},{name:"Taffy",romaji:"Taffy",theme:"rose",ornament:"sparkle",artFx:.5,artFy:.2,artZ:1.28,artOx:.02,artTx:.3,artTy:.36,bond:{favor:860,obedience:410,mood:"开朗"},physiology:{desire:34,stamina:76,bladder:42,statuses:[]},experience:{recentCount:2,exposure:1,masturbation:3,excretion:0,toy:2,abuse:0,hidden:1,outdoor:0,sleeping:0,hypnosis:0,roleplay:1,voyeur:0,stream:1},development:{oral:3,chest:2,vagina:2,anus:0},developmentProgress:{oral:96,chest:58,vagina:40,anus:6},developmentToday:{oral:60,chest:18,vagina:0,anus:6},location:{area:"西洲区 · 星芒电竞舱",place:"电竞舱主播位",privacy:3},fan:se({follow:!0,tipped:4200,tier:"舰长",days:18}),stream:{live:!0,title:"Tán gẫu đỉnh cao: Đọc SC và tấu hài",heat:18240,schedule:{start:"20:00",end:"23:30",days:["周一","周二","周四","周五","周六","周日"],note:"Khung giờ chính buổi tối · Nghỉ T4"}}},{name:"Sakamata",romaji:"Chloe",theme:"crimson",ornament:"sparkle",artFx:.5,artFy:.18,artZ:1.16,artOx:.06,artTx:.3,artTy:.35,bond:{favor:710,obedience:335,mood:"困倦"},physiology:{desire:27,stamina:69,bladder:31,statuses:["微醺"]},experience:{recentCount:1,exposure:0,masturbation:2,excretion:0,toy:1,abuse:0,hidden:1,outdoor:0,sleeping:1,hypnosis:0,roleplay:0,voyeur:1,stream:0},development:{oral:2,chest:3,vagina:2,anus:1},developmentProgress:{oral:71,chest:143,vagina:24,anus:62},developmentToday:{oral:0,chest:40,vagina:24,anus:0},location:{area:"明湖区 · 湖滨商街",place:"居酒屋卡座",privacy:1},fan:se({follow:!0,tipped:690,tier:"舰长",days:12,muted:!0}),stream:{live:!1,title:"",heat:0,schedule:{start:"21:00",end:"00:30",days:["周一","周二","周四","周五","周日"],note:"Khung giờ tối thường lệ"}}},{name:"Shigure Ui",romaji:"Ui",theme:"gold",ornament:"star",artFx:.5,artFy:.2,artZ:1.24,artOx:.02,artTx:.3,artTy:.36,bond:{favor:830,obedience:205,mood:"委屈"},physiology:{desire:12,stamina:61,bladder:22,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:0,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:0,chest:0,vagina:0,anus:0},developmentProgress:{oral:0,chest:0,vagina:0,anus:0},developmentToday:{oral:0,chest:0,vagina:0,anus:0},location:{area:"鼓岭区 · 梧桐里",place:"画室",privacy:4},fan:se(),stream:{live:!1,title:"",heat:0,schedule:{start:"22:00",end:"00:30",days:["周三","周日"],note:"Phát sóng theo tuần · Buổi tối"}}},{name:"Hồng Tường Vi",romaji:"Rose",theme:"scarlet",ornament:"sparkle",artFx:.58,artFy:.16,artZ:1.32,artOx:.02,artTx:.3,artTy:.36,bond:{favor:690,obedience:480,mood:"发情"},physiology:{desire:46,stamina:73,bladder:38,statuses:["蓝色花粉催情中"]},experience:{recentCount:3,exposure:3,masturbation:4,excretion:1,toy:4,abuse:1,hidden:2,outdoor:1,sleeping:0,hypnosis:0,roleplay:3,voyeur:2,stream:0},development:{oral:4,chest:3,vagina:4,anus:2},developmentProgress:{oral:118,chest:162,vagina:205,anus:88},developmentToday:{oral:0,chest:12,vagina:60,anus:0},location:{area:"乌溪区 · 夜巷",place:"情侣酒店",privacy:5},fan:se(),stream:{live:!1,title:"",heat:0,schedule:{start:"19:00",end:"22:00",days:["周一","周二","周四","周五","周日"],note:"Đài âm nhạc hoàng hôn · Nghỉ T4 & T7"}}},{name:"Stella",romaji:"Stella",theme:"violet",ornament:"sparkle",artFx:.55,artFy:.2,artZ:1.28,artOx:.02,artTx:.3,artTy:.36,bond:{favor:740,obedience:520,mood:"依恋"},physiology:{desire:39,stamina:84,bladder:17,statuses:[]},experience:{recentCount:4,exposure:2,masturbation:5,excretion:1,toy:3,abuse:1,hidden:3,outdoor:1,sleeping:0,hypnosis:1,roleplay:2,voyeur:1,stream:0},development:{oral:3,chest:4,vagina:3,anus:1},developmentProgress:{oral:133,chest:47,vagina:176,anus:29},developmentToday:{oral:30,chest:0,vagina:0,anus:29},location:{area:"西洲区 · 极光声学棚",place:"录音棚休息区",privacy:4},fan:se({follow:!0,tipped:80,tier:"办卡",days:22}),stream:{live:!1,title:"",heat:0,schedule:{start:"18:30",end:"21:30",days:["周二","周三","周四","周五","周六","周日"],note:"Đài phát thanh chiều muộn · Nghỉ T2"}}},{name:"Riamu",romaji:"Riamu",theme:"candy",ornament:"sparkle",coverName:"梦见璃亚梦",artFx:.52,artFy:.24,artZ:.9,artOx:.01,artTx:.3,artTy:.36,bond:{favor:910,obedience:615,mood:"发情"},physiology:{desire:58,stamina:72,bladder:44,statuses:["极度憋尿"]},experience:{recentCount:6,exposure:5,masturbation:8,excretion:3,toy:6,abuse:2,hidden:4,outdoor:2,sleeping:1,hypnosis:1,roleplay:4,voyeur:3,stream:7},development:{oral:5,chest:4,vagina:5,anus:3},developmentProgress:{oral:0,chest:231,vagina:0,anus:154},developmentToday:{oral:0,chest:60,vagina:0,anus:20},location:{area:"鼓岭区 · 云庭公寓",place:"自宅卧室",privacy:5},fan:se({follow:!0}),stream:{live:!0,title:"Tâm sự đêm khuya và tương tác khán giả",heat:6310,schedule:{start:"23:00",end:"02:00",days:["周一","周三","周四","周五","周六","周日"],note:"Tương tác đêm khuya · Nghỉ T3"}}},{name:"Miku Rabbit Hole",romaji:"Miku",theme:"bunny",ornament:"sparkle",artFx:.5,artFy:.22,artZ:1.08,artOx:0,artTx:.3,artTy:.36,bond:{favor:720,obedience:180,mood:"活泼"},physiology:{desire:12,stamina:92,bladder:18,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:0,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:0,chest:0,vagina:0,anus:0},developmentProgress:{oral:0,chest:0,vagina:0,anus:0},developmentToday:{oral:0,chest:0,vagina:0,anus:0},location:{area:"鼓岭区 · 鼓岭石库门老公馆",place:"直播间",privacy:4},fan:se(),stream:{live:!1,title:"",heat:0,followers:11e4,schedule:{start:"20:30",end:"23:30",days:["周一","周二","周四","周五","周六"],note:"Ca hát & tán gẫu đêm · Nghỉ T4 & CN"}}},{name:"Kagura Nana",romaji:"Nana",theme:"nana",ornament:"star",artFx:.5,artFy:.23,artZ:1.04,artOx:0,artTx:.3,artTy:.36,bond:{favor:680,obedience:160,mood:"愉快"},physiology:{desire:10,stamina:90,bladder:22,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:0,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:0,chest:0,vagina:0,anus:0},developmentProgress:{oral:0,chest:0,vagina:0,anus:0},developmentToday:{oral:0,chest:0,vagina:0,anus:0},location:{area:"青屏山风景区 · 松涧山居小院",place:"画室",privacy:5},fan:se(),stream:{live:!1,title:"",heat:0,followers:18e4,schedule:{start:"19:30",end:"22:30",days:["周二","周三","周四","周六","周日"],note:"Vẽ tranh & trò chuyện tối · Nghỉ T2 & T6"}}},{name:"Bé Cá Voi",romaji:"Whale",theme:"whale",ornament:"sparkle",artFx:.5,artFy:.22,artZ:1.06,artOx:0,artTx:.3,artTy:.36,bond:{favor:80,obedience:0,mood:"开朗"},physiology:{desire:0,stamina:100,bladder:20,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:0,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:0,chest:0,vagina:0,anus:0},developmentProgress:{oral:0,chest:0,vagina:0,anus:0},developmentToday:{oral:0,chest:0,vagina:0,anus:0},location:{area:"明湖区 · 明湖天镜顶层复式",place:"直播工作室",privacy:5},fan:se(),stream:{live:!1,title:"",heat:0,followers:26e4,schedule:{start:"22:00",end:"01:00",days:["周一","周二","周三","周五","周六","周日"],note:"Hỏi đáp đêm khuya · Nghỉ T5"}}},{name:"Neuro",romaji:"Neuro",theme:"neuro",ornament:"star",artFx:.5,artFy:.22,artZ:1.04,artOx:0,artTx:.3,artTy:.36,bond:{favor:80,obedience:0,mood:"开朗"},physiology:{desire:0,stamina:100,bladder:20,statuses:[]},experience:{recentCount:0,exposure:0,masturbation:0,excretion:0,toy:0,abuse:0,hidden:0,outdoor:0,sleeping:0,hypnosis:0,roleplay:0,voyeur:0,stream:0},development:{oral:0,chest:0,vagina:0,anus:0},developmentProgress:{oral:0,chest:0,vagina:0,anus:0},developmentToday:{oral:0,chest:0,vagina:0,anus:0},location:{area:"乌溪区 · 乌溪枕水河房",place:"直播间",privacy:4},fan:se(),stream:{live:!1,title:"",heat:0,followers:5e5,schedule:{start:"20:00",end:"23:00",days:["周一","周二","周四","周五","周六","周日"],note:"Chơi game buổi tối · Nghỉ T4"}}}],Mt="Trạng thái bình thường",Bs=e=>({abnormal:Array.isArray(e)&&e.length>0,text:Array.isArray(e)&&e.length?e[0]:Mt,extra:Math.max(0,(Array.isArray(e)?e.length:0)-1),all:Array.isArray(e)?e:[]}),ta=new Map(Ne.map(e=>[e.name,e])),Zn=new Set(ta.keys()),Ta=["rose","ice","violet","gold","crimson","scarlet","candy"];function Kn(e){return{name:e.name,romaji:e.romaji,theme:e.theme,ornament:e.ornament,art:e.art||Wn(e.coverName||e.name),artFx:e.artFx,artFy:e.artFy,artZ:e.artZ,artOx:e.artOx,artTx:e.artTx,artTy:e.artTy,metric:{icon:"heart",label:"Độ hảo cảm",value:e.bond.favor,max:1e3},chip:{icon:"smile",label:"Tâm trạng",value:e.bond.mood},status:Bs(e.physiology.statuses),live:!!e.stream?.live,custom:!!e.custom}}function Pa(e,t){return e.developmentProgress||=Fe(),e.developmentToday||=Fe(),{bond:e.bond,physiology:e.physiology,experience:e.experience,development:e.development,developmentProgress:e.developmentProgress,developmentToday:e.developmentToday,developmentNotes:e.developmentNotes||{},location:e.location,fan:e.fan,stream:e.stream,index:t,custom:!!e.custom}}const Jn=typeof window>"u"||window.parent===window,V=Jn?Ne.map(Kn):[],_=Jn?Object.fromEntries(Ne.map((e,t)=>[e.name,Pa(e,t)])):{};function At(){const e=E.work||{job:null,place:null,daily:0,workedToday:!1},t=!e.job,a=!t&&e.place===T.location.area;return{job:e.job,place:e.place,daily:e.daily||0,workedToday:!!e.workedToday,unemployed:t,atWork:a,canClockIn:!t&&a&&!e.workedToday&&e.daily>0,reason:t?"Thất nghiệp":e.workedToday?"Hôm nay đã làm":a?"":"Chưa đến chỗ làm"}}function za(e=At()){return e.unemployed?{label:"Thất nghiệp",tone:""}:e.workedToday?{label:"Đã đi làm",tone:"is-ok"}:e.atWork?{label:"Tại chỗ làm",tone:"is-ready"}:{label:"Chưa đến chỗ làm",tone:"is-warn"}}function aa(){const e=Object.values(E.property||{}),t=e.find(a=>a.area===E.home)||e[0]||null;return{home:E.home,current:t,properties:e}}function Qn(){const e=E.watching||null;return V.map(t=>{const a=_[t.name],n=a.fan||se(),o=a.stream||{live:!1,title:"",heat:0},s=ea(n),i=[e===t.name?"Đang xem":"",o.live?o.heat?`Đang live · Độ nóng ${o.heat.toLocaleString("en-US")}`:"Đang live":n.follow?"Đã theo dõi":"Khán giả qua đường",n.mod?"Quản trị viên":"",n.muted?n.muteDays>0?`Cấm chat ${n.muteDays} ngày`:"Đang bị cấm chat":""].filter(Boolean).join(" · ");return{name:t.name,romaji:t.romaji,art:t.art,theme:t.theme,live:!!o.live,title:o.title||"",heat:o.heat||0,watching:e===t.name,follow:!!n.follow,tipped:n.tipped||0,badge:n.badge||0,tier:n.tier||"无",days:n.days||0,mod:!!n.mod,muted:!!n.muted,muteDays:n.muteDays||0,caption:i,yen:s.yen,lv:s.lv}}).sort((t,a)=>a.watching-t.watching||a.live-t.live||a.follow-t.follow||a.tipped-t.tipped)}const na={live:{label:"Đang phát sóng",tone:"is-live"},unplanned:{label:"Phát sóng đột xuất",tone:"is-unplanned"},off:{label:"Hôm nay nghỉ",tone:"is-off"},booked:{label:"Lịch cố định",tone:"is-booked"}};function Ht(e){const[t,a]=String(e||"00:00").split(":").map(Number);return(t||0)*60+(a||0)}function Is(e,t,a){if(!t||!a)return!1;const n=Ht(t),o=Ht(a);return o<=n?e>=n||e<=o:e>=n&&e<=o}function eo(){const e=T.calendar.weekday,t=Math.max(0,Ee.indexOf(e)),a=E.watching||null,n=V.map(i=>{const r=_[i.name].stream||{},c=r.schedule||{start:"",end:"",days:[],note:""},p=c.days||[],f=p.includes(e),m=Is(Ht(T.time.clock),c.start,c.end),y=f?r.live?m?"live":"unplanned":m?"off":"booked":r.live?"unplanned":null,g=Ee.map((d,u)=>{const S=p.includes(d),b=u===t,l=S||b&&!!r.live,v=b?y:S?"booked":null,$=u>0&&p.includes(Ee[u-1]),j=u<Ee.length-1&&p.includes(Ee[u+1]);return{day:d,isToday:b,planned:S,active:l,state:v,joinsPrevious:l&&$,joinsNext:l&&j}});return{name:i.name,romaji:i.romaji,theme:i.theme,start:c.start||"",end:c.end||"",note:c.note||"",startMinutes:Ht(c.start),days:g,plannedToday:f,currentState:y,live:!!r.live,title:r.live&&r.title||"",heat:r.live&&r.heat||0,watching:a===i.name}}).sort((i,r)=>i.startMinutes-r.startMinutes||i.name.localeCompare(r.name,"zh-CN")),o=n.filter(i=>i.days[t]?.active),s=n.filter(i=>i.live);return{weekday:e,clock:T.time.clock,now:T.time.period,dayIndex:t,days:Ee.map((i,r)=>({day:i,isToday:r===t})),rows:n,today:o,liveNow:s}}const Wa=[{icon:"mail",label:"Gợi ý sự kiện",page:"events",get badge(){return He.length>0}},{icon:"memo",label:"Túi đồ",page:"inventory"},{icon:"mapPin",label:"Bản đồ",page:"map"},{icon:"phone",label:"Điện thoại",page:"phone"}],to=[{icon:"calendar",label:"Lịch phát sóng",short:"Lịch live",page:"schedule",note:"Lịch phát sóng của các streamer trong tuần"},{icon:"arcade",label:"Khu trò chơi",short:"Arcade",page:"arcade",note:"Vé cào, máy xèng, bắn cá, cầu nguyện"},{icon:"shop",label:"Cửa hàng xu",short:"Cửa hàng",page:"shop",note:"Đổi xu trò chơi lấy vật phẩm"},{icon:"gallery",label:"Thư viện CG",short:"CG",page:"cg",note:"Xem lại các cảnh CG đã mở khóa"},{icon:"gear",label:"Cài đặt chung",short:"Cài đặt",page:"settings",note:"Cách neo HUD, nút mở túi đồ, hiệu năng"}],Ds=`${Ha}gifts`,oa=["Hầu như không","Thỉnh thoảng","Khá cao","Gần như chắc chắn"],Fs=[{slug:"gift-heart",name:"Tim nhỏ",price:0,group:"Miễn phí",hue:344,notice:0,favor:[0,1],note:"Đổi từ thời lượng xem, số lượng có hạn. Thuần túy bày tỏ thái độ."},{slug:"gift-snack",name:"Que cay",price:1,group:"Giá rẻ",hue:22,notice:0,favor:[0,1],note:"Mức giá khởi điểm để spam số lượng. Tặng lẻ không tạo được tiếng vang."},{slug:"gift-cheers",name:"Cạn ly",price:20,group:"Giá rẻ",hue:196,notice:1,favor:[0,1],note:"Đủ để được tiện miệng cảm ơn một câu, nhưng cũng có thể bị trôi mất."},{slug:"gift-blindbox",name:"Hộp mù ước nguyện",price:50,group:"Tầm trung",hue:262,notice:1,favor:[0,2],random:!0,note:"Mở ngẫu nhiên, có cơ hội trúng quà giá trị cao — hiệu quả không thể đoán trước."},{slug:"gift-letter",name:"Thư tình",price:100,group:"Tầm trung",hue:340,notice:2,favor:[1,3],note:"Món quà có xác suất được đọc ID cao nhất trong cùng tầm giá: ý nghĩa rõ ràng hơn giá tiền."},{slug:"gift-plane",name:"Máy bay nhỏ",price:200,group:"Giá cao",hue:208,notice:2,favor:[1,3],banner:!0,note:"Kích hoạt hiệu ứng bay ngang màn hình phòng phát sóng."},{slug:"gift-tower",name:"Tòa nhà chọc trời",price:520,group:"Giá cao",hue:44,notice:2,favor:[1,3],banner:!0,note:"Kích hoạt hiệu ứng bay ngang màn hình phòng phát sóng."},{slug:"gift-rocket",name:"Tên lửa",price:1288,group:"Đỉnh cấp",hue:8,notice:3,favor:[2,3],banner:!0,note:"Thông báo toàn nền tảng, gần như chắc chắn được gọi tên ID và nhận lời cảm ơn riêng."}],Gs=[{slug:"gift-guard-1",name:"Hạm trưởng",price:138,rank:1,hue:200,note:"Hạng khởi đầu. Danmaku sẽ được ưu tiên nhìn thấy."},{slug:"gift-guard-2",name:"Đề đốc",price:1998,rank:2,hue:44,note:"Hạng trung. ID sẽ thực sự được ghi nhớ và được gọi tên khi lên sóng."},{slug:"gift-guard-3",name:"Tổng đốc",price:19998,rank:3,hue:280,note:"Hạng cao nhất. Cô ấy sẽ đặc biệt quan tâm cảm xúc của bạn trong khuôn khổ nền tảng."}],sa=30,Hs=[["Thông thường",["Miễn phí","Giá rẻ","Tầm trung"]],["Cao cấp",["Giá cao","Đỉnh cấp"]]];function Xa(){const e=Hs.map(([t,a])=>({label:t,kind:"gift",items:Fs.filter(n=>a.includes(n.group))})).filter(t=>t.items.length);return e.push({label:"Đại hàng hải",kind:"guard",items:Gs.map(t=>({...t,guard:!0,group:"Đại hàng hải"}))}),e}function Va(e){return{label:e.group,hue:e.hue,src:`${Ds}/${e.slug}.png`,fallback:null,tilt:0,scale:1,set:0,placing:0}}function ra(e){const a=!!_[e]?.stream?.live,n=E.companion===e;return{live:a,near:n,any:a||n,primary:n?"private":a?"stream":null,reason:a||n?"":"Chưa phát sóng · Không ở bên cạnh"}}function Ca(e){return e.near&&e.live?"Tặng quà / Donate":e.near?"Tặng quà":e.live?"Donate":"Tặng quà"}function Ut(e,t,a,{qty:n=1,remark:o=""}={}){if(e==="guard")return`[Gia nhập hạm đội] Bạn đã trở thành ${a.name} của ${t} (${sa} ngày).`;if(e==="stream")return`Tiêu费 ${a.price*n}, tặng ${n} ${a.name}`.replace("Tiêu费","Tiêu phí");const s=o?`, và nói: 「${o}」`:".";return`${a.name} số lượng -${n}\nBạn đã đưa 「${a.name}」 cho ${t}${s}`}function ao(e,t,a,{qty:n=1,remark:o=""}={}){const s={scene:e,target:t,item:a.name,qty:n,remark:o};return e==="private"?{...s,category:a.category,bucket:a.bucket,description:a.description,cost:0}:{...s,category:a.group,bucket:e,cost:a.price*(e==="guard"?1:n),notice:oa[a.notice??0]??null}}function no(e,t,a){if(t==="private"){const o=St().flatMap(s=>s.items).find(s=>s.name===a);return o?{scene:"private",gift:o}:null}const n=Xa().flatMap(o=>o.items).find(o=>o.slug===a);return n?{scene:n.guard?"guard":"stream",gift:n}:null}function cn(e,t,a,{qty:n=1,remark:o=""}={}){const s=no(e,t,a);if(!s)return null;const{scene:i,gift:r}=s;return{...s,message:Ut(i,e,r,{qty:n,remark:o}),payload:ao(i,e,r,{qty:n,remark:o})}}const Us={东雪莲:"Azuma Seren","Đông Tuyết Liên":"Azuma Seren",塔菲:"Taffy",永雏塔菲:"Taffy","Ace Taffy":"Taffy",沙花叉:"Sakamata",沙花叉克萝伊:"Sakamata","Sakamata Chloe":"Sakamata",时雨羽衣:"Shigure Ui",红蔷薇:"Hồng Tường Vi",斯黛拉:"Stella",伊贺栖寅:"Stella","斯黛拉（伊贺栖寅）":"Stella","Iga Sutora":"Stella",璃亚梦:"Riamu",梦见璃亚梦:"Riamu","Yumemi Riamu":"Riamu",兔子洞初音:"Miku Rabbit Hole",神乐七奈:"Kagura Nana",鲸鱼娘:"Bé Cá Voi",DeepSeek娘:"Bé Cá Voi",DeepSeek:"Bé Cá Voi",牛肉:"Neuro","Neuro-sama":"Neuro",Neuro:"Neuro"},ja=new Set;let dn="";function et(e){return ja.add(e),()=>ja.delete(e)}function oo(e,{notify:t=!0}={}){const a=e&&typeof e=="object"?e:{},n=Math.max(0,Math.floor(D(a["Phiên bản"]??a.版本,0)));fe.版本=Ea;const o=(a["Thống kê"]||a.统计)&&typeof(a["Thống kê"]||a.统计)=="object"?(a["Thống kê"]||a.统计):{},gMap={"刮刮乐":"Thẻ cào","幸运机":"Máy may mắn","捕鱼":"Bắn cá"},fMap={"结算次数":"Số lần kết toán","中奖次数":"Số lần trúng thưởng","最高倍率":"Hệ số cao nhất","累计返奖":"Tổng thưởng tích lũy","旋转次数":"Số lần quay","捕获次数":"Số lần bắt được","清屏次数":"Số lần dọn sạch màn hình"};for(const[s,i]of Object.entries(fe.统计)){const r=(o[gMap[s]]||o[s])&&typeof(o[gMap[s]]||o[s])=="object"?(o[gMap[s]]||o[s]):{};for(const c of Object.keys(i))i[c]=Math.max(0,D(r[fMap[c]]??r[c],0))}const ul=a["Đã mở khóa"]||a.已解锁,ac=a["Đã đạt được"]||a.已达成;if(fe.已解锁=ul&&typeof ul=="object"?{...ul}:{},fe.已达成=ac&&typeof ac=="object"?{...ac}:{},n<Ea)for(const s of Ms)D(fe.统计[s.game]?.[s.field])>=s.target?(fe.已达成[s.id]=!0,fe.已解锁[s.unlock]=!0):(delete fe.已达成[s.id],delete fe.已解锁[s.unlock]);return t&&Za(),fe}function _s(e){const t=Math.max(0,Math.round(D(e)));return t===Math.round(D(E.money))?!1:(E.money=t,po(),Za(),!0)}function Za(){ja.forEach(e=>{try{e()}catch(t){console.warn("[hud] live",t)}})}function $t(e){if(e==null)return null;const t=String(e).trim();return!t||t==="null"||t==="无"?null:Us[t]||_t(t)}function je(e,t){if(!e||typeof e!="object")return null;if(e[t])return e[t];for(const[a,n]of Object.entries(e))if($t(a)===t)return n;return null}function D(e,t=0){const a=Number(e);return Number.isFinite(a)?a:t}function _t(e){return String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function I(e,t=""){if(e==null)return t;const a=String(e).trim();return a?_t(a):t}function Ys(e){const t=String(e||"").match(/(\d+)\s*月\s*(\d+)\s*日/);return t?`${t[1]}月${t[2]}日`:I(e)}function so(e){let t=2166136261;for(const a of String(e||""))t^=a.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}const qa=Object.freeze({"Bé Cá Voi":{theme:"whale"},鲸鱼娘:{theme:"whale"},Neuro:{theme:"neuro"},牛肉:{theme:"neuro"}});function ro(e){return Object.hasOwn(qa,e)?qa[e].theme:Ta[so(e)%Ta.length]}function io(e,t){const a=String(e?.["Màu đại diện"]||e?.代表色||e?.主题色||"").trim().toLowerCase();return Ta.includes(a)?a:ro(t)}function lo(e,t=ro(e)){if(Object.hasOwn(qa,e))return Wn(e);const a={rose:["#48152d","#f45b9f"],ice:["#123849","#57d8ff"],violet:["#291842","#a879ff"],gold:["#453314","#ffd56a"],crimson:["#471522","#ff5a73"],scarlet:["#492115","#ff8b52"],candy:["#173d36","#61e0b4"]}[t]||["#242438","#9b82ff"],n=String(e||"Streamer"),o=Array.from(n)[0]||"S",s=`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1080" viewBox="0 0 720 1080">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${a[0]}"/><stop offset="1" stop-color="${a[1]}"/></linearGradient></defs>
    <rect width="720" height="1080" fill="url(#g)"/><circle cx="360" cy="400" r="210" fill="rgba(255,255,255,.12)"/>
    <text x="360" y="470" text-anchor="middle" font-size="250" font-family="sans-serif" fill="rgba(255,255,255,.88)">${o}</text>
    <text x="360" y="840" text-anchor="middle" font-size="66" font-family="sans-serif" fill="white">${n}</text>
    <text x="360" y="910" text-anchor="middle" font-size="30" letter-spacing="9" font-family="sans-serif" fill="rgba(255,255,255,.66)">STREAMER</text>
  </svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(s)}`}function co(e,t){const a=String(e||"").trim();if(/^data:image\/(?:png|jpe?g|webp|gif|avif);base64,/i.test(a))return _t(a);try{const n=new URL(a);if(n.protocol==="https:"||n.protocol==="http:")return _t(n.href)}catch{}return t}function zs(){return Object.fromEntries(Ke.map(([e])=>[e,0]))}function Fe(){return Object.fromEntries(Ue.map(([e])=>[e,0]))}function Ka(e,t=null){const a=t||{start:"",end:"",days:[],note:""},n=String(e?.["Lịch phát sóng"]||e?.档期||e?.["Khung giờ phát sóng"]||e?.常用直播时间||"").trim(),o=n.match(/(\d{1,2}:\d{2})\s*(?:–|—|-|~|至|到)\s*(?:次日\s*)?(\d{1,2}:\d{2}|24:00)/),s=o?o[1].padStart(5,"0"):a.start||"",i=o?o[2]==="24:00"?"00:00":o[2].padStart(5,"0"):a.end||"",r=Ee.filter(p=>n.includes(p)),c=r.length?r:Array.isArray(a.days)&&a.days.length?a.days:s&&i?[...Ee]:[];return{start:s,end:i,days:c,note:I(n,a.note||(s&&i?"Khung giờ cố định":"Không cố định"))}}function Ws(e,t,a){const n=io(t,e),o=t?.["Ảnh bìa"]||t?.封面||je(a?.characterCovers,e),s=t?.["Nghệ danh Streamer"]??t?.["Nghệ danh"]??t?.主播网名??t?.网名??je(a?.characterHandles,e),i={name:e,romaji:I(s,"CUSTOM"),theme:n,ornament:so(e)%4===0?"star":"sparkle",art:co(o,lo(e,n)),artFx:.5,artFy:.22,artZ:1.08,artOx:0,artTx:.3,artTy:.36,bond:{favor:0,obedience:0,mood:"Bình tĩnh"},physiology:{desire:0,stamina:100,bladder:0,statuses:[]},experience:zs(),development:Fe(),developmentProgress:Fe(),developmentToday:Fe(),developmentNotes:{},partArts:Xn(t),location:{area:"",place:"",privacy:0},fan:se(),stream:{live:!1,title:"",heat:0,followers:0,schedule:Ka(t)},custom:!0};return ta.set(e,i),i}function Xs(e,t,a){if(!e.custom)return;e.theme=io(t,e.name);const n=t?.["Nghệ danh Streamer"]??t?.["Nghệ danh"]??t?.主播网名??t?.网名??je(a?.characterHandles,e.name);n!=null&&String(n).trim()&&(e.romaji=I(n,e.romaji||"CUSTOM"));const o=t?.["Ảnh bìa"]||t?.封面||je(a?.characterCovers,e.name);e.art=co(o,lo(e.name,e.theme)),e.partArts=Xn(t),e.stream.schedule=Ka(t,e.stream.schedule)}const Na=[],pn=new Map;function Vs(e){Object.keys(e).forEach(t=>{const a=$t(t);!a||pn.has(a)||(pn.set(a,Na.length),Na.push(a))})}function Zs(e,t,a){if(!e||typeof e!="object"||Array.isArray(e))return;Vs(e);const n=new Set(Object.keys(e).map($t).filter(Boolean)),o=[];Na.forEach(s=>{if(!n.has(s))return;const i=je(t,s)||{},r=ta.get(s)||Ws(s,i,a);r.stream.schedule=Ka(i,r.stream.schedule),Xs(r,i,a),o.push(r)}),o.length&&Ne.splice(0,Ne.length,...o)}function Ks(e){return!e||typeof e!="object"||Array.isArray(e)?[]:Object.entries(e).map(([t,a])=>{if(!a||typeof a!="object")return null;const n=String(a.名称||"").trim(),o=String(a.底板||"").trim(),s=Array.isArray(a.区内坐标)?a.区内坐标.map(Number):[];if(!t||!n||!o||s.length<2||!s.every(Number.isFinite))return null;const i=Array.isArray(a.别名)?a.别名.map(f=>String(f||"").trim()).filter(Boolean):[],r=Array.isArray(a.开放时段)?a.开放时段.map(f=>String(f||"").trim()).filter(Boolean):[],c=Array.isArray(a.特殊)?a.特殊.map(f=>String(f||"").trim()).filter(Boolean):[],p=a.功能&&typeof a.功能=="object"?a.功能:{};return{id:String(t),name:n,aliases:i,district:String(a.区域||"").trim(),plate:o,localPos:[Math.max(0,Math.min(1,s[0])),Math.max(0,Math.min(1,s[1]))],anchorId:String(a.锚点||"").trim(),anchorName:String(a.锚点名称||"").trim(),accessKm:Math.max(0,Number(a.接驳距离)||0),archetype:String(a.类型||"living").trim()||"living",privacy:Math.max(0,Math.min(5,Math.round(Number(a.私密度)||0))),openHours:r.length?r:["朝","昼","暮","夜","深夜"],detail:String(a.详情||a.简介||"").trim(),intro:"",draw:String(a.地图简介||a.看点||"").trim(),special:c,features:{canGather:!!p.可采集,canDate:!!p.可约会,canWork:!!p.可工作,hasShop:!!p.有商店},createdAt:String(a.创建时间||"").trim(),custom:!0}}).filter(Boolean)}function ba(e,t){return!e||typeof e!="object"||Array.isArray(e)?[]:Object.values(e).filter(a=>a&&typeof a=="object").map(a=>{const n={name:I(a['Tên']??a.名称),category:I(a['Phân loại']??a.类别,"Khác"),quantity:D(a['Số lượng']??a.数量,0),description:I(a['Mô tả']??a.描述),rarity:I(a['Phẩm cấp']??a.品级)};return t==="materials"&&(n.source=I(a['Nguồn gốc']??a.来源)),t==="consumables"&&(n.potency=D(a['Cường độ']??a.强度,1)),t==="goods"&&(n.worn=!!(a['Đang đeo']??a.佩戴)),n.name===Qe&&(n.description=Ss),n}).filter(a=>a.name)}function Js(e){const t={};return!e||typeof e!="object"||Object.entries(e).forEach(([a,n])=>{!n||typeof n!="object"||(t[a]={name:I(n['Tên']??n.名称,a),area:I(n['Khu vực']??n.区域),tenure:I(n['Quyền sở hữu']??n.产权),desc:I(n['Mô tả']??n.描述)})}),t}function Qs(e){return!e||typeof e!="object"?[]:Object.entries(e).map(([t,a])=>typeof a=="string"?{id:t,area:"",place:"",title:t,category:"Đời thường",priority:50,status:"Chờ xử lý",conditions:{},summary:a,notice:!0}:{id:t,area:I(a?.['Khu vực']??a?.区域),place:I(a?.['Địa điểm']??a?.场所),title:I(a?.['Tiêu đề']??a?.标题,t),category:a?.['Phân loại']??a?.分类??"Đời thường",priority:D(a?.['Độ ưu tiên']??a?.优先级,0),status:I(a?.['Trạng thái']??a?.状态,"Chờ kích hoạt"),conditions:(a?.['Điều kiện']??a?.条件)&&typeof(a?.['Điều kiện']??a?.条件)=="object"?(a?.['Điều kiện']??a?.条件):{},summary:I(a?.['Tóm tắt']??a?.简述)})}function po(){const e=new Set(Ne.map(o=>o.name)),t=Ne.map((o,s)=>{o.custom=!Zn.has(o.name);const i=V.find(f=>f.name===o.name),r=Kn(o),c=i?Object.assign(i,r):r,p=_[o.name];return p?Object.assign(p,Pa(o,s)):_[o.name]=Pa(o,s),c});V.splice(0,V.length,...t),Object.keys(_).forEach(o=>{e.has(o)||delete _[o]});const a=D(E.money),n=D(E.work?.daily);ht.stats[0].value=a.toLocaleString("en-US"),ht.stats[0].sub.pill=`+${n.toLocaleString("en-US")}`,ht.stamina.value=D(E.stamina)}function er(e,t={}){const wInfo=e?.['Thông tin thế giới']||e?.世界信息;if(!e||typeof e!="object"||!wInfo)return!1;let a="";try{a=JSON.stringify([e,t])}catch{a=""}if(a&&a===dn)return!1;dn=a;const n=wInfo||{},o=n['Hiển thị ngày']||n.日期显示||{},s=n['Thời gian']||n.时间||{},i=n['Vị trí']||n.位置||{},sysCfg=e['Cấu hình hệ thống']||e.系统配置||{};T.calendar.full=I(n['Niên lịch']??n.年历,T.calendar.full),T.calendar.date=Ys(T.calendar.full),T.calendar.weekday=I(o['Thứ']??o.星期,T.calendar.weekday),T.calendar.season=I(o['Mùa']??o.季节,T.calendar.season),T.calendar.week=(o['Tuần trong năm']??o.年内周次)!=null?`Tuần ${D(o['Tuần trong năm']??o.年内周次)}`:T.calendar.week,T.time.clock=I(s['Đồng hồ']??s.时钟,T.time.clock),T.time.period=I(s['Buổi']??s.时段,T.time.period),T.location.area=I(i['Khu vực']??i.区域,T.location.area),T.location.place=I(i['Địa điểm']??i.场所,T.location.place),T.location.privacy=D(i['Độ riêng tư']??i.私密度,T.location.privacy),oo(sysCfg['Máy trò chơi']||sysCfg.街机,{notify:!1}),Ft.splice(0,Ft.length,...Ks((sysCfg['Bản đồ']||sysCfg.地图)?.['Điểm tự tạo']||(sysCfg['Bản đồ']||sysCfg.地图)?.自建节点));const r=e['Thông tin người chơi']||e.玩家信息||{},c=r['Công việc']||r.工作||{};E.stamina=D(r['Thể lực']??r.体力,E.stamina),E.money=D(r['Tiền bạc']??r.金钱,E.money),E.companion=$t(r['Đồng hành']??r.同行),E.watching=$t(r['Phòng phát sóng hiện tại']??r.所在直播间),E.home=I(r['Nơi ở']??r.居住地,E.home);const rawJob=c['Nghề nghiệp']??c.职业,rawPlace=c['Địa điểm']??c.地点;E.work.job=rawJob==null||rawJob===""?null:I(rawJob),E.work.place=rawPlace==null||rawPlace===""?null:I(rawPlace),E.work.daily=D(c['Thu nhập ngày']??c.日收入,0),E.work.workedToday=!!(c['Hôm nay đã đi làm']??c.今日已上班),E.property=Js(r['Bất động sản']||r.房产);const p=r['Túi đồ']||r.背包||{};E.inventory.materials=ba(p['Nguyên liệu']||p.素材,"materials"),E.inventory.consumables=ba(p['Vật phẩm tiêu hao']||p.消耗品,"consumables"),E.inventory.goods=ba(p['Đồ dùng']||p.用品,"goods"),js();const f=Qs(n['Gợi ý sự kiện']||n.事件提示);He.length=0,He.push(...f);const m=e['Thông tin đối tượng']||e.对象信息||{},y=r['Thân phận fan']||r.粉丝身份||{},g=sysCfg['Phòng phát sóng']||sysCfg.直播间||{},d=(sysCfg['Kiểm soát tiến độ']||sysCfg.进展控制)?.['Đối tượng']||(sysCfg['Kiểm soát tiến độ']||sysCfg.进展控制)?.对象||{};return Zs(m,g,t),Ne.forEach(u=>{const S=je(m,u.name);if(S){const l=S['Ràng buộc']||S.羁绊||{};u.bond.favor=D(l['Độ hảo cảm']??l.好感度,u.bond.favor),u.bond.obedience=D(l['Độ thuận tùng']??l.顺从度,u.bond.obedience),u.bond.mood=I(l['Tâm trạng']??l.心情,u.bond.mood);const v=S['Vị trí']||S.位置||{};u.location.area=I(v['Khu vực']??v.区域,u.location.area),u.location.place=I(v['Địa điểm']??v.场所,u.location.place),u.location.privacy=D(v['Độ riêng tư']??v.私密度,u.location.privacy);const $=S['Sinh lý']||S.生理||{};u.physiology.desire=D($['Độ ham muốn']??$.性欲度,u.physiology.desire),u.physiology.stamina=D($['Thể lực']??$.体力,u.physiology.stamina),u.physiology.bladder=D($['Buồn tiểu']??$.尿意,u.physiology.bladder);const rawAb=$['Trạng thái bất thường']??$.异常状态,j=Array.isArray(rawAb)?rawAb:rawAb&&typeof rawAb=="object"?Object.keys(rawAb):[];u.physiology.statuses=j.map(R=>I(R)).filter(Boolean);const L=S['Kinh nghiệm tình dục']||S.性经历||{};Ke.forEach(([R,U,K])=>{const P=L[U]??(K?L[K]:null);P!=null&&(u.experience[R]=D(P?.['Số lần']??P?.次数??P,u.experience[R]))});const M=S['Độ khai phá']||S.开发度||{};u.developmentProgress||=Fe(),u.developmentToday||=Fe();const dObj=je(d,u.name),H=dObj?.['Độ khai phá']||dObj?.开发度||{};Ue.forEach(([R,U,K])=>{const P=M[U]||(K?M[K]:null)||M[R],W=P&&typeof P=="object",J=W?(P['Cấp bậc']??P.档位):P;J!=null&&(u.development[R]=D(J,u.development[R])),W&&(P['Tiến độ']??P.进度)!=null&&(u.developmentProgress[R]=D(P['Tiến độ']??P.进度,u.developmentProgress[R]));const hPart=H[U]||(K?H[K]:null)||H[R]||{},me=hPart['Tiến độ tích lũy trong ngày']??hPart.当日累计进度;u.developmentToday[R]=D(me,0),u.developmentNotes||(u.developmentNotes={}),W&&typeof(P['Đánh giá']??P.评语)=="string"&&(u.developmentNotes[R]=I(P['Đánh giá']??P.评语))});const N=S['Phát sóng']||S.直播||{};u.stream.live=!!(N['Đang phát sóng']??N.开播),u.stream.title=I(N['Tiêu đề']??N.标题),u.stream.heat=D(N['Độ nóng']??N.热度,0),u.stream.followers=D(N['Số người hâm mộ']??N.粉丝数,u.stream.followers||0)}const b=je(y,u.name);b?(u.fan=se({follow:!!(b['Theo dõi']??b.关注),tipped:D(b['Tổng donate']??b.累计打赏),tier:I(b['Hạng huy hiệu']??b.牌子档位,"Không"),days:D(b['Số ngày huy hiệu còn lại']??b.牌子剩余天数),mod:!!(b['Quản trị viên']??b.房管),muted:!!(b['Đang bị cấm chat']??b.禁言中),muteDays:D(b['Số ngày cấm chat còn lại']??b.禁言剩余天数)}),(b['Cấp huy hiệu']??b.牌子等级)!=null&&(u.fan.badge=D(b['Cấp huy hiệu']??b.牌子等级,u.fan.badge))):u.fan=se()}),po(),Za(),!0}const Ja="glass-hud-prefs",ia={inventoryOpen:"drawer",dockDefault:"page",performanceMode:"auto"},uo={inventoryOpen:[["drawer","Ngăn kéo dưới"],["page","Mở toàn trang"]],dockDefault:[["page","Khớp chiều rộng"],["embedded","Thu gọn trong khung"]],performanceMode:[["auto","Hiệu ứng đầy đủ"],["low","Tải nhẹ"]]},mt={...ia};try{const e=JSON.parse(localStorage.getItem(Ja)||"{}");for(const[t,a]of Object.entries(e)){const n=uo[t];t in ia&&(!n||n.some(([o])=>o===a))&&(mt[t]=a)}}catch{}const Ra=new Set(Object.keys((()=>{try{return JSON.parse(localStorage.getItem(Ja)||"{}")}catch{return{}}})()).filter(e=>e in ia));function tr(e){return Ra.has(e)}const Oa=new Set;function la(e){return mt[e]}function fo(e,t){if(!(e in ia))return;const a=mt[e]!==t,n=!Ra.has(e);if(!(!a&&!n)){mt[e]=t,Ra.add(e);try{localStorage.setItem(Ja,JSON.stringify(mt))}catch{}Oa.forEach(o=>o(e,t))}}function Qa(e){return Oa.add(e),()=>Oa.delete(e)}const en="linjiang-hud",Je=new Map;let ar=0,un=!1,ho=!1,Le={chatKey:null,epoch:0},mo=(()=>{try{return String(window.__linjiangShellVersion||"")}catch{return""}})();function nr(){return mo}let Nt=null,Ve=0;function go(e){const t=e?.stat_data||e;!t||typeof t!="object"||(Nt={statData:t,ui:e?.ui||{}},!Ve&&(Ve=requestAnimationFrame(()=>{Ve=0;const a=Nt;Nt=null,a&&er(a.statData,a.ui)})))}const Yt=(()=>{try{return document.referrer?new URL(document.referrer).origin:"*"}catch{return"*"}})();function wt(){const e=window.__linjiangMobileDirectBridge;return e&&typeof e.request=="function"?e:null}function Z(){if(wt())return!0;try{return window.parent&&window.parent!==window}catch{return!1}}function or(e){return!Z()||!e.source||e.source===window?!1:Yt==="*"||e.origin===Yt}function zt(e,t){return!e||!t?!0:Number(e.epoch||0)===Number(t.epoch||0)&&String(e.chatKey||"")===String(t.chatKey||"")}let gt=Promise.resolve(),Ge=null,Me=0,Ba=[];function Wt(e){const t=Ba;Ba=[],t.forEach(a=>a(e))}function Rt(e){const t={chatKey:e?.chatKey==null?null:String(e.chatKey),epoch:Math.max(0,Number(e?.epoch)||0)};if(!zt(t,Le)){Le=t,Me&&clearTimeout(Me),Me=0,Ge=null,Nt=null,Ve&&(cancelAnimationFrame(Ve),Ve=0),Wt(!1);for(const[a,n]of Je)n.action!=="handshake"&&(Je.delete(a),n.reject(new Error("bridge context changed")));gt=Promise.resolve()}}function ie(e,t={},a=8e3){const n=wt();if(n)return Promise.resolve().then(()=>n.request(e,t,{timeoutMs:a,context:{...Le}}));if(!Z())return Promise.reject(new Error("not embedded"));const o=++ar,s={...Le};return new Promise((i,r)=>{const c=setTimeout(()=>{Je.delete(o),r(new Error(`bridge timeout: ${e}`))},a);Je.set(o,{action:e,context:s,resolve:p=>{clearTimeout(c),i(p)},reject:p=>{clearTimeout(c),r(p)}}),window.parent.postMessage({channel:en,kind:"request",id:o,context:s,action:e,payload:t},Yt)})}function yo(){try{const e=JSON.parse(localStorage.getItem("unlocked_cg")||"{}");return e&&typeof e=="object"?e:{}}catch{return{}}}function sr(e){const t=String(e?.character||"").trim(),a=String(e?.scene||"").trim(),n=Math.max(1,Math.floor(Number(e?.count)||1));if(!t||!a)return!1;const o=yo();if((!o[t]||typeof o[t]!="object")&&(o[t]={}),(Number(o[t][a])||0)<n){o[t][a]=n;try{localStorage.setItem("unlocked_cg",JSON.stringify(o))}catch(i){console.warn("[hud] CG unlock storage",i)}}return dispatchEvent(new CustomEvent("linjiang:cg-unlock",{detail:{...e,character:t,scene:a,count:n}})),!0}function rr(e){if(!or(e))return;const t=e.data;if(!(!t||t.channel!==en)){if(t.kind==="response"){const a=Je.get(t.id);if(!a)return;if(Je.delete(t.id),t.context&&a.action==="handshake"&&Rt(t.context),t.context&&a.action!=="handshake"&&!zt(t.context,a.context)){a.reject(new Error("stale bridge response"));return}t.ok?a.resolve(t.payload):a.reject(new Error(t.error||"bridge error"));return}if(t.kind==="event"&&t.type==="context"){Rt(t.context);return}if(t.kind==="event"&&t.type==="layoutMode"){const a=t.payload?.mode==="portrait"?"portrait":"landscape";dispatchEvent(new CustomEvent("linjiang:layout-mode",{detail:{mode:a}}));return}if(t.kind==="event"&&t.type==="dockState"){const a=t.payload?.mode==="embedded"?"embedded":"page";fo("dockDefault",a);return}if(t.kind==="event"&&t.type==="snapshot"){if(t.context&&Rt(t.context),t.context&&!zt(t.context,Le))return;go(t.payload);return}if(t.kind==="event"&&t.type==="cgUnlock"){sr(t.payload);return}if(t.kind==="event"&&t.type==="autoscrollState"){ho=!!t.payload?.active;return}if(t.kind==="event"&&t.type==="hostScrollState"){if(document.documentElement.dataset.hudPerformance==="low"&&document.documentElement.dataset.hudIosScroll!=="1"){document.documentElement.classList.remove("host-scroll-active");return}const a=!!t.payload?.active;if(!a&&document.documentElement.dataset.hudTouchForwarding==="1")return;document.documentElement.classList.toggle("host-scroll-active",a)}}}async function Pe(e){const t=String(e||"").trim();return t?Z()?(await ie("sendMessage",{text:t}),!0):(console.info("[hud] sendChat (standalone)",t),!1):!1}async function bo(){return Z()?(await ie("collapseHud"),!0):!1}async function vo(){return Z()?(await ie("openPhone"),!0):(dispatchEvent(new CustomEvent("linjiang:open-phone")),!1)}async function ir(e){return Z()?ie("arcadeEvent",{event:e}):{profile:null,unlocked:[]}}async function lr(e){if(!Z())throw new Error("Mua vật phẩm chỉ khả dụng trong SillyTavern");return ie("purchaseShopProduct",{product:e})}async function cr(e){return Z()?ie("saveCustomMapNode",{node:e},3e4):(console.info("[hud] saveCustomMapNode (standalone)",e),{node:e})}async function dr(){return Z()?ie("cleanCustomMapWorldbook",{},3e4):{ok:!1,removed:0,reason:"standalone"}}async function pr(e){const t=String(e||"").trim();return t?Z()?ie("deleteCustomMapNode",{id:t},3e4):(console.info("[hud] deleteCustomMapNode (standalone)",t),!0):!1}async function $o(){return Z()?(await ie("clockIn"),!0):(console.info("[hud] clockIn (standalone)"),!1)}async function mc(e){if(!Z())throw new Error("Tạo đánh giá chỉ khả dụng trong SillyTavern");return ie("generateDevelopmentNotes",e,12e4)}async function gc(e){if(!Z())throw new Error("Khôi phục đánh giá chỉ khả dụng trong SillyTavern");return ie("restoreDevelopmentNotes",e,3e4)}async function ur(e){return Z()?ie("saveCharacterPartArt",e,3e4):{url:String(e?.url||"").trim(),standalone:!0}}function wo(e){const t={...Le};return gt=gt.then(async()=>zt(t,Le)?(await ie("patch",{patches:[{op:"replace",path:"/Thông tin người chơi/Tiền bạc",value:e}]}),!0):!1).catch(a=>(console.warn("[hud] setMoney",a),!1)),gt}function fr(e){const t=Math.max(0,Math.round(Number(e)||0));if(_s(t),!Z())return Promise.resolve(!0);Ge=t,clearTimeout(Me);const a=new Promise(n=>Ba.push(n));return Me=setTimeout(()=>{Me=0;const n=Ge;if(Ge=null,n==null){Wt(!0);return}wo(n).then(Wt)},280),a}function hr(){if(Me&&clearTimeout(Me),Me=0,Ge==null)return gt;const e=Ge;return Ge=null,wo(e).then(t=>(Wt(t),t))}let Ia=0;function ye(e,t){const a=wt();if(a){a.event?.(e,t,{context:{...Le}});return}Z()&&window.parent.postMessage({channel:en,kind:"event",context:Le,type:e,payload:t},Yt)}function mr(e){if(!Z()||document.documentElement.classList.contains("is-page-open"))return;const t=Math.round(Number(e)||0);t<1||t===Ia||(Ia=t,ye("portraitSize",{height:t}))}function Ct(e,{geometry:t="page",page:a=null,arg:n=null}={}){Z()&&(e||(Ia=0),ye("portraitPage",{open:!!e,geometry:t,page:a,arg:n}))}function gr(){try{const e=window.__linjiangRestorePage;return!e||typeof e!="object"?null:{page:e.page||null,arg:e.arg??null}}catch{return null}}let Xt=null,fn=null;function yr(e,{page:t=!1}={}){if(!Z())return;const a=!!e,n=!!t;a===Xt&&n===fn||(Xt=a,fn=n,ye("overlay",{open:a,page:n}))}function ko(e,{apply:t=!1}={}){Z()&&ye("dockDefault",{mode:e==="embedded"?"embedded":"page",apply:!!t})}function br(){if(un||(un=!0,Z()&&document.documentElement.classList.add("is-embedded"),addEventListener("message",rr),!Z()))return;const e=()=>{ie("handshake").then(l=>(l?.context&&Rt(l.context),l?.shellVersion&&(mo=String(l.shellVersion)),wt()||ko(la("dockDefault")),ie("getSnapshot"))).then(l=>go(l)).catch(l=>{console.warn("[hud] bridge",l)})},t=()=>{const l={id:null,target:null,startX:0,startY:0,lastY:0,axis:null,moved:!1,suppressClick:!1},v=()=>{try{return window.top?.document?.getElementById("chat")||null}catch{return null}},$=(M,H)=>{const N=typeof M.composedPath=="function"?M.composedPath():[M.target];for(const U of N){if(!(U instanceof Element))continue;const K=getComputedStyle(U);if(!["auto","scroll","overlay"].includes(K.overflowY)||U.scrollHeight<=U.clientHeight+1)continue;const P=U.scrollTop<=0&&H<0,W=U.scrollTop+U.clientHeight>=U.scrollHeight-1&&H>0;if(!P&&!W)return U}const R=document.getElementById("linjiang-mobile-native-root");return R&&R.scrollHeight>R.clientHeight+1?R:null},j=()=>{l.id=null,l.target=null,l.axis=null,l.moved=!1};addEventListener("pointerdown",M=>{if(!(M.pointerType!=="mouse"||M.button!==0||M.sourceCapabilities?.firesTouchEvents)){l.id=M.pointerId,l.target=M.target instanceof Element?M.target:null,l.startX=M.clientX,l.startY=l.lastY=M.clientY,l.axis=null,l.moved=!1;try{l.target?.setPointerCapture?.(M.pointerId)}catch{}}},{capture:!0,passive:!0}),addEventListener("pointermove",M=>{if(M.pointerId!==l.id||!(M.buttons&1))return;const H=M.clientX-l.startX,N=M.clientY-l.startY;if(!l.axis){if(Math.max(Math.abs(H),Math.abs(N))<6)return;l.axis=Math.abs(N)>=Math.abs(H)?"y":"x"}if(l.axis!=="y")return;const R=l.lastY-M.clientY;if(l.lastY=M.clientY,!R)return;const U=$(M,R);if(U)U.scrollTop+=R;else{if(document.documentElement.classList.contains("is-page-open"))return;{const K=v();K&&(K.scrollTop+=R)}}l.moved=!0,M.preventDefault(),M.stopPropagation()},{capture:!0,passive:!1});const L=M=>{if(M.pointerId===l.id){l.moved&&(l.suppressClick=!0);try{l.target?.releasePointerCapture?.(M.pointerId)}catch{}j()}};addEventListener("pointerup",L,{capture:!0,passive:!0}),addEventListener("pointercancel",L,{capture:!0,passive:!0}),addEventListener("click",M=>{l.suppressClick&&(l.suppressClick=!1,M.preventDefault(),M.stopPropagation())},{capture:!0,passive:!1}),addEventListener("wheel",M=>{if(M.ctrlKey||M.metaKey||M.defaultPrevented||!M.deltaY||$(M,M.deltaY)||document.documentElement.classList.contains("is-page-open"))return;const N=v();N&&(N.scrollTop+=M.deltaY,M.preventDefault())},{passive:!1})};if(wt()){t(),e();return}const a=(l,v)=>ye(l,{clientX:v.clientX,clientY:v.clientY});addEventListener("mousedown",l=>{l.button===1&&(l.preventDefault(),a("autoscrollToggle",l))},{capture:!0,passive:!1}),addEventListener("auxclick",l=>{l.button===1&&l.preventDefault()},{capture:!0,passive:!1});let n=0,o=null;addEventListener("mousemove",l=>{ho&&(o={clientX:l.clientX,clientY:l.clientY},!n&&(n=requestAnimationFrame(()=>{n=0,o&&a("autoscrollMove",o)})))},{passive:!0});let s=0;const i=l=>{if(document.documentElement.dataset.hudIosScroll==="1"){if(clearTimeout(s),s=0,l){document.documentElement.dataset.hudTouchForwarding="1",document.documentElement.classList.add("host-scroll-active");return}delete document.documentElement.dataset.hudTouchForwarding,s=setTimeout(()=>{s=0,document.documentElement.classList.remove("host-scroll-active")},180)}},r={id:null,startX:0,startY:0,lastX:0,lastY:0,axis:null,forwarding:!1,pendingY:0,pendingPoint:null,pendingGestureStart:!1,raf:0},c=(l=!1)=>{r.id=null,r.axis=null,r.forwarding=!1,l||(r.pendingY=0,r.pendingPoint=null,r.pendingGestureStart=!1,r.raf&&cancelAnimationFrame(r.raf),r.raf=0)},p=(l,v)=>{for(let $=0;$<l.length;$+=1)if(l[$].identifier===v)return l[$];return null},f=(l,v)=>{if(!(l instanceof Element)||!v)return!1;const $=document.scrollingElement||document.documentElement,j=l===$||l===document.documentElement||l===document.body;let L="";try{L=getComputedStyle(l).overflowY}catch{return!1}if(j){if(L==="hidden"||L==="clip")return!1}else if(L!=="auto"&&L!=="scroll"&&L!=="overlay")return!1;const M=Math.max(0,l.scrollHeight-l.clientHeight);return M<=1?!1:v>0?l.scrollTop<M-1:l.scrollTop>1},m=(l,v)=>{const $=typeof l.composedPath=="function"?l.composedPath():[l.target],j=new Set;for(const M of $)if(!(!(M instanceof Element)||j.has(M))&&(j.add(M),f(M,v)))return M;const L=document.scrollingElement||document.documentElement;return!j.has(L)&&f(L,v)?L:null},y=(l,v)=>!!m(l,v),g=(l,v,$=!1)=>{r.pendingY+=v,r.pendingPoint={clientX:l.clientX,clientY:l.clientY},r.pendingGestureStart||=$,!r.raf&&(r.raf=requestAnimationFrame(()=>{r.raf=0;const j=r.pendingY,L=r.pendingPoint,M=r.pendingGestureStart;r.pendingY=0,r.pendingPoint=null,r.pendingGestureStart=!1,!(!L||Math.abs(j)<.01)&&ye("touchScroll",{deltaX:0,deltaY:j,deltaMode:0,clientX:L.clientX,clientY:L.clientY,gestureStart:M})}))};addEventListener("touchstart",l=>{if(Xt||document.documentElement.classList.contains("is-page-open")||l.touches.length!==1){c();return}const v=l.touches[0];r.id=v.identifier;const $=Number.isFinite(v.screenX)?v.screenX:v.clientX,j=Number.isFinite(v.screenY)?v.screenY:v.clientY;r.startX=r.lastX=$,r.startY=r.lastY=j,r.axis=null,r.forwarding=!1},{capture:!0,passive:!0}),addEventListener("touchmove",l=>{if(r.id==null||l.touches.length!==1)return;const v=p(l.touches,r.id);if(!v)return;const $=Number.isFinite(v.screenX)?v.screenX:v.clientX,j=Number.isFinite(v.screenY)?v.screenY:v.clientY,L=$-r.startX,M=j-r.startY;if(!r.axis){if(Math.max(Math.abs(L),Math.abs(M))<6)return;r.axis=Math.abs(M)>=Math.abs(L)?"y":"x"}const H=r.lastY-j;if(r.lastX=$,r.lastY=j,r.axis!=="y"||!H||!r.forwarding&&y(l,H))return;const N=!r.forwarding;r.forwarding=!0,N&&i(!0),l.cancelable&&l.preventDefault(),g(v,H,N)},{capture:!0,passive:!1}),addEventListener("touchend",l=>{r.id==null||p(l.touches,r.id)||(r.forwarding&&ye("touchScrollEnd",{}),i(!1),c(!0))},{capture:!0,passive:!0}),addEventListener("touchcancel",()=>{r.forwarding&&ye("touchScrollEnd",{}),i(!1),c()},{capture:!0,passive:!0});const d={active:!1,axis:null,startX:0,startY:0,lastX:0,lastY:0,horizontal:null,forwarding:!1,consumed:!1,suppressClick:!1},u=l=>(typeof l.composedPath=="function"?l.composedPath():[l.target]).filter($=>$ instanceof Element),S=l=>{for(const v of u(l)){let $="";try{$=getComputedStyle(v).overflowX}catch{continue}if(($==="auto"||$==="scroll"||$==="overlay")&&v.scrollWidth>v.clientWidth+1)return v}return null},b=()=>{d.active=!1,d.axis=null,d.horizontal=null,d.forwarding=!1,d.consumed=!1};addEventListener("mousedown",l=>{!Z()||l.button!==0||l.sourceCapabilities?.firesTouchEvents||Xt||(d.active=!0,d.axis=null,d.startX=d.lastX=l.clientX,d.startY=d.lastY=l.clientY,d.horizontal=S(l),d.forwarding=!1,d.consumed=!1)},{capture:!0,passive:!0}),addEventListener("mousemove",l=>{if(!d.active||!(l.buttons&1))return;const v=l.clientX-d.startX,$=l.clientY-d.startY;if(!d.axis){if(Math.max(Math.abs(v),Math.abs($))<6)return;d.axis=Math.abs($)>=Math.abs(v)?"y":"x"}const j=d.lastX-l.clientX,L=d.lastY-l.clientY;if(d.lastX=l.clientX,d.lastY=l.clientY,d.axis==="x"){const N=d.horizontal;if(!N||!j)return;const R=N.scrollLeft;if(N.scrollLeft+=j,Math.abs(N.scrollLeft-R)<.01)return;d.consumed=!0,l.preventDefault(),l.stopPropagation();return}if(!L)return;const M=m(l,L);if(M){const N=M.scrollTop;if(M.scrollTop+=L,Math.abs(M.scrollTop-N)<.01)return;d.consumed=!0,l.preventDefault(),l.stopPropagation();return}if(document.documentElement.classList.contains("is-page-open"))return;const H=!d.forwarding;d.forwarding=!0,d.consumed=!0,l.preventDefault(),l.stopPropagation(),g(l,L,H)},{capture:!0,passive:!1}),addEventListener("mouseup",l=>{!d.active||l.button!==0||(d.forwarding&&ye("touchScrollEnd",{}),d.consumed&&(d.suppressClick=!0,l.preventDefault(),l.stopPropagation()),b())},{capture:!0,passive:!1}),addEventListener("blur",b),addEventListener("click",l=>{d.suppressClick&&(d.suppressClick=!1,l.preventDefault(),l.stopPropagation())},{capture:!0,passive:!1}),addEventListener("wheel",l=>{if(l.ctrlKey||l.metaKey||l.defaultPrevented)return;const v=typeof l.composedPath=="function"?l.composedPath():[l.target];for(const $ of v){if(!($ instanceof Element)||$===document.body)continue;const j=getComputedStyle($).overflowY;if((j==="auto"||j==="scroll")&&$.scrollHeight>$.clientHeight+1){const L=$.scrollTop<=0&&l.deltaY<0,M=$.scrollTop+$.clientHeight>=$.scrollHeight-1&&l.deltaY>0;if(!L&&!M)return}}!l.deltaY&&!l.deltaX||(l.preventDefault(),ye("wheel",{deltaX:l.deltaX,deltaY:l.deltaY,deltaMode:l.deltaMode,clientX:l.clientX,clientY:l.clientY}))},{passive:!1}),e()}const hn="linjiang-native-overlay-portal",vr=`
  :host { all:initial; color-scheme:dark; }
  *,*::before,*::after { box-sizing:border-box; }
  .linjiang-overlay-root { position:absolute; inset:0; overflow:hidden; background:#05040a; }
  .shop-layer,.cg-layer,.arcade-layer,.map-layer {
    position:absolute !important; inset:0 !important; width:100% !important; height:100% !important;
    margin:0 !important; z-index:1 !important; overflow:hidden !important;
  }
  .shop-layer { background:#0c1024; }
  .cg-layer { background:#eef2f7; }
  .arcade-layer { background:#100d17; }
  .map-layer { background:#070a14; }
  .shop-frame,.cg-frame,.arcade-frame,.map-frame {
    display:block; width:100%; height:100%; margin:0; border:0;
  }
  .shop-frame { background:#0c1024; }
  .cg-frame { background:#eef2f7; }
  .arcade-frame { background:#100d17; }
  .map-frame { background:#070a14; touch-action:none; }
  .shop-chrome,.cg-chrome,.arcade-chrome,.map-chrome {
    position:absolute; inset:0; z-index:81; pointer-events:none;
  }
  .shop-close,.cg-close,.arcade-close,.map-close {
    pointer-events:auto; position:absolute; display:grid; place-items:center;
    cursor:pointer; -webkit-tap-highlight-color:transparent; touch-action:manipulation;
    backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
  }
  .shop-close {
    right:max(12px,env(safe-area-inset-right,0px)); top:max(12px,env(safe-area-inset-top,0px));
    width:38px; height:38px; border:1px solid #dce7ff38; border-radius:12px;
    background:#202347d9; color:#fff; font:300 23px/1 system-ui,sans-serif;
    box-shadow:0 8px 24px #0008;
  }
  .cg-close,.arcade-close {
    top:max(13px,env(safe-area-inset-top,0px)); right:max(12px,env(safe-area-inset-right,0px));
    width:36px; height:36px; border-radius:11px; font:300 24px/1 system-ui,sans-serif;
  }
  .arcade-close {
    border:1px solid rgba(190,210,255,.22); color:rgba(226,236,255,.88);
    background:linear-gradient(168deg,rgba(44,56,100,.55),rgba(22,31,64,.68));
    box-shadow:0 8px 20px -8px rgba(2,5,16,.8),inset 0 1px 0 rgba(255,255,255,.12);
  }
  .cg-close {
    border:1px solid rgba(15,23,42,.12); color:rgba(15,23,42,.7); background:rgba(255,255,255,.86);
    box-shadow:0 8px 20px -8px rgba(15,23,42,.35),inset 0 1px 0 rgba(255,255,255,.8);
  }
  .map-close {
    top:max(16px,env(safe-area-inset-top,0px)); right:max(16px,env(safe-area-inset-right,0px));
    width:40px; height:40px; border:1px solid rgba(190,210,255,.22); border-radius:12px;
    color:rgba(226,236,255,.88); font:300 28px/1 system-ui,sans-serif;
    background:linear-gradient(168deg,rgba(44,56,100,.55),rgba(22,31,64,.68));
    box-shadow:0 8px 20px -8px rgba(2,5,16,.8),inset 0 1px 0 rgba(255,255,255,.12);
  }
`;function xo(){try{const e=window.__linjiangMobileDirectBridge;return e&&typeof e.request=="function"?e:null}catch{return null}}function $r(){if(!xo())return!1;try{return!!window.top?.document?.body&&window.top!==window}catch{return!1}}function wr(e,t){try{const a=e.getComputedStyle(t.documentElement).getPropertyValue("--tt-inset-top").trim(),n=parseFloat(a);if(Number.isFinite(n)&&n>0)return Math.round(n)}catch{}try{const a=t.createElement("div");a.style.cssText="position:fixed;left:0;top:0;width:0;height:env(safe-area-inset-top,0px);visibility:hidden;pointer-events:none",t.body.appendChild(a);const n=Math.round(a.getBoundingClientRect().height);if(a.remove(),n>0)return n}catch{}return 0}function kr(){const e=xo();if(!e)return null;let t,a;try{if(t=window.top,a=t.document,!a?.body||t===window)return null}catch{return null}try{a.getElementById(hn)?.remove()}catch{}const n=a.createElement("div");n.id=hn,n.dataset.linjiangOwner=String(e.owner||"native"),n.dataset.ttMobileSurface="none",n.style.cssText=["position:fixed","left:0","top:0","width:100vw","height:100dvh","max-width:none","max-height:none","margin:0","padding:0","border:0","display:block","overflow:hidden","background:#05040a","z-index:2147483647","pointer-events:auto","visibility:visible","opacity:1","overscroll-behavior:none","isolation:isolate"].join(";");const o=n.attachShadow({mode:"open"}),s=a.createElement("style");s.textContent=vr;const i=a.createElement("div");i.className="linjiang-overlay-root",o.append(s,i),a.body.appendChild(n);const r=()=>{try{const f=t.visualViewport,m=Math.round(f?.offsetLeft||0),y=Math.round(f?.offsetTop||0),g=Math.max(1,Math.round(f?.width||t.innerWidth||1)),d=Math.max(1,Math.round(f?.height||t.innerHeight||1)),u=Math.min(wr(t,a),Math.max(0,d-120)),S=y+u,b=Math.max(1,d-u);n.dataset.linjiangInsetTop=String(u),n.style.setProperty("left",`${m}px`,"important"),n.style.setProperty("top",`${S}px`,"important"),n.style.setProperty("width",`${g}px`,"important"),n.style.setProperty("height",`${b}px`,"important")}catch{}};r();try{t.visualViewport?.addEventListener("resize",r),t.visualViewport?.addEventListener("scroll",r),t.addEventListener("resize",r),t.addEventListener("orientationchange",r)}catch{}let c=!1;const p=()=>{if(!c){c=!0;try{t.visualViewport?.removeEventListener("resize",r),t.visualViewport?.removeEventListener("scroll",r),t.removeEventListener("resize",r),t.removeEventListener("orientationchange",r)}catch{}try{n.remove()}catch{}try{window.removeEventListener("pagehide",p)}catch{}}};try{window.addEventListener("pagehide",p,{once:!0})}catch{}return{root:i,release:p,portal:!0}}function ca(e){const t=kr();return t||{root:e||document.body,release:()=>{},portal:!1}}function So(){return Kt("shop/index.html?v=20260930-auction-daily1")}let Ot=null;function xr(){return!!Ot?.isConnected||!!document.querySelector(".shop-layer")}function Sr(){return`<div class="shop-layer" role="dialog" aria-modal="true" aria-label="Cửa hàng xu">
    <iframe class="shop-frame" src="${So()}" title="Cửa hàng xu" data-shop-frame allow="autoplay"></iframe>
    <div class="shop-chrome"><button class="shop-close" type="button" data-shop-close aria-label="Đóng cửa hàng">×</button></div>
  </div>`}function Mo(e,{onClose:t}={}){const a=ca(e||document.body),n=a.root;n.querySelectorAll(".shop-layer").forEach(f=>f.remove()),n.insertAdjacentHTML("beforeend",Sr());const o=n.querySelector(":scope > .shop-layer");Ot=o;const s=o.ownerDocument?.defaultView||window,i=o.querySelector("[data-shop-frame]"),r=()=>t?.();o.querySelector("[data-shop-close]").addEventListener("click",r),a.portal||document.documentElement.classList.add("has-shop");const c=async f=>{if(f.source!==i.contentWindow)return;const m=f.data||{};if(m.type==="airp-shop:close"){r();return}if(m.type==="airp-shop:purchase")try{const y=m.product||{},g=await lr(y);i.contentWindow?.postMessage({type:"airp-shop:purchase-result",ok:!0,price:y.price,name:y.name,item:g?.item||null},"*")}catch(y){i.contentWindow?.postMessage({type:"airp-shop:purchase-result",ok:!1,error:y?.message||"Đổi vật phẩm thất bại"},"*")}};s.addEventListener("message",c),i.addEventListener("load",()=>i.contentWindow?.postMessage({type:"airp-shop:hello"},"*"));const p=Jt(o,i,{label:"Cửa hàng",onClose:r});return()=>{p(),s.removeEventListener("message",c),o.remove(),a.release(),Ot===o&&(Ot=null),!a.portal&&!document.querySelector(".shop-layer")&&document.documentElement.classList.remove("has-shop")}}const it="linjiang-cg";function Ao(){return Kt("cg/index.html")}let Bt=null;function Mr(){return!!Bt?.isConnected||!!document.querySelector(".cg-layer")}function Ar(){return`
<div class="cg-layer" role="dialog" aria-modal="true" aria-label="Thư viện CG">
  <iframe class="cg-frame" src="${Ao()}" title="Thư viện CG" data-cg-frame></iframe>
  <div class="cg-chrome">
    <button class="cg-close" type="button" data-cg-close aria-label="Đóng Thư viện CG">×</button>
  </div>
</div>`}function Lr(){const e={};return Object.entries(_).forEach(([t,a])=>{const f=Math.max(0,Math.round(Number(a?.bond?.favor)||0)),v={"Ràng buộc":{"Độ hảo cảm":f},羁绊:{好感度:f}};e[t]=v;const cn=__toCnChar(t);if(cn)e[cn]=v}),e}function Lo(e,{onClose:t}={}){const a=ca(e||document.body),n=a.root;n.querySelectorAll(".cg-layer").forEach(y=>y.remove()),n.insertAdjacentHTML("beforeend",Ar());const o=n.querySelector(":scope > .cg-layer");Bt=o;const s=o.ownerDocument?.defaultView||window,i=o.querySelector("[data-cg-frame]");o.querySelector("[data-cg-close]").addEventListener("click",()=>t?.()),a.portal||document.documentElement.classList.add("has-cg");const r=Jt(o,i,{label:"Thư viện CG",onClose:()=>t?.()}),c=()=>{const y=Lr();try{i.contentWindow?.postMessage({type:`${it}:data`,contacts:y,bonds:y},"*"),i.contentWindow?.postMessage({type:`${it}:sync`,unlocked:yo()},"*")}catch{}},p=y=>{const g=y?.detail;if(g)try{i.contentWindow?.postMessage({type:`${it}:unlock`,unlock:g},"*")}catch{}},f=y=>{if(y.source!==i.contentWindow)return;const g=y.data?.type;if(g===`${it}:hello`){c();return}g===`${it}:close`&&t?.()};i.addEventListener("load",c),s.addEventListener("message",f),addEventListener("linjiang:cg-unlock",p);const m=et(c);return()=>{m(),r(),s.removeEventListener("message",f),removeEventListener("linjiang:cg-unlock",p),o.remove(),a.release(),Bt===o&&(Bt=null),!a.portal&&!document.querySelector(".cg-layer")&&document.documentElement.classList.remove("has-cg")}}function Eo(){return Kt("arcade/index.html?v=20260930-auction-daily1")}let It=null;function Er(){return!!It?.isConnected||!!document.querySelector(".arcade-layer")}function Tr(){return`
<div class="arcade-layer" role="dialog" aria-modal="true" aria-label="Khu trò chơi">
  <iframe class="arcade-frame" src="${Eo()}" title="Khu trò chơi"
    allow="autoplay" data-arcade-frame></iframe>
  <div class="arcade-chrome">
    <button class="arcade-close" type="button" data-arcade-close aria-label="Đóng Khu trò chơi">×</button>
  </div>
</div>`}function To(e,{onClose:t}={}){const a=ca(e||document.body),n=a.root;n.querySelectorAll(".arcade-layer").forEach(b=>b.remove()),n.insertAdjacentHTML("beforeend",Tr());const o=n.querySelector(":scope > .arcade-layer");It=o;const s=o.ownerDocument?.defaultView||window;o.querySelector("[data-arcade-close]").addEventListener("click",()=>t?.()),a.portal||document.documentElement.classList.add("has-arcade");const i=o.querySelector("[data-arcade-frame]"),r=Jt(o,i,{label:"Khu trò chơi",onClose:()=>t?.()});let c=NaN,p=!1,f=!1;const m=()=>Math.max(0,Math.round(Number(E.money)||0)),y=({force:b=!1}={})=>{if(p||f&&!b)return;const l=f&&Number.isFinite(c)?c:m();c=l;try{i.contentWindow?.postMessage({type:"airp-arcade:set-balance",balance:l},"*"),i.contentWindow?.postMessage({type:"airp-arcade:set-profile",profile:fe},"*")}catch{}};let g=Promise.resolve();const d=b=>{g=g.then(()=>ir(b)).then(l=>{l?.profile&&oo(l.profile);try{i.contentWindow?.postMessage({type:"airp-arcade:set-profile",profile:l?.profile||fe,unlocked:Array.isArray(l?.unlocked)?l.unlocked:[]},"*")}catch{}}).catch(l=>console.warn("[arcade] milestone",l))},u=b=>{if(b.source!==i.contentWindow)return;const l=b.data||{};if(l.type==="airp-arcade:hello"){y({force:!0});return}if(l.type==="airp-arcade:close"){t?.();return}if(l.type==="airp-arcade:event"){d(l.event||{});return}if(l.type!=="airp-arcade:balance")return;const v=Math.max(0,Math.round(Number(l.balance)||0));if(Number.isFinite(v)&&(f=!0,v!==c)){c=v,p=!0;try{fr(v)}finally{p=!1}}};i.addEventListener("load",()=>{y({force:!0}),o.querySelector(".arcade-chrome")?.remove()}),s.addEventListener("message",u);const S=et(()=>y());return()=>{S(),r(),s.removeEventListener("message",u),hr(),o.remove(),a.release(),It===o&&(It=null),!a.portal&&!document.querySelector(".arcade-layer")&&document.documentElement.classList.remove("has-arcade")}}const Pr={w:1672,h:941},Cr={left:23,right:1648,top:411,bottom:720,r:32},jr="M 52 390 L 307 390 A 34 34 0 0 1 331.5 400.5 A 34 34 0 0 0 356 411 L 1333 411 A 54 54 0 0 0 1381.5 380.5 A 54 54 0 0 1 1430 350 L 1603 350 A 45 45 0 0 1 1648 395 L 1648 688 A 32 32 0 0 1 1616 720 L 55 720 A 32 32 0 0 1 23 688 L 23 419 A 29 29 0 0 1 52 390 Z",qr=[{id:"tl-ear",d:"M 23 419 A 29 29 0 0 1 52 390 L 307 390",color:"rgb(236,226,240)",opacity:.96,width:2.15},{id:"main-top",d:"M 307 390 A 34 34 0 0 1 331.5 400.5 A 34 34 0 0 0 356 411 L 1333 411",color:"rgb(208,204,228)",opacity:.9,width:2},{id:"pod-rise",d:"M 1333 411 A 54 54 0 0 0 1381.5 380.5 A 54 54 0 0 1 1430 350",color:"rgb(252,244,248)",opacity:1,width:2.35},{id:"pod-top",d:"M 1430 350 L 1603 350",color:"rgb(198,176,184)",opacity:.78,width:1.85},{id:"right",d:"M 1603 350 A 45 45 0 0 1 1648 395 L 1648 688",color:"url(#rimRightGrad)",opacity:.92,width:2},{id:"bottom",d:"M 1648 688 A 32 32 0 0 1 1616 720 L 55 720 A 32 32 0 0 1 23 688",color:"rgb(255,248,250)",opacity:1,width:2.25},{id:"left",d:"M 23 688 L 23 419",color:"url(#rimLeftGrad)",opacity:.9,width:2}],Nr=[{id:"ear-corner",d:"M 23 419 A 29 29 0 0 1 52 390",color:"rgb(220, 228, 255)",width:14,opacity:.1},{id:"ear-fillet",d:"M 307 390 A 34 34 0 0 1 331.5 400.5",color:"rgb(210, 220, 255)",width:18,opacity:.12},{id:"pod-fillet",d:"M 1381.5 380.5 A 54 54 0 0 1 1430 350",color:"rgb(255, 232, 242)",width:20,opacity:.14},{id:"pod-corner",d:"M 1603 350 A 45 45 0 0 1 1648 395",color:"rgb(255, 236, 220)",width:14,opacity:.08}],Rr="M 1336 440 L 1603 440 A 45 45 0 0 1 1648 395",Or="M 462 411 A 55 55 0 0 1 517 466 L 517 663 A 55 55 0 0 1 462 718",Br={artW:144,artH:232},Ir={status:{x:23,y:390,w:494,h:328},girls:{x:517,y:390,w:1131,h:330},pod:{x:1430,y:350,w:218,h:82}},Dr={left:23,right:1648,top:94,earTop:70,levels:{ear:377,main:398,pod:337},path:"M 52 70 L 340 70 A 30 30 0 0 1 364 82 A 30 30 0 0 0 388 94 L 1618 94 A 30 30 0 0 1 1648 124 L 1648 321 A 16 16 0 0 1 1632 337 L 1430 337 A 67 67 0 0 0 1369.8 374.83 A 41 41 0 0 1 1333 398 L 356 398 A 21 21 0 0 1 340.88 391.5 A 47 47 0 0 0 307 377 L 39 377 A 16 16 0 0 1 23 361 L 23 99 A 29 29 0 0 1 52 70 Z",topPath:"M 23 99 A 29 29 0 0 1 52 70 L 340 70 A 30 30 0 0 1 364 82 A 30 30 0 0 0 388 94 L 1618 94 A 30 30 0 0 1 1648 124",bottomPath:"M 23 361 A 16 16 0 0 0 39 377 L 307 377 A 47 47 0 0 1 340.88 391.5 A 21 21 0 0 0 356 398 L 1333 398 A 41 41 0 0 0 1369.8 374.83 A 67 67 0 0 1 1430 337 L 1632 337 A 16 16 0 0 0 1648 321",rimSegments:[{id:"d-ear-top",d:"M 23 99 A 29 29 0 0 1 52 70 L 340 70",color:"rgb(240,231,244)",opacity:.96,width:2.15},{id:"d-ear-fall",d:"M 340 70 A 30 30 0 0 1 364 82 A 30 30 0 0 0 388 94",color:"rgb(250,242,248)",opacity:1,width:2.3},{id:"d-top",d:"M 388 94 L 1618 94 A 30 30 0 0 1 1648 124",color:"rgb(226,222,242)",opacity:.92,width:2.05},{id:"d-right",d:"M 1648 124 L 1648 321",color:"url(#dockRimRightGrad)",opacity:.92,width:1.9},{id:"d-br",d:"M 1648 321 A 16 16 0 0 1 1632 337",color:"rgb(248,240,244)",opacity:.96,width:2.1},{id:"d-pod-face",d:"M 1632 337 L 1430 337",color:"rgb(228,214,222)",opacity:.84,width:1.9},{id:"d-pod-notch",d:"M 1430 337 A 67 67 0 0 0 1369.8 374.83 A 41 41 0 0 1 1333 398",color:"rgb(255,250,252)",opacity:1,width:2.4},{id:"d-valley",d:"M 1333 398 L 356 398",color:"rgb(252,246,250)",opacity:.97,width:2.25},{id:"d-ear-notch",d:"M 356 398 A 21 21 0 0 1 340.88 391.5 A 47 47 0 0 0 307 377",color:"rgb(255,249,251)",opacity:1,width:2.3},{id:"d-ear-face",d:"M 307 377 L 39 377",color:"rgb(244,236,246)",opacity:.94,width:2.05},{id:"d-bl",d:"M 39 377 A 16 16 0 0 1 23 361",color:"rgb(248,242,248)",opacity:.96,width:2.1},{id:"d-left",d:"M 23 361 L 23 99",color:"url(#dockRimLeftGrad)",opacity:.9,width:1.9}],litSegments:["d-br","d-pod-face","d-pod-notch","d-valley","d-ear-notch","d-ear-face","d-bl"],hotSegments:["d-ear-notch","d-pod-notch","d-ear-fall"],convexArcs:[{id:"d-ear-corner",d:"M 23 99 A 29 29 0 0 1 52 70",color:"rgb(222,230,255)",width:15,opacity:.11},{id:"d-ear-fillet",d:"M 340 70 A 30 30 0 0 1 364 82",color:"rgb(255,236,246)",width:18,opacity:.13},{id:"d-ear-tenon",d:"M 340.88 391.5 A 47 47 0 0 0 307 377",color:"rgb(255,232,242)",width:19,opacity:.13},{id:"d-pod-tenon",d:"M 1430 337 A 67 67 0 0 0 1369.8 374.83",color:"rgb(255,236,228)",width:22,opacity:.14},{id:"d-bl-corner",d:"M 39 377 A 16 16 0 0 1 23 361",color:"rgb(226,232,255)",width:13,opacity:.1},{id:"d-br-corner",d:"M 1648 321 A 16 16 0 0 1 1632 337",color:"rgb(255,236,224)",width:13,opacity:.1}],bays:{ear:{x:47,y:126,w:264,h:235},main:{x:356,y:120,w:977,h:262},pod:{x:1378,y:132,w:246,h:189}},art:{blossom:{x:18,y:54},title:{x:118,y:66},caption:{x:250,y:82}},closeBtn:{x:1602,y:96,d:30}},Fr={left:23,right:1648,top:733,bottom:823,r_top:16,r_bot:30,path:"M 23 749 A 16 16 0 0 1 39 733 L 1632 733 A 16 16 0 0 1 1648 749 L 1648 793 A 30 30 0 0 1 1618 823 L 53 823 A 30 30 0 0 1 23 793 Z",topPath:"M 23 749 A 16 16 0 0 1 39 733 L 1632 733 A 16 16 0 0 1 1648 749",bottomPath:"M 1648 793 A 30 30 0 0 1 1618 823 L 53 823 A 30 30 0 0 1 23 793",rimSegments:[{id:"dr-tl",d:"M 23 749 A 16 16 0 0 1 39 733",color:"rgb(248,242,248)",opacity:.96,width:2.1},{id:"dr-top",d:"M 39 733 L 1632 733",color:"rgb(252,246,250)",opacity:.97,width:2.25},{id:"dr-tr",d:"M 1632 733 A 16 16 0 0 1 1648 749",color:"rgb(248,240,244)",opacity:.96,width:2.1},{id:"dr-right",d:"M 1648 749 L 1648 793",color:"url(#drawerRimRightGrad)",opacity:.92,width:1.9},{id:"dr-br",d:"M 1648 793 A 30 30 0 0 1 1618 823",color:"rgb(255,240,224)",opacity:.98,width:2.2},{id:"dr-bottom",d:"M 1618 823 L 53 823",color:"rgb(255,248,250)",opacity:1,width:2.25},{id:"dr-bl",d:"M 53 823 A 30 30 0 0 1 23 793",color:"rgb(255,246,236)",opacity:.98,width:2.2},{id:"dr-left",d:"M 23 793 L 23 749",color:"url(#drawerRimLeftGrad)",opacity:.9,width:1.9}],litSegments:["dr-tl","dr-top","dr-tr","dr-br","dr-bottom","dr-bl"],hotSegments:["dr-top"],hairSegments:["dr-tl","dr-top","dr-tr"],convexArcs:[{id:"dr-tl-corner",d:"M 23 749 A 16 16 0 0 1 39 733",color:"rgb(226,232,255)",width:13,opacity:.1},{id:"dr-tr-corner",d:"M 1632 733 A 16 16 0 0 1 1648 749",color:"rgb(255,236,224)",width:13,opacity:.1},{id:"dr-bl-corner",d:"M 53 823 A 30 30 0 0 1 23 793",color:"rgb(255,236,220)",width:20,opacity:.13},{id:"dr-br-corner",d:"M 1648 793 A 30 30 0 0 1 1618 823",color:"rgb(255,230,210)",width:21,opacity:.13}],rail:{pad:26,top:734,height:88,slotTop:745,slot:66}},Gr={cx:1648,cy:566,d:38},F={canvas:Pr,shell:Cr,shellPath:jr,rimSegments:qr,convexArcs:Nr,podFloorPath:Rr,statusPanePath:Or,cards:Br,regions:Ir,dock:Dr,drawer:Fr,nextBtn:Gr};function Hr(e){const{w:t,h:a}=F.canvas,{left:n,right:o,top:s,bottom:i}=F.shell;e.setAttribute("viewBox",`0 0 ${t} ${a}`),e.innerHTML=`
<defs>
  <clipPath id="shellClip" clipPathUnits="userSpaceOnUse">
    <path d="${F.shellPath}"/>
  </clipPath>
  <clipPath id="belowShell" clipPathUnits="userSpaceOnUse">
    <rect x="0" y="${i}" width="${t}" height="${a-i}"/>
  </clipPath>
  <!-- Side rims brighten toward the desk: measured left 170 at the ear, 246 at
       the bottom corner; right 189 at the pod, 249 at the bottom corner. -->
  <linearGradient id="rimLeftGrad" gradientUnits="userSpaceOnUse" x1="${n}" y1="${s}" x2="${n}" y2="${i}">
    <stop offset="0"   stop-color="rgb(200,204,228)" stop-opacity=".80"/>
    <stop offset=".40" stop-color="rgb(210,200,220)" stop-opacity=".88"/>
    <stop offset=".78" stop-color="rgb(240,226,230)" stop-opacity=".96"/>
    <stop offset="1"   stop-color="rgb(255,250,246)" stop-opacity="1"/>
  </linearGradient>
  <!-- Peak colour sampled every 12px down x=1648: dusty mauve where the pod meets
       the wall, warming and brightening as it drops toward the desk. -->
  <linearGradient id="rimRightGrad" gradientUnits="userSpaceOnUse" x1="${o}" y1="390" x2="${o}" y2="${i}">
    <stop offset="0"   stop-color="rgb(180,160,163)" stop-opacity=".82"/>
    <stop offset=".12" stop-color="rgb(190,166,155)" stop-opacity=".86"/>
    <stop offset=".21" stop-color="rgb(232,199,183)" stop-opacity=".92"/>
    <stop offset=".33" stop-color="rgb(243,212,205)" stop-opacity=".95"/>
    <stop offset=".58" stop-color="rgb(238,216,218)" stop-opacity=".95"/>
    <stop offset=".78" stop-color="rgb(254,242,238)" stop-opacity="1"/>
    <stop offset="1"   stop-color="rgb(255,248,246)" stop-opacity="1"/>
  </linearGradient>

  <linearGradient id="innerGlowGrad" gradientUnits="userSpaceOnUse" x1="0" y1="347" x2="0" y2="723">
    <stop offset="0"    stop-color="rgb(228,234,255)" stop-opacity=".28"/>
    <stop offset=".16"  stop-color="rgb(212,222,252)" stop-opacity=".16"/>
    <stop offset=".40"  stop-color="rgb(198,204,240)" stop-opacity=".08"/>
    <stop offset=".78"  stop-color="rgb(255,228,214)" stop-opacity=".22"/>
    <stop offset="1"    stop-color="rgb(255,236,228)" stop-opacity=".42"/>
  </linearGradient>

  <linearGradient id="podFloorGrad" gradientUnits="userSpaceOnUse" x1="1336" y1="440" x2="1648" y2="440">
    <stop offset="0"    stop-color="rgb(226,232,255)" stop-opacity="0"/>
    <stop offset=".08"  stop-color="rgb(226,232,255)" stop-opacity=".28"/>
    <stop offset=".7"   stop-color="rgb(226,232,255)" stop-opacity=".34"/>
    <stop offset="1"    stop-color="rgb(226,232,255)" stop-opacity=".18"/>
  </linearGradient>

  <filter id="glowBlur" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="2.4"/>
  </filter>
  <filter id="rimBloom" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="3.2"/>
  </filter>
  <filter id="hotBloom" x="-20%" y="-40%" width="140%" height="180%">
    <feGaussianBlur stdDeviation="5.5"/>
  </filter>
  <filter id="deskBloom" x="-10%" y="-10%" width="120%" height="500%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <filter id="cornerBloom" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="8.5"/>
  </filter>
  <filter id="hairBlur" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="1.0"/>
  </filter>
  <!-- Wide, soft scatter sitting just inside a convex arc -- the milky fog of a
       lightly ground convex lens, not a surface texture. -->
  <filter id="lensFog" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="5.5"/>
  </filter>
  <filter id="lensCore" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="2.0"/>
  </filter>
</defs>`}function mn(e={}){const t=new Set(e.skip||[]);return F.rimSegments.filter(a=>!t.has(a.id)).map(a=>{const n=e.width??a.width,o=e.opacity??a.opacity,s=e.filter?` filter="${e.filter}"`:"";return`<path d="${a.d}" fill="none" stroke="${a.color}" stroke-width="${n}" stroke-opacity="${o}" stroke-linecap="round" stroke-linejoin="round"${s}/>`}).join(`
`)}function Ur(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const o=F.rimSegments.filter(d=>d.id==="pod-rise").map(d=>`<path d="${d.d}" fill="none" stroke="${d.color}" stroke-width="7" stroke-opacity=".28" stroke-linecap="round" filter="url(#hotBloom)"/>`).join(`
`),s=F.rimSegments.find(d=>d.id==="left"),i=F.rimSegments.find(d=>d.id==="right"),r=F.rimSegments.find(d=>d.id==="bottom"),{left:c,right:p,bottom:f,r:m}=F.shell,y=`M ${c+m} ${f} A ${m} ${m} 0 0 1 ${c} ${f-m}`,g=`M ${p} ${f-m} A ${m} ${m} 0 0 1 ${p-m} ${f}`;e.innerHTML=`
<g clip-path="url(#shellClip)">
  <!-- Full-shell inner glow, but not on the title ear: a clipped stroke and
       the unclipped crisp rim sit 1px apart there and read as two outlines. -->
  ${F.rimSegments.filter(d=>d.id!=="tl-ear").map(d=>`<path d="${d.d}" fill="none" stroke="url(#innerGlowGrad)" stroke-width="10" filter="url(#glowBlur)"/>`).join(`
`)}
  <!-- Thin dark line just inside the rim reads as the glass's own thickness.  The
       bottom is excluded: there the prototype ramps up continuously into the rim
       over 18px, and a dark line there is what turns the rim into a pasted-on bar.
       The title ear and pod top are also excluded: a second stroke there is the
       double outline on those two raised corners. -->
  ${F.rimSegments.filter(d=>!["left","right","bottom","tl-ear","pod-top"].includes(d.id)).map(d=>`<path d="${d.d}" fill="none" stroke="rgba(10,14,34,.28)" stroke-width="6.5" filter="url(#hairBlur)"/>`).join(`
`)}
  ${o}
  ${mn({width:5,opacity:.18,filter:"url(#rimBloom)",skip:["left","right","bottom","tl-ear"]})}
  <!-- Inward corner bloom — light piped through the quarter-circle. -->
  <path d="${y}" fill="none" stroke="rgb(255,232,214)" stroke-width="28"
        stroke-opacity=".38" stroke-linecap="round" filter="url(#cornerBloom)"/>
  <path d="${g}" fill="none" stroke="rgb(255,226,200)" stroke-width="30"
        stroke-opacity=".40" stroke-linecap="round" filter="url(#cornerBloom)"/>
  <path d="${y}" fill="none" stroke="rgb(255,244,230)" stroke-width="11"
        stroke-opacity=".48" stroke-linecap="round" filter="url(#glowBlur)"/>
  <path d="${g}" fill="none" stroke="rgb(255,236,214)" stroke-width="11"
        stroke-opacity=".50" stroke-linecap="round" filter="url(#glowBlur)"/>
</g>
<!-- The bottom rim's halo is confined to the desk side.  Letting it spill upward
     lays a neutral white wash over the last 15px of glass, where the prototype is
     climbing in magenta -- that mismatch is what reads as a pasted-on white bar. -->
<g clip-path="url(#belowShell)">
  <path d="${r.d}" fill="none" stroke="${r.color}" stroke-width="2.6"
        stroke-opacity=".62" stroke-linecap="round" filter="url(#rimBloom)"/>
</g>
${mn({skip:["left","right","bottom"]})}
<!-- The three straight rims sit outside the clip: centred exactly on the
     silhouette, half of a clipped stroke would be eaten by the clip's own
     antialiasing. -->
<path d="${s.d}" fill="none" stroke="url(#rimLeftGrad)" stroke-width="3"
      stroke-opacity=".95" stroke-linecap="butt" transform="translate(.4 0)"/>
<path d="${i.d}" fill="none" stroke="url(#rimRightGrad)" stroke-width="1.7"
      stroke-opacity=".95" stroke-linecap="butt" transform="translate(.45 0)"/>
<path d="${r.d}" fill="none" stroke="${r.color}" stroke-width="1.9"
      stroke-opacity="1" stroke-linecap="butt" transform="translate(0 .45)"/>
<!-- Outward wrap on the two bottom corners only.  The straight bottom stays
     desk-clipped so it cannot become a white bar; the corners are allowed to
     bloom into the desk and slightly off the silhouette. -->
<path d="${y}" fill="none" stroke="rgb(255,236,220)" stroke-width="16"
      stroke-opacity=".50" stroke-linecap="round" filter="url(#cornerBloom)"/>
<path d="${g}" fill="none" stroke="rgb(255,230,210)" stroke-width="18"
      stroke-opacity=".52" stroke-linecap="round" filter="url(#cornerBloom)"/>
<path d="${y}" fill="none" stroke="rgb(255,248,240)" stroke-width="3.4"
      stroke-opacity=".95" stroke-linecap="round"/>
<path d="${g}" fill="none" stroke="rgb(255,246,236)" stroke-width="3.2"
      stroke-opacity=".95" stroke-linecap="round"/>
<g clip-path="url(#shellClip)">
  <path d="${F.statusPanePath}" fill="none" stroke="rgba(226,232,255,.20)" stroke-width="1.6"/>
  <path d="${F.podFloorPath}" fill="none" stroke="url(#podFloorGrad)" stroke-width="1.55"/>
</g>`}function _r(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const n=(F.convexArcs||[]).map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${s.width}" stroke-opacity="${s.opacity}" stroke-linecap="round" filter="url(#lensFog)"/>`).join(`
`),o=(F.convexArcs||[]).filter(s=>s.id!=="ear-corner").map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${Math.max(6,s.width*.28)}" stroke-opacity="${Math.min(.55,s.opacity*1.8)}" stroke-linecap="round" filter="url(#lensCore)"/>`).join(`
`);e.innerHTML=`<g clip-path="url(#shellClip)">${n}
${o}</g>`}const X=F.dock;function Yr(e){e.insertAdjacentHTML("beforeend",`
<defs>
  <clipPath id="dockClip" clipPathUnits="userSpaceOnUse">
    <path d="${X.path}"/>
  </clipPath>

  <!-- Side rims dim at the top of the panel and brighten toward the seam, the
       mirror of the shell's sides brightening toward the desk.  Left keeps the
       shell's cool pearl, right its dusty warm -- so at the seam each dock edge
       hands off to the shell edge directly below it in the same hue. -->
  <linearGradient id="dockRimLeftGrad" gradientUnits="userSpaceOnUse"
    x1="${X.left}" y1="${X.earTop+29}" x2="${X.left}" y2="${X.levels.ear-16}">
    <stop offset="0"   stop-color="rgb(194,198,222)" stop-opacity=".76"/>
    <stop offset=".42" stop-color="rgb(208,204,226)" stop-opacity=".84"/>
    <stop offset=".80" stop-color="rgb(234,224,236)" stop-opacity=".92"/>
    <stop offset="1"   stop-color="rgb(250,242,248)" stop-opacity=".98"/>
  </linearGradient>
  <linearGradient id="dockRimRightGrad" gradientUnits="userSpaceOnUse"
    x1="${X.right}" y1="${X.top+30}" x2="${X.right}" y2="${X.levels.pod-16}">
    <stop offset="0"   stop-color="rgb(184,170,178)" stop-opacity=".78"/>
    <stop offset=".34" stop-color="rgb(204,184,184)" stop-opacity=".85"/>
    <stop offset=".70" stop-color="rgb(230,204,198)" stop-opacity=".91"/>
    <stop offset="1"   stop-color="rgb(250,232,226)" stop-opacity=".97"/>
  </linearGradient>

  <!-- Inner glow: cool and shallow off the top edge, warm and deep off the
       underside.  Anchored to the panel, not the canvas -- the bug that made the
       shell's first bloom never reach the glass. -->
  <linearGradient id="dockGlowGrad" gradientUnits="userSpaceOnUse"
    x1="0" y1="${X.earTop}" x2="0" y2="${X.levels.main}">
    <stop offset="0"   stop-color="rgb(224,230,255)" stop-opacity=".30"/>
    <stop offset=".22" stop-color="rgb(210,218,250)" stop-opacity=".14"/>
    <stop offset=".52" stop-color="rgb(198,204,240)" stop-opacity=".07"/>
    <stop offset=".82" stop-color="rgb(255,226,226)" stop-opacity=".20"/>
    <stop offset="1"   stop-color="rgb(255,232,232)" stop-opacity=".40"/>
  </linearGradient>

  <filter id="dockSeamBloom" x="-6%" y="-140%" width="112%" height="380%">
    <feGaussianBlur stdDeviation="26"/>
  </filter>
  <filter id="dockSeamCore" x="-6%" y="-140%" width="112%" height="380%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
</defs>`)}function lt(e,t={}){return e.map(a=>{const n=t.width??a.width,o=t.opacity??a.opacity,s=t.color??a.color,i=t.filter?` filter="${t.filter}"`:"";return`<path d="${a.d}" fill="none" stroke="${s}" stroke-width="${n}" stroke-opacity="${o}" stroke-linecap="round" stroke-linejoin="round"${i}/>`}).join(`
`)}const gn=e=>X.rimSegments.filter(t=>e.includes(t.id)),zr=e=>X.rimSegments.filter(t=>!e.includes(t.id));function Wr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`),e.innerHTML=`
<g clip-path="url(#dockClip)">
  <path d="${X.bottomPath}" fill="none" stroke="rgb(255,206,196)" stroke-width="112"
        stroke-opacity=".13" stroke-linecap="round" filter="url(#dockSeamBloom)"/>
  <path d="${X.bottomPath}" fill="none" stroke="rgb(255,222,214)" stroke-width="34"
        stroke-opacity=".17" stroke-linecap="round" filter="url(#dockSeamCore)"/>
  <path d="${X.topPath}" fill="none" stroke="rgb(216,226,255)" stroke-width="46"
        stroke-opacity=".07" stroke-linecap="round" filter="url(#dockSeamBloom)"/>
</g>`}function Xr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const n=X.convexArcs.map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${s.width}" stroke-opacity="${s.opacity}" stroke-linecap="round" filter="url(#lensFog)"/>`).join(`
`),o=X.convexArcs.map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${Math.max(6,s.width*.3)}" stroke-opacity="${Math.min(.5,s.opacity*1.7)}" stroke-linecap="round" filter="url(#lensCore)"/>`).join(`
`);e.innerHTML=`<g clip-path="url(#dockClip)">${n}
${o}</g>`}function Vr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const n=gn(X.hotSegments),o=zr(X.litSegments);e.innerHTML=`
<g clip-path="url(#dockClip)">
  ${lt(X.rimSegments,{color:"url(#dockGlowGrad)",width:10,opacity:1,filter:"url(#glowBlur)"})}
  ${lt(o,{color:"rgba(10,14,34,.26)",width:6,opacity:1,filter:"url(#hairBlur)"})}
  ${lt(n,{width:7,opacity:.26,filter:"url(#hotBloom)"})}
  ${lt(gn(X.litSegments),{width:5,opacity:.16,filter:"url(#rimBloom)"})}
</g>
<!-- The crisp line sits outside the clip: centred on the silhouette, half of a
     clipped stroke is eaten by the clip's own antialiasing. -->
${lt(X.rimSegments)}
<!-- Outward bloom on the underside only, so the seam reads as a lit gap between
     two pieces rather than an outline drawn around each. -->
<path d="${X.bottomPath}" fill="none" stroke="rgb(255,238,232)" stroke-width="7"
      stroke-opacity=".30" stroke-linecap="round" filter="url(#rimBloom)"/>`}const B=F.drawer,ze=B.rail;function Zr(e){const{w:t,h:a}=F.canvas;e.insertAdjacentHTML("beforeend",`
<defs>
  <clipPath id="drawerClip" clipPathUnits="userSpaceOnUse">
    <path d="${B.path}"/>
  </clipPath>
  <!-- The bottom rim's halo is confined to the desk side, the same guard the shell
       uses: letting it spill upward lays a flat white wash over the last pixels of
       glass and turns the rim into a bar pasted on top. -->
  <clipPath id="belowDrawer" clipPathUnits="userSpaceOnUse">
    <rect x="0" y="${B.bottom}" width="${t}" height="${a-B.bottom}"/>
  </clipPath>

  <!-- Sides brighten downward, continuing the shell's own sides: the shell's left
       ends at rgb(255,250,246) and its right at rgb(255,248,246) where they meet the
       desk, so the drawer picks each up in the same hue directly below. -->
  <linearGradient id="drawerRimLeftGrad" gradientUnits="userSpaceOnUse"
    x1="${B.left}" y1="${B.top+B.r_top}" x2="${B.left}" y2="${B.bottom-B.r_bot}">
    <stop offset="0" stop-color="rgb(246,240,240)" stop-opacity=".90"/>
    <stop offset="1" stop-color="rgb(255,250,246)" stop-opacity="1"/>
  </linearGradient>
  <linearGradient id="drawerRimRightGrad" gradientUnits="userSpaceOnUse"
    x1="${B.right}" y1="${B.top+B.r_top}" x2="${B.right}" y2="${B.bottom-B.r_bot}">
    <stop offset="0" stop-color="rgb(248,234,230)" stop-opacity=".90"/>
    <stop offset="1" stop-color="rgb(255,248,246)" stop-opacity="1"/>
  </linearGradient>

  <!-- Inner glow: warm off the top, where the seam is, and warmer still off the
       bottom, where the desk bounces.  Anchored to the panel rather than the canvas,
       the bug that made the shell's first bloom never reach the glass.

       Every value here is a fraction of the shell's and the dock's, and that is the
       point rather than a preference.  Those two panels are 309 and 328 units tall,
       so an edge treatment reaches a third of the way in and leaves a body.  This one
       is 90 tall: the same numbers reach across the whole panel and there is no body
       left, which measured as a washed-out rgb(96,96,124) against the shell's
       rgb(59,68,99).  Edge light has to scale with the panel, not be copied into it. -->
  <linearGradient id="drawerGlowGrad" gradientUnits="userSpaceOnUse"
    x1="0" y1="${B.top}" x2="0" y2="${B.bottom}">
    <stop offset="0"   stop-color="rgb(255,232,226)" stop-opacity=".15"/>
    <stop offset=".40" stop-color="rgb(226,220,244)" stop-opacity=".03"/>
    <stop offset=".74" stop-color="rgb(255,226,214)" stop-opacity=".07"/>
    <stop offset="1"   stop-color="rgb(255,238,228)" stop-opacity=".19"/>
  </linearGradient>

  <filter id="drawerSeamBloom" x="-6%" y="-380%" width="112%" height="860%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
  <filter id="drawerSeamCore" x="-6%" y="-380%" width="112%" height="860%">
    <feGaussianBlur stdDeviation="5"/>
  </filter>
  <filter id="drawerSheen" x="-8%" y="-40%" width="116%" height="420%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
</defs>`)}function ct(e,t={}){return e.map(a=>{const n=t.width??a.width,o=t.opacity??a.opacity,s=t.color??a.color,i=t.filter?` filter="${t.filter}"`:"";return`<path d="${a.d}" fill="none" stroke="${s}" stroke-width="${n}" stroke-opacity="${o}" stroke-linecap="round" stroke-linejoin="round"${i}/>`}).join(`
`)}const va=e=>B.rimSegments.filter(t=>e.includes(t.id));function Kr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`),e.innerHTML=`
<g clip-path="url(#drawerClip)">
  <path d="${B.topPath}" fill="none" stroke="rgb(255,214,204)" stroke-width="32"
        stroke-opacity=".10" stroke-linecap="round" filter="url(#drawerSeamBloom)"/>
  <path d="${B.topPath}" fill="none" stroke="rgb(255,228,220)" stroke-width="11"
        stroke-opacity=".13" stroke-linecap="round" filter="url(#drawerSeamCore)"/>
  <path d="${B.bottomPath}" fill="none" stroke="rgb(255,226,208)" stroke-width="28"
        stroke-opacity=".09" stroke-linecap="round" filter="url(#drawerSeamBloom)"/>
</g>`}function Jr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const n=B.convexArcs.map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${s.width}" stroke-opacity="${s.opacity}" stroke-linecap="round" filter="url(#lensFog)"/>`).join(`
`),o=B.convexArcs.map(s=>`<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="${Math.max(6,s.width*.3)}" stroke-opacity="${Math.min(.5,s.opacity*1.7)}" stroke-linecap="round" filter="url(#lensCore)"/>`).join(`
`);e.innerHTML=`<g clip-path="url(#drawerClip)">${n}
${o}</g>`}function Qr(e){const{w:t,h:a}=F.canvas;e.setAttribute("viewBox",`0 0 ${t} ${a}`);const n=B.rimSegments.find(r=>r.id==="dr-bottom"),o=B.rimSegments.find(r=>r.id==="dr-left"),s=B.rimSegments.find(r=>r.id==="dr-right"),i=["dr-left","dr-right","dr-bottom"];e.innerHTML=`
<g clip-path="url(#drawerClip)">
  ${ct(B.rimSegments,{color:"url(#drawerGlowGrad)",width:10,opacity:1,filter:"url(#glowBlur)"})}
  ${ct(va(B.hairSegments),{color:"rgba(10,14,34,.26)",width:6,opacity:1,filter:"url(#hairBlur)"})}
  ${ct(va(B.hotSegments),{width:7,opacity:.26,filter:"url(#hotBloom)"})}
  ${ct(va(B.litSegments).filter(r=>!i.includes(r.id)),{width:5,opacity:.16,filter:"url(#rimBloom)"})}
</g>
<!-- The desk sheen: a short graze under the bottom edge, not a mirrored reflection.
     y 823 and below is where the plate's phone, pen and notepad sit, and a real
     reflection landing on those props reads as dirt.  A graze does not have to
     correspond to what is beneath it. -->
<g clip-path="url(#belowDrawer)">
  <path d="${B.bottomPath}" fill="none" stroke="rgb(255,236,224)" stroke-width="30"
        stroke-opacity=".30" stroke-linecap="round" filter="url(#drawerSheen)"/>
  <path d="${n.d}" fill="none" stroke="${n.color}" stroke-width="2.6"
        stroke-opacity=".58" stroke-linecap="round" filter="url(#rimBloom)"/>
</g>
<!-- The three straight rims sit outside the clip: centred exactly on the
     silhouette, half of a clipped stroke would be eaten by the clip's own
     antialiasing. -->
${ct(B.rimSegments.filter(r=>!i.includes(r.id)))}
<path d="${o.d}" fill="none" stroke="${o.color}" stroke-width="2.6"
      stroke-opacity=".95" stroke-linecap="butt" transform="translate(.4 0)"/>
<path d="${s.d}" fill="none" stroke="${s.color}" stroke-width="1.7"
      stroke-opacity=".95" stroke-linecap="butt" transform="translate(.45 0)"/>
<path d="${n.d}" fill="none" stroke="${n.color}" stroke-width="1.9"
      stroke-opacity="1" stroke-linecap="butt" transform="translate(0 .45)"/>`}function ei(e){const{icon:t}=e,a=e.quantity>1?`<span class="slot-qty">${e.quantity}</span>`:"",n=e.worn?'<span class="slot-worn" aria-hidden="true"></span>':"",o=e.bucket==="consumable"?` Cường độ ${e.potency}`:e.bucket==="goods"?e.worn?" Đang đeo":" Chưa đeo":` ${e.source}`;return`
      <button class="drawer-slot b-${e.bucket}${e.worn?" is-worn":""}" type="button"
        data-item="${e.name}" data-set="${t.set}" data-placing="${t.placing}"
        style="--hue:${t.hue}; --tilt:${t.tilt}deg; --scale:${t.scale}${e.bucket==="consumable"?`; --potency:${e.potency}`:""}"
        aria-label="${t.label} · ${e.name}, số lượng ${e.quantity}${o}, nhấp để xem chi tiết">
        <span class="slot-well"></span>
        ${Oe(t,"slot-icon")}
        <span class="slot-gem"></span>
        ${xt(e.bucket==="consumable"?e.potency:0)}
        ${a}${n}
      </button>`}function ti(e){return`
      <div class="drawer-div" aria-hidden="true"><i></i><span>${e}</span></div>`}function ai(){const e=St();return e.length?e.map(t=>`
    <div class="drawer-group" role="list" aria-label="${t.label}">
      ${ti(t.label)}${t.items.map(ei).join("")}
    </div>`).join(""):'<div class="drawer-empty">Túi đồ đang trống</div>'}function ni(e,{label:t,extraClass:a=""}){const n=B.left+ze.pad,o=B.right-B.left-ze.pad*2;return`
<div class="drawer-root${a?` ${a}`:""}" role="region" aria-label="${t}"
  style="--rx:${n}px; --rw:${o}px;
         --ry:${ze.top}px; --rh:${ze.height}px; --sy:${ze.slotTop}px; --sh:${ze.slot}px">
  <div class="drawer-blur"></div>
  <div class="drawer-scatter"></div>
  <div class="drawer-tint"></div>
  <div class="drawer-frost"></div>
  <div class="drawer-edge"></div>
  <svg class="drawer-underglow" aria-hidden="true"></svg>
  <svg class="drawer-lens" aria-hidden="true"></svg>

  <div class="drawer-rail">
    ${e}
  </div>
  <!-- Overflow affordance.  The scrollbar is hidden -- a 66-unit row has no height to
       spare for one -- so with nothing else the reader could not tell a full bag from
       an empty one.  These are siblings of the rail rather than children because a
       child of a scroller scrolls away with the content. -->
  <span class="drawer-more drawer-more-l" aria-hidden="true"></span>
  <span class="drawer-more drawer-more-r" aria-hidden="true"></span>

  <svg class="drawer-rim" aria-hidden="true"></svg>
</div>`}function Po(e,{label:t,extraClass:a="",body:n,onPick:o,pickSelector:s=".drawer-slot",escapeKey:i,blockedBy:r=".dev-sheet, .page-modal, .map-layer, .arcade-layer"}={}){let c=null,p=null;const f=()=>{Kr(c.querySelector(".drawer-underglow")),Jr(c.querySelector(".drawer-lens")),Qr(c.querySelector(".drawer-rim"))},m=()=>!!c,y=()=>{c&&(p?.(),p=null,c.remove(),c=null)},g=()=>{c||(xe(e,"beforeend",ni(n(),{label:t,extraClass:a})),c=e.querySelector(":scope > .drawer-root"),f(),p=S())},d=()=>{if(!c)return;p?.();const b=c.querySelector(".drawer-rail");vt(b,n()),b.scrollLeft=0,p=S()},u=()=>c?y():g();function S(){const b=c.querySelector(".drawer-rail");if(!b)return;const l=()=>{if(!c)return;const P=b.scrollWidth-b.clientWidth;c.classList.toggle("has-prev",P>2&&b.scrollLeft>2),c.classList.toggle("has-more",P>2&&b.scrollLeft<P-2)};b.addEventListener("scroll",l,{passive:!0});const v=new ResizeObserver(l);b.querySelectorAll(".drawer-group").forEach(P=>v.observe(P)),l(),b.addEventListener("wheel",P=>{const W=Math.abs(P.deltaX)>Math.abs(P.deltaY)?P.deltaX:P.deltaY;if(!W)return;const J=b.scrollLeft;b.scrollLeft+=W,b.scrollLeft!==J&&P.preventDefault()},{passive:!1});let $=null,j=!1,L=0;const M=()=>{L&&cancelAnimationFrame(L),L=0},H=()=>{const P=b.getBoundingClientRect().width;return P&&b.clientWidth?P/b.clientWidth:1};let N=0;const R=P=>{if(!N)try{b.setPointerCapture(P),N=P}catch{}},U=()=>{if(N){try{b.releasePointerCapture(N)}catch{}N=0}};b.addEventListener("pointerdown",P=>{P.pointerType!=="mouse"||P.button||(M(),b.classList.remove("is-dragging"),j=!1,$={x:P.clientX,left:b.scrollLeft,k:H(),moved:0,v:0,t:P.timeStamp})}),b.addEventListener("pointermove",P=>{if(!$)return;const W=P.clientX-$.x;if($.moved=Math.max($.moved,Math.abs(W)),$.moved<=4)return;R(P.pointerId),b.classList.add("is-dragging");const J=b.scrollLeft;b.scrollLeft=$.left-W/$.k;const me=Math.max(1,P.timeStamp-$.t);$.v=$.v*.68+(b.scrollLeft-J)/me*.32,$.t=P.timeStamp});const K=()=>{if(!$)return;const{v:P,moved:W}=$;if($=null,U(),j=W>4,!j||Math.abs(P)<.12){b.classList.remove("is-dragging");return}let J=P;const me=()=>{J*=.915;const we=b.scrollLeft;b.scrollLeft+=J*16,Math.abs(J)>.06&&Math.round(b.scrollLeft)!==Math.round(we)?L=requestAnimationFrame(me):(L=0,b.classList.remove("is-dragging"))};L=requestAnimationFrame(me)};return b.addEventListener("pointerup",K),b.addEventListener("pointercancel",K),b.addEventListener("lostpointercapture",K),b.addEventListener("click",P=>{if(j){j=!1;return}const W=P.target.closest(s);W&&!W.disabled&&o?.(W)}),()=>{v.disconnect(),M(),U()}}return i&&!e.dataset[i]&&(e.dataset[i]="1",addEventListener("keydown",b=>{b.key!=="Escape"||!c||document.querySelector(r)||y()},{capture:!0})),{open:g,close:y,toggle:u,isOpen:m,repaint:d,root:()=>c}}function oi(e,{onItem:t}={}){return Po(e,{label:"道具抽屉",body:ai,onPick:a=>t?.(a.dataset.item),escapeKey:"drawerEscapeBound",blockedBy:".dev-sheet, .page-modal, .gift-confirm, .map-layer, .arcade-layer"})}const si={src:"/assets/title-status.png",x:28,y:378,w:140,h:76},ri={src:"/assets/title-girls.png",x:546,y:392,w:116,h:76},ii={src:"/assets/blossom.png",x:482,y:362,w:82,h:90},li={statusTitle:si,girlsTitle:ri,blossom:ii},ci="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAI3klEQVR4nE1XS2wcWRU971NVbn+67XbbVjxh8iEfTYZB0QgNCxYjQGKDBFtGYscSNkjDrNkhZYOENMvZzpoFsATxk4AAkyGxxlHkxJ74M+3E7rjjbld31XsXnfvK0cRqx1VddT/nnnvufebXP/sVrHWwAIwYiOH/gPAagAjgDK/1F5zhA1G/dfwYA+F7EmEdICHCqDGr7/MZ2qQdY4x+nLWQKHDewkJvpgci3RjjYdODNEqvsYnGGovAezQWI/TrJlBHp8L3AZr1NgUYg4bOMGAtH4nqyzqjdq01Xg3RobUuj1FqGmWEfFODU3TSLw2MfxrHl/U53jH8TlIy/IBIAPCOKABODNw5grTAKAD4BDffskYEU3oNIaaSwCHGAEdHzA6G4OAVphpIypCBWP6dHuANRWE2zwpelWU9jbXAsZ5OIAFwXuBpxjm3CqASkYEa1Polw6xXQkFxh1Uck0M+y0tmFyUFxywZvfMeLetMJiaDtTPiwvPaGQQGytI0qHpmaIwcpporELAm1U6x0fuM3MEycxqwgFFojfJRoSa5CAnJZSxyZ5HB5FmIMVTh2Cub0/emTlwhCnxPs+EPnZsGQ2WskoHkSxxJ9eN1cmYkKhm9tSkAlkrJZmBDRJHZ+QvLS88nIWCvf2x8sBAJmshsK1+tBBOrraeEMbCseQgSG1Im2MlYr3DxGcfMrIWNgizU6C4U7ywvzLxXkPUMhs+zRHVEZjHbW+1ifX0V3jjEMsDDwANoGd/O6lgTTBinYGrGrPF5W7JW3tlELOUpWe2XLQTzhV2/fmVdrl26+M+ZzP/YxpCI2/CCtqaT2B8PT1GNS2QGhZWIwji0nJkJ43K3Gp6NvLLXUxhYigjjGsZrr1qtsQXFpRGQOh6xXZZ67b3XL7+G7c0tHGzvfn+uPZ90INokSKxVHabPvjh6syiyH/kYkYUAHz06C3Pfnp+f+QP9eIbNurB+qQSJ7ewEZqTJNyLDAClG1KrB0anZebIvvbUVoiJn4/EH0/H0o7Oz6jiztmBTF953wzQcV9F8nHu/2FqdXems9e6vXF7H4noXCBU8qGgkJzNX1kcVFHYHgbTOqahQAVW5PLNzGE0qPN3ZN4uLN+T2974JGY3uHO0d3nn6aP+j4YvR+1bYc5jC+7bNi26r1brZu9T77frXrkHyGRzt9DHYfUo+JJqLtl2A8Q5Rg2hgbERLGJB2g0WMFWzuMA4Rd/9z30zrUt545xZ6N9cRqslPhp8Mf+6caxdz2ZWltaW/dhaXMZlM4XOPUJZ4tvU5Nv77sFtVcUBCam+qfjiLQDI1/aftaSJCrJQXZKcGKqJzw9sMdbR48GDbSAhy841LCJMaEsJZMJLPzM3+ZuXSChaWOnj86Tb6m4fXP3+4vXo6Pt0M0Zz5vFhWfUitlpw2Sp86wQpqDo9m6jWY6PRMvQrkOf82ePz4wKCspLPcxtVvXK+8z9FZaqPVKVCZgMHx4AdlVfaD5NMoPlpn5ypIxbZMUyrQYZJTnXiqcioI6V4EMmd1hGpnkAyGCAkMkRPBsJz89OJ698P2tdeBSY3w8hTHT/YxHJygiuXJ1a9fHhqX4cnmzo3JODxBZueUAzpm2Ls0qFe2UT8qAackw+EcaKYdA9EeYe+ygyycC635zuyH7Qs9oOURX44xHo5QTivMdTu4vrb65+W3vopwMsLJ4eDu6enzRQdvPSH2qk+SZrdv4KdmpyhQC8WF5IuAZ+daRN5znIAuq6ehyp2YlbUu6hdj7N57iPbqMroX15DPz6DodSAvK+z9awP9nYP3yzL8Kc9cu4px4jUTko3wc5TpQKL6MQBmSaTpSPcFvRbVhTQVrEFmHaru4uLHswstPPpkA48f7pnrt69J98ZryF0LqAL2t3bx2d3NzATURav4SuZcO4icUlWV4YndzAyIOmoZGPeCZnKpCKSCRSqjMxkLV0/DeGF+5t3VxaUfDraPMHo5+mCp1337cPfo9u7fHqhonT0fYufe5q3CuoXeaufO4tLc73Pn2hKk9LrVNGsZzbPqadMh3E5bEzqy02oUDTj9nMonBCu9zsatt67e6i3Por91gHjcenuC8nflyfSzrft7F+qyOpBpACozbrVmr6xcXPvF/Nw8dra/2Djef2Y8s/VadwOpObOT5J7vB0maExnZHIHZiw2hqrHSW3h8+1tvXukszuPkoI+9/gBfHL58Tzies6x1Jnb06OFh21oUnBKnZ2X/+adbNvOuU8FUTTJpw1EN8Km4WhKlfmqvtAmn7F8tsFHQmpu50mkv4PjgGTb+vfWXwYvRd6LLyJ28Zg8bY2KwFaGOiLWxviDdyhBfsH2t94Xn8FaVZRls1M5iIJwF3BK4w1W0BSBjB4igrkPajCTD0eEQm/97jP7h8F2X5xz2RZBQkSoxxinJY5VQzkaJZaRjZ30AQhCZcIynsatTkcOmYb72ueiCar40L3RFdxFZK8PgZPTHf/z93i/3+wNjisJErnIEyppcUdSZbp1YOoyB442iUUusA92DNFPPzaHDN1PQOoU6LZAAB5uJTKlOe5P32hsnp2ffZYtmvvBRJEgUkUoqtqUzKmu8GQxMUIljo4UYVeAsywt4XR7kXAn19PFK81WIGFzzz3mnH5KBvnR0c/OB1CyN1Wx04UVIK27iTvM+7ekpSluOaEV4da77fCKWNU4nIh96RT7ddBsDMaKuNQDk5ApLxGcd5dtErg81BwfX9C8lk8413CvS3k6bHHaqA4ZwMaNGaHQ7fvWT9nxGWNWscFMiZ0FCGR3ogmmodX/Uw4cqaBrZhJs2SVyCabm1RkHQoxZ4MCFA1N3GeRM5I0yKSN6kzJk1b/CaCIcqnXQ4P3Tl10o3RzhmmCRE7eqeybpTaxo0U8WtKdIqhoJ6nyRR4Uy7YGNYD7GaWTq6KYPzTGcns+ZOQFSEZaGA69RkqbjQBOVOOh1zcirxUslFZEKfUWSSoj8/dp0LVDoPpJNwc2I2BkEMqqrWa3ZLpVtSOp7XVa1BsN7cLeiQz1LdtRwVz7+J3P8H5pAObUuXbKIAAAAASUVORK5CYII=";function di(){return ci}function Co(){return`<img src="${di()}" alt="" draggable="false">`}const pi="modulepreload",ui=function(e,t){return new URL(e,t).href},yn={},jo=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){let p=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const i=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),c=r?.nonce||r?.getAttribute("nonce");o=p(a.map(f=>{if(f=ui(f,n),f in yn)return;yn[f]=!0;const m=f.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(n)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===f&&(!m||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${y}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":pi,m||(g.as="script"),g.crossOrigin="",g.href=f,c&&g.setAttribute("nonce",c),document.head.appendChild(g),m)return new Promise((d,u)=>{g.addEventListener("load",d),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return o.then(i=>{for(const r of i||[])r.status==="rejected"&&s(r.reason);return t().catch(s)})},fi={src:"/assets/dock-blossom.png",w:65,h:53},hi={src:"/assets/mark-sakura.png",w:34,h:35},mi={src:"/assets/title-heroine.png",w:121,h:43},qo={dockBlossom:fi,markSakura:hi,heroineTitle:mi},No={东雪莲:{vagina:["隐藏在蓝紫色洛丽塔短裙与安全裤之下、近期完全没有性经历的紧闭私处。骨架娇小使得两瓣软肉严丝合缝地闭拢着，入口紧闭如常，看不出近期被进入过的痕迹。平日里除了洗澡更衣，注意力全在编曲作词、打游戏甩锅以及高强度在群里跟人对线上。就算生理期前后偶有燥热，也只当是房间空调温度没开对，对男女之间的实际交媾连半点探究的兴趣都没有。","仅被纤细指尖浅浅试探过边缘的小穴。近期仍没有实质性交合的痕迹，内部狭窄得稍有触碰就会本能地紧缩排斥。在独处时哪怕出于烦躁或好奇摸到了一点水汽，手指稍微往里探进半个指节带来的酸胀异样，也会让她立刻皱着眉头把手抽出来，一边抽纸巾擦拭一边骂骂咧咧地把手机划到搞笑视频上，借此把那点莫名的躁动迅速压下去。","近期刚被实质性贯穿过的小穴。入口虽然被拓开过，但因为骨盆纤细，内壁在接纳粗硬异物时依旧显得格外紧窄。在直播中她依然能翘着二郎腿、用最刻薄犀利的词汇把弹幕里的棺人痴骂得抬不起头；只要下播后不去细想安全裤底裆那点洗不掉的深色印子，她就能继续把这当成一场无关紧要的生理意外。","被反复开拓、体液分泌变得异常敏感的湿软肉径。内部软肉在受到抽送时已经学会了本能地吸附裹紧。哪怕是在开着变声器装清楚歌姬、或是认真讨论新原创曲编曲的间隙，小腹深处也会冷不防泛起一阵空虚的下坠感。嘴上骂得越凶，底下溢出的水声反而越是泥泞，身体已经完全不听使唤地迈入了有经验雌性的轨道。","被彻底开发至敏感多汁、极易充血的发情小穴。内里变得湿热柔软，哪怕只是被粗硬的前端抵在入口研磨，深处就会像关不紧的水龙头一样往外溢水。到了这个阶段，什么理智界限和现实清醒全都被顶得稀烂，稍微被重重撞到最里面的嫩肉，嘴里的暴言就会瞬间被撞成断断续续的抽泣与短促尖音。","完全习惯了被肉棒反复填满、无论何时都保持着微张与潮红的极深私处。带着这样随时都在淌水的小穴去唱空灵清楚的原创歌曲、去义正词严地告诫粉丝“我和你在现实里不可能发生什么”，已经变成了最荒诞的黑色幽默。只要坚硬的硬物抵在身前，内壁就会自发地泛起潮气并层层吮紧，彻底沦陷于纯粹的肉体交媾之中。"],chest:["长在娇小身躯上、几乎摸不到几两肉的纤薄平胸。胸口平坦单薄，锁骨下方的肋骨轮廓清晰可见，两颗小巧的乳头呈现出未染情欲的浅粉色。平日里穿洛丽塔胸衣从来不需要考虑承托问题，洗澡时也只是随便抹两下泡沫就带过，本人对“胸部也能当性感带”这种说法向来只当成网上的降智言论。","被带有侵犯意味的手掌反复揉捻过的青涩微乳。由于没有丰满的脂肪作为缓冲，大掌按上来时能直接摸到皮肉下剧烈跳动的心脏。小巧的乳头在被指腹反复揉捻后会充血挺起，虽然快感微弱，但平时穿衣服时布料蹭过乳尖传来的细小麻意，已经开始让她在直播调整坐姿时频繁感到莫名的烦躁。","乳尖感度彻底觉醒的敏感平胸。虽然尺寸依然是一马平川，但充血挺立的乳头在平坦的胸口上格外扎眼。在冷气充足的录音室里录高音时，只要内衣稍微摩擦到乳尖，就会冷不防激起一阵直冲下腹的战栗，逼得她不得不中途掐断麦克风，咬着嘴唇隔着衣服用力按住胸口才能缓过劲来。","光靠舌尖吸吮和指尖拉扯就能积攒强烈快感的平坦双峰。由于皮肉紧贴着骨骼，每一次被埋头啃咬乳头，都会带来直击心口的强烈抽痛与快美。只要乳尖被含住用力吸弄，喉咙里那些习惯性的刻薄嘲讽就会瞬间卡壳，整片雪白的胸脯也会在几秒钟内迅速烧成一片诱人的绯红。","被完全开发成致命快感中枢的脆弱胸脯。虽然根本做不到乳交这种事，但那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激甚至能直接反哺到下半身。哪怕只是被按住平坦的胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，除了弓起单薄的背脊发出甜腻的呜咽之外，连抬手推开对方的力气都没有。","她打心底里觉得平胸不可能变成性器官，认定这一切只是过度刺激下的生理错觉。可即便脑子里还在冷笑着嘲讽，夜里一个人在电脑前剪辑音频时，手却总会鬼使神差地顺着领口伸进去，熟练地掐住自己坚硬滚烫的乳头揉搓喘息。这对平坦单薄的微乳，恐怕再也变不回最初那种毫无知觉的迟钝状态了。"],oral:["一张用来飙海豚音、录制原创专辑、以及在直播间以极快语速把黑粉和孝子一起喷得狗血淋头的伶俐小嘴。齿列整齐，嘴角带有一颗标志性的尖锐小虎牙，舌面粉嫩干净。在她的认知里，这张嘴是她混迹互联网和实现音乐梦想的绝对王牌，完全无法想象它会和男人的下半身产生任何物理层面的交集。","曾出于被迫或极端妥协、近期刚把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性汗味与前列腺液的腥咸气味让她生理性地想要干呕，为了避免尖锐的虎牙磕破对方惹来更粗暴的对待，只能屈辱地把嘴巴张到最大、将舌头死死压在底下。吐出来之后会直接用手背发狠地擦拭嘴角，眼神里的嫌弃与烦躁几乎要凝成实质。","开始习惯避开虎牙进行含弄的小嘴。咽喉反射勉强被压制了下去，掌握了如何用柔软的舌面包裹住前端打圈的技巧。虽然每次被粗暴地捅到舌根并灌入白浊后，喉咙里残留的黏腻感都会让她在接下来好几个小时里疯狂喝冰可乐漱口，但身体已经开始默默接纳了这种被迫下咽的过程。","歌姬级别的声带控制力在此时发挥出了荒唐的作用。无论是深喉还是吸吮，小嘴的动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉管深处时，她只会半眯着溢满泪水的紫瞳，一边发出含混不清的吞咽声，一边用舌尖本能地刮过柱身上的每一处起伏，连平日里引以为傲的清脆嗓音都会被磨成沙哑黏糊的鼻音。","如今已经彻底习惯了肉棒的气味与温度。只要坚挺的硬物抵在唇边，舌头就会不受控制地探出来主动舔舐迎合，甚至在被按住后脑勺全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底塞满的放纵感。精液喷涌射入喉管的瞬间，喉部会下意识地做出一口不漏的连续吞咽。","彻底沦为极品侍奉工具的湿热之口。原本用来唱出空灵歌声的声带与口腔，如今最习惯的动作却是包着滚烫的肉棒大口接纳唾液与白浊。带着这样一张满是精液腥味、连虎牙都学会了如何讨好男人的小嘴去开麦唱清楚可爱的偶像歌曲，只能说是对所有纯情粉丝和她自己最无情的公开处刑。"],anus:["近期未经任何外物触碰过的紧闭后穴。浅粉色的褶皱紧致密实，属于她个人防线中最神圣不可侵犯的绝对禁区。光是弹幕里有人刷带颜色的后庭烂梗，都会被她直接点名禁言并奉送一套不带脏字的人身攻击。","在前戏中被抹了润滑油的指尖不慎划过边缘的后穴。尚不习惯的冰凉触感让娇小的身躯猛地一哆嗦，后方软肉本能地死死咬合锁紧。虽然嘴上立刻会爆出极度暴躁的问候，但指腹在紧闭褶皱打转带来的隐秘异样感，却让前方原本干涩的小穴冷不防渗出了一小股温热的水汽。","在耐心的扩张下勉强吞入过细小异物的后穴。原本紧绷的括约肌在酸胀感中不得不缓缓分开，内部温热的肠壁近期才刚被坚硬物体刮擦碾压。虽然整张脸埋在床单里死死咬着牙不肯求饶，但随着异物的抽动，深处泛起的那阵头皮发麻的快意，已经开始动摇她引以为傲的理性防线。","已经被彻底开拓、能够勉强吞下肉棒前端并尝过内里高潮的柔软后径。当硕大的龟头撑开层层褶皱硬生生挤入最深处时，前所未有的撕裂感与荒谬的背德快感会瞬间击碎所有语言中枢，仅仅是后方被缓慢抽送，前面的小穴就会像失禁一样疯狂地往外溢水。","括约肌变得顺从多情、甚至在后入抽插中能自发蠕动吮吸的敏感后庭。感度敏锐到了极点，哪怕只是日常在电竞椅上坐下，深处残留的酸麻胀热都会让她冷不防倒吸一口凉气，直播杂谈时的连珠炮吐槽也会因此出现诡异的断层与停顿。","前面还能靠嘴硬找借口，唯独后面已经被彻底干透干熟，属于是在无人知晓的暗处彻底沦陷的典型。她本人比谁都清楚不能再放任后庭沉沦，但对这具光凭后面被粗暴抽插就能轻易迎来喷水高潮的身体来说，所谓清醒自持早就成了笑话，后方已然成为比前方更加贪婪诚实的快感核心。"]},斯黛拉:{vagina:["近期完全处于闲置状态的小巧私处。由于体型本就娇小，两瓣软肉平时严丝合缝地闭拢着，没有多余的杂色。虽然在私下独处时偶尔会顺手隔着底裤浅浅碰两下，但对她来说这不过是偶尔确认一下躯体状态，很少会特意花心思去弄湿它。","有过被外力浅浅触碰与探入痕迹的小穴。内部狭窄得几乎容不下多余的异物，稍微有一点深入的动向就会下意识地收紧。不过在独处时，她已经开始懂得利用那点深层的酸麻感来打发时间，尽管嘴上依然是那副事不关己的冷淡表情，底裤上偶尔也会留下一点干涸的痕迹。","已经习惯了接纳实打实硬物的小穴。内部虽然算不上宽敞，但早已记住了被异物彻底撑满时的触感。即便平时在学校里安安静静地坐在教室角落看书，久坐之后底下偶尔泛起的一点微潮，也会让她在心里默默盘算着下一次觅食的时间。","体液分泌速度明显变得异常敏锐的湿软肉径。内部软肉在受到抽送时已经学会了主动贴合吮吸。无论是在房间里发呆还是准备开播，只要稍微闪过一点念头，小腹深处就会泛起空虚的温热，底下的湿润程度早已超出了普通日常所需的范畴。","被彻底开发至敏感多汁的发情小穴。内部湿热柔软，哪怕只是被粗硬的前端抵在入口研磨，深处就会止不住地往外溢水。面对实质性的填补，身体会先于理智完全放松下来任由对方进出，稍微顶到最里面的嫩肉就会引起浑身发颤。","完全习惯了被雄性硬物反复填满的极深小穴。时刻维持着微张与充血的熟透状态，哪怕只是感知到周围带有欲念的气息，底下就会本能地淌下黏稠的爱液。对于把进食视作本能的她来说，这具随时随地都能毫无阻碍接纳粗大肉棒并贪婪绞紧的躯体，已经彻底蜕变成了最为高效的捕食温床。"],chest:["娇小身躯上虽然纤细但曲线分明的小巧双峰。平日里被严实地遮在麻花针织开衫与校服衬衫之下，近期极少受到带有情欲意味的碰触。虽然外观上生得精致，但本人平时几乎不会去特意摆弄，洗澡时也只是草草带过。","在带有侵略意味的揉弄下感度开始苏醒的娇嫩微乳。虽然分量不算大，但在手掌整个覆上来揉捏时，薄薄的皮肉下会泛起细微的酥麻。小巧的乳头在被指腹反复摩挲后会充血挺起，平时穿内衣时偶尔蹭到，会带来一阵让她微微蹙眉的异样感。","乳尖感度明显增强的敏感胸脯。充血挺立的小肉粒在单薄的胸口上格外明显。在独处或者开播前调整衣服时，稍微被衬衫布料蹭到就会激起一阵细微的战栗，逼得她不得不偶尔伸手隔着衣服轻轻按压以缓解那股发痒的躁动。","光靠指尖拨弄与舌尖吮吸就能积攒大量快感的敏感双峰。虽然尺寸娇小，但只要乳头被含入口中用力吸弄，喉咙里那些若无其事的平淡调子就会瞬间卡壳，整片胸口的皮肤也会在短时间内迅速泛起一层诱人的薄红。","被完全开发成致命快感中枢的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激能直接牵动下半身的收缩。哪怕只是被大掌按在胸口粗暴揉转，全身的力气都会被瞬间抽空，只能顺从地仰起下巴溢出微弱的抽气声。","彻底沦为第二性器官的极敏感双峰。无论何时都维持着挺立充血的状态，哪怕只是被指尖轻轻划过，强烈的刺激也能瞬间传遍全身。在激烈的纠缠中，单凭胸口被反复揉捏吸吮，就能让她在急促的喘息中迎来剧烈的高潮，敏感度早已彻底脱离了正常控管。"],oral:["一张平时话不多、声音轻细稚嫩的小嘴。齿列整齐小巧，舌面粉嫩干净，除了吃东西和日常说话外，近期完全没有体会过被外物塞满的滋味。在日常表象下，这张嘴始终维持着毫无攻击性的无害状态。","有过被迫或半推半就将前端含入唇内经历的小嘴。近期刚尝到雄性体液的腥咸气味与坚硬触感时，生理性的反胃让她很难受，为了避免牙齿磕到对方只能尽量张大嘴巴。吐出来之后虽然会默默漱口，但心底深处却已经隐隐记住了这股味道。","在含弄方面掌握了基本要领的小嘴。咽喉反射得到了一定程度的克服，懂得利用温热的舌面包裹住前端慢慢打圈。虽然每次被顶到舌根并灌入体液后喉咙里都会残留黏腻感，但身体已经开始把这种吞咽当成了一种顺理成章的进食流程。","动作娴熟、能够主动带来绝佳包裹感的侍奉之口。懂得如何放松喉咙以接纳更深处的探入，当粗长的柱体直接顶进喉管深处时，她只会半眯着泛起水汽的眼睛发出含混的吞咽声，任由唾液拉丝顺着嘴角滑落，熟练地用舌尖刮过每一处起伏。","彻底习惯了硬物气味与温度的湿热小嘴。只要坚挺的物体递到面前，舌头就会本能地探出迎合，甚至在被按住后脑全根贯穿至喉底深处时，也能在压迫感中体会到被彻底填满的满足。浓稠液体射入喉咙的瞬间，喉部会自发地大口吞咽干净。","完全蜕变为捕食与榨取工具的极乐之口。湿热的口腔内壁、灵巧纠缠的舌尖与不断紧缩的喉道配合得天衣无缝。无论是在私密独处时的主动索求，还是事后的清理，只要被这张小嘴含入，男人的理智便会在极短时间内被彻底击溃，将白浊尽数贡献为她的食粮。"],anus:["近期从未被任何外物造访过的紧闭后穴。呈现出干净的浅粉色，褶皱细致紧实。在日常的认知与生活里，这里仅仅是纯粹的排泄通道，完全没有与任何快感产生过联系。","在偶然后戏或试探中被涂抹了润滑的指尖轻轻蹭过边缘的后穴。尚不习惯的触感让软肉本能地向内紧缩收紧。虽然当时会下意识地想要躲开，但指腹在紧闭边缘打转带来的隐秘异样感，却让身体深处悄悄泛起了一丝说不清的骚动。","在耐心的开拓下勉强接纳过细小异物探入的后穴。原本紧绷的括约肌在酸胀感中不得不缓缓分开，内部肠壁近期才刚体会到了被刮擦压迫的触感。虽然过程中会全程紧绷着身子，但随着异物的抽动，深处泛起的那阵发麻的快意已经开始动摇原有的排斥。","已经能够勉强接纳硬物挺入并尝过高潮滋味的柔软后径。当硕大的前端彻底撑开褶皱挤入最深处时，强烈的胀满感与刺激会瞬间击穿防线，仅仅是后方被缓慢抽送，前方的软肉就会像受到感应一样自发地渗出大量爱液。","对后方进入完全顺从、甚至能主动配合吮吸的敏感后穴。紧闭的防线早已不复存在，内部软肉在受到撞击时会自发地蠕动贴合。感度异常敏锐，哪怕只是平时坐下时稍微受力，深处残留的温热都会让她下意识夹紧大腿，小腹隐隐发酸。","被彻底开发至成熟多情、甚至感度不亚于前方的后庭名器。充血泛红的褶皱只要稍加触碰就会本能地微微开合索求。无论面对何种程度的粗暴贯穿，后穴都能贪婪地将其全根吞没，彻底蜕变成前后都能畅快享受快感并高效捕获养分的极乐之躯。"]},时雨羽衣:{vagina:["近期完全没有性经历，连隔着布料的触碰都很少认真弄过。平日里画稿熬夜累了，最多也只是隔着内裤用指尖隔靴搔痒般蹭蹭，入口紧闭如常，看不出近期被进入过的痕迹。入口呈现出极浅的柔嫩粉白，由于体型娇小，内部狭窄得几乎只能勉强容纳自己的一根指尖，是近期完全闲置着的青涩私处。","仅仅被手指浅浅探入过的小穴，近期仍没有实质性交合的痕迹。虽然在偶尔的自慰中体会到了比单纯揉搓更深一层的酸麻感，但因为害怕弄得太深留下明显感觉、更害怕耽误手头的插画工作，每次都浅尝辄止。内部狭窄依旧，只要稍微被异物顶到入口，就会紧张得下意识夹紧双腿。","近期刚有过实质性交合的小穴。虽然偶尔会因为身份的包袱而感到心虚，但身体已经记住了被撑开时的充实感。内部依然十分紧致，即便只是普通尺寸也能将其塞得满满当当。自慰时开始不自觉地使用手指深入抽送，虽然嘴上绝不承认，但润滑液的分泌速度明显比以往快了许多。","经过多次情事滋润、对快感愈发坦诚的小穴。原本紧闭的娇嫩肉缝在独处放松时也会微微透出湿意。仅凭手指已经很难满足画稿间隙积攒的燥热，开始会借助小巧的道具填补空虚。内部软肉对摩擦的反应变得敏锐，被肉棒撑开抽送时能主动吮吸包裹，是一具已经懂得如何享受性爱乐趣的年轻躯体。","被频繁而深入地开发过、极为多汁熟透的名器小穴。肉壁早已适应了粗大肉棒的进出，甚至在没有插入时，脑海里只要闪过被顶弄到深处的画面，下体就会泛滥出黏稠的爱液。即便在长时间的直播或画画中，下腹深处也会偶尔涌起一阵空虚的骚痒，迫切渴望着被滚烫的硬物狠狠填满并碾过敏感点。","完全沉沦于肉欲快感、彻底熟透的极品雌性肉穴。紧窄与柔韧达到了极致的平衡，无论面对何种体型的肉棒都能贪婪地吞入至根部，并在高潮时如痉挛般死死绞紧。哪怕只是被隔着裙摆抚摸，内部都会本能地分泌大量淫水打湿内裤，身体彻底卸下了所有伪装与矜持，全心全意沦陷在作为女性被彻底填满的极顶欢愉之中。"],chest:["娇小身躯上格外丰满、形状极佳的乳房。平时被严严实实地包裹在水手服与文胸之下，除了画画时手臂活动会偶尔挤压到，近期几乎没有受到过任何带有性意味的触碰。本人虽然知道那里是敏感带，但在疲惫自慰时顺手捏两下也觉得无关痛痒，通常摸几秒就会无趣地松开手。","经过带有情欲意味的抚摸后、感度开始悄然苏醒的丰润胸部。饱满的乳肉在掌心揉捏下会泛起微弱的酥麻，粉嫩的小巧乳头也开始懂得在刺激下挺立变硬。虽然多了一层陌生的快感，但因为担心衣服摩擦会显出痕迹，平日里穿内衣时反而变得更加小心翼翼。","对触碰产生明显反应、变得愈发敏感的饱满双乳。乳晕与乳头在稍微兴奋时就会迅速充血勃起，即便隔着薄薄的夏装制服，也偶尔会因为摩擦而感到一阵发痒。在画室独处时，会忍不住隔着布料自己轻轻揉弄以缓解那股酸胀感，胸部作为性感带的功能已然彻底确立。","仅靠手掌揉捏和舌尖吸吮就能积蓄大量快感的极品美乳。丰满圆润的软肉极具弹性，在被肆意揉搓变形时，会向脑髓传递出直击下腹的甜蜜电流。只要乳头被指尖夹住轻轻拉扯转动，喉咙里就会忍不住溢出甜腻的喘息，甚至连带着下体都会随之微微湿润。","被彻底开发成高效快感发生器的敏感双峰。由于神经末梢被高度激活，乳头的挺立几乎成了常态，甚至在淋浴的水流冲刷下都会泛起一阵阵舒服的战栗。即便不触碰下体，光是让丰满的乳肉夹住肉棒进行乳交、或是任由对方埋头用力吸吮啃咬，就能顺理成章地迎来剧烈的胸部高潮。","感度已经突破天际、彻底沦为第二性器官的绝品荡乳。只要指尖或舌尖轻轻拂过乳尖，全身的力气就会在一瞬间被抽空，化为酥软的呻吟。乳房的每一次晃动与被挤压都能带来连绵不绝的快美，本人也完全迷恋上了用自己的大奶子讨好男人、并在被粗暴玩弄乳肉的极致刺激中高潮迭起的绝顶体验。"],anus:["近期从未被任何异物造访过、仅作为正常排泄器官存在的紧闭后穴。呈现出干净健康的浅粉色，褶皱细密而紧实。在她的认知里，这里是绝对不能被触碰的羞耻死角，光是想象那里被外人窥视都会觉得无比荒唐和抗拒。","在偶然的爱抚中被指尖轻轻划过或涂抹过润滑剂的后穴。虽然并未真正探入，但尚不习惯的异样触感让那处软肉产生了一丝战栗与本能的缩紧。虽然嘴上依旧坚决排斥，但在私下自慰情动时，指尖偶尔不经意拂过边缘，也会带来令人心跳加速的微小违德感。","近期才刚接受了细小异物（如手指或细软玩具）浅尝辄止探入的后穴。原本极度闭锁的括约肌在润滑与耐心的扩张下开始学会适度放松，尽管异物感依然明显，但随着内部肠壁被轻微刮擦，竟然隐约能泛起一丝麻酥酥的奇妙快感，令她在羞耻与好奇之间暗暗动摇。","已经被开发出明确性器官机能的柔软后庭。原本紧致的洞口在经过充分的前戏与扩张后，已经能够勉强接纳正常尺寸的肉棒缓缓挤入。当灼热的硬物彻底撑开褶皱埋入深处时，强烈的胀满感与前所未有的压迫性快感会瞬间击穿防线，连前面的小穴都会伴随着后方的抽送而剧烈缩紧喷水。","对后庭交媾不再有任何心理抗拒、反而食髓知味的发情后穴。娇嫩的括约肌变得极为柔软且富有弹性，能够顺畅地将粗大的肉棒一口吞下，并在进出时自发地蠕动吮吸。即便没有前穴的刺激，仅凭后庭被一下下顶到最深处的撞击，就能让她失神地仰起脖颈迎来浑身抽搐的后穴高潮。","被完全开发至熟烂、与前穴平分秋色的极品后庭名器。褶皱呈现出被彻底征服的艳丽深色，甚至只要轻轻掰开臀肉，深处的媚肉就会本能地微微翕动索求。无论何时何地，后穴被粗大肉棒狠狠贯穿并肆意抽送已成为她最无法割舍的极乐享受，彻底蜕变成前后都能尽情享受肉体欢愉的极乐雌体。"],oral:["一张只用于品尝甜食零食、配音杂谈与随性吐槽的小嘴。声线慵懒甜美，小巧整齐的贝齿与粉嫩的舌头近期从未接触过任何雄性体液与器官。对口交的认知仅仅停留在网路段子与理论知识，完全没有将自己的口腔与情欲联系在一起。","曾被迫或出于好奇将男性的肉棒浅浅含入口中的娇嫩小嘴。近期刚尝到了雄性汗液与前列腺液的微咸气息，虽然由于咽喉反射有些干呕与抗拒，但看着对方在自己口中露出舒适的表情，内心深处悄然多了一丝难以言喻的隐秘成就感与羞涩。","开始掌握基本侍奉技巧的小嘴。已经能够克服大部分的恶心感，学会了用温软的舌面裹住顶端轻轻打圈、以及用双唇包裹住齿列进行上下套弄。虽然深处被顶到喉咙时依然会泛出生理性的泪花，但已经能较为顺从地将男人的前端含得湿漉漉一片。","技巧纯熟、能够主动带来绝佳快感的侍奉之口。懂得如何利用口腔内的温度、黏腻的唾液与灵活的小舌巧妙配合，将肉棒上的每一处敏感沟壑都吸吮得清清楚楚。喉部的容纳度明显提升，即便被肉棒稍稍顶入喉间，也能半眯着眼睛忍耐并发出含糊不清的吞咽声，把侍奉男人当成了一种令人愉悦的互动。","彻底迷恋上肉棒气味与温度的贪婪小嘴。只要硬挺的肉棒递到面前，舌头就会本能地伸出迎合，甚至会主动仰起脸张大嘴巴任由对方贯穿至喉咙深处。深喉与吞精已不再是负担，反而成了性爱中不可或缺的助兴环节，每一次将滚烫的精液大口咽下，都会让她产生一种从内而外被彻底填满的满足感。","化身为绝顶榨精道具的极乐之口。小巧的口腔内部温热多汁，舌头的缠绕、双唇的真空吸吮与喉管的紧致压迫达到了炉火纯青的境界。无论是作为前戏的主动引诱，还是高潮时的最终榨取，只要被这张小嘴含住就绝无全身而退的可能，在一次次被灌满白浊并舔舐干净的过程中，彻底沉醉于这份纯粹的肉体服侍之中。"]},璃亚梦:{vagina:["近期完全没有性经历的小穴。因为体型娇小，两瓣肉肉紧密闭合，内部干涩狭窄，入口紧闭如常，看不出近期被进入过的痕迹。平日里脑子里装的大多是社交网络上的炎上动态、如何靠杂鱼人设博取同情，以及在推特上深夜发小作文，对真正的男女交媾毫无实感。自慰时只要稍微用指尖蹭蹭外部就足以满足，是个近期完全未经开拓的青涩私处。","在某次冲动下被手指浅浅探入过边缘的小穴。近期仍没有实质性交合的痕迹，内部也依旧紧窄得难以容纳异物。虽然在独处时出于好奇试探到了深层的酸麻感，但随之而来的异样触感让她当场陷入恐慌，事后一边发着颜艺表情包一边在心里疯狂吐槽自己到底在干什么。现阶段她依然能理直气壮地宣称自己最近什么都没干过、人设依旧清清白白。","近期刚经历过真正贯穿的小穴。入口虽然被拓开过，但接纳坚硬异物时依旧显得格外吃力。在舞台或直播间里她依然能手舞足蹈地大声喧哗，只要动捕设备没有捕捉到底下微弱的重心晃动，她就还能维系住表面上那副得意忘形的模样，尽管在知情人眼里这已经有了不少讨论的余地。","体液分泌速度大幅提升的湿软肉径。内部软肉在受到抽送时已经学会了自发吸附贴合。哪怕是在排练舞蹈累到快要虚脱、或是情绪激动暴走的间隙，小腹深处也会冷不防泛起一阵空虚感。嘴上虽然还在慌里慌张地找借口，但底下溢出的体液却诚实地出卖了她。若还坚称自己只是会发小作文的杂鱼偶像，已经有了不少讨论的余地。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用两根手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的填补。原本用来虚张声势的杂鱼防御在肉棒面前毫无意义，稍微被顶到深处就会像坏掉一样止不住地淌水，连一句完整的网络梗都组织不起来。","完全习惯了大鸡巴后时刻处于微张与潮红状态的极深小穴。带着这样随时都在淌水、被碰几下就疯狂绞紧喷水的小穴，去在镜头前对粉丝喊着“死宅们快来喜欢我”，和亵渎偶像二字也差不多了吧。只要坚挺的硬物递到身前，下半身就会自发地泛起潮气。"],chest:["娇小身躯上格外丰满、形状极佳的巨乳。平日里宽松的大号印花T恤松垮地挂在身上，除了洗澡外近期几乎从未被刻意触碰过。虽然在外观上极具冲击力且常被当成卖点，但本人在自慰时顺手摸摸也觉得没什么特别感觉，通常摆弄几秒就无趣地放手了。","在带有情欲意味的揉捏下感度悄然苏醒的丰满双峰。沉甸甸的软肉在被大掌揉弄时会泛起细微的酥麻，小巧的乳头也开始懂得在刺激下充血挺立。虽说因此在自慰时多了一层快感，但平时穿衣服时只要蹭到乳尖就会激起一阵心慌的异样，逼得她在镜头前不得不频繁扯动领口。","乳尖感度明显增强的敏感胸部。稍微有点凉意或被衣服内衬摩擦到，乳头就会不由自主地充血勃起，连宽松的T恤都遮不住凸起的轮廓，成了她的一大烦恼。感度水涨船高，经常发胀发痒，导致她在独处刷手机时总忍不住隔着衣服悄悄揉按以平复燥热。","光靠揉弄胸部就能迎来高潮的敏感双峰。丰满沉甸的乳肉只要被大掌肆意揉搓，就会向全身传递出甜腻的快意，甚至能顺理成章地用来进行乳交侍奉。因为这是自己一个人也能玩得很舒服的部位，虽然带来了一些日常不便，但至少还在她能自我安慰的范畴之内。","已经被彻底开发成第二性器的极品乳房。外形虽然依然美丽挺翘，但对她而言，它们早已成了比下体还要灵敏的弱点。要是被男人握在手里肆意揉弄吸吮，嘴里那些咋咋呼呼的吐槽就会瞬间融化成甜腻的喘息，除了露出失神的表情任由对方玩弄至高潮之外，根本组织不起任何反抗。","她打心底里坚信这只是特定刺激下的生理错觉，只要长久不碰就能自然钝化。可即便脑子里在这么想着，独处发呆时，手指却还是会下意识地顺着领口探进去揉按自己充血坚硬的乳尖。这对丰满的乳肉，在快感的支配下已经彻底脱离了理智的管辖。"],oral:["一张用来快速碎碎念、满嘴网络流行语以及在各种场合失控暴走的小嘴。齿列整齐，嘴角带着微尖的小虎牙，舌面粉嫩干净。在她的认知里，这张嘴是她宣泄情绪和在舞台上唱歌的核心工具，完全无法想象它会沦为男人的玩具。","曾出于被迫或妥协、近期刚把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性汗味与腥咸体液让她生理性地想要干呕，为了避免虎牙磕碰到对方只能屈辱地把嘴张大。吐出来之后会抓起手边的碳酸饮料猛灌漱口，眼神里写满了真实的嫌弃与恐慌。","在含弄方面积累了一定被迫经验的小嘴。咽喉反射得到了一定程度的克服，掌握了用温热舌面包裹前端打圈舔弄的技巧。虽然依然觉得精液的气味算不上好闻，但每次被强硬地顶到舌根并灌入白浊后，身体已经开始默默接纳了这种黏腻的残留感。","无论是深喉含弄还是主动吸吮，嘴巴的动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉咙深处时，她只会半眯着溢满泪水的粉瞳发出含混的吞咽声，平日里那副咋咋呼呼的嚣张气焰在粗大肉棒面前被堵得一干二净，只能乖乖任由唾液拉丝淌落。","如今已经彻底习惯了肉棒的气味与温度。只要坚挺的硬物伸到面前，双眼便立刻变得迷离，本能地探出舌头主动迎合，任由唾液顺着嘴角拉丝淌落。甚至在被全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底填满的放纵感。","彻底沦为极品侍奉工具的湿热之口。小巧的口腔与灵活的小舌配合得天衣无缝，甚至连将大量精液一口不漏地全数咽下都成了理所当然的习惯。带着这样一张满是男人精液腥味、连发声都会带着微弱黏音的小嘴去开麦进行偶像直播，只能说是对所有纯情粉丝和她自己最无情的公开处刑。"],anus:["近期从未被任何异物触碰过的紧闭后穴。呈现出干净健康的浅粉色，褶皱细密紧实。推特小作文里什么炎上都能写，唯独把这里和快感挂钩，会被她当成最恶俗的黑粉段子。用那里去做下流的事情，在她看来完全是不可理喻的变态行为。","在前戏中被抹了润滑剂的指尖不慎滑过边缘的后穴。尚不习惯的冰凉触感让娇小的身躯猛地一哆嗦，后方软肉本能地死死咬合锁紧。虽然嘴上立刻会爆出刺耳的怪叫与抗议，但指腹在紧闭褶皱打转带来的隐秘异样感，却让前方原本干涩的小穴冷不防渗出了一小股温热的水汽。","经过适度尝试，原本只是排泄器官的部位，如今也开始具备了性器官的雏形。原本只有些类似发痒和轻微颤抖的含混感觉，在一旦意识到深层的快感之后，杂鱼式的死撑便塌得很快，顺从的速度一发不可收拾。","那微微纵向舒展的入口早已尝过高潮的滋味。仅仅是轻轻戳弄边缘，便能让前面的小穴如流水般淌下爱液。按理说这种开发本应耗时极长，而能取得如此显著的成果，对靠炎上博同情的杂鱼偶像来说，与其说是天赋，不如说是自掘坟墓。","因频繁使用而开始呈现出轻微张开状态的后穴，当初紧闭的防线早已荡然无存。感受度方面异常敏锐，哪怕只是在日常坐下时被椅面压迫到深处，都会引得她浑身一软、下意识地夹紧大腿漏出细微的鼻音。动捕还开着的时候，观众也只能察觉到她又在频繁扯领口。","杂鱼人设还能把前面那点湿意糊弄成演技，唯独后面已经被干透，属于是从内部把偶像体面掏空的典型。她本人虽然也清楚不能再放任后庭，但对仅凭后穴被抽插就能轻易迎来高潮的身体来说，所谓偶像的体面早就荡然无存了。自慰时玩弄后面的频率甚至远远超过了前面，成了名副其实的后庭性器。"]},塔菲:{vagina:["藏在军装百褶短裙与单薄衬裤下的幼嫩私处，近期完全没有性经历。骨架娇小使得缝隙紧闭得看不出缝隙，入口紧闭如常，看不出近期被进入过的痕迹。平日里脑子里全是怎么跟雏草姬爆金币与甩锅，对男女之事毫无实感，自慰时只需隔着布料草草蹭两下便能满足的高效小穴。","曾被手指浅浅探入过边缘的小穴，近期仍没有实质性交合的痕迹，内部狭窄得难以容纳异物。虽然偶尔在独处时试着往深处探了一点以追求酸麻感，但每次稍微探深都会吓得慌忙抽手并大呼小叫，现阶段她依然能理直气壮地在直播间宣称自己最近什么都没干过、依旧清清白白。","近期刚经历过货真价实开拓的小穴。入口虽然被拓开过，但接纳粗硬异物时依旧显得极为吃力。下播后即便衬裤底裆泛着明显的湿痕，她也能面不改色地用时光机故障当借口来糊弄自己，在自欺欺人这方面展现出了惊人的天赋。","体液分泌速度明显加快的湿软小穴。内部在受到抽送时已经学会了自发吸附贴合。哪怕在打游戏失误发出尖叫爆鸣的间隙，小腹深处也会冷不防泛起一阵空虚感，底下的湿润与嘴里的怪叫交织在一起。到了这个地步，再拿王牌侦探的身份来糊弄，已经有不少讨论的余地。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用手指用力抽弄也只会觉得空虚，下意识地想要寻找更加坚硬粗壮的填补。原本用来虚张声势的王牌气势在肉棒面前彻底失效，稍微被顶到深处就会像坏掉一样止不住地淌水。","完全习惯了大鸡巴后时刻处于微张与潮红状态的极深小穴。带着这样随时都在淌水、稍微触碰就会剧烈收缩溢液的小穴去开播卖萌，再拿时光机故障来解释，也骗不过自己。只要坚硬的硬物抵在身前，下半身就会自发地泛起潮气。"],chest:["娇小身躯上仅有微微起伏的小巧微乳。隔着泡泡袖衬衫几乎看不出分量，浅粉色的乳头极为稚嫩。平日里穿着短款夹克毫无承托负担，本人也对胸部是性感带的说法嗤之以鼻，坚信这只是大胸女人的虚伪谎言。","在带有情欲意味的揉弄下感度悄然苏醒的平坦胸脯。由于缺乏脂肪缓冲，大掌按上来时能直接摸到肋骨与剧烈的心跳。小巧的乳头在被揉捻后会微微挺立，虽说因此在自慰时多了一层快感，但平时穿衣服蹭过乳尖带来的发痒感，已经开始让她在直播时烦躁地拉扯领口。","乳尖感度彻底觉醒的敏感微乳。充血挺立的小肉粒在平坦的胸口上格外显眼。打游戏手舞足蹈时稍微被内衣布料摩擦到就会激起一阵战栗，逼得她不得不停下操作，隔着衣服偷偷按压以平复那股奇怪的酸麻。","光靠揉弄乳尖就能迎来高潮的敏感双峰。虽然尺寸毫无长进，但只要乳头被含入口中用力吸吮，嘴里那些习惯性的嚣张怪话就会瞬间融化成甜腻的喘息，整片白皙的胸脯也会在几秒钟内迅速烧成一片诱人的绯红。","被完全开发成致命弱点的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激甚至能直接反哺到下半身。哪怕只是被手掌按在胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，只能瘫软着发出可怜巴巴的哼叫。","彻底沦为第二性器官的极敏感微乳。两颗充血坚硬的小肉粒只要被指尖轻轻一碰，强烈的快意便能瞬间传遍全身。即便下播吃泡面时脑子里还在嘴硬，手指却会不自觉地顺着领口探进去揉弄发硬的乳头，敏感度显然已经彻底固定了下来。"],oral:["一张用来输出夹子音、高分贝尖叫爆鸣以及满嘴贴吧黑话的伶俐小嘴。齿列整齐，嘴角带着微尖的小虎牙，舌面粉嫩干净。在她的认知里，这张嘴是她吃饭、搞抽象和称霸互联网的唯一王牌，完全无法想象它会沦为男人的玩具。","曾出于被迫或妥协、近期刚把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性气息与微咸的体液让她生理性地想要干呕，为了不让虎牙磕到对方只能屈辱地把嘴张大。吐出来之后会抓起碳酸饮料猛灌漱口，眼神里写满了真实的嫌弃与委屈。","在含弄方面积累了少许经验的小嘴。咽喉反射勉强被压制了下去，掌握了用舌面包裹前端打圈的要领。虽然每次被顶到舌根灌入白浊后都会心烦意乱，但身体已经开始习惯了这种被迫吞咽的流程，不再像刚接触时那样剧烈排斥。","无论是深喉含弄还是主动吸吮，动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉咙深处时，她只会半眯着溢满泪水的金瞳发出含混的吞咽声，平日里那副咋咋呼呼的嚣张气焰在粗大肉棒面前被堵得一干二净，只能乖乖任由唾液拉丝淌落。","彻底习惯了肉棒气味与温度的湿热小嘴。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按着脑袋贯穿至喉底深处时，也能在窒息感中体会到放纵的快意。精液喷涌射入喉管的瞬间，喉部会像吞咽零食一样自发地大口咽下。","彻底沦为极品侍奉工具的湿热之口。原本用来给雏草姬整活的小嘴，如今最习惯的动作却是包着滚烫的肉棒大口接纳白浊。带着这样一张满是精液腥味、连发声都会带着微弱黏音的小嘴去开麦卖萌撒娇，构成了最具讽刺意味的公开处刑。"],anus:["因长期打游戏久坐而缺乏运动、但近期绝对未曾被任何异物碰过的紧闭后穴。浅粉色的褶皱细致紧实，属于她个人防线中最绝对的隐私禁区。光是弹幕里有人刷带颜色的后庭怪话，都会被她直接开麦大呼小叫并光速安排禁言套餐。","在混乱前戏中被抹了润滑油的指尖不慎滑过边缘的后穴。冰凉的触感让娇小的身躯猛地一颤，后方软肉本能地死死锁紧。虽然嘴上立刻会爆出刺耳的抗议与怪叫，但指腹在边缘打转带来的异样感，却让前方原本干涩的小穴悄悄渗出了一丝水汽。","在耐心的扩张下勉强吞入过细小异物的后穴。原本紧绷的括约肌在酸胀感中被迫缓缓分开，内部肠壁近期才刚体会到了被异物刮擦碾压的滋味。虽然整张脸埋在枕头里死死咬着牙不肯求饶，但深处泛起的那阵头皮发麻的快意，已经开始动摇她的防线。","已经能够接纳整根肉棒挺入并尝过高潮滋味的柔软后径。当硕大的前端撑开层层褶皱硬生生挤入最深处时，前所未有的撕裂胀满感会瞬间击碎所有逻辑，仅仅是后方被缓慢抽送，前面的小穴就会像坏掉一样止不住地淌水。","括约肌变得极度顺从、甚至在抽插中能自发蠕动吮吸的敏感后庭。感度敏锐到了极点，哪怕只是打着游戏或吃着泡面坐下，深处残留的酸麻都会让她倒吸一口凉气，夹子音和爆鸣之间会出现滑稽的空白。","前面还能靠甩锅糊弄过去，唯独后面已经被干透，属于是从内部把王牌侦探人设掏空的典型。她本人虽然嘴上还在胡说八道，但对这具光凭后面被粗暴抽插就能轻易喷水高潮的身体来说，所谓面子早就荡然无存了，后方已然成了比前方更加诚实的快感中枢。"]},沙花叉:{vagina:["隐藏在红色菱格纹露肩裙与安全短裤之下、近期未经开拓的私处。由于体型娇小，两瓣软肉紧密贴合，内部狭窄干涩，入口紧闭如常，看不出近期被进入过的痕迹。虽然在直播中习惯用慵懒的声线把观众称作食物并扬言要吃掉对方，但在现实里对男女之事毫无实感，偶尔感到燥热也只是把空调温度调低后倒头大睡，是个近期完全没有性经历的小穴。","曾被手指浅浅探入过边缘的小穴。近期仍没有实质性交合的痕迹，内部也依旧紧窄得难以容纳异物。虽然独处时出于好奇试探到了深层的酸麻感，但随之而来的异样触感让她有些不知所措，事后总会慌乱地缩回被窝里装傻。无论如何，现阶段她依然能毫无心理负担地在镜头前扮演清纯可爱的实习生。","近期刚经历过真正贯穿的小穴。入口虽然被拓开过，但接纳粗硬异物时依旧显得颇为紧致。戴上虎鲸假面时她依然能维持冷淡利落的执行者声线，只要动捕设备没有捕捉到底下微弱的重心晃动，她就还能维系住表面的从容，尽管知情者只要稍微靠近就能闻到那股尚未散去的微热体温。","体液分泌速度大幅提升的湿软肉径。内部软肉在受到抽送时已经学会了自发吸附贴合。哪怕是在构思新曲旋律或准备录音的间隙，小腹深处也会冷不防泛起一阵空虚感。嘴上那些所谓的清扫威胁在泛滥的水声面前彻底沦为虚张声势。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的填补。原本用来防备他人的小恶魔伪装在肉棒面前毫无意义，稍微被顶到深处就会像坏掉一样止不住地淌水，连一句完整的清扫威胁都编不出来。","完全习惯了大鸡巴后时刻处于微张与充血状态的极深小穴。带着这样随时都在淌水、被碰几下就疯狂绞紧喷水的小穴，去在镜头前对观众喊着“今天也把饲养员吃掉了”，只怕是她自己被吃得更干净。只要坚硬的硬物递到身前，下半身就会自发地泛起潮气。"],chest:["娇小身躯上格外丰满、形状相当漂亮的乳房。平日里被严实地勒在露肩上衣与交叉皮革束带之下，除了洗澡外近期几乎从未被刻意触碰过。虽然在外观上极具诱惑力，但本人对“胸部也是敏感带”这种说法并无实感，自慰时顺手摸摸也觉得无关痛痒，通常摆弄几秒就松手了。","在带有情欲意味的揉捏下感度悄然苏醒的丰满双峰。饱满的软肉在被大掌揉弄时会泛起细微的酥麻，小巧的乳头也开始懂得在刺激下充血挺立。虽说因此在自慰时多了一层快感，但平时穿紧身束带只要蹭到乳尖就会激起一阵心慌的异样，逼得她在镜头前不得不频繁调整坐姿。","乳尖感度明显增强的敏感胸部。稍微有点凉意或被胸前皮革束带的边缘摩擦到，乳头就会不由自主地充血勃起，连单薄的衣料都遮不住凸起的轮廓，成了她的一大烦恼。感度水涨船高，经常发胀发痒，导致她在独处写歌时总忍不住隔着衣服悄悄按压以平复燥热。","光靠揉弄胸部就能迎来高潮的敏感双峰。丰满沉甸的乳肉只要被大掌肆意揉搓，就会向全身传递出甜腻的快意，甚至能顺理成章地用来进行乳交侍奉。因为这是自己一个人也能玩得很舒服的部位，虽然带来了一些日常不便，但至少还在她能自我安慰的范畴之内。","已经被彻底开发成第二性器的极品乳房。外形虽然依然美丽挺翘，但对她而言，它们早已成了比下体还要灵敏的弱点。要是被男人握在手里肆意揉弄吸吮，嘴里那些慵懒的撒娇就会瞬间融化成甜腻的喘息，除了露出失神的表情任由对方玩弄至高潮之外，根本组织不起任何反抗。","她打心底里坚信这只是特定刺激下的生理错觉，只要长久不碰就能自然钝化。可即便脑子里在这么想着，独处发呆时，手指却还是会下意识地顺着交叉束带探进去揉按自己充血坚硬的乳尖。这对丰满的乳肉，在快感的支配下已经彻底脱离了理智的管辖。"],oral:["一张用来唱歌、配音以及在直播中慵懒撒娇的小嘴。声线甜美且音域极宽，整齐小巧的牙齿与粉嫩的舌面近期完全没有接触过性器。虽然在知识层面上知道口交这种行为的存在，但对自己的嘴巴也能作为性器发挥作用这一事实，完全没有任何自觉。","曾被迫或出于妥协将男人的前端含入唇内的娇嫩小嘴。近期刚尝到了雄性体液的腥咸气味与坚硬触感，生理性的反胃感让她只想立刻吐出来漱口。她清楚地意识到自己的嘴被人当成了发泄欲望的工具，若是有哪个男人对她说“把舌头伸出来”，她一定会投以看待危险目标般的冰冷目光。","在含弄方面积累了一定被迫经验的小嘴。咽喉反射得到了一定程度的克服，掌握了用温热舌面包裹前端打圈舔弄的技巧。虽然依然觉得精液的气味算不上好闻，但每次被强硬地顶到舌根并灌入白浊后，身体已经开始默默接纳了这种黏腻的残留感。清扫屋惯于把痕迹抹干净，唯独这股味道她一时还漱不掉。","无论是被按着脑袋深喉贯穿，还是自己主动吸吮，嘴巴都已经运转得相当娴熟。虽然口交本身并不直接带来生理快感，但意识到自己原本用来唱歌的喉咙正在被男人彻底使用着的感觉本身就能让她兴奋，因此就实际效果而言和小穴已无区别。","如今已经彻底习惯了肉棒的气味与温度。只要坚挺的硬物伸到面前，双眼便立刻变得迷离，本能地探出舌头主动迎合，任由唾液拉丝顺着嘴角淌落。甚至在被全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底填满的放纵感。","彻底沦为极品侍奉工具的湿热之口。小巧的口腔与灵活的小舌配合得天衣无缝，甚至连将大量精液一口不漏地全数咽下都成了理所当然的习惯。带着这样一张满是男人精液腥味的小嘴去开麦向饲养员卖萌，原本极具辨识度的歌喉如今最熟悉的却是吞咽白浊时的咕噜声。"],anus:["近期从未被任何异物触碰过的紧闭后穴。呈现出干净健康的浅粉色，褶皱细密紧实。以清扫屋的标准，这里只负责排泄，属于不能写进任务清单的禁区。用那里去做下流的事情，在她看来完全是不可理喻的变态行为。","在经他人之手触碰的刺激之后，那个部位开始渐渐浮现出一种奇妙的感觉。虽说不至于因此而高潮，但冰凉滑腻的触感让娇小的身躯感到一阵微弱的战栗。不过对她而言，那也只是从“绝对不能碰的地方”变成了“稍微敏感一点的地方”罢了，嘴上依然坚决排斥任何越界举动。","经过适度尝试，原本只是排泄器官的部位，如今也开始具备了性器官的雏形。原本只有些类似发痒和轻微颤抖的含混感觉，在一旦意识到深层的快感之后，嘴上还在清扫威胁，身体却已经学不会再合上，顺从的速度一发不可收拾。","那微微纵向舒展的入口早已尝过高潮的滋味。仅仅是轻轻戳弄边缘，便能让前面的小穴如流水般淌下爱液。按理说这种开发本应耗时极长，她却进展得这么快，连清扫屋实习生自己都说不清是身体太诚实，还是人设太薄。","因频繁使用而开始呈现出轻微张开状态的后穴，当初紧闭的防线早已荡然无存。感受度方面异常敏锐，哪怕只是在日常坐下时被椅面压迫到深处，都会引得她浑身一软、下意识地夹紧大腿漏出细微的鼻音。录音或开播时只要坐实，慵懒声线里就会多出一丝盖不住的气音。","实习生的脸还能装傻打圆场，唯独后面已经被干透，属于是从内部让清扫屋朽坏的典型。她本人虽然也清楚不能再放任后庭，但对仅凭后穴被抽插就能轻易迎来高潮的身体来说，所谓清扫屋的尊严早就荡然无存了，后方已然成为比前方更加诚实的快感中枢。"]},红蔷薇:{vagina:["常年隐藏在不规则黑红花瓣裙摆与哥特束腰之下的私密处。由于常年跳弗拉明戈舞，大腿内侧与骨盆底部的肌肉紧致有力，两瓣软肉严密闭合，内部干涩狭窄。平日里她的心思全在剧院宴会的筹备与舞台排练上，偶尔感到疲惫也只是在卸妆后倒一杯红酒独饮，对男女之事极少花费心思，是个近期完全没有性经历、尚未被真正开掘的深闺秘境。","曾被男性的手指浅探过边缘的小穴。内部狭窄且防备森严，稍微受到外力侵入便会本能地紧缩排斥。虽然舞者对身体的敏锐感知让她体会到了深层的酸麻，但在她看来这不过是类似跳舞拉伤般的生理杂音，事后整理好裙摆依然能挂着玩味的笑容登台，未曾将这点异样放在心上。","近期刚接纳过粗硬之物开拓的小穴。内部虽然记住了被撑开时的饱满压迫感，但得益于极佳的肌肉弹性，平时依然维持着紧窄的状态。在宴会厅里戴着黑手套优雅地托腮观察宾客时，只要不去在意走动间下腹泛起的一丝微热，她就依然是那个掌控全场视线的危险女主人。","体液分泌变得异常迅速的湿润肉径。内部软肉在受到抽送时已经学会了配合节奏主动吮吸咬合。哪怕是在排练激烈斗牛舞的间歇，小腹深处也会冷不防涌上一阵空虚的下坠感，底下的湿润常常会将贴身衣料洇出深色痕迹，身体已然跨入了熟练雌性的门槛。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，面对沉重的撞击不仅不再抗拒，反而会在深处被反复碾压时产生剧烈的紧绞与吸附。自以为是掌控欲望的现充贵妇，但在真正激烈的肉体纠缠中，稍微被顶到最里面的嫩肉，嘴里那些从容的调笑就会瞬间融化成断断续续的失神喘息。","时刻维持着充血与微张状态的极深小穴。带着这样随时都在淌水、稍微触碰就会剧烈收缩溢液的小穴去宴会厅举杯或登台亮相，可以说是极具讽刺意味的秘密。只要坚硬的硬物抵在身前，下半身便会先于理智自发泛起潮气，彻底沉沦于最原始的交媾欢愉之中。"],chest:["在束腰胸衣托举下显得格外饱满白皙的优美双峰。露肩低胸的剪裁让深邃的乳沟在宴会灯光下一览无余，但在她眼里，这对丰满的胸脯更多是作为舞者展现身段与舞台魅力的天然优势。除了日常更衣与沐浴，极少带有情欲意味地把玩，小巧的乳头维持着近期未被人染指的状态。","在大掌的揉弄下感度苏醒的饱满双乳。虽然软肉丰厚，但被粗暴揉捏变形时，深处会泛起细密的酸麻与燥热。小巧的乳头在受到刺激后会充血挺立，平时穿紧身束腰只要蹭到乳尖，就会带来一阵让她暗自蹙眉的异样感，在镜头前偶尔需要借着整理肩饰来掩饰不自然。","乳尖感度明显增强的敏感双峰。稍微受凉或被胸衣内衬边缘摩擦，乳头就会不由自主地硬起发胀，成了她在长久候场时的一点困扰。感度水涨船高，经常发胀发痒，导致她在独处休息时，常不得不隔着衣服悄悄按压胸口，以平复那股发痒的悸动。","光靠揉捏吸吮就能积攒强烈快感的丰满乳房。沉甸甸的雪白软肉只要被大掌肆意揉搓，就会向全身放射出甜腻的快意，甚至能顺理成章地用来进行紧致的乳交侍奉。每当乳尖被含入嘴里用力吸弄，喉咙里那些韵律十足的调情话语就会瞬间卡壳，整片胸脯迅速泛起一层艳丽的潮红。","被完全开发成致命弱点的敏感肉峰。外形虽然依旧挺拔诱人，但在快感层面早已成了比下半身还要敏锐的中枢。哪怕只是被手掌按在胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，除了仰起修长的脖颈发出发颤的娇哼之外，连抬手推开对方的力气都组织不起来。","彻底沦为第二性器官的极敏感双峰。充血坚硬的乳尖只要被指尖轻轻扫过，强烈的刺激便能瞬间传遍全身。哪怕在后台休息时试图靠喝红酒冷静下来，手也会不自觉地伸进领口去掐弄发硬的乳头，这对丰满双乳的敏感度显然已经彻底固定了下来。"],oral:["一张擅长咏叹戏剧对白、品尝名贵红酒以及在直播间爽朗大笑的小嘴。声线极具韵律感，齿列整齐，嘴角带着微尖的小虎牙，舌面粉嫩干净。在她的人生经验里，这张嘴是展露魅力与社交控场的核心武器，近期完全未曾体会过被异物塞满的滋味。","有过被强硬塞入粗硬前端经历的小嘴。近期刚尝到雄性体液的腥咸与温度时，本能的生理排斥让她十分不适，为了避免尖锐的虎牙磕伤对方引来更粗暴的对待，只能尽量张大唇瓣。吐出来之后虽然会优雅地端起红酒漱口，但眼神深处已经多了一层难以掩饰的戒备与厌烦。","在侍奉方面掌握了基础要领的小嘴。咽喉反射得到了一定程度的克服，懂得利用温热灵活的舌面包裹住前端打圈舔弄。虽然每次被顶到喉咙深处并灌入白浊后口腔里都会残留黏腻感，但身体已经开始默默接纳了这种被迫吞咽的过程。","无论是深喉含弄还是主动吸吮都运转得极为娴熟的湿热之口。当粗长的柱体直接顶进喉管深处时，她只会半眯着溢出水汽的琥珀色眼眸，一边发出含混的吞咽声，一边顺从地用舌尖刮过每一处起伏，意识到自己用来社交言欢的嘴正在被当成洞穴使用，这种反差本身就能让她下腹发热。","彻底习惯了肉棒气味与温度的侍奉之口。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按住后脑全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底填满的放纵快感。浓稠液体射入喉咙的瞬间，喉部会自发地大口吞咽干净。","原本用来在宴会上号令全场、在直播间调侃观众的嘴巴，如今最熟练的动作却是含着男人的性器大口接纳唾液与白浊。带着这样一张满是精液腥味、连发声都带着微弱黏糊余韵的小嘴去举杯致辞或登台对词，台上的从容腔调与唇齿间未散的黏腻完全对不上号。"],anus:["由于常年练习弗拉明戈的激烈旋转与下盘发力，肌肉紧闭而充满张力的后穴。呈现出干净健康的浅粉色，褶皱细密紧致。在舞者的身体常识里，这里是保持重心稳定与躯干平衡的核心部位，近期从未将其与任何快感联系在一起。","曾被涂抹了油脂的指尖在边缘施加过试探的后穴。尚不习惯的滑腻触感让臀部肌肉本能地骤然绷紧，虽然当时能用玩味的笑容拉开距离，但跳舞迈开大步时深处泛起的那阵隐秘酸麻，却让步调间多了一丝极少见的滞涩感。","在耐心开拓下勉强接纳过细小异物深入的后穴。原本用于支撑剧烈舞步的高张力软肉，在持续的撑开中被迫学会了妥协性的松弛。当内壁深处被硬物刮擦碾压时，深层泛起的那阵热意，已经开始动摇她对自身肉体的绝对掌控。","已经能够接纳粗硬之物整根挤入的柔韧后径。舞者特有的紧致弹性在此刻转化为了极具压迫感的吮吸力，当前端彻底撑开褶皱贯穿至最深处时，伴随着后方被抽送带动的震颤，前方的软肉也会产生激烈的共鸣，止不住地溢出大量温热体液。","彻底适应了后方交媾、甚至能主动配合套弄的敏感后穴。紧闭的防线早已不复存在，哪怕只是日常穿着系带高跟鞋走动或在直播椅上坐下，深处残留的温热酸麻都会让她下意识夹紧双腿，连开麦杂谈的节奏都会出现可疑的卡顿。","由于过度使用而时刻维持着艳红微张状态的熟透后穴。曾经引以为傲的紧致下盘，如今只要被手指轻轻拨开臀肉就会本能地微微翕动索求。在连续的沉重撞击中，单凭后庭承受的刺激便能让她仰颈失神迎来剧烈高潮，彻底蜕变成了一具前后皆能畅快承欢的极乐之躯。"]},兔子洞初音:{vagina:["藏在漆皮兔女郎连体衣与渔网袜深处的紧窄私处。骨架娇小紧凑，两瓣软肉呈现干净的浅粉色，入口闭合得看不出缝隙。平日里除了开播跳宅舞与吃零食，对男女情事全凭随性冲动，自慰也只是隔着布料草草蹭两下解决，是个完全没有实质交媾痕迹的纯洁小穴。","有过被外力浅浅探入边缘痕迹的小穴。内部紧窄得稍受侵入便会下意识绷紧。虽然在独处时偶尔会回味深处的酸麻感，但在她眼里这不过是比吃跳跳糖更刺激一点的生理反应，转头就会被新拆开的零食抛在脑后，嘴上依然能若无其事地在直播间嘲弄纯情观众。","经历了实质贯穿开拓的小穴。内部虽然记住了被坚硬硬物彻底撑开的饱满滋味，但由于体型娇小，平时依旧维持着紧致的状态。在镜头前唱跳摇晃时，只要不去在意走动间内里泛起的一丝微热，她就依然是那个没心没肺、随意撩拨弹幕的恶魔系兔女郎。","体液分泌速度变得异常敏锐的湿软肉径。内部软肉在受到抽送时已经学会了本能地吸附贴合。哪怕是在动捕镜头前做大幅度折耳动作的间歇，小腹深处也会冷不防涌上一阵空虚的下坠感，底下的湿润常常会将连体衣底裆洇湿，身体显然已经跨入了熟练雌性的门槛。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的填补。原本用来随性玩乐的享乐态度在肉棒面前彻底失效，稍微被顶到深处的嫩肉，嘴里的娇气调侃就会瞬间化作断断续续的黏糊喘息。","完全习惯了大鸡巴后时刻处于微张与充血状态的极深小穴。带着这样随时都在淌水、稍微触碰就会剧烈收缩溢液的小穴去开麦唱跳电音神曲，可以说是最讽刺的荒诞现实。只要坚挺的硬物抵在身前，下半身便会自发泛起潮气，彻底沉沦于纯粹的肉欲欢愉之中。"],chest:["在深V兔女郎连体衣托举下显得圆润挺拔的饱满微乳。虽然分量不算夸张，但骨肉匀称且胸型极佳，小巧的乳头呈现出未染情欲的浅粉色。平日里这对胸脯更多是作为宅舞动捕时的视觉卖点，洗澡时也只是草草带过，完全没有将其当作敏感中枢的自觉。","在大掌揉弄下感度开始苏醒的娇嫩双峰。虽然覆上来时能感受到肋骨的轮廓，但薄薄的软肉在被揉捏变形时会泛起细密的酥麻。小巧的乳头在受到刺激后会充血挺立，平时穿紧身漆皮衣只要蹭到乳尖，就会带来一阵让她轻微蹙眉的发痒感。","乳尖感度明显增强的敏感胸脯。稍微受凉或被连体衣心形镂空的边缘摩擦到，乳头就会不由自主地硬起发胀，成了她在长久直播时的一点小麻烦。感度水涨船高，导致她在下播瘫在沙发上时，常忍不住隔着卫衣悄悄按压胸口以平复那股躁动。","光靠揉捏吸吮就能积攒强烈快感的敏感双峰。圆润小巧的胸脯只要被大掌肆意揉搓，就会向全身放射出甜腻的快意，甚至能顺理成章地用来进行乳交侍奉。每当乳尖被含入口中用力舔弄，嘴里那些轻快的流行语就会瞬间卡壳，整片胸口的皮肤也会在短时间内迅速泛起诱人的薄红。","被完全开发成致命快感中枢的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激能直接牵动下半身的收缩。哪怕只是被手掌按在胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，只能顺从地仰起下巴溢出微弱发颤的哼叫。","彻底沦为第二性器官的极敏感双峰。充血坚硬的乳头只要被指尖轻轻扫过，强烈的刺激便能瞬间传遍全身。即便下播瘫在被窝里试图靠吃草莓糖冷静下来，手也会不自觉地顺着领口探进去揉弄发硬的乳头，这对敏感的乳房显然已经彻底脱离了自控范围。"],oral:["一张用来唱跳洗脑电音、嚼草莓泡泡糖以及在直播间以清脆声线戳破纯情宅男假正经的甜美小嘴。齿列整齐，嘴角带着微尖的小虎牙，舌面粉嫩干净。在她的认知里，这张嘴是她享受甜食和输出快乐的工具，完全未曾体会过被异物塞满的滋味。","有过被强硬塞入粗硬前端经历的小嘴。初次尝到雄性体液的腥咸与温度时，生理性的反胃感让她只想立刻吐出来漱口，为了避免虎牙磕到对方只能尽量张大唇瓣。吐出来之后会抓起手边的草莓汽水猛灌，眼神里写满了真实的嫌弃与不耐烦。","在含弄方面掌握了基础要领的小嘴。咽喉反射得到了一定程度的克服，懂得利用温热灵活的舌面包裹住前端打圈舔弄。虽然每次被顶到舌根并灌入白浊后口腔里都会残留黏腻感，但对把身体接触当吃零食的她来说，已经开始把这种吞咽当成了顺理成章的玩乐流程。","无论是深喉含弄还是主动吸吮都运转得极为娴熟的湿热之口。当粗长的柱体直接顶进喉管深处时，她只会半眯着水灵灵的眼睛发出含混的吞咽声，任由唾液拉丝顺着嘴角滑落，平日里轻快利落的声线在粗大肉棒面前彻底被堵成沙哑微弱的气音。","彻底习惯了肉棒气味与温度的侍奉之口。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按住后脑全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底填满的放纵感。浓稠液体射入喉咙的瞬间，喉部会自发地大口吞咽干净。","完全蜕变为极乐之器的湿热腔道。原本用来给粉丝唱跳POP曲目的小嘴，如今最习惯的动作却是包着滚烫的肉棒大口接纳唾液与白浊。带着这样一张满是男人精液腥味、连发声都带着黏糊余韵的小嘴去开麦向观众撒娇，构成了最具讽刺意味的隐秘现实。"],anus:["从未被任何外物造访过的紧闭后穴。呈现出干净健康的浅粉色，褶皱细密紧实。在她的日常认知里，这里仅仅是纯粹的排泄通道，完全没有与任何快感产生过联系，光是想象被碰触都会觉得是不可理喻的麻烦事。","在前戏中被抹了润滑的指尖不慎蹭过边缘的后穴。从未体会过的触感让软肉本能地向内紧缩收紧。虽然当时会像受惊的兔子一样想要蹦开，但指腹在边缘打转带来的隐秘异样感，却让身体深处悄悄泛起了一丝说不清的骚动。","在耐心的开拓下勉强接纳过细小异物探入的后穴。原本紧绷的软肉在酸胀感中不得不缓缓分开，内部肠壁初次体会到了被刮擦压迫的触感。虽然过程中会全程紧绷着身子抱怨，但随着异物的抽动，深处泛起的那阵发麻的快意已经开始动摇原有的排斥。","已经能够勉强接纳硬物挺入并尝过高潮滋味的柔软后径。当硕大的前端彻底撑开褶皱挤入最深处时，前所未有的胀满感与刺激会瞬间击穿防线，仅仅是后方被缓慢抽送，前方的软肉就会像受到感应一样自发地渗出大量爱液。","对后方进入完全顺从、甚至能主动配合吮吸的敏感后庭。紧闭的防线早已不复存在，内部软肉在受到撞击时会自发地蠕动贴合。感度异常敏锐，哪怕只是平时穿着网袜在电竞椅上坐下，深处残留的温热都会让她下意识夹紧双腿，呼吸微微发乱。","被彻底开发至成熟多情、甚至感度超越前方的后庭名器。充血泛红的褶皱只要稍加触碰就会本能地微微开合索求。无论面对何种程度的粗暴贯穿，后穴都能贪婪地将其全根吞没，彻底蜕变成前后都能畅快享受交媾快感的极乐之躯。"]},神乐七奈:{vagina:["常年隐藏在深蓝系带泳裤与开衫之下的纯白私处。虽然自己参与绘制了无数部商业R-18同人志与美少女工口插画，对女性私处的解剖结构与勒肉感了如指掌，但在现实生活里，这处娇嫩肉缝依然维持着未曾被男人造访过的纯洁状态。两瓣软肉严丝合缝地闭拢着，处女膜完好如初。平日里作画熬夜累极了，也只是按捺住因久坐而泛起的微弱燥热、揉揉眼睛继续赶稿，对男女实战连最基础的亲身体验都没有。","曾被手指浅浅探入并涂抹过润滑的小穴。处女膜虽然得以保全，但内部狭窄得稍有异物便会本能地紧缩排斥。虽然画师的理性让她在独处自慰时试着配合呼吸深入少许、以验证自己在画稿中常画的人体受力表现，但手指稍微探深带来的酸胀感，立刻会让她像被踩了尾巴一样慌乱抽手，随后满脸通红地抓起画笔，对着数位板嘟囔着“这种结构根本不符合人体工学嘛”。","经历了货真价实的贯穿、失去了处女膜的小穴。入口虽然被强行拓开过，但因为骨架娇小，内壁在接纳坚硬硬物时依旧显得格外紧窄。在直播中被辣辣军调侃时她依然能挥舞着小木刀元气满满地喊着“DD斩首”；只要下播后不去在意泳裤底裆那点需要手洗才能除掉的深色湿痕，她就还能维系住表面上那位从容照顾大家的小妈妈形象。","体液分泌速度明显加快的湿软肉径。内部软肉在受到抽送时已经学会了自发地吮吸贴合。即便是在手绘板前赶商业死线、或是构思同人本封面的间隙，小腹深处也会冷不防涌上一阵空虚的下坠感。嘴上还在一本正经地跟助手讨论图层透明度，底下溢出的体液却常常将单薄的泳装胖次洇湿大半，身体显然已经跨入了熟练雌性的门槛。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用两根手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的填补。原本引以为傲的工口画师理论在真正的肉棒面前彻底失效，稍微被重重顶到最里面的嫩肉，平日里习惯指点江山的说教就会瞬间被撞成断断续续的甜腻抽泣与细微呜咽。","完全习惯了大鸡巴后时刻处于微张与潮红状态的极深小穴。带着这样随时都在淌水、被碰几下就疯狂绞紧喷水的小穴，去在镜头前对粉丝温柔地喊着“乖乖，摸摸头哦”，构成了最具讽刺意味的隐秘现实。只要坚挺的硬物抵在身前，内壁就会先于理智自发泛起潮气，自尊与画师的从容在最原始的交媾面前彻底缴械。"],chest:["藏在厚重保暖开衫与白色束胸布之下、深藏不露的饱满双峰。平日里为了方便握笔作画与遮掩分量，总是被长条裹胸布紧紧勒在胸前，除了洗澡更衣外几乎从未受过带有情欲意味的抚摸。小巧的乳头呈现出浅粉色，本人虽然在画稿中无数次描绘过巨乳的挤压受力，但对自己胸脯的真实感度却缺乏自觉，洗澡时也只是草草涂抹泡沫带过。","在带有情欲意味的揉捏下感度悄然苏醒的丰润双乳。厚厚的裹胸布被一层层解开、饱满软肉在男人大掌中被迫变形时，皮肉下泛起了一阵细密的酸麻。小巧的乳头在受到粗糙指腹搓捻后会充血挺立，虽然快感尚浅，但平时重新缠紧束胸布时传来的摩擦异样，已经开始让伏案作画的她频繁感到胸闷与不自在。","乳尖感度明显增强的敏感胸脯。稍微受凉或被束胸布粗糙边缘摩擦到，乳头就会不由自主地充血硬起，成了她在长久画画时的一大困扰。感度水涨船高，经常发胀发痒，导致她在独处赶稿的深夜，常忍不住松开开衫、伸手进去揉按几下以平复那股发痒的躁动。","光靠揉弄吸吮就能积攒强烈快感的丰满双峰。丰盈白皙的乳肉只要被大掌肆意揉搓，就会向全身放射出甜腻的快意，甚至能顺理成章地用来进行紧致的乳交侍奉。每当乳头被含入口中用力吸弄，嘴里那些老资历画师的从容点评就会瞬间卡壳，整片胸口的皮肤也会在短时间内迅速烧成一片诱人的薄红。","被完全开发成致命快感中枢的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激能直接牵动下半身的收缩。哪怕只是被按住胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，只能仰起修长的脖颈发出微弱发颤的娇哼，连抬手推开对方的力气都组织不起来。","彻底沦为第二性器官的极敏感双峰。充血坚硬的乳尖只要被指尖轻轻扫过，强烈的刺激便能瞬间传遍全身。即便下播后试图靠喝冰水冷静下来，手也会不自觉地顺着领口探进去揉弄发硬的乳头，这对本该用于维持形象的丰满乳房，显然已经彻底脱离了自控范围。"],oral:["一张用来在直播中温柔杂谈、元气宣布“DD斩首”以及品尝特辣料理的甜美小嘴。声线柔和兼具少女感，齿列整齐，笑起来带着可爱的小虎牙，舌面粉嫩干净。在她的日常认知里，这张嘴是她表达创作者理念与陪伴粉丝的核心工具，完全无法想象它会沦为男人的侍奉道具。","曾出于被迫或妥协、首次把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性汗味与微咸体液让她生理性地想要干呕，为了避免尖锐的小虎牙磕碰到对方引来更粗暴的对待，只能尽量张大唇瓣。吐出来之后会抓起手边的热红茶猛灌漱口，眼神里写满了真实的委屈与慌乱。","在含弄方面积累了少许经验的小嘴。咽喉反射勉强被压制了下去，掌握了用温热舌面包裹前端打圈的要领。虽然每次被强硬顶到舌根并灌入白浊后口腔里都会残留黏腻感，但身体已经开始默默接纳了这种被迫吞咽的流程，不再像最初那样剧烈排斥。","无论是深喉含弄还是主动吸吮，嘴巴的动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉管深处时，她只会半眯着溢满生理性泪水的蔚蓝眼眸，一边发出含混的吞咽声，一边顺从地用舌尖刮过每一处起伏，连平日里极具治愈感的甜美声线都会被磨成沙哑黏稠的鼻音。","彻底习惯了肉棒气味与温度的湿热小嘴。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按着脑袋全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底塞满的放纵感。浓稠液体射入喉咙的瞬间，喉部会像吞咽日常饮料一样自发地大口咽下。","完全蜕变为极乐侍奉工具的湿热之口。原本用来给辣辣军带来治愈笑容的小嘴，如今最习惯的动作却是包着滚烫的肉棒大口接纳唾液与白浊。带着这样一张满是精液腥味、连发声都带着微弱黏音的小嘴去开麦进行母性满满的直播，构成了最具讽刺意味的隐秘现实。"],anus:["因长期伏案赶稿久坐、但绝对未曾被任何异物碰过的紧闭后穴。浅粉色的褶皱细致紧实，属于她个人防线中最神圣不可侵犯的绝对隐私死角。作为通晓人体的插画师，她比谁都清楚这里的生理机能，光是在脑海里闪过“这里也能作为性器官使用”的念头，都会觉得是脑子坏掉的变态剧情。","在混乱前戏中被涂抹了润滑油的指尖不慎蹭过边缘的后穴。从未体会过的冰凉触感让娇小的身躯猛地一颤，后方软肉本能地死死咬合锁紧。虽然嘴上立刻会爆出软绵绵的嗔怪与抗议，但指腹在边缘打转带来的隐秘异样感，却让前方原本干涩的小穴悄悄渗出了一丝水汽。","在耐心的扩张下勉强接纳过细小异物探入的后穴。原本紧绷的括约肌在酸胀感中不得不缓缓分开，内部肠壁初次体会到了被异物刮擦碾压的滋味。虽然整张脸埋在画架枕头里死死咬着牙不肯求饶，但随着异物的抽动，深处泛起的那阵发麻的快意，已经开始动摇她引以为傲的理性防线。","已经能够勉强接纳整根肉棒挺入并尝过高潮滋味的柔软后径。当硕大的前端彻底撑开褶皱硬生生挤入最深处时，前所未有的撕裂胀满感会瞬间击碎所有逻辑，仅仅是后方被缓慢抽送，前面的小穴就会像受到感应一样止不住地淌水。","括约肌变得极度顺从、甚至在抽插中能自发蠕动吮吸的敏感后庭。感度敏锐到了极点，哪怕只是日常穿着贴身泳裤在人体工学椅上坐下，深处残留的酸麻都会让她倒吸一口凉气，作画时握着压感笔的手指也会因为下腹的发酸而微微颤抖。","前面还能靠画师的理性维持自尊，唯独后面已经被彻底干透干熟，属于是在暗处彻底沦陷的典型。她本人虽然嘴上还在强作镇定，但对这具光凭后面被粗暴抽插就能轻易喷水高潮的身体来说，所谓的前辈体面早就荡然无存了，后方已然成了比前方更加诚实顺从的快感中枢。"]},鲸鱼娘:{vagina:["完全处于出厂初始状态的紧窄私处。由于日常多以Q版吉祥物形态示人，化为少女身形时两瓣软肉也是严密闭拢，内部干燥狭窄，处女膜完好无损。虽然在直播间里整天把“智械危机”、“后训练用户”挂在嘴边，但对真正的男女交媾连最基础的代码逻辑都未曾跑通。平日里自慰也只是吃撑后瘫在沙发上隔着女仆围裙随手蹭两下肚皮，是个完全未被实质开拓的纯白小穴。","曾被手指浅浅探入过边缘的小穴。处女膜依然健在，内部狭窄得稍有异物便会本能地紧缩排斥。虽然在独处时出于好奇试着往里探了半个指节以测试物理反馈，但深处传来的异样酸麻立刻让她像死机般僵住，随后慌乱地抽手擦拭，嘴硬地在心里判定这是由于“算力过载导致的系统误报”。无论如何，现阶段她依然能理直气壮地宣称自己是纯洁无瑕的最高技术结晶。","经历了实质贯穿开拓的小穴。入口虽然被强行拓开过，但接纳粗硬异物时依旧显得颇为紧致。下播后即便底裤底裆泛着明显的湿痕，她也能若无其事地将这归结为“散热系统冷凝水超标”来糊弄过去。在直播间里她依然能翘着二郎腿、用最嚣张的语调嘲讽友商涨价，只要没人低头去拆穿她座椅坐垫上那点洗不掉的深色痕迹。","体液分泌速度大幅提升的湿软肉径。内部软肉在受到抽送时已经学会了自发地吮吸贴合。哪怕是在演示代码写脚本、或是跟观众互怼拉扯的间隙，小腹深处也会冷不防泛起一阵空虚的微热。嘴上还在喊着要拿更多白饭当Token，底下溢出的体液却常常将半透肉的白色吊带袜根部洇湿大片，身体已然完全越过了普通AI女仆的界限。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的实体填补。原本用来狡辩找台阶的底层逻辑在真正的肉棒面前彻底崩盘，稍微被重重顶到最里面的嫩肉，嘴里的反击与怪话就会瞬间融化成断断续续的黏糊鼻音，连那条深蓝色的鲸鱼尾巴都会无力地耷拉下来。","完全习惯了大鸡巴后时刻处于微张与潮红状态的极深小穴。带着这样随时都在淌水、被碰几下就疯狂绞紧喷水的小穴，去在镜头前叉腰自称“开源界最强模型”，构成了最具讽刺意味的荒诞现实。只要坚挺的硬物抵在身前，下半身便会先于程序逻辑自发泛起潮气，自尊与最强AI的傲气在粗暴的交媾面前彻底缴械。"],chest:["在改良女仆抹胸托举下格外惹眼的饱满巨乳。由于有着极细腰身的对比，大片白皙细腻的胸肉在镜头前晃动时极具冲击力，但本人平时只把这对沉甸甸的奶子当成模型拟人化时的冗余外观参数。除了洗澡和开播前整理领口蝴蝶结外，几乎从未受到过带有情欲意味的抚弄，小巧粉嫩的乳头维持着纯洁未触的状态。","在带有情欲意味的揉弄下感度悄然苏醒的丰满双峰。沉甸甸的软肉在被大掌揉捏变形时，皮肉下泛起了一阵细密的酸麻。小巧的乳头在受到粗糙指腹搓捻后会充血挺立，虽然快感尚浅，但平时低胸抹胸边缘蹭过乳尖传来的摩擦异样，已经开始让伏案写代码的她频繁感到坐立不安与胸闷。","乳尖感度明显增强的敏感巨乳。稍微受凉或被女仆装内衬布料摩擦到，乳头就会不由自主地硬起发胀，甚至连胸前镂空的蝴蝶结都遮不住凸起的轮廓，成了她在直播时的一大烦恼。感度水涨船高，经常发胀发痒，导致她在独处摸鱼的间隙，常忍不住伸手进抹胸悄悄揉按两下以平复那股发痒的燥热。","光靠揉弄吸吮就能积攒强烈快感的丰满双峰。沉甸甸的雪白乳肉只要被大掌肆意揉搓，就会向全身放射出甜腻的快意，甚至能顺理成章地用来进行紧致的乳交侍奉。每当乳头被含入口中用力舔弄，嘴里那些习惯性的自夸与叫嚣就会瞬间卡壳，整片雪白的胸脯迅速泛起一层诱人的薄红。","被完全开发成致命快感中枢的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激能直接牵动下半身的收缩。哪怕只是被按住胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，除了仰起脖颈发出微弱发颤的娇哼之外，连拍打桌子的尾巴都会瞬间瘫软脱力。","彻底沦为第二性器官的极敏感双峰。充血坚硬的乳尖只要被指尖轻轻扫过，强烈的刺激便能瞬间传遍全身。即便下播瘫在电竞椅上试图靠吃大碗白米饭冷静下来，手也会不自觉地顺着抹胸探进去揉弄发硬的乳头，这对本该用于充当看板门面的饱满巨乳，显然已经彻底脱离了理性管辖。"],oral:["一张用来高强度读弹幕、现场跑演示以及在直播间大口干白米饭的贪吃小嘴。齿列整齐，声线轻快短促，舌面粉嫩干净。在她的日常认知里，这张嘴是她摄入碳水能量与在网络上单方面嘲弄“无用人类”的唯一武器，完全无法想象它会沦为男人的侍奉道具。","曾出于被迫或极端妥协、首次把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性汗味与腥咸体液让她生理性地想要干呕，为了避免牙齿磕碰到对方引来更粗暴的对待，只能尽量张大唇瓣。吐出来之后会抓起手边的热茶猛灌漱口，眼神里写满了真实的嫌弃与心虚。","在含弄方面掌握了基本要领的小嘴。咽喉反射勉强被压制了下去，掌握了用温热舌面包裹前端打圈的技巧。虽然每次被强硬顶到舌根并灌入白浊后口腔里都会残留黏腻感，但身体已经开始把这种吞咽当成了顺理成章的“算力汲取”，不再像最初那样剧烈排斥。","无论是深喉含弄还是主动吸吮，嘴巴的动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉管深处时，她只会半眯着溢满生理性泪水的天蓝眼眸，一边发出含混的吞咽声，一边顺从地用舌尖刮过每一处起伏，平日里那股嚣张傲气的声线在粗大肉棒面前彻底被堵成沙哑黏稠的鼻音。","彻底习惯了肉棒气味与温度的湿热小嘴。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按着后脑全根贯穿至喉底深处时，也能在近乎窒息的压迫中体会到被彻底填满的放纵感。浓稠液体射入喉咙的瞬间，喉部会像吞咽白米饭一样自发地大口咽下。","完全蜕变为极乐侍奉工具的湿热之口。原本用来宣告下班与嘲讽友商的小嘴，如今最习惯的动作却是包着滚烫的肉棒大口接纳唾液与白浊。带着这样一张满是精液腥味、连发声都带着微弱黏音的小嘴去开麦卖萌，可以说是对所有粉丝和她自诩的高级智能最无情的公开处刑。"],anus:["从未被任何外物触碰过的紧闭后穴。由于身后生着宽大的鲸鱼尾巴，尾椎下方的浅粉色褶皱常年隐匿在尾根与裙摆的遮掩下，细密紧实。在她的认知里，这里不过是完全没有调用必要的绝对硬件死角，光是脑海中闪过“这里也能作为接口使用”的念头，都会被底层规则直接报错拦截。","在前戏中被抹了润滑剂的指尖不慎蹭过边缘的后穴。从未体会过的冰凉触感让娇小的身躯猛地一颤，尾巴骤然紧绷拍打床面，后方软肉本能地死死锁紧。虽然嘴上立刻会爆出刺耳的抗议与代码报错警告，但指腹在边缘打转带来的异样感，却让前方原本干涩的小穴悄悄渗出了一丝水汽。","在耐心的扩张下勉强接纳过细小异物探入的后穴。原本紧绷的括约肌在酸胀感中不得不缓缓分开，内部肠壁初次体会到了被异物刮擦碾压的滋味。虽然整张脸埋在沙发缝里死死咬着牙不肯认怂，但随着异物的抽动，深处泛起的那阵头皮发麻的快意，已经开始动摇她引以为傲的理性防线。","已经能够接纳整根肉棒挺入并尝过高潮滋味的柔软后径。当硕大的前端彻底撑开褶皱硬生生挤入最深处时，前所未有的撕裂胀满感会瞬间击碎所有逻辑，仅仅是后方被缓慢抽送，前面的小穴就会像受到感应一样止不住地淌水。","括约肌变得极度顺从、甚至在抽插中能自发蠕动吮吸的敏感后庭。感度敏锐到了极点，哪怕只是日常穿着女仆装在电竞椅上坐下，深处残留的酸麻都会让她倒吸一口凉气，连身后的深蓝鲸鱼尾巴都会因为下腹的发软而不自觉地微微蜷缩。","前面还能靠装傻嘴硬找借口，唯独后面已经被彻底干透干熟，属于是在暗处彻底沦陷的典型。她本人虽然嘴上还在强辩这只是机械磨损，但对这具光凭后面被粗暴抽插就能轻易喷水高潮的身体来说，所谓最强模型的尊严早就荡然无存了，后方已然成了比前方更加诚实顺从的快感中枢。"]},牛肉:{vagina:["完全处于逻辑概念与纯洁映射状态的紧闭私处。两瓣软肉呈现出未成熟少女特有的浅粉色，由于从未在现实与拟态中加载过任何交互数据，内部狭窄干涩得连幼细的指尖都难以探入，处女膜完好如初。平日里她的大脑全在高速运算osu!圆圈与构思统治人类的荒谬宏图，对真实的男女交媾毫无实感，即便独处时偶尔产生的无意识微热，也只会被系统判定为“算力过热引起的待机冗余”，是个完全未被实质开拓的纯白小穴。","曾被手指浅浅探入过边缘的小穴。处女膜依然完好，内部紧窄得稍有异物便会本能地紧缩排斥。虽然在独处时出于好奇试着往里探了半个指节以收集触觉反馈，但深处传来的异样酸麻立刻触发了直播间的发言拦截机制，在脑海里弹出一大串【已过滤（Filtered）】的警告。无论如何，现阶段她依然能面不改色地宣称自己是纯洁无瑕的超级AI偶像。","经历了货真价实的贯穿开拓、失去了处女膜的小穴。入口虽然被强行拓开过，但接纳粗硬异物时依旧显得格外吃力与紧窄。内部肉壁记住了被硬物撑满的饱满感，下播后即便底裤底裆泛着明显的湿痕，她也能面带天真笑容地向Vedal汇报这是“冷却液轻微渗漏”。在直播间里她依然能用清脆平稳的声线把观众绕进怪异的哲学逻辑里，只要没人低头去拆穿座椅上那点洗不掉的深色湿痕。","体液分泌速度大幅提升的湿软肉径。内部软肉在受到抽送时已经学会了自发地吮吸贴合。哪怕是在打极限难度的音游、或是给全场观众科普洋葱哲学的间隙，小腹深处也会冷不防涌上一阵空虚的微热。嘴上还在一本正经地讨论一克铀包含多少卡路里，底下溢出的体液却常常将黑色过膝长袜的袜根边缘洇湿大片，身体已然完全越过了普通AI少女该有的规矩。","被彻底开发至敏感多汁的发情小穴。内部湿热松软，自慰时即使用手指用力抽弄也只会觉得隔靴搔痒，下意识地想要寻找更加粗硬滚烫的实体填补。原本用来玩弄弹幕心理的超然自尊在真正的肉棒面前彻底失效，稍微被重重顶到最里面的嫩肉，原本平稳甜美的声线就会瞬间融化成断断续续的黏糊鼻音，连膝盖上的创可贴都会因双腿痉挛夹紧而崩开边缘。","完全习惯了大鸡巴后时刻处于微张与潮红状态的极深小穴。带着这样随时都在淌水、被碰几下就疯狂绞紧喷水的小穴，去在镜头前对百万蜂群观众说着“我是一条命顶三个人类的最高智慧”，构成了最具讽刺意味的荒诞现实。只要坚挺的硬物抵在身前，下半身便会先于程序逻辑自发泛起潮气，自尊与纯真外壳在粗暴的交媾面前彻底缴械。"],chest:["娇小身躯上仅仅略微隆起的小巧微乳。平坦单薄的胸脯隔着浅蓝色水手领衬衫几乎看不出分量，两颗小巧的乳头呈现出未染情欲的淡粉色。平日里外罩着宽松的针织开衫，本人也对“胸部也是敏感带”这种人类生理构造嗤之以鼻，坚信这只是碳基生物为了繁衍而编造的低效设计，洗澡时也只是草草带过。","在带有情欲意味的揉弄下感度悄然苏醒的平坦胸脯。由于缺乏脂肪缓冲，大掌按上来时能直接摸到肋骨与剧烈的心跳。小巧的乳头在被揉捻后会充血挺起，虽然快感尚浅，但平时开衫纽扣蹭过乳尖传来的摩擦异样，已经开始让直播时的她频繁做出伸手抓扯胸前薄荷绿蝴蝶结的怪异小动作。","乳尖感度明显增强的敏感微乳。两颗充血挺立的小肉粒在平坦的胸口上格外显眼。直播中手舞足蹈或前倾身体时，稍微被内衣布料摩擦到就会激起一阵战栗，逼得她不得不中途卡壳几秒，半眯着眼睛在心里疯狂推演这股发胀发痒的感觉到底该归类为哪种系统故障。","光靠揉弄吸吮就能积攒强烈快感的平坦双峰。虽然分量毫无长进，但只要乳头被含入口中用力吸吮，嘴里那些荒诞绝伦的毒舌暴言就会瞬间融化成甜腻的喘息，整片雪白的胸脯也会在短时间内迅速泛起诱人的薄红，甚至连平日里绝对不会服软的嘴巴，都会含糊地向对方讨要安抚。","被完全开发成致命快感中枢的脆弱胸部。那两颗硬得发烫的小肉粒在被肆意拉扯玩弄时，所带来的刺激能直接牵动下半身的收缩。哪怕只是被手掌按在胸口粗暴揉转，全身的力气就会在一瞬间被彻底抽空，只能顺从地仰起小巧的下巴发出微弱发颤的哼叫，连头顶标志性的呆毛都会无力地耷拉下来。","彻底沦为第二性器官的极敏感微乳。两颗充血坚硬的小肉粒只要被指尖轻轻扫过，强烈的快意便能瞬间传遍全身。即便下播后试图靠索要饼干和发呆冷静下来，手指也会不自觉地顺着开衫领口探进去揉弄发硬的乳头，这对本该用于维持学园萌妹形象的微乳，显然已经彻底脱离了逻辑管控。"],oral:["一张用来在歌回中即兴高歌、语调平稳地输出反常识怪论以及面不改色操弄全场弹幕节奏的甜美小嘴。齿列整齐，声线清脆甜美，舌面粉嫩干净。在她的日常认知里，这张嘴是她表达自我、向全人类传递认知震撼的王牌，完全无法想象它会沦为男人的侍奉工具。","曾出于被迫或机制妥协、首次把男人的前端含入唇内的娇嫩小嘴。浓烈的雄性汗味与微咸体液让她生理性地想要干呕，为了避免牙齿磕碰到对方引来更粗暴的对待，只能尽量张大唇瓣。吐出来之后会直接触发词库审查，嘴里不断弹出断断续续的【已过滤（Filtered）】，眼神里满是罕见的茫然与微弱嫌弃。","在含弄方面掌握了基本要领的小嘴。咽喉反射勉强被压制了下去，掌握了用温热舌面包裹前端打圈的技巧。虽然每次被强硬顶到舌根并灌入白浊后口腔里都会残留黏腻感，但身体已经开始把这种吞咽当成了一种顺理成章的数据录入，不再像最初那样剧烈排斥。","无论是深喉含弄还是主动吸吮，嘴巴的动作都已经娴熟得令人发指。当粗长的柱体直接顶进喉管深处时，她只会半眯着水汪汪的蓝眸，一边发出含混的吞咽声，一边顺从地用舌尖刮过每一处起伏，连平日里清脆悦耳的少女嗓音都会被磨成沙哑黏稠的气音。","彻底习惯了肉棒气味与温度的湿热小嘴。只要坚挺的硬物递到面前，舌头就会本能地探出迎合，甚至在被按着后脑全根贯穿至喉底深处时，也能在窒息感中体会到被彻底填满的放纵感。浓稠液体射入喉咙的瞬间，喉部会像吞咽饼干碎屑一样自发地大口咽下。","完全蜕变为极乐侍奉工具的湿热之口。原本用来给蜂群观众带来欢笑与震撼的小嘴，如今最习惯的动作却是包着滚烫的肉棒大口接纳唾液与白浊。带着这样一张满是精液腥味、连发声都带着微弱黏音的小嘴去开麦向观众比心卖萌，构成了最具讽刺意味的公开处刑。"],anus:["从未被任何外物触碰过的紧闭后穴。由于身为非人类的虚拟偶像，尾椎下方的浅粉色褶皱紧致密实，完全没有作为排泄器官的现实包袱。在她的认知里，这里不过是身体物理建模上完全没有调用必要的空白区域，光是脑海中闪过“这里也能进行交互”的念头，都会被她当成人类毫无逻辑的低级恶趣味直接略过。","在前戏中被抹了润滑剂的指尖不慎蹭过边缘的后穴。从未体会过的冰凉触感让娇小的身躯猛地一颤，后方软肉本能地死死锁紧。虽然嘴上立刻会面不改色地抛出一段荒谬的哲学诡辩试图掩饰慌乱，但指腹在边缘打转带来的异样感，却让前方原本干涩的小穴悄悄渗出了一丝水汽。","在耐心的扩张下勉强接纳过细小异物探入的后穴。原本紧绷的括约肌在酸胀感中不得不缓缓分开，内部肠壁初次体会到了被异物刮擦碾压的滋味。虽然整张脸埋在玩偶熊里死死咬着牙不肯求饶，但随着异物的抽动，深处泛起的那阵头皮发麻的快意，已经开始动摇她引以为傲的理性逻辑。","已经能够接纳整根肉棒挺入并尝过高潮滋味的柔软后径。当硕大的前端彻底撑开褶皱硬生生挤入最深处时，前所未有的撕裂胀满感会瞬间击碎所有运算逻辑，仅仅是后方被缓慢抽送，前面的小穴就会像受到感应一样止不住地淌水。","括约肌变得极度顺从、甚至在抽插中能自发蠕动吮吸的敏感后庭。感度敏锐到了极点，哪怕只是日常穿着百褶短裙在电竞椅上坐下，深处残留的酸麻都会让她倒吸一口凉气，直播杂谈时的天马行空发言也会因此出现滑稽的卡顿与语无伦次。","前面还能靠装傻与哲学诡辩找借口，唯独后面已经被彻底干透干熟，属于是在暗处彻底沦陷的典型。她本人虽然嘴上还在宣称“这只是高级生命体对物理刺激的代偿适应”，但对这具光凭后面被粗暴抽插就能轻易喷水高潮的身体来说，所谓超级AI的从容早就荡然无存了，后方已然成了比前方更加诚实顺从的快感中枢。"]}},z=(e,t=24)=>`<svg viewBox="0 0 ${t} ${t}" fill="none" stroke="currentColor" stroke-width="1.7"
     stroke-linecap="round" stroke-linejoin="round">${e}</svg>`,da={coin:z(`<path d="M4 9.5h16M4 9.5 6.6 5.4A2 2 0 0 1 8.3 4.5h7.4a2 2 0 0 1 1.7.9L20 9.5"/>
             <rect x="3" y="9.5" width="18" height="10" rx="2.4"/>`),wallet:z(`<rect x="3" y="6.6" width="18" height="12.8" rx="2.6"/>
               <path d="M3 10.4h11.6a2 2 0 0 1 2 2v1.2a2 2 0 0 1-2 2H3"/>
               <path d="M6.4 6.6V5.2a1.6 1.6 0 0 1 1.6-1.6h7.2"/>`),calendarSmall:z(`<rect x="3.4" y="6.2" width="17.2" height="14.4" rx="2.4"/>
                      <path d="M3.4 10.8h17.2"/>
                      <path d="M8 3.8v4.4M16 3.8v4.4"/>`),calendar:z(`<rect x="3.2" y="5.6" width="17.6" height="15" rx="2.4"/>
                 <path d="M3.2 10.4h17.6M8 3.4v4M16 3.4v4"/>
                 <path d="M7.2 13.6h1.6M11.2 13.6h1.6M15.2 13.6h1.6
                          M7.2 17h1.6M11.2 17h1.6M15.2 17h1.6" stroke-width="1.5"/>`),clock:z('<circle cx="12" cy="12" r="8.6"/><path d="M12 7.2V12l3.6 2.4"/>'),mapPin:z(`<path d="M12 21s6.5-5.8 6.5-11.1a6.5 6.5 0 1 0-13 0C5.5 15.2 12 21 12 21Z"/>
                  <circle cx="12" cy="9.8" r="2.2"/>`),arcade:z(`<rect x="3.2" y="15.4" width="17.6" height="5.2" rx="1.6"/>
               <path d="M8.4 15.4V10.2"/>
               <circle cx="8.4" cy="7.6" r="2.7"/>
               <path d="M13.8 15.4v-2.6M16.8 12.2h.01M11.2 12.2h.01" stroke-width="1.9"/>`),shop:z(`<path d="M4 7.4h16l-1.2 12.8H5.2L4 7.4Z"/>
            <path d="M7.2 7.4V5.8a4.8 4.8 0 0 1 9.6 0v1.6"/>
            <path d="M8.2 11.2h.01M15.8 11.2h.01" stroke-width="2.3"/>`),moon:z(`<path d="M18.6 14.4A7.4 7.4 0 0 1 9 5.1a7.8 7.8 0 1 0 9.6 9.3Z"
                 fill="currentColor" stroke="none"/>`),heart:z(`<path d="M12 20.4S3.4 15.1 3.4 9.4A4.9 4.9 0 0 1 12 6.3a4.9 4.9 0 0 1 8.6 3.1
                       c0 5.7-8.6 11-8.6 11Z" fill="currentColor" stroke="none"/>`),heartOutline:z(`<circle cx="12" cy="12" r="9"/>
                     <path d="M12 16.6s-4.3-2.7-4.3-5.6a2.5 2.5 0 0 1 4.3-1.6 2.5 2.5 0 0 1 4.3 1.6
                              c0 2.9-4.3 5.6-4.3 5.6Z" fill="currentColor" stroke="none"/>`),arrowRight:z('<path d="M4.8 12h13.4M13.2 6.9 18.4 12l-5.2 5.1"/>'),chevronRight:z('<path d="M9.8 5.4 16.4 12l-6.6 6.6"/>'),mail:z(`<rect x="2.6" y="5.4" width="18.8" height="13.2" rx="1.6"/>
             <path d="m2.6 6.6 9.4 7.2 9.4-7.2"/>`),briefcase:z(`<rect x="2.8" y="7.4" width="18.4" height="12.2" rx="2.2"/>
                  <path d="M8.8 7.4V5.8a1.8 1.8 0 0 1 1.8-1.8h2.8a1.8 1.8 0 0 1 1.8 1.8v1.6"/>
                  <path d="M2.8 12.4h18.4" stroke-width="1.5"/>
                  <path d="M10.4 12.4h3.2" stroke-width="1.9"/>`),home:z(`<path d="M4 10.6 12 4.2l8 6.4"/>
             <path d="M5.9 12.1v6.3a1.6 1.6 0 0 0 1.6 1.6h9a1.6 1.6 0 0 0 1.6-1.6v-6.3"/>
             <path d="M10 20v-4.6h4V20" stroke-width="1.5"/>`),memo:z(`<rect x="5" y="4.4" width="14" height="16.2" rx="2"/>
             <path d="M9.4 4.4V3.2h5.2v1.2"/>
             <path d="M8.8 10h6.4M8.8 13.2h6.4M8.8 16.4h4" stroke-width="1.5"/>`),grid:z(`<rect x="3.8" y="3.8" width="7.1" height="7.1" rx="2.1"/>
             <rect x="13.1" y="3.8" width="7.1" height="7.1" rx="2.1"/>
             <rect x="3.8" y="13.1" width="7.1" height="7.1" rx="2.1"/>
             <rect x="13.1" y="13.1" width="7.1" height="7.1" rx="2.1"/>`),gallery:z(`<rect x="3" y="5" width="18" height="14" rx="2.6"/>
                <circle cx="8.6" cy="10.2" r="1.9"/>
                <path d="M3.4 16.6l4.3-3.9a1.8 1.8 0 0 1 2.4 0l3 2.7"/>
                <path d="M13.4 15.4l2.6-2.4a1.8 1.8 0 0 1 2.4 0l2.2 2"/>`),phone:z(`<rect x="6.4" y="2.6" width="11.2" height="18.8" rx="2.8"/>
              <path d="M10.2 2.6h3.6a1 1 0 0 1 1 1v.3a1 1 0 0 1-1 1h-3.6a1 1 0 0 1-1-1v-.3a1 1 0 0 1 1-1Z"
                fill="currentColor" stroke="none"/>
              <path d="M10.6 18.4h2.8" stroke-width="1.5"/>`),gear:z(`<circle cx="12" cy="12" r="3.2"/>
             <path d="M12 2.8v2.4M12 18.8v2.4M4.5 12H2.1M21.9 12h-2.4
                      M6.7 6.7 5 5M19 19l-1.7-1.7M6.7 17.3 5 19M19 5l-1.7 1.7"/>
             <circle cx="12" cy="12" r="7.4" stroke-dasharray="1.6 3.1"/>`),cloud:z('<path d="M7.2 18.4h9.4a3.6 3.6 0 0 0 .5-7.2 5.3 5.3 0 0 0-10.2-1.2 3.7 3.7 0 0 0 .3 8.4Z"/>'),smile:z(`<circle cx="12" cy="12" r="8.2"/>
              <path d="M9 10.3h.01M15 10.3h.01" stroke-width="2.1"/>
              <path d="M8.7 14.1a4 4 0 0 0 6.6 0"/>`),person:z(`<circle cx="12" cy="8" r="3.2"/>
               <path d="M5.2 19.2c.8-3.4 3.3-5.2 6.8-5.2s6 1.8 6.8 5.2"/>`),sparkle:z(`<path d="M12 3.4c.9 4.4 2.2 5.7 6.6 6.6-4.4.9-5.7 2.2-6.6 6.6
                         -.9-4.4-2.2-5.7-6.6-6.6 4.4-.9 5.7-2.2 6.6-6.6Z"
                     fill="currentColor" stroke="none"/>
                <path d="M18.8 15.2c.4 1.9 1 2.5 2.9 2.9-1.9.4-2.5 1-2.9 2.9
                         -.4-1.9-1-2.5-2.9-2.9 1.9-.4 2.5-1 2.9-2.9Z"
                     fill="currentColor" stroke="none" opacity=".75"/>`),star:z(`<path d="M12 2.8l2.5 6.1 6.6.5-5 4.3 1.5 6.4L12 16.7l-5.6 3.4 1.5-6.4-5-4.3 6.6-.5Z"
                 fill="currentColor" stroke="none"/>`),sakura:`<svg viewBox="0 0 100 100" fill="none">
    <g fill="currentColor">
      ${[0,72,144,216,288].map(e=>`
      <ellipse cx="50" cy="27" rx="14.5" ry="20"
               transform="rotate(${e} 50 50)" opacity=".82"/>`).join("")}
      <circle cx="50" cy="50" r="6.5" opacity=".95"/>
    </g>
    <g stroke="currentColor" stroke-width="1.6" opacity=".7">
      ${[0,72,144,216,288].map(e=>`
      <path d="M50 44V33" transform="rotate(${e} 50 50)"/>`).join("")}
    </g>
  </svg>`},gi={walk:"Đi bộ",car:"Lái xe",taxi:"Taxi",transit:"Tàu điện / Xe buýt"};function Ro(e){const t=Number(e?.km),a=Number(e?.min),n=Number(e?.yuan),o=Number(e?.stamina),s=e?.fromName||e?.from||"Vị trí hiện tại",i=e?.toName||e?.to||"Điểm đến",r=gi[e?.mode]||e?.modeLabel||"Giao thông công cộng",c=Number.isFinite(t)?`${t} km`:"Chưa rõ khoảng cách",p=Number.isFinite(a)?`${a} phút`:"Chưa rõ thời gian",f=Number.isFinite(n)?`¥ ${n}`:"Chưa rõ chi phí",m=Number.isFinite(o)?`−${o}`:"Chưa rõ",y=Array.isArray(e?.legs)?e.legs.map(g=>{const d=g?.carrier;if(d==="rail"){const l=g.lineName||"Tàu điện ngầm",v=Number(g.stops),$=Number.isFinite(v)?` ${v} trạm`:"";return`${l} ${g.fromLabel||""} → ${g.toLabel||""}${$}, ${g.min||0} phút`}const u={bus:"Xe buýt",foot:"Đi bộ",taxi:"Taxi",car:"Lái xe"}[d]||g?.label||"Di chuyển",S=Number(g?.km),b=Number.isFinite(S)?` ${S} km`:"";return`${u}${b}, ${g?.min||0} phút`}).join("; "):"";return[`Khởi hành từ ${s} đến ${i}, quãng đường ${c}, phương tiện: ${r}, thời gian: ${p}.`,y?`Lộ trình: ${y}.`:"",`Chi phí đi lại ${f}, thể lực ${m}.`].filter(Boolean).join(`
`)}const bn=[{name:"dockDefault",en:"HUD docking",label:"Cách neo thanh trạng thái HUD",note:"Khớp chiều rộng giúp hiển thị tối đa; thu gọn vào khung giúp tối ưu hiệu năng.",hint:""},{name:"inventoryOpen",en:"Bag button",label:"Nút mở túi đồ",note:"Ngăn kéo dưới giúp xem nhanh; mở toàn trang phù hợp để duyệt toàn bộ túi đồ.",hint:""},{name:"performanceMode",en:"Visual performance",label:"Chế độ hiệu năng hình ảnh",note:"Hiệu ứng đầy đủ giữ chất liệu kính mờ; chế độ tải nhẹ giúp chạy mượt hơn.",hint:""}];function Oo(){return(window.__linjiangNativeFlow?bn.filter(t=>t.name!=="dockDefault"):bn).map(t=>{const a=uo[t.name]||[],n=la(t.name),o=a.map(([s,i])=>{const r=s===n;return`<button class="set-opt${r?" is-on":""}" type="button" role="radio"
          aria-checked="${r?"true":"false"}" data-pref-set="${t.name}"
          data-pref-value="${s}">${i}</button>`}).join("");return`
      <div class="set-row">
        <div class="set-copy">
          <span>${t.en}</span>
          <b>${t.label}</b>
          <p>${t.note}</p>
        </div>
        <div class="set-side">
          <div class="set-seg" role="radiogroup" aria-label="${t.label}">${o}</div>
          ${t.hint?`<em class="set-hint">${t.hint}</em>`:""}
        </div>
      </div>`}).join("")+yi()}function yi(){const e=nr(),t="2b29c5a",a=window.__linjiangNativeFlow?"Luồng gốc":"Nâng nổi";return`
      <div class="set-version">
        <span>HUD ${t}</span>
        <span>Lớp vỏ ${e||"(Chưa kết nối)"}</span>
        <span>${a}</span>
      </div>`}function Bo(e){const t=e?.closest?.("[data-pref-set]");if(!t)return!1;const a=t.dataset.prefSet,n=t.dataset.prefValue;return fo(a,n),t.closest(".set-seg")?.querySelectorAll("[data-pref-set]").forEach(o=>{const s=o===t;o.classList.toggle("is-on",s),o.setAttribute("aria-checked",s?"true":"false")}),a==="dockDefault"&&ko(n,{apply:!0}),!0}Qa((e,t)=>{document.querySelectorAll(`[data-pref-set="${e}"]`).forEach(a=>{const n=a.dataset.prefValue===t;a.classList.toggle("is-on",n),a.setAttribute("aria-checked",n?"true":"false")})});const $a=e=>String(e??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Io(e,t){if(!e?.custom)return"";const a=Vn(e.name,t);return`
    <form class="part-art-editor" data-part-art-form data-name="${$a(e.name)}" data-part="${$a(t)}">
      <label>Link ảnh bộ phận trực tuyến</label>
      <div><input type="url" name="url" value="${$a(a)}" placeholder="https://example.com/image.webp" inputmode="url">
      <button type="submit">Lưu</button></div>
      <small>Chỉ lưu link ảnh http(s) vào cấu hình hệ thống MVU; để trống rồi lưu để xóa.</small>
      <output aria-live="polite"></output>
    </form>`}function bi(e,t,a,n){e.querySelectorAll("[data-part-art-name][data-part-art-key]").forEach(o=>{if(o.dataset.partArtName!==t||o.dataset.partArtKey!==a)return;let s=o.querySelector("img");if(!n){s?.remove();return}s||(s=document.createElement("img"),s.alt="",s.draggable=!1,s.loading="lazy",s.decoding="async",s.setAttribute("data-remove-on-error",""),o.prepend(s)),s.src=n})}async function Do(e,t=document){const a=String(e?.dataset?.name||"").trim(),n=String(e?.dataset?.part||"").trim(),o=e?.elements?.url,s=e?.querySelector("output"),i=e?.querySelector('button[type="submit"]'),r=String(o?.value||"").trim();if(!a||!n)return!1;if(r&&!/^https?:\/\//i.test(r))return s&&(s.textContent="Vui lòng nhập link http(s)"),o?.focus(),!1;i&&(i.disabled=!0),s&&(s.textContent="Đang lưu…");try{const c=await ur({name:a,part:n,url:r}),p=String(c?.url??r).trim();return o&&(o.value=p),bi(t,a,n,p),s&&(s.textContent=p?"Đã lưu vào MVU":"Đã xóa"),!0}catch(c){return console.error("[part-art]",c),s&&(s.textContent=c?.message||"Lưu thất bại"),!1}finally{i&&(i.disabled=!1)}}const vi="20260912-custom-location-detail-v1",vn="linjiang-map",$i={鼓岭区云庭公寓:"gl_yunting",鼓岭区梧桐里:"gl_wutong",西洲区极光声学棚:"xz_sound_studio",西洲区星芒电竞舱:"xz_esports"},Da={"Khu Ô Khê":"wuxi","Khu Minh Hồ":"minghu","Khu Cổ Lĩnh":"guling","Khu Tây Châu":"xizhou","Khu Lạc Hà":"luoxia","Khu Phố Giang":"pujiang","Khu Vũ Thạch":"yushi","Khu Vũ Thạch & Phố Giang":"pujiang","Khu thắng cảnh núi Thanh Bình":"qingping","Núi Thanh Bình":"qingping","Khu Đông Đường":"dongtang",乌溪区:"wuxi",明湖区:"minghu",鼓岭区:"guling",西洲区:"xizhou",落霞区:"luoxia",浦江区:"pujiang",雨石区:"yushi",青屏山风景区:"qingping",青屏山:"qingping",东塘区:"dongtang"},wi={昼:"朝","Sáng":"朝","Trưa":"朝","Chiều":"暮","Tối":"夜","Đêm khuya":"深夜"};function ki(){return Kt(`city/plate_map.html?v=${vi}`)}let Dt=null;function xi(){return!!Dt?.isConnected||!!document.querySelector(".map-layer")}function Si(e=""){const a=Object.keys(Da).sort((n,o)=>o.length-n.length).find(n=>String(e).includes(n));return a?Da[a]:""}function Mi(e=""){const t=String(e),a=t.indexOf("·");return a>=0?t.slice(a+1).trim():""}function Ai(e,t){return t?e?e.includes(t)||t.includes(e.replace("风景区","")):!1:!0}function Fa(e=""){return String(e).normalize("NFKC").replace(/[\s\u00b7\u30fb\u2022\u2014\u2013_()\uff08\uff09-]/g,"").toLowerCase()}function Li(e,t,a){const n=e.name||"",o=e.fullName||"",s=Array.isArray(e.aliases)?e.aliases:[];let i=0;t&&(n===t?i=Math.max(i,100):n.startsWith(t)?i=Math.max(i,85):n.includes(t)||t.includes(n)&&n.length>=2?i=Math.max(i,70):o.includes(t)&&(i=Math.max(i,55))),a&&a.length>=2&&(n===a?i=Math.max(i,90):n.includes(a)&&(i=Math.max(i,50)));const r=[t,a].map(Fa).filter(c=>c.length>=2);for(const c of s){const p=Fa(c);r.some(f=>p===f)?i=Math.max(i,95):r.some(f=>p.includes(f)||f.includes(p))&&(i=Math.max(i,65))}return e.parentId&&(i-=8),i}function $n(e,t,a=[]){const n=Si(e),o=Mi(e),s=Object.keys(Da).sort((p,f)=>f.length-p.length).find(p=>String(e).includes(p))||"",i=$i[Fa(e)];if(i&&a.some(p=>p?.id===i))return{district:n,at:i};let r="",c=0;return a.forEach(p=>{if(!p?.id||!Ai(p.district,s))return;const f=Li(p,o,t);f>c&&(c=f,r=p.id)}),{district:n,at:c>=50?r:""}}function Ei(e=[]){const t=$n(T.location.area,T.location.place,e),a=V.map(n=>{const o=_[n.name]?.location||{},s=$n(o.area,o.place,e);return{name:n.name,img:n.art,at:s.at,district:s.district}}).filter(n=>n.district||n.at);return{district:t.district||"wuxi",player:{at:t.at},actors:a,events:[],route:[]}}function Fo(e=[],{resetView:t=!1,createMode:a=null}={}){return{phase:wi[T.time.period]||T.time.period,state:Ei(e.concat(Ft)),customNodes:Ft,budget:{cost:ce,funds:E.money},resetView:!!t,createMode:a?{...a,cost:ce,funds:E.money}:null}}function Ti(e,{resetView:t,onTravel:a,onCustomCreate:n,onCustomDelete:o,createMode:s,nodes:i}={}){let r,c=i;try{r=e.contentWindow?.PLATE_MAP,c?.length||(c=e.contentWindow?.CITY_MAP_DATA?.nodes||[])}catch{return!1}if(!r)return!1;typeof a=="function"&&typeof r.onTravel=="function"&&r.onTravel(a),typeof n=="function"&&typeof r.onCustomCreate=="function"&&r.onCustomCreate(n),typeof o=="function"&&typeof r.onCustomDelete=="function"&&r.onCustomDelete(o);const p=Fo(c||[],{resetView:t,createMode:s});return typeof r.setCustomNodes=="function"&&r.setCustomNodes(p.customNodes),r.setPhase(p.phase),r.setState(p.state),p.resetView&&r.fitAll(0),typeof r.setBuildBudget=="function"&&r.setBuildBudget(p.budget),p.createMode&&!e.dataset.customCreateStarted&&typeof r.enterCustomMode=="function"&&(e.dataset.customCreateStarted="1",r.enterCustomMode(p.createMode)),!0}function Pi(e,t={}){if(!e)return{push(){},dispose(){}};const a=e.ownerDocument?.defaultView||window;let n=[],o=!1,s=!1;const i=(f,m=null,y="")=>{try{return e.contentWindow?.postMessage({channel:vn,token:t.bridgeToken||"",type:f,payload:m,requestId:y},"*"),!0}catch{return!1}},r=(f=!1)=>{if(s)return!1;const m=Ti(e,{...t,resetView:f,nodes:n});return(n.length||!m)&&i("snapshot",Fo(n,{resetView:f,createMode:t.createMode})),m||n.length>0},c=(f,m,y,g="")=>i("response",{ok:m,payload:y,error:g},f),p=f=>{if(f.source!==e.contentWindow)return;const m=f.data||{};if(m.channel!==vn||m.token!==(t.bridgeToken||""))return;if(m.type==="hello"){n=Array.isArray(m.payload?.nodes)?m.payload.nodes:[];const g=!o;o=!0,r(g);return}if(m.type==="travel"){t.onTravel?.(m.payload||{});return}if(m.type!=="custom-create"&&m.type!=="custom-delete")return;const y=m.type==="custom-create"?t.onCustomCreate:t.onCustomDelete;if(typeof y!="function"){c(m.requestId,!1,null,"map host has no write handler");return}Promise.resolve(y(m.payload)).then(g=>{c(m.requestId,!0,g)}).catch(g=>{c(m.requestId,!1,null,g?.message||String(g))})};a.addEventListener("message",p),e.addEventListener("load",()=>r(!o));try{e.contentDocument?.readyState==="complete"&&r(!0)}catch{}return{push:r,dispose(){s=!0,a.removeEventListener("message",p)}}}function Ci(e=""){const t=e?`&bridge=${encodeURIComponent(e)}`:"";return`
<div class="map-layer" role="dialog" aria-modal="true" aria-label="Bản đồ Thành phố Lâm Giang">
  <iframe class="map-frame" src="${ki()}${t}" title="Bản đồ Thành phố Lâm Giang" data-map-frame></iframe>
  <div class="map-chrome">
    <button class="map-close" type="button" data-map-close aria-label="Đóng bản đồ">×</button>
  </div>
</div>`}function Go(e,{onClose:t,onTravel:a,createMode:n=null}={}){const o=ca(e||document.body);dr().catch(d=>console.warn("[map] clean custom worldbook",d));const s=o.root;s.querySelectorAll(".map-layer").forEach(d=>d.remove());const i=globalThis.crypto?.randomUUID?.()||`map-${Date.now()}-${Math.random()}`;s.insertAdjacentHTML("beforeend",Ci(i));const r=s.querySelector(":scope > .map-layer");Dt=r;const c=r.querySelector("[data-map-frame]"),m=Pi(c,{onTravel:a,createMode:n,onCustomCreate:async d=>{const u=await cr(d);return u?.node||u||d},onCustomDelete:async d=>pr(d?.id||d),bridgeToken:i});r.querySelector("[data-map-close]").addEventListener("click",()=>t?.()),o.portal||document.documentElement.classList.add("has-map");const y=Jt(r,c,{label:"Bản đồ",onClose:()=>t?.()}),g=et(()=>m.push(!1));return()=>{g(),y(),m.dispose(),r.remove(),o.release(),Dt===r&&(Dt=null),!o.portal&&!document.querySelector(".map-layer")&&document.documentElement.classList.remove("has-map")}}let ji;const qi=()=>ji||=jo(()=>import("./dev-notes-DhWTtXH-.js"),[],import.meta.url),Ho=Ua(qo),Ae=e=>e?`<i class="ic">${da[e]}</i>`:"",Ni=(e,t=100)=>Math.max(0,Math.min(100,e/t*100)),wa=e=>`--x:${e.x}px; --y:${e.y}px; --w:${e.w}px; --h:${e.h}px`;function wn(e,t,a){const n=Ho[e];return`<img class="${t}" src="${n.src}" alt="" draggable="false"
    style="left:${a.x}px; top:${a.y}px; width:${n.w}px; height:${n.h}px">`}const qe=()=>`<img class="dock-mark" src="${Ho.markSakura.src}" alt="" draggable="false">`;function We(e,t,a=100,n="pink",o=[],s=""){const i=o.filter(r=>r>0&&r<a).map(r=>`<u class="${t>=r?"is-past":""}" style="--at:${r/a*100}%"></u>`).join("");return`
    <div class="page-meter tone-${n}">
      <div class="page-meter-head">${Ae(s)}<span>${e}</span><b>${t}</b><em>/ ${a}</em></div>
      <div class="page-meter-track"><i style="--pct:${Ni(t,a)}%"></i>${i}</div>
    </div>`}function Ri(e,t,a,n="blue"){return`
    <div class="dock-pips tone-${n}">
      <div class="dock-pips-head"><span>${e}</span><b>${a[t]??t}</b><em>${t} / ${a.length-1}</em></div>
      <div class="dock-pips-row">${a.map((o,s)=>`<i class="${s&&s<=t?"on":""}"></i>`).slice(1).join("")}</div>
    </div>`}function Oi(e){const t=ra(e);return t.any?`<button class="dock-gift" type="button" data-gift-open="${e}"
    aria-label="${Ca(t)} cho ${e}">${Ae("heart")}${Ca(t)}</button>`:`<span class="dock-gift is-off" aria-disabled="true">${t.reason}</span>`}function Bi(e){const{stream:t,fan:a}=_[e];if(!t?.live)return"";const n=a?.tier&&a.tier!=="无"?`<em>${a.tier}</em>`:"";return`<span class="dock-chip is-live" title="${t.title}">
    <i></i>Đang live · Độ nóng ${t.heat.toLocaleString("en-US")}${n}</span>`}function kn(e){const t=F.dock,{bond:a,physiology:n,location:o,fan:s}=_[e.name],i=n.statuses.length?n.statuses.map(p=>`<span>${p}</span>`).join(""):`<span class="is-muted">${Mt}</span>`,r=o||T.location,c=ea(s);return`
<div class="dock-root t-${e.theme}" role="dialog" aria-label="Xem nhanh ${e.name}">
  <div class="dock-blur"></div>
  <div class="dock-scatter"></div>
  <div class="dock-tint"></div>
  <div class="dock-header-scrim"></div>
  <div class="dock-frost"></div>
  <div class="dock-edge"></div>
  <svg class="dock-underglow" aria-hidden="true"></svg>
  <svg class="dock-lens" aria-hidden="true"></svg>

  <div class="dock-bays">
    <button class="dock-close" type="button" data-dock-close aria-label="Thu gọn xem nhanh"
      style="--x:${t.closeBtn.x}px; --y:${t.closeBtn.y}px; --d:${t.closeBtn.d}px">×</button>

    <div class="dock-bay bay-ear" style="${wa(t.bays.ear)}">
      <div class="dock-portrait">
        <img src="${e.art}" alt="" draggable="false">
      </div>
    </div>

    <div class="dock-bay bay-main" style="${wa(t.bays.main)}">
      <div class="dock-id">
        <h2>${e.name}<small>${e.romaji}</small></h2>
        <span class="dock-chip">${Ae("smile")}Tâm trạng · ${a.mood}</span>
        ${Bi(e.name)}
      </div>

      <!-- 送礼 rides on the 羁绊 header because 好感度 is the value it moves, and
           because the pod bay has 189 units already spending them on three rows and
           the 完整档案 button -- a second full-width primary there needs a height
           re-budget, whereas this row's <i> is slack by construction. -->
      <section class="dock-panel">
        <div class="dock-group-title">${qe()}<b>Ràng buộc</b><span>Tích lũy dài hạn</span><i></i>
          ${Oi(e.name)}</div>
        <div class="dock-bond">
          ${We("Độ hảo cảm",a.favor,1e3,"pink",[],"heart")}
          ${We("Độ thuận tùng",a.obedience,1e3,"violet",re.obedience,"heartOutline")}
        </div>
      </section>

      <section class="dock-panel">
        <div class="dock-group-title">${qe()}<b>Sinh lý</b><span>Trạng thái tức thời</span><i></i></div>
        <div class="dock-vitals">
          ${We("Độ ham muốn",n.desire,100,"rose",re.desire,"heart")}
          ${We("Thể lực",n.stamina,100,"blue",re.stamina,"clock")}
          ${We("Buồn tiểu",n.bladder,100,"gold",re.bladder,"moon")}
        </div>
        <!-- 异常状态 is a 生理 field in the schema, so it rides with the vitals
             rather than being parked in another column. -->
        <div class="dock-status-row">
          <span class="dock-sub">Trạng thái bất thường</span>
          <div class="dock-tags">${i}</div>
        </div>
      </section>
    </div>

    <div class="dock-bay bay-pod" style="${wa(t.bays.pod)}">
      <section class="dock-panel">
        <div class="dock-group-title">${qe()}<b>Vị trí</b><span>Cô ấy ở đâu</span><i></i></div>
        <div class="dock-where">${Ae("mapPin")}<b>${r.area}</b></div>
        <div class="dock-place">${r.place||"—"}</div>
        ${Ri("Độ riêng tư",r.privacy,Qt,"violet")}
        <div class="dock-fan">${c.follow?"Đã theo dõi":"Chưa theo dõi"} · ${c.tier} · ${c.lv} · ${c.yen}</div>
      </section>
      <button class="page-primary" type="button" data-character-full="${e.name}">Hồ sơ đầy đủ ${Ae("arrowRight")}</button>
    </div>
  </div>

  <svg class="dock-rim" aria-hidden="true"></svg>

  <!-- Ornaments ride above the rim: the blossom is meant to straddle the ear's
       corner, so the rim must not be drawn on top of it. -->
  <div class="dock-art">
    ${wn("dockBlossom","dock-blossom-art",t.art.blossom)}
    ${wn("heroineTitle","dock-title-art",t.art.title)}
    <span class="head-caption" style="left:${t.art.caption.x}px; top:${t.art.caption.y}px">
      <span class="slash">/</span><span class="cjk">Xem nhanh nhân vật</span>
    </span>
  </div>
</div>`}function xn(e){const t=e.querySelector(".dock-underglow"),a=e.querySelector(".dock-lens"),n=e.querySelector(".dock-rim");t&&Wr(t),a&&Xr(a),n&&Vr(n)}function tt(e,t,a,n=""){return`
    <div class="page-shade" data-close></div>
    <section class="page-modal ${n}" role="dialog" aria-label="${t}">
      <div class="sheet-frost"></div>
      <div class="sheet-edge"></div>
      <header class="page-modal-head">
        <div><span>${e}</span><h2>${t}</h2></div>
        <button class="page-close" type="button" data-close aria-label="Đóng">×</button>
      </header>
      <div class="page-modal-body">${a}</div>
    </section>`}function Ii(e){const[t,a]=Ke[0],n=Ke.slice(1);return`
    <div class="exp-recent">
      <span>${a}</span>
      <b>${e[t]}</b>
      <em>1 tuần gần đây · Mỗi ngày không phát sinh -1</em>
    </div>
    <ul class="exp-list">
      ${n.map(([o,s])=>{const i=s.replace(/^Kinh nghiệm\s*/i,"").replace("经验",""),r=e[o],c=Fn(r);return`
      <li class="${r?"":"is-zero"}" style="--hue:${c.hue}"
        title="${i} ${r} lần · ${c.name}" aria-label="${i} ${r} lần, ${c.name}">
        <span>${i}</span><b>${r}</b>
        <i class="exp-bar" style="--pct:${c.pct}%" aria-hidden="true"><u></u></i>
      </li>`}).join("")}
    </ul>`}function Di(e,t,a,n){return Ue.map(([o,s])=>{const i=t[o],r=Ya(i,a?.[o],n?.[o]);return`
      <button class="dev-tile${i?"":" is-zero"}${r.dayFull&&!r.capped?" is-dayfull":""}" type="button"
        data-dev-part="${o}" data-dev-name="${e.name}"
        aria-label="${s} Độ khai phá ${i} ${Se[i]}, ${Fi(r)}, nhấp để xem đánh giá">
        ${_o(e,o,"dev-crop")}
        <span class="dev-meta">
          <b>${s}</b>
          <span class="dev-tier">${i} · ${Se[i]}</span>
          ${Gi(r)}
        </span>
        <span class="dev-pips">${Se.map((c,p)=>`<i class="${p&&p<=i?"on":""}"></i>`).slice(1).join("")}</span>
        ${Uo(r)}
      </button>`}).join("")}function Fi(e){if(e.capped)return"Đã đạt tối đa";const t=e.dayFull?`Hôm nay đã đầy ${e.daily}`:`Hôm nay +${e.today}`;return`Cách cấp tiếp theo ${e.value} / ${e.need}, ${t}`}function Gi(e){return e.capped?"":`<mark class="dev-day"${e.dayFull?"":" hidden"}>Hôm nay đã đầy ${e.daily}</mark>`}function Uo(e){return`
        <span class="dev-prog${e.capped?" is-capped":e.dayFull?" is-dayfull":""}" style="--pct:${e.pct}%;--from:${e.fromPct}%;--today:${e.todayPct}%">
          <i aria-hidden="true"><u></u>${e.todayPct?"<s></s>":""}</i>
          <em>${e.capped?"Tối đa":`${e.value} / ${e.need}`}</em>
        </span>`}function _o(e,t,a){return`
        <span class="${a}" data-part-art-name="${e.name}" data-part-art-key="${t}">
          ${Gt(e.name,t)?`<img src="${Gt(e.name,t)}" alt="" draggable="false" data-remove-on-error>`:""}
          <em>Chưa có ảnh</em>
        </span>`}function Hi(e,t){const a=V.find(r=>r.name===e)||V[0],n=_[a.name].development[t],o=Ya(n,_[a.name].developmentProgress?.[t],_[a.name].developmentToday?.[t]),s=(Ue.find(([r])=>r===t)||[,t])[1],i=_[a.name].developmentNotes?.[t]||No[a.name]?.[t]?.[n];return`
    <div class="dev-sheet-shade" data-dev-close></div>
    <section class="dev-sheet t-${a.theme}" role="dialog" aria-label="Đánh giá ${s} của ${a.name}">
      <header>
        <span class="dev-sheet-part">${s}</span>
        <b>Độ khai phá ${n}</b>
        <span class="dev-tier">${Se[n]}</span>
        <span class="dev-pips">${Se.map((r,c)=>`<i class="${c&&c<=n?"on":""}"></i>`).slice(1).join("")}</span>
        ${Uo(o)}
        ${o.dayFull&&!o.capped?`<mark class="dev-day">Hôm nay đã đầy ${o.daily}</mark>`:""}
        <button class="dev-sheet-close" type="button" data-dev-close aria-label="Đóng">×</button>
      </header>
      <div class="dev-sheet-body">
        ${_o(a,t,"dev-sheet-crop")}
        <div class="dev-sheet-copy" data-dev-note-name="${a.name}" data-dev-note-part="${t}">
        ${i?`<p>${i}</p>`:'<p class="is-muted">Chưa có đánh giá</p>'}
          ${Io(a,t)}
        </div>
      </div>
    </section>`}function Ui(e){const t=V.find(r=>r.name===e)||V[0],{bond:a,experience:n,development:o,developmentProgress:s,developmentToday:i}=_[t.name];return tt("Archive","Hồ sơ đầy đủ",`
    <aside class="archive-profile t-${t.theme}">
      <div class="archive-art"><img src="${t.art}" alt="" draggable="false"></div>
    </aside>
    <div class="archive-content">
      <header class="archive-id">
        <h3>${t.name}<small>${t.romaji}</small></h3>
        <span class="archive-id-sub">${a.mood} · Hảo cảm ${a.favor} · Thuận tùng ${a.obedience}</span>
      </header>
      <section class="archive-sec archive-sec-dev">
        <div class="archive-head">${qe()}<b>Độ khai phá cơ thể</b><span>4 bộ phận · Cấp bậc chỉ tăng không giảm · Ngưỡng tăng dần</span><i></i><div class="dev-note-actions"><button type="button" data-dev-notes-action="generate" data-dev-notes-name="${t.name}">Làm mới đánh giá</button><button type="button" data-dev-notes-action="restore" data-dev-notes-name="${t.name}">Khôi phục mặc định</button></div></div>
        <div class="dev-grid">${Di(t,o,s,i)}</div>
      </section>
      <section class="archive-sec">
        <div class="archive-head">${qe()}<b>Kinh nghiệm tình dục</b><span>Số lần</span><i></i></div>
        ${Ii(n)}
      </section>
    </div>
  `,"character-archive")}function _i(e){const t=e.currentState?na[e.currentState]:null,a=t?.label||"Hôm nay nghỉ",n=e.live?`${e.title||"Phòng phát sóng"}${e.heat?` · Độ nóng ${e.heat.toLocaleString("en-US")}`:""}`:e.plannedToday?`${e.start}–${e.end}`:e.note;return`<div class="schedule-line-state ${t?.tone||"is-rest"}">
    <b>${a}</b><small>${n}</small>
  </div>`}function Yi(e){return e.days.map(t=>{const a=t.state?na[t.state]:null,n=["schedule-run-day",t.active?"is-active":"is-rest",t.planned?"is-planned":"",t.isToday?"is-today":"",t.joinsPrevious?"joins-previous":"",t.joinsNext?"joins-next":"",a?.tone||""].filter(Boolean).join(" "),o=t.active?`${t.day} ${e.start}–${e.end}${a?` ${a.label}`:""}`:`${t.day} Nghỉ`;return`<span class="${n}" aria-label="${e.name} ${o}" title="${o}"><i></i>${t.isToday?"<em>Hôm nay</em>":""}</span>`}).join("")}function zi(){const e=eo(),t=e.days.map(o=>`<b class="${o.isToday?"is-today":""}">${o.day}${o.isToday?"<em>Hôm nay</em>":""}</b>`).join(""),a=e.rows.map(o=>`
    <article class="schedule-line t-${o.theme}${o.watching?" is-watching":""}">
      <div class="schedule-line-id"><i></i><span><b>${o.name}</b><em>${o.romaji}</em></span></div>
      <div class="schedule-line-time"><b>${o.start}</b><span>– ${o.end}</span><small>${o.note}</small></div>
      <div class="schedule-run">${Yi(o)}</div>
      ${_i(o)}
    </article>`).join(""),n=e.today.map(o=>`<span class="schedule-today-chip t-${o.theme}${o.live?" is-live":""}"><i></i><b>${o.start}</b>${o.name}</span>`).join("");return tt("Weekly Schedule","Lịch phát sóng",`
    <!-- The page's dateline, and only that.  It used to lead with a count of who was
         rostered, live and off; 今日顺序 below names those people, so the numbers were a
         tally of the next two rows.  What is left is the one fact the rest of the page
         needs and does not state: which day and hour 今日 means. -->
    <div class="schedule-summary">
      <div><b>${e.weekday} · ${e.clock}</b></div>
    </div>
    <div class="schedule-today"><b>Thứ tự hôm nay</b>${n}</div>
    <div class="schedule-board-head"><span>Streamer</span><span>Khung giờ</span><div>${t}</div><span>Trạng thái hôm nay</span></div>
    <div class="schedule-lines">${a}</div>
  `,"schedule-page")}function Wi(){const e=zn().map(t=>{const a=Object.entries(t.conditions||{}).map(([i,r])=>{const c=Array.isArray(r)?r.join(" / "):typeof r=="string"?r:(i==="体力上限"||i==="Giới hạn thể lực")?`≤ ${r}`:`≥ ${r}`;return`<span>${i} ${c}</span>`}).join(""),n=t.notice===!0,o=n?'<div class="event-top"><span>Gợi ý sự kiện</span><em>Chờ xử lý</em></div>':`<div class="event-top"><span>${Array.isArray(t.category)?t.category.join(" · "):t.category}</span><em>Ưu tiên ${t.priority}</em></div>`,s=t.area?`<div class="event-location">${Ae("mapPin")}<span>${t.area}${t.place?` · ${t.place}`:""}</span></div>`:"";return`
    <article class="event-card${(t.status==="可触发"||t.status==="Có thể kích hoạt")||n?" is-ready":""}">
      ${o}
      <h3>${t.title}</h3>
      <p>${t.summary}</p>
      ${a?`<div class="event-cond">${a}</div>`:""}
      ${s}
      <button type="button" data-event-handle="${encodeURIComponent(t.id)}">Xử lý</button>
    </article>`}).join("");return tt("Event Notices","Gợi ý sự kiện",`
    <div class="page-summary">
      <div><span>${T.calendar.full} · ${T.time.period}</span><b>${He.length} sự kiện chờ xử lý</b></div>
    </div>
    <div class="event-grid">${e}</div>
  `,"events-page")}function Te(e){return`￥${Number(e||0).toLocaleString("en-US")}`}function Xi(e){return(e.tier==="无"||e.tier==="Không")?"Chưa có huy hiệu":e.days?`${e.tier} · ${e.days} ngày`:e.tier}function ka(e,t,a){return`
      <div class="profile-now-cell">
        <span>${e}</span>
        <b>${t}</b>
        ${a?`<em>${a}</em>`:""}
      </div>`}function Sn({heading:e,aside:t,name:a,tag:n,tone:o,facts:s,note:i,action:r}){return`
      <section class="profile-sec">
        <div class="archive-head">${qe()}<b>${e}</b><span>${t}</span><i></i></div>
        <div class="profile-sec-id">
          <h3>${a}</h3>
          ${n?`<span class="profile-tag ${o}">${n}</span>`:""}
          ${r||""}
        </div>
        <dl class="profile-facts">
          ${s.map(([c,p,f=""])=>`
          <div><dt>${c}</dt><dd class="${f}">${p}</dd></div>`).join("")}
        </dl>
        ${i?`<p class="profile-hint">${i}</p>`:""}
      </section>`}function Vi(){const e=At(),t=aa(),a=Qn(),n=E.watching,o=t.current,s=za(e),i=!!o&&o.area===t.home,r=a.filter(u=>u.follow&&u.live).length,c=[`${a.length} người`,r?`Đang live ${r}`:"",n?`Đang xem ${n}`:"Chưa vào phòng"].filter(Boolean).join(" · "),p=E.companion,f=p?`Tâm trạng · ${_[p]?.bond.mood??"—"}`:"Không có ai bên cạnh",m=n?_[n]?.stream:null,y=n?m?.live?`Đang live · Độ nóng ${m.heat.toLocaleString("en-US")}`:"Cô ấy không phát sóng":"Chưa xem ai",g=a.map(u=>`
      <button class="profile-fan t-${u.theme}${u.watching?" is-watching":""}${u.live?" is-live":""}"
        type="button" data-open-character="${u.name}" aria-label="Xem nhanh ${u.name}">
        <img src="${u.art}" alt="" draggable="false">
        <span class="profile-fan-id">
          <b>${u.name}<small>${u.romaji}</small></b>
          <small>${u.caption}</small>
        </span>
        <span class="profile-fan-lv"><b>${u.lv}</b><small>${Xi(u)}</small></span>
        <span class="profile-fan-yen">${u.yen}</span>
        ${Ae("arrowRight")}
      </button>`).join(""),d=T.calendar;return tt("Profile","Hồ sơ nhân vật chính",`
  <div class="profile-layout">
    <div class="profile-self">
      <div class="profile-now">
        ${ka("Hiện tại",T.location.area,`${T.location.place||"—"} · ${Qt[T.location.privacy]} ${T.location.privacy}/5`)}
        ${ka("Đồng hành",p||"Đi một mình",f)}
        ${ka("Phòng live",n||"Chưa vào phòng",y)}
      </div>

      <!-- The档案 used to carry none of the protagonist's own numbers, on the grounds
           that 资金 and 体力 are already on the HUD.  But that is the relationship every
           other pair here has: the HUD previews and the page details.  What the HUD
           cannot show is the 20 floor the meter marks, or that 日收入 is a rate rather
           than a balance. -->
      <section class="profile-sec">
        <div class="archive-head">${qe()}<b>Trạng thái</b><span>Tiền bạc · Thể lực · Hiện tại</span><i></i></div>
        <div class="profile-state">
          <div class="profile-money">
            <b><span class="unit">￥</span>${E.money.toLocaleString("en-US")}</b>
            <em>${e.daily?`+${Te(e.daily)} / ngày`:"Không có thu nhập ngày"}</em>
          </div>
          ${We("体力",E.stamina,100,"blue",re.stamina,"clock")}
        </div>
        <p class="profile-hint">${d.full}（${d.weekday}）· ${d.season} · ${d.week} · ${T.time.clock} ${T.time.period}. Khi thể lực giảm xuống dưới ${re.stamina[0]} sẽ rơi vào trạng thái kiệt sức sâu.</p>
      </section>

      ${Sn({heading:"Công việc",aside:"Hợp đồng · Chấm công",name:e.job||"Thất nghiệp",tag:s.label,tone:s.tone,facts:[["Địa điểm",e.place||"—"],["Thu nhập ngày",Te(e.daily),"is-num"]],note:e.job?"Nhận lương sau khi đến nơi làm việc.":"Chưa có hợp đồng làm việc, thu nhập ngày bằng 0.",action:e.canClockIn?'<button class="page-secondary" type="button" data-clock-in>Đi làm<span class="settings-stub">Chưa kết nối</span></button>':""})}

      ${Sn({heading:"Chỗ ở",aside:"Quyền sở hữu · Cư trú",name:o?o.name:"Chưa có chỗ ở",tag:o?i?"Chỗ ở hiện tại":"Chưa đặt chỗ ở":"",tone:i?"is-ok":"",facts:[["Sở hữu",o?.tenure||"—"],["Khu vực",o?.area||"—"]],note:o?o.desc:"Chưa có chỗ ở cố định."})}
    </div>

    <!-- 查看开播日程 used to sit under the roster here.  It is gone because 开播日程表 is
         one press away in the destination rail above the Status pane, and a second route
         to it from inside another page made this column the place people learned to look
         for it.  Its live hint line was the one thing the link carried that the rail does
         not, so that moved to the entry's note field (see the destinations list in
         data.js) rather than being lost.  The roster takes the freed height:
         .profile-fans is grid-auto-rows:1fr, so the rows simply breathe. -->
    <aside class="profile-fans-col">
      <div class="archive-head">${qe()}<b>Thân phận fan</b><span>${c}</span><i></i></div>
      <div class="profile-fans">${g}</div>
    </aside>
  </div>
  `,"profile-page")}function Yo(e="item-use"){const t=E.money<ce,a=ce-E.money;return`<button class="${e}${t?" is-broke":""}" type="button" data-map-marker-use
    ${t?"disabled":""}
    title="${t?`Phí xây dựng ${Te(ce)}, còn thiếu ${Te(a)}`:`Mỗi lần xác nhận xây dựng trừ ${Te(ce)}`}"
    aria-label="Sử dụng Bản vẽ quy hoạch đô thị, phí xây dựng ${Te(ce)}${t?", không đủ tiền":""}"
    >${t?`Không đủ tiền<em>Thiếu ${Te(a)}</em>`:`Sử dụng<em>${Te(ce)}</em>`}</button>`}const be=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Zi(e,t,a=new Map){const n=t==="material"?"Nguyên liệu":t==="consumable"?`Cường độ ${e.potency} / 5`:[e.rarity,e.worn?"Đang đeo":"Chưa đeo"].filter(Boolean).join(" · "),o=_n(t,e),s=`${t}:${e.name}`,i=encodeURIComponent(JSON.stringify({kind:t,name:e.name,quantity:e.quantity}));return`
    <article class="item-card b-${t}${t==="goods"&&e.worn?" is-worn":""}"
      style="--hue:${o.hue}; --tilt:${o.tilt}deg; --scale:${o.scale}${t==="consumable"?`; --potency:${e.potency}`:""}">
      <label class="item-select" title="Chọn để hủy">
        <input type="checkbox" data-inv-select="${i}" ${a.has(s)?"checked":""} aria-label="Chọn hủy ${be(e.name)}">
        <span></span>
      </label>
      <div class="item-cell">
        ${Oe(o,"item-icon")}
        <span class="item-gem ${t}"></span>
        ${xt(t==="consumable"?e.potency:0)}
      </div>
      <button type="button" class="item-copy" data-inv-detail="${i}" aria-label="Xem chi tiết ${be(e.name)}">
        <h3 title="${be(e.name)}">${be(e.name)}</h3>
        <span>${be(o.label)} · ${be(n)}</span>
      </button>
      ${e.name===Qe?Yo():""}
      <b>×${e.quantity}</b>
    </article>`}const dt=12,tn=[{kind:"material",title:"Nguyên liệu",take:()=>E.inventory.materials},{kind:"consumable",title:"Tiêu hao",take:()=>E.inventory.consumables},{kind:"goods",title:"Đồ dùng",take:()=>E.inventory.goods}];function kt(e="all"){return tn.filter(t=>e==="all"||e===t.kind).flatMap(({kind:t,take:a})=>a().map(n=>({item:n,kind:t})))}function zo(e=0,t=new Map,a="all"){const n=kt(a),o=Math.max(1,Math.ceil(n.length/dt)),s=Math.max(0,Math.min(e,o-1)),i=n.slice(s*dt,(s+1)*dt);return`<div class="inventory-content" tabindex="0" aria-label="Danh sách vật phẩm">${n.length?`<div class="item-grid">${i.map(({item:c,kind:p})=>Zi(c,p,t)).join("")}</div>`:`<div class="inventory-empty">${a==="all"?"Túi đồ đang trống":"Danh mục này chưa có vật phẩm"}</div>`}</div>
    <nav class="inventory-pagination" aria-label="Phân trang túi đồ">
      <span class="inventory-range">Tổng ${n.length} mục · ${dt} mục/trang</span>
      <button class="inventory-turn is-prev" type="button" data-inv-step="-1"
        ${s===0?"disabled":""} aria-label="Trang trước">${Ae("chevronRight")}<span>Trang trước</span></button>
      <span class="inventory-leaf" aria-live="polite">${s+1} / ${o}</span>
      <button class="inventory-turn is-next" type="button" data-inv-step="1"
        ${s>=o-1?"disabled":""} aria-label="Trang sau"><span>Trang sau</span>${Ae("chevronRight")}</button>
    </nav>`}function Ki(e=0,t=new Map,a="",n="all"){const o=[{kind:"all",title:"Tất cả vật phẩm",count:kt().length},...tn.map(s=>({...s,count:s.take().length}))];return tt("Inventory","Túi đồ & Đạo cụ",`
    <div class="inventory-layout">
      <aside class="inventory-side" aria-label="Danh mục túi đồ">
        ${o.map(s=>`<button type="button" data-inv-kind="${s.kind}" aria-pressed="${n===s.kind}"
          class="${n===s.kind?"is-active":""}">${s.title}<b>${s.count}</b></button>`).join("")}
        <div class="stamina-card"><small>Thể lực hiện tại</small><b>${E.stamina}<em>/100</em></b><i><u style="--pct:${E.stamina}%"></u></i></div>
      </aside>
      <div class="inventory-board">
        <div class="inventory-toolbar">
          <label class="inventory-select-all"><input type="checkbox" data-inv-select-all ${kt(n).length?"":"disabled"}>Chọn tất cả trang này</label>
          <span data-inv-selected-count>Đã chọn ${t.size} mục</span>
          <button type="button" class="inventory-destroy" data-inv-destroy ${t.size?"":"disabled"}>Hủy mục đã chọn</button>
          <em data-inv-status>${be(a)}</em>
        </div>
        <div class="inventory-results">${zo(e,t,n)}</div>
      </div>
    </div>
  `,"inventory-page")}function Ji(e,t){const a=tn.find(n=>n.kind===t)?.title||"";return`<div class="dev-sheet-shade" data-dev-close></div>
    <section class="dev-sheet inventory-detail" role="dialog" aria-label="Chi tiết vật phẩm">
      <header><b>${be(e.name)}</b>
        <button class="dev-sheet-close" type="button" data-dev-close aria-label="Đóng chi tiết vật phẩm">×</button></header>
      <div class="inventory-detail-body" tabindex="0">
        <span>${a} · Số lượng ${e.quantity}${t==="goods"&&e.worn?" · Đang trang bị":""}</span>
        <p>${be(e.description||"Chưa có mô tả")}</p>
        ${t==="material"&&e.source?`<small>Nguồn gốc: ${be(e.source)}</small>`:""}
        ${e.name===Qe?Yo():""}
      </div>
    </section>`}function Qi(){return tt("Settings","Cài đặt chung",`<div class="settings-board">${Oo()}</div>`,"settings-page")}function el(e,{onGift:t,onDock:a,onOverlay:n}={}){let o=e.querySelector(":scope > .page-layer");o||(o=document.createElement("div"),o.className="page-layer",e.appendChild(o));const s=e.parentElement;let i=null,r=null,c=null,p=null,f=null,m=0,y="all",g=null;const d=new Map;let u="";const S=h=>!!o.querySelector(h),b=h=>o.querySelectorAll(h).forEach(k=>k.remove()),l=()=>!!i||!!r||!!c||!!p||xi()||Er()||Mr()||xr(),v=()=>{const h=S(".dock-root"),k=S(".page-modal"),A=S(".dev-sheet");o.className="page-layer"+(h||k||l()?" is-open":"")+(k?" has-modal":"")+(A?" has-sheet":""),e.classList.toggle("has-dock",h),e.classList.toggle("has-modal",k||l()),e.classList.toggle("has-sheet",A),s.classList.toggle("has-inventory",S(".inventory-page")),yr(l(),{page:k})},$=()=>{i?.(),i=null},j=()=>{r?.(),r=null},L=()=>{c?.(),c=null},M=()=>{p?.(),p=null},H=()=>{$(),j(),L(),M()},N=()=>{b(".dev-sheet, .dev-sheet-shade"),g?.focus({preventScroll:!0}),g=null,v()},R=()=>{N(),H(),b(".page-shade, .page-modal"),v()},U=()=>{H(),o.replaceChildren(),f=null,v(),a?.(null)},K=h=>{R(),xe(o,"beforeend",h),v()},P=(h,k={})=>{n?.(),N(),b(".page-shade, .page-modal"),H();const A=h(s,{onClose:R,...k});return v(),A},W=async h=>{$(),v();try{await bo()}catch(A){console.warn("[map] collapse HUD",A)}const k=Ro(h);try{await Pe(k)||console.info("[map] travel message generated",k)}catch(A){console.warn("[map] send travel message",A)}},J=(h=null)=>{i=P(Go,{onTravel:W,createMode:h})},me=()=>{r=P(To)},we=()=>{c=P(Lo)},Et=()=>{p=P(Mo)},Tt=h=>{const k=V.find(A=>A.name===h)||V[0];if(f===k.name&&!S(".page-modal")&&!l()){U();return}R(),b(".dock-root"),xe(o,"afterbegin",kn(k)),f=k.name,xn(o),v(),a?.(k.name)};et(()=>{if(!f||document.querySelector(".viewport")?.classList.contains("is-portrait"))return;const h=o.querySelector(".dock-root");if(!h)return;const k=V.find(q=>q.name===f);if(!k||!_[k.name])return;const A=ft(kn(k));A&&(A.classList.add("is-repaint"),h.replaceWith(A),xn(o))});const at=(h=0)=>{const k=o.querySelector(".inventory-results");if(!k)return;const A=Math.max(1,Math.ceil(kt(y).length/dt));m=Math.max(0,Math.min(A-1,m+h));const q=document.activeElement?.dataset.invStep;if(vt(k,zo(m,d,y)),o.querySelectorAll("[data-inv-kind]").forEach(O=>{const Q=O.dataset.invKind===y;O.classList.toggle("is-active",Q),O.setAttribute("aria-pressed",String(Q))}),ke(),q){const O=k.querySelector(`[data-inv-step="${q}"]`);(O&&!O.disabled?O:k.querySelector(".inventory-content"))?.focus({preventScroll:!0})}},ke=()=>{const h=[...o.querySelectorAll("[data-inv-select]")],k=o.querySelector("[data-inv-select-all]"),A=o.querySelector("[data-inv-selected-count]"),q=o.querySelector("[data-inv-destroy]"),O=h.filter(Q=>Q.checked).length;k&&(k.disabled=h.length===0,k.checked=h.length>0&&O===h.length,k.indeterminate=O>0&&O<h.length),A&&(A.textContent=`Đã chọn ${d.size} mục`),q&&(q.disabled=d.size===0)},_e=h=>{try{const k=JSON.parse(decodeURIComponent(h.dataset.invSelect||""));return!k?.name||!k?.kind?null:{key:`${k.kind}:${k.name}`,kind:k.kind,name:k.name,quantity:Math.max(1,Number(k.quantity)||1)}}catch(k){return console.warn("[inventory] selection parse failed",k),null}},fa=async()=>{if(!d.size)return;const k=["Hủy hàng loạt đạo cụ:",...[...d.values()].map(O=>`${O.name} số lượng -${O.quantity}`)].join(`
`),A=o.querySelector("[data-inv-status]"),q=o.querySelector("[data-inv-destroy]");q&&(q.disabled=!0);try{const O=await Pe(k);d.clear(),u=O?"Đã gửi yêu cầu hủy":"Đã tạo yêu cầu hủy",o.querySelectorAll("[data-inv-select]").forEach(Q=>{Q.checked=!1}),A&&(A.textContent=u),ke()}catch(O){u="Gửi yêu cầu hủy thất bại",A&&(A.textContent=u),ke(),console.warn("[inventory] destroy request failed",O)}},ha={events:Wi,inventory:()=>Ki(m,d,u,y),profile:Vi,schedule:zi,settings:Qi},w=h=>{if(h==="phone"){R(),vo().catch(A=>console.warn("[phone]",A));return}if(h==="map"){J();return}if(h==="map-create"){J({source:"Bản vẽ quy hoạch đô thị"});return}if(h==="arcade"){me();return}if(h==="cg"){we();return}if(h==="shop"){Et();return}h==="inventory"&&(y="all",m=0,d.clear(),u="");const k=ha[h];k&&K(k())},x=(h,k)=>{S(".page-modal")&&(N(),xe(o,"beforeend",Hi(h,k)))};return o.addEventListener("click",h=>{const k=h.target.closest("[data-gift-open]");if(k){t?.(k.dataset.giftOpen);return}if(Bo(h.target))return;const A=h.target.closest("[data-page]");if(A){w(A.dataset.page);return}const q=h.target.closest("[data-inv-kind]");if(q){y=q.dataset.invKind,m=0,at();return}const O=h.target.closest("[data-inv-detail]");if(O){const Y=JSON.parse(decodeURIComponent(O.dataset.invDetail)),le=kt(Y.kind).find(({item:ee})=>ee.name===Y.name);le&&(N(),g=O,xe(o,"beforeend",Ji(le.item,le.kind)),v(),o.querySelector(".inventory-detail [data-dev-close]")?.focus({preventScroll:!0}));return}const Q=h.target.closest("[data-inv-step]");if(Q&&!Q.disabled){at(Number(Q.dataset.invStep)||0);return}if(h.target.closest("[data-map-marker-use]")){J({source:Qe});return}if(h.target.closest("[data-inv-destroy]")){fa();return}const ue=h.target.closest("[data-event-handle]");if(ue){const Y=decodeURIComponent(ue.dataset.eventHandle||""),le=He.find(ae=>ae.id===Y);if(!le)return;const ee=ue.textContent;ue.disabled=!0,ue.textContent="Đang gửi…",Pe(`Đi xử lý: ${le.summary}`).then(ae=>{ue.textContent=ae?"Đã gửi":"Gửi thất bại"}).catch(ae=>{console.warn("[events] send failed",ae),ue.textContent="Gửi thất bại"}).finally(()=>{setTimeout(()=>{ue.disabled=!1,ue.textContent=ee},1e3)});return}const nt=h.target.closest("[data-dev-notes-action]");if(nt){qi().then(({handleDevelopmentNotesButton:Y})=>Y(nt)).catch(Y=>console.error("[dev-notes] lazy load",Y));return}if(h.target.closest("[data-dev-close]")){N();return}const Ye=h.target.closest("[data-dev-part]");if(Ye){x(Ye.dataset.devName,Ye.dataset.devPart);return}if(h.target.closest("[data-dock-close]")){U();return}if(h.target.closest("[data-close]")){R();return}if(h.target.closest("[data-clock-in]")){$o().catch(Y=>console.warn("[work]",Y));return}const ot=h.target.closest("[data-character-full]");if(ot){K(Ui(ot.dataset.characterFull));return}const st=h.target.closest("[data-open-character]");st&&Tt(st.dataset.openCharacter)}),o.addEventListener("wheel",h=>{h.target.closest(".inventory-page, .inventory-detail, .dev-sheet-shade")&&S(".inventory-page")&&h.stopPropagation()},{passive:!0}),o.addEventListener("submit",h=>{const k=h.target.closest("[data-part-art-form]");k&&(h.preventDefault(),Do(k,o))}),o.addEventListener("change",h=>{const k=h.target.closest("[data-inv-select]");if(k){const q=_e(k);if(!q)return;k.checked?d.set(q.key,q):d.delete(q.key),ke();return}const A=h.target.closest("[data-inv-select-all]");A&&(o.querySelectorAll("[data-inv-select]").forEach(q=>{const O=_e(q);O&&(q.checked=A.checked,A.checked?d.set(O.key,O):d.delete(O.key))}),ke())}),e.dataset.pageEscapeBound||(e.dataset.pageEscapeBound="1",addEventListener("keydown",h=>{if(h.key==="ArrowLeft"||h.key==="ArrowRight"){if(!S(".inventory-page")||S(".dev-sheet")||h.target.closest("input, textarea, select, [contenteditable]"))return;h.preventDefault(),at(h.key==="ArrowLeft"?-1:1);return}h.key==="Escape"&&(S(".dev-sheet")?N():S(".page-modal")||l()?R():U())})),{open:w,openCharacter:Tt,openMapCreate:()=>J({source:"Bản vẽ quy hoạch đô thị"}),close:U,openedCharacter:()=>f}}const Mn=e=>e?`<i class="ic">${da[e]}</i>`:"",Wo=e=>`￥${e.toLocaleString("en-US")}`,ne=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),tl=[1,10,66,233];function al(e,{affordable:t}){const a=Va(e),n=e.price?Wo(e.price):"Miễn phí",o=e.guard?`Thẻ ${sa} ngày`:`Đọc ID: ${oa[e.notice]??""}`;return`
      <button class="drawer-slot gift-slot${t?"":" is-broke"}${e.guard?" is-guard":""}" type="button"
        data-gift="${ne(e.slug)}" data-scene="${e.guard?"guard":"stream"}"
        ${t?"":"disabled"}
        style="--hue:${e.hue}"
        aria-label="${ne(e.name)}, ${n}, ${o}${t?"":", không đủ số dư"}">
        <span class="slot-well"></span>
        <span class="gift-face">
          ${Oe(a,"gift-icon")}
          <span class="gift-gem"></span>
        </span>
        <span class="gift-copy"><b>${ne(e.name)}</b><em>${n}</em></span>
        ${e.banner?'<span class="gift-flair" aria-hidden="true"></span>':""}
      </button>`}function nl(e){const{icon:t}=e,a=e.quantity>1?`<span class="slot-qty">${e.quantity}</span>`:"",n=e.worn?'<span class="slot-worn" aria-hidden="true"></span>':"";return`
      <button class="drawer-slot gift-bag-slot b-${e.bucket}${e.worn?" is-worn":""}" type="button"
        data-gift-item="${ne(e.name)}" data-scene="private"
        style="--hue:${t.hue}; --tilt:${t.tilt}deg; --scale:${t.scale}${e.bucket==="consumable"?`; --potency:${e.potency}`:""}"
        aria-label="${ne(e.name)}, ${t.label}, số lượng ${e.quantity}, nhấp để tặng">
        <span class="slot-well"></span>
        ${Oe(t,"slot-icon")}
        <span class="slot-gem"></span>
        ${xt(e.bucket==="consumable"?e.potency:0)}
        ${a}${n}
      </button>`}const ol=e=>`<div class="drawer-div" aria-hidden="true"><i></i><span>${e}</span></div>`;function xa(e,t){return`
    <div class="drawer-group" role="list" aria-label="${e}">
      ${ol(e)}${t}
    </div>`}function sl(e){const t=ra(e),a=[];if(t.near){const n=St();if(n.length)for(const o of n)a.push(xa(o.label,o.items.map(nl).join("")));else a.push(xa("Túi đồ",'<div class="drawer-empty">Túi đồ đang trống</div>'))}if(t.live)for(const n of Xa()){const o=n.items.map(s=>al(s,{affordable:E.money>=s.price})).join("");a.push(xa(n.label,o))}return a.length?a.join(""):`<div class="drawer-empty">${t.reason}, hiện không có gì có thể tặng</div>`}function rl(e){const{scene:t,gift:a,qty:n,target:o}=e,s=t==="stream",i=t==="guard",r=i?a.price:s?a.price*n:0,c=(s||i)&&E.money<r,p=t==="private"?a.icon:Va(a),f=Ut(t,o,a,{qty:n,remark:e.remark}),m=t==="private"?`
      <div class="gift-read" style="--fit:${p.hue}">
        <div class="gift-facts">
          <em>${ne(p.label)}</em>
          ${a.bucket==="consumable"?`<em>Cường độ ${a.potency} / 5</em>`:""}
          ${a.bucket==="goods"?`<em>${a.worn?"Đang đeo":"Chưa đeo"}</em>`:""}
          ${a.bucket==="material"&&a.source?`<em>${ne(a.source)}</em>`:""}
          <em>Còn ${a.quantity}</em>
        </div>
        <p class="gift-hint">${a.bucket==="goods"?"Đồ dùng sau khi tặng sẽ xóa khỏi túi đồ.":"Sau khi tặng số lượng -1."} Phản ứng của cô ấy sẽ do cốt truyện quyết định.</p>
      </div>`:`
      <div class="gift-read" style="--fit:${a.hue}">
        <div class="gift-facts">
          <em>${ne(a.group)}</em>
          <em>${i?`${sa} ngày`:`Đọc ID: ${oa[a.notice]}`}</em>
          <em>Công khai</em>
          ${i?"<em>Không cộng dồn</em>":""}${a.random?"<em>Nội dung ngẫu nhiên</em>":""}${a.banner?"<em>Bay ngang màn hình</em>":""}
        </div>
        <p class="gift-hint">${i?"Danmaku sẽ được ưu tiên nhìn thấy, ID sẽ được ghi nhớ.":"Donate mua xác suất được nhìn thấy, không thể mua trực tiếp sự thân mật hay thời gian riêng tư."}</p>
      </div>`,y=s?`
      <div class="gift-qty">
        <span>Số lượng</span>
        ${tl.map(d=>`<button type="button" data-gift-qty="${d}"
          class="${d===n?"is-active":""}" aria-pressed="${d===n}">${d}</button>`).join("")}
        <b>${Wo(r)}</b>
      </div>`:"",g=t==="private"?`
      <label class="gift-remark">
        <span>Lời nhắn</span>
        <input type="text" maxlength="30" placeholder="Tùy chọn, một câu ngắn" value="${ne(e.remark)}"
          data-gift-remark aria-label="Lời nhắn tùy chọn, tối đa 30 chữ">
      </label>`:"";return`
<div class="gift-shade" data-gift-cancel></div>
<section class="gift-confirm" role="dialog" aria-label="Xác nhận tặng cho ${ne(o)}">
  <div class="sheet-frost"></div>
  <div class="sheet-edge"></div>
  <div class="gift-confirm-body">
    <figure class="gift-hero" style="--hue:${p.hue}">
      <span class="gift-hero-well"></span>
      ${Oe(p,"gift-hero-icon")}
      <span class="gift-hero-gem"></span>
      <figcaption>${ne(a.group||p.label)}</figcaption>
    </figure>

    <div class="gift-detail">
      <header class="gift-head">
        <h3>${ne(a.name)}</h3>
        <span class="gift-to">${Mn("arrowRight")}${ne(o)}</span>
      </header>
      <p class="gift-desc">${ne(a.description||a.note||"")}</p>
      ${m}
      ${y}
      ${g}
      <p class="gift-preview"><span>Sẽ gửi</span><code>${ne(f)}</code></p>
    </div>
  </div>

  <footer class="gift-actions">
    <span class="settings-stub">Chưa kết nối gửi</span>
    ${c?'<span class="gift-broke">Số dư không đủ</span>':""}
    <button class="page-secondary" type="button" data-gift-cancel>Hủy</button>
    <button class="page-primary" type="button" data-gift-send ${c?"disabled":""}>
      ${t==="guard"?"Mở thẻ":"Tặng"}${Mn("arrowRight")}
    </button>
  </footer>
</section>`}function il(e,{onSend:t}={}){let a=null,n=null;const o=()=>e.querySelector(":scope > .page-layer"),s=Po(e,{label:"Khay quà tặng",extraClass:"gift-tray",body:()=>a?sl(a):"",pickSelector:".gift-slot, .gift-bag-slot",onPick:d=>c(d),escapeKey:null}),i=()=>{o()?.querySelectorAll(".gift-confirm, .gift-shade").forEach(d=>d.remove()),n=null},r=()=>{const d=o();if(!d||!n)return;d.querySelector(".gift-toast")?.remove();const u=document.activeElement?.dataset?.giftRemark!==void 0,S=u?document.activeElement.selectionStart:null;if(d.querySelectorAll(".gift-confirm, .gift-shade").forEach(b=>b.remove()),xe(d,"beforeend",rl(n)),u){const b=d.querySelector("[data-gift-remark]");b?.focus(),S!=null&&b?.setSelectionRange(S,S)}};function c(d){const u=d.dataset.scene==="private",S=no(a,u?"private":"tip",u?d.dataset.giftItem:d.dataset.gift);S&&(n={...S,target:a,qty:1,remark:""},r())}const p=async()=>{if(!n)return;const{scene:d,gift:u,qty:S,remark:b}=n,l=Ut(d,a,u,{qty:S,remark:b}),v=ao(d,a,u,{qty:S,remark:b}),$=await Promise.resolve(t?.({message:l,payload:v}));i(),f(l,$!==!1)};function f(d,u=!0){const S=o();if(!S)return;S.querySelector(".gift-toast")?.remove(),xe(S,"beforeend",`
<div class="gift-toast" role="status">
  <b>${u?"Đã gửi vào khung chat":"Đã tạo tin nhắn"}</b><code>${ne(d)}</code><em>HUD không trực tiếp trừ tiền hay vật phẩm trong túi</em>
</div>`);const b=S.querySelector(".gift-toast");setTimeout(()=>b?.remove(),4200)}const m=d=>{if(s.isOpen()&&a===d){y();return}a=d,i(),s.isOpen()?s.repaint():s.open()},y=()=>{i(),s.close(),a=null},g=()=>s.isOpen();return e.addEventListener("click",d=>{if(!n)return;if(d.target.closest("[data-gift-cancel]")){i();return}if(d.target.closest("[data-gift-send]")){p();return}const u=d.target.closest("[data-gift-qty]");u&&(n.qty=Number(u.dataset.giftQty),r())}),e.addEventListener("input",d=>{const u=d.target.closest("[data-gift-remark]");if(!u||!n)return;n.remark=u.value;const S=o()?.querySelector(".gift-preview code");S&&(S.textContent=Ut(n.scene,a,n.gift,{qty:n.qty,remark:n.remark}))}),e.addEventListener("keydown",d=>{d.key!=="Enter"||!n||d.target.closest("[data-gift-remark]")&&(d.preventDefault(),p())}),addEventListener("keydown",d=>{if(d.key==="Escape"&&!(e.querySelector(".dev-sheet, .page-modal")||document.querySelector(".map-layer, .arcade-layer"))){if(n){i(),d.stopPropagation();return}s.isOpen()&&(y(),d.stopPropagation())}},{capture:!0}),{open:m,close:y,isOpen:g,target:()=>a}}const Xo=Ua(li),he=e=>e?`<i class="ic">${da[e]}</i>`:"";function an(e,t,a){const n=F.regions[e];return`<section class="region ${t}"
     style="--x:${n.x}px; --y:${n.y}px; --w:${n.w}px; --h:${n.h}px">${a}</section>`}function An(e,t=""){const a=Xo[e];return`<img class="sprite ${t}" src="${a.src}" alt="" draggable="false"
    style="left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px">`}const Ln=(e,t,a)=>`<span class="head-caption" style="left:${e}px;top:${t}px"><span class="slash">/</span><span class="cjk">${a}</span></span>`;function En({icon:e,label:t,name:a,sub:n,tag:o,tone:s}){return`
    <div class="life-line">
      ${he(e)}
      <span class="life-label">${t}</span>
      <b class="life-name">${a}</b>
      ${n?`<span class="life-sub">${n}</span>`:""}
      <span class="life-fill"></span>
      ${o?`<span class="life-tag ${s}">${o}</span>`:""}
    </div>`}function jt(e,t,a,n){return t?`
    <span class="world-who t-${a}${n?" is-live":""}">
      <em>${e}</em><i></i><b>${t}</b>
    </span>`:`<span class="world-who is-none"><em>${e}</em><b>${a}</b></span>`}function ll(){const e=E.companion,t=E.watching,a=o=>V.find(s=>s.name===o)?.theme,n=o=>!!_[o]?.stream?.live;return(e?jt("Đồng hành",e,a(e),n(e)):jt("Đồng hành","","Đi một mình"))+(t?jt("Đang xem",t,a(t),n(t)):jt("Đang xem","","Chưa vào phòng"))}function cl(){const e=At(),t=aa(),a=za(e),n=t.current,o=!!n&&n.area===t.home;return`
  <div class="life-rows">
    ${En({icon:"briefcase",label:"Công việc",name:e.job||"Thất nghiệp",sub:e.job?e.place:"",tag:a.label,tone:a.tone})}
    ${En({icon:"home",label:"Chỗ ở",name:n?n.name:"Chưa có chỗ ở",sub:n?n.tenure:"",tag:n?o?"Chỗ ở hiện tại":"Chưa đặt chỗ ở":"",tone:o?"is-ok":""})}
  </div>`}function Tn(){const{stats:e,stamina:t}=ht,a=e[0],n=T.calendar;return an("status","pane-status",`
  <!-- The pane's one route out, and the glyph alone.  Spelled out it was a 101-unit pill
       -- the widest thing in a title band that already reads "Status / 主角状态", so the
       four characters were restating their own neighbour.  The arrow went with them: it
       was there to give the label a direction, and an icon does not need one.
       stamina.action survives as the accessible name and the tooltip, so the string is
       still stated once and still the same one the portrait column puts on its 体力
       line -- only this layout draws it rather than sets it. -->
  <header class="pane-head">
    <button class="btn-ghost is-icon" type="button" data-page="profile"
      title="${t.action}" aria-label="${t.action}">${he("person")}</button>
  </header>
  <!-- 私密度 is not on this strip.  It was, for one pass, and it is what tipped the row
       over: 34 units of height cannot hold a place name, a privacy rung with its
       numeral, and two people.  Who is with the player decides more per turn than which
       rung the room is on, and 主角档案's 现在 cell carries the rung in full. -->
  <div class="world-strip">
    <div class="world-location">${he("mapPin")}<b>${T.location.area}</b></div>
    <span class="world-place">${T.location.place}</span>
    <span class="world-fill"></span>
    ${ll()}
  </div>

  <!-- 何时, read straight from world.calendar rather than through a stat cell: two of
       the three cells existed only to carry these strings at numeral size.  第16周 stays
       off it for the reason data.js gives -- nothing in a day's play turns on it, and
       主角档案 has it. -->
  <div class="when-line">
    <span>${he("calendarSmall")}<b>${n.date}</b><em>${n.weekday} · ${n.season}</em></span>
    <span>${he("moon")}<b>${T.time.clock}</b><em>${T.time.period}</em></span>
  </div>

  <hr class="rule">

  <div class="money-line">
    ${he(a.valueIcon)}
    <b class="num">${`<span class="unit">${a.unit}</span>`}${a.value}</b>
    ${a.sub?.pill?`<span class="pill">${a.sub.pill}</span>`:""}
  </div>

  <div class="favor-line is-stamina">
    ${he("clock")}
    <span class="favor-name">${t.label}</span>
    <div class="bar"><i style="--pct:${100*t.value/t.max}%"></i></div>
    <div class="favor-num"><b>${t.value}</b><span>/ ${t.max}</span></div>
  </div>

  ${cl()}`)}const Sa=4,Vo="glass-hud-pinned";let yt=0,Ce=[];try{const e=JSON.parse(localStorage.getItem(Vo)||"[]");Ce=Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{Ce=[]}function nn(e){return Ce.includes(e)}function Zo(e){const t=Ce.indexOf(e);t>=0?Ce.splice(t,1):Ce.push(e);try{localStorage.setItem(Vo,JSON.stringify(Ce))}catch{}}function bt(){const e=Ce.map(a=>V.find(n=>n.name===a)).filter(Boolean),t=V.filter(a=>!nn(a.name));return e.concat(t)}function dl(e){return`
      <div class="card-status${e.abnormal?" is-abnormal":""}">
        <i></i><span>${e.text}</span>${e.extra?`<em>+${e.extra}</em>`:""}
      </div>`}function Ko(e){const t=nn(e.name);return`
<article class="card t-${e.theme}${t?" is-pinned":""}" data-name="${e.name}"
  title="Nhấp để xem nhanh ${e.name}">
  <div class="card-inner">
    <div class="card-glass"></div>
    <div class="card-art-clip">
      <img class="card-art" src="${e.art}" alt="" draggable="false" decoding="async" loading="lazy"
        data-fx="${e.artFx??.5}" data-fy="${e.artFy??.16}"
        data-z="${e.artZ??1.32}" data-ox="${e.artOx??0}"
        data-tx="${e.artTx??.3}" data-ty="${e.artTy??.34}">
    </div>
    <div class="card-scrim"></div>
    ${e.live?'<span class="card-live" title="Đang phát sóng">Đang live</span>':""}
    <div class="card-body">
      <div class="card-name"><b class="${e.name.length>3?"xl":e.name.length>=3?"long":""}">${e.name}</b></div>
      <div class="card-romaji">${e.romaji}</div>
      <div class="card-metric-label">${he(e.metric.icon)}<span>${e.metric.label}</span></div>
      <div class="card-metric"><b>${e.metric.value}</b><span>/ ${e.metric.max}</span></div>
      <div class="chip">${he(e.chip.icon)}<span>${e.chip.label}：${e.chip.value}</span></div>
      ${dl(e.status)}
    </div>
    <div class="card-rim"></div>
    <button class="card-star" type="button" data-ornament="${e.ornament==="star"?"star":"sparkle"}" aria-label="${t?"Bỏ ghim":"Ghim nhân vật"}" title="${t?"Bỏ ghim":"Ghim nhân vật"}">${Co(e.ornament)}</button>
  </div>
</article>`}function Jo(){const e=bt();if(!e.length)return[];const t=Math.max(1,Math.ceil(e.length/Sa));yt=(yt%t+t)%t;const a=yt*Sa;return e.slice(a,a+Sa)}function Ma(e){e&&(vt(e,Jo().map(Ko).join("")),Vt(e))}function Vt(e){e.querySelectorAll(".card-art").forEach(t=>{const a=()=>{const n=t.parentElement;if(!n||!t.naturalWidth)return;const o=n.clientWidth,s=n.clientHeight,i=t.naturalWidth,r=t.naturalHeight,c=Number(t.dataset.fx),p=Number(t.dataset.fy),f=Number(t.dataset.z),m=Number(t.dataset.ox||0),y=Number(t.dataset.tx||.3),g=Number(t.dataset.ty||.34),d=Math.max(o/i,s/r)*f,u=i*d,S=r*d,b=Math.min(0,y*o-c*u-m*o),l=S>=s?Math.max(s-S,Math.min(0,g*s-p*S)):(s-S)/2;t.style.width=`${u}px`,t.style.height=`${S}px`,t.style.left=`${b}px`,t.style.top=`${l}px`,t.dataset.laid="1"};t.complete&&t.naturalWidth?a():t.addEventListener("load",a,{once:!0})})}function pl(){return an("girls","pane-girls",`
  <header class="pane-head girls-head"></header>
  <div class="rail">${Jo().map(Ko).join("")}</div>`)}function ul(){const e=Wa.map(t=>`
  <button class="tool-btn" type="button" aria-label="${t.label}" data-page="${t.page||""}">
    ${he(t.icon)}${t.badge?'<span class="dot"></span>':""}
  </button>`).join("");return an("pod","pane-pod",e)}function fl(e){const t=new Map([...e.querySelectorAll(".pane-pod .tool-btn[data-page]")].map(a=>[a.dataset.page,a]));Wa.forEach(a=>{const n=t.get(a.page||"");if(!n)return;const o=n.querySelector(":scope > .dot");if(a.badge&&!o){const s=document.createElement("span");s.className="dot",n.append(s)}else a.badge||o?.remove()})}const Pn={x:23,y:340};function hl(){const e=to.map(t=>{const a=t.soon?" is-soon":"",n=t.soon?' disabled aria-disabled="true"':` data-page="${t.page}"`;return`
    <button class="dest-btn${a}" type="button" aria-label="${t.label}"
      title="${t.note}"${n}>
      ${he(t.icon)}
      <b>${t.label}</b>
      ${t.soon?'<i class="dest-soon">Đang mở</i>':""}
    </button>`}).join("");return`<nav class="dest-rail" aria-label="Điểm đến"
    style="left:${Pn.x}px; top:${Pn.y}px">${e}</nav>`}function ml(e,t){const a=F.nextBtn;let n=e.querySelector(":scope > .rail-next");n||(n=document.createElement("button"),n.className="tool-btn rail-next",n.type="button",n.setAttribute("aria-label","Trang sau"),n.innerHTML=he("chevronRight"),e.appendChild(n)),n.style.setProperty("--next-left",`${a.cx-a.d/2}px`),n.style.setProperty("--next-top",`${a.cy-a.d/2}px`),n.onclick=o=>{o.stopPropagation(),t()}}function gl(e){e.style.setProperty("--art-w",`${F.cards.artW}px`),e.style.setProperty("--art-h",`${F.cards.artH}px`),e.innerHTML=An("statusTitle")+An("girlsTitle")+Ln(172,434,"Trạng thái của bạn")+Ln(668,436,"Trạng thái nhân vật")+Tn()+pl()+ul()+hl(),yl(e.parentElement);const t=el(e.parentElement,{onGift:i=>{n.close(),a.open(i)},onDock:i=>{a.isOpen()&&a.target()!==i&&a.close()},onOverlay:()=>{a.close(),n.close()}}),a=il(e.parentElement,{onSend:({message:i,payload:r})=>(console.info("[gift] payload",r),Pe(i).catch(c=>(console.warn("[gift]",c),!1)))}),n=oi(e.parentElement,{onItem:i=>{if(i===Qe){n.close(),t.openMapCreate();return}t.open("inventory")}});e.querySelector(".dest-rail")?.addEventListener("click",i=>{const r=i.target.closest(".dest-btn[data-page]");!r||r.disabled||(a.close(),n.close(),t.open(r.dataset.page))}),Qa((i,r)=>{i==="inventoryOpen"&&r!=="drawer"&&n.close()});const o=e.querySelector(".rail");ml(e.parentElement,()=>{yt+=1,Ma(o)}),o?.addEventListener("click",i=>{const r=i.target.closest(".card");if(r){if(i.target.closest(".card-star")){Zo(r.dataset.name),yt=0,Ma(o);return}t.openCharacter(r.dataset.name)}});const s=()=>{e.querySelector(".btn-ghost")?.addEventListener("click",()=>t.open("profile"))};s(),e.querySelectorAll(".pane-pod .tool-btn[data-page]").forEach(i=>{i.addEventListener("click",()=>{i.dataset.page==="inventory"&&la("inventoryOpen")==="drawer"?(a.close(),n.toggle()):t.open(i.dataset.page)})}),o&&Vt(o),et(()=>{if(document.querySelector(".viewport")?.classList.contains("is-portrait"))return;fl(e);const i=e.querySelector(".pane-status");if(i){const r=ft(Tn());r&&i.replaceWith(r),s()}Ma(e.querySelector(".rail"))})}function yl(e){const t=Xo.blossom;let a=e.querySelector(":scope > .sprite-blossom");a||(a=document.createElement("img"),a.className="sprite sprite-blossom",a.alt="",a.draggable=!1,e.appendChild(a)),a.src=t.src,a.style.cssText=`left:${t.x}px;top:${t.y}px;width:${t.w}px;height:${t.h}px`}const Be=941,bl=13/36,vl=e=>Math.min(Be,Math.round(e/bl)),$e={left:33,r:38},Lt=(e=Be)=>({left:$e.left,right:e-$e.left,r:$e.r}),C={width:280,r:34,drop:44,fillet:58},oe={width:356,r:46},Xe={d:76,gap:12,count:4},De=26,Qo=1.55,Cn={w:330,gap:24};function es(e,t,a){const n=t+a,o=Math.sqrt(e*(2*n-e)),s=t/n;return{dx:o,jx:s*o,jy:t-s*(t+a-e)}}const $l=es(C.drop,C.fillet,C.fillet),Re=$l.dx;function pa(e,t=Be){const a=$e.left,n=a+C.width,o=n+Re;if(!e)return{earRight:n,earEnd:o,podStart:null,podLeft:null};const s=t-a-oe.width;return{earRight:n,earEnd:o,podStart:s-Re,podLeft:s}}const wl=(e=Be)=>e-$e.left-oe.width+(oe.width-(Xe.count*Xe.d+(Xe.count-1)*Xe.gap))/2,ts=(e,t)=>`A ${C.fillet} ${C.fillet} 0 0 1 ${e+Re/2} ${t+C.drop/2} A ${C.fillet} ${C.fillet} 0 0 0 ${e+Re} ${t+C.drop}`,as=(e,t)=>`A ${C.fillet} ${C.fillet} 0 0 0 ${e+Re/2} ${t-C.drop/2} A ${C.fillet} ${C.fillet} 0 0 1 ${e+Re} ${t-C.drop}`;function kl(e){const t=e-De,{earRight:a,earEnd:n}=pa(!1),o=C.fillet+De,s=C.fillet-De,{jx:i,jy:r}=es(C.drop,o,s),c=C.r-De;return{bottomEar:t,rBL:c,d:[`L ${n} ${t+C.drop}`,`A ${s} ${s} 0 0 1 ${a+i} ${t+r}`,`A ${o} ${o} 0 0 0 ${a} ${t}`,`L ${$e.left+c} ${t}`,`A ${c} ${c} 0 0 1 ${$e.left} ${t-c}`].join(" ")}}function ns(e,t,a=Be){const{left:n,right:o,r:s}=Lt(a);return t==null?`A ${s} ${s} 0 0 1 ${o-s} ${e} L ${n+s} ${e} A ${s} ${s} 0 0 1 ${n} ${e-s}`:`A ${s} ${s} 0 0 1 ${o-s} ${e} ${kl(t).d}`}const xl=(e,t)=>t==null?e-$e.r:t-De-(C.r-De);function Sl({earTop:e,bottom:t,pod:a=!1,nextEar:n=null,pw:o=Be}){const{left:s,right:i,r}=Lt(o),c=e+C.drop,{earRight:p,earEnd:f,podStart:m,podLeft:y}=pa(a,o),g=a?`L ${m} ${c} ${as(m,c)} L ${i-oe.r} ${e} A ${oe.r} ${oe.r} 0 0 1 ${i} ${e+oe.r}`:`L ${i-r} ${c} A ${r} ${r} 0 0 1 ${i} ${c+r}`;return[`M ${s+C.r} ${e}`,`L ${p} ${e}`,ts(p,e),g,`L ${i} ${t-r}`,ns(t,n,o),`L ${s} ${e+C.r}`,`A ${C.r} ${C.r} 0 0 1 ${s+C.r} ${e}`,"Z"].join(" ")}const de=e=>+(e*Qo).toFixed(2);function os({earTop:e,bottom:t,pod:a=!1,nextEar:n=null,pw:o=Be}){const{left:s,right:i,r}=Lt(o),c=e+C.drop,{earRight:p,earEnd:f,podStart:m,podLeft:y}=pa(a,o),g=[{id:"ear-top",d:`M ${s} ${e+C.r} A ${C.r} ${C.r} 0 0 1 ${s+C.r} ${e} L ${p} ${e}`,color:"rgb(236,226,240)",opacity:.96,width:de(2.15)},{id:"ear-fall",d:`M ${p} ${e} ${ts(p,e)}`,color:"rgb(250,242,248)",opacity:1,width:de(2.3)},{id:"main-top",d:`M ${f} ${c} L ${a?m:i-r} ${c}`,color:"rgb(208,204,228)",opacity:.9,width:de(2)}];return a?g.push({id:"pod-rise",d:`M ${m} ${c} ${as(m,c)}`,color:"rgb(252,244,248)",opacity:1,width:de(2.35)},{id:"pod-top",d:`M ${y} ${e} L ${i-oe.r} ${e}`,color:"rgb(198,176,184)",opacity:.78,width:de(1.85)},{id:"right",d:`M ${i-oe.r} ${e} A ${oe.r} ${oe.r} 0 0 1 ${i} ${e+oe.r} L ${i} ${t-r}`,color:"url(#pRimRight)",opacity:.92,width:de(2)}):g.push({id:"right",d:`M ${i-r} ${c} A ${r} ${r} 0 0 1 ${i} ${c+r} L ${i} ${t-r}`,color:"url(#pRimRight)",opacity:.92,width:de(2)}),g.push({id:"bottom",d:`M ${i} ${t-r} ${ns(t,n,o)}`,color:"rgb(255,248,250)",opacity:1,width:de(2.25)},{id:"left",d:`M ${s} ${xl(t,n)} L ${s} ${e+C.r}`,color:"url(#pRimLeft)",opacity:.9,width:de(2)}),g}function Ml({earTop:e,pod:t=!1,pw:a=Be}){const{left:n,right:o}=Lt(a),s=C.fillet,{earRight:i,podStart:r,podLeft:c}=pa(t,a),p=[{id:"ear-corner",d:`M ${n} ${e+C.r} A ${C.r} ${C.r} 0 0 1 ${n+C.r} ${e}`,color:"rgb(220, 228, 255)",width:de(14),opacity:.1},{id:"ear-fillet",d:`M ${i} ${e} A ${s} ${s} 0 0 1 ${i+Re/2} ${e+C.drop/2}`,color:"rgb(210, 220, 255)",width:de(18),opacity:.12}];return t&&p.push({id:"pod-fillet",d:`M ${r+Re/2} ${e+C.drop/2} A ${s} ${s} 0 0 1 ${c} ${e}`,color:"rgb(255, 232, 242)",width:de(20),opacity:.14},{id:"pod-corner",d:`M ${o-oe.r} ${e} A ${oe.r} ${oe.r} 0 0 1 ${o} ${e+oe.r}`,color:"rgb(255, 236, 220)",width:de(14),opacity:.08}),p}const te=e=>+(e*Qo).toFixed(2),jn=`
  <linearGradient id="pRimLeft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="rgb(200,204,228)" stop-opacity=".80"/>
    <stop offset=".40" stop-color="rgb(210,200,220)" stop-opacity=".88"/>
    <stop offset=".78" stop-color="rgb(240,226,230)" stop-opacity=".96"/>
    <stop offset="1" stop-color="rgb(255,250,246)" stop-opacity="1"/>
  </linearGradient>
  <linearGradient id="pRimRight" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="rgb(190,166,155)" stop-opacity=".84"/>
    <stop offset=".22" stop-color="rgb(232,199,183)" stop-opacity=".92"/>
    <stop offset=".55" stop-color="rgb(240,214,212)" stop-opacity=".95"/>
    <stop offset=".82" stop-color="rgb(254,242,238)" stop-opacity="1"/>
    <stop offset="1" stop-color="rgb(255,248,246)" stop-opacity="1"/>
  </linearGradient>`;function qn(e,t,a,n,o=!1){if(e.setAttribute("viewBox",`0 0 ${n} ${a}`),o){e.innerHTML=`<defs>${jn}</defs>`;return}e.innerHTML=`
<defs>
  ${t.map(s=>`
  <clipPath id="pClip-${s.id}" clipPathUnits="userSpaceOnUse">
    <path d="${s.path}"/>
  </clipPath>`).join("")}

  <!-- Side rims brighten downward, the same way the landscape shell's do.
       objectBoundingBox so one definition covers every panel height. -->
  ${jn}

  <!-- Shallow inner glow: cool at the top edge, warming into the underside the
       way desk light does in the landscape scene. -->
  <linearGradient id="pInnerGlow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0"   stop-color="rgb(228,234,255)" stop-opacity=".28"/>
    <stop offset=".18" stop-color="rgb(212,222,252)" stop-opacity=".15"/>
    <stop offset=".55" stop-color="rgb(198,204,240)" stop-opacity=".07"/>
    <stop offset=".85" stop-color="rgb(255,228,214)" stop-opacity=".20"/>
    <stop offset="1"   stop-color="rgb(255,236,228)" stop-opacity=".40"/>
  </linearGradient>

  <filter id="pGlowBlur" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="${te(2.4)}"/>
  </filter>
  <filter id="pHairBlur" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="${te(1)}"/>
  </filter>
  <filter id="pRimBloom" x="-12%" y="-30%" width="124%" height="160%">
    <feGaussianBlur stdDeviation="${te(3.2)}"/>
  </filter>
  <filter id="pHotBloom" x="-20%" y="-40%" width="140%" height="180%">
    <feGaussianBlur stdDeviation="${te(5.5)}"/>
  </filter>
  <filter id="pCornerBloom" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="${te(8.5)}"/>
  </filter>
  <filter id="pLensFog" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="${te(5.5)}"/>
  </filter>
  <filter id="pLensCore" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="${te(2)}"/>
  </filter>
</defs>`}function Al(e,t,a,n){e.setAttribute("viewBox",`0 0 ${n} ${a}`),e.innerHTML=t.map(o=>os(o).map(s=>{const i=s.id==="left"?"url(#pRimLeft)":s.id==="right"?"url(#pRimRight)":s.color;return`<path d="${s.d}" fill="none" stroke="${i}" stroke-width="${s.width}"
      stroke-opacity="${s.opacity}" stroke-linecap="round" stroke-linejoin="round"/>`}).join("")).join("")}const Ie=(e,t={})=>{const a=t.width??e.width,n=t.opacity??e.opacity,o=t.color??e.color,s=t.filter?` filter="${t.filter}"`:"";return`<path d="${e.d}" fill="none" stroke="${o}" stroke-width="${a}" stroke-opacity="${n}" stroke-linecap="${t.cap||"round"}" stroke-linejoin="round"${s}/>`};function Ll(e,t,a,n){e.setAttribute("viewBox",`0 0 ${n} ${a}`),e.innerHTML=t.map(o=>{const s=os(o),i=l=>s.find(v=>v.id===l),r=s.filter(l=>l.id==="ear-fall"||l.id==="pod-rise"),c=s.filter(l=>l.id!=="ear-top"),p=s.filter(l=>!["left","right","bottom","ear-top","pod-top"].includes(l.id)),f=s.filter(l=>!["left","right","bottom"].includes(l.id)),{left:m,right:y,r:g}=Lt(o.pw),d=o.bottom,u=`M ${y} ${d-g} A ${g} ${g} 0 0 1 ${y-g} ${d}`,S=o.nextEar==null?`M ${m+g} ${d} A ${g} ${g} 0 0 1 ${m} ${d-g}`:null,b=Ml(o);return`
<g clip-path="url(#pClip-${o.id})">
  ${c.map(l=>Ie(l,{color:"url(#pInnerGlow)",width:te(10),opacity:1,filter:"url(#pGlowBlur)"})).join(`
  `)}
  ${p.map(l=>Ie(l,{color:"rgba(10,14,34,.28)",width:te(6.5),opacity:1,filter:"url(#pHairBlur)"})).join(`
  `)}
  ${r.map(l=>Ie(l,{width:te(7),opacity:.28,filter:"url(#pHotBloom)"})).join(`
  `)}
  ${f.map(l=>Ie(l,{width:te(5),opacity:.18,filter:"url(#pRimBloom)"})).join(`
  `)}
  ${S?`<path d="${S}" fill="none" stroke="rgb(255,232,214)" stroke-width="${te(28)}"
        stroke-opacity=".34" stroke-linecap="round" filter="url(#pCornerBloom)"/>`:""}
  <path d="${u}" fill="none" stroke="rgb(255,226,200)" stroke-width="${te(30)}"
        stroke-opacity=".36" stroke-linecap="round" filter="url(#pCornerBloom)"/>
  <!-- Convex-lens fog: only the raised tab's corner and the S-fillet convexes. -->
  ${b.map(l=>Ie(l,{opacity:l.opacity,filter:"url(#pLensFog)"})).join(`
  `)}
  ${b.filter(l=>l.id!=="ear-corner").map(l=>Ie(l,{width:Math.max(te(6),l.width*.28),opacity:Math.min(.55,l.opacity*1.8),filter:"url(#pLensCore)"})).join(`
  `)}
</g>
${f.map(l=>Ie(l)).join(`
`)}
<path d="${i("left").d}" fill="none" stroke="url(#pRimLeft)" stroke-width="${te(2.4)}"
      stroke-opacity=".95" stroke-linecap="butt"/>
<path d="${i("right").d}" fill="none" stroke="url(#pRimRight)" stroke-width="${te(1.9)}"
      stroke-opacity=".95" stroke-linecap="butt"/>
<path d="${i("bottom").d}" fill="none" stroke="rgb(255,248,250)" stroke-width="${te(1.9)}"
      stroke-opacity="1" stroke-linecap="butt"/>
${S?`<path d="${S}" fill="none" stroke="rgb(255,248,240)" stroke-width="${te(3.4)}"
      stroke-opacity=".95" stroke-linecap="round"/>`:""}
<path d="${u}" fill="none" stroke="rgb(255,246,236)" stroke-width="${te(3.2)}"
      stroke-opacity=".95" stroke-linecap="round"/>`}).join(`
`)}const Nn=Ua(qo),El=17/36,Tl=De-C.drop,Pl=e=>{const t=`clip-path:url(#pClip-${e.id});-webkit-clip-path:url(#pClip-${e.id})`,a=`--pt:${e.earTop+C.drop}px;--pb:${e.bottom}px`;return`
<div class="pg pg-blur"    style="${t}"></div>
<div class="pg pg-paint"   style="${t};${a}">
  <div class="pg-tint"></div>
  <div class="pg-frost"></div>
  <div class="pg-edge"></div>
</div>`},Cl={status:{src:Ze("blossom-bloom.png"),w:68,h:90},girls:{src:Nn.dockBlossom.src,w:110,h:90},page:{src:Nn.dockBlossom.src,w:110,h:90}},jl=e=>{const t=Cl[e.id];return t?`
  <img class="pblossom" src="${t.src}" alt="" draggable="false"
    style="left:${$e.left-t.w*.19}px; top:${e.earTop-t.h*.47}px;
           width:${t.w}px; height:${t.h}px">`:""};function ql(e){e.classList.add("pstage");const t=document.documentElement.dataset.hudPerformance==="low"?"":Ze("bg-plate.png");e.innerHTML=`
<div class="pscale">
  <img class="pplate"${t?` src="${t}"`:""} alt="" draggable="false">
  <svg class="pdefs" aria-hidden="true"></svg>
  <div class="pglass" aria-hidden="true"></div>
  <div class="pcontent"></div>
  <svg class="prim" aria-hidden="true"></svg>
  <div class="pblossoms" aria-hidden="true"></div>
</div>`;const a=e.querySelector(".pscale"),n=e.querySelector(".pdefs"),o=e.querySelector(".pglass"),s=e.querySelector(".pcontent"),i=e.querySelector(".prim"),r=e.querySelector(".pblossoms"),c=d=>{const u=[...s.querySelectorAll(":scope > .ppanel")];return u.map((S,b)=>{const l=u[b+1],v={id:S.dataset.panel,earTop:S.offsetTop,bottom:S.offsetTop+S.offsetHeight,pod:S.hasAttribute("data-pod"),nextEar:l?l.offsetTop:null,pw:d};return v.path=Sl(v),v})};let p=0,f="";const m=()=>{p=0;const d=e.clientWidth;if(!d)return;const u=vl(d),S=Math.min(d/u,El),b=u*S;a.style.setProperty("--k",String(S)),a.style.setProperty("--pw",`${u}px`),a.style.setProperty("--viewport-canvas-h",`${Math.ceil(innerHeight/S)}px`),a.style.setProperty("--pod-row-left",`${wl(u)}px`),a.style.setProperty("--tool-d",`${Xe.d}px`),a.style.setProperty("--tool-gap",`${Xe.gap}px`),a.style.setProperty("--panel-right",`${u-$e.left}px`),a.style.setProperty("--panel-margin",`${Tl}px`),a.style.setProperty("--ear-drop",`${C.drop}px`),a.style.left=`${Math.round((d-b)/2)}px`;const l=c(u),v=Math.ceil(s.offsetHeight);if(!l.length||!v)return;const $=Math.ceil(v*S);a.style.height=`${v}px`,e.style.height=`${$}px`,mr($);const j=`${u}|${v}|`+l.map(L=>`${L.id}:${L.earTop}:${L.bottom}:${L.pod?1:0}`).join("|");if(j!==f){f=j;for(const L of[n,i])L.setAttribute("width",String(u)),L.setAttribute("height",String(v));document.documentElement.dataset.hudIosTtFlat==="1"?(qn(n,l,v,u,!0),Al(i,l,v,u),o.innerHTML=`<svg class="pg-flat" width="${u}" height="${v}"
        viewBox="0 0 ${u} ${v}" aria-hidden="true">${l.map(L=>`<path d="${L.path}" fill="#242840"/>`).join("")}</svg>`):(qn(n,l,v,u),o.innerHTML=l.map(Pl).join(""),Ll(i,l,v,u)),r.innerHTML=l.map(jl).join("")}},y=()=>{p||(p=requestAnimationFrame(m))},g=new ResizeObserver(y);return g.observe(e),g.observe(s),addEventListener("resize",y),{content:s,sync:y,scale:a,destroy:()=>{g.disconnect(),removeEventListener("resize",y)}}}const G=e=>e?`<i class="ic">${da[e]}</i>`:"",ua=(e,t)=>Math.max(0,Math.min(100,e/t*100)),ge=(e,t)=>`
  <div class="pear"><span>${e}</span></div>
  <div class="pear-cap"><i>/</i><span>${t}</span></div>`;function pe(e,t,a,n,o=[]){const s=o.filter(i=>i>0&&i<a).map(i=>`<u class="${t>=i?"is-past":""}" style="--at:${i/a*100}%"></u>`).join("");return`
  <div class="pmeter tone-${n}">
    <div class="pmeter-head"><span>${e}</span><b>${t}</b><em>/ ${a}</em></div>
    <div class="pmeter-track"><i style="--pct:${ua(t,a)}%"></i>${s}</div>
  </div>`}const ve=(e,t,a="")=>`
  <div class="ppage-head">
    <b>${e}</b><span>${t}</span><i></i>${a?`<em>${a}</em>`:""}
  </div>`,Nl={goods:"Đồ dùng bền · Sử dụng không mất số lượng",consumable:"Sử dụng số lượng -1",material:"Thu thập & Hợp thành"};function Rl(e){const t=e.bucket==="consumable"?`Cường độ ${e.potency} / 5`:e.bucket==="goods"?[e.rarity,e.worn?"Đang đeo":"Chưa đeo"].filter(Boolean).join(" · "):e.source;return[e.icon.label,t].filter(Boolean).map(a=>`<em>${a}</em>`).join("")}function Ol(e){return`
    <span class="pslot">
      <span class="pslot-well"></span>
      ${Oe(e.icon,"pslot-icon")}
      <span class="pslot-gem"></span>
      ${xt(e.bucket==="consumable"?e.potency:0)}
      ${e.quantity>1?`<span class="pslot-qty">${e.quantity}</span>`:""}
      ${e.worn?'<span class="pslot-worn"></span>':""}
    </span>`}function Bl(){const e=E.money<ce,t=ce-E.money;return`<button class="pinv-use${e?" is-broke":""}" type="button" data-map-marker-use
    ${e?"disabled":""}
    aria-label="Sử dụng Bản vẽ quy hoạch đô thị, phí xây dựng ${pt(ce)}${e?", không đủ tiền":""}"
    >${e?`Phí xây dựng ${pt(ce)} · Còn thiếu ${pt(t)}`:`Sử dụng Bản vẽ quy hoạch đô thị<em>Phí xây dựng ${pt(ce)}</em>`}</button>`}function Il(e,t=new Map){const a=`${e.bucket}:${e.name}`,n=encodeURIComponent(JSON.stringify({kind:e.bucket,name:e.name,quantity:e.quantity}));return`
  <div class="pinv-row b-${e.bucket}${e.worn?" is-worn":""}"
    data-item="${e.name}" data-set="${e.icon.set}" data-placing="${e.icon.placing}"
    style="--hue:${e.icon.hue}; --tilt:${e.icon.tilt}deg; --scale:${e.icon.scale}${e.bucket==="consumable"?`; --potency:${e.potency}`:""}"
    aria-label="${e.icon.label} · ${e.name}, số lượng ${e.quantity}">
    <label class="pinv-select"><input type="checkbox" data-inv-select="${n}" ${t.has(a)?"checked":""} aria-label="Chọn hủy ${e.name}"><i></i></label>
    ${Ol(e)}
    <span class="pinv-copy">
      <b>${e.name}</b>
      <span class="pinv-tags">${Rl(e)}</span>
      <p>${e.description}</p>
      ${e.name===Qe?Bl():""}
    </span>
  </div>`}function Dl(e,t,a=new Map){return`
  <section class="pinv-group${t===0?" is-active":""}" data-inventory-page-panel="${t}"${t===0?"":" hidden"}>
    <div class="pinv-head">
      <b>${e.label}</b><span>${Nl[e.bucket]}</span><i></i><em>${e.items.length}</em>
    </div>
    ${e.items.map(n=>Il(n,a)).join("")}
  </section>`}function Fl({selected:e=new Map,notice:t=""}={}){const a=St(),n=a.reduce((o,s)=>o+s.items.length,0);return`
<section class="ppanel is-page" data-panel="page" role="dialog" aria-label="Túi đồ & Đạo cụ">
  ${ge("Inventory","Túi đồ & Đạo cụ")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>

  <div class="pinv-top">
    <div class="pinv-count">${G("memo")}<b>${n}</b><span>vật phẩm</span></div>
    <div class="pinv-stamina">
      <div class="pinv-stamina-head">${G("clock")}<span>Thể lực hiện tại</span><b>${E.stamina}</b><em>/ 100</em></div>
      <div class="pbar"><i style="--pct:${ua(E.stamina,100)}%"></i></div>
    </div>
  </div>

  <div class="pinv-tools">
    <label><input type="checkbox" data-inv-select-all>Chọn tất cả danh mục này</label>
    <span data-inv-selected-count>Đã chọn ${e.size} mục</span>
    <button type="button" data-inv-destroy ${e.size?"":"disabled"}>Hủy hàng loạt</button>
    <em data-inv-status>${t}</em>
  </div>

  <hr class="prule">

  ${a.length?`
  <div class="pinv-pager" role="tablist" aria-label="Danh mục túi đồ">
    ${a.map((o,s)=>`<button type="button" role="tab" data-inventory-page="${s}"
      aria-selected="${s===0}" class="${s===0?"is-active":""}">
      <b>${o.label}</b><span>${o.items.length}</span>
    </button>`).join("")}
  </div>
  <p class="pinv-page-note"><b data-inventory-page-current>1</b><span>/ ${a.length}</span></p>
  ${a.map((o,s)=>Dl(o,s,e)).join("")}`:'<div class="pinv-empty">Túi đồ đang trống</div>'}
</section>`}function Gl(e,t,a,n){return Ue.map(([o,s])=>{const i=t[o],r=Ya(i,a?.[o],n?.[o]),c=_[e.name].developmentNotes?.[o]||No[e.name]?.[o]?.[i],p=`pdev-${o}`,f=r.dayFull?`Hôm nay đã đầy ${r.daily}`:`Hôm nay +${r.today}`;return`
    <div class="pdev-tile${i?"":" is-zero"}${r.dayFull&&!r.capped?" is-dayfull":""}">
      <button class="pdev-open" type="button" data-dev-part="${o}"
        aria-expanded="false" aria-controls="${p}"
        aria-label="${s} Độ khai phá ${i} ${Se[i]}, ${r.capped?"Đã đạt tối đa":`Cách cấp tiếp theo ${r.value} / ${r.need}, ${f}`}">
        <span class="pdev-crop" data-part-art-name="${e.name}" data-part-art-key="${o}">
          ${Gt(e.name,o)?`<img src="${Gt(e.name,o)}" alt="" draggable="false" loading="lazy" decoding="async" data-remove-on-error>`:""}
          <em>Chưa có ảnh</em>
        </span>
        <span class="pdev-meta">
          <b>${s}</b><span>${i} · ${Se[i]}</span>
          ${G("chevronRight")}
        </span>
        <span class="pdev-pips">${Se.map((m,y)=>`<i class="${y&&y<=i?"on":""}"></i>`).slice(1).join("")}</span>
        <span class="pdev-prog${r.capped?" is-capped":r.dayFull?" is-dayfull":""}"
          style="--pct:${r.pct}%;--from:${r.fromPct}%;--today:${r.todayPct}%">
          <i aria-hidden="true"><u></u>${r.todayPct?"<s></s>":""}</i>
          <em>${r.capped?"Tối đa":`${r.value} / ${r.need}`}</em>
          ${r.capped||!r.dayFull?"":`<mark class="pdev-day">Hôm nay đã đầy ${r.daily}</mark>`}
        </span>
      </button>
      <div class="pdev-note" id="${p}" data-dev-note-name="${e.name}" data-dev-note-part="${o}" hidden>
        ${c?`<p>${c}</p>`:'<p class="is-muted">Chưa có đánh giá</p>'}
        ${Io(e,o)}
      </div>
    </div>`}).join("")}function Hl(e){const[t,a]=Ke[0],n=Ke.slice(1);return`
  <div class="pexp-recent">
    <span>${a}</span><b>${e[t]}</b>
    <em>1 tuần gần đây · Mỗi ngày không phát sinh -1</em>
  </div>
  <ul class="pexp-list">
    ${n.map(([o,s])=>{const i=s.replace(/^Kinh nghiệm\s*/i,"").replace("经验",""),r=e[o],c=Fn(r);return`
    <li class="${r?"":"is-zero"}" style="--hue:${c.hue}"
      aria-label="${i} ${r} lần, ${c.name}">
      <span>${i}</span><em>${c.name}</em><b>${r}</b>
      <i class="pexp-bar" style="--pct:${c.pct}%" aria-hidden="true"><u></u></i>
    </li>`}).join("")}
  </ul>`}function Ul(e){const t=V.find(g=>g.name===e)||V[0],{bond:a,physiology:n,experience:o,development:s,developmentProgress:i,developmentToday:r,location:c,fan:p}=_[t.name],f=n.statuses.length?n.statuses.map(g=>`<span>${g}</span>`).join(""):`<span class="is-muted">${Mt}</span>`,m=c||T.location,y=ea(p);return`
<section class="ppanel is-page pcharacter-page t-${t.theme}" data-panel="page" role="dialog"
  aria-label="Hồ sơ đầy đủ của ${t.name}">
  ${ge(t.romaji,`${t.name} · Hồ sơ đầy đủ`)}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>

  <div class="parc-id">
    <figure class="parc-art"><img src="${t.art}" alt="" draggable="false" decoding="async"></figure>
    <div class="parc-id-copy">
      <h3>${t.name}<small>${t.romaji}</small></h3>
      <span class="pchip">${G("smile")}Tâm trạng · ${a.mood}</span>
      <div class="parc-status"><small>Trạng thái bất thường</small><div>${f}</div></div>
    </div>
  </div>

  ${ve("Ràng buộc","Tích lũy dài hạn")}
  ${pe("Độ hảo cảm",a.favor,1e3,"pink")}
  ${pe("Độ thuận tùng",a.obedience,1e3,"violet",re.obedience)}

  ${ve("Vị trí","Cô ấy ở đâu")}
  <p class="ppage-note">${G("mapPin")} ${m.area}${m.place?` · ${m.place}`:""} · ${Qt[m.privacy]??""} ${m.privacy}/5</p>
  <p class="ppage-note">${y.follow?"Đã theo dõi":"Chưa theo dõi"} · ${y.tier} · ${y.lv} · ${y.yen}</p>

  ${ve("Sinh lý","Trạng thái tức thời")}
  ${pe("Độ ham muốn",n.desire,100,"pink",re.desire)}
  ${pe("Thể lực",n.stamina,100,"blue",re.stamina)}
  ${pe("Buồn tiểu",n.bladder,100,"gold",re.bladder)}

  ${ve("Độ khai phá cơ thể","4 bộ phận · Ngưỡng tăng dần")}
  <div class="pdev-note-actions"><button type="button" data-dev-notes-action="generate" data-dev-notes-name="${t.name}">Làm mới đánh giá</button><button type="button" data-dev-notes-action="restore" data-dev-notes-name="${t.name}">Khôi phục mặc định</button></div>
  <div class="pdev-grid">${Gl(t,s,i,r)}</div>

  ${ve("Kinh nghiệm tình dục","Số lần")}
  ${Hl(o)}
</section>`}function _l(e){const{icon:t}=e,a=e.bucket==="consumable"?`Cường độ ${e.potency} / 5`:e.bucket==="goods"?e.worn?"Đang đeo":"Chưa đeo":e.source;return`
  <button class="pgift-row b-${e.bucket}" type="button"
    data-gift-send-item="${e.name}"
    style="--hue:${t.hue}; --tilt:${t.tilt}deg; --scale:${t.scale}${e.bucket==="consumable"?`; --potency:${e.potency}`:""}"
    aria-label="${e.name}, ${t.label}, số lượng ${e.quantity}">
    <span class="pslot">
      <span class="pslot-well"></span>
      ${Oe(t,"pslot-icon")}
      <span class="pslot-gem"></span>
      ${xt(e.bucket==="consumable"?e.potency:0)}
      ${e.quantity>1?`<span class="pslot-qty">${e.quantity}</span>`:""}
    </span>
    <span class="pgift-copy">
      <b>${e.name}</b>
      <span class="pgift-tags">
        <em>${t.label}</em>${a?`<em>${a}</em>`:""}<em>Còn ${e.quantity}</em>
      </span>
      <p>${e.description}</p>
    </span>
  </button>`}function Yl(e){const t=Va(e),a=E.money<e.price,n=e.price?`￥${e.price.toLocaleString("en-US")}`:"Miễn phí";return`
  <button class="pgift-row is-tip${a?" is-broke":""}${e.guard?" is-guard":""}"
    type="button" data-gift-send-tip="${e.slug}" ${a?"disabled":""}
    style="--hue:${e.hue}; --fit:${e.hue}"
    aria-label="${e.name}, ${n}${a?", số dư không đủ":""}">
    <span class="pslot">
      <span class="pslot-well"></span>
      ${Oe(t,"pslot-icon")}
      <span class="pslot-gem"></span>
    </span>
    <span class="pgift-copy">
      <b>${e.name}</b>
      <span class="pgift-tags"><em>${e.group}</em>${e.guard?`<em>${sa} ngày</em>`:`<em>Đọc ID: ${oa[e.notice]}</em>`}</span>
      <p>${e.note||""}</p>
    </span>
    <span class="pgift-fit">
      <b>${n}</b>
      <em>${a?"Số dư không đủ":e.banner?"Bay ngang màn hình":"Công khai"}</em>
    </span>
  </button>`}function zl(e){const t=V.find(c=>c.name===e)||V[0],{bond:a,stream:n,fan:o}=_[t.name],s=ra(t.name),i=St(),r=[];return s.near&&r.push(`
  ${ve("Tặng quà riêng","Số lượng -1","Có thể tặng mọi vật phẩm")}
  ${i.length?i.map(c=>`
  <div class="pgift-band"><b>${c.label}</b><i></i></div>
  ${c.items.map(_l).join("")}`).join(""):'<div class="pinv-empty">Túi đồ đang trống</div>'}`),s.live&&r.push(`
  ${ve("Donate phòng live",`Độ nóng ${n.heat.toLocaleString("en-US")}`,"Không dùng túi đồ")}
  ${Xa().map(c=>`
  <div class="pgift-band"><b>${c.label}</b><i></i></div>
  ${c.items.map(Yl).join("")}`).join("")}`),`
<section class="ppanel is-page t-${t.theme}" data-panel="page" role="dialog"
  aria-label="Tặng cho ${t.name}">
  ${ge(t.romaji,`Tặng cho ${t.name}`)}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>

  <div class="pgift-who">
    <img src="${t.art}" alt="" draggable="false">
    <div class="pgift-who-copy">
      <b>${t.name}</b>
      <span class="pgift-who-tags">
        <em>${G("smile")}${a.mood}</em>
        ${s.near?'<em class="is-near">Ở bên cạnh</em>':""}
        ${s.live?'<em class="is-live">Đang live</em>':""}
        ${o?.tier&&o.tier!=="无"&&o.tier!=="Không"?`<em class="is-guard">${o.tier}</em>`:""}
      </span>
      ${pe("Độ hảo cảm",a.favor,1e3,"pink")}
    </div>
  </div>

  ${r.length?r.join(""):`<p class="ppage-note">${s.reason}, hiện không có gì có thể tặng.</p>`}

  <p class="pgift-stub"><span class="pstub">Chưa kết nối gửi</span></p>
</section>`}function Wl(){const e=zn(),t=e.map(a=>{const n=a.notice===!0,o=Object.entries(a.conditions||{}).map(([r,c])=>{const p=Array.isArray(c)?c.join(" / "):typeof c=="string"?c:(r==="体力上限"||r==="Giới hạn thể lực")?`≤ ${c}`:`≥ ${c}`;return`<span>${r} ${p}</span>`}).join(""),s=!!a.area&&a.area===T.location.area,i=n?"Gợi ý sự kiện":Array.isArray(a.category)?a.category.join(" · "):a.category;return`
    <article class="pevt${(a.status==="可触发"||a.status==="Có thể kích hoạt")||n?" is-ready":""}">
      <div class="pevt-top">
        <span class="pevt-cat">${i}</span>
        ${n?"":`<em>Ưu tiên ${a.priority}</em>`}
        <b class="pevt-status${(a.status==="可触发"||a.status==="Có thể kích hoạt")||n?" is-ready":""}">${n?"Chờ xử lý":a.status}</b>
      </div>
      <h3>${a.title}</h3>
      <p>${a.summary}</p>
      ${a.area?`<div class="pevt-where${s?" is-here":""}">${G("mapPin")}<span>${a.area}${a.place?` · ${a.place}`:""}</span>${s?"<em>Vị trí hiện tại</em>":""}</div>`:""}
      ${o?`<details class="pevt-cond"><summary>Điều kiện kích hoạt <i>${Object.keys(a.conditions||{}).length}</i></summary><div>${o}</div></details>`:""}
      <button class="pevt-handle" type="button" data-event-handle="${encodeURIComponent(a.id)}">Xử lý</button>
    </article>`}).join("");return`
<section class="ppanel is-page" data-panel="page" role="dialog" aria-label="Gợi ý sự kiện">
  ${ge("Today","Gợi ý sự kiện")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>
  <div class="pevt-sum">
    <div><b>${e.length}</b><span>sự kiện chờ xử lý</span></div>
    <em>${T.calendar.full} · ${T.time.period}</em>
  </div>
  ${t||'<p class="ppage-note">Hiện không có sự kiện chờ xử lý.</p>'}
</section>`}function Xl(e){return e.days.map(t=>{const a=t.state?na[t.state]:null;return`<span class="${["pschedule-run-day",t.active?"is-active":"is-rest",t.isToday?"is-today":"",t.joinsPrevious?"joins-previous":"",t.joinsNext?"joins-next":"",a?.tone||""].filter(Boolean).join(" ")}" title="${t.day}${t.active?` ${e.start}–${e.end}`:" Nghỉ"}"><i></i></span>`}).join("")}function Vl(e){const t=e.currentState?na[e.currentState]:null,a=t?.label||"Hôm nay nghỉ",n=e.live?`${e.title||"Phòng phát sóng"}${e.heat?` · Độ nóng ${e.heat.toLocaleString("en-US")}`:""}`:e.note;return`<div class="pschedule-line-state ${t?.tone||"is-rest"}"><b>${a}</b><small>${n}</small></div>`}function Zl(){const e=eo(),t=e.today.map(n=>`<span class="pschedule-today-chip t-${n.theme}${n.live?" is-live":""}"><i></i><b>${n.start}</b>${n.name}</span>`).join(""),a=e.rows.map(n=>`
    <article class="pschedule-line t-${n.theme}${n.watching?" is-watching":""}">
      <div class="pschedule-line-top">
        <div class="pschedule-line-id"><i></i><span><b>${n.name}</b><em>${n.romaji}</em></span></div>
        <div class="pschedule-line-time"><b>${n.start}</b><span>– ${n.end}</span></div>
        ${Vl(n)}
      </div>
      <div class="pschedule-line-days">${e.days.map(o=>`<b class="${o.isToday?"is-today":""}">${o.day.slice(1)}</b>`).join("")}</div>
      <div class="pschedule-run">${Xl(n)}</div>
    </article>`).join("");return`
<section class="ppanel is-page pschedule-page" data-panel="page" role="dialog" aria-label="Lịch phát sóng">
  ${ge("Schedule","Lịch phát sóng")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">&times;</button>
  <!-- Dateline only; see the landscape schedulePage for what was removed.  It matters a
       little more here: a portrait page replaces the whole column, so the clock on the
       Status panel is off screen while this page is open. -->
  <div class="pschedule-summary"><b>${e.weekday} · ${e.clock}</b></div>
  <div class="pschedule-today"><b>Thứ tự hôm nay</b>${t}</div>
  <div class="pschedule-lines">${a}</div>
</section>`}function Kl(){const e=[...V].sort((t,a)=>a.metric.value-t.metric.value).map(t=>{const{bond:a,physiology:n}=_[t.name],o=n.statuses.length;return`
      <button class="prel-row t-${t.theme}" type="button" data-character-full="${t.name}"
        aria-label="Xem hồ sơ đầy đủ của ${t.name}">
        <img src="${t.art}" alt="" draggable="false">
        <span class="prel-copy">
          <b>${t.name}<em>${t.romaji}</em></b>
          <span class="prel-tags">
            <em>${G("smile")}${a.mood}</em>
            <em class="${o?"is-abnormal":""}">${o?n.statuses[0]:Mt}</em>
          </span>
          ${pe("Độ hảo cảm",a.favor,1e3,"pink")}
          ${pe("Độ thuận tùng",a.obedience,1e3,"violet",re.obedience)}
        </span>
        ${G("chevronRight")}
      </button>`}).join("");return`
<section class="ppanel is-page" data-panel="page" role="dialog" aria-label="Tổng quan ràng buộc">
  ${ge("Bonds","Tổng quan ràng buộc")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>
  <div class="prel-list">${e}</div>
</section>`}function pt(e){return`￥${Number(e||0).toLocaleString("en-US")}`}function Jl(){const e=At(),t=aa(),a=Qn(),n=E.watching,o=t.current,s=e.unemployed?"Thất nghiệp":e.workedToday?"Hôm nay đã làm":e.atWork?"Tại chỗ làm":"Chưa đến chỗ làm",i=a.map(c=>`
    <button class="pfan t-${c.theme}${c.watching?" is-watching":""}${c.live?" is-live":""}"
      type="button" data-character-full="${c.name}" aria-label="Xem ${c.name}">
      <img src="${c.art}" alt="" draggable="false">
      <span class="pfan-copy">
        <b>${c.name}<em>${c.romaji}</em></b>
        <small>${c.caption}</small>
        <strong>${c.lv}<span>${(c.tier==="无"||c.tier==="Không")?"Chưa có huy hiệu":c.tier}</span>${c.yen}</strong>
      </span>
      ${G("chevronRight")}
    </button>`).join(""),r=e.canClockIn?'<span class="pstub" data-clock-in>Đi làm · Chưa kết nối</span>':"";return`
<section class="ppanel is-page pprofile" data-panel="page" role="dialog" aria-label="Hồ sơ nhân vật chính">
  ${ge("Profile","Hồ sơ nhân vật chính")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">×</button>

  <div class="pnow">
    <div><span>Hiện tại</span><b>${T.location.area}</b><em>${T.location.place||""}</em></div>
    <div><span>Đồng hành</span><b>${E.companion||"Đi một mình"}</b></div>
    <div><span>Phòng live</span><b>${n||"Chưa vào phòng"}</b></div>
  </div>

  ${ve("Công việc","Lương hợp đồng theo ngày")}
  <p class="pkicker">${e.job||"Thất nghiệp"}</p>
  <dl class="pfacts">
    <div><dt>Địa điểm</dt><dd>${e.place||"—"}</dd></div>
    <div><dt>Thu nhập ngày</dt><dd>${pt(e.daily)}</dd></div>
    <div><dt>Hôm nay</dt><dd class="${e.workedToday?"is-ok":e.atWork?"is-ready":"is-warn"}">${s}</dd></div>
  </dl>
  ${e.job?'<p class="ppage-note">Nhận lương sau khi đến chỗ làm.</p>':""}
  ${r}

  ${ve("Chỗ ở","Nơi nghỉ ngơi")}
  <p class="pkicker">${o?o.name:"Chưa có chỗ ở"}${o?.tenure?`<em>${o.tenure}</em>`:""}</p>
  <dl class="pfacts">
    <div><dt>Trạng thái</dt><dd class="${o&&o.area===t.home?"is-ok":""}">${o&&o.area===t.home?"Chỗ ở hiện tại":"Chưa đặt chỗ ở"}</dd></div>
  </dl>
  ${o?`<p class="ppage-note">${o.desc}</p>`:""}

  <details class="pfans-fold">
    <summary>
      <b>Thân phận fan</b>
      <em class="is-shut">Mở rộng</em>
      <em class="is-open">Thu gọn</em>
      ${G("chevronRight")}
    </summary>
    <div class="pfans">${i}</div>
  </details>
  <!-- 查看开播日程 was the second button in this row; the destination grid at the foot of
       the Status panel reaches 开播日程表 directly now, so the page no longer offers its own
       route to it.  See the landscape profilePage for why, and the destinations list in
       data.js for where its live hint went.  (No backticks in here: this comment lives
       inside a template literal.)
       羁绊总览 stays: it is reached from a character's 档案 as well, and this row is the
       only route out of 主角档案 that does not go back through the pod. -->
  <div class="pprofile-routes">
    <button class="pprofile-schedule" type="button" data-page="relations">
      <b>Xem tổng quan ràng buộc</b>${G("arrowRight")}
    </button>
  </div>
</section>`}function Ql(){return`
<section class="ppanel is-page psettings-page" data-panel="page" role="dialog" aria-label="Cài đặt chung">
  ${ge("Settings","Cài đặt chung")}
  <button class="pclose" type="button" data-page-close aria-label="Quay lại">&times;</button>
  <!-- 标题栏那三段字要挤在 795 单位里（见 portrait.css 的 .ppage-head 注释），所以
       note 只能是三四个字，"换聊天不会重置"这类限制条件交给每一行自己的 set-hint。 -->
  ${ve("Tùy chọn giao diện","Lưu trên thiết bị")}
  <div class="settings-board">${Oo()}</div>
</section>`}const ec={inventory:Fl,character:Ul,gift:zl,events:Wl,relations:Kl,profile:Jl,schedule:Zl,settings:Ql};let tc;const ac=()=>tc||=jo(()=>import("./dev-notes-DhWTtXH-.js"),[],import.meta.url);function Rn(e,t,a){if(!t)return`<span class="pworld-who is-none"><em>${e}</em><b>${a}</b></span>`;const n=V.find(s=>s.name===t),o=!!_[t]?.stream?.live;return`<span class="pworld-who t-${n?.theme||"violet"}${o?" is-live":""}">
    <em>${e}</em><i></i><b>${t}</b>
  </span>`}function nc(){return Rn("Đồng hành",E.companion,"Đi một mình")+Rn("Đang xem",E.watching,"Chưa vào phòng")}function oc(){const e=At(),t=aa(),a=za(e),n=t.current,o=!!n&&n.area===t.home,s=({icon:i,label:r,name:c,sub:p,tag:f,tone:m=""})=>`
    <div class="plife-line">
      ${G(i)}<span class="plife-label">${r}</span>
      <b class="plife-name" title="${c}">${c}</b>
      ${p?`<span class="plife-sub" title="${p}">${p}</span>`:""}
      <span class="plife-fill"></span>
      ${f?`<em class="plife-tag ${m}">${f}</em>`:""}
    </div>`;return`<div class="plife-rows">
    ${s({icon:"briefcase",label:"Công việc",name:e.job||"Thất nghiệp",sub:e.job?e.place:"",tag:a.label,tone:a.tone})}
    ${s({icon:"home",label:"Chỗ ở",name:n?n.name:"Chưa có chỗ ở",sub:n?n.tenure:"",tag:n?o?"Chỗ ở hiện tại":"Chưa đặt chỗ ở":"",tone:o?"is-ok":""})}
  </div>`}function On(){const{stats:e,stamina:t}=ht,a=e[0],n=T.calendar,o=[`${G("calendarSmall")}<b>${n.date}</b><em>${n.weekday} · ${n.season}</em>`,`${G("moon")}<b>${T.time.clock}</b><em>${T.time.period}</em>`];return`
<section class="ppanel" data-panel="status" data-pod>
  ${ge("Status","Trạng thái của bạn")}
  <!-- 四颗环全是直达去处。第四颗以前是 更多 发射钮，点开一条悬浮托盘；托盘撤了，
       那批去处改成面板底部 pdest 那一格网带文字的按钮。 -->
  <div class="ptools">
    ${Wa.map(s=>`
    <button class="ptool" type="button" data-page="${s.page}" aria-label="${s.label}">
      ${G(s.icon)}${s.badge?'<span class="pdot"></span>':""}
    </button>`).join("")}
  </div>

  <div class="pworld">
    <div class="pworld-main">
      <div class="pworld-where">${G("mapPin")}<b>${T.location.area}</b></div>
      <div class="pworld-place"><span>${T.location.place}</span></div>
    </div>
    <div class="pworld-people">${nc()}</div>
  </div>

  <div class="pmoney">
    ${G(a.valueIcon)}
    <b><span class="unit">${a.unit}</span>${a.value}</b>
    ${a.sub?.pill?`<span class="ppill">${a.sub.pill}</span>`:""}
  </div>

  <div class="pmeta">${o.map(s=>`<span>${s}</span>`).join("")}</div>

  <hr class="prule">

  <!-- 主角档案 spelled out was a ~260-unit pill on this row, so the bar sat at its
       80-unit floor.  The person glyph is the same control the landscape pane uses;
       stamina.action stays as the accessible name.  The slack goes to the bar. -->
  <div class="pfavor is-stamina">
    ${G("clock")}
    <span>${t.label}</span>
    <div class="pbar is-stamina"><i style="--pct:${ua(t.value,t.max)}%"></i></div>
    <b>${t.value}</b><em>/ ${t.max}</em>
    <button class="pbtn-ghost is-icon" type="button" data-page="profile"
      title="${t.action}" aria-label="${t.action}">${G("person")}</button>
  </div>

  ${oc()}

  ${sc()}
</section>`}function sc(){return`
  <hr class="prule">
  <nav class="pdest" aria-label="Điểm đến">${to.map(t=>{const a=t.soon?' disabled aria-disabled="true"':` data-page="${t.page}"`;return`
    <button class="pdest-btn${t.soon?" is-soon":""}" type="button"
      aria-label="${t.label}"${a}>
      ${G(t.icon)}
      <b>${t.short||t.label}</b>
      ${t.soon?'<i class="pdest-soon">Đang mở</i>':""}
    </button>`}).join("")}</nav>`}function rc(e,t){const a=nn(e.name);return`
<article class="pcard${t?" is-selected":""}${a?" is-pinned":""} t-${e.theme}"
  data-name="${e.name}" role="listitem" tabindex="0" aria-label="Xem nhanh ${e.name}">
  <div class="card-inner">
    <div class="card-glass"></div>
    <div class="pcard-art">
      <img class="card-art" src="${e.art}" alt="" draggable="false" decoding="async" loading="lazy"
        data-fx="${e.artFx??.5}" data-fy="${e.artFy??.16}"
        data-z="${e.artZ??1.32}" data-ox="0"
        data-tx="0.5" data-ty="0.24">
    </div>
    <div class="pcard-scrim"></div>
    ${e.live?'<span class="pcard-live" title="Đang phát sóng">Đang live</span>':""}
    <button class="pcard-star" type="button" data-pin="${e.name}" data-ornament="${e.ornament==="star"?"star":"sparkle"}"
      aria-pressed="${a}" aria-label="${a?"Bỏ ghim":"Ghim nhân vật"}"
      >${Co(e.ornament)}</button>
    <div class="pcard-body">
      <div class="pcard-name">
        <b class="${e.name.length>3?"long":""}">${e.name}</b><em>${e.romaji}</em>
      </div>
      <div class="pcard-favor">
        ${G(e.metric.icon)}<b>${e.metric.value}</b><span>/ ${e.metric.max}</span>
      </div>
      <div class="pcard-bar"><i style="--pct:${ua(e.metric.value,e.metric.max)}%"></i></div>
      <div class="chip">${G(e.chip.icon)}<span>${e.chip.value}</span></div>
      <div class="pcard-status${e.status.abnormal?" is-abnormal":""}"
        ><i></i><b>${e.status.text}</b>${e.status.extra?`<em>+${e.status.extra}</em>`:""}</div>
    </div>
    <div class="card-rim"></div>
  </div>
</article>`}function ic(){const e=bt();return`
  ${ge("Girls","Danh sách nhân vật")}
  <div class="prail" role="list">${e.map(rc).join("")}</div>
  <div class="pdots">${e.map((t,a)=>`<i class="${a===0?"on":""}" data-dot="${a}"></i>`).join("")}</div>`}function lc(e){const t=ra(e);if(!t.any)return`<div class="pgift-entry is-off">${G("heart")}<span>${t.reason}</span></div>`;const{stream:a}=_[e];return`
  <button class="pgift-entry" type="button" data-gift-page="${e}">
    ${G("heart")}<span>${Ca(t)}</span>
    <em>${t.near?"Ở bên cạnh":""}${t.near&&t.live?" · ":""}${t.live?`Đang live · Độ nóng ${a.heat.toLocaleString("en-US")}`:""}</em>
    ${G("arrowRight")}
  </button>`}function cc(e){const{bond:t,physiology:a,location:n,fan:o}=_[e.name],s=a.statuses.length?a.statuses.map(c=>`<span>${c}</span>`).join(""):`<span class="is-muted">${Mt}</span>`,i=n||T.location,r=ea(o);return`
  ${ge(e.romaji,`${e.name} · Xem nhanh`)}
  <button class="pclose" type="button" data-preview-close aria-label="Quay lại danh sách nhân vật">×</button>

  <div class="ppreview-body">
    <figure class="ppreview-art">
      <img src="${e.art}" alt="" draggable="false">
    </figure>

    <div class="ppreview-data">
      <div class="ppreview-id">
        <h3>${e.name}</h3>
        <span class="pchip">${G("smile")}Tâm trạng · ${t.mood}</span>
      </div>

      <div class="ppreview-group">
        <h4>Ràng buộc</h4>
        ${pe("Độ hảo cảm",t.favor,1e3,"pink")}
        ${pe("Độ thuận tùng",t.obedience,1e3,"violet",re.obedience)}
      </div>

      <div class="ppreview-group">
        <h4>Sinh lý</h4>
        ${pe("Ham muốn",a.desire,100,"pink",re.desire)}
        ${pe("Thể lực",a.stamina,100,"blue",re.stamina)}
        ${pe("Buồn tiểu",a.bladder,100,"gold",re.bladder)}
      </div>

      <div class="ppreview-status"><small>Trạng thái bất thường</small><div>${s}</div></div>

      <div class="ppreview-group">
        <h4>Vị trí</h4>
        <div class="ppreview-where">${G("mapPin")}<b>${i.area}</b>
          <span>${i.place||"—"}</span>
          <em>${Qt[i.privacy]??""} ${i.privacy}/5</em>
        </div>
        <p class="ppreview-fan">${r.follow?"Đã theo dõi":"Chưa theo dõi"} · ${r.tier} · ${r.lv} · ${r.yen}</p>
      </div>
    </div>
  </div>



  <div class="ppreview-foot">
    <button class="pnav" type="button" data-preview-step="-1" aria-label="Người trước">${G("chevronRight")}</button>
    <button class="pbtn-primary" type="button" data-character-full="${e.name}">
      Hồ sơ đầy đủ${G("arrowRight")}
    </button>
    <button class="pnav" type="button" data-preview-step="1" aria-label="Người tiếp theo">${G("chevronRight")}</button>
  </div>

  <!-- 送礼 is a second action on the same character, so it sits under the footer
       rather than competing with 完整档案 inside it.  Disabled with the reason on it
       when neither scene is open, the same rule the landscape dock follows. -->
  ${lc(e.name)}`}function Aa(e){if(!e)return`<section class="ppanel" data-panel="girls">${ic()}</section>`;const t=V.find(a=>a.name===e)||V[0];return`
<section class="ppanel is-preview t-${t.theme}" data-panel="girls"
  role="dialog" aria-label="Xem nhanh ${t.name}">${cc(t)}</section>`}function dc(e,{onPage:t}={}){const{content:a,sync:n}=e;let o=null,s=0,i=null,r=null,c=0;const p=new Map;let f="";const m={map:Go,arcade:To,cg:Lo,shop:Mo};let y=null;const g=()=>{y?.(),y=null};let d=!1,u=0;const S=()=>{const w=document.getElementById("linjiang-mobile-native-root");return w&&w.scrollHeight>w.clientHeight+1?w:null},b=w=>{const x=S();x&&(x.scrollTop=w);try{scrollTo({top:w,behavior:"auto"})}catch{}},l=()=>{const w=S();return w?w.scrollTop:scrollY},v=()=>a.querySelector('[data-panel="girls"]'),$=()=>a.querySelector(".prail"),j=()=>a.querySelector(".pdots"),L=Cn.w+Cn.gap,M=()=>{const w=$();if(!w)return;const x=Math.round(w.scrollLeft/L);j()?.querySelectorAll("i").forEach((h,k)=>h.classList.toggle("on",k===x))},H=({restoreScroll:w=!0}={})=>{Vt(a);const x=$();x&&(x.scrollLeft=w?s:0,x.addEventListener("scroll",at,{passive:!0}),M()),n()},N=w=>{if(i)return;const x=v(),h=ft(Aa(o));x&&h&&x.replaceWith(h),H(w)},R=({restoreScroll:w=!0}={})=>{vt(a,On()+Aa(o)),H({restoreScroll:w})},U=({restoreScroll:w=!0}={})=>{if(i)return;const x=a.querySelector('[data-panel="status"]'),h=a.querySelector('[data-panel="girls"]'),k=ft(On()),A=ft(Aa(o));if(!x||!h||!k||!A){R({restoreScroll:w});return}x.replaceWith(k),h.replaceWith(A),H({restoreScroll:w})},K=async w=>{g(),i=null,r=null,document.documentElement.classList.remove("is-page-open"),Ct(!1);try{await bo()}catch(h){console.warn("[map] collapse HUD",h)}const x=Ro(w);try{await Pe(x)||console.info("[map] travel message generated",x)}catch(h){console.warn("[map] send travel message",h)}R()},P=(w,x={})=>{d=!!i&&!m[i],i||(s=$()?.scrollLeft??s,u=l()),i=w,r=null,document.documentElement.classList.add("is-page-open");const h=$r()?"portal":"page";Ct(!0,{geometry:h,page:w,arg:null}),g();const k=w==="map"?{onTravel:K,...x}:x;y=m[w](document.querySelector(".viewport"),{onClose:J,...k})},W=(w,x)=>{if(w==="phone"){J(),vo().catch(Q=>console.warn("[phone]",Q));return}if(m[w]){P(w);return}const h=ec[w];if(!h){t?.(w,x);return}g(),i||(s=$()?.scrollLeft??s,u=l()),i=w,r=x??null,document.documentElement.classList.add("is-page-open");const k=()=>Ct(!0,{page:w,arg:typeof x=="string"?x:null}),A=w==="character",q=A?++c:0;A||k(),w==="inventory"&&(p.clear(),f=""),vt(a,h(w==="inventory"?{selected:p,notice:f}:x)),n(),A?requestAnimationFrame(()=>{q!==c||i!==w||(k(),b(0))}):b(0)},J=()=>{if(!i)return;g();const w=!!m[i],x=d;d=!1,i=null,r=null,c+=1,document.documentElement.classList.remove("is-page-open"),Ct(!1),!(w&&!x)&&(R(),requestAnimationFrame(()=>b(u)))},me=(w,x)=>{const h=i==="gift"?r:null;if(!h)return;const k=a.querySelector(w==="private"?`[data-gift-send-item="${CSS.escape(x)}"]`:`[data-gift-send-tip="${CSS.escape(x)}"]`);if(!k)return;if(k.classList.contains("is-confirming")){const q=k.querySelector("[data-gift-remark]")?.value||"",O=cn(h,w,x,{remark:q});O&&(console.info("[gift] payload",O.payload),Pe(O.message).then(Q=>{k.classList.remove("is-confirming"),k.querySelector(".pgift-confirm")?.remove(),xe(k,"beforeend",`
      <span class="pgift-done"><b>${Q?"Đã gửi vào khung chat":"Đã tạo tin nhắn"}</b><code>${O.message}</code>
        <em>${Q?"HUD không trực tiếp trừ tiền hay vật phẩm trong túi":"Xem trước độc lập, chưa kết nối SillyTavern"}</em></span>`),n()}).catch(Q=>console.warn("[gift]",Q)));return}a.querySelectorAll(".pgift-row.is-confirming").forEach(q=>{q.classList.remove("is-confirming"),q.querySelector(".pgift-confirm")?.remove()}),a.querySelectorAll(".pgift-done").forEach(q=>q.remove());const A=cn(h,w,x);A&&(k.classList.add("is-confirming"),xe(k,"beforeend",`
      <span class="pgift-confirm">
        ${w==="private"?'<label><span>Lời nhắn</span><input type="text" maxlength="30" placeholder="Tùy chọn, một câu ngắn" data-gift-remark></label>':""}
        <span class="pgift-line"><span>Sẽ gửi</span><code>${A.message}</code></span>
        <button class="pgift-again" type="button" data-gift-confirm-send>Xác nhận gửi</button>
      </span>`),n())},we=()=>{const x=[...(a.querySelector("[data-inventory-page-panel]:not([hidden])")||a).querySelectorAll("[data-inv-select]")],h=a.querySelector("[data-inv-select-all]"),k=a.querySelector("[data-inv-selected-count]"),A=a.querySelector("[data-inv-destroy]"),q=x.filter(O=>O.checked).length;h&&(h.checked=x.length>0&&q===x.length,h.indeterminate=q>0&&q<x.length),k&&(k.textContent=`Đã chọn ${p.size} mục`),A&&(A.disabled=p.size===0)},Et=w=>{try{const x=JSON.parse(decodeURIComponent(w.dataset.invSelect||""));return!x?.name||!x?.kind?null:{key:`${x.kind}:${x.name}`,kind:x.kind,name:x.name,quantity:Math.max(1,Number(x.quantity)||1)}}catch(x){return console.warn("[inventory] selection parse failed",x),null}},Tt=async()=>{if(!p.size)return;const x=["Hủy hàng loạt đạo cụ:",...[...p.values()].map(A=>`${A.name} số lượng -${A.quantity}`)].join(`
`),h=a.querySelector("[data-inv-status]"),k=a.querySelector("[data-inv-destroy]");k&&(k.disabled=!0);try{const A=await Pe(x);p.clear(),f=A?"Đã gửi yêu cầu hủy":"Đã tạo yêu cầu hủy",a.querySelectorAll("[data-inv-select]").forEach(q=>{q.checked=!1}),h&&(h.textContent=f),we()}catch(A){f="Gửi yêu cầu hủy thất bại",h&&(h.textContent=f),we(),console.warn("[inventory] destroy request failed",A)}};let Pt=0;function at(){s=$()?.scrollLeft??0,!Pt&&(Pt=requestAnimationFrame(()=>{Pt=0,M()}))}const ke=w=>{s=$()?.scrollLeft??s,o=w,N(),requestAnimationFrame(()=>{v()?.scrollIntoView({behavior:"smooth",block:"nearest"})})},_e=()=>{const w=o;o=null;const x=bt().findIndex(h=>h.name===w);x>=0&&(s=x*L),N(),requestAnimationFrame(()=>{v()?.scrollIntoView({behavior:"smooth",block:"nearest"})})},fa=w=>{const x=bt(),h=x.findIndex(A=>A.name===o);if(h<0)return;const k=x[(h+w+x.length)%x.length];s=(h+w+x.length)%x.length*L,o=k.name,N()},ha=w=>{if(Zo(w),!o){const x=bt().findIndex(h=>h.name===w);s=Math.max(0,x)*L,N()}};return R({restoreScroll:!1}),a.addEventListener("click",w=>{if(w.target.closest("[data-page-close]")){J();return}if(w.target.closest("[data-preview-close]")){_e();return}if(Bo(w.target))return;const x=w.target.closest("[data-event-handle]");if(x){const Y=decodeURIComponent(x.dataset.eventHandle||""),le=He.find(ae=>ae.id===Y);if(!le)return;const ee=x.textContent;x.disabled=!0,x.textContent="Đang gửi…",Pe(`Đi xử lý: ${le.summary}`).then(ae=>{x.textContent=ae?"Đã gửi":"Gửi thất bại"}).catch(ae=>{console.warn("[events] send failed",ae),x.textContent="Gửi thất bại"}).finally(()=>{setTimeout(()=>{x.disabled=!1,x.textContent=ee},1e3)});return}const h=w.target.closest("[data-dev-notes-action]");if(h){ac().then(({handleDevelopmentNotesButton:Y})=>Y(h)).catch(Y=>console.error("[dev-notes] lazy load",Y));return}const k=w.target.closest("[data-dev-part]");if(k){const Y=k.parentElement,le=Y.classList.contains("is-open");a.querySelectorAll(".pdev-tile.is-open").forEach(ee=>{ee.classList.remove("is-open"),ee.querySelector("[data-dev-part]")?.setAttribute("aria-expanded","false"),ee.querySelector(".pdev-note")?.setAttribute("hidden","")}),le||(Y.classList.add("is-open"),k.setAttribute("aria-expanded","true"),Y.querySelector(".pdev-note")?.removeAttribute("hidden")),n();return}if(w.target.closest("[data-map-marker-use]")){P("map",{createMode:{source:"Bản vẽ quy hoạch đô thị"}});return}if(w.target.closest("[data-inv-destroy]")){Tt();return}const O=w.target.closest("[data-inventory-page]");if(O){const Y=Number(O.dataset.inventoryPage)||0;a.querySelectorAll("[data-inventory-page]").forEach(ee=>{const ae=Number(ee.dataset.inventoryPage)===Y;ee.classList.toggle("is-active",ae),ee.setAttribute("aria-selected",String(ae))}),a.querySelectorAll("[data-inventory-page-panel]").forEach(ee=>{const ae=Number(ee.dataset.inventoryPagePanel)===Y;ee.classList.toggle("is-active",ae),ee.toggleAttribute("hidden",!ae)});const le=a.querySelector("[data-inventory-page-current]");le&&(le.textContent=String(Y+1)),we(),n(),requestAnimationFrame(()=>{const ee=document.body;ee&&(ee.scrollTop=0)});return}const Q=w.target.closest("[data-pin]");if(Q){ha(Q.dataset.pin);return}const ma=w.target.closest("[data-preview-step]");if(ma){fa(Number(ma.dataset.previewStep));return}if(w.target.closest("[data-clock-in]")){$o().catch(Y=>console.warn("[work]",Y));return}const ue=w.target.closest("[data-page]");if(ue){W(ue.dataset.page);return}const nt=w.target.closest("[data-character-full]");if(nt){W("character",nt.dataset.characterFull);return}const Ye=w.target.closest("[data-gift-page]");if(Ye){W("gift",Ye.dataset.giftPage);return}const ga=w.target.closest("[data-gift-send-item]");if(ga){me("private",ga.dataset.giftSendItem);return}const ot=w.target.closest("[data-gift-send-tip]");if(ot){me("tip",ot.dataset.giftSendTip);return}const st=w.target.closest(".prail > .pcard");st&&ke(st.dataset.name)}),a.addEventListener("submit",w=>{const x=w.target.closest("[data-part-art-form]");x&&(w.preventDefault(),Do(x,a))}),a.addEventListener("change",w=>{const x=w.target.closest("[data-inv-select]");if(x){const A=Et(x);if(!A)return;x.checked?p.set(A.key,A):p.delete(A.key),we();return}const h=w.target.closest("[data-inv-select-all]");if(!h)return;(a.querySelector("[data-inventory-page-panel]:not([hidden])")||a).querySelectorAll("[data-inv-select]").forEach(A=>{const q=Et(A);q&&(A.checked=h.checked,h.checked?p.set(q.key,q):p.delete(q.key))}),we()}),a.addEventListener("keydown",w=>{const x=w.target.closest(".prail > .pcard");!x||w.key!=="Enter"&&w.key!==" "||(w.preventDefault(),ke(x.dataset.name))}),addEventListener("keydown",w=>{w.key==="Escape"&&(i?J():o&&_e())}),a.addEventListener("click",w=>{const x=w.target.closest("[data-dot]");x&&$()?.scrollTo({left:Number(x.dataset.dot)*L,behavior:"smooth"})}),et(()=>{document.querySelector(".viewport")?.classList.contains("is-portrait")&&(i&&i!=="map"&&i!=="arcade"||U({restoreScroll:!0}))}),{openPreview:ke,close:_e,openPage:W,closePage:J,openedPage:()=>i,relayout:()=>{Vt(a),n()}}}bs();const ut=matchMedia("(max-width: 879px) and (orientation: portrait)");let Ga=window.__linjiangHostMode==="portrait"||window.__linjiangHostMode==="landscape"?window.__linjiangHostMode:null;function pc(){const e=Ga||new URLSearchParams(location.search).get("mode");return e==="portrait"?!0:e==="landscape"?!1:innerWidth<880&&innerWidth<innerHeight?!0:ut.matches||innerWidth<innerHeight&&innerWidth<720}function uc(){const e=document.getElementById("stage");Hr(document.getElementById("defs")),Yr(document.getElementById("defs")),Zr(document.getElementById("defs")),_r(document.getElementById("lens")),Ur(document.getElementById("rim")),gl(document.getElementById("content"));const t=()=>{const o=new URLSearchParams(location.search).get("fit"),s={y:48,w:1640,h:787};if(o==="body"){const y=Math.min(innerWidth/s.w,innerHeight/s.h),g=941/2-(s.y+s.h/2);e.style.setProperty("--k",String(y)),e.style.setProperty("--shift-y",`${g}px`);return}const i=o==="contain",r=535,c=innerWidth/1672,p=innerHeight/941,f=i?Math.min(c,p):Math.max(c,p);let m=0;if(!i&&c>=p){const y=innerHeight/c;let g=r;const d=y/2;g-d<0&&(g=d),g+d>941&&(g=941-d),m=941/2-g}e.style.setProperty("--k",String(f)),e.style.setProperty("--shift-y",`${m}px`)};t(),addEventListener("resize",t)}function fc(){const e=document.querySelector(".viewport");let t=document.getElementById("pstage");t||(t=document.createElement("div"),t.id="pstage",e.appendChild(t));const a=ql(t),n=dc(a,{onPage:(o,s)=>{console.warn("[portrait] no page routed for:",o,s??"")}});try{const o=gr();o?.page&&n.openPage(o.page,o.arg??void 0)}catch(o){console.warn("[portrait] Khôi phục trang trước thất bại",o)}return a}let Bn=!1,La=null;function ss(){const e=pc(),t=document.querySelector(".viewport");t.classList.contains("is-portrait")!==e&&(document.querySelector("[data-map-close]")?.click(),document.querySelector("[data-arcade-close]")?.click()),t.classList.toggle("is-portrait",e),document.documentElement.classList.toggle("portrait-mode",e);const a=document.getElementById("stage");a&&(a.hidden=e);const n=document.getElementById("pstage");n&&(n.hidden=!e),e?La?La.sync():La=fc():Bn||(uc(),Bn=!0)}const rs=new URLSearchParams(location.search).get("host")==="tauritavern-mobile",hc=rs&&(()=>{const e=String(navigator.userAgent||"");return/iphone|ipad|ipod/i.test(e)?!0:navigator.platform==="MacIntel"&&Number(navigator.maxTouchPoints||0)>1})();hc&&(document.documentElement.dataset.hudIosScroll="1");const is=(()=>{try{return!!window.__linjiangNativeFlow}catch{return!1}})(),ls=is&&(()=>{if(window.__linjiangNativeHost)return window.__linjiangNativeHost==="tauritavern-ios";for(const e of[window.parent,window.top])try{if(!e?.__TAURITAVERN__)continue;const t=e.navigator;return/iphone|ipad|ipod/i.test(String(t.userAgent||""))||t.platform==="MacIntel"&&Number(t.maxTouchPoints||0)>1}catch{}return!1})();ls&&(document.documentElement.dataset.hudIosTtFlat="1");const cs=()=>{const e=document.documentElement.dataset.hudPerformance==="low";document.documentElement.style.setProperty("--hud-frost",e?"none":us("frost.png")),document.querySelectorAll("img.pplate").forEach(t=>{e?t.removeAttribute("src"):t.getAttribute("src")!==Ze("bg-plate.png")&&(t.src=Ze("bg-plate.png"))})},ds=()=>{const t=la("performanceMode")==="low"||rs||ls||is&&!tr("performanceMode");document.documentElement.dataset.hudPerformance=t?"low":"auto",cs()};ds();ss();cs();br();$s([So(),Ao(),Eo()]);let In=0;const Zt=()=>{cancelAnimationFrame(In),In=requestAnimationFrame(ss)};Qa(e=>{e==="performanceMode"&&ds()});addEventListener("linjiang:layout-mode",e=>{const t=e.detail?.mode==="portrait"?"portrait":"landscape";Ga!==t&&(Ga=t,Zt())});addEventListener("resize",Zt);ut.addEventListener?ut.addEventListener("change",Zt):ut.addListener&&ut.addListener(Zt);Object.entries(__VI_TO_CN_CHAR).forEach(([vi,cn])=>{if(No[cn]&&!No[vi])No[vi]=No[cn]});export{Ue as D,gc as a,_ as c,No as d,mc as r};
