/**
 * Kho dữ liệu các điểm nút Thành phố Lâm Giang (Tổng cộng 126 điểm)
 * Đã dịch sang tiếng Việt và đồng bộ dữ liệu với Lorebook Card
 */

const nodes = [
  {
    "id": "qp_main",
    "name": "Đường ván gỗ cổ núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Đường ván gỗ cổ núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đường đi bộ leo núi bằng gỗ lát dọc theo sống núi, cây cối dọc đường rậm rạp, không khí ẩm ướt, có thể nhìn xuống đường chân trời nội đô và biển rừng. Chiều tối thường có du khách dừng chân ngắm hoàng hôn, khi màn đêm buông xuống có đom đóm xuất hiện. Sâu bên trong có nhà vệ sinh công cộng gạch gỗ bỏ hoang và điểm mù sau tảng đá lớn, sau khi nhân viên kiểm lâm tan làm thì cả sườn núi sau không có ai tuần tra, thích hợp triển khai phơi bày ngoài trời, dắt dây vòng cổ tình thú và các màn Play bí mật giữa rừng núi.",
    "draw": "Leo núi ngắm cảnh. Rừng rậm che chắn kín đáo, thích hợp phơi bày ngoài trời, đeo vòng cổ dắt đi dạo tình thú và Play chợp mắt trên ghế dài.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong kẽ đá rêu xanh có thể hái được cánh hoa màu xanh đậm mang hương ngọt, nấm tán an thần và nguyên liệu thảo dược rừng núi; buổi sáng có thể thu thập sương sớm trên lá cây.",
      "materials": [
        "Cánh hoa dại màu lam",
        "Giọt sương mai tinh khiết",
        "Nấm tán hoang dã giúp ngủ ngon",
        "Nguyên liệu nhóm thảo dược hoang dã",
        "Vật tư gỗ rừng núi hoang dã"
      ]
    },
    "special": [
      "Nhà vệ sinh công cộng bỏ hoang ở cuối đường ván gỗ quanh năm khóa kín, bụi cây phía sau cao ngang thắt lưng, thích hợp đi vệ sinh khẩn cấp và che chắn.",
      "Sau năm giờ chiều nhân viên kiểm lâm rời vị trí, đài ngắm cảnh sâu bên trong và đường núi rơi vào trạng thái hoàn toàn không người quản lý.",
      "Thỉnh thoảng có thể bắt gặp lão nông hái thuốc trong núi, có thể dùng tiền mặt hoặc vật phẩm thu thập được để đổi lấy dịch chiết sinh vật hoang dã."
    ],
    "events": [
      {
        "id": "evt_qp_main_cliff",
        "title": "Thử nghiệm trong gió bên vách đá hoàng hôn",
        "场所": "Cạnh lan can rìa vách đá ngắm cảnh",
        "优先级": 60,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            450,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Gió núi chiều tà hơi se lạnh, ánh hoàng hôn nhuộm cả biển rừng thành sắc đỏ sẫm, quanh đài ngắm cảnh không có du khách nào khác. Cô ấy dùng hai tay vịn vào lan can gỗ phóng tầm mắt nhìn đường chân trời thành phố phía xa.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ôm lấy cô ấy từ phía sau cùng ngắm hoàng hôn, khẽ hôn lên bên tai cô ấy",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi áo khoác và đồ lót đang mặc, để trần nửa thân trên vịn lan can đứng đón gió, thưởng thức sự run rẩy của cô ấy trong làn gió núi",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy chống hai tay lên lan can cong mông lên, từ phía sau vén tà váy trực tiếp tiến vào hạ thể, thúc đẩy từ phía sau dưới ánh hoàng hôn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_main_toilet",
        "title": "Chỉ thị khẩn cấp khi nhà vệ sinh công cộng khóa cửa",
        "场所": "Bụi cây phía sau nhà vệ sinh công cộng bỏ hoang",
        "优先级": 90,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "尿意": [
            80,
            100
          ],
          "需同行": true
        },
        "opportunity": "Cổng nhà vệ sinh công cộng bên đường treo biển bảo trì khóa xích, xung quanh không một bóng người. Cô ấy kẹp chặt hai chân ôm lấy bụng dưới, sắc mặt hơi ửng hồng, lộ vẻ khá sốt ruột.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dẫn cô ấy đi vào sâu trong bụi cây, bản thân quay lưng lại cảnh giác canh chừng giúp cô ấy",
            "结算": "Độ hảo cảm+15, Buồn tiểu về 0"
          },
          "mischief": {
            "分类": "Bức bách sinh lý",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy cởi quần lót ngồi xổm ngay bên bụi cỏ đối diện thẳng với bạn để đi vệ sinh tại chỗ, suốt quá trình không được che chắn cũng không được nhắm mắt",
            "结算": "Độ thuận tùng+30, Buồn tiểu về 0, Kinh nghiệm play bài tiết+1, Tâm trạng→Tủi thân"
          }
        }
      },
      {
        "id": "evt_qp_main_collar",
        "title": "Dắt dây trên lối mòn rừng sâu ban đêm",
        "场所": "Đường đi bộ không đèn trong rừng rậm",
        "优先级": 55,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需携带道具": "项圈与牵引绳",
          "需同行": true
        },
        "opportunity": "Đường núi ban đêm không có đèn đường, bốn bề tĩnh mịch, chỉ có ánh đèn pin soi sáng lối đi phía trước. Chiếc vòng cổ bằng da và dây dắt kim loại trong túi có thể lấy ra dùng bất cứ lúc nào.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm chặt bàn tay nhỏ hơi lạnh của cô ấy, bật đèn pin hộ tống cô ấy chầm chậm xuống núi suốt dọc đường",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=650, Túi đồ có: Vòng cổ và dây dắt",
            "选项": "Cởi quần lót của cô ấy cất vào túi áo, đeo vòng cổ da và móc dây dắt cho cô ấy, dắt cô ấy trong trạng thái thân dưới thả rông đi dạo giữa rừng cây tối đen",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Đồ dùng túi đồ+Đồ lót của bạn đồng hành, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "青屏山古木栈道"
  },
  {
    "id": "qp_cable",
    "name": "Cáp treo toàn cảnh núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Cáp treo toàn cảnh núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Tuyến cáp treo ngắm cảnh hai chiều nối liền chân núi với đỉnh núi chính, một chiều đi mất khoảng tám phút. Cabin bốn mặt sử dụng kính phủ màng chống chói, tầm nhìn thoáng đãng. Chiều tối lượng khách đi xuống cực ít, rất dễ độc chiếm trọn một cabin kín; khi gặp bảo trì thỉnh thoảng sẽ dừng ngắn giữa không trung, là địa điểm tuyệt hảo để điều giáo trứng rung trong không gian kín và kết hợp mặt đối mặt.",
    "draw": "Ngắm cảnh trên cáp treo trên không. Cabin đôi khép kín, thích hợp điều khiển trứng rung từ xa, phơi bày trước cửa kính lớn và lấy áo khoác che chắn cưỡi ngựa mặt đối mặt.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Chuyến cáp treo đi xuống cuối cùng lúc chiều tà hầu như không có khách lẻ, có thể dễ dàng độc chiếm nguyên một cabin khép kín.",
      "Kính cabin có lớp phủ một chiều, khi ánh sáng bên ngoài mờ tối thì từ mặt đất cực kỳ khó nhìn rõ chi tiết bên trong xe.",
      "Thỉnh thoảng do kiểm tra đường dây sẽ dừng lơ lửng giữa lưng chừng trời hàng trăm mét trong vài phút, rơi vào trạng thái cô lập bốn bềlơ lửng giữa không trung."
    ],
    "events": [
      {
        "id": "evt_qp_cable_cabin",
        "title": "Đồng hành riêng tư trong cabin đôi chiều muộn",
        "场所": "Bên trong cabin cáp treo độc lập",
        "优先级": 58,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            250,
            1000
          ],
          "需携带道具": "无线遥控跳蛋",
          "需同行": true
        },
        "opportunity": "Cabin cáp treo đi xuống lướt đi êm ái, trong cả khoang cabin chỉ có hai người các bạn, ngoài cửa sổ là toàn cảnh biển rừng ở độ cao hàng trăm mét, còn vài phút nữa mới tới ga.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cùng cô ấy sóng vai tựa bên cửa sổ, nắm tay cô ấy cùng ngắm nhìn ánh chiều tà trên biển rừng dưới chân",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500, Túi đồ có: Trứng rung điều khiển từ xa không dây",
            "选项": "Bảo cô ấy nhét trứng rung vào sâu bên trong cơ thể rồi ngồi ngay ngắn, để bạn cầm điều khiển từ xa chỉnh mức độ rung, cho tới trước khi vào ga không được lấy ra",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Cởi quần lót của cô ấy bảo cô ấy ngồi dạng chân trên đùi bạn, dùng áo khoác rộng che kín nửa thân dưới của hai người, kết hợp thúc đẩy mặt đối mặt trong lúc cáp treo đang trượt đi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_cable_halt",
        "title": "Ở riêng trong cabin khi dừng lơ lửng giữa không trung",
        "场所": "Bên trong cabin cáp treo độc lập",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Loa phát thanh thông báo kiểm tra điện lực, cáp treo dừng lơ lửng giữa không trung khẽ đung đưa. Cabin khép kín và bốn bề treo lơ lửng trên cao, cô ấy hơi căng thẳng nắm chặt lấy vạt áo bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm chặt tay cô ấy khẽ giọng vỗ về, bầu bạn cùng cô ấy chờ cáp treo khôi phục vận hành êm ái",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy tốc váy lên ngang eo áp sát trước cửa kính toàn cảnh để tự sướng, phải hoàn thành một lần lên đỉnh trước khi cáp treo khởi động lại",
            "结算": "Độ thuận tùng+30, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy chống tay trước cửa kính ngắm cảnh lớn cong mông lên, kéo khóa quần từ phía sau đâm dương vật vào hạ thể, thúc nhanh từ phía sau khi đang lơ lửng trên cao",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏山全景索道"
  },
  {
    "id": "qp_shade",
    "name": "Thung lũng vách đá núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Thung lũng vách đá núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Hẻm núi trũng thấp nằm ở phía Bắc đường ván gỗ chính, quanh năm ít thấy ánh mặt trời, sản sinh những vạt lớn hoa cỏ màu xanh đậm đặc dị mang hương ngọt. Đáy thung lũng lặng gió và ẩm ướt, trong không khí tràn ngập hương ngọt phấn hoa có khuynh hướng gây ảo giác thôi miên, phía sau thân cây cổ thụ đổ gục ở cuối thung lũng có bệ đá bằng phẳng, thích hợp triển khai thôi miên phấn hoa, ám thị tình thú và Play kết hợp thôi miên.",
    "draw": "Thu thập dược liệu hoang dã và hoa lạ. Phấn hoa hương ngọt dưới đáy thung lũng có thể gây thất thần nhẹ, thích hợp điều giáo thôi miên và kết hợp thôi miên.",
    "features": {
      "canGather": true,
      "canDate": false,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong kẽ đá rêu xanh nở rộ loài hoa lạ màu xanh đậm và nấm tán, khi hái sẽ vương mùi hương ngọt; có thể chiết xuất nguyên liệu gây ảo giác và thôi miên.",
      "materials": [
        "Cánh hoa dại màu lam",
        "Nấm tán hoang dã",
        "Nguyên liệu thảo dược nhóm an thần gây ngủ",
        "Nguyên liệu tinh dầu thực vật"
      ]
    },
    "special": [
      "Đáy thung lũng do trũng thấp lặng gió nên nồng độ phấn hoa màu xanh đậm cực cao, hít vào trong thời gian dài dễ gây thư giãn thần kinh và ý thức mơ màng.",
      "Phía sau thân cây đổ ở cuối thung lũng có một bệ đá tự nhiên khô ráo bằng phẳng, thuộc điểm mù tầm nhìn từ lối vào.",
      "Người hái thuốc địa phương thường bán túi thuốc đặc chế ở cửa thung lũng, có thể hỏi thăm công thức thảo dược."
    ],
    "events": [
      {
        "id": "evt_qp_shade_mist",
        "title": "Hít phải phấn hoa hương ngọt dưới đáy thung lũng",
        "场所": "Lối đá rêu xanh thung lũng khuất nắng",
        "优先级": 66,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Không khí dưới đáy thung lũng tĩnh lặng, hoa dại màu xanh đậm nở rộ tỏa hương ngọt nồng nàn. Sau khi hít hương hoa vào, hơi thở của cô ấy dần trở nên nặng nề, ánh mắt lộ vẻ mơ màng mất tiêu cự.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nhận thấy sự khác thường, kéo cô ấy lùi về chỗ thoáng đãng thông gió ở cửa thung lũng nghỉ ngơi",
            "结算": "Độ hảo cảm+15, Độ ham muốn-10"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy tiếp tục hít thở sâu trước bụi hoa, ghé sát bên tai cô ấy dùng giọng nói chậm rãi bình ổn đưa ra lời ám thị tình thú giữ trạng thái thả lỏng",
            "结算": "Độ thuận tùng+20, Độ ham muốn+15, Trạng thái bất thường+Đang bị ám thị, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_qp_shade_trance",
        "title": "Tương tác hoảng hốt dưới ảnh hưởng của phấn hoa",
        "场所": "Bệ đá tự nhiên thung lũng khuất nắng",
        "优先级": 74,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "异常状态含": "暗示中",
          "需同行": true
        },
        "opportunity": "Cô ấy đứng cạnh bệ đá, đôi mắt mang vẻ mơ màng mất tiêu cự, yên lặng cảm nhận sự hoảng hốt mà phấn hoa mang lại.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khẽ xoa má cô ấy, đưa cô ấy tới nơi có gió núi thổi qua khẽ gọi tỉnh lại, hóa giải trạng thái thôi miên",
            "结算": "Độ hảo cảm+20, Trạng thái bất thường-Đang bị ám thị, Độ ham muốn-15"
          },
          "sexAction": {
            "分类": "催眠奸",
            "门槛": "顺从度>=600",
            "选项": "趁她处于深度恍惚状态，带她靠在倒木石台上脱掉下身衣物，挺身进入下体展开催眠结合",
            "结算": "性欲度重置, 顺从度+30, 催眠奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "Thôi miên",
            "门槛": "Độ thuận tùng>=600",
            "选项": "Nhân lúc cô ấy đang ở trạng thái hoảng hốt sâu, đưa cô ấy tựa vào bệ đá bên thân cây đổ cởi bỏ quần áo thân dưới, vươn người tiến vào hạ thể triển khai màn kết hợp thôi miên",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm play thôi miên+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏山断崖谷"
  },
  {
    "id": "dt_onsen",
    "name": "Suối nước nóng riêng kiểu Nhật Ngự Thang Tuyền",
    "fullName": "Khu Đông Đường · Suối nước nóng riêng kiểu Nhật Ngự Thang Tuyền",
    "district": "Khu Đông Đường",
    "archetype": "hotspring",
    "privacy": 5,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Biệt viện suối nước nóng kiểu Nhật có cổng riêng sân riêng, xây hồ suối nước nóng đá núi lửa lộ thiên tự nhiên và phòng nghỉ trải chiếu Tatami phong cách Hòa phong. Sau khi khóa trái cổng viện, nhân viên phục vụ tuyệt đối không làm phiền. Ngâm suối lưu huỳnh quá lâu có thể khiến toàn thân mềm nhũn nóng ran, thích hợp triển khai xoa bóp tinh dầu, nghịch nước suối khoáng riêng lộ thiên và kết hợp trên chiếu Tatami.",
    "draw": "Bao trọn biệt viện suối nước nóng riêng. Sau khi ngâm suối cơ thể mềm mại, thích hợp xoa bóp tinh dầu, kết hợp bên hồ đá lộ thiên và Play chợp mắt trên chiếu Tatami.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Sân viện biệt lập sau khi khóa trái từ bên trong, hồ đá lộ thiên trong sân và phòng nghỉ tạo thành không gian riêng tư tuyệt đối.",
      "Sau khi ngâm suối nước nóng lưu huỳnh nồng độ cao, toàn thân nóng ấm bủn rủn không chút sức lực, dễ đi vào giấc ngủ và buông lỏng phòng bị.",
      "Phòng nghỉ cung cấp tinh dầu hương thơm nhập khẩu, áo Yukata và đồ dùng tắm gội tình thú."
    ],
    "events": [
      {
        "id": "evt_dt_onsen_oil",
        "title": "Xoa bóp tinh dầu trên chiếu Tatami",
        "场所": "Phòng nghỉ chiếu Tatami biệt viện",
        "优先级": 68,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa phòng đã khóa kín, trên chiếu Tatami chuẩn bị sẵn khăn chống thấm và tinh dầu. Cô ấy đã thay bộ Yukata rộng rãi ngồi trên đệm xoa bóp bả vai, trên người mang theo hơi ấm vừa mới tắm xong.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đổ tinh dầu ra lòng bàn tay xoa nóng, dùng thủ pháp đứng đắn giúp cô ấy xoa bóp thả lỏng vùng vai cổ đang mỏi nhừ",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi áo Yukata nằm sấp hoàn toàn trên đệm, thoa đầy tinh dầu lên tấm lưng cùng mặt trong mông và đùi cô ấy, lấy điện thoại ra quay lại quá trình thoa dầu",
            "结算": "Độ thuận tùng+30, Kinh nghiệm chụp lén+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=600",
            "选项": "Ngồi dạng chân lên người cô ấy vén áo Yukata ra, tách hai chân đẫm tinh dầu của cô ấy, từ phía sau đâm dương vật vào hạ thể ướt mượt thúc đẩy trên chiếu Tatami",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_onsen_pool",
        "title": "Trò chuyện đêm khuya bên hồ đá lộ thiên",
        "场所": "Hồ suối nước nóng lộ thiên trong sân viện",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cổng lớn sân viện đã cài chặt, hồ đá lộ thiên bốc hơi nóng nghi ngút. Hai người ngâm mình trong làn nước suối ấm áp, hơi nước chầm chậm bốc lên giữa rừng trúc trong đêm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa chiếc khăn lạnh đắp lên trán cô ấy, sóng vai tựa bên thành hồ yên lặng ngắm bầu trời sao",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy ngồi dạng chân trên rìa hồ đá, dòng nước ngập qua gốc đùi, dùng ngón tay vuốt ve vùng kín ngay trước mắt bạn cho tới khi cơ thể khẽ run rẩy",
            "结算": "Độ thuận tùng+25, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Ở dưới nước nâng hai chân cô ấy lên bế ngồi trên thành hồ, vươn người đâm dương vật vào hạ thể, ra sức thúc đẩy trong làn nước suối ấm áp",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "御汤泉日式私汤"
  },
  {
    "id": "dt_berry",
    "name": "Vườn dâu tây sinh thái Thịnh Trang",
    "fullName": "Khu Đông Đường · Vườn dâu tây sinh thái Thịnh Trang",
    "district": "Khu Đông Đường",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Nhà kính trồng rau quả hái tận vườn liên hoàn, các luống trồng trên cao xếp thẳng hàng ngay ngắn. Ngày thường rất ít du khách, lối đi giữa các luống sâu nhất bị lá dây leo dày đặc che khuất tạo thành góc chết; trong nhà kính đâu đâu cũng có sẵn dây buộc cành mềm dẻo, thích hợp triển khai đánh phạt giữa các luống dâu, thả rông hái dâu ở lối đi và tiến vào từ phía sau đầy bí mật.",
    "draw": "Hái dâu tây và mua rượu trái cây. Rãnh luống sâu bên trong che khuất tầm nhìn, thích hợp dùng cành nhỏ đánh phạt, khỏa thân hái dâu và tiến vào từ phía sau ở lối đi.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Cạnh hàng rào nhà kính có quả dây leo ngọt hoang dã; buổi sáng màng nilon đọng sương sớm; có thể thu thập nhiều loại nguyên liệu nông sản.",
      "materials": [
        "Nho ngọt hoang dã",
        "Giọt sương mai tinh khiết",
        "Nguyên liệu nông sản nhóm rau củ quả",
        "Tinh chất chiết xuất dâu tây tươi"
      ]
    },
    "special": [
      "Giàn luống sâu nhất tránh khỏi tầm nhìn từ cửa vào, tiếng quạt thông gió kêu vo vo có thể che lấp những động tĩnh nhỏ.",
      "Quầy thu ngân có bán rượu trái cây dây leo ngọt nồng độ cao tự ủ, uống vào ngọt dịu nhưng rất dễ say.",
      "Que nhựa mảnh dùng để buộc dây leo có độ dẻo dai cực cao, dùng để đánh phạt sẽ để lại vết lằn đỏ bắt mắt trên làn da."
    ],
    "events": [
      {
        "id": "evt_dt_berry_pick",
        "title": "Hái dâu và đánh phạt sâu giữa các rãnh luống",
        "场所": "Giàn luống trong cùng của nhà kính dâu tây",
        "优先级": 40,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            100,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Sâu trong nhà kính lá xanh um tùm, xung quanh không có ai khác, chỉ có tiếng nước nhỏ giọt từ ống tưới nhỏ giọt. Cô ấy xách giỏ tre nhỏ đang cúi lưng chọn những quả dâu tây chín mọng.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy xách giỏ hái dâu, cùng nhau xếp đầy những quả dâu tây chín mọng đã chọn kỹ",
            "结算": "Độ hảo cảm+15, Tiền bạc-30, Nguyên liệu túi đồ+Nho ngọt hoang dã, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy tụt quần xuống nằm sấp trên giàn trồng dâu, lấy một cành buộc dây mảnh mai, cứ mỗi lần hái một quả dâu tây lại quất một roi lên cặp mông trần để lại vết đỏ",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Tủi thân"
          }
        }
      },
      {
        "id": "evt_dt_berry_shed",
        "title": "Vén váy tiến vào từ phía sau tại điểm mù giàn dây leo",
        "场所": "Cuối giàn luống nhà kính lớn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đi tới góc chết trong cùng của giàn kệ cao lớn, không khí trong nhà kính ẩm ướt ấm áp, trán cô ấy lấm tấm giọt mồ hôi, khẽ thở dốc tựa vào cạnh giàn nghỉ ngơi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy khăn giấy ra giúp cô ấy lau khô mồ hôi trên trán, kéo cô ấy ra cửa thông gió nghỉ ngơi",
            "结算": "Độ hảo cảm+15, Thể lực đối tượng+10, Độ ham muốn-10"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi sạch quần áo treo lên giàn dây leo, khỏa thân hoàn toàn trong lối đi hẹp hái hết chỗ dâu tây còn lại mới được mặc đồ vào",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy chống hai tay lên giàn trồng dâu tây, vén váy cởi quần lót ra, từ phía sau đâm dương vật vào hạ thể ướt át ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "盛庄生态草莓园"
  },
  {
    "id": "mh_hospital",
    "name": "Bệnh viện Nhân dân số 1 Thành phố",
    "fullName": "Khu Minh Hồ · Bệnh viện Nhân dân số 1 Thành phố",
    "district": "Khu Minh Hồ",
    "archetype": "medical",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Bệnh viện công lập đa khoa tuyến đầu quy mô lớn, khu khám bệnh đông đúc người qua lại. Khu khám chăm sóc đặc biệt có phòng xử lý lắp khóa trong và giường khám có rèm kéo. Buổi trưa lúc giao ca phòng khám bỏ trống, thích hợp triển khai điều giáo nhịn tiểu siêu âm B, nhập vai mặc đồ y tá và kết hợp bí mật trên giường khám.",
    "draw": "Khám bệnh kiểm tra sức khỏe. Hỗ trợ nhịn tiểu tột độ khi siêu âm, nhập vai trang phục y tá trong phòng xử lý và kết hợp từ phía sau trên giường khám.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng xử lý đặc biệt được trang bị khóa trong và rèm cách âm, buổi trưa lúc giao ca phòng để trống và có thể khóa trái.",
      "Quầy thuốc có thể pha chế các loại dược phẩm đặc dị nhóm an thần và lợi tiểu cấp kê đơn.",
      "Khu vực kiểm tra siêu âm ổ bụng yêu cầu người khám phải liên tục uống nước giữ bàng quang căng đầy để phối hợp với đầu dò ấn xuống."
    ],
    "events": [
      {
        "id": "evt_mh_hosp_ultrasound",
        "title": "Yêu cầu nhịn tiểu khi xếp hàng siêu âm",
        "场所": "Ghế dài ngoài cửa phòng siêu âm B",
        "优先级": 88,
        "trigger": {
          "时段": [
            "昼"
          ],
          "尿意": [
            60,
            100
          ],
          "需同行": true
        },
        "opportunity": "Ngoài cửa phòng siêu âm B dán thông báo nhịn tiểu, cô ấy đã uống liền hai chai nước, hai chân khép chặt, hai tay ôm lấy bụng dưới ngồi trên ghế dài chờ gọi số.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm lấy tay cô ấy giúp cô ấy phân tán sự chú ý, ngồi cạnh cô ấy nhìn màn hình gọi số",
            "结算": "Độ hảo cảm+15, Buồn tiểu+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Bức bách sinh lý",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Đưa thêm cho cô ấy một cốc nước ấm bắt uống hết, bảo cô ấy kẹp chặt hai chân nhịn suốt cho tới trước khi đầu dò của bác sĩ ấn lên bụng dưới kiểm tra đều không được đi vệ sinh",
            "结算": "Độ thuận tùng+30, Buồn tiểu không giảm, Trạng thái bất thường+Nhịn tiểu tột độ, Kinh nghiệm play bài tiết+1, Tâm trạng→Tủi thân"
          }
        }
      },
      {
        "id": "evt_mh_hosp_nurse",
        "title": "Thay đồ y tá trong phòng xử lý khóa trái buổi trưa",
        "场所": "Giường khám phòng xử lý đặc biệt",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需携带道具": "护士服与白丝",
          "需同行": true
        },
        "opportunity": "Giờ nghỉ trưa cửa phòng xử lý đã khóa trái, rèm trắng kéo kín, trên giường khám trải tấm lót sạch sẽ. Bộ đồng phục y tá và tất trắng trong túi có thể lấy ra dùng bất cứ lúc nào.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dìu cô ấy ngồi xuống mép giường khám, dùng tăm bông tỉ mỉ giúp cô ấy xử lý vết trầy xước trên cổ tay",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550, Túi đồ có: Đồng phục y tá và tất trắng",
            "选项": "Bảo cô ấy cởi sạch đồ lót đang mặc để thay bộ đồng phục y tá tất trắng, trên giường khám dùng ống nghe lạnh toát áp lên chính đầu ngực của cô ấy để khám và phô bày",
            "结算": "Độ thuận tùng+30, Kinh nghiệm nhập vai tình thú+1, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Đè cô ấy đang mặc đồ y tá xuống giường khám vén chân váy ngắn lên, từ phía sau đâm dương vật vào hạ thể, thúc đẩy từ phía sau giữa tiếng loa phát thanh ngoài cửa",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "市第一人民医院"
  },
  {
    "id": "gl_boutique",
    "name": "Cửa hàng thời trang biệt thự MUSE",
    "fullName": "Khu Cổ Lĩnh · Cửa hàng thời trang biệt thự MUSE",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 1,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Cửa hàng thời trang tuyển chọn (boutique) nằm trong căn biệt thự nhỏ độc lập thời Dân Quốc dưới bóng cây ngô đồng, chuyên kinh doanh thời trang may đo cao cấp và các mẫu thiết kế ngách. Trong tiệm có phòng thay đồ rèm nhung dày chạm đất và gương toàn thân sát đất, cách tấm rèm chỉ gang tấc chính là nhân viên tư vấn và khách hàng đang chọn quần áo, thích hợp triển khai thả rông dạo phố thanh toán, tự sướng sau rèm và kết hợp bí mật trong phòng thay đồ.",
    "draw": "Thử đồ may đo cao cấp. Rèm nhung dày che chắn kín đáo, thích hợp giao nộp quần lót thả rông mua sắm, tự sướng trước gương sát đất và ẩn gian trong phòng thay đồ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Tấm rèm nhung dày của phòng thay đồ sâu bên trong rủ chạm đất hoàn toàn, sau khi kéo kín nhân viên tư vấn ở ngoài rèm tuyệt đối không tự ý vén lên.",
      "Trước gương thử đồ sát đất có trang bị giá đỡ điện thoại góc chụp từ trên xuống, có thể quay rõ nét động tác thử đồ.",
      "Có thể đặt hẹn trước với chủ tiệm để may đo sườn xám cải tiến xẻ tà siêu cao và đồ bó sát chất liệu latex."
    ],
    "events": [
      {
        "id": "evt_gl_boutique_panty",
        "title": "Yêu cầu thả rông thanh toán sau rèm thay đồ",
        "场所": "Phòng thử đồ VIP cửa hàng thời trang",
        "优先级": 67,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy đã thay xong chiếc váy liền chiết eo mới chọn, bộ thường phục vừa cởi ra gấp trên ghế da, chiếc quần lót vừa cởi đặt ở ngay trên cùng. Cách ngoài rèm chưa đầy một mét, nhân viên tư vấn đang giới thiệu quần áo cho khách khác.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khen chiếc váy này rất hợp với khí chất của cô ấy và chủ động thanh toán, giúp cô ấy chỉnh lại cổ áo",
            "结算": "Độ hảo cảm+20, Tiền bạc-280, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy đưa chiếc quần lót vừa cởi cho bạn cất vào túi áo, dưới váy thả rông không mặc gì bước ra khỏi phòng thay đồ chọn quần áo khác rồi thanh toán",
            "结算": "Độ thuận tùng+30, Kinh nghiệm chụp lén+1, Kinh nghiệm phơi bày+1, Đồ dùng túi đồ+Đồ lót của bạn đồng hành, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_gl_boutique_mirror",
        "title": "Kết hợp trước gương sát đất bên trong rèm thử đồ",
        "场所": "Phòng thử đồ VIP cửa hàng thời trang",
        "优先级": 73,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Rèm nhung phòng thay đồ kéo chặt, gương sát đất phản chiếu bóng dáng hai người. Ngoài rèm nhân viên tư vấn đang sắp xếp móc treo đồ, tiếng móc nhựa va vào nhau chỉ cách đúng một bước chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ôm lấy vòng eo cô ấy từ phía sau, khẽ khen một câu bên tai cô ấy rồi buông ra",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy chống hai tay lên gương sát đất cong mông lên, tự thò tay xuống dưới váy vuốt ve hạ thể ướt đẫm, không được phát ra tiếng động",
            "结算": "Độ thuận tùng+25, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Ngay lúc nhân viên tư vấn ở ngoài rèm hỏi đồ có vừa không, vén váy cô ấy lên bịt miệng cô ấy lại, từ phía sau đâm lút cán dương vật vào hạ thể thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "MUSE洋房买手店"
  },
  {
    "id": "wx_adult_shop",
    "name": "Quán đồ người lớn bí mật Ái Thần",
    "fullName": "Khu Ô Khê · Quán đồ người lớn bí mật Ái Thần",
    "district": "Khu Ô Khê",
    "archetype": "adult",
    "privacy": 4,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Quán tình thú người lớn chuyên nghiệp nằm sâu trong con hẻm nước cổ. Sảnh trưng bày bày bán trứng rung, dầu bôi trơn gốc nước và nội y tình thú; bên trong có phòng suite trải nghiệm VIP cách âm học hoàn toàn, trang bị giường nước giữ nhiệt và giá trói buộc bằng da, chuyên phục vụ các cặp đôi mua sắm riêng tư, đeo trứng rung đi dạo và trải nghiệm kết hợp trên giường nước.",
    "draw": "Chọn mua đồ dùng tình thú. Bên trong có phòng suite cách âm khóa trái, thích hợp đeo trứng rung dạo phố, trói buộc trên giá da và ẩn gian trên giường nước.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng suite trải nghiệm trang bị cửa chống trộm cách âm học hai lớp, sau khi khóa trái âm thanh trong phòng tuyệt đối không lọt ra ngoài.",
      "Trong tiệm có sẵn hàng dự trữ các loại trứng rung, khóa miệng (ballgag) và trang bị trói buộc bằng da.",
      "Sau khi chi tiêu đạt mức có thể hỏi thăm chủ tiệm về buổi tụ họp salon bí mật dưới lòng đất."
    ],
    "events": [
      {
        "id": "evt_wx_adult_browse",
        "title": "Đeo trứng rung đi dạo cạnh kệ trưng bày",
        "场所": "Bên trong sảnh trưng bày quán tình thú",
        "优先级": 48,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Sảnh trưng bày đang phát nhạc nhẹ, ánh đèn màu ấm chiếu lên các loại dụng cụ và nội y tình thú. Nhân viên cửa hàng ngồi đối chiếu hóa đơn ở quầy lễ tân, xung quanh không có khách nào khác, cô ấy đỏ mặt đi bên cạnh bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dẫn cô ấy chọn mua tinh dầu hương thơm dịu nhẹ và sữa dưỡng thể, tránh xa các kệ hàng lộ liễu",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550, Túi đồ có: Trứng rung điều khiển từ xa không dây",
            "选项": "Bảo cô ấy ở góc khuất kệ hàng nhét trứng rung vào trong cơ thể, để bạn cầm điều khiển từ xa dẫn cô ấy đi xem nội y tình thú qua từng kệ hàng một",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_wx_adult_bind",
        "title": "Giá trói buộc trong phòng suite cách âm",
        "场所": "Phòng suite cách âm trải nghiệm tình thú",
        "优先级": 76,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa lớn phòng suite đã khóa trái, hệ thống cách âm học phát huy tác dụng. Bên tường dựng chiếc giá trói buộc bằng da thật, trong khay đặt dây đai da và khóa miệng. Cô ấy đứng trước giá chờ tương tác với bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cất dụng cụ trói buộc vào lại trong tủ, nắm tay cô ấy ngồi xuống giường nước trò chuyện thoải mái",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=650",
            "选项": "Bảo cô ấy cởi sạch quần áo dựa lưng vào giá trói buộc, dùng dây đai da khóa chặt cổ tay cổ chân lên giá, đeo khóa miệng hoàn tất màn đặt để (placement play)",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Tủi thân"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Trong căn phòng suite cách âm đã khóa trái, đè cô ấy xuống chiếc giường nước giữ nhiệt cởi bỏ quần lót, vươn người đâm vào hạ thể làm tình trên mặt giường nước dập dờn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "爱神秘密情趣馆"
  },
  {
    "id": "lx_library",
    "name": "Trung tâm tự học yên tĩnh Làng Đại học",
    "fullName": "Khu Lạc Hà · Trung tâm tự học yên tĩnh Làng Đại học",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Không gian tự học chia sẻ mở cửa 24 giờ hướng tới sinh viên các trường đại học. Bàn dài gỗ thịt được trang bị tấm chắn chống nhìn lén rủ sâu tới tận bắp chân. Đêm khuya toàn trường yên tĩnh, thường có sinh viên mệt mỏi gục mặt xuống bàn ngủ say. Tấm chắn sâu dưới gầm bàn tạo thành điểm mù tuyệt đối, cực kỳ thích hợp triển khai khẩu giao thả rông dưới gầm bàn, đeo trứng rung dưới bàn và vuốt ve khi gục bàn chợp mắt.",
    "draw": "Tự học xuyên đêm. Tấm chắn bàn gỗ thịt che chắn kín đáo, thích hợp tương tác khẩu giao dưới gầm bàn, lén bật trứng rung và vuốt ve khi chợp mắt dưới bàn.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Tấm chắn bằng gỗ phía dưới bàn dài tự học rủ sâu tới bắp chân, ngồi ở lối đi hoàn toàn không nhìn thấy động tác dưới gầm bàn.",
      "Nửa đêm về sáng sinh viên ôn thi phần lớn đã chìm vào giấc ngủ say, trong phòng tự học tĩnh lặng không một tiếng động.",
      "Ở góc phòng có vách ngăn in ấn tĩnh âm không lắp camera giám sát."
    ],
    "events": [
      {
        "id": "evt_lx_lib_desk",
        "title": "Tương tác trong góc tối dưới bàn dài đêm khuya",
        "场所": "Dưới gầm bàn dài phòng tự học",
        "优先级": 62,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Nửa đêm về sáng đèn lớn ngoài sảnh đã tắt, chỉ còn đèn bàn trước mặt đang sáng. Sinh viên ở chỗ ngồi đối diện đang gục mặt trên bàn ngủ say, tấm chắn dưới gầm bàn che chắn kín mít. Cô ấy ngồi bên cạnh khẽ lật xem tài liệu ôn tập.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Khẽ giúp cô ấy lật sang trang ghi chép tiếp theo, yên lặng bầu bạn cùng cô ấy hoàn thành buổi ôn tập tối nay",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Dưới sự che chắn của tấm ván bàn, thò tay luồn vào dưới đáy váy cô ấy vuốt ve hạ thể ướt đẫm, bắt cô ấy giữ sắc mặt không đổi tiếp tục đọc sách, không được phát ra tiếng động",
            "结算": "Độ thuận tùng+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy chui xuống dưới gầm bàn dài quỳ giữa hai chân bạn kéo khóa quần ra, giữa tiếng hít thở ngủ say của người bạn học đối diện mà ngậm nuốt khẩu giao cho bạn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "大学城静音自习中心"
  },
  {
    "id": "xz_sound_studio",
    "name": "Xưởng âm học chuyên nghiệp Cực Quang",
    "fullName": "Khu Tây Châu · Xưởng âm học chuyên nghiệp Cực Quang",
    "district": "Khu Tây Châu",
    "archetype": "live",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Phòng thu âm học chuyên nghiệp và studio bắt chuyển động ảo (motion capture). Trang bị micro mô phỏng đầu người (dummy head), phông xanh bắt chuyển động và bàn điều chỉnh âm thanh cỡ lớn. Khi thu âm xuyên đêm, cửa cách âm khóa trái từ bên trong không có người ngoài làm phiền; ống kính bắt chuyển động chỉ kết xuất mô hình ảo, gầm bàn điều khiển của streamer thuộc điểm mù tuyệt đối của khung hình phát sóng, thích hợp triển khai tương tác khẩu giao dưới gầm bàn, thu âm tiếng thở dốc chân thực và kết hợp khi đang bắt chuyển động.",
    "draw": "Thu âm học và làm thêm bắt chuyển động. Hỗ trợ thu âm tiếng thở dốc khi kích thích bằng ngón tay trước micro, khẩu giao dưới gầm bàn điều khiển bắt chuyển động và Play phát sóng nhạy cảm.",
    "features": {
      "canGather": false,
      "canDate": false,
      "canWork": true,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Micro mô phỏng đầu người thu âm cực nhạy, tiếng nước nhỏ li ti và tiếng thở dốc đều có thể bắt được rõ nét.",
      "Ống kính bắt chuyển động chỉ theo dõi các điểm nút cơ thể để kết xuất mô hình 3D, phía dưới bàn điều chỉnh âm thanh là góc chết tuyệt đối của khung hình phát sóng.",
      "Cửa cách âm chuyên nghiệp hai lớp sau khi khóa chặt tạo thành không gian khép kín tĩnh âm tuyệt đối."
    ],
    "events": [
      {
        "id": "evt_xz_studio_live",
        "title": "Tương tác điểm mù dưới gầm bàn khi đang phát sóng phông xanh",
        "场所": "Dưới gầm bàn điều khiển bắt chuyển động",
        "优先级": 78,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy mặc bộ đồ bắt chuyển động bó sát mở sóng trước phông xanh, trên màn hình mô hình 3D đáng yêu đang tương tác với bình luận, phía dưới bàn điều khiển hoàn toàn nằm ngoài ống kính. Cửa cách âm đã khóa chặt.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Ngồi ở góc chết giúp cô ấy xem bình luận và mức âm lượng, bầu bạn cùng cô ấy hoàn thành buổi phát sóng ban đêm thuận lợi",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=80, 顺从度>=600",
            "选项": "让她脱掉下半身动捕服钻进操作台桌底，在虚拟形象正常互动的掩护下，在桌底为你口交吞吐并完成性直播",
            "结算": "性欲度重置, 顺从度+30, 性直播经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=80, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy cởi bỏ nửa dưới bộ đồ bắt chuyển động chui xuống dưới gầm bàn điều khiển, dưới sự che chở của hình tượng ảo đang tương tác bình thường, ở dưới gầm bàn ngậm nuốt khẩu giao cho bạn và hoàn thành buổi phát sóng nhạy cảm",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm phát sóng nhạy cảm+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_studio_mic",
        "title": "Thu âm chân thực trước micro mô phỏng đầu người",
        "场所": "Trước micro mô phỏng đầu người trong phòng thu",
        "优先级": 68,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy đeo tai nghe kiểm âm đứng trước chiếc micro mô phỏng đầu người cực nhạy chuẩn bị thu âm, cửa cách âm đã khóa trái hoàn toàn, trong phòng chỉ có đèn báo thiết bị nhấp nháy nhẹ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy điều chỉnh độ cao micro và màng chắn gió (pop filter), đứng sang một bên khẽ giọng cổ vũ cô ấy",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bước tới phía sau cô ấy vén chân váy ngắn lên, ngay trước micro đâm ngón tay vào hạ thể ướt át của cô ấy thúc ngoáy nhanh bằng ngón tay, thu lại tiếng thở dốc chân thực và tiếng nước sát ngay bên micro của cô ấy",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "极光专业声学工坊"
  },
  {
    "id": "xz_esports",
    "name": "Khoang Esports Tinh Mang Thứ Nguyên",
    "fullName": "Khu Tây Châu · Khoang Esports Tinh Mang Thứ Nguyên",
    "district": "Khu Tây Châu",
    "archetype": "live",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khoang phát sóng Esports cách âm trực thuộc căn cứ MCN. Bên trong lắp đặt hai góc máy chuyên nghiệp, trọn bộ thiết bị ngoại vi và cửa mút tiêu âm độ giảm chấn cao, sau khi khóa chặt sẽ ngăn cách hoàn toàn với bên ngoài. Phía dưới bàn Esports sở hữu điểm mù đi dây siêu sâu, góc máy quay hoàn toàn không quay tới gầm bàn; trong lúc bật mic thoại đội chơi xếp hạng hoặc phát sóng trực tiếp, cực kỳ thích hợp tiến hành tương tác khẩu giao dưới gầm bàn và làm tình tư thế cưỡi ngựa mặt đối mặt dưới lớp áo khoác dài che phủ.",
    "draw": "Huấn luyện Esports chuyên nghiệp và phát sóng trực tiếp. Tương tác khẩu giao dưới gầm bàn khi đang nối mic đấu xếp hạng, lấy áo khoác lớn che phủ kết hợp cưỡi ngựa mặt đối mặt và Play đeo trứng rung phát sóng.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Điểm mù máng đi dây phía dưới bàn Esports hoàn toàn tránh khỏi ống kính phát sóng, thích hợp quỳ gối tương tác khẩu giao dưới gầm bàn.",
      "Cửa khoang cách âm có khóa trong độc lập, sau khi khóa chặt tiếng rên rỉ âm lượng cao sẽ không truyền ra hành lang.",
      "Có thể mua nội bộ miếng dán bắt chuyển động phát sóng, trứng rung không dây ngoại vi và các nguyên liệu đạo cụ điều giáo khác."
    ],
    "events": [
      {
        "id": "evt_xz_esports_oral",
        "title": "Tương tác khẩu giao sâu trong cổ họng dưới gầm bàn khi đang đấu xếp hạng",
        "场所": "Dưới bàn streamer trong khoang Esports",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong tai nghe kênh thoại đội đang báo vị trí kịch liệt, trên màn hình giao tranh tổng sắp sửa nổ ra. Cô ấy ngồi trên chiếc ghế Esports phụ bên cạnh nhìn bạn thao tác, cửa khoang cách âm đóng chặt.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa cho cô ấy một lon nước tăng lực, để cô ấy ngồi bên cạnh giúp bạn quan sát động tĩnh của địch trên bản đồ nhỏ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Kéo khóa quần ra, bảo cô ấy chui xuống dưới gầm bàn Esports quỳ giữa hai chân bạn, ngay trong lúc đang bật mic thoại đội đánh giao tranh tổng mà ngậm dương vật vào miệng nuốt sâu tận họng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_xz_esports_ride",
        "title": "Ẩn gian cưỡi ngựa mặt đối mặt dưới lớp áo khoác lớn che phủ",
        "场所": "Trên ghế Esports của streamer",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong lúc chờ ghép trận đấu xếp hạng, micro đang ở trạng thái tắt tiếng. Cô ấy mặc váy ngắn ngồi trên ghế bành bên cạnh xoa cổ tay, chiếc áo khoác đồng phục đội dáng dài rộng rãi vắt trên lưng ghế.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khoác chiếc áo đồng phục đội lên vai cô ấy, nắm tay cô ấy giúp cô ấy xoa bóp thả lỏng những ngón tay đang mỏi nhừ",
            "结算": "Độ hảo cảm+25, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她脱掉内裤面对面跨坐在你大腿上，把肉棒插进湿透的下体，用宽大的队服外套盖住两人的下半身，在游戏匹配进图时抱着她上下起伏抽插",
            "结算": "性欲度重置, 顺从度+40, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy cởi quần lót ngồi dạng chân mặt đối mặt trên đùi bạn, đâm dương vật vào hạ thể ướt đẫm, dùng chiếc áo khoác đồng phục rộng lớn che kín nửa thân dưới của hai người, vừa ôm cô ấy nhấp nhô thúc đẩy vừa chờ game ghép trận vào bản đồ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "星芒次元电竞舱"
  },
  {
    "id": "lx_archive",
    "name": "Viện cổ tịch Đại học Lạc Hà",
    "fullName": "Khu Lạc Hà · Viện cổ tịch Đại học Lạc Hà",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Thư viện đặc tàng văn hiến cổ tịch có lịch sử lâu đời của Đại học Lạc Hà. Dưới khung cửa sổ chấn song gỗ cao vút xếp ngay ngắn những chiếc bàn lớn phục chế bằng gỗ trầm hương và các phòng nghiên cứu độc lập. Sau buổi tuần tra buổi chiều không gian tĩnh mịch tột độ, chỉ có thể nghe thấy tiếng lật sách sột soạt. Chiếc bàn lớn gỗ trầm hương và dây tơ đóng sách cổ cực kỳ thích hợp để tiến hành ẩn gian kìm nén không tiếng động và điều giáo trói hai tay.",
    "draw": "Tra cứu cổ tịch, trải nghiệm phục chế sách cổ. Vén váy ẩn gian trên bàn phục chế lớn, Play trói hai tay bằng dây tơ tằm đóng sách.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Sau khi thủ thư tuần tra buổi chiều xong cho tới lúc đóng cửa toàn khu vực không có người, bên trong phòng nghiên cứu cực kỳ yên tĩnh và cách âm tốt.",
      "Trên bàn phục chế có chuẩn bị sẵn dây tơ tằm mảnh độ bền cao dùng để đóng sách khâu chỉ và nguyên liệu thuốc mỡ Đông y chống mối mọt.",
      "Bàn lớn bằng gỗ thịt dài tới hai mét, bằng phẳng rộng rãi, vô cùng chắc chắn."
    ],
    "events": [
      {
        "id": "evt_lx_archive_desk",
        "title": "Tiến vào từ phía sau kìm nén không tiếng động trên bàn phục chế lớn",
        "场所": "Cạnh bàn lớn phục chế cổ tịch",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa gỗ dày của phòng nghiên cứu đóng chặt, ngoài cửa sổ bóng trúc đung đưa. Cô ấy đang cúi người trước chiếc bàn phục chế gỗ tử đàn rộng hai mét cẩn thận lật xem cuốn cổ tịch giấy tuyên, ngoài hành lang thỉnh thoảng vọng lại tiếng bước chân chậm rãi đi ngang qua của vị thủ thư già.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi xuống cạnh cô ấy giúp cô ấy giữ chặt trang giấy tuyên, cùng cô ấy đối chiếu từng câu chữ trên văn hiến",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy chống hai tay lên bàn gỗ tử đàn, vén váy cởi quần lót ra, giữa sự yên tĩnh tột độ khi ngoài cửa bất cứ lúc nào cũng có người đi qua mà thò ngón tay vào móc ngoáy nhanh hạ thể, dùng tay bịt miệng cô ấy không cho phát ra dù chỉ một tiếng động",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Ấn lưng cô ấy xuống bắt nằm sấp trên bàn phục chế, từ phía sau đâm dương vật vào sâu trong hạ thể ướt mềm, bịt miệng cô ấy thúc sâu đầy kìm nén trong thư viện cổ tịch tĩnh lặng như tờ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_archive_rope",
        "title": "Trói ngược hai tay bằng dây tơ tằm đóng sách khâu chỉ",
        "场所": "Phòng nghiên cứu phục chế cổ tịch",
        "优先级": 70,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            370,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cạnh mặt bàn xếp ngay ngắn mấy cuộn dây tơ tằm đóng sách chưa qua sử dụng. Ánh hoàng hôn xuyên qua cửa sổ chấn song gỗ chiếu lên giá sách, còn hơn nửa tiếng nữa mới tới giờ đóng cửa. Cô ấy đứng trước bàn sắp xếp lại các bản dập văn bia.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy xếp các bản dập vào hộp giấy không axit, thu dọn gọn gàng mặt bàn chuẩn bị rời đi",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Lấy sợi dây tơ tằm đóng sách mềm mại chắc chắn trói ngược hai tay cô ấy ra sau lưng, vén váy bắt cô ấy quỳ ngồi trước mặt bàn, dùng tay xoa nắn đầu ngực căng tức và hạ thể ướt đẫm của cô ấy",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "落霞大学古籍文献馆"
  },
  {
    "id": "gl_pet",
    "name": "Bệnh viện thú y Babi Đường",
    "fullName": "Khu Cổ Lĩnh · Bệnh viện thú y Babi Đường",
    "district": "Khu Cổ Lĩnh",
    "archetype": "medical",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Bệnh viện thú y chuỗi cao cấp cải tạo từ căn biệt thự kiểu Pháp độc lập. Quầy lễ tân trưng bày vòng cổ da thật cao cấp và dây dắt bằng da, sảnh sau trang bị bàn tắm gội làm đẹp bằng thép không gỉ và phòng khám cách ly có chốt cài. Nhân viên y tế trực ca đêm thường tán gẫu hút thuốc ở sân sau, sảnh trước và phòng khám rơi vào trạng thái không người quản lý, cực kỳ thích hợp tiến hành màn tình thú cún con đeo vòng cổ dắt dây và ẩn gian trên giường cách ly.",
    "draw": "Chăm sóc y tế thú cưng và chọn mua đồ da. Tình thú cún con đeo vòng cổ da thật dắt dây trên bàn làm đẹp thép không gỉ, khóa trái phòng khám cách ly ẩn gian.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Tủ kính quầy lễ tân trưng bày vòng cổ da thật chế tác thủ công cao cấp, dây dắt da cùng nguyên liệu gel siêu bôi trơn y tế.",
      "Nhân viên trực ban ở sân sau vào ban đêm thường xuyên không có mặt tại vị trí, phòng khám cách ly có chốt kim loại có thể khóa trái từ bên trong.",
      "Bàn làm đẹp bằng thép không gỉ có trang bị trụ cố định tắm gội, bề mặt mát lạnh bằng phẳng."
    ],
    "events": [
      {
        "id": "evt_gl_pet_collar",
        "title": "Tương tác tình thú cún con đeo vòng cổ trên bàn làm đẹp thép không gỉ",
        "场所": "Phòng tắm gội làm đẹp thú cưng",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng làm đẹp bật đèn ánh sáng lạnh, bác sĩ trực ca đã ra sân sau hút thuốc. Trên kệ hàng đặt một chiếc vòng cổ đinh tán bằng da thật màu đen chế tác tinh xảo. Cô ấy đứng trước bàn làm đẹp thép không gỉ nhìn vào gương.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Cầm bình xịt khử trùng khô giúp cô ấy làm sạch hai tay, kéo cô ấy ra khu nghỉ ngơi sân sau ngắm mèo con",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi sạch quần áo toàn thân bò lên mặt bàn thép không gỉ mát lạnh, đeo vòng cổ da thật và cài dây dắt cho cô ấy, chơi trò tình thú cún con với cô ấy, để cô ấy chống cả tứ chi bò lại gần dùng lưỡi liếm láp ngón chân và mũi giày của bạn",
            "结算": "Độ thuận tùng+40, Kinh nghiệm nhập vai tình thú+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_gl_pet_room",
        "title": "Khóa cửa tiến vào từ phía sau tại phòng khám cách ly cuối hành lang",
        "场所": "Giường khám bệnh phòng khám cách ly",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chốt cửa kim loại của phòng khám cách ly ở cuối hành lang đã cài chặt, ngoài cửa chỉ có thể nghe thấy tiếng động yếu ớt từ những lồng lưu viện. Chính giữa phòng khám đặt chiếc giường khám bệnh trải tấm lót vệ sinh dùng một lần.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dìu cô ấy ngồi xuống mép giường khám nghỉ ngơi, đưa nước ấm bầu bạn cùng cô ấy chờ kết quả xét nghiệm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她趴在铺着一次性垫单的诊疗床上撩起裙子，从身后把肉棒捅入湿热的下体，在紧锁的诊室内快速后入抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp trên giường khám trải tấm lót dùng một lần rồi vén váy lên, từ phía sau đâm dương vật vào hạ thể ướt nóng, thúc nhanh từ phía sau trong căn phòng khám đã khóa chặt",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "芭比堂宠物医院"
  },
  {
    "id": "mh_dept",
    "name": "Trung tâm thương mại Quốc tế Kim Ưng",
    "fullName": "Khu Minh Hồ · Trung tâm thương mại Quốc tế Kim Ưng",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 1,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Trung tâm thương mại bách hóa cao cấp thuộc khu thương mại lõi Minh Hồ. Tầng cao có quầy nội y xa xỉ, phòng thay đồ và nhà vệ sinh dành cho người khuyết tật độc lập. Phòng thử đồ VIP được trang bị rèm kéo nhung dày nặng và gương soi toàn cảnh sát đất, nhân viên tư vấn thường đứng đợi ở ngoài rèm cách nửa mét để đưa kích cỡ đồ; dưới nhịp tim đập thình thịch khi nhân viên hỏi chuyện ở khoảng cách cực gần ngoài rèm, đây là địa điểm tuyệt hảo để ẩn gian tiến vào từ phía sau trước gương thử đồ và Play mặc nội y thả rông đi ra ngoài.",
    "draw": "Mua sắm bách hóa cao cấp. Ẩn gian tiến vào từ phía sau bên trong rèm thử đồ VIP, thúc sâu trước gương khi nhân viên tư vấn hỏi chuyện ngoài cửa và thả rông mặc nội y tình thú ra thanh toán.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Rèm kéo phòng thử đồ VIP quầy nội y cao cấp được làm dày cản sáng, gương sát đất bên trong rèm nhìn cực rõ, nhân viên tư vấn ngoài rèm ở ngay trong gang tấc.",
      "Nhà vệ sinh dành cho người khuyết tật độc lập ở góc trung tâm thương mại trang bị khóa cơ học, không gian bên trong rộng rãi.",
      "Có thể mua nội y tình thú phối ren, tất lụa và nguyên liệu vải may mặc cao cấp."
    ],
    "events": [
      {
        "id": "evt_mh_dept_curtain",
        "title": "Tiến vào từ phía sau trước gương bên trong rèm thử đồ VIP khi có nhân viên ở ngoài",
        "场所": "Phòng thử đồ quầy chuyên doanh nội y",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm thử đồ bằng nhung dày nặng đã kéo kín mít, chiếc gương sát đất phản chiếu bóng dáng cô ấy vừa mới thay bộ nội y ren bán trong suốt. Nhân viên tư vấn đang đứng cách ngoài rèm nửa mét gõ nhẹ hỏi xem kích cỡ có vừa vặn không.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cách một lớp rèm giúp cô ấy xác nhận với nhân viên tư vấn là kích cỡ vừa vặn, rút thẻ tín dụng thanh toán toàn bộ giúp cô ấy",
            "结算": "Độ hảo cảm+25, Tiền bạc-350, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy trực tiếp cởi chiếc quần lót cũ ra cất vào trong túi, chỉ mặc chiếc quần lót dây (T-back) bằng ren trong suốt mới mua rồi mặc váy ngoài vào, cứ thế thả rông bước ra quầy thu ngân thanh toán",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Ngay khoảnh khắc nhân viên tư vấn ngoài rèm lên tiếng hỏi, từ phía sau vén mạnh váy cô ấy lên đâm dương vật vào lối hoa ướt đẫm, bịt miệng cô ấy đè trước gương sát đất thúc sâu mãnh liệt, ép cô ấy phải dùng giọng run rẩy trả lời nhân viên tư vấn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "金鹰国际购物中心"
  },
  {
    "id": "ys_station",
    "name": "Ga tàu cao tốc Nam Lâm Giang",
    "fullName": "Khu Vũ Thạch & Phố Giang · Ga tàu cao tốc Nam Lâm Giang",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 0,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đầu mối giao thông tàu cao tốc hạng đặc biệt quy mô lớn. Ban ngày sảnh chờ tàu biển người đông nghịt; đêm khuya sau khi chuyến tàu cuối cùng khởi hành, đèn lớn trong sảnh giảm độ sáng, trống trải vắng lặng, chỉ còn tiếng máy lau sàn ầm ầm. Điểm mù giữa các dãy ghế chờ sâu trong sảnh cùng phòng nghỉ mẹ và bé có khóa cơ học cực kỳ thích hợp để triển khai kích thích bằng tay tại điểm mù dưới lớp áo măng tô dài che chắn và tiến vào từ phía sau trên ghế kim loại lạnh lẽo lúc đêm khuya.",
    "draw": "Đưa đón khách đi công tác du lịch và chờ tàu. Vuốt ve tại điểm mù dưới lớp áo măng tô dài ở sảnh chờ, tiến vào từ phía sau trên mặt ghế kim loại lạnh lẽo giữa sảnh chờ trống trải lúc đêm khuya.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Khoảng cách trước sau giữa các dãy ghế sảnh chờ khá hẹp, sau khi ngồi xuống dùng áo măng tô lớn đắp lên đùi có thể tạo thành sự che chắn tầm nhìn hoàn hảo.",
      "Sau một giờ đêm loa phát thanh trong sảnh ngừng hoạt động, tiếng máy lau sàn trầm đục ở phía xa tạo ra âm thanh nền che chắn liên tục.",
      "Cửa hàng tiện lợi 24h trong ga cung cấp đồ uống giúp tỉnh táo và nguyên liệu túi đồ vệ sinh cá nhân cầm tay."
    ],
    "events": [
      {
        "id": "evt_ys_station_coat",
        "title": "Vuốt ve điểm mù dưới lớp áo măng tô dài ở sảnh chờ",
        "场所": "Dãy ghế liền kề sảnh chờ tàu",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trước cổng soát vé ngồi kín hành khách đang chờ tàu chạy, loa phát thanh đang thông báo thông tin chuyến tàu. Hai người ngồi sóng đôi trên dãy ghế kim loại liền kề, chiếc áo măng tô dài màu đen rộng lớn đắp lên đầu gối hai người, cô ấy đang nhìn màn hình lớn soát vé phía trước.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa cho cô ấy một hộp cà phê nóng, nắm tay cô ấy bầu bạn cùng cô ấy yên lặng chờ soát vé lên tàu",
            "结算": "Độ hảo cảm+15, Tiền bạc-18, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Dưới sự che chắn của chiếc áo măng tô dài, luồn tay vào dưới đáy váy cô ấy kéo lệch mép quần lót, trực tiếp dùng ngón tay xoa nắn hạ thể ướt đẫm, ngắm nhìn cô ấy đỏ mặt cố tỏ ra bình tĩnh giữa hoàn cảnh phía trước phía sau đều ngồi kín hành khách",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_ys_station_night",
        "title": "Tiến vào từ phía sau trên dãy ghế kim loại trống trải sau chuyến tàu cuối",
        "场所": "Cạnh dãy ghế chờ tàu đêm khuya",
        "优先级": 72,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chuyến tàu cao tốc cuối cùng đã rời ga, màn hình trong sảnh toàn bộ tắt đen, cách đó mấy chục mét chỉ có một nhân viên vệ sinh đang lái xe lau sàn làm sạch mặt đất. Cô ấy ngồi ở mép dãy ghế kim loại mát lạnh cử động bắp chân đang mỏi tê.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cởi áo khoác đắp lên người cô ấy, tìm một chiếc ghế đệm khuất gió bầu bạn cùng cô ấy ngồi sóng đôi nghỉ ngơi chờ chuyến tàu sớm",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她双手抓着冰凉的金属椅背撅起屁股，从身后把肉棒捅入湿滑的下体，在洗地机轰鸣的掩护下在空旷候车大厅里用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay nắm lấy lưng ghế kim loại mát lạnh cong mông lên, từ phía sau đâm dương vật vào hạ thể ướt mượt, dưới sự che chở của tiếng máy lau sàn ầm ầm mà ra sức thúc đẩy giữa sảnh chờ trống trải",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "临江南站高铁枢纽"
  },
  {
    "id": "mh_lake",
    "name": "Đường xanh quanh hồ Minh Hồ",
    "fullName": "Khu Minh Hồ · Đường xanh quanh hồ Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đường dạo bộ ven nước được xây dựng bao quanh hồ Minh Hồ. Cạnh bãi lau sậy ở đoạn giữa có một rừng liễu rủ, sâu bên trong ẩn giấu bậc đá sát mặt nước bằng xi măng vươn ra lòng hồ, cành liễu rủ xuống chạm mặt nước tạo thành bức rèm xanh khép kín, từ đường chạy bộ chính hoàn toàn không nhìn thấy góc chết bên trong. Thích hợp triển khai đánh phạt mông bằng cành liễu xanh mảnh dẻo dai và làm tình ngoài trời (thanh gian) bên bờ hồ.",
    "draw": "Dạo bộ ven hồ và ngắm cảnh. Làm tình ngoài trời bên bờ hồ trên bậc đá sát nước có rừng liễu che khuất, dùng cành liễu xanh mảnh dẻo quất vào mông trần đánh phạt.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh vùng ngập nước và gốc cây liễu có thể thu thập nguyên liệu thực vật thủy sinh hoang dã và hạt vi sinh phù du phát sáng ban đêm.",
      "materials": [
        "Nguyên liệu thực vật thủy sinh ven hồ",
        "Chiết xuất hơi nước mặt hồ buổi sớm mai",
        "Nguyên liệu bồi bổ nước ngọt hoang dã",
        "Hạt vi sinh phù du phát sáng ban đêm"
      ]
    },
    "special": [
      "Bậc đá sát mặt nước sâu trong rừng liễu rủ được cành liễu rậm rạp bao quanh hoàn toàn, tạo thành điểm mù ngoài trời tự nhiên không góc chết.",
      "Sau mười giờ đêm đèn đường ven hồ giảm sáng, không có du khách hay xuồng tuần tra làm phiền.",
      "Tiếng sóng nước vỗ bờ ven hồ đều đặn êm ả, hiệu quả che lấp âm thanh cực tốt."
    ],
    "events": [
      {
        "id": "evt_mh_lake_whip",
        "title": "Đánh phạt mông trần bằng cành liễu xanh mảnh dẻo dai",
        "场所": "Sâu trong rừng liễu ven hồ",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người chui vào sâu trong rừng liễu rủ u tối, bốn phía được những cành liễu dày đặc che chắn kín mít. Bạn tiện tay bẻ một cành liễu xanh mảnh đẫm sương đêm cực kỳ dẻo dai, vung thử trong không khí phát ra tiếng vun vút. Cô ấy đứng trước gốc cây liễu cúi thấp đầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Tết cành liễu thành một vòng hoa nhỏ đội lên đầu cô ấy, nắm tay cô ấy bước ra khỏi rừng liễu tới ghế dài ven bờ hóng gió",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi quần chống hai tay lên thân cây liễu cong mông lên, vung cành liễu mảnh quất lên bờ mông trần trụi của cô ấy, cứ mỗi roi quất xuống lại để lại một vệt lằn đỏ tươi, ngắm nhìn cô ấy cắn môi run rẩy chịu đau",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_mh_lake_stone",
        "title": "Làm tình ngoài trời bên bờ hồ trên bậc đá sát nước có rừng liễu che khuất",
        "场所": "Bậc đá sát mặt nước ven hồ",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước xuống bậc đá xi măng sát mặt nước được cành liễu rủ bao quanh, dưới chân là làn nước hồ khẽ vỗ bờ, cành liễu giống như bức rèm cửa chắn sạch toàn bộ tầm nhìn từ đường chạy bộ phía trên. Gió đêm thổi nhẹ, hơi nước mát lành. Cô ấy đứng bên bậc đá ngắm nhìn mặt hồ phản chiếu ánh sao.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Trải áo khoác lên bậc đá cho cô ấy ngồi xuống, ngồi sóng đôi bên nhau lắng nghe tiếng nước ngắm nhìn ánh đèn neon bờ bên kia hồ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她的裙子撩到腰间按在亲水石阶的扶栏上，从身后把肉棒插进湿滑的下体，迎着湖面夜风与水浪声激烈后入抽插",
            "结算": "性欲度重置, 顺从度+35, 青奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Vén váy cô ấy lên ngang eo đè lên lan can bậc đá sát mặt nước, từ phía sau đâm dương vật vào hạ thể ướt mượt, đón làn gió đêm mặt hồ và tiếng sóng nước thúc đẩy mãnh liệt từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "明湖环湖绿道"
  },
  {
    "id": "gl_cross_books",
    "name": "Hiệu sách nghệ thuật Tiên Phong Thập Tự",
    "fullName": "Khu Cổ Lĩnh · Hiệu sách nghệ thuật Tiên Phong Thập Tự",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Hiệu sách nhân văn cổ điển hai tầng ở góc phố Cổ Lĩnh. Sàn gỗ thịt, giá sách kịch trần và một cầu thang xoắn ốc bằng gang đúc màu đen. Tầng lửng gác xép tầng hai trải đệm bồ đoàn bông dày và tranh họa báo cổ điển cũ, từ quầy thu ngân tầng một hoàn toàn không nhìn thấy động tĩnh trên tầng lửng. Trước giờ đóng cửa nhân viên ở tầng một tắt đèn đối chiếu sổ sách, tầng lửng mờ tối tĩnh mịch, thích hợp tiến hành ẩn gian không tiếng động trên gác xép và lấy tập sách ảnh che chắn vuốt ve.",
    "draw": "Chọn mua sách ảnh, thưởng thức cà phê. Ẩn gian tiến vào từ phía sau trên đệm bồ đoàn tầng lửng cầu thang xoắn tầng hai, vuốt ve trên sofa dưới sự che chắn của cuốn sách ảnh khổ lớn.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Khu vực đệm bồ đoàn trên tầng lửng nối với cầu thang xoắn bằng gang đúc nằm ở điểm mù tầm nhìn của quầy tầng một, độ riêng tư tốt.",
      "Nửa tiếng trước giờ đóng cửa tầng một tắt đèn theo từng dãy, bên trong tiệm yên tĩnh tột độ.",
      "Quầy chuyên doanh trong tiệm có bán sách ảnh nhiếp ảnh ngách, nhãn sách Exlibris cổ điển và nguyên liệu đồ lưu niệm nghệ thuật."
    ],
    "events": [
      {
        "id": "evt_gl_books_sofa",
        "title": "Vuốt ve trên sofa dưới sự che chắn của cuốn sách ảnh khổ lớn",
        "场所": "Khu sofa sâu trong tầng một hiệu sách",
        "优先级": 64,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Khu vực sofa sâu bên trong ánh sáng mờ tối, cách đó vài mét có độc giả đang chọn sách cạnh giá sách. Trên đầu gối cô ấy mở rộng một cuốn sách ảnh bìa cứng khổ lớn, đang cúi đầu lật xem tranh minh họa trang trong.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Tựa vào cạnh cô ấy cùng cô ấy khẽ lật xem các tác phẩm nhiếp ảnh trong cuốn sách ảnh, tận hưởng khoảng thời gian yên tĩnh thơm mùi sách",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Dưới sự che chắn của cuốn sách ảnh khổ rộng, thò tay từ bên cạnh luồn vào dưới chân váy ngắn của cô ấy vuốt ve hạ thể ướt át, yêu cầu cô ấy khi có độc giả khác đi ngang qua không được phát ra tiếng động và tiếp tục giả vờ lật sách",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_gl_books_loft_sex",
        "title": "Ẩn gian không tiếng động trên đệm bồ đoàn tầng lửng cầu thang xoắn tầng hai",
        "场所": "Tầng lửng gác xép tầng hai hiệu sách",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước lên cầu thang sắt xoắn ốc tới tầng lửng tầng hai, những chiếc đệm bồ đoàn dày trải trên sàn gỗ, nhân viên tầng một đang ở quầy bar kiểm kê sổ sách chuẩn bị đóng cửa, tiếng bước chân vang vọng dưới lầu. Cô ấy quỳ ngồi trên đệm bồ đoàn lật xem tạp chí.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy bước xuống cầu thang xoắn, cùng nhau bước ra khỏi hiệu sách đi dạo phố cổ trước khi nhân viên thông báo đóng cửa",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她按在厚蒲团上脱掉内裤，从身后把肉棒插进下体，在楼下店员随时可能上楼检查的心跳刺激下捂着她的嘴深插抽送",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy xuống chiếc đệm bồ đoàn dày cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể, dưới sự kích thích tim đập thình thịch khi nhân viên dưới lầu bất cứ lúc nào cũng có thể lên kiểm tra mà bịt miệng cô ấy thúc sâu",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "先锋十字文艺书店"
  },
  {
    "id": "wx_huafang",
    "name": "Thuyền hoa du đêm Ô Khê",
    "fullName": "Khu Ô Khê · Thuyền hoa du đêm Ô Khê",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "暮",
      "夜"
    ],
    "intro": "Thuyền gỗ giả cổ du ngoạn ban đêm trên sông phố cổ Ô Khê. Khoang thuyền có chuẩn bị giường êm gỗ hồng mộc, trà thanh và rượu trái cây hoa quế tự ủ, suốt hành trình bốn mươi phút chạy tuyến vòng khép kín không cập bến. Sau khi hạ tấm rèm trúc gấm dày xuống, khoang thuyền tạo thành mật thất di động trên mặt nước; người chèo thuyền ở đuôi thuyền khua mái chèo đều đặn, tiếng nước vang vọng, thích hợp triển khai tự sướng sau rèm voan khi hơi say và ẩn gian trên giường êm thuyền hoa.",
    "draw": "Đi thuyền dạo hẻm nước ban đêm, uống rượu hoa quế. Khoang riêng hạ rèm gấm bốn mươi phút không cập bến tiến vào từ phía sau trên giường êm, hơi say rượu vén váy tự sướng sau rèm voan.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Thuyền hoa sau khi rời bến suốt bốn mươi phút giữa chừng tuyệt đối không cập bến, rèm trúc khoang riêng sau khi hạ xuống tạo thành mật thất trên nước hoàn toàn độc lập.",
      "Người lái đò khua mái chèo ở đuôi thuyền, tiếng nước chảy liên tục có thể che lấp khá tốt động tĩnh bên trong khoang thuyền.",
      "Trên thuyền đặc cung nguyên liệu rượu trái cây ngọt hoa quế tự ủ có hậu vị nồng đượm."
    ],
    "events": [
      {
        "id": "evt_wx_huafang_sober",
        "title": "Hơi say vén váy tự sướng sau rèm voan bên cửa sổ",
        "场所": "Cạnh cửa sổ chạm hoa khoang riêng thuyền hoa",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Thuyền hoa bơi tới giữa lòng sông, đèn lồng đỏ hai bên bờ phản chiếu trên mặt nước. Sau khi uống hết gần nửa bình rượu ngọt hoa quế, gò má cô ấy nóng bừng, hơi chếnh choáng tựa bên khung cửa sổ gỗ chạm hoa đón gió sông.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Rót một chén trà thanh đút cho cô ấy uống giải rượu, kéo rèm cửa sổ lại bầu bạn cùng cô ấy tựa trên giường êm ngắm cảnh nước",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy mượn hơi men vén váy cởi quần lót tựa cạnh tấm rèm voan bán trong suốt, ngay trước bóng dáng du khách trên bờ thấp thoáng nhìn thấy ngoài cửa sổ, dùng ngón tay đâm vào hạ thể ướt đẫm của chính mình móc ngoáy phát ra tiếng nước",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Trạng thái bất thường+Hơi say, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_wx_huafang_cabin_sex",
        "title": "Ẩn gian dập dềnh trên giường êm thuyền hoa không cập bến",
        "场所": "Giường êm gỗ hồng mộc khoang riêng thuyền hoa",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm trúc bọc gấm dày của khoang riêng đã buông xuống kín mít, người lái đò ở đuôi thuyền khua mái chèo từng nhịp một, thân thuyền khẽ chao đảo theo sóng nước, còn nửa tiếng nữa mới cập bến. Cô ấy ngồi trên giường êm gỗ hồng mộc vuốt lại những sợi tóc bị gió thổi rối.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Sóng vai tựa trên giường êm nắm lấy tay cô ấy, cùng lắng nghe tiếng khua mái chèo tận hưởng khoảng thời gian bình yên trên mặt nước",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她按在摇晃的红木软榻上掀起裙子，从身后把肉棒插进湿滑的下体，就着船夫摇橹的水声与船体晃动在密闭包舱里用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy xuống chiếc giường êm gỗ hồng mộc đang đung đưa rồi vén váy lên, từ phía sau đâm dương vật vào hạ thể ướt mượt, nương theo tiếng nước khua chèo của người lái đò và độ chao đảo của thân thuyền mà ra sức thúc đẩy trong khoang riêng khép kín",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "乌溪夜航画舫"
  },
  {
    "id": "wx_mendong",
    "name": "Khu phố lịch sử Lão Môn Đông",
    "fullName": "Khu Ô Khê · Khu phố lịch sử Lão Môn Đông",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 1,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu phố lát đá xanh phía Nam phố cổ Ô Khê. Hai bên đường san sát các tiệm trải nghiệm Hán phục và quán ăn vặt truyền thống. Đêm khuya sau khi du khách đã tản đi hết, ngõ cụt tường đầu ngựa (Mã đầu tường) ở cuối hẻm trong không cửa sổ, không cửa ra vào và không có camera giám sát, chỉ có một chiếc đèn lồng đỏ chiếu sáng bức tường đá. Cực kỳ thích hợp triển khai thả rông hoàn toàn nửa thân dưới bên trong váy Nhu quần tề ngực / sườn xám đi dạo phố và đè vào tường làm tình ngoài trời trong ngõ cụt.",
    "draw": "Thuê Hán phục sườn xám dạo phố, ăn quà vặt. Mặc cổ trang cầu kỳ nhưng nửa thân dưới thả rông hoàn toàn đi dạo phố vuốt ve, đè vào tường làm tình ngoài trời dưới bức tường đầu ngựa trong ngõ cụt.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Tiệm cho thuê cổ trang cung cấp Hán phục lụa tơ tằm cao cấp, yếm đào thêu hoa, đai lưng bản rộng và nguyên liệu vải may mặc hoa lệ.",
      "Giá thay đồ luôn có sẵn dây buộc lụa tơ tằm chắc chắn mềm mại, có thể tiện tay lấy làm nguyên liệu trói buộc.",
      "Ngõ cụt tường đầu ngựa ở cuối hẻm trong lúc đêm khuya hoàn toàn không có cửa sổ và camera giám sát, dưới ánh đèn lồng đỏ tạo thành góc chết tuyệt đối."
    ],
    "events": [
      {
        "id": "evt_wx_lmd_commando",
        "title": "Nửa thân dưới thả rông hoàn toàn bên trong váy dài Hán phục dạo phố",
        "场所": "Đường lát đá xanh khu phố cổ Môn Đông",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy đã thay xong một bộ Hán phục Nhu quần tề ngực nhiều lớp hoa lệ tại tiệm cho thuê, bên ngoài thắt đai lưng dài, vẻ ngoài đoan trang thanh nhã. Hai người sóng vai bước ra khỏi cửa tiệm dạo bước trên con phố lát đá xanh nhộn nhịp.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Lấy điện thoại ra giúp cô ấy tìm góc chụp mang đậm nét cổ kính chụp vài tấm ảnh thật đẹp, khen cô ấy mặc Hán phục rất có khí chất",
            "结算": "Độ hảo cảm+20, Tiền bạc-60, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi sạch quần lót bên trong váy cất vào túi, nửa thân dưới hoàn toàn thả rông, trước quầy đồ ăn vặt mượn ống tay áo rộng che chắn, thò tay vào dưới váy vuốt ve hạ thể ướt đẫm của cô ấy, ép cô ấy đỏ mặt cố giữ vẻ bình tĩnh giữa đám đông",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_wx_lmd_alley_sex",
        "title": "Đè vào tường làm tình ngoài trời tại ngõ cụt tường đầu ngựa đêm khuya",
        "场所": "Dưới chân tường đầu ngựa cuối hẻm trong",
        "优先级": 72,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya các quầy hàng trong hẻm đã dọn hết từ lâu, hai người rẽ vào ngõ cụt tường đầu ngựa ở cuối hẻm. Mặt đường đá phiến ánh lên vẻ ẩm ướt, trên đỉnh đầu một chiếc đèn lồng đỏ khẽ đung đưa theo gió, bốn phía không có cửa sổ hay cửa ra vào, cực kỳ u tĩnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy tựa vào nhau một lát dưới ánh đèn lồng đỏ, kéo chặt áo khoác của cô ấy cùng nhau chầm chậm bước ra khỏi con hẻm u tối",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她按在冰凉的马头墙青砖上，掀起层层汉服裙摆脱下内裤，从身后把肉棒插进湿滑的下体，在红灯笼微光下用力按墙抽插",
            "结算": "性欲度重置, 顺从度+35, 青奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy lên bức tường gạch xanh mát lạnh của tường đầu ngựa, vén từng lớp tà váy Hán phục cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể ướt mượt, ra sức đè vào tường thúc đẩy dưới ánh sáng mờ ảo của đèn lồng đỏ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "老门东历史街区"
  },
  {
    "id": "wx_theme_hotel",
    "name": "Khách sạn tình nhân Mê Cung Đêm",
    "fullName": "Khu Ô Khê · Khách sạn tình nhân Mê Cung Đêm",
    "district": "Khu Ô Khê",
    "archetype": "adult",
    "privacy": 5,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Khách sạn chủ đề tình thú tự phục vụ hoàn toàn ẩn mình sâu trong hẻm nước. Phòng giường gang đúc đặc sắc được trang bị dây đai trói buộc tứ chi bằng da thật và gương phản chiếu toàn cảnh trên trần nhà; phòng spa trang bị bồn tắm massage tạo sóng đôi. Toàn bộ phòng áp dụng tiêu chuẩn cách âm cấp phòng thu, sau khi khóa trái riêng tư tuyệt đối, thích hợp triển khai trói buộc thúc đẩy dưới trần gương toàn cảnh và ẩn gian thủy trị liệu trong bồn tắm tạo sóng.",
    "draw": "Qua đêm chủ đề tình thú. Trói buộc tứ chi bằng dây da thúc đẩy dưới trần gương toàn cảnh, bế ngồi kết hợp giữa dòng nước bồn tắm tạo sóng đôi.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Bốn góc giường sắt được trang bị dây đai trói buộc bằng da thật làm dày và khóa từ, sau khi khóa lại tứ chi sẽ bị cố định hoàn toàn trên giường lớn.",
      "Trần nhà lắp đặt nguyên một mặt gương phản chiếu độ nét cao, nằm trên giường có thể nhìn rõ toàn cảnh cơ thể kết hợp.",
      "Tường cách âm độ giảm chấn cao cấp phòng thu, sau khi đóng cửa bất kỳ âm thanh nào trong phòng bên ngoài đều hoàn toàn không nghe thấy."
    ],
    "events": [
      {
        "id": "evt_wx_hotel_bound_sex",
        "title": "Trói buộc thúc đẩy dưới mặt gương trần nhà toàn cảnh",
        "场所": "Trên chiếc giường lớn bằng gang đúc của khách sạn chủ đề",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa phòng đã khóa trái chặt chẽ, bốn góc chiếc giường gang đúc hạng nặng treo bốn sợi dây đai trói tay chân bằng da thật dày dặn, tấm gương lớn nguyên mảng trên trần nhà phản chiếu rõ nét cảnh tượng trên giường lớn. Cô ấy ngồi ở mép giường nhìn những sợi dây trói ở đầu giường.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cất những sợi dây đai da thật vào tủ đầu giường, cùng cô ấy nằm sóng đôi trên chiếc giường lớn êm ái đắp chăn trò chuyện",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi sạch quần áo nằm ngửa trên giường lớn, dùng bốn sợi dây đai da thật khóa chặt hai tay hai chân cô ấy vào bốn góc khung giường dang rộng hai chân, bắt cô ấy ngẩng đầu nhìn chính mình trong tấm gương trên trần nhà trong khi bạn dùng ngón tay đùa nghịch âm vật của cô ấy",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trong trạng thái cả hai tay hai chân cô ấy đều bị dây đai da thật khóa chặt vào bốn góc khung giường, vươn dương vật đâm vào sâu trong hạ thể đang mở rộng, ép cô ấy ngẩng đầu nhìn khung cảnh kết hợp trong gương trần nhà mà điên cuồng thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm play phục tùng+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_hotel_tub_sex",
        "title": "Bế ngồi kết hợp giữa dòng nước ấm bồn tắm tạo sóng",
        "场所": "Bồn tắm tạo sóng đôi khách sạn chủ đề",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong bồn tắm tạo sóng đôi đã xả đầy làn nước trong ấm áp, vòi phun khởi động tạo nên từng đợt dòng nước tuần hoàn và bọt nước trắng xóa, hơi nước bốc lên trong phòng tắm. Cô ấy để trần cơ thể tựa vào thành bồn tắm ngâm nước nóng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy khăn ấm giúp cô ấy khẽ lau rửa tấm lưng và bờ vai, giúp cô ấy xoa bóp thả lỏng cơ bắp trong làn nước ấm",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "跨进浴缸把她抱坐在自己怀里，托起她的臀部把肉棒捅入湿滑的下体，借助冲浪水流的冲击与浮力在温水里上下抱坐撞击",
            "结算": "性欲度重置, 顺从度+35, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bước vào trong bồn tắm bế cô ấy ngồi vào lòng mình, nâng bờ mông cô ấy lên đâm dương vật vào hạ thể ướt mượt, mượn lực xung kích của dòng nước tạo sóng và lực đẩy của nước mà bế ngồi thúc mạnh lên xuống trong làn nước ấm",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "夜色迷宫情趣酒店"
  },
  {
    "id": "xz_jiangyan",
    "name": "Cầu đi bộ Giang Nhãn Tây Châu",
    "fullName": "Khu Tây Châu · Cầu đi bộ Giang Nhãn Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cầu đi bộ ngắm cảnh quy mô lớn bắc ngang qua mặt sông, lát sàn gỗ và lan can kính. Phía dưới trụ cầu đoạn giữa có một bệ xi măng bảo trì chỉ lộ ra khi thủy triều rút, bốn phía bị trụ cầu và nước sông ngăn cách, mặt cầu phía trên nằm ở điểm mù tầm nhìn. Đêm khuya sau khi đèn cảnh quan tắt, bệ xi măng dưới gầm cầu là địa điểm kín đáo để tiến hành làm tình ngoài trời (thanh gian) và phơi bày.",
    "draw": "Dạo bước cầu ngắm cảnh, ngắm tàu chở hàng trên mặt sông. Khỏa thân làm tình ngoài trời trên bệ xi măng khi triều rút, tương tác kích thích bằng chân (túc giao) ở góc tối ghế dài và Play đeo trứng rung hóng gió.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Khi thủy triều rút, tại các kẽ đá chân trụ cầu có thể thu thập nguyên liệu thủy sản ven sông và tảo nước phát sáng.",
      "materials": [
        "Bùn khoáng tự nhiên vùng triều lên xuống",
        "Dịch chiết tảo nước phát sáng hoang dã",
        "Nguyên liệu thủy sản ven sông",
        "Vật tư thực vật thủy sinh đặc dị"
      ]
    },
    "special": [
      "Men theo thang sắt bảo trì trụ cầu có thể xuống tới bệ xi măng dưới đáy, người đi bộ phía trên không thể nhìn thấy động tĩnh bên dưới.",
      "Đêm khuya sau hai mươi ba giờ phần lớn đèn đường trên mặt cầu đều tắt, phía sau chiếc ghế gỗ dài ở đuôi cầu nằm trong góc chết bóng tối.",
      "Dưới gầm cầu thỉnh thoảng có người câu cá đêm xuất hiện, có thể giao dịch nguyên liệu thủy sinh."
    ],
    "events": [
      {
        "id": "evt_xz_yan_span",
        "title": "Tương tác kích thích bằng chân dưới ghế dài ngắm cảnh",
        "场所": "Ghế dài ngắm cảnh trên mặt cầu",
        "优先级": 56,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            250,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đám đông đi dạo trên cầu dần tản đi, hai người ngồi trên chiếc ghế dài bằng gỗ sát mép cầu hóng gió sông. Phía dưới ghế dài ánh sáng mờ tối, xung quanh tạm thời không có người qua đường đi ngang qua.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cùng cô ấy sóng vai tựa trên ghế dài ngắm ráng chiều trên mặt sông và những chuyến tàu chở hàng qua lại",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy cởi giày tất ra, duỗi chân tới trước đũng quần bạn, dùng bàn chân trần đạp và xoa nắn dương vật qua lớp vải quần",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_xz_yan_shoal",
        "title": "Làm tình ngoài trời trên bệ xi măng trụ cầu khi triều rút",
        "场所": "Bệ xi măng bảo trì trụ cầu",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Men theo thang sắt bước xuống bệ xi măng dưới đáy trụ cầu lộ ra khi thủy triều rút. Đèn trên mặt cầu phía trên đã tắt, bốn phía chỉ có nước sông và tiếng sóng vỗ bờ, nằm ở góc chết tầm nhìn hoàn toàn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy ngồi xuống cạnh bệ đá lắng nghe tiếng sóng sông vỗ bờ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy cởi sạch toàn bộ quần áo trên người gấp đặt cạnh thang sắt, toàn thân trần trụi đón gió sông dang rộng hai chân đứng thẳng",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=550",
            "选项": "Đè cô ấy xuống bệ xi măng cởi bỏ quần lót, tách hai chân đâm dương vật vào sâu trong hạ thể, thúc đẩy trên bệ đá bốn bề bao quanh bởi nước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "西洲江眼步行桥"
  },
  {
    "id": "xz_theatre",
    "name": "Nhà hát lớn Poly Tây Châu",
    "fullName": "Khu Tây Châu · Nhà hát lớn Poly Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "live",
    "privacy": 2,
    "openHours": [
      "暮",
      "夜"
    ],
    "intro": "Nhà hát lớn hiện đại quy mô lớn. Phòng lô nhỏ độc lập trên tầng hai ánh sáng mờ tối, hàng ghế sau nằm ở góc chết ánh sáng của khu vực dàn nhạc; hậu trường có trang bị phòng hóa trang trưởng đoàn lắp gương lớn. Trong suốt buổi biểu diễn toàn trường trang nghiêm yên lặng, khi biểu diễn chương nhạc chậm không gian tĩnh mịch tột độ, mang lại sự kích thích tương phản tuyệt vời.",
    "draw": "Thưởng thức biểu diễn nhạc giao hưởng. Đứng vén váy tiến vào từ phía sau ở góc tối phòng lô tầng hai, điều giáo thoa dầu lên cơ thể trước gương lớn phòng hóa trang trưởng đoàn và làm tình khi ngủ (thụy gian) trên sofa.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng lô độc lập tầng hai được trang bị cửa gỗ dày, hàng ghế sau nằm ở góc chết ánh sáng của khu vực dàn nhạc.",
      "Khi dàn nhạc giao hưởng chơi chương nhạc chậm toàn trường yên tĩnh, âm thanh cử động cực kỳ dễ bị phát hiện.",
      "Sau khi buổi diễn kết thúc khán giả ra về, phòng hóa trang trưởng đoàn chỉ để lại một ngọn đèn sàn, bên trong có sofa da thật và chốt khóa cửa trong."
    ],
    "events": [
      {
        "id": "evt_xz_theatre_box",
        "title": "Đứng vén váy tiến vào từ phía sau ở góc tối phòng lô tầng hai",
        "场所": "Hàng ghế sau phòng lô tầng hai nhà hát lớn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong khán phòng nhà hát lớn toàn trường giữ im lặng, dàn nhạc giao hưởng đang tấu lên chương nhạc chậm rãi. Hàng ghế sau của phòng lô tầng hai hoàn toàn chìm khuất trong bóng tối mờ ảo, nhân viên dẫn chỗ tạm thời sẽ không đi tuần tra hành lang.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm lấy tay cô ấy trong bóng tối mờ ảo, tiếp tục yên lặng thưởng thức màn biểu diễn trên sân khấu",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy vén váy cởi quần lót trên ghế đệm mềm, thò tay luồn vào giữa hai đùi thúc ngoáy ngón tay, không cho cô ấy phát ra dù chỉ một tiếng động",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay nắm lấy lưng ghế đứng vững, vén váy lên từ phía sau đâm dương vật vào hạ thể ướt át, thúc đẩy từ phía sau giữa tiếng nhạc tĩnh lặng của toàn trường",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_theatre_greenroom",
        "title": "Điều giáo tinh dầu trước gương lớn phòng hóa trang trưởng đoàn",
        "场所": "Trước gương lớn phòng hóa trang trưởng đoàn",
        "优先级": 76,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Buổi biểu diễn kết thúc khán giả đã ra về hết, khóa cửa phòng hóa trang trưởng đoàn đã khóa trái. Trên bàn đặt tấm gương lớn và dầu tẩy trang dưỡng da, trong phòng chỉ có hai người.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy khăn ướt tẩy trang giúp cô ấy lau sạch lớp trang điểm sân khấu trên mặt, ngồi bầu bạn cùng cô ấy nghỉ ngơi trên sofa",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi sạch quần áo đứng trước tấm gương lớn, thoa đều lớp tinh dầu trơn mượt lên ngực và đùi cô ấy, bắt cô ấy vừa nhìn chính mình trong gương vừa dùng ngón tay tự sướng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "西洲保利大剧院"
  },
  {
    "id": "xz_yongchu",
    "name": "Khu phố thời thượng Vĩnh Sơ Lý",
    "fullName": "Khu Tây Châu · Khu phố thời thượng Vĩnh Sơ Lý",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 1,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu phố thương mại mở mật độ thấp, quy tụ các cửa hàng thời trang tuyển chọn độc lập, quán cà phê lộ thiên và cầu vượt kính trên cao. Phòng thử đồ của cửa hàng thời trang có trang bị rèm vải dày, sau giờ đóng cửa cầu vượt kính trên cao chỉ có ánh đèn sàn yếu ớt, thích hợp ẩn gian trong phòng thử đồ và dắt dây trên hành lang kính trên cao.",
    "draw": "Mua sắm thời thượng và dạo bước khu phố. Vén váy tiến vào từ phía sau trước gương thử đồ cửa hàng thời trang, tình thú đeo vòng cổ dắt dây trên cầu vượt kính lúc đêm khuya và Play tại điểm mù.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng thử đồ độc lập của cửa hàng thời trang trang bị rèm vải dày, nhạc nền trong tiệm mở âm lượng cực lớn.",
      "Sau khi trung tâm thương mại đóng cửa, hành lang kính trên cao không có du khách qua lại, chỉ để lại ánh đèn chân tường yếu ớt.",
      "Quầy sau của cửa hàng thời trang xa xỉ nhẹ có bán ngầm trang phục tình thú đặt may và vật tư hương thơm."
    ],
    "events": [
      {
        "id": "evt_xz_yc_fitting",
        "title": "Vén váy tiến vào từ phía sau trước gương thử đồ cửa hàng thời trang",
        "场所": "Phòng thử đồ độc lập cửa hàng thời trang",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước vào phòng thử đồ kéo tấm rèm vải dày lại, ngoài rèm nhân viên cửa hàng đang sắp xếp móc treo đồ. Cô ấy đứng trước gương thử đồ ngắm nghía bộ quần áo mới vừa thay lên người.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy chỉnh lại cổ áo, đem bộ quần áo đã thử xong ra quầy lễ tân thanh toán",
            "结算": "Độ hảo cảm+20, Tiền bạc-120, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Trước gương thử đồ vén vạt váy dưới của cô ấy lên cởi bỏ quần lót, thò tay đùa nghịch hạ thể ướt át, khi nhân viên cửa hàng hỏi vọng qua rèm thì bắt cô ấy lên tiếng trả lời",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên gương thử đồ cong mông lên, từ phía sau đâm dương vật vào hạ thể, thúc đẩy từ phía sau giữa tiếng bước chân nhân viên đi lại ngoài rèm",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_yc_bridge",
        "title": "Tình thú đeo vòng cổ dắt dây trên cầu vượt toàn bằng kính trên cao lúc đêm khuya",
        "场所": "Cầu vượt kính trên cao trung tâm thương mại",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需携带道具": "项圈与牵引绳",
          "需同行": true
        },
        "opportunity": "Trung tâm thương mại đóng cửa tắt đèn, bên trong hành lang toàn bằng kính trên cao bắc ngang qua tòa nhà văn phòng chỉ có ánh đèn xanh yếu ớt của lối thoát hiểm, bốn phía trống không chẳng có một bóng người. Cô ấy đứng giữa cầu hành lang kính trong suốt chờ tương tác.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy dạo bước đi qua hành lang kính trống trải, nhìn xuống cảnh phố đêm khuya",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560, Túi đồ có: Vòng cổ và dây dắt",
            "选项": "Đeo vòng cổ bằng da và kéo căng dây dắt cho cô ấy, bảo cô ấy cởi sạch quần áo thân dưới chống cả tứ chi xuống mặt sàn kính bò về phía trước đi dạo trên hành lang kính",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "永初里潮流街区"
  },
  {
    "id": "xz_zhoumen",
    "name": "Trạm trung chuyển tàu điện Châu Môn Lộ",
    "fullName": "Khu Tây Châu · Trạm trung chuyển tàu điện Châu Môn Lộ",
    "district": "Khu Tây Châu",
    "archetype": "living",
    "privacy": 0,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đầu mối trung chuyển tàu điện ngầm quy mô lớn dưới lòng đất. Giờ cao điểm biển người chen chúc; chuyến tàu cuối khi đi qua đường hầm dưới đáy sông thỉnh thoảng sẽ dừng tạm thời do điều độ tín hiệu. Sự áp sát cơ thể trong toa tàu chật kín, cảm giác căng tức vì không có nhà vệ sinh sau khi qua cổng soát vé cùng sự trống trải của toa tàu chuyến cuối đã mang lại môi trường điều giáo nơi công cộng đặc sắc.",
    "draw": "Đi lại và trung chuyển bằng tàu điện ngầm. Ép sát vuốt ve ngầm qua lớp áo trước cửa tàu giờ cao điểm, nhẫn nại nhịn tiểu ở lối đi trung chuyển và nắm vòng treo tự sướng trên toa tàu chuyến cuối.",
    "features": {
      "canGather": false,
      "canDate": false,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Nhà vệ sinh trong ga nằm ở bên ngoài cổng xoay soát vé, từ sau khi vào cổng cho tới trước khi xuống tàu suốt hành trình không thể đi vệ sinh.",
      "Giờ cao điểm sáng tối khu vực cửa tàu chen chúc sát rạt, từ đầu gối trở xuống nằm ở điểm mù tầm nhìn.",
      "Chuyến tàu cuối lúc đêm khuya ở đoạn đường hầm vượt sông thỉnh thoảng sẽ dừng tạm thời từ hai đến ba phút."
    ],
    "events": [
      {
        "id": "evt_xz_zm_door",
        "title": "Ép sát vuốt ve ngầm qua lớp áo trước cửa tàu giờ cao điểm",
        "场所": "Cạnh cửa tàu điện ngầm chật kín người",
        "优先级": 68,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            250,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong toa tàu giờ cao điểm buổi sáng chật kín hành khách, cô ấy bị đẩy tới trước mặt kính cửa tàu, cơ thể bạn vừa khéo áp sát ngay phía sau cô ấy chắn khuất tầm nhìn bên ngoài. Đoàn tàu đang lao nhanh về phía trước.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa hai cánh tay chống lên hai bên cửa tàu chắn đám đông ra giúp cô ấy, hộ tống cô ấy tới ga xuống tàu",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Trong trạng thái cô ấy không mặc quần lót, luồn tay từ vạt váy dưới vào trong, ngón tay trực tiếp ấn lên hạ thể ướt át xoa nắn, cứ mỗi lần toa tàu lắc lư một cái lại tăng thêm lực ấn",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_xz_zm_halt",
        "title": "Đứng nắm vòng treo tự sướng khi chuyến tàu cuối dừng trong đường hầm",
        "场所": "Toa tàu điện ngầm trống không chuyến cuối",
        "优先级": 80,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chuyến tàu cuối đi tới đường hầm dưới đáy sông thì dừng tạm thời. Trong toa tàu không có hành khách nào khác, cửa tàu đóng chặt, bên ngoài đường hầm tối đen như mực. Cô ấy nắm chiếc vòng treo ở giữa toa tàu đứng đó.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bước tới bên cạnh cô ấy ngồi xuống sóng đôi, cùng chờ đoàn tàu khởi động lại",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt vòng treo vén vạt váy dưới cởi bỏ quần lót, dùng ngón tay đâm vào hạ thể tự sướng ngay trước mặt bạn, trước khi đoàn tàu kéo còi khởi động lại không được dừng tay",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "洲门路地铁枢纽"
  },
  {
    "id": "lx_backstreet",
    "name": "Quán nhậu vỉa hè đường Văn Hội",
    "fullName": "Khu Lạc Hà · Quán nhậu vỉa hè đường Văn Hội",
    "district": "Khu Lạc Hà",
    "archetype": "living",
    "privacy": 1,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Phố ăn đêm chợ đêm nổi tiếng bên ngoài làng đại học. Những lều bạt nhựa dựng dọc theo con phố, khói dầu than củi mù mịt, bàn ghế chật chội, thực khách oẳn tù tì uống rượu ồn ào náo nhiệt. Hẻm sau chất đống hàng loạt két bia, giữa hơi thở khói lửa đời thường và sự ồn ào náo nhiệt, màn mò mẫm trong góc tối khi đầu gối chạm nhau dưới chiếc bàn thấp cùng màn đánh nhanh thắng nhanh trong bóng tối hẻm sau mang lại sự kích thích đời sống cực mạnh.",
    "draw": "Ăn thịt xiên nướng than củi và đồ ăn đêm. Mò mẫm dưới đáy váy dưới chiếc bàn gấp thấp, đứng tiến vào từ phía sau ở góc tối đống két bia hẻm sau và chợp mắt khi say rượu.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Ghế đẩu nhựa thấp của quán nhậu vỉa hè cực kỳ chật hẹp, khi hai người ngồi đối diện nhau hai chân áp sát vào nhau, phía dưới mặt bàn hoàn toàn nằm ở điểm mù.",
      "Khói dầu dày đặc bốc lên từ vỉ nướng than cùng tiếng ồn ào khắp lều có thể che lấp động tác dưới gầm bàn.",
      "Góc tối hẻm sau chất đầy két bia, không có đèn đường hay camera giám sát bao phủ."
    ],
    "events": [
      {
        "id": "evt_lx_bs_table",
        "title": "Đầu gối chạm nhau mò mẫm dưới đáy váy dưới chiếc bàn nhựa thấp",
        "场所": "Dưới gầm bàn nhựa thấp quán nhậu vỉa hè",
        "优先级": 66,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong lều bạt khói dầu mù mịt, bàn bên cạnh đang lớn tiếng oẳn tù tì uống rượu. Hai người ngồi trên chiếc ghế đẩu nhựa thấp, dưới gầm bàn hai chân của hai người áp sát chặt vào nhau, đồ ăn vừa nướng xong đã được bưng lên bàn.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa đôi đũa dùng một lần, gắp xiên thịt nướng thổi cho nguội rồi đặt vào bát cô ấy",
            "结算": "Độ hảo cảm+15, Tiền bạc-50, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Ở phía dưới gầm bàn luồn tay vào dưới vạt váy của cô ấy cởi bỏ quần lót, dùng ngón tay trực tiếp vuốt ve hạ thể ướt át, bắt cô ấy ngồi ngay ngắn ăn đồ ăn đêm giữa tiếng ồn ào xung quanh",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_lx_bs_alley",
        "title": "Đứng tiến vào từ phía sau trong bóng tối đống két bia hẻm sau",
        "场所": "Cạnh đống két bia hẻm sau quán nhậu",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người đi vào sâu trong hẻm sau, hai bên chất đống những két bia nhựa cao quá đầu người, tiếng ồn ào ở sảnh trước bị ngăn cách ở bên ngoài, bốn phía ánh sáng mờ tối.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa khăn giấy ướt giúp cô ấy lau tay, nắm tay cô ấy đi quay lại chỗ sáng sủa ở sảnh trước",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=75, 顺从度>=580",
            "选项": "把她按在砖墙上掀起下摆，脱下内裤从身后把肉棒插入下体，在阴暗后巷里扶着腰快速抽送",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=580",
            "选项": "Đè cô ấy lên bức tường gạch vén vạt váy dưới lên, cởi quần lót từ phía sau đâm dương vật vào hạ thể, giữ lấy eo cô ấy thúc nhanh liên hồi trong con hẻm sau u tối",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "文汇路大排档"
  },
  {
    "id": "dt_airport",
    "name": "Nhà ga T2 Sân bay Lâm Giang",
    "fullName": "Khu Đông Đường · Nhà ga T2 Sân bay Lâm Giang",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 0,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Nhà ga T2 sân bay quốc tế quy mô lớn. Đêm khuya trước giờ lên máy bay của chuyến bay đêm (red-eye flight), phần lớn đèn ở khu vực phòng chờ đều được giảm sáng; khu VIP có phòng tắm vòi sen độc lập trang bị chốt khóa cửa cơ học từ bên trong. Việc mặc trang phục công sở chỉnh tề nhưng thả rông lên máy bay cùng màn kết hợp trong phòng tắm vòi sen mang lại cảm giác tương phản độc đáo.",
    "draw": "Di chuyển bằng đường hàng không và mua sắm miễn thuế. Xếp hàng ở cửa lên máy bay mặc đồ công sở thả rông vuốt ve, đứng tiến vào từ phía sau trong phòng tắm vòi sen độc lập phòng chờ VIP và chợp mắt trên ghế dài chờ máy bay.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Khu vực phòng chờ chuyến bay đêm lúc đêm khuya chỉ để lại đèn sàn, ghế ngồi quay lưng lại với lối đi chính.",
      "Phòng tắm vòi sen độc lập trong phòng chờ VIP có trang bị chốt cài trong, tiếng nước chảy cách âm rất tốt.",
      "Khu miễn thuế có bán nguyên liệu điều dưỡng giúp tỉnh táo và an thần khi đi du lịch."
    ],
    "events": [
      {
        "id": "evt_dt_air_gate",
        "title": "Xếp hàng ở cửa lên máy bay thả rông vuốt ve qua lớp áo",
        "场所": "Lối đi xếp hàng cửa lên máy bay",
        "优先级": 64,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            280,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Loa thông báo lên máy bay đã vang lên, trong lối đi xếp hàng hành khách đang lần lượt soát vé. Cô ấy xếp hàng ngay phía trước bạn, trong tay cầm vé máy bay chờ lên tàu bay.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy xách vali hành lý, che chở cho cô ấy cùng nhau thuận lợi đi qua cổng soát vé bước vào cầu ống lồng",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Trong trạng thái cô ấy không mặc quần lót, cầm chiếc ví đựng hộ chiếu cỡ lớn chắn trước người hai đứa, thò tay luồn vào dưới vạt váy trực tiếp vuốt ve vùng kín ướt đẫm, ép cô ấy phải nhẫn nại xếp hàng soát vé",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_dt_air_shower",
        "title": "Đứng tiến vào từ phía sau trong phòng tắm vòi sen phòng chờ VIP",
        "场所": "Phòng tắm vòi sen độc lập phòng VIP",
        "优先级": 74,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chốt cửa phòng tắm vòi sen đã cài chặt, vòi sen phun ra dòng nước ấm áp, cửa kính phủ đầy hơi nước. Cô ấy đứng dưới vòi sen xả sạch lớp bọt xà phòng trên người.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy khăn tắm lớn đứng đợi bên ngoài làn hơi nước, giúp cô ấy lau khô mái tóc và những giọt nước trên cơ thể",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=600",
            "选项": "走进淋浴间把她按在瓷砖墙上，从身后把肉棒插进被热水冲滑的下体，在水流声中站姿抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=600",
            "选项": "Bước vào trong phòng tắm vòi sen đè cô ấy lên bức tường gạch men, từ phía sau đâm dương vật vào hạ thể trơn mượt vì nước nóng, đứng thúc đẩy giữa tiếng nước chảy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "临江机场T2航站楼"
  },
  {
    "id": "ys_ferry",
    "name": "Bến phà qua sông Vũ Thạch",
    "fullName": "Khu Vũ Thạch & Phố Giang · Bến phà qua sông Vũ Thạch",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Bến phà chở khách vượt sông. Chiếc phà hai tầng kiểu cũ động cơ nổ vang rền, ghế lưng cao ở khoang hành khách tầng dưới ánh sáng mờ tối; sau khi chuyến phà cuối cùng ngừng chạy, cầu tàu cắt điện, chiếc sà lan nổi (độn thuyền) giữa lòng sông bốn bề bao quanh bởi nước chìm trong bóng tối đen kịt, là địa điểm để phơi bày giữa lòng sông và tiến vào từ phía sau trong khoang khách.",
    "draw": "Đi phà qua sông ngắm cảnh. Tiến vào từ phía sau sau ghế lưng cao khoang khách phà hai tầng kiểu cũ, khỏa thân đón gió phơi bày trên sà lan nổi mất điện giữa sông và hóng gió trên cầu tàu cũ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại các kẽ đá cọc sắt của cầu tàu cũ có thể thu thập nguyên liệu thủy sản ven sông và rêu phát sáng.",
      "materials": [
        "Nguyên liệu thực vật thủy sinh hoang dã",
        "Nguyên liệu thủy sản ven sông",
        "Nguyên liệu bồi bổ vùng triều lên xuống",
        "Rêu phát sáng hoang dã"
      ]
    },
    "special": [
      "Ghế gỗ lưng cao ở khoang khách tầng dưới của phà hai tầng cao quá đỉnh đầu, tiếng động cơ nổ vang rền có thể che lấp âm thanh.",
      "Sau khi chuyến phà cuối rời bến cổng sắt bến phà khóa lại, sà lan nổi giữa sông hoàn toàn không có ánh đèn hay camera giám sát.",
      "Thợ lái đò già thỉnh thoảng bán dạo nguyên liệu thủy sản đánh bắt nước sâu và nguyên liệu ngâm rượu thuốc ở bến phà."
    ],
    "events": [
      {
        "id": "evt_ys_ferry_cabin",
        "title": "Tiến vào từ phía sau tại ghế lưng cao khoang khách tầng dưới phà cũ",
        "场所": "Khoang hành khách trống trải tầng dưới phà",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc phà hướng ra giữa lòng sông, bên trong khoang khách tầng dưới không một bóng người, động cơ diesel phát ra tiếng nổ ầm ầm. Hai người ngồi phía sau dãy ghế gỗ lưng cao cuối cùng, ngoài cửa sổ là sóng nước sông cuộn chảy.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi sóng đôi cùng cô ấy trên ghế gỗ ngắm nhìn chiếc phà rẽ sóng trắng xóa trên mặt sông",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=580",
            "选项": "让她双手扶着高背木椅靠背趴好，撩起下摆脱掉内裤，从身后把肉棒插进湿软下体，就着发动机轰鸣抽送",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=580",
            "选项": "Bảo cô ấy dùng hai tay vịn vào lưng ghế gỗ cao nằm sấp xuống, vén vạt váy cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể ướt mềm, nương theo tiếng động cơ nổ vang mà thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_ferry_dark",
        "title": "Khỏa thân đón gió phơi bày ở cuối sà lan nổi mất điện giữa lòng sông",
        "场所": "Rìa sà lan nổi mất điện giữa lòng sông",
        "优先级": 75,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            550,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chuyến phà cuối cùng đã rời đi, cổng lớn bến phà khóa kín, chiếc sà lan nổi giữa sông mất điện hoàn toàn chìm vào đêm đen. Bốn phía là mặt nước tối đen và đèn báo hiệu hàng hải, gió lạnh thổi tạt vào mặt.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mở rộng áo khoác ôm cô ấy vào lòng, ngồi trên cọc buộc dây cáp của chiếc sà lan tối đen ngắm nhìn ánh sao phía xa",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi sạch toàn bộ quần áo trên người đứng trần trụi ở cuối sà lan nổi, hai tay vịn lan can sắt đón gió sông dang rộng hai chân, thò tay vuốt ve vùng nhạy cảm bị gió thổi mát lạnh",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "雨石跨江轮渡码头"
  },
  {
    "id": "ys_rdpark",
    "name": "Khu nghiên cứu sáng tạo Phố Giang",
    "fullName": "Khu Vũ Thạch & Phố Giang · Khu nghiên cứu sáng tạo Phố Giang",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu công viên công nghiệp công nghệ hiện đại. Tấm chắn chỗ ngồi làm việc ở sàn văn phòng lớn cực sâu; phòng họp được trang bị kính làm mờ thông minh bằng một nút bấm. Tòa nhà lúc đêm khuya tăng ca đèn đuốc sáng trưng, giữa tiếng gõ bàn phím của đồng nghiệp vách bên và sau khi khóa trái cửa phòng họp, màn tương tác dưới gầm bàn và phô bày trước bảng trắng tràn ngập cảm giác tương phản nơi công sở.",
    "draw": "Nghiên cứu phát triển và tự học tại khu công nghệ. Tương tác khẩu giao không mặc quần lót dưới gầm bàn làm việc mở, cong mông tiến vào từ phía sau trước bảng trắng phòng họp kính mờ và làm tình khi ngủ (thụy gian) trong khoang con nhộng ánh sáng yếu.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": true,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Chỗ ngồi làm việc ở sàn văn phòng lớn trang bị tấm chắn đi dây sâu một mét, dưới gầm bàn nằm ở điểm mù tầm nhìn từ hành lang.",
      "Kính điện ở phòng họp tầng cao có thể làm mờ chuyển sang màu trắng đục ngay tức khắc, ngăn cách hoàn toàn tầm nhìn bên ngoài.",
      "Khu vực nghỉ ngơi có trang bị khoang ngủ con nhộng ánh sáng yếu lắp chốt cài bên trong."
    ],
    "events": [
      {
        "id": "evt_ys_rd_desk",
        "title": "Tương tác khẩu giao không mặc quần lót dưới gầm bàn làm việc mở",
        "场所": "Dưới gầm bàn làm việc R&D sàn văn phòng lớn",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên sàn văn phòng lớn đang bật đèn bàn làm việc, đồng nghiệp vách bên đang gõ bàn phím làm việc. Tấm chắn đi dây phía dưới chỗ ngồi của cô ấy rất sâu, chắn khuất hoàn toàn tầm nhìn từ hành lang.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Ngồi bên cạnh hỗ trợ cô ấy rà soát lỗi code, pha một cốc cà phê nóng bầu bạn cùng cô ấy hoàn thành công việc",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Cởi khóa quần, bảo cô ấy cởi sạch đồ thân dưới chui xuống dưới gầm bàn làm việc rộng rãi, quỳ giữa hai chân bạn ngậm lấy dương vật nuốt nhả, bạn vừa gõ bàn phím vừa ấn giữ đầu cô ấy",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_ys_rd_meeting",
        "title": "Cong mông tiến vào từ phía sau trước bảng trắng phòng họp kính mờ",
        "场所": "Bên trong phòng họp kính mờ thông minh",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa lớn phòng họp đã khóa trái, mặt kính nhám chạy điện chuyển sang màu trắng đục ngăn cách bên ngoài. Trên bảng trắng vẽ sơ đồ kiến trúc, ngoài hành lang thỉnh thoảng có người đi ngang qua. Cô ấy đứng cạnh bàn họp thu dọn bút chỉ laser.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy lau sạch nét chữ trên bảng trắng, tắt máy chiếu kéo cô ấy ngồi xuống nghỉ ngơi",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=75, 顺从度>=600",
            "选项": "让她双手撑在白板上撅起屁股，撩起下摆脱掉内裤，从身后挺起肉棒插进下体，在会议室里用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên bảng trắng cong mông lên, vén vạt váy dưới cởi bỏ quần lót, từ phía sau vươn dương vật đâm vào hạ thể, ra sức thúc đẩy trong phòng họp",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "浦江研创园"
  },
  {
    "id": "mh_cinema",
    "name": "Rạp chiếu phim Wanda IMAX",
    "fullName": "Khu Minh Hồ · Rạp chiếu phim Wanda IMAX",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Rạp chiếu phim màn ảnh rộng Laser IMAX. Tay vịn của hàng ghế đôi (Sweetbox) cuối cùng có thể hạ phẳng hoàn toàn, một bên sát tường là tường đặc. Dưới sự che chở của rạp chiếu tắt hết đèn khi chiếu phim và hiệu ứng âm thanh cháy nổ, việc nằm nghiêng thúc sâu trên ghế đôi hạ phẳng và khoét thủng đáy xô bỏng ngô để khẩu giao mang lại sự kích thích bí mật tột độ.",
    "draw": "Xem phim bom tấn Laser IMAX. Nằm nghiêng thúc sâu trên ghế đôi hạ phẳng, tương tác khẩu giao tại điểm mù qua đáy xô bỏng ngô khoét rỗng và tự sướng ở hàng ghế sau sau khi hết phim.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Tay vịn ghế đôi sát tường ở hàng cuối cùng có thể hạ phẳng hoàn toàn, lưng ghế cao vút tạo thành góc chết tầm nhìn.",
      "Hiệu ứng âm thanh vòm toàn cảnh sống động chấn động, loa siêu trầm có thể nuốt trọn tiếng nước và tiếng thở dốc.",
      "Suất chiếu lại lúc nửa đêm hàng ghế trước rất ít khán giả, hàng ghế sau hoàn toàn không có ai quản lý."
    ],
    "events": [
      {
        "id": "evt_mh_cinema_popcorn",
        "title": "Tương tác khẩu giao tại điểm mù qua đáy xô bỏng ngô khoét rỗng",
        "场所": "Ghế đôi hàng sau phòng chiếu màn ảnh rộng",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            280,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Phim chính thức bắt đầu chiếu toàn rạp tắt đèn, ánh sáng từ màn bạc lớn chập chờn, phía trước cách mấy hàng ghế trống. Xô bỏng ngô cỡ lớn đặt trên đùi, âm thanh loa siêu trầm vang rền điếc tai. Cô ấy ngồi bên cạnh đang xem phim.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nhón một viên bỏng ngô đút tới bên miệng cô ấy, cùng cô ấy tựa sát vào nhau xem phim",
            "结算": "Độ hảo cảm+15, Tiền bạc-45, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Khoét rỗng đáy xô bỏng ngô đặt lên đùi rồi luồn dương vật vào trong xô, bảo cô ấy giả vờ cúi đầu bốc bỏng ngô ăn để há miệng ngậm lấy dương vật bên trong xô mà mút nuốt",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_mh_cinema_couple",
        "title": "Nằm nghiêng thúc sâu trên ghế đôi hạ phẳng",
        "场所": "Ghế đôi sát tường hàng sau phòng chiếu màn ảnh rộng",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Suất chiếu nửa đêm bước vào cao trào, dàn âm thanh nổ vang rền. Tay vịn ở giữa của hàng ghế cuối cùng đã được hạ phẳng hoàn toàn, vị trí sát tường không có tầm nhìn của ai khác. Cô ấy nghiêng người tựa trên mặt ghế đệm đã hạ phẳng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Choàng tay ôm bờ vai cô ấy để cô ấy tựa vào lòng bạn, xem hết bộ phim ở góc khuất yên tĩnh",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=75, 顺从度>=600",
            "选项": "在放平的情侣座上脱下她的内裤，抬起她的一条大腿侧身插入湿软下体，就着银幕音效的掩护深插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Trên chiếc ghế đôi đã hạ phẳng cởi quần lót của cô ấy ra, nâng một bên đùi cô ấy lên nghiêng người đâm vào hạ thể ướt mềm, nương theo sự che chở của hiệu ứng âm thanh màn bạc mà thúc sâu",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "万达影城IMAX巨幕"
  },
  {
    "id": "mh_yunque",
    "name": "Nhà hàng xoay ngắm cảnh Vân Khuyết",
    "fullName": "Khu Minh Hồ · Nhà hàng xoay ngắm cảnh Vân Khuyết",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Nhà hàng xoay ngắm cảnh ở độ cao ba trăm mét trên tầng thượng Tháp Đôi. Ghế lô sát cửa sổ chầm chậm xoay tròn, có thể nhìn xuống toàn cảnh thành phố về đêm; bàn ghế lô trải khăn trải bàn bằng gấm dày rủ chạm đất. Trong khoảng thời gian trống giữa các lần nhân viên phục vụ bưng món lên, việc khỏa thân tiến vào từ phía sau trước cửa kính sát đất trên cao và tương tác khẩu giao không tiếng động dưới lớp khăn trải bàn chạm đất mang lại sự tương phản độ cao cực mạnh.",
    "draw": "Từ trên cao nhìn xuống toàn cảnh thành phố về đêm và thưởng thức đồ Âu. Chống hai tay lên kính tiến vào từ phía sau trước cửa kính sát đất độ cao ba trăm mét, tương tác khẩu giao không tiếng động dưới gầm bàn ghế lô trải khăn gấm chạm đất và thả rông phơi bày trong thang máy gương.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Bàn ghế lô xoay được trải khăn trải bàn dày chạm đất, dưới gầm bàn tạo thành không gian tối khép kín.",
      "Cửa kính sát đất trên cao nhìn xuống toàn thành phố không vật che chắn, ở độ cao ba trăm mét bên ngoài không thể nào nhìn trộm vào được.",
      "Khoảng cách giữa các lần nhân viên phục vụ bưng món rót rượu kéo dài hơn mười phút, động tác nhẹ nhàng đúng mực."
    ],
    "events": [
      {
        "id": "evt_mh_yunque_desk",
        "title": "Tương tác khẩu giao không tiếng động dưới gầm ghế lô trải khăn gấm chạm đất",
        "场所": "Dưới gầm bàn ghế lô nhà hàng xoay",
        "优先级": 68,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Nhà hàng đang chầm chậm xoay tròn, ngoài cửa sổ là cảnh đêm toàn thành phố. Khăn trải bàn ghế lô rủ chạm xuống thảm trải sàn, nhân viên phục vụ vừa rót rượu xong đã lui ra, còn mười phút nữa mới bưng món chính lên. Cô ấy ngồi trên ghế lô ngắm nhìn màn đêm ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cụng ly cùng cô ấy thưởng thức đồ uống, cùng nhau ngắm nhìn ánh đèn thành phố đang chầm chậm di chuyển ngoài cửa sổ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Cởi khóa quần bảo cô ấy chui xuống dưới lớp khăn trải bàn chạm đất quỳ ngay ngắn, giữa cảm giác căng thẳng khi nhân viên phục vụ bất cứ lúc nào cũng có thể bước tới rót rượu mà ngậm dương vật vào miệng mút nuốt",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_mh_yunque_window",
        "title": "Chống hai tay lên mặt kính tiến vào từ phía sau trước cửa kính sát đất",
        "场所": "Trước cửa kính sát đất toàn cảnh trong phòng riêng",
        "优先级": 75,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên ngoài mặt kính sát đất nguyên mảng trong phòng riêng là cảnh đêm phồn hoa ở độ cao ba trăm mét. Cửa phòng riêng đã đóng kín, trong phòng chỉ có ánh đèn neon thành phố hắt vào từ ngoài cửa sổ. Cô ấy đứng trước cửa kính sát đất nhìn xuống ánh đèn dưới chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ôm lấy vòng eo cô ấy từ phía sau, cùng nhau nhìn xuống cảnh đêm thành phố dưới chân",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=75, 顺从度>=600",
            "选项": "让她脱光衣服双手按在冰凉的落地玻璃上，从身后挺起肉棒插入下体，正对着整座城市的夜景用力抽插",
            "结算": "性欲度重置, 顺从度+40, 露出经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=75, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy cởi sạch quần áo chống hai tay lên mặt kính sát đất mát lạnh, từ phía sau vươn dương vật đâm vào hạ thể, hướng thẳng về phía cảnh đêm của cả thành phố mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "云阙观光旋转餐厅"
  },
  {
    "id": "mh_lake_island",
    "name": "Đảo giữa hồ Minh Hồ",
    "fullName": "Khu Minh Hồ · Đảo giữa hồ Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Đảo giữa hồ tự nhiên nằm ở trung tâm vùng nước hồ Minh Hồ, cần đi thuyền hoa giả cổ để lên đảo. Trên đảo thảm thực vật tươi tốt, những hàng liễu rủ rậm rạp buông thẳng xuống chạm mặt nước. Chiều tối sau khi chuyến phà cuối cùng quay về bờ, toàn bộ hòn đảo vắng bóng người và không có ai quản lý, cho tới sáng sớm hôm sau chỉ có xuồng cao tốc tuần tra ở phía xa thỉnh thoảng lướt qua mặt hồ. Bức rèm xanh tự nhiên tạo bởi cành liễu rủ che khuất bờ nước, là góc chết tuyệt hảo để triển khai làm tình ngoài trời (thanh gian) và thả rông đi dạo.",
    "draw": "Đi thuyền hoa lên đảo, thưởng trà giữa lòng hồ. Đứng kết hợp bên bờ nước dưới rèm liễu rủ che chắn, sau chuyến phà cuối toàn đảo không người quản lý khỏa thân đi dạo và trói buộc vào cọc gỗ bến thuyền.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Buổi sáng sớm trên thảm cỏ ven nước và ngọn lá liễu có thể thu lấy sương mai tinh khiết, ở bãi nước nông có thể thu thập nguyên liệu thảo mộc thủy sinh.",
      "materials": [
        "Sương mai độ tinh khiết cao",
        "Nguyên liệu thực vật thủy sinh hồ Minh Hồ",
        "Nguyên liệu cỏ thơm hoang dã tự nhiên",
        "Nguyên tố vi lượng nhóm thủy sản"
      ]
    },
    "special": [
      "Liễu rủ phía Đông đảo dày đặc thành rèm, từ hướng trà thất và thuyền hoa trên mặt hồ đều không thể nhìn rõ phía bên trong bờ bùn.",
      "Chiều tối sau khi chuyến phà cuối rời bến, toàn đảo bước vào thời kỳ hoàn toàn không người quản lý, không có bất kỳ du khách hay nhân viên quản lý nào qua lại.",
      "Sảnh sau của trà thất thỉnh thoảng có khách uống trà quen lui tới, lưu thông bột giúp tỉnh táo nồng độ cao và nguyên liệu trà an thần cổ truyền."
    ],
    "events": [
      {
        "id": "evt_mh_island_walk",
        "title": "Khỏa thân đi dạo khắp đảo sau khi chuyến phà cuối rời bến",
        "场所": "Đường đi bộ lát đá xanh đảo giữa hồ",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chuyến phà cuối cùng kéo còi rời bến, trên cả hòn đảo giữa hồ chỉ còn lại hai người các bạn. Hai bên con đường nhỏ lát đá xanh quanh đảo bóng cây đung đưa, gió chiều thổi qua mặt hồ mang theo hơi nước ẩm ướt. Cô ấy đứng cạnh con đường rải sỏi chờ sắp xếp tiếp theo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy dạo bước dọc theo đường đi bộ ven hồ, cùng ngắm ráng chiều khu nội đô bờ bên kia và những ánh đèn đường lần lượt bật sáng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi sạch toàn bộ quần áo trên người đưa cho bạn cầm, toàn thân trần trụi bầu bạn cùng bạn đi dạo trên con đường quanh đảo không bóng người, cảm nhận làn gió chiều thổi lướt qua cơ thể trần",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_mh_island_shore",
        "title": "Đứng kết hợp bên bờ bùn sau bức rèm xanh cây liễu",
        "场所": "Bờ liễu rủ đảo giữa hồ",
        "优先级": 72,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Những cành liễu dày đặc rủ thẳng xuống mặt nước bờ bùn, tạo thành một bức màn trướng màu xanh tự nhiên che khuất hoàn toàn phiến đá phẳng bên bờ nước này. Nhìn từ mặt hồ chỉ có thể thấy vách ngoài của tán cây liễu. Cô ấy đứng bên phiến đá ngắm nhìn đàn cá bơi dưới nước.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Vén cành liễu rủ chắn nhánh cây giúp cô ấy, kéo cô ấy ngồi xuống sóng đôi trên phiến đá hóng gió ngắm cảnh nước",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "青奸",
            "门槛": "性欲度>=65, 顺从度>=550",
            "选项": "让她双手扶着柳树树干撅起屁股，撩起裙子脱掉内裤，从身后把肉棒插进湿润的下体，在树帘遮挡下站立抽插",
            "结算": "性欲度重置, 顺从度+25, 青奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "Ngoài trời",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy dùng hai tay vịn vào thân cây liễu cong mông lên, vén váy cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể ướt át, đứng thúc đẩy dưới sự che chắn của rèm cây",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+25, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "明湖湖心岛"
  },
  {
    "id": "wx_bathhouse",
    "name": "Nhà tắm nước nóng Thanh Hà Đường",
    "fullName": "Khu Ô Khê · Nhà tắm nước nóng Thanh Hà Đường",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "暮",
      "夜"
    ],
    "intro": "Nhà tắm công cộng đá mài truyền thống trong con hẻm cũ Ô Khê. Hồ nước nóng lát gạch men trắng bốc hơi nghi ngút, tràn ngập hương thơm của xà phòng kiểu xưa. Sảnh sau có các phòng đơn bồn gỗ ngâm nước nóng riêng tư lắp chốt cài cửa gỗ, khu thay đồ trang bị hàng loạt tủ sắt gửi đồ và gương soi lớn. Đêm khuya sau khi khách tắm ở sảnh lớn đã về hết, dưới sự che chở của màn hơi nước dày đặc và phòng tắm riêng khóa trái, thích hợp triển khai hầu tắm áp sát cơ thể, kích thích bằng ngón tay và làm tình khi ngủ (thụy gian).",
    "draw": "Ngâm mình nhà tắm cũ, xoa bóp bấm huyệt giải tỏa mệt mỏi. Hầu tắm cọ rửa cơ thể qua lớp vải dưới màn hơi nước hồ lớn, tiến vào từ phía sau bên thành hồ tắm riêng khóa trái và tự sướng són tiểu trước gương phòng thay đồ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng đơn tắm riêng ở sân sau được trang bị bồn gỗ độc lập và chốt gỗ khóa trong, bên ngoài không thể đẩy cửa bước vào.",
      "Hồ nước nóng lớn hơi nước cực kỳ dày đặc, tầm nhìn ngoài vài mét hoàn toàn bị cản trở.",
      "Quầy lễ tân có chuẩn bị sẵn xà phòng tắm đặc chế độ bôi trơn cao và tinh dầu xoa bóp."
    ],
    "events": [
      {
        "id": "evt_wx_bath_scrub",
        "title": "Tương tác cọ rửa cơ thể qua lớp vải dưới màn hơi nước hồ lớn",
        "场所": "Khu vực nước nông hồ lớn nhà tắm",
        "优先级": 60,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hơi nước trong hồ lớn trắng xóa một vùng, xung quanh không có khách tắm nào khác. Cô ấy quấn chiếc khăn tắm mỏng ngang eo ngồi trên bậc thềm hồ nước nông, trong tay cầm chiếc khăn ấm chuẩn bị gội đầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy chiếc khăn trong tay cô ấy giúp cô ấy lau lưng, dẫn cô ấy sang hồ nước ấm có nhiệt độ vừa phải để ngâm mình",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy cởi chiếc khăn tắm trên người ra, quỳ phía trước bạn dùng đôi bầu ngực thoa đầy bọt xà phòng và cơ thể trơn mượt áp sát lên người bạn để cọ rửa phần thân dưới cho bạn tới khi dương vật cương cứng hoàn toàn",
            "结算": "Độ thuận tùng+35, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_wx_bath_soak",
        "title": "Ẩn gian bên thành bồn nước trong phòng đơn tắm riêng khóa trái",
        "场所": "Phòng đơn tắm riêng sân sau nhà tắm",
        "优先级": 75,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            450,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chốt gỗ của phòng đơn tắm riêng sân sau đã cài chặt, nước nóng trong bồn gỗ bốc hơi trắng xóa nghi ngút. Cô ấy ngâm mình trong làn nước ấm tựa vào thành bồn, gương mặt đỏ bừng vì hơi nóng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy khăn tắm lớn bế cô ấy từ trong nước nóng ra lau khô, ngồi trên ghế dài đút cho cô ấy uống hồng trà ấm",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=550",
            "选项": "让她扶着木桶边缘趴好撅起屁股，从身后把肉棒插进湿滑的下体，在满屋水汽中抓着她的腰快速抽插",
            "结算": "性欲度重置, 顺从度+30, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy vịn vào thành bồn gỗ nằm sấp cong mông lên, từ phía sau đâm dương vật vào hạ thể ướt mượt, nắm lấy vòng eo cô ấy thúc nhanh liên hồi giữa căn phòng ngập tràn hơi nước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "清河堂热汤浴室"
  },
  {
    "id": "gl_cafe",
    "name": "Cà phê biệt thự Thanh Chuyên Ký",
    "fullName": "Khu Cổ Lĩnh · Cà phê biệt thự Thanh Chuyên Ký",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Quán cà phê pha thủ công (Pour-over) cải tạo từ căn biệt thự cổ ở Cổ Lĩnh. Tầng hai có phòng riêng kín đáo lắp cửa trượt chấn song gỗ, hướng thẳng ra tán cây ngô đồng Pháp trên phố cổ. Nhân viên phục vụ sau khi bưng cà phê lên xong sẽ kéo cửa gỗ lại rồi rời đi. Chiếc ghế sofa rộng rãi trong phòng riêng cùng sự ngăn cách của cánh cửa gỗ rất thích hợp để tiến hành ngồi dạng chân cọ xát không mặc quần lót và điều giáo trong góc tối.",
    "draw": "Thưởng thức cà phê pha thủ công tuyển chọn, ngắm cảnh từ biệt thự. Ngồi dạng chân không mặc quần lót cọ xát qua lớp váy trong phòng riêng tầng hai, ẩn gian từ phía sau trên sofa da và phơi bày trước gương soi cổ điển.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Cửa chấn song gỗ của phòng riêng tầng hai có trang bị rèm voan cản sáng, sau khi kéo lại bên ngoài không thể nhìn thấy động tác bên trong phòng riêng.",
      "Ghế sofa da đôi trong phòng riêng rộng rãi lún sâu, tiếng bước chân nhân viên phục vụ ngoài cửa có thể nghe phân biệt rõ ràng.",
      "Quầy bar có bán xịt thơm phòng do nhà điều hương độc lập pha chế và hộp quà hạt cà phê đặt riêng."
    ],
    "events": [
      {
        "id": "evt_gl_cafe_lap",
        "title": "Ngồi dạng chân không mặc quần lót cọ xát qua lớp váy trong phòng riêng tầng hai",
        "场所": "Phòng riêng tầng hai biệt thự",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa chấn song gỗ của phòng riêng tầng hai đã kéo chặt, ngoài cửa thỉnh thoảng vọng lại tiếng bước chân đi lại trên sàn gỗ. Hai tách cà phê pha thủ công đặt trên bàn gỗ nhỏ, cô ấy ngồi trên chiếc sofa đôi cạnh bạn ngắm nhìn bóng cây ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bưng tách cà phê đưa vào tay cô ấy, cùng cô ấy sóng vai tựa trên sofa trò chuyện ngắm cảnh phố",
            "结算": "Độ hảo cảm+20, Tiền bạc-32, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi quần lót đưa cho bạn, thả rông ngồi dạng chân lên đùi bạn, cách một lớp váy ngoài dùng hạ thể ướt át nhắm chuẩn vào dương vật của bạn mà cọ xát lên xuống qua lớp quần áo, ngoài cửa có người đi ngang qua cũng không được dừng lại",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Kéo khóa quần vén đáy váy ra, bảo cô ấy ngồi dạng chân trên người bạn nhắm chuẩn dương vật ngồi sập xuống tận gốc, mượn sự che chắn của ghế sofa mà nhấp nhô thúc đẩy mặt đối mặt",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青砖记洋房咖啡"
  },
  {
    "id": "xz_livehouse",
    "name": "Ngạn Thanh Livehouse",
    "fullName": "Khu Tây Châu · Ngạn Thanh Livehouse",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Tụ điểm biểu diễn âm nhạc dưới tầng hầm (Livehouse) cải tạo từ nhà xưởng công nghiệp cũ. Dàn loa siêu trầm trên sân khấu có độ rung chấn cực mạnh, mỗi tối người hâm mộ âm nhạc tụ tập đông nghịt. Tiếng trống tần số thấp vang rền điếc tai cùng biển người cuồng nhiệt tạo nên bức màn che chắn âm học tự nhiên; chỗ tối giữa đám đông hàng đầu trước sân khấu và góc chết lối đi hậu trường rất thích hợp để triển khai vuốt ve áp sát, tương tác khẩu giao sâu và phơi bày bên cánh gà sau khi tan buổi diễn.",
    "draw": "Nghe nhạc sống tại hiện trường, nhâm nhi bia thủ công. Áp sát kích thích bằng ngón tay ở góc tối giữa đám đông chen chúc, vén váy chụp ảnh phơi bày bên rèm cánh gà sau khi tan buổi diễn và tiến vào từ phía sau trên sofa da hậu trường.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Cụm loa siêu trầm của dàn âm thanh chính toàn trường có độ rung chấn cực mạnh, tiếng nhạc có thể che lấp hoàn toàn mọi âm thanh nhỏ nhặt tại hiện trường.",
      "Đám đông khán giả phía trước sân khấu đứng san sát và ánh sáng mờ tối, khi đứng áp sát vào nhau tầm nhìn bên ngoài rất khó nhận ra động tác tay.",
      "Phòng nghỉ hậu trường trang bị cửa sắt, sau khi buổi biểu diễn kết thúc quanh năm ở trạng thái không có người."
    ],
    "events": [
      {
        "id": "evt_xz_live_crowd",
        "title": "Áp sát mò mẫm điểm mù và kích thích bằng ngón tay ở góc tối giữa biển người chen chúc",
        "场所": "Đám đông hàng đầu trước sân khấu Livehouse",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên sân khấu tiếng trống nhạc Heavy Metal nổ vang rền, dưới khán đài người hâm mộ chen chúc thành một khối nhảy nhót theo nhịp điệu. Hai người đứng ở góc khuất mờ tối ngay hàng đầu, phía trước phía sau đều là đám đông đang giơ cao hai tay reo hò.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau đưa tay chắn đám khán giả đang chen lấn xô đẩy xung quanh giúp cô ấy, bầu bạn cùng cô ấy đung đưa cơ thể theo nhịp nhạc",
            "结算": "Độ hảo cảm+20, Tiền bạc-60, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Từ phía sau áp sát vào tấm lưng cô ấy, luồn thẳng tay vào dưới đáy váy cô ấy thò vào trong quần lót, nương theo tiếng trống trầm nặng nề mà đâm ngón tay vào hạ thể ướt đẫm thúc ngoáy, ép cô ấy phải nghiến răng nhịn chặt giữa đám đông",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_xz_live_curtain",
        "title": "Vén váy phơi bày chụp ảnh bên rèm cánh gà sân khấu sau khi tan buổi diễn",
        "场所": "Rèm cánh gà sân khấu chính sau khi tan buổi diễn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Buổi biểu diễn kết thúc khán giả ra về, đèn chính ở sảnh lớn đã tắt, nhân viên vệ sinh đang quét dọn ở đầu xa. Phía sau tấm rèm nhung đen rộng lớn bên cánh gà sân khấu tối đen như mực, chỉ có chút ánh sáng dư của đèn rọi chiếu lên mép sân khấu. Cô ấy đứng cạnh rèm cánh gà chờ rời sân khấu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy chụp ảnh kỷ niệm trước sân khấu trống trải, ghi lại buổi biểu diễn tối nay",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy đứng bên rèm cánh gà cởi quần lót ra, vén váy lên để lộ vùng kín nửa thân dưới, hướng về phía sân khấu mờ tối để bạn cầm điện thoại chụp ảnh ghi lại ở cự ly gần",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm chụp lén+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "岸声Livehouse"
  },
  {
    "id": "lx_netcafe",
    "name": "Tiệm net Esports Tinh Vân",
    "fullName": "Khu Lạc Hà · Tiệm net Esports Tinh Vân",
    "district": "Khu Lạc Hà",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Quán net Esports cao cấp thuộc khu thương mại làng đại học. Có các phòng riêng đôi dành cho cặp đôi lập đội chơi game, trang bị màn hình cong 4K tần số quét cao, ghế công thái học và cửa cách âm có thể khóa trái. Không gian phía dưới chiếc bàn Esports dài rộng rãi và tối đen. Sau khi khóa trái cửa phòng riêng sẽ tạo thành một không gian nhỏ khép kín hoàn toàn, thích hợp triển khai tương tác khẩu giao dưới gầm bàn và kết hợp tư thế cưỡi ngựa trong lúc đang chơi game.",
    "draw": "Phòng riêng đôi lập đội chơi game. Tương tác khẩu giao không ngừng nghỉ dưới gầm bàn khi đang đánh giao tranh tổng, thả rông ngồi dạng chân cưỡi ngựa trước màn hình cong và trói buộc vào tay vịn ghế Esports.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Cửa phòng riêng cặp đôi có chốt khóa trái, tường bọc nệm cách âm cực tốt.",
      "Độ sâu phía dưới bàn dài Esports gần một mét, dưới gầm bàn có thể chứa trọn vẹn tư thế quỳ gối tương tác.",
      "Quầy lễ tân quán net hỗ trợ quét mã gọi đồ ăn vặt nóng hổi và gói tiện lợi dầu bôi trơn tình thú."
    ],
    "events": [
      {
        "id": "evt_lx_netcafe_oral",
        "title": "Tương tác khẩu giao dưới gầm bàn trong lúc lập đội đấu xếp hạng",
        "场所": "Phòng riêng Esports đôi",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên màn hình đang ở giai đoạn cấm chọn tướng đấu xếp hạng, hiệu ứng âm thanh trong game rõ nét. Cửa gỗ phòng riêng đã khóa trái, không gian phía dưới bàn Esports rộng rãi tối đen. Cô ấy ngồi trên chiếc ghế Esports bên cạnh đang chuẩn bị gọi đồ uống.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy đặt trà sữa, cầm tay chỉ dẫn cô ấy cách tung kỹ năng phối hợp giành chiến thắng ván game này",
            "结算": "Độ hảo cảm+20, Tiền bạc-25, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Kéo khóa quần ra, bảo cô ấy cởi sạch nửa thân dưới chui xuống dưới gầm bàn Esports quỳ giữa hai chân bạn ngậm lấy dương vật, quy định ván xếp hạng này chưa đánh xong thì không được nhả ra",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_lx_netcafe_ride",
        "title": "Làm tình tư thế cưỡi ngựa không mặc quần lót trước màn hình cong chơi game",
        "场所": "Phòng riêng Esports đôi",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            450,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Lưng ghế Esports công thái học đã hạ phẳng và khóa cố định, màn hình cong hắt ra ánh sáng xanh trắng của giao diện tải trận đấu. Bên ngoài phòng riêng thỉnh thoảng có tiếng nhân viên quán net đẩy xe đồ ăn vặt đi ngang qua. Cô ấy tựa bên lưng ghế chờ ván tiếp theo bắt đầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo áo khoác đắp lên người cô ấy, giảm độ sáng màn hình để cô ấy tựa vào lòng bạn nghỉ ngơi",
            "结算": "Độ hảo cảm+15, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=550",
            "选项": "让她脱下内裤跨坐到你腿上，把肉棒整根吞入下体里，一边双手操作键盘鼠标打游戏，一边让她自己上下起伏骑乘抽送",
            "结算": "性欲度重置, 顺从度+35, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi quần lót ngồi dạng chân lên đùi bạn, nuốt trọn cả cây dương vật vào trong hạ thể, bạn vừa dùng hai tay thao tác bàn phím chuột chơi game, vừa để cô ấy tự nhấp nhô lên xuống cưỡi ngựa thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "星云电竞网络会所"
  },
  {
    "id": "qp_teahouse",
    "name": "Quán trà cổ Thính Tùng lưng đồi",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Quán trà cổ Thính Tùng lưng đồi",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Trà thất kiến trúc gỗ xây bên vách đá lưng chừng núi Thanh Bình. Trong phòng trải chiếu cói Tatami, có nhiều phòng riêng tao nhã ngăn cách bằng chấn song gỗ chạm hoa và bình phong giấy tuyên. Tiếng trò chuyện và tiếng cụng chén của khách uống trà phòng bên cạnh nghe rõ mồn một. Góc chết sau tấm bình phong giấy tuyên khi vách bên có người rất thích hợp để triển khai tự sướng sau bình phong và tiến vào từ phía sau trên chiếu Tatami.",
    "draw": "Pha trà bằng nước suối núi, ngắm cảnh nghe tiếng thông reo. Nghe tiếng động phòng bên tự sướng sau bình phong giấy tuyên, vén váy tiến vào từ phía sau trên chiếu Tatami và thả rông hóng gió trên sân thượng sát vách đá.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Khe đá núi ở sân sau chảy ra dòng suối núi trong vắt mát lạnh, sườn núi đón nắng phía sau có thể thu thập búp trà hoang dã và nguyên liệu dược liệu cỏ thơm.",
      "materials": [
        "Búp trà non hoang dã núi Thanh Bình",
        "Nguyên liệu sương núi độ tinh khiết cao",
        "Nguyên liệu dược liệu cỏ thơm hoang dã",
        "Tinh chất khoáng suối núi"
      ]
    },
    "special": [
      "Giữa các phòng riêng tao nhã chỉ ngăn cách bằng một lớp bình phong giấy tuyên chấn song gỗ, tiếng nói chuyện của khách phòng bên ở ngay trong gang tấc.",
      "Chiếu Tatami trong phòng riêng có trang bị đệm ngồi dày êm ái, sau khi khép cửa gỗ lại người bên ngoài sẽ không đẩy cửa bước vào.",
      "Trà thất luôn có sẵn bánh trà cổ thụ giúp tỉnh táo do lão nông trồng trà vò thủ công và trà thuốc ôn kinh dưỡng khí."
    ],
    "events": [
      {
        "id": "evt_qp_tea_screen",
        "title": "Nghe tiếng oẳn tù tì phòng bên tự sướng sau bình phong giấy tuyên",
        "场所": "Phòng riêng chiếu Tatami trà thất",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cách tấm bình phong giấy tuyên chấn song gỗ vọng sang tiếng cụng chén nhiệt tình và tiếng oẳn tù tì ồn ào của những vị khách khác, trên mặt bình phong in bóng bàn tay của người phòng bên. Trên chiếc bàn gỗ nhỏ trong phòng riêng nước trà bốc hơi nóng, cô ấy ngồi trên chiếu cói Tatami đang chuẩn bị rót trà.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Rót cho cô ấy một chén trà nóng mới pha, cách tấm bình phong nhìn nhau mỉm cười, tận hưởng hương trà giữa núi rừng",
            "结算": "Độ hảo cảm+20, Tiền bạc-45, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi quần lót quỳ trước tấm bình phong giấy tuyên, giữa tiếng oẳn tù tì ồn ào của phòng bên mà dùng hai tay tách mở môi âm hộ phô bày, dùng ngón tay đâm ngoáy hạ thể ướt đẫm tự sướng, quy định không được phát ra tiếng kêu",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp trên đệm bồ đoàn chiếu Tatami trước bình phong cong mông lên, từ phía sau đâm dương vật vào hạ thể, nương theo tiếng cụng chén của khách phòng bên mà thúc mạnh từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "半山听松古茶舍"
  },
  {
    "id": "qp_observatory",
    "name": "Trạm quan sát thiên văn cũ Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Trạm quan sát thiên văn cũ Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "public",
    "privacy": 4,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Trạm quan sát thiên văn mái vòm kim loại tọa lạc trên đỉnh núi Thanh Bình. Trang bị kính thiên văn phản xạ khúc xạ cỡ lớn, phòng chiếu hình vũ trụ (Planetarium) và đài ngắm sao lộ thiên. Ban đêm sau khi du khách đã về hết, trên đỉnh núi gió lớn, khi cửa sổ trời mái vòm mở ra tiếng bánh răng cơ khí quay trầm đục. Góc chết bằng thép ở bàn điều khiển và hàng ghế cuối trong phòng chiếu vũ trụ tối đen hoàn toàn rất thích hợp để triển khai phô bày toàn thân trần trụi dưới bầu trời sao và mò mẫm trong phòng tối.",
    "draw": "Quan sát bầu trời sao, khám phá mái vòm cơ khí. Khỏa thân phô bày hướng lên bầu trời khi cửa sổ trời mái vòm mở ra, vén váy sờ hạ thể ở hàng ghế cuối phòng chiếu vũ trụ tối đen và tiến vào từ phía sau trên bàn điều khiển.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Khi cửa sổ trời phòng quan sát mái vòm trượt mở, động cơ vận hành nổ ầm ầm, gió núi ùa vào, âm thanh môi trường che lấp hoàn toàn tiếng người.",
      "Phòng chiếu vũ trụ tầng dưới khi chiếu phim toàn trường tối đen như mực, hàng ghế sau êm ái rộng rãi.",
      "Bệ đỡ kính thiên văn cỡ lớn kiên cố, độ cao vừa phải và tránh khỏi camera giám sát vòng ngoài."
    ],
    "events": [
      {
        "id": "evt_qp_obs_dome",
        "title": "Phô bày toàn thân trần trụi dưới bầu trời sao khi cửa sổ trời mái vòm mở ra",
        "场所": "Phòng quan sát mái vòm đài thiên văn",
        "优先级": 68,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa sổ trời kim loại hình bán cầu trên đỉnh đầu chầm chậm trượt mở, để lộ cả biển sao trời đêm, gió lạnh đỉnh núi thổi ùa vào trong phòng. Giá đỡ bằng thép của kính thiên văn cỡ lớn dựng chính giữa, đèn báo trên bàn điều khiển ánh lên sắc xanh lục. Cô ấy đứng cạnh thị kính ngẩng đầu nhìn bầu trời.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Tinh chỉnh núm xoay thị kính của kính thiên văn, kéo cô ấy ghé sát vào thị kính quan sát cụm tinh vân rõ nét",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi sạch quần áo toàn thân trèo lên thang sắt bệ quan sát, toàn thân trần trụi ngửa người tựa lên lan can kim loại dang rộng hai chân, đón làn gió đêm và bầu trời sao trên đỉnh đầu hướng thẳng vào ống kính phô bày vùng kín và bầu ngực",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm chụp lén+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Giữ lấy eo cô ấy bắt nằm sấp trên bàn điều khiển bằng thép, từ phía sau đâm dương vật vào hạ thể ướt mượt, ra sức thúc đẩy từ phía sau dưới bầu trời sao qua khung cửa sổ trời đã trượt mở",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_obs_planetarium",
        "title": "Vén váy sờ hạ thể ở hàng ghế cuối cùng phòng chiếu vũ trụ tối đen",
        "场所": "Phòng chiếu vũ trụ đài thiên văn",
        "优先级": 62,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Phòng chiếu vũ trụ tầng dưới không một bóng người, mái vòm đang chiếu hình ảnh quỹ đạo sao và cực quang chuyển động, trong phòng hoàn toàn ở trạng thái tối đen. Hai người ngồi trên chiếc ghế đệm rộng rãi ở hàng cuối cùng, không khí yên tĩnh mát lạnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy tựa vào lưng ghế mềm, lặng lẽ ngắm nhìn họa tiết cực quang biến đổi trên đỉnh đầu",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Trong môi trường tối đen hoàn toàn vén váy cô ấy lên cởi bỏ quần lót, luồn tay vào gốc đùi vuốt ve hạ thể đang rỉ nước, dưới ánh sao xanh thẳm chiếu rọi mà dùng ngón tay móc ngoáy cho tới khi toàn thân cô ấy run rẩy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "青屏旧天文观测站"
  },
  {
    "id": "dt_outlet",
    "name": "Trung tâm thương mại Shanshan Outlet",
    "fullName": "Khu Đông Đường · Trung tâm thương mại Shanshan Outlet",
    "district": "Khu Đông Đường",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Khu thương mại mua sắm hàng hiệu phong cách châu Âu quy mô lớn tại khu mới Đông Đường. Có các cửa hàng giảm giá thương hiệu lớn nối liền nhau và bãi đỗ xe ngầm cỡ lớn. Bên trong các cửa hàng flagship thương hiệu đều có phòng thử đồ ba mặt gương lắp rèm nhung dày dặn. Gương toàn thân ba mặt trong phòng thử đồ cùng dòng người qua lại trên hành lang rất thích hợp để triển khai đứng tiến vào từ phía sau khi rèm phòng thử đồ hé mở, thả rông khoác áo măng tô dáng dài dạo phố và làm tình trên xe ở hầm đỗ xe.",
    "draw": "Săn hàng hiệu giảm giá. Đứng tiến vào từ phía sau khi rèm nhung phòng thử đồ hé mở nhẹ, thả rông khoác áo măng tô dáng dài đi dạo phố mua sắm và làm tình ở ghế sau hầm đỗ xe.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng thử đồ VIP tại quầy chuyên doanh được trang bị gương toàn thân sát đất ba mặt và rèm cửa bằng nhung dày nặng, không gian đủ sức chứa hai người.",
      "Phía sau cột trụ hướng Tây Bắc của hầm đỗ xe thuộc điểm mù camera giám sát, khi đỗ xe tại đây độ kín đáo cực cao.",
      "Quầy lễ tân trung tâm thương mại có nhận ký gửi chất bảo dưỡng đồ da quý hiếm và phụ kiện da nhỏ đồng thương hiệu."
    ],
    "events": [
      {
        "id": "evt_dt_outlet_fitting",
        "title": "Đứng tiến vào từ phía sau khi rèm nhung phòng thử đồ hé mở nhẹ",
        "场所": "Phòng thử đồ VIP quầy chuyên doanh thương hiệu",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm cửa bằng nhung dày nặng của phòng thử đồ đã kéo lại, gương sát đất ba mặt phản chiếu rõ nét bóng dáng hai người. Ngoài hành lang nhân viên cửa hàng đang treo quần áo, tiếng móc áo va chạm vang lên không ngớt. Cô ấy đang cầm một chiếc váy mới chuẩn bị mặc thử.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại đai lưng váy, khen hiệu ứng mặc thử của cô ấy rất đẹp và mua tặng cho cô ấy",
            "结算": "Độ hảo cảm+25, Tiền bạc-380, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=550",
            "选项": "把试衣间门帘故意留一条缝，让她双手按在落地镜上撩起新裙子脱掉内裤，从身后把肉棒插进下体，在店员随时路过的心跳感中站立抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=550",
            "选项": "Cố tình chừa lại một khe hở nhỏ ở rèm cửa phòng thử đồ, bảo cô ấy chống hai tay lên gương sát đất vén chiếc váy mới lên cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể, đứng thúc đẩy giữa cảm giác tim đập thình thịch khi nhân viên cửa hàng bất cứ lúc nào cũng có thể đi ngang qua",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_outlet_trench",
        "title": "Thả rông khoác áo măng tô buộc dây dáng dài đi dạo các quầy hàng",
        "场所": "Phố đi bộ hành lang khu Outlet",
        "优先级": 60,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc áo măng tô buộc dây dáng dài qua gối vừa mới mua đã được bỏ vào túi giấy. Trên hành lang trung tâm thương mại khách hàng qua lại tấp nập, tiếng nhạc vang vọng trên đỉnh đầu. Hai người đang đứng nghỉ ngơi cạnh ghế dài.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy xách túi mua sắm, ra cạnh đài phun nước quảng trường mua hai hộp kem cùng nhau thưởng thức",
            "结算": "Độ hảo cảm+15, Tiền bạc-28, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy vào nhà vệ sinh cởi sạch áo ngoài cùng toàn bộ áo ngực quần lót đang mặc trên người bỏ vào túi, bên trong hoàn toàn trần trụi thả rông khoác chiếc áo măng tô dài này lên thắt chặt đai lưng, bầu bạn cùng bạn đi dạo khắp cả trung tâm thương mại",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "杉杉奥特莱斯"
  },
  {
    "id": "ys_reedbed",
    "name": "Đầm lau sậy Cầu Cửu Lý",
    "fullName": "Khu Vũ Thạch & Phố Giang · Đầm lau sậy Cầu Cửu Lý",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Vùng ngập nước lau sậy hoang dã bên ngoài đê lớn ven sông. Những bụi lau sậy rậm rạp cao vài mét bao bọc kín mít con đường ván gỗ, sâu bên trong có đình ngắm chim đơn sơ và bệ sát mặt nước. Gió sông thổi qua bãi lau sậy kêu xào xạc, đi sâu vào vài trăm mét là không còn bóng dáng du khách. Đường hẹp hai bên lau sậy cao vút cùng tiếng nước sông vỗ bờ rất thích hợp để triển khai đứng vén váy tiến vào từ phía sau trên đường ván gỗ và khỏa thân tự sướng phô bày trên tấm ván gỗ bãi bùn.",
    "draw": "Ngắm chim vùng ngập nước, dạo bước đón gió sông. Đứng bên lan can tiến vào từ phía sau giữa lối đi lau sậy che khuất, làm tình ngoài trời trên ghế dài đình ngắm chim và khỏa thân tách mở hạ thể tự sướng trên ván gỗ bãi bùn.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Buổi sáng sớm trên ngọn bông lau ngưng tụ sương mai tinh khiết, bãi bùn sâu bên trong có thể thu thập nguyên liệu thảo dược thủy sinh đặc dị.",
      "materials": [
        "Phấn hoa lau sậy hoang dã tự nhiên",
        "Sương sớm hơi nước tinh khiết",
        "Nguyên liệu thực vật thủy sinh bãi bồi",
        "Nguyên liệu thảo dược hoang dã tự nhiên"
      ]
    },
    "special": [
      "Đoạn giữa đường ván gỗ bị bãi lau sậy cao hơn hai mét che khuất hoàn toàn, từ hai bên không thể nhìn rõ bên trong.",
      "Tiếng còi tàu trên mặt sông và tiếng sóng vỗ vào bãi bùn có thể che lấp hoàn toàn tiếng hít thở và thở dốc.",
      "Thỉnh thoảng có ngư dân già neo thuyền bên cạnh, có thể dùng cá tươi đổi lấy nguyên liệu rượu mạnh tự ủ xua tan cái lạnh."
    ],
    "events": [
      {
        "id": "evt_ys_reed_rail",
        "title": "Đứng bên lan can tiến vào từ phía sau sâu trong đường ván gỗ ngắm chim",
        "场所": "Cuối đường ván gỗ vùng ngập nước",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đường ván gỗ vươn sâu vào giữa bụi lau sậy dày đặc cao bằng hai đầu người, bốn phía chỉ có bông lau trắng xóa đung đưa, tiếng nước sông vỗ bờ nghe rõ mồn một. Cô ấy đứng cạnh lan can gỗ ngắm nhìn đàn chim nước trên bãi bùn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy tựa vào lan can gỗ, cùng ngắm nhìn chiếc tàu chở hàng chầm chậm lướt qua trên mặt sông phía xa",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "青奸",
            "门槛": "性欲度>=65, 顺从度>=550",
            "选项": "让她双手抓着栈道木护栏撅起屁股，从后面掀起裙子拉下内裤，把肉棒插进湿滑的下体，在两旁芦苇遮挡下站立抽插",
            "结算": "性欲度重置, 顺从度+35, 青奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "Ngoài trời",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=550",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt lan can gỗ đường ván cong mông lên, từ phía sau vén váy kéo quần lót xuống, đâm dương vật vào hạ thể ướt mượt, đứng thúc đẩy dưới sự che chắn của rặng lau sậy hai bên",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm ngoài trời+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_reed_naked",
        "title": "Khỏa thân tách mở hạ thể tự sướng phô bày trên ván gỗ bãi bùn",
        "场所": "Bờ bùn sâu trong bãi lau sậy",
        "优先级": 60,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên bệ gỗ sát mặt nước ở điểm cụt của đường ván gỗ có đặt một tấm ván lót sạch sẽ khô ráo, bốn phía được lau sậy kín không kẽ hở vây quanh, chỉ nhìn thấy bầu trời trên đỉnh đầu. Xung quanh ngoài tiếng gió ra không có bất kỳ động tĩnh nào.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Hái một nhành bông lau sạch sẽ đưa vào tay cô ấy, cùng cô ấy ngồi sóng đôi trên tấm ván gỗ hóng gió",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy cởi sạch toàn bộ quần áo trên người ngồi xuống tấm ván gỗ, dang rộng hai chân, dùng hai tay tách môi âm hộ sang hai bên phô bày hạ thể ướt đỏ để bạn cầm điện thoại chụp ảnh ở cự ly gần",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Kinh nghiệm chụp lén+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "九里桥芦苇湿地"
  },
  {
    "id": "gl_laundry",
    "name": "Tiệm giặt sấy tự động Tây Đắc Bảo",
    "fullName": "Khu Cổ Lĩnh · Tiệm giặt sấy tự động Tây Đắc Bảo",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Tiệm giặt là tự phục vụ không người trông coi mở cửa 24 giờ ở góc phố cổ Cổ Lĩnh. Trong tiệm xếp hàng loạt máy giặt lồng ngang và máy sấy quần áo thương mại cỡ lớn, tràn ngập hương thơm của nước giặt và luồng gió nóng. Những cỗ máy cỡ lớn khi vắt khô và sấy sẽ tạo ra độ rung chấn cơ học mãnh liệt cùng tiếng nổ ầm ầm. Nắp trên của máy sấy đang rung bần bật và lồng giặt trống không rất thích hợp để triển khai tự sướng bằng độ rung trên nóc máy sấy và cởi quần lót ngay trước mặt ném vào giặt rồi thả rông rời tiệm.",
    "draw": "Giặt sấy tự phục vụ, chợp mắt ban đêm. Cởi quần tự sướng nhờ độ rung cực mạnh trên nóc máy vắt cỡ lớn, cởi quần lót ngay tại chỗ ném vào lồng giặt thả rông rời tiệm và tiến vào từ phía sau trên bàn gấp quần áo.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Máy sấy thương mại trong giai đoạn vắt khô cực mạnh thân máy tạo ra độ rung cơ học tần số cao đều đặn và dữ dội.",
      "Đêm khuya trong tiệm không có nhân viên quản lý, cửa kính tuy xuyên sáng nhưng lối đi giữa các dãy máy thuộc điểm mù tầm nhìn.",
      "Máy bán hàng tự động cung cấp nước giặt cầm tay đóng gói riêng, khăn khử trùng và gói tiện lợi dầu bôi trơn tình thú."
    ],
    "events": [
      {
        "id": "evt_gl_laundry_dryer",
        "title": "Tự sướng nhờ độ rung trên nắp máy vắt khô công suất lớn",
        "场所": "Trên nóc máy sấy cỡ lớn tiệm giặt là",
        "优先级": 68,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc máy sấy thương mại cỡ lớn đang tiến hành vắt khô tốc độ cao, cả dãy máy phát ra tiếng ầm ầm và rung lên bần bật, nắp kim loại phía trên ấm nóng. Đêm khuya trong tiệm không có khách hàng nào khác, cô ấy đứng cạnh máy chờ sấy xong quần áo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi sóng đôi cùng cô ấy trên ghế dài chờ đợi, cùng uống cà phê đóng lon ấm áp chờ quần áo giặt xong",
            "结算": "Độ hảo cảm+15, Tiền bạc-12, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bế cô ấy đặt ngồi lên nắp tôn của chiếc máy sấy đang rung tốc độ cao, cởi bỏ quần lót của cô ấy để mông trần áp sát lên nóc máy đang rung bần bật, mượn độ rung cơ học của cỗ máy dùng ngón tay ấn giữ âm vật cô ấy xoa nắn cho tới khi lên đỉnh",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bế cô ấy đặt ở mép chiếc máy sấy đang rung chấn dang rộng hai đùi, đâm dương vật vào hạ thể ướt đẫm, nương theo độ rung cơ học của thân máy mà ôm chặt từ phía trước thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_laundry_panties",
        "title": "Cởi quần lót ngay tại chỗ ném vào máy giặt rồi mặc váy thả rông rời tiệm",
        "场所": "Cạnh ghế dài chờ tiệm giặt là",
        "优先级": 60,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa lồng giặt của một chiếc máy giặt trống đang mở, đã bỏ xu và đổ nước giặt vào. Cô ấy đứng trong bóng tối ở lối đi giữa hai dãy máy chuẩn bị bỏ quần áo bẩn vào lồng giặt.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy bỏ từng món quần áo vào lồng giặt đóng cửa khoang lại, nhấn nút khởi động",
            "结算": "Độ hảo cảm+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy ngay trước mặt bạn vén váy lên cởi chiếc quần lót đang mặc trên người ra ném vào lồng giặt bấm nút giặt sạch, nửa thân dưới hoàn toàn thả rông mặc váy ngoài đi theo bạn bước ra khỏi tiệm giặt là xuống phố",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "洗得宝自助洗衣吧"
  },
  {
    "id": "xz_refuge",
    "name": "Tầng lánh nạn 42F Trung tâm Giang Hạ",
    "fullName": "Khu Tây Châu · Tầng lánh nạn 42F Trung tâm Giang Hạ",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 4,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Tầng lánh nạn phòng cháy chữa cháy ở đoạn giữa tòa nhà văn phòng siêu cao tầng. Thang máy khách không dừng trực tiếp ở tầng này, đẩy cửa chống cháy bước vào là những cột trụ xi măng trống trải, đường ống thông gió cỡ lớn và bức tường kính sát đất toàn cảnh hướng thẳng ra ngã ba sông. Ban đêm sau khi hết giờ làm việc cả tầng tắt đèn, không có camera giám sát bao phủ, hệ thống thông gió phát ra tiếng nổ trầm đục, thích hợp nhìn xuống từ trên cao, trói buộc vào lưới thông gió và tương tác trong góc tối.",
    "draw": "Nhìn xuống cảnh sông về đêm. Áp người vào tường kính sát đất phơi bày, bẻ quặt hai tay vào lưới thông gió tương tác khẩu giao và ẩn gian trong bóng tối đường ống gió.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Tầng lánh nạn không có chỗ ngồi làm việc hàng ngày hay camera, sau khi cửa chống cháy khép lại chỉ có tiếng gió trong đường ống.",
      "Kết cấu kim loại của lưới thông gió kiên cố, độ cao vừa phải, có thể dùng làm chỗ cố định tay và giá đỡ quay chụp.",
      "Kính sát đất có lớp phủ màng phản quang, khi bên trong phòng mờ tối thì từ bên ngoài hoàn toàn không thể nhìn ngược vào trong."
    ],
    "events": [
      {
        "id": "evt_xz_refuge_window",
        "title": "Áp người vào tường kính sát đất vuốt ve hạ thể phơi bày",
        "场所": "Trước tường kính sát đất tầng lánh nạn",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đẩy cửa chống cháy bước vào tầng lánh nạn, đường ống thông gió phát ra tiếng kêu vo vo đều đặn. Ngoài cửa sổ là ánh đèn hai bên bờ ngã ba sông. Cô ấy đứng trước mặt kính sát đất ngắm nhìn cảnh sông dưới chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bước tới bên cạnh cô ấy, sóng vai tựa trước tường kính nhìn xuống cảnh đêm ngã ba sông",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi quần lót áp người lên mặt kính, hai tay chống lên bề mặt kính, hướng thẳng về phía ánh đèn mặt sông ngoài cửa sổ dùng ngón tay tách mở hạ thể phô bày",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên tường kính tách hai chân ra, từ phía sau đâm dương vật vào hạ thể ướt át, đón cảnh đêm thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_refuge_grille",
        "title": "Đứng tương tác khẩu giao trước lưới thông gió",
        "场所": "Cạnh cột trụ lưới thông gió",
        "优先级": 70,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tại cửa lưới chớp thông gió tươi gió sông thổi vù vù, tiếng gió che lấp mọi âm thanh xung quanh. Phía sau cột trụ nằm trong góc chết bóng tối. Cô ấy đứng cạnh lưới thông gió đưa tay cảm nhận làn gió mát thổi vào.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khoác áo ngoài lên người cô ấy chắn gió, nắm lấy bàn tay nhỏ của cô ấy rời khỏi cửa gió",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Kéo khóa quần ra, bảo cô ấy dùng hai tay nắm chặt lưới kim loại quỳ xuống, dưới sự che chở của tiếng gió mà ngậm trọn cả cây dương vật vào miệng nuốt sâu tận họng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "江厦中心42F避难层"
  },
  {
    "id": "ys_carferry",
    "name": "Bến phà ô tô Bản Kiều",
    "fullName": "Khu Vũ Thạch & Phố Giang · Bến phà ô tô Bản Kiều",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "traffic",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Phà chở ô tô hai tầng nối liền hai bờ sông. Tầng dưới đỗ đủ các loại xe cộ, khi di chuyển máy chính diesel phát ra tiếng nổ tần số thấp và độ rung chấn đều đặn, sóng sông vỗ vào mạn thuyền. Khoảng cách giữa các xe ở tầng đáy khá hẹp, bên trong khoang xe cộng hưởng độ rung từ động cơ phà, thích hợp mượn độ lắc lư của thân xe để tiến hành ngồi dạng chân cưỡi ngựa và hé cửa sổ mò mẫm tại điểm mù.",
    "draw": "Đi phà qua sông ngắm cảnh. Kết hợp tư thế cưỡi ngựa ngồi dạng chân trong xe giữa nhịp dập dềnh khi phà chạy, hé cửa sổ xe sờ hạ thể tại điểm mù và hóng gió trên boong mũi thuyền.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Khi phà bơi ra tới giữa sông, độ cộng hưởng động cơ và sóng nước lắc lư rất rõ rệt, có thể mượn lực tiến hành làm tình trên xe.",
      "Xe cộ ở tầng đáy đỗ san sát, xe tải phía trước phía sau che khuất tầm nhìn, nhân viên bến phà chỉ đi kiểm tra trước lúc cập bến.",
      "Lối đi bên ngoài khoang máy tầng đáy không có camera giám sát, tiếng gió và tiếng mô-tơ cực lớn."
    ],
    "events": [
      {
        "id": "evt_ys_ferry_vibe",
        "title": "Ngồi dạng chân cưỡi ngựa giữa nhịp dập dềnh khi phà chạy",
        "场所": "Bên trong xe ở boong tầng dưới phà chở ô tô",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc phà tiến vào giữa lòng sông, động cơ mang lại độ rung chấn đều đặn mạnh mẽ, thân xe nhấp nhô theo sóng nước. Bốn phía bị xe tải lớn che khuất, trong xe đang bật máy lạnh. Cô ấy ngồi ở ghế phụ nhìn dòng nước chảy ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Hạ cửa sổ xe xuống rộng cỡ một ngón tay để thông gió, vặn nắp chai đồ uống nóng đưa cho cô ấy cùng thưởng thức",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Thò tay luồn vào trong quần áo thân dưới của cô ấy, mượn độ rung của động cơ thân tàu khẽ xoa âm vật nhạy cảm, ngắm nhìn cô ấy cắn môi nhẫn nại giữa nhịp dập dềnh",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Cởi khóa quần, bảo cô ấy cởi bỏ quần lót ngồi dạng chân lên đùi bạn, nuốt trọn cả cây dương vật vào trong, mượn độ lắc lư đều đặn trong hành trình mà nhấp nhô thúc đẩy lên xuống",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_ferry_open",
        "title": "Mở cửa sổ đón gió vuốt ve qua lớp áo",
        "场所": "Cạnh mũi xe trên boong phà",
        "优先级": 62,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc xe đỗ ở hàng đầu trên boong phà, gió sông thổi tạt vào mặt. Trên mặt sông đèn báo hiệu hàng hải nhấp nháy, xung quanh thỉnh thoảng có tài xế khác đứng hút thuốc cạnh xe. Cô ấy đứng cạnh cửa xe tựa vào thân xe ngắm cảnh sông.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại cổ áo bị gió thổi rối, đứng sóng đôi cạnh xe hóng gió sông",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy dựa lưng vào cửa xe đứng thẳng, dưới sự che chắn của chiếc áo khoác lớn luồn tay vào trong quần lót vuốt ve hạ thể ướt át, kích thích cho tới khi rỉ nước ngay dưới rủi ro có tài xế đi lại bên cạnh",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "板桥汽渡码头"
  },
  {
    "id": "gl_tailor",
    "name": "Xưởng may sườn xám Phượng Nghi Đường",
    "fullName": "Khu Cổ Lĩnh · Xưởng may sườn xám Phượng Nghi Đường",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Tiệm may đo sườn xám phong cách Thượng Hải (Hải phái) kiểu xưa. Trưng bày các loại vải lụa tơ tằm và khuy cài thủ công. Phòng thử đồ trang bị gương soi toàn thân gỗ tử đàn ba mặt và rèm nhung dày nặng. Thợ may già đo cơ thể đề cao sự ôm sát không vết hằn. Không gian bên trong rèm thử đồ khép kín, ngoài rèm người thợ may già đi lại trò chuyện, thích hợp dùng thước dây siết chặt đo cơ thể, phô bày trước gương ba mặt và tương tác bên trong rèm.",
    "draw": "May đo sườn xám truyền thống. Dùng thước dây mềm siết chặt đo vòng ngực vòng eo, tách mở hạ thể phô bày trước gương sát đất ba mặt và tương tác khẩu giao sau rèm thử đồ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng thử đồ có rèm nhung dày hai lớp và gương thử đồ gấp ba mặt, sau khi kéo khép lại sẽ ngăn cách hoàn toàn tầm nhìn bên ngoài.",
      "Khi người thợ may già vào kho lấy vải sẽ có khoảng thời gian trống vài phút không có người.",
      "Trong tiệm có chuẩn bị sẵn thước dây mềm và các mẫu sườn xám thử đồ xẻ tà cao."
    ],
    "events": [
      {
        "id": "evt_gl_tailor_mirror",
        "title": "Tách mở hạ thể phô bày trước gương ba mặt",
        "场所": "Trước gương gấp ba mặt trong phòng thử đồ",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm thử đồ bằng nhung dày nặng đã kéo chặt, tấm gương lớn ba mặt phản chiếu toàn thân. Người thợ may già đang sắp xếp các xấp vải ở ngoài rèm. Cô ấy đứng trước gương chờ mặc thử và đo số đo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chọn các mẫu vải lụa tơ tằm màu sắc khác nhau trên quầy, thảo luận kiểu dáng phù hợp",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi bỏ quần áo thân dưới đứng đối diện với tấm gương ba mặt, dùng hai tay tách môi âm hộ sang hai bên, hướng thẳng vào gương phô bày hạ thể ướt đỏ",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trước tấm gương ba mặt bảo cô ấy vịn vào khung gương cong mông lên, kéo khóa quần từ phía sau vươn người tiến vào, thúc mạnh dưới hình ảnh phản chiếu trong gương",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_tailor_measure",
        "title": "Điều giáo dùng thước dây mềm siết chặt đo cơ thể",
        "场所": "Bên trong phòng thử đồ",
        "优先级": 62,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong khay có đặt cuộn thước dây mềm màu vàng do thợ may để lại. Ngoài rèm vọng vào tiếng nói chuyện và tiếng hơi nước bàn là. Cô ấy cởi áo ngoài đứng trên thảm chờ đo kích thước.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cầm lấy thước dây giúp cô ấy đo sơ qua chiều rộng vai và vòng eo, ghi lên giấy để thợ may tham khảo",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Cầm thước dây mềm siết thật chặt quanh bầu ngực và bờ mông cô ấy, đo kích thước trên những vết hằn khi thước dây lún sâu vào da thịt mềm mại, ngắm nhìn cô ấy nín thở chịu đựng cảm giác hơi đau xen lẫn kích thích",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "凤仪堂旗袍定制坊"
  },
  {
    "id": "xz_izakaya",
    "name": "Quán nhậu Izakaya Điểu Kiến",
    "fullName": "Khu Tây Châu · Quán nhậu Izakaya Điểu Kiến",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Quán nhậu kiểu Nhật (Izakaya) chuyên món gà xiên nướng (Yakitori) bên đường ven sông. Hương thịt xiên nướng than củi thơm phức, có các phòng riêng nhỏ trải chiếu Tatami độc lập. Không gian dưới lớp khăn trải bàn dài dày nặng rủ chạm đất hoàn toàn khép kín, khách uống rượu phòng bên oẳn tù tì ồn ào náo nhiệt, thích hợp chui xuống gầm bàn dưới lớp khăn trải bàn chạm đất tương tác khẩu giao và kích thích bằng ngón tay dưới gầm bàn khi cửa gỗ khép hờ.",
    "draw": "Thưởng thức gà xiên nướng Yakitori và rượu Sake. Chui xuống gầm bàn dưới lớp khăn trải bàn chạm đất tương tác khẩu giao, kích thích bằng ngón tay dưới gầm bàn khi cửa trượt gỗ khép hờ và ngồi dạng chân kết hợp khi hơi say.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Bàn gỗ trong phòng riêng trải khăn trải bàn dày chạm đất, không gian dưới gầm bàn sâu và chắn hoàn toàn tầm nhìn bên ngoài.",
      "Tiếng oẳn tù tì ở phòng bên cùng tiếng nhạc nền trong quán ồn ào náo nhiệt, có thể che lấp tiếng nước nhỏ vụn dưới gầm bàn.",
      "Trong quán có chuẩn bị sẵn rượu Sake vị ngọt hâm nóng và rượu mơ."
    ],
    "events": [
      {
        "id": "evt_xz_izakaya_table",
        "title": "Tương tác khẩu giao dưới gầm bàn dưới lớp khăn trải bàn chạm đất",
        "场所": "Dưới gầm bàn chiếu Tatami quán Izakaya",
        "优先级": 68,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm khăn trải bàn phong cách Nhật Bản rủ thẳng xuống chạm mặt chiếu Tatami, ngăn cách hoàn toàn phần gầm bàn. Ngoài cửa nhân viên phục vụ bưng đĩa thịt xiên nướng đi ngang qua, phòng bên cạnh vọng sang tiếng cụng ly. Hai người ngồi trước bàn thưởng thức món ăn nhẹ.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Gắp xiên thịt gà nướng hành thơm phức đặt vào đĩa của cô ấy, cụng ly cùng cô ấy nhâm nhi chút rượu Sake ấm",
            "结算": "Độ hảo cảm+20, Tiền bạc-35, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Cởi khóa quần, bảo cô ấy tháo giày chui xuống dưới lớp khăn trải bàn chạm đất quỳ giữa hai chân bạn, giữa tiếng oẳn tù tì của phòng bên mà ngậm dương vật vào miệng nuốt sâu tận họng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_xz_izakaya_finger",
        "title": "Kích thích bằng ngón tay dưới đáy váy dưới gầm bàn khi cửa gỗ khép hờ",
        "场所": "Dưới gầm bàn gỗ phòng riêng quán Izakaya",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cánh cửa trượt bằng gỗ đang khép hờ, nhân viên phục vụ bất cứ lúc nào cũng có thể bước qua châm thêm nước. Hai người ngồi sóng đôi trên chiếu Tatami, trên bàn bày đĩa gà xiên nướng bốc hơi nóng hổi. Cô ấy bưng tách trà nhấp từng ngụm nhỏ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đẩy đĩa đậu phụ chiên mà cô ấy thích tới trước mặt cô ấy, giúp cô ấy châm thêm trà gạo lứt ấm nóng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Dưới sự che chắn của chiếc bàn, luồn tay vào trong quần áo thân dưới của cô ấy, giữa cảm giác căng thẳng khi ngoài cửa có người đi lại mà đâm ngón tay vào hạ thể ướt mềm móc ngoáy phát ra tiếng nước",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy tụt quần lót ngồi dạng chân lên đùi bạn, dưới lớp áo khoác che phủ nhắm chuẩn đâm vào, hạ thấp giọng thúc đẩy lên xuống khi có tiếng bước chân đi ngang qua ngoài cửa",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "鸟见烧鸟居酒屋"
  },
  {
    "id": "lx_dorm_roof",
    "name": "Sân thượng Ký túc xá số 7",
    "fullName": "Khu Lạc Hà · Sân thượng Ký túc xá số 7",
    "district": "Khu Lạc Hà",
    "archetype": "public",
    "privacy": 4,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Sân thượng thoáng đãng trên tầng cao nhất của tòa ký túc xá kiểu cũ. Phơi phóng những tấm ga trải giường và quần áo đan chéo dọc ngang, sừng sững một tháp chứa nước bằng sắt cỡ lớn, từ rìa sân thượng có thể nhìn xuống sân vận động. Ban đêm sau giờ giới nghiêm sân thượng không có ai đi tuần tra. Mê cung ga trải giường, bóng tối dưới bồn nước và cạnh tường chắn mái rất thích hợp để tiến hành mò mẫm sau tấm ga giường che chắn, tự sướng tương phản và thúc đẩy trực diện lộ thiên.",
    "draw": "Đón gió đêm sân thượng và nhìn xuống khuôn viên trường. Xoa nắn qua lớp áo sau những tấm ga giường tung bay, tự sướng tương phản dưới bóng tối bồn nước và thúc đẩy lộ thiên cạnh tường chắn mái.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Trên sân thượng phơi hàng loạt ga trải giường và vỏ chăn, bay cuộn theo gió tạo thành nhiều bức màn chắn tầm nhìn.",
      "Ban đêm sau giờ tắt đèn cửa cầu thang đóng lại, sân thượng hoàn toàn không có người quản lý hay ra vào.",
      "Thang trèo bồn nước và lan can sắt có kết cấu kiên cố, có thể dùng để cố định tư thế."
    ],
    "events": [
      {
        "id": "evt_lx_roof_sheet",
        "title": "Cởi áo vuốt ve dưới sự che chắn của những tấm ga giường đang phơi",
        "场所": "Phía sau tấm ga giường trên dây phơi đồ sân thượng",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hàng loạt tấm ga trải giường màu trắng bay cuộn trong làn gió đêm, chắn khuất tầm nhìn từ lối cầu thang đi xuống. Phía dưới tường chắn mái có thể nghe thấy tiếng loa phát thanh từ sân vận động. Hai người bước đi giữa những tấm ga giường.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy bước tới cạnh tường chắn mái, cùng nhau đón gió đêm ngắm nhìn các sinh viên đang chạy bộ trên sân vận động",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Phía sau tấm ga giường đang bay cuộn cởi cúc áo trên và áo ngực của cô ấy ra, dùng hai tay trực tiếp xoa nắn đôi bầu ngực trần căng tròn, mặc cho gió đêm thổi qua đầu ngực ướt át",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trong bóng tối của những tấm ga giường bảo cô ấy tựa vào tường chắn mái tách hai chân ra, từ phía trước vươn người tiến vào lối hoa, đón tiếng ồn ào náo nhiệt của sân vận động phía dưới mà thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_roof_tank",
        "title": "Cởi sạch đồ tự sướng dưới bầu trời sao tại góc chết bồn nước",
        "场所": "Dưới bóng tối tháp chứa nước bằng sắt",
        "优先级": 68,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya trên sân thượng không một bóng người, tháp chứa nước bằng sắt đổ xuống một vùng bóng tối rộng lớn, bốn phía chỉ có tiếng gió. Chiếc ghế gỗ dài được lau rất sạch sẽ. Cô ấy đứng cạnh thang sắt ngắm nhìn bầu trời đêm đầy sao.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Trải áo khoác lên ghế dài cho cô ấy ngồi xuống, ngồi cạnh cô ấy cùng ngẩng đầu ngắm bầu trời sao",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy ở trong bóng tối dưới bồn nước cởi sạch quần áo toàn thân nằm xuống ghế dài, tách hai chân dùng ngón tay vuốt ve âm vật và hạ thể, tự sướng dưới bầu trời sao cho bạn xem",
            "结算": "Độ thuận tùng+35, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "七舍宿管天台"
  },
  {
    "id": "xz_mech_garage",
    "name": "Nhà để xe cơ khí tự động Tây Châu",
    "fullName": "Khu Tây Châu · Nhà để xe cơ khí tự động Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "traffic",
    "privacy": 4,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Hầm đỗ xe nâng hạ cơ khí quy mô lớn ba tầng dưới lòng đất. Được cấu thành từ hàng trăm tấm sàn đỗ xe bằng thép và dây xích truyền động, khi vận hành tiếng dây xích và bánh răng va chạm cực lớn. Đêm khuya các chỗ đỗ xe đã kín chỗ, tấm sàn đỗ xe dự phòng phía trong nằm ở góc chết cột trụ, camera giám sát không thể bao phủ, tiếng ồn cơ khí có thể che lấp tiếng kêu, thích hợp đeo trứng rung điều khiển từ xa đi dạo và đè lên cửa xe thúc đẩy.",
    "draw": "Đỗ xe chờ đợi dưới hầm để xe. Điều giáo nhét trứng rung điều khiển từ xa đi tìm xe, đè lên cửa xe thúc đẩy giữa tiếng máy móc vận hành ầm ầm và Play tại điểm mù cột trụ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Khi tấm sàn đỗ xe nâng lên hạ xuống tiếng máy móc truyền động dây xích cực lớn, có thể che lấp tiếng thở dốc dữ dội.",
      "Cột trụ sâu nhất chắn khuất camera, tạo thành góc chết không camera giám sát ổn định.",
      "Môi trường hầm để xe u tối, bề mặt thân xe còn vương hơi ấm."
    ],
    "events": [
      {
        "id": "evt_xz_garage_vibe",
        "title": "Nhét trứng rung điều khiển từ xa đi dạo tại góc chết cột trụ",
        "场所": "Phía sau cột trụ xi măng hầm đỗ xe cơ khí",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cột trụ chịu lực to lớn đã chắn khuất camera giám sát trên đỉnh đầu, bốn phía ánh sáng mờ tối. Đường ống thông gió kêu vù vù trên đỉnh đầu. Hai người đỗ xe xong đứng cạnh bóng tối cột trụ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy tránh các vạch kẻ đỗ xe trên mặt đất, cùng nhau chầm chậm đi về phía sảnh thang máy",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Phía sau cột trụ vén quần áo thân dưới của cô ấy ra, đẩy trứng rung vào sâu trong hạ thể và bật chế độ rung mạnh, bắt cô ấy kẹp chặt quả trứng rung đang rung bần bật đi bộ chậm rãi trong hầm để xe tìm lối ra",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_xz_garage_hood",
        "title": "Đè lên cửa xe thúc đẩy giữa tiếng máy móc nổ vang rền",
        "场所": "Cạnh cửa xe trên tấm sàn đỗ xe cơ khí",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm sàn đỗ xe cơ khí phía trên đang nâng lên hạ xuống, phát ra tiếng kim loại vận hành ầm ầm vang dội. Vỏ ngoài thân xe vẫn còn vương hơi ấm. Cô ấy tựa cạnh cửa xe chờ giàn nâng dừng hẳn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy lùi lại sau vạch an toàn, nhắc cô ấy chú ý máy móc đang vận hành phía trên",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "借着升降机轰鸣的掩护把她按在车门上，拉下内裤从正面把肉棒顶入深处，随着机械震动快速抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Mượn sự che chở của tiếng giàn nâng nổ ầm ầm đè cô ấy lên cửa xe, kéo quần lót xuống từ phía trước đâm dương vật vào sâu bên trong, thúc nhanh theo nhịp rung cơ học",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "西洲立体机械车库"
  },
  {
    "id": "gl_darkroom",
    "name": "Phòng tối tráng phim Quang Ảnh Gian",
    "fullName": "Khu Cổ Lĩnh · Phòng tối tráng phim Quang Ảnh Gian",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 4,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Phòng tối tráng phim đen trắng muối bạc thủ công truyền thống. Rèm vải đen cản sáng hai lớp chặn hoàn toàn ánh sáng bên ngoài, trong phòng chỉ bật duy nhất một ngọn đèn an toàn màu đỏ sẫm, tràn ngập mùi chua nhẹ của dung dịch định hình (fixer). Trang bị bồn rửa tráng nước chảy liên tục bằng thép không gỉ và bàn thao tác máy phóng ảnh. Ánh đèn đỏ mờ tối, tiếng nước chảy liên tục và khóa cửa đã khóa trái rất thích hợp để đứng tương tác khẩu giao trước bồn rửa và chụp ảnh phơi bày vùng kín riêng tư bằng máy chụp lấy liền Polaroid.",
    "draw": "Tráng rửa phim thủ công. Đứng tương tác khẩu giao bên bồn rửa dưới ánh đèn đỏ, chụp ảnh tách mở hạ thể lấy liền bằng máy Polaroid rồi kẹp lên dây phơi triển lãm và làm tình trên bàn tối.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng tối chỉ có đèn an toàn màu đỏ sẫm, cửa cản sáng hai lớp sau khi khóa trong sẽ không có người ngoài bước vào.",
      "Tiếng nước chảy liên tục ở bồn rửa bằng thép không gỉ có thể che lấp tiếng nước và tiếng thở dốc.",
      "Kệ thao tác luôn có sẵn giấy in ảnh độ nhạy sáng cao, máy ảnh chụp lấy liền Polaroid và kẹp phơi ảnh."
    ],
    "events": [
      {
        "id": "evt_gl_darkroom_sink",
        "title": "Đứng tương tác khẩu giao cạnh bồn rửa dưới ánh đèn đỏ",
        "场所": "Cạnh bồn rửa tráng phim trong phòng tối",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Khóa cửa phòng tối đã khóa trái, trong phòng chỉ có một ngọn đèn đỏ mờ tối. Vòi nước đang xả nước rào rào vào bồn rửa, trong khay hiện hình tờ giấy in ảnh dần nổi lên đường nét. Cô ấy dùng hai tay vịn vào thành bồn rửa nhìn tấm phim âm bản.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy cầm lấy chiếc kẹp tre, cùng cô ấy khẽ lắc nhẹ khay hiện hình ngắm nhìn bức ảnh dần thành hình",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Kéo khóa quần tựa vào cạnh bồn rửa, bảo cô ấy dưới sự che chở của tiếng nước chảy ngồi xổm xuống ngậm dương vật vào miệng, ngậm trọn mút sâu tận họng dưới ánh đèn đỏ",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_darkroom_photo",
        "title": "Chụp ảnh tách mở hạ thể riêng tư bằng máy Polaroid và kẹp lên dây triển lãm",
        "场所": "Trước giá phơi ảnh trong phòng tối",
        "优先级": 72,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên sợi dây thép dùng kẹp gỗ treo những tấm phim đã tráng rửa xong. Trên bàn đặt chiếc máy ảnh chụp lấy liền Polaroid đã lắp sẵn giấy ảnh. Ánh đèn đỏ u tối chiếu lên người, trong phòng vô cùng yên tĩnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dưới ánh đèn đỏ chụp cho cô ấy một bức ảnh cận cảnh góc nghiêng khuôn mặt, dùng kẹp gỗ treo lên dây phơi ảnh làm kỷ niệm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi bỏ quần áo thân dưới tựa vào mép bàn, dùng hai tay tách mở hoàn toàn môi âm hộ phô bày hạ thể ướt đỏ, dùng máy Polaroid bấm nút chụp và tự tay kẹp bức ảnh phơi bày vùng kín lên dây để triển lãm",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm chụp lén+1, Kinh nghiệm play phục tùng+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "光影间银盐暗房"
  },
  {
    "id": "dt_park",
    "name": "Công viên giải trí Hải Xương Lâm Giang",
    "fullName": "Khu Đông Đường · Công viên giải trí Hải Xương Lâm Giang",
    "district": "Khu Đông Đường",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Công viên chủ đề quy mô lớn tại Lâm Giang. Sở hữu vòng đu quay khổng lồ (Ferris wheel) cao trăm mét, tòa lâu đài và vòng quay ngựa gỗ, buổi tối có màn trình diễn pháo hoa. Khi cabin vòng đu quay lên tới đỉnh trời sẽ khép kín hoàn toàn và có ba phút đứng yên trên không trung; khi bắn pháo hoa âm thanh vang dội, tầm nhìn của đám đông toàn bộ hướng lên bầu trời, thích hợp ngồi dạng chân kết hợp trên đỉnh vòng đu quay và ẩn gian đánh nhanh thắng nhanh dưới sự che chở của tiếng pháo hoa.",
    "draw": "Vui chơi công viên giải trí và ngắm pháo hoa ban đêm. Ngồi dạng chân kết hợp mặt đối mặt ở điểm cao nhất của vòng đu quay, thúc đẩy dưới sự che chở của tiếng pháo hoa nổ vang sau lâu đài và tương tác khẩu giao ở lối đi dành cho nhân viên biểu diễn.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Cabin vòng đu quay toàn cảnh khi lên tới đỉnh cao nhất sẽ dừng lại vài phút, lơ lửng trên cao trong suốt và bên ngoài không thể nhìn trộm vào được.",
      "Màn bắn pháo hoa ban đêm kéo dài mười phút, tiếng nổ dày đặc vang rền điếc tai, sự chú ý của đám đông hoàn toàn tập trung trên bầu trời.",
      "Bên trong lối đi dành cho diễn viên không có camera giám sát, có cất giữ hàng loạt trang phục biểu diễn."
    ],
    "events": [
      {
        "id": "evt_dt_park_ferris",
        "title": "Ngồi dạng chân kết hợp mặt đối mặt khi vòng đu quay lên tới đỉnh trời",
        "场所": "Bên trong cabin toàn cảnh vòng đu quay",
        "优先级": 70,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cabin vòng đu quay chầm chậm nâng lên tới điểm cao nhất một trăm mét, bốn phía là cảnh sông thoáng đãng và cảnh đêm công viên giải trí. Trong cabin chỉ có hai người, cabin tiếp theo cách xa hàng chục mét. Cô ấy ngồi trên ghế dài nhìn ra ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khi lên tới điểm cao nhất nắm chặt lấy tay cô ấy, cùng cô ấy ngắm nhìn cảnh đêm ngoài cửa sổ khẽ gật đầu mỉm cười",
            "结算": "Độ hảo cảm+20, Tiền bạc-60, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi quần lót áp người lên mặt kính cabin, đón ánh đèn rực rỡ của công viên giải trí phía dưới tách hai chân dùng tay vuốt ve hạ thể ướt đẫm",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Cởi khóa quần, bảo cô ấy cởi bỏ quần lót ngồi dạng chân lên đùi bạn, đâm trọn cả cây dương vật vào hạ thể, bốn mắt nhìn nhau nhấp nhô thúc đẩy trong khoang cabin ở độ cao một trăm mét giữa không trung",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_park_firework",
        "title": "Đánh nhanh thắng nhanh trong góc tối dưới sự che chở của tiếng pháo hoa nổ vang",
        "场所": "Cạnh bụi cây phía sau tòa lâu đài công viên",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Màn trình diễn pháo hoa phía trên bầu trời lâu đài nổ vang đúng giờ, pháo hoa ngập trời nổ liên tiếp vang rền điếc tai, du khách đều đang ngửa đầu reo hò. Bụi cây phía sau tòa lâu đài nằm khuất trong bóng tối. Hai người đứng phía sau bụi cây.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Choàng tay ôm bờ vai cô ấy cùng ngửa đầu thưởng thức màn trình diễn pháo hoa rực rỡ phía trên tòa lâu đài",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "借着烟花接连炸裂的巨响掩护，把她拉进灌木后脱下内裤，抬起她的一条腿把肉棒捅入到底，快速用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Mượn sự che chở của tiếng nổ vang trời liên tiếp từ pháo hoa, kéo cô ấy vào sau bụi cây cởi bỏ quần lót, nâng một bên chân cô ấy lên đâm dương vật vào tận đáy, thúc nhanh và mạnh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "海昌临江欢乐世界"
  },
  {
    "id": "ys_container",
    "name": "Bãi container cảng ngoại quan",
    "fullName": "Khu Vũ Thạch & Phố Giang · Bãi container cảng ngoại quan",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "traffic",
    "privacy": 4,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Bãi tập kết container vận tải biển. Những thùng container đủ màu sắc xếp chồng lên nhau thành mê cung thép cao mấy tầng, cần cẩu giàn (Gantry crane) trượt trên đường ray phát ra độ rung tần số thấp, gió biển thổi qua các khe hẹp. Ban đêm khe hẹp giữa các thùng container mờ tối chật hẹp, nằm ở điểm mù của camera giám sát trên cao, vách tôn thùng container rắn chắc, thích hợp đứng thúc đẩy trong khe hẹp và bẻ quặt hai tay khóa vào vòng sắt phơi bày bên trong thùng container bỏ hoang mở nóc.",
    "draw": "Khám phá cảng công nghiệp. Ép vào vách sắt đứng tiến vào trong khe hẹp một mét giữa các thùng container, khóa ngược hai tay khỏa thân phơi bày trong thùng mở nóc bỏ hoang và làm tình trú mưa.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Khe hẹp giữa các thùng container chỉ rộng một mét, tiếng cẩu giàn và xe tải hạng nặng nổ vang rền, chắn sạch mọi tầm nhìn.",
      "Ở góc bãi tập kết có thùng container mở nóc đã thanh lý, bên trong thùng có nhiều vòng sắt cố định và không có mái che.",
      "Khung giờ giao ca ban đêm không có nhân viên tuần tra đi vào lối đi khe hẹp."
    ],
    "events": [
      {
        "id": "evt_ys_container_slit",
        "title": "Ép vào vách sắt nâng một chân tiến vào trong khe hẹp thùng container",
        "场所": "Lối đi khe hẹp một mét giữa các thùng container",
        "优先级": 68,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai bên là vách sắt thùng container màu đỏ cao mấy tầng, lối đi chỉ rộng đúng một mét, gió biển luồn lách qua khe thép, phía xa đèn báo của cần cẩu giàn nhấp nháy. Hai người đứng cạnh vách sắt mát lạnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy đi xuyên qua lối đi giữa các thùng container, dẫn cô ấy lên đài quan sát ngắm nhìn ánh đèn bến cảng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy tựa vào vách tôn thùng container mát lạnh vén quần áo thân dưới cởi bỏ quần lót, thò tay vuốt ve hạ thể ướt át giữa làn gió biển, ngắm nhìn cô ấy áp chặt vào vách sắt run rẩy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dựa lưng vào tấm tôn lượn sóng, nâng một bên đùi cô ấy gác lên bên hông bạn, vươn người đâm dương vật vào hạ thể ướt mượt, ra sức thúc sâu giữa tiếng gió biển gào thét",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_container_cuff",
        "title": "Khóa ngược hai tay vào vòng sắt khỏa thân phơi bày trong thùng mở nóc bỏ hoang",
        "场所": "Bên trong thùng container mở nóc bỏ hoang tại bãi tập kết",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào bên trong chiếc thùng container mở nóc đã thanh lý, bên trong thùng khô ráo khuất gió, vách trong có hàn những chiếc vòng thép chắc chắn. Trên đỉnh đầu là bầu trời đêm thoáng đãng. Cô ấy đứng cạnh vòng sắt nhìn quanh bốn phía.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy phủi sạch bụi bẩn vương trên cổ tay áo, cùng cô ấy ngồi sóng đôi nghỉ ngơi ở góc thùng khuất gió",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi bỏ toàn bộ quần áo trên người, bẻ quặt hai tay ra sau lưng dùng dây đai da cố định vào vòng sắt, mặc cho gió biển thổi qua cơ thể trần trụi, chụp ảnh ghi lại dưới bầu trời đêm",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "保税港集装箱堆场"
  },
  {
    "id": "gl_market",
    "name": "Chợ nông sản Cầu Thủy Tiên",
    "fullName": "Khu Cổ Lĩnh · Chợ nông sản Cầu Thủy Tiên",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Chợ nông sản thực phẩm tươi sống quy mô lớn hai tầng. Tầng một các sạp hàng san sát, tiếng chặt thịt làm cá vang lên từng hồi, khách mua hàng chen vai thích cánh; tầng hai là kho chứa gia vị hương liệu đồ khô, chất đầy những bao tải đại hồi và hạt tiêu hoa tiêu. Việc cúi gập lưng thật sâu chọn nguyên liệu trước các sạp hàng đông người qua lại có thể tự nhiên làm tốc vạt váy để lộ quần lót / bờ mông trần, còn góc chết sau đống bao tải trên tầng hai rất thích hợp để đè xuống ẩn gian đánh nhanh thắng nhanh.",
    "draw": "Chọn mua nguyên liệu thực phẩm tươi sống và hương liệu. Cúi gập người thật sâu chọn trứng để lộ đáy mông trước sạp hàng đông người, ẩn gian sau đống bao tải đồ khô tầng hai và tương tác khẩu giao ở hẻm sau khu đồ chín.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Sạp trứng gia cầm tầng một và khu hương liệu tầng hai có thể thu mua trứng gà ta, hương liệu đồ khô và nguyên liệu nông sản.",
      "materials": [
        "Trứng gà ta thả vườn nhà nông",
        "Nguyên liệu hương liệu đồ khô tự nhiên",
        "Nguyên liệu rau củ quả tươi sống",
        "Gia vị nấu ăn truyền thống",
        "Nguyên liệu nông sản tươi sống"
      ]
    },
    "special": [
      "Giỏ tre đựng trứng gia cầm ở tầng một đặt ở vị trí cực thấp, bắt buộc phải cúi gập lưng thật sâu để chọn lựa, vạt quần áo sẽ tự nhiên tách sang hai bên.",
      "Các bao tải hoa tiêu và đại hồi ở tầng hai chất cao như núi, sâu trong lối đi ánh sáng tối và không có khách hàng qua lại.",
      "Tiếng rao hàng ồn ào và tiếng băm thịt ở tầng một có thể che lấp hoàn toàn động tĩnh trên tầng hai."
    ],
    "events": [
      {
        "id": "evt_gl_market_egg",
        "title": "Cúi gập người thật sâu chọn trứng lộ mông trước đám đông dày đặc",
        "场所": "Trước sạp trứng gia cầm tầng một chợ nông sản",
        "优先级": 64,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chợ nông sản buổi sớm người đông nghịt, các ông các bà chen chúc trước các sạp hàng. Trong chiếc giỏ tre thấp lè tè có lót rơm và trứng gà ta. Hai người bước tới trước sạp trứng gia cầm.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Ngồi xổm xuống trước giỏ tre cùng cô ấy chọn những quả trứng gà ta to và tươi mới bỏ vào trong túi",
            "结算": "Độ hảo cảm+20, Tiền bạc-15, Nguyên liệu túi đồ+Trứng gà ta thả vườn nhà nông, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Bảo cô ấy cởi quần lót đứng thả rông trước sạp hàng đông người, cúi gập sâu tấm lưng xuống để nhặt những quả trứng ở tầng dưới cùng, để vạt áo khoác tự nhiên tách ra làm lộ cặp mông trắng mịn, mặc cho ánh mắt của người qua đường phía sau quét qua",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Nguyên liệu túi đồ+Trứng gà ta thả vườn nhà nông, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_gl_market_warehouse",
        "title": "Đè xuống đánh nhanh thắng nhanh sau đống bao tải gia vị đồ khô tầng hai",
        "场所": "Phía sau đống bao tải hương liệu đồ khô tầng hai chợ nông sản",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Khu đồ khô tầng hai chất đầy những bao tải hoa tiêu và ớt khô cao bằng đầu người, tỏa ra mùi cay nồng đậm đặc. Dưới lầu vọng lên tiếng băm thịt và tiếng rao hàng, chỗ sâu nhất của đống bao tải ánh sáng mờ tối không một bóng người. Hai người đi tới cạnh góc chết đống bao tải.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chọn hai túi quế thanh và đại hồi thượng hạng, bỏ vào túi mua sắm mang về nhà",
            "结算": "Độ hảo cảm+20, Tiền bạc-20, Nguyên liệu túi đồ+Nguyên liệu hương liệu đồ khô tự nhiên, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "在麻袋堆后把她推在厚实的花椒麻袋上，拉下内裤从正面把肉棒插进湿软的下体，捂住她的嘴巴在楼下喧闹声中快速抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Phía sau đống bao tải đẩy cô ấy đè lên bao tải hoa tiêu dày dặn, kéo quần lót xuống từ phía trước đâm dương vật vào hạ thể ướt mềm, bịt miệng cô ấy thúc nhanh liên hồi giữa tiếng ồn ào từ dưới lầu vọng lên",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "水仙桥农贸市场"
  },
  {
    "id": "gl_clinic",
    "name": "Trạm y tế cộng đồng Cổ Lĩnh",
    "fullName": "Khu Cổ Lĩnh · Trạm y tế cộng đồng Cổ Lĩnh",
    "district": "Khu Cổ Lĩnh",
    "archetype": "medical",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼"
    ],
    "intro": "Trạm dịch vụ y tế cộng đồng bên trong khu dân cư cũ. Có quầy đăng ký thu phí tích hợp, phòng khám đa khoa và một phòng xử lý thay băng ngăn cách bằng rèm vải trắng. Ngoài hành lang quanh năm có người già ngồi đo huyết áp. Bên ngoài phòng kiểm tra siêu âm dán hướng dẫn nhịn tiểu. Giường khám trong phòng xử lý được trải ga giường dùng một lần, vào khung giờ nhân viên y tế đi ăn trưa thì phòng thay băng và phòng truyền dịch không có người trông coi, thích hợp triển khai ấn bụng nhịn tiểu và điều giáo khám chạm bằng dụng cụ y tế.",
    "draw": "Đo huyết áp và bốc thuốc. Ấn bàng quang căng đầy tột độ bên ngoài phòng siêu âm, vén váy kích thích bằng ngón tay trên giường khám sau rèm vải trắng phòng xử lý và dùng ống nghe chạm ngực tự sướng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên xe đẩy phòng xử lý và bàn thay băng có chuẩn bị sẵn gạc vô trùng, găng tay và vật tư y tế thông thường.",
      "materials": [
        "Gạc y tế tiệt trùng khử béo",
        "Gói tăm bông sát khuẩn Povidone-Iodine",
        "Găng tay khám y tế dùng một lần",
        "Vật tư chăm sóc điều dưỡng y tế",
        "Vaseline độ tinh khiết cấp dược dụng"
      ]
    },
    "special": [
      "Bình nước uống bên ngoài phòng siêu âm luôn có sẵn cốc giấy lớn, kết hợp với hướng dẫn kiểm tra khắt khe, có thể triển khai điều giáo nhịn tiểu sinh lý.",
      "Rèm vải trắng dày của phòng xử lý sau khi kéo khép lại tạo thành góc chết thị giác, vào khung giờ nhân viên y tế ăn trưa bên trong hoàn toàn bỏ trống.",
      "Dược sĩ tại quầy bệnh mãn tính thông thuộc các bài thuốc dân gian, có thể lấy được các loại thuốc thảo dược nhóm an thần dịu nhẹ và điều dưỡng cơ thể."
    ],
    "events": [
      {
        "id": "evt_gl_clinic_ultrasound",
        "title": "Ấn bụng nhịn tiểu tột độ bên ngoài phòng kiểm tra siêu âm",
        "场所": "Ghế dài trước cửa phòng siêu âm",
        "优先级": 86,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "尿意": [
            60,
            100
          ],
          "需同行": true
        },
        "opportunity": "Cửa phòng siêu âm đóng chặt, trên cửa dán tờ hướng dẫn kiểm tra bắt buộc bàng quang phải căng đầy. Cô ấy cầm cốc giấy trong tay ngồi trên ghế dài bằng nhựa, hai chân khép chặt cứng chờ gọi số.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi cạnh cô ấy trên ghế dài, nắm lấy tay cô ấy yên lặng chờ đọc số gọi tới tên cô ấy",
            "结算": "Độ hảo cảm+15, Buồn tiểu+10, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=450",
            "选项": "Bảo cô ấy đi rót thêm một cốc nước ấm đầy uống cạn ngay trước mặt bạn, đưa tay trực tiếp ấn lên vùng bụng dưới đang căng cứng nhô cao của cô ấy, ngắm nhìn cô ấy kẹp chặt hai đùi run rẩy nhẫn nại",
            "结算": "Độ thuận tùng+30, Buồn tiểu không giảm, Trạng thái bất thường+Nhịn tiểu tột độ, Kinh nghiệm play bài tiết+1, Tâm trạng→Tủi thân"
          }
        }
      },
      {
        "id": "evt_gl_clinic_dressing",
        "title": "Vén váy kích thích bằng ngón tay trên giường khám bên trong rèm vải trắng",
        "场所": "Bên trong rèm vải trắng phòng xử lý",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm vải trắng dày của phòng xử lý đã kéo kín mít, ngoài hành lang thỉnh thoảng vọng lại tiếng bánh xe cao su của nhân viên vệ sinh đẩy xe đi ngang qua. Cô ấy ngồi ở mép giường khám trải tấm lót trắng dùng một lần.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dùng tăm bông chấm dung dịch sát khuẩn Povidone-Iodine, động tác nhẹ nhàng giúp cô ấy rửa sạch vết trầy ở đầu gối rồi dán băng cá nhân lên",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy nằm xuống giường khám vén váy cởi bỏ quần lót, ngay lúc có tiếng bước chân đẩy xe ngoài hành lang đi qua thì đâm ngón tay vào hạ thể ướt át của cô ấy thúc ngoáy không tiếng động",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy xuống chiếc giường khám trải tấm lót dùng một lần, từ phía sau tách hai chân đâm trọn cả cây dương vật vào hạ thể, thúc nhanh liên hồi phía sau tấm rèm vải",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "鼓岭社区卫生站"
  },
  {
    "id": "gl_florist",
    "name": "Tiệm hoa nghệ thuật Hoa Gian Tập",
    "fullName": "Khu Cổ Lĩnh · Tiệm hoa nghệ thuật Hoa Gian Tập",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Xưởng nghệ thuật cắm hoa ở góc phố cổ. Sảnh trước trưng bày đủ loại hoa tươi cắt cành và cây cảnh chậu, sảnh sau nối liền với một nhà kính trồng hoa lấy sáng tự nhiên, chính giữa đặt một chiếc bàn thao tác dài bằng gỗ thịt dùng để cắt tỉa cành hoa. Những bụi trầu bà lá xẻ nhiệt đới cao hơn hai mét cùng cây xanh che khuất hoàn toàn góc nhà kính, khi hệ thống phun sương tạo ẩm bật lên hơi nước mù mịt, thích hợp tiến hành kẹp cánh hoa vào vùng kín và điều giáo ở góc chết nhà kính.",
    "draw": "Chọn lựa và cắt tỉa hoa tươi. Quỳ gối tương tác khẩu giao sau tán cây xanh nhà kính, kẹp cánh hoa vào vùng kín đi lại bên bàn thao tác và tiến vào từ phía sau trên bàn gỗ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Dưới tán lá nhà kính và bàn cắm hoa có thể thu thập phấn hoa tươi, nước ngưng tụ thực vật và nguyên liệu hương thơm thảo mộc.",
      "materials": [
        "Phấn hoa cỏ độ tinh khiết cao",
        "Sương sớm thực vật tinh khiết",
        "Cánh hoa hồng hạng đặc biệt",
        "Nguyên liệu nhóm thảo dược hoang dã",
        "Vật tư cắt tỉa làm vườn"
      ]
    },
    "special": [
      "Nhà kính trồng hoa bằng kính ở sảnh sau được cây lá rộng nhiệt đới cao hơn hai mét che chắn từng tầng từng lớp, từ sảnh trước hoàn toàn không nhìn thấy bên trong.",
      "Khi hệ thống phun sương tự động bật lên hơi nước mù mịt, có thể che lấp tiếng nước và động tĩnh bên trong.",
      "Trong tiệm luôn có sẵn những cành hoa hồng đọng sương đã cắt bỏ gai nhọn và cánh hoa tươi mới."
    ],
    "events": [
      {
        "id": "evt_gl_florist_petal",
        "title": "Kẹp cánh hoa hồng tươi vào vùng kín đi dạo",
        "场所": "Cạnh bàn thao tác cắt tỉa ở sảnh sau",
        "优先级": 64,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên bàn thao tác đặt những đóa hoa hồng đỏ tươi vừa mới cắt tỉa xong, trên cánh hoa vẫn còn đọng giọt nước. Nhân viên ở sảnh trước đang gói bó hoa ngay cửa ra vào, sảnh sau chỉ có hai người các bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Chọn một đóa hoa hồng phấn tươi thắm cài lên bên tai cô ấy, khen cô ấy còn đẹp hơn cả hoa",
            "结算": "Độ hảo cảm+15, Tiền bạc-10, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Ngắt hai cánh hoa hồng đọng giọt nước, bảo cô ấy vén váy cởi quần lót ra, nhét cánh hoa vào mặt trong môi âm hộ kẹp chặt lấy, ra lệnh cho cô ấy vừa kẹp cánh hoa vừa đi lại trong nhà kính",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_florist_oral",
        "title": "Quỳ gối khẩu giao tại góc chết sâu trong tán cây xanh",
        "场所": "Góc chết phía sau kệ hoa và cây trầu bà lá xẻ",
        "优先级": 58,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc kệ hoa bằng gỗ ba tầng cao lớn bày kín cây xanh, chắn góc phòng thành một không gian nhỏ độc lập. Chuông gió ở cửa vào sảnh trước thỉnh thoảng ngân vang leng keng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy vuốt mượt lại những sợi tóc bị lá cây quệt rối, cùng cô ấy chọn chậu cây cảnh chuẩn bị mua mang về nhà",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Tại góc chết được cây xanh che khuất cởi khóa quần ra, bảo cô ấy quỳ giữa hai chân bạn há miệng ngậm lấy dương vật, ngậm trọn mút nuốt giữa tiếng bước chân khách hàng đi lại ở sảnh trước",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp ở mép chiếc bàn thao tác bằng gỗ thịt rồi vén váy lên, từ phía sau đâm dương vật vào hạ thể, nắm lấy vòng eo cô ấy thúc đẩy giữa hương hoa và làn sương nước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "花间集花艺坊"
  },
  {
    "id": "gl_music",
    "name": "Tiệm đàn & đĩa than Ái Nhạc",
    "fullName": "Khu Cổ Lĩnh · Tiệm đàn & đĩa than Ái Nhạc",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Tiệm nhạc cụ kinh doanh nhạc cụ cổ điển và đĩa than (Vinyl). Khu trước là kệ trưng bày nhạc cụ và ghế lô nghe thử, khu sau có hai phòng tập đàn piano chuyên nghiệp trang bị cửa cách âm hai lớp và vách bọc nệm tiêu âm, chính giữa đặt chiếc đại dương cầm (Grand piano). Sau khi đóng cánh cửa cách âm hạng nặng lại thì trong phòng hoàn toàn cách âm với bên ngoài, thích hợp tiến hành đeo tai nghe chống ồn khẩu giao và tự sướng phô bày trên ghế đàn trước gương.",
    "draw": "Đánh thử nhạc cụ và nghe thử đĩa than. Tương tác khẩu giao tại điểm mù dưới gầm bàn khi đeo tai nghe chống ồn, vén váy tự sướng trên ghế đàn piano và trói buộc trong hộp đàn Cello chụp ảnh.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Phòng tập đàn piano ở khu sau trang bị cửa cách âm cường lực hai lớp, bên trong phát ra bất kỳ âm thanh nào bên ngoài đều không thể nghe thấy.",
      "Ghế lô nghe thử được trang bị tai nghe kiểm âm chống ồn trùm kín tai độ trung thực cao (Hi-Fi), sau khi đeo vào hoàn toàn không nghe thấy âm thanh môi trường bên ngoài.",
      "Trong kho có cất giữ hộp bảo vệ đàn Cello vỏ cứng lót nhung thiên nga bên trong."
    ],
    "events": [
      {
        "id": "evt_gl_music_headphone",
        "title": "Đeo tai nghe kiểm âm chống ồn tương tác khẩu giao dưới gầm bàn",
        "场所": "Dưới gầm bàn gỗ ghế lô nghe thử đĩa than",
        "优先级": 60,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Máy phát đĩa than đang phát bản nhạc du dương, chiếc tai nghe chống ồn chụp tai lớn treo trên giá. Phía dưới bàn gỗ của khoang nghe thử nhỏ có tấm chắn bên hông rủ xuống, ông chủ ở quầy lễ tân phía xa đang cúi đầu lau chùi đĩa nhạc.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đeo một bên tai nghe cho cô ấy, hai người tựa vào nhau ngồi trên ghế lô nghe trọn một bản dạ khúc đĩa than",
            "结算": "Độ hảo cảm+15, Tiền bạc-15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Đeo chiếc tai nghe chống ồn trùm kín tai cho cô ấy và vặn âm lượng thật lớn, bảo cô ấy chui xuống dưới gầm bàn gỗ quỳ giữa hai chân bạn, ngậm trọn mút nuốt dương vật trong nỗi sợ hãi vì không nghe thấy động tĩnh bên ngoài",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_music_piano",
        "title": "Tự sướng và làm tình trước ghế đại dương cầm trong phòng tập đàn cách âm",
        "场所": "Phòng tập đàn piano cách âm chuyên nghiệp",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cánh cửa sắt dày nặng của phòng cách âm đã khép chặt, trong phòng yên tĩnh không một tiếng động. Chiếc đại dương cầm màu đen bóng loáng đặt ở chính giữa, nắp đàn đang mở, giá để bản nhạc dựng ngay phía trước.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi sóng đôi cùng cô ấy trên chiếc ghế đàn dài, nắm lấy ngón tay cô ấy cùng nhau ấn lên những phím đàn đen trắng đánh một âm giai đơn giản",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy ngồi trên ghế đàn vén váy cởi bỏ quần lót, hướng về phía giá để bản nhạc dang rộng hai chân, dùng ngón tay vuốt ve vùng kín của chính mình cho tới khi hạ thể làm ướt đẫm mặt ghế đàn",
            "结算": "Độ thuận tùng+30, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp trên nắp đàn bằng gỗ dày nặng bằng phẳng tách hai chân ra, từ phía sau đâm dương vật vào hạ thể ướt mượt, ra sức thúc đẩy trong mật thất cách âm",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "爱乐黑胶琴行"
  },
  {
    "id": "gl_parcel",
    "name": "Trạm Cainiao Phố Cổ",
    "fullName": "Khu Cổ Lĩnh · Trạm Cainiao Phố Cổ",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Trạm giao nhận bưu kiện chuyển phát nhanh nằm ở vị trí trung tâm khu dân cư phố cổ. Trong trạm có mấy dãy kệ hàng kim loại cao tới hai mét, chất đầy những thùng giấy carton lớn nhỏ đủ cỡ. Ngay lối vào có quầy máy quét mã xuất kho tự phục vụ. Lối đi kệ hàng cồng kềnh sâu bên trong khá hẹp, bị các thùng giấy chắn thành góc chết. Việc khui kiện hàng đồ dùng tình thú người lớn ngay tại chỗ sâu giữa các kệ hàng rồi nhét trứng rung vào người, vừa kẹp chặt trứng rung đang rung mạnh vừa ra quầy lễ tân quét mã xuất kho mang lại cảm giác hồi hộp tim đập thình thịch đậm chất phố thị.",
    "draw": "Tra cứu lấy bưu kiện và khui hàng. Khui kiện hàng ngay trước mặt nhét trứng rung vào người tại góc chết kệ hàng sâu bên trong, kẹp chặt trứng rung mạnh xếp hàng quét mã xuất kho ở quầy lễ tân và tương tác khẩu giao dưới gầm bàn xuất kho.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Lối đi kệ hàng cồng kềnh siêu trọng sâu bên trong bị hàng loạt thùng giấy chắn kín, tạo thành góc chết không camera giám sát sâu nửa mét.",
      "Phía dưới bàn quét mã xuất kho tự phục vụ có trang bị tấm chắn chống va đập bằng kim loại, dưới gầm bàn có thể tránh khỏi tầm nhìn bên ngoài.",
      "Trạm bưu kiện có chuẩn bị sẵn dao rọc giấy và đủ loại vật tư đóng gói."
    ],
    "events": [
      {
        "id": "evt_gl_parcel_unboxing",
        "title": "Khui kiện hàng trứng rung tại chỗ nhét vào trong cơ thể ngay trước mặt",
        "场所": "Góc chết kệ hàng sâu trong trạm bưu kiện",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người tìm thấy thùng giấy chuyển phát nhanh vừa mới tới ở sâu giữa các kệ hàng, ngoài quầy lễ tân súng quét mã kêu tít tít liên hồi, khách hàng đang đọc mã lấy hàng ở quầy trước. Phía bên trong kệ hàng ánh sáng mờ tối, chỉ có hai người các bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dùng dao rọc giấy giúp cô ấy rạch băng dính thùng giấy, bỏ kiện hàng vừa lấy được vào trong túi mang theo bên người",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Dùng dao nhỏ rạch mở kiện hàng lấy quả trứng rung điều khiển từ xa bên trong ra, bảo cô ấy vén váy cởi quần lót, ngay trước mặt bạn đẩy trứng rung vào sâu trong hạ thể và bật công tắc rung",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_parcel_queue",
        "title": "Bên trong cơ thể kẹp chặt trứng rung mạnh đi ra quầy lễ tân quét mã xuất kho",
        "场所": "Trước bàn quét mã tự phục vụ trạm bưu kiện",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ở quầy trước có hai ba người hàng xóm đang xếp hàng quét mã xuất kho. Cô ấy đứng trong hàng người xếp hàng, tay cầm hộp bưu kiện chờ quét mã.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy kiện hàng từ tay cô ấy, đứng xếp hàng cùng cô ấy và giúp cô ấy đặt kiện hàng xuống dưới máy quét để quét mã",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Trong trạng thái bên trong cơ thể cô ấy đang nhét trứng rung, vặn điều khiển từ xa lên mức rung mạnh cao nhất, bắt cô ấy tự mình bước ra quầy trước xếp hàng quét mã, ngắm nhìn cô ấy kẹp chặt hai đùi nhịn tới đỏ bừng mặt hoàn thành việc xuất kho",
            "结算": "Độ thuận tùng+35, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "菜鸟驿站老街店"
  },
  {
    "id": "mh_pool",
    "name": "Nhà bơi nước ấm Trung tâm Olympic",
    "fullName": "Khu Minh Hồ · Nhà bơi nước ấm Trung tâm Olympic",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Nhà thi đấu bơi lội nước ấm trong nhà tiêu chuẩn. Có hồ bơi thi đấu làn bơi năm mươi mét và khu vực nước sâu hai mét. Khu thay đồ trang bị nhiều buồng tắm vòi sen nước nóng lắp cửa trượt kính mờ. Tầm nhìn dưới nước ở góc thành hồ khu nước sâu bị sóng nước che khuất, tiếng nước chảy từ vòi sen trong buồng tắm cực lớn, thích hợp vén quần bơi kích thích bằng ngón tay dưới nước ở mép thành hồ và đứng tiến vào từ phía sau trong buồng tắm vòi sen.",
    "draw": "Bơi lội nước ấm và lặn nước. Vén quần bơi kích thích bằng ngón tay dưới nước bên thành hồ khu nước sâu, đứng tiến vào từ phía sau dưới tiếng vòi sen trong buồng tắm độc lập và tương tác khẩu giao dưới ghế cao.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Góc thành hồ khu vực nước sâu hai mét có độ khúc xạ ánh sáng dưới nước mạnh, sóng nước trên mặt hồ có thể che khuất động tác tay chân dưới nước.",
      "Cửa kính mờ của buồng tắm vòi sen có chốt cài trong, tiếng vòi sen xả nước lớn nổ ầm ầm có thể che lấp tiếng da thịt va chạm.",
      "Khi nhân viên cứu hộ đổi ca, chỗ chất đống phao cứu sinh phía dưới chiếc ghế quan sát chân cao tạo thành điểm mù thị giác."
    ],
    "events": [
      {
        "id": "evt_mh_pool_underwater",
        "title": "Vén quần bơi kích thích bằng ngón tay dưới nước bên mép thành hồ khu nước sâu",
        "场所": "Góc thành hồ khu vực nước sâu",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Khu vực nước sâu có độ sâu hai mét, mặt nước lấp lánh ánh sóng. Hai người bơi tới cạnh góc thành hồ nghỉ ngơi, nhân viên cứu hộ trên bờ đang quay đầu nhìn về phía khu nước nông ở bên kia.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ở dưới nước đỡ lấy eo cô ấy giúp cô ấy đứng nước lấy hơi, bầu bạn cùng cô ấy tập động tác bơi ngửa ở khu nước sâu",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Đỡ cô ấy áp sát vào vách gạch men thành hồ dưới nước, luồn tay vào trong nước vén mép quần bơi của cô ấy sang một bên, dưới sự che chở của dòng nước dùng ngón tay thò vào hạ thể ướt mềm móc ngoáy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_mh_pool_shower",
        "title": "Đứng tiến vào từ phía sau dưới tiếng vòi sen xả nước ầm ầm trong buồng tắm độc lập",
        "场所": "Buồng tắm vòi sen độc lập khu thay đồ",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa kính mờ của buồng tắm vòi sen đã cài chốt từ bên trong, vòi sen lớn trên đỉnh đầu phun ra làn nước nóng, hơi nước trắng xóa mù mịt, dòng nước đập xuống sàn gạch men phát ra tiếng rào rào. Cô ấy vịn tường gạch men xả sạch bọt trên tóc.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy vòi sen giúp cô ấy xả sạch mùi thuốc khử trùng trên người, lấy dầu gội đầu giúp cô ấy xoa bóp mái tóc",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她按在湿润的瓷砖墙面上，从身后分开双腿把肉棒插进下体，在热水的冲刷与轰鸣水声中用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy lên mặt tường gạch men ướt át, từ phía sau tách hai chân đâm dương vật vào hạ thể, ra sức thúc đẩy dưới làn nước nóng xối xả và tiếng nước chảy ầm ầm",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "奥体恒温游泳馆"
  },
  {
    "id": "mh_gym",
    "name": "Phòng tập Gym Lạc Khắc 24h",
    "fullName": "Khu Minh Hồ · Phòng tập Gym Lạc Khắc 24h",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Phòng tập thể hình thông minh tự phục vụ hoàn toàn. Trang bị khung gánh tạ (Squat rack) hạng nặng, máy chạy bộ và phòng giãn cơ độc lập lắp gương lớn sát đất. Khung giờ đêm khuya toàn trường không có nhân viên trực, chỉ có tiếng nhạc nền vang vọng. Cột trụ khung gánh tạ che chắn rất tốt, phòng giãn cơ độc lập có thể khóa trái, thích hợp ma sát áp sát phía sau khung gánh tạ, tách mở hạ thể phô bày trước gương phòng giãn cơ và cong mông phơi bày trước tay vịn máy chạy bộ.",
    "draw": "Tập gym tự phục vụ 24h. Áp sát ma sát ở vị trí đỡ tạ Squat, tách mở hạ thể phô bày trước gương lớn phòng giãn cơ PT và cong mông chụp lén trước tay vịn máy chạy bộ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Sau không giờ đêm toàn trường không có nhân viên làm việc, nhạc nền phát liên tục che lấp tiếng thở dốc nhỏ nhẹ.",
      "Phòng giãn cơ độc lập được trang bị nguyên một mặt gương lớn sát đất, cửa phòng có thể khóa trái từ bên trong.",
      "Máy bán hàng tự động luôn có sẵn đồ uống năng lượng và khăn tập thể thao."
    ],
    "events": [
      {
        "id": "evt_mh_gym_stretch",
        "title": "Tách mở hạ thể phô bày trước gương lớn sát đất trong phòng giãn cơ độc lập",
        "场所": "Phòng giãn cơ độc lập phòng gym",
        "优先级": 65,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa phòng giãn cơ đã đóng lại, tấm gương lớn sát đất nguyên mảng chiếu sáng căn phòng, trên mặt sàn trải thảm tập yoga dày. Cô ấy ngồi trên thảm thực hiện động tác giãn cơ chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cầm súng massage cầm tay giúp cô ấy nhẹ nhàng thả lỏng cơ bắp chân đang đau mỏi, bầu bạn cùng cô ấy làm xong động tác giãn cơ",
            "结算": "Độ hảo cảm+15, Thể lực đối tượng+15, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi bỏ quần tập bó sát và quần lót trước tấm gương lớn sát đất, ngồi trên thảm dang rộng hai chân, dùng hai tay tách mở hạ thể của chính mình hướng vào gương phô bày vùng kín ướt át",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_mh_gym_squat",
        "title": "Đỡ eo áp sát và tiến vào từ phía sau trước khung gánh tạ Squat",
        "场所": "Khu vực tập tạ sức mạnh Squat",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya trong phòng gym không một bóng người, tiếng nhạc sôi động đang phát trên đỉnh đầu. Cô ấy dùng hai tay nắm chặt thanh đòn của khung gánh tạ cúi lưng điều chỉnh nhịp thở, phía sau là tấm chắn cột trụ kim loại to bản.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đứng phía sau cô ấy dùng hai tay đỡ bảo hiểm thanh đòn, tỉ mỉ giúp cô ấy chỉnh lại tư thế động tác và đưa nước ấm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "从身后把她的紧身裤褪到膝盖，双手扶住她的胯骨把肉棒整根顶入下体，在深蹲架前就着音乐节奏有力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Từ phía sau kéo chiếc quần tập bó sát của cô ấy tụt xuống đầu gối, hai tay giữ lấy xương hông cô ấy đâm trọn cả cây dương vật vào hạ thể, thúc mạnh theo nhịp điệu âm nhạc ngay trước khung gánh tạ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "乐刻24h健身房"
  },
  {
    "id": "mh_wedding",
    "name": "Biệt thự áo cưới Saint Laurent",
    "fullName": "Khu Minh Hồ · Biệt thự áo cưới Saint Laurent",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Công quán áo cưới may đo cao cấp kiểu Pháp biệt lập. Trải thảm len lông cừu dày dặn, treo đèn chùm pha lê. Chính giữa có một bục thử váy cưới hình tròn lắp gương lớn mạ vàng sát đất ba mặt, trang bị rèm ngăn bằng nhung dày. Sau khi thay lên người bộ váy cưới trắng đuôi dài phồng to nhiều lớp, việc vén váy cưới tiến vào từ phía sau trước gương lớn sát đất hoặc chui vào dưới tà váy cưới trắng khổng lồ tương tác khẩu giao mang lại cảm giác tương phản và kích thích cực mạnh.",
    "draw": "Thử váy cưới và chụp ảnh nghệ thuật. Vén váy cưới trắng đuôi dài tiến vào từ phía sau trước gương lớn sát đất, chui vào tương tác dưới sự che chắn của tà váy khổng lồ trên bục thử váy và tự sướng dưới khăn voan trắng.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Sảnh chính thử váy cưới được trang bị rèm ngăn chạy điện bằng nhung dày hai lớp, sau khi kéo lại tạo thành không gian khép kín hoàn toàn.",
      "Tà váy cưới đuôi dài đính kết cầu kỳ khi xòe rộng có đường kính lên tới hai mét, phía dưới khung tùng váy tạo thành không gian che chắn rộng rãi.",
      "Khi chuyên viên tư vấn lễ phục vào kho sau lấy phụ kiện khăn voan đội đầu, sảnh thử váy sẽ có khoảng thời gian ở riêng từ mười đến mười lăm phút."
    ],
    "events": [
      {
        "id": "evt_mh_wedding_stage",
        "title": "Chui vào tương tác dưới sự che chắn của tà váy cưới khổng lồ",
        "场所": "Trên bục thử váy cưới hình tròn",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Rèm nhung của bục thử váy đã kéo kín mít. Trên người cô ấy đã thay xong bộ váy cưới trắng tinh khôi đuôi dài bồng bềnh nhiều lớp, tà váy cưới trắng trải rộng trên thảm đỏ giống như một chiếc ô lớn. Chuyên viên lễ phục đã sang phòng sau lấy phụ kiện trang sức tóc.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đứng trước gương giúp cô ấy chỉnh lại tà váy đuôi dài thướt tha, khen ngợi dáng vẻ mặc váy cưới của cô ấy vô cùng đoan trang",
            "结算": "Độ hảo cảm+25, Tiền bạc-100, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Chui vào phía dưới tà váy cưới trắng khổng lồ của cô ấy, vén lớp lót trong cởi bỏ quần lót của cô ấy, trong trạng thái nhìn từ bên ngoài chỉ thấy cô dâu đang đứng yên mà vùi mặt vào giữa hai đùi dùng lưỡi liếm láp hạ thể",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_mh_wedding_veil",
        "title": "Vén váy cưới tiến vào từ phía sau trước gương lớn sát đất",
        "场所": "Trước gương sát đất ba mặt sảnh thử váy cưới",
        "优先级": 72,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Gương lớn sát đất ba mặt phản chiếu bóng dáng hai người, ngoài hành lang thỉnh thoảng vọng lại tiếng giày cao gót của chuyên viên tư vấn đi ngang qua. Cô ấy chống hai tay lên mép bệ gương lớn, trên người đang mặc bộ váy cưới đuôi dài.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy điện thoại ra đứng trước gương cùng cô ấy chụp một bức ảnh kỷ niệm mặc váy cưới",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "走到她身后把层层婚纱裙摆向上掀起堆在腰上，脱下内裤把肉棒插进湿软的下体，按着她在三面落地大镜前用力后入抽送",
            "结算": "性欲度重置, 顺从度+35, 情趣扮演经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bước tới phía sau cô ấy vén từng lớp tà váy cưới dồn lên ngang eo, cởi quần lót đâm dương vật vào hạ thể ướt mềm, đè cô ấy trước tấm gương lớn sát đất ba mặt mà ra sức thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm nhập vai tình thú+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "圣罗兰婚纱公馆"
  },
  {
    "id": "mh_bank",
    "name": "Ngân hàng Dân Sinh chi nhánh Minh Hồ",
    "fullName": "Khu Minh Hồ · Ngân hàng Dân Sinh chi nhánh Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮"
    ],
    "intro": "Sảnh flagship của ngân hàng thương mại. Tầng hai là phòng quản lý tài chính VIP lắp kính mờ và rèm sáo, tầng hầm xây kho két sắt bảo quản kim loại quý hạng nặng. Phòng đơn xem két bảo quản sử dụng cửa thép chống nổ dày dặn, sau khi bước vào có thể khóa chết từ bên trong, trang bị bàn xem mẫu bằng thép không gỉ và tuyệt đối không có camera giám sát. Sau khi khóa trái cánh cửa thép hạng nặng, việc làm tình trên chiếc bàn kim loại lạnh băng hay tương tác khẩu giao dưới gầm bàn dưới rèm sáo phòng quản lý tài chính mang lại sự kích thích kim tiền và mật thất độc đáo.",
    "draw": "Nghiệp vụ quản lý tài chính và két sắt bảo quản. Làm tình trên bàn kim loại sau khi khóa trái phòng đơn kho tiền chống nổ dưới tầng hầm, tương tác khẩu giao dưới gầm bàn dưới rèm sáo phòng VIP và thả rông phơi bày trong buồng bảo vệ cây ATM.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Phòng đơn két bảo quản dưới tầng hầm sử dụng cửa thép chống nổ dày bốn mươi milimét, sau khi khóa chặt khóa trong sẽ cách âm tuyệt đối và không có bất kỳ camera giám sát nào.",
      "Phòng quản lý tài chính tầng hai trang bị rèm sáo điện, khi giám đốc đi photo chứng từ sẽ có vài phút bỏ trống.",
      "Buồng bảo vệ cây ATM ở góc phố sau khi quẹt thẻ bước vào sẽ tự động sập khóa và có dán màng chống nhìn trộm."
    ],
    "events": [
      {
        "id": "evt_mh_bank_vault",
        "title": "Làm tình trên bàn kim loại sau khi khóa trái phòng đơn kho tiền ngầm",
        "场所": "Phòng đơn xem mẫu két sắt bảo quản dưới tầng hầm",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cánh cửa thép chống nổ dày nặng đóng chặt phía sau lưng và đã cài khóa trong, trong phòng chỉ có một chiếc bàn thao tác bằng thép không gỉ mát lạnh, bốn phía yên tĩnh tuyệt đối không có camera giám sát, chìa khóa két bảo quản đang cắm trên mặt bàn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mở chiếc két bảo quản kim loại lấy món đồ kỷ niệm bên trong ra, cùng cô ấy ngồi cạnh bàn chia sẻ lai lịch của món đồ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "把她抱上冰凉的不锈钢操作台坐下，褪下内裤分开双腿把肉棒整根顶入下体深处，在完全反锁的金库密室里用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bế cô ấy đặt ngồi lên mặt bàn thao tác bằng thép không gỉ mát lạnh, tụt quần lót tách hai chân đâm trọn cả cây dương vật vào sâu trong hạ thể, ra sức thúc đẩy trong mật thất kho tiền đã khóa trái hoàn toàn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_mh_bank_desk",
        "title": "Tương tác khẩu giao dưới gầm bàn dưới rèm sáo phòng quản lý tài chính VIP",
        "场所": "Dưới gầm bàn làm việc phòng quản lý tài chính VIP tầng hai",
        "优先级": 60,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Rèm sáo của phòng quản lý tài chính đã kéo rất kín, vị giám đốc đã ra quầy trước in bản sao kê đối chiếu. Phía dưới chiếc bàn làm việc gỗ hồng mộc có tấm chắn dưới bằng gỗ rộng bản, ngoài cửa thỉnh thoảng có tiếng bước chân đi ngang qua.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy xếp gọn các trang giấy hợp đồng, kiên nhẫn giải thích cho cô ấy các điều khoản an toàn của sản phẩm quản lý tài chính",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Kéo khóa quần bảo cô ấy chui xuống dưới tấm chắn gỗ bàn làm việc quỳ giữa hai chân bạn, giữa cảm giác căng thẳng khi giám đốc bất cứ lúc nào cũng có thể đẩy cửa quay lại mà ngậm dương vật vào miệng nuốt sâu tận họng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "民生银行明湖支行"
  },
  {
    "id": "mh_mart",
    "name": "Cửa hàng tiện lợi Lawson 24h",
    "fullName": "Khu Minh Hồ · Cửa hàng tiện lợi Lawson 24h",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cửa hàng tiện lợi mở cửa 24 giờ ở góc phố khu thương mại. Trong tiệm xếp ngay ngắn các kệ hàng, nồi Oden nóng hổi và quầy bar ghế cao sát cửa sổ. Khung giờ đêm khuya nhân viên cửa hàng thường ở phòng sau cọ rửa tủ hấp bánh. Lối đi nhỏ bổ sung hàng phía sau tủ lạnh đồ uống trong cùng bị các thùng nước ngọt che khuất thành góc chết, thích hợp vén váy kích thích bằng ngón tay sau kệ tủ lạnh, tương tác khẩu giao dưới tấm chắn quầy thu ngân cũng như thả rông ngồi ăn Oden ở quầy bar sát cửa sổ.",
    "draw": "Đồ ăn nóng tiện lợi 24h. Vén váy kích thích bằng ngón tay trước kệ hàng tại góc chết bổ sung hàng sau tủ lạnh đồ uống, tương tác khẩu giao dưới tấm chắn quầy thu ngân lúc đêm khuya và thả rông ăn đồ nóng ở quầy bar sát cửa sổ.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Lối đi hẹp bổ sung hàng phía sau tủ lạnh đồ uống bị các thùng giấy đựng nước ngọt chất cao che kín mít, hoàn toàn thoát khỏi phạm vi bao phủ của camera giám sát.",
      "Phía dưới quầy thu ngân có trang bị tấm chắn bằng gỗ mở rộng, tiếng chuông cảm ứng kính coong khi có khách vào tiệm có thể cảnh báo trước.",
      "Quầy bar ghế cao sát cửa sổ có cửa kính lớn sát đất hướng thẳng ra mặt phố, ban đêm độ tương phản ánh sáng cực mạnh."
    ],
    "events": [
      {
        "id": "evt_mh_mart_cooler",
        "title": "Vén váy kích thích bằng ngón tay tại góc chết bổ sung hàng tủ lạnh đồ uống",
        "场所": "Lối đi phía sau tủ lạnh cửa hàng tiện lợi",
        "优先级": 65,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Phía sau dãy tủ lạnh sâu nhất của cửa hàng tiện lợi lúc đêm khuya chất đầy những thùng đồ uống nguyên kiện, tạo thành lối đi góc chết rộng một mét. Quạt gió tủ lạnh kêu vo vo thổi hơi lạnh, ngoài quầy trước chỉ có hơi nước từ nồi Oden bốc lên, bốn bề không một bóng người.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy từ trong tủ lạnh ra một hộp sữa chua dâu tây mà cô ấy thích, nắm tay cô ấy đi ra quầy trước quét mã thanh toán",
            "结算": "Độ hảo cảm+15, Tiền bạc-12, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Tại góc chết tạo bởi những thùng đồ uống chất chồng, đè cô ấy trước kệ hàng kim loại, vén váy cô ấy lên luồn tay vào trong quần lót, giữa tiếng quạt gió mà dùng ngón tay thúc ngoáy nhanh vuốt ve hạ thể ướt át",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên thanh sắt kệ hàng tủ lạnh cong mông lên, kéo quần lót xuống đâm dương vật từ phía sau vào tận đáy, nương theo tiếng quạt gió tủ lạnh nổ ầm ầm mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_mh_mart_counter",
        "title": "Quỳ gối tương tác khẩu giao sau tấm chắn dưới quầy thu ngân",
        "场所": "Trước quầy thu ngân cửa hàng tiện lợi",
        "优先级": 60,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ba giờ sáng, nhân viên cửa hàng đang ở phòng sau cọ rửa máy hấp bánh bao. Chiếc ghế đẩu chân cao trước quầy thu ngân hướng thẳng ra cửa lớn, tiếng chuông cửa cảm ứng kính coong khi có người vào tiệm có thể vang lên bất cứ lúc nào.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mua một bát Oden nóng hổi đặt lên chiếc bàn cao, thổi cho nguội rồi đút tới bên miệng cô ấy",
            "结算": "Độ hảo cảm+15, Tiền bạc-18, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Ngồi trên ghế đẩu chân cao cởi khóa quần ra, bảo cô ấy chui xuống dưới tấm chắn gỗ của quầy thu ngân quỳ giữa hai chân bạn, ngậm lấy dương vật nuốt sâu tận họng dưới sự kích thích tiếng chuông cửa kính coong có thể vang lên bất cứ lúc nào",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "罗森24h便利店"
  },
  {
    "id": "mh_underpass",
    "name": "Hầm đi bộ qua đường Minh Hồ",
    "fullName": "Khu Minh Hồ · Hầm đi bộ qua đường Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "traffic",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Hầm đi bộ sang đường hiện đại bắc ngang qua Đại lộ Minh Hồ. Lát gạch đá hoa cương chống trượt, hai bên xếp thẳng hàng những hộp đèn quảng cáo thương mại khổ lớn. Khung giờ đêm khuya rất ít người qua lại, dòng xe cộ chạy ầm ầm trên trục đường chính phía trên làm mặt đất khẽ rung nhẹ. Hốc lõm trước cửa phòng phối điện phía sau hộp đèn quảng cáo nhô ra tối đen khuất sáng, bậc thềm nối với cửa cuốn đóng kín của trung tâm thương mại ở cuối hầm khuất gió khô ráo, thích hợp tiến hành ẩn gian từ phía sau ở phía sau hộp đèn và mở toang áo khoác lớn thả rông phơi bày dưới ánh sáng mạnh của hộp đèn.",
    "draw": "Dạo bước hầm đi bộ sang đường. Đè vào tường ẩn gian tiến vào từ phía sau trong hốc lõm tối đen phía sau hộp đèn quảng cáo, kết hợp bí mật trên bậc thềm khô ráo trước cửa cuốn trung tâm thương mại và khỏa thân mở toang áo phơi bày trước hộp đèn sáng trưng.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": null,
    "special": [
      "Giữa hộp đèn quảng cáo nhô ra và cửa lớn phòng phối điện tạo thành một hốc lõm hẹp dài tối đen sâu nửa mét, tránh hoàn toàn camera giám sát ở lối đi.",
      "Tiếng xe cộ nổ ầm ầm trên mặt đường phía trên cùng tiếng ồn của quạt thông gió công suất lớn trong hầm có thể che lấp động tĩnh va chạm cơ thể.",
      "Bậc thềm trước cửa cuốn đóng kín dẫn vào lối vào tầng hầm trung tâm thương mại khô ráo và đêm khuya không có bảo vệ đi tuần tra."
    ],
    "events": [
      {
        "id": "evt_mh_underpass_wall",
        "title": "Đè vào tường tiến vào từ phía sau trong hốc lõm tối đen phía sau hộp đèn quảng cáo",
        "场所": "Hốc lõm phòng phối điện phía sau hộp đèn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hộp đèn quảng cáo lớn chiếu sáng lối đi, nhưng tại hốc lõm phía sau tạo bởi phần hộp đèn nhô ra lại tối đen như mực. Xe cộ chạy qua trên mặt đường phía trên đỉnh đầu mang lại tiếng nổ trầm đục và độ rung nhẹ, trong lối đi không có người đi bộ nào khác.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy đi giữa lối đi sáng sủa, cùng nhau ngắm nhìn những bức ảnh nhiếp ảnh thành phố trên hộp đèn và trò chuyện",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "拉她躲进灯箱背后的漆黑凹槽，把她按在瓷砖墙面上脱下内裤，从身后把肉棒插进湿滑的下体，借着车流轰鸣用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Kéo cô ấy nấp vào hốc lõm tối đen phía sau hộp đèn, đè cô ấy lên mặt tường gạch men cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể ướt mượt, mượn tiếng dòng xe cộ nổ vang mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_mh_underpass_flash",
        "title": "Khỏa thân mở toang áo khoác lớn phơi bày trước hộp đèn quảng cáo sáng trưng",
        "场所": "Trước hộp đèn sáng trưng lối đi ngầm",
        "优先级": 62,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hầm đi bộ lúc hai giờ đêm không một bóng người, hộp đèn quảng cáo ánh sáng trắng rộng mấy mét chiếu sáng lối đi rực rỡ như ban ngày, quạt thông gió kêu vù vù ở cuối đường hầm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Chụp giúp cô ấy một bức ảnh chung đêm khuya tinh nghịch trước hộp đèn, nắm tay cô ấy chạy nhanh lên bậc thềm ra khỏi đường hầm",
            "结算": "Độ hảo cảm+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi cúc áo măng tô ngay trước hộp đèn quảng cáo sáng rực, mở toang hoàn toàn áo khoác lớn để lộ cơ thể không một mảnh vải bên trong, mặc cho bạn dùng điện thoại chụp ảnh ghi lại tư thế khỏa thân dạo bước",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm chụp lén+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "明湖地下过街通道"
  },
  {
    "id": "xz_yoga",
    "name": "Phòng tập Yoga không trung Vân Đoan",
    "fullName": "Khu Tây Châu · Phòng tập Yoga không trung Vân Đoan",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Phòng tập yoga trên không (Aerial Yoga) cao cấp nằm trên tòa nhà văn phòng cao tầng ven sông. Trang bị cửa kính sát đất toàn cảnh, giường tập Pilates Reformer và dải lụa treo trên không. Phòng tập PT VIP sâu bên trong có lắp kính làm mờ điều khiển điện, sau khi bật điện có thể chuyển hoàn toàn sang trạng thái kính nhám mờ. Dầm chịu lực trên trần nhà trang bị móc treo cường độ cao, thích hợp triển khai treo lơ lửng cố định tách hai chân và Play quần tập bó sát.",
    "draw": "Tập yoga trên không và giãn cơ định hình. Dải lụa treo cố định tách hai chân tự sướng, mặc quần tập yoga bó sát thả rông vuốt ve và đứng tiến vào từ phía sau trước cửa kính sát đất.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong tủ để đồ và bàn trị liệu có chuẩn bị sẵn tinh dầu định hình cơ thể, dây kháng lực đàn hồi và nguyên liệu làm dịu cơ thể khi vận động.",
      "materials": [
        "Tinh dầu thơm định hình cơ thể",
        "Dây kháng lực tập yoga siêu đàn hồi",
        "Nguyên liệu tiếp sức thể thao",
        "Hương xông thư giãn pha chế đặc biệt"
      ]
    },
    "special": [
      "Phòng tập PT VIP được trang bị kính làm mờ điều khiển điện bằng một nút bấm, sau khi bật lên bên ngoài không thể nhìn rõ bên trong.",
      "Dầm chịu lực trên trần nhà neo cố định nhiều bộ dải lụa trên không, có thể chịu lực treo lơ lửng một người và cố định tư thế.",
      "Buổi tối sau khi đóng cửa chỉ để lại đèn sàn, cửa kính sát đất hướng thẳng ra cảnh đêm bờ sông."
    ],
    "events": [
      {
        "id": "evt_xz_yoga_silk",
        "title": "Cố định tách hai chân trên dải lụa treo tự sướng",
        "场所": "Khu vực treo lơ lửng phòng tập PT riêng",
        "优先级": 64,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Kính làm mờ của phòng tập PT VIP đã khóa chặt, trong phòng đang phát bản nhạc nhẹ nhàng êm dịu. Hai dải lụa treo màu tím rủ xuống giữa không trung. Cô ấy đứng trên thảm tập yoga làm động tác khởi động làm nóng người.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Hỗ trợ cô ấy hoàn thành động tác giãn cơ trên không, đưa khăn bông giúp cô ấy lau khô mồ hôi trên trán",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi bỏ quần tập và quần lót, luồn hai chân lần lượt vào hai dải lụa treo lơ lửng giữa không trung mở rộng thành hình chữ Đại, trong trạng thái không thể khép hai chân lại mà dùng ngón tay tự sướng cho tới khi phun nước (triều xuy)",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=600",
            "选项": "Giữ lấy hai chân đang treo lơ lửng mở rộng giữa không trung của cô ấy, vươn dương vật trực tiếp đâm vào hạ thể ướt mềm, thúc sâu trước sau trong tư thế mượn lực treo lơ lửng",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+30, Kinh nghiệm play đạo cụ+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_yoga_tight",
        "title": "Mặc quần tập yoga bó sát thả rông vuốt ve đường nét vùng kín",
        "场所": "Trước gương trong phòng tập PT riêng",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng chỉ bật ánh đèn sàn yếu ớt, trước mặt là nguyên một tấm gương lớn sát đất. Cô ấy đứng trước gương điều chỉnh nhịp thở, chờ chỉ dẫn động tác tiếp theo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đứng sang một bên hướng dẫn cô ấy hoàn thành trọn bộ tư thế con mèo giãn cơ, khen ngợi độ dẻo dai cơ thể của cô ấy",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=580",
            "选项": "Bảo cô ấy cởi bỏ quần lót trực tiếp thả rông mặc chiếc quần tập yoga bó sát vào, quỳ chống tay trước gương theo tư thế con mèo, thò tay xoa nắn qua đường nét hạ thể hằn lõm rõ rệt trên lớp vải bó căng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=620",
            "选项": "Bảo cô ấy chống hai tay lên mặt kính cửa sổ sát đất cong mông lên, kéo quần tập bó sát xuống để lộ bờ mông, từ phía sau đâm dương vật vào hạ thể ướt mượt thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "云端空中瑜伽馆"
  },
  {
    "id": "xz_run",
    "name": "Đường dạo bộ ven sông Tây Châu",
    "fullName": "Khu Tây Châu · Đường dạo bộ ven sông Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đường chạy bộ nhựa tổng hợp lát dọc theo bờ sông. Đi ngang qua phía dưới gầm cầu đường bộ vượt sông, trụ cầu đổ xuống một vùng bóng tối khổng lồ, tiếng sóng sông vỗ bờ vang vọng liên hồi. Đêm khuya đèn đường giảm đi một nửa, chỗ tối dưới gầm cầu và đoạn cuối đường ván gỗ sát mặt nước thoát khỏi tầm nhìn của camera giám sát, là địa điểm để nghỉ chân khi chạy bộ ban đêm ven sông và phơi bày ngoài trời.",
    "draw": "Chạy bộ và đi dạo ban đêm ven sông. Vén áo thể thao nhanh khô phơi bày, đứng khẩu giao sâu dưới chân trụ cầu đường bộ và ngồi dạng chân kết hợp trên ghế dài sát mặt nước.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh bụi lau sậy đường ván gỗ sát nước và các kẽ đá có thể thu thập lông vũ chim nước, thực vật thảo mộc và nguyên liệu nước ngưng tụ.",
      "materials": [
        "Thực vật thủy sinh hoang dã ven sông",
        "Lông vũ rụng của chim nước",
        "Nước ngưng tụ nhóm khoáng vật",
        "Nguyên liệu thảo mộc vùng ngập nước"
      ]
    },
    "special": [
      "Phía sau trụ cầu chính của cây cầu đường bộ vượt sông có bệ xi măng bằng phẳng, nằm ở góc chết của toàn tuyến đèn đường và camera giám sát.",
      "Đêm khuya sau mười giờ đường đi bộ rất ít người qua lại, tiếng xe tải lớn chạy ầm ầm trên cầu có thể che lấp động tĩnh va chạm da thịt.",
      "Ghế dài sát mặt nước hướng thẳng ra mặt sông thoáng đãng, gió đêm thổi mạnh."
    ],
    "events": [
      {
        "id": "evt_xz_run_sweat",
        "title": "Vén áo thể thao nhanh khô phơi bày trong gió sông",
        "场所": "Ghế dài đường đi bộ ven sông",
        "优先级": 57,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người chạy bộ xong ngồi xuống chiếc ghế gỗ dài bên bờ sông. Gió sông thổi mát rượi, cô ấy cầm một chai nước khoáng trong tay đang uống từng ngụm nhỏ nghỉ ngơi.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa chiếc khăn khô giúp cô ấy lau mồ hôi trên cổ, ngồi bầu bạn cùng cô ấy trên ghế dài ngắm thuyền du lịch trên mặt sông",
            "结算": "Độ hảo cảm+20, Tiền bạc-15, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=480",
            "选项": "Bảo cô ấy vén thẳng chiếc áo trên lên phía trên ngực để lộ toàn bộ bầu ngực, dùng hai tay nâng đôi gò bồng đảo mặc cho làn gió sông lạnh mát thổi qua làm săn cứng đầu ngực",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_xz_run_pier",
        "title": "Quỳ gối khẩu giao trong bóng tối bệ xi măng trụ cầu",
        "场所": "Điểm mù dưới trụ cầu lớn",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Băng qua lối nhỏ bước vào phía sau trụ cầu đường bộ lớn. Phía trên cách mấy chục mét thỉnh thoảng có xe tải lớn nổ vang rền chạy qua, dưới chân sóng sông vỗ đập vào đê chắn sóng. Bốn phía tối đen như mực, từ bên ngoài hoàn toàn không nhìn rõ bên trong gầm cầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dựa lưng vào tường xi măng ôm cô ấy vào trong áo khoác lớn sưởi ấm, cùng nhau lắng nghe tiếng sóng dưới gầm cầu",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Kéo khóa quần lấy dương vật ra, bảo cô ấy quỳ xuống trên bệ xi măng há miệng ngậm vào, ngậm trọn mút nuốt tương tác giữa tiếng nổ vang trời khi xe tải lớn chạy qua phía trên",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=580",
            "选项": "Đè cô ấy lên trụ cầu xi măng mát lạnh kéo tụt quần lót xuống, vươn người đâm dương vật từ phía sau vào sâu trong hạ thể, nương theo tiếng sóng vỗ bờ mà ra sức thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "西洲滨江步道"
  },
  {
    "id": "wx_teahouse",
    "name": "Quán trà cổ Lâm Thủy Cư",
    "fullName": "Khu Ô Khê · Quán trà cổ Lâm Thủy Cư",
    "district": "Khu Ô Khê",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Quán trà cổ kiến trúc gỗ hai tầng bên bờ nước. Phòng riêng trên tầng hai được trang bị bình phong chạm hoa gỗ hồng mộc và khăn trải bàn dài bằng gấm rủ chạm đất, đẩy cửa sổ gỗ ra chính là dòng sông cổ. Tiếng trò chuyện của khách uống trà phòng bên đan xen với tiếng khua mái chèo dưới lầu, điểm mù hoàn toàn dưới lớp khăn trải bàn dài và phía trước khung cửa sổ gỗ sát mặt nước rất thích hợp để triển khai tương tác khẩu giao dưới gầm bàn và tiến vào từ phía sau bên cửa sổ.",
    "draw": "Thưởng trà ngắm cảnh bên sông. Chui xuống gầm bàn dưới lớp khăn trải bàn gấm chạm đất tương tác khẩu giao, mò mẫm dưới đáy váy sau bình phong và vén váy tiến vào từ phía sau trên lan can gỗ (Mỹ nhân khảo) bên cửa sổ sát sông.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong phòng pha trà và sân sau có chuẩn bị sẵn búp trà xanh vùng núi cao, nước tự nhiên giếng cổ và nguyên liệu pha trà phối trà.",
      "materials": [
        "Búp trà xanh tươi trước tiết Thanh Minh hạng đặc biệt",
        "Nước mềm tự nhiên từ giếng cổ",
        "Nguyên liệu điều dưỡng trà đạo",
        "Đường phủ bánh trà kiểu Tô Châu"
      ]
    },
    "special": [
      "Bàn bát tiên gỗ hồng mộc ở phòng riêng tầng hai trải khăn trải bàn dày chạm đất, không gian dưới gầm bàn khép kín kín đáo.",
      "Cửa sổ gỗ sát sông sau khi đẩy mở thì ngay phía dưới là mặt nước, thỉnh thoảng có thuyền khua chèo lướt qua.",
      "Ngay lối vào phòng riêng có bình phong chạm gỗ chắn tầm nhìn từ bên ngoài."
    ],
    "events": [
      {
        "id": "evt_wx_teahouse_table",
        "title": "Chui xuống gầm bàn dưới lớp khăn trải bàn dài chạm đất tương tác khẩu giao",
        "场所": "Dưới gầm bàn bát tiên quán trà",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm khăn trải bàn dài ở phòng riêng tầng hai rủ thẳng xuống chạm mặt thảm. Người phục vụ vừa đặt ấm trà xuống rồi lui ra ngoài, bên ngoài bình phong có thể nghe thấy tiếng nói chuyện của khách uống trà bàn bên cạnh. Cô ấy ngồi ở phía đối diện bàn dài đang bưng chén trà.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Rót đầy một chén trà nóng cho cô ấy, gắp một miếng bánh Định Thắng đưa tới bên miệng cô ấy",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Cởi khóa quần, bảo cô ấy tháo giày chui vào dưới lớp khăn trải bàn chạm đất, quỳ giữa hai chân bạn há miệng ngậm lấy dương vật, nuốt sâu tận họng giữa động tĩnh phòng bên cạnh bất cứ lúc nào cũng có thể có người bước sang",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=580",
            "选项": "Bản thân bạn cũng chui xuống tấm thảm dưới lớp khăn trải bàn chạm đất, cởi quần lót của cô ấy đè cô ấy xuống tấm đệm mềm trực tiếp đâm vào, ra sức ẩn gian thúc đẩy dưới sự che chắn của khăn trải bàn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_teahouse_window",
        "title": "Vén váy tiến vào từ phía sau trên lan can gỗ cửa sổ sát sông",
        "场所": "Trước bệ cửa sổ gỗ sát sông",
        "优先级": 74,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trời dần tối xuống, trên mặt sông sáng lên bóng đèn lồng đỏ phản chiếu. Cửa gỗ phòng riêng đã cài chốt, khung cửa sổ gỗ chạm hoa sát mặt nước đang mở hé một nửa, ngoài cửa sổ gió sông thổi nhẹ. Cô ấy đứng bên cửa sổ ngắm nhìn những con thuyền nhỏ trên dòng sông.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau khẽ vòng tay ôm lấy cô ấy, cùng nhau tựa trước cửa sổ ngắm bóng đèn phản chiếu trên mặt sông",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy nằm sấp trên lan can gỗ (Mỹ nhân khảo) bên bệ cửa sổ vén váy cởi bỏ quần lót, dùng hai tay tách mở bờ mông phô bày hạ thể ra ngoài cửa sổ, vừa nhìn mặt sông phía dưới thỉnh thoảng có thuyền du lịch đi qua vừa cắn môi nhẫn nại",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Giữ lấy eo cô ấy bắt cô ấy chống hai tay lên lan can gỗ bệ cửa sổ, từ phía sau đâm dương vật vào hạ thể ướt át, ra sức thúc đẩy từ phía sau giữa tiếng khua mái chèo rẽ nước dưới lầu",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "临水居老茶馆"
  },
  {
    "id": "wx_story",
    "name": "Thư trường cổ Ngô Vận Cổ Tiên",
    "fullName": "Khu Ô Khê · Thư trường cổ Ngô Vận Cổ Tiên",
    "district": "Khu Ô Khê",
    "archetype": "commercial",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Thính phòng Bình đàn (hát kể chuyện Tô Châu) truyền thống. Trên sân khấu nghệ sĩ đang biểu diễn Bình đàn, tiếng đàn tam huyền và đàn tỳ bà ngân vang trong trẻo. Phía sau sân khấu có phòng thay đồ của nhạc công treo đầy trang phục biểu diễn và bình phong gỗ hồng mộc. Trong lúc phía trước đang biểu diễn, tiếng đàn tỳ bà khảy dồn dập có âm lượng cực lớn, sau khi khóa trái phòng thay đồ thì động tĩnh bên trong hoàn toàn bị tiếng đàn che lấp, thích hợp triển khai vén váy tiến vào từ phía sau ở hậu trường và tương tác khẩu giao sau bình phong.",
    "draw": "Thưởng thức nghệ thuật Bình đàn Tô Châu truyền thống. Vén váy tiến vào từ phía sau trong phòng thay đồ hậu trường dưới sự che chở của tiếng đàn tỳ bà, kích thích bằng ngón tay dưới rèm trúc phòng lô tầng hai và quỳ gối tương tác khẩu giao sau bình phong.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong hộp dụng cụ sửa chữa ở hậu trường và ngăn kéo có lưu giữ nhựa thông chỉnh âm, dây đàn tơ tằm đứt và nguyên liệu viên ngậm dịu họng.",
      "materials": [
        "Khối nhựa thông tự nhiên",
        "Đoạn dây đàn tơ tằm đứt thừa",
        "Viên ngậm dịu họng truyền thống",
        "Lụa là trang phục kinh kịch"
      ]
    },
    "special": [
      "Trong suốt thời gian biểu diễn, tiếng đàn tam huyền và ngón khảy luân chỉ đàn tỳ bà ở sân khấu trước có âm lượng cực lớn, âm thanh ở hậu trường bị che lấp hoàn toàn.",
      "Sâu trong phòng thay đồ có bàn dài gỗ hồng mộc và gương trang điểm, cửa phòng có chốt cài trong.",
      "Phòng lô tầng hai có trang bị rèm trúc buông rủ, từ sảnh lớn dưới lầu ngước đầu lên không thể nhìn rõ động tác ở nửa thân dưới trong phòng lô."
    ],
    "events": [
      {
        "id": "evt_wx_story_backstage",
        "title": "Tiến vào từ phía sau trong phòng thay đồ dưới sự che chở của tiếng đàn tỳ bà dồn dập",
        "场所": "Phòng thay đồ phía sau sân khấu",
        "优先级": 69,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đúng vào đoạn cao trào của tiết mục Bình đàn ở sân khấu trước, tiếng khảy đàn tỳ bà dồn dập vang rền làm rung cả vách tường ván gỗ. Chốt cửa gỗ phòng thay đồ hậu trường đã cài chặt, bốn phía treo đầy trang phục sân khấu. Cô ấy đứng trước gương trang điểm ngắm nghía những bộ trang phục đang treo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại cổ áo khoác, khen góc nghiêng khuôn mặt cô ấy khi chăm chú xem hát rất đẹp",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy chống hai tay trước bàn trang điểm vén váy cởi bỏ quần lót, ngay trước gương thò tay đâm ngón tay vào trong âm đạo ướt mềm thúc ngoáy nhanh phát ra tiếng nước",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Mượn tiếng đàn tỳ bà khảy dồn dập vang dội ở sân khấu trước, từ phía sau kéo tuột quần lót của cô ấy ra vươn dương vật đâm vào sâu bên trong, đè lên bàn trang điểm ra sức thúc mạnh từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_story_curtain",
        "title": "Kích thích bằng ngón tay trong bóng tối dưới sự che chắn của rèm trúc phòng lô tầng hai",
        "场所": "Phòng lô tầng hai thính phòng Bình đàn",
        "优先级": 73,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "顺从度": [
            550,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm trúc của phòng lô tầng hai buông rủ một nửa che khuất tầm nhìn, dưới lầu ngồi kín khách uống trà nghe hát, đang nổ ra từng tràng vỗ tay reo hò vang dội. Cô ấy ngồi trên ghế đệm mềm trong phòng lô nhìn xuống sân khấu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa một đĩa hạt dưa rang giòn vừa bóc vỏ xong, ngồi sóng đôi cùng cô ấy vừa ăn vừa nghe hát",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Dưới sự che chắn của tấm rèm trúc luồn tay vào dưới đáy váy cô ấy thò vào trong quần lót, giữa tiếng vỗ tay reo hò khắp khán phòng dưới lầu mà móc ngoáy hạ thể ướt đẫm, ép cô ấy phải kẹp chặt hai chân nhịn chặt không được kêu thành tiếng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "吴韵古仙书场"
  },
  {
    "id": "wx_foot",
    "name": "Tiệm ngâm chân & xoa bóp họ Lục",
    "fullName": "Khu Ô Khê · Tiệm ngâm chân & xoa bóp họ Lục",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Quán xoa bóp bấm huyệt và ngâm chân truyền thống lâu đời. Trong quán dùng rèm vải nhung dày để ngăn cách các giường xoa bóp với nhau, trong không khí tràn ngập mùi nước thuốc ngải cứu và gừng tươi. Kỹ thuật viên khiếm thị đang tập trung ấn huyệt ở giường bên cạnh, chiếc giường khép kín phía sau tấm rèm ngăn mang lại không gian kín đáo cực kỳ yên tĩnh, thích hợp triển khai kích thích bằng chân (túc giao) thoa tinh dầu và thúc đẩy tĩnh âm sau rèm ngăn.",
    "draw": "Ngâm chân thuốc Bắc và xoa bóp bấm huyệt. Kích thích bằng chân thoa tinh dầu ấm nóng khi kỹ thuật viên khiếm thị đang bấm huyệt ở ngoài rèm ngăn, ẩn gian tiến vào từ phía sau không tiếng động bên trong rèm và đùa nghịch vòm bàn chân.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên xe đẩy bấm huyệt và tủ thuốc có chuẩn bị sẵn bột ngâm chân thảo dược, tinh dầu massage và nguyên liệu điếu ngải cứu.",
      "materials": [
        "Bột ngâm chân gừng già hồng hoa bí truyền",
        "Bộ dao chăm sóc móng chân di sản văn hóa phi vật thể",
        "Tinh dầu thư cân hoạt lạc",
        "Điếu ngải cứu chườm ấm"
      ]
    },
    "special": [
      "Kỹ thuật viên khiếm thị bị hạn chế thị lực và cách một lớp rèm vải, chỉ cần động tác không phát ra tiếng động lớn thì sẽ không bị nhận ra.",
      "Giữa các giường bấm huyệt sử dụng rèm ngăn bằng vải nhung sẫm màu làm dày, tầm nhìn bị che chắn hoàn toàn.",
      "Cung cấp tinh dầu thuốc Bắc ôn kinh làm ấm cơ thể, sau khi thoa lên làn da sẽ trơn mượt ấm nóng."
    ],
    "events": [
      {
        "id": "evt_wx_foot_job",
        "title": "Kích thích bằng chân thoa tinh dầu khi kỹ thuật viên đang bấm huyệt ngoài rèm ngăn",
        "场所": "Giường bấm huyệt sau rèm ngăn",
        "优先级": 68,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm vải nhung màu xanh rêu đậm dày nặng đã kéo kín mít quanh giường bấm huyệt. Kỹ thuật viên khiếm thị ở giường bên cạnh đang bấm huyệt cho khách khác, khẽ giọng hỏi xem lực ấn đã vừa chưa. Cô ấy nằm trên giường bấm huyệt vừa mới ngâm chân xong, lòng bàn chân đã thoa lớp tinh dầu trơn mượt.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi ở mép giường nắm lấy cổ chân cô ấy, giúp cô ấy nhẹ nhàng xoa bóp bắp chân làm dịu cơn mỏi",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Kéo khóa quần lấy dương vật ra, bảo cô ấy dùng đôi bàn chân ấm nóng thoa đầy tinh dầu khép lại kẹp chặt lấy dương vật, trượt lên xuống tương tác bằng chân giữa động tĩnh kỹ thuật viên ngoài rèm ngăn bất cứ lúc nào cũng có thể lên tiếng nói chuyện",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Vén váy cô ấy lên cởi bỏ quần lót tách hai chân ra, nhân lúc có tiếng ấn huyệt ở giường bên cạnh che chở, đâm trọn cả cây dương vật vào tận đáy, kìm nén âm thanh chầm chậm thúc sâu bên trong tấm rèm ngăn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "陆氏修脚推拿馆"
  },
  {
    "id": "wx_inn",
    "name": "Khách điếm Thủy Ngạn Chẩm Hà Cư",
    "fullName": "Khu Ô Khê · Khách điếm Thủy Ngạn Chẩm Hà Cư",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Lữ quán ven sông cải tạo từ ngôi nhà cổ thời Minh Thanh. Trong phòng nghỉ vẫn giữ lại hệ cột xà gỗ hồng mộc, chiếc giường chạm hoa kiểu cổ và lan can gỗ Mỹ nhân khảo. Vách gỗ của ngôi nhà cổ cách âm cực kém, tiếng trở mình ở phòng bên và tiếng bước chân ngoài hành lang nghe rõ mồn một. Cột giường chạm hoa kiên cố cùng môi trường vách gỗ mỏng rất thích hợp để triển khai bịt miệng làm tình, trói buộc vào cột giường bằng dây thừng đỏ và phơi bày ngoài ban công sát sông.",
    "draw": "Qua đêm tại lữ quán ven sông. Bịt miệng kìm nén làm tình dưới vách tường gỗ cách âm cực kém, trói buộc bằng dây thừng đỏ vào cột giường gỗ thịt chạm hoa và khỏa thân hóng gió trên lan can gỗ sát sông.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Ở đầu giường và tủ gỗ có chuẩn bị sẵn xà phòng tinh dầu thủ công, miếng gỗ long não và nguyên liệu túi hương.",
      "materials": [
        "Xà phòng thủ công lữ quán",
        "Miếng gỗ long não chống mối mọt nhà cổ",
        "Túi hương xông an thần",
        "Mảnh vải thừa chăn ga thêu Tô Châu"
      ]
    },
    "special": [
      "Bốn góc chiếc giường lớn chạm hoa là cột trụ gỗ hồng mộc đặc ruột, kết cấu kiên cố thích hợp dùng dây thừng cố định.",
      "Vách tường bằng gỗ cách âm cực kém, động tĩnh ở phòng bên nghe phân biệt rõ ràng, bắt buộc phải kiềm chế âm thanh nghiêm ngặt.",
      "Ban công sát sông có lắp rèm trúc, hướng thẳng ra dòng kênh đào cổ u tối vào ban đêm."
    ],
    "events": [
      {
        "id": "evt_wx_inn_creak",
        "title": "Bịt miệng làm tình dưới vách tường ván gỗ mỏng",
        "场所": "Giường lớn chạm hoa lữ quán",
        "优先级": 60,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya vắng lặng, ngoài cửa sổ chỉ có tiếng nước sông chảy róc rách. Sàn gỗ trong phòng nghỉ hễ bước đi là kêu cót két khe khẽ, tiếng khách trọ phòng bên trở mình và ho nhẹ nghe rõ mồn một. Cô ấy ngồi ở mép giường gỗ hạ thấp giọng nói chuyện với bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo chăn ôm cô ấy vào lòng khẽ thì thầm bên tai, ôm nhau chìm vào giấc ngủ mà không phát ra tiếng động",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+30, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy nằm sấp trên giường cắn chặt một góc gối vén váy ngủ lên, giữa cảm giác tim đập thình thịch khi phòng bên bất cứ lúc nào cũng có thể nghe thấy động tĩnh mà cởi bỏ quần lót dùng tay vuốt ve hạ thể, không cho cô ấy phát ra tiếng",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Một tay bịt miệng cô ấy lại, tay kia từ phía sau đâm dương vật vào hạ thể ướt mượt, kìm nén chầm chậm thúc sâu giữa sự yên tĩnh tột độ chỉ cách phòng bên đúng một vách gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_inn_bedpost",
        "title": "Treo trói hai tay vào cột giường gỗ thịt chạm hoa",
        "场所": "Giường lớn gỗ hồng mộc trong phòng nghỉ",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            400,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đầu giường bật ngọn đèn bàn màu đỏ sẫm, cột giường gỗ hồng mộc cao lớn chắc chắn. Cửa phòng đã khóa trái. Cô ấy đứng bên thành giường chờ tương tác tiếp theo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bế cô ấy vào giữa giường nằm ngay ngắn đắp chăn lên, ở đầu giường vừa lắng nghe tiếng nước chảy bên ngoài vừa trò chuyện",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Dùng sợi dây thừng cotton mềm mại trói hai cổ tay cô ấy lần lượt vào hai cột giường gỗ hồng mộc hai bên cố định thành hình chữ Đại, cởi áo trên để lộ đôi bầu ngực, dùng tay xoa nắn đầu ngực nhạy cảm",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Nhân tư thế hai tay cô ấy đang bị trói trên cột giường mà cởi bỏ quần lót của cô ấy ra, vươn dương vật trực tiếp đâm vào âm đạo, vịn vào cột giường ra sức thúc đẩy giữa tiếng giường gỗ kêu cót két",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "水岸枕河居客栈"
  },
  {
    "id": "wx_script",
    "name": "Nhà hát thực cảnh Mê Vụ Kịch Xã",
    "fullName": "Khu Ô Khê · Nhà hát thực cảnh Mê Vụ Kịch Xã",
    "district": "Khu Ô Khê",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cơ sở trò chơi nhập vai suy luận thực cảnh (Murder Mystery / Kịch bản sát) và thoát khỏi mật thất quy mô lớn dưới tầng hầm. Bên trong có phòng tối tìm kiếm manh mối, đường ngầm cơ quan một chiều và phòng thay trang phục. Bên trong phòng tối tìm manh mối có lắp camera giám sát hồng ngoại nhìn đêm, bên hông người chơi đeo bộ đàm cá nhân. Dưới sự kích thích cực độ khi bị camera hồng ngoại ở phòng điều khiển trung tâm dõi theo và bộ đàm có thể réo gọi bất cứ lúc nào, cực kỳ thích hợp triển khai đè lên bàn tiến vào từ phía sau trong phòng tối và nhẫn nại trứng rung khi đang đàm thoại qua bộ đàm.",
    "draw": "Giải đố kịch bản sát thực cảnh. Đè lên bàn tiến vào từ phía sau dưới camera hồng ngoại trong phòng tối tìm manh mối, khóa còng tay trong đường ngầm một chiều và nhẫn nại trứng rung mạnh khi đang đàm thoại qua bộ đàm.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong kho đạo cụ và hòm tìm manh mối có lưu giữ thư từ đạo cụ giả cổ, bột huỳnh quang và nguyên liệu dược phẩm hiệu ứng đặc biệt.",
      "materials": [
        "Đạo cụ giả cổ sân khấu thực cảnh",
        "Thẻ manh mối đặt riêng trò chơi kịch bản sát",
        "Bột đánh dấu huỳnh quang phòng tối",
        "Dung dịch ngưng tụ tạo khói hiệu ứng sân khấu"
      ]
    },
    "special": [
      "Phòng tối tìm manh mối trang bị camera hồng ngoại nhìn đêm gắn trên trần, phòng điều khiển trung tâm có thể nhìn rõ khung hình hồng ngoại.",
      "Cửa ngầm một chiều sau khi bước vào có thể khóa chết từ bên trong trong vòng ba phút, người chơi bên ngoài không thể bước vào.",
      "Được phát bộ đàm cá nhân, kênh đội bất cứ lúc nào cũng có thể vang lên tiếng gọi của đồng đội."
    ],
    "events": [
      {
        "id": "evt_wx_script_search",
        "title": "Tiến vào từ phía sau trên bàn đọc sách phòng tìm manh mối dưới camera hồng ngoại",
        "场所": "Phòng tối tìm manh mối kịch bản sát",
        "优先级": 62,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước vào phòng tối tìm manh mối khép cửa phòng lại. Trong phòng chỉ có một ngọn đèn bàn nhỏ màu vàng sẫm, camera hồng ngoại ở góc trần nhà sáng lên chấm đỏ yếu ớt. Trong bộ đàm vọng lại tiếng tạp âm xào xạc của đồng đội đang tìm kiếm ngoài hành lang. Cô ấy đang đứng trước bàn đọc sách lục tìm ngăn kéo manh mối.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy cùng lục tìm đạo cụ manh mối trong ngăn bí mật, cùng nhau giải mở cơ quan mật mã",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Đè cô ấy lên bàn đọc sách luồn tay vào dưới đáy váy vuốt ve hạ thể ướt át, bắt cô ấy một tay giữ lấy bộ đàm nhẫn nại khoái cảm",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=580",
            "选项": "Đè cô ấy lên bàn đọc sách tìm manh mối vén váy cởi bỏ quần lót, ngay dưới ánh nhìn của camera hồng ngoại và tiếng tạp âm bộ đàm mà từ phía sau đâm dương vật vào tận đáy điên cuồng thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_script_radio",
        "title": "Nhẫn nại trứng rung mạnh khi đang kết nối bộ đàm",
        "场所": "Phòng thay trang phục đạo cụ",
        "优先级": 73,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "顺从度": [
            550,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong phòng thay trang phục đạo cụ treo đầy quần áo diễn kịch. Đèn báo trên chiếc bộ đàm đeo bên hông cô ấy sáng lên, vang lên tiếng gọi hỏi vị trí của đội trưởng. Cô ấy đứng cạnh giá treo đồ đang chuẩn bị cầm bộ đàm lên trả lời.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy bộ đàm giúp cô ấy trả lời vị trí hiện tại, nắm tay cô ấy cùng quay về sảnh chính tập hợp",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Nhét trứng rung vào trong âm đạo của cô ấy bật mức rung mạnh nhất, bắt cô ấy giữ nút đàm thoại trên bộ đàm báo cáo tình hình cho toàn đội, yêu cầu cô ấy bắt buộc phải nói chuyện bằng giọng điệu bình tĩnh bình thường không được để lọt tiếng rên rỉ",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Ngượng ngùng"
          }
        }
      }
    ],
    "cnName": "迷雾剧社实景剧场"
  },
  {
    "id": "wx_arch",
    "name": "Cầu vòm đá cổ Vạn An",
    "fullName": "Khu Ô Khê · Cầu vòm đá cổ Vạn An",
    "district": "Khu Ô Khê",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cầu vòm đá ba nhịp cổ kính bắc ngang qua dòng sông cổ. Dưới gầm cầu có bệ đá tránh nước và bậc thềm đá xanh, dòng nước chảy qua vòm cầu tiếng vang vọng lại. Đêm khuya sau khi đèn đường hai bên bờ đã tắt, phía dưới gầm cầu tạo thành điểm mù tối đen tránh hoàn toàn tầm nhìn từ trên bờ, tiếng nước chảy có thể che lấp động tĩnh, thích hợp triển khai ngồi dạng chân cưỡi ngựa trên bậc đá và phơi bày đón gió đêm trên đỉnh cầu.",
    "draw": "Ngắm cảnh đêm cầu cổ. Cởi quần ngồi dạng chân cưỡi ngựa trên bậc đá bệ tránh nước dưới gầm cầu, vén váy tự sướng phô bày trong gió đêm trên đỉnh cầu và tiến vào từ phía sau bên vách đá.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong kẽ đá cầu vòm và cạnh đám cỏ nước có thể thu thập rêu ưa bóng râm, sỏi sông tinh khiết và nguyên liệu thực vật thủy sinh.",
      "materials": [
        "Rêu ưa bóng râm trong khe cầu cổ",
        "Sỏi xanh tròn trịa bãi sông",
        "Sợi tảo nước tự nhiên",
        "Thảo mộc thủy sinh vùng Giang Chiết"
      ]
    },
    "special": [
      "Bệ đá tránh nước phía dưới nhịp cầu chính khô ráo bằng phẳng, nằm hoàn toàn ở góc chết của đèn đường trên bờ.",
      "Tiếng vang của dòng nước chảy bên trong vòm cầu rất lớn, có thể che lấp tiếng rên rỉ.",
      "Đêm khuya trên mặt sông không có thuyền du lịch qua lại, cực kỳ u tĩnh."
    ],
    "events": [
      {
        "id": "evt_wx_arch_view",
        "title": "Vén váy tự sướng trước lan can đá trên đỉnh cầu",
        "场所": "Đỉnh vòm cầu đá",
        "优先级": 56,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đứng trên đỉnh cầu vòm đá, xung quanh không có du khách nào khác, gió đêm thổi nhẹ, ánh đèn hai bên bờ phản chiếu dưới làn nước sông. Cô ấy tựa trước lan can đá trên đỉnh cầu nhìn xuống mặt sông.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau choàng tay ôm lấy vai cô ấy, cùng nhau tựa vào lan can đá ngắm nhìn cảnh đêm vùng sông nước hai bên bờ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=490",
            "选项": "Bảo cô ấy nằm sấp trên lan can đá đỉnh cầu vén váy cởi bỏ quần lót, ngay trước mặt sông thoáng đãng dùng ngón tay tự sướng, vừa nhìn dòng nước sông vừa thở dốc rên khẽ dưới làn gió đêm",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_wx_arch_ride",
        "title": "Cởi quần ngồi dạng chân cưỡi ngựa trên bậc đá dưới gầm cầu",
        "场所": "Bậc đá bệ tránh nước dưới gầm cầu",
        "优先级": 72,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Men theo bậc thềm bước xuống bệ đá tránh nước phía dưới nhịp cầu chính, bốn phía tối đen như mực, cách dưới chân một thước dòng nước chảy cuộn trào vang vọng. Hai người ngồi trên bậc đá bằng phẳng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dùng áo khoác quấn quanh hai người sưởi ấm, ngồi trên bậc đá hôn nhẹ lên gò má cô ấy",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=610",
            "选项": "解开裤链，让她脱掉内裤跨坐到你的腿上把肉棒吞入下体深处，就着桥下流水声上下起伏套弄深插",
            "结算": "性欲度重置, 顺从度+40, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Cởi khóa quần, bảo cô ấy cởi bỏ quần lót ngồi dạng chân lên đùi bạn nuốt dương vật vào sâu trong hạ thể, nương theo tiếng nước chảy dưới gầm cầu mà nhấp nhô lên xuống thúc sâu",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "万安古石拱桥"
  },
  {
    "id": "wx_dye",
    "name": "Xưởng nhuộm di sản Giang Nam",
    "fullName": "Khu Ô Khê · Xưởng nhuộm di sản Giang Nam",
    "district": "Khu Ô Khê",
    "archetype": "craft",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Xưởng nhuộm buộc (Tie-dye) thảo mộc di sản văn hóa phi vật thể truyền thống. Trên sân phơi vải giàn cao ở sân sau treo hàng loạt tấm rèm vải nhuộm buộc hai màu xanh trắng cao mấy mét, gió nhẹ thổi qua tạo thành mê cung màn vải. Xưởng được trang bị dây thừng cotton màu mộc bện nhiều sợi chống hằn đau và bàn gỗ lớn. Ban đêm sau giờ đóng cửa những tấm rèm vải che chắn kín mít, thích hợp triển khai trói nghệ thuật Shibari mai rùa (Quy giáp phược) và tiến vào từ phía sau trên bàn gỗ.",
    "draw": "Trải nghiệm nhuộm buộc thảo mộc. Trói mai rùa bằng dây thừng cotton chống hằn sâu trong mê cung màn vải, cởi quần tiến vào từ phía sau trên bàn gỗ thịt cạnh chum nhuộm lớn và Play ẩn gian sau rèm vải.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ dụng cụ có chuẩn bị sẵn thuốc nhuộm chàm thực vật, dây thừng cotton chuyên dụng nhuộm buộc và nguyên liệu vải cotton thuần.",
      "materials": [
        "Cao nhuộm bản lam căn lên men tự nhiên",
        "Dây thừng cotton màu mộc nhuộm buộc độ bền cao",
        "Chất cầm màu nhuộm thảo mộc",
        "Khăn vuông nhỏ nhuộm buộc (tie-dye) cotton thuần"
      ]
    },
    "special": [
      "Hàng loạt tấm rèm vải nhuộm rủ chạm đất ở sân sau tạo thành mê cung tự nhiên che khuất hoàn toàn tầm nhìn.",
      "Dây thừng cotton nguyên bản bện nhiều sợi chuyên dụng cho nhuộm buộc đã qua xử lý làm mềm, độ dẻo dai cao và không làm tổn thương da, cực kỳ thích hợp để trói nghệ thuật Shibari.",
      "Chiếc bàn gỗ lớn dùng để cắt vải nặng nề kiên cố, bề mặt bằng phẳng."
    ],
    "events": [
      {
        "id": "evt_wx_dye_rope",
        "title": "Trói mai rùa bằng dây thừng cotton chống hằn bên trong mê cung màn vải",
        "场所": "Sâu giữa những tấm màn vải trên giàn phơi",
        "优先级": 70,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Buổi tối sau khi đóng cửa sân sau yên tĩnh một vùng, hàng loạt tấm rèm vải dài nhuộm buộc hai màu xanh trắng buông rủ che kín mít bốn phía. Mặt đất trải những xấp vải sạch sẽ, bên cạnh đặt mấy cuộn dây thừng cotton màu mộc. Cô ấy đứng giữa những tấm rèm vải ngắm nghía các xấp vải đang treo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy một chiếc khăn vải nhuộm chàm mềm mại khoác lên vai cô ấy, nắm tay cô ấy dạo bước giữa những bức màn vải",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Cởi bỏ áo trên của cô ấy, dùng dây thừng cotton nhuộm buộc quấn quanh ngực và eo bụng cô ấy tạo thành kiểu trói mai rùa tinh xảo, trói ngược hai tay ra sau lưng treo lên giàn phơi gỗ rồi dùng tay xoa nắn đầu ngực",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trói ngược tay cô ấy trên giàn gỗ cởi bỏ quần lót, dưới sự che chắn của những bức màn vải vươn dương vật trực tiếp đâm vào hạ thể ướt át, nắm lấy dây thừng ra sức thúc đẩy sâu giữa những lớp rèm vải",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_wx_dye_bench",
        "title": "Cởi quần tiến vào từ phía sau trên bàn gỗ lớn",
        "场所": "Trước bàn gỗ lớn trong xưởng nhuộm",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong xưởng chỉ để lại một ngọn đèn thả màu vàng sẫm, chiếc bàn lớn cắt vải bằng gỗ thịt rộng rãi đặt ở chính giữa. Cô ấy dùng hai tay vịn vào mép bàn gỗ đang nghỉ ngơi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy rời khỏi bàn gỗ, dắt cô ấy ra sân sau ngắm vầng trăng sáng rõ khác thường trên bầu trời đêm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=620",
            "选项": "让她趴在平整的实木大案板上脱掉内裤，从身后把肉棒整根插进阴道深处，按着她的细腰在木案上用力猛烈抽插",
            "结算": "性欲度重置, 顺从度+40, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bảo cô ấy nằm sấp trên chiếc bàn lớn bằng gỗ thịt bằng phẳng cởi bỏ quần lót, từ phía sau đâm trọn cả cây dương vật vào sâu trong âm đạo, giữ lấy vòng eo thon của cô ấy thúc mạnh mãnh liệt trên mặt bàn gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "江南扎染非遗工坊"
  },
  {
    "id": "lx_gym",
    "name": "Nhà thi đấu tổng hợp Làng Đại học",
    "fullName": "Khu Lạc Hà · Nhà thi đấu tổng hợp Làng Đại học",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Nhà thi đấu thể thao đa năng quy mô lớn thuộc làng đại học. Tầng hai trang bị phòng tập thể dục dụng cụ chuyên nghiệp và phòng chứa dụng cụ, chất đống đệm mút dày, hòm nhảy gỗ thịt (Vaulting box) và thang gióng thể dục gắn tường (Stall bars). Buổi tối sau khi giải tán tắt đèn, phía sau chồng hòm nhảy cao và khung thang gióng nằm ở góc chết tầm nhìn, thích hợp triển khai cố định hai chân xoạc ngang trên thang gióng và tiến vào từ phía sau trên hòm nhảy.",
    "draw": "Chơi thể thao bóng và rèn luyện thể năng. Trói cố định hai chân xoạc ngang (nhất tự mã) trên khung thang gióng gỗ thịt, tiến vào từ phía sau trên hòm nhảy cao trong phòng dụng cụ và Play vuốt ve trên đệm mút.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong hòm dụng cụ và túi y tế có chuẩn bị sẵn bột magie chống trượt, băng dán cơ thể thao và nguyên liệu băng bảo vệ cổ tay.",
      "materials": [
        "Khối bột magie cacbonat chống trượt",
        "Băng dán cơ thể thao độ đàn hồi cao",
        "Dung dịch cô đặc chất điện giải thể thao",
        "Vải băng bảo vệ cổ tay chuyên dụng"
      ]
    },
    "special": [
      "Thanh ngang của khung thang gióng gỗ thịt trong phòng thể dục dụng cụ tầng hai rất kiên cố, có trang bị dây đai cố định có thể tách tứ chi ra cố định.",
      "Những chiếc hòm nhảy cao chất chồng trong phòng dụng cụ cao tới hai mét, phía sau hòm tạo thành góc chết tránh hoàn toàn tầm nhìn từ cửa ra vào và cửa sổ.",
      "Buổi tối sau chín giờ rưỡi giải tán tắt đèn, bên trong nhà thi đấu không có ai làm phiền."
    ],
    "events": [
      {
        "id": "evt_lx_gym_vault",
        "title": "Vén váy tiến vào từ phía sau sau hòm nhảy trong phòng dụng cụ",
        "场所": "Phía sau hòm nhảy cao trong phòng dụng cụ",
        "优先级": 69,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Phòng chứa dụng cụ sau giờ tắt đèn buổi tối rất tối, chỉ có ánh đèn đường ngoài cửa sổ hắt vào chút ánh sáng yếu ớt. Hai người nấp phía sau chồng hòm nhảy cao, ngoài cửa thỉnh thoảng có tiếng bước chân bảo vệ đi tuần tra ngang qua. Cô ấy đứng tựa cạnh chiếc hòm nhảy bọc da.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy ngồi xổm xuống sau hòm nhảy nín thở, đợi bảo vệ đi xa rồi khẽ xoa tóc vỗ về cô ấy",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy nằm sấp trên chiếc hòm nhảy bọc da cởi bỏ quần lót, giữa cảm giác căng thẳng khi tiếng bước chân bảo vệ đi ngang qua mà thò tay vuốt ve hạ thể ướt át, bắt cô ấy bịt miệng nhẫn nại khoái cảm",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Đè cô ấy lên mặt da của chiếc hòm nhảy vén váy lên, từ phía sau đâm dương vật vào hạ thể ướt mượt, thúc nhanh dưới sự kích thích tim đập thình thịch khi bảo vệ bất cứ lúc nào cũng có thể quay lại",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_gym_ribs",
        "title": "Cố định hai chân xoạc ngang trên khung thang gióng gỗ thịt",
        "场所": "Trước khung thang gióng gỗ thịt phòng thể dục dụng cụ",
        "优先级": 74,
        "trigger": {
          "时段": [
            "夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng thể dục dụng cụ không một bóng người, nguyên một bức tường gắn cố định khung thang gióng thể dục bằng gỗ thịt. Cô ấy dựa lưng vào khung thang gióng đứng đó, chờ chỉ thị tiếp theo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm lấy cánh tay cô ấy hỗ trợ cô ấy hoàn thành động tác giãn cơ chân, khoác áo ngoài dẫn cô ấy rời khỏi phòng thể dục dụng cụ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Nâng hai chân cô ấy lên dùng dây đai cố định trói lần lượt vào hai thanh ngang thang gióng hai bên tạo thành tư thế xoạc ngang mở rộng hết cỡ, cởi bỏ quần lót để lộ hạ thể ướt đẫm, dùng ngón tay thúc ngoáy nhanh ngay trước mặt cô ấy khi hai chân không tài nào khép lại được",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Nhân tư thế hai chân cô ấy đang bị trói treo lơ lửng mở rộng trên thanh ngang thang gióng, vươn dương vật nhắm chuẩn hạ thể đâm lút cán, nắm lấy tay vịn thang gióng ra sức thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm play phục tùng+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "大学城综合体育馆"
  },
  {
    "id": "lx_lab",
    "name": "Tòa thí nghiệm trọng điểm Cao Phân Tử",
    "fullName": "Khu Lạc Hà · Tòa thí nghiệm trọng điểm Cao Phân Tử",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 4,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Tòa nhà nghiên cứu khoa học trọng điểm cấp quốc gia thuộc phân khu Bách khoa Lạc Hà. Bên trong có phòng siêu sạch, máy quang phổ hồng ngoại và bàn thí nghiệm chống rung cỡ lớn. Ban đêm hệ thống kiểm soát ra vào thắt chặt, bên trong phòng máy móc sâu bên trong tiếng quạt hút của tủ hút khí độc (Fume hood) nổ ầm ầm liên tục, cách âm cực tốt. Bàn chống rung hạng nặng và ghế thí nghiệm chân cao thích hợp triển khai mặc áo blouse trắng thả rông, thoa thuốc thử và tương tác khẩu giao dưới gầm bàn.",
    "draw": "Vận hành máy quang phổ chính xác, pha chế thuốc thử đặc chủng. Mặc áo blouse trắng thả rông thoa thuốc thử, tiến vào từ phía sau trên bàn thí nghiệm chống rung và Play tương tác khẩu giao dưới gầm bàn.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh giá để thuốc thử và bàn xử lý dung dịch thải có thể thu thập gel nước thân thiện với da, dung môi đặc chủng và nguyên liệu chất chỉ thị huỳnh quang.",
      "materials": [
        "Gel cao phân tử thân thiện với làn da",
        "Dung môi đặc chủng phòng thí nghiệm",
        "Bột chất chỉ thị huỳnh quang",
        "Vật tư lý hóa y tế",
        "Dung dịch gốc thuốc thử độ tinh khiết cao"
      ]
    },
    "special": [
      "Khi hệ thống hút gió công suất lớn ở trung tâm phòng thí nghiệm bật lên âm thanh cực lớn, có thể che lấp tiếng động bên trong phòng.",
      "Bàn thí nghiệm chống rung bằng đá cẩm thạch bằng phẳng kiên cố, khả năng chịu lực cực tốt.",
      "Trên bàn siêu sạch có chuẩn bị sẵn gel dẫn nhiệt cảm biến nhiệt độ dùng trong nghiên cứu khoa học, thoa lên da cho xúc cảm tuyệt hảo."
    ],
    "events": [
      {
        "id": "evt_lx_lab_coat",
        "title": "Mặc áo blouse trắng thả rông và thoa gel cảm biến nhiệt độ",
        "场所": "Phòng phân tích thiết bị chính xác",
        "优先级": 60,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng thiết bị, máy phân tích đang nhấp nháy đèn xanh tự động vận hành, tủ hút khí độc phát ra tiếng hút gió trầm đục. Trong phòng chỉ có hai người, trên bàn thí nghiệm đặt lọ gel cao phân tử thân thiện với da vừa mới pha chế xong.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy ghi chép dữ liệu quang phổ trên màn hình, đưa nước ấm bầu bạn cùng cô ấy chờ kết quả thử nghiệm",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Bảo cô ấy cởi sạch quần áo chỉ khoác duy nhất một chiếc áo blouse trắng phòng thí nghiệm, thoa gel cảm biến nhiệt độ lên đầu ngực đang dựng đứng và hạ thể của cô ấy, cảm nhận chất lỏng chảy tràn giữa tiếng máy móc vận hành",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm play đạo cụ+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_lx_lab_bench",
        "title": "Đè xuống tiến vào từ phía sau trên bàn thí nghiệm chống rung",
        "场所": "Bàn đá cẩm thạch chống rung hạng nặng",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa lớn phòng thí nghiệm đã khóa trái, mặt bàn chống rung bằng đá cẩm thạch mát lạnh bằng phẳng. Tủ hút khí độc liên tục hút gió, ngoài hành lang thỉnh thoảng có tiếng bước chân của bảo vệ đi tuần tra tòa nhà.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Trải áo khoác lên mặt bàn cho cô ấy ngồi nghỉ ngơi, khẽ giọng thảo luận với cô ấy về kế hoạch thí nghiệm tiếp theo",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy nằm sấp trên bàn thí nghiệm vén quần áo lên ngang eo, cởi bỏ quần lót, ngay lúc có tiếng bước chân đi ngang qua ngoài hành lang thì dùng tay vuốt ve hạ thể ướt át, không cho cô ấy phát ra tiếng động",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Giữ lấy eo cô ấy bắt nằm sấp trên bàn thí nghiệm, từ phía sau đâm trọn cả cây dương vật vào hạ thể ướt mượt, mượn tiếng quạt hút gió nổ vang mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_lab_underdesk",
        "title": "Tương tác khẩu giao dưới gầm bàn thao tác thí nghiệm",
        "场所": "Dưới gầm bàn sâu trong bàn thí nghiệm",
        "优先级": 73,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bạn ngồi trên chiếc ghế chân cao của bàn thí nghiệm đối chiếu dữ liệu, tấm chắn gỗ dưới gầm bàn đã che khuất phần lớn tầm nhìn, ngoài hành lang luồng sáng đèn pin thỉnh thoảng quét qua khung cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khẽ xoa tóc cô ấy, sau khi xác nhận nhân viên tuần tra đã đi xa liền kéo cô ấy đứng dậy cùng rời khỏi tòa nhà thí nghiệm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Dựa dẫm"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Kéo khóa quần ra, bảo cô ấy chui xuống dưới gầm bàn quỳ giữa hai chân bạn, ngậm lấy dương vật nuốt sâu tận họng giữa cảm giác tim đập thình thịch khi bên ngoài bất cứ lúc nào cũng có người đẩy cửa bước vào",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "高分子重点实验楼"
  },
  {
    "id": "lx_print",
    "name": "In nhanh 24h Đồ Văn Thiên Hạ",
    "fullName": "Khu Lạc Hà · In nhanh 24h Đồ Văn Thiên Hạ",
    "district": "Khu Lạc Hà",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Tiệm in nhanh 24 giờ trên phố thương mại làng đại học. Trang bị máy scan bản vẽ kỹ thuật cỡ lớn, máy xén giấy và máy đóng gáy keo nhiệt. Khu vực cắt xén đóng sách ở kho sau được ngăn cách bằng rèm chống bụi, ngập tràn mùi mực in và keo nóng chảy. Đêm khuya khi cửa cuốn ở quầy trước kéo xuống một nửa, mặt kính cường lực của máy scan kỹ thuật và bàn đóng sách rất thích hợp để tiến hành photo chụp lén và ẩn gian tiến vào từ phía sau.",
    "draw": "In ấn đóng sách 24h. Ép người lên mặt kính máy photocopy kỹ thuật cỡ lớn in bản sao, tiến vào từ phía sau trên bàn máy xén giấy và Play tương tác khẩu giao sau cửa cuốn quầy trước.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ hàng kho sau có chuẩn bị sẵn giấy in ảnh, hạt keo nhiệt và nguyên liệu bột mực.",
      "materials": [
        "Nguyên liệu giấy in ảnh bóng cao cấp",
        "Hạt keo nhiệt đóng gáy sách",
        "Bột mực in màu độ tinh khiết cao",
        "Vật tư văn phòng in ấn",
        "Giấy nhãn dán tự dính"
      ]
    },
    "special": [
      "Máy scan bản vẽ kỹ thuật khổ A0 được trang bị kính cường lực độ bền cao, chịu lực tốt và có thể quét rõ nét từng chi tiết áp sát lên mặt kính.",
      "Khu vực đóng sách có trang bị rèm tầm nhìn một chiều, có thể nhìn rõ động tĩnh ở quầy trước trong khi từ quầy trước không nhìn thấy kho sau.",
      "Trong tiệm có chuẩn bị sẵn nguyên cuộn giấy nhãn dán tự dính, có thể in sticker ảnh chân dung."
    ],
    "events": [
      {
        "id": "evt_lx_print_scan",
        "title": "Ép người lên mặt kính máy scan kỹ thuật để in sao chụp",
        "场所": "Bàn scan khổ lớn ở kho sau",
        "优先级": 63,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya cửa cuốn ở quầy trước của tiệm in nhanh đã kéo xuống một nửa, ở kho sau chỉ có chiếc máy scan đang sáng đèn. Mặt bàn kính của chiếc máy scan kỹ thuật mát lạnh bằng phẳng, trong tiệm không có khách hàng nào khác.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Lấy chiếc khăn sạch giúp cô ấy phủi sạch vụn giấy trên tay, khen bản thiết kế dàn trang cô ấy giúp làm rất đẹp",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi bỏ quần lót áp chặt cặp mông trần và vùng kín lên mặt kính máy scan, nhấn nút quét, in ra tờ poster cận cảnh độ nét cao phần da thịt bị ép phẳng trên mặt kính rồi đưa cho cô ấy xem",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_lx_print_cutter",
        "title": "Đè xuống tiến vào từ phía sau trên chiếc bàn dài máy xén giấy",
        "场所": "Trước bàn máy xén giấy lập trình",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Mặt bàn kim loại của chiếc máy xén giấy nặng nề kiên cố, ngoài cửa thỉnh thoảng có sinh viên đi ngang qua cánh cửa cuốn kéo một nửa. Cô ấy đứng trước bàn xén giấy chờ keo đóng gáy sách nóng lên.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau ôm lấy vòng eo cô ấy, cùng cô ấy chờ máy in nhả cuốn sổ tay đã đóng gáy xong ra",
            "结算": "Độ hảo cảm+25, Tâm trạng→Dựa dẫm"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy chống hai tay lên bàn máy xén giấy cong mông lên, ngay lúc ngoài cửa có người đi ngang qua thì thò tay luồn vào trong quần lót xoa nắn hạ thể ướt át, ép cô ấy cắn môi nhẫn nại",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Cởi quần lót của cô ấy ra bắt cô ấy nằm sấp trên bàn xén giấy, vươn dương vật đâm vào hạ thể, thúc nhanh dưới sự kích thích tim đập thình thịch khi có tiếng bước chân đi ngang qua ngoài cửa",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_print_counter",
        "title": "Tương tác khẩu giao dưới quầy thu ngân sau cánh cửa cuốn khép một nửa",
        "场所": "Dưới tủ gỗ quầy thu ngân lễ tân",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cánh cửa cuốn chừa lại một khe hở rộng một thước cho ánh đèn đường hắt vào, chiếc quầy thu ngân bằng gỗ vừa khéo chắn khuất tầm nhìn bên ngoài. Trên phố thỉnh thoảng có xe máy điện chạy vụt qua, ánh đèn xe quét qua khe cửa.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy bước ra khỏi quầy thu ngân, kéo sập hoàn toàn cửa cuốn xuống khóa chặt lại, dẫn cô ấy vào phòng sau nghỉ ngơi",
            "结算": "Độ hảo cảm+20, Tâm trạng→Dựa dẫm"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Đứng trước máy thu ngân, bảo cô ấy quỳ dưới gầm quầy giữa hai chân bạn kéo khóa quần ngậm lấy dương vật, tương tác khẩu giao sâu tận họng dưới rủi ro bất cứ lúc nào cũng có người qua đường nhìn vào từ khe cửa",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "图文天下24h快印"
  },
  {
    "id": "lx_share",
    "name": "Chung cư ghép Văn Hội Tân Thôn",
    "fullName": "Khu Lạc Hà · Chung cư ghép Văn Hội Tân Thôn",
    "district": "Khu Lạc Hà",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Căn hộ thuê chung dành cho giới trẻ trên tầng cao cạnh làng đại học. Kết cấu bốn phòng ngủ một phòng khách, vách ngăn bằng tấm thạch cao cách âm rất yếu, có thể nghe rõ tiếng chơi game ở phòng bên và tiếng shipper gõ cửa giao đồ ăn. Chiếc ghế sofa lớn dùng chung ở phòng khách có trang bị chăn lông dày, dưới môi trường tim đập thình thịch khi bạn cùng phòng bất cứ lúc nào cũng có thể mở cửa ra lấy nước, rất thích hợp để triển khai đắp chăn che phủ cưỡi ngựa và bịt miệng ẩn gian.",
    "draw": "Trải nghiệm sinh hoạt thuê chung của giới trẻ. Đắp chăn lông che phủ cưỡi ngựa trên sofa phòng khách, mượn tiếng nước chảy ẩn gian trong nhà vệ sinh và Play bịt miệng trong phòng đơn vách mỏng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong ngăn kéo bàn trà ở phòng khách có lưu giữ hạt cà phê, xịt thơm phòng và nguyên liệu vật tư tắm gội.",
      "materials": [
        "Hạt cà phê cao cấp dùng chung",
        "Xịt thơm phòng gia đình",
        "Khăn sợi vi mô nhanh khô",
        "Vật tư tắm gội chăm sóc hàng ngày",
        "Đồ tạp hóa tiêu hao nhỏ gọn"
      ]
    },
    "special": [
      "Vách ngăn phòng là tấm thạch cao mỏng manh, tiếng trở mình và tiếng ho nhẹ ở phòng bên nghe rõ mồn một bên tai.",
      "Ghế sofa bọc vải dùng chung ở phòng khách có trang bị tấm chăn lông dày rộng lớn, sau khi đắp lên sẽ che khuất hoàn toàn động tác bên trong.",
      "Hơi nước sinh ra khi tắm vòi sen trong nhà vệ sinh sẽ làm cánh cửa kính mờ chuyển sang màu trắng đục hoàn toàn."
    ],
    "events": [
      {
        "id": "evt_lx_share_blanket",
        "title": "Cưỡi ngựa không tiếng động dưới lớp chăn lông che phủ trên sofa",
        "场所": "Ghế sofa bọc vải dùng chung ở phòng khách",
        "优先级": 64,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ban đêm đèn lớn ở phòng khách đã tắt, tivi đang bật chế độ tắt tiếng phát hình ảnh. Cửa các phòng ngủ khác đều đóng chặt, thỉnh thoảng vọng ra tiếng bạn cùng phòng nói chuyện. Hai người ngồi trên ghế sofa, trên người đắp một tấm chăn lông dày rủ chạm đất.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Dưới tấm chăn lông vòng tay ôm lấy eo cô ấy, tựa vào ghế sofa cùng nhau yên lặng xem tivi",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Dưới tấm chăn lông thò tay luồn vào trong quần lót của cô ấy vuốt ve hạ thể ướt đẫm, giữa cảm giác căng thẳng khi bạn cùng phòng có thể mở cửa bước ra bất cứ lúc nào mà bắt cô ấy cắn chặt môi nhẫn nại",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Dưới sự che chắn của tấm chăn lông bảo cô ấy cởi bỏ quần lót ngồi dạng chân lên người bạn, đâm dương vật vào hạ thể, nhấp nhô lên xuống cưỡi ngựa không tiếng động giữa nhịp tim đập thình thịch khi cửa phòng bạn cùng nhà có thể mở ra bất cứ lúc nào",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_share_shower",
        "title": "Mượn tiếng nước chảy ẩn gian trong nhà vệ sinh chung",
        "场所": "Bên trong buồng tắm vòi sen chung",
        "优先级": 69,
        "trigger": {
          "时段": [
            "朝",
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Vòi sen trong nhà vệ sinh đang xả nước nóng rào rào, hơi nước phủ kín cánh cửa kính mờ một lớp sương trắng xóa. Ngoài hành lang vọng lại tiếng bạn cùng phòng đi dép lê bước qua.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy sữa tắm giúp cô ấy kỳ cọ tấm lưng, cùng nhau yên lặng tắm rửa dưới làn nước ấm",
            "结算": "Độ hảo cảm+25, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy chống tay lên tường gạch men cong mông lên, mượn tiếng nước chảy ngay lúc bạn cùng phòng đi ngang qua ngoài cửa mà thò tay đâm ngón tay vào sâu trong hạ thể thúc ngoáy",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Nâng một bên chân cô ấy gác lên bồn rửa mặt, vươn dương vật đâm vào hạ thể ướt mượt, mượn tiếng nước xả ầm ầm từ vòi sen mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_share_wall",
        "title": "Bịt miệng tự sướng trong phòng đơn vách gỗ mỏng",
        "场所": "Phòng đơn phòng ngủ thuê chung",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc giường đơn kê sát ngay vách tường thạch cao mỏng, tiếng bạn cùng phòng ở vách bên ngáy ngủ và trở mình nghe rõ mồn một. Trong phòng đang tắt đèn, ga trải giường phát ra tiếng sột soạt nhẹ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo chăn đắp kín cho cả hai người, ôm cô ấy yên lặng chìm vào giấc ngủ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Bảo cô ấy cắn chặt một góc gối, giữa sự yên tĩnh tột độ khi phòng bên bất cứ lúc nào cũng có động tĩnh mà dùng trứng rung ấn chặt vào âm vật rung lên, ép cô ấy phải cố sống cố chết nhịn chặt tiếng kêu để lên đỉnh",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "文汇新村合租公寓"
  },
  {
    "id": "lx_bus",
    "name": "Trạm trung chuyển xe buýt Làng Đại học",
    "fullName": "Khu Lạc Hà · Trạm trung chuyển xe buýt Làng Đại học",
    "district": "Khu Lạc Hà",
    "archetype": "traffic",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Bãi điều độ xe buýt mặt đất quy mô lớn. Đỗ hàng loạt xe buýt hai tầng và xe buýt thông thường. Sau khi chuyến xe cuối cùng về bến, quá nửa bãi xe tắt đèn, hàng loạt chiếc xe buýt lớn chìm trong bóng tối cắt điện. Hàng ghế lưng cao phía sau trên tầng hai xe buýt và dưới gầm bàn làm việc trong phòng điều độ rất thích hợp để triển khai tiến vào từ phía sau trên chuyến xe cuối và tương tác khẩu giao dưới gầm bàn điều độ.",
    "draw": "Điều độ xe buýt chuyến cuối. Tiến vào từ phía sau ở hàng ghế sau tầng hai xe buýt hai tầng, làm tình trên xe trong khoang xe tắt đèn giữa bãi đỗ xe trống trải và Play tương tác khẩu giao dưới gầm bàn điều độ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong xưởng bảo dưỡng có chuẩn bị sẵn túi thơm để trên xe, dầu mỡ bôi trơn và nguyên liệu vật tư bảo trì.",
      "materials": [
        "Túi thơm để trên xe hơi",
        "Mảnh búa phá kính thoát hiểm trên xe",
        "Gel mềm lau bụi làm sạch",
        "Mỡ bôi trơn máy móc",
        "Vật tư giao thông khẩn cấp"
      ]
    },
    "special": [
      "Tầng hai của chiếc xe buýt hai tầng đỗ ở góc bãi hoàn toàn mất điện, hàng ghế sau sát cửa sổ nằm ở điểm mù tuần tra dưới mặt đất.",
      "Nhân viên điều độ trực ca lúc giao ca thường ở trong phòng giám sát, việc đi tuần tra sân ngoài rơi vào khoảng trống không người quản lý.",
      "Đèn đường ở rìa bãi xe mờ tối, thân xe buýt cao lớn chắn sáng cực tốt."
    ],
    "events": [
      {
        "id": "evt_lx_bus_last",
        "title": "Tiến vào từ phía sau ở hàng ghế sau tầng hai xe buýt hai tầng đã tắt đèn",
        "场所": "Hàng ghế sau tầng hai xe buýt hai tầng",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa chiếc xe buýt hai tầng đỗ ở góc bãi đang khép hờ, khoang xe tầng hai tối đen như mực, chỉ có ánh đèn đường ngoài cửa sổ hắt vào chút ánh sáng yếu ớt. Dãy ghế liền lưng cao ở hàng cuối cùng rộng rãi êm ái.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi sóng đôi cùng cô ấy ở hàng ghế sau, tựa vào lưng ghế cùng ngắm nhìn cảnh đêm bãi đỗ xe trống trải ngoài cửa sổ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy nằm sấp trên ghế da hàng sau cởi bỏ quần lót, ngay giữa khoang xe tối đen trống trải dùng ngón tay xoa nắn vùng kín, ngắm nhìn cô ấy cắn môi thở dốc trong chiếc xe buýt rộng lớn",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Giữ lấy eo cô ấy bắt nằm sấp trên lưng ghế, từ phía sau đâm dương vật vào hạ thể ướt mượt, ra sức thúc đẩy từ phía sau trong khoang xe tối đen",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_bus_driver",
        "title": "Tương tác khẩu giao dưới gầm bàn làm việc trong phòng điều độ",
        "场所": "Dưới gầm bàn phòng điều độ trực ban",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong phòng điều độ bật ánh đèn yếu ớt, ngoài cửa có tiếng nói chuyện của các tài xế đang giao ca. Bạn ngồi trên chiếc ghế xoay lớn của bàn điều độ, không gian phía dưới chiếc bàn gỗ dày nặng rộng rãi và khuất sáng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đợi các tài xế ngoài cửa đăng ký xong rời đi rồi nắm tay cô ấy an toàn bước ra khỏi phòng điều độ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Dựa dẫm"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Kéo khóa quần ra, bảo cô ấy chui xuống dưới gầm bàn làm việc ngậm lấy dương vật, ngậm trọn nuốt sâu tận họng giữa nhịp tim đập thình thịch khi tài xế ngoài cửa bất cứ lúc nào cũng có thể đẩy cửa vào trả chìa khóa",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "大学城公交枢纽"
  },
  {
    "id": "lx_capsule",
    "name": "Khoang ngủ 24h Tinh Tú",
    "fullName": "Khu Lạc Hà · Khoang ngủ 24h Tinh Tú",
    "district": "Khu Lạc Hà",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khách sạn con nhộng tổ ong mật độ cao nằm sát cạnh làng đại học. Mỗi khoang tàu vũ trụ (khoang con nhộng) độc lập dài hai mét, rộng một mét hai, được trang bị rèm cản sáng hút từ tính và trần khoang ốp gương phản chiếu. Vách ngăn bằng nhựa chỉ dày hai centimet, tiếng trở mình và tiếng ho nhẹ ở khoang bên cạnh nghe rõ mồn một. Bên trong khoang ngủ chật hẹp tột độ và cách âm mỏng manh này rất thích hợp để triển khai bịt miệng ẩn gian và dang rộng chân phô bày dưới trần gương.",
    "draw": "Chợp mắt trong không gian khoang con nhộng. Bịt miệng làm tình dưới vách ngăn nhựa mỏng, tương tác khẩu giao phía bên trong rèm cửa từ tính và tự sướng phô bày dưới trần gương.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh tủ gửi đồ có chuẩn bị sẵn nút bịt tai cách âm, miếng dán hương thơm và nguyên liệu tắm gội du lịch.",
      "materials": [
        "Nút bịt tai cao su non khoang tàu vũ trụ",
        "Miếng dán hương thơm mát lạnh đặt riêng",
        "Vật tư chăn ga dùng một lần",
        "Hóa mỹ phẩm du lịch nhỏ gọn",
        "Túi đồ vệ sinh cá nhân cầm tay"
      ]
    },
    "special": [
      "Trần khoang tàu vũ trụ được trang bị nguyên một mặt gương phản chiếu độ nét cao, nằm trên giường có thể nhìn rõ toàn bộ tư thế cơ thể.",
      "Vách ngăn thành khoang cực mỏng, tiếng trở mình ở khoang bên nghe rõ mồn một, bất kỳ động tĩnh nào cũng bắt buộc phải kiềm chế hết sức.",
      "Rèm cửa hút từ tính sau khi kéo lại cản sáng rất tốt, từ ngoài hành lang không nhìn thấy ánh sáng bên trong."
    ],
    "events": [
      {
        "id": "evt_lx_capsule_tight",
        "title": "Bịt miệng làm tình cạnh vách ngăn nhựa khoang con nhộng",
        "场所": "Trên đệm giường đơn khoang con nhộng",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người chen chúc trong khoang con nhộng chỉ rộng một mét hai, tấm rèm từ tính đã kéo kín mít. Vị khách ở khoang bên cạnh vừa mới trở mình phát ra tiếng động, ngoài hành lang có tiếng bước chân đi dép lê lướt qua. Trong khoang chỉ có ánh đèn sàn màu xanh sẫm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ôm chặt lấy cô ấy trong khoang ngủ chật hẹp, khẽ vỗ nhẹ lưng cô ấy bầu bạn cùng cô ấy nghỉ ngơi",
            "结算": "Độ hảo cảm+20, Tâm trạng→Dựa dẫm"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy nằm sấp trên đệm giường cong mông lên, dùng tay bịt miệng cô ấy lại, giữa cảm giác căng thẳng khi khoang bên bất cứ lúc nào cũng có động tĩnh mà thò tay vuốt ve hạ thể ướt đẫm",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Bế cô ấy đặt ngồi trên đùi bạn, một tay bịt miệng cô ấy lại đâm dương vật vào hạ thể, kìm nén chầm chậm thúc sâu giữa tiếng ngáy ngủ vọng sang từ khoang bên cạnh",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_lx_capsule_mirror",
        "title": "Dang rộng chân tự sướng phô bày dưới trần khoang ốp gương",
        "场所": "Dưới trần gương khoang con nhộng",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Mặt gương nguyên tấm trên trần khoang con nhộng phản chiếu cảnh tượng bên trong khoang ngủ nhỏ hẹp. Ánh đèn trong khoang dịu nhẹ, cô ấy đã cởi giày tất ngồi trên tấm đệm trắng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo chăn giúp cô ấy đắp kín hai chân, tựa vào thành khoang khẽ trò chuyện với cô ấy về kế hoạch ngày mai",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy nằm ngửa trên đệm giường dang rộng hai chân hướng lên trần nhà, vừa nhìn hình ảnh phản chiếu của chính mình trong gương vừa dùng hai tay tách mở môi âm hộ để lộ hạ thể ướt át tự sướng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm tự sướng+1, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "星宿24h太空舱"
  },
  {
    "id": "lx_schoolclinic",
    "name": "Bệnh viện Làng Đại học",
    "fullName": "Khu Lạc Hà · Bệnh viện Làng Đại học",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Khu vật lý trị liệu khoa Tai Mũi Họng trên tầng hai bệnh viện trường đại học. Trang bị phòng khí dung siêu âm độc lập và giường kiểm tra có giá đỡ chân. Khi máy khí dung siêu âm bật lên sẽ phun ra làn sương trắng kèm theo tiếng nước kêu xì xì, tấm rèm ngăn có thể che khuất tầm nhìn. Giá đỡ hai chân của chiếc giường kiểm tra y tế cùng môi trường rèm ngăn rất thích hợp để tiến hành gác cao hai chân khám chạm, tương tác khẩu giao sau rèm và dẫn dụ an thần.",
    "draw": "Vật lý trị liệu khí dung siêu âm. Tương tác khẩu giao sau rèm ngăn khí dung, gác cao hai chân lên giá đỡ kim loại của giường kiểm tra để khám chạm và Play sương thuốc an thần.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trên bàn xử lý vật lý trị liệu có chuẩn bị sẵn dung dịch thuốc khí dung, găng tay y tế và nguyên liệu bông y tế thấm nước.",
      "materials": [
        "Dung dịch khí dung siêu âm y tế",
        "Găng tay y tế vô trùng",
        "Dung dịch tiêm nước muối sinh lý",
        "Vật tư bông y tế thấm nước",
        "Tinh chất thảo mộc làm dịu"
      ]
    },
    "special": [
      "Khi máy khí dung vận hành sẽ liên tục tạo ra làn sương nước dày đặc và tiếng kêu xì xì, bên ngoài không nhìn rõ động tĩnh bên trong rèm.",
      "Giường kiểm tra có lắp giá đỡ chân bằng kim loại, có thể nâng cao và tách rộng hai chân cố định lại.",
      "Phòng pha chế thuốc có dung môi khí dung thảo mộc mang tác dụng làm dịu an thần nhẹ."
    ],
    "events": [
      {
        "id": "evt_lx_clinic_steam",
        "title": "Tương tác khẩu giao sau tấm rèm trắng phòng khí dung",
        "场所": "Bên trong buồng ngăn rèm trắng phòng khí dung",
        "优先级": 61,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Máy khí dung đang không ngừng phun ra làn sương nước màu trắng, tấm rèm trắng che kín mít giường bệnh. Buồng bên cạnh thỉnh thoảng vọng sang tiếng y tá đẩy xe pha thuốc. Cô ấy ngậm mặt nạ khí dung ngồi ở mép giường.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy chỉnh lại mặt nạ cho ngay ngắn, đưa khăn giấy lau đi những giọt sương đọng bên khóe môi cô ấy",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Kéo khóa quần ra, bảo cô ấy quỳ trước giường bên trong rèm ngăn, giữa tiếng máy khí dung kêu xì xì và tiếng bước chân y tá đi lại mà há miệng ngậm lấy dương vật tương tác khẩu giao sâu tận họng",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_lx_clinic_stirrup",
        "title": "Gác cao hai chân lên giá đỡ kim loại giường kiểm tra để khám bằng ngón tay",
        "场所": "Giá đỡ kim loại giường kiểm tra",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Giờ nghỉ trưa khóa cửa phòng vật lý trị liệu đã cài chặt. Giá đỡ chân bằng kim loại ở hai bên giường kiểm tra đã được nâng lên, bên trên trải tấm lót vải không dệt dùng một lần sạch sẽ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy hạ phẳng giá đỡ chân và chỉnh lại quần áo cho ngay ngắn, nắm tay cô ấy ngồi bên giường bầu bạn nghỉ ngơi",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy nằm lên giường kiểm tra gác hai chân lên giá đỡ kim loại tách rộng hết cỡ, đeo găng tay y tế mượn danh nghĩa kiểm tra dùng ngón tay thoa đầy dầu bôi trơn thò sâu vào trong hạ thể khám chạm móc ngoáy",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đứng ngay chính giữa hai giá đỡ chân, giữ lấy đôi chân đang gác cao của cô ấy vươn người đâm vào sâu trong hạ thể, ra sức thúc sâu kết hợp dưới ánh đèn không bóng",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "大学城校医院"
  },
  {
    "id": "qp_visitor",
    "name": "Trung tâm du khách núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Trung tâm du khách núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Sảnh tiếp đón tổng hợp quy mô lớn ở lối vào khu danh thắng. Ban ngày du khách qua lại tấp nập, có khu trưng bày sa bàn, cửa hàng văn hóa sáng tạo và phòng mẹ và bé độc lập. Phòng mẹ và bé được trang bị chốt khóa cửa bằng thép không gỉ và ghế sofa da, phía sau tấm bình phong đứng trong sảnh trưng bày văn hóa sáng tạo tồn tại góc chết tầm nhìn, thích hợp triển khai khóa trái phòng mẹ và bé ẩn gian và mò mẫm dưới đáy váy sau bình phong.",
    "draw": "Tư vấn khu danh thắng và chọn mua đồ lưu niệm văn hóa sáng tạo. Khóa trái phòng mẹ và bé độc lập ẩn gian trên sofa, vuốt ve ngầm dưới đáy váy sau bình phong đứng sảnh văn hóa sáng tạo và Play trên bàn đá cẩm thạch sau giờ đóng cửa.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ đồ văn hóa sáng tạo có chuẩn bị sẵn huy hiệu kỷ niệm, trà ủ lạnh và nguyên liệu thảo mộc đuổi muỗi.",
      "materials": [
        "Huy hiệu văn hóa sáng tạo đặc sắc khu danh thắng",
        "Bản đồ toàn cảnh vẽ tay",
        "Túi trà dại ủ lạnh vùng núi cao",
        "Cao thảo mộc đuổi muỗi tự nhiên",
        "Đồ lưu niệm văn hóa sáng tạo khu danh thắng"
      ]
    },
    "special": [
      "Phòng mẹ và bé có lắp chốt khóa trái bằng thép không gỉ và đèn báo đang sử dụng, bên trong không có camera giám sát bao phủ.",
      "Tấm bình phong đứng cao hai mét phía sau sa bàn toàn cảnh tạo thành góc chết che chắn hoàn toàn.",
      "Tiếng loa phát thanh ở sảnh lớn vang vọng, có thể che lấp động tĩnh cử động nhỏ nhẹ."
    ],
    "events": [
      {
        "id": "evt_qp_visitor_lounge",
        "title": "Khóa trái phòng mẹ và bé độc lập làm tình trên sofa",
        "场所": "Bên trong phòng mẹ và bé độc lập trung tâm du khách",
        "优先级": 64,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chốt cửa phòng mẹ và bé đã khóa trái, ngoài cửa bật đèn báo màu đỏ. Ngoài sảnh lớn vọng vào tiếng loa cầm tay của hướng dẫn viên và tiếng du khách trò chuyện. Trong phòng trang bị ghế sofa da cho con bú, ánh sáng dịu nhẹ.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Rót nước ấm đưa cho cô ấy, ngồi bầu bạn cùng cô ấy nghỉ ngơi trên sofa làm dịu cơn mệt mỏi sau khi leo núi",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy nằm sấp trên ghế sofa vén váy cởi bỏ quần lót, giữa cảm giác căng thẳng khi ngoài cửa bất cứ lúc nào cũng có người gõ cửa mà thò tay vào vùng kín vuốt ve cho tới khi rỉ nước",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Giữ lấy eo cô ấy bắt nằm sấp trên tay vịn ghế sofa, vén đáy váy lên vươn dương vật đâm vào tận đáy, thúc nhanh làm tình giữa tiếng loa phát thanh ngoài sảnh lớn",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_visitor_screen",
        "title": "Mò mẫm dưới đáy váy sau tấm bình phong trong sảnh trưng bày văn hóa sáng tạo",
        "场所": "Phía sau tấm bình phong đứng cỡ lớn khu văn hóa sáng tạo",
        "优先级": 69,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ở khu văn hóa sáng tạo có dựng hai bức bình phong sơn thủy cao lớn, cách đó vài mét có du khách đang chọn mua đồ lưu niệm. Phía sau bức bình phong vừa khéo là một góc chết, chắn sạch toàn bộ tầm nhìn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy bước ra khỏi bức bình phong, tới quầy hàng chọn một chiếc lắc tay văn hóa sáng tạo mà cô ấy thích mua tặng cho cô ấy",
            "结算": "Độ hảo cảm+25, Tiền bạc-120, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Ở phía sau bức bình phong luồn tay vào dưới đáy váy cô ấy vén quần lót sang một bên, giữa tiếng du khách nói chuyện mà vuốt ve hạ thể ướt nóng, bắt cô ấy tựa vào bình phong nhịn chặt tiếng thở dốc",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "青屏山游客中心"
  },
  {
    "id": "qp_camp",
    "name": "Khu cắm trại ngắm sao đỉnh núi",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Khu cắm trại ngắm sao đỉnh núi",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu cắm trại trên đỉnh núi Thanh Bình. Có sàn gỗ dựng trên cao và những căn lều ngắm sao hình cầu, có thể nhìn xuống ánh đèn muôn nhà của toàn thành phố. Khoảng cách giữa các lều chỉ vài mét, vải lều mỏng và truyền âm. Dưới hoàn cảnh tiếng kéo khóa lều bên cạnh và tiếng bước chân đi ngang qua bất cứ lúc nào, rất thích hợp để triển khai phơi bày bóng đổ dưới ánh đèn bão và làm tình không tiếng động bên trong lều.",
    "draw": "Ngắm sao trên đỉnh núi và nhìn xuống cảnh đêm thành phố. Điều giáo bóng đổ lên vải lều dưới ánh đèn bão, ẩn gian giữa tiếng nói chuyện của lều bên cạnh bên trong căn lều mỏng và đón gió đêm trên đài ngắm cảnh.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh đường ván gỗ khu cắm trại có thể thu thập tinh dầu lá thông, que phát sáng và nguyên liệu hoa khô.",
      "materials": [
        "Tiêu bản hoa dại vùng núi cao",
        "Nhiên liệu dã ngoại chống gió",
        "Que phát sáng cắm trại",
        "Tinh dầu lá thông vùng núi cao",
        "Vật tư dã ngoại khu cắm trại"
      ]
    },
    "special": [
      "Lều nylon một lớp khi thắp đèn bão ở bên trong sẽ chiếu rõ nét đường nét cơ thể lên mặt vải lều.",
      "Các lều cách nhau chỉ vài mét, tiếng bước chân đi lại và tiếng kéo khóa nghe rõ mồn một, mọi động tĩnh đều bắt buộc phải kiềm chế hết mức.",
      "Rìa sàn gỗ vươn ra ngoài quay lưng lại với khu công cộng, đêm khuya nằm ở góc chết không ánh đèn."
    ],
    "events": [
      {
        "id": "evt_qp_camp_tent",
        "title": "Ẩn gian bên trong căn lều mỏng giữa tiếng bước chân lều bên cạnh",
        "场所": "Trên đệm hơi lều hình cầu",
        "优先级": 65,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Kéo khóa lều lại, trên tấm đệm hơi có trải túi ngủ. Ngoài lều rừng thông xào xạc trong gió đêm, từ căn lều bên cạnh vọng sang tiếng những du khách khác khẽ trò chuyện và tiếng kéo khóa. Trong lều chỉ có một ngọn đèn bão ánh sáng yếu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Chui vào trong túi ngủ ôm cô ấy vào lòng, nhìn qua khung cửa sổ trong suốt trên đỉnh lều cùng ngắm bầu trời sao trên đỉnh núi",
            "结算": "Độ hảo cảm+25, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Dưới lớp túi ngủ tụt quần lót của cô ấy ra vuốt ve hạ thể ướt át, giữa sự kích thích khi lều bên cạnh bất cứ lúc nào cũng có thể nghe thấy động tĩnh mà bắt cô ấy bịt miệng kìm nén tiếng thở dốc",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Vén túi ngủ ra bảo cô ấy nằm sấp trên tấm thảm chống ẩm, từ phía sau đâm dương vật vào hạ thể, nương theo tiếng gió và tiếng nói chuyện ngoài lều mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_camp_shadow",
        "title": "Điều giáo bóng đổ lên vải lều dưới ánh đèn bão chiếu rọi",
        "场所": "Tiền sảnh nylon mặt trong lều",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong lều thắp ngọn đèn bão cắm trại độ sáng cao, khi áp sát vào mặt trong thì đường nét cơ thể sẽ bị chiếu rõ mồn một lên lớp vải lều ngoài bán trong suốt, người đi ngang qua bên ngoài có thể nhìn thấy thấp thoáng bóng đổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Vặn nhỏ ánh sáng đèn bão, lấy áo khoác đắp lên người cô ấy rồi kéo cô ấy quay lại giữa lều",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi sạch quần áo áp sát lên mặt vải lều nylon dang rộng hai chân làm tư thế ngồi xổm xuống, chiếu trọn vẹn cái bóng lên lối đi khu cắm trại, dùng tay vuốt ve âm vật tự sướng ngay tại chỗ",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "山顶星空露营基地"
  },
  {
    "id": "qp_fall",
    "name": "Thác Thanh Long núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Thác Thanh Long núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Thác nước khổng lồ đổ xuống hẻm núi có độ chênh lệch độ cao năm mươi mét, dòng nước đổ ầm ầm rơi thẳng xuống đầm sâu, tiếng nước lên tới 80 decibel. Hốc lõm trên vách đá dựng đứng phía sau thác nước là một hành lang đá động Thủy Liêm khô ráo, được bức màn nước cuộn trào che khuất hoàn toàn. Bên trong động Thủy Liêm tiếng nước nổ vang trời, tầm nhìn bị bức màn thác trắng xóa cắt đứt, thích hợp triển khai ướt đẫm người tự sướng dưới màn sương nước và thúc sâu trên tảng đá lớn sau màn nước.",
    "draw": "Thưởng ngoạn cảnh thác nước hẻm núi. Ướt đẫm quần áo cởi cúc tự sướng giữa màn sương nước ngập trời, làm tình ngoài trời trên tảng đá lớn trong động Thủy Liêm dưới sự che chở của tiếng thác đổ ầm ầm và nghịch nước suối trong ở bãi cạn.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong các khe nứt ẩm ướt trên vách đá thác nước có thể thu thập thạch hộc hoang dã, sương ngưng tụ và nguyên liệu đá khoáng.",
      "materials": [
        "Quặng khoáng thủy sinh đầm sâu dưới thác nước",
        "Mảnh thạch hộc ưa bóng râm trên vách đá",
        "Sương ngưng tụ từ màn sương nước siêu mịn",
        "Nước suối đầm sâu vùng núi cao",
        "Nguyên liệu khoáng vật tự nhiên"
      ]
    },
    "special": [
      "Tiếng nước thác đổ vang rền điếc tai, phía sau màn nước dù có la hét lớn tiếng thì bên ngoài cũng hoàn toàn không nghe thấy.",
      "Bên trong động Thủy Liêm khô ráo bằng phẳng, màn nước phía ngoài tạo thành bức tường chắn tầm nhìn màu trắng tự nhiên.",
      "Màn sương nước bắn tung tóe có thể làm ướt đẫm hoàn toàn quần áo chỉ trong vòng hai phút."
    ],
    "events": [
      {
        "id": "evt_qp_fall_wet",
        "title": "Quần áo ướt đẫm cởi cúc tự sướng giữa màn sương nước ngập trời",
        "场所": "Đường ván gỗ ngắm cảnh bên đầm sâu",
        "优先级": 59,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đứng trên đường ván gỗ sát cạnh đầm sâu, màn sương nước bắn tung tóe ngập trời phả thẳng vào mặt, quần áo nhanh chóng bị hơi nước làm ướt đẫm dính chặt vào người.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Bung ô chắn bọt nước giúp cô ấy, lấy khăn giấy giúp cô ấy lau khô những giọt nước trên mặt",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+10, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Bảo cô ấy cởi cúc chiếc áo trên đã bị ướt đẫm dính sát vào người để lộ bầu ngực, mặc cho làn sương nước mát lạnh xối rửa đôi gò bồng đảo, dùng hai tay xoa nắn đầu ngực ướt át đang dựng đứng",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_qp_fall_cave",
        "title": "Làm tình trên tảng đá trong động Thủy Liêm dưới sự che chở của tiếng thác nổ vang",
        "场所": "Tảng đá lớn sâu trong động Thủy Liêm thác nước",
        "优先级": 69,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào hang đá vách núi phía sau thác nước, trước mắt là bức màn nước màu trắng buông rủ, tiếng nổ ầm ầm khổng lồ vang rền điếc tai. Tảng đá trong hang bằng phẳng khô ráo, du khách bên ngoài chỉ có thể nhìn thấy bức màn nước trắng xóa.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cùng cô ấy tựa vào vách đá, nhìn xuyên qua bức màn nước cuộn trào ngắm cầu vồng bên ngoài và toàn cảnh thung lũng",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy nằm sấp trên tảng đá lớn bằng phẳng cong mông lên, thò tay vuốt ve hạ thể ướt mượt, nói cho cô ấy biết dưới tiếng nước khổng lồ này dù có kêu gào thỏa thích cũng chẳng ai nghe thấy",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Nương theo tiếng nước chảy nổ vang trời, từ phía sau đâm dương vật vào sâu trong hạ thể, ra sức thúc đẩy làm tình trên tảng đá phía sau bức màn nước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏山青龙瀑布"
  },
  {
    "id": "qp_temple",
    "name": "Thiền viện cổ tự Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Thiền viện cổ tự Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "culture",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Tịnh viện chùa cổ ngàn năm. Chánh điện khói hương nghi ngút, sân sau có trà thất thiền ý và tinh xá ngồi thiền. Phía sau bức màn trướng Phật bằng gấm ở điện phụ cùng đệm bồ đoàn trong thiền phòng tĩnh tu có khung cảnh u tĩnh. Dưới bầu không khí tiếng mõ tụng kinh và hương trầm lan tỏa, rất thích hợp để triển khai vén váy ẩn gian sau màn trướng Phật và tương tác tình thú cún con mức độ nhẹ trên đệm bồ đoàn.",
    "draw": "Dâng hương cầu phúc và ngồi thiền tại chùa cổ. Vén váy ẩn gian sau bức màn vàng chạm đất ở điện phụ, tương tác khẩu giao tình thú cún con trên đệm bồ đoàn thiền phòng và Play hương trầm an thần.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Cạnh bàn hương kinh đường có chuẩn bị sẵn bột trầm hương, hạt bồ đề và nguyên liệu nước suối ngọt giếng cổ.",
      "materials": [
        "Bột trầm hương núi già hạng đặc biệt",
        "Hạt bồ đề thô từ chùa cổ",
        "Nước suối trong từ giếng cổ ngàn năm",
        "Hoa khô dâng cúng trước Phật",
        "Nguyên liệu bột hương thiền nguyên chất"
      ]
    },
    "special": [
      "Hai bên bệ thờ ở điện phụ có treo bức màn gấm màu vàng dày rủ chạm đất, phía sau màn thông tới phòng tối cất giữ kinh văn, hầu như không có khách hành hương bước vào.",
      "Hương trầm an thần của ngôi chùa cổ kết hợp với nhịp mõ đều đặn có hiệu quả tĩnh tâm thư giãn cực tốt.",
      "Thiền phòng tĩnh tu ở sân sau được trang bị đệm bồ đoàn bện cỏ dày và chốt cài gỗ, có thể khóa trái từ bên trong."
    ],
    "events": [
      {
        "id": "evt_qp_temple_incense",
        "title": "Tương tác tình thú cún con trên đệm bồ đoàn thiền phòng",
        "场所": "Trên đệm bồ đoàn thiền phòng tĩnh tu sân sau",
        "优先级": 60,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong tinh xá tĩnh tu đang đốt một lư trầm hương an thần, làn khói xanh lượn lờ. Ngoài cửa vọng lại tiếng gõ mõ nhịp nhàng của nhà sư. Trên mặt đất trải những chiếc đệm bồ đoàn bện cỏ dày êm ái.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Quỳ ngồi sóng đôi trên chiếc đệm bồ đoàn cạnh cô ấy, nhắm mắt chắp tay cầu phúc cho tương lai của hai người",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Kéo khóa quần ra, bảo cô ấy bò phục xuống trên đệm bồ đoàn giống như một chú cún con, dùng gò má cọ vào bắp chân bạn, há miệng ngậm dương vật vào trong miệng mút nuốt tương tác",
            "结算": "Độ thuận tùng+30, Độ ham muốn+20, Kinh nghiệm nhập vai tình thú+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_qp_temple_curtain",
        "title": "Vén váy ẩn gian sau bức màn Phật bằng gấm ở điện phụ",
        "场所": "Phía sau bức màn vàng bệ thờ điện phụ",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chính giữa điện phụ thờ tượng Phật, trong điện rất ít khách hành hương. Hai người lách mình bước vào phía sau bức màn gấm màu vàng dày nặng rủ chạm đất ở hai bên bệ thờ, cách đó vài mét ở chánh điện thỉnh thoảng vang lên tiếng khách hành hương quỳ lạy xin xăm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại quần áo cho ngay ngắn, nắm lấy bàn tay nhỏ của cô ấy khẽ bước ra khỏi bức màn cùng đi lễ ở chánh điện",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy chống hai tay lên khung gỗ bệ thờ cong mông lên, giữa tiếng quỳ lạy của khách hành hương mà vén váy đâm ngón tay vào hạ thể ướt át móc ngoáy, ngắm nhìn cô ấy nhẫn nại tiếng thở dốc",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Giữ lấy vòng eo cô ấy đang tựa trên khung gỗ, cởi quần lót từ phía sau đâm trọn cả cây dương vật vào hạ thể, ra sức thúc đẩy từ phía sau dưới sự che chở của tiếng mõ tụng kinh",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏古刹禅院"
  },
  {
    "id": "qp_cycle",
    "name": "Đường đạp xe núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Đường đạp xe núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Tuyến đường nhựa dành cho xe đạp chuyên nghiệp uốn lượn men theo núi Thanh Bình đi lên. Dọc đường có đài ngắm cảnh, nhà gỗ tiếp sức và lan can khúc cua gấp. Hai bên đường cây cối rậm rạp, thường có người đạp xe leo dốc tại đây. Đài ngắm cảnh bỏ hoang ở phía ngoài khúc cua bị cây cối che khuất hoàn toàn, vào khung giờ buổi chiều hầu như không có xe đi qua, là cứ điểm để tiến hành thử nghiệm trang phục thể thao và phơi bày ngoài trời.",
    "draw": "Đạp xe trên đường núi uốn lượn, nhìn xuống rừng núi. Vén váy tiến vào từ phía sau trước lan can đài ngắm cảnh, cắt rỗng đũng quần đạp xe bó sát thả rông đạp xe và Play trên ghế dài nhà gỗ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại điểm tiếp sức và cạnh rừng cây ven đường có thể thu thập quả dại, gel năng lượng cùng nguyên liệu thảo dược hoang dã.",
      "materials": [
        "Quả mọng hoang dã vùng núi cao",
        "Nguyên liệu vải chắn gió thể thao",
        "Gel tiếp năng lượng cầm tay",
        "Nguyên liệu nhóm thảo dược hoang dã",
        "Vật tư vải sợi dệt"
      ]
    },
    "special": [
      "Đài ngắm cảnh bỏ hoang ở phía ngoài khúc cua tay áo liên tiếp được rừng cây sa mộc che chắn kín mít, bên ngoài không thể nhìn thấy bên trong.",
      "Chất liệu vải của bộ đồ đạp xe liền thân có độ đàn hồi cao và ôm sát cơ thể, sau khi cắt rỗng phần đũng quần có thể áp sát trực tiếp lên yên xe cứng.",
      "Buổi chiều từ một giờ đến ba giờ lưu lượng xe trên đường cực ít, tồn tại khoảng thời gian dài không có người quản lý."
    ],
    "events": [
      {
        "id": "evt_qp_cycle_pant",
        "title": "Cắt rỗng đũng bộ đồ đạp xe bó sát để thả rông đạp xe",
        "场所": "Điểm dừng xe dưới bóng cây khúc cua tay áo",
        "优先级": 62,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đạp xe dừng lại nghỉ ngơi dưới bóng cây ở khúc cua tay áo. Gió núi thổi qua ngọn cây, xung quanh không có người đạp xe nào khác đi ngang qua. Cô ấy đứng dạng chân cạnh chiếc xe đạp cầm bình nước uống, lau những giọt mồ hôi trên trán.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa khăn bông giúp cô ấy lau mồ hôi, giúp cô ấy xoa bóp thả lỏng cơ bắp chân, nghỉ ngơi một lát rồi tiếp tục lên đường",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Dùng kéo cắt rỗng miếng đệm đũng của chiếc quần đạp xe bó sát của cô ấy, bắt cô ấy nửa thân dưới thả rông ngồi dạng chân lên chiếc yên xe cứng để đạp xe, tiếp tục đạp về phía trước giữa sự ma sát của yên xe",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_qp_cycle_rail",
        "title": "Đứng tiến vào từ phía sau trước lan can kim loại đài ngắm cảnh",
        "场所": "Cạnh lan can kim loại đài ngắm cảnh",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước tới rìa đài ngắm cảnh cũ được cây cối che khuất, trước mặt là lan can an toàn bằng kim loại, phía dưới là hẻm núi thoáng đãng. Trên đường núi tạm thời không có tiếng xe cộ. Cô ấy đặt hai tay lên lan can ngắm phong cảnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau ôm lấy vòng eo cô ấy, cùng nhau tựa vào lan can đón gió núi ngắm cảnh núi rừng",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt lan can cong mông lên, kéo quần cô ấy xuống, từ phía sau thò tay vuốt ve hạ thể ướt át, ngắm nhìn cô ấy hướng về phía hẻm núi cắn môi nhẫn nại",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Kéo quần cô ấy xuống bảo cô ấy vịn chắc lan can, từ phía sau đâm dương vật vào hạ thể ướt mềm, đón làn gió núi trực tiếp thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_cycle_hut",
        "title": "Làm tình trên ghế dài trong nhà gỗ tiếp sức giữa rừng",
        "场所": "Bên trong nhà gỗ tiếp sức không người",
        "优先级": 74,
        "trigger": {
          "时段": [
            "暮"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trạm dừng chân nhà gỗ đơn sơ bên đường không một bóng người, sau khi khép cửa gỗ lại ánh sáng hơi mờ tối. Trong nhà đặt chiếc ghế gỗ dài, ngoài cửa sổ có thể nghe thấy tiếng côn trùng kêu. Cô ấy ngồi trên ghế dài tựa vào vách gỗ nghỉ ngơi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi cạnh cô ấy đưa thanh năng lượng, cùng cô ấy nghỉ ngơi trong căn nhà gỗ yên tĩnh",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy nằm xuống ghế dài tách hai chân ra, cầm miệng chai nước khoáng mát lạnh áp lên âm vật đang dựng đứng của cô ấy xoay vòng kích thích, ngắm nhìn cô ấy rùng mình vì lạnh",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Bảo cô ấy gác hai chân lên lưng ghế dài, vươn dương vật đâm vào sâu trong hạ thể, thúc mạnh trước sau trong căn nhà gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏山骑行道"
  },
  {
    "id": "qp_glass",
    "name": "Cầu kính núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Cầu kính núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Đường ván kính trong suốt trên cao được xây dựng bám sát vào vách đá dựng đứng của núi Thanh Bình. Treo lơ lửng ở độ cao hàng trăm mét giữa không trung, dưới chân là vực sâu thăm thẳm và biển rừng. Chiều tối sau khi giải tán du khách đã về hết, điểm mù hang đá lõm vào trong của đường ván kính tránh khỏi tầm nhìn từ hai đầu trước sau, là địa điểm tận dụng cảm giác lơ lửng trên cao để tiến hành phơi bày và tiến vào từ phía sau.",
    "draw": "Ngắm cảnh trên đường ván kính trong suốt trên cao. Quỳ chống tay dang rộng hai chân tự sướng trên mặt kính trong suốt hoàn toàn, tiến vào từ phía sau trong hang đá lõm vào vách núi và Play phơi bày trên cao sau giờ đóng cửa.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh vách đá và hộp dụng cụ có thể thu thập hoa khô trên cao, nước ngưng tụ và nguyên liệu quặng khoáng.",
      "materials": [
        "Hoa khô mọc trên vách đá dựng đứng",
        "Vải chuyên dụng làm bọc giày chống trượt",
        "Giọt nước ngưng tụ trên tầng không cao",
        "Nguyên liệu tinh thể quặng khoáng",
        "Vật tư chịu thời tiết"
      ]
    },
    "special": [
      "Mặt sàn bằng kính cường lực trong suốt hoàn toàn có tầm nhìn xuyên thấu, cúi đầu xuống có thể nhìn thẳng xuống vực sâu.",
      "Đoạn giữa đường ván kính có hang đá lõm vào trong, từ hai đầu trước sau không thể nhìn thẳng vào bên trong hang.",
      "Chiều tối lúc năm giờ sau khi cổng xoay giải tán khách đóng lại, đường ván kính rơi vào trạng thái không có người tuần tra."
    ],
    "events": [
      {
        "id": "evt_qp_glass_crawl",
        "title": "Quỳ chống tay dang rộng hai chân tự sướng trên mặt sàn kính trong suốt",
        "场所": "Ngay chính giữa đường ván kính trong suốt",
        "优先级": 64,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước tới chính giữa con đường ván kính trong suốt treo lơ lửng, dưới chân là hẻm núi vách đá cao hàng trăm mét. Cô ấy dùng hai tay vịn vào vách đá chầm chậm di chuyển, nhìn vực sâu dưới chân mà lòng hơi hoảng sợ.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Nắm lấy tay cô ấy che chở cho cô ấy ở phía bên trong, dẫn cô ấy đi qua đoạn đường kính trong suốt một cách vững vàng",
            "结算": "Độ hảo cảm+25, Thể lực đối tượng+10, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy bước ra chính giữa đường ván kính cởi bỏ váy và quần lót, quỳ chống tay dang rộng hai chân ngay trên mặt sàn trong suốt hoàn toàn, vừa cúi đầu nhìn vực sâu dưới chân vừa dùng ngón tay móc ngoáy hạ thể tự sướng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_qp_glass_cave",
        "title": "Đè vào tường tiến vào từ phía sau trong hang đá lõm vào vách núi",
        "场所": "Góc chết hang đá lõm vào vách núi dựng đứng",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Nấp vào bên trong hang đá lõm sâu hai mét ở đoạn giữa đường ván kính. Phía trước là lan can trong suốt và khoảng không trên cao, hai bên là vách đá thô ráp. Tiếng còi báo giờ đóng cửa vang lên ở phía xa, trên đường ván kính đã không còn du khách nào khác. Cô ấy dựa lưng vào vách đá đứng đó.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Khoác áo ngoài lên người cô ấy, cùng cô ấy ngồi sóng đôi trên phần đá nhô ra ngắm ráng chiều phía xa",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy chống hai tay lên vách đá cong mông lên, vén váy cởi bỏ quần lót, thò tay luồn vào trong hạ thể ướt đẫm thúc ngoáy nhanh, ép cô ấy vừa nhìn khoảng không trên cao bên ngoài vừa nhịn chặt tiếng kêu",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay chống vào vách đá, từ phía sau đâm dương vật vào hạ thể ướt mềm, đón tầm nhìn trên cao bên ngoài mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏山玻璃栈道"
  },
  {
    "id": "qp_farm",
    "name": "Quán nông gia củi lửa Dưới Rừng",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Quán nông gia củi lửa Dưới Rừng",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Quán ăn nông gia bếp củi lớn vùng quê nằm dưới chân núi Thanh Bình. Nổi bật với món gà hầm bếp đất đun củi và rượu gạo ngũ cốc thuần túy. Nhà chứa củi ở sân sau chất đống hàng loạt rơm khô, cửa gỗ có lắp chốt cài trong; sảnh trước thực khách cụng ly ồn ào náo nhiệt, trên đống rơm trong nhà chứa củi ở sân sau rất thích hợp để tiến hành tiến vào từ phía sau và tương tác nóng bừng khi hơi say.",
    "draw": "Thưởng thức gà hầm bếp đất đun củi, rượu gạo thủ công. Tiến vào từ phía sau trên đống rơm trong nhà chứa củi sân sau, đổ rượu lên bàn gỗ cũ tự sướng và Play chợp mắt nơi thôn dã.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ hàng sân sau và trong nhà chứa củi có chuẩn bị sẵn nấm ăn, rượu nếp và nguyên liệu nhựa thông.",
      "materials": [
        "Nấm ăn phơi gió núi rừng",
        "Rượu nếp ngũ cốc thuần túy nhà nông tự ủ",
        "Nhựa gỗ thông khô",
        "Tương ớt nhà nông đặc chế",
        "Nguyên liệu nhóm lương thực"
      ]
    },
    "special": [
      "Nhà chứa củi ở sân sau chất đầy rơm khô êm xốp, cửa gỗ có chốt cài trong bằng gỗ thịt, từ bên ngoài không thể đẩy mở.",
      "Tiếng quạt thổi bếp đất ở sân trước cùng tiếng thực khách oẳn tù tì khá lớn, có thể che lấp tiếng động ở sân sau.",
      "Rượu gạo tự ủ có vị ngọt thanh nhưng hậu vị mạnh, sau khi uống vào rất dễ làm toàn thân nóng ran."
    ],
    "events": [
      {
        "id": "evt_qp_farm_straw",
        "title": "Tiến vào từ phía sau trên đống rơm êm xốp trong nhà chứa củi sân sau",
        "场所": "Bên trong nhà chứa củi rơm ở sân sau",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đi qua cánh cửa nhỏ bước vào nhà chứa củi ở sân sau rồi cài chốt gỗ lại. Trong nhà chất đống rơm khô màu vàng óng dày dặn, tỏa ra mùi thơm thảo mộc. Từ sảnh trước vọng lại tiếng cụng ly cười đùa thấp thoáng. Cô ấy đứng cạnh đống rơm phủi bụi trên tay.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại vạt áo cho ngay ngắn, nắm tay cô ấy quay về phòng riêng ở sảnh trước chuẩn bị dùng bữa",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy nằm sấp trên đống rơm êm xốp vén váy cởi bỏ quần lót, đưa tay vỗ nhẹ hai cái lên cặp mông trần của cô ấy, ngay sau đó luồn ngón tay vào hạ thể ướt nóng móc ngoáy",
            "结算": "Độ thuận tùng+30, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp trên đống rơm cong mông lên, kéo khóa quần từ phía sau đâm dương vật vào tận đáy, ra sức thúc đẩy từ phía sau trên đống rơm êm ái",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_qp_farm_wine",
        "title": "Đổ rượu gạo lên rốn và vùng kín tự sướng",
        "场所": "Cạnh bàn gỗ dài trong nhà chứa củi",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Sau khi uống hai bát rượu gạo nóng, gò má cô ấy ửng hồng, bước chân hơi lảo đảo tựa vào cạnh chiếc bàn gỗ dài trong nhà chứa củi. Trên bàn đặt chiếc bát sứ thô đựng rượu gạo ngọt.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Rót một cốc nước lọc ấm đút cho cô ấy uống, dìu cô ấy ngồi xuống ghế dài nghỉ ngơi cho tỉnh rượu",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy nằm ngửa trên chiếc bàn gỗ dài cởi áo trên và váy ra, đổ rượu gạo hơi ấm lên rốn và gò mu của cô ấy, bắt cô ấy tự dùng ngón tay chấm rượu ngọt xoa nắn âm vật tự sướng",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Kinh nghiệm tự sướng+1, Trạng thái bất thường+Hơi say, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bế cô ấy đặt lên bàn gỗ tách hai chân gác lên hông bạn, vươn dương vật đâm vào âm đạo ướt nóng, sải bước thúc mạnh trước sau trên mặt bàn gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "林下柴火农家乐"
  },
  {
    "id": "dt_kart",
    "name": "Câu lạc bộ đua xe Go-Kart Tốc Đằng",
    "fullName": "Khu Đông Đường · Câu lạc bộ đua xe Go-Kart Tốc Đằng",
    "district": "Khu Đông Đường",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Câu lạc bộ xe đua Go-kart chuyên nghiệp ngoài trời quy mô lớn. Sở hữu đường đua trải nhựa dài hàng ngàn mét và xe Go-kart đôi thi đấu. Mũi xe đôi có lắp camera hành trình góc rộng Full HD; khu vực bảo dưỡng sau khi kéo cửa cuốn xuống sẽ ngăn cách hoàn toàn với bên ngoài. Dưới hoàn cảnh xóc nảy khi ôm cua tốc độ cao và camera phía trước ghi hình suốt hành trình, đây là địa điểm để tiến hành chụp lén qua camera hành trình và Play thả rông trong bộ đồ đua xe.",
    "draw": "Đua xe Go-kart ngoài trời, ôm cua drift. Tự sướng quay lén trước camera hành trình gắn mũi xe Go-kart đôi, kéo khóa bộ đồ đua xe bó sát xuống tận đáy và tiến vào từ phía sau trong gara bảo dưỡng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Cạnh bàn làm việc trong phòng bảo dưỡng và giá để lốp xe có chuẩn bị sẵn dầu nhớt, hạt cao su và nguyên liệu vá sợi carbon.",
      "materials": [
        "Dầu nhớt độ nhớt cao chuyên dụng cho xe đua",
        "Hạt vụn cao su lốp xe nóng chảy",
        "Vật liệu bảo hộ sợi carbon",
        "Vật tư găng tay đường đua",
        "Chất tẩy rửa công nghiệp"
      ]
    },
    "special": [
      "Mũi xe Go-kart đôi được trang bị camera hành trình 4K góc rộng, hướng thẳng vào vị trí ghế phụ hàng trước.",
      "Khung gầm xe Go-kart không có hệ thống giảm xóc, khi ôm cua xóc nảy thân xe rung chấn cực mạnh.",
      "Buổi tối sau khi cửa cuốn kho bảo dưỡng khóa chặt, bên trong che chắn hoàn toàn tầm nhìn."
    ],
    "events": [
      {
        "id": "evt_dt_kart_dashcam",
        "title": "Kéo khóa áo tự sướng trước ống kính camera hành trình mũi xe Go-kart đôi",
        "场所": "Ghế phụ xe Go-kart đôi trên đường đua",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya bao trọn đường đua đèn lớn đã tắt, chiếc xe Go-kart đôi đỗ ở khu vực xuất phát, đèn đỏ trên camera hành trình ở mũi xe bật sáng đang ở trạng thái ghi hình. Cô ấy mặc bộ đồ đua xe liền thân ngồi ở ghế phụ đã đội sẵn mũ bảo hiểm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy thắt chặt dây an toàn bốn điểm, đạp chân ga chở cô ấy lượn vòng hóng gió trong làn gió đêm mát rượi",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy kéo thẳng khóa kéo dài phía trước bộ đồ đua xe xuống tận dưới rốn để lộ hoàn toàn bầu ngực, vừa thò tay tự sướng giữa nhịp xóc nảy khi xe chạy và ống kính 4K mũi xe đang ghi hình, vừa hướng vào ống kính phô bày dáng vẻ động tình",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Ngay dưới ống kính camera hành trình ở mũi xe đang quay trọn ghế phụ suốt hành trình, cởi quần cô ấy ra bế cô ấy ngồi dạng chân lên người bạn, vươn người đâm vào hạ thể nương theo độ xóc nảy của thân xe mà ra sức thúc mạnh",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_kart_garage",
        "title": "Đè lên chồng lốp xe tiến vào từ phía sau bên trong cửa cuốn đóng kín của phòng bảo dưỡng",
        "场所": "Cạnh chồng lốp xe trong phòng bảo dưỡng",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cánh cửa cuốn kim loại của kho bảo dưỡng đã kéo kịch xuống đáy và cài chốt, bên trong kho chất từng chồng lốp xe cao su nóng chảy màu đen cao vút. Bốn phía tràn ngập mùi dầu máy. Cô ấy đứng cạnh chồng lốp xe xoa bóp cánh tay đang mỏi nhừ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy ngồi xuống ghế đua xe, giúp cô ấy tháo chiếc mũ bảo hiểm nặng nề ra và đưa đồ uống nóng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=610",
            "选项": "让她双手按在一米高的轮胎堆上撅起屁股，拉下她的裤子从身后把肉棒插进湿热的阴道，在封闭的车库里快速后入撞击",
            "结算": "性欲度重置, 顺从度+40, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Bảo cô ấy chống hai tay lên chồng lốp xe cao một mét cong mông lên, kéo quần cô ấy xuống từ phía sau đâm dương vật vào âm đạo ướt nóng, thúc nhanh từ phía sau trong gara khép kín",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "速腾卡丁车俱乐部"
  },
  {
    "id": "dt_drive",
    "name": "Trung tâm đào tạo lái xe An Đạt",
    "fullName": "Khu Đông Đường · Trung tâm đào tạo lái xe An Đạt",
    "district": "Khu Đông Đường",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Cơ sở đào tạo và sát hạch lái xe cơ giới quy mô lớn. Đỗ hàng trăm chiếc xe tập lái màu trắng có dán phim cách nhiệt chống nổ sẫm màu. Buổi trưa khi huấn luyện viên nghỉ trưa và buổi tối sau giờ tan tầm, chỗ râm mát dưới bóng cây khu vực đỗ xe ghép ngang hẻo lánh nằm ở điểm mù camera giám sát, ghế phụ có thể hạ phẳng hoàn toàn, thích hợp triển khai khẩu giao sâu tại điểm mù dưới bàn đạp ga phanh và làm tình trên xe khi hạ phẳng ghế.",
    "draw": "Tập lái xe mô phỏng thi bằng lái. Khẩu giao sâu tại điểm mù bàn đạp phía dưới vô lăng ghế lái, hạ phẳng hoàn toàn ghế phụ làm tình trên xe và đè xuống ẩn gian ở ghế sau.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong hộc để găng tay và phòng điều độ có chuẩn bị sẵn thẻ chấm công, túi than tre và nguyên liệu vật tư trên xe.",
      "materials": [
        "Bọc vô lăng chống trượt trên xe",
        "Thẻ chấm công tính giờ trường dạy lái xe",
        "Túi than tre khử mùi trên xe",
        "Biển phản quang khẩn cấp giao thông",
        "Phụ tùng hao mòn ô tô"
      ]
    },
    "special": [
      "Hàng ghế sau và cửa kính sau của xe tập lái có dán phim cách nhiệt một chiều sẫm màu, từ bên ngoài không nhìn rõ bên trong xe.",
      "Bóng cây trong cùng của khu vực đỗ xe ghép ngang nằm ở điểm mù của camera giám sát cầu.",
      "Ghế phụ có thể hạ phẳng hoàn toàn một trăm tám mươi độ thông liền với hàng ghế sau."
    ],
    "events": [
      {
        "id": "evt_dt_drive_pedal",
        "title": "Khẩu giao sâu tại điểm mù bàn đạp phía dưới vô lăng ghế lái",
        "场所": "Dưới bàn đạp ghế lái xe tập lái",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc xe tập lái đỗ ngay trong ô đỗ xe ghép ngang, bạn ngồi ở ghế lái tay đặt trên vô lăng. Phía trước cách đó không xa có nhân viên an toàn đang đi lại tuần tra. Cô ấy ngồi ở ghế phụ đang thắt dây an toàn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kiên nhẫn chỉ dẫn giúp cô ấy góc nhìn gương chiếu hậu khi lùi xe và thời điểm đánh lái, hướng dẫn cô ấy tập thuần thục bài lùi chuồng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Cởi khóa quần lấy dương vật ra, bảo cô ấy tháo dây an toàn chui xuống khoảng trống bàn đạp phía dưới vô lăng, ngậm dương vật vào miệng nuốt sâu tận họng giữa cảm giác tim đập thình thịch khi nhân viên an toàn bất cứ lúc nào cũng có thể bước lại gần cửa sổ xe",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_dt_drive_flat",
        "title": "Hạ phẳng lưng ghế phụ một trăm tám mươi độ làm tình trên xe",
        "场所": "Trên ghế phụ đã hạ phẳng của xe tập lái",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Buổi trưa huấn luyện viên nghỉ trưa, trong sân tập không có chiếc xe nào khác đang chạy. Lưng ghế phụ đã được cần gạt hạ phẳng hoàn toàn, trong xe dán phim cách nhiệt sẫm màu. Cô ấy ngồi trên ghế phụ xoa bóp bắp chân đang mỏi nhừ vì đạp chân côn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa chai nước mát, giúp cô ấy xoa bóp thả lỏng cơ bắp chân, để cô ấy nằm trên chiếc ghế đã hạ phẳng nhắm mắt chợp mắt một lát",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "脱掉她的裙子和内裤让她仰躺在放平的副驾上，分开双腿挺身插入湿热的下体，在深色车膜遮挡下用力前后抽插引起车体轻晃",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Cởi bỏ váy và quần lót của cô ấy bảo cô ấy nằm ngửa trên ghế phụ đã hạ phẳng, tách hai chân vươn người đâm vào hạ thể ướt nóng, dưới sự che chắn của lớp phim dán kính sẫm màu mà ra sức thúc đẩy trước sau làm thân xe khẽ rung lắc",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "安达驾培基地"
  },
  {
    "id": "dt_fish",
    "name": "Khu câu cá giải trí Thiên Đảo Thủy Vận",
    "fullName": "Khu Đông Đường · Khu câu cá giải trí Thiên Đảo Thủy Vận",
    "district": "Khu Đông Đường",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu hồ câu cá giải trí nước ngọt quy mô lớn. Dọc bờ hồ xây những bệ gỗ vươn ra mặt nước và những chiếc ô câu cá cỡ lớn có rèm chắn muỗi rủ chạm đất. Ban đêm mặt nước tối đen, phía xa chỉ có chiếc phao câu điện tử phát sáng ban đêm ánh lên sắc xanh lục mờ ảo. Sau khi tấm rèm chắn muỗi chạm đất buông xuống, bên trong tạo thành không gian khép kín, thích hợp tiến hành tương tác khẩu giao không tiếng động và làm tình ngoài trời từ phía sau trên bệ gỗ câu cá.",
    "draw": "Câu cá đêm ở hồ chứa nước. Tương tác khẩu giao không tiếng động bên trong rèm chắn muỗi của chiếc ô câu cá lớn chạm đất, đón gió tiến vào từ phía sau trên bệ câu bằng gỗ vươn ra mặt nước và ngồi dạng chân kết hợp trên ghế câu.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong nhà gỗ và thùng pha mồi có chuẩn bị sẵn hương liệu dụ cá, pin phao câu và nguyên liệu dây câu.",
      "materials": [
        "Hương liệu đặc chủng dụ cá độ tinh khiết cao",
        "Pin siêu nhỏ cho phao câu phát sáng ban đêm",
        "Dây câu carbon cường độ cao",
        "Sợi thảo mộc thủy sinh",
        "Vật tư ngư cụ câu cá"
      ]
    },
    "special": [
      "Chiếc ô che nắng cỡ lớn có trang bị rèm lưới chắn muỗi rủ chạm đất, sau khi kéo lại từ bên ngoài hoàn toàn không thể nhìn rõ bên trong.",
      "Bệ gỗ câu cá vươn ra mặt nước vài mét, tiếng sóng nước có thể che lấp những âm thanh nhỏ nhẹ ở gần.",
      "Ban đêm sự chú ý của những người câu cá xung quanh toàn bộ đều tập trung vào chiếc phao câu trên mặt nước, không ai làm phiền ai."
    ],
    "events": [
      {
        "id": "evt_dt_fish_curtain",
        "title": "Tương tác khẩu giao không tiếng động bên trong rèm buông của chiếc ô câu cá lớn chắn muỗi chạm đất",
        "场所": "Bên trong rèm buông ô che nắng lớn trên bệ câu",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tấm rèm chắn muỗi chạm đất của chiếc ô che nắng lớn đã kéo kín, trên mặt nước nổi một chiếc phao câu điện tử phát ra ánh sáng xanh lục. Bốn phía tối đen và yên tĩnh. Cô ấy ngồi cạnh chiếc ghế câu gấp ngắm nhìn ánh huỳnh quang trên mặt nước.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa một cốc trà nóng, ngồi sóng đôi cùng cô ấy trên ghế câu nhìn chiếc phao phát sáng chờ cá cắn câu",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Kéo khóa quần bảo cô ấy quỳ xuống trước ghế câu ngậm dương vật vào miệng, tương tác mút nuốt không tiếng động trong hoàn cảnh những người câu cá ở phía xa có thể nhìn sang bất cứ lúc nào nhưng đã bị ngăn cách bởi tấm rèm",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_dt_fish_pier",
        "title": "Vịn lan can tiến vào từ phía sau trên bệ gỗ vươn ra mặt nước",
        "场所": "Rìa bệ câu cá bằng gỗ vươn ra mặt nước",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước ra khỏi chiếc ô câu cá đứng ở rìa bệ gỗ vươn ra mặt nước, cách dưới chân một mét là làn sóng nước đen thẫm, gió đêm thổi qua mặt hồ. Các bệ câu xung quanh cách nhau rất xa. Cô ấy dùng hai tay vịn vào lan can gỗ hóng gió đêm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau ôm lấy cô ấy, khoác áo lớn cùng nhau ngắm nhìn cảnh đêm mặt nước mênh mông",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她双手抓紧木栏杆撅起屁股，拉下内裤从身后把肉棒插进湿软的下体，就着水浪声用力抽送",
            "结算": "性欲度重置, 顺从度+35, 露出经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt lan can gỗ cong mông lên, kéo quần lót xuống từ phía sau đâm dương vật vào hạ thể ướt mềm, nương theo tiếng sóng nước mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "千岛水韵竞钓基地"
  },
  {
    "id": "dt_nursery",
    "name": "Vườn ươm hoa cảnh Vạn Tượng",
    "fullName": "Khu Đông Đường · Vườn ươm hoa cảnh Vạn Tượng",
    "district": "Khu Đông Đường",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Cơ sở trồng hoa và cây giống hiện đại quy mô lớn, có xây cụm nhà kính liên hoàn trồng thực vật nhiệt đới giữ nhiệt ổn định. Trong nhà kính định kỳ khởi động hệ thống phun sương mịn áp lực cao, hơi nước mù mịt đạt độ ẩm 90%, có những bụi chuối lá lớn và trầu bà lá xẻ cao tới vài mét. Khi hệ thống sương mịn áp lực cao phun tưới thì ngoài ba mét không phân biệt nổi bóng người, sâu trong bụi chuối lá lớn là địa điểm để triển khai mò mẫm khi ướt đẫm người và tiến vào từ phía sau trên luống đất tơi xốp.",
    "draw": "Thưởng ngoạn hoa cỏ cây cảnh nhiệt đới. Vuốt ve qua lớp áo ướt đẫm dưới làn sương mịn áp lực cao, tiến vào từ phía sau trên nền đất sâu trong bụi chuối lá lớn và phơi bày trên bàn ươm cây.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ hoa nhà kính và trong phòng thao tác có chuẩn bị sẵn phấn hoa lan, đất than bùn và nguyên liệu tinh dầu thực vật.",
      "materials": [
        "Phấn hoa lan cô đặc tự nhiên",
        "Đất dinh dưỡng than bùn nhiệt đới",
        "Chất điều hương thơm thực vật",
        "Nguyên liệu lá sen đá quý hiếm",
        "Vật tư làm vườn"
      ]
    },
    "special": [
      "Sau khi hệ thống tạo ẩm sương mịn áp lực cao khởi động, chỉ trong vài chục giây làn sương trắng đã bao phủ khắp nhà kính, tầm nhìn bị cản trở.",
      "Chuối lá lớn và trầu bà lá xẻ có tán lá khổng lồ, tạo thành bức tường chắn màu xanh tự nhiên.",
      "Nhà kính nhiệt đới quanh năm giữ nhiệt độ ổn định hai mươi tám độ, cảm giác cơ thể ấm nóng ẩm ướt."
    ],
    "events": [
      {
        "id": "evt_dt_nursery_mist",
        "title": "Vuốt ve qua lớp áo ướt đẫm dưới làn sương mịn áp lực cao phun tưới",
        "场所": "Dưới đường ống phun sương nhà kính nhiệt đới",
        "优先级": 60,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hệ thống phun sương mịn áp lực cao trên trần nhà kính kêu xì xì khởi động, làn sương ấm áp trắng xóa lập tức lan tỏa khắp nơi. Cô ấy đứng dưới gốc cây cọ ngắm nhìn hoa cỏ cây cối đang được làn sương nước bao phủ, quần áo bị hơi nước dày đặc làm cho hơi ẩm ướt.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Nắm tay cô ấy đi xuyên qua những khóm hoa cây cảnh giữa làn sương trắng, hái cho cô ấy một đóa hoa trắng thơm ngát cài lên sau tai",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=510",
            "选项": "Mượn làn sương nước trắng xóa dày đặc che khuất tầm nhìn, luồn tay vào trong lớp quần áo bị hơi sương làm ẩm của cô ấy xoa nắn bầu ngực đang nóng ran và đầu ngực dựng đứng, ngắm nhìn cô ấy đỏ mặt trong làn sương nước mà không dám kêu thành tiếng",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_dt_nursery_banana",
        "title": "Tiến vào từ phía sau trên luống đất trồng hoa sâu trong bụi chuối lá lớn",
        "场所": "Nền đất sâu trong bụi chuối nhiệt đới",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chui vào giữa bụi chuối lá lớn sâu nhất trong nhà kính, những tàu lá chuối to bản che kín mít phía trên đỉnh đầu, mặt đất trải lớp đất mùn xơ dừa tơi xốp sạch sẽ. Bốn phía tràn ngập mùi hương hoa cỏ. Cô ấy vịn vào thân cây chuối to khỏe đứng đó.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cởi áo khoác trải lên tấm ván gỗ sạch sẽ cho cô ấy ngồi xuống, cùng cô ấy tận hưởng sự tĩnh lặng giữa vòng vây cây xanh",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她双手扶在芭蕉树干上撩起裙子脱下内裤，从身后把肉棒插进湿软的下体，在热带密林遮挡下前后抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay vịn vào thân cây chuối vén váy cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể ướt mềm, thúc đẩy trước sau dưới sự che chắn của rừng cây nhiệt đới rậm rạp",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "万象花木苗圃"
  },
  {
    "id": "dt_service",
    "name": "Trạm dừng nghỉ cao tốc Đông Đường",
    "fullName": "Khu Đông Đường · Trạm dừng nghỉ cao tốc Đông Đường",
    "district": "Khu Đông Đường",
    "archetype": "traffic",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Trạm dừng nghỉ đầu mối đường cao tốc quy mô lớn. Trang bị bãi đỗ xe tải lớn, siêu thị 24 giờ và nhà vệ sinh dành cho người khuyết tật độc lập. Đêm khuya hàng chục chiếc xe đầu kéo container đường dài hạng nặng xếp hàng đỗ san sát, giữa dàn xe tải chỉ chừa lại khe hẹp mờ tối rộng đúng một mét; máy phát điện diesel nổ ầm ầm liên tục, nhà vệ sinh dành cho người khuyết tật có chốt cài trong, thích hợp triển khai tiến vào từ phía sau trong khe hẹp bóng tối giữa các xe tải và làm tình nhanh trong buồng vệ sinh.",
    "draw": "Nghỉ ngơi đường dài trên cao tốc. Tiến vào từ phía sau trong khe hẹp bóng tối một mét giữa dãy xe tải lớn, khóa trái nhà vệ sinh dành cho người khuyết tật độc lập làm tình và Play tại góc chết cửa hàng tiện lợi.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong cửa hàng tiện lợi và quầy dịch vụ có chuẩn bị sẵn tinh dầu giúp tỉnh táo, gói khăn ướt cỡ lớn và nguyên liệu đồ ăn liền tiếp sức.",
      "materials": [
        "Tinh dầu bạc hà giúp tỉnh táo để trên xe",
        "Khăn ướt làm sạch cầm tay",
        "Lương khô nén ăn liền giàu năng lượng",
        "Màng phản quang an toàn dùng cho xe",
        "Vật tư dùng hàng ngày"
      ]
    },
    "special": [
      "Khe hở giữa dãy xe tải đường dài chỉ rộng một mét, thân xe cao lớn đổ bóng tối xuống, nằm ở điểm mù camera giám sát.",
      "Nhà vệ sinh dành cho người khuyết tật trang bị chốt khóa trái bằng kim loại và tay vịn thép không gỉ, bên trong không có camera giám sát bao phủ.",
      "Đêm khuya động cơ diesel của xe đầu kéo chạy không tải nổ ầm ầm, có thể che lấp động tĩnh trong phạm vi vài mét."
    ],
    "events": [
      {
        "id": "evt_dt_service_truck",
        "title": "Đè lên vách tôn tiến vào từ phía sau trong khe hẹp một mét giữa các xe đầu kéo hạng nặng",
        "场所": "Trong bóng tối khe hẹp giữa các xe tải lớn",
        "优先级": 65,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào khe hở chật hẹp giữa hai chiếc xe tải container hạng nặng dài hơn chục mét, hai bên là vách tôn thùng hàng cao vút mát lạnh, xung quanh tối đen như mực. Cách đó vài mét động cơ diesel nổ ầm ầm rung chuyển, thỉnh thoảng có tài xế đi ngang qua phía bên ngoài. Cô ấy đứng giữa hai chiếc xe có vẻ hơi căng thẳng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy bước nhanh ra khỏi dàn xe tải, dẫn cô ấy vào cửa hàng tiện lợi sáng trưng ánh đèn mua đồ uống nóng làm ấm người",
            "结算": "Độ hảo cảm+20, Tiền bạc-30, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy áp hai tay lên vách tôn thùng hàng mát lạnh cong mông lên, giữa cảm giác tim đập thình thịch khi tài xế bất cứ lúc nào cũng có thể đi ngang qua đuôi xe mà vén váy cởi bỏ quần lót, thò tay móc ngoáy hạ thể ướt đẫm",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Bảo cô ấy chống hai tay lên vách tôn thùng hàng, từ phía sau đâm dương vật vào hạ thể ướt mềm, thúc nhanh từ phía sau giữa tiếng động cơ diesel nổ vang và sự căng thẳng khi bất cứ lúc nào cũng có người đi ngang qua",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_service_toilet",
        "title": "Mượn lực tay vịn làm tình trong nhà vệ sinh dành cho người khuyết tật độc lập",
        "场所": "Bên trong nhà vệ sinh độc lập dành cho người khuyết tật",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào nhà vệ sinh dành cho người khuyết tật cài chặt chốt khóa thép không gỉ lại, ngoài cửa là tiếng nước chảy của hành khách rửa tay và tiếng bước chân qua lại. Không gian bên trong rộng rãi, có lắp tay vịn bằng thép không gỉ chắc chắn. Cô ấy tựa bên bồn rửa tay chỉnh lại mái tóc.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa khăn giấy giúp cô ấy lau khô tay, chỉnh lại quần áo cho ngay ngắn rồi nắm tay cô ấy mở cửa bước ra khỏi nhà vệ sinh",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她双手抓紧不锈钢扶手翘起双臀，脱下内裤从身后把肉棒顶入深处，在门外偶有人敲门的紧张中心跳抽送",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt tay vịn thép không gỉ cong đôi bờ mông lên, cởi quần lót từ phía sau đâm dương vật vào sâu bên trong, thúc đẩy đầy hồi hộp giữa sự căng thẳng khi ngoài cửa thỉnh thoảng có người gõ cửa",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "东塘高速服务区"
  },
  {
    "id": "dt_reservoir",
    "name": "Đập hồ chứa nước Hồ Thiên Nga",
    "fullName": "Khu Đông Đường · Đập hồ chứa nước Hồ Thiên Nga",
    "district": "Khu Đông Đường",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Hồ chứa nước đập vòm trọng lực bằng bê tông quy mô lớn. Đập lớn dài tới vài trăm mét, một bên là mặt nước mênh mông, bên kia là sườn dốc xả lũ đã khô cạn. Cống ngầm đường tràn xả lũ khô cạn dưới đáy đập ăn sâu vào lòng núi và khô ráo khuất gió; ban đêm trên hồ chứa nước gió lớn thổi lồng lộng, đài ngắm cảnh vươn ra mặt nước không có đèn đường chiếu sáng, thích hợp triển khai cởi sạch đồ đón gió ở cửa gió và làm tình ngoài trời (thanh gian) trong cống ngầm xả lũ.",
    "draw": "Lên cao ngắm cảnh trên đập lớn và ngắm hoàng hôn hồ chứa nước. Cởi sạch đồ đón gió trên đài ngắm cảnh vươn ra mặt nước của đập lớn, tiến vào từ phía sau trong cống xi măng kênh xả lũ khô cạn và Play làm tình trên đỉnh đập.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại cửa thoát nước của đập lớn và các kẽ đá có chuẩn bị sẵn bột tảo nước, tinh thể nước khoáng và nguyên liệu nước ngưng tụ.",
      "materials": [
        "Bột tảo nước hoang dã hồ nước sâu",
        "Khoáng vật tinh thể bê tông đập lớn",
        "Nước ngưng tụ tinh khiết hồ chứa nước",
        "Nguyên liệu thảo mộc ưa bóng râm",
        "Vật tư chịu thời tiết"
      ]
    },
    "special": [
      "Cống ngầm xả lũ khô cạn dưới đáy đập lớn có đường kính ba mét, ăn sâu vào lòng núi, khô ráo và bên ngoài không thể nhìn trộm vào được.",
      "Đài ngắm cảnh vươn ra khỏi thân đập vài mét, ban đêm gió lớn và không có đèn chiếu sáng.",
      "Ban đêm nhân viên trạm quản lý chỉ trực ở trong nhà, toàn tuyến đập lớn không có người quản lý."
    ],
    "events": [
      {
        "id": "evt_dt_reservoir_wind",
        "title": "Cởi sạch đồ đón gió tự sướng trên đài ngắm cảnh vươn ra mặt nước của đập lớn",
        "场所": "Trước lan can sắt đài ngắm cảnh vươn ra mặt nước đập lớn",
        "优先级": 64,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước ra đài ngắm cảnh vươn ra mặt nước ở độ cao mấy chục mét so với mặt hồ. Ban đêm từ hồ chứa nước thổi tới từng đợt gió lớn mạnh mẽ, bốn phía tối đen như mực, dưới chân là sóng nước mênh mông. Cô ấy dùng hai tay vịn vào lan can sắt hóng gió.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau dùng áo khoác lớn bọc cô ấy vào trong lòng, cùng cô ấy lắng nghe tiếng sóng nước vỗ vào thân đập",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy cởi bỏ quần áo trên người dùng hai tay nắm chặt lan can, mặc cho làn gió đêm mát lạnh thổi qua cơ thể trần trụi, vừa cúi đầu nhìn mặt nước tối đen dưới chân vừa thò tay vuốt ve âm vật tự sướng",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_dt_reservoir_tunnel",
        "title": "Tiến vào từ phía sau sâu trong cống ngầm xi măng kênh xả lũ khô cạn",
        "场所": "Bên trong cống ngầm xi măng kênh xả lũ",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Men theo thang sắt bước xuống sâu trong cống ngầm đường tràn xả lũ khô cạn dưới đáy đập lớn. Vách hầm bằng xi măng thô ráp cứng rắn, bên trong hầm khuất gió và tối đen như mực, tiếng gió vang vọng ù ù trong lòng cống. Cô ấy dùng hai tay vịn vào tường xi măng đứng đó.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bật đèn pin soi sáng dưới chân, nắm tay cô ấy tránh các vũng nước đọng chầm chậm bước ra khỏi cống ngầm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "让她双手按在粗糙的水泥墙面上撅起屁股，拉下内裤从身后把肉棒插进湿软的下体，在封闭涵洞的回声中用力抽插",
            "结算": "性欲度重置, 顺从度+35, 隐奸经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên mặt tường xi măng thô ráp cong mông lên, kéo quần lót xuống từ phía sau đâm dương vật vào hạ thể ướt mềm, ra sức thúc đẩy giữa tiếng vang vọng trong lòng cống khép kín",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "天鹅湖水库大坝"
  },
  {
    "id": "dt_stay",
    "name": "Homestay nhà cổ Trúc Lý Quán",
    "fullName": "Khu Đông Đường · Homestay nhà cổ Trúc Lý Quán",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Homestay nhà cổ cao cấp cải tạo từ khu tứ hợp viện gạch xanh trăm năm tuổi trong ngôi làng cổ. Chính giữa sân viện sở hữu một miệng giếng cổ đá xanh, trong phòng nghỉ vẫn giữ lại chiếc giường lớn chạm hoa có bệ bước (Bạt bộ sàng) bằng gỗ hồng mộc kiểu xưa. Khi màn đêm buông xuống ngôi làng cổ vạn vật tĩnh lặng, vách ngăn bằng gỗ cách âm khá mỏng; những chiếc cột giường bằng gỗ thịt kiên cố của chiếc giường cổ rất thích hợp để tiến hành trói buộc tình thú bằng dây thừng đỏ, còn việc bịt miệng kiềm chế âm thanh làm tình dưới vách tường gỗ mỏng lại mang đậm tình điệu riêng tư.",
    "draw": "Qua đêm tại ngôi nhà cổ gạch xanh trăm năm. Trói buộc tình thú bằng dây thừng đỏ vào cột trụ chạm hoa của giường Bạt bộ, bịt miệng kìm nén làm tình bên vách ngăn gỗ mỏng và kết hợp trong gió đêm cạnh giếng cổ sân giếng trời.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại giếng cổ và bàn gỗ có chuẩn bị sẵn nước suối, lá tre và nguyên liệu sáp ong thuần tự nhiên.",
      "materials": [
        "Nước suối trong giếng cổ tự nhiên",
        "Nguyên liệu lá tre già trong sân viện",
        "Sáp ong nguyên chất bảo dưỡng đồ gỗ",
        "Trà xanh phơi nắng thủ công làng cổ",
        "Vật tư vải bông gai"
      ]
    },
    "special": [
      "Bốn góc chiếc giường lớn Bạt bộ kiểu xưa có cột gỗ chạm hoa to khỏe kiên cố, có thể dùng để cố định dây thừng đỏ tiến hành trói buộc tình thú.",
      "Vách ngăn bằng ván gỗ của ngôi nhà cổ khá mỏng, khi làm tình cần phải bịt miệng kiềm chế tiếng kêu để tránh làm kinh động phòng bên cạnh.",
      "Bốn phía giếng cổ đá xanh ở sân giếng trời được tường cao bao quanh, đêm khuya hoàn toàn không có người ngoài làm phiền."
    ],
    "events": [
      {
        "id": "evt_dt_stay_creak",
        "title": "Bịt miệng kìm nén âm thanh làm tình cạnh vách ngăn ván gỗ mỏng",
        "场所": "Trên chiếc giường lớn Bạt bộ chạm hoa trong nhà cổ",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya ngôi nhà cổ vô cùng yên tĩnh, chiếc giường gỗ chạm hoa kê sát ngay vách ngăn ván gỗ mỏng, ở phòng bên cạnh thỉnh thoảng vọng sang tiếng khách trọ ho nhẹ và trở mình. Cô ấy đã tháo giày ngồi trong chăn hạ thấp giọng nói chuyện.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo chăn đắp kín cho cả hai người, nằm nghiêng bên cạnh cô ấy ôm cô ấy thì thầm trò chuyện rồi chìm vào giấc ngủ",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Luồn tay vào trong chăn vén váy ngủ lên xoa nắn hạ thể ướt át, một tay bịt miệng cô ấy lại, giữa cảm giác căng thẳng khi phòng bên bất cứ lúc nào cũng có thể nghe thấy mà ép cô ấy phải nhịn chặt tiếng rên rỉ",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Kéo chăn lên che kín hai người, một tay bịt miệng cô ấy lại, vươn dương vật đâm vào sâu trong hạ thể, kìm nén động tác thúc sâu giữa nhịp chịu lực khẽ khàng của chiếc giường gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_stay_rope",
        "title": "Trói buộc tình thú bằng dây thừng đỏ vào cột trụ chạm hoa giường Bạt bộ",
        "场所": "Cạnh cột gỗ giường Bạt bộ kiểu xưa",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng bật ngọn đèn đầu giường ấm áp, bốn góc chiếc giường Bạt bộ kiểu xưa dựng bốn cây cột gỗ thịt chạm hoa to khỏe. Trên giường có chuẩn bị sẵn một cuộn dây thừng cotton màu đỏ sạch sẽ mềm mại. Cô ấy ngồi trên đệm giường ngắm nhìn những cây cột gỗ chạm hoa.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cất gọn cuộn dây thừng đỏ vào lại ngăn kéo, ngồi ở mép giường bầu bạn cùng cô ấy khẽ trò chuyện ngắm cảnh đêm",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Dùng sợi dây thừng cotton mềm màu đỏ trói cố định hai cổ tay cô ấy lần lượt vào hai cây cột gỗ chạm hoa hai bên, cởi quần áo cô ấy ra để lộ đôi bầu ngực, dùng tay vê nắn đầu ngực nhạy cảm và âm vật",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trói cố định hai tay cô ấy trên cột gỗ rồi cởi bỏ quần lót, vươn dương vật đâm vào hạ thể ướt mượt, giữ lấy vòng eo cô ấy ra sức thúc đẩy ngay trước cột giường",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm play phục tùng+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "竹里馆古宅民宿"
  },
  {
    "id": "ys_fishmkt",
    "name": "Chợ đầu mối thủy sản Giang Cảng",
    "fullName": "Khu Vũ Thạch & Phố Giang · Chợ đầu mối thủy sản Giang Cảng",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "朝",
      "夜",
      "深夜"
    ],
    "intro": "Chợ bán buôn thủy hải sản tươi sống quy mô lớn. Từ nửa đêm về sáng cho tới rạng sáng là giờ cao điểm xe tải dỡ hàng và các nhà hàng nhập hàng. Trong sảnh lớn các bể nước xếp thành hàng dài, máy sục oxy và máy xay đá nổ ầm ầm. Kho lạnh sâu phía sau treo rèm nhựa giữ nhiệt dày nặng, bàn sơ chế bằng thép không gỉ và phía sau thùng đá vụn là điểm mù tầm nhìn. Dưới sự che chở của tiếng xe nâng hàng và tiếng người ồn ào, đây là địa điểm để tiến hành kích thích cảm giác lạnh và Play trang phục bảo hộ lao động.",
    "draw": "Thu mua hải sản tươi sống, trải nghiệm chợ sớm thủy sản lúc đêm khuya. Ẩn gian trên bàn thép không gỉ sau rèm nhựa kho lạnh, kích thích bằng đá vụn và Play quần yếm cao su chống nước.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên bàn sơ chế hải sản và kệ kho lạnh có chuẩn bị sẵn tinh chất hàu biển, đá vụn giữ tươi cùng muối biển và các nguyên liệu bồi bổ điều dưỡng khác.",
      "materials": [
        "Chiết xuất tự nhiên từ hàu biển sâu",
        "Đá vụn tinh khiết thực phẩm giữ tươi",
        "Muối biển thô kết tinh tự nhiên",
        "Nguyên liệu bồi bổ nhóm thủy sản",
        "Vật tư kháng khuẩn chống mốc"
      ]
    },
    "special": [
      "Kho lạnh sâu bên trong treo rèm nhựa PVC giữ nhiệt làm dày, sau khi buông rủ sẽ ngăn cách hoàn toàn tầm nhìn trong ngoài.",
      "Tại quầy hàng có chuẩn bị sẵn lượng lớn đá vụn thực phẩm không độ C, có thể dùng để kích thích cảm giác lạnh trên làn da.",
      "Giờ cao điểm bốc dỡ hàng tiếng mô-tơ xe nâng và máy bơm nước cực kỳ ồn ào, những âm thanh nhỏ nhẹ bên trong người ở ngoài không thể nào nghe rõ."
    ],
    "events": [
      {
        "id": "evt_ys_fishmkt_ice",
        "title": "Kích thích bằng đá vụn trên bàn thao tác sơ chế",
        "场所": "Bàn thao tác sơ chế đồ tươi lạnh",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tránh những chiếc xe đẩy chở hàng của phiên chợ sớm, hai người bước vào phòng thao tác sơ chế ở phía sau. Tấm rèm nhựa PVC dày đã chắn khuất tầm nhìn bên ngoài, trên mặt bàn thép không gỉ bằng phẳng có đặt lớp đá vụn mịn vừa mới xay xong, nhiệt độ trong phòng rất thấp.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa bình giữ nhiệt cho cô ấy sưởi ấm tay, dẫn cô ấy rời khỏi phòng sơ chế ra sảnh trước chọn mua tôm tươi",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy cởi cúc áo trên để lộ bầu ngực, nhón một viên đá vụn nhỏ áp lên đầu ngực cô ấy chầm chậm xoay tròn thoa đều, ngắm nhìn cô ấy run rẩy vì lạnh và đầu ngực dựng đứng lên",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm play đạo cụ+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_ys_fishmkt_bench",
        "title": "Ẩn gian trên bàn thép không gỉ sau rèm nhựa kho lạnh",
        "场所": "Bàn thao tác kho lạnh đồ tươi sống",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong kho lạnh sương trắng mù mịt, cách ngoài rèm cửa vài mét có công nhân bốc vác đang đẩy thùng thủy sản đi ngang qua. Cô ấy đứng trước chiếc bàn bảo quản bằng thép không gỉ nặng nề, hai tay vịn vào mép bàn chờ tương tác.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy kéo kín khóa áo khoác, nắm tay cô ấy bước ra khỏi kho lạnh tới quầy đồ chín mua bát canh cá viên nóng hổi",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy nằm sấp trên mặt bàn vén váy lên, ngay lúc ngoài rèm có người đi ngang qua thì thò tay luồn vào trong quần lót vuốt ve hạ thể ướt át của cô ấy, không cho cô ấy phát ra tiếng động",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Cởi quần lót của cô ấy ra bắt cô ấy nằm sấp trên mép bàn thép không gỉ, từ phía sau đâm dương vật vào hạ thể ướt mượt, vừa lắng nghe tiếng chở hàng ngoài rèm vừa trực tiếp thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_fishmkt_suit",
        "title": "Thử nghiệm thả rông bên trong quần yếm cao su chống nước liền thân",
        "场所": "Phòng thay đồ quầy hàng",
        "优先级": 74,
        "trigger": {
          "时段": [
            "朝",
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên tường phòng thay đồ có treo mấy bộ quần yếm chống nước bằng nhựa PVC làm dày màu vàng mới tinh. Cô ấy đứng trước gương thay đồ, đang chuẩn bị chọn một bộ mặc vào để trải nghiệm trang phục đánh bắt cá.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy điều chỉnh độ dài dây đeo vai của chiếc quần yếm, đưa ủng cao su chống nước khen cô ấy mặc đồ bảo hộ trông rất tràn đầy sức sống",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi sạch toàn bộ áo trên cùng áo ngực quần lót đang mặc trên người, toàn thân thả rông mặc chiếc quần yếm chống nước màu vàng vào, sau đó tháo khóa cài bên hông luồn tay vào trong lớp cao su xoa nắn bầu ngực và bờ mông trần trụi",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "江港水产批发市场"
  },
  {
    "id": "ys_shipyard",
    "name": "Xưởng đóng tàu văn hóa Dương Tử",
    "fullName": "Khu Vũ Thạch & Phố Giang · Xưởng đóng tàu văn hóa Dương Tử",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "culture",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu công viên di tích công nghiệp cải tạo từ nhà máy đóng tàu cũ. Vẫn giữ lại cần cẩu giàn màu đỏ, đường trượt ụ tàu khô (Dry dock) và thân con tàu vạn tấn bỏ hoang. Ban ngày có du khách tới chụp ảnh nhiếp ảnh; khi màn đêm buông xuống cần cẩu giàn và thân tàu đổ xuống một vùng bóng tối rộng lớn, dưới đáy ụ tàu khô sâu bên trong và buồng điều khiển trên cao không có camera giám sát bao phủ, thích hợp triển khai trói nghệ thuật Shibari và Play trong bóng tối.",
    "draw": "Dạo bước di tích công nghiệp, chụp bộ ảnh phong cách công nghiệp. Trói dây thừng vào cột thép ụ tàu khô, nhìn xuống từ buồng lái trên cao và Play trên boong tàu bỏ hoang.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại phòng sửa chữa máy và cạnh ụ tàu có thể thu thập dây thừng gai to bản, dầu bôi trơn chống gỉ cùng nguyên liệu linh kiện ngũ kim.",
      "materials": [
        "Dầu mỡ bôi trơn chống gỉ cấp công nghiệp",
        "Dây cáp tàu thủy bện sợi gai hạng nặng",
        "Phụ kiện ngũ kim đồng thau đặc chủng",
        "Nguyên liệu nhóm sợi dệt may",
        "Linh kiện cơ khí kim loại"
      ]
    },
    "special": [
      "Trên cột trụ thép của ụ tàu khô vẫn còn lưu lại móc cẩu và cọc buộc dây cáp, có thể dùng để cố định dây thừng và treo giữ.",
      "Buồng lái cần cẩu giàn được trang bị cửa sổ quan sát toàn cảnh, người dưới mặt đất ngước nhìn lên sẽ rơi vào điểm mù ngược sáng.",
      "Kết cấu lối đi trong khoang con tàu vạn tấn bỏ hoang sâu và dài, sau khi đóng cửa sắt lại cách âm rất tốt."
    ],
    "events": [
      {
        "id": "evt_ys_shipyard_rope",
        "title": "Trói dây thừng vào cột thép sống tàu tại ụ tàu khô",
        "场所": "Cạnh cột thép dưới đáy ụ tàu khô",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Men theo thang sắt bước xuống đáy ụ tàu khô sâu hàng chục mét. Bốn phía là những vách thép rỉ sét cao lớn, gió đêm luồn lách qua các khe thép. Cô ấy đứng cạnh một cột trụ kết cấu thép to bản ngắm nhìn xung quanh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Cởi áo khoác đắp lên vai cô ấy, nắm tay cô ấy đi dạo dọc theo đường ray dưới đáy ụ tàu",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Lấy dây thừng gai ra trói ngược hai tay cô ấy vào cột thép, tháo móc cài áo ngực của cô ấy để lộ đôi bầu ngực, dùng dây thừng quấn quanh ngực tạo thành những vết hằn trói buộc chặt chẽ",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trói cô ấy vào cột thép rồi tụt quần lót xuống, vươn dương vật trực tiếp đâm vào hạ thể ướt đẫm, nắm lấy vòng eo cô ấy thúc đẩy trước sau ngay trước cột thép",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_shipyard_crane",
        "title": "Nhìn xuống cảnh đêm từ buồng lái cần cẩu trên cao",
        "场所": "Buồng lái trên cao của cần cẩu",
        "优先级": 71,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Men theo thang sắt trèo lên buồng lái cần cẩu giàn cao hàng chục mét. Bên trong buồng lái bốn mặt đều là cửa sổ kính, phía dưới là ánh đèn đường khu công viên và cảnh đêm mặt sông. Sau khi cài chốt cửa lại, trong phòng vô cùng yên tĩnh.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau ôm lấy vòng eo cô ấy, bầu bạn cùng cô ấy tựa trước cửa sổ ngắm cảnh đêm mặt sông",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi quần lót ra áp người lên mặt kính, cởi váy cong mông lên, tự thò tay dùng ngón tay đâm vào trong âm đạo móc ngoáy phát ra tiếng nước",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bảo cô ấy chống hai tay lên cửa sổ kính trên cao tách hai chân ra, từ phía sau đâm trọn cả cây dương vật vào sâu trong hạ thể, đón cảnh sông ngoài cửa sổ mà thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_shipyard_deck",
        "title": "Hẹn hò bí mật ở góc tối mũi tàu trên boong tàu bỏ hoang",
        "场所": "Boong mũi tàu con tàu vạn tấn",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đêm khuya bước lên boong trước của con tàu vạn tấn, bốn phía không có đèn chiếu sáng, chỉ có cọc neo sắt to lớn sừng sững trong bóng tối, gió sông thổi làm vạt áo bay phần phật. Cô ấy bước tới cạnh cọc neo tựa vào lan can sắt hóng gió.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ôm cô ấy vào trong lòng áo khoác lớn chắn gió, cùng nhau tựa vào lan can ngửa đầu ngắm bầu trời đêm",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Bảo cô ấy ngồi lên cọc neo sắt vén váy cởi bỏ quần lót, dang rộng hai chân đón gió đêm, đưa tay trực tiếp xoa nắn môi âm hộ ướt mềm và âm vật của cô ấy",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bảo cô ấy nâng một bên chân đạp lên cọc neo, kéo khóa quần đâm dương vật vào âm đạo, vươn hông thúc sâu giữa tiếng sóng sông trên boong tàu trống trải",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "扬子文创船坞"
  },
  {
    "id": "ys_breakwater",
    "name": "Đê chắn sóng biển Lâm Cảng",
    "fullName": "Khu Vũ Thạch & Phố Giang · Đê chắn sóng biển Lâm Cảng",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "nature",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Đê lớn bằng bê tông dài hàng ngàn mét vươn ra nơi cửa sông giáp biển, phía ngoài chất đống hàng loạt khối bê tông chắn sóng bốn chân (Tetrapod) hạng nặng, ở cuối đê là ngọn hải đăng dẫn đường. Chiều tối có người dân đi dạo câu cá; khi màn đêm buông xuống du khách rời đi, những hang đá tạo bởi các khối bê tông chắn sóng xếp đan xen vào nhau cùng mặt khuất gió của ngọn hải đăng là điểm mù tầm nhìn, tiếng sóng vỗ bờ liên hồi có thể che lấp âm thanh làm tình.",
    "draw": "Dạo bước trên đê dài, ngắm hoàng hôn nơi cửa sông giáp biển. Ẩn gian ở mặt khuất gió chân hải đăng, làm tình trong hốc đá khối bê tông chắn sóng và thả rông hóng gió trên đê lớn.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong các khe hở khối bê tông chắn sóng và chân bệ hải đăng có thể thu thập muối biển tinh khiết, bột vỏ sò và nguyên liệu nước khoáng đặc dị.",
      "materials": [
        "Bột mịn canxi vỏ sò tự nhiên",
        "Tinh thể muối biển độ tinh khiết cao",
        "Nước ngưng tụ nơi cửa sông giáp biển",
        "Nguyên liệu khoáng vật biển",
        "Sơn phủ bịt kín chịu thời tiết"
      ]
    },
    "special": [
      "Các khối bê tông chắn sóng bốn chân xếp chồng đan xen nhau, bên trong tạo thành hốc bê tông khô ráo và che khuất tầm nhìn.",
      "Tiếng sóng triều vỗ đập vào thân đê nổ ầm ầm không ngớt, có thể che lấp tiếng rên rỉ và tiếng va chạm da thịt trong phạm vi vài mét.",
      "Luồng sáng ngọn hải đăng định kỳ quét qua mặt nước, mặt sau của bệ hải đăng vào ban đêm nằm ở góc chết bóng tối ổn định."
    ],
    "events": [
      {
        "id": "evt_ys_breakwater_light",
        "title": "Đứng tiến vào từ phía sau ở mặt khuất gió của ngọn hải đăng",
        "场所": "Mặt khuất gió chân bệ hải đăng",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đi tới dưới chân ngọn hải đăng hai màu đỏ trắng ở cuối đê chắn sóng. Luồng sáng trên đỉnh đầu quét về phía mặt biển xa xôi, dưới bức tường xi măng ở mặt khuất gió chừa ra một góc tối rộng lớn. Cô ấy dựa lưng vào bức tường xi măng thô ráp, đón gió biển vuốt lại mái tóc dài bị gió thổi tung.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy vén những sợi tóc bị gió thổi rối ra sau tai, cùng cô ấy đứng sóng đôi tựa bên tường ngắm nhìn mặt biển phía xa",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy chống tay lên tường xi măng ngọn hải đăng vén chân váy ngắn cởi bỏ quần lót, dưới ánh sáng mờ tối khi luồng sáng quét về phía xa mà thò tay vuốt ve hạ thể ướt át của cô ấy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy chống hai tay lên mặt tường hải đăng cong mông lên, kéo khóa quần đâm thẳng dương vật vào tận đáy, ra sức thúc đẩy từ phía sau dưới sự che chở của tiếng sóng biển",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_breakwater_block",
        "title": "Làm tình bên trong khe hở xi măng của khối bê tông chắn sóng",
        "场所": "Hốc đá bên trong khối bê tông chắn sóng",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người men theo bậc thềm xi măng bước xuống khe hở phía dưới mấy khối bê tông chắn sóng bốn chân khổng lồ. Phía trên bị các trụ xi măng chắn kín hoàn toàn, bên trong khô ráo khuất gió, từ bên ngoài hoàn toàn không nhìn thấy bên trong. Cô ấy ngồi trên mặt xi măng bằng phẳng xoa bóp bắp chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Trải áo khoác lót dưới người cô ấy, ngồi bên nhau uống nước mang theo bên mình, lắng nghe tiếng nước vỗ dưới kẽ đá",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy cởi quần lót tách hai chân ngồi trên khối xi măng, tự dùng ngón tay tách mở môi âm hộ để lộ hạ thể bên trong, ngắm nhìn cô ấy động tình chảy nước nói lời xin lỗi trong hốc đá",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Gác hai chân cô ấy lên vai mình, vươn hông đâm dương vật vào hạ thể ướt đẫm, thúc mạnh dồn dập bên trong khe đá khép kín của khối bê tông chắn sóng",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_ys_breakwater_naked",
        "title": "Thả rông phơi bày giữa đê lớn lúc đêm khuya",
        "场所": "Đê lớn thoáng đãng của đê chắn sóng",
        "优先级": 75,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Nửa đêm về sáng trên đê lớn không một bóng người. Hai người đứng ngay chính giữa con đê dài bằng xi măng rộng hàng chục mét, bốn bề đều là vùng nước tối đen, chỉ có ánh đèn báo hiệu hàng hải ở phía xa đang nhấp nháy. Cô ấy đứng trong gió đêm ngắm nhìn mặt nước trống trải.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mở rộng áo khoác lớn từ phía sau ôm lấy cô ấy, hai người áp sát vào nhau đón gió biển trò chuyện",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Bảo cô ấy cởi bỏ quần lót và áo ngực, mở toang hoàn toàn áo khoác ngoài đứng đón gió biển trong trạng thái toàn thân thả rông, dùng hai tay nắm lấy bầu ngực tự xoa nắn cho tới khi đầu ngực cứng lên",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Độ ham muốn+25, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bảo cô ấy cởi sạch nửa thân dưới ngồi lên bệ xi măng của lan can đê lớn, tách hai chân đâm dương vật vào hạ thể, sải bước thúc mạnh giữa làn gió biển và tầm nhìn khoáng đạt",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "临港江海防波堤"
  },
  {
    "id": "pj_nightshift",
    "name": "Trạm dừng chân tài xế Lâm Cảng",
    "fullName": "Khu Vũ Thạch & Phố Giang · Trạm dừng chân tài xế Lâm Cảng",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "夜",
      "深夜",
      "朝"
    ],
    "intro": "Trạm dừng chân hậu cần phục vụ 24/24 của khu công nghiệp. Bên trong có siêu thị không người bán, phòng tắm vòi sen, phòng đơn chợp mắt có chốt cài độc lập và khu nghỉ ngơi ca đêm. Đêm khuya xe tải hạng nặng chạy qua mang lại độ rung tần số thấp; cửa gỗ phòng nghỉ có chốt cài, ở góc rẽ tủ lạnh siêu thị có góc chết camera giám sát, là cứ điểm để nghỉ ngơi nhanh và hẹn hò bí mật lúc đêm khuya.",
    "draw": "Nước nóng 24h và chợp mắt trong phòng đơn. Tiến vào từ phía sau trên giường đơn, mặc đồ bảo hộ chống bụi liền thân thả rông và khẩu giao ở góc rẽ siêu thị không người bán.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên kệ hàng và trong hộp sơ cứu có chuẩn bị sẵn cao bạc hà mát lạnh, đồ bảo hộ lao động liền thân và nguyên liệu vật tư sơ cứu.",
      "materials": [
        "Đồ bảo hộ liền thân chống tĩnh điện phòng sạch",
        "Cao bạc hà tỉnh não độ tinh khiết cao",
        "Túi sơ cứu cầm tay",
        "Vật tư khử trùng diệt khuẩn hàng ngày",
        "Đồ uống pha chế giúp tỉnh táo"
      ]
    },
    "special": [
      "Phòng đơn chợp mắt được trang bị chốt cài trong, sau khi treo biển đang sử dụng ở ngoài cửa sẽ không có ai làm phiền.",
      "Giữa tủ lạnh cửa hàng tiện lợi không người bán và kệ hàng góc rẽ tồn tại góc chết camera giám sát rộng hai mét vuông.",
      "Tiếng nổ ầm ầm và độ rung khi xe tải hạng nặng trong khu công nghiệp đi qua trạm cân có thể che lấp tiếng thở dốc trong phòng."
    ],
    "events": [
      {
        "id": "evt_pj_nightshift_bed",
        "title": "Tiến vào từ phía sau trên giường đơn trong phòng đơn chợp mắt",
        "场所": "Phòng đơn chợp mắt dành cho tài xế",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cài chặt chốt cửa của phòng đơn chợp mắt lại, ngoài cửa thỉnh thoảng vọng vào tiếng rung chấn khi xe tải hạng nặng chạy qua. Trong phòng có một ngọn đèn bàn màu vàng sẫm và một chiếc giường đơn trải ga trắng. Cô ấy ngồi ở mép giường tháo giày xoa cổ chân.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Rót một cốc nước ấm đưa cho cô ấy, ngồi bên mép giường giúp cô ấy xoa bóp bắp chân thả lỏng cơ bắp",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy nằm sấp trên giường đơn tốc chân váy ngắn lên ngang eo, ngay lúc ngoài cửa có tiếng bước chân đi ngang qua thì thò tay luồn vào trong quần lót vuốt ve hạ thể ướt át, bắt cô ấy cắn chặt ga giường không được kêu",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Kéo quần lót của cô ấy xuống bắt cô ấy quỳ chống tay trên giường, từ phía sau đâm dương vật vào hạ thể ướt mượt, giữ lấy bờ mông cô ấy thúc nhanh trên chiếc giường lò xo",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_nightshift_suit",
        "title": "Mặc đồ chống bụi mỏng thả rông trong phòng thay đồ",
        "场所": "Phòng thay đồ tiêu âm",
        "优先级": 69,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trên giá treo đồ trong phòng thay đồ có treo mấy bộ đồ bảo hộ chống bụi liền thân dáng mỏng màu trắng mới tinh. Cô ấy đứng trước gương thay đồ cầm bộ quần áo ngắm nghía, chuẩn bị mặc thử một chút.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy chỉnh lại cổ áo và mũ của bộ đồ bảo hộ, khen cô ấy mặc đồ bảo hộ trông rất gọn gàng năng động",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi sạch toàn bộ quần áo ngoài và đồ lót đang mặc trên người, toàn thân trần trụi thả rông khoác bộ đồ chống bụi màu trắng vào, đứng trước gương kéo khóa xuống để lộ hai bầu ngực và đầu ngực",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_pj_nightshift_cooler",
        "title": "Khẩu giao tại góc rẽ tủ lạnh cửa hàng tiện lợi không người bán",
        "场所": "Góc chết camera giám sát tủ lạnh cửa hàng tiện lợi",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Siêu thị không người bán lúc hai giờ đêm không có ai khác, phía sau dãy tủ lạnh đồ uống dáng đứng là góc chết mà camera giám sát không quay tới được. Hai người đứng sau tủ lạnh chọn đồ uống, ngoài cửa thỉnh thoảng có công nhân ca đêm vào tiệm quét khuôn mặt mua thuốc lá.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mua hai hộp sữa tươi nóng ra máy tự phục vụ thanh toán, nắm tay cô ấy ngồi trên ghế dài bên ngoài uống hết",
            "结算": "Độ hảo cảm+20, Tiền bạc-16, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Kéo khóa quần lấy dương vật ra, bảo cô ấy ngồi xổm xuống tại góc chết tủ lạnh ngậm vào trong miệng, há miệng mút nuốt dương vật cho tới khi đẫm nước bọt dưới sự kích thích bất cứ lúc nào cũng có người bước vào tiệm",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "临港司机驿站"
  },
  {
    "id": "pj_apt",
    "name": "Cộng đồng thanh niên Bạc Ngụ",
    "fullName": "Khu Vũ Thạch & Phố Giang · Cộng đồng thanh niên Bạc Ngụ",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cộng đồng chung cư cho thuê dài hạn hiện đại quy mô lớn. Khách thuê phần lớn là nhân viên văn phòng trẻ tuổi. Phòng đơn tầng cao được trang bị cửa kính sát đất, có thể nhìn rõ tòa nhà đối diện và khu phố; máy sấy thương mại ở phòng giặt chung khi vận hành có độ rung cực mạnh; cửa chống cháy lối thoát hiểm phòng cháy chữa cháy luôn đóng kín và không có camera giám sát, tràn ngập hơi thở cuộc sống của các cặp đôi nam nữ đô thị.",
    "draw": "Sinh hoạt tại chung cư cho thuê dài hạn. Đứng tiến vào từ phía sau trước cửa kính sát đất, cưỡi ngựa trên máy sấy rung và ẩn gian ở cầu thang thoát hiểm.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại máy bán hàng trong phòng giặt và cạnh giá sách có chuẩn bị sẵn viên giặt xả cô đặc, khăn siêu mềm và nguyên liệu chăm sóc hương thơm.",
      "materials": [
        "Viên giặt xả cô đặc hương nước hoa nhập khẩu",
        "Bao đựng thẻ từ ra vào chung cư độc quyền",
        "Khăn mềm sợi siêu mịn (Microfiber)",
        "Chất chăm sóc tạo hương thơm cho vải vóc",
        "Vật phẩm tiêu hao sinh hoạt hàng ngày"
      ]
    },
    "special": [
      "Phòng đơn tầng cao được trang bị nguyên một mặt cửa sổ kính sát đất, ban đêm khi bật đèn đứng trong phòng mang lại sức căng thị giác cực mạnh.",
      "Máy sấy thương mại ở khu vực chung khi vắt khô và sấy ở tốc độ cao thân máy tạo ra độ rung cơ học tần số cao đều đặn.",
      "Phía sau cửa chống cháy của lối thoát hiểm an toàn phòng cháy chữa cháy không có camera giám sát, quanh năm không có khách thuê đi lại."
    ],
    "events": [
      {
        "id": "evt_pj_apt_window",
        "title": "Bật đèn đứng tiến vào từ phía sau trước cửa kính sát đất",
        "场所": "Trước cửa kính sát đất tầng cao",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Rèm cửa kính sát đất của căn phòng chung cư được kéo mở hoàn toàn, ngoài cửa sổ là những ô cửa sổ và ánh đèn của tòa nhà đối diện. Cô ấy tắm xong đã thay một chiếc váy ngủ mỏng nhẹ, đi chân trần trên sàn nhà đứng trước cửa kính sát đất ngắm cảnh đêm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo tấm rèm voan lại, từ phía sau vòng tay ôm lấy eo cô ấy, tựa cằm lên vai cô ấy cùng ngắm cảnh đêm",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bật sáng toàn bộ đèn lớn trong phòng lên, bảo cô ấy chống hai tay lên mặt kính sát đất vén váy ngủ cởi bỏ quần lót, để cặp mông trần hướng thẳng về phía cửa sổ tòa nhà đối diện, thò tay móc ngoáy giữa hai đùi cô ấy cho tới khi chảy nước",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy áp hai tay lên mặt kính sát đất tách hai chân ra, từ phía sau đâm trọn cả cây dương vật vào âm đạo, đón ánh nhìn từ tòa nhà đối diện ngoài cửa sổ mà ra sức thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_apt_dryer",
        "title": "Làm tình trên chiếc máy sấy đang rung trong phòng giặt",
        "场所": "Nắp trên máy sấy khu vực chung",
        "优先级": 70,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong phòng giặt chung lúc đêm khuya không có ai khác, chiếc máy sấy cỡ lớn đang vận hành hết công suất để sấy khô quần áo, nắp kim loại phía trên ấm nóng kèm theo độ rung tần số cao. Cô ấy tựa bên bàn giặt chờ sấy xong.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy lấy quần áo nóng hổi vừa sấy xong ra gấp gọn gàng, cùng nhau bưng giỏ đồ giặt về phòng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bế cô ấy đặt ngồi lên nắp tôn của chiếc máy sấy đang rung, vén váy cởi bỏ quần lót, để cặp mông trần của cô ấy áp sát lên mặt tôn nóng ấm, mượn độ rung của thân máy dùng ngón tay xoa nắn âm vật",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy ngồi ở mép chiếc máy sấy đang rung dang rộng hai đùi, vươn dương vật đâm vào hạ thể ướt đẫm, nương theo độ rung cơ học của cỗ máy mà thúc mạnh trước sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_apt_stair",
        "title": "Ẩn gian tại buồng cầu thang lối thoát hiểm",
        "场所": "Phía sau cửa chống cháy buồng cầu thang",
        "优先级": 74,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮",
            "夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đẩy cánh cửa chống cháy dày nặng ra, bên trong buồng cầu thang ánh sáng mờ tối, bậc thềm xi măng vô cùng yên tĩnh. Phía trên cầu thang thỉnh thoảng vọng xuống âm thanh đóng cửa yếu ớt của người khác. Cô ấy đứng cạnh tay vịn cầm chìa khóa chờ đi xuống lầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy chùm chìa khóa trong tay cô ấy, nắm lấy bàn tay nhỏ của cô ấy chầm chậm bước xuống cầu thang",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy chống hai tay lên tay vịn cầu thang vén chân váy ngắn lên, giữa cảm giác tim đập thình thịch khi bất cứ lúc nào cũng có người đi xuống cầu thang mà luồn tay vào trong quần lót vuốt ve hạ thể, bắt cô ấy bịt miệng nhẫn nại",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Ở góc rẽ cầu thang đè cô ấy lên bức tường xi măng cởi bỏ quần lót, nâng một bên chân cô ấy lên đâm dương vật vào tận đáy, vừa lắng nghe động tĩnh trên lầu vừa thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "泊寓青年社区"
  },
  {
    "id": "pj_morning",
    "name": "Tiệm bánh bao áp chảo Lão Trương",
    "fullName": "Khu Vũ Thạch & Phố Giang · Tiệm bánh bao áp chảo Lão Trương",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼"
    ],
    "intro": "Quán điểm tâm bánh bao áp chảo (Sinh tiễn) lâu đời ba mươi năm tuổi. Sáng sớm chiếc chảo sắt lớn rán bánh bao nhân thịt tươi vàng giòn, sữa đậu nành xay bằng cối đá bốc hơi nghi ngút, thực khách xếp hàng ồn ào náo nhiệt. Phòng nhào bột ở sảnh sau có treo rèm vải, sảnh trước tiếng người huyên náo, máy hút mùi nổ ầm ầm, dưới gầm bàn ăn và phía sau tấm rèm vải nhà bếp là bức màn che chở tuyệt hảo cho những động tác thầm kín.",
    "draw": "Thưởng thức bánh bao áp chảo đế giòn vừa ra lò, sữa đậu nành nóng xay tươi. Mò mẫm dưới đáy váy dưới gầm bàn ăn, vén váy trước bàn nhào bột nhà bếp và Play trong buồng nhỏ cửa gỗ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Tại bao bột mì ở sảnh sau và bàn gia vị có chuẩn bị sẵn bột mì mịn, mè rang chín và nguyên liệu sữa đậu nành nguyên chất.",
      "materials": [
        "Bột mì mịn giàu gluten (bột mì số 13) đặc chế",
        "Mè đen thơm nồng xay cối nhỏ truyền thống",
        "Sữa đậu nành nguyên chất xay tươi bằng cối đá cổ truyền",
        "Nguyên liệu nông sản nhóm lương thực",
        "Giấm thơm ủ lên men hạng đặc biệt"
      ]
    },
    "special": [
      "Trong phòng nhào bột ở sảnh sau có chiếc bàn lớn bằng gỗ thịt cứng cáp dày nặng, phía sau rèm vải ngăn cách hoàn toàn tầm nhìn với sảnh trước.",
      "Tiếng hơi nước xèo xèo cực lớn khi mở vung chảo bánh bao áp chảo rưới nước cùng tiếng ồn của quạt hút gió có thể che lấp hoàn toàn tiếng thở dốc nhẹ.",
      "Cửa sau thông thẳng ra con hẻm nhỏ hẹp phố cổ không có camera giám sát."
    ],
    "events": [
      {
        "id": "evt_pj_morning_taste",
        "title": "Mò mẫm dưới đáy váy dưới chiếc bàn vuông quán ăn sáng",
        "场所": "Bàn gỗ vuông bên trong quán ăn sáng",
        "优先级": 58,
        "trigger": {
          "时段": [
            "朝"
          ],
          "好感度": [
            300,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong quán buổi chợ sớm ngồi kín hàng xóm láng giềng tới ăn sáng. Hai người ngồi xuống chiếc bàn vuông nhỏ sát tường, trên bàn bày đĩa bánh bao áp chảo vừa mới ra lò và hai bát sữa đậu nành bốc hơi nóng hổi. Cô ấy cầm đũa lên đang chuẩn bị gắp bánh bao.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa khăn giấy giúp cô ấy lau tay, gắp một chiếc bánh bao áp chảo lớn bỏ vào bát cô ấy dặn cô ấy ăn từ từ kẻo bỏng",
            "结算": "Độ hảo cảm+20, Tiền bạc-28, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=500",
            "选项": "Ở dưới gầm bàn thò tay luồn vào dưới đáy váy cô ấy, kéo lệch mép quần lót trực tiếp xoa nắn hạ thể ướt át, ngắm nhìn cô ấy nhịn tới đỏ bừng mặt ăn bánh bao áp chảo ngay trước mặt những thực khách ồn ào xung quanh",
            "结算": "Độ thuận tùng+25, Độ ham muốn+20, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_pj_morning_bench",
        "title": "Làm tình trên chiếc bàn gỗ thịt nhào bột ở sảnh sau",
        "场所": "Phòng thao tác bột mì ở sảnh sau",
        "优先级": 69,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Nhân lúc đi rửa tay vén tấm rèm vải bước vào sảnh sau. Trên chiếc bàn nhào bột bằng gỗ thịt rộng rãi vương vãi bột mì trắng, ngoài sảnh trước tiếng chảo dầu rán bánh bao áp chảo kêu xèo xèo liên hồi. Cô ấy đứng cạnh bàn nhào bột xắn tay áo lên rửa tay.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy lau khô vết nước trên tay, nắm lấy bàn tay nhỏ của cô ấy vén rèm vải quay về chỗ ngồi",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bế cô ấy đặt ngồi lên chiếc bàn gỗ cao lớn, vén váy cởi bỏ quần lót, trên mặt bàn gỗ vương bột mì thò tay vuốt ve âm đạo đang rỉ nước của cô ấy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Bảo cô ấy ngồi ở mép bàn nhào bột tách rộng hai đùi, vươn dương vật trực tiếp đâm vào hạ thể, ra sức thúc đẩy dưới sự che chở của tiếng chảo rán và tiếng người ồn ào ngoài sảnh trước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_morning_toilet",
        "title": "Ẩn gian trong buồng vệ sinh cửa gỗ nhỏ ở sân sau",
        "场所": "Buồng nhà vệ sinh ở sân sau",
        "优先级": 73,
        "trigger": {
          "时段": [
            "朝"
          ],
          "顺从度": [
            550,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chốt gỗ của nhà vệ sinh nhỏ ở sân sau đã cài lại, ngoài cửa là tiếng nước chảy rửa bát ở bếp sau và tiếng nhân viên quán nói chuyện. Không gian không lớn, cô ấy dựa lưng vào cánh cửa gỗ đứng chờ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy chỉnh lại cổ áo cho ngay ngắn, mở cửa nắm tay cô ấy bước ra dưới ánh nắng ban mai",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bế một bên chân cô ấy lên bắt cô ấy đứng bằng một chân, kéo quần lót xuống trực tiếp đâm dương vật vào hạ thể ướt mượt, vừa lắng nghe tiếng nước rửa bát ngoài cửa vừa thúc nhanh",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "老张生煎馆"
  },
  {
    "id": "gl_agency",
    "name": "Môi giới bất động sản Lianjia Cổ Lĩnh",
    "fullName": "Khu Cổ Lĩnh · Môi giới bất động sản Lianjia Cổ Lĩnh",
    "district": "Khu Cổ Lĩnh",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Cửa hàng flagship của công ty môi giới bất động sản nổi tiếng. Trong tiệm nắm giữ lượng lớn nguồn nhà ở là các căn biệt thự cổ ở Cổ Lĩnh và căn hộ sàn lớn ngắm cảnh sông ở Tây Châu. Tiệm có chuẩn bị sẵn xe thương mại đưa khách đi xem nhà dán phim sẫm màu, trong hộp chìa khóa có mật mã của những căn hộ để trống dài hạn. Nhân cơ hội đi xem nhà, bên trong căn hộ sàn lớn để trống, hàng ghế sau xe thương mại dán phim tối và căn hộ hoàn thiện nội thất chưa có người ở sẽ sở hữu không gian khám phá không bị người ngoài làm phiền.",
    "draw": "Tư vấn bất động sản và dẫn đi xem nhà sang. Ẩn gian trên thảm đỏ trong căn hộ sàn lớn xây thô, làm tình ở ghế sau xe thương mại dán phim tối màu và Play trên giường lớn trong căn hộ để trống.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trên kệ tài liệu và trong hộp dụng cụ có chuẩn bị sẵn tập sách sơ đồ căn hộ, bọc giày chống bụi và nguyên liệu dụng cụ đo khoảng cách bằng laser.",
      "materials": [
        "Cẩm nang giới thiệu dự án bất động sản thương hiệu tinh xảo",
        "Bọc giày chống bụi độ đàn hồi cao",
        "Pin chuyên dụng cho máy đo khoảng cách laser",
        "Túi than hoạt tính thân thiện môi trường dùng trong nhà",
        "Vật liệu giấy in ấn văn phòng"
      ]
    },
    "special": [
      "Nắm giữ mật mã của nhiều căn hộ hoàn thiện nội thất để trống dài hạn, trong suốt thời gian xem nhà không có người ngoài làm phiền.",
      "Xe thương mại đưa khách xem nhà được trang bị phim dán kính chống nhìn trộm sẫm màu và rèm cản sáng, khi đỗ dưới hầm để xe bên trong hoàn toàn khép kín.",
      "Căn hộ xây thô để trống có diện tích lớn không có đồ nội thất, động tác trong phòng có hiệu ứng tiếng vang rõ rệt."
    ],
    "events": [
      {
        "id": "evt_gl_agency_empty",
        "title": "Làm tình trên thảm trải sàn trong căn hộ sàn lớn xây thô",
        "场所": "Phòng ngủ chính căn hộ xây thô để trống",
        "优先级": 65,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Dùng khóa mật mã mở cửa một căn hộ xây thô để trống rộng hai trăm mét vuông trên tầng cao. Trong phòng không có đồ nội thất, trên mặt đất trải tấm thảm đỏ dùng một lần phục vụ khách xem nhà. Cô ấy đeo bọc giày đứng giữa phòng khách trống trải ngắm cảnh sông ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy bước tới bên cửa sổ, cùng nhau chỉ tay ra quy hoạch đô thị ngoài cửa sổ thảo luận về ngôi nhà muốn mua trong tương lai",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy chống hai tay lên bức tường xi măng xây thô cong mông lên, cởi bỏ quần lót của cô ấy, giữa tiếng vang vọng của căn phòng trống trải dùng ngón tay móc ngoáy hạ thể đang nhỏ nước",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trải áo khoác lên tấm thảm đỏ rồi đè cô ấy xuống, tách hai chân đâm dương vật vào tận đáy, ra sức thúc đẩy trong căn hộ sàn lớn không một bóng người",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_agency_van",
        "title": "Làm tình ở hàng ghế sau xe thương mại dán phim tối dưới hầm để xe",
        "场所": "Ghế da thật hàng sau xe thương mại",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc xe thương mại đưa khách xem nhà đỗ ở góc hầm để xe, lớp phim dán kính sẫm màu và rèm cản sáng đều đã kéo kín mít. Hàng ghế sau là hai chiếc ghế da thật độc lập, bên ngoài xe thỉnh thoảng có xe khác chạy qua. Cô ấy ngồi ở ghế sau xoa cổ chân nghỉ ngơi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đưa một chai nước ấm, ngả lưng ghế xuống cho cô ấy nằm nghỉ ngơi thoải mái",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Vén một góc rèm cản sáng lên bắt cô ấy nhìn người qua đường đi ngang qua bên ngoài xe, thò tay luồn vào trong quần lót của cô ấy vuốt ve hạ thể ướt đẫm, bắt cô ấy kẹp chặt hai đùi nhịn chặt không được kêu",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Hạ phẳng chiếc ghế da thật đè cô ấy lên trên, tách hai chân đâm dương vật vào sâu bên trong, làm tình rung chuyển cả xe giữa cảm giác tim đập thình thịch khi bên ngoài xe có người đi ngang qua",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_agency_bed",
        "title": "Làm tình trên chiếc giường lớn của căn hộ ngắm cảnh sông hoàn thiện nội thất để trống",
        "场所": "Giường lớn căn hộ hoàn thiện nội thất để trống",
        "优先级": 74,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào một căn hộ tầng cao đã hoàn thiện nội thất tinh xảo nhưng chưa có người dọn vào ở. Trong phòng ngủ chính có đặt một chiếc giường da mới tinh và tấm đệm lớn. Cô ấy ngồi ở mép giường ấn thử độ êm của tấm đệm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi xuống cạnh cô ấy choàng tay ôm lấy vai cô ấy, hôn nhẹ lên gò má cô ấy trong căn nhà mới yên tĩnh",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Bảo cô ấy nằm ngửa trên chiếc giường lớn mới tinh cởi váy và quần lót ra, dang rộng hai chân dùng hai tay tách mở hạ thể để lộ vùng kín bên trong phô bày cho bạn xem",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Trèo lên giường lớn gác hai chân cô ấy lên hai bên hông, đâm dương vật vào sâu trong hạ thể ướt mượt, sải bước thúc mạnh trên chiếc giường lớn của căn phòng tân hôn chưa có người ở",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "链家房产鼓岭店"
  },
  {
    "id": "xz_sales",
    "name": "Phòng trưng bày Tân Giang Nhất Hiệu Viện",
    "fullName": "Khu Tây Châu · Phòng trưng bày Tân Giang Nhất Hiệu Viện",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Trung tâm tiếp thị dự án bất động sản cao cấp nằm ngay sát bờ sông tuyến một. Trong sảnh lớn có sa bàn kiến trúc phát sáng cỡ lớn, phòng chiếu phim toàn tức (Hologram) và căn hộ mẫu hoàn thiện thực cảnh. Buổi tối chiếc giường trưng bày trong phòng ngủ chính căn hộ mẫu, phía sau sa bàn khổng lồ và phòng chiếu tối không có khách tham quan nào khác; dưới hoàn cảnh chuyên viên tư vấn bất động sản có thể đi tuần tra bất cứ lúc nào, nơi đây mang lại cảm giác kích thích cực mạnh.",
    "draw": "Tham quan căn hộ mẫu biệt thự hạng sang đỉnh cao. Ẩn gian tiến vào từ phía sau trên giường lớn phòng ngủ chính, khẩu giao phía sau chân đế sa bàn và Play trên sofa phòng VIP.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong phòng VIP và quầy lễ tân có chuẩn bị sẵn thẻ thơm phòng, hồng trà tuyển chọn và nguyên liệu bảo dưỡng đồ da.",
      "materials": [
        "Thẻ treo thơm phòng đặt riêng cao cấp",
        "Tập sách ảnh sơ đồ căn hộ bìa cứng mạ vàng",
        "Túi lọc hồng trà kiểu Anh pha chế đặc biệt",
        "Bình xịt bảo dưỡng nội thất da thật",
        "Quà tặng lưu niệm văn hóa sáng tạo cao cấp"
      ]
    },
    "special": [
      "Phòng ngủ chính của căn hộ mẫu thực cảnh có trưng bày chiếc giường lớn rộng hai mét, ngoài hành lang thỉnh thoảng có tiếng giày cao gót của chuyên viên tư vấn đi ngang qua.",
      "Chân đế của sa bàn nổi phát sáng cao tới một mét hai, mặt sau tạo thành điểm mù tầm nhìn dài hai mét.",
      "Khi phòng chiếu Hologram phát phim quảng cáo toàn trường tắt đèn và âm thanh loa cực lớn, mang lại bức màn che chở tuyệt hảo."
    ],
    "events": [
      {
        "id": "evt_xz_sales_bed",
        "title": "Ẩn gian trên giường lớn phòng ngủ chính căn hộ mẫu thực cảnh",
        "场所": "Giường lớn phòng ngủ chính căn hộ mẫu",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đi qua hành lang bước vào phòng ngủ chính của căn hộ mẫu hoàn thiện nội thất. Chính giữa phòng đặt một chiếc giường lớn rộng hai mét, ngoài lối đi thỉnh thoảng vọng lại tiếng giày cao gót của khách xem nhà khác và chuyên viên tư vấn đi ngang qua. Cô ấy ngồi trên ghế dài cuối giường ngắm nghía nội thất căn phòng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy khẽ trò chuyện, dẫn cô ấy đi tham quan phòng thay đồ và bồn tắm bên cạnh",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy nằm sấp trên giường lớn vén váy lên, ngay lúc ngoài cửa có tiếng bước chân đi ngang qua thì luồn tay vào trong quần lót vuốt ve hạ thể ướt đẫm, bắt cô ấy mím chặt môi không được phát ra dù chỉ một tiếng động",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy xuống chiếc giường lớn của căn hộ mẫu cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể, thúc nhanh dưới sự kích thích tim đập thình thịch khi bất cứ lúc nào cũng có người bước vào phòng tham quan",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_sales_sand",
        "title": "Khẩu giao phía sau chân đế sa bàn kiến trúc phát sáng",
        "场所": "Góc chết phía sau chân đế sa bàn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Sa bàn cỡ lớn ở giữa sảnh trưng bày đang bật đèn mô hình sáng rực, phía sau chân đế sa bàn có một hốc lõm, nhìn từ lối đi chính hoàn toàn là điểm mù. Cách đó vài mét chuyên viên tư vấn bất động sản đang dùng bút laser thuyết minh sa bàn cho khách hàng. Hai người đứng phía sau chân đế sa bàn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy đi vòng lại phía trước sa bàn, cùng lắng nghe chuyên viên tư vấn giới thiệu khu thương mại và trường học xung quanh dự án",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Kéo khóa quần lấy dương vật ra, bảo cô ấy ngồi xổm xuống phía sau chân đế sa bàn há miệng ngậm lấy, nuốt dương vật vào sâu trong cổ họng mút mạnh dưới sự kích thích khi tiếng thuyết minh của chuyên viên tư vấn ở ngay trong gang tấc",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_xz_sales_vip",
        "title": "Tiến vào từ phía sau trên sofa da thật trong phòng ký hợp đồng VIP",
        "场所": "Ghế sofa phòng ký hợp đồng VIP",
        "优先级": 74,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            570,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cửa kính mờ của phòng ký hợp đồng VIP đã đóng lại, trong phòng trải thảm dày, đặt một bộ ghế sofa lớn bằng da thật nhập khẩu. Cô ấy ngồi trên ghế sofa uống tách hồng trà nóng do nhân viên rót mời.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Ngồi cạnh cô ấy thưởng thức bánh trà, cùng nhau lật xem tập sách sơ đồ căn hộ trên bàn",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy nằm sấp trên tay vịn ghế sofa da thật vén váy cởi bỏ quần lót, ngay lúc ngoài cửa có bóng người lướt qua thì thò tay thúc ngoáy ngón tay trong âm đạo cô ấy đùa nghịch dòng dịch ngọt",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Bảo cô ấy quỳ chống tay trên ghế sofa da thật, từ phía sau giữ lấy vòng eo cô ấy đâm trọn cả cây dương vật vào âm đạo, tì lên tay vịn sofa da thật mà ra sức thúc đẩy từ phía sau",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "滨江壹号院展厅"
  },
  {
    "id": "pj_village",
    "name": "Nhà tự xây phố cổ Phố Giang",
    "fullName": "Khu Vũ Thạch & Phố Giang · Nhà tự xây phố cổ Phố Giang",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Nhà trọ tự xây san sát kiểu 'nhà bắt tay' mật độ dày đặc trong làng trong phố. Khoảng cách giữa hai tòa nhà chỉ khoảng một mét, đẩy cửa sổ ra là thấy ngay hàng xóm đối diện. Trong nhà dùng ván gỗ mỏng ngăn thành các phòng đơn nhỏ, cách âm cực kém, tiếng tivi và tiếng nói chuyện ở phòng bên nghe rõ mồn một. Dưới sự giới hạn của tầm nhìn ở cự ly cực gần từ tòa nhà đối diện và việc bắt buộc phải kìm nén tiếng thở dốc, nơi đây mang lại cảm giác đời sống chân thực chật hẹp và sự kích thích tim đập thình thịch.",
    "draw": "Trải nghiệm cuộc sống làng trong phố. Làm tình trước cửa sổ cách tòa nhà đối diện một mét, bịt miệng thúc đẩy dưới vách tường gỗ mỏng và Play cạnh bồn nước ngoài hành lang.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trên bệ cửa sổ và kệ để đồ tạp phẩm có thể thu thập nước hoa lộ thủy, dây thừng bông gai và nguyên liệu vật tư bách hóa hàng ngày.",
      "materials": [
        "Nước hoa lộ thủy đuổi muỗi kiểu xưa",
        "Dây phơi đồ vải bông gai tự nhiên",
        "Đồ dùng hàng ngày bằng tre truyền thống",
        "Vật tư bách hóa tiêu dùng hàng ngày phố thị",
        "Tinh dầu thảo mộc thủ công"
      ]
    },
    "special": [
      "Cửa sổ cách cửa sổ hàng xóm tòa nhà đối diện chỉ đúng một mét, khi mở cửa sổ thì động tác bên phía đối diện ở ngay trước mắt.",
      "Vách ngăn bằng ván gỗ mỏng hầu như không cách âm, bắt buộc phải nhẫn nại tiếng kêu nghiêm ngặt.",
      "Bồn nước dùng chung ở cuối hành lang lúc đêm khuya không có đèn chiếu sáng, nằm ở điểm mù bóng tối."
    ],
    "events": [
      {
        "id": "evt_pj_village_wall",
        "title": "Bịt miệng làm tình cạnh vách ngăn ván gỗ mỏng",
        "场所": "Giường gỗ phòng đơn nhà trọ san sát",
        "优先级": 64,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Chiếc giường trong phòng đơn nhà trọ kê sát ngay vách ngăn ván gỗ mỏng, tiếng nhà bên cạnh mở tivi nghe rõ từng câu từng chữ. Cô ấy ngồi ở mép giường gỗ hạ thấp giọng nói chuyện với bạn, sợ phòng bên cạnh nghe thấy.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo tấm chăn mỏng đắp kín cho hai người, nằm nghiêng bên cạnh cô ấy ôm cô ấy thì thầm trò chuyện",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy cắn chặt chiếc khăn bông nằm sấp trên giường cởi bỏ quần lót, giữa cảm giác căng thẳng khi phòng bên bất cứ lúc nào cũng có động tĩnh mà đâm ngón tay vào trong âm đạo móc ngoáy, ngắm nhìn cô ấy nhịn chặt không dám phát ra tiếng",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Kéo chăn lên trùm kín hai người, một tay bịt miệng cô ấy lại, tay kia giữ lấy dương vật đâm vào hạ thể ướt mượt, kìm nén chầm chậm thúc sâu giữa sự yên tĩnh tột độ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_village_window",
        "title": "Làm tình trước cửa sổ dưới tầm nhìn cách tòa nhà đối diện một mét",
        "场所": "Trước bệ cửa sổ phòng đơn",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đẩy cánh cửa sổ nhỏ của phòng đơn ra, cửa sổ và sào phơi đồ của hàng xóm tòa nhà đối diện nằm ngay cách đó một mét, thấp thoáng có thể nhìn thấy bóng người trong phòng đối diện. Cô ấy vịn vào bệ cửa sổ nhìn ra ngoài.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo rèm cửa sổ lại, từ phía sau vòng tay ôm lấy eo cô ấy dẫn cô ấy rời khỏi cạnh cửa sổ",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy chống hai tay lên bệ cửa sổ đang mở vén váy cởi bỏ quần lót, để cặp mông trần hướng thẳng về phía cửa sổ cách đó một mét ở bên kia, thò tay xoa nắn trên hạ thể đang rỉ nước của cô ấy",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy nằm sấp trên bệ cửa sổ cong mông lên, kéo khóa quần đâm dương vật từ phía sau vào hạ thể, thúc đẩy từ phía sau hướng thẳng về phía tầm nhìn cửa sổ hàng xóm đối diện",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_pj_village_sink",
        "title": "Tiến vào từ phía sau ở góc tối cạnh bồn nước hành lang chung",
        "场所": "Cạnh bồn rửa ngoài hành lang",
        "优先级": 74,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hành lang lúc một giờ đêm rất tối, cửa phòng hai bên đều đóng chặt, chỉ có vòi nước ở cuối hành lang thỉnh thoảng nhỏ giọt. Cô ấy bưng cốc đánh răng đứng cạnh bồn nước đánh răng rửa mặt.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy chiếc cốc trong tay cô ấy, nắm lấy bàn tay nhỏ của cô ấy khẽ bước quay về phòng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy chống hai tay lên thành bồn nước vén váy ngủ lên, giữa hành lang u tối khi hàng xóm bất cứ lúc nào cũng có thể mở cửa bước ra mà luồn tay vào trong quần lót vuốt ve hạ thể",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=610",
            "选项": "Ở góc tối cạnh bồn nước cởi bỏ quần lót của cô ấy, giữ lấy vòng eo cô ấy đâm trọn cả cây dương vật vào hạ thể, thúc nhanh từ phía sau trên hành lang khi hàng xóm đang ngủ say",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "浦江老街自建房"
  },
  {
    "id": "gl_wutong",
    "name": "Biệt thự sân vườn Ngô Đồng Lý",
    "fullName": "Khu Cổ Lĩnh · Biệt thự sân vườn Ngô Đồng Lý",
    "district": "Khu Cổ Lĩnh",
    "archetype": "culture",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Biệt thự sân vườn kiểu Pháp thời Dân Quốc. Tường ngoài gạch đỏ phủ kín dây leo, trong sân có cây ngô đồng trăm năm tuổi. Bên trong vẫn giữ lại cầu thang xoắn ốc bằng gỗ thịt, lò sưởi và gác xép có cửa sổ trời mái nghiêng. Khi màn đêm buông xuống căn biệt thự yên tĩnh; bóng tối ở góc rẽ cầu thang gỗ xoắn, tấm thảm dưới cửa sổ trời gác xép và cạnh lò sưởi có độ riêng tư tuyệt hảo.",
    "draw": "Dạo bước khu phố ngô đồng, qua đêm tại biệt thự cổ. Đứng tiến vào từ phía sau trên cầu thang gỗ xoắn kiểu Pháp, làm tình dưới cửa sổ trời gác xép và ngậm rượu vang đỏ khẩu giao trên thảm trước lò sưởi.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trên bệ lò sưởi và trong tủ chứa đồ có lưu giữ lá ngô đồng khô, nút bần gỗ sồi và nguyên liệu sợi len lông cừu tự nhiên.",
      "materials": [
        "Lá tiêu bản ngô đồng Pháp bên biệt thự cổ",
        "Nút bần gỗ sồi rượu vang đỏ lâu năm",
        "Sợi len lông cừu dài thuần tự nhiên",
        "Phụ kiện ngũ kim đồng thau cổ điển",
        "Nguyên liệu ủ rượu thơm lâu năm"
      ]
    },
    "special": [
      "Góc rẽ cầu thang xoắn ốc kiểu Pháp ánh sáng mờ tối, nhìn từ trên hay dưới cầu thang đều nằm ở góc chết thị giác.",
      "Gác xép tầng thượng được trang bị cửa sổ trời toàn cảnh mái nghiêng, nằm trên thảm có thể trực tiếp ngước nhìn bầu trời sao và bóng cây.",
      "Trước lò sưởi trải tấm thảm lông cừu dài dày dặn thuần tự nhiên, êm ái dễ chịu."
    ],
    "events": [
      {
        "id": "evt_gl_wutong_stair",
        "title": "Đứng tiến vào từ phía sau tại góc rẽ cầu thang gỗ xoắn ốc",
        "场所": "Góc rẽ cầu thang gỗ xoắn ốc",
        "优先级": 65,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước lên cầu thang xoắn ốc bằng gỗ thịt của căn biệt thự. Ánh đèn tường ở chiếu nghỉ góc rẽ mờ tối, ngoài cửa sổ bóng cây ngô đồng đung đưa. Cô ấy dùng hai tay vịn vào tay vịn gỗ chuẩn bị lên lầu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm lấy tay cô ấy, cùng nhau chầm chậm bước lên phòng đọc sách tầng hai trên chiếc cầu thang yên tĩnh",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Bảo cô ấy dùng hai tay nắm chặt tay vịn gỗ cầu thang cong mông lên, vén váy cởi bỏ quần lót, ở trong bóng tối thò tay luồn vào hạ thể ướt đẫm móc ngoáy",
            "结算": "Độ thuận tùng+30, Độ ham muốn+25, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Bảo cô ấy vịn vào tay vịn cầu thang tách hai chân ra, từ phía sau đâm dương vật vào sâu trong âm đạo, giữ lấy vòng eo thon của cô ấy ra sức thúc đẩy ngay trên bậc cầu thang gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_wutong_wine",
        "title": "Ngậm rượu vang đỏ khẩu giao trên thảm trước lò sưởi",
        "场所": "Thảm lông cừu trước lò sưởi",
        "优先级": 70,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong lò sưởi lửa than hồng rực, trên sàn trải tấm thảm lông cừu màu trắng. Trên bàn trà đặt chai rượu vang đỏ đã mở nắp và ly chân cao. Cô ấy mặc váy ngủ ngồi xếp bằng trên thảm bưng ly rượu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy ly rượu của cô ấy đặt lên bàn trà, bế cô ấy vào lòng ngồi trên thảm cùng sưởi ấm bên ánh lửa",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy uống một ngụm lớn rượu vang đỏ ngậm trong miệng không được nuốt xuống, kéo khóa quần bảo cô ấy ngậm lấy dương vật, dùng rượu vang mát lạnh và đầu lưỡi bao bọc lấy quy đầu mút nuốt",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Trạng thái bất thường+Hơi say, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_wutong_attic",
        "title": "Làm tình trên thảm dưới cửa sổ trời gác xép",
        "场所": "Dưới cửa sổ trời gác xép tầng thượng",
        "优先级": 75,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên ngoài khung cửa sổ trời mái nghiêng của gác xép tầng thượng có thể nhìn thấy tán cây ngô đồng và vầng trăng sáng, trên mặt sàn trải tấm đệm mềm dày. Cô ấy tháo giày bước chân trần lên tấm đệm mềm, ngẩng đầu ngắm bầu trời đêm ngoài cửa sổ.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo chăn cùng cô ấy nằm sóng đôi trên tấm đệm mềm, vừa ngắm bầu trời đêm ngoài cửa sổ trời vừa trò chuyện",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=570",
            "选项": "Bảo cô ấy cởi sạch quần áo nằm ngửa dưới ánh trăng qua cửa sổ trời, dang rộng hai chân, tự dùng ngón tay vê nắn hai bên đầu ngực, đồng thời tay kia móc ngoáy hạ thể ướt đẫm",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Cởi sạch đồ đè cô ấy xuống tấm đệm mềm tách rộng hai đùi, vươn dương vật đâm trọn vào sâu trong hạ thể, sải bước thúc mạnh ngay dưới cửa sổ trời cho tới khi tiếng da thịt va chạm vang vọng khắp gác xép",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "梧桐里花园洋房"
  },
  {
    "id": "gl_yunting",
    "name": "Bếp tư nhân Cổ Lĩnh Vân Đinh",
    "fullName": "Khu Cổ Lĩnh · Bếp tư nhân Cổ Lĩnh Vân Đinh",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Nhà hàng ẩm thực tư gia kiểu Trung Hoa cao cấp ẩn mình sâu trong rừng trúc Cổ Lĩnh. Toàn bộ công trình được cải tạo từ kiến trúc cổ thời Dân Quốc, có nhiều phòng riêng độc lập trang bị bình phong chạm hoa tinh xảo và khăn trải bàn bằng gấm dày rủ chạm đất. Độ riêng tư cực tốt, nhân viên phục vụ chỉ bước vào bưng món sau khi đã gõ cửa. Tấm khăn trải bàn bằng gấm rủ xuống dưới chiếc bàn tròn lớn trong phòng riêng tạo thành điểm mù tầm nhìn hoàn hảo; dưới cảm giác cấm kỵ khi nhân viên phục vụ có thể gõ cửa bưng món vào bất cứ lúc nào, đây là địa điểm tuyệt hảo để triển khai tương tác điểm mù.",
    "draw": "Thưởng thức ẩm thực tư gia cao cấp. Chui xuống gầm bàn dưới lớp khăn trải bàn gấm chạm đất tương tác khẩu giao, mò mẫm qua lớp váy sau bình phong chạm hoa và ẩn gian trên bàn lớn gỗ hồng mộc.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong tủ rượu phòng riêng và bếp sau có chuẩn bị sẵn rượu hoàng tửu ủ lâu năm, khăn trải bàn gấm cao cấp và nguyên liệu nấu nướng tinh tế.",
      "materials": [
        "Tinh chất rượu hoàng tửu lâu năm tinh chế",
        "Vải gấm vóc thủ công cao cấp",
        "Nguyên liệu thực phẩm bồi bổ cao cấp",
        "Gia vị nấu nướng cổ truyền",
        "Vật tư gốm sứ tinh xảo"
      ]
    },
    "special": [
      "Bàn tròn lớn bằng gỗ hồng mộc trong phòng riêng trải khăn trải bàn bằng gấm dày hai lớp chạm đất, không gian dưới gầm bàn rộng rãi và bên ngoài hoàn toàn không thể nhìn rõ.",
      "Ngay lối vào phòng riêng có đặt một bức bình phong gỗ chạm hoa bốn cánh, tạo thành hai tầng phòng tuyến đệm.",
      "Khoảng cách giữa các lần lên món kéo dài hơn mười phút, nhân viên phục vụ trước khi bưng món vào bắt buộc phải gõ nhẹ cửa gỗ ba tiếng trước."
    ],
    "events": [
      {
        "id": "evt_gl_yunting_table",
        "title": "Tương tác khẩu giao dưới gầm bàn dưới lớp khăn trải bàn gấm chạm đất",
        "场所": "Phía dưới bàn tròn gỗ hồng mộc trong phòng riêng",
        "优先级": 68,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Khung cảnh bên trong phòng riêng u tĩnh, tấm khăn trải bàn bằng gấm thêu hoa trên chiếc bàn tròn gỗ hồng mộc rủ thẳng xuống chạm mặt thảm. Nhân viên phục vụ vừa bưng đủ các món khai vị lên và đóng cửa gỗ phòng riêng lại. Cô ấy mặc chiếc chân váy bút chì ôm mông đoan trang ngồi ngay ngắn đối diện bạn, đang cầm đũa chuẩn bị gắp thức ăn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Gắp một miếng cá quế sốt chua ngọt (Tùng thử quế ngư) bỏ vào bát cô ấy, vừa cùng cô ấy thưởng thức mỹ thực vừa trò chuyện về những chuyện vui gần đây",
            "结算": "Độ hảo cảm+25, Tiền bạc-180, Thể lực đối tượng+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Cởi khóa quần, bảo cô ấy tháo giày chui xuống dưới lớp khăn trải bàn chạm đất, quỳ giữa hai chân bạn ngậm trọn cả cây dương vật vào trong miệng, ngậm sâu mút nuốt dưới sự che chắn của khăn trải bàn",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_yunting_screen",
        "title": "Nửa thân dưới thả rông kích thích bằng ngón tay khi có người gõ cửa bưng món",
        "场所": "Cạnh bình phong chạm hoa trong phòng riêng",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "顺从度": [
            560,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ngoài cửa vọng lại tiếng bước chân nhẹ nhàng của nhân viên phục vụ đang bưng bát canh nóng chuẩn bị gõ cửa. Cô ấy đứng trước cây treo quần áo cạnh bình phong đang chuẩn bị treo áo khoác lên, tà váy khẽ đung đưa dưới ánh đèn bàn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy áo khoác giúp cô ấy treo lên ngay ngắn, nắm tay cô ấy quay về trước bàn ăn chờ bưng canh lên",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Bảo cô ấy cởi quần lót tựa vào phía sau bình phong, ngay trong mấy giây nhân viên phục vụ gõ cửa hô 'Xin phép làm phiền' rồi bước vào phòng bưng món lên, luồn tay vào dưới đáy váy cô ấy trực tiếp đâm ngón tay vào hạ thể ướt át thúc ngoáy nhanh",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đè cô ấy lên mép bàn gỗ hồng mộc vén váy lên, dưới sự che khuất từ bóng lưng của nhân viên phục vụ đang đặt bát canh lên bàn ăn, từ phía sau đâm trọn cả cây dương vật vào sâu trong hạ thể thúc nhanh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "鼓岭云汀私厨"
  },
  {
    "id": "wx_home",
    "name": "Trung tâm dưỡng sinh Ô Khê",
    "fullName": "Khu Ô Khê · Trung tâm dưỡng sinh Ô Khê",
    "district": "Khu Ô Khê",
    "archetype": "medical",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Trung tâm dưỡng sinh chăm sóc sức khỏe tổng hợp kết hợp giữa y lý Đông y truyền thống và cơ sở vật chất vật lý trị liệu hiện đại. Bên trong có bồn gỗ xông hơi thuốc Bắc, giường vật lý trị liệu ngăn cách bằng rèm vải một chiều và phòng khám kéo giãn xương khớp. Bên trong phòng vật lý trị liệu tràn ngập hương thơm ấm áp của thảo dược và hơi ngải cứu. Bồn gỗ xông hơi có thể bao bọc kín toàn bộ cơ thể chỉ để lộ phần đầu, bên ngoài rèm vải một chiều thường có tiếng bước chân y tá đi tuần tra ngang qua, dưới sự che chở của hơi nóng thảo dược và việc nín thở sau rèm ngăn, cực kỳ thích hợp tiến hành vuốt ve cơ thể và Play bí mật.",
    "draw": "Vật lý trị liệu thảo dược và chợp mắt xông hơi. Xông hơi trong bồn gỗ lộ đầu vuốt ve âu yếm, tiến vào từ phía sau trên giường vật lý trị liệu có rèm ngăn và Play cố định tư thế trên giường kéo giãn.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong tủ thuốc phòng vật lý trị liệu và quầy thuốc có chuẩn bị sẵn tinh dầu ngải cứu, túi thuốc Bắc xông hơi và nguyên liệu kem massage chuyên dụng.",
      "materials": [
        "Tinh dầu ngải cứu độ tinh khiết cao",
        "Túi xông hơi Đông y truyền thống",
        "Vật tư vật lý trị liệu cấp y tế",
        "Thảo mộc thư cân hoạt huyết",
        "Kem mỡ bôi trơn massage"
      ]
    },
    "special": [
      "Bồn gỗ xông hơi thuốc Bắc có nắp đậy khóa cài, sau khi ngồi vào trong cơ thể hoàn toàn bị khóa kín trong làn hơi nóng của bồn gỗ, chỉ để lộ phần đầu.",
      "Giữa các giường vật lý trị liệu chỉ ngăn cách bằng rèm vải một chiều, bóng dáng nhân viên trạm y tá đi lại phía bên ngoài nhìn thấy rõ mồn một.",
      "Bên trong phòng vật lý trị liệu quanh năm phát nhạc thiền tiếng nước chảy êm dịu, có thể che lấp tiếng thở dốc nhỏ nhẹ."
    ],
    "events": [
      {
        "id": "evt_wx_home_steamer",
        "title": "Chạm vào cơ thể đẫm mồ hôi bên trong bồn gỗ xông hơi",
        "场所": "Phòng vật lý trị liệu xông hơi thuốc Bắc",
        "优先级": 65,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy cởi bỏ áo ngoài thay chiếc áo choàng mỏng vật lý trị liệu, ngồi vào bên trong chiếc bồn gỗ xông hơi, phía trên đậy nắp ván gỗ chỉ để lộ đôi gò má đỏ bừng. Hơi nóng bốc lên bên trong bồn, xông cho làn da cô ấy đỏ hồng lấm tấm mồ hôi. Bạn đứng cạnh bồn gỗ ngắm nhìn dáng vẻ đẫm mồ hôi thơm của cô ấy.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Lấy nước ấm và khăn bông tới, nhẹ nhàng giúp cô ấy lau mồ hôi trên trán và đút cho cô ấy uống nước",
            "结算": "Độ hảo cảm+20, Thể lực đối tượng+15, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Mở lỗ luồn tay bằng cao su mềm ở bên hông bồn xông hơi ra, thò tay vào trong chiếc bồn gỗ ngập tràn hơi nóng, cởi áo choàng mỏng của cô ấy xoa nắn bầu ngực nóng bỏng căng tròn và âm vật đang rỉ nước của cô ấy",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play đạo cụ+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_wx_home_curtain",
        "title": "Đè vào tường tiến vào từ phía sau sau rèm ngăn vật lý trị liệu",
        "场所": "Bên trong rèm ngăn giường vật lý trị liệu",
        "优先级": 70,
        "trigger": {
          "时段": [
            "昼",
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Giường vật lý trị liệu đã kéo tấm rèm vải trắng bán trong suốt lại, cách ngoài rèm một mét chính là bóng dáng thấp thoáng của y tá đang đi lại. Cô ấy nằm sấp trên chiếc giường khám êm ái, sau khi được xoa bóp lưng xong đang chuẩn bị ngồi dậy.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đỡ lấy cánh tay cô ấy giúp cô ấy mặc áo khoác vào, kéo rèm vải ra dẫn cô ấy sang khu nghỉ ngơi uống trà táo đỏ",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Bảo cô ấy nằm sấp trên giường tốc váy trị liệu lên ngang eo, giữa sự căng thẳng tột độ khi y tá đi ngang qua ngoài rèm mà thò tay luồn vào trong quần lót móc ngoáy hạ thể ướt đẫm, ép cô ấy cắn chặt gối nhẫn nại",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Kéo quần lót của cô ấy tụt xuống đầu gối, giữ lấy eo cô ấy từ phía sau đâm dương vật vào âm đạo ướt mềm, cách một lớp rèm vải ra sức thúc đẩy ngay dưới mí mắt của y tá",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "乌溪康养中心"
  },
  {
    "id": "xz_jiayuan",
    "name": "Căn hộ cao cấp ven sông Tây Châu",
    "fullName": "Khu Tây Châu · Căn hộ cao cấp ven sông Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Căn hộ sàn lớn (Flat) xa hoa rộng năm trăm mét vuông trên tầng thượng nằm ngay sát bờ sông tuyến một Tây Châu. Sở hữu cửa sổ kính sát đất toàn cảnh treo lơ lửng dài hai mươi mét, bàn đảo bếp trung tâm bằng đá cẩm thạch và phòng thay đồ bước vào (Walk-in closet) lắp gương thử đồ ba mặt. Ban đêm trong phòng chỉ bật đèn hắt chân tường trầm ấm, ngoài cửa sổ là đường chân trời thành phố rực rỡ ánh đèn ở bờ bên kia cùng dòng nước sông mênh mông. Độ riêng tư tuyệt đối và tầm nhìn khoáng đạt của căn hộ hạng sang mang lại sân khấu đỉnh cao cho các màn phô bày trước gương, cưỡi ngựa trên bàn đảo bếp và tiến vào từ phía sau trước cửa kính sát đất.",
    "draw": "Tận hưởng sinh hoạt riêng tư trong căn hộ hạng sang. Chống hai tay lên kính tiến vào từ phía sau trước cửa kính sát đất, cưỡi ngựa mặt đối mặt trên bàn đảo đá cẩm thạch và tự sướng phô bày trước gương ba mặt.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong tủ rượu và phòng thay đồ có chuẩn bị sẵn rượu vang trắng ướp lạnh, áo choàng ngủ lụa tơ tằm thuần khiết cùng nguyên liệu xịt thơm phòng cao cấp.",
      "materials": [
        "Rượu vang trắng ủ lâu năm thung lũng băng nhập khẩu",
        "Vải áo choàng ngủ lụa tơ tằm cao cấp",
        "Chất bảo dưỡng đồ da nội thất xa xỉ",
        "Tinh dầu hương nước hoa cao cấp",
        "Nguyên liệu bảo dưỡng đồ hiệu xa xỉ"
      ]
    },
    "housing": {
      "tier": "upper",
      "transaction": "rent_or_buy",
      "rent": 13000,
      "deposit": 26000,
      "sale": 5200000,
      "privacy": 4,
      "unlock": {
        "minMoney": 260000
      },
      "note": "Căn hộ lớn ven sông 500m². Mức khởi đầu 3,900 là thuê lại phòng ngủ chính trong căn hộ, sở hữu trọn vẹn mới tính là chính thức chuyển vào sống."
    },
    "special": [
      "Mặt kính cửa sổ sát đất treo lơ lửng nguyên mảng có tầm nhìn không vật che chắn, vừa nhìn xuống cảnh sông vừa có ánh đèn sàn trong phòng phác họa đường nét cơ thể.",
      "Bàn đảo đá cẩm thạch ở trung tâm cao một mét mốt, mặt bàn mát lạnh bằng phẳng, cực kỳ thích hợp để bế ngồi cưỡi ngựa mặt đối mặt.",
      "Phòng thay đồ Walk-in được trang bị gương toàn thân sát đất ba mặt bao quanh, có thể phản chiếu chi tiết cơ thể không góc chết."
    ],
    "events": [
      {
        "id": "evt_xz_jiayuan_window",
        "title": "Chống hai tay lên mặt kính tiến vào từ phía sau trước cửa kính sát đất toàn cảnh",
        "场所": "Trước cửa kính sát đất toàn cảnh tầng thượng",
        "优先级": 66,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đèn sàn ở phòng khách tỏa ra ánh sáng ấm áp mờ dịu, ngoài cửa sổ là ánh đèn muôn nhà bên kia bờ sông. Cô ấy tắm xong đã thay một chiếc áo choàng ngủ bằng lụa tơ tằm màu đen, đi chân trần đứng trước cửa kính sát đất ngắm cảnh sông.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Từ phía sau dịu dàng vòng tay ôm lấy cô ấy, tựa đầu lên vai cô ấy cùng ngắm nhìn cảnh đêm phồn hoa và tâm sự",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Tháo dây buộc áo choàng ngủ của cô ấy để lộ tấm lưng trần mịn màng, bảo cô ấy áp hai tay lên mặt kính sát đất mát lạnh, từ phía sau cởi bỏ quần lót dùng tay móc ngoáy hạ thể ướt đẫm",
            "结算": "Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Giữ chặt hai tay cô ấy áp lên mặt kính, từ phía sau đâm trọn cả cây dương vật vào hạ thể ướt mượt, đón cảnh đêm thành phố ngoài cửa sổ mà thúc mạnh liên hồi",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_jiayuan_island",
        "title": "Bế ngồi kết hợp mặt đối mặt trên bàn đảo bếp bằng đá cẩm thạch",
        "场所": "Bàn đảo đá cẩm thạch trung tâm nhà bếp",
        "优先级": 71,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước lại gần chiếc bàn đảo đá cẩm thạch rộng rãi để rót rượu, bề mặt bàn đảo mát lạnh bằng phẳng. Cô ấy bưng ly rượu tựa bên mép bàn đảo, hơi ngửa đầu uống ngụm rượu trái cây, đôi gò má ửng lên sắc hồng say đắm lòng người.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Đón lấy ly rượu trong tay cô ấy, bế cô ấy đặt ngồi lên bàn đảo rồi nhẹ nhàng hôn lên cánh môi cô ấy",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=620",
            "选项": "抱起她放在岛台边缘，脱掉内裤后让她双腿环在你的腰上，挺起肉棒向上顶入深处，在冰凉的大理石台上面对面抱坐撞击",
            "结算": "性欲度重置, 顺从度+40, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Bế cô ấy đặt ở mép bàn đảo, sau khi cởi bỏ quần lót để cô ấy quặp hai chân quanh hông bạn, vươn dương vật thúc ngược từ dưới lên vào sâu bên trong, bế ngồi mặt đối mặt thúc mạnh trên chiếc bàn đá cẩm thạch mát lạnh",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_xz_jiayuan_mirror",
        "title": "Tách mở hạ thể phô bày trước phòng thay đồ gương ba mặt",
        "场所": "Trước gương sát đất ba mặt trong phòng thay đồ",
        "优先级": 75,
        "trigger": {
          "时段": [
            "深夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đèn trần trong phòng thay đồ sáng trưng, tấm gương sát đất ba mặt bao quanh kéo dài không gian ra vô tận. Cô ấy vừa mới thay một bộ đầm dạ hội xẻ tà cao, đang đứng trước gương chỉnh lại khóa kéo.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Bước lên phía trước giúp cô ấy kéo khóa sau lưng lên ngay ngắn, khen ngợi vẻ thanh lịch và xinh đẹp của cô ấy khi mặc đầm dạ hội",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=580",
            "选项": "Bảo cô ấy vén tà váy dạ hội lên ngang eo cởi bỏ quần lót, đứng ngay chính giữa tấm gương ba mặt, dùng hai tay tách mở môi âm hộ của chính mình hướng vào trong gương phô bày hạ thể đỏ hồng ướt át",
            "结算": "Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Kinh nghiệm tự sướng+1, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "西洲滨江大平层"
  },
  {
    "id": "dt_townhouse",
    "name": "Biệt thự liền kề Đông Đường",
    "fullName": "Khu Đông Đường · Biệt thự liền kề Đông Đường",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Khu cộng đồng biệt thự liền kề cao cấp nằm cạnh vùng ngập nước ven sông Đông Đường. Cổng riêng nhà riêng, trang bị sân vườn riêng kiểu trũng (Sunken garden), hầm để xe hai chỗ độc lập và lò sưởi phòng khách thông tầng cao bảy mét. Hầm để xe có lắp cửa cuốn cách âm chạy điện dày dặn, sau khi hạ xuống sẽ tạo thành không gian riêng tư dưới lòng đất khép kín và cách âm hoàn toàn, thích hợp tiến hành làm tình rung lắc trên xe và Play đón gió đêm ở sân vườn lộ thiên.",
    "draw": "Nghỉ ngơi thư thái tại biệt thự độc lập. Quấn quýt trên thảm đón gió đêm ở sân vườn trũng, làm tình rung lắc trên xe trong hầm để xe khép kín và tương tác thả rông trên sofa phòng khách thông tầng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại bàn làm việc trong gara và phòng dụng cụ sân vườn có chuẩn bị sẵn kem dưỡng da thật, tinh dầu hoa cỏ và nguyên liệu dụng cụ làm vườn.",
      "materials": [
        "Tinh dầu hoa cỏ tự nhiên sân vườn",
        "Kem dưỡng da thật cao cấp dùng cho xe hơi",
        "Dụng cụ cắt tỉa làm vườn sân viện",
        "Nguyên liệu hương thơm trang trí nội thất",
        "Vật tư nhiên liệu chất lượng cao"
      ]
    },
    "housing": {
      "tier": "upper",
      "transaction": "rent_or_buy",
      "rent": 9800,
      "deposit": 19600,
      "sale": 3800000,
      "privacy": 4,
      "unlock": {
        "minMoney": 190000
      },
      "note": "Biệt thự liền kề độc lập, có sân chìm và hầm để xe hai chỗ; bên cạnh vùng đất ngập nước ngoại ô phía nam, di chuyển vào nội thành khá xa."
    },
    "special": [
      "Sau khi cửa cuốn cách âm của hầm để xe hạ xuống hoàn toàn, âm thanh bên trong sẽ ngăn cách hoàn toàn triệt để với bên ngoài.",
      "Sân vườn kiểu trũng bốn phía được cây xanh cao lớn và tường đá dốc bao quanh, nhìn lên phía trên chỉ thấy bầu trời sao, tuyệt đối không có tầm nhìn của người ngoài.",
      "Ghế sofa bọc da thật ở phòng khách thông tầng rộng tới hai mét, độ đàn hồi cực tốt."
    ],
    "events": [
      {
        "id": "evt_dt_townhouse_garage",
        "title": "Làm tình trên ghế da thật trong xe giữa hầm để xe khép kín",
        "场所": "Bên trong xe tại hầm để xe khép kín",
        "优先级": 67,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Lái xe vào trong hầm để xe, cánh cửa cuốn chạy điện chầm chậm hạ xuống đóng chặt, trong tầng hầm chỉ còn lại ánh đèn xe và tiếng nhạc loa siêu trầm vang vọng. Cô ấy ngồi ở ghế phụ tháo dây an toàn, thở phào nhẹ nhõm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy mở cửa xe nắm tay dắt cô ấy xuống xe, dẫn cô ấy bước lên cầu thang quay về phòng khách ấm cúng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Hạ phẳng hoàn toàn ghế phụ xuống, bảo cô ấy kéo váy lên ngang eo, giữa độ rung của loa siêu trầm trong hầm để xe khép kín mà thò tay xoa nắn hạ thể ướt đẫm của cô ấy",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Ngồi dạng chân lên chiếc ghế phụ bọc da thật đã hạ phẳng, để hai chân cô ấy quấn chặt quanh eo bạn rồi đâm dương vật vào tận đáy, thúc mạnh dồn dập giữa tiếng nhạc trong gara làm cả thân xe rung lắc",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_dt_townhouse_garden",
        "title": "Làm tình trên thảm đón gió đêm tại sân vườn trũng",
        "场所": "Trên tấm thảm bãi cỏ sân vườn kiểu trũng",
        "优先级": 72,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Đẩy cánh cửa phụ tầng một bước ra sân vườn kiểu trũng. Bức tường đá cao vút và giàn dây leo che kín mít bốn phía, trên nền đá trải tấm chăn lông dày dùng để cắm trại, ngẩng đầu lên là có thể nhìn thấy bầu trời sao sáng rực. Cô ấy ngồi xếp bằng trên tấm chăn lông đón gió đêm.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy chăn đắp lên người cô ấy, cùng cô ấy nằm sóng đôi trên tấm chăn giữa sân vườn ngắm bầu trời sao",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=620",
            "选项": "把她的衣服全脱光按在庭院毛毯上，分开双腿把肉棒插进湿软的下体，迎着夜风与夜空星光大步抽插",
            "结算": "性欲度重置, 顺从度+40, 露出经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Cởi sạch toàn bộ quần áo của cô ấy đè xuống tấm chăn lông giữa sân vườn, tách hai chân đâm dương vật vào hạ thể ướt mềm, đón làn gió đêm và ánh sao trời mà sải bước thúc mạnh",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "东塘联排别墅"
  },
  {
    "id": "qp_villa",
    "name": "Biệt thự đơn lập lưng đồi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Biệt thự đơn lập lưng đồi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "nature",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Trang viên nghỉ dưỡng sinh thái xa xỉ (Glamping manor) tư nhân được xây dựng bên vách đá lưng chừng núi Thanh Bình. Trang bị hồ bơi vô cực nước ấm bên vách đá, sân thượng ngắm cảnh toàn cảnh và phòng ngủ chính khép kín trải thảm lông cừu dày dặn. Trang viên hoàn toàn được rừng thông núi sâu bao bọc, độ riêng tư cực cao. Ban đêm gió núi thổi vù vù, hồ bơi vô cực và thành hồ bằng nhựa acrylic trong suốt long lanh dưới ánh đèn, thích hợp triển khai tương tác tình thú cún con, liếm mút ngón chân và nâng mông kết hợp dưới nước trong hồ bơi vách đá.",
    "draw": "Nghỉ dưỡng xa xỉ giữa rừng núi. Tương tác tình thú cún con quỳ gối liếm mút ngón chân trên thảm, nâng mông kết hợp dưới nước ở hồ bơi vô cực bên vách đá và thả rông hóng gió ngoài sân thượng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong phòng ngủ chính và cạnh hồ bơi có chuẩn bị sẵn tinh dầu lá thông, muối khoáng suối lạnh và nguyên liệu vải len lông cừu tự nhiên.",
      "materials": [
        "Muối khoáng tự nhiên suối lạnh núi sâu",
        "Tinh dầu lá thông độ tinh khiết cao",
        "Vật tư vải len lông cừu cắm trại xa xỉ (Glamping)",
        "Nguyên liệu thảo mộc vùng đồi núi",
        "Khoáng chất suối nước nóng đặc dị"
      ]
    },
    "housing": {
      "tier": "luxury",
      "transaction": "rent_or_buy",
      "rent": 26000,
      "deposit": 52000,
      "sale": 11500000,
      "privacy": 4,
      "unlock": {
        "minMoney": 600000
      },
      "note": "Đỉnh cao toàn thành phố: Trang viên sơn cước riêng tư, bể bơi vô cực bên vách đá; chuyến xe buýt cuối đường núi cực sớm, không có xe riêng hầu như không thể ra ngoài."
    },
    "special": [
      "Thảm lông dài trong phòng ngủ chính mềm mại sạch sẽ, có thể dùng để quỳ gối liếm mút theo kiểu tình thú cún con và cố định tư thế.",
      "Rìa hồ bơi vô cực bên vách đá sử dụng tấm nhựa acrylic trong suốt hoàn toàn, khi nửa thân dưới ngâm trong nước sẽ mang lại sức căng thị giác từ bên ngoài cực mạnh.",
      "Lưng chừng núi gió núi thổi vù vù, tiếng thông reo có thể che lấp hoàn toàn tiếng da thịt va chạm và tiếng rên rỉ."
    ],
    "events": [
      {
        "id": "evt_qp_villa_carpet",
        "title": "Tương tác tình thú cún con quỳ gối liếm chân trên thảm",
        "场所": "Trên tấm thảm lông dài trong phòng ngủ chính",
        "优先级": 68,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bên trong phòng ngủ chính trải tấm thảm lông cừu màu trắng tinh dày êm ái, ngoài cửa sổ gió núi rít gào giữa rừng thông. Cô ấy tắm xong cơ thể trần trụi, chỉ khoác hờ một chiếc áo khoác mở phanh, đang đứng chân trần bên mép thảm chờ tương tác với bạn.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Kéo cô ấy ngồi xuống mép giường, lấy máy sấy tóc nhẹ nhàng giúp cô ấy sấy khô mái tóc dài ướt át",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Ngồi trên ghế sofa, bảo cô ấy cởi sạch đồ trần trụi hoàn toàn, quỳ trên tấm thảm theo tư thế tình thú cún con bò lại gần, dùng lưỡi liếm dọc từ kẽ ngón chân của bạn lên tới tận mắt cá chân, đồng thời dùng gò má cọ vào bắp chân bạn tận hưởng sự vuốt ve",
            "结算": "Độ thuận tùng+40, Độ ham muốn+30, Kinh nghiệm nhập vai tình thú+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_qp_villa_pool",
        "title": "Nâng mông kết hợp dưới nước trong hồ bơi vô cực bên vách đá",
        "场所": "Bên trong hồ bơi vô cực nước ấm bên vách đá",
        "优先级": 73,
        "trigger": {
          "时段": [
            "暮",
            "夜",
            "深夜"
          ],
          "顺从度": [
            580,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Mặt nước ấm của hồ bơi vô cực ánh lên sắc xanh thẳm huyền ảo, làn nước hồ nối liền một dải với bầu trời đêm bên ngoài vách đá. Cô ấy mặc đồ bơi tựa bên thành hồ bằng nhựa acrylic trong suốt, nửa thân dưới ngâm trong làn nước ấm ngắm nhìn ánh đèn dưới chân núi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Xuống nước bơi tới bên cạnh cô ấy, từ phía sau ôm lấy vòng eo cô ấy cùng nhau bơi lội trong làn nước ấm ngắm cảnh đêm",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=70, 顺从度>=620",
            "选项": "把她的泳裤拨到一旁，在水里从身后托住她的双臀向上抬起，把肉棒整根插进湿热的下体，迎着悬崖夜景在水流浮力中用力抽插",
            "结算": "性欲度重置, 顺从度+40, 露出经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=70, Độ thuận tùng>=620",
            "选项": "Vén quần bơi của cô ấy sang một bên, ở dưới nước từ phía sau đỡ lấy đôi bờ mông cô ấy nâng cao lên, đâm trọn cả cây dương vật vào hạ thể ướt nóng, đón cảnh đêm bên vách đá mà ra sức thúc đẩy nhờ lực đẩy của dòng nước",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "青屏半山独栋"
  },
  {
    "id": "mh_civic",
    "name": "Trung tâm Hành chính Công dân Minh Hồ",
    "fullName": "Khu Minh Hồ · Trung tâm Hành chính Công dân Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼"
    ],
    "intro": "Sảnh dịch vụ hành chính công tổng hợp quy mô lớn của khu Minh Hồ. Mỗi ngày người dân tới làm thủ tục giấy phép, hộ khẩu và bất động sản ra vào tấp nập không ngớt. Trong sảnh lớn có các quầy làm thủ tục đông nghịt người, buồng máy hành chính công tự phục vụ có chức năng khóa chặt cửa kính làm mờ và phòng mẹ và bé không lắp camera giám sát. Việc để nửa thân dưới thả rông bên dưới bộ trang phục công sở chỉnh tề lịch sự, vuốt ve qua lớp váy ngay khi đang làm thủ tục ở quầy cũng như khẩu giao sâu trong buồng máy tự phục vụ tràn ngập sự tương phản công sở và kích thích cấm kỵ.",
    "draw": "Làm thủ tục hành chính công. Mặc đồ công sở nhưng nửa thân dưới thả rông vuốt ve qua lớp váy ngay tại quầy làm thủ tục, đứng khẩu giao sâu trong buồng máy tự phục vụ và ẩn gian tiến vào từ phía sau trong phòng mẹ và bé.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại bàn điền biểu mẫu và trong tủ tiện ích có chuẩn bị sẵn mực đóng dấu, túi đựng hồ sơ và nguyên liệu vật tư in ấn văn phòng.",
      "materials": [
        "Mực đóng dấu áp lực cao quầy hành chính công",
        "Túi đựng hồ sơ tài liệu cầm tay",
        "Giấy in ấn văn phòng chuyên dụng",
        "Vật tư công vụ",
        "Vật tư sơ cứu tiện ích"
      ]
    },
    "special": [
      "Buồng máy hành chính công tự phục vụ có lắp kính làm mờ điện tử, sau khi bật điện khóa chặt thì bên ngoài chuyển sang màu trắng đục hoàn toàn không thể nhìn thấy.",
      "Phía dưới ghế ngồi ở quầy làm thủ tục có trang bị tấm chắn, người dân xếp hàng bên ngoài quầy chỉ có thể nhìn thấy nửa thân trên mặc đồ công sở chỉnh tề.",
      "Tiếng loa phát thanh đọc số thứ tự vang lên liên tục không ngớt, có thể che lấp hoàn toàn tiếng ho và tiếng nuốt nước bọt khi khẩu giao trong buồng máy."
    ],
    "events": [
      {
        "id": "evt_mh_civic_counter",
        "title": "Mặc đồ công sở nửa thân dưới thả rông vuốt ve qua lớp váy khi đang làm thủ tục tại quầy",
        "场所": "Ghế chờ trước quầy làm thủ tục",
        "优先级": 65,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            320,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Trong sảnh chờ gọi số ngồi kín người dân đang xếp hàng, loa phát thanh đang đọc số thứ tự. Hai người ngồi trước quầy làm thủ tục nộp hồ sơ, cô ấy mặc bộ vest chân váy công sở đoan trang lịch sự, chiếc áo măng tô dài đắp trên đùi, đang trả lời câu hỏi của nhân viên quầy.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy sắp xếp gọn gàng giấy tờ tùy thân và biểu mẫu cần nộp, hoàn tất thuận lợi việc giải quyết thủ tục",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Trong trạng thái bên trong chân váy công sở của cô ấy hoàn toàn thả rông không mặc quần lót, luồn tay vào dưới đáy váy dưới sự che chắn của chiếc áo măng tô, trực tiếp véo giữ hạ thể ướt đẫm của cô ấy xoa nắn, ép cô ấy phải cố nhịn tiếng thở dốc dùng giọng run rẩy trả lời câu hỏi của nhân viên quầy",
            "结算": "Độ thuận tùng+35, Độ ham muốn+25, Kinh nghiệm phơi bày+1, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          }
        }
      },
      {
        "id": "evt_mh_civic_machine",
        "title": "Đứng khẩu giao sâu trong buồng máy hành chính công tự phục vụ",
        "场所": "Buồng kính mờ máy hành chính công tự phục vụ",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào buồng máy hành chính công tự phục vụ khóa cửa lại, mặt kính làm mờ điện tử lập tức chuyển sang màu trắng đục ngăn cách bên ngoài. Màn hình phát sáng đang phát giọng nói hướng dẫn thao tác, cách ngoài cửa một mét có người dân đang đi lại chờ đợi.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Chạm lên màn hình in xong các tài liệu cần thiết, nắm tay cô ấy mở cửa bước ra khỏi buồng máy",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=560",
            "选项": "Kéo khóa quần lấy dương vật ra, yêu cầu cô ấy lập tức quỳ xuống ngay trước màn hình máy hành chính công đang phát sáng, nhét trọn cả cây dương vật vào sâu trong cổ họng cô ấy, cưỡng ép cô ấy nuốt nhả sâu tận họng giữa tiếng máy đọc hướng dẫn tự động",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "明湖市民中心"
  },
  {
    "id": "gl_pharmacy",
    "name": "Tiệm thuốc Đông y Bách Thảo",
    "fullName": "Khu Cổ Lĩnh · Tiệm thuốc Đông y Bách Thảo",
    "district": "Khu Cổ Lĩnh",
    "archetype": "medical",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Tiệm thuốc Bắc lâu đời kinh doanh suốt trăm năm trên phố cổ Cổ Lĩnh. Trưng bày hàng loạt tủ thuốc trăm ngăn bằng gỗ hồng mộc, cối giã thuốc bằng đồng thau và dao cầu thái thuốc. Trong tiệm tỏa ra mùi hương thuốc Bắc đắng ngọt nồng đượm. Chiếc bàn lớn bốc thuốc ở phía sau và phòng sắc thuốc được dãy tủ thuốc trăm ngăn che khuất hoàn toàn, tiếng người dân bấm chuông mua thuốc ở quầy trước đan xen với tiếng hát Việt kịch trên đài radio, trên chiếc bàn lớn bốc thuốc rất thích hợp để tiến hành ẩn gian tiến vào từ phía sau và điều giáo bằng nước thuốc ôn kinh.",
    "draw": "Bốc dược liệu Đông y và thưởng thuốc. Ẩn gian tiến vào từ phía sau trên bàn lớn bốc thuốc, uống nước thuốc ôn kinh làm nóng người kích phát động tình và khẩu giao trong phòng sắc thuốc.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong tủ thuốc và bàn bốc thuốc có chuẩn bị sẵn dược liệu ôn kinh, hoàn mật ong thủ công và nguyên liệu tinh dầu thảo mộc.",
      "materials": [
        "Dược liệu Đông y đặc chủng ôn kinh thông lạc",
        "Hoàn mật ong chế biến thủ công cổ truyền",
        "Tinh dầu thực vật nguyên chất tự nhiên",
        "Nguyên liệu thảo mộc bồi bổ",
        "Vật tư túi lọc chuyên dụng sắc thuốc"
      ]
    },
    "special": [
      "Bàn lớn bốc thuốc cao một mét hai, được dãy tủ thuốc trăm ngăn bằng gỗ hồng mộc cao vút che khuất hoàn toàn tầm nhìn từ quầy trước.",
      "Phòng sắc thuốc phía sau tiệm có chuẩn bị sẵn nước thuốc Đông y ôn kinh làm ấm cơ thể sắc tươi uống liền.",
      "Đài radio ở quầy trước quanh năm phát các vở Việt kịch cổ, có thể che lấp động tĩnh va chạm trên bàn bốc thuốc phía sau."
    ],
    "events": [
      {
        "id": "evt_gl_pharmacy_counter",
        "title": "Vén váy tiến vào từ phía sau trên bàn lớn bốc thuốc",
        "场所": "Cạnh bàn lớn bốc thuốc bằng gỗ hồng mộc",
        "优先级": 66,
        "trigger": {
          "时段": [
            "昼",
            "暮",
            "夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Hai người bước tới trước chiếc bàn bốc thuốc phía sau dãy tủ thuốc để chọn dược liệu. Ngoài quầy trước có người dân đang gõ chuông bấm chuẩn bị mua viên ngậm dịu họng, trong đài radio đang ngân nga khúc hát Việt kịch. Cô ấy chống hai tay lên chiếc bàn gỗ hồng mộc nặng nề, đang cúi đầu xem tập sách ảnh dược liệu.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy bốc xong gói thảo dược làm dịu mệt mỏi gói lại cẩn thận, nắm tay cô ấy ra quầy trước thanh toán",
            "结算": "Độ hảo cảm+20, Tiền bạc-45, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Ở phía sau cô ấy vén váy lên cởi bỏ quần lót, giữa tiếng chuông bấm leng keng của người dân mà thò tay đâm ngón tay vào trong hạ thể ướt mềm thúc ngoáy nhanh",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Giữ lấy eo cô ấy bắt nằm sấp trên bàn bốc thuốc, kéo khóa quần đâm trọn cả cây dương vật vào sâu trong hạ thể, nương theo tiếng hát Việt kịch trên radio mà ra sức thúc đẩy từ phía sau ngay trong bóng tối sau tủ thuốc",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      },
      {
        "id": "evt_gl_pharmacy_soup",
        "title": "Tương tác động tình sau khi uống bát nước thuốc ôn kinh làm nóng người",
        "场所": "Ghế dài nghỉ ngơi trong phòng sắc thuốc",
        "优先级": 71,
        "trigger": {
          "时段": [
            "暮",
            "夜"
          ],
          "好感度": [
            390,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Sau khi uống cạn một bát nhỏ nước thuốc ôn kinh pha chế đặc biệt ấm nóng trong phòng sắc thuốc, đôi gò má cô ấy nhanh chóng bừng lên sắc hồng quyến rũ, cơ thể nóng ran đổ mồ hôi, đứng không vững phải tựa vào ghế dài.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Lấy nước đun sôi để nguội dìu cô ấy uống, cởi cúc áo khoác ngoài giúp cô ấy quạt gió tản nhiệt",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Nhân lúc toàn thân cô ấy đang nóng bừng và vùng kín tụ máu ướt đẫm, kéo khóa quần bảo cô ấy quỳ xuống trước ghế dài, dùng khuôn miệng nhỏ ấm nóng đang bừng nhiệt ngậm lấy dương vật ra sức mút nuốt",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Trạng thái bất thường+Động tình, Tâm trạng→Động tình"
          }
        }
      }
    ],
    "cnName": "百草国药铺"
  },
  {
    "id": "gl_barber",
    "name": "Tiệm cắt tóc cổ Vĩnh Hồng",
    "fullName": "Khu Cổ Lĩnh · Tiệm cắt tóc cổ Vĩnh Hồng",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Tiệm cắt tóc cũ ở góc phố Cổ Lĩnh vẫn giữ nguyên phong cách thập niên tám mươi. Trang bị ghế cắt tóc nâng hạ thủy lực bằng gang đúc, bồn gội đầu nằm lát gạch men và tấm khăn choàng cắt tóc dài màu đen làm dày. Bác thợ cắt tóc già mắt đã lão thị và động tác chậm rãi. Khi vòi nước ở bồn gội đầu xả nước rào rào, tấm khăn choàng màu đen dày dặn phủ kín từ cổ xuống tới tận mắt cá chân; ngay dưới mí mắt bác thợ cắt tóc đang gội đầu cắt tóc cách đó chỉ một mét, phía dưới tấm khăn choàng ẩn giấu một sân khấu khẩu giao và kích thích bằng ngón tay tại điểm mù cực kỳ gợi tình.",
    "draw": "Trải nghiệm cắt tóc và gội đầu cổ điển. Tương tác khẩu giao / kích thích bằng ngón tay tại điểm mù dưới tấm khăn choàng cắt tóc màu đen dày dặn, vén váy tiến vào từ phía sau trước gương trên ghế cắt tóc nâng hạ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trên bàn cắt tóc và khu vực gội đầu có chuẩn bị sẵn kem gội đầu cổ điển, dầu bôi trơn máy móc và nguyên liệu khăn choàng vải cotton.",
      "materials": [
        "Kem gội đầu bạc hà cổ điển kiểu xưa",
        "Dầu bôi trơn ghế cắt tóc bằng gang đúc",
        "Khăn choàng cắt tóc cotton thuần dày dặn cao cấp",
        "Vật tư chăm sóc cắt tóc",
        "Chất tẩy rửa làm sạch hàng ngày"
      ]
    },
    "special": [
      "Tấm khăn choàng cắt tóc màu đen làm dày sau khi trải rộng sẽ phủ kín toàn thân xuống tới tận mắt cá chân, phía dưới làm bất kỳ động tác nào bên ngoài đều hoàn toàn không nhìn thấy.",
      "Tiếng vòi nước xả dòng nước lớn ở bồn gội đầu nằm nổ ầm ầm, có thể che lấp tiếng mút mát ướt át dưới tấm khăn choàng.",
      "Chiếc ghế cắt tóc nâng hạ bằng gang đúc có thể nâng cao thông qua bàn đạp thủy lực, hướng thẳng vào tấm gương cắt tóc lớn cổ điển chiếm trọn cả bức tường."
    ],
    "events": [
      {
        "id": "evt_gl_barber_cape",
        "title": "Tương tác khẩu giao và kích thích bằng ngón tay tại điểm mù dưới tấm khăn choàng cắt tóc màu đen dày dặn",
        "场所": "Trên bồn gội đầu nằm / ghế cắt tóc",
        "优先级": 68,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Cô ấy nằm trên bồn gội đầu, trên cổ quàng tấm khăn choàng cắt tóc màu đen dày dặn, tấm khăn choàng giống như một chiếc ô lớn che kín mít toàn thân cô ấy. Bác thợ cắt tóc đang mở vòi nước chảy rào rào xoa bọt gội đầu trên đỉnh đầu cô ấy. Bạn đứng ngay bên cạnh bồn gội đầu.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Đưa khăn bông giúp cô ấy chắn bọt nước bắn lên mặt, ngồi bên cạnh trò chuyện bầu bạn chờ cô ấy gội đầu xong",
            "结算": "Độ hảo cảm+20, Tiền bạc-30, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=530",
            "选项": "Dưới sự che chở của tiếng bác thợ cắt tóc xả nước rào rào, luồn tay vào phía dưới tấm khăn choàng vén váy cô ấy lên trực tiếp kích thích bằng ngón tay, hoặc kéo khóa quần bảo cô ấy dưới sự che chắn của tấm khăn choàng há miệng ngậm dương vật vào miệng mút nuốt trong khi bác thợ cắt tóc ở cách đó chỉ một mét hoàn toàn không hề hay biết",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          }
        }
      },
      {
        "id": "evt_gl_barber_chair",
        "title": "Vén váy tiến vào từ phía sau trên ghế cắt tóc nâng hạ đối diện tấm gương lớn",
        "场所": "Trên ghế cắt tóc nâng hạ thủy lực",
        "优先级": 72,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            380,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Tiệm cắt tóc sắp tới giờ đóng cửa, bác thợ cắt tóc đã vào phòng sau thay quần áo. Cô ấy ngồi trên chiếc ghế cắt tóc thủy lực cao lớn, trước mặt là nguyên một tấm gương kính khung đá cẩm thạch, trong tiệm chỉ còn lại ánh hoàng hôn mờ tối nơi góc phố.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nhấn bàn đạp thủy lực giúp cô ấy hạ ghế cắt tóc xuống độ cao thoải mái, nắm tay cô ấy rời khỏi tiệm cắt tóc",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "sexAction": {
            "分类": "特殊H",
            "门槛": "性欲度>=65, 顺从度>=600",
            "选项": "踩动液压踏板把理发椅升高，让她双手扶着椅子靠背趴好，把她的裙子推到腰间脱下内裤，从身后把肉棒插进下体，正对着大镜子里自己发情的模样有力抽插",
            "结算": "性欲度重置, 顺从度+40, 露出经验+1, 近期性经验次数+1"
          },
          "mischief": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Đạp bàn đạp thủy lực nâng cao chiếc ghế cắt tóc lên, bảo cô ấy dùng hai tay vịn vào lưng ghế nằm sấp xuống, tốc váy cô ấy lên ngang eo cởi bỏ quần lót, từ phía sau đâm dương vật vào hạ thể, hướng thẳng vào dáng vẻ động tình của chính cô ấy trong tấm gương lớn mà ra sức thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "永红老理发店"
  },
  {
    "id": "mh_plaza",
    "name": "Bậc thềm lớn Quảng trường Minh Hồ",
    "fullName": "Khu Minh Hồ · Bậc thềm lớn Quảng trường Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Bậc thềm đá cẩm thạch quy mô lớn nằm trước tòa nhà biểu tượng ở Quảng trường Trung tâm Minh Hồ. Đêm khuya dòng người trên quảng trường đã tản đi hết, những bậc thềm cao vút bóng tối trùng điệp, phía xa chỉ có ánh đèn đường biểu tượng tỏa ra tia sáng lạnh lẽo. Ở chỗ cao nhất của bậc thềm tầm nhìn thoáng đãng và được hàng cột hành lang (Colonnade) che khuất; dưới hơi lạnh ngoài trời và cảm giác tim đập thình thịch khi phía xa thỉnh thoảng có người qua đường đi ngang qua, nơi đây mang lại sự kích thích phơi bày ngoài trời và làm tình tư thế cưỡi ngựa cực mạnh.",
    "draw": "Đi dạo đêm khuya trên quảng trường. Ngồi dạng chân cưỡi ngựa kết hợp trong bóng tối bậc thềm đá cẩm thạch, lấy áo khoác lớn che chắn vuốt ve hạ thể và phơi bày trên đỉnh bậc thềm lộ thiên.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Ở góc bậc thềm và hàng cột hành lang có thể thu thập bột mịn đá cẩm thạch, nước ngưng tụ ban đêm và các nguyên liệu tự nhiên đô thị khác.",
      "materials": [
        "Bột mịn đá cẩm thạch tự nhiên",
        "Nước ngưng tụ ban đêm trong thành phố",
        "Vật tư đồ lưu niệm văn hóa sáng tạo quảng trường",
        "Nguyên liệu bột khoáng vật",
        "Chất tẩy rửa chịu thời tiết"
      ]
    },
    "special": [
      "Bậc thềm đá cẩm thạch có hàng chục bậc, bóng tối của hàng cột hành lang trên đỉnh tránh hoàn toàn tầm nhìn của bảo vệ đi tuần tra dưới mặt đất.",
      "Đêm khuya mặt đá bậc thềm mát lạnh, tạo nên sự tương phản cảm quan rõ rệt với cơ thể ấm nóng.",
      "Ánh đèn đường quảng trường ở phía xa dịu nhẹ, có thể phác họa nên tư thế cưỡi ngựa lộ thiên đầy cuốn hút."
    ],
    "events": [
      {
        "id": "evt_mh_plaza_steps",
        "title": "Cởi quần cưỡi ngựa kết hợp trong bóng tối bậc thềm đá cẩm thạch",
        "场所": "Trong bóng tối trên đỉnh bậc thềm quảng trường",
        "优先级": 66,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            340,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Quảng trường lúc hai giờ đêm không một bóng người. Hai người ngồi trên đỉnh bậc thềm cao vút, phía sau lưng là cột đá kiến trúc to lớn, dưới chân là cảnh đêm quảng trường khoáng đạt. Gió đêm thổi qua, mặt đá bậc thềm mang theo hơi lạnh mát.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Mở rộng áo khoác lớn bọc chặt cô ấy vào trong lòng sưởi ấm, ngồi trên bậc thềm cùng cô ấy ngắm nhìn bầu trời sao thành phố lúc đêm khuya",
            "结算": "Độ hảo cảm+25, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Bảo cô ấy cởi quần lót ngồi xuống hướng thẳng ra quảng trường dưới sự che chắn của chiếc áo khoác lớn, luồn tay vào dưới đáy váy vuốt ve hạ thể ướt đẫm của cô ấy, ngắm nhìn cô ấy đỏ mặt nhẫn nại trước quảng trường trống trải",
            "结算": "Độ thuận tùng+30, Kinh nghiệm phơi bày+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Tựa ngồi trên bậc thềm đá cẩm thạch cởi khóa quần ra, bảo cô ấy tụt quần lót ngồi dạng chân vào trong lòng bạn, nuốt trọn cả cây dương vật vào hạ thể ướt mượt, đón làn gió đêm nơi quảng trường trống trải mà nhấp nhô lên xuống cưỡi ngựa thúc đẩy",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm phơi bày+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "明湖广场大台阶"
  },
  {
    "id": "xz_warehouse",
    "name": "Siêu thị kho bãi Tây Châu",
    "fullName": "Khu Tây Châu · Siêu thị kho bãi Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "commercial",
    "privacy": 2,
    "openHours": [
      "昼",
      "暮",
      "夜"
    ],
    "intro": "Siêu thị kho bãi bán buôn (Warehouse club) ở ngoại ô Tây Châu. Kệ hàng cao tới mức phải dùng thang, lối đi rộng đủ cho xe nâng hàng chạy qua. Quẹt thẻ hội viên để vào, cuối tuần đông đúc chen chúc, ca tối ngày thường rất vắng người. Dãy kệ hàng trong cùng là khu đồ gia dụng, chăn lông và gối chất cao tới tận nóc, cuối lối đi là góc chết. Trước giờ đóng cửa loa phát thanh sẽ thông báo một lần, quầy thu ngân nằm ở đầu bên kia. Dây rút nhựa (Cable ties) và dây buộc hàng ở khu ngũ kim có thể tiện tay lấy ngay.",
    "draw": "Mua sắm số lượng lớn. Ca tối vắng người, dãy kệ trong cùng là góc chết.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": null,
    "special": [
      "Cuối lối đi khu đồ gia dụng ở dãy kệ trong cùng là góc chết, trước giờ đóng cửa sau khi loa phát thanh thông báo xong sẽ không còn ai đi về phía này nữa.",
      "Dây rút nhựa và dây buộc hàng ở khu ngũ kim có thể tiện tay lấy dùng."
    ],
    "events": [
      {
        "id": "evt_xz_wh_aisle",
        "title": "Góc chết khu đồ gia dụng ở dãy kệ trong cùng ca tối",
        "场所": "Khu đồ gia dụng siêu thị kho bãi",
        "优先级": 62,
        "trigger": {
          "时段": [
            "夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ca tối đã vắng người, ở cuối lối đi khu đồ gia dụng tại dãy kệ trong cùng chỉ có hai người các bạn. Kệ hàng chất cao tới tận nóc, những chồng chăn lông và gối đã chắn kín tầm nhìn hai bên. Quầy thu ngân nằm ở đầu bên kia, loa phát thanh vừa mới báo còn hai mươi phút nữa là đóng cửa. Bạn đã tiện tay lấy mấy sợi dây rút nhựa ở khu ngũ kim.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giúp cô ấy đẩy xe đẩy hàng ra quầy thu ngân thanh toán rồi rời đi",
            "结算": "Độ hảo cảm+10, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=600",
            "选项": "Bảo cô ấy cởi sạch quần áo đứng đối diện với kệ hàng, dùng dây rút nhựa trói chặt cổ tay cô ấy vào thanh ngang kệ hàng, đặt điện thoại ở dãy kệ đối diện quay lại — trước khi loa phát thanh thông báo lần thứ hai sẽ tháo ra",
            "结算": "Độ thuận tùng+30, Kinh nghiệm play phục tùng+1, Kinh nghiệm chụp lén+1, Tâm trạng→Tủi thân"
          }
        }
      }
    ],
    "cnName": "西洲仓储超市"
  },
  {
    "id": "lx_canteen",
    "name": "Nhà ăn số 1 Làng Đại học",
    "fullName": "Khu Lạc Hà · Nhà ăn số 1 Làng Đại học",
    "district": "Khu Lạc Hà",
    "archetype": "academy",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮"
    ],
    "intro": "Nhà ăn sinh viên nhiều tầng có quy mô lớn nhất trong làng đại học. Tầng hai có một dãy phòng riêng tắt đèn chuyên phục vụ cán bộ giảng viên và các câu lạc bộ liên hoan, ở phòng rửa bát phía sau máy rửa bát dòng nước lớn nổ ầm ầm. Sau giờ cao điểm bữa tối, hành lang khu phòng riêng trên tầng hai tắt đèn; sau khi khép cửa phòng riêng lại, dưới sự che chở của tiếng nước chảy ầm ầm ở phòng rửa bát vách bên và tiếng sinh viên ồn ào dưới lầu, đây là địa điểm để triển khai ẩn gian trong khuôn viên trường và tiến vào từ phía sau trên bàn ăn.",
    "draw": "Thưởng thức món ăn ngon bổ rẻ đặc sắc của trường đại học. Tiến vào từ phía sau trên bàn ăn trong phòng riêng tắt đèn tầng hai, đè vào tường ẩn gian sát vách phòng rửa bát và Play trên bàn ăn câu lạc bộ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Tại các quầy bán đồ ăn và bếp sau có chuẩn bị sẵn tương ớt đặc sản, bộ đồ ăn dùng một lần và nguyên liệu nông sản lương thực.",
      "materials": [
        "Tương ớt nguyên chất đặc sản nhà ăn trường học",
        "Bộ đồ ăn dùng một lần dung tích lớn",
        "Nguyên liệu nông sản lương thực tinh chế",
        "Vật tư dùng hàng ngày trong khuôn viên trường",
        "Chất tẩy rửa làm sạch"
      ]
    },
    "special": [
      "Khu phòng riêng dành cho cán bộ giảng viên trên tầng hai sau bảy giờ tối toàn bộ hành lang đều tắt đèn, cửa phòng riêng có khóa trong.",
      "Máy rửa bát phun nước thương mại cỡ lớn trong phòng rửa bát có tiếng nổ cực lớn, cách âm tuyệt hảo.",
      "Ở sảnh lớn dưới lầu hàng ngàn sinh viên đang dùng bữa ồn ào náo nhiệt, tạo thành âm thanh nền che chở tự nhiên."
    ],
    "events": [
      {
        "id": "evt_lx_canteen_room",
        "title": "Chống hai tay lên bàn ăn tiến vào từ phía sau trong phòng riêng tắt đèn tầng hai",
        "场所": "Bên trong phòng riêng tắt đèn tầng hai nhà ăn",
        "优先级": 65,
        "trigger": {
          "时段": [
            "暮"
          ],
          "好感度": [
            330,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào phòng riêng cán bộ giảng viên đã tắt đèn trên tầng hai rồi khép cửa gỗ lại. Trong phòng hơi mờ tối, bên ngoài vọng vào tiếng nước chảy ầm ầm của phòng rửa bát và tiếng ồn ào của sinh viên đang ăn cơm dưới lầu. Cô ấy đứng cạnh chiếc bàn ăn tròn thu dọn cặp sách.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Giúp cô ấy xách cặp sách, nắm tay cô ấy bước ra khỏi phòng riêng đi dạo trên con đường rợp bóng cây trong sân trường",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=520",
            "选项": "Bảo cô ấy chống hai tay lên chiếc bàn ăn tròn, vén chân váy xếp ly cởi bỏ quần lót, giữa tiếng ồn ào của sinh viên dưới lầu mà thò tay vào trong xoa nắn hạ thể ướt đẫm, bắt cô ấy bịt miệng không được phát ra tiếng",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=590",
            "选项": "Bảo cô ấy chống hai tay lên bàn ăn cong mông lên, kéo khóa quần đâm trọn cả cây dương vật vào hạ thể, dưới sự che chở của tiếng nước chảy từ phòng rửa bát vách bên mà thúc mạnh liên hồi trong phòng riêng nhà ăn trường",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+35, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "大学城第一食堂"
  },
  {
    "id": "dt_gas",
    "name": "Trạm xăng & rửa xe Đông Đường",
    "fullName": "Khu Đông Đường · Trạm xăng & rửa xe Đông Đường",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 2,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Trạm xăng quy mô lớn mở cửa 24 giờ nằm cạnh lối vào đường cao tốc vành đai Đông Đường. Trang bị đường hầm rửa xe cổng vòm tự động hoàn toàn. Khi chiếc ô tô tiến vào đường hầm rửa xe, chổi cuộn cơ học và vòi phun nước áp lực cao nổ ầm ầm, lớp bọt rửa xe ngũ sắc lập tức phủ kín hoàn toàn toàn bộ kính xe; bên trong xe lập tức rơi vào trạng thái khép kín tột độ, rung chấn tần số cao và che khuất hoàn toàn, là địa điểm tuyệt hảo để ngồi dạng chân cưỡi ngựa kết hợp ngay trên ghế lái chính.",
    "draw": "Đổ xăng và rửa xe nghỉ ngơi 24h. Cưỡi ngựa làm tình trên ghế lái chính khi bọt xà phòng phủ kín cửa kính trong đường hầm rửa xe tự động, ẩn gian đánh nhanh thắng nhanh tại nhà vệ sinh bên cạnh trạm xăng vào ban đêm.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": true
    },
    "gather": {
      "desc": "Trong phòng rửa xe và cửa hàng tiện lợi có chuẩn bị sẵn dung dịch rửa xe siêu bọt, bình xịt chống mờ sương kính và nguyên liệu phụ gia nhiên liệu.",
      "materials": [
        "Dung dịch rửa xe siêu bọt nồng độ cao",
        "Bình xịt chống mờ sương kính ô tô",
        "Dung dịch gốc phụ gia nhiên liệu",
        "Vật tư chăm sóc bảo dưỡng ô tô",
        "Khăn làm sạch cầm tay"
      ]
    },
    "special": [
      "Sau khi đường hầm rửa xe tự động khởi động, bọt xà phòng áp lực cao che khuất hoàn toàn cửa sổ xe, từ bên ngoài hoàn toàn không thể nhìn thấy bên trong xe.",
      "Chổi cuộn khổng lồ áp sát vào thân xe quay tốc độ cao, mang lại độ rung cơ học mạnh mẽ liên tục cho toàn bộ chiếc xe.",
      "Quá trình rửa xe kéo dài khoảng ba phút, thời gian gấp gáp và cực kỳ kích thích."
    ],
    "events": [
      {
        "id": "evt_dt_gas_carwash",
        "title": "Ngồi dạng chân cưỡi ngựa kết hợp trên ghế lái chính khi bọt xà phòng phủ kín kính trong đường hầm rửa xe",
        "场所": "Ghế lái chính ô tô bên trong đường hầm rửa xe",
        "优先级": 70,
        "trigger": {
          "时段": [
            "朝",
            "昼",
            "暮",
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Ô tô tiến vào đường hầm rửa xe về số N (số mo), hai hàng chổi cuộn khổng lồ hai bên bắt đầu vận hành, lượng lớn bọt xà phòng áp lực cao màu trắng lập tức phun kín toàn bộ kính xe, tầm nhìn bên ngoài xe bị che kín hoàn toàn, chổi cuộn áp sát vào thân xe mang lại tiếng nổ ầm ầm và độ rung chấn mạnh mẽ. Cô ấy ngồi ở ghế phụ nhìn khung cửa sổ xe đã bị bọt xà phòng bịt kín.",
        "card": {
          "pureLove": {
            "分类": "Đời thường",
            "选项": "Giữa nhịp rung chấn nắm chặt lấy tay cô ấy, cùng cô ấy ngắm nhìn khung cảnh kỳ diệu khi lớp bọt ngũ sắc chảy tràn trên cửa kính xe",
            "结算": "Độ hảo cảm+20, Tâm trạng→Vui vẻ"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=540",
            "选项": "Trong mấy phút chổi cuộn làm rung chấn mạnh thân xe, luồn tay vào dưới đáy váy cô ấy vuốt ve hạ thể ướt đẫm, ngắm nhìn cô ấy đỏ mặt rên khẽ trong không gian khép kín tột độ khi cửa kính xe đã bị bọt xà phòng bịt kín",
            "结算": "Độ thuận tùng+30, Kinh nghiệm lén lút+1, Tâm trạng→Động tình"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Cởi khóa quần, bảo cô ấy cởi bỏ quần lót ngồi dạng chân vào trong lòng bạn trên ghế lái chính, nuốt trọn cả cây dương vật vào sâu trong hạ thể, nhấp nhô lên xuống cưỡi ngựa thúc mạnh giữa khung cửa kính phủ kín bọt và độ rung mãnh liệt của cỗ máy rửa xe",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "东塘加油站洗车房"
  },
  {
    "id": "mh_youth_apt",
    "name": "Chung cư thanh niên Minh Hồ",
    "fullName": "Khu Minh Hồ · Chung cư thanh niên Minh Hồ",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Chung cư thanh niên nằm phía sau trung tâm thương mại cũ ở bờ Tây hồ Minh Hồ. Phòng đơn rộng hơn ba mươi mét vuông một chút, một phòng ngủ một phòng vệ sinh cộng thêm một gian bếp nhỏ, cửa sổ hướng Bắc nhìn ra bức tường sau của trung tâm thương mại và một hàng cây râm bụt (nữ trinh), mùa đông sau ba giờ chiều là không còn ánh nắng nữa. Ngay dưới lầu là trạm xe buýt và phòng giặt ủi hai mươi bốn giờ, đi bộ là có thể tới bệnh viện và trung tâm hành chính công. Tuổi đời tòa nhà khá cũ, tường ngăn là gạch rỗng.",
    "draw": "Sinh hoạt trong phòng đơn nhỏ nội đô. Khoảng cách chỉ vừa xoay người là chạm vào nhau trong căn phòng ba mươi mét vuông, những đêm khuya bắt buộc phải nén tiếng thở dưới bức tường ngăn bằng gạch rỗng và buổi sớm mai trong bóng cây bên cửa sổ hướng Bắc.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "starter",
      "transaction": "rent",
      "rent": 3200,
      "deposit": 3200,
      "privacy": 3,
      "note": "Phòng đơn nhỏ trung tâm thành phố, xe buýt và tiện ích sinh hoạt thuận tiện",
      "cost": "Thuê tháng RMB 3,200 / Cọc 1 đóng 1"
    },
    "special": [
      "Dưới lầu có nhiều tuyến xe buýt, thích hợp cho cuộc sống lúc mới khởi đầu chưa có xe riêng.",
      "Diện tích phòng đơn nhỏ, tường ngăn bằng gạch rỗng, âm thanh sinh hoạt ở phòng bên cạnh và ngoài hành lang đều nghe rất rõ.",
      "Cửa sổ hướng Bắc nhìn ra tường sau của trung tâm thương mại cũ, ánh sáng tự nhiên kém, nhưng cũng không có bất kỳ tầm nhìn đối diện nào."
    ],
    "events": [],
    "cnName": "明湖青年公寓"
  },
  {
    "id": "dt_town_rental",
    "name": "Nhà trọ đầu thị trấn Đông Đường",
    "fullName": "Khu Đông Đường · Nhà trọ đầu thị trấn Đông Đường",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Phòng đơn độc lập trong một ngôi nhà tự xây ba tầng ở đầu thị trấn Đông Đường. Chủ nhà tự ở tầng một, phòng thuê nằm ở tầng ba có khóa cửa độc lập, đồ nội thất và bình nóng lạnh đều đã cũ, nắng hướng Tây chiếu tới tận chiều tối mới dịu xuống. Ngoài cửa sổ là ruộng rau và một con kênh tưới tiêu, tiếng ếch kêu suốt cả đêm, mùa thu bên bờ kênh thường có cò trắng đáp xuống. Ngay ngã tư đường có xe buýt vào nội thành và xe tuyến ra sân bay.",
    "draw": "Sinh hoạt phòng đơn giá thuê thấp ở đầu thị trấn. Buổi chiều tà sau khi nắng Tây đã tắt, đêm hè tiếng ếch kêu át đi mọi âm thanh và những cử động bắt buộc phải thật khẽ dưới sàn nhà mỏng.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "starter",
      "transaction": "rent",
      "rent": 1400,
      "deposit": 1400,
      "privacy": 3,
      "note": "Phòng đơn giá rẻ đầu thị trấn, chi phí sinh hoạt thấp nhưng vào nội thành khá xa",
      "cost": "Thuê tháng RMB 1,400 / Cọc 1 đóng 1"
    },
    "special": [
      "Đi bộ có thể tới điểm dừng xe buýt đầu thị trấn và xe tuyến sân bay.",
      "Đồ nội thất và khả năng cách âm ở mức bình thường, thích hợp để ưu tiên ép thấp chi phí sinh hoạt cố định lúc mới khởi đầu.",
      "Sàn nhà tự xây khá mỏng, chủ nhà ở tầng một, động tĩnh ban đêm ở dưới lầu đều có thể nghe thấy."
    ],
    "events": [],
    "cnName": "东塘镇口出租屋"
  },
  {
    "id": "qp_foothill_share",
    "name": "Sân trọ ghép chân núi Thanh Bình",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Sân trọ ghép chân núi Thanh Bình",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Nhà thuê chung cải tạo từ sân viện cũ nằm bên ngoài trung tâm du khách núi Thanh Bình, những dãy nhà trệt gạch xanh bao quanh một sân giếng trời nhỏ. Phòng thuê là một phòng ngủ có khóa cửa độc lập, nhà bếp và khu giặt giũ dùng chung, trong cùng sân viện còn có hai ba hộ khác. Giữa sân giếng trời có một cây sơn trà (tỳ bà) già, sáng tối đều có chim sẻ núi và sóc chạy xuống bới lá rụng. Mùa cao điểm ban ngày du khách đi thành từng đoàn ngang qua trước cổng, xe buýt chuyến cuối lúc năm rưỡi chiều.",
    "draw": "Sinh hoạt phòng ngủ thuê chung dưới chân núi. Buổi sớm mai dưới gốc cây sơn trà giữa sân giếng trời, khoảng thời gian ở riêng ngắn ngủi trốn những người cùng thuê trong gian bếp chung và buổi bình minh được tiếng chim sẻ núi đánh thức.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "starter",
      "transaction": "rent",
      "rent": 1800,
      "deposit": 1800,
      "privacy": 3,
      "note": "Phòng ngủ riêng, bếp dùng chung, chuyến xe buýt cuối ngày kết thúc khá sớm",
      "cost": "Thuê tháng RMB 1,800 / Cọc 1 đóng 1"
    },
    "special": [
      "Nằm gần trung tâm du khách và bến đầu cuối xe buýt, việc đi lại vào ban ngày khá thuận tiện.",
      "Nhà bếp và khu giặt giũ dùng chung, sau chuyến xe buýt cuối cùng lúc năm rưỡi chiều chỉ có thể bắt taxi vào nội thành.",
      "Trong cùng sân viện còn có hai ba hộ thuê chung, sân giếng trời là không gian chung, ban đêm ra vào đều sẽ bị nghe thấy."
    ],
    "events": [],
    "cnName": "青屏山脚合租院"
  },
  {
    "id": "mh_lanting",
    "name": "Minh Hồ Lan Đình",
    "fullName": "Khu Minh Hồ · Minh Hồ Lan Đình",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Chung cư nâng cấp nằm ở dãy thứ hai ven hồ bờ Đông hồ Minh Hồ, mười tám tầng mỗi tầng một thang máy hai căn hộ. Phòng khách hướng Tây, cửa kính sát đất nhìn thẳng ra mặt hồ và cụm tòa nhà văn phòng chóp nhọn khu CBD ở bờ bên kia, ban công sâu hai mét. Dưới lầu là dải cây xanh ven hồ với những hàng liễu rủ xen lẫn hoa lan tháng hai, trong hồ quanh năm có vịt trời và cò trắng, buổi sáng sớm tiếng chim hót át cả tiếng xe cộ trên đường ven hồ. Thang máy quẹt thẻ lên thẳng tận cửa căn hộ, cùng tầng chỉ có duy nhất một hộ hàng xóm.",
    "draw": "Phân khúc đổi nhà chung cư ngắm cảnh hồ. Ôm nhau dưới ánh chiều tà trước cửa kính sát đất hướng Tây, trò chuyện đêm khuya trong gió hồ trên ban công sâu hai mét và giấc ngủ chung buổi sớm mai bên bệ cửa sổ lồi (Bay window) phòng ngủ chính.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent_or_buy",
      "rent": 5200,
      "deposit": 10400,
      "sale": 1900000,
      "privacy": 4,
      "unlock": {
        "minMoney": 80000
      },
      "note": "Căn hộ cải tiến bờ đông Minh Hồ, ban công tầng cao nhìn ra mặt hồ; lựa chọn nâng cấp nhà ở đầu tiên, 2 trạm tàu điện là vào CBD."
    },
    "special": [
      "Mười tám tầng mỗi tầng một thang máy hai căn hộ, thang máy quẹt thẻ lên thẳng tận cửa nhà, hàng xóm cùng tầng chỉ có một gia đình.",
      "Bên ngoài cửa kính sát đất hướng Tây là mặt hồ, phía trước mặt không có tòa nhà nào đối diện, ban ngày không kéo rèm cũng không ai nhìn vào được.",
      "Ban công sâu hai mét, có đường thoát nước, đặt vừa ghế nằm tắm nắng, ban đêm gió hồ thổi mát rượi không ngừng."
    ],
    "events": [],
    "cnName": "明湖澜庭"
  },
  {
    "id": "xz_jiangwan",
    "name": "Chung cư vịnh sông Tây Châu",
    "fullName": "Khu Tây Châu · Chung cư vịnh sông Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Chung cư cao tầng ngắm cảnh sông nằm ở phía Tây Đại lộ Lâm Giang, hai mươi sáu tầng mỗi tầng một thang máy ba căn hộ. Mặt kính cửa sổ sát đất nguyên mảng hướng thẳng ra sông Lâm Giang và luồng tàu chở hàng ở bờ bên kia, khi màn đêm buông xuống đèn hành trình của những đoàn sà lan nối đuôi nhau trôi về phía hạ lưu. Dưới lầu là đường đi bộ ven sông và một hàng cây thủy sam, gió sông quanh năm thổi không ngừng, tháng năm tháng sáu trong bãi lau sậy có diệc đêm. Cửa sổ là kính cách âm chân không hai lớp, vừa đóng lại là không còn nghe thấy tiếng dòng xe cộ dưới lầu nữa.",
    "draw": "Ở dài hạn tại chung cư cao tầng ngắm cảnh sông. Ôm nhau trước cửa kính sát đất hướng ra luồng tàu chạy, đêm khuya không cần phải kìm nén âm thanh phía sau lớp kính cách âm và giấc ngủ chung đón gió sông sau khi phát sóng tới tận bình minh.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent_or_buy",
      "rent": 6800,
      "deposit": 13600,
      "sale": 2600000,
      "privacy": 4,
      "unlock": {
        "minMoney": 120000
      },
      "note": "Căn hộ tầng cao view sông Hà Tây, cửa sổ kính suốt từ sàn đến trần đối diện Lâm Giang; đi bộ là tới phòng thu âm, khoang Esports và nhà hát, lựa chọn hàng đầu của người làm livestream."
    },
    "special": [
      "Mặt kính cửa sổ sát đất nguyên mảng là kính cách âm chân không hai lớp, sau khi đóng cửa sổ lại âm thanh trong phòng không truyền xuống đường đi bộ dưới lầu.",
      "Mỗi tầng một thang máy ba căn hộ, hàng xóm cùng tầng phần lớn đều là người làm nghề phát sóng trực tiếp ngủ ngày cày đêm, ban ngày ngoài hành lang không có một bóng người.",
      "Chính diện ban công chỉ có mặt sông và bến cảng chở hàng ở bờ bên kia, không có bất kỳ tòa nhà đối diện nào."
    ],
    "events": [],
    "cnName": "西洲江湾公寓"
  },
  {
    "id": "xz_bonded",
    "name": "Kho ngoại quan Tây Châu",
    "fullName": "Khu Tây Châu · Kho ngoại quan Tây Châu",
    "district": "Khu Tây Châu",
    "archetype": "living",
    "privacy": 3,
    "openHours": [
      "夜",
      "深夜"
    ],
    "intro": "Nhà kho ngoại quan công nghiệp trần cao hiện đại thuộc khu cảng Tây Châu. Bên trong xếp hàng loạt kệ hàng hạng nặng dày đặc cao hơn mười mét, những dãy pallet gỗ nhập khẩu và thùng carton khổ lớn chất cao như núi. Đêm khuya bên trong nhà kho chỉ có đèn sàn khẩn cấp đang bật, xe quét dọn vận hành nổ ầm ầm ở lối đi phía xa. Chồng pallet gỗ sâu giữa các kệ hàng cùng góc chết thùng container tạo thành địa điểm tuyệt hảo để trói buộc và đè vào tường làm tình.",
    "draw": "Khám phá nhà kho công nghiệp ban đêm. Trói ngược hai tay tiến vào từ phía sau trên pallet gỗ kệ hàng, đứng đè vào tường thúc đẩy trong bóng tối thùng giấy khổ lớn và Play tại điểm mù kệ hàng.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại bàn đóng gói kệ hàng và khu vực pallet có chuẩn bị sẵn màng nhựa bọc hàng, dây đai niêm phong nylon và nguyên liệu vật tư chống ẩm.",
      "materials": [
        "Màng nhựa bọc hàng buộc chặt cấp công nghiệp",
        "Dây đai buộc hàng nylon cường độ cao",
        "Vật tư pallet gỗ nhập khẩu",
        "Vật tư dây niêm phong hậu cần vận tải",
        "Chất hút ẩm chống mốc"
      ]
    },
    "special": [
      "Lối đi giữa các kệ hàng trần cao dài tới hàng trăm mét, góc rẽ tạo bởi hàng hóa chất chồng chắn hoàn toàn tầm nhìn.",
      "Bàn đóng gói có trang bị dây đai buộc hàng bằng nylon mềm độ bền cao, có thể dùng để trói ngược hai tay cực kỳ chắc chắn.",
      "Tiếng máy móc vệ sinh vận hành nổ ầm ầm ở đầu xa vang lên liên tục không ngớt, có thể che lấp tiếng va chạm sâu trong lối đi."
    ],
    "events": [
      {
        "id": "evt_xz_bonded_rack",
        "title": "Trói ngược hai tay tiến vào từ phía sau trên pallet gỗ kệ hàng",
        "场所": "Cạnh chồng pallet gỗ sâu giữa các kệ hàng",
        "优先级": 67,
        "trigger": {
          "时段": [
            "夜",
            "深夜"
          ],
          "好感度": [
            350,
            1000
          ],
          "需同行": true
        },
        "opportunity": "Bước vào sâu trong lối đi giữa các kệ hàng cao hàng chục mét, bốn phía được những thùng hàng hóa nhập khẩu chất cao mấy tầng che kín mít. Trên mặt đất có đặt một tấm pallet gỗ bằng phẳng sạch sẽ. Cô ấy đứng cạnh tấm pallet tò mò chạm tay vào lớp màng nhựa bọc hàng.",
        "card": {
          "pureLove": {
            "分类": "Thuần ái",
            "选项": "Nắm tay cô ấy rời khỏi khu vực kệ hàng cao vút, dẫn cô ấy tới cạnh phòng bảo vệ uống một cốc cà phê nóng",
            "结算": "Độ hảo cảm+20, Tâm trạng→Lưu luyến"
          },
          "mischief": {
            "分类": "Điều giáo",
            "门槛": "Độ thuận tùng>=550",
            "选项": "Dùng dây đai buộc hàng bằng nylon trói ngược hai tay cô ấy ra sau lưng, bắt cô ấy nằm sấp trên tấm pallet gỗ, vén váy tháo khóa áo ngực, dùng tay vê nắn đầu ngực nhạy cảm và âm vật dưới bóng tối của kệ hàng công nghiệp",
            "结算": "Độ thuận tùng+35, Độ ham muốn+30, Kinh nghiệm play phục tùng+1, Tâm trạng→Ngượng ngùng"
          },
          "sexAction": {
            "分类": "H đặc biệt",
            "门槛": "Độ ham muốn>=65, Độ thuận tùng>=600",
            "选项": "Trói ngược hai tay cô ấy ra sau lưng bắt nằm sấp trên tấm pallet gỗ, cởi quần lót từ phía sau đâm dương vật vào hạ thể ướt mềm, nắm lấy dây đai buộc hàng ra sức thúc mạnh mãnh liệt ngay trên tấm pallet gỗ",
            "结算": "Độ ham muốn đặt lại, Độ thuận tùng+40, Kinh nghiệm lén lút+1, Số lần kinh nghiệm gần đây+1"
          }
        }
      }
    ],
    "cnName": "西洲保税仓"
  },
  {
    "id": "pj_yunju",
    "name": "Phố Giang Vân Cư",
    "fullName": "Khu Vũ Thạch & Phố Giang · Phố Giang Vân Cư",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cụm chung cư cao tầng nằm ở phía Bắc Khu Nghiên cứu & Sáng tạo, ba mươi hai tầng, là đợt tòa nhà mới nhất ở khu vực phía Bắc sông này. Căn hộ ba phòng ngủ lớn thông thoáng hai hướng Nam Bắc, phòng ngủ chính có phòng tắm riêng và nguyên một mặt cửa kính sát đất hướng Nam, ngoài cửa sổ là sườn cỏ Khu Nghiên cứu & Sáng tạo cùng cả một rừng cây ngân hạnh, mùa thu lá vàng rực rỡ. Khoảng cách giữa các tòa nhà trên tám mươi mét, dưới lầu có đường chạy bộ bao quanh một vòng hồ nhân tạo, ban đêm hầu như không có ô nhiễm ánh sáng.",
    "draw": "Ở dài hạn tại chung cư cao tầng phía Bắc sông. Ôm nhau buổi chiều trước cửa kính sát đất hướng Nam, ban ngày không cần kéo rèm nhờ khoảng cách giữa các tòa nhà cực rộng và tắm chung sau khi chạy bộ ban đêm quanh hồ nhân tạo trở về.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "upper",
      "transaction": "rent_or_buy",
      "rent": 7600,
      "deposit": 15200,
      "sale": 3200000,
      "privacy": 4,
      "unlock": {
        "minMoney": 160000
      },
      "note": "Căn hộ tầng cao phía bắc Khu nghiên cứu sáng tạo, đi làm 10 phút; ở phía bắc sông, vào nội thành phải qua cầu Lâm Giang hoặc hầm vượt sông."
    },
    "special": [
      "Khoảng cách giữa các tòa nhà trên tám mươi mét, ban ngày dù không kéo rèm cửa sổ cũng sẽ không bị tòa nhà đối diện nhìn thấy.",
      "Khu vực phía Bắc sông vào ban đêm mức độ ô nhiễm ánh sáng cực thấp, sau khi tắt đèn trong phòng ngủ chính có thể trực tiếp nhìn rõ bầu trời sao.",
      "Tuyến đường vượt sông chỉ có hai lối là cầu Lâm Giang và hầm vượt sông, đêm khuya từ trung tâm thành phố trở về phải đi đường vòng khá xa."
    ],
    "events": [],
    "cnName": "浦江云居"
  },
  {
    "id": "ys_riverside",
    "name": "Chung cư bờ sông Vũ Thạch",
    "fullName": "Khu Vũ Thạch & Phố Giang · Chung cư bờ sông Vũ Thạch",
    "district": "Khu Vũ Thạch & Phố Giang",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Chung cư trung và cao cấp cải tạo từ dải nhà kho cũ ven sông Vũ Thạch, mặt tiền gạch đỏ vẫn giữ lại đường nét cửa sổ vòm của nhà kho cũ, chiều cao trần ba mét hai. Cửa sổ hướng Đông nhìn thẳng ra sông Lâm Giang và đê chắn sóng, trên bãi sông có những vạt lau sậy lớn, sau khi thủy triều rút cò trắng và chim choắt mỏ cong tìm kiếm thức ăn trên bãi bùn. Nhược điểm rất rõ ràng: cách Ga Nam Lâm Giang năm trăm mét, tiếng nổ trầm đục của dòng xe chở hàng kéo dài suốt cả đêm không dứt.",
    "draw": "Ở dài hạn tại chung cư cải tạo ven sông. Ánh nắng ban mai qua khung cửa sổ vòm dưới trần nhà cao ba mét hai, cả đêm dài tiếng xe chở hàng trầm đục át đi mọi âm thanh trong phòng và tắm chung sau khi đi dạo từ bãi lau sậy ven sông trở về.",
    "features": {
      "canGather": false,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent_or_buy",
      "rent": 5800,
      "deposit": 11600,
      "sale": 2200000,
      "privacy": 4,
      "unlock": {
        "minMoney": 100000
      },
      "note": "Căn hộ trung cao cấp cải tạo ven sông, giao thông thuận tiện; ngay cạnh Ga cao tốc Nam Lâm Giang, tiếng ồn xe chở hàng là cái giá phải trả."
    },
    "special": [
      "Chiều cao trần ba mét hai và cửa sổ vòm cải tạo từ nhà kho cũ, nhiều mặt tường cứng nên tiếng vang trong phòng rất rõ rệt.",
      "Cách Ga Nam Lâm Giang năm trăm mét, tiếng nổ trầm đục của dòng xe chở hàng kéo dài suốt đêm không ngớt, nhưng ngược lại cũng che lấp hoàn toàn mọi động tĩnh trong nhà.",
      "Bãi lau sậy ven sông khi màn đêm buông xuống không có đèn chiếu sáng, từ dưới lầu đi bộ qua đó năm phút là tới bãi bùn không một bóng người."
    ],
    "events": [],
    "cnName": "雨石江岸公寓"
  },
  {
    "id": "gl_gongguan",
    "name": "Dinh thự cổ Thạch Khố Môn Cổ Lĩnh",
    "fullName": "Khu Cổ Lĩnh · Dinh thự cổ Thạch Khố Môn Cổ Lĩnh",
    "district": "Khu Cổ Lĩnh",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Công quán Thạch Khố Môn thời Dân Quốc nằm sâu trong phố cổ Cổ Lĩnh, nguyên tòa ba tầng kèm sân giếng trời. Tường ngoài gạch đỏ trần, cầu thang gỗ tếch và ô cửa sổ thông gió kính màu nghệ thuật vẫn được bảo tồn nguyên vẹn, tầng hai có hành lang gỗ chạy vòng quanh thông suốt, gác xép tầng ba mở cửa sổ mái (Lão hổ song). Trong sân giếng trời có một miệng giếng cổ đã niêm phong và một cây lựu, cổng viện là hai cánh cửa gỗ sơn đen dày nặng, sau khi cài chốt cửa lại thì cả tòa công quán ngăn cách hoàn toàn hoàn toàn với bên ngoài.",
    "draw": "Sinh hoạt trong nguyên tòa công quán cổ. Tắm lộ thiên dưới gốc cây lựu giữa sân giếng trời, vén váy tiến vào từ phía sau trên lan can hành lang gỗ tầng hai và quấn quýt trên đệm trải sàn dưới cửa sổ mái gác xép.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong sân giếng trời có thể hái được quả lựu, thu thập nước rỉ ra từ miệng giếng niêm phong, trên gác xép chất đống gỗ tếch và mảnh vỡ kính màu thay ra khi tu sửa.",
      "materials": [
        "Quả lựu sân giếng trời công quán cổ",
        "Mảnh vụn gỗ tếch trăm năm",
        "Mảnh vỡ kính màu nghệ thuật",
        "Nước giếng lâu năm từ giếng niêm phong"
      ]
    },
    "housing": {
      "tier": "upper",
      "transaction": "rent_or_buy",
      "rent": 11000,
      "deposit": 22000,
      "sale": 4200000,
      "privacy": 4,
      "unlock": {
        "minMoney": 210000
      },
      "note": "Biệt thự cổ Thạch Khố Môn thời Dân Quốc nguyên căn, 3 tầng có giếng trời; trung tâm khu văn hóa, tiện ích sinh hoạt dày đặc nhất, bù lại kết cấu gỗ cổ gần như không cách âm."
    },
    "special": [
      "Hai cánh cửa gỗ sơn đen ở cổng viện có thể cài chốt từ bên trong, sau khi cài chốt cả tòa công quán hoàn toàn ngăn cách hoàn toàn với thế giới bên ngoài.",
      "Lan can hành lang gỗ chạy vòng quanh ở tầng hai chỉ cao ngang thắt lưng, đứng dưới sân giếng trời ngước đầu lên có thể nhìn rõ mọi thứ trên hành lang."
    ],
    "events": [],
    "cnName": "鼓岭石库门老公馆"
  },
  {
    "id": "wx_riverhouse",
    "name": "Nhà ven sông Ô Khê Chẩm Thủy",
    "fullName": "Khu Ô Khê · Nhà ven sông Ô Khê Chẩm Thủy",
    "district": "Khu Ô Khê",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Ngôi nhà cổ hai tầng nằm gối đầu lên dòng nước thời Minh Thanh trong hẻm nước Ô Khê, bức tường sau xây thẳng ngay trên lòng sông, có sẵn một đoạn bến nước bậc đá tư nhân. Tầng một là gian nhà chính gạch xanh và gian bếp củi cũ, mặt hướng ra sông ở tầng hai nguyên một dãy đều là cửa sổ hoa chấn song gỗ có thể đẩy mở, vừa đẩy cửa sổ ra là thấy ngay mặt nước nơi những con thuyền khua chèo qua lại. Bến nước phía sau nhà khi màn đêm buông xuống hoàn toàn nằm khuất trong bóng tối của cây cầu đá, chỉ còn lại vài ánh đèn lác đác ở bờ bên kia.",
    "draw": "Ở dài hạn tại ngôi nhà cổ ven sông. Đẩy mở toàn bộ dãy cửa sổ tầng hai quỳ ngồi hướng ra mặt sông, quay lưng về phía mặt sông tiến vào từ phía sau trên bậc đá bến nước tư nhân và quấn quýt thầm kín bên mép bệ bếp trong gian bếp cũ.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại bậc đá bến nước và dưới mái hiên có thể thu thập rêu xanh và ốc sông, trong gian bếp cũ quanh năm có chuẩn bị sẵn củi đốt và gỗ thừa thay ra khi sửa nhà.",
      "materials": [
        "Rêu xanh dưới mái hiên nhà ven sông",
        "Than hồng tàn dư bếp củi cũ",
        "Củ ấu và ốc sông",
        "Vật liệu gỗ thừa kiến trúc Minh Thanh"
      ]
    },
    "housing": {
      "tier": "upper",
      "transaction": "rent_or_buy",
      "rent": 7200,
      "deposit": 14400,
      "sale": 3000000,
      "privacy": 4,
      "unlock": {
        "minMoney": 140000
      },
      "note": "Nhà ven sông thời Minh - Thanh nguyên căn, có bến thuyền riêng; sâu trong ngõ nước phía nam phố cổ, độ ẩm cao, không thang máy không chỗ đỗ xe, ra vào chỉ có thể đi ngõ lát đá."
    },
    "special": [
      "Bậc đá bến nước ở tường sau khi màn đêm buông xuống nằm trọn hoàn toàn trong bóng tối của cây cầu đá, từ hai bên bờ đều không nhìn rõ bóng người.",
      "Dãy cửa sổ hoa chấn song gỗ hướng ra sông ở tầng hai có thể đẩy mở toàn bộ, sau khi đẩy mở ra giữa phòng và mặt nước không có bất kỳ vật che chắn nào."
    ],
    "events": [],
    "cnName": "乌溪枕水河房"
  },
  {
    "id": "lx_faculty",
    "name": "Chung cư giảng viên Học Phủ Nhã Viện",
    "fullName": "Khu Lạc Hà · Chung cư giảng viên Học Phủ Nhã Viện",
    "district": "Khu Lạc Hà",
    "archetype": "living",
    "privacy": 4,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Cụm chung cư cán bộ giảng viên nằm bên trong làng đại học Lạc Hà, tòa nhà sáu tầng mái dốc gạch đỏ, khoảng cách giữa các tòa nhà lớn, bóng cây cực kỳ rậm rạp. Thiết kế căn hộ là tiêu chuẩn một phòng ngủ một phòng đọc sách, phòng đọc sách có giá sách đóng kịch trần chiếm trọn cả bức tường, bệ cửa sổ lồi (Bay window) sát đất hướng Nam rộng đủ cho người nằm. Cụm chung cư có cổng kiểm soát ra vào độc lập và bảo vệ trường đi tuần tra, sau mười một giờ đêm xe cộ bên ngoài tuyệt đối không được phép đi vào, là khu vực yên tĩnh nhất trong làng đại học.",
    "draw": "Ở dài hạn yên tĩnh trong làng đại học. Quấn quýt buổi chiều trên bệ cửa sổ lồi sát đất trong phòng đọc sách, ban ngày không cần kéo rèm nhờ tán cây dày đặc che khuất và cuộc sống chung đôi suốt cả đêm hầu như không bị ai làm phiền trong khu dân cư khép kín.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong sân cụm chung cư có thể nhặt được lá tiêu bản ngô đồng, trong phòng đọc sách và phòng sinh hoạt dưới lầu quanh năm có chất sách cũ, nhãn sách Exlibris và vật tư đóng sách.",
      "materials": [
        "Tiêu bản lá ngô đồng rụng trong sân trường",
        "Trà đặc cung dành cho cán bộ giảng viên",
        "Trang sách cũ và nhãn sách Exlibris",
        "Văn phòng phẩm và vật tư đóng sách"
      ]
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent_or_buy",
      "rent": 4800,
      "deposit": 9600,
      "sale": 1800000,
      "privacy": 4,
      "unlock": {
        "minMoney": 60000
      },
      "note": "Căn hộ giảng viên một phòng ngủ một phòng đọc sách trong Làng Đại học, an ninh nghiêm ngặt, rợp bóng cây, yên tĩnh nhất toàn thành phố; nhưng phải có quan hệ trong trường hoặc nghiên cứu mới thuê được, sau 11h đêm xe không vào được."
    },
    "special": [
      "Cổng kiểm soát của cụm chung cư sau mười một giờ đêm không cho xe cộ bên ngoài đi vào, mọi lượt ra vào đều được bảo vệ trường ghi chép lại.",
      "Khoảng cách giữa các tòa nhà lớn và tán cây cực dày, ban ngày dù kéo mở rèm cửa sổ cũng sẽ không bị tòa nhà đối diện nhìn thấy."
    ],
    "events": [],
    "cnName": "学府雅苑教师公寓"
  },
  {
    "id": "dt_farmhouse",
    "name": "Nhà nông thôn điền viên Đông Đường",
    "fullName": "Khu Đông Đường · Nhà nông thôn điền viên Đông Đường",
    "district": "Khu Đông Đường",
    "archetype": "living",
    "privacy": 5,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Ngôi nhà nông thôn cổng riêng nằm giữa cánh đồng bên ngoài thị trấn Đông Đường, nhà trệt ngói xanh kèm một khoảng sân lớn và ba sào đất trồng rau tự túc. Trong sân có bếp đất, giếng bơm tay, sân phơi thóc và một cây hồng già, phía sau nhà là cánh đồng lúa nối liền nhau và kênh tưới tiêu. Trong bán kính hai trăm mét không có hộ gia đình thứ hai nào, khi màn đêm buông xuống chỉ có tiếng côn trùng kêu và tiếng xe cộ chạy trên đường cao tốc ở phía xa, cả cánh đồng không có lấy một ngọn đèn đường.",
    "draw": "Ở dài hạn tại nhà nông thôn vùng quê. Trải chiếu cói trên sân phơi thóc làm tình ngoài trời dưới bầu trời sao, quỳ chống tay lấm bùn tiến vào từ phía sau giữa các luống rau và quấn quýt sưởi ấm bên ánh lửa củi của chiếc bếp đất.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Ba sào đất trồng rau tự túc quanh năm đều có rau xanh, gà thả vườn trong sân đẻ trứng, trên sân phơi thóc chất đống rơm khô củi đốt, bên bờ kênh mọc đầy thảo dược hoang dã.",
      "materials": [
        "Rau xanh theo mùa trên đất trồng tự túc",
        "Trứng gà ta thả vườn",
        "Rơm phơi khô và củi đốt",
        "Thảo dược hoang dã ven kênh tưới tiêu"
      ]
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent",
      "rent": 3300,
      "deposit": 6600,
      "sale": 0,
      "privacy": 5,
      "unlock": {
        "minMoney": 30000
      },
      "note": "Nhà ngói nông thôn có sân vườn và 3 sào đất trồng rau tự cung tự cấp, nhà riêng có sân rẻ nhất; đất ở nông thôn chỉ được thuê dài hạn không mua bán, vào nội thành một chiều mất hơn một tiếng."
    },
    "special": [
      "Trong bán kính hai trăm mét không có hộ gia đình thứ hai nào, cổng sân vừa đóng lại là cả cánh đồng đều coi như không gian riêng tư.",
      "Sân phơi thóc khi màn đêm buông xuống hoàn toàn không có đèn chiếu sáng, ngẩng đầu lên là cả bầu trời sao không chút ô nhiễm ánh sáng."
    ],
    "events": [],
    "cnName": "东塘田园农舍"
  },
  {
    "id": "qp_hillhouse",
    "name": "Sân nhỏ Tùng Giản Sơn Cư",
    "fullName": "Khu thắng cảnh núi Thanh Bình · Sân nhỏ Tùng Giản Sơn Cư",
    "district": "Khu thắng cảnh núi Thanh Bình",
    "archetype": "living",
    "privacy": 5,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Sân viện nhỏ kiến trúc gỗ một gian nằm giữa rừng thông lưng chừng núi Thanh Bình, được xây dựng nương theo một khe suối núi quanh năm có nước chảy. Sân viện dùng đá suối xếp thành bức tường thấp, dưới hiên nhà bắc ống tre dẫn nguồn nước suối núi tươi mát, gian nhà chính là phòng thông suốt hướng Nam, đẩy mở nguyên dãy cửa sổ gỗ ra chính là rừng thông và dòng nước suối. Lên núi chỉ có duy nhất một con đường đất uốn lượn quanh núi, xe buýt chuyến cuối lúc năm rưỡi chiều, khi màn đêm buông xuống cả sườn núi sẽ không có một ai đi ngang qua.",
    "draw": "Ở dài hạn tại sân viện nhỏ ngắm cảnh núi. Tắm xối nước suối núi dẫn qua ống tre dưới hiên nhà, quấn quýt ngoài trời bên bức tường thấp bằng đá suối vừa lắng nghe tiếng nước chảy róc rách và giấc ngủ chung dưới tiếng thông reo khi mở toang toàn bộ dãy cửa sổ gỗ gian nhà chính.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Tại khe suối bên ngoài sân viện có thể lấy nước suối trong, trong rừng thông có thể hái nhựa thông và nấm dại, đá suối và rêu xanh có thể tiện tay lấy ngay.",
      "materials": [
        "Nước suối trong khe núi",
        "Lá thông và nhựa thông",
        "Nấm hoang dã lưng chừng núi",
        "Đá suối và rêu xanh"
      ]
    },
    "housing": {
      "tier": "advanced",
      "transaction": "rent_or_buy",
      "rent": 6200,
      "deposit": 12400,
      "sale": 2400000,
      "privacy": 5,
      "unlock": {
        "minMoney": 110000
      },
      "note": "Khuôn viên nhà gỗ nhỏ giữa rừng thông lưng chừng núi, có khe núi và suối nguồn dẫn ống tre; cảnh núi non và độ riêng tư đều là bậc nhất, cái giá phải trả là chuyến xe buýt cuối lúc 5h30 chiều, mưa lớn sẽ tắc đường."
    },
    "special": [
      "Lên núi chỉ có duy nhất một con đường đất uốn lượn, xe buýt chuyến cuối lúc năm rưỡi chiều, khi màn đêm buông xuống cả sườn núi sẽ không có ai đi ngang qua.",
      "Ống tre dưới hiên nhà dẫn nguồn nước suối núi tự nhiên chảy liên tục, có thể trực tiếp tắm xối ngay trong sân, bốn phía chỉ có rừng thông."
    ],
    "events": [],
    "cnName": "松涧山居小院"
  },
  {
    "id": "mh_skyloft",
    "name": "Căn hộ thông tầng cao cấp Minh Hồ Thiên Kính",
    "fullName": "Khu Minh Hồ · Căn hộ thông tầng cao cấp Minh Hồ Thiên Kính",
    "district": "Khu Minh Hồ",
    "archetype": "living",
    "privacy": 5,
    "openHours": [
      "朝",
      "昼",
      "暮",
      "夜",
      "深夜"
    ],
    "intro": "Căn hộ Penthouse thông tầng trên đỉnh một trong hai tòa Tháp Đôi khu CBD Minh Hồ, hai tầng thông không gian cao bảy mét, bốn mặt đều là kính toàn cảnh không khung viền, hướng thẳng ra hồ Minh Hồ và đường chân trời toàn thành phố. Tầng trên là đài ngắm cảnh đáy kính vươn hẳn ra ngoài không trung, phòng khách tầng dưới khảm một đường nước bơi thông thẳng ra hồ bơi trên không ngoài trời. Cả tầng chỉ có duy nhất một căn hộ, thang máy độc quyền bắt buộc phải quẹt thẻ mới lên thẳng được, nhân viên ban quản lý tòa nhà không tự ý lên gõ cửa.",
    "draw": "Sinh hoạt trong căn hộ Penthouse đỉnh tháp. Quấn quýt lơ lửng giữa không trung trên đài ngắm cảnh đáy kính, nhìn xuống thành phố tiến vào từ phía sau trước cửa sổ toàn cảnh không khung viền và kết hợp khi bơi đêm trong hồ bơi trên không.",
    "features": {
      "canGather": true,
      "canDate": true,
      "canWork": false,
      "hasShop": false
    },
    "gather": {
      "desc": "Trong tủ rượu và phòng chứa đồ luôn có sẵn rượu vang băng (Icewine) và nước khoáng có ga, trong tủ gia chính là vải nội thất may đo cao cấp và vật tư bảo dưỡng tường kính.",
      "materials": [
        "Nước khoáng có ga và rượu vang băng (Icewine) nhập khẩu",
        "Vải nội thất may đo cao cấp",
        "Vật liệu lọc sạch không khí tầng thượng",
        "Chất bảo dưỡng kính không khung viền"
      ]
    },
    "housing": {
      "tier": "luxury",
      "transaction": "rent_or_buy",
      "rent": 22000,
      "deposit": 44000,
      "sale": 9500000,
      "privacy": 5,
      "unlock": {
        "minMoney": 500000
      },
      "note": "Penthouse thông tầng đỉnh tháp đôi, trần cao 7 mét, 4 mặt kính toàn cảnh không viền, có bể bơi trên không; đỉnh cao vị trí trung tâm thành phố, thang máy riêng quẹt thẻ lên thẳng."
    },
    "special": [
      "Cả tầng chỉ có duy nhất một căn hộ, thang máy độc quyền bắt buộc phải quẹt thẻ lên thẳng, ngoài hành lang sẽ không xuất hiện bất kỳ người ngoài nào.",
      "Sàn của đài ngắm cảnh ở tầng trên là mặt kính trong suốt xuyên thấu, khi đứng ở bên trên có thể nhìn trọn vẹn cảnh phố xá ở độ cao hai trăm mét ngay dưới chân không sót chút gì."
    ],
    "events": [],
    "cnName": "明湖天镜顶层复式"
  }
];
const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));
nodes.forEach(n => {
  if (n.name) nodeById[n.name] = n;
  if (n.cnName) nodeById[n.cnName] = n;
});
if (typeof window !== 'undefined') window.CITY_MAP_DATA = { nodes, nodeById };
