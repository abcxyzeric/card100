/* 临江拍卖行 / original gameplay data. Existing project streamer identities only. */
(function (root) {
'use strict';
const hosts = [
 ['塔菲','Taffy','Từng Bước Phá Án','Vòng 1, 2, 3 mỗi vòng hé lộ ngẫu nhiên 1 món có phẩm cấp chưa biết.','ladder','#e5b8be','Bản cân bằng'],
 ['红蔷薇','Hồng Tường Vi','Tụ Quang Truy Vết','Vòng 1 hé lộ ngẫu nhiên đường nét 2 món, vòng 2 và 4 lần lượt giám định hoàn chỉnh 2 món này.','track','#d4787d','Bản cân bằng'],
 ['东雪莲','Azuma Seren','Chi Tiết Phân Sắc','Vòng 1 hé lộ ngẫu nhiên danh mục 2 món và đường nét 1 món; vòng 2 hé lộ phẩm cấp món đó, vòng 3 giám định hoàn chỉnh món còn lại.','common','#a6bdd6','Bản cân bằng'],
 ['沙花叉','Sakamata','Phân Loại Tầm Bảo','Vòng 1 hé lộ ngẫu nhiên đường nét và danh mục 2 món; vòng 3, 4 lần lượt hé lộ phẩm cấp 2 món này.','category-wave','#afafb8','Bản cân bằng'],
 ['时雨羽衣','Shigure Ui','Sắc Màu Trải Rộng','Vòng 1 hé lộ ngẫu nhiên đường nét và phẩm cấp 1 món; vòng 3, 5 mỗi vòng hé lộ ngẫu nhiên 1 món có phẩm cấp chưa biết.','colour-wave','#bfd2ac','Bản cân bằng'],
 ['斯黛拉','Stella','Ánh Sao Màn Cuối','Vòng 1 hé lộ ngẫu nhiên đường nét 2 món chưa biết, vòng 3 hé lộ ngẫu nhiên 1 món phẩm cấp chưa biết, vòng 5 hé lộ thêm tối đa 3 món phẩm cấp chưa biết.','finale','#c3b3d6','Bản cân bằng'],
 ['璃亚梦','Riamu','Lát Cắt Vận Mệnh','Vòng 1, 3, 5 mỗi vòng kích hoạt ngẫu nhiên 1 hiệu ứng: giám định 1 món, hé lộ phẩm cấp 1 món, hé lộ đường nét và phẩm cấp 1 món, hoặc hé lộ đường nét và danh mục 2 món.','fortune','#eba8c6','Bản cân bằng'],
 ['兔子洞初音','Miku Rabbit Hole','Tuần Hoàn Tiêu Điểm','Vòng 1 hé lộ ngẫu nhiên đường nét và danh mục 1 món, vòng 2 hé lộ phẩm cấp món đó; vòng 4 hé lộ ngẫu nhiên thêm tối đa 2 món cả đường nét lẫn phẩm cấp.','apex','#95ccc8','Bản cân bằng'],
 ['神乐七奈','Kagura Nana','Kiểm Tra Trân Phẩm','Vòng 1 rút ngẫu nhiên 2 món, chỉ biết tổng số lượng món Sử Thi và Truyền Thuyết trong đó; vòng 3 hé lộ phẩm cấp 2 món này.','rare-count','#a3bce6','Bản cân bằng'],
 ['鲸鱼娘','Bé Cá Voi','Vọng Âm Định Giá','Vòng 1 chọn ngẫu nhiên 2 món, chỉ hé lộ đường nét 1 món; vòng 2 biết tổng giá trị của 2 món này.','analyst','#8eadd5','Bản cân bằng'],
 ['牛肉','Neuro','Ưu Tiên Kiện Lớn','Vòng 1 hé lộ đường nét món chiếm nhiều ô nhất, vòng 2 hé lộ phẩm cấp món đó, vòng 4 giám định hoàn chỉnh; vòng 3 hé lộ ngẫu nhiên thêm 1 món có phẩm cấp chưa biết.','large-track','#b4cabe','Bản cân bằng'],
].map(([file,name,skill,desc,effect,color,reference],id)=>({id,name,file,skill,desc,effect,color,reference,portrait:`assets/auction/hosts/${file}.webp`,avatar:`assets/auction/hosts/${file}-avatar.webp`}));
const qualities=[{"name": "Phổ thông", "color": "#adb7bf", "label": "C"}, {"name": "Tinh xảo", "color": "#8ccb9a", "label": "B"}, {"name": "Hiếm", "color": "#80bce8", "label": "A"}, {"name": "Sử thi", "color": "#bb9bec", "label": "S"}, {"name": "Truyền thuyết", "color": "#ffbc61", "label": "SS"}];
const series=[{"id": "signal", "name": "Sóng Điện Thất Lạc", "category": "Điện tử"}, {"id": "playroom", "name": "Phòng Chiếu Tuổi Thơ", "category": "Đồ chơi"}, {"id": "encore", "name": "Encore Đêm Khuya", "category": "Âm nhạc"}, {"id": "atelier", "name": "Tiểu Vũ Trụ Thủ Công", "category": "Thủ công"}, {"id": "roadtrip", "name": "Dạo Quanh Đô Thị", "category": "Mô hình"}, {"id": "pantry", "name": "Trạm Tiếp Ngọt", "category": "Mô hình kẹo"}, {"id": "archive", "name": "Ký Ức Thành Cũ", "category": "Cổ vật"}, {"id": "anomaly", "name": "Cục Quan Sát Dị Thường", "category": "Kỳ vật"}];
const catalog=[
 {
  "id": 0,
  "key": "signal-01",
  "name": "Đài radio bỏ túi",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/signal-01.webp"
 },
 {
  "id": 1,
  "key": "signal-02",
  "name": "Hộp đĩa mềm",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/signal-02.webp"
 },
 {
  "id": 2,
  "key": "signal-03",
  "name": "Máy nhắn tin cổ",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/signal-03.webp"
 },
 {
  "id": 3,
  "key": "signal-04",
  "name": "Máy ảnh phim",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/signal-04.webp"
 },
 {
  "id": 4,
  "key": "signal-05",
  "name": "Máy chơi game bạc hà",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/signal-05.webp"
 },
 {
  "id": 5,
  "key": "signal-06",
  "name": "Máy nghe nhạc cassette Walkman",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 1,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/signal-06.webp"
 },
 {
  "id": 6,
  "key": "signal-07",
  "name": "Tai nghe tai mèo",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/signal-07.webp"
 },
 {
  "id": 7,
  "key": "signal-08",
  "name": "Tivi mini cổ",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/signal-08.webp"
 },
 {
  "id": 8,
  "key": "signal-09",
  "name": "Máy đánh chữ cơ",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/signal-09.webp"
 },
 {
  "id": 9,
  "key": "signal-10",
  "name": "Máy liên lạc liên sao",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/signal-10.webp"
 },
 {
  "id": 10,
  "key": "signal-11",
  "name": "Máy chơi game cầm tay trong suốt",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/signal-11.webp"
 },
 {
  "id": 11,
  "key": "signal-12",
  "name": "Thiết bị đầu cuối Số 0",
  "series": "signal",
  "seriesName": "Sóng Điện Thất Lạc",
  "category": "Điện tử",
  "w": 2,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/signal-12.webp"
 },
 {
  "id": 12,
  "key": "playroom-01",
  "name": "Vịt con vàng",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/playroom-01.webp"
 },
 {
  "id": 13,
  "key": "playroom-02",
  "name": "Con quay Yo-yo",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/playroom-02.webp"
 },
 {
  "id": 14,
  "key": "playroom-03",
  "name": "Nhà gỗ xếp hình",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 2,
  "h": 2,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/playroom-03.webp"
 },
 {
  "id": 15,
  "key": "playroom-04",
  "name": "Robot dây cót",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/playroom-04.webp"
 },
 {
  "id": 16,
  "key": "playroom-05",
  "name": "Khủng long thùng carton",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/playroom-05.webp"
 },
 {
  "id": 17,
  "key": "playroom-06",
  "name": "Con quay vì sao",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 1,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/playroom-06.webp"
 },
 {
  "id": 18,
  "key": "playroom-07",
  "name": "Gấu phi hành gia",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/playroom-07.webp"
 },
 {
  "id": 19,
  "key": "playroom-08",
  "name": "Thùng máy arcade mini",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/playroom-08.webp"
 },
 {
  "id": 20,
  "key": "playroom-09",
  "name": "Súng nước cá voi",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/playroom-09.webp"
 },
 {
  "id": 21,
  "key": "playroom-10",
  "name": "Ngựa gỗ trăng giấy",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 2,
  "h": 2,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/playroom-10.webp"
 },
 {
  "id": 22,
  "key": "playroom-11",
  "name": "Chim cánh cụt cơ khí",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/playroom-11.webp"
 },
 {
  "id": 23,
  "key": "playroom-12",
  "name": "Kỳ lân cầu vồng",
  "series": "playroom",
  "seriesName": "Phòng Chiếu Tuổi Thơ",
  "category": "Đồ chơi",
  "w": 2,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/playroom-12.webp"
 },
 {
  "id": 24,
  "key": "encore-01",
  "name": "Đĩa hát tim cam",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 2,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/encore-01.webp"
 },
 {
  "id": 25,
  "key": "encore-02",
  "name": "Chuông lắc anh đào",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/encore-02.webp"
 },
 {
  "id": 26,
  "key": "encore-03",
  "name": "Kèn harmonica bỏ túi",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/encore-03.webp"
 },
 {
  "id": 27,
  "key": "encore-04",
  "name": "Máy đếm nhịp kèn đồng",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/encore-04.webp"
 },
 {
  "id": 28,
  "key": "encore-05",
  "name": "Micro bạc hà",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/encore-05.webp"
 },
 {
  "id": 29,
  "key": "encore-06",
  "name": "Đàn guitar hoàng hôn",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/encore-06.webp"
 },
 {
  "id": 30,
  "key": "encore-07",
  "name": "Bàn mixer tổng hợp tím",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/encore-07.webp"
 },
 {
  "id": 31,
  "key": "encore-08",
  "name": "Hộp nhạc mây trời",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/encore-08.webp"
 },
 {
  "id": 32,
  "key": "encore-09",
  "name": "Máy đánh trống neon",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/encore-09.webp"
 },
 {
  "id": 33,
  "key": "encore-10",
  "name": "Máy hát đĩa cổ quỹ đạo sao",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 2,
  "h": 2,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/encore-10.webp"
 },
 {
  "id": 34,
  "key": "encore-11",
  "name": "Cây vĩ cầm ánh trăng",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/encore-11.webp"
 },
 {
  "id": 35,
  "key": "encore-12",
  "name": "Đàn hạc thiên sứ",
  "series": "encore",
  "seriesName": "Encore Đêm Khuya",
  "category": "Âm nhạc",
  "w": 1,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/encore-12.webp"
 },
 {
  "id": 36,
  "key": "atelier-01",
  "name": "Tách trà men trắng",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/atelier-01.webp"
 },
 {
  "id": 37,
  "key": "atelier-02",
  "name": "Chuông gió",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 2,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/atelier-02.webp"
 },
 {
  "id": 38,
  "key": "atelier-03",
  "name": "Hạc giấy thủ công",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/atelier-03.webp"
 },
 {
  "id": 39,
  "key": "atelier-04",
  "name": "Bình hoa thanh sứ",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/atelier-04.webp"
 },
 {
  "id": 40,
  "key": "atelier-05",
  "name": "Tượng gốm mèo vàng",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 1,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/atelier-05.webp"
 },
 {
  "id": 41,
  "key": "atelier-06",
  "name": "Đèn kính màu",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/atelier-06.webp"
 },
 {
  "id": 42,
  "key": "atelier-07",
  "name": "Quả cầu tuyết pha lê",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/atelier-07.webp"
 },
 {
  "id": 43,
  "key": "atelier-08",
  "name": "Mặt nạ hồ ly",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/atelier-08.webp"
 },
 {
  "id": 44,
  "key": "atelier-09",
  "name": "Tượng cá chép phong thủy",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/atelier-09.webp"
 },
 {
  "id": 45,
  "key": "atelier-10",
  "name": "Quạt xếp chỉ vàng",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 1,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/atelier-10.webp"
 },
 {
  "id": 46,
  "key": "atelier-11",
  "name": "Hoa sen lưu ly",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/atelier-11.webp"
 },
 {
  "id": 47,
  "key": "atelier-12",
  "name": "Đĩa gốm đồng hồ mặt trời",
  "series": "atelier",
  "seriesName": "Tiểu Vũ Trụ Thủ Công",
  "category": "Thủ công",
  "w": 2,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/atelier-12.webp"
 },
 {
  "id": 48,
  "key": "roadtrip-01",
  "name": "Ván trượt đỏ",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/roadtrip-01.webp"
 },
 {
  "id": 49,
  "key": "roadtrip-02",
  "name": "Xe taxi vàng",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/roadtrip-02.webp"
 },
 {
  "id": 50,
  "key": "roadtrip-03",
  "name": "Xe buýt hai tầng",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/roadtrip-03.webp"
 },
 {
  "id": 51,
  "key": "roadtrip-04",
  "name": "Xe máy màu kem",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/roadtrip-04.webp"
 },
 {
  "id": 52,
  "key": "roadtrip-05",
  "name": "Xe thể thao cổ điển",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/roadtrip-05.webp"
 },
 {
  "id": 53,
  "key": "roadtrip-06",
  "name": "Xe điện xanh lam",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/roadtrip-06.webp"
 },
 {
  "id": 54,
  "key": "roadtrip-07",
  "name": "Mô hình trực thăng",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/roadtrip-07.webp"
 },
 {
  "id": 55,
  "key": "roadtrip-08",
  "name": "Xe địa hình mặt trăng",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/roadtrip-08.webp"
 },
 {
  "id": 56,
  "key": "roadtrip-09",
  "name": "Thuyền buồm trong chai",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/roadtrip-09.webp"
 },
 {
  "id": 57,
  "key": "roadtrip-10",
  "name": "Phi thuyền cực quang",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/roadtrip-10.webp"
 },
 {
  "id": 58,
  "key": "roadtrip-11",
  "name": "Tàu ngầm biển sâu",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 1,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/roadtrip-11.webp"
 },
 {
  "id": 59,
  "key": "roadtrip-12",
  "name": "Đoàn tàu vòm sao",
  "series": "roadtrip",
  "seriesName": "Dạo Quanh Đô Thị",
  "category": "Mô hình",
  "w": 2,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/roadtrip-12.webp"
 },
 {
  "id": 60,
  "key": "pantry-01",
  "name": "Soda dâu tây",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/pantry-01.webp"
 },
 {
  "id": 61,
  "key": "pantry-02",
  "name": "Mứt đào ngọt",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/pantry-02.webp"
 },
 {
  "id": 62,
  "key": "pantry-03",
  "name": "Kẹo bông gòn mây trắng",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/pantry-03.webp"
 },
 {
  "id": 63,
  "key": "pantry-04",
  "name": "Hũ bánh quy chân mèo",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/pantry-04.webp"
 },
 {
  "id": 64,
  "key": "pantry-05",
  "name": "Hộp kẹo chanh",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 2,
  "h": 1,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/pantry-05.webp"
 },
 {
  "id": 65,
  "key": "pantry-06",
  "name": "Cơm hộp gấu trúc",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 2,
  "h": 1,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/pantry-06.webp"
 },
 {
  "id": 66,
  "key": "pantry-07",
  "name": "Hũ trà hoa anh đào",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/pantry-07.webp"
 },
 {
  "id": 67,
  "key": "pantry-08",
  "name": "Kẹo mút tinh cầu",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/pantry-08.webp"
 },
 {
  "id": 68,
  "key": "pantry-09",
  "name": "Hộp bánh trung thu thỏ ngọc",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/pantry-09.webp"
 },
 {
  "id": 69,
  "key": "pantry-10",
  "name": "Hũ mật ong pha lê",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/pantry-10.webp"
 },
 {
  "id": 70,
  "key": "pantry-11",
  "name": "Bánh kem cầu vồng",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 2,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/pantry-11.webp"
 },
 {
  "id": 71,
  "key": "pantry-12",
  "name": "Ly cacao dát vàng",
  "series": "pantry",
  "seriesName": "Trạm Tiếp Ngọt",
  "category": "Mô hình kẹo",
  "w": 1,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/pantry-12.webp"
 },
 {
  "id": 72,
  "key": "archive-01",
  "name": "Túi da người đưa thư",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 2,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/archive-01.webp"
 },
 {
  "id": 73,
  "key": "archive-02",
  "name": "Chìa khóa đồng cổ",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 1,
  "h": 2,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/archive-02.webp"
 },
 {
  "id": 74,
  "key": "archive-03",
  "name": "Biển tên phố cũ",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/archive-03.webp"
 },
 {
  "id": 75,
  "key": "archive-04",
  "name": "Đồng hồ quả quýt bằng đồng",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 1,
  "h": 1,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/archive-04.webp"
 },
 {
  "id": 76,
  "key": "archive-05",
  "name": "Vali du lịch bằng da",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/archive-05.webp"
 },
 {
  "id": 77,
  "key": "archive-06",
  "name": "Đèn bão dầu hỏa",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/archive-06.webp"
 },
 {
  "id": 78,
  "key": "archive-07",
  "name": "Kính viễn vọng gấp gọn",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/archive-07.webp"
 },
 {
  "id": 79,
  "key": "archive-08",
  "name": "La bàn hàng hải",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 1,
  "h": 1,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/archive-08.webp"
 },
 {
  "id": 80,
  "key": "archive-09",
  "name": "Trâm cài áo men màu",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 1,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/archive-09.webp"
 },
 {
  "id": 81,
  "key": "archive-10",
  "name": "Đồng hồ quả lắc để bàn",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 2,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/archive-10.webp"
 },
 {
  "id": 82,
  "key": "archive-11",
  "name": "Vương miện san hô",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 2,
  "h": 1,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/archive-11.webp"
 },
 {
  "id": 83,
  "key": "archive-12",
  "name": "Phù hiệu thành phố đời đầu",
  "series": "archive",
  "seriesName": "Ký Ức Thành Cũ",
  "category": "Cổ vật",
  "w": 1,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/archive-12.webp"
 },
 {
  "id": 84,
  "key": "anomaly-01",
  "name": "Nấm phát quang",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 50,
  "image": "assets/auction/items/anomaly-01.webp"
 },
 {
  "id": 85,
  "key": "anomaly-02",
  "name": "Đám mây mưa đóng chai",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 60,
  "image": "assets/auction/items/anomaly-02.webp"
 },
 {
  "id": 86,
  "key": "anomaly-03",
  "name": "Viên đá ngủ gật",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 1,
  "quality": 0,
  "base": 69,
  "image": "assets/auction/items/anomaly-03.webp"
 },
 {
  "id": 87,
  "key": "anomaly-04",
  "name": "Ấm trà lơ lửng",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 2,
  "h": 2,
  "quality": 1,
  "base": 126,
  "image": "assets/auction/items/anomaly-04.webp"
 },
 {
  "id": 88,
  "key": "anomaly-05",
  "name": "Đồng hồ cát chảy ngược",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 141,
  "image": "assets/auction/items/anomaly-05.webp"
 },
 {
  "id": 89,
  "key": "anomaly-06",
  "name": "Nam châm nảy mầm",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 2,
  "quality": 1,
  "base": 156,
  "image": "assets/auction/items/anomaly-06.webp"
 },
 {
  "id": 90,
  "key": "anomaly-07",
  "name": "Tinh thể bụi sao",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 2,
  "quality": 2,
  "base": 300,
  "image": "assets/auction/items/anomaly-07.webp"
 },
 {
  "id": 91,
  "key": "anomaly-08",
  "name": "Mẫu vật mặt trăng",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 326,
  "image": "assets/auction/items/anomaly-08.webp"
 },
 {
  "id": 92,
  "key": "anomaly-09",
  "name": "Hố đen bỏ túi",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 2,
  "h": 2,
  "quality": 2,
  "base": 353,
  "image": "assets/auction/items/anomaly-09.webp"
 },
 {
  "id": 93,
  "key": "anomaly-10",
  "name": "Vũ trụ viên đường",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 1,
  "quality": 3,
  "base": 610,
  "image": "assets/auction/items/anomaly-10.webp"
 },
 {
  "id": 94,
  "key": "anomaly-11",
  "name": "Viên nang thời gian",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 1,
  "h": 2,
  "quality": 3,
  "base": 652,
  "image": "assets/auction/items/anomaly-11.webp"
 },
 {
  "id": 95,
  "key": "anomaly-12",
  "name": "Nhật thực mini",
  "series": "anomaly",
  "seriesName": "Cục Quan Sát Dị Thường",
  "category": "Kỳ vật",
  "w": 2,
  "h": 2,
  "quality": 4,
  "base": 1236,
  "image": "assets/auction/items/anomaly-12.webp"
 }
];
// Public catalog v2. Keep the old unit prices for unfinished v1 auctions only.
const pricingVersion=2,qualityPriceFactors=[1,1.5,2.5,5,10];
for(const item of catalog){item.legacyBase=item.base;item.base=Math.round(item.base*qualityPriceFactors[item.quality]);}
const catalogPrice=(item,scale=1,version=pricingVersion)=>Math.round((version===1?(item.legacyBase??item.base):item.base)*scale);
const venues=[
 {id:'street',name:'Tầm Bảo Phố Cũ',subtitle:'OLD TOWN / 01',desc:'Chủ yếu là bảo vật Phổ thông, Tinh xảo.',scale:1,min:100,entryFee:150,rarity:[.58,.29,.105,.021,.004],tag:'Hội trường nhập môn',lots:1},
 {id:'dock',name:'Bí Tàng Cảng Đêm',subtitle:'NIGHT HARBOR / 02',desc:'Chủ yếu là bảo vật Tinh xảo, Hiếm.',scale:10,min:30000,entryFee:3000,rarity:[.25,.36,.27,.10,.02],tag:'Hội trường nâng cao',lots:1},
 {id:'sky',name:'Trân Phẩm Mây Ngàn',subtitle:'SKYLINE / 03',desc:'Chủ yếu là bảo vật Hiếm, Sử thi.',scale:100,min:600000,entryFee:60000,rarity:[.08,.22,.37,.24,.09],tag:'Hội trường cao cấp',lots:1}
];
// NPC liquidity follows public venue prices, never the player's wallet or hidden lot.
for(const venue of venues){
 const mean=qualities.reduce((sum,_,q)=>{const pool=catalog.filter(c=>c.quality===q);return sum+venue.rarity[q]*pool.reduce((n,c)=>n+c.base,0)/pool.length;},0);
 venue.npcBudget=Math.round(mean*7*1.8*venue.scale);
}
// Local prices, not NTE currency conversion. Counts scaled for our 6–8 item boxes.
const tools=[];
function instrument(id,name,tier,cost,effect,desc,symbol='⌖',minRound=1){tools.push({id,name,tier,cost,effect,desc:(minRound>1?`Có thể dùng từ vòng ${minRound}. `:'')+desc,symbol,minRound});}
for(const [tier,label,quality,shape,identify,costs] of [
 [0,'Cực nhỏ',1,2,1,[12,10,30]], [1,'Nhỏ',2,3,2,[28,22,80]],
 [2,'Vừa',3,4,3,[65,45,180]], [3,'Lớn',4,5,4,[140,100,360]], [4,'Siêu lớn',5,6,5,[250,180,650]]]){
 instrument('quality-'+tier,`${label} - Máy thẩm định`,tier,costs[0],{kind:'quality',count:quality},`Hé lộ ngẫu nhiên phẩm cấp chưa biết của tối đa ${quality} bảo vật, không tiết lộ đường nét.`,'◈',tier+1);
 instrument('shape-'+tier,`${label} - Máy đo kích thước`,tier,costs[1],{kind:'shape',count:shape},`Hé lộ ngẫu nhiên đường nét chưa biết của tối đa ${shape} bảo vật.`,'▧',tier+1);
 instrument('identify-'+tier,`${label} - Máy giám định`,tier,costs[2],{kind:'identify',count:identify},`Giám định hoàn chỉnh ngẫu nhiên tối đa ${identify} bảo vật chưa giám định.`,'⌖',tier+1);
}
for(const [q,label,tier,cost] of [[1,'Tinh xảo',0,12],[2,'Hiếm',1,28],[3,'Sử thi',2,65],[4,'Truyền thuyết',3,140]]){
 for(const [stat,title,ratio] of [['count','Đếm số lượng',1],['mean','Giá trung bình',.6],['total','Định giá',q===4?1:1.4]])
 instrument(`${stat}-${q}`,`${label} - Máy ${title}`,tier,Math.round(cost*ratio),{kind:'stat',stat,filter:{quality:q},sampleSize:3},`Lấy mẫu cố định 3 món, đọc ${stat==='total'?'tổng giá trị':stat==='mean'?'giá trị trung bình (làm tròn xuống)':'số lượng'} bảo vật ${label} trong đó; các thiết bị lấy mẫu dùng chung nhóm mẫu.`,'▤',q);
}
for(const c of series)instrument('category-'+c.id,`Máy thẩm định ${c.category}`,1,35,{kind:'quality',count:2,filter:{category:c.category},category:true,noCountFallback:true},`Hé lộ ngẫu nhiên danh mục và phẩm cấp của tối đa 2 bảo vật ${c.category}, không tiết lộ đường nét.`,'◇');
instrument('largest-shape','Máy đo kích thước đặc biệt',2,8,{kind:'shape',count:1,select:'largest'},'Hé lộ đường nét của 1 bảo vật chiếm nhiều ô nhất.','▧');
instrument('largest-identify','Máy giám định đặc biệt',3,60,{kind:'identify',count:1,select:'largest'},'Giám định hoàn chỉnh 1 bảo vật chiếm nhiều ô nhất.','⌖',2);
instrument('supreme','Máy giám định chí tôn',5,240,{kind:'identify',count:3,select:'ungraded'},'Giám định hoàn chỉnh ngẫu nhiên tối đa 3 bảo vật có phẩm cấp chưa biết.','⌖',3);
for(const [q,label,cost] of [[1,'Tinh xảo',12],[3,'Sử thi',65],[4,'Truyền thuyết',140]])instrument('area-'+q,`${label} - Máy đo ô chiếm`,q===1?0:q===3?2:3,cost,{kind:'stat',stat:'area',filter:{quality:q},sampleSize:3},`Lấy mẫu cố định 3 món, đọc tổng số ô chiếm của bảo vật ${label} trong đó; các thiết bị lấy mẫu dùng chung nhóm mẫu.`,'▧',q);
instrument('largest-quality','Máy thẩm định đặc biệt',3,20,{kind:'quality',count:1,select:'largest'},'Hé lộ phẩm cấp của 1 bảo vật chiếm nhiều ô nhất, không tiết lộ đường nét.','◈',2);
instrument('largest-value','Máy định giá đặc biệt',4,32,{kind:'stat',stat:'largestValue'},'Biết giá trị của 1 bảo vật chiếm nhiều ô nhất, không tiết lộ danh tính hay vị trí.','▤',2);
const toolTiers=['Nhập môn','Nâng cao','Chuyên nghiệp','Cao cấp','Siêu cấp','Chí tôn'];
const economy=Object.freeze({compensationRate:.10,compensationPerLot:40,compensationDaily:60,poolRate:.30,stakeRate:.10,participationFeeFactor:2,participationHistoryRatio:.60});
root.AuctionData=Object.freeze({hosts,catalog,qualities,series,venues,tools,toolTiers,economy,pricingVersion,catalogPrice});
})(globalThis);
/* Private-information operations shared by player and NPC. Never export raw hidden items. */
(function(root){
'use strict';
const D=root.AuctionData, copy=x=>JSON.parse(JSON.stringify(x));
const value=(i,scale)=>Math.round(i.base*scale);
function empty(i){return {slot:i.slot,x:null,y:null,w:null,h:null,quality:null,category:null,identified:null};}
function match(i,f={}){return (f.quality==null||i.quality===f.quality)&&(f.minQuality==null||i.quality>=f.minQuality)&&(!f.category||i.category===f.category);}
function candidates(i){return D.catalog.filter(c=>(i.w==null||c.w===i.w)&&(i.h==null||c.h===i.h)&&(i.quality==null||c.quality===i.quality)&&(!i.category||c.category===i.category)&&(i.identified==null||c.id===i.identified));}
function reveal(raw,seen,kind,category=false){
 const before=JSON.stringify(seen);
 if(kind==='shape'||kind==='shape-quality'||kind==='identify'){for(const k of ['x','y','w','h'])seen[k]=raw[k];}
 if(kind==='quality'||kind==='shape-quality'||kind==='identify')seen.quality=raw.quality;
 if(category||kind==='category'||kind==='identify')seen.category=raw.category;
 if(kind==='identify')seen.identified=raw.id;
 return before!==JSON.stringify(seen);
}
function useful(i,spec){if(spec.kind==='category')return !i.category;if(spec.kind==='identify')return i.identified==null;if(spec.kind==='quality')return i.quality==null||(spec.category&&!i.category);if(spec.kind==='shape')return i.w==null;return i.w==null||i.quality==null;}
function apply(raw,intel,facts,spec,rng,scale=1){
 if(spec.sampleSize){
  const cohort=facts.find(f=>f.scopeGroup==='instruments')?.scope||sampleSlots(raw,spec.sampleSize,rng);
  spec={...spec,sampleSize:0,scope:cohort,scopeGroup:'instruments'};
 }
 let pool=raw.filter(i=>(!spec.scope||spec.scope.includes(i.slot))&&match(i,spec.filter)),chosen=[];
 if(spec.kind==='stat'){
  const key=JSON.stringify(spec.scope?[spec.stat,spec.filter||{},spec.scope]:[spec.stat,spec.filter||{}]);if(facts.some(f=>f.key===key))return null;
  const sum=pool.reduce((n,i)=>n+value(i,scale),0),largest=pool.slice().sort((a,b)=>b.w*b.h-a.w*a.h||a.slot-b.slot)[0],v=spec.stat==='count'?pool.length:spec.stat==='mean'?(pool.length?Math.floor(sum/pool.length):0):spec.stat==='area'?pool.reduce((n,i)=>n+i.w*i.h,0):spec.stat==='largestValue'?value(largest,scale):sum;
  const subject=spec.filter?.quality!=null?D.qualities[spec.filter.quality].name:spec.filter?.minQuality!=null?D.qualities.slice(spec.filter.minQuality).map(q=>q.name).join(' và ')+' bảo vật':spec.filter?.category?spec.filter.category:'';
  const fact={key,stat:spec.stat,filter:copy(spec.filter||{}),value:v,...(spec.scope?{scope:[...spec.scope],scopeGroup:spec.scopeGroup||'skill'}:{})};facts.push(fact);return {fact,text:`${spec.scope?'Mẫu '+spec.scope.map(n=>'#'+(n+1)).join(', ')+' · ':''}${subject} ${spec.stat==='count'?'số lượng':spec.stat==='mean'?'giá trị trung bình (làm tròn xuống)':spec.stat==='area'?'tổng số ô chiếm':spec.stat==='largestValue'?'giá trị món chiếm nhiều ô nhất (vị trí chưa biết)':'tổng giá trị'}: ${v}`,slots:[]};
 }
 if(spec.slots)pool=pool.filter(i=>spec.slots.includes(i.slot));
 if(spec.select==='ungraded')pool=pool.filter(i=>intel.find(x=>x.slot===i.slot).quality==null);
 if(['pristine-top','pristine'].includes(spec.select))pool=pool.filter(i=>{const o=intel.find(x=>x.slot===i.slot);return o.w==null&&o.quality==null&&!o.category&&o.identified==null;});
 // Largest and top-quality selection happens before usefulness filtering; no silently switching targets.
 if(spec.select==='largest')pool=pool.sort((a,b)=>b.w*b.h-a.w*a.h||a.slot-b.slot).slice(0,1);
 if(['top-quality','pristine-top'].includes(spec.select))pool=pool.sort((a,b)=>b.quality-a.quality||a.slot-b.slot).slice(0,1);
 pool=pool.filter(i=>useful(intel.find(x=>x.slot===i.slot),spec));
 if((!spec.select||['pristine','ungraded'].includes(spec.select))&&!spec.slots)for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 chosen=pool.slice(0,spec.count??pool.length);
 if(!chosen.length){if(spec.filter&&!spec.noCountFallback)return apply(raw,intel,facts,{kind:'stat',stat:'count',filter:spec.filter},rng,scale);return null;}
 for(const i of chosen)reveal(i,intel.find(x=>x.slot===i.slot),spec.kind,spec.category);
 return {slots:chosen.map(i=>i.slot),text:`Thêm tình báo ${chosen.length} món (${spec.kind==='category'?'danh mục':spec.kind==='identify'?'giám định hoàn chỉnh':spec.kind==='shape'?(spec.category?'đường nét và danh mục':'đường nét'):spec.kind==='quality'?(spec.category?'danh mục và phẩm cấp':'phẩm cấp'):'đường nét và phẩm cấp'})`};
}
function sampleSlots(raw,count,rng){const slots=raw.map(i=>i.slot);for(let i=slots.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[slots[i],slots[j]]=[slots[j],slots[i]];}return slots.slice(0,count);}
function skill(effect,round,raw,intel,facts,memory,rng,scale){
 const specs=[],mark=(key,count)=>memory[key]??=sampleSlots(raw,count,rng);
 if(effect==='ladder'&&[1,2,3].includes(round))specs.push({kind:'quality',count:1});
 if(effect==='track'){
  if(round===1)specs.push({kind:'shape',slots:mark('tracked',2)});
  if([2,4].includes(round))specs.push({kind:'identify',slots:(memory.tracked||[]).slice(round===2?0:1,round===2?1:2)});
 }
 if(effect==='common'){
  if(round===1){specs.push({kind:'category',slots:mark('detailSample',2)});specs.push({kind:'shape',slots:memory.detailSample.slice(0,1)});}
  if(round===2)specs.push({kind:'shape-quality',slots:(memory.detailSample||[]).slice(0,1)});
  if(round===3)specs.push({kind:'identify',slots:(memory.detailSample||[]).slice(1,2)});
 }
 if(effect==='category-wave'){
  if(round===1)specs.push({kind:'shape',category:true,slots:mark('categorySample',2)});
  if([3,4].includes(round))specs.push({kind:'quality',slots:(memory.categorySample||[]).slice(round-3,round-2)});
 }
 if(effect==='colour-wave'&&[1,3,5].includes(round))specs.push({kind:round===1?'shape-quality':'quality',count:1});
 if(effect==='finale'){
  if(round===1)specs.push({kind:'shape',count:2});
  if([3,5].includes(round))specs.push({kind:'quality',count:round===3?1:3});
 }
 if(effect==='apex'){
  if(round===1)specs.push({kind:'shape',category:true,slots:mark('focusSample',1)});
  if(round===2)specs.push({kind:'quality',slots:memory.focusSample||[]});
  if(round===4)specs.push({kind:'shape-quality',slots:sampleSlots(raw.filter(i=>!(memory.focusSample||[]).includes(i.slot)),2,rng)});
 }
 if(effect==='rare-count'){
  if(round===1)specs.push({kind:'stat',stat:'count',filter:{minQuality:3},scope:mark('rareSample',2)});
  if(round===3)specs.push({kind:'quality',slots:memory.rareSample||[]});
 }
 if(effect==='analyst'){
  if(round===1)specs.push({kind:'shape',slots:mark('valueSample',2).slice(0,1)});
  if(round===2&&memory.valueSample?.length)specs.push({kind:'stat',stat:'total',scope:memory.valueSample});
 }
 if(effect==='large-track'){
  if(round===1)memory.large=raw.slice().sort((a,b)=>b.w*b.h-a.w*a.h||a.slot-b.slot)[0]?.slot;
  if([1,2,4].includes(round))specs.push({kind:round===1?'shape':round===2?'quality':'identify',slots:[memory.large]});
  if(round===3)specs.push({kind:'quality',count:1});
 }
 if(effect==='fortune'&&[1,3,5].includes(round)){
  const n=Math.floor(rng()*4);memory.fortune=n;
  specs.push([{kind:'identify',count:1},{kind:'quality',count:1},{kind:'shape-quality',count:1},{kind:'shape',category:true,count:2}][n]);
 }
 return specs.map(sp=>apply(raw,intel,facts,sp,rng,scale)).filter(Boolean);
}
function bounds(items,facts,scale=1,pricingVersion=D.pricingVersion){
 const value=(item,scale)=>D.catalogPrice(item,scale,pricingVersion);
 const pools=items.map(candidates),n=items.length;let low=pools.reduce((s,p)=>s+Math.min(...p.map(i=>value(i,scale))),0),high=pools.reduce((s,p)=>s+Math.max(...p.map(i=>value(i,scale))),0);
 for(const f of facts){
  if(f.scope)continue;
  if(f.stat==='mean'&&!Object.keys(f.filter).length){low=Math.max(low,f.value*n);high=Math.min(high,(f.value+1)*n-1);}
  if(f.stat==='total'){
   low=Math.max(low,f.value+pools.reduce((s,p)=>s+(p.every(i=>!match(i,f.filter))?Math.min(...p.map(i=>value(i,scale))):0),0));
   high=Math.min(high,f.value+pools.reduce((s,p)=>s+Math.max(0,...p.filter(i=>!match(i,f.filter)).map(i=>value(i,scale))),0));
  }
  if(f.stat==='topValue'||f.stat==='largestValue')low=Math.max(low,f.value);
  if(f.stat==='count'||f.stat==='area'){
   const cap=f.stat==='area'?n*4:n;let lo=[0],hi=[0];
   for(const p of pools){const a=Array(cap+1).fill(Infinity),b=Array(cap+1).fill(-Infinity);
    for(let k=0;k<lo.length;k++)for(const i of p){const j=k+(match(i,f.filter)?(f.stat==='area'?i.w*i.h:1):0);if(j<=cap){a[j]=Math.min(a[j],lo[k]+value(i,scale));b[j]=Math.max(b[j],hi[k]+value(i,scale));}}
    lo=a;hi=b;
   }
   if(Number.isFinite(lo[f.value])){low=Math.max(low,lo[f.value]);high=Math.min(high,hi[f.value]);}
  }
 }
 // Scoped statistics constrain only the sampled slots, never the whole warehouse.
 const groups=new Map();for(const f of facts.filter(f=>f.scope)){const key=JSON.stringify([...f.scope].sort((a,b)=>a-b));if(!groups.has(key))groups.set(key,[]);groups.get(key).push(f);}
 for(const group of groups.values()){
  const scope=group[0].scope,inside=items.filter(i=>scope.includes(i.slot)),outside=items.filter(i=>!scope.includes(i.slot));
  const local=group.map(({scope,scopeGroup,...f})=>f),a=bounds(inside,local,scale,pricingVersion),b=bounds(outside,[],scale,pricingVersion);
  low=Math.max(low,a.low+b.low);high=Math.min(high,a.high+b.high);
 }
 return {low,high};
}
root.AuctionIntel=Object.freeze({empty,match,candidates,apply,skill,bounds});
})(globalThis);
