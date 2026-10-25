// LiveRoom Standalone Renderer for SillyTavern
const __VI_TO_CN_CHAR = {
      'Azuma Seren': '东雪莲', 'Đông Tuyết Liên': '东雪莲', '东雪莲': '东雪莲',
      'Taffy': '塔菲', 'Ace Taffy': '塔菲', '永雏塔菲': '塔菲', '塔菲': '塔菲',
      'Sakamata': '沙花叉', 'Sakamata Chloe': '沙花叉', '沙花叉克萝伊': '沙花叉', '沙花叉': '沙花叉',
      'Shigure Ui': '时雨羽衣', '时雨羽衣': '时雨羽衣',
      'Miku Rabbit Hole': '兔子洞初音', '兔子洞初音': '兔子洞初音',
      'Kagura Nana': '神乐七奈', '神乐七奈': '神乐七奈',
      'Bé Cá Voi': '鲸鱼娘', 'DeepSeek': '鲸鱼娘', 'DeepSeek娘': '鲸鱼娘', '鲸鱼娘': '鲸鱼娘',
      'Neuro': '牛肉', 'Neuro-sama': '牛肉', '牛肉': '牛肉',
      'Hồng Tường Vi': '红蔷薇', '红蔷薇': '红蔷薇',
      'Stella': '斯黛拉', 'Iga Sutora': '斯黛拉', '伊贺栖寅': '斯黛拉', '斯黛拉': '斯黛拉',
      'Riamu': '璃亚梦', 'Yumemi Riamu': '璃亚梦', '梦见璃亚梦': '璃亚梦', '璃亚梦': '璃亚梦'
    };
    const __CN_TO_VI_CHAR = {
      '东雪莲': 'Azuma Seren', 'Đông Tuyết Liên': 'Azuma Seren',
      '塔菲': 'Taffy', '永雏塔菲': 'Taffy', 'Ace Taffy': 'Taffy',
      '沙花叉': 'Sakamata', '沙花叉克萝伊': 'Sakamata', 'Sakamata Chloe': 'Sakamata',
      '时雨羽衣': 'Shigure Ui',
      '兔子洞初音': 'Miku Rabbit Hole',
      '神乐七奈': 'Kagura Nana',
      '鲸鱼娘': 'Bé Cá Voi', 'DeepSeek娘': 'Bé Cá Voi', 'DeepSeek': 'Bé Cá Voi',
      '牛肉': 'Neuro', 'Neuro-sama': 'Neuro',
      '红蔷薇': 'Hồng Tường Vi',
      '斯黛拉': 'Stella', '伊贺栖寅': 'Stella', 'Iga Sutora': 'Stella',
      '璃亚梦': 'Riamu', '梦见璃亚梦': 'Riamu', 'Yumemi Riamu': 'Riamu'
    };
    const __CN_TO_VI_SCENE = {
      "通用": "Thông thường",
      "乳交": "Kẹp ngực",
      "事后口交": "Khẩu giao sau cuộc yêu",
      "亲吻": "Hôn môi",
      "传教士体位做爱": "Tư thế truyền giáo",
      "做爱射精": "Xuất tinh bên trong",
      "做爱高潮": "Cao trào khi yêu",
      "口交": "Khẩu giao",
      "后入做爱": "Tiến vào từ phía sau",
      "吮吸乳头": "Mút đầu ngực",
      "女上位做爱": "Tư thế cưỡi ngựa",
      "射外面事后": "Bắn ra ngoài sau cuộc yêu",
      "打屁股后入": "Vỗ mông tiến vào từ phía sau",
      "抱着摸小穴": "Ôm vuốt ve vùng kín",
      "抱腿站着后入": "Ôm chân đứng tiến vào từ phía sau",
      "抱起来做爱": "Bế lên giao hợp",
      "指交": "Dùng ngón tay kích thích",
      "掰开小穴": "Tách mở vùng kín",
      "摸胸": "Xoa ngực",
      "激烈站着后入": "Đứng thúc mạnh từ phía sau",
      "站着后入": "Đứng tiến vào từ phía sau",
      "素股": "Cọ xát giữa đùi",
      "背后坐位做爱": "Ngồi tựa lưng giao hợp",
      "脱衣服": "Cởi trang phục",
      "自己掰开小穴": "Tự tách mở vùng kín",
      "自慰": "Tự sướng",
      "舔小穴": "Liếm vùng kín",
      "足交": "Dùng chân kích thích",
      "趴着口交": "Nằm sấp khẩu giao",
      "躺着抬腿做爱": "Nằm nâng chân giao hợp"
    };
    const __VI_TO_CN_SCENE = Object.fromEntries(Object.entries(__CN_TO_VI_SCENE).map(([k, v]) => [v, k]));
    const __toCnChar = (name) => {
      const k = String(name || '').trim();
      return __VI_TO_CN_CHAR[k] || k;
    };
    const __toViChar = (name) => {
      const k = String(name || '').trim();
      return __CN_TO_VI_CHAR[k] || k;
    };
    const __toCnScene = (scene) => {
      const k = String(scene || '').trim();
      return __VI_TO_CN_SCENE[k] || k;
    };
    const __toViScene = (scene) => {
      const k = String(scene || '').trim();
      return __CN_TO_VI_SCENE[k] || k;
    };

    

let htmlEntityDecoder = null;
function decodeHtmlEntities(text) {
  if (!text || text.indexOf('&') === -1) return text;
  const ta = htmlEntityDecoder || (htmlEntityDecoder = document.createElement('textarea'));
  let decoded = text;
  for (let i = 0; i < 5; i++) {
    const prev = decoded;
    ta.innerHTML = decoded;
    decoded = ta.value;
    if (decoded === prev) break;
    if (decoded.indexOf('&') === -1) break;
  }
  return decoded;
}

function escapeHtmlAttr(text) {
  const div = document.createElement('div');
  div.setAttribute('data-value', decodeHtmlEntities(String(text || '')));
  const match = div.outerHTML.match(/data-value="([^"]*)"/);
  return match ? match[1] : '';
}

function escapeHtmlText(text) {
  const div = document.createElement('div');
  div.textContent = decodeHtmlEntities(String(text || ''));
  return div.innerHTML;
}

const AVATAR_CACHE_PREFIX = 'linjiang_avatar_';
function getAvatarFromCache(charName) {
  try { return currentArtUrl(localStorage.getItem(AVATAR_CACHE_PREFIX + charName) || ''); }
  catch (e) { return ''; }
}

const IMAGE_LISTS = {};
function findImageListEntry(category, character, sceneType) {
  return null;
}

const fetchLatestMvuData = () => {
  try {
    const win = window.parent || window;
    const mvu = win.Mvu || (win.TavernHelper && win.TavernHelper.mvu);
    if (mvu && typeof mvu.getMvuData === 'function') {
      const d = mvu.getMvuData({ type: 'message', message_id: 'latest' }) || mvu.getMvuData({ type: 'chat' });
      return d?.stat_data || {};
    }
  } catch (e) {}
  return {};
};

const applyMvuPatches = (patches) => {
  try {
    const win = window.parent || window;
    const mvu = win.Mvu || (win.TavernHelper && win.TavernHelper.mvu);
    if (mvu && typeof mvu.patchMvuData === 'function') {
      return mvu.patchMvuData(patches, { type: 'chat' });
    }
  } catch (e) {}
  return false;
};

