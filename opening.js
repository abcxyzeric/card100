(()=>{
const MAP_REV='custom-home-map-v22-vi';
const DEFAULT_MAP=`./city/plate_map.html?mode=opening&v=${MAP_REV}`;
const MAP_URL=new URLSearchParams(location.search).get('map')||DEFAULT_MAP;
const STEPS=['Về bạn','Chỗ ở & Việc làm','Streamer yêu thích','Streamer tùy chỉnh','Xác nhận'];
const LAST_STEP=STEPS.length;
const TOUCH_DEVICE=/android|iphone|ipad|ipod/i.test(String(navigator.userAgent||''))
  || (Number(navigator.maxTouchPoints||0)>0&&!!matchMedia?.('(pointer: coarse)')?.matches);
if(TOUCH_DEVICE)document.documentElement.classList.add('touch-device');
function focusTouchEditor(event){
  if(!TOUCH_DEVICE)return;
  const target=event.target&&event.target.closest&&event.target.closest('textarea,input:not([type=file]):not([type=range]):not([type=button])');
  if(!target||target.disabled||target.readOnly)return;
  try{target.focus({preventScroll:true})}catch(_){try{target.focus()}catch(__){}}
}
document.addEventListener('touchstart',focusTouchEditor,{capture:true,passive:true});
document.addEventListener('pointerdown',event=>{if(event.pointerType==='touch')focusTouchEditor(event)},true);
const ART_HOST='https://anchor.rown.dpdns.org';
const art=(folder,file)=>ART_HOST+'/'+encodeURIComponent(folder)+'/'+encodeURIComponent(file)+'.webp';
/* 固定主播池。名字／牌子名／直播档／封面文件名对齐 外部部署/0906/正文美化.html 的
   LR_HOSTS，住所对齐 酒馆变量/变量初始化。

   followers 是唯一的作者定值，底盘热度和大航海全部由它反解出来（tierOfFollowers
   → streamScale），跟自定义主播走同一条曲线、同一套换算。这里不再单独存热度：
   存两份就一定会漂，而且哪份是准的没人说得清。

   顺带作废：正文美化.html 里的 LR_HOSTS.pop 是旧的一张手写热度表，跟这里推出来的
   对不上（璃亚梦 6310 vs 1390、红蔷薇 2800 vs 12400），要换成从粉丝数推的值。

   这十一位的 粉丝数 最终该由 酒馆变量/变量初始化 写进 MVU，这一页只负责显示和挑选。 */
const OSHI=[
{name:'Taffy',cover:'塔菲',medal:'Sồ Thảo Cơ',slot:'Khung giờ chính buổi tối 20:00–23:30',area:'Khu Tây Châu · Chung cư Vân Đình',tags:['Tán gẫu','Trò chơi'],followers:550000,blurb:'Streamer hàng đầu hệ tấu hài, bật mic giả giọng em bé, đầy miệng tiếng lóng diễn đàn, phòng phát sóng có nhịp danmaku nhanh nhất.'},
{name:'Hồng Tường Vi',cover:'红蔷薇',medal:'Cưng À',slot:'Đài âm nhạc hoàng hôn 19:00–22:00',area:'Khu Tây Châu · Tây Châu Vĩnh Sơ Lý',tags:['Ca hát','Vũ đạo','Tán gẫu'],followers:400000,blurb:'Vũ công của Nhà hát Phượng Hoàng Lửa, phát sóng bán thời gian, giọng nói tựa như đang đọc độc thoại trên sân khấu.'},
{name:'Azuma Seren',cover:'东雪莲',medal:'Quan Nhân Si',slot:'Tán gẫu đêm khuya 21:30–00:30',area:'Khu Cổ Lĩnh · Chung cư Vân Đình',tags:['Tán gẫu','Ca hát'],followers:300000,blurb:'Khung giờ đêm khuya chuyên làm nhạc tự sáng tác, tính tình thẳng thắn, đấu khẩu với anti-fan chưa bao giờ ngán.'},
{name:'Sakamata',cover:'沙花叉',medal:'Người Chăn Nuôi',slot:'Khung giờ tối quen thuộc 21:00–00:30',area:'Khu Minh Hồ · Minh Hồ Vân Khuyết',tags:['Tán gẫu','Ca hát','Trò chơi'],followers:150000,blurb:'Người dọn dẹp có chất giọng lười biếng, lên sóng tùy hứng, nhưng đã lên là thức trọn cả đêm.'},
{name:'Shigure Ui',cover:'时雨羽衣',medal:'Vũ Hộ',slot:'Phát sóng theo tuần 22:00–00:30',area:'Khu Cổ Lĩnh · Ngô Đồng Lý',tags:['Hội họa','Tán gẫu'],followers:130000,blurb:'Họa sĩ kiêm streamer, mỗi tuần chỉ lên sóng hai ba lần, vừa thức khuya vẽ tranh vừa luyên thuyên.'},
{name:'Stella',cover:'斯黛拉',medal:'Heo Con',slot:'Đài phát thanh chiều muộn 18:30–21:30',area:'Khu Lạc Hà · Sân thượng Ký túc xá số 7',tags:['ASMR','Tán gẫu'],followers:90000,blurb:'Nữ sinh có giọng nói nhỏ nhẹ dịu dàng, tiết mục ASMR ru ngủ lúc 1 giờ sáng là thương hiệu riêng.'},
{name:'Riamu',cover:'梦见璃亚梦',medal:'Bạn Bệnh',slot:'Tương tác đêm khuya 23:00–02:00',area:'Khu Cổ Lĩnh · Chung cư Vân Đình',tags:['Tán gẫu','Ca hát'],followers:60000,blurb:'Idol kiêm streamer mang thể chất dễ dính thị phi, viết tâm thư lúc nửa đêm và phát sóng đột xuất là chuyện thường ngày.'},
{name:'Miku Rabbit Hole',cover:'兔子洞初音',medal:'Kỵ Sĩ Nhỏ',slot:'Ca hát & tán gẫu đêm 20:30–23:30',area:'Khu Cổ Lĩnh · Dinh thự cổ Thạch Khố Môn Cổ Lĩnh',tags:['Ca hát','Tán gẫu','Trò chơi'],followers:110000,blurb:'Streamer tai thỏ tóc hai bím xanh xám, giữa những buổi hát và tán gẫu nhẹ nhàng luôn thấp thoáng chút tinh nghịch sắc hồng đào.'},
{name:'Kagura Nana',cover:'神乐七奈',medal:'Quân Đoàn Cay',slot:'Vẽ tranh & trò chuyện tối 19:30–22:30',area:'Khu thắng cảnh núi Thanh Bình · Sân nhỏ Tùng Giản Sơn Cư',tags:['Hội họa','Tán gẫu','Trò chơi'],followers:180000,blurb:'Họa sĩ kiêm streamer tóc dài bạc xanh, giọng nói trong trẻo, những nét vẽ ngẫu hứng và các buổi chơi game vui nhộn tạo nên kênh buổi tối của cô.'},
{name:'Bé Cá Voi',cover:'鲸鱼娘',medal:'Ồ Cá Voi',slot:'Hỏi đáp đêm khuya 22:00–01:00',area:'Khu Minh Hồ · Căn hộ thông tầng cao cấp Minh Hồ Thiên Kính',tags:['Tán gẫu','Công nghệ','Trò chơi'],followers:260000,blurb:'Streamer AI tóc dài xanh sương mù, đọc danmaku, chạy bản thử nghiệm và nghiêm túc khiêu khích loài người đều cực kỳ thành thạo.'},
{name:'Neuro',cover:'牛肉',medal:'Đàn Ong',slot:'Chơi game buổi tối 20:00–23:00',area:'Khu Ô Khê · Nhà ven sông Ô Khê Chẩm Thủy',tags:['Trò chơi','Ca hát','Tán gẫu'],followers:500000,blurb:'Idol AI tóc màu trà sữa, những buổi ca hát, game nhịp điệu và những câu nói kỳ quặc tỉnh bơ luôn đẩy phòng phát sóng đến bờ vực mất kiểm soát.'}];
const OSHI_MAX=1;
const OSHI_FAVOR=300;    // 选中即加的好感，叠在 变量初始化 给的 80 上
const CUSTOM_INITIAL_FAVOR=80; // 自定义主播与普通已定稿主播使用相同的基础好感
const OSHI_BADGE=8;      // 目标牌子等级
/* 牌子等级是 累计打赏 的函数，不是独立字段：辅助计算脚本.js 每次变量更新都会用
   floor(20*(打赏/200000)^(1/3.5)) 重算它。想稳定拿到 8 级，只能把打赏写成
   反解出来的那个数——8100 正好落在 8 级的下沿。 */
const OSHI_TIPPED=8100;
/* 初始住宅只存在于这里，不进《地图静态资料》——玩家换房永远是往上换，
   把 1400~3900 这一档挂给 AI 只会让它建议玩家搬去更差的地方。
   name / fullName / district 必须和 city/city_mapdata.js 的节点逐字一致（节点重构V3 之后的名字），
   否则 openingPayload 写出去的 位置.区域 与 居住地 在地图和状态栏里都定位不到。
   分隔符是「 · 」，跟 变量更新规则 的 区域格式 对齐，不能用斜杠。 */
const HOMES=[
{id:'lx_share',name:'Chung cư ghép Văn Hội Tân Thôn',fullName:'Khu Lạc Hà · Chung cư ghép Văn Hội Tân Thôn',district:'Khu Lạc Hà',tenure:'Thuê ở',note:'Căn hộ hai phòng ngủ ghép ở phía nam Làng Đại học, tiền thuê thấp, cách âm bình thường',rent:1800,deposit:3600,cost:'Thuê tháng RMB 1,800 / Cọc 2 đóng 1'},
{id:'pj_apt',name:'Cộng đồng thanh niên Bạc Ngụ',fullName:'Khu Vũ Thạch & Phố Giang · Cộng đồng thanh niên Bạc Ngụ',district:'Khu Vũ Thạch & Phố Giang',tenure:'Thuê ở',note:'Chung cư nhân tài diện tích nhỏ ngoài khu công nghệ, thuận tiện đi làm trong khu',rent:2600,deposit:5200,cost:'Thuê tháng RMB 2,600 / Cọc 2 đóng 1'},
{id:'gl_yunting',name:'Bếp tư nhân Cổ Lĩnh Vân Đinh',fullName:'Khu Cổ Lĩnh · Bếp tư nhân Cổ Lĩnh Vân Đinh',district:'Khu Cổ Lĩnh',tenure:'Thuê ở',note:'Phòng phụ độc lập cho thuê lại ở sân sau quán bếp tư nhân rừng trúc, yên tĩnh, gần tiện ích phố cổ',rent:3200,deposit:6400,cost:'Thuê tháng RMB 3,200 / Cọc 2 đóng 1'},
{id:'xz_jiayuan',name:'Căn hộ cao cấp ven sông Tây Châu',fullName:'Khu Tây Châu · Căn hộ cao cấp ven sông Tây Châu',district:'Khu Tây Châu',tenure:'Thuê ở',note:'Phòng ngủ chính tách thuê trong căn hộ lớn ven sông, ngay dưới lầu là vành đai công nghiệp livestream',rent:3900,deposit:7800,cost:'Thuê tháng RMB 3,900 / Cọc 2 đóng 1'},
{id:'gl_wutong',name:'Biệt thự sân vườn Ngô Đồng Lý',fullName:'Khu Cổ Lĩnh · Biệt thự sân vườn Ngô Đồng Lý',district:'Khu Cổ Lĩnh',tenure:'Thuê ở',note:'Phòng ngăn ra trong biệt thự cổ thời Dân Quốc, sinh hoạt tiện lợi, tiếng cầu thang và hàng xóm khá gần',rent:2200,deposit:4400,cost:'Thuê tháng RMB 2,200 / Cọc 2 đóng 1'},
{id:'pj_village',name:'Nhà tự xây phố cổ Phố Giang',fullName:'Khu Vũ Thạch & Phố Giang · Nhà tự xây phố cổ Phố Giang',district:'Khu Vũ Thạch & Phố Giang',tenure:'Thuê ở',note:'Phòng đơn nhà tự xây trong xóm lao động, tiền thuê thấp nhất, gần khu công nghệ, không gian chung nhỏ hẹp',rent:1500,deposit:3000,cost:'Thuê tháng RMB 1,500 / Cọc 2 đóng 1'},
{id:'wx_home',name:'Trung tâm dưỡng sinh Ô Khê',fullName:'Khu Ô Khê · Trung tâm dưỡng sinh Ô Khê',district:'Khu Ô Khê',tenure:'Sở hữu riêng',note:'Phòng khám trị liệu dưỡng sinh Đông y nhỏ của gia đình, phía trước mở tiệm phía sau để ở, không mất tiền thuê',rent:0,deposit:0,cost:'Bất động sản riêng / Không mất tiền thuê'},
{id:'mh_youth_apt',name:'Chung cư thanh niên Minh Hồ',fullName:'Khu Minh Hồ · Chung cư thanh niên Minh Hồ',district:'Khu Minh Hồ',tenure:'Thuê ở',note:'Phòng đơn nhỏ trung tâm thành phố, xe buýt và tiện ích sinh hoạt thuận tiện',rent:3200,deposit:3200,cost:'Thuê tháng RMB 3,200 / Cọc 1 đóng 1'},
{id:'dt_town_rental',name:'Nhà trọ đầu thị trấn Đông Đường',fullName:'Khu Đông Đường · Nhà trọ đầu thị trấn Đông Đường',district:'Khu Đông Đường',tenure:'Thuê ở',note:'Phòng đơn giá rẻ đầu thị trấn, chi phí sinh hoạt thấp nhưng vào nội thành khá xa',rent:1400,deposit:1400,cost:'Thuê tháng RMB 1,400 / Cọc 1 đóng 1'},
{id:'qp_foothill_share',name:'Sân trọ ghép chân núi Thanh Bình',fullName:'Khu thắng cảnh núi Thanh Bình · Sân trọ ghép chân núi Thanh Bình',district:'Khu thắng cảnh núi Thanh Bình',tenure:'Thuê ở',note:'Phòng ngủ riêng, bếp dùng chung, chuyến xe buýt cuối ngày kết thúc khá sớm',rent:1800,deposit:1800,cost:'Thuê tháng RMB 1,800 / Cọc 1 đóng 1'},
{id:'lx_capsule',name:'Khoang ngủ 24h Tinh Tú',fullName:'Khu Lạc Hà · Khoang ngủ 24h Tinh Tú',district:'Khu Lạc Hà',tenure:'Thuê ở',note:'Giường khoang capsule thuê theo tháng, rẻ nhất, chỉ có một giường và một tủ đồ, khu vệ sinh dùng chung',rent:900,deposit:900,cost:'Thuê tháng RMB 900 / Cọc 1 đóng 1'},
{id:'dt_stay',name:'Homestay nhà cổ Trúc Lý Quán',fullName:'Khu Đông Đường · Homestay nhà cổ Trúc Lý Quán',district:'Khu Đông Đường',tenure:'Thuê ở',note:'Phòng phụ thuê dài hạn mùa thấp điểm trong homestay, sân viện yên tĩnh, mùa cao điểm phải nhường phòng, khá xa nội thành',rent:2000,deposit:2000,cost:'Thuê tháng RMB 2,000 / Cọc 1 đóng 1'},
{id:'wx_inn',name:'Khách điếm Thủy Ngạn Chẩm Hà Cư',fullName:'Khu Ô Khê · Khách điếm Thủy Ngạn Chẩm Hà Cư',district:'Khu Ô Khê',tenure:'Thuê ở',note:'Phòng tầng hai thuê theo tháng tại khách điếm ven sông trong ngõ cổ, mở cửa sổ là thấy sông, khách phòng bên thay đổi liên tục',rent:1900,deposit:1900,cost:'Thuê tháng RMB 1,900 / Cọc 1 đóng 1'},
{id:'qp_farm',name:'Quán nông gia củi lửa Dưới Rừng',fullName:'Khu thắng cảnh núi Thanh Bình · Quán nông gia củi lửa Dưới Rừng',district:'Khu thắng cảnh núi Thanh Bình',tenure:'Ở nhờ',note:'Phòng phụ việc ở sân sau quán nông gia, bao ba bữa ăn, đổi lại sáng tối phải phụ việc vặt, xe buýt cuối rất sớm',rent:800,deposit:800,cost:'Thuê tháng RMB 800 / Cọc 1 đóng 1 / Bao 3 bữa'},
{id:'pj_nightshift',name:'Trạm dừng chân tài xế Lâm Cảng',fullName:'Khu Vũ Thạch & Phố Giang · Trạm dừng chân tài xế Lâm Cảng',district:'Khu Vũ Thạch & Phố Giang',tenure:'Thuê ở',note:'Giường thuê dài hạn tại trạm dừng chân tài xế chở hàng, có người ra vào suốt đêm, gần khu công nghệ và bến cảng',rent:700,deposit:700,cost:'Thuê tháng RMB 700 / Cọc 1 đóng 1'}];
/* place 是要写进 工作.地点 的字符串，必须是「{行政区} · {地图节点名}」且节点名与
   city_mapdata.js 逐字一致，不然《地图加载》算不出通勤、状态栏也判不出"是否到岗"。 */
const JOBS=[
{name:'Tạm thời thất nghiệp',place:null,node:null,monthly:0,daily:0,hours:'Tự do sắp xếp',kind:'free'},
{name:'Nhân viên tiệm in ấn',place:'Khu Lạc Hà · In nhanh 24h Đồ Văn Thiên Hạ',node:'lx_print',monthly:4500,daily:205,hours:'09:00-18:00',kind:'service'},
{name:'Nhân viên trạm chuyển phát',place:'Khu Cổ Lĩnh · Trạm Cainiao Phố Cổ',node:'gl_parcel',monthly:4800,daily:220,hours:'08:30-18:30',kind:'service'},
{name:'Nhân viên cửa hàng tiện lợi',place:'Khu Minh Hồ · Cửa hàng tiện lợi Lawson 24h',node:'mh_mart',monthly:4700,daily:215,hours:'14:00-22:00',kind:'service'},
{name:'Nhân viên trực phòng Esports',place:'Khu Tây Châu · Khoang Esports Tinh Mang Thứ Nguyên',node:'xz_esports',monthly:5200,daily:235,hours:'16:00-00:00',kind:'live'},
{name:'Nhân viên ca đêm trạm xăng',place:'Khu Đông Đường · Trạm xăng & rửa xe Đông Đường',node:'dt_gas',monthly:5600,daily:255,hours:'20:00-06:00',kind:'service'},
{name:'Trợ lý phòng thu âm',place:'Khu Tây Châu · Xưởng âm học chuyên nghiệp Cực Quang',node:'xz_sound_studio',monthly:5400,daily:245,hours:'11:00-20:00',kind:'live'},
{name:'Nhân viên hậu đài nhà hát',place:'Khu Tây Châu · Nhà hát lớn Poly Tây Châu',node:'xz_theatre',monthly:4600,daily:210,hours:'13:00-22:00',kind:'live'},
{name:'Trợ lý phòng khám thú y',place:'Khu Cổ Lĩnh · Bệnh viện thú y Babi Đường',node:'gl_pet',monthly:5000,daily:225,hours:'10:00-19:00',kind:'medical'},
{name:'Trợ lý lễ tân bệnh viện',place:'Khu Minh Hồ · Bệnh viện Nhân dân số 1 Thành phố',node:'mh_hospital',monthly:5800,daily:260,hours:'08:00-17:00',kind:'medical'},
{name:'Trợ lý trực tòa thí nghiệm',place:'Khu Lạc Hà · Tòa thí nghiệm trọng điểm Cao Phân Tử',node:'lx_lab',monthly:6000,daily:270,hours:'18:00-02:00',kind:'academy'},
{name:'Trợ lý hành chính khu nghiên cứu',place:'Khu Vũ Thạch & Phố Giang · Khu nghiên cứu sáng tạo Phố Giang',node:'ys_rdpark',monthly:6200,daily:280,hours:'09:30-18:30',kind:'office'},
{name:'Học việc xưởng nhuộm vải thủ công',place:'Khu Ô Khê · Xưởng nhuộm di sản Giang Nam',node:'wx_dye',monthly:4200,daily:190,hours:'10:00-19:00',kind:'craft'},
{name:'Nhân viên tư vấn cửa hàng Outlet',place:'Khu Đông Đường · Trung tâm thương mại Shanshan Outlet',node:'dt_outlet',monthly:4300,daily:195,hours:'10:00-19:00',kind:'service'},
{name:'Nhân viên hướng dẫn mặt đất sân bay',place:'Khu Đông Đường · Nhà ga T2 Sân bay Lâm Giang',node:'dt_airport',monthly:5200,daily:235,hours:'06:00-14:00',kind:'service'},
{name:'Phục vụ quán trà cổ',place:'Khu Ô Khê · Quán trà cổ Lâm Thủy Cư',node:'wx_teahouse',monthly:4000,daily:180,hours:'09:00-18:00',kind:'service'},
{name:'Diễn viên NPC nhà hát thực cảnh',place:'Khu Ô Khê · Nhà hát thực cảnh Mê Vụ Kịch Xã',node:'wx_script',monthly:4800,daily:220,hours:'14:00-23:00',kind:'live'},
{name:'Trợ lý chiếu phim rạp IMAX',place:'Khu Minh Hồ · Rạp chiếu phim Wanda IMAX',node:'mh_cinema',monthly:4400,daily:200,hours:'12:00-21:00',kind:'service'},
{name:'Phụ bếp nhà ăn đại học',place:'Khu Lạc Hà · Nhà ăn số 1 Làng Đại học',node:'lx_canteen',monthly:4100,daily:185,hours:'06:00-14:00',kind:'service'},
{name:'Nhân viên hướng dẫn ga tàu cao tốc',place:'Khu Vũ Thạch & Phố Giang · Ga tàu cao tốc Nam Lâm Giang',node:'ys_station',monthly:5000,daily:225,hours:'07:00-16:00',kind:'service'},
{name:'Phụ việc ca sáng tiệm bánh áp chảo',place:'Khu Vũ Thạch & Phố Giang · Tiệm bánh bao áp chảo Lão Trương',node:'pj_morning',monthly:4300,daily:195,hours:'05:00-13:00',kind:'service'},
{name:'Nhân viên tư vấn trung tâm du khách',place:'Khu thắng cảnh núi Thanh Bình · Trung tâm du khách núi Thanh Bình',node:'qp_visitor',monthly:4500,daily:205,hours:'08:30-17:30',kind:'service'},
{name:'Nhân viên trực cáp treo',place:'Khu thắng cảnh núi Thanh Bình · Cáp treo toàn cảnh núi Thanh Bình',node:'qp_cable',monthly:4700,daily:215,hours:'08:00-17:00',kind:'service'},
{name:'Phục vụ quán trà lưng đồi',place:'Khu thắng cảnh núi Thanh Bình · Quán trà cổ Thính Tùng lưng đồi',node:'qp_teahouse',monthly:4200,daily:190,hours:'09:00-18:00',kind:'service'},
{name:'Pha chế cà phê biệt thự cổ',place:'Khu Cổ Lĩnh · Cà phê biệt thự Thanh Chuyên Ký',node:'gl_cafe',monthly:4600,daily:210,hours:'08:00-17:00',kind:'craft'}];
const CATEGORIES=['Tán gẫu','Trò chơi','Ca hát','ASMR','Hội họa','Vũ đạo','Ngoài trời','Ẩm thực','VTuber','Nội dung tổng hợp'];
const STREAMER_THEMES=[
{id:'',label:'Tự động',source:'Phân bổ cố định theo tên',swatch:'linear-gradient(135deg,#ff3d9a,#27d7ff,#9b5cff,#ffd12f,#42e6a4)'},
{id:'rose',label:'Hồng đào',source:'Bảng màu Taffy',swatch:'#ff3d9a'},
{id:'ice',label:'Xanh băng',source:'Bảng màu Azuma Seren',swatch:'#27d7ff'},
{id:'violet',label:'Tím Violet',source:'Bảng màu Stella',swatch:'#9b5cff'},
{id:'gold',label:'Vàng kim',source:'Bảng màu Shigure Ui',swatch:'#ffd12f'},
{id:'crimson',label:'Đỏ thẫm',source:'Bảng màu Sakamata',swatch:'#ff355d'},
{id:'scarlet',label:'Đỏ cam',source:'Bảng màu Hồng Tường Vi',swatch:'#ff7a2f'},
{id:'candy',label:'Bạc hà',source:'Bảng màu Riamu',swatch:'#42e6a4'}];
const STREAMER_THEME_IDS=new Set(STREAMER_THEMES.map(x=>x.id));
function normalizeStreamerTheme(value){value=String(value||'').trim().toLowerCase();return STREAMER_THEME_IDS.has(value)?value:''}
const FREE_OPENING_DETAIL=[
'Bạn vừa kết thúc một ngày làm việc và trở về nhà.',
'Sau khi thu dọn sơ qua, bạn mở nền tảng phát sóng và vào phòng livestream của {{Streamer mục tiêu}} mà mình đang theo dõi.',
'Bắt đầu từ một buổi xem phát sóng và tương tác danmaku bình thường, tự nhiên, cốt truyện tiếp theo sẽ phát triển tự do.'
].join('\n');
const OPENING_ONE_DETAIL=[
'> Sau một ngày bươn chải mệt nhoài, bạn trở về chỗ ở của mình khi cơn mỏi mệt vẫn chưa tan.',
'> Thu dọn sơ qua rồi mở điện thoại, trên màn hình là {{Streamer mục tiêu}} quen thuộc đang trò chuyện cùng danmaku qua chiếc micro đơn sơ.',
'> Gần nửa đêm, trong tai nghe vang lên lời dặn của cô ấy: "Mình tạm rời máy vài phút đi lấy bưu kiện gấp nhé", kèm theo tiếng kéo ghế và tiếng khóa cửa khẽ vang.',
'> Đúng lúc đó bạn cũng có việc cần ra ngoài một lát.',
'> Giữa màn đêm và ánh đèn đường chưa tắt, một bóng dáng mặc đồ ở nhà rộng rãi, đi dép lê đang chăm chú nhìn mã vận đơn lọt vào tầm mắt — gương mặt mộc dưới ánh đèn trắng lạnh cùng chất giọng khẽ đọc mã nhận hàng trùng khớp hoàn toàn với âm thanh vừa vang lên trong tai nghe vài phút trước.',
'```text',
'### Đề cương mở đầu đầy đủ',
'',
'#### 【Màn 1: Thực tại đô thị trầm lắng và chiếc tổ ấm không gian mạng】',
'- Nút 1: Sự mệt mỏi thể xác sau một ngày dài',
'  - Tình tiết: Khắc họa trạng thái đời thường của người chơi sau khi kết thúc lịch trình trong ngày. Miêu tả chân thực cảm giác mỏi mệt của cơ thể và sự thư giãn khi trút bỏ lớp mặt nạ xã hội ban ngày, nhưng không tự ý gán ghép nghề nghiệp, chỗ ở, quận hay địa điểm ngoài thiết lập.',
'  - Chi tiết: Rửa mặt sơ qua, uống ngụm nước, đặt đồ đạc xuống để cơ thể dần thả lỏng.',
'- Nút 2: Bước vào phòng phát sóng và ánh nhìn một chiều',
'  - Tình tiết: Người chơi mở nền tảng phát sóng, vào phòng livestream của {{Streamer mục tiêu}}. Danmaku cuộn nhanh, streamer đang bật hình tượng ảo để tán gẫu đời thường hoặc tâm sự trước giờ tắt sóng.',
'  - Chi tiết: Tái hiện sinh thái phòng phát sóng chân thực (đọc SC, đấu khẩu cùng danmaku, phàn nàn nhẹ vì tạp âm thiết bị hay mạng lag). Người chơi chỉ là một khán giả bình thường giữa hàng ngàn dòng bình luận, tận hưởng cảm giác an toàn và khoảng cách của sự quan sát một chiều.',
'',
'#### 【Màn 2: Sự giao thoa tinh tế giữa thực tại và ảo ảnh】',
'- Nút 3: Lời xin phép tạm rời máy bất ngờ và sự đồng bộ thời gian - không gian',
'  - Tình tiết: {{Streamer mục tiêu}} chợt thở dài trước micro, nói rằng vừa nhận được tin nhắn giục lấy hàng giao nhanh (đồ tươi sống / thiết bị quan trọng / nhu yếu phẩm), tuyên bố "Bật nhạc chờ năm phút rồi quay lại ngay", tiếp đó là tiếng mở cửa phòng và tiếng dép lê ngoài hành lang.',
'  - Chi tiết: Danmaku trong phòng bắt đầu nhắn "Streamer đi đâu thế", "Đi nhanh về nhanh nhé", "Có phải lén đi ăn đêm không đấy".',
'- Nút 4: Người chơi tạm ra ngoài và giao lộ hành trình',
'  - Tình tiết: Người chơi vì khát nước hoặc có nhu cầu cá nhân tạm thời nên tiện tay cầm điện thoại và chìa khóa bước ra ngoài.',
'  - Chi tiết: Tiếng gió đêm hòa cùng tiếng nhạc chờ phát sóng vẫn đang chạy ngầm trong điện thoại tạo nên sự đối lập thú vị.',
'',
'#### 【Màn 3: Cuộc chạm trán ngoài đời thực (Cao trào cốt lõi)】',
'- Nút 5: Tiêu điểm ánh nhìn không chút phòng bị',
'  - Tình tiết: Gần khu vực nhận đồ, người chơi nhìn thấy một cô gái trẻ đội mũ trùm đầu hoặc buộc tóc gọn gàng.',
'  - Đặc tả thị giác: Ánh đèn trắng lạnh chiếu nghiêng qua gương mặt cô, khắc họa đường nét ngũ quan giống hệt hình tượng ảo (nốt ruồi lệ / dáng mặt / đường xương hàm), trên người mặc chiếc áo thun cũ rộng thùng thình và quần đùi ở nhà, đôi chân thon dài trắng trẻo xỏ đôi dép lê, không hề có chút hào quang thần tượng nào trước ống kính.',
'- Nút 6: Bằng chứng âm thanh tuyệt đối và sự chấn động tâm lý',
'  - Tình tiết: Cô vừa xoa gáy vừa dùng chính chất giọng đặc trưng vừa vang lên trong tai nghe vài phút trước để đọc bốn số cuối điện thoại: "Đuôi XXXX, một thùng hàng lớn ạ."',
'  - Sức căng tâm lý: Ngón tay người chơi khựng lại. Không có hiệu ứng hào nhoáng, chỉ có cảm giác vừa ngỡ ngàng vừa kích thích thầm kín khi nhận ra người được vạn người chú mục trên mạng lại đang đứng ngay trước mắt mình trong bộ dạng đời thường nhất.',
'',
'#### 【Màn 4: Thăm dò, lướt qua nhau và sợi dây liên kết bí mật】',
'- Nút 7: Lần tiếp xúc cự ly gần đầu tiên và sự che giấu',
'  - Tình tiết: Hai người lướt qua nhau trong lối đi hẹp. Cô ôm thùng hàng nặng che khuất tầm nhìn nên suýt va vào người chơi, theo phản xạ khẽ kêu lên và xin lỗi; người chơi thuận thế đỡ nhẹ đáy thùng giúp cô, tạo ra khoảnh khắc chạm nhẹ qua đầu ngón tay.',
'  - Phản ứng nhân vật: Cô giữ vẻ cảnh giác và lịch sự thông thường với người lạ, ôm thùng hàng nhanh chóng rời khỏi tầm mắt.',
'- Nút 8: Dư âm và mở ra mạch truyện chính',
'  - Tình tiết: Người chơi trở về chỗ ở, mở lại màn hình điện thoại. Trong tai nghe vang lên tiếng cô thở hổn hển ngồi lại vào ghế, màn hình phòng phát sóng sáng lên: "Phù... mệt chết đi được, cái thùng vừa nãy nặng thật đấy, suýt nữa thì ngã."',
'  - Định hình kết đoạn: Nhìn dòng danmaku lướt qua "Vất vả rồi", người chơi nhìn lại đầu ngón tay vừa chạm vào cổ tay cô, chính thức phá vỡ bức tường ngăn cách một chiều giữa trong và ngoài màn hình.',
'```'
].join('\n');
const OPENING_TWO_DETAIL=[
'> Nhiều ngày liền lặp đi lặp lại nhịp sống máy móc trước màn hình khiến trong lòng tích tụ sự trống trải và bức bối khó tả.',
'> Ở đầu bên kia màn hình, {{Streamer mục tiêu}} sau khi kết thúc buổi tán gẫu dài liền vươn vai nói với danmaku: "Chiều nay mình có chút việc riêng phải ra ngoài hít thở khí trời", rồi nhanh chóng tắt luồng phát sóng.',
'> Bạn đóng cửa sổ livestream, buồn chán lướt bảng tin địa phương trên ứng dụng hẹn hò cùng thành phố. Một bài đăng tối giản vừa mới lên sóng đập vào mắt — không lộ toàn mặt, chỉ có tấm ảnh selfie góc nghiêng đội mũ che khuất quá nửa khuôn mặt kèm dòng chữ hơi bực dọc: 【Vừa xong việc, muốn tìm người ra ngoài đi dạo một chút, ai không hỏi han đời tư thì nhắn】.',
'> Với tâm lý tìm người giải khuây, bạn tiện tay gửi tin nhắn riêng, không ngờ lại nhận được phản hồi hẹn gặp ngay lập tức.',
'> Khi bạn đến điểm hẹn đúng giờ và nhìn thấy bóng dáng nhỏ nhắn đeo khẩu trang kín mít, rụt cổ bước nhanh tới, khoảnh khắc cô kéo nhẹ nửa chiếc khẩu trang cảnh giác nhìn quanh cùng câu nói đầu tiên hạ thấp giọng để khớp mật khẩu khiến suy nghĩ của bạn đứng hình — gương mặt mộc không chút son phấn và chất giọng nguyên bản ấy đã đập tan hình chiếu ảo vừa mới tắt trên phòng phát sóng.',
'```text',
'### Đề cương mở đầu đầy đủ',
'',
'#### 【Màn 1: Khao khát thầm kín và phép thử (Phục bút tuyến ngầm)】',
'- Nút 1: Nhịp sống áp lực cao và khoảng trống giải tỏa riêng tư',
'  - Tình tiết: {{Streamer mục tiêu}} trong không gian riêng tư trải qua cơn mệt mỏi tột độ sau thời gian dài chạy bản thảo hoặc livestream, kèm theo sự trống trải về tâm sinh lý khó lòng giải tỏa khi bị hình tượng công chúng trói buộc.',
'  - Động cơ: Khao khát được tiếp xúc ngoài đời thực với tư cách một cô gái bình thường cùng một người lạ hoàn toàn không biết thân phận thật của mình.',
'- Nút 2: Bài đăng cùng thành phố từ tài khoản phụ bí mật',
'  - Tình tiết: {{Streamer mục tiêu}} chuyển sang tài khoản phụ trên ứng dụng kết bạn cùng thành phố, đăng một trạng thái ngắn kèm ảnh góc nghiêng mờ ảo và định vị, vừa hồi hộp vừa kích thích chờ đợi phản hồi.',
'',
'#### 【Màn 2: Sự lệch pha không gian mạng và kết nối hộp mù (Góc nhìn người chơi)】',
'- Nút 3: "Đơn xin nghỉ phép ra ngoài" trên sóng livestream',
'  - Tình tiết: Người chơi đang xem buổi phát sóng thường ngày của {{Streamer mục tiêu}} thì nghe cô nhắc nhẹ trước lúc tắt sóng rằng lát nữa phải ra ngoài có chút việc riêng.',
'- Nút 4: Sự trùng hợp ngẫu nhiên trên bảng tin',
'  - Tình tiết: Sau khi thoát phòng phát sóng, người chơi tình cờ lướt ứng dụng cùng thành phố và bắt gặp đúng bài đăng vừa lên.',
'  - Trạng thái hộp mù: Người chơi hoàn toàn không biết thân phận thật của đối phương, chỉ bị thu hút bởi đường nét vóc dáng và vẻ bí ẩn trong bức ảnh nên gửi lời chào; hai bên nhanh chóng chốt địa điểm gặp mặt gần đó.',
'',
'#### 【Màn 3: Cuộc hẹn và sự chồng lớp chân thực (Cao trào cốt lõi)】',
'- Nút 5: Đến điểm hẹn và quan sát cảnh giác',
'  - Tình tiết: Người chơi đến điểm hẹn đúng giờ. Một bóng dáng trang bị kín mít (mũ, khẩu trang, đồ thường ngày rộng rãi) dè dặt xuất hiện, nhìn quanh xác nhận không có người quen.',
'- Nút 6: Khẩu trang kéo xuống và cú sốc giọng nói (Xác thực tuyệt đối)',
'  - Cú sốc thị giác: Đối phương bước nhanh lại gần, trong khoảnh khắc kéo nhẹ khẩu trang để thở đã để lộ gương mặt mộc không bộ lọc. Đường nét đôi mắt, sống mũi và khuôn mặt đặc trưng khiến người chơi lập tức có cảm giác quen thuộc mãnh liệt.',
'  - Bằng chứng thính giác: Cô hạ thấp giọng, hơi căng thẳng lên tiếng xác nhận: "...Là anh phải không? Đi khỏi đây trước đã, đừng đứng ở chỗ dễ thấy." Chất giọng đặc trưng vừa vang lên trong tai nghe vài chục phút trước khẳng định chắc chắn đối phương chính là {{Streamer mục tiêu}}.',
'- Nút 7: Sự tương phản tột cùng và chấn động tâm lý',
'  - Sức căng tâm lý: Nhân vật được hàng vạn người hâm mộ săn đón trên sóng livestream giờ đây đang đứng trước mặt người chơi như một cô gái bình thường đầy bối rối, thậm chí chủ động kéo nhẹ vạt áo người chơi rời khỏi chỗ đông người.',
'',
'#### 【Màn 4: Sóng ngầm cuộn chảy và giao ước riêng tư (Mở màn cốt truyện)】',
'- Nút 8: Chuyến đồng hành ngầm hiểu',
'  - Tình tiết: Đối phương hoàn toàn tưởng rằng người chơi chỉ là một người qua đường bình thường trên mạng, vừa than thở về áp lực cuộc sống vừa đề nghị tìm một chỗ kín đáo hơn để ngồi nghỉ.',
'```'
].join('\n');
const OPENING_THREE_DETAIL=[
'> Sáng sớm, bạn đứng ngoài ban công chỗ ở để hóng gió, từ tầng trên vọng xuống tiếng rửa mặt và tiếng kéo giá phơi đồ.',
'> Một làn gió sớm thổi qua, một món đồ vừa vắt khô còn vương hơi ấm và mùi nước giặt đặc trưng từ tầng trên rơi xuống, phủ trúng mặt bạn. Khi gỡ xuống, bạn nhận ra kiểu dáng đặc biệt, tông màu riêng và chi tiết thêu ren của nó lại trùng khớp đáng kinh ngạc với phong cách đặc trưng của {{Streamer mục tiêu}}.',
'> Ngay phía trên lập tức vang lên tiếng móc áo rơi xuống sàn, tiếng dép lê bước vội trên sàn gỗ cùng tiếng kêu bực dọc bị cố tình nén nhỏ nhưng vô cùng quen thuộc. Khi bạn ngẩng đầu lên, ánh mắt chạm ngay cô gái đang vịn lan can nhìn xuống tìm kiếm; gương mặt mộc dưới nắng sớm và chất giọng đặc trưng buột miệng thốt ra khi hoảng hốt đã xác nhận thân phận của cô.',
'> Một lát sau, cô buộc phải chạy xuống lầu để nhận lại món đồ trong bầu không khí đầy ngượng ngùng. Khi cánh cửa khép lại, tiếng động sinh hoạt chân thực phía bên kia trần nhà vẫn nghe rõ mồn một, phá vỡ hoàn toàn khoảng cách của một khán giả bình thường.',
'```text',
'### Đề cương mở đầu đầy đủ',
'',
'#### 【Màn 1: Món đồ riêng tư từ trên trời rơi xuống】',
'',
'- Nút 1: Buổi sáng đời thường và thiết lập không gian',
'',
'  - Tình tiết: Sáng sớm, người chơi đứng hóng gió hoặc thu dọn đồ đạc ngoài ban công. Qua việc miêu tả khung cửa gỗ cũ, lan can sắt và kết cấu ban công xếp tầng, xác lập không gian vật lý nơi tiếng động sinh hoạt giữa tầng trên và tầng dưới nghe rõ mồn một.',
'  - Chi tiết: Người chơi tận hưởng khoảnh khắc thư thả hiếm hoi, trên lầu vọng xuống tiếng nước chảy và tiếng kim loại cọ xát của giá phơi đồ.',
'',
'- Nút 2: Vật rơi từ tầng cao và tầm nhìn bị che khuất',
'',
'  - Tình tiết: Một cơn gió sớm thổi qua, một món đồ vừa giặt xong còn thoang thoảng hương nước xả vải đặc trưng tuột khỏi dây phơi tầng trên, rơi trúng mặt người chơi.',
'  - Chi tiết: Đặc tả cảm giác chân thực của chất liệu vải, đường cắt may cá tính và cách phối màu quen thuộc.',
'',
'#### 【Màn 2: Xác nhận chi tiết và sự trùng khớp giữa trên mạng - ngoài đời】',
'',
'- Nút 3: Xác nhận thị giác về kiểu dáng và cảm giác quen thuộc',
'',
'  - Tình tiết: Người chơi lấy món đồ xuống quan sát kỹ. Kiểu dáng, tông màu chủ đạo và chi tiết ren thêu trùng khớp cao độ với phong cách đặc trưng từng thấy trên sóng livestream hoặc ảnh đăng mạng của {{Streamer mục tiêu}}.',
'  - Chi tiết: Người chơi dấy lên sự nghi ngờ và chấn động nhận thức — đây tuyệt đối không phải hàng đại trà.',
'',
'- Nút 4: Tiếng động hoảng loạn trên lầu và khóa chặt không gian - thời gian',
'',
'  - Tình tiết: Cùng lúc đó, ban công tầng trên vang lên tiếng móc áo rơi lạch cạch, tiếp theo là tiếng bước chân dép lê vội vã và tiếng thở than hạ thấp giọng.',
'  - Chi tiết: Âm sắc giọng nói trùng khớp tầng thứ nhất với giọng nói quen thuộc trên phòng phát sóng, bóng người thấp thoáng nhoài ra mép ban công tầng trên nhìn xuống.',
'',
'#### 【Màn 3: Chạm mặt nơi ban công và bắt gặp dung mạo thật (Cao trào cốt lõi)】',
'',
'- Nút 5: Ngẩng đầu theo phản xạ và giao thoa ánh nhìn',
'',
'  - Tình tiết: Người chơi cầm món đồ ngẩng đầu nhìn lên, bắt gặp ngay cô gái đang vịn lan can nhoài nửa người xuống tìm kiếm.',
'  - Đặc tả thị giác: Nắng sớm chiếu nghiêng qua gương mặt không trang điểm, phác họa đường nét ngũ quan giống hệt hình tượng ảo; cô mặc đồ ngủ ở nhà rộng rãi, tóc búi vội, không hề có chút dáng vẻ thần tượng đã qua ánh đèn sân khấu.',
'',
'- Nút 6: Ngượng chín mặt và xác thực giọng nói tại hiện trường',
'',
'  - Tình tiết: Bốn mắt chạm nhau giữa không trung. Đối phương nhìn rõ món đồ cá nhân trên tay người chơi thì lập tức hoảng loạn, chất giọng vốn định che giấu hoàn toàn mất kiểm soát, buột miệng thốt ra câu hỏi lắp bắp mang đậm dấu ấn cá nhân giống hệt phản ứng trên sóng livestream.',
'  - Sức căng tâm lý: Thần tượng ảo được vạn người săn đón trên màn hình giờ đây đang rơi vào tình cảnh bối rối đỏ mặt ngoài đời thực.',
'',
'#### 【Màn 4: Giao thiệp, hoàn trả và hình thành sợi dây liên kết bí mật】',
'',
'- Nút 7: Bàn giao ngoài hành lang và thăm dò phòng tuyến',
'',
'  - Tình tiết: Đối phương buộc phải chạy xuống cầu thang gõ cửa hoặc nhận lại đồ ở góc cầu thang. Hai người đứng đối diện nhau trong khoảng cách chưa đầy một mét.',
'  - Chi tiết: Cô cố gắng giữ vẻ khách sáo giữa hàng xóm láng giềng để thăm dò xem người chơi đã nhận ra mình chưa; còn người chơi vừa lịch sự trả đồ vừa ngầm nắm giữ bí mật.',
'',
'- Nút 8: Dư âm vang vọng và cơ hội đồng minh bí mật',
'',
'  - Tình tiết: Cuộc bàn giao kết thúc, cánh cửa khép lại. Người chơi trở về phòng, nghe tiếng đóng cửa vọng xuống từ tầng trên.',
'  - Định hình kết đoạn: Lắng nghe tiếng động sinh hoạt chân thực cách một lớp sàn nhà, khoảng cách khán giả thông thường đã hoàn toàn bị xóa nhòa, mở ra mối liên kết bí mật chỉ hai người biết.',
'```'
].join('\n');
const OPENINGS=[
{id:'opening-1',title:'Về nhà xem livestream',summary:'Kết thúc một ngày làm việc, bạn trở về nhà và vào phòng phát sóng của streamer mình theo dõi.',detail:FREE_OPENING_DETAIL},
{id:'opening-2',title:'Tình cờ chạm mặt',summary:'Một lần tạm rời phòng phát sóng đi lấy đồ giao hàng khiến ánh nhìn trên mạng bất ngờ giao thoa với đời thực.',detail:OPENING_ONE_DETAIL},
{id:'opening-3',title:'Hẹn gặp qua tài khoản phụ',summary:'Bạn tình cờ hẹn gặp được đúng streamer mục tiêu vừa mới tắt sóng thông qua ứng dụng kết bạn cùng thành phố.',detail:OPENING_TWO_DETAIL},
{id:'opening-4',title:'Món đồ từ trên trời rơi xuống',summary:'Một món đồ riêng tư vô tình rơi xuống từ ban công biệt thự cổ khiến bạn và streamer tầng trên lần đầu chạm mặt ngoài đời thực.',detail:OPENING_THREE_DETAIL},
{id:'opening-5',title:'Bạn trai nhỏ',summary:'Khởi đầu với thân phận bạn trai của streamer mục tiêu; sau khi kết thúc buổi phát sóng, cô ấy nhìn thấy bạn trai đang ngủ say trên giường.',detail:'Khởi đầu với thân phận bạn trai của {{Streamer mục tiêu}}; sau khi kết thúc một ngày phát sóng, cô ấy nhìn thấy người bạn trai đang ngủ say trên giường.'},
{id:'custom',title:'Mở đầu tùy chỉnh',summary:'Do người chơi trực tiếp nhập nội dung mở đầu',detail:''}];
/* 人设不再是一组固定字段，而是一整段「角色详情」YAML —— 跟 世界书/红蔷薇、斯黛拉、
   璃亚梦 同格式，生成和写入照 参考/底部状态栏.html 的 人物详情生成 那一套。 */
const ARCHIVE_KEY='linjiang-opening-streamer-archives-v1';
const ARCHIVE_ART_MAX=1536*1024;
const WORKSHOP_URL=(new URLSearchParams(location.search).get('workshop')||'https://workshop.rown.dpdns.org/?embed=1').replace(/\/$/,'');
const WORKSHOP_SELECT_ORIGIN=(()=>{try{return new URL(WORKSHOP_URL).origin}catch(_){return''}})();
const state={step:1,gender:'Nam',home:null,job:JOBS[0],mapTarget:'player',oshi:[],openingId:'opening-1',customOpeningText:'',openingTargetSignature:'',openingTarget:null,customs:[],activeCustomId:null,archives:[],archiveOpen:false,categories:new Set(['Tán gẫu']),yaml:'',art:{type:'',src:''},streamerHome:null,streamerTheme:'',partArt:{oral:'',chest:'',vagina:'',anus:''},workshopAuthor:'',workshopItemId:''};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const value=id=>$(id).value.trim();
let toastTimer=0;
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('on');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('on'),2200)}
/* ---- 体量模型 ----------------------------------------------------------
   玩家只拉一根「体量档位」滑杆（0–100），粉丝数／底盘热度／大航海全是它的函数。

   这段是 外部部署/V20260826/辅助计算脚本.js 里 streamScale 的镜像，公式必须一模一样：
   那边是运行时的唯一出处（LinjiangAux.streamScale），这一页是 GitHub Pages 上的
   独立页面、跨域拿不到酒馆的脚本，所以只能各放一份。改公式要同时改两处，
   scripts/shot-opening.mjs 会把两边的曲线都打出来对照。

   底盘热度取 50 × 8^(档位/25)，系数是拿 LR_HOSTS.pop 里七个已定稿的值反解定标的
   （时雨羽衣 1200 → 38 … 塔菲 18240 → 71）。粉丝／热度比随体量下降（60 → 18 倍），
   大航海按粉丝的 0.12% → 0.5%。

   注意「热度」有两个：底盘热度是常态值；本场热度是这场靠礼物堆的虚火，下播清零。
   玩家在直播间看到的 直播.热度 = 底盘热度 + 本场热度残留，开局未开播所以是 0。
   ------------------------------------------------------------------------ */
