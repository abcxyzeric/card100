/**
 * Quan Nhân Si / SLG Đô Thị Nhật Bản · Script Tính Toán Phụ Trợ (Bản Khởi Động)
 *
 * Tập tin này được tạo từ public/shell/aux-shell.js bởi scripts/build-aux-shell.mjs.
 * Chạy độc lập trong mục 「Script」 của Tavern Helper.
 */
(function () {
    'use strict';

    const BOOT_VERSION = 'linjiang-dev-aux-v1';

    // Danh sách quà tặng livestream: tên tiếng Việt + cnName tương thích hai chiều
    const GIFTS = [
        { name: 'Tim nhỏ', cnName: '小心心', price: 0, pop: 2, file: 'gift-heart.webp' },
        { name: 'Que cay', cnName: '辣条', price: 1, pop: 8, file: 'gift-snack.webp' },
        { name: 'Cạn ly', cnName: '干杯', price: 20, pop: 70, file: 'gift-cheers.webp' },
        { name: 'Hộp mù ước nguyện', cnName: '心愿盲盒', price: 50, pop: 150, file: 'gift-blindbox.webp' },
        { name: 'Thư tình', cnName: '情书', price: 100, pop: 400, file: 'gift-letter.webp' },
        { name: 'Máy bay nhỏ', cnName: '小飞机', price: 200, pop: 900, file: 'gift-plane.webp' },
        { name: 'Tòa nhà chọc trời', cnName: '摩天大楼', price: 520, pop: 2200, file: 'gift-tower.webp' },
        { name: 'Tên lửa', cnName: '火箭', price: 1288, pop: 8000, file: 'gift-rocket.webp' },
    ];

    const GUARD_BUY = [
        { name: 'Hạm trưởng', cnName: '舰长', price: 138, pop: 500, days: 30, file: 'gift-guard-1.webp' },
        { name: 'Đề đốc', cnName: '提督', price: 1998, pop: 9000, days: 30, file: 'gift-guard-2.webp' },
        { name: 'Tổng đốc', cnName: '总督', price: 19998, pop: 40000, days: 30, file: 'gift-guard-3.webp' },
    ];

    const QTY_STEPS = [1, 10, 66, 233];

    const SC_STEPS = [30, 50, 100];

    const ART_HOST = 'https://anchor.rown.dpdns.org';
    const PAGES_HOST = 'https://abcxyzeric.github.io/card100';

    function roomMenu() {
        const icon = file => `${PAGES_HOST}/assets/gifts/${file}`;
        const gifts = GIFTS.map(g => ({ ...g, 图标: icon(g.file) }));
        const guards = GUARD_BUY.map(g => ({ ...g, 图标: icon(g.file) }));
        return {
            礼物: gifts,
            大航海: guards,
            数量档位: QTY_STEPS.slice(),
            醒目留言档位: SC_STEPS.slice(),
            资源域名: ART_HOST,
            底图域名: `${PAGES_HOST}/city/plate`,
            'Quà tặng': gifts,
            'Đại hàng hải': guards,
            'Mốc số lượng': QTY_STEPS.slice(),
            'Mốc SuperChat': SC_STEPS.slice(),
            'Tên miền tài nguyên': ART_HOST,
            'Tên miền ảnh nền': `${PAGES_HOST}/city/plate`,
        };
    }

    const bootApi = {
        roomMenu,
        roomAction() {
            return { ok: false, 提示: 'Script tính toán phụ trợ đang tải, vui lòng thử lại sau giây lát' };
        },
    };

    const root = typeof globalThis !== 'undefined' ? globalThis : {};
    const publish = (api) => {
        try {
            root.LinjiangAux = api;
            if (root.parent && root.parent !== root) root.parent.LinjiangAux = api;
        } catch (_) { /* Khi khác nguồn chỉ ghi vào chính mình */ }
    };

    publish(bootApi);

    const GIFT_CN_TO_VI = Object.fromEntries(GIFTS.map(g => [g.cnName, g.name]));
    const GIFT_VI_TO_CN = Object.fromEntries(GIFTS.map(g => [g.name, g.cnName]));
    const GUARD_CN_TO_VI = Object.fromEntries(GUARD_BUY.map(g => [g.cnName, g.name]));
    const GUARD_VI_TO_CN = Object.fromEntries(GUARD_BUY.map(g => [g.name, g.cnName]));

    function wrapLoadedAux(realApi) {
        if (!realApi || realApi.__viWrapped) return realApi;
        const origMenu = typeof realApi.roomMenu === 'function' ? realApi.roomMenu.bind(realApi) : null;
        const origAction = typeof realApi.roomAction === 'function' ? realApi.roomAction.bind(realApi) : null;
        const wrapped = Object.create(realApi);
        wrapped.__viWrapped = true;
        wrapped.roomMenu = function () {
            const base = origMenu ? (origMenu() || {}) : {};
            const local = roomMenu();
            return {
                ...base,
                ...local,
            };
        };
        if (origAction) {
            wrapped.roomAction = function (payload) {
                const p = payload && typeof payload === 'object' ? { ...payload } : {};
                if (p.礼物 && (GIFT_VI_TO_CN[p.礼物] || GUARD_VI_TO_CN[p.礼物])) {
                    p.礼物 = GIFT_VI_TO_CN[p.礼物] || GUARD_VI_TO_CN[p.礼物] || p.礼物;
                }
                const res = origAction(p);
                if (res && typeof res === 'object' && res.快照 && Array.isArray(res.快照?.大航海?.名单)) {
                    res.快照.大航海.名单 = res.快照.大航海.名单.map(item => ({
                        ...item,
                        档位: GUARD_CN_TO_VI[item.档位] || item.档位,
                    }));
                }
                return res;
            };
        }
        return wrapped;
    }

    import('https://testingcf.jsdelivr.net/gh/abcxyzeric/card100@main/public/shell/aux-shell.js?v=experience-key-compat-v1')
        .then(() => {
            if (root.LinjiangAux === bootApi) {
                console.error('[Script tính toán phụ trợ] Đã tải logic nhưng chưa gắn LinjiangAux, vui lòng kiểm tra cuối file aux-shell.js');
            } else if (root.LinjiangAux) {
                publish(wrapLoadedAux(root.LinjiangAux));
            }
        })
        .catch((err) => {
            console.error('[Script tính toán phụ trợ] Không thể tải logic trực tuyến, chỉ có thanh quà tặng khả dụng', err);
            try {
                if (typeof toastr !== 'undefined') {
                    toastr.error('Không tải được script tính toán phụ trợ, phòng phát sóng và kết toán biến tạm thời không khả dụng');
                }
            } catch (_) { /* Bỏ qua nếu không có toastr */ }
        });

    console.log('[Script tính toán phụ trợ] Bản khởi động đã sẵn sàng', BOOT_VERSION);
})();