// ==================== 直播间 <LiveRoom> ====================
    /* 直播间的表和算法都在 外部部署/V20260826/辅助计算脚本.js（parent.LinjiangAux）：
       礼物价格与人气点数、大航海档位、数量档位、牌子等级公式、名字折叠、以及一切写入。
       本文件同源，直接调，不用 postMessage。
       拿不到脚本时只有关注/取关直接写 MVU，其它消费动作仍保持只读，不在卡片里另算一套。 */
    function lrAux() {
      try {
        const win = window.parent || window;
        const api = win.LinjiangAux || window.LinjiangAux;
        return (api && api.roomAction) ? api : null;
      } catch (e) { return null; }
    }
    const CURRENT_ART_HOST = 'https://anchor.rown.dpdns.org';
    const LEGACY_ART_HOST_RE = /^https?:\/\/anchor[.]bolt[.]qzz[.]io(?=\/|$)/i;
    const LR_MENU_FALLBACK = { 礼物: [], 大航海: [], 数量档位: [1, 10, 66, 233], 醒目留言档位: [30, 50, 100], 资源域名: CURRENT_ART_HOST };

    /* 酒馆父窗口可能还挂着旧版 LinjiangAux，MVU／localStorage 也可能保存旧图床绝对地址。
       渲染前统一归一到当前图床，避免旧运行时对象或持久缓存继续发起旧域名请求。 */
    function currentArtUrl(value) {
      return String(value || '').replace(LEGACY_ART_HOST_RE, CURRENT_ART_HOST);
    }

    /* 图片地址过一遍素材缓存（外部部署/V20260826/素材缓存脚本.js，挂在酒馆窗口上）。
       命中返回 blob: 地址，等于这一张图不出网；没装那个脚本、或者这个源不许跨源
       fetch（图床没给 ACAO）时原样返回远程地址，行为跟以前一样。
       卡片每条消息重渲染一次，所以这层省下来的是每次重渲染的那一轮请求。 */
    function assetUrl(remote) {
      const raw = currentArtUrl(remote);
      if (!raw) return raw;
      try {
        const win = window.parent || window;
        const api = win.LinjiangAssets || window.LinjiangAssets;
        return (api && typeof api.url === 'function') ? (api.url(raw) || raw) : raw;
      } catch (e) { return raw; }
    }
    function lrMenu() {
      const aux = lrAux();
      if (!aux) return LR_MENU_FALLBACK;
      try {
        const menu = aux.roomMenu() || LR_MENU_FALLBACK;
        return {
          ...menu,
          资源域名: CURRENT_ART_HOST,
          礼物: (menu.礼物 || []).map(item => ({ ...item, 图标: currentArtUrl(item.图标) })),
          大航海: (menu.大航海 || []).map(item => ({ ...item, 图标: currentArtUrl(item.图标) })),
        };
      } catch (e) { return LR_MENU_FALLBACK; }
    }
    /* 这里原来有一张 LR_HOSTS：每个主播的封面文件名、档期、人气、牌子名。已经删掉——
       本文件只负责展示，不存表也不存数值。现在：
         档期 / 牌子名 / 底盘热度 / 大航海  → 读 MVU 的 系统配置.直播间.<名>
         热度                              → 读 MVU 的 对象信息.<名>.直播.热度
         封面                              → 有插画的角色随机取一张 SFW 通用图；
                                             自定义主播取开局页存进 localStorage 的那张
       主播名单也不再由这张表决定，改成看 对象信息 里有谁。 */
    const LR_TIER = { jian: 'Hạm trưởng', ti: 'Đề đốc', du: 'Tổng đốc' };
    const LR_TIER_KEY = { '舰长': 'jian', '提督': 'ti', '总督': 'du', 'Hạm trưởng': 'jian', 'Đề đốc': 'ti', 'Tổng đốc': 'du' };
    const LR_TYPE_KEY = {
      '普通': 'chat', '舰长': 'chat', '提督': 'chat', '总督': 'chat', '礼物': 'gift', '醒目留言': 'sc', '进入': 'enter', '系统': 'sys',
      'Thường': 'chat', 'Hạm trưởng': 'chat', 'Đề đốc': 'chat', 'Tổng đốc': 'chat', 'Quà': 'gift', 'Quà tặng': 'gift', 'SC': 'sc', 'Bình luận nổi bật': 'sc', 'Vào phòng': 'enter', 'Hệ thống': 'sys'
    };
    /* 这里原来有六张表：礼物价格、人气点数、礼物图标、大航海档位、数量档位、醒目留言档位。
       全部搬到 辅助计算脚本.js，改从 lrMenu() 取。同一件礼物的价格/点数/图标原来分在
       三张表里，现在是一行。 */
    const LR_DEMO = `主播: 塔菲
主播说: 辛苦了。今晚先把加班那条醒目留言念了。
弹幕:
- 类型: 普通 名字: 云庭7楼 内容: 来了，电梯刚好卡在十三层
- 类型: 舰长 名字: 阿初 内容: 今日发型是认真的
- 类型: 提督 名字: 深海灯 内容: 王牌级杂谈，节奏稳
- 类型: 总督 名字: 临江夜航 内容: 别被火箭带跑
- 类型: 礼物 名字: 鼓岭晚风 礼物: 干杯 数量: 10
- 类型: 醒目留言 名字: 西洲加班人 金额: 30 内容: 加班到现在，求一句辛苦了
- 类型: 进入 名字: 湖滨卡座
- 类型: 系统 内容: 匿名棺 已被禁言`;

    /* 名字折叠（永雏塔菲→塔菲）也归辅助脚本，跟 mvuzod.js 的 GIRL_NAME_ALIAS 同一份。
       脚本没跑起来时原样返回，不在本文件里再存一张别名表。 */
    function lrCanonHost(name) {
      const key = __toViChar(String(name || '').trim());
      return key;
    }
    function lrArt(folder, file) {
      const fName = (folder === '头像' || folder === '封面') ? __toCnChar(file) : file;
      return lrMenu().资源域名 + '/' + encodeURIComponent(folder) + '/' + encodeURIComponent(fName) + '.webp';
    }
    function lrGiftItem(name) {
      const menu = lrMenu();
      return menu.礼物.find((g) => g.name === name || g.cnName === name) || menu.大航海.find((g) => g.name === name || g.cnName === name) || null;
    }
    function lrGiftSrc(name) {
      const item = lrGiftItem(name);
      return item ? item.图标 : '';
    }
    function lrEsc(s) { return escapeHtmlText(s); }
    function lrAttr(s) { return escapeHtmlAttr(s); }
    function lrYen(n) { return '￥' + Number(n || 0).toLocaleString('en-US'); }
    function lrPriceTag(n) { return n ? '¥' + n : 'Miễn phí'; }
    function lrFormatPop(n) {
      const x = Number(n) || 0;
      if (x >= 10000) return (Math.round(x / 1000) / 10).toFixed(1).replace(/\.0$/, '') + '万';
      if (x >= 1000) return String(Math.round(x / 100) * 100);
      return String(x);
    }
    /* 原来这里有 lrRoundViewers 和 lrBadgeLevel 两个算法，跟 辅助计算脚本.js 里的
       roundNice / badgeLevel 是同一段公式写了两遍。已删——牌子等级现在从
       roomView() 的快照里读，取整由脚本在写回时负责。 */
    function lrParseNum(v) {
      const n = Number(String(v == null ? '' : v).replace(/,/g, ''));
      return Number.isFinite(n) ? n : 0;
    }
    function lrIsTrue(v) {
      if (v === true || v === 1) return true;
      if (typeof v === 'string') {
        const t = v.trim().toLowerCase();
        return t === 'true' || t === '1' || t === '是' || t === 'yes';
      }
      return false;
    }

    function lrReadStat() {
      try { return fetchLatestMvuData() || {}; }
      catch (e) { return {}; }
    }
    function lrPlayer(stat) { return (stat && (stat['Thông tin người chơi'] || stat.玩家信息)) || {}; }
    function lrGirlsMap(stat) { return (stat && (stat['Thông tin đối tượng'] || stat.对象信息)) || {}; }
    function lrGirl(stat, name) {
      const g = lrGirlsMap(stat);
      return g[name] || g[__toViChar(name)] || g[__toCnChar(name)] || {};
    }
    function lrFan(stat, name) {
      const p = lrPlayer(stat);
      const fans = p['Thân phận fan'] || p.粉丝身份 || {};
      return fans[name] || fans[__toViChar(name)] || fans[__toCnChar(name)] || {};
    }
    const LR_COVER_PREFIX = 'custom_char_cover_';
    function lrPickSfwCover(host) {
      const entry = findImageListEntry('SFW', host, '通用');
      if (!entry || !entry.numbers.length) return '';
      const n = entry.numbers[Math.floor(Math.random() * entry.numbers.length)];
      return lrMenu().资源域名 + '/SFW/' + encodeURIComponent(entry.characterKey) + '/'
        + encodeURIComponent(entry.sceneKey + n) + '.webp';
    }
    function lrRoomCfg(stat, name) {
      const sys = (stat && (stat['Cấu hình hệ thống'] || stat.系统配置)) || {};
      const rooms = sys['Phòng phát sóng'] || sys.直播间 || {};
      return rooms[name] || rooms[__toViChar(name)] || rooms[__toCnChar(name)] || {};
    }
    function lrHasMvuCustomStreamer(stat, host) {
      const girl = lrGirl(stat, host);
      const room = lrRoomCfg(stat, host);
      return !!(girl && (girl['Phát sóng'] || girl.直播)) && lrIsTrue(room['Tùy chỉnh'] ?? room.自定义);
    }
    function lrMvuCover(room) {
      const raw = currentArtUrl((room && (room['Ảnh bìa'] || room.封面)) || '').trim();
      if (!raw) return '';
      try {
        const url = new URL(raw, window.location.href);
        return url.protocol === 'https:' || url.protocol === 'http:' ? currentArtUrl(url.href) : '';
      } catch (e) { return ''; }
    }
    function lrCachedCustomCover(host) {
      try { return currentArtUrl(localStorage.getItem(LR_COVER_PREFIX + host) || ''); }
      catch (e) { return ''; }
    }
    function lrCoverSrc(stat, host) {
      const room = lrRoomCfg(stat, host);
      const isCurrentCustom = lrHasMvuCustomStreamer(stat, host);
      if (!isCurrentCustom) {
        const sfw = lrPickSfwCover(host);
        if (sfw) return sfw;
        if (BUILTIN_CHAR_NAMES.includes(host)) return lrArt('封面', host);
      } else {
        const configured = lrMvuCover(room);
        if (configured) return configured;
        const saved = lrCachedCustomCover(host);
        if (saved) return saved;
      }
      const avatar = currentArtUrl(getAvatarFromCache(host));
      if (avatar) return avatar;
      return lrArt('头像', host);
    }

    /* 主播名单以 MVU 的 对象信息 为准，不再看本文件里的写死表——
       这样开局页新建的自定义主播自动就认得。 */
    function lrKnownHosts(stat) {
      const girls = lrGirlsMap(stat);
      return Object.keys(girls).filter((n) => girls[n] && (girls[n]['Phát sóng'] || girls[n].直播));
    }
    function lrPickHost(parsed) {
      const stat = lrReadStat();
      const hosts = lrKnownHosts(stat);
      const has = (n) => !!n && hosts.indexOf(n) >= 0;
      const fromTag = lrCanonHost(parsed.主播);
      if (has(fromTag)) return fromTag;
      const p = lrPlayer(stat);
      const watching = lrCanonHost(p['Phòng phát sóng hiện tại'] ?? p.所在直播间);
      if (has(watching)) return watching;
      const girls = lrGirlsMap(stat);
      const live = hosts.find((n) => {
        const st = girls[n]['Phát sóng'] || girls[n].直播 || {};
        return lrIsTrue(st['Đang phát sóng'] ?? st.开播);
      });
      return live || fromTag || hosts[0] || 'Taffy';
    }

    const __LR_FIELD_ALIAS = {
      'Loại': '类型', 'Tên': '名字', 'Quà': '礼物', 'Quà tặng': '礼物',
      'Số lượng': '数量', 'Số tiền': '金额', 'Nội dung': '内容', 'Huy hiệu': '牌子',
      '类型': '类型', '名字': '名字', '礼物': '礼物', '数量': '数量', '金额': '金额', '内容': '内容', '牌子': '牌子'
    };
    function lrSplitLineFields(line) {
      const text = String(line || '');
      const re = /(Loại|Tên|Quà tặng|Quà|Số lượng|Số tiền|Nội dung|Huy hiệu|类型|名字|礼物|数量|金额|内容|牌子)\s*[:：]/g;
      const hits = [];
      let m;
      while ((m = re.exec(text))) hits.push({ key: __LR_FIELD_ALIAS[m[1]] || m[1], at: m.index, end: m.index + m[0].length });
      if (!hits.length) return null;
      const fields = {};
      for (let i = 0; i < hits.length; i++) {
        const to = i + 1 < hits.length ? hits[i + 1].at : text.length;
        fields[hits[i].key] = text.slice(hits[i].end, to).trim();
      }
      return fields;
    }

    function lrParseDanmuLine(rawLine) {
      const line = String(rawLine || '').replace(/^[-•]\s+/, '').trim();
      if (!line) return null;
      const fields = lrSplitLineFields(line);
      if (!fields || !fields.类型) return null;
      const typeName = fields.类型;
      const kind = LR_TYPE_KEY[typeName] || 'chat';
      const item = {
        type: kind,
        user: fields.名字 || '',
        text: fields.内容 || '',
        // 粉丝牌整串照收（可以是别家主播的牌子，串门观众就靠这个体现），
        // 只把结尾的等级夹到 20 —— 玩家侧 lrBadgeLevel 的上限也是 20，
        // 否则路人随手一个 35 级，玩家再怎么打赏都追不上。
        medal: String(fields.牌子 || '').trim().replace(/(\d+)\s*$/, (m, n) => Math.min(20, +n)),
        gift: fields.礼物 || '',
        n: Math.max(1, parseInt(fields.数量, 10) || 1),
        amount: Math.max(0, parseInt(fields.金额, 10) || 0)
      };
      if (LR_TIER_KEY[typeName]) item.tier = LR_TIER_KEY[typeName];
      if (kind === 'sys') {
        if (!item.text) return null;
        return item;
      }
      if (!item.user) return null;
      if ((kind === 'chat' || kind === 'sc') && !item.text) return null;
      if (kind === 'gift' && !item.gift) return null;
      if (kind === 'gift' && !item.text) item.text = item.gift + ' x' + item.n;
      return item;
    }

    function parseLiveRoom(raw) {
      const decoded = decodeHtmlEntities(String(raw || ''));
      const room = { 主播: '', 主播说: '', 弹幕: [] };
      let inDanmu = false;
      decoded.split(/\r?\n/).forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        if (/^(?:弹幕|Bình luận|Danmaku)\s*[:：]/i.test(trimmed)) { inDanmu = true; return; }
        if (/^(?:主播说|Streamer nói)\s*[:：]/i.test(trimmed)) {
          inDanmu = false;
          room.主播说 = trimmed.replace(/^(?:主播说|Streamer nói)\s*[:：]\s*/i, '');
          return;
        }
        if (/^(?:主播|Streamer)\s*[:：]/i.test(trimmed)) {
          inDanmu = false;
          room.主播 = lrCanonHost(trimmed.replace(/^(?:主播|Streamer)\s*[:：]\s*/i, ''));
          return;
        }
        if (/^[-•]\s+/.test(trimmed) || inDanmu) {
          const item = lrParseDanmuLine(trimmed);
          if (item) room.弹幕.push(item);
        }
      });
      return room;
    }

    /* 礼物图标只有一个来源：辅助计算脚本 roomMenu().礼物[].图标（ART_HOST 拼出来的绝对地址）。
       原来这里还调了个 lrGiftCdn 做备用域名兜底，那个函数在图标表合并进辅助脚本时就没了，
       留在这儿等于每次画礼物按钮都抛 ReferenceError，整个 processTextContent 直接断掉。 */
    function lrImg(name) {
      const src = lrGiftSrc(name);
      // data-lr-far 留着远程地址：万一 blob: 地址在这个 iframe 里用不了，onerror 回退直连
      return `<img src="${lrAttr(assetUrl(src))}" data-lr-far="${lrAttr(src)}" alt="" loading="lazy" decoding="async"`
        + ` onerror="if(this.dataset.lrFar&&this.src!==this.dataset.lrFar){this.src=this.dataset.lrFar;delete this.dataset.lrFar}else this.style.display='none'">`;
    }

    function renderLiveRoom(raw, idx) {
      const parsed = parseLiveRoom(raw);
      const payload = encodeURIComponent(JSON.stringify(parsed));
      return `<div class="liveroom-wrap"><div class="liveroom" data-lr data-lr-idx="${idx}" data-lr-payload="${payload}">
        <header class="room-h">
          <div class="host">
            <div class="avatar"><img data-lr="avatar" alt="" loading="lazy" decoding="async" onerror="this.parentNode.style.background='#3a2a32'"></div>
            <div class="meta">
              <h1 data-lr="title"></h1>
              <p><span data-lr="name"></span><span data-lr="slot"></span><span data-lr="pop"></span></p>
            </div>
          </div>
          <div class="acts">
            <button class="pause" type="button" data-lr-act="danmu">Danmaku Bật</button>
            <button class="follow" type="button" data-lr-act="follow">+ Theo dõi</button>
          </div>
        </header>
        <div class="cam" data-lr="cam">
          <img class="feed" data-lr="feed" alt="" loading="lazy" decoding="async" onerror="this.style.display='none'">
          <span class="live" data-lr="live"><i></i>LIVE</span>
          <div class="danmu" data-lr="danmu"></div>
          <div class="toast" data-lr="toast">${lrImg('干杯')}<b></b><span></span></div>
        </div>
        <aside class="side">
          <div class="tabs">
            <button class="tab on" type="button" data-lr-tab="chat">Tương tác</button>
            <button class="tab" type="button" data-lr-tab="navy">Đại hàng hải</button>
            <button class="tab" type="button" data-lr-tab="rank">Bảng năng lượng</button>
          </div>
          <div class="pin" data-lr="pin"></div>
          <div class="pane on" data-lr="chat" role="log" aria-live="polite"></div>
          <div class="pane" data-lr="navy"></div>
          <div class="pane" data-lr="rank"></div>
          <form class="send" data-lr="form">
            <input data-lr="say" maxlength="30" placeholder="Gửi bình luận tương tác với streamer nào" autocomplete="off">
            <div class="send-acts">
              <button class="sc-btn" type="button" data-lr-act="sc">Bình luận nổi bật</button>
              <button class="go" type="submit">Gửi</button>
            </div>
          </form>
        </aside>
        <div class="tray">
          <div class="wallet">Tiền bạc <b data-lr="money"></b></div>
          <div class="rail">
            <button class="nudge prev off" type="button" data-lr-act="gift-prev" aria-label="向左看更多礼物"><i><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M8 2 4 6l4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>
            <div class="pills" data-lr="gifts"></div>
            <button class="nudge next off" type="button" data-lr-act="gift-next" aria-label="向右看更多礼物"><i><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>
          </div>
        </div>
        <div class="overlay" data-lr="overlay"><div class="dlg" data-lr="dlg" role="dialog" aria-modal="true"></div></div>
      </div></div>`;
    }

    function lrEl(root, key) { return root.querySelector('[data-lr="' + key + '"]'); }

    function lrPrefix(item) {
      return (item.medal ? `<span class="medal">${lrEsc(item.medal)}</span>` : '')
        + (item.tier ? `<span class="bdg ${item.tier}">${LR_TIER[item.tier] || ''}</span>` : '');
    }
    function lrScBand(n) { return n >= 100 ? '100' : n >= 50 ? '50' : '30'; }
    function lrScHold(amount) {
      const n = Number(amount) || 0;
      if (n >= 100) return 5 * 60 * 1000;
      if (n >= 50) return 2 * 60 * 1000;
      return 60 * 1000;
    }
    function lrScHtml(item) {
      return `<div class="sc sc-${lrScBand(item.amount)}"><div class="sc-h"><span>${lrEsc(item.user)}</span><span>¥${item.amount}</span></div><div class="sc-b">${lrEsc(item.text)}</div></div>`;
    }
    function lrHtmlOf(item) {
      if (item.type === 'enter') return `<p class="row enter">${lrEsc(item.user)} đã vào phòng</p>`;
      if (item.type === 'sys') return `<p class="row sys">${lrEsc(item.text)}</p>`;
      if (item.type === 'gift') {
        return `<p class="row gift-line"><span class="name">${lrEsc(item.user)}</span> đã tặng <em>${lrEsc(item.gift)}</em> x${item.n}</p>`;
      }
      if (item.type === 'sc') return `<div class="row">${lrScHtml(item)}</div>`;
      return `<p class="row ${item.host ? 'host-say' : ''} ${item.tier || ''}">${lrPrefix(item)}<span class="name">${lrEsc(item.user)}:</span><span>${lrEsc(item.text)}</span></p>`;
    }

    function lrPlayerMedal(state) {
      const lv = state.badge || 0;
      if (!lv) return '';
      // 牌子名来自 MVU 的 系统配置.直播间.<名>.牌子名，本文件不存
      return (state.medal || state.host) + ' ' + lv;
    }
    function lrPlayerTier(state) {
      return LR_TIER_KEY[state.tier] || '';
    }

    function lrPush(state, item, self) {
      const chat = lrEl(state.root, 'chat');
      chat.insertAdjacentHTML('beforeend', lrHtmlOf(item));
      while (chat.children.length > 46) chat.removeChild(chat.firstChild);
      chat.scrollTop = chat.scrollHeight;
      if (item.type === 'sc') lrPinSc(state, item);
      if (item.type === 'gift') lrShowToast(state, item);
      lrSpawnFly(state, item, self);
    }

    function lrLayoutMode(root) {
      const width = root.clientWidth;
      const hostLayout = document.body?.dataset.hostLayout;
      const hostMobile = hostLayout ? hostLayout === 'mobile' : window.innerWidth <= 768;
      if (width <= 440 || (hostMobile && width <= 580)) return 'stacked';
      if (width <= 580) return 'compact';
      return 'wide';
    }

    function lrPlacePin(state) {
      const root = state.root;
      const pin = lrEl(root, 'pin');
      const cam = lrEl(root, 'cam');
      const tabs = root.querySelector('.tabs');
      if (!pin || !cam || !tabs) return;
      const mode = lrLayoutMode(root);
      root.classList.toggle('is-stacked', mode === 'stacked');
      root.classList.toggle('is-compact', mode === 'compact');
      if (mode === 'stacked') {
        if (pin.parentNode !== cam) cam.appendChild(pin);
      } else if (pin.previousElementSibling !== tabs) {
        tabs.after(pin);
      }
    }

    function lrPlayPin(state) {
      lrPlacePin(state);
      cancelAnimationFrame(state.scRaf || 0);
      const pin = lrEl(state.root, 'pin');
      const item = (state.scQueue || []).shift();
      if (!item || !pin) {
        if (pin) {
          pin.className = 'pin';
          pin.innerHTML = '';
          pin.style.opacity = '';
          pin.style.removeProperty('--sc-p');
        }
        state.scCur = null;
        return;
      }
      pin.className = 'pin show sc-' + lrScBand(item.amount);
      pin.style.opacity = '1';
      pin.style.setProperty('--sc-p', 1);
      pin.innerHTML = `<div class="pin-h"><span class="pin-tag">SC</span><span class="pin-user">${lrEsc(item.user)}</span><span class="pin-yen">¥ ${item.amount}.00</span><span class="pin-bar"><span></span></span></div><p class="pin-t">${lrEsc(item.text)}</p>`;
      const hold = lrScHold(item.amount);
      state.scCur = { item, hold, left: hold, last: performance.now() };
      const tick = (now) => {
        if (!state.scCur) return;
        if (!pin.isConnected) { cancelAnimationFrame(state.scRaf); state.scCur = null; return; }
        state.scCur.left -= now - state.scCur.last;
        state.scCur.last = now;
        const p = Math.max(0, state.scCur.left / state.scCur.hold);
        pin.style.setProperty('--sc-p', String(p));
        pin.style.opacity = p < 0.2 ? String(0.28 + (p / 0.2) * 0.72) : '1';
        if (p <= 0) {
          pin.style.opacity = '';
          pin.classList.add('out');
          state.scCur = null;
          setTimeout(() => lrPlayPin(state), 420);
          return;
        }
        state.scRaf = requestAnimationFrame(tick);
      };
      state.scRaf = requestAnimationFrame(tick);
    }
    function lrPinSc(state, item) {
      if (!state.scQueue) state.scQueue = [];
      state.scQueue.push(item);
      if (!state.scCur) lrPlayPin(state);
    }

    function lrShowToast(state, item) {
      const toast = lrEl(state.root, 'toast');
      const img = toast.querySelector('img');
      const far = lrGiftSrc(item.gift);
      img.dataset.lrFar = far;
      img.onerror = () => {
        if (img.dataset.lrFar && img.src !== img.dataset.lrFar) { img.src = img.dataset.lrFar; delete img.dataset.lrFar; }
        else img.style.display = 'none';
      };
      img.style.display = '';
      img.src = assetUrl(far);
      toast.querySelector('b').textContent = item.user;
      toast.querySelector('span').textContent = item.line || (`đã tặng ${item.gift} x${item.n}`);
      toast.classList.add('show');
      clearTimeout(state.toastTimer);
      state.toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
    }

    function lrSpawnFly(state, item, self) {
      const cam = lrEl(state.root, 'cam');
      if (cam.classList.contains('quiet')) return;
      if (item.type !== 'chat' && item.type !== 'gift' && !item.host) return;
      const el = document.createElement('span');
      el.className = 'fly ' + (self ? 'self' : (item.tier || (item.type === 'gift' ? 'gift' : '') || (item.host ? 'self' : '')));
      el.textContent = item.type === 'gift' ? `${item.gift} x${item.n}` : (item.text || '');
      if (!el.textContent) return;
      /* 轨道号按 3 跳着走：相邻两条不会贴在一起，看上去更像真的在飘。
         速度从 5.5~7.6s 放慢到 10~13.5s ——原来一屏挤着十几条、还飘得快，
         叠在主播脸上根本读不完一句。 */
      const lane = state.lane % 9;
      el.style.top = `${4 + lane * 10}%`;
      el.style.animationDuration = `${9 + (state.lane % 7) * 0.5}s`;
      state.lane = (state.lane + 4) % 72;
      lrEl(state.root, 'danmu').appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }

    /* 公屏喂完之后不能空着——真直播间不会突然一条弹幕都没有。
       这里只往视频层补飞屏（从已经出现过的弹幕里随机挑），不往右侧公屏塞新行，
       免得凭空造出 AI 没写过的发言。卡片被移出 DOM 就自己停。 */
    function lrIdleFly(state) {
      clearTimeout(state.idleTimer);
      const pool = (state.parsed.弹幕 || []).filter((x) => x.type === 'chat' || x.type === 'gift');
      if (!pool.length) return;
      const tick = () => {
        if (!state.root.isConnected) return;
        const cam = lrEl(state.root, 'cam');
        if (cam && !cam.classList.contains('quiet')) {
          lrSpawnFly(state, pool[Math.floor(Math.random() * pool.length)]);
        }
        state.idleTimer = setTimeout(tick, 1600 + Math.random() * 2200);
      };
      state.idleTimer = setTimeout(tick, 1800);
    }

    /* 按真实节奏放弹幕：一条一条排队，每条间隔约 1~1.6s，20 条铺开半分钟左右。
       间隔和飞屏时长（9~12s）配起来，屏上同时最多七八条、九条轨道各占其一，能读完再走。
       原来是 i * 60，20 条 1.2 秒全喷完，公屏一次滚到底、飞屏一次全叠上，
       之后再没有新东西——就是「一上来全飘完然后没东西看」。 */
    function lrPlayQueue(state, list) {
      clearTimeout(state.queueTimer);
      const queue = (list || []).slice();
      const step = () => {
        if (!state.root.isConnected) return;
        const item = queue.shift();
        if (!item) { lrIdleFly(state); return; }
        lrPush(state, item);
        state.queueTimer = setTimeout(step, 980 + Math.random() * 620);
      };
      state.queueTimer = setTimeout(step, 240);
    }

    function lrPaintMoney(state) {
      lrEl(state.root, 'money').textContent = lrYen(state.money);
    }
    function lrPaintFollow(state) {
      const btn = state.root.querySelector('[data-lr-act="follow"]');
      btn.classList.toggle('on', !!state.follow);
      btn.textContent = state.follow ? 'Đã theo dõi' : '+ Theo dõi';
      btn.setAttribute('aria-pressed', state.follow ? 'true' : 'false');
      btn.title = state.follow ? 'Nhấn để bỏ theo dõi' : 'Nhấn để theo dõi streamer';
    }

    function lrSyncFollowFromMvu(state, paint) {
      const fan = lrFan(lrReadStat(), state.host);
      const next = lrIsTrue(fan['Theo dõi'] ?? fan.关注);
      const changed = next !== state.follow;
      state.follow = next;
      if (paint !== false && changed) lrPaintFollow(state);
      return next;
    }

    function lrWriteFollowDirect(state, follow) {
      const ok = applyMvuPatches([{
        op: 'add',
        path: `/Thông tin người chơi/Thân phận fan/${state.host}/Theo dõi`,
        value: follow === true
      }]);
      if (!ok) return { ok: false, 提示: 'Ghi trạng thái theo dõi vào MVU thất bại' };
      return { ok: true, 花费: 0, 快照: { 关注: follow === true } };
    }
    function lrPaintPop(state) {
      // 直播间没有人数，顶栏显示的是热度
      lrEl(state.root, 'pop').textContent = 'Độ nóng ' + lrFormatPop(state.heat);
    }
    function lrPaintLive(state) {
      lrEl(state.root, 'live').style.display = state.onAir ? '' : 'none';
    }

    function lrPaintNavy(state) {
      const list = (state.navy || []).slice().sort((a, b) => {
        const rank = { du: 0, ti: 1, jian: 2 };
        return (rank[a.tier] ?? 9) - (rank[b.tier] ?? 9);
      });
      lrEl(state.root, 'navy').innerHTML = list.map((g) =>
        `<div class="guard"><span>${lrPrefix(g)}<span class="name ${g.tier || ''}">${lrEsc(g.user)}</span></span><span class="hint" style="padding:0">Còn ${g.days} ngày</span></div>`
      ).join('') + `<div class="join"><p class="hint" style="padding:0 2px 4px">Mở Đại hàng hải: bình luận được ưu tiên nhìn thấy, ID sẽ được ghi nhớ.</p>${
        (lrMenu().大航海 || []).map((g) =>
          `<button class="join-btn" type="button" data-lr-act="guard" data-guard="${lrAttr(g.name)}">${lrImg(g.name)}<span>${lrEsc(g.name)} ${g.days} ngày</span><em>${lrPriceTag(g.price)}</em></button>`
        ).join('')
      }</div>`;
    }
    function lrPaintRank(state) {
      const rank = (state.rank || []).slice().sort((a, b) => b.score - a.score);
      lrEl(state.root, 'rank').innerHTML = rank.length
        ? rank.map((r, i) => `<div class="rank"><span>${i + 1}. ${lrEsc(r.user)}</span><b>${lrYen(r.score)}</b></div>`).join('')
        : '<p class="hint">Phiên phát sóng này chưa có ai lên bảng.</p>';
    }
    function lrAddRank(state, user, score) {
      if (!score) return;
      const hit = (state.rank || []).find((r) => r.user === user);
      if (hit) hit.score += score;
      else {
        if (!state.rank) state.rank = [];
        state.rank.push({ user, score });
      }
      lrPaintRank(state);
    }

    function lrSendToChat(text) {
      const content = String(text || '').trim();
      if (!content) return false;
      try {
        const win = window.parent || window;
        const doc = win.document || document;
        const textarea = doc.getElementById('send_textarea');
        const sendBtn = doc.getElementById('send_but');
        if (!textarea || !sendBtn) return false;
        textarea.value = content;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        sendBtn.click();
        return true;
      } catch (e) {
        console.warn('[正文美化] 发送到酒馆聊天失败', e);
        return false;
      }
    }

    function lrToast(state, message) {
      const text = String(message || '').trim();
      if (!text || !state) return;
      // 复用直播间已有的提示条，余额不足、MVU 未就绪等失败不会再静默。
      lrShowToast(state, { user: '提示', gift: '干杯', n: 1, line: text });
    }

    function lrSendRoomChat(state, text) {
      const ok = lrSendToChat(text);
      if (!ok) lrToast(state, 'Gửi thất bại: Không tìm thấy ô nhập chat SillyTavern');
      return ok;
    }

    /* 礼物、醒目留言和大航海先向酒馆发送消费消息，再由 roomAction 更新
       关注、累计打赏、牌子、热度和榜单；消费金额只由随后模型回合从金钱中扣除。 */
    function lrApplySnapshot(state, snap) {
      if (!snap) return;
      const has = (key) => Object.prototype.hasOwnProperty.call(snap, key);
      if (has('金钱')) state.money = snap.金钱;
      if (has('关注')) state.follow = snap.关注 === true;
      if (has('累计打赏')) state.tipped = snap.累计打赏;
      if (has('牌子等级')) state.badge = snap.牌子等级;
      if (has('牌子档位')) state.tier = snap.牌子档位 || '';
      if (has('牌子剩余天数')) state.days = snap.牌子剩余天数;
      if (has('热度')) state.heat = snap.热度;
      if (has('底盘热度')) state.base = snap.底盘热度;
      if (has('粉丝数')) state.fans = snap.粉丝数;
      if (snap.牌子名) state.medal = snap.牌子名;
      if (Array.isArray(snap.高能榜)) state.rank = snap.高能榜.map((r) => ({ user: r.名字, score: r.本场消费 }));
      if (Array.isArray(snap.大航海?.名单)) state.navy = snap.大航海.名单.map((x) => ({ user: x.名字, tier: LR_TIER_KEY[x.档位] || '', days: x.天数 }));
      lrPaintMoney(state);
      lrPaintPop(state);
      lrPaintFollow(state);
      lrPaintNavy(state);
      lrPaintRank(state);
    }
    /* 消费动作不扣钱，只同步其余直播间状态；关注/取关仍即时写入。 */
    function lrDoAction(state, action, extra) {
      const aux = lrAux();
      let res = null;
      try {
        if (aux) res = aux.roomAction(Object.assign({ 主播: state.host, 动作: action }, extra || {}));
        else if (action === '关注') res = lrWriteFollowDirect(state, extra?.关注 === true);
        else { lrToast(state, 'Script tính toán phụ trợ chưa chạy, tính năng tặng quà tạm thời không khả dụng'); return false; }
      }
      catch (e) { console.warn('[正文美化] roomAction', e); }
      if (!res || !res.ok) { lrToast(state, (res && res.提示) || 'Thao tác chưa hoàn tất'); return false; }
      lrApplySnapshot(state, res.快照);
      /* 榜一还手是脚本掷骰的结果，卡片只负责把它演出来 */
      if (res.还手) {
        lrPush(state, { type: 'gift', user: res.还手.名字, gift: '情书', n: 1 }, true);
        lrToast(state, res.还手.名字 + ' vừa phản công giành lại Top 1 rồi');
      }
      return res;
    }

    function lrCostOf(pending) {
      if (!pending) return 0;
      if (pending.mode === 'gift') return pending.price * pending.qty;
      if (pending.mode === 'guard') return pending.price;
      return pending.amount;
    }
    function lrSyncDlg(state) {
      const pending = state.pending;
      if (!pending) return;
      const dlg = lrEl(state.root, 'dlg');
      const cost = lrCostOf(pending);
      const broke = state.money < cost;
      const empty = pending.mode === 'sc' && !String(pending.text || '').trim();
      const sum = dlg.querySelector('[data-sum]');
      if (sum) sum.innerHTML = broke ? '<span class="broke">Số dư không đủ</span>' : `Tổng cộng <b>${lrYen(cost)}</b>`;
      const ok = dlg.querySelector('[data-ok]');
      if (ok) ok.disabled = broke || empty || (pending.mode === 'gift' && pending.qty < 1);
      dlg.querySelectorAll('[data-setqty]').forEach((b) => b.classList.toggle('on', Number(b.dataset.setqty) === pending.qty));
      dlg.querySelectorAll('[data-setamt]').forEach((b) => b.classList.toggle('on', Number(b.dataset.setamt) === pending.amount));
      const qty = dlg.querySelector('[data-qty]');
      if (qty && document.activeElement !== qty) qty.value = pending.qty;
    }
    function lrRenderDlg(state) {
      const pending = state.pending;
      if (!pending) return;
      const dlg = lrEl(state.root, 'dlg');
      if (pending.mode === 'gift') {
        dlg.innerHTML = `<div class="dlg-top"><div class="dlg-ico">${lrImg(pending.name)}</div><div class="dlg-meta"><h3>${lrEsc(pending.name)}</h3><p class="price">${lrPriceTag(pending.price)} / 个</p></div></div>
          <div class="qty-row"><span>Số lượng</span><button type="button" data-step="-1">−</button><input data-qty value="${pending.qty}" inputmode="numeric" maxlength="4" aria-label="赠送数量"><button type="button" data-step="1">+</button></div>
          <div class="chips">${(lrMenu().数量档位 || []).map((n) => `<button type="button" data-setqty="${n}">${n}</button>`).join('')}</div>
          <div class="dlg-foot"><span class="dlg-sum" data-sum></span><button type="button" class="cancel" data-cancel>Hủy</button><button type="button" class="ok" data-ok>Tặng</button></div>`;
      } else if (pending.mode === 'guard') {
        dlg.innerHTML = `<div class="dlg-top"><div class="dlg-ico">${lrImg(pending.name)}</div><div class="dlg-meta"><h3>${lrEsc(pending.name)}</h3><p class="price">${pending.days} 天 · ${lrPriceTag(pending.price)}</p></div></div>
          <div class="dlg-foot"><span class="dlg-sum" data-sum></span><button type="button" class="cancel" data-cancel>Hủy</button><button type="button" class="ok" data-ok>Mở</button></div>`;
      } else {
        dlg.innerHTML = `<div class="dlg-top"><div class="dlg-meta"><h3>Bình luận nổi bật (SC)</h3></div></div>
          <div class="chips">${(lrMenu().醒目留言档位 || []).map((n) => `<button type="button" data-setamt="${n}">¥${n}</button>`).join('')}</div>
          <div class="dlg-sc"><textarea data-sc-text maxlength="40" placeholder="Viết gì đó...">${lrEsc(pending.text || '')}</textarea></div>
          <div class="dlg-foot"><span class="dlg-sum" data-sum></span><button type="button" class="cancel" data-cancel>Hủy</button><button type="button" class="ok hot" data-ok>Gửi</button></div>`;
      }
      lrSyncDlg(state);
    }
    function lrCloseDlg(state) {
      lrEl(state.root, 'overlay').classList.remove('show');
      state.pending = null;
    }
    function lrOpenDlg(state) {
      lrEl(state.root, 'overlay').classList.add('show');
      lrRenderDlg(state);
      const focus = lrEl(state.root, 'dlg').querySelector('[data-qty], [data-sc-text]');
      if (focus) { focus.focus(); if (focus.select) focus.select(); }
    }

    function lrSendGift(state, name, qty) {
      // 先发送消费消息让模型扣钱，再由代码同步其余直播间状态。
      const item = lrGiftItem(name);
      if (!item) return false;
      const count = Math.max(1, Number(qty) || 1);
      const cost = (Number(item.price) || 0) * count;
      if (!lrSendRoomChat(state, `消费${cost}，送出${count}个${name}`)) return false;
      lrDoAction(state, '礼物', { 礼物: name, 数量: count });
      lrPush(state, { type: 'gift', user: 'Bạn', gift: name, n: count }, true);
      return true;
    }
    function lrOpenGift(state, name) {
      const gift = lrGiftItem(name);
      if (!gift) return;
      if (!gift.price) { lrSendGift(state, name, 1); return; }
      state.pending = { mode: 'gift', ...gift, qty: 1 };
      lrOpenDlg(state);
    }
    function lrOpenGuard(state, name) {
      const card = (lrMenu().大航海 || []).find((g) => g.name === name);
      if (!card) return;
      state.pending = { mode: 'guard', ...card, tier: LR_TIER_KEY[card.name] || '' };
      lrOpenDlg(state);
    }
    function lrOpenSc(state) {
      state.pending = { mode: 'sc', amount: 30, text: (lrEl(state.root, 'say').value || '').trim() };
      lrOpenDlg(state);
    }
    function lrConfirm(state) {
      const pending = state.pending;
      if (!pending) return;
      const cost = lrCostOf(pending);
      if (state.money < cost) {
        lrToast(state, 'Số dư không đủ');
        return;
      }
      if (pending.mode === 'sc' && !String(pending.text || '').trim()) {
        lrToast(state, 'Vui lòng nhập nội dung bình luận nổi bật');
        return;
      }
      if (pending.mode === 'gift') {
        if (!lrSendGift(state, pending.name, pending.qty)) return;
      } else if (pending.mode === 'guard') {
        // 消费消息只负责让模型扣钱，牌子与直播间状态由代码同步。
        if (!lrSendRoomChat(state, `消费${pending.price}，开通${state.host}的${pending.name}`)) return;
        lrDoAction(state, '大航海', { 礼物: pending.name });
        lrShowToast(state, { user: 'Bạn', gift: pending.name, line: `Đã mở ${pending.name} ${pending.days} ngày` });
        lrPush(state, { type: 'sys', text: `Bạn đã trở thành ${pending.name} của ${state.host} (${pending.days} ngày)` }, true);
        lrSpawnFly(state, { type: 'gift', gift: pending.name, n: 1 }, true);
      } else {
        const text = pending.text.trim();
        if (!lrSendRoomChat(state, `消费${pending.amount}，发送价值${pending.amount}的SC：${text}`)) return;
        lrDoAction(state, '醒目留言', { 金额: pending.amount, 内容: text });
        lrPush(state, { type: 'sc', user: 'Bạn', amount: pending.amount, text }, true);
        lrEl(state.root, 'say').value = '';
      }
      lrCloseDlg(state);
    }

    function lrHydrate(root) {
      if (root._lr) return root._lr;
      let parsed = { 主播: '', 主播说: '', 弹幕: [] };
      try { parsed = JSON.parse(decodeURIComponent(root.getAttribute('data-lr-payload') || '') || '{}'); }
      catch (e) { }
      const host = lrPickHost(parsed);
      const stat = lrReadStat();
      const player = lrPlayer(stat);
      const girlObj = lrGirl(stat, host);
      const live = girlObj['Phát sóng'] || girlObj.直播 || {};
      const fan = lrFan(stat, host);
      const room = lrRoomCfg(stat, host);
      const navyObj = room['Đại hàng hải'] || room.大航海 || {};
      const navySrc = Array.isArray(navyObj['Danh sách'] || navyObj.名单) ? (navyObj['Danh sách'] || navyObj.名单) : [];
      const rankSrc = Array.isArray(room['Bảng năng lượng cao'] || room.高能榜) ? (room['Bảng năng lượng cao'] || room.高能榜) : [];
      const rawMoney = player['Tiền bạc'] ?? player.金钱;
      const rawTier = fan['Hạng huy hiệu'] ?? fan.牌子档位;
      const rawOnAir = live['Đang phát sóng'] ?? live.开播;
      const state = {
        root, host, parsed, stat, room, lane: 0, pending: null, toastTimer: 0, swipeMoved: 0,
        queueTimer: 0, idleTimer: 0,
        money: (rawMoney == null || rawMoney === '') ? 286450 : lrParseNum(rawMoney),
        follow: lrIsTrue(fan['Theo dõi'] ?? fan.关注),
        tipped: lrParseNum(fan['Tổng donate'] ?? fan.累计打赏),
        badge: lrParseNum(fan['Cấp huy hiệu'] ?? fan.牌子等级),
        tier: rawTier && rawTier !== '无' && rawTier !== 'Không' ? rawTier : '',
        days: lrParseNum(fan['Số ngày huy hiệu còn lại'] ?? fan.牌子剩余天数),
        medal: room['Tên huy hiệu'] || room.牌子名 || '',
        slot: room['Lịch phát sóng'] || room.档期 || '',
        base: lrParseNum(room['Độ nóng nền'] ?? room.底盘热度),
        heat: lrParseNum(live['Độ nóng'] ?? live.热度) || lrParseNum(room['Độ nóng nền'] ?? room.底盘热度),
        fans: lrParseNum(live['Số người hâm mộ'] ?? live.粉丝数),
        onAir: rawOnAir == null ? true : lrIsTrue(rawOnAir),
        title: live['Tiêu đề'] || live.标题 || '',
        navy: navySrc.map((x) => ({ user: x['Tên'] || x.名字, tier: LR_TIER_KEY[x['Hạng'] || x.档位] || '', days: lrParseNum(x['Số ngày'] ?? x.天数) })),
        rank: rankSrc.map((x) => ({ user: x['Tên'] || x.名字, score: lrParseNum(x['Tiêu dùng phiên này'] ?? x.本场消费) }))
      };
      if (!state.title) state.title = 'Phòng phát sóng của ' + host;
      if (state.tier && !(state.navy || []).some((g) => g.user === 'Bạn' || g.user === '你')) {
        state.navy = [{ user: 'Bạn', tier: LR_TIER_KEY[state.tier], days: state.days || 30 }].concat(state.navy || []);
      }
      root._lr = state;
      return state;
    }

    function lrBindRail(state) {
      const giftsEl = lrEl(state.root, 'gifts');
      const prev = state.root.querySelector('[data-lr-act="gift-prev"]');
      const next = state.root.querySelector('[data-lr-act="gift-next"]');
      const sync = () => {
        const max = giftsEl.scrollWidth - giftsEl.clientWidth;
        prev.classList.toggle('off', max < 8 || giftsEl.scrollLeft < 8);
        next.classList.toggle('off', max < 8 || giftsEl.scrollLeft > max - 8);
      };
      giftsEl.addEventListener('scroll', sync, { passive: true });
      requestAnimationFrame(sync);
      let down = false, x0 = 0, left0 = 0, pressPill = null;
      giftsEl.addEventListener('pointerdown', (e) => {
        if (e.button && e.button !== 0) return;
        down = true;
        pressPill = e.target.closest('.pill');
        x0 = e.clientX;
        left0 = giftsEl.scrollLeft;
        state.swipeMoved = 0;
        giftsEl.setPointerCapture(e.pointerId);
        giftsEl.classList.add('is-drag');
      });
      giftsEl.addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - x0;
        if (Math.abs(dx) < 10) return;
        state.swipeMoved = Math.max(state.swipeMoved, Math.abs(dx));
        giftsEl.scrollLeft = left0 - dx;
      });
      giftsEl.addEventListener('pointerup', (e) => {
        const pill = pressPill;
        const moved = state.swipeMoved;
        down = false;
        pressPill = null;
        giftsEl.classList.remove('is-drag');
        try { giftsEl.releasePointerCapture(e.pointerId); } catch (err) { }
        if (pill && moved <= 10) {
          if (pill.dataset.kind === 'guard') lrOpenGuard(state, pill.dataset.gift);
          else lrOpenGift(state, pill.dataset.gift);
        }
      });
      giftsEl.addEventListener('pointercancel', () => {
        down = false;
        pressPill = null;
        giftsEl.classList.remove('is-drag');
      });
      giftsEl.addEventListener('wheel', (e) => {
        if (giftsEl.scrollWidth <= giftsEl.clientWidth) return;
        e.preventDefault();
        giftsEl.scrollLeft += e.deltaY + e.deltaX;
      }, { passive: false });
    }

    function mountLiveRoom(root) {
      if (root.dataset.lrReady) return;
      root.dataset.lrReady = '1';
      const state = lrHydrate(root);
      const avatar = lrEl(root, 'avatar');
      const feed = lrEl(root, 'feed');
      avatar.src = lrArt('头像', state.host);
      avatar.alt = state.host;
      feed.src = lrCoverSrc(state.stat, state.host);
      feed.alt = state.host + '立绘';
      lrEl(root, 'title').textContent = state.title;
      lrEl(root, 'name').textContent = state.host;
      lrEl(root, 'slot').textContent = state.slot;
      lrPaintPop(state);
      lrPaintLive(state);
      lrPaintMoney(state);
      lrPaintFollow(state);
      lrPaintNavy(state);
      lrPaintRank(state);
      const giftsEl = lrEl(root, 'gifts');
      giftsEl.innerHTML = (lrMenu().礼物 || []).map((g) =>
        `<button class="pill" type="button" data-kind="gift" data-gift="${lrAttr(g.name)}">${lrImg(g.name)}<b>${lrEsc(g.name)}</b><em>${lrPriceTag(g.price)}</em></button>`
      ).join('') + (lrMenu().大航海 || []).map((g) =>
        `<button class="pill" type="button" data-kind="guard" data-gift="${lrAttr(g.name)}">${lrImg(g.name)}<b>${lrEsc(g.name)}</b><em>${lrPriceTag(g.price)}</em></button>`
      ).join('');
      lrBindRail(state);
      lrPlacePin(state);
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(() => lrPlacePin(state)).observe(state.root);
      }
      if (state.parsed.主播说) {
        lrPush(state, { type: 'chat', user: state.host, text: state.parsed.主播说, host: true }, true);
      }
      lrPlayQueue(state, state.parsed.弹幕 || []);
    }

    function lrFromEvent(ev) {
      const root = ev.target && ev.target.closest && ev.target.closest('.liveroom');
      return root ? lrHydrate(root) : null;
    }

    function bindLiveRoomEvents() {
      if (window.__lrBound) return;
      window.__lrBound = true;
      document.addEventListener('click', (ev) => {
        const tab = ev.target.closest('[data-lr-tab]');
        if (tab) {
          const root = tab.closest('.liveroom');
          if (!root) return;
          ev.preventDefault();
          root.querySelectorAll('.tab').forEach((t) => t.classList.remove('on'));
          root.querySelectorAll('.pane').forEach((p) => p.classList.remove('on'));
          tab.classList.add('on');
          const pane = lrEl(root, tab.getAttribute('data-lr-tab'));
          if (pane) pane.classList.add('on');
          return;
        }
        const dlgClick = ev.target.closest('[data-lr="dlg"]');
        if (dlgClick) {
          const state = lrFromEvent(ev);
          if (!state) return;
          if (ev.target.closest('[data-cancel]')) { lrCloseDlg(state); return; }
          if (ev.target.closest('[data-ok]')) { lrConfirm(state); return; }
          const step = ev.target.closest('[data-step]');
          if (step && state.pending && state.pending.mode === 'gift') {
            state.pending.qty = Math.max(1, Math.min(9999, (state.pending.qty || 1) + Number(step.dataset.step)));
            lrSyncDlg(state);
            return;
          }
          const q = ev.target.closest('[data-setqty]');
          if (q && state.pending && state.pending.mode === 'gift') {
            state.pending.qty = Number(q.dataset.setqty);
            lrSyncDlg(state);
            return;
          }
          const a = ev.target.closest('[data-setamt]');
          if (a && state.pending && state.pending.mode === 'sc') {
            state.pending.amount = Number(a.dataset.setamt);
            lrSyncDlg(state);
          }
          return;
        }
        const act = ev.target.closest('[data-lr-act]');
        if (!act) {
          const overlay = ev.target.closest('[data-lr="overlay"]');
          if (overlay && ev.target === overlay) {
            const state = lrFromEvent(ev);
            if (state) lrCloseDlg(state);
          }
          return;
        }
        const state = lrFromEvent(ev);
        if (!state) return;
        const kind = act.getAttribute('data-lr-act');
        if (kind === 'danmu') {
          const quiet = lrEl(state.root, 'cam').classList.toggle('quiet');
          act.textContent = quiet ? 'Danmaku Tắt' : 'Danmaku Bật';
        } else if (kind === 'follow') {
          // 点下去时先重读一次，避免卡片挂载后 MVU 被别处修改导致反向操作。
          lrSyncFollowFromMvu(state, false);
          lrDoAction(state, '关注', { 关注: !state.follow });
        } else if (kind === 'sc') {
          ev.preventDefault();
          lrOpenSc(state);
        } else if (kind === 'guard') {
          ev.preventDefault();
          lrOpenGuard(state, act.getAttribute('data-guard'));
        } else if (kind === 'gift-prev') {
          lrEl(state.root, 'gifts').scrollBy({ left: -150, behavior: 'smooth' });
        } else if (kind === 'gift-next') {
          lrEl(state.root, 'gifts').scrollBy({ left: 150, behavior: 'smooth' });
        }
      });
      document.addEventListener('submit', (ev) => {
        const form = ev.target.closest && ev.target.closest('[data-lr="form"]');
        if (!form) return;
        ev.preventDefault();
        const state = lrFromEvent(ev);
        if (!state) return;
        const input = lrEl(state.root, 'say');
        const text = (input.value || '').trim();
        if (!text) return;
        if (!lrSendRoomChat(state, `发送弹幕：${text}`)) return;
        lrPush(state, { type: 'chat', user: 'Bạn', tier: lrPlayerTier(state), medal: lrPlayerMedal(state), text }, true);
        input.value = '';
      });
      document.addEventListener('input', (ev) => {
        const dlg = ev.target.closest && ev.target.closest('[data-lr="dlg"]');
        if (!dlg) return;
        const state = lrFromEvent(ev);
        if (!state || !state.pending) return;
        if (ev.target.dataset.qty !== undefined && state.pending.mode === 'gift') {
          state.pending.qty = Math.max(1, Math.min(9999, parseInt(ev.target.value, 10) || 1));
          lrSyncDlg(state);
        }
        if (ev.target.dataset.scText !== undefined && state.pending.mode === 'sc') {
          state.pending.text = ev.target.value;
          lrSyncDlg(state);
        }
      });
      document.addEventListener('keydown', (ev) => {
        if (ev.key !== 'Escape' && !(ev.key === 'Enter' && !ev.shiftKey)) return;
        const overlay = document.querySelector('.liveroom .overlay.show');
        if (!overlay) return;
        const state = overlay.closest('.liveroom') && overlay.closest('.liveroom')._lr;
        if (!state) return;
        if (ev.key === 'Escape') { ev.preventDefault(); lrCloseDlg(state); }
        else if (ev.target.closest('[data-lr="dlg"]')) { ev.preventDefault(); lrConfirm(state); }
      });

      // AI、状态栏或其它卡片改了 MVU 后，当前直播间按钮也跟着刷新。
      try {
        const win = getCore().window;
        const eventOnFn = win.eventOn || window.eventOn;
        if (!window.__lrMvuFollowBound && typeof eventOnFn === 'function' && (mvuState.ready || mvuState.check())) {
          const eventName = mvuState.mvu?.events?.VARIABLE_UPDATE_ENDED;
          if (eventName) {
            window.__lrMvuFollowBound = true;
            eventOnFn(eventName, () => {
              document.querySelectorAll('.liveroom').forEach((root) => {
                if (root._lr) lrSyncFollowFromMvu(root._lr, true);
              });
            });
          }
        }
      } catch (e) { console.warn('[正文美化] MVU 关注状态监听失败', e); }
    }

    const ENABLE_DEMO_CONTENT = false;
    const ST_UNREPLACED = '$' + '1';

    function initLiveRooms() {
      const content = document.getElementById('readingContent');
      const raw = content && (content.textContent || '');
      const slotOpen = ENABLE_DEMO_CONTENT && (location.protocol === 'file:' || raw.includes(ST_UNREPLACED));
      if (content && !content.querySelector('.liveroom') && slotOpen) {
        content.insertAdjacentHTML('beforeend', renderLiveRoom(LR_DEMO, 0));
      }
      const rooms = document.querySelectorAll('.liveroom');
      if (!rooms.length) return;
      bindLiveRoomEvents();
      // 单间挂载失败只丢那一张卡（多半是 AI 写出了脚本不认的字段），不影响其它卡和正文
      rooms.forEach((room) => {
        try { mountLiveRoom(room); }
        catch (err) { console.error('[正文美化] 直播间挂载失败', err); }
      });
    }

    

function initStandaloneLiveRoom() {
  var srcEl = document.getElementById('stLiveRoomSource');
  var mountEl = document.getElementById('stLiveRoomMount');
  if (!srcEl || !mountEl) return;
  if (mountEl.dataset.initialized) return;
  mountEl.dataset.initialized = '1';

  var raw = '';
  if (srcEl.tagName === 'TEMPLATE') {
    raw = (srcEl.content ? srcEl.content.textContent : srcEl.innerHTML) || '';
  } else {
    raw = srcEl.textContent || '';
  }
  mountEl.innerHTML = renderLiveRoom(raw, 0);
  var rooms = mountEl.querySelectorAll('.liveroom');
  if (rooms.length) {
    bindLiveRoomEvents();
    rooms.forEach(function(room) {
      try { mountLiveRoom(room); }
      catch (err) { console.error('[LiveRoom] Mount failed:', err); }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStandaloneLiveRoom);
} else {
  initStandaloneLiveRoom();
}
setTimeout(initStandaloneLiveRoom, 60);
setTimeout(initStandaloneLiveRoom, 300);