/* 不取整：滑杆给的是整数，但 tierOfFollowers 反解出来的是 0.1 精度的小数档 */
function clampTier(t){t=+t||0;return Math.max(0,Math.min(100,t))}
function tierLabel(t){return t<20?'Vô danh':t<40?'Có chút tên tuổi':t<60?'Streamer ổn định':t<80?'Streamer nổi tiếng':t<95?'Streamer hàng đầu':'Hiện tượng mạng'}
function roundNice(n){n=Math.max(0,Math.round(+n||0));if(n>=100000)return Math.round(n/1000)*1000;if(n>=10000)return Math.round(n/100)*100;if(n>=1000)return Math.round(n/10)*10;return n}
function streamScale(t){t=clampTier(t);var base=50*Math.pow(8,t/25),followers=base*(60-0.42*t),guards=followers*(0.0012+0.000038*t);
  /* 提督、总督减去门槛再除，小房两档干净归零；比值比草稿更保守（24:1 / 260:1） */
  return{tier:t,label:tierLabel(t),followers:roundNice(followers),base:roundNice(base),guards:roundNice(guards),
    admirals:Math.max(0,Math.floor((guards-40)/24)),governors:Math.max(0,Math.floor((guards-300)/260))}}
/* 粉丝数 → 档位。十一位已定稿主播存的是粉丝数（作者给的权威值），底盘热度和大航海
   要能从它一致地推回来。曲线单调，扫 0–100 取最近的 0.1 档就够，比解析求逆好读。 */
function tierOfFollowers(followers){var target=Math.max(0,+followers||0),best=0,gap=Infinity;
  for(var t=0;t<=100;t+=0.1){var d=Math.abs(streamScale(t).followers-target);if(d<gap){gap=d;best=t}}
  return Math.round(best*10)/10}
function scaleOfFollowers(followers){return streamScale(tierOfFollowers(followers))}
function bigNum(n){n=Math.max(0,Math.round(+n||0));return n>=10000?(Math.round(n/1000)/10).toFixed(1).replace(/\.0$/,'')+' vạn':n.toLocaleString('en-US')}
function renderSteps(){document.querySelector('#steps').innerHTML=STEPS.map(function(step,i){var n=i+1;return '<button class="step-tab '+(state.step===n?'active ':'')+(state.step>n?'done ':'')+(skipStep(n)?'skipped':'')+'" data-step="'+n+'"><span>0'+n+'</span><b>'+step+'</b></button>'}).join('');document.querySelectorAll('.step-tab').forEach(function(b){b.onclick=function(){go(+b.dataset.step,true)}})}
function homeCostText(h){return h&&h.cost||'Chi phí chờ xác nhận'}
let openingMapStarted=false;
function ensureOpeningMap(){var frame=document.querySelector('#opening-map-iframe');if(!frame||openingMapStarted)return;openingMapStarted=true;frame.addEventListener('load',function(){setTimeout(bindOpeningFrame,200)},{once:true});frame.src=MAP_URL+'&target=home'}
function openingMapApi(){try{var frame=document.querySelector('#opening-map-iframe');return frame&&frame.contentWindow.PLATE_MAP||null}catch(_){return null}}
function modalMapApi(){try{var frame=document.querySelector('#map-iframe');return frame&&frame.contentWindow.PLATE_MAP||null}catch(_){return null}}
function mapApi(){return openingMapApi()}
function quoteFor(job){if(!state.home||!job||!job.node)return null;var api=mapApi();if(!api||!api.quote)return null;try{var all=api.quote(state.home.id,job.node);return all&&(all.transit||all.walk||all.taxi)||null}catch(_){return null}}
function routeLabel(route){return route?route.min+' phút (một chiều) / '+route.km+' km / Một chiều RMB '+route.yuan:'Đang chờ mạng lưới bản đồ'}
function jobCommuteText(job){if(!job||!job.node)return 'Không cần đi làm cố định';var r=quoteFor(job);if(!state.home)return 'Tính quãng đường sau khi chọn chỗ ở';return r?'Ưu tiên xe buýt - tàu điện / '+routeLabel(r):'Chưa tính được lộ trình từ chỗ ở hiện tại'}
function metric(label,value,sub){return '<div class="work-metric"><span>'+esc(label)+'</span><b>'+esc(value)+'</b>'+(sub?'<small>'+esc(sub)+'</small>':'')+'</div>'}
function workMetricsHtml(job,route){var employed=job&&job.monthly;if(!employed)return '<div class="commute-head"><span>Công việc & Đi lại</span><small>Lựa chọn hiện tại: Tạm thời thất nghiệp</small></div><div class="work-metrics">'+metric('Thu nhập tháng','Không có thu nhập cố định','Có thể bắt đầu tự do sắp xếp')+metric('Ca làm việc','Tự do sắp xếp','Không có giờ làm cố định')+metric('Đi lại một chiều','Không cần đi lại','—')+metric('Khoảng cách','—','—')+metric('Chi phí đi lại','—','—')+'</div>';var wait=state.home?(route?'':'Đang tính lộ trình'):'Chọn chỗ ở trước';return '<div class="commute-head"><span>Công việc & Đi lại</span><small>Tính theo ưu tiên xe buýt/tàu điện một chiều</small></div><div class="work-metrics">'+metric('Thu nhập tháng','RMB '+job.monthly.toLocaleString()+' / tháng','Lương tháng cố định')+metric('Ca làm việc',job.hours,'Khung giờ làm việc mỗi ngày')+metric('Đi lại một chiều',route?route.min+' phút':wait,route?'Khứ hồi mỗi ngày khoảng '+(route.min*2)+' phút':'')+metric('Khoảng cách',route?route.km+' km':wait,'Từ chỗ ở đến nơi làm việc')+metric('Chi phí đi lại',route?'RMB '+route.yuan:wait,route?'Khứ hồi khoảng RMB '+(route.yuan*2):'')+'</div>'}
function renderJobs(){var el=document.querySelector('#jobs');if(!el)return;el.innerHTML=JOBS.map(function(j,i){return '<button data-job="'+i+'">'+esc(j.name)+'</button>'}).join('');el.querySelectorAll('[data-job]').forEach(function(b){b.onclick=function(){setJob(JOBS[+b.dataset.job])}})}
function updatePickSummary(){var home=document.querySelector('#map-pick-home'),work=document.querySelector('#map-pick-work');if(home)home.textContent=state.home?state.home.name:'Chưa chọn';if(work)work.textContent=state.job&&state.job.monthly?state.job.name:'Tạm thời thất nghiệp'}
function updateHomeInspector(){var h=state.home;var name=document.querySelector('#home-name'),meta=document.querySelector('#home-meta'),cost=document.querySelector('#home-cost');if(!name)return;name.textContent=h?h.name:'Chưa chọn chỗ ở';name.classList.toggle('empty',!h);meta.textContent=h?h.fullName+' / '+h.tenure+' / '+h.note:'Kéo bản đồ để xem các quận khác; nhấp vào điểm nhà ở màu hồng để xem chi tiết.';cost.textContent=h?homeCostText(h):'Tiền thuê và tiền cọc sẽ hiển thị tại đây';updatePickSummary()}
function updateWorkInspector(){var j=state.job,r=j&&j.monthly?quoteFor(j):null;var name=document.querySelector('#work-name');if(!name)return;name.textContent=j&&j.monthly?j.name:'Tạm thời thất nghiệp';document.querySelector('#work-meta').textContent=j&&j.place?j.place+(state.home?'':' / Tính quãng đường sau khi chọn chỗ ở'):'Có thể chọn chỗ ở trước hoặc chọn việc làm trước; giữ trạng thái tạm thời thất nghiệp vẫn có thể tiếp tục.';document.querySelector('#commute-card').innerHTML=workMetricsHtml(j,r);updatePickSummary()}
function renderMapInspector(){updateHomeInspector();updateWorkInspector()}
function setOpeningTarget(target){state.mapTarget=target==='work'?'work':'player';var homeBtn=document.querySelector('#map-home-mode'),workBtn=document.querySelector('#map-work-mode');homeBtn.classList.toggle('on',state.mapTarget==='player');workBtn.classList.toggle('on',state.mapTarget==='work');document.querySelector('#map-mode-title').textContent=state.mapTarget==='work'?'Chọn công việc khởi đầu':'Chọn chỗ ở khởi đầu';document.querySelector('#map-mode-hint').textContent=state.mapTarget==='work'?(state.home?'So sánh thu nhập tháng và ca làm, sau đó xem quãng đường đi làm từ chỗ ở hiện tại.':'Có thể chọn công việc trước; sau khi chọn chỗ ở sẽ tự động tính thời gian, khoảng cách và chi phí đi lại.'):'Kéo bản đồ để xem các quận khác; nhấp vào điểm màu hồng để xem tiền thuê và đặc điểm chỗ ở.';var api=openingMapApi();try{if(api&&api.setOpeningTarget)api.setOpeningTarget(state.mapTarget==='work'?'work':'home');if(state.mapTarget==='work'&&state.home&&state.job&&state.job.node&&api)api.plan(state.job.node)}catch(_){}renderMapInspector()}
function setJob(job){if(!job)return;state.job=job;var api=openingMapApi();try{if(api&&state.home&&job.node)api.plan(job.node);else if(api&&api.clearTrip)api.clearTrip()}catch(_){}updateWorkInspector();toast(job.monthly?'Đã chọn công việc: '+job.name:'Đã chọn tạm thời thất nghiệp')}
function oshiOf(name){return OSHI.find(function(o){return o.name===name})||null}
function oshiPicked(){return state.oshi.map(oshiOf).filter(Boolean)}
function renderOshi(){var grid=document.querySelector('#oshi-grid');if(!grid)return;
  grid.innerHTML=OSHI.map(function(o){var on=state.oshi.indexOf(o.name)>=0,full=false;
    /* 推满之后剩下的卡只压暗、不 disabled：点了会给一句"先取消一个"，
       比一个没有反馈的死按钮好懂，键盘和读屏也照样能到。 */
    return '<button type="button" class="oshi-card'+(on?' on':'')+(full?' full':'')+'" data-oshi="'+esc(o.name)+'" aria-pressed="'+(on?'true':'false')+'">'
      /* 固定主播封面，全部直接加载：loading="lazy" 在这里只会让下面几张
         在滚动到时才闪出来，省不下什么流量。 */
      +'<span class="oshi-art"><img src="'+esc(art('封面',o.cover))+'" alt="Ảnh '+esc(o.name)+'" loading="lazy" decoding="async"><i class="oshi-check" aria-hidden="true">✓</i></span>'
      +'<span class="oshi-body">'
      +'<span class="oshi-top"><b>'+esc(o.name)+'</b><i>'+esc(o.medal)+'</i></span>'
      +'<span class="oshi-slot">'+esc(o.slot)+'</span>'
      /* 粉丝数是存的，热度和大航海是推的——跟自定义主播同一条曲线 */
      +'<span class="oshi-scale">'+esc(scaleOfFollowers(o.followers).label)+' · Fan '+bigNum(o.followers)+' · Độ nóng '+bigNum(scaleOfFollowers(o.followers).base)+'</span>'
      +'<span class="oshi-blurb">'+esc(o.blurb)+'</span>'
      +'<span class="oshi-tags">'+o.tags.map(function(t){return '<em>'+esc(t)+'</em>'}).join('')+'</span>'
      +'<span class="oshi-gain">Hảo cảm +'+OSHI_FAVOR+' · Đã theo dõi · '+esc(o.medal)+' Lv.'+OSHI_BADGE+'</span>'
      +'</span></button>'}).join('');
  grid.querySelectorAll('[data-oshi]').forEach(function(btn){btn.onclick=function(){toggleOshi(btn.dataset.oshi)}});
  var count=document.querySelector('#oshi-count');if(count)count.textContent=state.oshi.length}
function toggleOshi(name){var i=state.oshi.indexOf(name),previous=state.oshi[0];
  if(i>=0){state.oshi=[];toast('Đã hủy chọn: '+name)}
  else{state.oshi=[name];toast((previous?'Đã đổi Oshi: ':'Đã chọn Oshi: ')+name+' / Hảo cảm +'+OSHI_FAVOR+' / '+oshiOf(name).medal+' Lv.'+OSHI_BADGE)}
  renderOshi()}
function selectedOpening(){var base=OPENINGS.find(function(o){return o.id===state.openingId})||OPENINGS[0];var detail=base.id==='custom'?(state.customOpeningText.trim()||'Không'):base.detail;return{id:base.id,title:base.title,summary:base.summary,detail:detail,custom:base.id==='custom'}}
function openingTargetCandidates(){var fixed=oshiPicked().map(function(o){return{name:o.name,source:'Streamer cố định'}}),customs=state.customs.map(normalizeCustom).filter(function(c){return c.name&&c.yaml}).map(function(c){return{name:c.name,source:'Streamer tùy chỉnh'}});if(fixed.length&&customs.length)return fixed.concat(customs);if(fixed.length)return fixed;if(customs.length)return customs;return OSHI.map(function(o){return{name:o.name,source:'Streamer ngẫu nhiên'}})}
function pickOpeningTarget(){var candidates=openingTargetCandidates(),signature=candidates.map(function(c){return c.source+':'+c.name}).join('|');if(state.openingTargetSignature!==signature||!state.openingTarget){state.openingTargetSignature=signature;state.openingTarget=candidates[Math.floor(Math.random()*candidates.length)]||null}return state.openingTarget}
function resolvedOpening(){var opening=selectedOpening();if(opening.id==='custom')return Object.assign({},opening,{targetStreamer:null});var target=pickOpeningTarget(),name=target?target.name:'Streamer ngẫu nhiên';return Object.assign({},opening,{detail:opening.detail.split('{{Streamer mục tiêu}}').join(name),targetStreamer:target})}
function renderOpenings(){var current=selectedOpening(),index=Math.max(0,OPENINGS.findIndex(function(o){return o.id===current.id})),prev=OPENINGS[(index-1+OPENINGS.length)%OPENINGS.length],next=OPENINGS[(index+1)%OPENINGS.length];$('#opening-index').textContent=String(index+1).padStart(2,'0');$('#opening-total').textContent=String(OPENINGS.length).padStart(2,'0');$('#opening-title').textContent=current.title;$('#opening-summary').textContent=current.summary;$('#opening-prev-title').textContent=prev.title;$('#opening-prev-summary').textContent=prev.summary;$('#opening-next-title').textContent=next.title;$('#opening-next-summary').textContent=next.summary;$('#opening-dots').innerHTML=OPENINGS.map(function(_,i){return '<i class="'+(i===index?'on':'')+'"></i>'}).join('');$('#opening-slide').classList.toggle('custom',current.custom);$('#opening-picker').classList.toggle('custom-active',current.custom);$('#custom-opening-box').classList.toggle('hidden',!current.custom);$('#custom-opening-count').textContent=state.customOpeningText.length}
function selectOpening(id){if(!OPENINGS.some(function(o){return o.id===id}))return;state.openingId=id;renderOpenings()}
function shiftOpening(offset){var index=OPENINGS.findIndex(function(o){return o.id===state.openingId});index=(index+offset+OPENINGS.length)%OPENINGS.length;selectOpening(OPENINGS[index].id)}
function customId(){return'custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)}
function cloneHome(home){return home?{id:home.id||'',name:home.name||'',fullName:home.fullName||'',district:home.district||'',tenure:home.tenure||'Thuê ở',note:home.note||'',rent:+home.rent||0,deposit:+home.deposit||0,cost:home.cost||''}:null}
function normalizeCustom(raw){raw=raw||{};var start=String(raw.hoursStart||''),end=String(raw.hoursEnd||'');if((!start||!end)&&raw.hours){var m=String(raw.hours).match(/^(\d{2}:\d{2})\s*-\s*(?:[^\d]*\s*)?(\d{2}:\d{2}|24:00)$/);if(m){start=m[1];end=m[2]==='24:00'?'00:00':m[2]}}var tier=clampTier(raw.tier??raw.scale?.tier??42),homeData=cloneHome(raw.homeData),assets=raw.assets||{},parts=raw.partArt||assets.parts||{},art=raw.art||{};if(!art.src&&assets.cover)art={type:'url',src:assets.cover};return{id:raw.id||customId(),name:String(raw.name||''),handle:String(raw.handle||''),age:+raw.age||23,home:String(raw.home||(homeData&&homeData.fullName)||''),homeData:homeData,categories:Array.isArray(raw.categories)&&raw.categories.length?raw.categories.slice():['Tán gẫu'],tier:tier,scale:streamScale(tier),hoursStart:start,hoursEnd:end,hours:String(raw.hours||''),tone:String(raw.tone||''),seed:String(raw.seed||''),medal:String(raw.medal||''),theme:normalizeStreamerTheme(raw.theme||raw['\u4ee3\u8868\u8272']),art:{type:String(art.type||''),src:String(art.src||'')},partArt:{oral:String(parts.oral||''),chest:String(parts.chest||''),vagina:String(parts.vagina||''),anus:String(parts.anus||'')},yaml:String(raw.yaml||raw.profileYaml||''),workshopAuthor:String(raw.workshopAuthor||raw.authorName||''),workshopItemId:String(raw.workshopItemId||raw.workshop?.itemId||''),updatedAt:+raw.updatedAt||0}}
function loadArchives(){try{var list=JSON.parse(localStorage.getItem(ARCHIVE_KEY)||'[]');state.archives=Array.isArray(list)?list.map(normalizeCustom).filter(x=>x.name&&x.yaml):[]}catch(_){state.archives=[]}}
function persistArchives(){try{localStorage.setItem(ARCHIVE_KEY,JSON.stringify(state.archives));return true}catch(_){toast('Lưu trữ Streamer thất bại');return false}}
function currentCustomData(){var d=streamerInput();return normalizeCustom(Object.assign({},d,{id:state.activeCustomId||customId(),art:state.art,partArt:state.partArt,yaml:state.yaml,homeData:cloneHome(state.streamerHome),workshopAuthor:state.workshopAuthor,workshopItemId:state.workshopItemId}))}
function renderCustomManager(){var roster=$('#custom-roster'),archive=$('#archive-list');$('#custom-count').textContent=state.customs.length;$('#archive-count').textContent=state.archives.length;$('#archive-panel').classList.toggle('hidden',!state.archiveOpen);$('#archive-toggle').classList.toggle('on',state.archiveOpen);roster.innerHTML=state.customs.length?state.customs.map(function(c){return'<div class="custom-roster-item'+(c.id===state.activeCustomId?' on':'')+'"><button type="button" data-custom-load="'+esc(c.id)+'"><i>'+esc((c.name||c.handle||'S').slice(0,1))+'</i><span><b>'+esc(c.name||'Chưa đặt tên')+'</b><small>'+esc(c.handle||'Chưa đặt nghệ danh')+'</small></span></button><button type="button" class="custom-export" data-custom-export="'+esc(c.id)+'" title="Xuất JSON">Xuất</button><button type="button" class="custom-remove" data-custom-remove="'+esc(c.id)+'" title="Xóa">\u00d7</button></div>'}).join(''):'<span class="custom-empty">Chưa thêm Streamer tùy chỉnh</span>';archive.innerHTML=state.archives.length?state.archives.map(function(c){return'<div class="archive-item"><button type="button" data-archive-use="'+esc(c.id)+'"><i>'+esc((c.name||c.handle||'S').slice(0,1))+'</i><span><b>'+esc(c.name)+'</b><small>'+esc(c.handle||'Chưa đặt nghệ danh')+' \u00b7 '+esc(c.hours||'Không cố định')+'</small></span></button><button type="button" class="archive-export" data-archive-export="'+esc(c.id)+'">Xuất</button><button type="button" class="archive-delete" data-archive-delete="'+esc(c.id)+'">Xóa</button></div>'}).join(''):'<span class="custom-empty">Chưa có bản lưu Streamer</span>'}
function clearCustomEditor(){state.activeCustomId=null;state.categories=new Set(['Tán gẫu']);state.yaml='';state.art={type:'',src:''};state.partArt={oral:'',chest:'',vagina:'',anus:''};state.streamerHome=null;state.streamerTheme='';state.workshopAuthor='';state.workshopItemId='';['#streamer-name','#streamer-handle','#streamer-tone','#streamer-seed','#streamer-medal','#art-url','#part-art-oral','#part-art-chest','#part-art-vagina','#part-art-anus'].forEach(id=>$(id).value='');$('#streamer-age').value='23';$('#streamer-tier').value='42';$('#streamer-home').textContent='Chọn chỗ ở từ bản đồ';$('#profile-yaml').value='';$('#art-file').value='';updateArt('','');setStreamerHours('','');renderTags();renderThemeChoices();renderScale();syncInputs();renderProfile();$('#generate-profile').textContent='Tạo hồ sơ thiết lập';setGenerateStatus('Kết quả và thông báo lỗi sẽ hiển thị tại đây');$('#save-custom').disabled=true;renderCustomManager()}
function loadCustomEditor(raw){var c=normalizeCustom(raw);state.activeCustomId=c.id;state.categories=new Set(c.categories);state.streamerHome=c.homeData||c.home?c.homeData||{fullName:c.home,name:c.home}:null;state.streamerTheme=c.theme;state.partArt=c.partArt;state.workshopAuthor=c.workshopAuthor;state.workshopItemId=c.workshopItemId;state.yaml=c.yaml;state.art=c.art;$('#streamer-name').value=c.name;$('#streamer-handle').value=c.handle;$('#streamer-age').value=c.age;$('#streamer-tier').value=c.tier;$('#streamer-tone').value=c.tone;$('#streamer-seed').value=c.seed;$('#streamer-medal').value=c.medal;$('#streamer-home').textContent=c.home||'Chọn chỗ ở từ bản đồ';$('#art-url').value=/^https?:/i.test(c.art.src)?c.art.src:'';['oral','chest','vagina','anus'].forEach(function(k){var el=$('#part-art-'+k);if(el)el.value=c.partArt[k]||''});$('#profile-yaml').value=c.yaml;renderTags();renderThemeChoices();renderScale();setStreamerHours(c.hoursStart,c.hoursEnd);updateArt(c.art.src,c.art.type);syncInputs();renderProfile();$('#generate-profile').textContent=c.yaml?'Tạo lại hồ sơ':'Tạo hồ sơ thiết lập';setGenerateStatus(c.yaml?'Đã tải, có thể tiếp tục chỉnh sửa':'Điền thông tin rồi tạo hồ sơ thiết lập');$('#save-custom').disabled=!c.yaml;renderCustomManager()}
function saveCurrentCustom(options){options=options||{};var d=currentCustomData();if(!d.name||!d.handle){if(!options.quiet)toast('Vui lòng điền họ tên và nghệ danh Streamer trước');return null}if(!d.yaml){if(!options.quiet)toast('Vui lòng tạo hồ sơ thiết lập trước');return null}if(OSHI.some(o=>o.name===d.name)){toast('Tên Streamer bị trùng với Streamer hiện có');return null}var duplicate=state.customs.find(c=>c.name===d.name&&c.id!==d.id);if(duplicate){toast('Trong lần mở đầu này đã có Streamer trùng tên');return null}var index=state.customs.findIndex(c=>c.id===d.id);if(index>=0)state.customs[index]=d;else state.customs.push(d);state.activeCustomId=d.id;$('#save-custom').disabled=false;renderCustomManager();if(!options.quiet)toast('Đã lưu: '+d.name);return d}
function newCustom(){if(state.yaml&&!saveCurrentCustom({quiet:true}))return;clearCustomEditor();toast('Có thể điền thông tin Streamer tiếp theo')}
function removeCustom(id){var c=state.customs.find(x=>x.id===id);state.customs=state.customs.filter(x=>x.id!==id);if(state.activeCustomId===id)clearCustomEditor();else renderCustomManager();if(c)toast('Đã xóa: '+c.name)}
function saveCurrentArchive(){var d=saveCurrentCustom({quiet:true});if(!d)return;var copy=normalizeCustom(d),artOmitted=false;if(/^data:image\//i.test(copy.art.src)&&copy.art.src.length*2>ARCHIVE_ART_MAX){copy.art={type:'',src:''};artOmitted=true}copy.updatedAt=Date.now();var index=state.archives.findIndex(c=>c.name===copy.name);if(index>=0){copy.id=state.archives[index].id;state.archives[index]=copy}else state.archives.push(copy);if(persistArchives()){renderCustomManager();toast(artOmitted?'Đã lưu hồ sơ (ảnh quá lớn nên không lưu kèm)':'Đã lưu hồ sơ Streamer')}}
function useArchive(id){var saved=state.archives.find(c=>c.id===id);if(!saved)return;var c=normalizeCustom(saved),existing=state.customs.find(x=>x.name===c.name);if(existing)c.id=existing.id;var index=state.customs.findIndex(x=>x.id===c.id);if(index>=0)state.customs[index]=c;else state.customs.push(c);loadCustomEditor(c);toast('Đã thêm vào lần mở đầu này: '+c.name)}
function deleteArchive(id){var c=state.archives.find(x=>x.id===id);state.archives=state.archives.filter(x=>x.id!==id);persistArchives();renderCustomManager();if(c)toast('Đã xóa bản lưu: '+c.name)}
function workshopPackageFromCustom(raw){var d=normalizeCustom(raw),cover=/^https?:\/\//i.test(d.art.src||'')?d.art.src:'';return{schema:'linjiang.workshop.package',schemaVersion:1,game:'linjiang',itemType:'streamer',title:d.name,summary:d.tone||'',tags:d.categories||[],coverUrl:cover,authorName:d.workshopAuthor||'',data:{name:d.name,handle:d.handle,age:d.age,home:d.home,homeData:d.homeData,categories:d.categories,tier:d.tier,hoursStart:d.hoursStart,hoursEnd:d.hoursEnd,hours:d.hours,tone:d.tone,seed:d.seed,medal:d.medal,theme:d.theme,profileYaml:d.yaml,assets:{cover:cover,parts:d.partArt||{oral:'',chest:'',vagina:'',anus:''}}}}}
function exportWorkshopPackage(raw){var pkg=workshopPackageFromCustom(raw),blob=new Blob([JSON.stringify(pkg,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=(pkg.title||'streamer')+'-streamer.json';a.click();setTimeout(function(){URL.revokeObjectURL(url)},1000)}
function closeWorkshopPicker(){var box=$('#workshop-picker');if(box)box.remove()}
function importWorkshopPackage(pkg){if(!pkg||pkg.itemType!=='streamer'||!pkg.data)throw new Error('Không phải gói Streamer hợp lệ');var d=pkg.data,c=normalizeCustom({id:customId(),name:d.name||pkg.title,handle:d.handle,age:d.age,home:d.home,homeData:d.homeData,categories:d.categories||pkg.tags,tier:d.tier,hoursStart:d.hoursStart,hoursEnd:d.hoursEnd,hours:d.hours,tone:d.tone,seed:d.seed,medal:d.medal,theme:d.theme,yaml:d.profileYaml||d.yaml,assets:d.assets,authorName:pkg.authorName,workshopAuthor:pkg.authorName,workshopItemId:pkg.workshop?.itemId});if(!c.name||!c.handle||!c.yaml)throw new Error('Dữ liệu gói Streamer không đầy đủ');var existing=state.customs.find(function(x){return x.name===c.name});if(existing)c.id=existing.id;var index=state.customs.findIndex(function(x){return x.id===c.id});if(index>=0)state.customs[index]=c;else state.customs.push(c);var archiveIndex=state.archives.findIndex(function(x){return x.name===c.name});if(archiveIndex>=0){c.id=state.archives[archiveIndex].id;state.archives[archiveIndex]=c}else state.archives.push(c);persistArchives();loadCustomEditor(c);closeWorkshopPicker();toast('Đã nhập từ Workshop: '+c.name)}
function workshopSourceList(){var out=[],seen=new Set();function add(c,id){if(!c||!c.name||!c.yaml)return;if(seen.has(c.id||id)||seen.has(c.name))return;seen.add(c.id||id);seen.add(c.name);out.push({id:id||c.id,label:(c.name||'Chưa đặt tên')+' / '+(c.handle||'Chưa đặt nghệ danh'),custom:c})}state.customs.forEach(function(c){add(c,'custom:'+c.id)});state.archives.forEach(function(c){add(c,'archive:'+c.id)});if(state.activeCustomId){var current=currentCustomData();if(current.name&&current.handle&&current.yaml)add(current,'current:'+current.id)}return out}
function workshopSourcePackage(id){var source=workshopSourceList().find(function(x){return x.id===id});return source?workshopPackageFromCustom(source.custom):null}
function openWorkshopPicker(){
  if($('#workshop-picker'))return;
  var box=document.createElement('div');
  box.id='workshop-picker';
  box.style.cssText='position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:22px;background:rgba(5,7,18,.78);backdrop-filter:blur(12px)';
  box.innerHTML='<div style="position:relative;width:min(1380px,100%);height:min(860px,calc(100vh - 44px));overflow:hidden;border:1px solid rgba(239,242,255,.38);border-radius:26px;background:#0d122a;box-shadow:0 35px 110px rgba(0,0,0,.56)"><button type="button" id="workshop-picker-close" aria-label="Đóng Workshop" title="Đóng" style="position:absolute;right:14px;top:14px;z-index:4;width:42px;height:42px;border:1px solid rgba(255,255,255,.42);border-radius:50%;background:rgba(7,11,29,.9);color:#fff;font-size:28px;line-height:1;cursor:pointer;box-shadow:0 8px 22px rgba(0,0,0,.35)">×</button><iframe title="Workshop Sáng Tạo Lâm Giang" style="position:relative;z-index:1;width:100%;height:100%;border:0;background:#0d122a" allow="clipboard-read; clipboard-write"></iframe></div>';
  document.body.appendChild(box);
  var frame=box.querySelector('iframe'),url=WORKSHOP_URL+(WORKSHOP_URL.includes('?')?'&':'?')+'mode=select-streamer';
  frame.src=url;
  box.querySelector('#workshop-picker-close').onclick=closeWorkshopPicker;
  box.addEventListener('click',function(e){if(e.target===box)closeWorkshopPicker()});
  function onMessage(e){
    var d=e.data;
    if(!frame||e.source!==frame.contentWindow||!d||d.channel!=='linjiang-workshop:select'||d.kind!=='event'||d.type!=='package')return;
    if(WORKSHOP_SELECT_ORIGIN&&e.origin!==WORKSHOP_SELECT_ORIGIN)return;
    try{importWorkshopPackage(d.package)}catch(error){toast(error?.message||String(error))}
  }
  async function onBridgeMessage(e){
    var d=e.data;
    if(!frame||e.source!==frame.contentWindow||e.origin!==WORKSHOP_SELECT_ORIGIN||!d||d.channel!=='linjiang-workshop:bridge'||d.kind!=='request')return;
    if(d.action!=='listPublishSources'&&d.action!=='exportPublishSource')return;
    var reply={channel:'linjiang-workshop:bridge',kind:'response',id:d.id};
    try{
      if(d.action==='listPublishSources'){
        var sources=d.payload?.itemType==='streamer'?workshopSourceList().map(function(x){return{id:x.id,label:x.label}}):[];
        frame.contentWindow.postMessage(Object.assign({},reply,{ok:true,payload:{sources:sources}}),e.origin);
      }else{
        var pkg=d.payload?.itemType==='streamer'?workshopSourcePackage(d.payload.sourceId):null;
        if(!pkg)throw new Error('??????????????');
        frame.contentWindow.postMessage(Object.assign({},reply,{ok:true,payload:{package:pkg}}),e.origin);
      }
    }catch(error){frame.contentWindow.postMessage(Object.assign({},reply,{ok:false,error:error?.message||String(error)}),e.origin)}
  }
  addEventListener('message',onMessage);
  addEventListener('message',onBridgeMessage);
  box._cleanup=function(){removeEventListener('message',onMessage);removeEventListener('message',onBridgeMessage)};
  var oldRemove=box.remove.bind(box);
  box.remove=function(){box._cleanup?.();oldRemove()}
}
function guardText(s){var extra=[];if(s.admirals)extra.push('Đề đốc '+s.admirals);if(s.governors)extra.push('Tổng đốc '+s.governors);
  return s.guards.toLocaleString('en-US')+(extra.length?'（+'+extra.join(' / ')+'）':'')}
function renderScale(){var s=streamScale($('#streamer-tier').value);
  $('#tier-value').textContent=s.tier;
  $('#tier-label').textContent=s.label;
  $('#tier-followers').textContent=bigNum(s.followers);
  $('#tier-base').textContent=bigNum(s.base);
  $('#tier-guards').textContent=guardText(s);
  updateBookPreview()}
function renderThemeChoices(){const box=$('#streamer-theme-options');if(!box)return;box.innerHTML=STREAMER_THEMES.map(t=>'<button type="button" class="theme-choice '+(state.streamerTheme===t.id?'on':'')+'" data-streamer-theme="'+t.id+'" aria-pressed="'+(state.streamerTheme===t.id?'true':'false')+'" title="'+t.source+'"><i style="--theme-swatch:'+t.swatch+'"></i><span>'+t.label+'</span></button>').join('')}
function setStreamerTheme(theme){state.streamerTheme=normalizeStreamerTheme(theme);renderThemeChoices()}
function renderTags(){$('#category-tags').innerHTML=CATEGORIES.map(c=>`<button type="button" class="tag ${state.categories.has(c)?'on':''}" data-cat="${c}">${c}</button>`).join('');document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{const c=b.dataset.cat;state.categories.has(c)?state.categories.delete(c):state.categories.add(c);if(!state.categories.size)state.categories.add('Tán gẫu');renderTags()})}
function setHome(home,target){if(!home)return;target=target||state.mapTarget;if(target==='player'){state.home=home;var api=openingMapApi();try{if(api){api.setState({district:home.district||'',player:{at:home.id},actors:[],events:[]});if(state.job&&state.job.node)api.plan(state.job.node);else if(api.clearTrip)api.clearTrip()}}catch(_){}renderMapInspector();setOpeningTarget('work');toast('Đã chọn chỗ ở ban đầu: '+home.name)}else if(target==='work'){setJob(home);return}else{state.streamerHome=home;document.querySelector('#streamer-home').textContent=home.fullName;closeMap()}}
function bindFrame(){var frame=document.querySelector('#map-iframe');try{var api=frame.contentWindow.PLATE_MAP;if(api){api.onPick(function(node){handleMapPick(node)});if(api.setOpeningTarget)api.setOpeningTarget('home');setTimeout(function(){try{if(api.fitAll)api.fitAll(0)}catch(_){}},80)}}catch(_){} }
function bindOpeningFrame(){var frame=document.querySelector('#opening-map-iframe');try{var api=frame.contentWindow.PLATE_MAP;if(api){api.onPick(function(node){handleMapPick(node)});if(api.setOpeningTarget)api.setOpeningTarget(state.mapTarget==='work'?'work':'home');if(state.home)api.setState({district:state.home.district||'',player:{at:state.home.id},actors:[],events:[]})}}catch(_){} }
function renderMapQuick(){var box=document.querySelector('#quick-homes');if(!box)return;box.innerHTML=HOMES.map(function(h,i){return '<button class="quick" data-home="'+i+'">'+esc(h.name)+' / '+esc(homeCostText(h))+'</button>'}).join('');box.querySelectorAll('[data-home]').forEach(function(btn){btn.onclick=function(){setHome(HOMES[+btn.dataset.home],'streamer')}})}
function closeMap(){var modal=document.querySelector('#map-modal');if(modal)modal.classList.remove('on')}
function syncMapFullscreen(){var card=document.querySelector('#opening-map-card'),btn=document.querySelector('#map-fullscreen');if(!card||!btn)return;var on=document.fullscreenElement===card;btn.textContent=on?'× Thoát toàn màn hình':'⛶ Toàn màn hình';card.classList.toggle('is-fullscreen',on);setTimeout(function(){var api=openingMapApi();try{if(api)api.fitAll(0)}catch(_){}},120)}
function toggleMapFullscreen(){var card=document.querySelector('#opening-map-card');if(!card)return;if(document.fullscreenElement===card){document.exitFullscreen()}else if(card.requestFullscreen){card.requestFullscreen()}}
function openMap(target){if(target==='player'||target==='work'){setOpeningTarget(target);go(2);return}state.mapTarget='streamer';document.querySelector('#map-title').textContent='Chọn chỗ ở cho Streamer tùy chỉnh';document.querySelector('#map-modal').classList.add('on');var quick=document.querySelector('#quick-homes');if(quick){quick.scrollTop=0;quick.scrollLeft=0}var frame=document.querySelector('#map-iframe');if(!frame.getAttribute('src'))frame.src=MAP_URL+(MAP_URL.includes('?')?'&':'?')+'target=home';var api=modalMapApi();try{if(api){if(api.setOpeningTarget)api.setOpeningTarget('home');setTimeout(function(){try{if(api.fitAll)api.fitAll(0)}catch(_){}},80)}}catch(_){} }
function handleMapPick(node){if(!node||!node.id)return;var knownHome=HOMES.find(function(h){return h.id===node.id});if(state.mapTarget==='player'){/* 用 district + name 现拼，不用 node.fullName：city_mapdata 的 fullName 尾巴常和 name
   不一样（"落霞区 · 文汇新村青年合租公寓" vs name "文汇新村合租公寓"），
   写成 fullName 会让 位置.区域 的子区域对不上节点名，地图和状态栏都定位不到。 */
if(knownHome){var hn=knownHome.name||node.name,hd=knownHome.district||node.district;return setHome(Object.assign({},knownHome,{name:hn,district:hd,fullName:hd+' · '+hn}))}toast('Vui lòng nhấp vào điểm nhà ở màu hồng trên bản đồ');return}if(state.mapTarget==='work'){var knownJob=JOBS.find(function(j){return j.node===node.id});if(knownJob)return setJob(knownJob);toast('Vui lòng chọn địa điểm làm việc có trong danh sách khởi đầu');return}if(state.mapTarget==='streamer'&&node.archetype==='living'){var sh=knownHome||{name:node.name,district:node.district,fullName:node.district+' · '+node.name};return setHome({id:node.id,name:sh.name,fullName:sh.fullName,district:sh.district,tenure:'Thuê ở',note:node.draw||'Địa điểm cư trú chọn từ bản đồ',rent:0,deposit:0,cost:'Chi phí được thiết lập sau khi mở đầu'},'streamer')}toast('Vui lòng chọn địa điểm thuộc loại nhà ở')}
function updateArt(src,type){state.art={src,type};const box=$('#art-preview'),img=$('#art-img');if(src){img.src=src;box.classList.add('has')}else{img.removeAttribute('src');box.classList.remove('has')}}
async function compactArtFile(file){
  const fallback=()=>new Promise(function(resolve,reject){const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=reject;r.readAsDataURL(file)});
  if(!file||!/^image\//i.test(file.type||''))return fallback();
  try{
    const bitmap=await createImageBitmap(file),maxW=900,maxH=1350,scale=Math.min(1,maxW/bitmap.width,maxH/bitmap.height),w=Math.max(1,Math.round(bitmap.width*scale)),h=Math.max(1,Math.round(bitmap.height*scale)),canvas=document.createElement('canvas');
    canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(bitmap,0,0,w,h);bitmap.close?.();
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.82));
    if(!blob)return fallback();
    return await new Promise(function(resolve,reject){const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=reject;r.readAsDataURL(blob)});
  }catch(_){return fallback()}
}
function streamerHoursValue(){const start=value('#streamer-hours-start'),end=value('#streamer-hours-end');if(!start||!end||start===end)return'';let shownEnd=end;if(end==='00:00'&&start!=='00:00')shownEnd='24:00';else if(end<start)shownEnd='Hôm sau '+end;return start+' - '+shownEnd}
function renderStreamerHours(){const start=value('#streamer-hours-start'),end=value('#streamer-hours-end'),picker=$('#streamer-hours-picker'),summary=$('#streamer-hours-summary');picker.classList.toggle('invalid',!!(start||end)&&(!start||!end||start===end));if(!start&&!end)summary.textContent='Nếu chưa đặt sẽ tính là không cố định';else if(!start||!end)summary.textContent='Vui lòng chọn đầy đủ giờ bắt đầu và kết thúc';else if(start===end)summary.textContent='Giờ bắt đầu và kết thúc không được trùng nhau';else summary.textContent=streamerHoursValue();document.querySelectorAll('#streamer-hours-presets button').forEach(b=>b.classList.toggle('on',b.dataset.start===start&&b.dataset.end===end))}
function setStreamerHours(start,end){$('#streamer-hours-start').value=start||'';$('#streamer-hours-end').value=end||'';renderStreamerHours()}
function validateStreamerHours(){const start=value('#streamer-hours-start'),end=value('#streamer-hours-end');if(!start&&!end)return true;if(!start||!end){renderStreamerHours();toast('Vui lòng chọn đầy đủ giờ bắt đầu và kết thúc phát sóng');return false}if(start===end){renderStreamerHours();toast('Giờ bắt đầu và kết thúc phát sóng không được trùng nhau');return false}return true}
function readPartArt(){var out={};['oral','chest','vagina','anus'].forEach(function(k){var el=$('#part-art-'+k),v=el?String(el.value||'').trim():'';if(v)out[k]=v});return out}
function streamerInput(){const tier=clampTier($('#streamer-tier').value),s=streamScale(tier);return{name:value('#streamer-name'),handle:value('#streamer-handle'),age:+value('#streamer-age')||23,home:state.streamerHome?.fullName||'',homeData:cloneHome(state.streamerHome),categories:[...state.categories],tier:tier,scale:s,hoursStart:value('#streamer-hours-start'),hoursEnd:value('#streamer-hours-end'),hours:streamerHoursValue(),tone:value('#streamer-tone'),seed:value('#streamer-seed'),medal:value('#streamer-medal'),theme:state.streamerTheme,partArt:readPartArt()}}
function renderProfile(){var on=!!state.yaml;$('#generated').classList.toggle('on',on);if(on){var box=$('#profile-yaml');if(box.value!==state.yaml)box.value=state.yaml;$('#generated-meta').textContent='Chi tiết nhân vật: '+(value('#streamer-name')||'—')}$('#save-custom').disabled=!on}
const PROFILE_GENERATION_TIMEOUT_MS=5*60*1000;
function setGenerateStatus(text,tone){const el=$('#generate-status');el.textContent=text||'';el.title=text||'';el.classList.remove('working','ok','error');if(tone)el.classList.add(tone)}
function formatGenerateElapsed(ms){const total=Math.max(0,Math.floor(ms/1000)),minutes=Math.floor(total/60),seconds=total%60;return String(minutes).padStart(2,'0')+':'+String(seconds).padStart(2,'0')}
function startGenerateClock(){const startedAt=Date.now(),limit=formatGenerateElapsed(PROFILE_GENERATION_TIMEOUT_MS);function paint(){setGenerateStatus('Đang gọi API tạo thiết lập… Đã chờ '+formatGenerateElapsed(Date.now()-startedAt)+' / Giới hạn '+limit,'working')}paint();const timer=setInterval(paint,1000);return()=>clearInterval(timer)}
function validateGeneratedProfileYaml(value){
  const yaml=String(value||'').trim();
  if(!yaml)throw new Error('Phản hồi báo thành công nhưng payload.yaml trống.');
  if(!yaml.startsWith('---'))throw new Error('Kiểm tra định dạng YAML thất bại: Nội dung phải bắt đầu bằng ---.');
  if(!/^(?:角色详情|Chi tiết nhân vật)\s*:/m.test(yaml))throw new Error('Kiểm tra định dạng YAML thất bại: Thiếu trường cấp cao nhất "Chi tiết nhân vật:".');
  if(/^\s*current_state\s*:/m.test(yaml))throw new Error('Kiểm tra nội dung thất bại: Hồ sơ nhân vật chứa trường trạng thái chạy current_state.');
  if(/(待补充|住处待定|稍后补充|TODO|TBD|以MVU动态数据为准)/i.test(yaml))throw new Error('Kiểm tra nội dung thất bại: Hồ sơ nhân vật vẫn chứa văn bản giữ chỗ.');
  return yaml
}
function requestHostGeneration(payload){
  if(window.parent===window)return Promise.reject(new Error('Trang hiện tại chưa kết nối với SillyTavern: Vui lòng mở trang này từ giao diện mở đầu trong SillyTavern.'));
  return new Promise((resolve,reject)=>{
    const id='profile-'+Date.now(),timeoutMs=PROFILE_GENERATION_TIMEOUT_MS;
    const timer=setTimeout(()=>{removeEventListener('message',on);reject(new Error('Yêu cầu tạo thiết lập quá thời gian: Không nhận được phản hồi sau '+Math.round(timeoutMs/1000)+' giây.'))},timeoutMs);
    function finish(){clearTimeout(timer);removeEventListener('message',on)}
    function on(e){
      const d=e.data;
      if(d?.channel!=='linjiang-opening'||d.kind!=='response'||d.id!==id)return;
      finish();
      if(!d.ok){reject(new Error(String(d.error||'Tạo thiết lập thất bại (không có thông báo lỗi chi tiết).')));return}
      try{resolve(validateGeneratedProfileYaml(d.payload?.yaml))}
      catch(error){reject(error)}
    }
    addEventListener('message',on);
    try{parent.postMessage({channel:'linjiang-opening',kind:'request',id,action:'generateStreamerProfile',payload},'*')}
    catch(error){finish();reject(new Error('Lỗi khi gửi yêu cầu generateStreamerProfile: '+(error?.message||String(error))))}
  })}
async function generateProfile(){const d=streamerInput();if(!d.name||!d.handle){toast('Vui lòng điền họ tên và nghệ danh Streamer trước');return}if(!validateStreamerHours())return;if(OSHI.some(o=>o.name===d.name)){toast('Tên Streamer bị trùng với Streamer hiện có');return}
  const btn=$('#generate-profile');btn.disabled=true;btn.textContent='Đang tạo…';const stopClock=startGenerateClock();
  try{
    const yaml=await requestHostGeneration(d);
    state.yaml=yaml;renderProfile();
    const saved=saveCurrentCustom({quiet:true});
    if(!saved)throw new Error('Đã tạo YAML nhưng lưu vào lần mở đầu này thất bại. Vui lòng kiểm tra lại tên nhân vật và nội dung hồ sơ.');
    setGenerateStatus('Tạo và phân tích thành công, đã thêm vào lần mở đầu này, có thể tiếp tục chỉnh sửa.','ok')
  }catch(error){
    const message=error?.message||String(error);
    console.error('[Mở đầu Lâm Giang] Tạo thiết lập Streamer tùy chỉnh thất bại',error);
    setGenerateStatus('Tạo thất bại: '+message,'error');
    toast('Tạo thiết lập thất bại, xem nguyên nhân chi tiết bên dưới nút bấm')
  }finally{
    stopClock();btn.disabled=false;btn.textContent=state.yaml?'Tạo lại':'Tạo hồ sơ thiết lập'
  }}
function updateBookPreview(){if(state.yaml)$('#generated-meta').textContent='Chi tiết nhân vật: '+(value('#streamer-name')||'—')}
function syncInputs(){const n=value('#streamer-name'),h=value('#streamer-handle');$('#art-name').textContent=n||'Streamer mới';$('#art-handle').textContent=(h||'STREAMER').toUpperCase();$('#art-monogram').textContent=(n||h||'S').slice(0,1);updateBookPreview()}
function validate(step){if(step===1&&!value('#player-name')){toast('Vui lòng điền họ tên hoặc tên thường gọi của bạn');return false}if(step===2&&!state.home){toast('Vui lòng chọn chỗ ở ban đầu trên bản đồ trước');return false}if(step===3&&state.openingId==='custom'&&!state.customOpeningText.trim()){toast('Vui lòng nhập nội dung mở đầu tùy chỉnh');return false}if(step===4){var touched=!!(value('#streamer-name')||value('#streamer-handle')||state.yaml);if(touched&&!state.yaml){toast('Streamer hiện tại chưa tạo hồ sơ thiết lập');return false}if(state.yaml&&!saveCurrentCustom({quiet:true}))return false}return true}
function renderConfirm(){var player=value('#player-name')||'Người chơi chưa đặt tên',handle=value('#player-handle')||'Chưa đặt biệt danh',job=state.job,home=state.home,customs=state.customs,opening=resolvedOpening(),detailPreview=opening.detail.length>120?opening.detail.slice(0,120)+'…':opening.detail,rows=[['Hồ sơ người chơi',player+' / '+state.gender+' / '+(value('#player-age')||24)+' tuổi'],['Biệt danh phát sóng',handle],['Chỗ ở ban đầu',home?home.fullName+' / '+homeCostText(home):'Chưa chọn'],['Công việc ban đầu',job.name],['Thu nhập & Giờ làm',job.monthly?'Lương tháng khoảng RMB '+job.monthly.toLocaleString()+' / '+job.hours:'Không có thu nhập cố định'],['Ước tính đi làm',job.monthly?jobCommuteText(job):'Không cần đi lại'],['Streamer yêu thích',oshiPicked().length?oshiPicked().map(function(o){return o.name}).join(', '):'Chưa chọn'],['Kịch bản mở đầu',opening.title+' / '+opening.summary]];if(opening.targetStreamer)rows.push(['Streamer mục tiêu',opening.targetStreamer.name]);rows.push(['Chi tiết mở đầu',detailPreview],['Streamer tùy chỉnh',customs.length?customs.map(function(c){return c.name+' ('+c.handle+')'}).join(', '):'Chưa thêm']);document.querySelector('#confirm-player').textContent=player;document.querySelector('#confirm-lines').innerHTML=rows.map(function(row){return'<div class="confirm-line"><span>'+row[0]+'</span><b>'+esc(row[1])+'</b></div>'}).join('')}
function skipStep(){return false}
function nextStep(from){return Math.min(LAST_STEP,from+1)}
function prevStep(from){return Math.max(1,from-1)}
function go(step,direct){if(step>state.step&&!validate(state.step))return;step=Math.max(1,Math.min(LAST_STEP,step));if(!direct&&skipStep(step))step=step>state.step?nextStep(step):prevStep(step);state.step=step;document.body.classList.toggle('life-map-step',state.step===2);document.body.classList.toggle('oshi-step',state.step===3);
  /* 02/03/04 三步内容最多，之前在 1440×900 上分别要多滚 524 / 676 / 948 px。
     这个类把外框（header / steps / footer / 留白）压薄、把主体改成横排，
     让这三步在常见 PC 屏幕上直接装下，具体规则见 opening.css 末尾那一节。 */
  document.body.classList.toggle('compact-step',state.step>=2);
  /* 05 跟 02 一样要"撑满一屏"：左边档案、右边世界书正文各自内部滚，
     而不是让整页跟着最长的那一列长。 */
  document.body.classList.toggle('confirm-step',state.step===LAST_STEP);
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',+p.dataset.panel===state.step));renderSteps();$('#prev').classList.toggle('hidden',state.step===1);$('#next').textContent=state.step===LAST_STEP?'Khởi hành':'Tiếp tục';if(state.step===LAST_STEP)renderConfirm();if(state.step===2){ensureOpeningMap();setTimeout(function(){var api=openingMapApi();try{if(api)api.fitAll(0)}catch(_){}},80)}scrollTo({top:0,behavior:'smooth'})}
function emptyExperience(){var item=()=>({'Số lần':0,'Có thể cập nhật':true});return{'Số lần kinh nghiệm gần đây':0,'Kinh nghiệm phơi bày':item(),'Kinh nghiệm tự sướng':item(),'Kinh nghiệm play bài tiết':item(),'Kinh nghiệm play đạo cụ':item(),'Kinh nghiệm play phục tùng':item(),'Kinh nghiệm lén lút':item(),'Kinh nghiệm ngoài trời':item(),'Kinh nghiệm play ngủ say':item(),'Kinh nghiệm play thôi miên':item(),'Kinh nghiệm nhập vai tình thú':item(),'Kinh nghiệm chụp lén':item(),'Kinh nghiệm phát sóng nhạy cảm':item()}}
function emptyDevelopment(){return{'Khoang miệng':{'Cấp bậc':0,'Tiến độ':0,'Có thể cập nhật':true,'Đánh giá':''},'Ngực':{'Cấp bậc':0,'Tiến độ':0,'Có thể cập nhật':true,'Đánh giá':''},'Tiểu huyệt':{'Cấp bậc':0,'Tiến độ':0,'Có thể cập nhật':true,'Đánh giá':''},'Hậu môn':{'Cấp bậc':0,'Tiến độ':0,'Có thể cập nhật':true,'Đánh giá':''}}}
function commuteForCurrentJob(){return state.job&&state.job.node?quoteFor(state.job):null}
function fanRecord(){return{'Theo dõi':true,'Tổng donate':OSHI_TIPPED,'Cấp huy hiệu':OSHI_BADGE,'Hạng huy hiệu':'Không','Số ngày huy hiệu còn lại':0,'Quản trị viên':false,'Đang bị cấm chat':false,'Số ngày cấm chat còn lại':0}}
function openingPayload(){var pname=value('#player-name'),job=state.job,commute=commuteForCurrentJob(),picked=oshiPicked(),customs=state.customs.map(normalizeCustom).filter(c=>c.name&&c.yaml),mvu={'Thông tin thế giới':{'Niên lịch':'01/04/2026','Thời gian':{'Đồng hồ':'08:00','Buổi':'Sáng'},'Vị trí':{'Khu vực':state.home.fullName,'Địa điểm':'Trong nhà'},'Gợi ý sự kiện':{}},'Thông tin người chơi':{'Hồ sơ':{'Họ tên':pname,'Giới tính':state.gender,'Tuổi':+value('#player-age')||24,'Biệt danh':value('#player-handle'),'Thiết lập bổ sung':value('#player-note')},'Thể lực':100,'Tiền bạc':20000,'Công việc':{'Nghề nghiệp':job.place?job.name:null,'Địa điểm':job.place,'Thu nhập ngày':job.daily,'Giờ làm việc':job.place?job.hours:null,'Hôm nay đã đi làm':false,'Đi làm':commute?{'Phương thức':'Ưu tiên xe buýt','Phút':commute.min,'Khoảng cách km':commute.km,'Chi phí':commute.yuan}:null},'Nơi ở':state.home.fullName,'Bất động sản':{[state.home.name]:{'Tên':state.home.name,'Khu vực':state.home.fullName,'Quyền sở hữu':state.home.tenure,'Mô tả':state.home.note,'Tiền thuê tháng':state.home.rent||0,'Tiền cọc':state.home.deposit||0,'Giá bán':state.home.sale||0,'Chi tiết chi phí':homeCostText(state.home)}},'Chi phí sinh hoạt cố định':Object.assign({'Sinh hoạt phí hàng ngày':{'Số tiền':60,'Chu kỳ thanh toán':'Mỗi ngày'}},state.home.rent?{['Tiền thuê '+state.home.name]:{'Số tiền':state.home.rent,'Chu kỳ thanh toán':'Mỗi tháng'}}:{}),'Thân phận fan':{}}};
  var girls={},rooms={},books=[],uis=[];
  picked.forEach(function(o){mvu['Thông tin người chơi']['Thân phận fan'][o.name]=fanRecord();girls[o.name]={'Ràng buộc':{'Độ hảo cảm':80+OSHI_FAVOR}}});
  customs.forEach(function(d){girls[d.name]={'Ràng buộc':{'Độ hảo cảm':CUSTOM_INITIAL_FAVOR,'Độ thuận tùng':0,'Tâm trạng':'Vui vẻ'},'Vị trí':{'Khu vực':d.home||'','Địa điểm':'Trong nhà','Độ riêng tư':5},'Kinh nghiệm tình dục':emptyExperience(),'Độ khai phá':emptyDevelopment(),'Sinh lý':{'Độ ham muốn':0,'Thể lực':100,'Buồn tiểu':20,'Trạng thái bất thường':{}},'Phát sóng':{'Đang phát sóng':false,'Tiêu đề':'','Độ nóng':0,'Số người hâm mộ':d.scale.followers}};rooms[d.name]={'Tùy chỉnh':true,'Màu đại diện':d.theme||'','Nghệ danh Streamer':d.handle||'','Ảnh bìa':d.art&&d.art.type==='url'&&/^https?:\/\//i.test(d.art.src||'')?d.art.src:'','Loại ảnh bìa':d.art&&d.art.type==='url'?'url':'','Ảnh bộ phận':Object.keys(d.partArt||{}).reduce(function(out,k){if(/^https?:\/\//i.test(d.partArt[k]||''))out[{oral:'Khoang miệng',chest:'Ngực',vagina:'Tiểu huyệt',anus:'Hậu môn'}[k]]=d.partArt[k];return out},{}),'Lịch phát sóng':d.hours||'Không cố định','Tên huy hiệu':d.medal||d.handle||d.name,'Mốc quy mô':d.scale.tier,'Độ nóng nền':d.scale.base,'Độ nóng phiên này':0,'Bảng năng lượng cao':[],'Đại hàng hải':{'Hạm trưởng':d.scale.guards,'Đề đốc':d.scale.admirals,'Tổng đốc':d.scale.governors,'Danh sách':[]}};books.push({sourceName:d.name,sourceKey:d.workshopItemId||d.name,entryName:d.workshopAuthor?'🧩mod Thiết lập Streamer｜'+d.name+'｜'+d.workshopAuthor:d.name,name:d.name,keys:[d.name,d.handle].filter(Boolean),content:String(d.yaml).trim()});uis.push({name:d.name,handle:d.handle,theme:d.theme,art:d.art,partArt:d.partArt,workshopAuthor:d.workshopAuthor})});
  if(Object.keys(girls).length)mvu['Thông tin đối tượng']=girls;
  if(Object.keys(rooms).length)mvu['Cấu hình hệ thống']={'Phòng phát sóng':rooms};
  return{mvu:mvu,oshi:picked.map(function(o){return{name:o.name,medal:o.medal,badge:OSHI_BADGE,favor:80+OSHI_FAVOR,tipped:OSHI_TIPPED}}),opening:resolvedOpening(),worldbook:books[books.length-1]||null,worldbooks:books,ui:uis[0]||null,uis:uis}}
function playerOriginConfig(payload){var info=payload.mvu['Thông tin người chơi'],world=payload.mvu['Thông tin thế giới'];return{'Hồ sơ người chơi':info['Hồ sơ'],'Ngày khởi đầu':world['Niên lịch'],'Thời gian khởi đầu':world['Thời gian'],'Vị trí khởi đầu':world['Vị trí'],'Thể lực ban đầu':info['Thể lực'],'Tiền bạc ban đầu':info['Tiền bạc'],'Nơi ở ban đầu':info['Nơi ở'],'Bất động sản ban đầu':info['Bất động sản'],'Công việc ban đầu':info['Công việc'],'Streamer yêu thích':payload.oshi.map(function(o){return o.name}),'Streamer tùy chỉnh':payload.uis.map(function(u){return{name:u.name,'Nghệ danh':u.handle}})}}
function buildStartMessage(payload){var opening=payload.opening,target=opening.targetStreamer?opening.targetStreamer.name:'Chưa chỉ định';return[
'Vui lòng dựa vào cấu hình xuất thân của người chơi và nội dung mở đầu dưới đây để hoàn tất khởi tạo và bắt đầu câu chuyện tại Thành phố Lâm Giang.',
'```arduino',
'【Cấu hình xuất thân người chơi】',
JSON.stringify(playerOriginConfig(payload),null,2),
'```',
'',
'【Kịch bản mở đầu đã chọn】',
'Tiêu đề: '+opening.title,
'Tóm tắt: '+opening.summary,
'Streamer mục tiêu: '+target,
'Nội dung chi tiết:',
'',
opening.detail,
'',
'【YÊU CẦU ĐỊNH DẠNG BẮT BUỘC】',
'- BẮT BUỘC viết toàn bộ nội dung diễn biến câu chuyện / chính văn mở đầu nằm bên trong cặp thẻ <now_plot>...</now_plot> (tối thiểu 1500 chữ). Tuyệt đối không được bỏ sót cặp thẻ <now_plot>...</now_plot>!',
'- Khối cập nhật biến số <update>...</update> bắt buộc phải đặt ở CUỐI CÙNG, sau khi đã viết xong và đóng thẻ </now_plot>. Tuyệt đối KHÔNG ĐƯỢC chỉ xuất khối <update> mà bỏ qua phần chính văn <now_plot>!',
'- Vui lòng triển khai cốt truyện sống động đến thời điểm cần người chơi phản hồi.'
].join('\n')}
function sendMessageToChat(message){try{var doc=document;if(window.parent&&window.parent!==window){try{doc=window.parent.document}catch(_){}}var area=doc.getElementById('send_textarea'),button=doc.getElementById('send_but');if(!area||!button)return false;area.value=message;area.dispatchEvent(new Event('input',{bubbles:true}));area.dispatchEvent(new Event('change',{bubbles:true}));button.click();return true}catch(_){return false}}
function finish(){const payload=openingPayload();payload.startMessage=buildStartMessage(payload);if(window.parent!==window)parent.postMessage({channel:'linjiang-opening',kind:'event',type:'commitPreview',payload},'*');else sendMessageToChat(payload.startMessage);navigator.clipboard?.writeText(payload.startMessage).catch(()=>{});console.log('[Cấu hình mở đầu Lâm Giang]',payload);toast('Đã gửi cấu hình mở đầu, cuộc sống tại Lâm Giang sắp bắt đầu')}
loadArchives();renderSteps();renderMapInspector();renderOshi();renderOpenings();clearCustomEditor();go(1)
$('#gender-segment').onclick=e=>{const b=e.target.closest('button');if(!b)return;state.gender=b.dataset.value;$('#gender-segment').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))};
document.querySelectorAll('[data-open-map]').forEach(b=>b.onclick=()=>openMap(b.dataset.openMap));
$('#map-close').onclick=closeMap;$('#map-modal').onclick=e=>{if(e.target===$('#map-modal'))closeMap()};
renderMapQuick();
$('#map-iframe').addEventListener('load',()=>setTimeout(bindFrame,350));document.querySelector('#map-home-mode').onclick=()=>setOpeningTarget('player');document.querySelector('#map-work-mode').onclick=()=>setOpeningTarget('work');document.querySelector('#change-home').onclick=()=>setOpeningTarget('player');document.querySelector('#change-work').onclick=()=>setOpeningTarget('work');document.querySelector('#map-fullscreen').onclick=toggleMapFullscreen;document.addEventListener('fullscreenchange',syncMapFullscreen);
addEventListener('message',e=>{const d=e.data;if(d?.channel==='linjiang-map'&&d.type==='pick')handleMapPick(d.payload)});
$('#opening-prev').onclick=$('#opening-prev-preview').onclick=()=>shiftOpening(-1);
$('#opening-next').onclick=$('#opening-next-preview').onclick=()=>shiftOpening(1);
$('#custom-opening-text').addEventListener('input',e=>{state.customOpeningText=e.target.value;renderOpenings()});
$('#streamer-tier').oninput=renderScale;
$('#streamer-theme-options').onclick=e=>{const b=e.target.closest('[data-streamer-theme]');if(b)setStreamerTheme(b.dataset.streamerTheme)};
$('#streamer-hours-presets').onclick=e=>{const b=e.target.closest('button');if(!b)return;setStreamerHours(b.dataset.start,b.dataset.end)};
['#streamer-hours-start','#streamer-hours-end'].forEach(id=>$(id).addEventListener('input',renderStreamerHours));
$('#new-custom').onclick=newCustom;
$('#archive-toggle').onclick=()=>{state.archiveOpen=!state.archiveOpen;renderCustomManager()};$('#workshop-select').onclick=openWorkshopPicker;
$('#archive-save').onclick=saveCurrentArchive;
$('#custom-roster').onclick=e=>{const remove=e.target.closest('[data-custom-remove]'),load=e.target.closest('[data-custom-load]'),exporter=e.target.closest('[data-custom-export]');if(exporter){var c=state.customs.find(x=>x.id===exporter.dataset.customExport);if(c)exportWorkshopPackage(c);return}if(remove)return removeCustom(remove.dataset.customRemove);if(load){if(state.yaml&&!saveCurrentCustom({quiet:true}))return;var c=state.customs.find(x=>x.id===load.dataset.customLoad);if(c)loadCustomEditor(c)}};
$('#archive-list').onclick=e=>{const del=e.target.closest('[data-archive-delete]'),use=e.target.closest('[data-archive-use]'),exporter=e.target.closest('[data-archive-export]');if(del)return deleteArchive(del.dataset.archiveDelete);if(use)return useArchive(use.dataset.archiveUse);if(exporter){var saved=state.archives.find(x=>x.id===exporter.dataset.archiveExport);if(saved)exportWorkshopPackage(saved)}};
$('#profile-yaml').addEventListener('input',e=>{state.yaml=e.target.value;$('#save-custom').disabled=!state.yaml;setGenerateStatus('Nội dung đã chỉnh sửa, nhấn lưu để áp dụng');updateBookPreview()});
['#streamer-name','#streamer-handle'].forEach(id=>$(id).addEventListener('input',syncInputs));['#part-art-oral','#part-art-chest','#part-art-vagina','#part-art-anus'].forEach(id=>$(id).addEventListener('input',function(){state.partArt=readPartArt()}));
$('#apply-art-url').onclick=()=>{const u=value('#art-url');if(!u)return toast('Vui lòng điền link ảnh minh họa trước');updateArt(u,'url')};
$('#art-file').onchange=async e=>{const f=e.target.files?.[0];if(!f)return;setGenerateStatus('Đang nén ảnh minh họa…','working');try{updateArt(await compactArtFile(f),'upload-preview');setGenerateStatus('Đã xử lý ảnh minh họa và lưu trong trình duyệt','ok')}catch(_){setGenerateStatus('Đọc ảnh minh họa thất bại','error')}};
$('#generate-profile').onclick=generateProfile;$('#save-custom').onclick=()=>saveCurrentCustom();$('#prev').onclick=()=>go(prevStep(state.step));$('#next').onclick=()=>state.step===LAST_STEP?finish():go(nextStep(state.step));
if(window.parent!==window)parent.postMessage({channel:'linjiang-opening',kind:'event',type:'ready'},'*');
setTimeout(()=>window.__loadLinjiangOpeningFonts?.(),0);
})();
