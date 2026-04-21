/* ===================================================
   TapKorea — App Logic
   =================================================== */
'use strict';

// ── i18n ─────────────────────────────────────────────────────────────────────
const I18N = {
  ko: {
    search_placeholder: '장소 검색…', change_language: '언어 변경',
    nav_explore: '탐색', nav_scan: '스캔', nav_saved: '저장', nav_profile: '프로필',
    sheet_audio: '오디오 가이드', sheet_save: '저장',
    toast_saved: '저장되었습니다 🔖', toast_audio: '오디오 가이드 시작 🎧',
    free: '무료', paid: '유료', hours_open: '오전 9시', hours_close: '오후 6시',
    filter_all: '전체', filter_heritage: '유산', filter_culture: '문화',
    filter_landmark: '랜드마크', filter_shopping: '쇼핑',
    select_region: '지역 선택', all_korea: '전국', fab_regions: '지역', spots_label: '개 명소',
    region_all: '전국', region_seoul: '서울', region_gyeonggi: '경기도',
    region_gangwon: '강원도', region_chungnam: '충청남도', region_chungbuk: '충청북도',
    region_jeonnam: '전라남도', region_jeonbuk: '전라북도',
    region_gyeongnam: '경상남도', region_gyeongbuk: '경상북도',
    // marker type labels
    type_route: '루트', type_festival: '축제', type_partner: '파트너',
    btn_start_route: '루트 시작', btn_directions: '길찾기', btn_remind: '알림 설정',
    label_duration: '소요시간', label_distance: '거리', label_difficulty: '난이도',
    label_date: '날짜', label_entry: '입장', label_type: '분류',
    label_hours: '운영시간', label_price: '가격',
    easy: '쉬움', moderate: '보통',
    // --- location names (Chungnam only) ---
    loc0_name: '공주 공산성',          loc0_short: '공산성',
    loc1_name: '부여 백제문화단지',    loc1_short: '백제단지',
    loc2_name: '태안 해안국립공원',    loc2_short: '태안',
    loc3_name: '천안 독립기념관',      loc3_short: '독립기념관',
    loc4_name: '아산 현충사',          loc4_short: '현충사',
    loc5_name: '보령 대천해변',        loc5_short: '대천해변',
    loc6_name: '서산 해미읍성',        loc6_short: '해미읍성',
    loc7_name: '당진 왜목마을',        loc7_short: '왜목마을',
    loc8_name: '논산 관촉사',          loc8_short: '관촉사',
    loc9_name: '홍성 홍주읍성',        loc9_short: '홍주읍성',
    loc10_name: '예산 수덕사',         loc10_short: '수덕사',
    loc11_name: '금산 칠백의총',       loc11_short: '칠백의총',
    loc12_name: '청양 칠갑산도립공원', loc12_short: '칠갑산',
    loc13_name: '서천 국립생태원',     loc13_short: '국립생태원',
    loc0_desc: '백제 시대 산성으로 금강이 내려다보이는 웅장한 풍경이 인상적입니다.',
    loc1_desc: '백제의 역사와 문화를 재현한 대규모 테마 문화 단지입니다.',
    loc2_desc: '서해안 국립공원으로 해넘이와 갯벌 체험이 유명합니다.',
    loc3_desc: '1919년 3·1운동 정신을 기리는 대한민국 최대 독립운동 기념관입니다.',
    loc4_desc: '이순신 장군의 얼이 담긴 사당으로 아름다운 정원과 함께 꼭 방문해야 할 명소입니다.',
    loc5_desc: '세계적으로 유명한 머드 축제의 본고장, 청정 서해의 아름다운 해변입니다.',
    loc6_desc: '조선 시대 읍성으로 천주교 순교 성지로도 유명한 역사 깊은 곳입니다.',
    loc7_desc: '서해와 서산만이 만나는 독특한 지형에 위치한 아름다운 어촌 마을입니다.',
    loc8_desc: '고려 시대에 조성된 18m 높이의 거대 석불 미륵보살이 유명합니다.',
    loc9_desc: '고려 시대 홍주목의 중심 읍성으로 역사 탐방과 문화재 관람이 가능합니다.',
    loc10_desc: '백제 시대에 창건된 천년 고찰로 덕숭산 자락의 아름다운 경관이 유명합니다.',
    loc11_desc: '임진왜란 때 왜적에 맞서 싸운 700명 의병의 넋을 기리는 역사 성지입니다.',
    loc12_desc: '충남의 알프스라 불리는 칠갑산 자락의 아름다운 도립공원입니다.',
    loc13_desc: '국내 최대 규모의 생태 전시·연구 기관으로 자연 생태를 체험할 수 있습니다.',
  },

  en: {
    search_placeholder: 'Search locations…', change_language: 'Change Language',
    nav_explore: 'Explore', nav_scan: 'Scan', nav_saved: 'Saved', nav_profile: 'Profile',
    sheet_audio: 'Audio Guide', sheet_save: 'Save',
    toast_saved: 'Saved 🔖', toast_audio: 'Audio guide started 🎧',
    free: 'Free', paid: 'Paid', hours_open: '9:00 AM', hours_close: '6:00 PM',
    filter_all: 'All', filter_heritage: 'Heritage', filter_culture: 'Culture',
    filter_landmark: 'Landmark', filter_shopping: 'Shopping',
    select_region: 'Select Region', all_korea: 'All Korea', fab_regions: 'Regions', spots_label: ' spots',
    region_all: 'All Korea', region_seoul: 'Seoul', region_gyeonggi: 'Gyeonggi',
    region_gangwon: 'Gangwon', region_chungnam: 'Chungnam', region_chungbuk: 'Chungbuk',
    region_jeonnam: 'Jeonnam', region_jeonbuk: 'Jeonbuk',
    region_gyeongnam: 'Gyeongnam', region_gyeongbuk: 'Gyeongbuk',
    type_route: 'Route', type_festival: 'Festival', type_partner: 'Partner',
    btn_start_route: 'Start Route', btn_directions: 'Get Directions', btn_remind: 'Remind Me',
    label_duration: 'Duration', label_distance: 'Distance', label_difficulty: 'Level',
    label_date: 'Date', label_entry: 'Entry', label_type: 'Type',
    label_hours: 'Hours', label_price: 'Price',
    easy: 'Easy', moderate: 'Moderate',
    loc0_name: 'Gongju Gongsanseong',           loc0_short: 'Gongsanseong',
    loc1_name: 'Buyeo Baekje Cultural Land',    loc1_short: 'Baekje Land',
    loc2_name: 'Taean National Park',           loc2_short: 'Taean',
    loc3_name: 'Cheonan Independence Hall',     loc3_short: 'Indep. Hall',
    loc4_name: 'Asan Hyeonchungsa Shrine',      loc4_short: 'Hyeonchungsa',
    loc5_name: 'Boryeong Daecheon Beach',       loc5_short: 'Daecheon',
    loc6_name: 'Seosan Haemi Fortress',         loc6_short: 'Haemi',
    loc7_name: 'Dangjin Waemok Village',        loc7_short: 'Waemok',
    loc8_name: 'Nonsan Gwanchoksa Temple',      loc8_short: 'Gwanchoksa',
    loc9_name: 'Hongseong Hongju Fortress',     loc9_short: 'Hongju',
    loc10_name: 'Yesan Sudeoksa Temple',        loc10_short: 'Sudeoksa',
    loc11_name: 'Geumsan Chilbaek Memorial',    loc11_short: 'Chilbaek',
    loc12_name: 'Cheongyang Chilgapsan Park',   loc12_short: 'Chilgapsan',
    loc13_name: "Seocheon Nat'l Eco Institute", loc13_short: 'Eco Institute',
    loc0_desc: 'A Baekje-era mountain fortress with commanding views over the scenic Geum River.',
    loc1_desc: 'A large-scale cultural theme park recreating the ancient Baekje Kingdom.',
    loc2_desc: 'A scenic West Sea national park known for sunsets and tidal flat experiences.',
    loc3_desc: "Korea's largest independence movement memorial honoring the spirit of the March 1st Movement.",
    loc4_desc: 'A revered shrine dedicated to Admiral Yi Sun-sin, surrounded by beautiful gardens.',
    loc5_desc: 'Home of the world-famous Boryeong Mud Festival and pristine West Sea beaches.',
    loc6_desc: 'A well-preserved Joseon-era fortress town and important Catholic martyrdom site.',
    loc7_desc: 'A scenic fishing village where the Yellow Sea meets Seosan Bay in a unique landscape.',
    loc8_desc: 'Famous for a massive 18-meter Goryeo-era Maitreya Buddha carved into living rock.',
    loc9_desc: 'Historic Goryeo fortress of Hongju — a cultural heritage site in central Chungnam.',
    loc10_desc: 'A thousand-year-old Buddhist temple on Deoksungsan Mountain in scenic Yesan.',
    loc11_desc: 'A memorial honoring 700 righteous soldiers who fought against the Japanese invasion.',
    loc12_desc: 'A beautiful provincial park on Chilgapsan mountain, the "Alps of Chungnam".',
    loc13_desc: "Korea's largest ecological exhibition and research institute with immersive nature experiences.",
  },

  zh: {
    search_placeholder: '搜索地点…', change_language: '更改语言',
    nav_explore: '探索', nav_scan: '扫描', nav_saved: '收藏', nav_profile: '我的',
    sheet_audio: '语音导览', sheet_save: '收藏',
    toast_saved: '已收藏 🔖', toast_audio: '语音导览已开始 🎧',
    free: '免费', paid: '收费', hours_open: '上午9时', hours_close: '下午6时',
    filter_all: '全部', filter_heritage: '遗产', filter_culture: '文化',
    filter_landmark: '地标', filter_shopping: '购物',
    select_region: '选择地区', all_korea: '全国', fab_regions: '地区', spots_label: ' 景点',
    region_all: '全国', region_seoul: '首尔', region_gyeonggi: '京畿道',
    region_gangwon: '江原道', region_chungnam: '忠清南道', region_chungbuk: '忠清北道',
    region_jeonnam: '全罗南道', region_jeonbuk: '全罗北道',
    region_gyeongnam: '庆尚南道', region_gyeongbuk: '庆尚北道',
    type_route: '路线', type_festival: '节庆', type_partner: '合作商家',
    btn_start_route: '开始路线', btn_directions: '获取路线', btn_remind: '设置提醒',
    label_duration: '时长', label_distance: '距离', label_difficulty: '难度',
    label_date: '日期', label_entry: '门票', label_type: '类型',
    label_hours: '营业时间', label_price: '价格',
    easy: '轻松', moderate: '适中',
    loc0_name: '公州公山城', loc0_short: '公山城',
    loc1_name: '扶余百济文化园', loc1_short: '百济文化园',
    loc2_name: '泰安海岸国立公园', loc2_short: '泰安',
    loc3_name: '天安独立纪念馆', loc3_short: '独立纪念馆',
    loc4_name: '牙山显忠祠', loc4_short: '显忠祠',
    loc5_name: '保宁大川海水浴场', loc5_short: '大川海边',
    loc6_name: '瑞山海美邑城', loc6_short: '海美邑城',
    loc7_name: '唐津倭目村', loc7_short: '倭目村',
    loc8_name: '论山灌烛寺', loc8_short: '灌烛寺',
    loc9_name: '洪城洪州邑城', loc9_short: '洪州邑城',
    loc10_name: '礼山修德寺', loc10_short: '修德寺',
    loc11_name: '锦山七百义冢', loc11_short: '七百义冢',
    loc12_name: '青阳七甲山道立公园', loc12_short: '七甲山',
    loc13_name: '舒川国立生态院', loc13_short: '国立生态院',
    loc0_desc: '百济时代山城，俯瞰壮阔的锦江风景，令人印象深刻。',
    loc1_desc: '重现古代百济王国历史与文化的大规模主题文化园区。',
    loc2_desc: '西海岸国立公园，以日落美景和滩涂体验而著名。',
    loc3_desc: '纪念1919年三一运动精神的韩国最大独立运动纪念馆。',
    loc4_desc: '供奉李舜臣将军的神圣祠堂，周围环绕着美丽的庭园。',
    loc5_desc: '世界著名泥浆节的发源地，拥有清洁的西海美丽海滩。',
    loc6_desc: '保存完好的朝鲜时代邑城，也是重要的天主教殉道地。',
    loc7_desc: '黄海与瑞山湾交汇处独特地貌中的美丽渔村。',
    loc8_desc: '以高丽时代18米高的巨型弥勒石佛而闻名。',
    loc9_desc: '高丽时代洪州牧的中心邑城，忠南重要的文化遗址。',
    loc10_desc: '始建于百济时代的千年古刹，位于礼山德崇山麓风景秀丽。',
    loc11_desc: '纪念壬辰倭乱中抗击倭寇牺牲的七百义士的历史圣地。',
    loc12_desc: '被称为忠南阿尔卑斯的七甲山上美丽的道立公园。',
    loc13_desc: '韩国最大规模的生态展示研究机构，可以体验自然生态。',
  },

  ja: {
    search_placeholder: '場所を検索…', change_language: '言語を変更',
    nav_explore: '探索', nav_scan: 'スキャン', nav_saved: '保存', nav_profile: 'プロフィール',
    sheet_audio: '音声ガイド', sheet_save: '保存',
    toast_saved: '保存しました 🔖', toast_audio: '音声ガイド開始 🎧',
    free: '無料', paid: '有料', hours_open: '午前9時', hours_close: '午後6時',
    filter_all: '全て', filter_heritage: '遺産', filter_culture: '文化',
    filter_landmark: 'ランドマーク', filter_shopping: 'ショッピング',
    select_region: '地域を選択', all_korea: '全国', fab_regions: '地域', spots_label: ' スポット',
    region_all: '全国', region_seoul: 'ソウル', region_gyeonggi: '京畿道',
    region_gangwon: '江原道', region_chungnam: '忠清南道', region_chungbuk: '忠清北道',
    region_jeonnam: '全羅南道', region_jeonbuk: '全羅北道',
    region_gyeongnam: '慶尚南道', region_gyeongbuk: '慶尚北道',
    type_route: 'ルート', type_festival: 'フェスティバル', type_partner: 'パートナー',
    btn_start_route: 'ルート開始', btn_directions: '道順を取得', btn_remind: 'リマインド設定',
    label_duration: '所要時間', label_distance: '距離', label_difficulty: 'レベル',
    label_date: '日付', label_entry: '入場', label_type: '種類',
    label_hours: '営業時間', label_price: '価格',
    easy: '簡単', moderate: '普通',
    loc0_name: '公州公山城', loc0_short: '公山城',
    loc1_name: '扶余百済文化団地', loc1_short: '百済団地',
    loc2_name: '泰安海岸国立公園', loc2_short: '泰安',
    loc3_name: '天安独立記念館', loc3_short: '独立記念館',
    loc4_name: '牙山顕忠祠', loc4_short: '顕忠祠',
    loc5_name: '保寧大川海水浴場', loc5_short: '大川海辺',
    loc6_name: '瑞山海美邑城', loc6_short: '海美邑城',
    loc7_name: '唐津倭目村', loc7_short: '倭目村',
    loc8_name: '論山灌燭寺', loc8_short: '灌燭寺',
    loc9_name: '洪城洪州邑城', loc9_short: '洪州邑城',
    loc10_name: '礼山修徳寺', loc10_short: '修徳寺',
    loc11_name: '錦山七百義塚', loc11_short: '七百義塚',
    loc12_name: '青陽七甲山道立公園', loc12_short: '七甲山',
    loc13_name: '舒川国立生態院', loc13_short: '国立生態院',
    loc0_desc: '百済時代の山城で、錦江を見下ろす雄大な景色が印象的です。',
    loc1_desc: '古代百済王国の歴史と文化を再現した大規模なテーマ文化団地です。',
    loc2_desc: '西海岸国立公園で、日没と干潟体験が有名です。',
    loc3_desc: '1919年の三・一運動の精神を称える韓国最大の独立運動記念館です。',
    loc4_desc: '李舜臣将軍をまつる聖地で、美しい庭園とともに必訪の名所です。',
    loc5_desc: '世界的に有名な泥祭りの本場、清らかな西海の美しいビーチです。',
    loc6_desc: '朝鮮時代の邑城で、カトリック殉教地としても有名な歴史深い場所です。',
    loc7_desc: '黄海と瑞山湾が交わる独特の地形に位置する美しい漁村です。',
    loc8_desc: '高麗時代に造られた高さ18mの巨大な石造弥勒菩薩で有名です。',
    loc9_desc: '高麗時代の洪州牧の中心邑城で、忠南の重要な文化遺産地です。',
    loc10_desc: '百済時代に創建された千年の古刹で、德崇山麓の美しい景観で有名です。',
    loc11_desc: '壬辰倭乱で倭賊に立ち向かい散った700人の義兵の霊を祀る歴史の聖地です。',
    loc12_desc: '「忠南のアルプス」と呼ばれる七甲山麓の美しい道立公園です。',
    loc13_desc: '国内最大規模の生態展示・研究機関で、自然生態を体験できます。',
  },

  fr: {
    search_placeholder: 'Rechercher un lieu…', change_language: 'Changer la langue',
    nav_explore: 'Explorer', nav_scan: 'Scanner', nav_saved: 'Enregistré', nav_profile: 'Profil',
    sheet_audio: 'Guide audio', sheet_save: 'Enregistrer',
    toast_saved: 'Enregistré 🔖', toast_audio: 'Guide audio lancé 🎧',
    free: 'Gratuit', paid: 'Payant', hours_open: '9h00', hours_close: '18h00',
    filter_all: 'Tout', filter_heritage: 'Patrimoine', filter_culture: 'Culture',
    filter_landmark: 'Monument', filter_shopping: 'Shopping',
    select_region: 'Sélectionner une région', all_korea: 'Toute la Corée',
    fab_regions: 'Régions', spots_label: ' lieux',
    region_all: 'Toute la Corée', region_seoul: 'Séoul', region_gyeonggi: 'Gyeonggi',
    region_gangwon: 'Gangwon', region_chungnam: 'Chungnam', region_chungbuk: 'Chungbuk',
    region_jeonnam: 'Jeonnam', region_jeonbuk: 'Jeonbuk',
    region_gyeongnam: 'Gyeongnam', region_gyeongbuk: 'Gyeongbuk',
    type_route: 'Itinéraire', type_festival: 'Festival', type_partner: 'Partenaire',
    btn_start_route: "Démarrer l'itinéraire", btn_directions: 'Itinéraire', btn_remind: 'Me rappeler',
    label_duration: 'Durée', label_distance: 'Distance', label_difficulty: 'Niveau',
    label_date: 'Date', label_entry: 'Entrée', label_type: 'Type',
    label_hours: 'Horaires', label_price: 'Prix',
    easy: 'Facile', moderate: 'Modéré',
    loc0_name: 'Forteresse Gongsanseong', loc0_short: 'Gongsanseong',
    loc1_name: 'Parc Culturel Baekje',   loc1_short: 'Baekje',
    loc2_name: 'Parc National de Taean', loc2_short: 'Taean',
    loc3_name: "Mémorial de l'Indépendance", loc3_short: 'Indépendance',
    loc4_name: 'Sanctuaire Hyeonchungsa', loc4_short: 'Hyeonchungsa',
    loc5_name: 'Plage Daecheon Boryeong', loc5_short: 'Daecheon',
    loc6_name: 'Forteresse Haemi',        loc6_short: 'Haemi',
    loc7_name: 'Village Waemok Dangjin',  loc7_short: 'Waemok',
    loc8_name: 'Temple Gwanchoksa',       loc8_short: 'Gwanchoksa',
    loc9_name: 'Forteresse Hongju',       loc9_short: 'Hongju',
    loc10_name: 'Temple Sudeoksa',        loc10_short: 'Sudeoksa',
    loc11_name: 'Mémorial Chilbaek',      loc11_short: 'Chilbaek',
    loc12_name: 'Parc Chilgapsan',        loc12_short: 'Chilgapsan',
    loc13_name: "Institut Écologique National", loc13_short: 'Éco Institut',
    loc0_desc: "Forteresse de l'ère Baekje surplombant le magnifique fleuve Geum.",
    loc1_desc: "Grand parc culturel recréant l'ancien royaume de Baekje.",
    loc2_desc: 'Parc national côtier en mer de l\'Ouest, célèbre pour ses couchers de soleil.',
    loc3_desc: "Le plus grand mémorial du mouvement pour l'indépendance coréenne.",
    loc4_desc: "Sanctuaire dédié à l'amiral Yi Sun-sin, entouré de beaux jardins.",
    loc5_desc: 'Patrie du célèbre festival de boue de Boryeong et de ses plages de la mer de l\'Ouest.',
    loc6_desc: 'Ville fortifiée bien conservée de l\'ère Joseon et important site de martyrs catholiques.',
    loc7_desc: 'Pittoresque village de pêcheurs où la mer Jaune rencontre la baie de Seosan.',
    loc8_desc: 'Célèbre pour un immense bouddha Maitreya de 18 mètres taillé dans la roche.',
    loc9_desc: 'Forteresse historique de Hongju du Goryeo — site du patrimoine culturel de Chungnam.',
    loc10_desc: 'Temple bouddhiste millénaire sur le mont Deoksungsan dans le pittoresque Yesan.',
    loc11_desc: "Mémorial honorant 700 soldats courageux tombés face à l'invasion japonaise.",
    loc12_desc: 'Magnifique parc provincial sur le mont Chilgapsan, les « Alpes de Chungnam ».',
    loc13_desc: "Le plus grand institut écologique de Corée avec des expériences naturelles immersives.",
  },
};

// ── Regions ───────────────────────────────────────────────────────────────────
const REGIONS = {
  all:      { emoji: '🌊', center: [36.52, 126.80], zoom: 9 },
  chungnam: { emoji: '🌊', center: [36.52, 126.80], zoom: 9 },
};

const REGION_ORDER = [
  'all',
  'chungnam',
];

// ── Tourist Locations — Chungcheongnam-do only (14) ───────────────────────────
const LOCATIONS = [
  { id: 0,  emoji:'🏯', region:'chungnam', coords:[36.4599,127.1245], category:'heritage', rating:4.5, reviews: 892, admission:'paid'  },
  { id: 1,  emoji:'🏛️', region:'chungnam', coords:[36.2689,126.9102], category:'heritage', rating:4.6, reviews: 743, admission:'paid'  },
  { id: 2,  emoji:'🌊', region:'chungnam', coords:[36.7228,126.2946], category:'landmark', rating:4.7, reviews:1102, admission:'free'  },
  { id: 3,  emoji:'🏛️', region:'chungnam', coords:[36.8965,127.0074], category:'heritage', rating:4.8, reviews:1543, admission:'free'  },
  { id: 4,  emoji:'⚓', region:'chungnam', coords:[36.7960,126.9756], category:'culture',  rating:4.6, reviews: 934, admission:'free'  },
  { id: 5,  emoji:'🏖️', region:'chungnam', coords:[36.3308,126.5569], category:'landmark', rating:4.7, reviews:2210, admission:'free'  },
  { id: 6,  emoji:'🏰', region:'chungnam', coords:[36.6993,126.5527], category:'heritage', rating:4.5, reviews: 681, admission:'free'  },
  { id: 7,  emoji:'🌅', region:'chungnam', coords:[36.9964,126.5834], category:'landmark', rating:4.4, reviews: 512, admission:'free'  },
  { id: 8,  emoji:'🛕', region:'chungnam', coords:[36.1782,127.0800], category:'heritage', rating:4.5, reviews: 763, admission:'free'  },
  { id: 9,  emoji:'🏯', region:'chungnam', coords:[36.6015,126.6603], category:'heritage', rating:4.3, reviews: 448, admission:'free'  },
  { id: 10, emoji:'🛕', region:'chungnam', coords:[36.7379,126.6756], category:'heritage', rating:4.7, reviews: 891, admission:'free'  },
  { id: 11, emoji:'🌿', region:'chungnam', coords:[36.1094,127.4881], category:'culture',  rating:4.4, reviews: 356, admission:'free'  },
  { id: 12, emoji:'⛰️', region:'chungnam', coords:[36.4591,126.8025], category:'landmark', rating:4.5, reviews: 524, admission:'free'  },
  { id: 13, emoji:'🦋', region:'chungnam', coords:[36.0763,126.6917], category:'culture',  rating:4.6, reviews: 678, admission:'paid'  },
];

// Category → gradient for location image header
const CAT_GRADIENT = {
  heritage: 'linear-gradient(135deg,#2e1065,#4c1d95,#6d28d9)',
  culture:  'linear-gradient(135deg,#052e16,#065f46,#059669)',
  landmark: 'linear-gradient(135deg,#172554,#1e3a8a,#1d4ed8)',
  shopping: 'linear-gradient(135deg,#4a044e,#86198f,#d946ef)',
};

// ── Travel Routes — Chungnam only ────────────────────────────────────────────
const ROUTES = [
  {
    id: 'r0', emoji: '🏯', region: 'chungnam',
    color: '#b45309',
    gradient: 'linear-gradient(135deg,#451a03,#92400e,#d97706)',
    nameKo: '백제 역사 순례길',             nameEn: 'Baekje Heritage Trail',
    descKo: '공주 공산성에서 부여 백제문화단지까지, 천오백 년 백제 왕국의 발자취를 따라가는 역사 탐방 루트.',
    descEn: 'Follow the footsteps of the ancient Baekje Kingdom from Gongju Gongsanseong to Buyeo Baekje Cultural Land.',
    durationKo: '5시간', durationEn: '5 hours',
    distance: '40 km',
    diffKo: '보통', diffEn: 'Moderate',
    stopNamesKo: ['공주 공산성','공주 국립박물관','부여 정림사지','부여 백제문화단지'],
    stopNamesEn: ['Gongju Gongsanseong','Gongju National Museum','Buyeo Jeongnimsa','Baekje Cultural Land'],
    waypoints: [[36.4599,127.1245],[36.4552,127.1191],[36.2761,126.9200],[36.2689,126.9102]],
  },
  {
    id: 'r1', emoji: '🌊', region: 'chungnam',
    color: '#0369a1',
    gradient: 'linear-gradient(135deg,#082f49,#075985,#0ea5e9)',
    nameKo: '서해 해안 드라이브',           nameEn: 'West Sea Coastal Drive',
    descKo: '보령 대천해변에서 태안 해안국립공원, 서산 해미읍성, 당진까지 충남 서해안 절경을 담은 루트.',
    descEn: 'A scenic coastal route from Boryeong Daecheon Beach through Taean National Park to Seosan and Dangjin.',
    durationKo: '6시간', durationEn: '6 hours',
    distance: '85 km',
    diffKo: '쉬움', diffEn: 'Easy',
    stopNamesKo: ['보령 대천해변','태안 안면도','서산 해미읍성','당진 왜목마을'],
    stopNamesEn: ['Boryeong Daecheon Beach','Taean Anmyeondo','Seosan Haemi Fortress','Dangjin Waemok Village'],
    waypoints: [[36.3308,126.5569],[36.5300,126.3700],[36.6993,126.5527],[36.9964,126.5834]],
  },
  {
    id: 'r2', emoji: '⚓', region: 'chungnam',
    color: '#065f46',
    gradient: 'linear-gradient(135deg,#052e16,#065f46,#059669)',
    nameKo: '아산·천안 역사 문화 코스',    nameEn: 'Asan–Cheonan Culture Route',
    descKo: '아산 현충사에서 출발해 천안 독립기념관까지 이어지는 애국심과 역사가 살아 숨쉬는 탐방 코스.',
    descEn: 'A patriotic route from Asan Hyeonchungsa shrine to the Cheonan Independence Hall — history brought to life.',
    durationKo: '4시간', durationEn: '4 hours',
    distance: '28 km',
    diffKo: '쉬움', diffEn: 'Easy',
    stopNamesKo: ['아산 현충사','온양온천','천안삼거리공원','천안 독립기념관'],
    stopNamesEn: ['Asan Hyeonchungsa','Onyang Hot Springs','Cheonan Samgeori Park','Cheonan Independence Hall'],
    waypoints: [[36.7960,126.9756],[36.7850,127.0050],[36.8390,127.1020],[36.8965,127.0074]],
  },
  {
    id: 'r3', emoji: '🛕', region: 'chungnam',
    color: '#6d28d9',
    gradient: 'linear-gradient(135deg,#2e1065,#4c1d95,#8b5cf6)',
    nameKo: '충남 내륙 사찰 순례',          nameEn: 'Chungnam Inland Temple Trail',
    descKo: '예산 수덕사에서 홍성 홍주읍성, 청양 칠갑산을 거쳐 논산 관촉사까지 이어지는 사찰·유적 순례 코스.',
    descEn: 'A serene temple trail from Yesan Sudeoksa through Hongseong fortress and Cheongyang to Nonsan Gwanchoksa.',
    durationKo: '5시간', durationEn: '5 hours',
    distance: '55 km',
    diffKo: '보통', diffEn: 'Moderate',
    stopNamesKo: ['예산 수덕사','홍성 홍주읍성','청양 칠갑산','논산 관촉사'],
    stopNamesEn: ['Yesan Sudeoksa Temple','Hongseong Hongju Fortress','Cheongyang Chilgapsan','Nonsan Gwanchoksa'],
    waypoints: [[36.7379,126.6756],[36.6015,126.6603],[36.4591,126.8025],[36.1782,127.0800]],
  },
];

// ── Festival / Event Markers — Chungnam only ──────────────────────────────────
const EVENTS = [
  {
    id: 'e0', emoji: '🪣', region: 'chungnam', coords: [36.3308,126.5569],
    gradient: 'linear-gradient(135deg,#431407,#7c2d12,#ea580c)',
    nameKo: '보령 머드 축제',              nameEn: 'Boryeong Mud Festival',
    descKo: '세계적으로 유명한 대천해변 머드 축제. 머드 레슬링, 머드 슬라이드, 머드 코스메틱 등 다채로운 프로그램.',
    descEn: 'World-famous mud festival on Daecheon Beach with mud wrestling, slides, mud cosmetics, and parties.',
    dateKo: '2026년 7월', dateEn: 'July 2026',
    catKo: '여름 축제', catEn: 'Summer Festival', admission: 'free',
  },
  {
    id: 'e1', emoji: '💃', region: 'chungnam', coords: [36.8151,127.1139],
    gradient: 'linear-gradient(135deg,#1e1b4b,#4338ca,#818cf8)',
    nameKo: '천안 흥타령 춤 축제',        nameEn: 'Cheonan World Dance Festival',
    descKo: '세계 각국의 춤과 한국 전통 춤이 어우러지는 국제 댄스 축제. 천안삼거리공원 일대에서 개최.',
    descEn: 'International dance festival blending traditional Korean dances with performances from around the world.',
    dateKo: '2026년 9월', dateEn: 'September 2026',
    catKo: '문화 축제', catEn: 'Culture Festival', admission: 'free',
  },
  {
    id: 'e2', emoji: '🌸', region: 'chungnam', coords: [36.2689,126.9102],
    gradient: 'linear-gradient(135deg,#1a0533,#6b21a8,#c084fc)',
    nameKo: '부여 서동 연꽃 축제',        nameEn: 'Buyeo Seodong Lotus Festival',
    descKo: '궁남지를 가득 메운 연꽃이 장관을 이루는 여름 축제. 백제 무왕과 선화공주의 러브스토리가 깃든 곳.',
    descEn: 'A stunning summer lotus festival at Gungnamji Pond, steeped in the Baekje love legend of King Mu and Princess Seonhwa.',
    dateKo: '2026년 7월', dateEn: 'July 2026',
    catKo: '여름 축제', catEn: 'Summer Festival', admission: 'free',
  },
  {
    id: 'e3', emoji: '🌊', region: 'chungnam', coords: [36.7228,126.2946],
    gradient: 'linear-gradient(135deg,#082f49,#075985,#0ea5e9)',
    nameKo: '태안 빛의 바다 축제',        nameEn: 'Taean Sea of Light Festival',
    descKo: '태안 해안국립공원 일대에 펼쳐지는 화려한 빛 조형물 축제. 서해 갯벌과 별빛이 어우러지는 야간 명소.',
    descEn: 'A brilliant illumination festival along Taean National Park coast, where tidal flats meet starlit art installations.',
    dateKo: '2026년 12월', dateEn: 'December 2026',
    catKo: '빛 축제', catEn: 'Light Festival', admission: 'paid',
  },
  {
    id: 'e4', emoji: '🏰', region: 'chungnam', coords: [36.6993,126.5527],
    gradient: 'linear-gradient(135deg,#052e16,#14532d,#4ade80)',
    nameKo: '해미읍성 역사 체험 축제',    nameEn: 'Haemi Fortress History Festival',
    descKo: '조선 시대 해미읍성을 배경으로 펼쳐지는 전통 무예, 관아 체험, 순교 성지 탐방 등 역사 체험 축제.',
    descEn: 'An immersive history festival at Haemi Fortress featuring traditional martial arts, Joseon-era court experiences, and martyr heritage tours.',
    dateKo: '2026년 10월', dateEn: 'October 2026',
    catKo: '역사 축제', catEn: 'Heritage Festival', admission: 'free',
  },
  {
    id: 'e5', emoji: '🌾', region: 'chungnam', coords: [36.1094,127.4881],
    gradient: 'linear-gradient(135deg,#431407,#9a3412,#f97316)',
    nameKo: '금산 인삼 축제',             nameEn: 'Geumsan Ginseng Festival',
    descKo: '전국 인삼 생산량의 80%를 담당하는 금산에서 열리는 세계 최대 인삼 축제. 인삼 경매, 요리, 체험이 가득.',
    descEn: "The world's largest ginseng festival in Geumsan, which produces 80% of Korea's ginseng — featuring auctions, cuisine, and hands-on experiences.",
    dateKo: '2026년 9월', dateEn: 'September 2026',
    catKo: '농산물 축제', catEn: 'Harvest Festival', admission: 'free',
  },
];

// ── Partner Businesses — Chungnam only ───────────────────────────────────────
const PARTNERS = [
  {
    id: 'p0', emoji: '🦀', region: 'chungnam', coords: [36.3250,126.5600],
    gradient: 'linear-gradient(135deg,#431407,#7c2d12,#ea580c)',
    nameKo: '대천해변 꽃게장 명가',  nameEn: 'Daecheon Crab Jang House',
    descKo: '보령 대천해변 인근의 꽃게장 전문점. 간장 게장과 양념 게장 두 가지 맛을 모두 즐길 수 있는 충남 대표 맛집.',
    descEn: 'Acclaimed crab marinade restaurant near Daecheon Beach — try both soy-marinated and spicy styles.',
    cat: 'restaurant', catKo: '해산물 식당', catEn: 'Restaurant',
    price: '₩₩', hoursKo: '11:00 – 21:00', hoursEn: '11 AM – 9 PM',
  },
  {
    id: 'p1', emoji: '🍲', region: 'chungnam', coords: [36.4550,127.1200],
    gradient: 'linear-gradient(135deg,#052e16,#166534,#16a34a)',
    nameKo: '공주 국밥거리 전통 식당', nameEn: 'Gongju Heritage Soup House',
    descKo: '공산성 인근 공주 국밥거리에 위치한 전통 식당. 진한 우거지 국밥과 백제 시대를 떠올리게 하는 한상 차림.',
    descEn: 'Traditional soup restaurant in the famous Gongju Gukbap Street near Gongsanseong fortress.',
    cat: 'restaurant', catKo: '한식당', catEn: 'Restaurant',
    price: '₩', hoursKo: '07:00 – 20:00', hoursEn: '7 AM – 8 PM',
  },
  {
    id: 'p2', emoji: '♨️', region: 'chungnam', coords: [36.7850,127.0050],
    gradient: 'linear-gradient(135deg,#082f49,#075985,#0ea5e9)',
    nameKo: '온양온천 스파 리조트',   nameEn: 'Onyang Hot Spring Spa Resort',
    descKo: '600년 역사를 자랑하는 온양온천에 위치한 스파 리조트. 피부에 좋은 알칼리성 온천수가 유명합니다.',
    descEn: 'Luxury spa resort at the 600-year-old Onyang Hot Springs, famous for its alkaline mineral waters.',
    cat: 'cafe', catKo: '스파·온천', catEn: 'Spa & Hot Spring',
    price: '₩₩', hoursKo: '06:00 – 22:00', hoursEn: '6 AM – 10 PM',
  },
  {
    id: 'p3', emoji: '🌾', region: 'chungnam', coords: [36.1050,127.4900],
    gradient: 'linear-gradient(135deg,#431a00,#78350f,#b45309)',
    nameKo: '금산 인삼 직판장',       nameEn: 'Geumsan Ginseng Market',
    descKo: '전국 인삼 유통의 중심지 금산 인삼시장. 홍삼, 백삼, 인삼 관련 제품을 산지 직거래 가격으로 구매 가능.',
    descEn: "Korea's premier ginseng market — buy red ginseng, white ginseng, and ginseng products direct from growers.",
    cat: 'market', catKo: '전통시장', catEn: 'Market',
    price: '₩', hoursKo: '08:00 – 18:00', hoursEn: '8 AM – 6 PM',
  },
  {
    id: 'p4', emoji: '☕', region: 'chungnam', coords: [36.7228,126.3000],
    gradient: 'linear-gradient(135deg,#0c4a6e,#0369a1,#0ea5e9)',
    nameKo: '태안 안면도 오션 카페',   nameEn: 'Taean Anmyeondo Ocean Cafe',
    descKo: '안면도 해안에 위치한 오션뷰 카페. 서해 낙조를 바라보며 즐기는 커피와 디저트가 일품.',
    descEn: 'Cliffside ocean-view cafe on Anmyeondo island — famous for coffee and desserts enjoyed at sunset.',
    cat: 'cafe', catKo: '카페', catEn: 'Cafe',
    price: '₩', hoursKo: '10:00 – 21:00', hoursEn: '10 AM – 9 PM',
  },
  {
    id: 'p5', emoji: '🐟', region: 'chungnam', coords: [36.0800,126.6850],
    gradient: 'linear-gradient(135deg,#052e16,#065f46,#059669)',
    nameKo: '서천 홍원항 수산물 시장', nameEn: 'Seocheon Hongwonhang Fish Market',
    descKo: '서해 최고의 수산물 집산지 홍원항. 주꾸미, 박대, 꽃게 등 싱싱한 서해 해산물을 저렴하게 맛볼 수 있습니다.',
    descEn: "West Sea's finest seafood hub — fresh webfoot octopus, flounder, and crab at unbeatable prices.",
    cat: 'market', catKo: '수산시장', catEn: 'Market',
    price: '₩', hoursKo: '06:00 – 19:00', hoursEn: '6 AM – 7 PM',
  },
  {
    id: 'p6', emoji: '🍡', region: 'chungnam', coords: [36.2700,126.9100],
    gradient: 'linear-gradient(135deg,#450a0a,#991b1b,#ef4444)',
    nameKo: '부여 연잎밥 체험관',      nameEn: 'Buyeo Lotus Leaf Rice Cafe',
    descKo: '연꽃의 고장 부여에서 즐기는 전통 연잎밥 체험. 연꽃차와 함께하는 백제 시대 풍미의 한 끼.',
    descEn: 'A unique Buyeo dining experience — savour traditional lotus-leaf rice paired with fragrant lotus tea.',
    cat: 'cafe', catKo: '카페·체험', catEn: 'Cafe & Experience',
    price: '₩', hoursKo: '10:00 – 18:00', hoursEn: '10 AM – 6 PM',
  },
  {
    id: 'p7', emoji: '🛍️', region: 'chungnam', coords: [36.8900,127.0000],
    gradient: 'linear-gradient(135deg,#1e1b4b,#3730a3,#6366f1)',
    nameKo: '천안 호두과자 본가',      nameEn: 'Cheonan Walnut Cookie House',
    descKo: '1934년 원조 천안 호두과자의 본가. 고소한 호두 앙금이 가득한 천안의 대표 기념품.',
    descEn: "Original Cheonan walnut cookies since 1934 — the city's most beloved souvenir packed with roasted walnut filling.",
    cat: 'bakery', catKo: '베이커리', catEn: 'Bakery',
    price: '₩', hoursKo: '08:00 – 21:00', hoursEn: '8 AM – 9 PM',
  },
];

// ── Traveler Reviews — Chungnam only ─────────────────────────────────────────
const REVIEWS = [
  {
    id: 'rv0', locId: 0,
    reviewer: { avatar: '👩‍🦰', name: 'Sarah M.', flag: '🇺🇸' },
    rating: 5, durationEn: '2 days', durationKo: '2일',
    dateEn: 'Oct 2025', dateKo: '2025년 10월',
    shortKo: '금강을 내려다보는 성곽길 산책이 너무 멋졌어요! 저녁 무렵 방문하면 노을 뷰가 최고입니다.',
    shortEn: 'The fortress walls with the Geum River below were breathtaking — visit at sunset for the best view!',
    days: [
      { stops: [
        { nameKo:'공주 공산성', nameEn:'Gongju Gongsanseong', coords:[36.4599,127.1245] },
        { nameKo:'공주 국립박물관', nameEn:'Gongju National Museum', coords:[36.4552,127.1191] },
        { nameKo:'공주 국밥거리', nameEn:'Gongju Soup Street', coords:[36.4550,127.1200] },
      ]},
      { stops: [
        { nameKo:'부여 백제문화단지', nameEn:'Baekje Cultural Land', coords:[36.2689,126.9102] },
        { nameKo:'부여 궁남지', nameEn:'Gungnamji Pond', coords:[36.2700,126.9100] },
      ]},
    ],
  },
  {
    id: 'rv1', locId: 1,
    reviewer: { avatar: '🧑‍💼', name: 'Pierre L.', flag: '🇫🇷' },
    rating: 5, durationEn: '2 days', durationKo: '2일',
    dateEn: 'Jul 2025', dateKo: '2025년 7월',
    shortKo: '백제문화단지 야간 조명이 정말 환상적! 부여 연잎밥도 꼭 드셔보세요.',
    shortEn: 'The night illumination at Baekje Cultural Land is magical — and the lotus leaf rice is unforgettable!',
    days: [
      { stops: [
        { nameKo:'부여 백제문화단지', nameEn:'Baekje Cultural Land', coords:[36.2689,126.9102] },
        { nameKo:'부여 정림사지', nameEn:'Jeongnimsa Temple Site', coords:[36.2761,126.9200] },
      ]},
      { stops: [
        { nameKo:'공주 공산성', nameEn:'Gongsanseong Fortress', coords:[36.4599,127.1245] },
        { nameKo:'공주 국립박물관', nameEn:'Gongju National Museum', coords:[36.4552,127.1191] },
      ]},
    ],
  },
  {
    id: 'rv2', locId: 2,
    reviewer: { avatar: '👨‍💼', name: 'Wei Chen', flag: '🇨🇳' },
    rating: 5, durationEn: '2 days', durationKo: '2일',
    dateEn: 'Sep 2025', dateKo: '2025년 9월',
    shortKo: '태안 해안국립공원의 낙조는 정말 인생 사진! 안면도 오션 카페에서의 커피도 잊을 수 없어요.',
    shortEn: "Taean's West Sea sunset is the photo of a lifetime — coffee at the Anmyeondo ocean cafe is just as unforgettable.",
    days: [
      { stops: [
        { nameKo:'태안 안면도', nameEn:'Taean Anmyeondo', coords:[36.5300,126.3700] },
        { nameKo:'안면도 오션 카페', nameEn:'Anmyeondo Ocean Cafe', coords:[36.7228,126.3000] },
      ]},
      { stops: [
        { nameKo:'서산 해미읍성', nameEn:'Seosan Haemi Fortress', coords:[36.6993,126.5527] },
        { nameKo:'당진 왜목마을', nameEn:'Dangjin Waemok Village', coords:[36.9964,126.5834] },
      ]},
    ],
  },
  {
    id: 'rv3', locId: 5,
    reviewer: { avatar: '👩‍🍳', name: 'Yuki T.', flag: '🇯🇵' },
    rating: 5, durationEn: '3 days', durationKo: '3일',
    dateEn: 'Jul 2025', dateKo: '2025년 7월',
    shortKo: '머드 축제는 인생에 한 번은 꼭! 온 몸에 머드를 바르고 즐기는 경험이 정말 독특해요.',
    shortEn: 'The Mud Festival is a once-in-a-lifetime experience — getting covered head to toe in mud is surprisingly fun!',
    days: [
      { stops: [
        { nameKo:'보령 대천해변', nameEn:'Boryeong Daecheon Beach', coords:[36.3308,126.5569] },
        { nameKo:'보령 머드 체험장', nameEn:'Mud Experience Zone', coords:[36.3280,126.5550] },
      ]},
      { stops: [
        { nameKo:'부여 서동 연꽃단지', nameEn:'Buyeo Lotus Pond', coords:[36.2700,126.9100] },
        { nameKo:'공주 공산성', nameEn:'Gongsanseong Fortress', coords:[36.4599,127.1245] },
      ]},
      { stops: [
        { nameKo:'서천 국립생태원', nameEn:'Seocheon Eco Institute', coords:[36.0763,126.6917] },
        { nameKo:'서천 홍원항', nameEn:'Seocheon Hongwonhang Port', coords:[36.0800,126.6850] },
      ]},
    ],
  },
  {
    id: 'rv4', locId: 3,
    reviewer: { avatar: '🧗', name: 'Marc D.', flag: '🇫🇷' },
    rating: 5, durationEn: '2 days', durationKo: '2일',
    dateEn: 'Mar 2026', dateKo: '2026년 3월',
    shortKo: '독립기념관은 한국 역사를 깊이 이해할 수 있는 곳입니다. 외국인에게 강력 추천!',
    shortEn: 'The Independence Hall gave me profound insight into Korean history — a must for every foreigner visiting Korea.',
    days: [
      { stops: [
        { nameKo:'천안 독립기념관', nameEn:'Cheonan Independence Hall', coords:[36.8965,127.0074] },
        { nameKo:'천안삼거리공원', nameEn:'Cheonan Samgeori Park', coords:[36.8390,127.1020] },
        { nameKo:'천안 호두과자 본가', nameEn:'Walnut Cookie House', coords:[36.8900,127.0000] },
      ]},
      { stops: [
        { nameKo:'아산 현충사', nameEn:'Asan Hyeonchungsa', coords:[36.7960,126.9756] },
        { nameKo:'온양온천', nameEn:'Onyang Hot Springs', coords:[36.7850,127.0050] },
      ]},
    ],
  },
  {
    id: 'rv5', locId: 10,
    reviewer: { avatar: '📸', name: 'Ji-ho K.', flag: '🇰🇷' },
    rating: 4, durationEn: '2 days', durationKo: '2일',
    dateEn: 'Nov 2025', dateKo: '2025년 11월',
    shortKo: '수덕사 단풍이 이렇게 예쁜 줄 몰랐어요. 사진작가라면 11월에 꼭 방문하세요!',
    shortEn: "Sudeoksa temple in autumn foliage is absolutely stunning — photographers, come in November!",
    days: [
      { stops: [
        { nameKo:'예산 수덕사', nameEn:'Yesan Sudeoksa Temple', coords:[36.7379,126.6756] },
        { nameKo:'홍성 홍주읍성', nameEn:'Hongseong Hongju Fortress', coords:[36.6015,126.6603] },
      ]},
      { stops: [
        { nameKo:'청양 칠갑산도립공원', nameEn:'Cheongyang Chilgapsan Park', coords:[36.4591,126.8025] },
        { nameKo:'금산 칠백의총', nameEn:'Geumsan Chilbaek Memorial', coords:[36.1094,127.4881] },
      ]},
    ],
  },
];

// ── App state ─────────────────────────────────────────────────────────────────
let leafletMap          = null;
let leafletMarkers      = [];   // { marker, locId, regionId }
let leafletRouteEntries = [];   // { polyline, wayMarkers, regionId, routeId }
let leafletEventMarkers = [];   // { marker, regionId, eventId }
let leafletPartnerMarkers = []; // { marker, regionId, partnerId }
let activeRegion  = 'all';
let currentLang   = localStorage.getItem('tapkorea_lang') || 'en';
let currentSearch = '';
let toastTimer    = null;
let reviewerRouteOverlay = null; // { polylines, markers }
let reviewerRouteRenderToken = 0;
let activeNavigation = null; // { polylines, markers, segmentPolylines, segmentMeta, currentSegment }
let activeRoutePreview = null; // { routeId, polylines, markers, metaText }
let mapFocusMode = null; // { kind, routeId? }
let userPlan = { days: [] };    // persisted to localStorage
let activeAudioGuide = null; // { locId, utterance }

// ── i18n ──────────────────────────────────────────────────────────────────────
function t(key) {
  const s = I18N[currentLang];
  return (s && s[key] != null) ? s[key] : (I18N.en[key] != null ? I18N.en[key] : key);
}
const FLAGS = { ko:'🇰🇷', en:'🇺🇸', zh:'🇨🇳', ja:'🇯🇵', fr:'🇫🇷' };

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
  const si = document.getElementById('searchInput');
  if (si) si.placeholder = t('search_placeholder');
  const fd = document.getElementById('currentFlagDisplay');
  if (fd) fd.textContent = FLAGS[currentLang] || '🌐';
  document.querySelectorAll('.lang-modal-item').forEach(function (el) {
    el.classList.toggle('active', el.dataset.lang === currentLang);
  });
  updateFAB();
}

// ── Map init ──────────────────────────────────────────────────────────────────
function initMap() {
  updateHeaderVar();

  leafletMap = L.map('map', {
    center: [36.52, 126.80], zoom: 9,
    zoomControl: false, attributionControl: true, tap: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(leafletMap);

  L.control.zoom({ position: 'topright' }).addTo(leafletMap);

  // ── Tourist location markers (tear-drop pins)
  LOCATIONS.forEach(function (loc) {
    const icon = L.divIcon({
      html: '<div class="map-marker-pin"><div class="pin-bubble category-' + loc.category + '"><span>' + loc.emoji + '</span></div><div class="pin-tail"></div></div>',
      className: 'map-marker-wrapper',
      iconSize: [44, 52], iconAnchor: [22, 52], popupAnchor: [0, -56],
    });
    const marker = L.marker(loc.coords, { icon, riseOnHover: true });
    marker.on('click', function () { closeRegionSheet(); openSpot(loc.id); });
    marker.addTo(leafletMap);
    leafletMarkers.push({ marker, locId: loc.id, regionId: loc.region });
  });

  // ── Route polylines + waypoint markers
  initRoutes();

  // ── Festival / event markers
  initEvents();

  // ── Partner business markers
  initPartners();

  window.addEventListener('resize', function () { updateHeaderVar(); leafletMap.invalidateSize(); });
  renderUserReviewMarkers();
}

function updateHeaderVar() {
  const h = document.getElementById('appHeader');
  if (h) document.documentElement.style.setProperty('--header-h', h.offsetHeight + 'px');
}

// ── Route layer init ──────────────────────────────────────────────────────────
function initRoutes() {
  ROUTES.forEach(function (route) {
    // Dashed polyline
    const polyline = L.polyline(route.waypoints, {
      color: route.color, weight: 4, opacity: 0.85,
      dashArray: '10 7', lineCap: 'round', lineJoin: 'round',
    });
    polyline.on('click', function () { closeRegionSheet(); openRouteDetail(route.id); });
    polyline.addTo(leafletMap);

    // Start marker (large circle)
    const startIcon = L.divIcon({
      html: '<div class="map-marker-route">' + route.emoji + '</div>',
      className: 'map-marker-wrapper', iconSize: [48, 48], iconAnchor: [24, 24],
    });
    const startMarker = L.marker(route.waypoints[0], { icon: startIcon, zIndexOffset: 100 });
    startMarker.on('click', function () { closeRegionSheet(); openRouteDetail(route.id); });
    startMarker.addTo(leafletMap);

    // Intermediate waypoint dots
    const wayMarkers = [startMarker];
    route.waypoints.slice(1).forEach(function (coords, idx) {
      const isLast = idx === route.waypoints.length - 2;
      const dot = L.circleMarker(coords, {
        radius: isLast ? 7 : 5,
        fillColor: isLast ? '#ef4444' : route.color,
        fillOpacity: 1, color: '#fff', weight: 2, interactive: true,
      });
      dot.on('click', function () { closeRegionSheet(); openRouteDetail(route.id); });
      dot.addTo(leafletMap);
      wayMarkers.push(dot);
    });

    leafletRouteEntries.push({ polyline, wayMarkers, regionId: route.region, routeId: route.id });
  });
}

// ── Event layer init ──────────────────────────────────────────────────────────
function initEvents() {
  EVENTS.forEach(function (ev) {
    const icon = L.divIcon({
      html: '<div class="map-marker-event">' + ev.emoji + '</div>',
      className: 'map-marker-wrapper', iconSize: [42, 42], iconAnchor: [21, 21],
    });
    const marker = L.marker(ev.coords, { icon, zIndexOffset: 50 });
    marker.on('click', function () { closeRegionSheet(); openEventDetail(ev.id); });
    marker.addTo(leafletMap);
    leafletEventMarkers.push({ marker, regionId: ev.region, eventId: ev.id });
  });
}

// ── Partner layer init ────────────────────────────────────────────────────────
function initPartners() {
  PARTNERS.forEach(function (p) {
    const icon = L.divIcon({
      html: '<div class="map-marker-partner">' + p.emoji + '</div>',
      className: 'map-marker-wrapper', iconSize: [38, 38], iconAnchor: [19, 19],
    });
    const marker = L.marker(p.coords, { icon, zIndexOffset: 25 });
    marker.on('click', function () { closeRegionSheet(); openPartnerDetail(p.id); });
    marker.addTo(leafletMap);
    leafletPartnerMarkers.push({ marker, regionId: p.region, partnerId: p.id });
  });
}

// ── Marker filter (applies region + search to all layers) ─────────────────────
function applyMarkerFilter() {
  var inSearch = currentSearch.trim().length > 0;

  if (mapFocusMode) {
    // Focus mode: hide all base clutter first.
    leafletMarkers.forEach(function (e) { if (leafletMap.hasLayer(e.marker)) e.marker.remove(); });
    leafletRouteEntries.forEach(function (e) {
      if (leafletMap.hasLayer(e.polyline)) e.polyline.remove();
      e.wayMarkers.forEach(function (m) { if (leafletMap.hasLayer(m)) m.remove(); });
    });
    leafletEventMarkers.forEach(function (e) { if (leafletMap.hasLayer(e.marker)) e.marker.remove(); });
    leafletPartnerMarkers.forEach(function (e) { if (leafletMap.hasLayer(e.marker)) e.marker.remove(); });
    userReviewMarkers.forEach(function (e) { if (leafletMap && leafletMap.hasLayer(e.marker)) e.marker.remove(); });

    // In drive course detail focus, keep only selected drive-course layers visible.
    if ((mapFocusMode.kind === 'drive_detail' || mapFocusMode.kind === 'drive_preview') && mapFocusMode.routeId) {
      leafletRouteEntries.forEach(function (e) {
        if (e.routeId !== mapFocusMode.routeId) return;
        if (!leafletMap.hasLayer(e.polyline)) e.polyline.addTo(leafletMap);
        e.wayMarkers.forEach(function (m) { if (!leafletMap.hasLayer(m)) m.addTo(leafletMap); });
        var route = ROUTES.find(function (r) { return r.id === e.routeId; });
        e.polyline.setStyle({
          color: '#7c3aed',
          weight: 6,
          opacity: 0.96,
          dashArray: route && route.waypoints.length > 1 ? '10 7' : null,
        });
      });
    }
    return;
  }

  // In search mode: hide ALL regular markers (replaced by numbered search pins)
  if (inSearch) {
    leafletMarkers.forEach(function (e) {
      if (leafletMap.hasLayer(e.marker)) e.marker.remove();
    });
    leafletRouteEntries.forEach(function (e) {
      if (leafletMap.hasLayer(e.polyline)) e.polyline.remove();
      e.wayMarkers.forEach(function (m) { if (leafletMap.hasLayer(m)) m.remove(); });
    });
    leafletEventMarkers.forEach(function (e) {
      if (leafletMap.hasLayer(e.marker)) e.marker.remove();
    });
    leafletPartnerMarkers.forEach(function (e) {
      if (leafletMap.hasLayer(e.marker)) e.marker.remove();
    });
    return;
  }

  // Normal mode: filter by active region
  leafletMarkers.forEach(function (e) {
    var show = activeRegion === 'all' || e.regionId === activeRegion;
    if (show  && !leafletMap.hasLayer(e.marker)) e.marker.addTo(leafletMap);
    if (!show &&  leafletMap.hasLayer(e.marker)) e.marker.remove();
  });

  leafletRouteEntries.forEach(function (e) {
    var show = activeRegion === 'all' || e.regionId === activeRegion;
    if (show) {
      if (!leafletMap.hasLayer(e.polyline)) e.polyline.addTo(leafletMap);
      e.wayMarkers.forEach(function (m) { if (!leafletMap.hasLayer(m)) m.addTo(leafletMap); });
    } else {
      if (leafletMap.hasLayer(e.polyline)) e.polyline.remove();
      e.wayMarkers.forEach(function (m) { if (leafletMap.hasLayer(m)) m.remove(); });
    }
  });

  leafletEventMarkers.forEach(function (e) {
    var show = activeRegion === 'all' || e.regionId === activeRegion;
    if (show  && !leafletMap.hasLayer(e.marker)) e.marker.addTo(leafletMap);
    if (!show &&  leafletMap.hasLayer(e.marker)) e.marker.remove();
  });

  leafletPartnerMarkers.forEach(function (e) {
    var show = activeRegion === 'all' || e.regionId === activeRegion;
    if (show  && !leafletMap.hasLayer(e.marker)) e.marker.addTo(leafletMap);
    if (!show &&  leafletMap.hasLayer(e.marker)) e.marker.remove();
  });

  // User-submitted review markers follow normal map visibility when not focused.
  renderUserReviewMarkers();
}

function enterMapFocusMode(kind, opts) {
  mapFocusMode = Object.assign({ kind: kind }, opts || {});
  // Reset route styles before applying focus highlight.
  leafletRouteEntries.forEach(function (e) {
    var route = ROUTES.find(function (r) { return r.id === e.routeId; });
    e.polyline.setStyle({
      color: route ? route.color : '#3b82f6',
      weight: 4,
      opacity: 0.85,
      dashArray: '10 7',
    });
  });
  applyMarkerFilter();
}

function exitMapFocusMode() {
  mapFocusMode = null;
  // Restore default route styles and map layers.
  leafletRouteEntries.forEach(function (e) {
    var route = ROUTES.find(function (r) { return r.id === e.routeId; });
    e.polyline.setStyle({
      color: route ? route.color : '#3b82f6',
      weight: 4,
      opacity: 0.85,
      dashArray: '10 7',
    });
  });
  applyMarkerFilter();
}

// ── Shared detail sheet opener ────────────────────────────────────────────────
function openDetail(emoji, gradient, contentHTML) {
  var imgEl = document.getElementById('sheetImgHeader');
  if (imgEl) {
    if (gradient) {
      imgEl.style.cssText = 'display:flex;background:' + gradient;
      imgEl.innerHTML = '<span class="detail-img-emoji">' + emoji + '</span>';
    } else {
      imgEl.style.cssText = 'display:none';
    }
  }
  document.getElementById('sheetContent').innerHTML = contentHTML;
  document.getElementById('sheetBackdrop').classList.add('open');
  document.getElementById('bottomSheet').classList.add('open');
}

// ── Tourist location detail ───────────────────────────────────────────────────
function openSpot(id) {
  var loc = LOCATIONS.find(function (l) { return l.id === id; });
  if (!loc) return;

  var isKo   = currentLang === 'ko';
  var name   = t('loc' + id + '_name');
  var desc   = t('loc' + id + '_desc');
  var admKey = loc.admission === 'free' ? 'free' : 'paid';
  var oLbl   = isKo?'오픈':currentLang==='zh'?'开放':currentLang==='ja'?'開場':currentLang==='fr'?'Ouvre':'Opens';
  var cLbl   = isKo?'마감':currentLang==='zh'?'关闭':currentLang==='ja'?'閉場':currentLang==='fr'?'Ferme':'Closes';
  var eLbl   = isKo?'입장':currentLang==='zh'?'门票':currentLang==='ja'?'入場':currentLang==='fr'?'Entrée':'Entry';

  var html =
    '<div class="detail-type-row">' +
      '<span class="detail-type-badge spot">' + t('filter_' + loc.category) + '</span>' +
    '</div>' +
    '<div class="sheet-hero" style="margin-bottom:12px">' +
      '<div>' +
        '<div class="sheet-title">' + name + '</div>' +
        '<div class="sheet-meta">' +
          '<span class="sheet-rating">⭐ ' + loc.rating + '</span>' +
          '<span style="color:var(--c-border)">·</span>' +
          '<span>' + loc.reviews.toLocaleString() + ' reviews</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<p class="sheet-desc">' + desc + '</p>' +
    '<div class="sheet-info-row">' +
      '<div class="info-chip"><span class="info-icon">🕘</span><span class="info-label">' + oLbl + '</span><span class="info-val">' + t('hours_open') + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">🕕</span><span class="info-label">' + cLbl + '</span><span class="info-val">' + t('hours_close') + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">' + (loc.admission==='free'?'🎟️':'💳') + '</span><span class="info-label">' + eLbl + '</span><span class="info-val">' + t(admKey) + '</span></div>' +
    '</div>' +
    '<div class="sheet-actions">' +
      '<button class="btn-primary" id="audioGuideBtn_' + id + '" onclick="startAudio(' + id + ')">🎧 ' + t('sheet_audio') + '</button>' +
      '<button class="btn-outline" onclick="startDirectionsToTarget(\'location\',' + id + ')">📍 ' + t('btn_directions') + '</button>' +
    '</div>' +
    '<button class="btn-add-plan" onclick="addLocationToMyPlan(' + id + ')">' +
      '＋\u00a0' + (isKo ? '내 플랜에 추가' : currentLang==='zh' ? '添加到计划' : currentLang==='ja' ? 'マイプランに追加' : currentLang==='fr' ? 'Ajouter au plan' : 'Add to My Plan') +
    '</button>';

  // ── Traveler Reviews section
  var spotReviews = REVIEWS.filter(function (r) { return r.locId === id; });
  if (spotReviews.length > 0) {
    html += '<div class="reviews-section">' +
      '<div class="reviews-header">' +
        '<span class="reviews-title">' + (isKo ? '여행자 후기' : 'Traveler Reviews') + '</span>' +
        '<span class="reviews-count">' + spotReviews.length + '</span>' +
      '</div>' +
      spotReviews.map(function (rv) {
        var stars   = '';
        for (var s = 0; s < 5; s++) { stars += s < rv.rating ? '★' : '☆'; }
        var short   = isKo ? rv.shortKo : rv.shortEn;
        var date    = isKo ? rv.dateKo  : rv.dateEn;
        var dur     = isKo ? rv.durationKo : rv.durationEn;
        var btnLbl     = isKo ? '🗺️ 지도에서 루트 보기 →' : '🗺️ View Route on Map →';
        var followLbl  = isKo ? '📋 이 플랜 따라가기' : currentLang==='zh' ? '📋 跟随此计划' : currentLang==='ja' ? '📋 このプランをフォロー' : currentLang==='fr' ? '📋 Suivre ce plan' : '📋 Follow this Plan';
        return '<div class="review-card">' +
          '<div class="review-card-header">' +
            '<div class="review-avatar">' + rv.reviewer.avatar + '</div>' +
            '<div class="review-meta">' +
              '<div class="review-name">' + rv.reviewer.name + '\u00a0' + rv.reviewer.flag + '</div>' +
              '<div class="review-stars">' + stars + '<span class="review-date">' + date + '</span></div>' +
            '</div>' +
            '<span class="review-dur-badge">' + dur + '</span>' +
          '</div>' +
          '<p class="review-text">&ldquo;' + short + '&rdquo;</p>' +
          '<div class="review-card-actions">' +
            '<button class="review-route-btn" onclick="showReviewerRoute(\'' + rv.id + '\')">' + btnLbl + '</button>' +
            '<button class="review-follow-btn" onclick="followReviewerPlan(\'' + rv.id + '\')">' + followLbl + '</button>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  // ── Quiz CTA
  var quizLbl = isKo ? '✏️ 퀴즈 풀기' : currentLang==='zh' ? '✏️ 知识问答' : currentLang==='ja' ? '✏️ クイズに挑戦' : currentLang==='fr' ? '✏️ Faire le Quiz' : '✏️ Take the Quiz';
  html += '<button class="btn-quiz-cta" onclick="startQuiz(\'location\',' + id + ')">' + quizLbl + '<span class="quiz-cta-arrow">→</span></button>';

  openDetail(loc.emoji, CAT_GRADIENT[loc.category], html);
}

// ── Route detail ──────────────────────────────────────────────────────────────
function openRouteDetail(id) {
  var route = ROUTES.find(function (r) { return r.id === id; });
  if (!route) return;

  var isKo  = currentLang === 'ko';
  var name  = isKo ? route.nameKo  : route.nameEn;
  var desc  = isKo ? route.descKo  : route.descEn;
  var dur   = isKo ? route.durationKo : route.durationEn;
  var diff  = isKo ? route.diffKo  : route.diffEn;
  var stops = isKo ? route.stopNamesKo : route.stopNamesEn;

  var stopsHTML = stops.map(function (s, i) {
    return '<div class="route-stop">' +
      '<span class="route-stop-dot"></span>' +
      '<span class="route-stop-name">' + s + '</span>' +
      '<span class="route-stop-num">' + (i + 1) + '</span>' +
    '</div>';
  }).join('');

  var html =
    '<div class="detail-type-row">' +
      '<span class="detail-type-badge route">🛤️ ' + t('type_route') + '</span>' +
    '</div>' +
    '<h2 class="sheet-title" style="margin-bottom:6px">' + name + '</h2>' +
    '<p class="sheet-desc">' + desc + '</p>' +
    '<div class="sheet-info-row">' +
      '<div class="info-chip"><span class="info-icon">⏱️</span><span class="info-label">' + t('label_duration') + '</span><span class="info-val">' + dur + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">📏</span><span class="info-label">' + t('label_distance') + '</span><span class="info-val">' + route.distance + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">💪</span><span class="info-label">' + t('label_difficulty') + '</span><span class="info-val">' + diff + '</span></div>' +
    '</div>' +
    '<div class="route-stops">' + stopsHTML + '</div>' +
    '<div class="sheet-actions">' +
      '<button class="btn-primary" onclick="startRoutePreview(\'' + id + '\')">▶ ' + t('btn_start_route') + '</button>' +
      '<button class="btn-outline"  onclick="saveSpot(\'' + id + '\')">🔖 ' + t('sheet_save') + '</button>' +
    '</div>';

  enterMapFocusMode('drive_detail', { routeId: id });
  openDetail(route.emoji, route.gradient, html);
}

// ── Event/Festival detail ─────────────────────────────────────────────────────
function openEventDetail(id) {
  var ev = EVENTS.find(function (e) { return e.id === id; });
  if (!ev) return;

  var isKo = currentLang === 'ko';
  var name = isKo ? ev.nameKo : ev.nameEn;
  var desc = isKo ? ev.descKo : ev.descEn;
  var date = isKo ? ev.dateKo : ev.dateEn;
  var cat  = isKo ? ev.catKo  : ev.catEn;

  var html =
    '<div class="detail-type-row">' +
      '<span class="detail-type-badge event">🎪 ' + t('type_festival') + '</span>' +
      '<span class="detail-type-badge cat">' + cat + '</span>' +
    '</div>' +
    '<h2 class="sheet-title" style="margin-bottom:6px">' + name + '</h2>' +
    '<p class="sheet-desc">' + desc + '</p>' +
    '<div class="sheet-info-row">' +
      '<div class="info-chip"><span class="info-icon">📅</span><span class="info-label">' + t('label_date') + '</span><span class="info-val">' + date + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">🗂️</span><span class="info-label">' + t('label_type') + '</span><span class="info-val">' + cat + '</span></div>' +
      '<div class="info-chip"><span class="info-icon">' + (ev.admission==='free'?'🎟️':'💳') + '</span><span class="info-label">' + t('label_entry') + '</span><span class="info-val">' + t(ev.admission) + '</span></div>' +
    '</div>' +
    '<div class="sheet-actions">' +
      '<button class="btn-primary" onclick="startDirectionsToTarget(\'event\',\'' + ev.id + '\')">📍 ' + t('btn_directions') + '</button>' +
      '<button class="btn-outline"  onclick="showToast(\'' + (isKo?'🔔 알림 설정됨':'🔔 Reminder set') + '\')">🔔 ' + t('btn_remind') + '</button>' +
    '</div>';

  // ── Quiz CTA
  var evQuizLbl = isKo ? '✏️ 퀴즈 풀기' : currentLang==='zh' ? '✏️ 知识问答' : currentLang==='ja' ? '✏️ クイズに挑戦' : currentLang==='fr' ? '✏️ Faire le Quiz' : '✏️ Take the Quiz';
  html += '<button class="btn-quiz-cta" onclick="startQuiz(\'event\',\'' + ev.id + '\')">' + evQuizLbl + '<span class="quiz-cta-arrow">→</span></button>';

  openDetail(ev.emoji, ev.gradient, html);
}

// ── Partner business detail ───────────────────────────────────────────────────
function openPartnerDetail(id) {
  var p = PARTNERS.find(function (x) { return x.id === id; });
  if (!p) return;

  var isKo  = currentLang === 'ko';
  var name  = isKo ? p.nameKo : p.nameEn;
  var desc  = isKo ? p.descKo : p.descEn;
  var cat   = isKo ? p.catKo  : p.catEn;
  var hours = isKo ? p.hoursKo : p.hoursEn;
  var catIcon = { restaurant:'🍽️', cafe:'☕', shopping:'🛍️', bakery:'🥐', market:'🛒' }[p.cat] || '📍';

  var html =
    '<div class="detail-type-row">' +
      '<span class="detail-type-badge partner">🤝 ' + t('type_partner') + '</span>' +
      '<span class="detail-type-badge cat">' + catIcon + ' ' + cat + '</span>' +
    '</div>' +
    '<h2 class="sheet-title" style="margin-bottom:10px">' + name + '</h2>' +
    '<div class="partner-meta-row">' +
      '<span class="partner-meta-pill">⏰ ' + hours + '</span>' +
      '<span class="partner-meta-pill">💰 ' + p.price + '</span>' +
    '</div>' +
    '<p class="sheet-desc">' + desc + '</p>' +
    '<div class="sheet-actions">' +
      '<button class="btn-primary" onclick="startDirectionsToTarget(\'partner\',\'' + p.id + '\')">📍 ' + t('btn_directions') + '</button>' +
      '<button class="btn-outline"  onclick="saveSpot(\'' + id + '\')">🔖 ' + t('sheet_save') + '</button>' +
    '</div>';

  openDetail(p.emoji, p.gradient, html);
}

// ── Close sheet ───────────────────────────────────────────────────────────────
function closeSheet() {
  document.getElementById('sheetBackdrop').classList.remove('open');
  document.getElementById('bottomSheet').classList.remove('open');
  if (mapFocusMode && mapFocusMode.kind === 'drive_detail' && !reviewerRouteOverlay && !activeNavigation) {
    exitMapFocusMode();
  }
}
function buildLocationAudioScript(loc) {
  var name = t('loc' + loc.id + '_name');
  var desc = t('loc' + loc.id + '_desc');
  var cat  = loc.category;
  var isKo = currentLang === 'ko';
  var isEn = currentLang === 'en';

  function s(parts) { return parts.join(' '); }

  if (isKo) {
    var intro  = s([name + '에 오신 것을 환영합니다.', '충청남도의 대표적인 명소 중 한 곳입니다.']);
    var hist;
    if (cat === 'heritage') {
      hist = s(['이곳은 한국 역사와 문화가 살아 숨 쉬는 유적지로,', '과거의 이야기를 가까이에서 느껴볼 수 있는 장소입니다.']);
    } else if (cat === 'landmark') {
      hist = s(['이곳은 이 지역을 상징하는 랜드마크로,', '현지인과 여행객 모두가 사랑하는 장소입니다.']);
    } else {
      hist = s(['주변 지역의 삶과 문화가 자연스럽게 녹아 있는 공간으로,', '산책하며 둘러보기에도 아주 좋습니다.']);
    }
    var highlight = s(['풍경을 천천히 둘러보며,', desc.replace(/\s+/g, ' '), '라는 특징을 특히 눈여겨보세요.']);
    var tip = s(['사진을 찍고 싶다면 사람이 적은 이른 아침이나 해질 무렵을 노려보세요.', '또 지도에 표시된 다른 인근 명소와 함께 코스를 짜면 하루 일정이 알차집니다.']);
    var local = s(['이동 시에는 편한 신발을 추천드리며,', '주변 카페나 식당에서 간단한 간식을 즐기며 잠시 쉬어가는 것도 좋습니다.']);
    return [intro, hist, highlight, tip, local].join(' ');
  }

  if (isEn) {
    var introEn  = s(['Welcome to', name + ',', 'one of the signature spots in Chungcheongnam-do.']);
    var histEn;
    if (cat === 'heritage') {
      histEn = s(['This place is deeply connected to Korean history and culture,', 'and it is a great stop to feel the stories of the past.']);
    } else if (cat === 'landmark') {
      histEn = s(['This is a local landmark that both residents and travelers love to visit.']);
    } else {
      histEn = s(['It is a comfortable place where you can experience everyday local life at a relaxed pace.']);
    }
    var highlightEn = s(['As you look around, pay attention to the following highlights:', desc.replace(/\s+/g, ' '), 'Take your time to enjoy the scenery and atmosphere.']);
    var tipEn = s(['For the best experience, try visiting either early in the morning or around sunset when the light is soft and crowds are smaller.']);
    var localEn = s(['Wear comfortable shoes, and consider combining this stop with nearby attractions on your map to create a nice half-day route.']);
    return [introEn, histEn, highlightEn, tipEn, localEn].join(' ');
  }

  // Fallback for other languages: keep localized name/desc, simple English guidance.
  var base = name + '. ' + desc.replace(/\s+/g, ' ');
  var extra = ' Take a slow walk, look around, and enjoy the local atmosphere. If you have time, combine this stop with nearby sights for a richer experience.';
  return (base + ' ' + extra).trim();
}

function updateAudioGuideButtonState(locId, playing) {
  var btn = document.getElementById('audioGuideBtn_' + locId);
  if (!btn) return;
  var isKo = currentLang === 'ko';
  if (playing) {
    btn.textContent = isKo ? '⏸ 오디오 일시정지' : '⏸ Pause audio';
  } else {
    btn.textContent = isKo ? '🎧 오디오 가이드' : '🎧 Audio Guide';
  }
}

function stopAudioGuide() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try { window.speechSynthesis.cancel(); } catch (e) {}
  if (activeAudioGuide && activeAudioGuide.locId != null) {
    updateAudioGuideButtonState(activeAudioGuide.locId, false);
  }
  activeAudioGuide = null;
}

function startAudio(id) {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    showToast(currentLang === 'ko' ? '이 브라우저는 음성 안내를 지원하지 않습니다.' : 'Speech synthesis is not supported in this browser.');
    return;
  }

  var locId = parseInt(id, 10);
  var loc = LOCATIONS.find(function (l) { return l.id === locId || l.id === id; });
  if (!loc) return;

  // Toggle behavior: if this place is already playing, stop it.
  if (activeAudioGuide && activeAudioGuide.locId === loc.id) {
    stopAudioGuide();
    return;
  }

  stopAudioGuide();

  var script = buildLocationAudioScript(loc);
  var text = String(script || '').replace(/\s+/g, ' ').trim();
  if (!text) return;

  var langMap = { ko: 'ko-KR', en: 'en-US', zh: 'zh-CN', ja: 'ja-JP', fr: 'fr-FR' };
  var targetLang = langMap[currentLang] || 'en-US';

  var utter = new SpeechSynthesisUtterance(text);
  utter.lang = targetLang;
  utter.rate = 0.95;
  utter.pitch = 1;

  var voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
  if (voices && voices.length && targetLang) {
    var voice =
      voices.find(function (v) { return v.lang === targetLang; }) ||
      voices.find(function (v) { return v.lang && v.lang.toLowerCase().indexOf(String(targetLang).split('-')[0].toLowerCase()) === 0; });
    if (voice) utter.voice = voice;
  }

  utter.onend = function () { stopAudioGuide(); };
  utter.onerror = function () { stopAudioGuide(); };

  activeAudioGuide = { locId: loc.id, utterance: utter };
  try { window.speechSynthesis.cancel(); } catch (e) {}
  window.speechSynthesis.speak(utter);
  updateAudioGuideButtonState(loc.id, true);
  showToast(t('toast_audio'));
}
function saveSpot(id)   { showToast(t('toast_saved')); }

// ── Reviewer Route Overlay ────────────────────────────────────────────────────
var REVIEW_DAY_COLORS = ['#3b82f6', '#f59e0b', '#10b981', '#8b5cf6'];
var REVIEW_DAY_CONNECTOR_STYLE = {
  color: '#94a3b8',
  weight: 3,
  opacity: 0.78,
  dashArray: '6 8',
  lineCap: 'round',
  lineJoin: 'round',
};
var REVIEW_NAV_ROUTE_STYLE = {
  color: '#7c3aed',
  weight: 5,
  opacity: 0.9,
  lineCap: 'round',
  lineJoin: 'round',
};
var OSRM_ROUTE_URL_BASE = 'https://router.project-osrm.org/route/v1/driving/';
var OSRM_MAX_WAYPOINTS_PER_REQUEST = 25;

function flattenTripStops(days) {
  var tripStops = [];
  (days || []).forEach(function (day, di) {
    (day.stops || []).forEach(function (stop, si) {
      tripStops.push({
        coords: stop.coords,
        dayIndex: di,
        stopIndex: si,
        nameKo: stop.nameKo,
        nameEn: stop.nameEn,
      });
    });
  });
  return tripStops;
}

function toOsrmCoordString(coordsList) {
  return coordsList.map(function (c) { return c[1] + ',' + c[0]; }).join(';');
}

async function fetchOsrmRouteLatLngs(coordsList) {
  if (!coordsList || coordsList.length < 2) return coordsList || [];

  var mergedLatLngs = [];
  var step = OSRM_MAX_WAYPOINTS_PER_REQUEST - 1;

  for (var start = 0; start < coordsList.length - 1; start += step) {
    var chunk = coordsList.slice(start, start + OSRM_MAX_WAYPOINTS_PER_REQUEST);
    if (chunk.length < 2) break;

    var url = OSRM_ROUTE_URL_BASE +
      toOsrmCoordString(chunk) +
      '?overview=full&geometries=geojson&steps=false&continue_straight=true';

    var res = await fetch(url);
    if (!res.ok) throw new Error('OSRM request failed: ' + res.status);

    var data = await res.json();
    var route = data && data.routes && data.routes[0];
    if (!route || !route.geometry || !route.geometry.coordinates || !route.geometry.coordinates.length) {
      throw new Error('OSRM route geometry missing');
    }

    var latLngs = route.geometry.coordinates.map(function (pt) { return [pt[1], pt[0]]; });
    if (mergedLatLngs.length > 0 && latLngs.length > 0) latLngs.shift();
    mergedLatLngs = mergedLatLngs.concat(latLngs);
  }

  return mergedLatLngs.length ? mergedLatLngs : coordsList;
}

function appendPathCoords(target, coords) {
  if (!coords || coords.length === 0) return;
  if (!target.length) {
    Array.prototype.push.apply(target, coords);
    return;
  }
  var first = coords[0];
  var last = target[target.length - 1];
  if (last[0] === first[0] && last[1] === first[1]) {
    Array.prototype.push.apply(target, coords.slice(1));
  } else {
    Array.prototype.push.apply(target, coords);
  }
}

function formatDurationText(seconds) {
  var totalMin = Math.max(1, Math.round((seconds || 0) / 60));
  var h = Math.floor(totalMin / 60);
  var m = totalMin % 60;
  if (currentLang === 'ko') {
    if (h > 0 && m > 0) return h + '시간 ' + m + '분';
    if (h > 0) return h + '시간';
    return totalMin + '분';
  }
  if (h > 0 && m > 0) return h + 'h ' + m + 'm';
  if (h > 0) return h + 'h';
  return totalMin + 'm';
}

function formatDistanceText(meters) {
  var km = (meters || 0) / 1000;
  if (km >= 10) return (Math.round(km * 10) / 10) + ' km';
  if (km >= 1) return km.toFixed(1) + ' km';
  return Math.max(100, Math.round(meters / 100) * 100) + ' m';
}

function buildSegmentBadgeText(durationSec, distanceM) {
  var timeTxt = formatDurationText(durationSec);
  var distTxt = formatDistanceText(distanceM);
  return timeTxt + ' · ' + distTxt;
}

function getInstructionText(seg) {
  if (!seg) return currentLang === 'ko' ? '직진하세요' : 'Continue straight';
  var distTxt = formatDistanceText(seg.distance);
  if (seg.distance > 12000) {
    return currentLang === 'ko'
      ? distTxt + ' 앞, 고속도로를 따라 계속 이동하세요'
      : 'In ' + distTxt + ', continue on the main route';
  }
  if (seg.distance > 3000) {
    return currentLang === 'ko'
      ? distTxt + ' 앞, 계속 직진하세요'
      : 'In ' + distTxt + ', continue straight';
  }
  if (seg.distance > 1200) {
    return currentLang === 'ko'
      ? distTxt + ' 앞, 다음 목적지 방향으로 이동하세요'
      : 'In ' + distTxt + ', follow the route to your next stop';
  }
  return currentLang === 'ko'
    ? distTxt + ' 앞, 목적지에 가까워지고 있습니다'
    : 'In ' + distTxt + ', you are approaching your destination';
}

function getStopNameByLang(stop) {
  return currentLang === 'ko' ? (stop.nameKo || stop.nameEn || '') : (stop.nameEn || stop.nameKo || '');
}

function getMidpointCoord(coords) {
  if (!coords || !coords.length) return null;
  return coords[Math.floor(coords.length / 2)];
}

async function fetchOsrmSegmentRoute(fromCoord, toCoord) {
  var url = OSRM_ROUTE_URL_BASE +
    toOsrmCoordString([fromCoord, toCoord]) +
    '?overview=full&geometries=geojson&steps=false&continue_straight=true';
  var res = await fetch(url);
  if (!res.ok) throw new Error('OSRM segment request failed: ' + res.status);
  var data = await res.json();
  var route = data && data.routes && data.routes[0];
  if (!route || !route.geometry || !route.geometry.coordinates || !route.geometry.coordinates.length) {
    throw new Error('OSRM segment geometry missing');
  }
  return {
    coords: route.geometry.coordinates.map(function (pt) { return [pt[1], pt[0]]; }),
    duration: route.duration || 0,
    distance: route.distance || 0,
  };
}

async function buildRoadSegmentsWithMeta(tripStops) {
  var segments = [];
  var fullPath = [];
  if (!tripStops || tripStops.length < 2) return { segments: segments, fullPath: fullPath };

  for (var i = 1; i < tripStops.length; i++) {
    var fromStop = tripStops[i - 1];
    var toStop = tripStops[i];
    var seg = await fetchOsrmSegmentRoute(fromStop.coords, toStop.coords);
    segments.push({
      coords: seg.coords,
      duration: seg.duration,
      distance: seg.distance,
      isDayBoundary: fromStop.dayIndex !== toStop.dayIndex,
      fromStop: fromStop,
      toStop: toStop,
    });
    appendPathCoords(fullPath, seg.coords);
  }
  return { segments: segments, fullPath: fullPath };
}

function getCurrentLocation(opts) {
  return new Promise(function (resolve, reject) {
    if (!navigator.geolocation) { reject(new Error('geolocation unsupported')); return; }
    navigator.geolocation.getCurrentPosition(
      function (pos) { resolve([pos.coords.latitude, pos.coords.longitude]); },
      function (err) { reject(err || new Error('geolocation denied')); },
      opts || { enableHighAccuracy: true, timeout: 7000, maximumAge: 120000 }
    );
  });
}

function updateNavigationPanel() {
  var panel = document.getElementById('navGuidePanel');
  if (!panel || !activeNavigation) return;
  var idx = activeNavigation.currentSegment;
  var seg = activeNavigation.segmentMeta[idx];
  if (!seg) return;
  var nextSeg = activeNavigation.segmentMeta[idx + 1] || null;
  var remaining = activeNavigation.segmentMeta.slice(idx).reduce(function (acc, s) {
    acc.distance += s.distance || 0;
    acc.duration += s.duration || 0;
    return acc;
  }, { distance: 0, duration: 0 });

  var currentEl = document.getElementById('navCurrentDest');
  var nextEl = document.getElementById('navNextDest');
  var segEl = document.getElementById('navSegmentMeta');
  var totalEl = document.getElementById('navTotalMeta');
  var nextBtn = document.getElementById('navNextBtn');
  var titleEl = document.getElementById('navGuideTitle');
  var remainingTimeEl = document.getElementById('navRemainingTime');
  var remainingDistanceEl = document.getElementById('navRemainingDistance');
  var progressTextEl = document.getElementById('navProgressText');
  var progressFillEl = document.getElementById('navProgressFill');
  var instructionBar = document.getElementById('navInstructionBar');
  var instructionDistanceEl = document.getElementById('navInstructionDistance');
  var instructionTextEl = document.getElementById('navInstructionText');
  var progressPct = activeNavigation.segmentMeta.length ? (((idx + 1) / activeNavigation.segmentMeta.length) * 100) : 0;

  if (titleEl) titleEl.textContent = currentLang === 'ko' ? '내비게이션' : 'Navigation';
  if (currentEl) currentEl.textContent = getStopNameByLang(seg.toStop);
  if (nextEl) nextEl.textContent = nextSeg ? getStopNameByLang(nextSeg.toStop) : (currentLang === 'ko' ? '도착 예정' : 'Arrival');
  if (segEl) segEl.textContent = buildSegmentBadgeText(seg.duration, seg.distance);
  if (totalEl) totalEl.textContent = buildSegmentBadgeText(remaining.duration, remaining.distance);
  if (remainingTimeEl) remainingTimeEl.textContent = formatDurationText(remaining.duration);
  if (remainingDistanceEl) remainingDistanceEl.textContent = formatDistanceText(remaining.distance);
  if (progressTextEl) progressTextEl.textContent = (currentLang === 'ko' ? '구간 ' : 'Segment ') + (idx + 1) + ' / ' + activeNavigation.segmentMeta.length;
  if (progressFillEl) progressFillEl.style.width = progressPct + '%';
  if (instructionBar) instructionBar.classList.add('visible');
  if (instructionDistanceEl) instructionDistanceEl.textContent = formatDistanceText(seg.distance);
  if (instructionTextEl) instructionTextEl.textContent = getInstructionText(seg);
  if (nextBtn) {
    nextBtn.textContent = nextSeg ? (currentLang === 'ko' ? '다음 목적지' : 'Next Stop') : (currentLang === 'ko' ? '경로 완료' : 'Finish Route');
    nextBtn.disabled = !nextSeg;
  }
}

function updateNavigationSegmentHighlight() {
  if (!activeNavigation || !activeNavigation.segmentPolylines) return;
  activeNavigation.segmentPolylines.forEach(function (pl, idx) {
    if (!pl || !pl.setStyle) return;
    if (idx === activeNavigation.currentSegment) {
      pl.setStyle({ color: '#f59e0b', weight: 7, opacity: 0.98 });
    } else {
      pl.setStyle({ color: '#7c3aed', weight: 5, opacity: 0.35 });
    }
  });
}

function stopActiveNavigation() {
  if (activeNavigation) {
    (activeNavigation.polylines || []).forEach(function (pl) { if (leafletMap && leafletMap.hasLayer(pl)) pl.remove(); });
    (activeNavigation.markers || []).forEach(function (m) { if (leafletMap && leafletMap.hasLayer(m)) m.remove(); });
  }
  activeNavigation = null;
  document.body.classList.remove('nav-active');
  var panel = document.getElementById('navGuidePanel');
  if (panel) panel.classList.remove('visible');
  var topBar = document.getElementById('navInstructionBar');
  if (topBar) topBar.classList.remove('visible');
  if (mapFocusMode && (mapFocusMode.kind === 'drive_navigation' || mapFocusMode.kind === 'point_navigation')) exitMapFocusMode();
  if (leafletMap) leafletMap.invalidateSize();
}

function stopRoutePreview() {
  if (activeRoutePreview) {
    (activeRoutePreview.polylines || []).forEach(function (pl) { if (leafletMap && leafletMap.hasLayer(pl)) pl.remove(); });
    (activeRoutePreview.markers || []).forEach(function (m) { if (leafletMap && leafletMap.hasLayer(m)) m.remove(); });
  }
  activeRoutePreview = null;
  var panel = document.getElementById('routePreviewPanel');
  if (panel) panel.classList.remove('visible');
  if (mapFocusMode && mapFocusMode.kind === 'drive_preview') exitMapFocusMode();
}

function startNavigationFromPreview() {
  if (!activeRoutePreview || !activeRoutePreview.routeId) return;
  var rid = activeRoutePreview.routeId;
  stopRoutePreview();
  startRouteNavigation(rid);
}

async function startRoutePreview(routeId) {
  var route = ROUTES.find(function (r) { return r.id === routeId; });
  if (!route || !leafletMap) return;

  clearReviewerRoute();
  stopActiveNavigation();
  stopRoutePreview();
  enterMapFocusMode('drive_preview', { routeId: routeId });
  closeSheet();

  var baseStops = route.waypoints.map(function (coords, idx) {
    var stopName = route.stopNamesKo && route.stopNamesKo[idx] ? route.stopNamesKo[idx] : ('Stop ' + (idx + 1));
    var stopNameEn = route.stopNamesEn && route.stopNamesEn[idx] ? route.stopNamesEn[idx] : stopName;
    return { coords: coords, dayIndex: 0, stopIndex: idx, nameKo: stopName, nameEn: stopNameEn };
  });
  if (baseStops.length < 2) return;

  var road;
  try {
    road = await buildRoadSegmentsWithMeta(baseStops);
  } catch (e) {
    showToast(currentLang === 'ko' ? '미리보기 경로를 불러오지 못했습니다' : 'Failed to load route preview');
    return;
  }

  var polylines = [];
  var markers = [];

  // Full route overview line (dominant)
  if (road.fullPath && road.fullPath.length > 1) {
    polylines.push(L.polyline(road.fullPath, { color: '#7c3aed', weight: 6, opacity: 0.92, lineCap: 'round', lineJoin: 'round' }).addTo(leafletMap));
  }

  // Stop markers
  baseStops.forEach(function (stop, idx) {
    var isLast = idx === baseStops.length - 1;
    var dot = L.marker(stop.coords, {
      icon: L.divIcon({
        html: '<div class="review-stop-dot" style="background:' + (isLast ? '#ef4444' : '#3b82f6') + '">' + (idx + 1) + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [26, 26], iconAnchor: [13, 13],
      }),
      zIndexOffset: 260,
    }).addTo(leafletMap);
    dot.bindTooltip(getStopNameByLang(stop), { permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip' });
    markers.push(dot);
  });

  // Preview meta
  var total = road.segments.reduce(function (acc, s) {
    acc.distance += s.distance || 0;
    acc.duration += s.duration || 0;
    return acc;
  }, { distance: 0, duration: 0 });
  var isKo = currentLang === 'ko';
  var title = document.getElementById('routePreviewTitle');
  var meta = document.getElementById('routePreviewMeta');
  var startBtn = document.getElementById('routePreviewStartBtn');
  if (title) title.textContent = isKo ? '루트 미리보기' : 'Route Preview';
  if (meta) {
    meta.textContent =
      (isKo ? route.nameKo : route.nameEn) + ' · ' +
      baseStops.length + (isKo ? '개 경유지' : ' stops') + '\n' +
      (isKo ? '예상 ' : 'Est. ') + formatDurationText(total.duration) + ' · ' + formatDistanceText(total.distance);
  }
  if (startBtn) startBtn.textContent = isKo ? '안내 시작' : 'Start Navigation';

  activeRoutePreview = { routeId: routeId, polylines: polylines, markers: markers, metaText: meta ? meta.textContent : '' };
  var panel = document.getElementById('routePreviewPanel');
  if (panel) panel.classList.add('visible');

  if (road.fullPath && road.fullPath.length > 1) {
    leafletMap.fitBounds(L.latLngBounds(road.fullPath), { padding: [60, 120], maxZoom: 14, animate: true });
  }
}

function goToNextNavigationStop() {
  if (!activeNavigation) return;
  if (activeNavigation.currentSegment >= activeNavigation.segmentMeta.length - 1) return;
  activeNavigation.currentSegment++;
  updateNavigationSegmentHighlight();
  updateNavigationPanel();
  var seg = activeNavigation.segmentMeta[activeNavigation.currentSegment];
  if (seg && leafletMap && seg.coords && seg.coords.length) {
    leafletMap.flyTo(seg.coords[Math.floor(seg.coords.length / 2)], Math.max(leafletMap.getZoom(), 11), { duration: 0.7 });
  }
}

async function startRouteNavigation(routeId) {
  var route = ROUTES.find(function (r) { return r.id === routeId; });
  if (!route || !leafletMap) return;

  clearReviewerRoute();
  stopActiveNavigation();
  stopRoutePreview();
  enterMapFocusMode('drive_navigation', { routeId: routeId });
  closeSheet();

  var startCoord = null;
  try {
    startCoord = await getCurrentLocation();
  } catch (e) {
    startCoord = null;
    showToast(currentLang === 'ko' ? '위치 권한이 없어 첫 경유지부터 안내합니다' : 'Location unavailable: starting from first stop');
  }

  var baseStops = route.waypoints.map(function (coords, idx) {
    var stopName = route.stopNamesKo && route.stopNamesKo[idx] ? route.stopNamesKo[idx] : ('Stop ' + (idx + 1));
    var stopNameEn = route.stopNamesEn && route.stopNamesEn[idx] ? route.stopNamesEn[idx] : stopName;
    return { coords: coords, dayIndex: 0, stopIndex: idx, nameKo: stopName, nameEn: stopNameEn };
  });
  if (baseStops.length === 0) return;

  var tripStops = baseStops.slice();
  if (startCoord) {
    tripStops.unshift({
      coords: startCoord,
      dayIndex: 0,
      stopIndex: -1,
      nameKo: '현재 위치',
      nameEn: 'Current Location',
    });
  }

  var road;
  try {
    road = await buildRoadSegmentsWithMeta(tripStops);
  } catch (e) {
    showToast(currentLang === 'ko' ? '도로 경로를 불러오지 못했습니다' : 'Failed to load road route');
    return;
  }
  if (!road || !road.segments || road.segments.length === 0) return;

  var polylines = [];
  var markers = [];
  var segmentPolylines = [];

  // Start marker (user location or first stop)
  var startName = getStopNameByLang(tripStops[0]);
  var startMarker = L.marker(tripStops[0].coords, {
    icon: L.divIcon({
      html: '<div class="review-stop-dot" style="background:#10b981">▶</div>',
      className: 'map-marker-wrapper',
      iconSize: [26, 26], iconAnchor: [13, 13],
    }),
    zIndexOffset: 300,
  }).addTo(leafletMap);
  startMarker.bindTooltip(startName, { permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip' });
  markers.push(startMarker);

  // Route stop markers
  baseStops.forEach(function (stop, idx) {
    var isLast = idx === baseStops.length - 1;
    var dot = L.marker(stop.coords, {
      icon: L.divIcon({
        html: '<div class="review-stop-dot" style="background:' + (isLast ? '#ef4444' : '#3b82f6') + '">' + (idx + 1) + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [26, 26], iconAnchor: [13, 13],
      }),
      zIndexOffset: 260,
    }).addTo(leafletMap);
    dot.bindTooltip(getStopNameByLang(stop), { permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip' });
    markers.push(dot);
  });

  // Segment lines and meta badges
  road.segments.forEach(function (seg) {
    var segLine = L.polyline(seg.coords, { color: '#7c3aed', weight: 5, opacity: 0.35, lineCap: 'round', lineJoin: 'round' }).addTo(leafletMap);
    segmentPolylines.push(segLine);
    polylines.push(segLine);

    var badgePos = getMidpointCoord(seg.coords);
    if (!badgePos) return;
    var badgeMarker = L.marker(badgePos, {
      icon: L.divIcon({
        html: '<div class="route-segment-badge">' + buildSegmentBadgeText(seg.duration, seg.distance) + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [0, 0], iconAnchor: [0, 0],
      }),
      zIndexOffset: 240,
      interactive: false,
      keyboard: false,
    }).addTo(leafletMap);
    markers.push(badgeMarker);
  });

  activeNavigation = {
    polylines: polylines,
    markers: markers,
    segmentPolylines: segmentPolylines,
    segmentMeta: road.segments,
    currentSegment: 0,
  };

  document.body.classList.add('nav-active');
  updateNavigationSegmentHighlight();
  updateNavigationPanel();
  var panel = document.getElementById('navGuidePanel');
  if (panel) panel.classList.add('visible');

  if (road.fullPath && road.fullPath.length > 1) {
    leafletMap.fitBounds(L.latLngBounds(road.fullPath), { padding: [60, 100], maxZoom: 14, animate: true });
  } else {
    leafletMap.flyTo(tripStops[0].coords, 13, { duration: 0.8 });
  }
  setTimeout(function () { if (leafletMap) leafletMap.invalidateSize(); }, 250);
}

function getDirectionsTarget(type, id) {
  if (type === 'location') {
    var locId = parseInt(id, 10);
    var loc = LOCATIONS.find(function (l) { return l.id === locId || String(l.id) === String(id); });
    if (!loc) return null;
    return {
      key: 'location:' + loc.id,
      coords: loc.coords,
      nameKo: t('loc' + loc.id + '_name'),
      nameEn: I18N.en && I18N.en['loc' + loc.id + '_name'] ? I18N.en['loc' + loc.id + '_name'] : t('loc' + loc.id + '_name'),
    };
  }
  if (type === 'event') {
    var ev = EVENTS.find(function (e) { return String(e.id) === String(id); });
    if (!ev) return null;
    return { key: 'event:' + ev.id, coords: ev.coords, nameKo: ev.nameKo, nameEn: ev.nameEn };
  }
  if (type === 'partner') {
    var p = PARTNERS.find(function (x) { return String(x.id) === String(id); });
    if (!p) return null;
    return { key: 'partner:' + p.id, coords: p.coords, nameKo: p.nameKo, nameEn: p.nameEn };
  }
  return null;
}

async function startDirectionsToTarget(type, id) {
  if (!leafletMap) return;
  var target = getDirectionsTarget(type, id);
  if (!target || !target.coords) return;

  clearReviewerRoute();
  stopActiveNavigation();
  enterMapFocusMode('point_navigation', { targetKey: target.key });
  closeSheet();

  var startCoord = null;
  try {
    startCoord = await getCurrentLocation();
  } catch (e) {
    startCoord = null;
    showToast(currentLang === 'ko' ? '위치 권한이 없어 목적지 중심 안내를 표시합니다' : 'Location unavailable: showing destination route info');
  }

  var tripStops = [];
  if (startCoord) {
    tripStops.push({ coords: startCoord, dayIndex: 0, stopIndex: -1, nameKo: '현재 위치', nameEn: 'Current Location' });
  } else {
    // Fallback start near destination so route mode still opens consistently.
    tripStops.push({
      coords: [target.coords[0] + 0.0045, target.coords[1] + 0.0045],
      dayIndex: 0,
      stopIndex: -1,
      nameKo: '출발 지점',
      nameEn: 'Start Point',
    });
  }
  tripStops.push({ coords: target.coords, dayIndex: 0, stopIndex: 0, nameKo: target.nameKo, nameEn: target.nameEn });

  var road;
  try {
    road = await buildRoadSegmentsWithMeta(tripStops);
  } catch (e) {
    showToast(currentLang === 'ko' ? '도로 경로를 불러오지 못했습니다' : 'Failed to load road route');
    return;
  }
  if (!road || !road.segments || road.segments.length === 0) return;

  var polylines = [];
  var markers = [];
  var segmentPolylines = [];

  var startMarker = L.marker(tripStops[0].coords, {
    icon: L.divIcon({
      html: '<div class="review-stop-dot" style="background:#10b981">▶</div>',
      className: 'map-marker-wrapper',
      iconSize: [26, 26], iconAnchor: [13, 13],
    }),
    zIndexOffset: 300,
  }).addTo(leafletMap);
  startMarker.bindTooltip(getStopNameByLang(tripStops[0]), { permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip' });
  markers.push(startMarker);

  var destMarker = L.marker(target.coords, {
    icon: L.divIcon({
      html: '<div class="review-stop-dot" style="background:#ef4444">★</div>',
      className: 'map-marker-wrapper',
      iconSize: [26, 26], iconAnchor: [13, 13],
    }),
    zIndexOffset: 320,
  }).addTo(leafletMap);
  destMarker.bindTooltip(getStopNameByLang(tripStops[1]), { permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip' });
  markers.push(destMarker);

  road.segments.forEach(function (seg) {
    var segLine = L.polyline(seg.coords, { color: '#7c3aed', weight: 5, opacity: 0.35, lineCap: 'round', lineJoin: 'round' }).addTo(leafletMap);
    segmentPolylines.push(segLine);
    polylines.push(segLine);

    var badgePos = getMidpointCoord(seg.coords);
    if (!badgePos) return;
    var badgeMarker = L.marker(badgePos, {
      icon: L.divIcon({
        html: '<div class="route-segment-badge">' + buildSegmentBadgeText(seg.duration, seg.distance) + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [0, 0], iconAnchor: [0, 0],
      }),
      zIndexOffset: 240,
      interactive: false,
      keyboard: false,
    }).addTo(leafletMap);
    markers.push(badgeMarker);
  });

  activeNavigation = {
    polylines: polylines,
    markers: markers,
    segmentPolylines: segmentPolylines,
    segmentMeta: road.segments,
    currentSegment: 0,
  };
  document.body.classList.add('nav-active');
  updateNavigationSegmentHighlight();
  updateNavigationPanel();
  var panel = document.getElementById('navGuidePanel');
  if (panel) panel.classList.add('visible');

  if (road.fullPath && road.fullPath.length > 1) {
    leafletMap.fitBounds(L.latLngBounds(road.fullPath), { padding: [60, 100], maxZoom: 15, animate: true });
  } else {
    leafletMap.flyTo(target.coords, 14, { duration: 0.8 });
  }
  setTimeout(function () { if (leafletMap) leafletMap.invalidateSize(); }, 250);
}

async function buildRoadRouteSegmentsByDay(tripStops) {
  var segments = [];
  var fitCoords = [];
  if (!tripStops || tripStops.length === 0) return { segments: segments, fitCoords: fitCoords };

  var start = 0;
  while (start < tripStops.length) {
    var dayIndex = tripStops[start].dayIndex;
    var end = start;
    while (end < tripStops.length && tripStops[end].dayIndex === dayIndex) end++;

    var dayStops = tripStops.slice(start, end);
    var dayCoords = dayStops.map(function (s) { return s.coords; });
    var dayPath = dayCoords;
    if (dayCoords.length > 1) {
      try { dayPath = await fetchOsrmRouteLatLngs(dayCoords); } catch (e) { dayPath = dayCoords; }
      segments.push({
        coords: dayPath,
        style: Object.assign({}, REVIEW_NAV_ROUTE_STYLE, { color: REVIEW_DAY_COLORS[dayIndex % REVIEW_DAY_COLORS.length] }),
      });
      appendPathCoords(fitCoords, dayPath);
    } else if (dayCoords.length === 1) {
      appendPathCoords(fitCoords, dayCoords);
    }

    if (end < tripStops.length) {
      var bridgePair = [tripStops[end - 1].coords, tripStops[end].coords];
      var bridgePath = bridgePair;
      try { bridgePath = await fetchOsrmRouteLatLngs(bridgePair); } catch (e) { bridgePath = bridgePair; }
      segments.push({ coords: bridgePath, style: REVIEW_DAY_CONNECTOR_STYLE });
      appendPathCoords(fitCoords, bridgePath);
    }

    start = end;
  }

  return { segments: segments, fitCoords: fitCoords };
}

async function showReviewerRoute(reviewId) {
  var review = REVIEWS.find(function (r) { return r.id === reviewId; });
  if (!review || !leafletMap) return;

  stopActiveNavigation();
  clearReviewerRoute();
  enterMapFocusMode('reviewer_route', { reviewId: reviewId });
  closeSheet();
  var renderToken = ++reviewerRouteRenderToken;

  var polylines = [];
  var markers   = [];
  var isKo = currentLang === 'ko';
  var tripStops = flattenTripStops(review.days);
  var totalStops = tripStops.length;
  var tripIndex = 0;
  if (totalStops === 0) return;

  review.days.forEach(function (day, di) {
    if (!day.stops || day.stops.length === 0) return;
    var color     = REVIEW_DAY_COLORS[di % REVIEW_DAY_COLORS.length];

    // Day label marker pinned at first stop of the day
    var dayLabel = isKo ? (di + 1) + '일차' : 'Day\u00a0' + (di + 1);
    var labelIcon = L.divIcon({
      html: '<div class="review-day-label" style="background:' + color + '">' + dayLabel + '</div>',
      className: 'map-marker-wrapper',
      iconSize: [58, 26], iconAnchor: [29, 40],
    });
    markers.push(L.marker(day.stops[0].coords, { icon: labelIcon, zIndexOffset: 300 }).addTo(leafletMap));

    // Stop dot markers
    day.stops.forEach(function (stop, si) {
      var isFirst = tripIndex === 0;
      var isLast  = tripIndex === totalStops - 1;
      var dotBg   = isFirst ? '#10b981' : isLast ? '#ef4444' : color;
      var label   = isFirst ? '▶' : isLast ? '★' : String(si + 1);
      var dotIcon = L.divIcon({
        html: '<div class="review-stop-dot" style="background:' + dotBg + '">' + label + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [26, 26], iconAnchor: [13, 13],
      });
      var stopName = isKo ? stop.nameKo : stop.nameEn;
      var dot = L.marker(stop.coords, { icon: dotIcon, zIndexOffset: 250 });
      dot.bindTooltip(stopName, {
        permanent: false, direction: 'top', offset: [0, -16],
        className: 'review-stop-tooltip',
      });
      dot.addTo(leafletMap);
      markers.push(dot);
      tripIndex++;
    });
  });

  var orderedCoords = tripStops.map(function (s) { return s.coords; });
  var road;
  try {
    road = await buildRoadSegmentsWithMeta(tripStops);
  } catch (e) {
    showToast(isKo ? '도로 경로를 불러오지 못했습니다' : 'Failed to load road route');
    return;
  }
  if (renderToken !== reviewerRouteRenderToken) return;
  if (road.fullPath.length > 1) {
    polylines.push(L.polyline(road.fullPath, REVIEW_NAV_ROUTE_STYLE).addTo(leafletMap));
  }

  road.segments.forEach(function (seg) {
    var badgePos = getMidpointCoord(seg.coords);
    if (!badgePos) return;
    var badgeText = buildSegmentBadgeText(seg.duration, seg.distance);
    var badgeCls = 'route-segment-badge' + (seg.isDayBoundary ? ' day-boundary' : '');
    var badgeMarker = L.marker(badgePos, {
      icon: L.divIcon({
        html: '<div class="' + badgeCls + '">' + badgeText + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      }),
      zIndexOffset: 280,
      interactive: false,
      keyboard: false,
    }).addTo(leafletMap);
    markers.push(badgeMarker);
  });

  reviewerRouteOverlay = { polylines: polylines, markers: markers };

  // Fit map to cover all stops
  if (road.fullPath.length > 1) {
    leafletMap.fitBounds(L.latLngBounds(road.fullPath), { padding: [60, 80], maxZoom: 14, animate: true });
  } else if (orderedCoords.length === 1) {
    leafletMap.flyTo(orderedCoords[0], 14);
  }

  // Show floating bar
  var bar = document.getElementById('reviewRouteBar');
  if (bar) {
    bar.querySelector('.rrb-reviewer').innerHTML =
      '<span class="rrb-avatar">' + review.reviewer.avatar + '</span>' +
      '<div>' +
        '<div class="rrb-name">' + review.reviewer.name + '\u00a0' + review.reviewer.flag + '</div>' +
        '<div class="rrb-info">' +
          (isKo
            ? review.durationKo + '\u00a0·\u00a0' + totalStops + '개 장소'
            : review.durationEn + '\u00a0·\u00a0' + totalStops + ' stops') +
        '</div>' +
      '</div>';
    bar.classList.add('visible');
  }
}

function clearReviewerRoute() {
  reviewerRouteRenderToken++;
  if (reviewerRouteOverlay) {
    reviewerRouteOverlay.polylines.forEach(function (pl) { if (leafletMap && leafletMap.hasLayer(pl)) pl.remove(); });
    reviewerRouteOverlay.markers.forEach(function (m)   { if (leafletMap && leafletMap.hasLayer(m))  m.remove(); });
    reviewerRouteOverlay = null;
  }
  var bar = document.getElementById('reviewRouteBar');
  if (bar) bar.classList.remove('visible');
  if (mapFocusMode && (mapFocusMode.kind === 'reviewer_route' || mapFocusMode.kind === 'user_plan_route')) {
    exitMapFocusMode();
  }
}

// ── User Travel Plan ──────────────────────────────────────────────────────────
function loadPlanFromStorage() {
  try {
    var raw = localStorage.getItem('tapkorea_plan');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { days: [] };
}

function saveUserPlan() {
  try { localStorage.setItem('tapkorea_plan', JSON.stringify(userPlan)); } catch (e) {}
}

function addLocationToMyPlan(locId) {
  var loc = LOCATIONS.find(function (l) { return l.id === locId; });
  if (!loc) return;
  if (userPlan.days.length === 0) userPlan.days.push({ stops: [] });
  var dayIdx = userPlan.days.length - 1;
  userPlan.days[dayIdx].stops.push({
    nameKo: I18N.ko['loc' + locId + '_name'] || t('loc' + locId + '_name'),
    nameEn: I18N.en['loc' + locId + '_name'] || t('loc' + locId + '_name'),
    coords: loc.coords,
    emoji:  loc.emoji,
  });
  saveUserPlan();
  var isKo = currentLang === 'ko';
  showToast(isKo ? '✅ Day ' + (dayIdx + 1) + '에 추가되었습니다' : '✅ Added to Day ' + (dayIdx + 1));
}

function followReviewerPlan(reviewId) {
  var review = REVIEWS.find(function (r) { return r.id === reviewId; });
  if (!review) return;
  userPlan.days = review.days.map(function (day) {
    return {
      stops: day.stops.map(function (s) {
        return { nameKo: s.nameKo, nameEn: s.nameEn, coords: s.coords, emoji: '📍' };
      }),
    };
  });
  saveUserPlan();
  var isKo = currentLang === 'ko';
  var totalStops = review.days.reduce(function (sum, d) { return sum + d.stops.length; }, 0);
  showToast(isKo
    ? '📋 ' + review.reviewer.name + '의 플랜이 저장됨 (' + review.days.length + '일 · ' + totalStops + '곳)'
    : '📋 ' + review.reviewer.name + "'s plan saved (" + review.days.length + ' days · ' + totalStops + ' stops)');
}

function openMyPlanSheet() {
  renderMyPlanSheet();
  document.getElementById('myPlanBackdrop').classList.add('open');
  document.getElementById('myPlanSheet').classList.add('open');
}
function closeMyPlanSheet() {
  document.getElementById('myPlanBackdrop').classList.remove('open');
  document.getElementById('myPlanSheet').classList.remove('open');
}

function renderMyPlanSheet() {
  var inner = document.getElementById('myPlanInner');
  if (!inner) return;
  var isKo = currentLang === 'ko';
  var totalStops = userPlan.days.reduce(function (sum, d) { return sum + d.stops.length; }, 0);

  var html = '<div class="plan-sheet-header">' +
    '<h2 class="plan-sheet-title">' + (isKo ? '내 여행 플랜' : 'My Travel Plan') + '</h2>' +
    '<button class="modal-close-btn" onclick="closeMyPlanSheet()">✕</button>' +
  '</div>';

  if (totalStops === 0) {
    html += '<div class="plan-empty">' +
      '<div class="plan-empty-icon">🗓️</div>' +
      '<p class="plan-empty-title">' + (isKo ? '플랜이 비어 있어요' : 'Your plan is empty') + '</p>' +
      '<p class="plan-empty-sub">' + (isKo
        ? '장소 상세 화면에서 "＋ 내 플랜에 추가"를 눌러보세요'
        : 'Tap "＋ Add to My Plan" on any location to get started') + '</p>' +
    '</div>';
  } else {
    userPlan.days.forEach(function (day, di) {
      var color   = REVIEW_DAY_COLORS[di % REVIEW_DAY_COLORS.length];
      var dayLbl  = isKo ? (di + 1) + '일차' : 'Day\u00a0' + (di + 1);
      var cntLbl  = day.stops.length + (isKo ? '곳' : '\u00a0stops');
      html += '<div class="plan-day">' +
        '<div class="plan-day-header">' +
          '<span class="plan-day-dot" style="background:' + color + '"></span>' +
          '<span class="plan-day-label">' + dayLbl + '</span>' +
          '<span class="plan-day-count">' + cntLbl + '</span>' +
          '<button class="plan-day-remove" onclick="removePlanDay(' + di + ')" aria-label="Remove day">✕</button>' +
        '</div>';

      day.stops.forEach(function (stop, si) {
        var name = isKo ? stop.nameKo : stop.nameEn;
        var isFirst = si === 0;
        var isLast  = si === day.stops.length - 1 && di === userPlan.days.length - 1;
        var dotBg   = isFirst && di === 0 ? '#10b981' : isLast ? '#ef4444' : color;
        html += '<div class="plan-stop-row">' +
          '<span class="plan-stop-line" style="border-left-color:' + color + '"></span>' +
          '<span class="plan-stop-bullet" style="background:' + dotBg + '">' + (stop.emoji || '📍') + '</span>' +
          '<span class="plan-stop-name">' + name + '</span>' +
          '<button class="plan-stop-remove" onclick="removePlanStop(' + di + ',' + si + ')" aria-label="Remove">✕</button>' +
        '</div>';
      });

      html += '</div>';
    });

    html += '<div class="plan-footer-actions">' +
      '<button class="btn-primary" onclick="showMyPlanOnMap();closeMyPlanSheet()">🗺️ ' + (isKo ? '지도에서 보기' : 'View on Map') + '</button>' +
      '<button class="btn-outline" onclick="clearMyPlan()">🗑️ ' + (isKo ? '플랜 초기화' : 'Clear Plan') + '</button>' +
    '</div>' +
    '<button class="btn-complete-trip" onclick="closeMyPlanSheet();setTimeout(openTripReviewForm,260)">' +
      '<span class="btn-complete-trip-check">✓</span>' +
      (isKo ? '여행 완료 — 리뷰 작성하기' : 'Trip Complete — Write a Review') +
    '</button>';
  }

  html += '<button class="plan-add-day-btn" onclick="addPlanDay()">＋\u00a0' + (isKo ? '새 날 추가' : 'Add New Day') + '</button>';

  inner.innerHTML = html;
}

function addPlanDay() {
  userPlan.days.push({ stops: [] });
  saveUserPlan();
  renderMyPlanSheet();
  var isKo = currentLang === 'ko';
  showToast(isKo ? ('✅ Day ' + userPlan.days.length + ' 추가됨') : ('✅ Day ' + userPlan.days.length + ' added'));
}

function removePlanStop(dayIdx, stopIdx) {
  if (!userPlan.days[dayIdx]) return;
  userPlan.days[dayIdx].stops.splice(stopIdx, 1);
  saveUserPlan();
  renderMyPlanSheet();
}

function removePlanDay(dayIdx) {
  userPlan.days.splice(dayIdx, 1);
  saveUserPlan();
  renderMyPlanSheet();
}

function clearMyPlan() {
  userPlan.days = [];
  saveUserPlan();
  renderMyPlanSheet();
  showToast(currentLang === 'ko' ? '🗑️ 플랜이 초기화되었습니다' : '🗑️ Plan cleared');
}

async function showMyPlanOnMap() {
  stopActiveNavigation();
  clearReviewerRoute();
  enterMapFocusMode('user_plan_route');
  if (!leafletMap) return;
  var renderToken = ++reviewerRouteRenderToken;
  var isKo = currentLang === 'ko';
  var polylines = [];
  var markers   = [];
  var tripStops = flattenTripStops(userPlan.days);
  var totalStops = tripStops.length;
  var tripIndex = 0;

  if (totalStops === 0) {
    showToast(isKo ? '표시할 경로가 없습니다' : 'No stops to display');
    return;
  }

  userPlan.days.forEach(function (day, di) {
    if (!day.stops || day.stops.length === 0) return;
    var color     = REVIEW_DAY_COLORS[di % REVIEW_DAY_COLORS.length];

    var dayLabel = isKo ? (di + 1) + '일차' : 'Day\u00a0' + (di + 1);
    markers.push(L.marker(day.stops[0].coords, {
      icon: L.divIcon({
        html: '<div class="review-day-label" style="background:' + color + '">' + dayLabel + '</div>',
        className: 'map-marker-wrapper', iconSize: [58, 26], iconAnchor: [29, 40],
      }), zIndexOffset: 300,
    }).addTo(leafletMap));

    day.stops.forEach(function (stop, si) {
      var isFirst = tripIndex === 0;
      var isLast  = tripIndex === totalStops - 1;
      var dotBg   = isFirst ? '#10b981' : isLast ? '#ef4444' : color;
      var label   = isFirst ? '▶' : isLast ? '★' : String(si + 1);
      var dot = L.marker(stop.coords, {
        icon: L.divIcon({
          html: '<div class="review-stop-dot" style="background:' + dotBg + '">' + label + '</div>',
          className: 'map-marker-wrapper', iconSize: [26, 26], iconAnchor: [13, 13],
        }), zIndexOffset: 250,
      });
      dot.bindTooltip(isKo ? stop.nameKo : stop.nameEn, {
        permanent: false, direction: 'top', offset: [0, -16], className: 'review-stop-tooltip',
      });
      dot.addTo(leafletMap);
      markers.push(dot);
      tripIndex++;
    });
  });

  var orderedCoords = tripStops.map(function (s) { return s.coords; });
  var road;
  try {
    road = await buildRoadSegmentsWithMeta(tripStops);
  } catch (e) {
    showToast(isKo ? '도로 경로를 불러오지 못했습니다' : 'Failed to load road route');
    return;
  }
  if (renderToken !== reviewerRouteRenderToken) return;
  if (road.fullPath.length > 1) {
    polylines.push(L.polyline(road.fullPath, REVIEW_NAV_ROUTE_STYLE).addTo(leafletMap));
  }

  road.segments.forEach(function (seg) {
    var badgePos = getMidpointCoord(seg.coords);
    if (!badgePos) return;
    var badgeText = buildSegmentBadgeText(seg.duration, seg.distance);
    var badgeCls = 'route-segment-badge' + (seg.isDayBoundary ? ' day-boundary' : '');
    var badgeMarker = L.marker(badgePos, {
      icon: L.divIcon({
        html: '<div class="' + badgeCls + '">' + badgeText + '</div>',
        className: 'map-marker-wrapper',
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      }),
      zIndexOffset: 280,
      interactive: false,
      keyboard: false,
    }).addTo(leafletMap);
    markers.push(badgeMarker);
  });

  reviewerRouteOverlay = { polylines: polylines, markers: markers };

  if (road.fullPath.length > 1) {
    leafletMap.fitBounds(L.latLngBounds(road.fullPath), { padding: [60, 80], maxZoom: 14, animate: true });
  } else if (orderedCoords.length === 1) {
    leafletMap.flyTo(orderedCoords[0], 14);
  }

  var bar = document.getElementById('reviewRouteBar');
  if (bar) {
    bar.querySelector('.rrb-reviewer').innerHTML =
      '<span class="rrb-avatar">🗓️</span>' +
      '<div>' +
        '<div class="rrb-name">' + (isKo ? '내 여행 플랜' : 'My Travel Plan') + '</div>' +
        '<div class="rrb-info">' +
          (isKo
            ? userPlan.days.length + '일\u00a0·\u00a0' + totalStops + '개 장소'
            : userPlan.days.length + '\u00a0days\u00a0·\u00a0' + totalStops + ' stops') +
        '</div>' +
      '</div>';
    bar.classList.add('visible');
  }
}

// ── Region sheet ──────────────────────────────────────────────────────────────
function renderRegionGrid() {
  var grid = document.getElementById('regionGrid');
  if (!grid) return;

  grid.innerHTML = REGION_ORDER.map(function (rid) {
    var region = REGIONS[rid];
    var count  = LOCATIONS.filter(function (l) { return rid === 'all' || l.region === rid; }).length
               + EVENTS  .filter(function (e) { return rid === 'all' || e.region === rid; }).length
               + PARTNERS.filter(function (p) { return rid === 'all' || p.region === rid; }).length;
    var isAll  = rid === 'all';
    return '<button class="region-card' + (activeRegion===rid?' active':'') + (isAll?' region-card-all':'') +
      '" onclick="selectRegion(\'' + rid + '\')">' +
      '<span class="region-card-emoji">' + region.emoji + '</span>' +
      '<span class="region-card-name">'  + t('region_' + rid) + '</span>' +
      '<span class="region-card-count">' + count + t('spots_label') + '</span>' +
      '</button>';
  }).join('');
}

function openRegionSheet()  {
  renderRegionGrid();
  document.getElementById('regionBackdrop').classList.add('open');
  document.getElementById('regionSheet').classList.add('open');
}
function closeRegionSheet() {
  document.getElementById('regionBackdrop').classList.remove('open');
  document.getElementById('regionSheet').classList.remove('open');
}

function selectRegion(regionId) {
  activeRegion = regionId;
  leafletMap.flyTo(REGIONS[regionId].center, REGIONS[regionId].zoom, { duration: 1.0, easeLinearity: 0.5 });
  applyMarkerFilter();
  updateFAB();
  setTimeout(closeRegionSheet, 180);
  setTimeout(renderRegionGrid, 200);
}

function updateFAB() {
  var fab = document.getElementById('fabRegions');
  if (!fab) return;
  if (activeRegion === 'all') {
    fab.innerHTML = '<span class="fab-icon">🗺️</span><span class="fab-label">' + t('fab_regions') + '</span>';
  } else {
    fab.innerHTML = '<span class="fab-icon">' + REGIONS[activeRegion].emoji + '</span><span class="fab-label">' + t('region_' + activeRegion) + '</span>';
  }
}

// ── Search ────────────────────────────────────────────────────────────────────
var activeSearchFilter  = 'all';
var searchResultMarkers = [];
var searchDebounceTimer = null;
var TYPE_COLOR = { location: '#3b82f6', event: '#f59e0b', partner: '#10b981' };

function handleSearch(val) {
  currentSearch = val;
  var clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.classList.toggle('visible', val.length > 0);

  clearTimeout(searchDebounceTimer);

  if (!val.trim()) {
    clearSearchResultMarkers();
    closeSearchPanel();
    applyMarkerFilter();
    return;
  }

  searchDebounceTimer = setTimeout(function () {
    activeSearchFilter = 'all';
    var results = gatherAllSearchResults(val.trim());
    applyMarkerFilter();                         // hide all regular markers
    showSearchResultMarkers(results, true);      // add numbered pins + fit map
    renderSearchPanel(results);
    openSearchPanel();
  }, 160);
}

function gatherAllSearchResults(query) {
  var q    = query.toLowerCase();
  var isKo = currentLang === 'ko';
  var results = [];

  LOCATIONS.forEach(function (loc) {
    var name = t('loc' + loc.id + '_name');
    if (name.toLowerCase().includes(q)) {
      results.push({
        type:   'location',
        id:     loc.id,
        emoji:  loc.emoji,
        name:   name,
        region: t('region_' + loc.region),
        coords: loc.coords,
        badge:  t('filter_' + loc.category),
        meta:   '⭐\u00a0' + loc.rating,
      });
    }
  });

  EVENTS.forEach(function (ev) {
    var name = isKo ? ev.nameKo : ev.nameEn;
    if (name.toLowerCase().includes(q)) {
      results.push({
        type:   'event',
        id:     ev.id,
        emoji:  ev.emoji,
        name:   name,
        region: t('region_' + ev.region),
        coords: ev.coords,
        badge:  isKo ? ev.catKo : ev.catEn,
        meta:   isKo ? ev.dateKo : ev.dateEn,
      });
    }
  });

  PARTNERS.forEach(function (p) {
    var name = isKo ? p.nameKo : p.nameEn;
    if (name.toLowerCase().includes(q)) {
      results.push({
        type:   'partner',
        id:     p.id,
        emoji:  p.emoji,
        name:   name,
        region: t('region_' + p.region),
        coords: p.coords,
        badge:  isKo ? p.catKo : p.catEn,
        meta:   p.price,
      });
    }
  });

  return results;
}

function filteredResults(results) {
  if (activeSearchFilter === 'all') return results;
  return results.filter(function (r) { return r.type === activeSearchFilter; });
}

function setSearchFilter(type) {
  activeSearchFilter = type;
  document.querySelectorAll('.search-filter-chip').forEach(function (el) {
    el.classList.toggle('active', el.dataset.type === type);
  });
  var results = gatherAllSearchResults(currentSearch.trim());
  showSearchResultMarkers(results, false);
  renderSearchResultList(results);
  updateSearchResultCount(results);
}

function showSearchResultMarkers(results, fitMap) {
  clearSearchResultMarkers();
  if (!leafletMap) return;
  var vis = filteredResults(results);

  vis.slice(0, 40).forEach(function (r, idx) {
    var col  = TYPE_COLOR[r.type] || '#6366f1';
    var icon = L.divIcon({
      html: '<div class="search-result-pin" style="background:' + col + '">' + (idx + 1) + '</div>',
      className: 'map-marker-wrapper',
      iconSize: [30, 36], iconAnchor: [15, 36],
    });
    var m = L.marker(r.coords, { icon: icon, zIndexOffset: 80 });
    m.on('click', function () { openSearchResultById(r.type, String(r.id)); });
    m.addTo(leafletMap);
    searchResultMarkers.push(m);
  });

  if (fitMap && vis.length > 0) {
    var coords = vis.slice(0, 40).map(function (r) { return r.coords; });
    if (coords.length === 1) {
      leafletMap.flyTo(coords[0], 14, { duration: 0.6 });
    } else {
      leafletMap.fitBounds(L.latLngBounds(coords), { padding: [60, 100], maxZoom: 14, animate: true });
    }
  }
}

function clearSearchResultMarkers() {
  searchResultMarkers.forEach(function (m) {
    if (leafletMap && leafletMap.hasLayer(m)) m.remove();
  });
  searchResultMarkers = [];
}

function openSearchResultById(type, idStr) {
  var coords;
  if (type === 'location') {
    var locId = Number(idStr);
    var loc = LOCATIONS.find(function (l) { return l.id === locId; });
    if (!loc) return;
    coords = loc.coords;
    if (leafletMap) leafletMap.flyTo(coords, 14, { duration: 0.6 });
    closeSearchPanel();
    setTimeout(function () { openSpot(locId); }, 650);
  } else if (type === 'event') {
    var ev = EVENTS.find(function (e) { return e.id === idStr; });
    if (!ev) return;
    if (leafletMap) leafletMap.flyTo(ev.coords, 14, { duration: 0.6 });
    closeSearchPanel();
    setTimeout(function () { openEventDetail(idStr); }, 650);
  } else if (type === 'partner') {
    var p = PARTNERS.find(function (x) { return x.id === idStr; });
    if (!p) return;
    if (leafletMap) leafletMap.flyTo(p.coords, 14, { duration: 0.6 });
    closeSearchPanel();
    setTimeout(function () { openPartnerDetail(idStr); }, 650);
  }
}

function renderSearchPanel(results) {
  var isKo = currentLang === 'ko';
  var chipsEl = document.getElementById('searchFilterChips');
  if (chipsEl) {
    var locCnt = results.filter(function (r) { return r.type === 'location'; }).length;
    var evCnt  = results.filter(function (r) { return r.type === 'event'; }).length;
    var pCnt   = results.filter(function (r) { return r.type === 'partner'; }).length;
    var chips  = [
      { type: 'all',      icon: '🗺️', label: isKo ? '전체'  : 'All',         cnt: results.length },
      { type: 'location', icon: '🏛',  label: isKo ? '명소'  : 'Attractions', cnt: locCnt },
      { type: 'event',    icon: '🎪',  label: isKo ? '축제'  : 'Festivals',   cnt: evCnt  },
      { type: 'partner',  icon: '🏪',  label: isKo ? '장소'  : 'Places',      cnt: pCnt   },
    ];
    chipsEl.innerHTML = chips.map(function (c) {
      var active = activeSearchFilter === c.type ? ' active' : '';
      return '<button class="search-filter-chip' + active + '" data-type="' + c.type + '" onclick="setSearchFilter(\'' + c.type + '\')">' +
        c.icon + '\u00a0' + c.label +
        (c.cnt > 0 ? ' <span class="chip-cnt">' + c.cnt + '</span>' : '') +
      '</button>';
    }).join('');
  }
  updateSearchResultCount(results);
  renderSearchResultList(results);
}

function updateSearchResultCount(results) {
  var isKo = currentLang === 'ko';
  var vis  = filteredResults(results);
  var el   = document.getElementById('searchResultCount');
  if (!el) return;
  if (vis.length === 0) {
    el.textContent = isKo ? '결과 없음' : 'No results';
  } else {
    el.textContent = isKo
      ? vis.length + '개 결과'
      : vis.length + (vis.length === 1 ? ' result' : ' results');
  }
}

function renderSearchResultList(results) {
  var list = document.getElementById('searchResultList');
  if (!list) return;
  var vis = filteredResults(results);

  if (vis.length === 0) {
    list.innerHTML = '<div class="search-no-results">' +
      '<div class="search-no-results-icon">🔍</div>' +
      '<div class="search-no-results-text">' + (currentLang === 'ko' ? '검색 결과가 없습니다' : 'No results found') + '</div>' +
    '</div>';
    return;
  }

  list.innerHTML = vis.map(function (r, idx) {
    var col = TYPE_COLOR[r.type] || '#6366f1';
    return '<div class="search-result-card" onclick="openSearchResultById(\'' + r.type + '\',\'' + r.id + '\')">' +
      '<div class="src-num" style="background:' + col + '">' + (idx + 1) + '</div>' +
      '<span class="src-emoji">' + r.emoji + '</span>' +
      '<div class="src-info">' +
        '<div class="src-name">' + r.name + '</div>' +
        '<div class="src-sub">' +
          '<span>📍\u00a0' + r.region + '</span>' +
          '<span class="src-badge ' + r.type + '">' + r.badge + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="src-meta">' +
        (r.meta ? '<span class="src-meta-val">' + r.meta + '</span>' : '') +
      '</div>' +
    '</div>';
  }).join('');
}

function openSearchPanel() {
  var p = document.getElementById('searchPanel');
  if (p) p.classList.add('active');
}
function closeSearchPanel() {
  var p = document.getElementById('searchPanel');
  if (p) p.classList.remove('active');
}

// kept for backward compat (called from plan/review handlers)
function pickSearchResult(locId) {
  openSearchResultById('location', String(locId));
}
function dismissSearchResults() { closeSearchPanel(); }

function clearSearch() {
  currentSearch = '';
  var input = document.getElementById('searchInput');
  if (input) input.value = '';
  var cb = document.getElementById('searchClear');
  if (cb) cb.classList.remove('visible');
  clearSearchResultMarkers();
  closeSearchPanel();
  applyMarkerFilter();
}

// ── Language picker ───────────────────────────────────────────────────────────
function openLangPicker() {
  document.getElementById('langModalBackdrop').classList.add('open');
  document.getElementById('langModal').classList.add('open');
}
function closeLangPicker() {
  document.getElementById('langModalBackdrop').classList.remove('open');
  document.getElementById('langModal').classList.remove('open');
}
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('tapkorea_lang', lang);
  closeLangPicker();
  applyI18n();
  renderRegionGrid();
  if (currentSearch) handleSearch(currentSearch);
}

// ── Post-Trip Review System ───────────────────────────────────────────────────
var CHANGE_REASONS = [
  { val:'time',     icon:'⏰', en:'Time constraints',    ko:'시간 부족'    },
  { val:'distance', icon:'📏', en:'Distance',            ko:'이동 거리'    },
  { val:'local',    icon:'🗣️', en:'Local recommendation',ko:'현지인 추천'  },
  { val:'weather',  icon:'🌦️', en:'Weather',             ko:'날씨'         },
  { val:'personal', icon:'❤️', en:'Personal preference', ko:'개인 취향'    },
  { val:'custom',   icon:'✏️', en:'Other reason',        ko:'기타'         },
];

var DURATION_OPTIONS = [
  { en:'Day Trip',         ko:'당일치기',   val:'daytrip' },
  { en:'1 Night 2 Days',   ko:'1박 2일',    val:'1n2d'    },
  { en:'2 Nights 3 Days',  ko:'2박 3일',    val:'2n3d'    },
  { en:'3 Nights 4 Days',  ko:'3박 4일',    val:'3n4d'    },
  { en:'4 Nights 5 Days',  ko:'4박 5일',    val:'4n5d'    },
  { en:'1 Week+',          ko:'1주일 이상', val:'1week'   },
];

var reviewFormState = { rating: 0, duration: '2n3d' };
var userReviewMarkers = []; // Leaflet markers for user-submitted reviews

function loadUserReviews() {
  try { return JSON.parse(localStorage.getItem('tapkorea_user_reviews') || '[]'); } catch(e) { return []; }
}
function saveUserReviews(arr) { localStorage.setItem('tapkorea_user_reviews', JSON.stringify(arr)); }

function computeCentroid(coordsList) {
  if (!coordsList || coordsList.length === 0) return [36.5, 127.5];
  var lat = 0, lng = 0;
  coordsList.forEach(function(c) { lat += c[0]; lng += c[1]; });
  return [lat / coordsList.length, lng / coordsList.length];
}

// ── Open / Close Review Overlay ───────────────────────────────────────────────
function openTripReviewForm() {
  var totalStops = userPlan.days.reduce(function(s, d) { return s + d.stops.length; }, 0);
  if (totalStops === 0) {
    showToast(currentLang === 'ko' ? '먼저 플랜에 장소를 추가해주세요' : 'Add stops to your plan first');
    return;
  }
  // checkedStops: key = 'day_DI_stop_SI', undefined/true = visited, false = skipped
  reviewFormState = { rating:0, duration:'2n3d', checkedStops:{}, extraStops:[], changeReasons:[], customReason:'', routeChanged:false };
  renderTripReviewForm();
  document.getElementById('tripReviewOverlay').classList.add('open');
}
function closeTripReviewForm() {
  document.getElementById('tripReviewOverlay').classList.remove('open');
}

// ── Render Form ───────────────────────────────────────────────────────────────
function renderTripReviewForm() {
  var isKo       = currentLang === 'ko';
  var totalDays  = userPlan.days.filter(function(d) { return d.stops.length > 0; }).length;
  var totalStops = userPlan.days.reduce(function(s, d) { return s + d.stops.length; }, 0);
  var allStops   = userPlan.days.reduce(function(acc, d) { return acc.concat(d.stops); }, []);
  var preview    = allStops.slice(0, 3).map(function(s) { return isKo ? s.nameKo : s.nameEn; });
  if (allStops.length > 3) preview.push('…');

  // Duration pills
  var durationPills = DURATION_OPTIONS.map(function(d) {
    return '<button class="trf-dur-pill' + (reviewFormState.duration === d.val ? ' active' : '') + '" onclick="selectReviewDuration(\'' + d.val + '\')">'
      + (isKo ? d.ko : d.en) + '</button>';
  }).join('');

  // Star rating
  var stars = [1,2,3,4,5].map(function(n) {
    return '<button class="trf-star' + (n <= reviewFormState.rating ? ' lit' : '') + '" onclick="setReviewRating(' + n + ')" aria-label="' + n + ' stars">★</button>';
  }).join('');

  // Planned stops checklist — grouped by day
  var checklistHtml = userPlan.days.map(function(day, di) {
    if (day.stops.length === 0) return '';
    var color    = REVIEW_DAY_COLORS[di % REVIEW_DAY_COLORS.length];
    var dayLabel = isKo ? (di+1)+'일차' : 'Day '+(di+1);
    var stopItems = day.stops.map(function(stop, si) {
      var key      = 'day_' + di + '_stop_' + si;
      var visited  = reviewFormState.checkedStops[key] !== false;
      var name     = isKo ? stop.nameKo : stop.nameEn;
      return '<div class="trf-stop-row' + (!visited ? ' skipped' : '') + '" data-key="' + key + '" onclick="togglePlanStop(' + di + ',' + si + ')">'
        + '<span class="trf-stop-check">' + (visited ? '✓' : '✕') + '</span>'
        + '<span class="trf-stop-dot" style="background:' + color + '"></span>'
        + '<span class="trf-stop-name">' + name + '</span>'
      + '</div>';
    }).join('');
    return '<div class="trf-checklist-day">'
      + '<span class="trf-checklist-day-lbl" style="color:' + color + '">' + dayLabel + '</span>'
      + stopItems
    + '</div>';
  }).join('');

  // Extra stops (user-added)
  var extraHtml = buildExtraStopsHtml(isKo);
  var addStopPh = isKo ? '계획에 없던 장소 추가' : 'Add an unplanned stop';
  var addBtnLbl = isKo ? '추가' : 'Add';

  // Change reason section (initially hidden)
  var reasonChips = CHANGE_REASONS.map(function(r) {
    var active = reviewFormState.changeReasons.indexOf(r.val) !== -1;
    return '<button class="trf-reason-chip' + (active ? ' active' : '') + '" onclick="toggleChangeReason(\'' + r.val + '\')">'
      + r.icon + ' ' + (isKo ? r.ko : r.en)
    + '</button>';
  }).join('');
  var customVisible = reviewFormState.changeReasons.indexOf('custom') !== -1;
  var customPh = isKo ? '직접 입력…' : 'Describe the reason…';

  document.getElementById('tripReviewInner').innerHTML =
    '<div class="trf-header">'
      + '<button class="trf-close" onclick="closeTripReviewForm()">✕</button>'
      + '<h3 class="trf-title">' + (isKo ? '여행 리뷰 작성' : 'Write a Trip Review') + '</h3>'
    + '</div>'
    + '<div class="trf-body">'

      // Plan summary card
      + '<div class="trf-plan-summary">'
        + '<div class="trf-plan-icon">🗓️</div>'
        + '<div class="trf-plan-info">'
          + '<span class="trf-plan-meta">' + (isKo ? totalDays+'일 · '+totalStops+'개 장소' : totalDays+' days · '+totalStops+' stops') + '</span>'
          + '<span class="trf-plan-stops">' + preview.join(' → ') + '</span>'
        + '</div>'
      + '</div>'

      // ── Actual route section
      + '<div class="trf-field">'
        + '<div class="trf-field-header">'
          + '<label class="trf-label">' + (isKo ? '실제 방문 경로' : 'Actual Route Visited') + '</label>'
          + '<span class="trf-field-hint">' + (isKo ? '방문한 곳만 체크해주세요' : 'Uncheck places you skipped') + '</span>'
        + '</div>'
        + '<div class="trf-checklist" id="trfChecklist">' + checklistHtml + '</div>'
        + '<div id="trfExtraStops">' + extraHtml + '</div>'
        + '<div class="trf-add-stop-row">'
          + '<input class="trf-add-stop-input" id="trfExtraInput" type="text" maxlength="60"'
            + ' placeholder="' + addStopPh + '" autocomplete="off"'
            + ' onkeydown="if(event.key===\'Enter\'){addExtraStop();event.preventDefault();}" />'
          + '<button class="trf-add-stop-btn" onclick="addExtraStop()">＋ ' + addBtnLbl + '</button>'
        + '</div>'
      + '</div>'

      // ── Change reason section (shown when route differs)
      + '<div class="trf-change-section" id="trfChangeSection"' + (reviewFormState.routeChanged ? '' : ' style="display:none"') + '>'
        + '<div class="trf-change-section-header">'
          + '<span class="trf-change-icon">🔄</span>'
          + '<div>'
            + '<label class="trf-label trf-label-required">' + (isKo ? '여행 계획이 변경된 이유는?' : 'Why did your travel plan change?') + '</label>'
            + '<span class="trf-required-badge">' + (isKo ? '필수' : 'Required') + '</span>'
          + '</div>'
        + '</div>'
        + '<div class="trf-reason-chips" id="trfReasonChips">' + reasonChips + '</div>'
        + '<div class="trf-custom-reason" id="trfCustomReason"' + (customVisible ? '' : ' style="display:none"') + '>'
          + '<input class="trf-input" id="trfCustomReasonInput" type="text" maxlength="120"'
            + ' placeholder="' + customPh + '" value="' + reviewFormState.customReason.replace(/"/g,'&quot;') + '" />'
        + '</div>'
        + '<div class="trf-change-insight">'
          + '<span class="trf-change-insight-icon">💡</span>'
          + '<span>' + (isKo ? '변경 이유가 기록되어 더 나은 추천에 활용됩니다' : 'Your reason is saved to improve future recommendations') + '</span>'
        + '</div>'
      + '</div>'

      // Duration
      + '<div class="trf-field">'
        + '<label class="trf-label">' + (isKo ? '여행 기간' : 'Travel Duration') + '</label>'
        + '<div class="trf-dur-pills">' + durationPills + '</div>'
      + '</div>'

      // Star rating
      + '<div class="trf-field">'
        + '<label class="trf-label">' + (isKo ? '루트 평점' : 'Route Rating') + '</label>'
        + '<div class="trf-stars-row">'
          + '<div class="trf-stars">' + stars + '</div>'
          + '<span class="trf-rating-hint' + (reviewFormState.rating ? ' rated' : '') + '" id="trfRatingHint">'
            + (reviewFormState.rating ? (isKo ? RATING_LABELS.ko : RATING_LABELS.en)[reviewFormState.rating] : (isKo ? '별을 눌러 평가해주세요' : 'Tap a star to rate'))
          + '</span>'
        + '</div>'
      + '</div>'

      // Name
      + '<div class="trf-field">'
        + '<label class="trf-label">' + (isKo ? '이름' : 'Name') + '</label>'
        + '<input class="trf-input" id="trfName" type="text" maxlength="40" placeholder="' + (isKo ? '닉네임 (선택)' : 'Your name (optional)') + '" autocomplete="off" />'
      + '</div>'

      // Review text
      + '<div class="trf-field">'
        + '<label class="trf-label">' + (isKo ? '후기' : 'Review') + '</label>'
        + '<textarea class="trf-textarea" id="trfText" maxlength="300"'
          + ' placeholder="' + (isKo ? '여행은 어떠셨나요? 인상 깊었던 순간, 추천 팁을 공유해주세요 ✈️' : 'How was your trip? Share memorable moments and tips ✈️') + '"'
          + ' oninput="updateTrfCharCount(this.value.length)"></textarea>'
        + '<span class="trf-char-count" id="trfCharCount">0 / 300</span>'
      + '</div>'

      // Submit
      + '<button class="trf-submit-btn" onclick="submitTripReview()">'
        + (isKo ? '리뷰 게시하기 🗺️' : 'Publish Review 🗺️')
      + '</button>'

    + '</div>';
}

// ── Route Checklist Helpers ────────────────────────────────────────────────────
function buildExtraStopsHtml(isKo) {
  if (reviewFormState.extraStops.length === 0) return '';
  return '<div class="trf-extra-list">'
    + reviewFormState.extraStops.map(function(s, i) {
        return '<div class="trf-extra-tag">'
          + '<span class="trf-extra-tag-dot">＋</span>'
          + '<span class="trf-extra-tag-name">' + (isKo ? s.nameKo : s.nameEn) + '</span>'
          + '<button class="trf-extra-tag-remove" onclick="removeExtraStop(' + i + ')">✕</button>'
        + '</div>';
      }).join('')
  + '</div>';
}

function togglePlanStop(dayIdx, stopIdx) {
  var key = 'day_' + dayIdx + '_stop_' + stopIdx;
  reviewFormState.checkedStops[key] = reviewFormState.checkedStops[key] !== false ? false : true;
  // Update row visually
  var row = document.querySelector('[data-key="' + key + '"]');
  if (row) {
    var visited = reviewFormState.checkedStops[key] !== false;
    row.classList.toggle('skipped', !visited);
    var check = row.querySelector('.trf-stop-check');
    if (check) check.textContent = visited ? '✓' : '✕';
  }
  checkRouteChanged();
}

function addExtraStop() {
  var input = document.getElementById('trfExtraInput');
  var val   = input ? input.value.trim() : '';
  if (!val) return;
  reviewFormState.extraStops.push({ nameKo: val, nameEn: val, source: 'extra' });
  if (input) input.value = '';
  document.getElementById('trfExtraStops').innerHTML = buildExtraStopsHtml(currentLang === 'ko');
  checkRouteChanged();
}

function removeExtraStop(idx) {
  reviewFormState.extraStops.splice(idx, 1);
  document.getElementById('trfExtraStops').innerHTML = buildExtraStopsHtml(currentLang === 'ko');
  checkRouteChanged();
}

function checkRouteChanged() {
  var anySkipped = Object.values(reviewFormState.checkedStops).some(function(v) { return v === false; });
  var hasExtras  = reviewFormState.extraStops.length > 0;
  var changed    = anySkipped || hasExtras;

  if (changed === reviewFormState.routeChanged) return; // no state flip
  reviewFormState.routeChanged = changed;

  var section = document.getElementById('trfChangeSection');
  if (!section) return;
  if (changed) {
    section.style.display = '';
    section.classList.remove('trf-section-hidden');
    section.classList.add('trf-section-visible');
  } else {
    section.classList.remove('trf-section-visible');
    section.classList.add('trf-section-hidden');
    // Clear reason state when route is back to unchanged
    reviewFormState.changeReasons = [];
    reviewFormState.customReason  = '';
    setTimeout(function() { section.style.display = 'none'; section.classList.remove('trf-section-hidden'); }, 300);
  }
}

function toggleChangeReason(val) {
  var idx = reviewFormState.changeReasons.indexOf(val);
  if (idx === -1) { reviewFormState.changeReasons.push(val); }
  else            { reviewFormState.changeReasons.splice(idx, 1); }
  // Re-render chips in place
  var isKo = currentLang === 'ko';
  var container = document.getElementById('trfReasonChips');
  if (container) {
    container.innerHTML = CHANGE_REASONS.map(function(r) {
      var active = reviewFormState.changeReasons.indexOf(r.val) !== -1;
      return '<button class="trf-reason-chip' + (active ? ' active' : '') + '" onclick="toggleChangeReason(\'' + r.val + '\')">'
        + r.icon + ' ' + (isKo ? r.ko : r.en) + '</button>';
    }).join('');
  }
  // Show/hide custom text field
  var customEl = document.getElementById('trfCustomReason');
  if (customEl) customEl.style.display = reviewFormState.changeReasons.indexOf('custom') !== -1 ? '' : 'none';
}

function updateTrfCharCount(len) {
  var el = document.getElementById('trfCharCount');
  if (el) { el.textContent = len + ' / 300'; el.classList.toggle('near-limit', len > 250); }
}

function selectReviewDuration(val) {
  reviewFormState.duration = val;
  document.querySelectorAll('.trf-dur-pill').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.trim() !== '' &&
      DURATION_OPTIONS.find(function(d) { return d.val === val && (btn.textContent === d.en || btn.textContent === d.ko); }));
  });
  // Re-render pills to avoid text-match fragility
  var isKo = currentLang === 'ko';
  var pillContainer = document.querySelector('.trf-dur-pills');
  if (pillContainer) {
    pillContainer.innerHTML = DURATION_OPTIONS.map(function(d) {
      return '<button class="trf-dur-pill' + (reviewFormState.duration === d.val ? ' active' : '') + '" onclick="selectReviewDuration(\'' + d.val + '\')">'
        + (isKo ? d.ko : d.en) + '</button>';
    }).join('');
  }
}

var RATING_LABELS = {
  en: ['', 'Poor 😕', 'Fair 🙂', 'Good 😊', 'Great 😄', 'Amazing! 🤩'],
  ko: ['', '아쉬워요 😕', '보통이에요 🙂', '좋아요 😊', '훌륭해요 😄', '최고예요! 🤩'],
};
function setReviewRating(n) {
  reviewFormState.rating = n;
  var isKo = currentLang === 'ko';
  document.querySelectorAll('.trf-star').forEach(function(s, i) {
    s.classList.toggle('lit', i < n);
  });
  var hint = document.getElementById('trfRatingHint');
  if (hint) {
    hint.textContent = (isKo ? RATING_LABELS.ko : RATING_LABELS.en)[n] || '';
    hint.classList.add('rated');
  }
}

// ── Route Insights (aggregate reason counts for future recommendations) ────────
function loadRouteInsights() {
  try { return JSON.parse(localStorage.getItem('tapkorea_route_insights')) || { reasons: {}, totalChanges: 0 }; }
  catch(e) { return { reasons: {}, totalChanges: 0 }; }
}
function updateRouteInsights(changeReasons) {
  if (!changeReasons || changeReasons.length === 0) return;
  var data = loadRouteInsights();
  changeReasons.forEach(function(r) {
    data.reasons[r] = (data.reasons[r] || 0) + 1;
  });
  data.totalChanges = (data.totalChanges || 0) + 1;
  data.lastUpdated  = Date.now();
  localStorage.setItem('tapkorea_route_insights', JSON.stringify(data));
}

// ── Submit Review ─────────────────────────────────────────────────────────────
function submitTripReview() {
  var isKo = currentLang === 'ko';
  if (reviewFormState.rating === 0) {
    showToast(isKo ? '⭐ 별점을 선택해주세요' : '⭐ Please select a star rating');
    return;
  }
  var textEl = document.getElementById('trfText');
  var nameEl = document.getElementById('trfName');
  var text   = textEl ? textEl.value.trim() : '';
  if (!text) {
    showToast(isKo ? '✏️ 후기를 입력해주세요' : '✏️ Please write a short review');
    return;
  }

  // Validate change reasons if route changed
  if (reviewFormState.routeChanged) {
    if (reviewFormState.changeReasons.length === 0) {
      showToast(isKo ? '❓ 루트 변경 이유를 선택해주세요' : '❓ Please select a reason for route change');
      return;
    }
    if (reviewFormState.changeReasons.indexOf('custom') !== -1) {
      var customEl = document.getElementById('trfCustomReason');
      var customVal = customEl ? customEl.value.trim() : '';
      if (!customVal) {
        showToast(isKo ? '✏️ 기타 이유를 입력해주세요' : '✏️ Please enter your custom reason');
        return;
      }
      reviewFormState.customReason = customVal;
    }
  }

  // Build planned route (full plan snapshot)
  var plannedRoute = userPlan.days.map(function(day, di) {
    return { dayIndex: di, stops: day.stops.slice() };
  });

  // Build actual route (visited stops + extras)
  var actualRoute = userPlan.days.map(function(day, di) {
    var visitedStops = day.stops.filter(function(s, si) {
      var key = 'day_' + di + '_stop_' + si;
      return reviewFormState.checkedStops[key] !== false;
    });
    return { dayIndex: di, stops: visitedStops };
  }).filter(function(d) { return d.stops.length > 0; });

  // Add extra stops as a final "day" entry
  if (reviewFormState.extraStops.length > 0) {
    actualRoute.push({ dayIndex: -1, stops: reviewFormState.extraStops });
  }

  // Collect change reasons data
  var changeReasonsData = reviewFormState.changeReasons.map(function(val) {
    var def = CHANGE_REASONS.find(function(r) { return r.val === val; });
    return {
      val:    val,
      icon:   def ? def.icon : '•',
      en:     val === 'custom' ? reviewFormState.customReason : (def ? def.en : val),
      ko:     val === 'custom' ? reviewFormState.customReason : (def ? def.ko : val),
    };
  });

  var allPlanned  = plannedRoute.reduce(function(acc, d) { return acc.concat(d.stops); }, []);
  var allActual   = actualRoute.reduce(function(acc, d) { return acc.concat(d.stops); }, []);
  var allCoords   = allActual.map(function(s) { return s.coords; }).filter(Boolean);
  if (!allCoords.length) allCoords = allPlanned.map(function(s) { return s.coords; }).filter(Boolean);
  var centroid    = computeCentroid(allCoords);
  var totalDays   = plannedRoute.filter(function(d) { return d.stops.length > 0; }).length;
  var totalStops  = allActual.length;

  var durOpt = DURATION_OPTIONS.find(function(d) { return d.val === reviewFormState.duration; }) || DURATION_OPTIONS[2];
  var reviewerName = (nameEl && nameEl.value.trim()) || (isKo ? '익명 여행자' : 'Anonymous Traveler');

  var review = {
    id:                'ur_' + Date.now(),
    planSnapshot:      JSON.parse(JSON.stringify(userPlan)),
    plannedRoute:      plannedRoute,
    actualRoute:       actualRoute,
    routeChanged:      reviewFormState.routeChanged,
    changeReasonsData: changeReasonsData,
    durationVal:       durOpt.val,
    durationKo:        durOpt.ko,
    durationEn:        durOpt.en,
    rating:            reviewFormState.rating,
    text:              text,
    reviewerName:      reviewerName,
    centroid:          centroid,
    totalDays:         totalDays,
    totalStops:        totalStops,
    createdAt:         Date.now(),
  };

  var reviews = loadUserReviews();
  reviews.unshift(review);
  saveUserReviews(reviews);

  // Persist aggregated route insights
  if (reviewFormState.routeChanged) {
    updateRouteInsights(reviewFormState.changeReasons);
  }

  // Award points
  var ptsData = loadPointsData(); ptsData.total += 150; savePointsData(ptsData);

  // Create marker on map
  addUserReviewMarker(review);

  // Show success screen
  showTripReviewSuccess(review);
}

// ── Success screen (replaces form in same overlay) ────────────────────────────
function showTripReviewSuccess(review) {
  var isKo    = currentLang === 'ko';
  var stars   = [1,2,3,4,5].map(function(n) {
    return '<span class="trf-success-star' + (n <= review.rating ? ' lit' : '') + '">★</span>';
  }).join('');
  var durLabel = isKo ? review.durationKo : review.durationEn;

  document.getElementById('tripReviewInner').innerHTML =
    '<div class="trf-success">'
      + '<div class="trf-success-confetti" aria-hidden="true">'
        + '🎉🎊✨🌟💫🎉✨🎊'
      + '</div>'
      + '<div class="trf-success-emoji">🗺️</div>'
      + '<h2 class="trf-success-title">' + (isKo ? '리뷰가 게시됐어요!' : 'Review Published!') + '</h2>'
      + '<p class="trf-success-sub">' + (isKo ? '지도에 새 마커가 추가되었습니다' : 'A new marker has been added to the map') + '</p>'

      + '<div class="trf-success-card">'
        + '<div class="trf-success-reviewer">'
          + '<span class="trf-success-avatar">✈️</span>'
          + '<div>'
            + '<strong>' + review.reviewerName + '</strong>'
            + '<span>' + durLabel + ' · ' + (isKo ? review.totalDays+'일·'+review.totalStops+'곳' : review.totalDays+' days·'+review.totalStops+' stops') + '</span>'
          + '</div>'
        + '</div>'
        + '<div class="trf-success-stars">' + stars + '</div>'
        + '<p class="trf-success-text">&ldquo;' + review.text + '&rdquo;</p>'
      + '</div>'

      + '<div class="trf-success-pts">✨ +150 ' + (isKo ? '포인트 획득!' : 'pts awarded!') + '</div>'

      + '<div class="trf-success-actions">'
        + '<button class="trf-success-btn-map" onclick="closeTripReviewForm();showUserReviewOnMap(\'' + review.id + '\')">'
          + (isKo ? '🗺️ 지도에서 보기' : '🗺️ See on Map')
        + '</button>'
        + '<button class="trf-success-btn-close" onclick="closeTripReviewForm()">'
          + (isKo ? '닫기' : 'Close')
        + '</button>'
      + '</div>'
    + '</div>';
}

// ── Map Marker for User Reviews ───────────────────────────────────────────────
function addUserReviewMarker(review) {
  if (!leafletMap) return;
  var marker = createUserReviewMarker(review);
  userReviewMarkers.push({ marker: marker, reviewId: review.id });
}

function createUserReviewMarker(review) {
  var stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  var changedBadge = review.routeChanged ? '<span class="urp-changed-badge">🔄</span>' : '';
  var icon = L.divIcon({
    html: '<div class="user-review-pin' + (review.routeChanged ? ' changed' : '') + '">'
      + '<div class="urp-body">'
        + changedBadge
        + '<span class="urp-stars">' + stars + '</span>'
        + '<span class="urp-label">' + review.reviewerName.split(' ')[0] + '</span>'
      + '</div>'
      + '<div class="urp-tail"></div>'
    + '</div>',
    className: 'map-marker-wrapper',
    iconSize:  [80, 50],
    iconAnchor:[40, 50],
  });
  var marker = L.marker(review.centroid, { icon: icon, zIndexOffset: 180 });
  marker.on('click', function() { openUserReviewDetail(review.id); });
  marker.addTo(leafletMap);
  return marker;
}

function renderUserReviewMarkers() {
  if (!leafletMap) return;
  if (mapFocusMode) return;
  var reviews = loadUserReviews();
  reviews.forEach(function(review) {
    var already = userReviewMarkers.find(function(m) { return m.reviewId === review.id; });
    if (!already) addUserReviewMarker(review);
  });
}

function showUserReviewOnMap(reviewId) {
  var reviews = loadUserReviews();
  var review  = reviews.find(function(r) { return r.id === reviewId; });
  if (!review || !leafletMap) return;
  leafletMap.flyTo(review.centroid, 12, { animate: true, duration: 1.2 });
  setTimeout(function() { openUserReviewDetail(reviewId); }, 1000);
}

// ── User Review Detail Sheet ──────────────────────────────────────────────────
function openUserReviewDetail(reviewId) {
  var reviews = loadUserReviews();
  var review  = reviews.find(function(r) { return r.id === reviewId; });
  if (!review) return;
  var isKo    = currentLang === 'ko';
  var stars   = [1,2,3,4,5].map(function(n) {
    return '<span style="color:' + (n <= review.rating ? '#f59e0b' : '#d1d5db') + '">★</span>';
  }).join('');
  var durLabel = isKo ? review.durationKo : review.durationEn;
  var dateStr  = new Date(review.createdAt).toLocaleDateString(isKo ? 'ko-KR' : 'en-US', { year:'numeric', month:'short', day:'numeric' });

  // Build route section — diff view if route changed, plain view otherwise
  var routeHtml = '';
  if (review.routeChanged && review.plannedRoute && review.actualRoute) {
    // Build a set of actual stop names for quick lookup
    var actualNames = {};
    review.actualRoute.forEach(function(d) {
      d.stops.forEach(function(s) { actualNames[(isKo ? s.nameKo : s.nameEn)] = true; });
    });
    // Build a set of planned stop names per day
    var plannedByDay = {};
    review.plannedRoute.forEach(function(d) {
      d.stops.forEach(function(s) {
        plannedByDay[(isKo ? s.nameKo : s.nameEn)] = d.dayIndex;
      });
    });

    // Planned route with strikethrough on skipped
    var plannedRows = review.plannedRoute.map(function(d) {
      if (d.stops.length === 0) return '';
      var color    = REVIEW_DAY_COLORS[d.dayIndex % REVIEW_DAY_COLORS.length];
      var dayLabel = isKo ? (d.dayIndex+1)+'일차' : 'Day '+(d.dayIndex+1);
      var rows = d.stops.map(function(s) {
        var name     = isKo ? s.nameKo : s.nameEn;
        var visited  = actualNames[name];
        return '<li class="urd-stop' + (visited ? '' : ' skipped') + '">'
          + '<span class="urd-stop-dot" style="background:' + color + '"></span>'
          + '<span class="urd-stop-name">' + name + '</span>'
          + (visited ? '' : '<span class="urd-skipped-badge">' + (isKo?'건너뜀':'skipped') + '</span>')
        + '</li>';
      }).join('');
      return '<div class="urd-day-group">'
        + '<span class="urd-day-label" style="color:'+color+'">'+dayLabel+'</span>'
        + '<ul class="urd-stop-list">'+rows+'</ul>'
      + '</div>';
    }).join('');

    // Extra stops added on the trip (not in plan)
    var extraStops = [];
    review.actualRoute.forEach(function(d) {
      if (d.dayIndex === -1) extraStops = d.stops;
    });
    var extraHtml = '';
    if (extraStops.length > 0) {
      extraHtml = '<div class="urd-extra-group">'
        + '<span class="urd-extra-label">＋ ' + (isKo?'추가 방문':'Extra stops') + '</span>'
        + '<ul class="urd-stop-list">'
        + extraStops.map(function(s) {
            return '<li class="urd-stop extra">'
              + '<span class="urd-stop-dot" style="background:#10b981"></span>'
              + '<span class="urd-stop-name">' + (isKo ? s.nameKo : s.nameEn) + '</span>'
            + '</li>';
          }).join('')
        + '</ul>'
      + '</div>';
    }

    // Change reason pills
    var reasonPills = '';
    if (review.changeReasonsData && review.changeReasonsData.length > 0) {
      reasonPills = '<div class="urd-reasons-row">'
        + '<span class="urd-reasons-label">' + (isKo?'변경 이유':'Route changed because') + '</span>'
        + '<div class="urd-reason-pills">'
        + review.changeReasonsData.map(function(r) {
            return '<span class="urd-reason-pill">' + r.icon + ' ' + (isKo ? r.ko : r.en) + '</span>';
          }).join('')
        + '</div>'
      + '</div>';
    }

    routeHtml = '<div class="urd-route-section">'
      + '<div class="urd-route-header">'
        + '<h4 class="urd-route-title">' + (isKo?'계획 루트':'Planned Route') + '</h4>'
        + '<span class="urd-changed-indicator">🔄 ' + (isKo?'루트 변경':'Route Changed') + '</span>'
      + '</div>'
      + plannedRows
      + extraHtml
      + reasonPills
    + '</div>';
  } else {
    // Simple stop list from plan snapshot
    var stopList = (review.planSnapshot || { days: [] }).days.map(function(day, di) {
      var color    = REVIEW_DAY_COLORS[di % REVIEW_DAY_COLORS.length];
      var dayLabel = isKo ? (di+1)+'일차' : 'Day '+(di+1);
      var rows     = day.stops.map(function(s) {
        return '<li class="urd-stop">'
          + '<span class="urd-stop-dot" style="background:'+color+'"></span>'
          + '<span class="urd-stop-name">' + (isKo ? s.nameKo : s.nameEn) + '</span>'
        + '</li>';
      }).join('');
      return '<div class="urd-day-group">'
        + '<span class="urd-day-label" style="color:'+color+'">'+dayLabel+'</span>'
        + '<ul class="urd-stop-list">'+rows+'</ul>'
      + '</div>';
    }).join('');
    routeHtml = '<div class="urd-route-section">'
      + '<h4 class="urd-route-title">' + (isKo?'여행 루트':'Trip Route') + '</h4>'
      + stopList
    + '</div>';
  }

  var html =
    '<div class="detail-type-row">'
      + '<span class="detail-type-badge" style="background:#fef3c7;color:#92400e;border:1px solid #fde68a">✈️ ' + (isKo?'여행 리뷰':'Trip Review') + '</span>'
      + (review.routeChanged ? '<span class="detail-type-badge" style="background:#fff7ed;color:#c2410c;border:1px solid #fed7aa;margin-left:6px">🔄 ' + (isKo?'루트 변경':'Route Changed') + '</span>' : '')
    + '</div>'
    + '<div class="urd-header">'
      + '<div class="urd-avatar">✈️</div>'
      + '<div>'
        + '<div class="sheet-title" style="margin-bottom:4px">' + review.reviewerName + '</div>'
        + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
          + '<span style="font-size:1rem">' + stars + '</span>'
          + '<span class="urd-dur-badge">' + durLabel + '</span>'
        + '</div>'
        + '<div class="urd-meta">' + dateStr + ' · '
          + (isKo ? review.totalDays+'일 · '+review.totalStops+'곳' : review.totalDays+' days · '+review.totalStops+' stops')
        + '</div>'
      + '</div>'
    + '</div>'
    + '<p class="sheet-desc" style="font-style:italic">&ldquo;' + review.text + '&rdquo;</p>'
    + routeHtml
    + '<div class="sheet-actions">'
      + '<button class="btn-primary" onclick="closeSheet();showUserReviewOnMap(\'' + review.id + '\')">'
        + '🗺️ ' + (isKo?'지도에서 보기':'View on Map')
      + '</button>'
      + '<button class="btn-outline" onclick="deleteUserReview(\'' + review.id + '\')">'
        + '🗑️ ' + (isKo?'삭제':'Delete')
      + '</button>'
    + '</div>';

  openDetail('✈️', 'linear-gradient(135deg,#064e3b,#065f46,#059669)', html);
}

function deleteUserReview(reviewId) {
  var isKo    = currentLang === 'ko';
  var reviews = loadUserReviews().filter(function(r) { return r.id !== reviewId; });
  saveUserReviews(reviews);
  // Remove marker from map
  userReviewMarkers = userReviewMarkers.filter(function(m) {
    if (m.reviewId === reviewId) { m.marker.remove(); return false; }
    return true;
  });
  closeSheet();
  showToast(isKo ? '🗑️ 리뷰가 삭제되었습니다' : '🗑️ Review deleted');
}

// ── Quiz Bank ─────────────────────────────────────────────────────────────────
// Each question: { qEn, qKo, opts:[{en,ko},...], correct:0-3, factEn, factKo }
var QUIZ_BANK = {
  loc_0: [
    { qEn:'Which dynasty built Gyeongbokgung Palace?', qKo:'경복궁을 건립한 왕조는?',
      opts:[{en:'Goryeo',ko:'고려'},{en:'Joseon',ko:'조선'},{en:'Silla',ko:'신라'},{en:'Baekje',ko:'백제'}],
      correct:1, factEn:'Gyeongbokgung was completed in 1395, just after the Joseon Dynasty was founded!', factKo:'경복궁은 1395년 조선 건국 직후 완성되었습니다!' },
    { qEn:'Wearing a hanbok at Gyeongbokgung gets you…?', qKo:'경복궁에서 한복을 입으면?',
      opts:[{en:'A souvenir',ko:'기념품 증정'},{en:'Free entry',ko:'무료 입장'},{en:'VIP guided tour',ko:'VIP 투어'},{en:'Free lunch',ko:'무료 점심'}],
      correct:1, factEn:'Wear hanbok and enter for free — rental shops surround the palace gates!', factKo:'한복 착용 시 무료 입장! 궁궐 주변에 한복 대여점이 즐비합니다!' },
    { qEn:'How many royal guard ceremonies happen daily?', qKo:'수문장 교대식은 하루 몇 번?',
      opts:[{en:'Once',ko:'1번'},{en:'Twice',ko:'2번'},{en:'Four times',ko:'4번'},{en:'Six times',ko:'6번'}],
      correct:1, factEn:'The ceremony runs at 10 AM and 2 PM — and it\'s completely free to watch!', factKo:'오전 10시, 오후 2시 하루 두 번 진행되며 관람은 무료입니다!' },
    { qEn:'What does the name "Gyeongbokgung" mean?', qKo:'\'경복궁(景福宮)\'의 뜻은?',
      opts:[{en:'Palace of Great Peace',ko:'크게 평화로운 궁'},{en:'Palace of Great Blessings',ko:'크게 복 받은 궁'},{en:'Palace of Morning Calm',ko:'아침의 고요한 궁'},{en:'Palace of Rising Sun',ko:'떠오르는 태양의 궁'}],
      correct:1, factEn:'"Gyeongbok" (景福) means "Great Blessings" — a name taken from a classic Chinese poem!', factKo:'경복(景福)은 \'큰 복\'을 의미 — 중국 고전 시에서 따온 이름입니다!' },
    { qEn:'How many gates does Gyeongbokgung Palace have?', qKo:'경복궁의 출입문(대문)은 몇 개인가요?',
      opts:[{en:'2',ko:'2개'},{en:'4',ko:'4개'},{en:'6',ko:'6개'},{en:'8',ko:'8개'}],
      correct:1, factEn:'Gyeongbokgung has four main gates — the most famous being Gwanghwamun (the South Gate)!', factKo:'경복궁에는 4개의 대문이 있으며, 가장 유명한 것은 남쪽의 광화문입니다!' },
  ],
  loc_1: [
    { qEn:'What type of traditional house fills Bukchon Village?', qKo:'북촌을 가득 채운 전통 가옥은?',
      opts:[{en:'Wooju',ko:'우주'},{en:'Hanok',ko:'한옥'},{en:'Yangok',ko:'양옥'},{en:'Yeongok',ko:'영옥'}],
      correct:1, factEn:'Hanok are traditional Korean wooden houses — Bukchon has over 900 of them!', factKo:'한옥은 한국 전통 목조 가옥 — 북촌에는 900채 이상이 남아 있습니다!' },
    { qEn:'Bukchon sits between which two palaces?', qKo:'북촌은 어느 두 궁궐 사이에 위치하나요?',
      opts:[{en:'Deoksu & Gyeongbok',ko:'덕수궁 & 경복궁'},{en:'Changdeok & Gyeongbok',ko:'창덕궁 & 경복궁'},{en:'Changgyeong & Deoksu',ko:'창경궁 & 덕수궁'},{en:'Unhyeon & Changdeok',ko:'운현궁 & 창덕궁'}],
      correct:1, factEn:'Bukchon (\'North Village\') nestles between Changdeokgung and Gyeongbokgung!', factKo:'북촌(北村)은 창덕궁과 경복궁 사이에 자리한 \'북쪽 마을\'입니다!' },
    { qEn:'What must visitors be mindful of in Bukchon?', qKo:'북촌 방문 시 특히 주의할 점은?',
      opts:[{en:'No cameras allowed',ko:'카메라 금지'},{en:'Quiet please — residents live here',ko:'소음 주의 — 주민 거주'},{en:'Dress code enforced',ko:'복장 규정'},{en:'No street food',ko:'노점 음식 반입 금지'}],
      correct:1, factEn:'Real families live in these hanoks — keep quiet and show respect!', factKo:'주민들이 실거주 중입니다 — 조용히 배려해 주세요!' },
    { qEn:'In which district of Seoul is Bukchon Hanok Village located?', qKo:'북촌한옥마을이 위치한 서울 구는?',
      opts:[{en:'Gangnam-gu',ko:'강남구'},{en:'Jongno-gu',ko:'종로구'},{en:'Mapo-gu',ko:'마포구'},{en:'Jung-gu',ko:'중구'}],
      correct:1, factEn:'Bukchon is in Jongno-gu, nestled between two great palaces in the very heart of Seoul!', factKo:'북촌은 두 궁궐 사이 서울 한복판인 종로구에 위치합니다!' },
    { qEn:'Bukchon was historically home to which social class?', qKo:'북촌은 역사적으로 어떤 계층의 주거지였나요?',
      opts:[{en:'Merchants',ko:'상인'},{en:'Joseon aristocrats (Yangban)',ko:'조선 양반'},{en:'Buddhist monks',ko:'승려'},{en:'Military officers only',ko:'무관'}],
      correct:1, factEn:'Bukchon was home to high-ranking Joseon officials and aristocrats (양반) — the most elite class!', factKo:'북촌은 고위 관료와 양반들의 주거지 — 조선 최상류층이 살던 마을입니다!' },
  ],
  loc_2: [
    { qEn:'How tall is N Seoul Tower above sea level?', qKo:'N서울타워의 해발 높이는?',
      opts:[{en:'299 m',ko:'299m'},{en:'479 m',ko:'479m'},{en:'555 m',ko:'555m'},{en:'632 m',ko:'632m'}],
      correct:1, factEn:'N Seoul Tower sits at 479 m above sea level on top of Namsan Mountain!', factKo:'N서울타워는 남산 정상 해발 479m에 우뚝 서 있습니다!' },
    { qEn:'What do couples famously hang on N Seoul Tower fences?', qKo:'연인들이 N서울타워 난간에 걸어 놓는 것은?',
      opts:[{en:'Ribbons',ko:'리본'},{en:'Love locks',ko:'자물쇠(러브락)'},{en:'Photo frames',ko:'사진 액자'},{en:'Name tags',ko:'이름표'}],
      correct:1, factEn:'Thousands of colorful love locks cover the fence — a beloved couple tradition!', factKo:'수천 개의 알록달록한 자물쇠가 달린 러브락은 연인들의 필수 코스!' },
    { qEn:'Which mountain does N Seoul Tower stand on?', qKo:'N서울타워가 위치한 산은?',
      opts:[{en:'Bukhansan',ko:'북한산'},{en:'Achasan',ko:'아차산'},{en:'Namsan',ko:'남산'},{en:'Dobongsan',ko:'도봉산'}],
      correct:2, factEn:'Namsan (남산) is Seoul\'s beloved 262 m central mountain!', factKo:'남산(262m)은 서울 한복판에 위치한 시민들의 사랑받는 산입니다!' },
    { qEn:'How can visitors reach N Seoul Tower from the base of Namsan?', qKo:'남산 아래에서 N서울타워까지 가는 방법은?',
      opts:[{en:'Helicopter only',ko:'헬기만 가능'},{en:'Cable car or hiking trail',ko:'케이블카 또는 등산로'},{en:'Subway directly',ko:'지하철 직행'},{en:'Boat',ko:'배'}],
      correct:1, factEn:'Take the scenic Namsan Cable Car or walk up beautiful hiking trails to reach the tower!', factKo:'남산 케이블카를 타거나 산책로를 걸어 올라갈 수 있습니다!' },
    { qEn:'N Seoul Tower first opened to the public in which decade?', qKo:'N서울타워가 처음 일반 공개된 것은 몇 년대인가요?',
      opts:[{en:'1950s',ko:'1950년대'},{en:'1960s',ko:'1960년대'},{en:'1970s',ko:'1970년대'},{en:'1990s',ko:'1990년대'}],
      correct:2, factEn:'N Seoul Tower opened to the public in 1975 — making it over 50 years old!', factKo:'N서울타워는 1975년 일반에 공개되었습니다 — 50년이 넘은 서울의 명소입니다!' },
  ],
  loc_3: [
    { qEn:'Insadong is best known for what kind of shopping?', qKo:'인사동은 무엇으로 유명한가요?',
      opts:[{en:'Electronics',ko:'전자제품'},{en:'Traditional crafts & antiques',ko:'전통 공예품 & 골동품'},{en:'Fashion & clothing',ko:'패션 & 의류'},{en:'Supermarkets',ko:'슈퍼마켓'}],
      correct:1, factEn:'Insadong is Seoul\'s street for hanji paper, celadon pottery, and handmade crafts!', factKo:'인사동은 한지, 청자, 수공예품 쇼핑의 메카입니다!' },
    { qEn:'Which famous arts courtyard is tucked inside Insadong?', qKo:'인사동 안에 있는 유명한 복합문화공간은?',
      opts:[{en:'Lotte World',ko:'롯데월드'},{en:'Ssamziegil',ko:'쌈지길'},{en:'COEX Mall',ko:'코엑스몰'},{en:'Techno Mart',ko:'테크노마트'}],
      correct:1, factEn:'Ssamziegil is a spiral courtyard bursting with indie shops and street food!', factKo:'쌈지길은 나선형 안뜰로 이루어진 개성 넘치는 복합문화공간입니다!' },
    { qEn:'Insadong is famous for its traditional Korean paper. What is it called?', qKo:'인사동에서 유명한 한국 전통 종이의 이름은?',
      opts:[{en:'Washi',ko:'와시'},{en:'Hanji',ko:'한지'},{en:'Soji',ko:'소지'},{en:'Moji',ko:'모지'}],
      correct:1, factEn:'Hanji (한지) is handmade Korean paper — incredibly durable and beautiful, a proud Insadong specialty!', factKo:'한지(韓紙)는 수공 한국 전통 종이 — 질기고 아름다운 인사동의 대표 특산품입니다!' },
    { qEn:'What does "Insa" in Insadong historically refer to?', qKo:'인사동(仁寺洞)의 \'인사\'는 역사적으로 무엇을 의미하나요?',
      opts:[{en:'A river crossing',ko:'강 나루터'},{en:'Government office district',ko:'관청 지역'},{en:'A mountain pass',ko:'산 고개'},{en:'A royal garden',ko:'왕실 정원'}],
      correct:1, factEn:'"Insa" refers to the Joseon-era government offices that once occupied this area of central Seoul!', factKo:'인사동의 \'인사\'는 조선 시대 관청(인의전)이 있었던 데서 유래한 이름입니다!' },
    { qEn:'Insadong is easily reachable from Gyeongbokgung Palace. How far is it approximately?', qKo:'인사동에서 경복궁까지의 거리는 대략?',
      opts:[{en:'Walking distance (under 15 min)',ko:'도보 거리 (15분 이내)'},{en:'1 hour by bus',ko:'버스로 1시간'},{en:'30 minutes by subway',ko:'지하철 30분'},{en:'Only accessible by taxi',ko:'택시만 가능'}],
      correct:0, factEn:'Insadong and Gyeongbokgung are just a short walk apart — explore both in one afternoon!', factKo:'인사동과 경복궁은 도보로 이동 가능한 거리 — 오후 한 나절에 함께 즐길 수 있습니다!' },
  ],
  loc_5: [
    { qEn:'What is Changdeokgung\'s secret garden called?', qKo:'창덕궁의 비밀 정원 이름은?',
      opts:[{en:'Biwon',ko:'비원'},{en:'Namwon',ko:'남원'},{en:'Dongwon',ko:'동원'},{en:'Suwon',ko:'수원'}],
      correct:0, factEn:'Biwon (비원, "Secret Garden") — a breathtaking 78-acre garden of ponds and pavilions!', factKo:'비원(秘苑)은 \'비밀 정원\'이라는 뜻 — 연못과 정자로 가득한 아름다운 후원입니다!' },
    { qEn:'Since when has Changdeokgung been a UNESCO World Heritage Site?', qKo:'창덕궁이 유네스코 세계문화유산에 등재된 해는?',
      opts:[{en:'1987',ko:'1987년'},{en:'1997',ko:'1997년'},{en:'2005',ko:'2005년'},{en:'2010',ko:'2010년'}],
      correct:1, factEn:'Changdeokgung has been a UNESCO World Heritage Site since 1997!', factKo:'창덕궁은 1997년 유네스코 세계문화유산에 등재되었습니다!' },
    { qEn:'Which king ordered Changdeokgung to be built?', qKo:'창덕궁을 건립을 명한 왕은?',
      opts:[{en:'King Sejong',ko:'세종대왕'},{en:'King Taejong',ko:'태종'},{en:'King Sejo',ko:'세조'},{en:'King Gojong',ko:'고종'}],
      correct:1, factEn:'King Taejong built Changdeokgung in 1405 as a secondary palace!', factKo:'태종이 1405년 이궁으로 창건했습니다!' },
    { qEn:'What percentage of Changdeokgung\'s total area is the Secret Garden?', qKo:'창덕궁 전체 면적에서 비원이 차지하는 비율은?',
      opts:[{en:'About 10%',ko:'약 10%'},{en:'About 30%',ko:'약 30%'},{en:'About 60%',ko:'약 60%'},{en:'About 90%',ko:'약 90%'}],
      correct:2, factEn:'Biwon covers about 60% of Changdeokgung\'s area — 78 acres of stunning ponds and pavilions!', factKo:'비원은 창덕궁 전체 면적의 약 60% — 78에이커에 달하는 연못과 정자의 공간입니다!' },
    { qEn:'Which war caused the most extensive damage to Changdeokgung historically?', qKo:'창덕궁에 역사적으로 가장 큰 피해를 입힌 전쟁은?',
      opts:[{en:'Mongol invasion (13th century)',ko:'몽골 침략 (13세기)'},{en:'Imjin War — Japanese invasion (1592)',ko:'임진왜란 (1592년)'},{en:'Korean War (1950)',ko:'한국전쟁 (1950년)'},{en:'Manchu invasion (1636)',ko:'병자호란 (1636년)'}],
      correct:1, factEn:'Changdeokgung was burned during the Imjin War (1592-1598) and later brilliantly rebuilt!', factKo:'임진왜란(1592~1598) 때 소실되었다가 이후 아름답게 재건되었습니다!' },
  ],
  loc_7: [
    { qEn:'Which K-drama made Nami Island internationally famous?', qKo:'남이섬을 세계적으로 유명하게 만든 드라마는?',
      opts:[{en:'Squid Game',ko:'오징어 게임'},{en:'Winter Sonata',ko:'겨울연가'},{en:'Crash Landing on You',ko:'사랑의 불시착'},{en:'Goblin',ko:'도깨비'}],
      correct:1, factEn:'Winter Sonata (겨울연가, 2002) turned Nami Island into a K-drama pilgrimage!', factKo:'2002년 드라마 \'겨울연가\'로 남이섬은 한류 성지가 되었습니다!' },
    { qEn:'How do visitors reach Nami Island?', qKo:'남이섬에 가는 방법은?',
      opts:[{en:'By bridge',ko:'다리로'},{en:'By ferry',ko:'페리(배)로'},{en:'By cable car',ko:'케이블카로'},{en:'Through a tunnel',ko:'터널을 통해'}],
      correct:1, factEn:'A scenic 5-minute ferry ride across the Bukhan River takes you there!', factKo:'북한강을 건너는 5분짜리 페리를 타면 섬에 도착합니다!' },
    { qEn:'Nami Island has scenic tree-lined paths — which trees are NOT there?', qKo:'남이섬에 없는 나무 길은?',
      opts:[{en:'Cherry blossoms',ko:'벚나무'},{en:'Pine trees',ko:'소나무'},{en:'Ginkgo trees',ko:'은행나무'},{en:'Cactus trees',ko:'선인장'}],
      correct:3, factEn:'Nami Island has all three — cherry, pine, and ginkgo tree tunnels! No cactus!', factKo:'남이섬에는 벚꽃길, 소나무길, 은행나무길이 모두 있지만 선인장은 없습니다!' },
    { qEn:'Nami Island officially calls itself a micronation. What is its name?', qKo:'남이섬이 공식적으로 자처하는 소국의 이름은?',
      opts:[{en:'Republic of Nami',ko:'나미 공화국'},{en:'Naminara Republic',ko:'나미나라 공화국'},{en:'Kingdom of Nami',ko:'나미 왕국'},{en:'Free State of Nami',ko:'나미 자유국'}],
      correct:1, factEn:'Nami Island declared itself the "Naminara Republic" — it even issues its own passports!', factKo:'남이섬은 \'나미나라 공화국\'을 선포하여 독자적인 여권도 발급합니다!' },
    { qEn:'What is the approximate size of Nami Island?', qKo:'남이섬의 넓이는 약 얼마인가요?',
      opts:[{en:'0.46 km²',ko:'0.46 km²'},{en:'4.6 km²',ko:'4.6 km²'},{en:'46 km²',ko:'46 km²'},{en:'460 km²',ko:'460 km²'}],
      correct:0, factEn:'Nami Island covers just 0.46 km² (46 hectares) — small but incredibly scenic and beloved!', factKo:'남이섬은 약 0.46 km²(46만 m²) — 아담하지만 아름다운 명소입니다!' },
  ],
  loc_9: [
    { qEn:'Seoraksan\'s highest peak Daecheongbong stands at…?', qKo:'설악산 최고봉 대청봉의 높이는?',
      opts:[{en:'1,358 m',ko:'1,358m'},{en:'1,708 m',ko:'1,708m'},{en:'1,950 m',ko:'1,950m'},{en:'2,100 m',ko:'2,100m'}],
      correct:1, factEn:'Daecheongbong at 1,708 m is the third-highest peak in South Korea!', factKo:'대청봉(1,708m)은 대한민국에서 세 번째로 높은 봉우리입니다!' },
    { qEn:'What\'s the quickest way to get panoramic views at Seoraksan?', qKo:'설악산에서 빠르게 전망을 즐기는 방법은?',
      opts:[{en:'Boat tour',ko:'보트 투어'},{en:'Cable car to Gwongeumseong',ko:'권금성 케이블카'},{en:'Train ride',ko:'기차 탑승'},{en:'Jeep safari',ko:'지프 사파리'}],
      correct:1, factEn:'The cable car to Gwongeumseong Fortress takes just 5 minutes for stunning views!', factKo:'권금성 케이블카로 단 5분이면 설악산 전경을 감상할 수 있습니다!' },
    { qEn:'Seoraksan became a UNESCO Biosphere Reserve in which year?', qKo:'설악산이 유네스코 생물권 보전 지역으로 지정된 해는?',
      opts:[{en:'1970',ko:'1970년'},{en:'1982',ko:'1982년'},{en:'1995',ko:'1995년'},{en:'2007',ko:'2007년'}],
      correct:1, factEn:'Seoraksan became a UNESCO Biosphere Reserve in 1982 — 12 years after becoming a National Park!', factKo:'설악산은 1982년 유네스코 생물권 보전 지역으로 지정되었습니다!' },
    { qEn:'What famous rock formation is Seoraksan most iconic for?', qKo:'설악산의 가장 유명한 암석 명소는?',
      opts:[{en:'Ulsan Bawi (giant granite boulder cluster)',ko:'울산바위 (거대 화강암 바위군)'},{en:'Blue Ridge Cliff',ko:'파란 능선 절벽'},{en:'Diamond Rock',ko:'다이아몬드 바위'},{en:'Red Canyon',ko:'붉은 협곡'}],
      correct:0, factEn:'Ulsan Bawi — six massive connected granite boulders — is Seoraksan\'s most iconic landmark!', factKo:'울산바위는 여섯 개의 거대한 화강암이 연결된 설악산 최고의 명물입니다!' },
    { qEn:'Seoraksan National Park is near which coastal city?', qKo:'설악산 국립공원과 인접한 해안 도시는?',
      opts:[{en:'Pohang',ko:'포항'},{en:'Busan',ko:'부산'},{en:'Sokcho',ko:'속초'},{en:'Gangneung',ko:'강릉'}],
      correct:2, factEn:'Sokcho is the gateway city to Seoraksan — just 10 km from the park entrance!', factKo:'속초는 설악산 관문 도시 — 공원 입구에서 불과 10km 거리입니다!' },
  ],
  loc_19: [
    { qEn:'What is Suncheonman Wetlands most famous for?', qKo:'순천만 습지가 가장 유명한 것은?',
      opts:[{en:'Hot springs',ko:'온천'},{en:'Migratory birds & reed beds',ko:'철새와 갈대밭'},{en:'Deep sea fishing',ko:'심해 낚시'},{en:'Ancient temples',ko:'고대 사찰'}],
      correct:1, factEn:'Over 100,000 migratory birds visit the wetlands — including the rare black-faced spoonbill!', factKo:'10만 마리 이상의 철새가 찾아오며, 희귀종 흑두루미도 옵니다!' },
    { qEn:'What is the best season to see Suncheonman\'s reed beds at their peak?', qKo:'순천만 갈대밭이 가장 아름다운 계절은?',
      opts:[{en:'Spring',ko:'봄'},{en:'Summer',ko:'여름'},{en:'Autumn',ko:'가을'},{en:'Winter',ko:'겨울'}],
      correct:2, factEn:'Autumn (October–November) turns the vast reed fields into a golden sea!', factKo:'10~11월 가을철 갈대밭이 황금빛으로 물들어 장관을 이룹니다!' },
    { qEn:'Suncheon Bay Wetlands hold which UNESCO designation?', qKo:'순천만 습지가 보유한 유네스코 지정은?',
      opts:[{en:'World Heritage Site',ko:'세계문화유산'},{en:'Biosphere Reserve',ko:'생물권 보전 지역'},{en:'Creative City',ko:'창의 도시'},{en:'Memory of the World',ko:'세계기록유산'}],
      correct:1, factEn:'Suncheon Bay is a UNESCO Biosphere Reserve — one of the world\'s best-preserved coastal wetlands!', factKo:'순천만은 유네스코 생물권 보전 지역 — 세계 최고 수준의 연안 습지입니다!' },
    { qEn:'What path lets visitors explore Suncheon Bay without disturbing wildlife?', qKo:'순천만 생태계를 훼손하지 않고 탐방할 수 있는 탐방로는?',
      opts:[{en:'Underground tunnel',ko:'지하 터널'},{en:'Elevated wooden boardwalk',ko:'고가 목재 데크 산책로'},{en:'Floating pontoon bridge',ko:'부잔교'},{en:'Drone tour',ko:'드론 투어'}],
      correct:1, factEn:'An elevated wooden boardwalk lets visitors glide through the reed beds without disturbing wildlife!', factKo:'고가 목재 데크 산책로를 통해 생태계를 방해하지 않고 갈대밭 속을 걸을 수 있습니다!' },
    { qEn:'Suncheon Bay is located in which Korean province?', qKo:'순천만이 위치한 도는?',
      opts:[{en:'Gangwon',ko:'강원도'},{en:'North Chungcheong',ko:'충청북도'},{en:'South Jeolla',ko:'전라남도'},{en:'North Gyeongsang',ko:'경상북도'}],
      correct:2, factEn:'Suncheon Bay is in South Jeolla Province (전라남도) on Korea\'s beautiful southern coast!', factKo:'순천만은 한국 남해안의 아름다운 전라남도에 위치합니다!' },
  ],
  loc_20: [
    { qEn:'What percentage of Korea\'s green tea does Boseong produce?', qKo:'보성이 생산하는 한국 녹차 비율은?',
      opts:[{en:'About 10%',ko:'약 10%'},{en:'About 40%',ko:'약 40%'},{en:'About 70%',ko:'약 70%'},{en:'About 90%',ko:'약 90%'}],
      correct:1, factEn:'Boseong produces ~40% of all Korean green tea — the undisputed tea capital!', factKo:'보성은 전국 녹차의 약 40%를 생산하는 한국의 녹차 수도입니다!' },
    { qEn:'What\'s the must-try treat at Boseong tea fields?', qKo:'보성 녹차밭에서 꼭 먹어봐야 할 것은?',
      opts:[{en:'Matcha ice cream',ko:'말차 아이스크림'},{en:'Kimchi donuts',ko:'김치 도넛'},{en:'Seaweed candy',ko:'해조류 사탕'},{en:'Barley tea cake',ko:'보리차 케이크'}],
      correct:0, factEn:'Matcha soft serve ice cream is Boseong\'s signature treat — creamy, earthy, and perfect!', factKo:'말차 소프트 아이스크림은 보성의 대표 먹거리 — 진하고 고소합니다!' },
    { qEn:'When do the tea fields look their most vivid green?', qKo:'보성 녹차밭이 가장 선명한 초록빛을 띠는 시기는?',
      opts:[{en:'January',ko:'1월'},{en:'May',ko:'5월'},{en:'August',ko:'8월'},{en:'November',ko:'11월'}],
      correct:1, factEn:'May brings the first harvest and the most brilliant, vivid green hues!', factKo:'5월은 첫 번째 수확기이자 가장 선명한 초록빛을 자랑하는 시기입니다!' },
    { qEn:'Which famous tea plantation in Boseong is open to the public?', qKo:'보성에서 일반 관광객에게 개방된 유명 차밭은?',
      opts:[{en:'Osulloc Farm',ko:'오설록 농장'},{en:'Daehan Dawon (대한다원)',ko:'대한다원'},{en:'Hadong Green Fields',ko:'하동 녹차밭'},{en:'Jiri Tea Garden',ko:'지리 차원'}],
      correct:1, factEn:'Daehan Dawon (대한다원) is Boseong\'s most iconic and photogenic tea plantation — a must-visit!', factKo:'대한다원은 보성에서 가장 아름답고 유명한 차밭 — 꼭 방문해야 할 명소입니다!' },
    { qEn:'Boseong tea fields are also illuminated for which evening experience?', qKo:'보성 녹차밭의 특별한 야간 체험은?',
      opts:[{en:'Stargazing tours',ko:'별 관측 투어'},{en:'Night illumination of the tea rows',ko:'녹차밭 야간 조명 행사'},{en:'Bonfire festivals',ko:'모닥불 축제'},{en:'Drone light show',ko:'드론 라이트쇼'}],
      correct:1, factEn:'Boseong tea fields are beautifully illuminated at night — the glowing green rows are magical!', factKo:'보성 녹차밭은 야간에도 아름답게 조명되어 환상적인 밤 풍경을 연출합니다!' },
  ],
  loc_21: [
    { qEn:'Jeonju is the birthplace of which iconic Korean dish?', qKo:'전주가 발상지인 유명 한식은?',
      opts:[{en:'Bulgogi',ko:'불고기'},{en:'Bibimbap',ko:'비빔밥'},{en:'Tteokbokki',ko:'떡볶이'},{en:'Samgyeopsal',ko:'삼겹살'}],
      correct:1, factEn:'Jeonju bibimbap (전주비빔밥) is the gold standard — rice, veggies, egg, and gochujang in one bowl!', factKo:'전주비빔밥은 비빔밥의 원조! 밥, 나물, 달걀, 고추장이 한 그릇에!' },
    { qEn:'How many traditional hanok houses are preserved in Jeonju?', qKo:'전주 한옥마을에 보존된 한옥 수는?',
      opts:[{en:'About 200',ko:'약 200채'},{en:'About 400',ko:'약 400채'},{en:'About 800',ko:'약 800채'},{en:'Over 2,000',ko:'2,000채 이상'}],
      correct:2, factEn:'Over 800 hanok houses — the largest preserved cluster anywhere in Korea!', factKo:'800여 채 이상의 한옥이 보존된 국내 최대 한옥 군락지입니다!' },
    { qEn:'What special overnight experience can you try in Jeonju?', qKo:'전주에서 할 수 있는 특별한 숙박 체험은?',
      opts:[{en:'Temple stay',ko:'사찰 체험'},{en:'Hanok guesthouse stay',ko:'한옥 게스트하우스 숙박'},{en:'Palace overnight',ko:'궁궐 숙박'},{en:'Cave camping',ko:'동굴 캠핑'}],
      correct:1, factEn:'Sleep inside a real hanok guesthouse — many have been beautifully restored!', factKo:'실제 한옥 게스트하우스에서 하룻밤을 보낼 수 있습니다!' },
    { qEn:'Jeonju is also famous for its traditional grain alcohol. What is it?', qKo:'전주에서 유명한 전통 곡주는?',
      opts:[{en:'Soju',ko:'소주'},{en:'Makgeolli',ko:'막걸리'},{en:'Baekseju',ko:'백세주'},{en:'Dongdongju',ko:'동동주'}],
      correct:1, factEn:'Jeonju makgeolli (막걸리) is served free with complimentary bar snacks — a beloved local tradition!', factKo:'전주 막걸리는 무료 안주와 함께 제공되는 전통 — 전주 여행의 필수 경험입니다!' },
    { qEn:'What major international event is held in Jeonju every May?', qKo:'전주에서 매년 5월 열리는 유명 국제 행사는?',
      opts:[{en:'Jeonju International Film Festival',ko:'전주국제영화제'},{en:'Jeonju Marathon',ko:'전주 마라톤'},{en:'Jeonju Food Expo',ko:'전주 음식 박람회'},{en:'Jeonju K-pop Concert',ko:'전주 K팝 콘서트'}],
      correct:0, factEn:'The Jeonju International Film Festival (전주국제영화제) draws thousands of film lovers every May!', factKo:'전주국제영화제는 매년 5월 수많은 영화 팬을 끌어 모으는 국제 영화 축제입니다!' },
  ],
  loc_24: [
    { qEn:'What nickname did Gamcheon Village earn for its hillside homes?', qKo:'감천문화마을이 얻은 별명은?',
      opts:[{en:'Korea\'s Santorini',ko:'한국의 산토리니'},{en:'Machu Picchu of Busan',ko:'부산의 마추픽추'},{en:'Asia\'s Rainbow Village',ko:'아시아의 무지개 마을'},{en:'Busan\'s Montmartre',ko:'부산의 몽마르트르'}],
      correct:1, factEn:'Colorful stacked homes clinging to the hillside earned it the "Machu Picchu of Busan" nickname!', factKo:'언덕을 가득 채운 알록달록한 집들이 \'부산의 마추픽추\'라는 별명을 만들었습니다!' },
    { qEn:'Gamcheon was originally built as shelter for refugees from what?', qKo:'감천마을이 피란민을 위해 조성된 계기는?',
      opts:[{en:'The 1950 Korean War',ko:'1950년 한국전쟁'},{en:'1945 Liberation',ko:'1945년 광복'},{en:'A 1970s typhoon',ko:'1970년대 태풍'},{en:'The 1997 financial crisis',ko:'1997년 외환위기'}],
      correct:0, factEn:'During the Korean War, refugees built the village on the hillside for shelter — it became art!', factKo:'한국전쟁 피란민들이 산비탈에 터를 잡아 형성된 마을이 예술 마을로 변모했습니다!' },
    { qEn:'Which beloved storybook character has a famous statue photo-spot in Gamcheon?', qKo:'감천마을 포토 스팟으로 유명한 캐릭터 동상은?',
      opts:[{en:'BT21',ko:'BT21'},{en:'The Little Prince',ko:'어린왕자'},{en:'Pikachu',ko:'피카츄'},{en:'Hello Kitty',ko:'헬로키티'}],
      correct:1, factEn:'The Little Prince (어린왕자) statue gazing over the village is Gamcheon\'s most iconic photo spot!', factKo:'마을을 내려다보는 어린왕자 동상이 감천마을 최고의 포토 스팟입니다!' },
    { qEn:'What transformation project turned Gamcheon into a cultural village?', qKo:'감천마을을 문화마을로 탈바꿈시킨 사업은?',
      opts:[{en:'Government urban renewal project',ko:'정부 도시 재개발 사업'},{en:'2009 Art in Community Project',ko:'2009년 마을미술 프로젝트'},{en:'Busan Biennale',ko:'부산 비엔날레'},{en:'UNESCO Creative City Program',ko:'유네스코 창의 도시 프로그램'}],
      correct:1, factEn:'In 2009, an art-in-community project invited artists to paint murals and install sculptures — transforming Gamcheon!', factKo:'2009년 마을미술 프로젝트로 예술가들이 벽화와 조형물을 제작해 마을을 변화시켰습니다!' },
    { qEn:'Gamcheon Village sits in which district of Busan?', qKo:'감천문화마을이 위치한 부산 구는?',
      opts:[{en:'Haeundae-gu',ko:'해운대구'},{en:'Saha-gu',ko:'사하구'},{en:'Jung-gu',ko:'중구'},{en:'Dong-gu',ko:'동구'}],
      correct:1, factEn:'Gamcheon is in Saha-gu (사하구), nestled in the hills on Busan\'s western side!', factKo:'감천마을은 부산 서쪽 언덕에 자리한 사하구에 위치합니다!' },
  ],
  loc_27: [
    { qEn:'Which ancient Korean kingdom built Bulguksa Temple?', qKo:'불국사를 건립한 고대 왕국은?',
      opts:[{en:'Goryeo',ko:'고려'},{en:'Baekje',ko:'백제'},{en:'Silla',ko:'신라'},{en:'Joseon',ko:'조선'}],
      correct:2, factEn:'Bulguksa was completed in 774 AD during the Unified Silla Kingdom!', factKo:'불국사는 통일신라 시대인 774년에 완성되었습니다!' },
    { qEn:'Bulguksa and Seokguram became UNESCO World Heritage Sites in…?', qKo:'불국사와 석굴암의 유네스코 등재 연도는?',
      opts:[{en:'1985',ko:'1985년'},{en:'1995',ko:'1995년'},{en:'2003',ko:'2003년'},{en:'2010',ko:'2010년'}],
      correct:1, factEn:'Both were inscribed as UNESCO World Heritage Sites together in 1995!', factKo:'불국사와 석굴암은 1995년 유네스코 세계문화유산에 함께 등재되었습니다!' },
    { qEn:'Seokguram Grotto is how far from Bulguksa by shuttle?', qKo:'석굴암은 불국사에서 셔틀버스로 얼마나 걸리나요?',
      opts:[{en:'5 minutes',ko:'5분'},{en:'20 minutes',ko:'20분'},{en:'45 minutes',ko:'45분'},{en:'1 hour',ko:'1시간'}],
      correct:1, factEn:'A 20-minute shuttle connects Bulguksa to Seokguram — buy a combo ticket!', factKo:'불국사에서 셔틀버스로 20분 거리 — 패키지 티켓을 추천합니다!' },
    { qEn:'What famous stone pagodas stand in Bulguksa\'s main courtyard?', qKo:'불국사 대웅전 앞뜰에 있는 유명한 석탑 두 개는?',
      opts:[{en:'Dabotap & Seokgatap',ko:'다보탑 & 석가탑'},{en:'Cheomseongdae & Bunhwangsa',ko:'첨성대 & 분황사탑'},{en:'Hwangnyongsa & Beopjusa',ko:'황룡사 & 법주사탑'},{en:'Silsang & Silla',ko:'실상 & 신라탑'}],
      correct:0, factEn:'Dabotap (다보탑) and Seokgatap (석가탑) — two magnificent National Treasure pagodas — grace Bulguksa\'s courtyard!', factKo:'다보탑과 석가탑(무영탑)은 불국사 대웅전 앞뜰을 빛내는 두 개의 국보 석탑입니다!' },
    { qEn:'Bulguksa is located in which ancient capital city?', qKo:'불국사가 위치한 고도(古都)는?',
      opts:[{en:'Gyeongju',ko:'경주'},{en:'Buyeo',ko:'부여'},{en:'Gongju',ko:'공주'},{en:'Andong',ko:'안동'}],
      correct:0, factEn:'Bulguksa is in Gyeongju — the capital of the ancient Silla Kingdom for almost 1,000 years!', factKo:'불국사는 신라 천년 고도 경주에 자리하고 있습니다!' },
  ],
  loc_28: [
    { qEn:'Andong Hahoe Village is famous for its traditional what?', qKo:'안동 하회마을이 유명한 전통 예술은?',
      opts:[{en:'Pottery',ko:'도예'},{en:'Mask dance',ko:'탈춤'},{en:'Calligraphy',ko:'서예'},{en:'Fan painting',ko:'부채 그림'}],
      correct:1, factEn:'Hahoe\'s mask dance (하회별신굿탈놀이) is a UNESCO Intangible Cultural Heritage!', factKo:'하회별신굿탈놀이는 유네스코 인류 무형문화유산으로 등재되었습니다!' },
    { qEn:'What UNESCO status does Hahoe Village hold?', qKo:'하회마을의 유네스코 등재 현황은?',
      opts:[{en:'World Heritage Site',ko:'세계문화유산'},{en:'Creative City',ko:'창의 도시'},{en:'Biosphere Reserve',ko:'생물권 보전'},{en:'Memory of the World',ko:'세계기록유산'}],
      correct:0, factEn:'Hahoe Village has been a UNESCO World Heritage Site since 2010!', factKo:'하회마을은 2010년 유네스코 세계문화유산에 등재되었습니다!' },
    { qEn:'Which renowned Joseon Confucian scholar came from the Andong region?', qKo:'안동 출신의 유명한 조선 유학자는?',
      opts:[{en:'Jeong Yak-yong',ko:'정약용'},{en:'Yi Sun-sin',ko:'이순신'},{en:'Yi Hwang (Toegye)',ko:'이황(퇴계)'},{en:'Sejong the Great',ko:'세종대왕'}],
      correct:2, factEn:'Yi Hwang (Toegye, 1501–1570) is Andong\'s most celebrated philosopher!', factKo:'퇴계 이황(1501–1570)은 안동이 낳은 가장 위대한 유학자입니다!' },
    { qEn:'Which river bends around Hahoe Village, creating its unique geography?', qKo:'하회마을을 감싸 흐르는 강은?',
      opts:[{en:'Han River',ko:'한강'},{en:'Nakdong River',ko:'낙동강'},{en:'Geum River',ko:'금강'},{en:'Yeongsan River',ko:'영산강'}],
      correct:1, factEn:'The Nakdong River bends around Hahoe, creating a natural moat that helped preserve this village!', factKo:'낙동강이 하회마을을 휘감아 돌아 천연 해자 역할을 하며 마을을 보존해왔습니다!' },
    { qEn:'Which British monarch famously visited and celebrated her birthday in Hahoe?', qKo:'하회마을을 방문해 생일을 보낸 영국 왕실 인사는?',
      opts:[{en:'Queen Elizabeth II',ko:'엘리자베스 2세'},{en:'King Charles III',ko:'찰스 3세'},{en:'Princess Diana',ko:'다이애나 왕세자비'},{en:'Prince William',ko:'윌리엄 왕세자'}],
      correct:0, factEn:'Queen Elizabeth II visited Hahoe in 1999 and celebrated her 73rd birthday there — a royal endorsement!', factKo:'엘리자베스 2세 여왕은 1999년 하회마을을 방문해 73번째 생일을 이곳에서 보냈습니다!' },
  ],
  event_e0: [
    { qEn:'Boryeong Mud Festival is held at which beach?', qKo:'보령 머드 축제가 열리는 해변은?',
      opts:[{en:'Haeundae Beach',ko:'해운대 해수욕장'},{en:'Daecheon Beach',ko:'대천해수욕장'},{en:'Gyeongpo Beach',ko:'경포 해수욕장'},{en:'Sokcho Beach',ko:'속초 해수욕장'}],
      correct:1, factEn:'Daecheon Beach hosts the festival every July — one of Korea\'s biggest summer events!', factKo:'대천해수욕장에서 매년 7월 개최 — 한국 최대 여름 축제 중 하나입니다!' },
    { qEn:'Boryeong mud is prized for which beneficial property?', qKo:'보령 머드는 어떤 효능으로 유명한가요?',
      opts:[{en:'Glow-in-the-dark',ko:'야광 효과'},{en:'Skin care minerals',ko:'피부 미용 미네랄'},{en:'Weight loss',ko:'다이어트 효과'},{en:'Hair growth',ko:'모발 성장'}],
      correct:1, factEn:'Boryeong mud is rich in germanium and bentonite — amazing for your skin!', factKo:'보령 머드에는 게르마늄과 벤토나이트가 풍부해 피부 미용에 탁월합니다!' },
    { qEn:'How many countries do visitors typically come from?', qKo:'보령 머드 축제를 찾는 방문객의 출신 국가 수는?',
      opts:[{en:'About 10',ko:'약 10개국'},{en:'About 30',ko:'약 30개국'},{en:'Over 70',ko:'70개국 이상'},{en:'Over 100',ko:'100개국 이상'}],
      correct:2, factEn:'Over 2 million visitors from 70+ countries attend every year!', factKo:'매년 70개국 이상에서 200만 명이 방문하는 국제 축제입니다!' },
    { qEn:'When did the Boryeong Mud Festival first start?', qKo:'보령 머드 축제가 처음 시작된 해는?',
      opts:[{en:'1988',ko:'1988년'},{en:'1998',ko:'1998년'},{en:'2002',ko:'2002년'},{en:'2010',ko:'2010년'}],
      correct:1, factEn:'The festival began in 1998 as a way to promote Boryeong\'s cosmetics industry — and became a global phenomenon!', factKo:'1998년 보령의 화장품 산업 홍보를 위해 시작된 축제가 세계적인 이벤트로 성장했습니다!' },
    { qEn:'Besides mud wrestling, what other fun mud activities are available at the festival?', qKo:'머드 레슬링 외에 축제에서 즐길 수 있는 활동은?',
      opts:[{en:'Mud wrestling only',ko:'머드 레슬링만'},{en:'Mud painting and mud slides',ko:'머드 페인팅과 머드 슬라이드'},{en:'Mud zorbing and mud surfing',ko:'머드 파크 & 머드 서핑'},{en:'All of the above',ko:'위의 모두'}],
      correct:3, factEn:'Mud wrestling, painting, slides, zorbing, and surfing — dozens of activities for all ages!', factKo:'머드 레슬링, 페인팅, 슬라이드, 파크, 서핑 등 남녀노소 즐길 수 있는 다양한 프로그램!' },
  ],
  event_e1: [
    { qEn:'Jinhae Cherry Blossom Festival runs for how many days?', qKo:'진해 군항제(벚꽃 축제)는 며칠간 개최되나요?',
      opts:[{en:'3 days',ko:'3일'},{en:'7 days',ko:'7일'},{en:'10 days',ko:'10일'},{en:'3 weeks',ko:'3주'}],
      correct:2, factEn:'The festival runs for 10 glorious days in late March to early April!', factKo:'3월 말~4월 초 10일간 개최됩니다!' },
    { qEn:'Approximately how many cherry trees are in Jinhae?', qKo:'진해의 벚나무 수는 약 몇 그루인가요?',
      opts:[{en:'About 100,000',ko:'약 10만 그루'},{en:'About 380,000',ko:'약 38만 그루'},{en:'About 1 million',ko:'약 100만 그루'},{en:'About 5 million',ko:'약 500만 그루'}],
      correct:1, factEn:'Around 380,000 cherry trees transform Jinhae into a stunning pink paradise!', factKo:'약 38만 그루의 벚꽃이 진해를 핑크빛 낙원으로 물들입니다!' },
    { qEn:'What makes Gyeonghwa Station so iconic during the festival?', qKo:'진해 경화역이 축제 기간 유명한 이유는?',
      opts:[{en:'Free steam train rides',ko:'무료 증기기차 탑승'},{en:'Cherry blossom tunnel over the rail tracks',ko:'선로 위 벚꽃 터널'},{en:'Free K-pop concerts',ko:'무료 K팝 콘서트'},{en:'Overnight lantern festival',ko:'야간 등불 축제'}],
      correct:1, factEn:'Cherry trees lining both sides of the tracks create a magical blossom tunnel!', factKo:'선로 양옆 벚나무가 만들어내는 환상적인 벚꽃 터널이 장관입니다!' },
    { qEn:'Jinhae is a district of which major city?', qKo:'진해는 어느 도시의 구(區)인가요?',
      opts:[{en:'Busan',ko:'부산'},{en:'Changwon',ko:'창원'},{en:'Gimhae',ko:'김해'},{en:'Ulsan',ko:'울산'}],
      correct:1, factEn:'Jinhae is a coastal district of Changwon in South Gyeongsang Province — also home to Korea\'s main naval base!', factKo:'진해는 경남 창원시의 한 구로, 대한민국 해군 본부가 위치한 해군 도시입니다!' },
    { qEn:'Which famous Korean admiral\'s statue stands in Jinhae, attracting extra festival visitors?', qKo:'진해에 동상이 세워져 있는 유명한 한국 해군 제독은?',
      opts:[{en:'General Yi Seong-gye',ko:'장군 이성계'},{en:'Admiral Yi Sun-sin',ko:'이순신 장군'},{en:'General Kim Yu-sin',ko:'장군 김유신'},{en:'General Gwon Yul',ko:'장군 권율'}],
      correct:1, factEn:'Admiral Yi Sun-sin\'s statue stands proudly in Jinhae — the naval hero who defeated Japan\'s fleet in 1592!', factKo:'임진왜란 때 일본 수군을 물리친 이순신 장군의 동상이 진해에 세워져 있습니다!' },
  ],
  event_e2: [
    { qEn:'BIFF stands for what?', qKo:'BIFF의 정식 명칭은?',
      opts:[{en:'Busan International Film Festival',ko:'부산 국제 영화제'},{en:'Busan International Food Festival',ko:'부산 국제 음식 축제'},{en:'Busan Independent Film Foundation',ko:'부산 독립 영화 재단'},{en:'Busan Incheon Film Forum',ko:'부산인천 영화 포럼'}],
      correct:0, factEn:'BIFF — Busan International Film Festival — is Asia\'s premier film festival!', factKo:'BIFF는 Busan International Film Festival의 약자 — 아시아 최대 영화제입니다!' },
    { qEn:'Approximately how many films screen at BIFF each year?', qKo:'BIFF에서 매년 상영되는 영화 편수는?',
      opts:[{en:'Around 50',ko:'약 50편'},{en:'Around 150',ko:'약 150편'},{en:'Around 300',ko:'약 300편'},{en:'Around 600',ko:'약 600편'}],
      correct:2, factEn:'About 300 films from 70+ countries screen across Busan\'s iconic venues!', factKo:'70개국 이상에서 출품한 300여 편이 상영됩니다!' },
    { qEn:'In which year was BIFF first held?', qKo:'BIFF(부산국제영화제)가 처음 개최된 해는?',
      opts:[{en:'1988',ko:'1988년'},{en:'1996',ko:'1996년'},{en:'2002',ko:'2002년'},{en:'2010',ko:'2010년'}],
      correct:1, factEn:'BIFF was first held in 1996, quickly establishing itself as Asia\'s leading film festival!', factKo:'BIFF는 1996년 처음 개최되어 아시아 최고 영화제로 빠르게 자리매김했습니다!' },
    { qEn:'What district in Busan is the historic heart of the BIFF festival?', qKo:'BIFF 축제의 전통적인 중심지인 부산의 지역은?',
      opts:[{en:'Haeundae',ko:'해운대'},{en:'BIFF Square in Nampo-dong',ko:'남포동 BIFF 광장'},{en:'Seomyeon',ko:'서면'},{en:'Gwangalli',ko:'광안리'}],
      correct:1, factEn:'BIFF Square in Nampo-dong is the historic heart of the festival — lined with celebrity handprints!', factKo:'남포동 BIFF 광장은 축제의 발상지 — 스타들의 핸드프린팅이 새겨진 명소입니다!' },
    { qEn:'BIFF is particularly celebrated for showcasing films from which region?', qKo:'BIFF가 특히 주목받는 영화 분야는?',
      opts:[{en:'Only Korean films',ko:'한국 영화만'},{en:'Only Hollywood blockbusters',ko:'할리우드 블록버스터만'},{en:'Asian cinema and world premieres',ko:'아시아 영화와 월드 프리미어'},{en:'Only animated films',ko:'애니메이션만'}],
      correct:2, factEn:'BIFF is celebrated for its spotlight on Asian cinema and world premieres — a gateway for global audiences!', factKo:'BIFF는 아시아 영화와 월드 프리미어에 집중해 전 세계 관객과 아시아를 연결합니다!' },
  ],
  loc_4: [
    { qEn:'What is Myeongdong most famous for among tourists?', qKo:'명동이 관광객에게 가장 유명한 이유는?',
      opts:[{en:'Electronics markets',ko:'전자제품 시장'},{en:'K-beauty cosmetics and fashion',ko:'K-뷰티 화장품과 패션'},{en:'Traditional antiques',ko:'전통 골동품'},{en:'Industrial factories',ko:'공장 견학'}],
      correct:1, factEn:'Myeongdong is the epicenter of K-beauty — every major Korean skincare brand has a flagship store here!', factKo:'명동은 K-뷰티의 메카 — 모든 주요 한국 스킨케어 브랜드의 플래그십 스토어가 모여 있습니다!' },
    { qEn:'Which famous Catholic landmark is located near Myeongdong?', qKo:'명동 근처에 있는 유명한 가톨릭 건물은?',
      opts:[{en:'Jogyesa Temple',ko:'조계사'},{en:'Myeongdong Cathedral',ko:'명동성당'},{en:'Bongwonsa Temple',ko:'봉원사'},{en:'Sungkyunkwan',ko:'성균관'}],
      correct:1, factEn:'Myeongdong Cathedral (명동성당), built in 1898, is Korea\'s oldest and most iconic Catholic church!', factKo:'1898년 건립된 명동성당은 한국에서 가장 오래되고 유명한 가톨릭 성당입니다!' },
    { qEn:'What makes Myeongdong\'s evening streets special?', qKo:'명동 저녁 거리를 특별하게 만드는 것은?',
      opts:[{en:'All shops close at sunset',ko:'일몰에 모든 가게 폐점'},{en:'Lively street food stalls line the main street',ko:'메인 거리의 활기찬 길거리 음식 노점'},{en:'Only one food type available',ko:'한 가지 음식만 판매'},{en:'No pedestrians allowed',ko:'보행자 출입 금지'}],
      correct:1, factEn:'Myeongdong\'s evening street food stalls serve tornado potatoes, tteokbokki, and more — a foodie paradise!', factKo:'명동 저녁 길거리에는 토네이도 감자, 떡볶이 등 다양한 먹거리 노점이 가득합니다!' },
    { qEn:'Myeongdong is located in which central district of Seoul?', qKo:'명동이 위치한 서울 중심 구는?',
      opts:[{en:'Gangnam-gu',ko:'강남구'},{en:'Jung-gu',ko:'중구'},{en:'Jongno-gu',ko:'종로구'},{en:'Mapo-gu',ko:'마포구'}],
      correct:1, factEn:'Myeongdong is in Jung-gu (중구) — the very center of Seoul, easily reached by subway!', factKo:'명동은 서울 한복판 중구(中區)에 위치 — 지하철로 편리하게 접근할 수 있습니다!' },
    { qEn:'What makes Myeongdong convenient for foreign tourists with money?', qKo:'외국인 관광객에게 명동이 편리한 이유는?',
      opts:[{en:'Only Korean won accepted',ko:'한국 원화만 사용 가능'},{en:'Foreign currencies and credit cards widely accepted',ko:'외국 화폐 및 신용카드 폭넓게 수용'},{en:'No English spoken',ko:'영어 불가'},{en:'Cash only, no cards',ko:'현금만 사용 가능'}],
      correct:1, factEn:'Many Myeongdong shops accept USD, JPY, CNY and cards — one of Seoul\'s most tourist-friendly zones!', factKo:'명동 상점 대부분이 달러, 엔화, 위안화, 카드를 수용 — 외국인에게 가장 편리한 쇼핑 거리!' },
  ],
  loc_6: [
    { qEn:'Which Joseon king built Suwon Hwaseong Fortress?', qKo:'수원화성을 축조한 조선 왕은?',
      opts:[{en:'King Sejong',ko:'세종대왕'},{en:'King Taejo',ko:'태조'},{en:'King Jeongjo',ko:'정조'},{en:'King Gojong',ko:'고종'}],
      correct:2, factEn:'King Jeongjo built Hwaseong in 1796 to honor his father Prince Sado — a true labor of love!', factKo:'정조는 1796년 아버지 사도세자를 기리기 위해 화성을 축조했습니다!' },
    { qEn:'How long is Suwon Hwaseong Fortress\'s wall circuit?', qKo:'수원화성 성벽의 전체 둘레는?',
      opts:[{en:'About 1.2 km',ko:'약 1.2km'},{en:'About 2.4 km',ko:'약 2.4km'},{en:'About 5.7 km',ko:'약 5.7km'},{en:'About 12 km',ko:'약 12km'}],
      correct:2, factEn:'The fortress wall stretches 5.74 km, encompassing much of old Suwon city!', factKo:'화성 성벽의 총 둘레는 5.74km — 옛 수원 시가지를 에워싸고 있습니다!' },
    { qEn:'What UNESCO status does Hwaseong Fortress hold?', qKo:'수원화성의 유네스코 지정 현황은?',
      opts:[{en:'UNESCO World Heritage Site (1997)',ko:'유네스코 세계문화유산 (1997년)'},{en:'UNESCO Biosphere Reserve',ko:'유네스코 생물권 보전'},{en:'UNESCO Creative City',ko:'유네스코 창의 도시'},{en:'Not yet designated',ko:'아직 미지정'}],
      correct:0, factEn:'Hwaseong was inscribed as a UNESCO World Heritage Site in 1997 — same year as Changdeokgung!', factKo:'수원화성은 1997년 유네스코 세계문화유산에 등재되었습니다 — 창덕궁과 같은 해!' },
    { qEn:'What unique military feature sets Hwaseong apart from older Korean fortresses?', qKo:'수원화성이 이전 한국 성곽과 다른 군사적 특징은?',
      opts:[{en:'Underground tunnels',ko:'지하 터널'},{en:'Blend of Korean, Chinese & European-style fortification',ko:'한국·중국·서양식 축성 기법의 융합'},{en:'Japanese watchtowers',ko:'일본식 망루'},{en:'Underwater moat',ko:'수중 해자'}],
      correct:1, factEn:'Hwaseong innovatively combined Korean, Chinese, and European military architecture — far ahead of its time!', factKo:'화성은 한국, 중국, 서양의 축성 기법을 융합한 당시로선 매우 앞선 군사 건축물입니다!' },
    { qEn:'A colorful royal parade reenacting King Jeongjo\'s march is held when?', qKo:'정조 대왕의 행차를 재현한 화성 행궁 행차는 언제 개최되나요?',
      opts:[{en:'Spring (April)',ko:'봄 (4월)'},{en:'Summer (July)',ko:'여름 (7월)'},{en:'Autumn (October)',ko:'가을 (10월)'},{en:'Winter (December)',ko:'겨울 (12월)'}],
      correct:2, factEn:'Every October, a spectacular royal parade reenacts King Jeongjo\'s grand procession to Hwaseong!', factKo:'매년 10월, 정조의 화성 행차를 재현한 화려한 퍼레이드가 펼쳐집니다!' },
  ],
  loc_8: [
    { qEn:'Korean Folk Village recreates life in which historical era?', qKo:'한국민속촌이 재현하는 역사 시대는?',
      opts:[{en:'Ancient Three Kingdoms period',ko:'고대 삼국시대'},{en:'Joseon Dynasty (14th–19th century)',ko:'조선 시대 (14~19세기)'},{en:'Japanese Colonial Era (1910–1945)',ko:'일제강점기 (1910~1945년)'},{en:'1960s modernization era',ko:'1960년대 근대화 시기'}],
      correct:1, factEn:'Korean Folk Village (한국민속촌) authentically recreates daily life in the Joseon Dynasty!', factKo:'한국민속촌은 조선 시대 서민들의 생활 모습을 생생하게 재현한 야외 박물관입니다!' },
    { qEn:'What exciting traditional performance is a highlight at Korean Folk Village?', qKo:'한국민속촌의 인기 전통 공연은?',
      opts:[{en:'K-pop concert',ko:'K팝 콘서트'},{en:'Tightrope walking and farmer\'s dance',ko:'줄타기와 농악'},{en:'Ballet performance',ko:'발레 공연'},{en:'Movie screenings',ko:'영화 상영'}],
      correct:1, factEn:'Tightrope walking (줄타기) and the farmer\'s dance (농악) are thrilling traditional performances to watch!', factKo:'줄타기와 농악은 한국민속촌의 대표 전통 공연 — 짜릿한 볼거리를 제공합니다!' },
    { qEn:'Korean Folk Village is located in which city?', qKo:'한국민속촌이 위치한 도시는?',
      opts:[{en:'Seoul',ko:'서울'},{en:'Yongin',ko:'용인'},{en:'Incheon',ko:'인천'},{en:'Suwon',ko:'수원'}],
      correct:1, factEn:'Korean Folk Village is in Yongin, Gyeonggi Province — about 40 minutes south of Seoul!', factKo:'한국민속촌은 경기도 용인에 위치 — 서울에서 남쪽으로 약 40분 거리입니다!' },
    { qEn:'What hands-on traditional craft can visitors try at Korean Folk Village?', qKo:'한국민속촌에서 체험할 수 있는 전통 공예는?',
      opts:[{en:'Making hanji (traditional paper)',ko:'한지 만들기'},{en:'K-pop dance class',ko:'K팝 댄스 수업'},{en:'3D printing',ko:'3D 프린팅'},{en:'Digital painting',ko:'디지털 페인팅'}],
      correct:0, factEn:'Making hanji (한지) paper, wearing hanbok, and traditional games are popular hands-on activities!', factKo:'한지 만들기, 한복 체험, 민속 놀이 등 다양한 전통 체험 활동이 준비되어 있습니다!' },
    { qEn:'Which seasonal festival at Korean Folk Village is especially popular?', qKo:'한국민속촌의 대표 계절 축제는?',
      opts:[{en:'Cherry Blossom Festival',ko:'벚꽃 축제'},{en:'Chuseok Harvest Festival',ko:'추석 한가위 축제'},{en:'Winter Ice Festival',ko:'겨울 얼음 축제'},{en:'Mud Run Festival',ko:'머드 달리기 축제'}],
      correct:1, factEn:'The Chuseok Harvest Festival at Korean Folk Village features traditional games, food, and performances!', factKo:'추석 한가위 축제에서는 전통 놀이, 음식, 공연 등 다채로운 행사가 펼쳐집니다!' },
  ],
  loc_10: [
    { qEn:'Who was born at Ojukheon in Gangneung?', qKo:'강릉 오죽헌에서 태어난 인물은?',
      opts:[{en:'King Sejong',ko:'세종대왕'},{en:'Yi I (Yulgok, 율곡 이이)',ko:'율곡 이이'},{en:'Yi Hwang (Toegye)',ko:'퇴계 이황'},{en:'Admiral Yi Sun-sin',ko:'이순신'}],
      correct:1, factEn:'Yi I (Yulgok, 율곡 이이), one of Korea\'s greatest Confucian scholars, was born at Ojukheon in 1536!', factKo:'한국의 위대한 유학자 율곡 이이가 1536년 오죽헌에서 태어났습니다!' },
    { qEn:'What does "Ojukheon" (오죽헌) literally mean?', qKo:'\'오죽헌(烏竹軒)\'의 뜻은?',
      opts:[{en:'Black bamboo house',ko:'검은 대나무 집'},{en:'White pine hall',ko:'흰 소나무 전각'},{en:'Jade lotus garden',ko:'옥 연꽃 정원'},{en:'Golden chrysanthemum pavilion',ko:'황금 국화 정자'}],
      correct:0, factEn:'"Ojuk" (오죽) means black bamboo — the rare dark bamboo growing around the house gave it its name!', factKo:'오죽(烏竹)은 \'검은 대나무\' — 집 주변에 자라는 희귀한 검은 대나무에서 이름을 따왔습니다!' },
    { qEn:'Whose portrait appears on the 5,000-won Korean banknote, born at Ojukheon?', qKo:'오죽헌에서 태어나 5천 원권 지폐에 등장하는 인물은?',
      opts:[{en:'King Sejong',ko:'세종대왕'},{en:'Yi I (Yulgok)',ko:'율곡 이이'},{en:'Admiral Yi Sun-sin',ko:'이순신'},{en:'Yi Hwang (Toegye)',ko:'퇴계 이황'}],
      correct:1, factEn:'Yi I (Yulgok) is on the 5,000-won note — and his mother Shin Saimdang is on the 50,000-won note!', factKo:'율곡 이이는 5천 원권에, 어머니 신사임당은 5만 원권 지폐에 각각 등장합니다!' },
    { qEn:'What is Shin Saimdang (Yi I\'s mother) celebrated for in Korean history?', qKo:'율곡의 어머니 신사임당은 한국사에서 무엇으로 유명한가요?',
      opts:[{en:'First female general',ko:'최초의 여성 장군'},{en:'Celebrated artist and exemplary mother',ko:'뛰어난 예술가이자 현모양처'},{en:'First female prime minister',ko:'최초의 여성 총리'},{en:'Buddhist nun and poet',ko:'불교 승려이자 시인'}],
      correct:1, factEn:'Shin Saimdang (1504-1551) was a brilliant Joseon-era artist and devoted mother — her portrait graces the 50,000-won note!', factKo:'신사임당(1504~1551)은 조선 시대의 뛰어난 예술가이자 현모양처 — 5만 원권 지폐의 주인공입니다!' },
    { qEn:'What type of historic building is Ojukheon classified as?', qKo:'오죽헌은 어떤 유형의 유적으로 분류되나요?',
      opts:[{en:'Joseon royal palace',ko:'조선 왕실 궁궐'},{en:'One of Korea\'s oldest preserved private aristocratic homes',ko:'현존 최고(最古) 민가 중 하나'},{en:'Buddhist temple complex',ko:'불교 사찰 단지'},{en:'Military garrison',ko:'군사 요새'}],
      correct:1, factEn:'Ojukheon is one of the oldest surviving private aristocratic (양반) residences in Korea — a National Treasure!', factKo:'오죽헌은 현존하는 가장 오래된 민가 건축물 중 하나로 국보로 지정되어 있습니다!' },
  ],
  loc_11: [
    { qEn:'Sokcho is the gateway city to which national park?', qKo:'속초는 어느 국립공원의 관문 도시인가요?',
      opts:[{en:'Hallasan National Park',ko:'한라산 국립공원'},{en:'Seoraksan National Park',ko:'설악산 국립공원'},{en:'Jirisan National Park',ko:'지리산 국립공원'},{en:'Bukhansan National Park',ko:'북한산 국립공원'}],
      correct:1, factEn:'Sokcho is the gateway to Seoraksan National Park — the two are just 10 km apart!', factKo:'속초는 설악산 국립공원의 관문 도시 — 공원 입구에서 불과 10km 거리입니다!' },
    { qEn:'What is Sokcho\'s signature local dish?', qKo:'속초의 대표 향토 음식은?',
      opts:[{en:'Jjajangmyeon',ko:'짜장면'},{en:'Ojingeo sundae (squid stuffed with noodles)',ko:'오징어순대 (오징어 먹물 순대)'},{en:'Pork galbi',ko:'돼지갈비'},{en:'Doenjang jjigae',ko:'된장찌개'}],
      correct:1, factEn:'Ojingeo sundae (오징어순대) — squid stuffed with glass noodles and vegetables — is Sokcho\'s iconic dish!', factKo:'오징어순대는 오징어에 당면과 채소를 채운 속초의 대표 향토 음식입니다!' },
    { qEn:'Sokcho faces which sea?', qKo:'속초가 면한 바다는?',
      opts:[{en:'South Sea',ko:'남해'},{en:'Yellow Sea (West Sea)',ko:'황해 (서해)'},{en:'East Sea',ko:'동해'},{en:'Pacific Ocean directly',ko:'태평양 직면'}],
      correct:2, factEn:'Sokcho overlooks the East Sea (동해) — offering beautiful sunrise views over the water!', factKo:'속초는 동해를 바라보는 도시 — 바다 위로 떠오르는 아름다운 일출로 유명합니다!' },
    { qEn:'What is the best season to visit Sokcho for swimming?', qKo:'속초 해수욕을 즐기기 가장 좋은 계절은?',
      opts:[{en:'Winter (for snow scenery)',ko:'겨울 (설경 감상)'},{en:'Summer (for swimming and seafood)',ko:'여름 (해수욕과 해산물)'},{en:'Spring (cherry blossoms)',ko:'봄 (벚꽃)'},{en:'Autumn only',ko:'가을만'}],
      correct:1, factEn:'Summer is peak season at Sokcho Beach — combine swimming with fresh seafood and nearby Seoraksan!', factKo:'여름은 속초 해수욕 성수기 — 해수욕에 신선한 해산물, 설악산까지 함께 즐길 수 있습니다!' },
    { qEn:'What lagoon near Sokcho is famous for its scenic beauty and freshwater fish?', qKo:'속초 인근에 위치한 경치 좋은 석호는?',
      opts:[{en:'Gyeongpoho Lake',ko:'경포호'},{en:'Cheongchoho Lake',ko:'청초호'},{en:'Soyang Lake',ko:'소양호'},{en:'Paldangho Lake',ko:'팔당호'}],
      correct:1, factEn:'Cheongchoho Lake (청초호) is a beautiful coastal lagoon in Sokcho — perfect for evening strolls!', factKo:'청초호는 속초 시내에 위치한 아름다운 석호 — 저녁 산책 명소로 사랑받습니다!' },
  ],
  loc_12: [
    { qEn:'Gongsanseong Fortress was the capital of which ancient Korean kingdom?', qKo:'공산성이 수도였던 고대 한국 왕국은?',
      opts:[{en:'Silla',ko:'신라'},{en:'Goryeo',ko:'고려'},{en:'Baekje',ko:'백제'},{en:'Joseon',ko:'조선'}],
      correct:2, factEn:'Gongsanseong was the capital of the Baekje Kingdom from 475 to 538 AD!', factKo:'공산성은 475년부터 538년까지 백제의 수도였던 웅진(熊津)의 산성입니다!' },
    { qEn:'Which river flows alongside Gongsanseong, creating a scenic view?', qKo:'공산성 옆을 흐르는 강은?',
      opts:[{en:'Han River',ko:'한강'},{en:'Nakdong River',ko:'낙동강'},{en:'Geum River',ko:'금강'},{en:'Seomjin River',ko:'섬진강'}],
      correct:2, factEn:'The majestic Geum River (금강) flows beneath Gongsanseong, creating a breathtaking scenic backdrop!', factKo:'웅장한 금강이 공산성 아래를 흘러 뛰어난 경관을 연출합니다!' },
    { qEn:'Gongsanseong is located in which city?', qKo:'공산성이 위치한 도시는?',
      opts:[{en:'Buyeo',ko:'부여'},{en:'Gongju',ko:'공주'},{en:'Cheonan',ko:'천안'},{en:'Daejeon',ko:'대전'}],
      correct:1, factEn:'Gongsanseong is in Gongju (공주) — the ancient Baekje capital city of South Chungcheong Province!', factKo:'공산성은 충청남도 공주에 있으며, 공주는 백제의 두 번째 수도였습니다!' },
    { qEn:'What UNESCO designation does Gongsanseong hold?', qKo:'공산성의 유네스코 지정은?',
      opts:[{en:'UNESCO World Heritage Site (Baekje Historic Areas, 2015)',ko:'유네스코 세계문화유산 (백제역사유적지구, 2015년)'},{en:'UNESCO Biosphere Reserve',ko:'유네스코 생물권 보전'},{en:'UNESCO Creative City',ko:'유네스코 창의 도시'},{en:'Not yet designated',ko:'아직 미지정'}],
      correct:0, factEn:'Gongsanseong is part of the "Baekje Historic Areas" UNESCO World Heritage Site inscribed in 2015!', factKo:'공산성은 2015년 유네스코 세계문화유산에 등재된 \'백제역사유적지구\'의 핵심 구성 요소입니다!' },
    { qEn:'Gongsanseong walls were originally constructed using what material?', qKo:'공산성 성벽의 원래 재료는?',
      opts:[{en:'Stone blocks',ko:'석재'},{en:'Pounded earth (토성)',ko:'흙다짐 (토성)'},{en:'Fired brick',ko:'벽돌'},{en:'Reinforced concrete',ko:'철근 콘크리트'}],
      correct:1, factEn:'Gongsanseong was originally a pounded-earth fortress (토성) later reinforced with stone during the Joseon era!', factKo:'공산성은 원래 흙으로 쌓은 토성으로, 조선 시대에 석성(石城)으로 보강되었습니다!' },
  ],
  loc_13: [
    { qEn:'Baekje Cultural Land recreates the ancient capital of which kingdom?', qKo:'백제문화단지가 재현한 고대 왕국의 수도는?',
      opts:[{en:'Silla',ko:'신라'},{en:'Goryeo',ko:'고려'},{en:'Baekje',ko:'백제'},{en:'Goguryeo',ko:'고구려'}],
      correct:2, factEn:'Baekje Cultural Land recreates Sabi — the glorious last capital of the Baekje Kingdom (538-660 AD)!', factKo:'백제문화단지는 백제의 마지막 수도 사비(泗沘, 현 부여)를 웅장하게 재현했습니다!' },
    { qEn:'The Baekje Kingdom is famous for spreading what to ancient Japan?', qKo:'백제가 고대 일본에 전파한 것으로 유명한 것은?',
      opts:[{en:'Green tea cultivation',ko:'녹차 재배'},{en:'Buddhism and advanced culture & arts',ko:'불교와 선진 문화·예술'},{en:'Rice farming techniques',ko:'벼 재배 기술'},{en:'Samurai training methods',ko:'사무라이 훈련 방식'}],
      correct:1, factEn:'Baekje was a cultural bridge — spreading Buddhism, art, architecture, and scholarship to ancient Japan!', factKo:'백제는 불교, 예술, 건축 등 선진 문화를 고대 일본에 전파한 문화적 가교 역할을 했습니다!' },
    { qEn:'Baekje Cultural Land is located in which city?', qKo:'백제문화단지가 위치한 도시는?',
      opts:[{en:'Gongju',ko:'공주'},{en:'Buyeo',ko:'부여'},{en:'Cheonan',ko:'천안'},{en:'Daejeon',ko:'대전'}],
      correct:1, factEn:'Baekje Cultural Land is in Buyeo (부여) — the final ancient capital of the Baekje Kingdom!', factKo:'백제문화단지는 백제의 마지막 수도인 충남 부여에 위치합니다!' },
    { qEn:'The Baekje Kingdom fell in which year?', qKo:'백제가 멸망한 해는?',
      opts:[{en:'476 AD',ko:'476년'},{en:'660 AD',ko:'660년'},{en:'918 AD',ko:'918년'},{en:'1392 AD',ko:'1392년'}],
      correct:1, factEn:'Baekje fell in 660 AD when Silla allied with Tang Dynasty China — ending 700 years of history!', factKo:'백제는 660년 신라-당나라 연합군에 의해 멸망 — 700년의 역사가 막을 내렸습니다!' },
    { qEn:'Which famous artifact, a symbol of Baekje artistry, is showcased in the cultural land?', qKo:'백제문화단지에서 볼 수 있는 백제 예술의 상징 유물은?',
      opts:[{en:'Baekje Gold-Bronze Incense Burner (금동대향로)',ko:'금동대향로'},{en:'Silla Gold Crown',ko:'신라 금관'},{en:'Joseon Jade Seal',ko:'조선 옥새'},{en:'Goryeo Celadon Vase',ko:'고려청자'}],
      correct:0, factEn:'The gold-bronze Baekje Incense Burner (금동대향로) is a National Treasure and a masterpiece of ancient Korean art!', factKo:'금동대향로는 국보로 지정된 백제 미술의 걸작이자 고대 한국 예술의 최고 작품 중 하나입니다!' },
  ],
  loc_14: [
    { qEn:'Taean National Park is what type of park?', qKo:'태안 국립공원의 유형은?',
      opts:[{en:'Mountain national park',ko:'산악 국립공원'},{en:'Coastal (marine) national park',ko:'해안(해양) 국립공원'},{en:'River national park',ko:'하천 국립공원'},{en:'Cave national park',ko:'동굴 국립공원'}],
      correct:1, factEn:'Taean is a coastal national park along Korea\'s West Sea — famous for dramatic tidal flats and sunsets!', factKo:'태안은 서해안 국립공원으로 광활한 갯벌과 아름다운 해넘이로 유명합니다!' },
    { qEn:'What spectacular natural event draws visitors to Taean?', qKo:'많은 방문객을 태안으로 불러 모으는 자연 볼거리는?',
      opts:[{en:'Northern Lights',ko:'오로라'},{en:'Sunsets over the Yellow (West) Sea',ko:'서해 낙조'},{en:'Volcanic eruptions',ko:'화산 폭발'},{en:'Meteor showers',ko:'유성우'}],
      correct:1, factEn:'Taean\'s glowing sunsets over the Yellow Sea are legendary — some of Korea\'s most breathtaking!', factKo:'태안의 서해 낙조는 한국 최고의 일몰 명소 중 하나로 손꼽힙니다!' },
    { qEn:'What unique ecological zone is Taean celebrated for?', qKo:'태안이 자랑하는 특별한 생태 공간은?',
      opts:[{en:'Rainforest',ko:'열대 우림'},{en:'Tidal flats (갯벌)',ko:'갯벌'},{en:'Volcanic craters',ko:'화산 분화구'},{en:'Salt desert',ko:'소금 사막'}],
      correct:1, factEn:'Taean\'s tidal flats (갯벌) are a vital ecological zone — home to countless birds and marine life!', factKo:'태안의 갯벌은 수많은 철새와 해양 생물의 서식지인 귀중한 생태 공간입니다!' },
    { qEn:'Taean was the site of a major environmental disaster in 2007. What happened?', qKo:'2007년 태안에서 발생한 대형 환경 재앙은?',
      opts:[{en:'Volcanic eruption',ko:'화산 폭발'},{en:'Massive oil spill from a tanker collision',ko:'유조선 충돌로 인한 대규모 기름 유출'},{en:'Tsunami',ko:'쓰나미'},{en:'Wildfire',ko:'산불'}],
      correct:1, factEn:'A 2007 oil tanker collision caused Korea\'s worst oil spill — but the community cleanup became legendary!', factKo:'2007년 유조선 충돌로 한국 최악의 기름 유출이 발생했으나, 자원봉사자들의 복구 활동이 전설이 되었습니다!' },
    { qEn:'What family-friendly activity is popular on Taean\'s tidal flats?', qKo:'태안 갯벌에서 가족 단위로 즐기는 인기 체험 활동은?',
      opts:[{en:'Deep-sea fishing',ko:'심해 낚시'},{en:'Shellfish and clam gathering',ko:'조개·바지락 캐기'},{en:'Shark diving',ko:'상어 다이빙'},{en:'Whale watching',ko:'고래 관찰'}],
      correct:1, factEn:'Clam and shellfish gathering on the tidal flats is a beloved family activity at Taean!', factKo:'갯벌에서 조개와 바지락을 캐는 체험은 태안을 찾는 가족들에게 가장 인기 있는 활동입니다!' },
  ],
  loc_15: [
    { qEn:'Sangdang Fortress in Cheongju dates mainly from which era?', qKo:'청주 상당산성은 주로 어느 시대에 쌓인 성곽인가요?',
      opts:[{en:'Goguryeo',ko:'고구려'},{en:'Baekje',ko:'백제'},{en:'Joseon',ko:'조선'},{en:'Modern era (20th century)',ko:'근현대 (20세기)'}],
      correct:2, factEn:'The current walls of Sangdang Fortress were largely built and restored during the Joseon era!', factKo:'현재의 상당산성 성벽은 주로 조선 시대에 축성되고 복원된 것입니다!' },
    { qEn:'What leisure activity is Sangdang Fortress best known for today?', qKo:'오늘날 상당산성에서 가장 인기 있는 활동은?',
      opts:[{en:'Shopping',ko:'쇼핑'},{en:'Scenic walking trail along the walls',ko:'성곽을 따라 걷는 산책로'},{en:'Swimming',ko:'수영'},{en:'Motor racing',ko:'자동차 레이싱'}],
      correct:1, factEn:'Sangdang\'s 4.2 km wall walk offers beautiful city and mountain views — a perfect leisurely stroll!', factKo:'총 4.2km의 상당산성 성곽길은 도심과 산 조망이 어우러진 아름다운 산책 코스입니다!' },
    { qEn:'Cheongju is the capital of which province?', qKo:'청주는 어느 도의 도청 소재지인가요?',
      opts:[{en:'Gyeonggi',ko:'경기도'},{en:'South Chungcheong',ko:'충청남도'},{en:'North Chungcheong',ko:'충청북도'},{en:'Gangwon',ko:'강원도'}],
      correct:2, factEn:'Cheongju is the capital of North Chungcheong Province (충청북도) — centrally located in Korea!', factKo:'청주는 대한민국 중부에 위치한 충청북도의 도청 소재지입니다!' },
    { qEn:'What world-famous cultural artifact was printed in Cheongju in 1377?', qKo:'1377년 청주에서 인쇄된 세계적으로 유명한 문화재는?',
      opts:[{en:'Tripitaka Koreana',ko:'팔만대장경'},{en:'Jikji (world\'s oldest metal-printed book)',ko:'직지심체요절 (세계 최고 금속활자 인쇄본)'},{en:'Annals of Joseon Dynasty',ko:'조선왕조실록'},{en:'Samguk Sagi',ko:'삼국사기'}],
      correct:1, factEn:'Jikji (직지심체요절), printed in Cheongju in 1377, predates Gutenberg\'s Bible by 78 years — a UNESCO Memory of the World!', factKo:'1377년 청주 흥덕사에서 인쇄된 직지는 구텐베르크보다 78년 앞선 세계 최고 금속활자 인쇄본입니다!' },
    { qEn:'Sangdang Fortress sits atop which hill overlooking Cheongju?', qKo:'청주 시가지를 내려다보는 상당산성이 위치한 산은?',
      opts:[{en:'Namsan',ko:'남산'},{en:'Uamsan',ko:'우암산'},{en:'Gyeryongsan',ko:'계룡산'},{en:'Dobongsan',ko:'도봉산'}],
      correct:1, factEn:'Sangdang Fortress sits atop Uamsan (우암산, 338m), offering panoramic views of modern Cheongju!', factKo:'상당산성은 우암산(338m) 위에 자리해 청주 시가지의 파노라마 경관을 제공합니다!' },
  ],
  loc_16: [
    { qEn:'Danyang is famous for its dramatic what?', qKo:'단양이 유명한 자연 지형은?',
      opts:[{en:'Volcanic peaks',ko:'화산 봉우리'},{en:'Karst limestone cliffs and caves',ko:'석회암 절벽과 동굴'},{en:'Salt flats',ko:'소금 평원'},{en:'Sand dunes',ko:'사구'}],
      correct:1, factEn:'Danyang\'s karst limestone landscape creates stunning gorges, cliffs, and caves along the Namhan River!', factKo:'단양의 석회암 지형이 남한강을 따라 웅장한 절벽, 협곡, 동굴을 만들어냅니다!' },
    { qEn:'What famous cave near Danyang features dramatic stalactites and stalagmites?', qKo:'단양 인근의 유명 종유석 동굴은?',
      opts:[{en:'Hwanseon Cave',ko:'환선굴'},{en:'Gosu Cave (고수동굴)',ko:'고수동굴'},{en:'Cheongok Cave',ko:'청옥 동굴'},{en:'Baengnyong Cave',ko:'백룡동굴'}],
      correct:1, factEn:'Gosu Cave (고수동굴) features spectacular stalactites and stalagmites over 500 million years old!', factKo:'고수동굴은 5억 년 이상 된 웅장한 종유석과 석순으로 가득한 단양 최고의 동굴 명소입니다!' },
    { qEn:'Danyang is in which province?', qKo:'단양이 속한 도는?',
      opts:[{en:'Gangwon',ko:'강원도'},{en:'North Chungcheong (Chungbuk)',ko:'충청북도'},{en:'North Gyeongsang',ko:'경상북도'},{en:'Gyeonggi',ko:'경기도'}],
      correct:1, factEn:'Danyang is in North Chungcheong Province (충청북도), where the Sobaek Mountains meet the Namhan River!', factKo:'단양은 소백산맥과 남한강이 만나는 충청북도에 위치합니다!' },
    { qEn:'What thrilling outdoor activity is Danyang especially popular for?', qKo:'단양에서 특히 인기 있는 스릴 넘치는 야외 활동은?',
      opts:[{en:'Bungee jumping from bridges',ko:'다리 번지점프'},{en:'Paragliding over cliffs and river',ko:'절벽과 강 위 패러글라이딩'},{en:'Deep sea diving',ko:'심해 다이빙'},{en:'Formula car racing',ko:'포뮬러 카 레이싱'}],
      correct:1, factEn:'Danyang is one of Korea\'s top paragliding spots — soaring over the river gorge is unforgettable!', factKo:'단양은 한국 최고의 패러글라이딩 명소 — 강 협곡 위를 나는 짜릿한 경험을 할 수 있습니다!' },
    { qEn:'Danyang is famous for a particular agricultural product. What is it?', qKo:'단양이 유명한 특산 농산물은?',
      opts:[{en:'Boseong green tea',ko:'보성 녹차'},{en:'Danyang garlic (단양 마늘)',ko:'단양 마늘'},{en:'Naju pears',ko:'나주 배'},{en:'Jeju tangerines',ko:'제주 감귤'}],
      correct:1, factEn:'Danyang garlic (단양 마늘) is prized across Korea for its exceptional flavor and quality!', factKo:'단양 마늘은 뛰어난 향과 품질로 전국적으로 인정받는 단양의 대표 특산물입니다!' },
  ],
  loc_17: [
    { qEn:'Suanbo is known as one of Korea\'s oldest what?', qKo:'수안보는 한국에서 가장 오래된 무엇으로 유명한가요?',
      opts:[{en:'Tea ceremony centers',ko:'다도 문화 체험 센터'},{en:'Hot spring resorts',ko:'온천 휴양지'},{en:'Buddhist temples',ko:'불교 사찰'},{en:'Royal gardens',ko:'왕실 정원'}],
      correct:1, factEn:'Suanbo (수안보) has been a hot spring resort for over 600 years — even favored by Joseon royalty!', factKo:'수안보는 600년 이상의 역사를 자랑하는 온천 휴양지 — 조선 왕실도 즐겨 찾은 명소입니다!' },
    { qEn:'What is the approximate natural temperature of Suanbo\'s spring water?', qKo:'수안보 천연 온천수의 온도는 약 몇 도인가요?',
      opts:[{en:'About 25°C',ko:'약 25°C'},{en:'About 37°C',ko:'약 37°C'},{en:'About 53°C',ko:'약 53°C'},{en:'About 80°C',ko:'약 80°C'}],
      correct:2, factEn:'Suanbo\'s spring water emerges at about 53°C — perfectly hot for therapeutic bathing!', factKo:'수안보 온천수는 약 53°C — 치료 효과가 뛰어난 최적의 온천 온도입니다!' },
    { qEn:'Hot spring bathing in Korea is called what?', qKo:'한국에서 온천욕을 부르는 말은?',
      opts:[{en:'Jjimjilbang (찜질방)',ko:'찜질방'},{en:'Oncheon (온천)',ko:'온천'},{en:'Sauna (사우나)',ko:'사우나'},{en:'Haengsang (행상)',ko:'행상'}],
      correct:1, factEn:'Oncheon (온천) means "hot spring" in Korean — Suanbo\'s mineral-rich waters are famed for skin benefits!', factKo:'온천은 \'따뜻한 샘물\'을 의미하며, 수안보 온천은 미네랄이 풍부해 피부 건강에 탁월합니다!' },
    { qEn:'Which mountain range surrounds Suanbo, adding to its scenic beauty?', qKo:'수안보 주변을 둘러싼 산맥은?',
      opts:[{en:'Taebaek Mountains',ko:'태백산맥'},{en:'Sobaek Mountains',ko:'소백산맥'},{en:'Noryeong Mountains',ko:'노령산맥'},{en:'Charyeong Mountains',ko:'차령산맥'}],
      correct:1, factEn:'The Sobaek Mountain Range (소백산맥) surrounds Suanbo, creating a serene mountain resort atmosphere!', factKo:'소백산맥이 수안보를 에워싸 고즈넉한 산속 온천 분위기를 연출합니다!' },
    { qEn:'Suanbo is located in which city?', qKo:'수안보가 속한 도시는?',
      opts:[{en:'Cheongju',ko:'청주'},{en:'Chungju',ko:'충주'},{en:'Danyang',ko:'단양'},{en:'Jecheon',ko:'제천'}],
      correct:1, factEn:'Suanbo is in Chungju (충주), North Chungcheong Province — surrounded by mountains and scenic rivers!', factKo:'수안보는 충청북도 충주시에 속하며, 산과 강이 어우러진 아름다운 자연 속에 위치합니다!' },
  ],
  loc_18: [
    { qEn:'Yeosu hosted which major international event in 2012?', qKo:'2012년 여수에서 개최된 국제 행사는?',
      opts:[{en:'Olympic Games',ko:'올림픽'},{en:'World Cup Football',ko:'월드컵 축구'},{en:'World Expo',ko:'세계박람회 (엑스포)'},{en:'G20 Summit',ko:'G20 정상회의'}],
      correct:2, factEn:'Yeosu hosted World Expo 2012 with the theme "The Living Ocean and Coast" — Korea\'s first World Expo!', factKo:'2012 여수세계박람회는 \'살아있는 바다, 숨쉬는 연안\'을 주제로 개최된 한국 최초의 세계박람회입니다!' },
    { qEn:'Yeosu is famous for what nighttime experience?', qKo:'여수가 밤에 유명한 이유는?',
      opts:[{en:'Aurora viewing',ko:'오로라 관측'},{en:'Night sea view (Yeosu Bam Bada)',ko:'여수 밤바다'},{en:'City skyscraper lights',ko:'도심 마천루 야경'},{en:'Mountain stargazing',ko:'산 위 별 관측'}],
      correct:1, factEn:'"Yeosu Bam Bada" (여수 밤바다) became iconic after the hit K-pop song — the night sea view is stunning!', factKo:'버스커버스커의 히트곡 \'여수 밤바다\'로 유명해진 여수의 밤바다 경관은 황홀합니다!' },
    { qEn:'What famous cable car offers breathtaking sea views in Yeosu?', qKo:'여수에서 아름다운 해상 경관을 제공하는 유명 케이블카는?',
      opts:[{en:'Dolsan Bridge Cable Car',ko:'돌산대교 케이블카'},{en:'Yeosu Maritime Cable Car (여수 해상 케이블카)',ko:'여수 해상 케이블카'},{en:'Odongdo Island Ferry',ko:'오동도 유람선'},{en:'Hansan Island Gondola',ko:'한산도 곤돌라'}],
      correct:1, factEn:'Yeosu Maritime Cable Car offers breathtaking sea views, connecting over Dolsan Strait to Jade Island!', factKo:'여수 해상 케이블카는 돌산해협 위를 건너며 환상적인 바다 경관을 선사합니다!' },
    { qEn:'Yeosu is in which province?', qKo:'여수가 속한 도는?',
      opts:[{en:'North Jeolla',ko:'전라북도'},{en:'South Jeolla',ko:'전라남도'},{en:'North Gyeongsang',ko:'경상북도'},{en:'South Gyeongsang',ko:'경상남도'}],
      correct:1, factEn:'Yeosu (여수) is in South Jeolla Province (전라남도), known for its beautiful archipelago of islands!', factKo:'여수는 아름다운 다도해로 유명한 전라남도에 위치합니다!' },
    { qEn:'Which famous Korean admiral won major naval battles near Yeosu?', qKo:'여수 인근에서 큰 해전을 승리로 이끈 유명한 한국 제독은?',
      opts:[{en:'Park Chung-hee',ko:'박정희'},{en:'Admiral Yi Sun-sin',ko:'이순신'},{en:'General Kim Yu-sin',ko:'김유신'},{en:'Eulji Mundeok',ko:'을지문덕'}],
      correct:1, factEn:'Admiral Yi Sun-sin used the straits near Yeosu to brilliantly defeat Japan\'s navy during the Imjin War!', factKo:'이순신 장군은 여수 인근 해협을 활용해 임진왜란에서 일본 수군을 연이어 물리쳤습니다!' },
  ],
  loc_22: [
    { qEn:'What do the twin peaks of Maisan resemble?', qKo:'마이산 두 봉우리가 닮은 것은?',
      opts:[{en:'A lion\'s mane',ko:'사자 갈기'},{en:'Horse ears',ko:'말의 귀'},{en:'Dragon horns',ko:'용의 뿔'},{en:'Giant chopsticks',ko:'거대한 젓가락'}],
      correct:1, factEn:'"Maisan" (마이산) literally means "Horse Ear Mountain" — the twin peaks look strikingly like horse ears!', factKo:'마이산(馬耳山)은 \'말의 귀를 닮은 산\'이라는 뜻 — 두 봉우리가 정말 말귀처럼 생겼습니다!' },
    { qEn:'What unique stone pagodas can be found in the valley between Maisan\'s peaks?', qKo:'마이산 두 봉우리 사이 계곡에 있는 독특한 석탑은?',
      opts:[{en:'Tapsa: 80+ hand-built stone pagodas with no cement',ko:'탑사: 시멘트 없이 손으로 쌓은 80여 기의 석탑'},{en:'Buddhist stone lanterns',ko:'불교 석등'},{en:'Wooden totem poles',ko:'나무 장승'},{en:'Stone dragon sculptures',ko:'석룡 조각'}],
      correct:0, factEn:'Tapsa (탑사) features over 80 stone pagodas built by monk Yi Gap-yong using only natural stones — no cement!', factKo:'탑사(塔寺)에는 이갑용 처사가 시멘트 없이 자연석만으로 쌓은 80여 기의 돌탑이 있습니다!' },
    { qEn:'Maisan is a provincial park in which province?', qKo:'마이산이 속한 도립공원의 소재 도는?',
      opts:[{en:'North Gyeongsang',ko:'경상북도'},{en:'South Jeolla',ko:'전라남도'},{en:'North Jeolla (Jeonbuk)',ko:'전라북도'},{en:'Gangwon',ko:'강원도'}],
      correct:2, factEn:'Maisan is in North Jeolla Province (전라북도), near Jinan and Jeonju!', factKo:'마이산은 전라북도 진안군에 위치한 도립공원입니다!' },
    { qEn:'What unique natural phenomenon occurs at Maisan in winter?', qKo:'마이산에서 겨울에 볼 수 있는 신기한 자연 현상은?',
      opts:[{en:'Ice caves form inside the peaks',ko:'봉우리 내부에 얼음 동굴 생성'},{en:'Reverse icicles grow upward from the ground (역고드름)',ko:'아래서 위로 자라는 역고드름'},{en:'Snow never melts on the peaks',ko:'봉우리의 눈이 절대 안 녹음'},{en:'Rock glows at night',ko:'밤에 바위가 빛남'}],
      correct:1, factEn:'Maisan is famous for "reverse icicles" (역고드름) that grow upward from bowls of water — a local wonder!', factKo:'마이산에서는 그릇에 담긴 물이 아래서 위로 얼어오르는 역고드름이 겨울마다 나타나 신비롭습니다!' },
    { qEn:'What rock type forms Maisan\'s distinctive peaks?', qKo:'마이산의 독특한 두 봉우리를 이루는 암석 종류는?',
      opts:[{en:'Basalt',ko:'현무암'},{en:'Conglomerate (역암, puddingstone)',ko:'역암'},{en:'Granite',ko:'화강암'},{en:'Limestone',ko:'석회암'}],
      correct:1, factEn:'Maisan\'s peaks are made of conglomerate rock (역암) — sedimentary rock formed from ancient river pebbles!', factKo:'마이산은 고대 강자갈이 굳어진 퇴적암인 역암으로 이루어진 매우 특이한 산입니다!' },
  ],
  loc_23: [
    { qEn:'Geumsansa Temple is located on which mountain?', qKo:'금산사가 위치한 산은?',
      opts:[{en:'Namsan',ko:'남산'},{en:'Moaksan',ko:'모악산'},{en:'Jirisan',ko:'지리산'},{en:'Gyeryongsan',ko:'계룡산'}],
      correct:1, factEn:'Geumsansa (금산사) sits on the slopes of Moaksan (모악산) in North Jeolla Province!', factKo:'금산사는 전라북도 모악산(794m) 자락에 자리한 고찰입니다!' },
    { qEn:'Geumsansa is famous for its remarkable main hall. What is unique about it?', qKo:'금산사 미륵전이 유명한 이유는?',
      opts:[{en:'It\'s underground',ko:'지하에 위치'},{en:'It\'s Korea\'s only three-story wooden main hall',ko:'한국 유일의 3층 목조 주불전'},{en:'It floats on water',ko:'물 위에 떠 있음'},{en:'It was built in one day',ko:'하루 만에 건립됨'}],
      correct:1, factEn:'Mireukjeon (미륵전) is Korea\'s only three-story wooden main hall — a designated National Treasure!', factKo:'미륵전은 국내 유일의 3층 목조 주불전으로 국보(제62호)로 지정된 귀중한 건축 문화재입니다!' },
    { qEn:'Which Buddhist figure is enshrined in Geumsansa\'s main hall?', qKo:'금산사 미륵전에 모셔진 불상은?',
      opts:[{en:'Sakyamuni Buddha',ko:'석가모니불'},{en:'Mireuk (Maitreya, the Future Buddha)',ko:'미륵보살 (미래불)'},{en:'Amitabha Buddha',ko:'아미타불'},{en:'Guanyin Bodhisattva',ko:'관세음보살'}],
      correct:1, factEn:'Mireuk (미륵), the Future Buddha, is enshrined here — symbolizing hope for future enlightenment!', factKo:'미륵전에는 미래불인 미륵보살(彌勒菩薩)이 모셔져 있어 미래의 구원을 상징합니다!' },
    { qEn:'Geumsansa was founded during which ancient Korean kingdom?', qKo:'금산사가 창건된 고대 왕국은?',
      opts:[{en:'Joseon',ko:'조선'},{en:'Goryeo',ko:'고려'},{en:'Baekje',ko:'백제'},{en:'Silla',ko:'신라'}],
      correct:2, factEn:'Geumsansa was founded in 599 AD during the Baekje Kingdom — over 1,400 years of history!', factKo:'금산사는 599년 백제 시대에 창건된 1,400년 이상의 역사를 자랑하는 고찰입니다!' },
    { qEn:'What scenic natural features surround Geumsansa?', qKo:'금산사 주변의 자연 경관은?',
      opts:[{en:'Coastal cliffs and ocean',ko:'해안 절벽과 바다'},{en:'Dense mountain forest and valley streams',ko:'울창한 산림과 계곡'},{en:'Desert plateau',ko:'사막 고원'},{en:'Flat rice paddies only',ko:'평야 논만 있음'}],
      correct:1, factEn:'Geumsansa is nestled in lush mountain forests and scenic valleys — beautiful in every season!', factKo:'금산사는 사계절 아름다운 울창한 숲과 계곡 속에 자리잡고 있습니다!' },
  ],
  loc_25: [
    { qEn:'Tongyeong is often called what nickname for its stunning coastal scenery?', qKo:'통영이 아름다운 해안 경관으로 얻은 별명은?',
      opts:[{en:'Korea\'s Venice',ko:'한국의 베네치아'},{en:'Naples of the East',ko:'동양의 나폴리'},{en:'Asia\'s Riviera',ko:'아시아의 리비에라'},{en:'Korea\'s Miami',ko:'한국의 마이애미'}],
      correct:1, factEn:'Tongyeong\'s picturesque harbor and cultural richness earned it the "Naples of the East" nickname!', factKo:'통영은 아름다운 항구와 풍부한 문화로 \'동양의 나폴리\'라는 별명을 얻었습니다!' },
    { qEn:'Which world-renowned composer was born in Tongyeong?', qKo:'통영 출신의 세계적인 작곡가는?',
      opts:[{en:'Psy',ko:'싸이'},{en:'Yun Isang (Isang Yun)',ko:'윤이상'},{en:'BTS\'s RM',ko:'BTS RM'},{en:'Lee Sunhee',ko:'이선희'}],
      correct:1, factEn:'Yun Isang (윤이상, 1917-1995) was a world-renowned composer born in Tongyeong — celebrated with an annual festival!', factKo:'윤이상(1917~1995)은 통영 출신의 세계적 작곡가 — 매년 통영국제음악제가 개최됩니다!' },
    { qEn:'What type of seafood is Tongyeong most famous for?', qKo:'통영을 대표하는 해산물은?',
      opts:[{en:'Tuna',ko:'참치'},{en:'Oysters (굴)',ko:'굴'},{en:'Salmon',ko:'연어'},{en:'King crab',ko:'킹크랩'}],
      correct:1, factEn:'Tongyeong\'s clean, cold waters produce some of Korea\'s finest oysters (굴) — plump and delicious!', factKo:'통영의 깨끗하고 차가운 바닷물에서 자란 굴은 통통하고 맛이 뛰어나 전국 최고로 인정받습니다!' },
    { qEn:'The Tongyeong Cable Car ascends which mountain for panoramic views?', qKo:'통영케이블카가 올라가는 산은?',
      opts:[{en:'Mireuksan (미륵산)',ko:'미륵산'},{en:'Namsan',ko:'남산'},{en:'Seoraksan',ko:'설악산'},{en:'Jirisan',ko:'지리산'}],
      correct:0, factEn:'Tongyeong Cable Car ascends Mireuksan (461m) for stunning views of 170+ islands in the sea!', factKo:'통영케이블카는 미륵산 정상까지 올라 통영 앞바다의 170여 개 섬을 한눈에 볼 수 있습니다!' },
    { qEn:'Tongyeong was the historic headquarters of which famous naval commander?', qKo:'통영이 역사적으로 본영이었던 유명 해군 장수는?',
      opts:[{en:'General Park Chung-hee',ko:'박정희 장군'},{en:'Admiral Yi Sun-sin (Three Naval Commands)',ko:'이순신 장군 (삼도수군통제영)'},{en:'General Kim Yu-sin',ko:'김유신 장군'},{en:'Admiral Yi Jong-mu',ko:'이종무 장군'}],
      correct:1, factEn:'Tongyeong was the seat of Korea\'s Three Naval Commands (삼도수군통제영) under the legendary Admiral Yi Sun-sin!', factKo:'통영은 임진왜란을 승리로 이끈 이순신 장군의 삼도수군통제영이 있던 역사적인 도시입니다!' },
  ],
  loc_26: [
    { qEn:'Geoje Island is the _____ largest island in South Korea.', qKo:'거제도는 대한민국에서 _____ 번째로 큰 섬입니다.',
      opts:[{en:'Largest',ko:'첫 번째'},{en:'Second largest',ko:'두 번째'},{en:'Third largest',ko:'세 번째'},{en:'Fourth largest',ko:'네 번째'}],
      correct:1, factEn:'Geoje (거제도) is South Korea\'s second-largest island — only Jeju Island is bigger!', factKo:'거제도는 제주도 다음으로 대한민국에서 두 번째로 큰 섬입니다!' },
    { qEn:'Geoje is internationally known as a hub for which major industry?', qKo:'거제가 세계적으로 알려진 주요 산업은?',
      opts:[{en:'Semiconductor manufacturing',ko:'반도체 제조'},{en:'Shipbuilding',ko:'조선업'},{en:'Automobile production',ko:'자동차 생산'},{en:'Textile manufacturing',ko:'섬유 생산'}],
      correct:1, factEn:'Geoje is home to two of the world\'s largest shipyards — Samsung Heavy Industries and HD Hyundai!', factKo:'거제에는 삼성중공업과 HD현대중공업 등 세계 최대 규모의 조선소가 위치합니다!' },
    { qEn:'What is the most famous scenic spot on Geoje Island?', qKo:'거제도에서 가장 유명한 경치 명소는?',
      opts:[{en:'Haeundae Beach',ko:'해운대 해수욕장'},{en:'Windy Hill (바람의 언덕) area',ko:'바람의 언덕'},{en:'Gyeongpo Beach',ko:'경포 해수욕장'},{en:'Sokcho Lighthouse',ko:'속초 등대'}],
      correct:1, factEn:'Windy Hill (바람의 언덕) near Dojangpo is an iconic scenic spot with windmills and stunning sea views!', factKo:'도장포 마을 위의 바람의 언덕은 풍차와 함께 펼쳐지는 아름다운 바다 경관으로 유명합니다!' },
    { qEn:'How is Geoje Island connected to the mainland?', qKo:'거제도는 육지와 어떻게 연결되어 있나요?',
      opts:[{en:'Only by ferry',ko:'여객선으로만'},{en:'By the Geoje Bridge and Geoga Grand Bridge',ko:'거제대교와 거가대교로'},{en:'By underwater tunnel only',ko:'해저 터널로만'},{en:'By airport only',ko:'공항으로만'}],
      correct:1, factEn:'Geoje is connected by the Geoje Bridge and the spectacular Geoga Grand Bridge (거가대교) to Busan!', factKo:'거제도는 거제대교와 부산까지 연결되는 거가대교로 육지와 이어집니다!' },
    { qEn:'What historical prisoner camp on Geoje Island is now a museum?', qKo:'현재 박물관으로 운영 중인 거제도의 역사적 수용소는?',
      opts:[{en:'Japanese colonial prison',ko:'일제강점기 형무소'},{en:'Korean War UN POW Camp (거제포로수용소)',ko:'거제포로수용소'},{en:'Cold War spy detention center',ko:'냉전 시대 첩보원 구금 시설'},{en:'World War I camp',ko:'제1차 세계대전 포로수용소'}],
      correct:1, factEn:'The Geoje POW Camp (거제포로수용소) held Korean War prisoners and is now a fascinating history museum!', factKo:'거제포로수용소는 한국전쟁 당시 포로를 수용했던 곳으로 현재 역사 교육 박물관으로 운영됩니다!' },
  ],
  loc_29: [
    { qEn:'Homigot is Korea\'s most famous spot for seeing what?', qKo:'호미곶이 한국에서 가장 유명한 이유는?',
      opts:[{en:'Sunset',ko:'일몰'},{en:'Lunar eclipse',ko:'월식'},{en:'New Year\'s Day sunrise',ko:'신년 해맞이 일출'},{en:'Northern Lights',ko:'오로라'}],
      correct:2, factEn:'Homigot is Korea\'s most famous New Year\'s sunrise spot — thousands gather on January 1 each year!', factKo:'호미곶은 매년 1월 1일 수만 명이 모이는 한국 최고의 해맞이 명소입니다!' },
    { qEn:'What iconic sculpture stands in the sea at Homigot?', qKo:'호미곶 바다 위에 솟아 있는 상징적인 조각품은?',
      opts:[{en:'A steel dragon',ko:'강철 용'},{en:'"Hands of Harmony" (상생의 손)',ko:'상생의 손'},{en:'A golden fish',ko:'황금 물고기'},{en:'A lighthouse keeper statue',ko:'등대지기 동상'}],
      correct:1, factEn:'"Hands of Harmony" (상생의 손) — one hand on land, one rising from the sea — is Homigot\'s iconic symbol!', factKo:'\'상생의 손\'은 육지에 하나, 바다에 하나로 배치된 호미곶의 상징 조형물입니다!' },
    { qEn:'Homigot is the _____ tip of the Korean peninsula.', qKo:'호미곶은 한반도의 어느 방향 끝에 위치하나요?',
      opts:[{en:'Northernmost',ko:'최북단'},{en:'Southernmost',ko:'최남단'},{en:'Easternmost',ko:'최동단'},{en:'Westernmost',ko:'최서단'}],
      correct:2, factEn:'Homigot is the easternmost point of the Korean mainland — the very first to greet the morning sun!', factKo:'호미곶은 한반도 육지의 최동단 — 대한민국에서 가장 먼저 태양을 맞이하는 곳입니다!' },
    { qEn:'Pohang, where Homigot is located, is famous for which global industry?', qKo:'호미곶이 위치한 포항이 세계적으로 유명한 산업은?',
      opts:[{en:'Tourism',ko:'관광업'},{en:'Steel production (POSCO)',ko:'철강 (포스코)'},{en:'Semiconductor chips',ko:'반도체'},{en:'Automobile manufacturing',ko:'자동차 제조'}],
      correct:1, factEn:'Pohang is home to POSCO (포스코), one of the world\'s largest steel companies!', factKo:'포항은 세계 최대 철강 기업 중 하나인 포스코(POSCO)의 본사가 있는 철강 도시입니다!' },
    { qEn:'What historic lighthouse at Homigot is a Korean cultural heritage site?', qKo:'한국 문화재로 지정된 호미곶 등대는?',
      opts:[{en:'Geomundo Lighthouse',ko:'거문도 등대'},{en:'Homigot Lighthouse (built 1908)',ko:'호미곶 등대 (1908년 건립)'},{en:'Somaemuldo Lighthouse',ko:'소매물도 등대'},{en:'Ganghwa Lighthouse',ko:'강화 등대'}],
      correct:1, factEn:'Homigot Lighthouse (1908) is a beautiful red-brick tower — one of Korea\'s most historic lighthouses!', factKo:'1908년에 건립된 호미곶 등대는 붉은 벽돌로 지어진 한국에서 가장 아름다운 역사적 등대 중 하나입니다!' },
  ],
  // ── Category fallback pools (for locations without specific questions)
  cat_heritage: [
    { qEn:'What is a \'hanok\'?', qKo:'\'한옥\'은 무엇인가요?',
      opts:[{en:'Korean noodle dish',ko:'한국 국수 요리'},{en:'Traditional Korean wooden house',ko:'한국 전통 목조 가옥'},{en:'A royal title',ko:'왕실 호칭'},{en:'A folk game',ko:'민속 놀이'}],
      correct:1, factEn:'Hanok (한옥) are traditional Korean wooden houses designed to harmonize with nature!', factKo:'한옥은 자연과 조화를 이루도록 설계된 한국 전통 목조 건축입니다!' },
    { qEn:'How many UNESCO World Heritage Sites does South Korea have?', qKo:'대한민국의 유네스코 세계유산 수는?',
      opts:[{en:'5',ko:'5개'},{en:'10',ko:'10개'},{en:'16',ko:'16개'},{en:'24',ko:'24개'}],
      correct:2, factEn:'South Korea has 16 UNESCO World Heritage Sites — from palaces to ancient tombs!', factKo:'대한민국에는 궁궐부터 고분군까지 16개의 유네스코 세계유산이 있습니다!' },
    { qEn:'What is the main religion historically practiced in Korean royal courts?', qKo:'한국 왕실에서 역사적으로 주로 행해진 종교는?',
      opts:[{en:'Christianity',ko:'기독교'},{en:'Confucianism',ko:'유교'},{en:'Islam',ko:'이슬람교'},{en:'Shinto',ko:'신토'}],
      correct:1, factEn:'Confucianism deeply shaped Korea\'s architecture, social customs, and family values!', factKo:'유교는 한국의 건축, 사회 관습, 가족 문화에 깊은 영향을 미쳤습니다!' },
    { qEn:'What is "dancheong" (단청)?', qKo:'\'단청(丹靑)\'은 무엇인가요?',
      opts:[{en:'Colorful decorative painting on wooden buildings',ko:'목조 건물에 그리는 화려한 장식 문양'},{en:'A type of Korean fermented food',ko:'한국 발효 음식의 일종'},{en:'A royal dance ceremony',ko:'왕실 무용 의식'},{en:'A Buddhist prayer ritual',ko:'불교 기도 의식'}],
      correct:0, factEn:'Dancheong (단청) is vibrant geometric painting on wooden structures — protecting the wood while symbolizing harmony!', factKo:'단청은 목조 건물에 그리는 오색 장식 — 나무를 보호하고 우주적 조화를 상징합니다!' },
    { qEn:'What ancient Korean script did King Sejong create in 1443?', qKo:'세종대왕이 1443년에 창제한 한국 문자는?',
      opts:[{en:'Hanja',ko:'한자'},{en:'Hangul',ko:'한글'},{en:'Idu',ko:'이두'},{en:'Hyangchal',ko:'향찰'}],
      correct:1, factEn:'King Sejong created Hangul (한글) so all Koreans could read and write — one of history\'s greatest literacy achievements!', factKo:'세종대왕은 모든 백성이 글을 읽고 쓸 수 있도록 한글을 창제했습니다 — 역사상 가장 위대한 문자 혁명!' },
  ],
  cat_culture: [
    { qEn:'What is \'hallyu\' (한류)?', qKo:'\'한류\'란 무엇인가요?',
      opts:[{en:'A Korean river',ko:'한국의 강 이름'},{en:'The global spread of Korean culture',ko:'한국 문화의 세계적 확산'},{en:'A traditional dance',ko:'전통 무용'},{en:'A type of food',ko:'한국 음식 종류'}],
      correct:1, factEn:'Hallyu (한류) — the Korean Wave of K-pop, K-drama, and K-beauty sweeping the globe!', factKo:'한류는 K팝, K드라마, K뷰티 등 한국 문화의 세계적 열풍입니다!' },
    { qEn:'What is a \'norebang\' (노래방)?', qKo:'\'노래방\'이란?',
      opts:[{en:'A tea ceremony',ko:'전통 다도 의식'},{en:'A private karaoke room',ko:'개인 노래방 룸'},{en:'A street food market',ko:'길거리 음식 시장'},{en:'A calligraphy studio',ko:'서예 스튜디오'}],
      correct:1, factEn:'Norebang (노래방) are private karaoke rooms — an essential part of Korean nightlife!', factKo:'노래방은 프라이빗 가라오케 룸 — 한국 문화의 필수 사교 공간입니다!' },
    { qEn:'What is \'jeong\' (정) in Korean culture?', qKo:'한국 문화에서 \'정(情)\'이란?',
      opts:[{en:'A type of fermented soup',ko:'발효 국물 요리'},{en:'A deep emotional bond built over time',ko:'시간을 통해 쌓이는 깊은 유대감'},{en:'A formal greeting',ko:'공식 인사'},{en:'A New Year custom',ko:'새해 풍습'}],
      correct:1, factEn:'Jeong (정) is a uniquely Korean concept — a profound connection formed through shared experience!', factKo:'정(情)은 함께한 시간을 통해 쌓이는 깊은 유대감 — 한국 특유의 정서입니다!' },
    { qEn:'How is kimchi traditionally preserved?', qKo:'김치는 전통적으로 어떻게 보존되나요?',
      opts:[{en:'By baking',ko:'굽기'},{en:'By lacto-fermentation',ko:'젖산 발효'},{en:'By freezing',ko:'냉동'},{en:'By sun drying',ko:'햇볕에 말리기'}],
      correct:1, factEn:'Kimchi is made through lacto-fermentation — creating probiotics and its distinctive tangy flavor!', factKo:'김치는 젖산 발효로 만들어져 유산균이 풍부하고 특유의 새콤한 맛을 냅니다!' },
    { qEn:'What is Korea\'s major autumn harvest festival called?', qKo:'한국의 가을 대명절은?',
      opts:[{en:'Seollal',ko:'설날'},{en:'Chuseok',ko:'추석'},{en:'Daeboreum',ko:'정월대보름'},{en:'Dano',ko:'단오'}],
      correct:1, factEn:'Chuseok (추석) is Korea\'s harvest thanksgiving — families gather, make songpyeon rice cakes, and honor ancestors!', factKo:'추석은 한국의 가을 대명절 — 온 가족이 모여 송편을 만들고 조상에게 차례를 지냅니다!' },
  ],
  cat_landmark: [
    { qEn:'What is Korea\'s highest mountain?', qKo:'대한민국 최고봉은?',
      opts:[{en:'Seoraksan',ko:'설악산'},{en:'Jirisan',ko:'지리산'},{en:'Hallasan on Jeju Island',ko:'한라산 (제주도)'},{en:'Bukhansan',ko:'북한산'}],
      correct:2, factEn:'Hallasan on Jeju Island at 1,950 m is South Korea\'s highest peak!', factKo:'제주도 한라산(1,950m)이 대한민국 최고봉입니다!' },
    { qEn:'What is the Han River in Seoul famous for?', qKo:'서울 한강이 유명한 이유는?',
      opts:[{en:'World\'s fastest current',ko:'세계 최빠른 유속'},{en:'Riverside parks, cycling & picnics',ko:'강변 공원, 자전거, 피크닉'},{en:'Its saltwater',ko:'소금물'},{en:'Ancient shipwrecks',ko:'고대 난파선'}],
      correct:1, factEn:'Hangang Park is where Seoulites relax with ramyeon, chimaek (fried chicken + beer), and sunsets!', factKo:'한강공원은 서울 시민들의 피크닉 성지 — 라면과 치맥이 필수!' },
    { qEn:'What is Korea\'s second-largest city?', qKo:'대한민국 제2의 도시는?',
      opts:[{en:'Incheon',ko:'인천'},{en:'Busan',ko:'부산'},{en:'Daegu',ko:'대구'},{en:'Gwangju',ko:'광주'}],
      correct:1, factEn:'Busan is South Korea\'s second-largest city and a major port — famous for beaches and seafood!', factKo:'부산은 대한민국 제2의 도시이자 주요 항구 도시 — 해변과 해산물로 유명합니다!' },
    { qEn:'Jeju Island holds which rare UNESCO triple designation?', qKo:'제주도가 보유한 유네스코 3관왕 지정은?',
      opts:[{en:'World Heritage + Biosphere Reserve + Geopark',ko:'세계유산 + 생물권 보전 + 세계지질공원'},{en:'Creative City + Heritage + Memory',ko:'창의 도시 + 세계유산 + 기록유산'},{en:'Marine Park + Biosphere + Geopark',ko:'해양 공원 + 생물권 + 지질공원'},{en:'Heritage + UNESCO School + Intangible',ko:'세계유산 + 유네스코 학교 + 무형유산'}],
      correct:0, factEn:'Jeju Island holds UNESCO World Heritage, Biosphere Reserve, and Global Geopark designations — a unique triple crown!', factKo:'제주도는 유네스코 세계유산, 생물권 보전 지역, 세계지질공원을 동시에 보유한 세계 유일의 섬입니다!' },
    { qEn:'What is the Korean term for the country\'s traditional heated floor system?', qKo:'한국의 전통 바닥 난방 방식의 이름은?',
      opts:[{en:'Ondol',ko:'온돌'},{en:'Hanok',ko:'한옥'},{en:'Maru',ko:'마루'},{en:'Dorang',ko:'도랑'}],
      correct:0, factEn:'Ondol (온돌) is Korea\'s brilliant underfloor heating system — still used in modern Korean homes today!', factKo:'온돌은 한국의 독창적인 바닥 난방 시스템 — 현대 한국 주택에서도 여전히 사용됩니다!' },
  ],
  cat_shopping: [
    { qEn:'What is \'K-beauty\' primarily known for?', qKo:'\'K-뷰티\'로 유명한 것은?',
      opts:[{en:'Heavy dramatic makeup',ko:'강렬한 메이크업'},{en:'Innovative skincare & sheet masks',ko:'혁신적인 스킨케어 & 시트 마스크'},{en:'Traditional herbal remedies only',ko:'전통 한약 치료만'},{en:'Inexpensive surgery',ko:'저렴한 성형수술'}],
      correct:1, factEn:'K-beauty pioneered the 10-step skincare routine and sheet masks, loved worldwide!', factKo:'K-뷰티는 10단계 스킨케어와 시트 마스크를 선도해 전 세계적으로 사랑받습니다!' },
    { qEn:'What are \'pojangmacha\' (포장마차)?', qKo:'\'포장마차\'란?',
      opts:[{en:'Department store food courts',ko:'백화점 식당가'},{en:'Orange-tented street food stalls',ko:'주황 천막 길거리 음식 노점'},{en:'Underground shopping malls',ko:'지하 쇼핑몰'},{en:'Palace gift shops',ko:'궁궐 기념품점'}],
      correct:1, factEn:'Pojangmacha are iconic street food carts — tteokbokki, fish cake, and soju await!', factKo:'포장마차는 주황 천막 아래 떡볶이, 오뎅, 소주를 즐기는 서민 음식 문화입니다!' },
    { qEn:'What is Korea\'s most famous instant noodle brand, sold in convenience stores everywhere?', qKo:'편의점 어디서나 볼 수 있는 한국 대표 인스턴트 라면은?',
      opts:[{en:'Shin Ramyeon (신라면)',ko:'신라면'},{en:'Maggi',ko:'매기'},{en:'Cup Noodles',ko:'컵누들'},{en:'Samyang Ramen',ko:'삼양라면'}],
      correct:0, factEn:'Shin Ramyeon (신라면) by Nongshim is South Korea\'s best-selling instant noodle, beloved worldwide!', factKo:'농심 신라면은 대한민국 No.1 인스턴트 라면으로 전 세계에서 사랑받습니다!' },
    { qEn:'What is a "daiso" (다이소) in Korea?', qKo:'한국의 \'다이소\'란?',
      opts:[{en:'A luxury department store',ko:'고급 백화점'},{en:'A discount variety store (items from ₩1,000)',ko:'균일가 생활용품점 (1,000원부터)'},{en:'A traditional market',ko:'전통 시장'},{en:'A high-end cosmetics brand',ko:'고급 화장품 브랜드'}],
      correct:1, factEn:'Daiso (다이소) is Korea\'s beloved discount store — great for affordable souvenirs and everyday items!', factKo:'다이소는 한국의 국민 균일가 매장 — 저렴한 기념품과 생활용품의 천국입니다!' },
    { qEn:'What K-food became a global internet challenge sensation?', qKo:'전 세계 인터넷 챌린지를 일으킨 한국 음식은?',
      opts:[{en:'Tteokbokki',ko:'떡볶이'},{en:'Buldak fire noodles (불닭볶음면)',ko:'불닭볶음면'},{en:'Bibimbap',ko:'비빔밥'},{en:'Samgyeopsal',ko:'삼겹살'}],
      correct:1, factEn:'Buldak fire noodles (불닭볶음면) sparked the global "fire noodle challenge" — spicy and addictive!', factKo:'불닭볶음면은 전 세계 \'파이어 누들 챌린지\'를 일으킨 매콤한 한국 음식의 아이콘입니다!' },
  ],
};

// Category → fallback quiz pool
var CAT_QUIZ_KEY = { heritage:'cat_heritage', culture:'cat_culture', landmark:'cat_landmark', shopping:'cat_shopping' };

// ── Quiz State & Functions ─────────────────────────────────────────────────────
var activeQuiz = null; // { questions, currentIdx, score, answered, type, id }

function startQuiz(type, id) {
  var bankKey = type === 'event' ? 'event_' + id : 'loc_' + id;
  var specific = (QUIZ_BANK[bankKey] || []).slice();

  // Pad with category pool if needed
  if (type === 'location') {
    var loc = LOCATIONS.find(function(l) { return l.id === Number(id); });
    var catKey = loc ? (CAT_QUIZ_KEY[loc.category] || 'cat_landmark') : 'cat_landmark';
    (QUIZ_BANK[catKey] || []).forEach(function(q) { if (specific.length < 5) specific.push(q); });
  } else {
    (QUIZ_BANK['cat_culture'] || []).forEach(function(q) { if (specific.length < 5) specific.push(q); });
  }

  var questions = quizShuffle(specific).slice(0, 5);
  if (questions.length === 0) { showToast(currentLang==='ko'?'퀴즈 준비 중입니다!':'Quiz coming soon!'); return; }

  activeQuiz = { questions:questions, currentIdx:0, score:0, answered:false, type:type, id:id };

  var overlay = document.getElementById('quizOverlay');
  if (overlay && overlay.classList.contains('open')) {
    renderQuizQuestion(0);
  } else {
    closeSheet();
    setTimeout(function() {
      var ov = document.getElementById('quizOverlay');
      if (ov) { renderQuizQuestion(0); ov.classList.add('open'); }
    }, 280);
  }
}

function quizShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function closeQuiz() {
  var ov = document.getElementById('quizOverlay');
  if (ov) ov.classList.remove('open');
  activeQuiz = null;
}

function renderQuizQuestion(idx) {
  if (!activeQuiz) return;
  var q = activeQuiz.questions[idx];
  var isKo = currentLang === 'ko';
  var total = activeQuiz.questions.length;
  var qText = isKo ? q.qKo : q.qEn;
  var fillPct = Math.round((idx / total) * 100);
  var isLast = idx === total - 1;
  var nextLbl = isLast ? (isKo ? '결과 보기 🏆' : 'See Results 🏆') : (isKo ? '다음 →' : 'Next →');

  var optsHtml = q.opts.map(function(opt, i) {
    var label = isKo ? opt.ko : opt.en;
    return '<button class="quiz-opt" onclick="selectQuizAnswer(' + i + ')">'
      + '<span class="quiz-opt-letter">' + ['A','B','C','D'][i] + '</span>'
      + '<span class="quiz-opt-text">' + label + '</span>'
    + '</button>';
  }).join('');

  var qNumLbl = isKo ? (idx+1)+'번 문제' : 'Question '+(idx+1);

  document.getElementById('quizInner').innerHTML =
    '<div class="quiz-top">'
      + '<button class="quiz-close" onclick="closeQuiz()" aria-label="Close">✕</button>'
      + '<div class="quiz-prog-wrap">'
        + '<div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:'+fillPct+'%"></div></div>'
        + '<span class="quiz-prog-label">'+(idx+1)+' / '+total+'</span>'
      + '</div>'
    + '</div>'
    + '<div class="quiz-body">'
      + '<div class="quiz-q-tag">' + qNumLbl + '</div>'
      + '<p class="quiz-question">' + qText + '</p>'
      + '<div class="quiz-opts" id="quizOpts">' + optsHtml + '</div>'
      + '<div class="quiz-feedback" id="quizFeedback"></div>'
      + '<button class="quiz-next-btn" id="quizNextBtn" style="display:none" onclick="advanceQuiz()">' + nextLbl + '</button>'
    + '</div>';
}

function selectQuizAnswer(optIdx) {
  if (!activeQuiz || activeQuiz.answered) return;
  activeQuiz.answered = true;

  var q = activeQuiz.questions[activeQuiz.currentIdx];
  var isCorrect = optIdx === q.correct;
  if (isCorrect) activeQuiz.score++;

  var isKo = currentLang === 'ko';

  // Highlight all option buttons
  document.querySelectorAll('.quiz-opt').forEach(function(btn, i) {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === optIdx) btn.classList.add('wrong');
  });

  // Animate selected button
  var selected = document.querySelectorAll('.quiz-opt')[optIdx];
  if (selected) selected.classList.add('pop');

  // Feedback panel
  var fact = isKo ? q.factKo : q.factEn;
  var fbEl = document.getElementById('quizFeedback');
  if (fbEl) {
    fbEl.className = 'quiz-feedback show ' + (isCorrect ? 'correct' : 'wrong');
    fbEl.innerHTML =
      '<span class="quiz-fb-emoji">' + (isCorrect ? '🎉' : '😅') + '</span>'
      + '<div class="quiz-fb-text">'
        + '<strong>' + (isCorrect ? (isKo?'정답이에요!':'Correct!') : (isKo?'아쉬워요!':'Not quite!')) + '</strong>'
        + '<p>' + fact + '</p>'
      + '</div>';
  }

  var nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) nextBtn.style.display = 'flex';
}

function advanceQuiz() {
  if (!activeQuiz) return;
  var next = activeQuiz.currentIdx + 1;
  if (next >= activeQuiz.questions.length) {
    showQuizResult();
  } else {
    activeQuiz.currentIdx = next;
    activeQuiz.answered = false;
    // Slide-out current, slide-in next
    var body = document.querySelector('.quiz-body');
    if (body) { body.classList.add('slide-out'); setTimeout(function() { renderQuizQuestion(next); }, 250); }
    else { renderQuizQuestion(next); }
  }
}

// ── Rewards & Points System ───────────────────────────────────────────────────
var QUIZ_SOUVENIRS = {
  'location_0':  { emoji:'👑', nameEn:'Royal Palace Seal',      nameKo:'왕실 인장',        rarity:'legendary' },
  'location_1':  { emoji:'🏘️', nameEn:'Bukchon Hanok Token',    nameKo:'북촌 한옥 토큰',   rarity:'rare'      },
  'location_2':  { emoji:'🌃', nameEn:'Seoul Skyline Pin',      nameKo:'서울 야경 핀',     rarity:'rare'      },
  'location_3':  { emoji:'🖼️', nameEn:'Insadong Art Stamp',     nameKo:'인사동 예술 스탬프', rarity:'common'  },
  'location_4':  { emoji:'💄', nameEn:'Myeongdong K-Beauty Kit',nameKo:'명동 K뷰티 키트',  rarity:'common'    },
  'location_5':  { emoji:'🌿', nameEn:'Secret Garden Leaf',     nameKo:'비원 나뭇잎 배지', rarity:'legendary' },
  'location_6':  { emoji:'🏰', nameEn:'Suwon Fortress Badge',   nameKo:'수원화성 배지',    rarity:'rare'      },
  'location_7':  { emoji:'❄️', nameEn:'Winter Sonata Ribbon',   nameKo:'겨울연가 리본',    rarity:'legendary' },
  'location_8':  { emoji:'🏺', nameEn:'Folk Village Relic',     nameKo:'민속촌 유물',      rarity:'common'    },
  'location_9':  { emoji:'🏔️', nameEn:'Seoraksan Peak Badge',   nameKo:'대청봉 등정 배지', rarity:'legendary' },
  'location_10': { emoji:'✒️', nameEn:'Ojukheon Scholar Seal',  nameKo:'오죽헌 선비 인장', rarity:'rare'      },
  'location_11': { emoji:'🌊', nameEn:'Sokcho Sea Shell',       nameKo:'속초 조개껍데기',  rarity:'common'    },
  'location_12': { emoji:'🏯', nameEn:'Gongsanseong Fortress Key',nameKo:'공산성 열쇠',    rarity:'rare'      },
  'location_13': { emoji:'⚜️', nameEn:'Baekje Dynasty Seal',    nameKo:'백제 왕실 인장',   rarity:'legendary' },
  'location_14': { emoji:'🌅', nameEn:'Taean Sunset Pin',       nameKo:'태안 해넘이 핀',   rarity:'common'    },
  'location_15': { emoji:'🗝️', nameEn:'Sangdang Fortress Key',  nameKo:'상당산성 열쇠',    rarity:'common'    },
  'location_16': { emoji:'🦅', nameEn:'Danyang Cliff Eagle',    nameKo:'단양 독수리 배지', rarity:'rare'      },
  'location_17': { emoji:'♨️', nameEn:'Suanbo Hot Spring Token',nameKo:'수안보 온천 토큰',  rarity:'common'   },
  'location_18': { emoji:'🚢', nameEn:'Expo Marine Compass',    nameKo:'엑스포 나침반',    rarity:'rare'      },
  'location_19': { emoji:'🦢', nameEn:'Suncheon Crane Feather', nameKo:'순천만 두루미 깃털', rarity:'legendary'},
  'location_20': { emoji:'🍵', nameEn:'Boseong Tea Leaf',       nameKo:'보성 녹차 잎',     rarity:'rare'      },
  'location_21': { emoji:'🍚', nameEn:'Bibimbap Master Seal',   nameKo:'비빔밥 마스터 인장', rarity:'legendary'},
  'location_22': { emoji:'🗻', nameEn:'Maisan Twin Peak Badge', nameKo:'마이산 쌍봉 배지', rarity:'rare'      },
  'location_23': { emoji:'🛕', nameEn:'Geumsansa Temple Bell',  nameKo:'금산사 범종 배지',  rarity:'rare'     },
  'location_24': { emoji:'🎨', nameEn:'Gamcheon Mural Badge',   nameKo:'감천 벽화 배지',   rarity:'legendary' },
  'location_25': { emoji:'⚓', nameEn:'Tongyeong Harbor Anchor',nameKo:'통영 항구 닻',     rarity:'common'    },
  'location_26': { emoji:'🏝️', nameEn:'Geoje Island Shell',     nameKo:'거제도 조개',      rarity:'common'    },
  'location_27': { emoji:'🛕', nameEn:'Bulguksa Temple Seal',   nameKo:'불국사 사찰 인장', rarity:'legendary' },
  'location_28': { emoji:'🎭', nameEn:'Hahoe Mask Token',       nameKo:'하회탈 토큰',      rarity:'legendary' },
  'location_29': { emoji:'🌄', nameEn:'Homigot Sunrise Badge',  nameKo:'호미곶 일출 배지', rarity:'rare'      },
  'event_e0':    { emoji:'🪣', nameEn:'Mud Festival Badge',     nameKo:'머드 축제 배지',   rarity:'rare'      },
  'event_e1':    { emoji:'🌸', nameEn:'Cherry Blossom Petal',   nameKo:'벚꽃 꽃잎',       rarity:'rare'      },
  'event_e2':    { emoji:'🎬', nameEn:'BIFF Film Ticket',       nameKo:'BIFF 영화 티켓',   rarity:'legendary' },
  'event_e3':    { emoji:'🎭', nameEn:'Andong Mask Badge',      nameKo:'안동 탈 배지',     rarity:'rare'      },
};
var SOUVENIR_RARITY_LABELS = {
  legendary: { en:'✨ Legendary', ko:'✨ 전설', color:'#f59e0b' },
  rare:      { en:'💎 Rare',      ko:'💎 희귀', color:'#8b5cf6' },
  common:    { en:'🔵 Common',    ko:'🔵 일반', color:'#3b82f6' },
};
// Points per correct answer + bonuses
var QUIZ_PTS_PER_CORRECT = 100;
var QUIZ_PTS_PERFECT_BONUS = 150;

function loadPointsData() {
  try { return JSON.parse(localStorage.getItem('tapkorea_points') || '{"total":0}'); } catch(e) { return {total:0}; }
}
function savePointsData(data) { localStorage.setItem('tapkorea_points', JSON.stringify(data)); }
function getTotalPoints() { return loadPointsData().total; }

function loadRewards() {
  try { return JSON.parse(localStorage.getItem('tapkorea_rewards') || '[]'); } catch(e) { return []; }
}
function saveRewards(arr) { localStorage.setItem('tapkorea_rewards', JSON.stringify(arr)); }

function awardQuizPoints(correct, total) {
  var pts = correct * QUIZ_PTS_PER_CORRECT + (correct === total ? QUIZ_PTS_PERFECT_BONUS : 0);
  var data = loadPointsData();
  data.total = (data.total || 0) + pts;
  savePointsData(data);
  return pts;
}

function awardSouvenir(type, id) {
  var key = type + '_' + id;
  var souvenir = QUIZ_SOUVENIRS[key];
  if (!souvenir) return { souvenir: null, isNew: false };
  var rewards = loadRewards();
  var existing = rewards.find(function(r) { return r.key === key; });
  if (!existing) {
    rewards.push({ key:key, type:type, id:String(id), emoji:souvenir.emoji,
      nameEn:souvenir.nameEn, nameKo:souvenir.nameKo,
      rarity:souvenir.rarity, earnedAt:Date.now() });
    saveRewards(rewards);
    return { souvenir:souvenir, isNew:true };
  }
  return { souvenir:souvenir, isNew:false };
}

function getQuizRank(pct) {
  if (pct === 1)    return { en:'Top 5%',  ko:'상위 5%',  color:'#f59e0b' };
  if (pct >= 0.67)  return { en:'Top 15%', ko:'상위 15%', color:'#8b5cf6' };
  if (pct >= 0.34)  return { en:'Top 42%', ko:'상위 42%', color:'#3b82f6' };
  return              { en:'Top 78%', ko:'상위 78%', color:'#6b7280' };
}

function showQuizResult() {
  if (!activeQuiz) return;
  var correct = activeQuiz.score;
  var total   = activeQuiz.questions.length;
  var pct     = correct / total;
  var isKo    = currentLang === 'ko';

  // Award points & souvenir
  var ptsEarned  = awardQuizPoints(correct, total);
  var totalPts   = getTotalPoints();
  var souvenirResult = awardSouvenir(activeQuiz.type, activeQuiz.id);
  var rank = getQuizRank(pct);

  // Score /100
  var score100 = Math.round(pct * 100);

  // Title & header emoji
  var titleEmoji, title;
  if (pct === 1)       { titleEmoji='🏆'; title=isKo?'완벽해요!':'Perfect Score!'; }
  else if (pct>=0.67)  { titleEmoji='🌟'; title=isKo?'아주 잘했어요!':'Great Job!'; }
  else if (pct>=0.34)  { titleEmoji='😊'; title=isKo?'잘 했어요!':'Good Effort!'; }
  else                 { titleEmoji='🗺️'; title=isKo?'계속 도전하세요!':'Keep Exploring!'; }

  // Stats grid
  var scoreLbl   = isKo?'점수':'Score';
  var rankLbl    = isKo?'순위':'Rank';
  var correctLbl = isKo?'정답':'Correct';
  var rankVal    = isKo ? rank.ko : rank.en;

  var statsHtml =
    '<div class="qr-stats-grid">'
      + '<div class="qr-stat">'
        + '<span class="qr-stat-val">' + score100 + '<span class="qr-stat-unit">/100</span></span>'
        + '<span class="qr-stat-lbl">' + scoreLbl + '</span>'
      + '</div>'
      + '<div class="qr-stat-divider"></div>'
      + '<div class="qr-stat">'
        + '<span class="qr-stat-val rank-val" style="color:' + rank.color + '">' + rankVal + '</span>'
        + '<span class="qr-stat-lbl">' + rankLbl + '</span>'
      + '</div>'
      + '<div class="qr-stat-divider"></div>'
      + '<div class="qr-stat">'
        + '<span class="qr-stat-val">' + correct + '<span class="qr-stat-unit">/' + total + '</span></span>'
        + '<span class="qr-stat-lbl">' + correctLbl + '</span>'
      + '</div>'
    + '</div>';

  // Points row
  var ptsEarnedLbl = isKo ? '+'+ptsEarned+' 포인트 획득' : '+'+ptsEarned+' pts earned';
  var ptsTotalLbl  = isKo ? '💎 누적 '+totalPts.toLocaleString()+' 포인트' : '💎 '+totalPts.toLocaleString()+' pts total';
  if (pct === 1) ptsEarnedLbl += (isKo ? ' (퍼펙트 보너스 포함!)' : ' (perfect bonus!)');

  var ptsHtml =
    '<div class="qr-points-row">'
      + '<span class="qr-pts-earned">' + ptsEarnedLbl + '</span>'
      + '<span class="qr-pts-total">' + ptsTotalLbl + '</span>'
    + '</div>';

  // Souvenir card
  var souvenirHtml = '';
  if (souvenirResult.souvenir) {
    var sv = souvenirResult.souvenir;
    var svName = isKo ? sv.nameKo : sv.nameEn;
    var rar = SOUVENIR_RARITY_LABELS[sv.rarity] || SOUVENIR_RARITY_LABELS.common;
    var rarLabel = isKo ? rar.ko : rar.en;
    var newBadge = souvenirResult.isNew ? '<span class="qr-sv-new">' + (isKo?'NEW!':'NEW!') + '</span>' : '<span class="qr-sv-dup">' + (isKo?'보유 중':'Collected') + '</span>';
    var svMsg = isKo ? '🎁 기념품을 획득했습니다!' : '🎁 You earned a souvenir!';
    souvenirHtml =
      '<div class="qr-souvenir-card">'
        + '<div class="qr-sv-top">'
          + '<span class="qr-sv-msg">' + svMsg + '</span>'
          + newBadge
        + '</div>'
        + '<div class="qr-sv-emoji">' + sv.emoji + '</div>'
        + '<div class="qr-sv-name">' + svName + '</div>'
        + '<span class="qr-sv-rarity" style="color:' + rar.color + ';border-color:' + rar.color + '40;background:' + rar.color + '14">' + rarLabel + '</span>'
      + '</div>';
  }

  // Action buttons
  var retryLbl   = isKo?'다시 도전 🔄':'Try Again 🔄';
  var mapLbl     = isKo?'지도로 돌아가기 🗺️':'Back to Map 🗺️';
  var rewardsLbl = isKo?'내 보상 보기 🎖️':'My Rewards 🎖️';

  var actionsHtml =
    '<div class="qr-actions">'
      + '<button class="qr-btn-rewards" onclick="openRewardsSheet()">' + rewardsLbl + '</button>'
      + '<div class="qr-actions-row">'
        + '<button class="qr-btn-retry" onclick="startQuiz(\'' + activeQuiz.type + '\',\'' + activeQuiz.id + '\')">' + retryLbl + '</button>'
        + '<button class="qr-btn-map"   onclick="closeQuiz()">' + mapLbl + '</button>'
      + '</div>'
    + '</div>';

  document.getElementById('quizInner').innerHTML =
    '<div class="quiz-result">'
      + '<div class="qr-header">'
        + '<div class="qr-header-emoji">' + titleEmoji + '</div>'
        + '<h2 class="qr-title">' + title + '</h2>'
      + '</div>'
      + statsHtml
      + ptsHtml
      + souvenirHtml
      + actionsHtml
    + '</div>';
}

// ── Rewards Sheet ──────────────────────────────────────────────────────────────
function openRewardsSheet() {
  closeQuiz();
  var isKo = currentLang === 'ko';
  var rewards = loadRewards();
  var totalPts = getTotalPoints();
  var title = isKo ? '내 보상' : 'My Rewards';
  var ptsLbl = isKo ? '포인트' : 'pts';
  var emptyMsg = isKo ? '아직 획득한 기념품이 없습니다.\n퀴즈를 풀어 보상을 받아보세요!' : 'No souvenirs yet.\nComplete quizzes to earn rewards!';

  var gridHtml = rewards.length === 0
    ? '<p class="rewards-empty">' + emptyMsg.replace('\n','<br>') + '</p>'
    : '<div class="rewards-grid">'
        + rewards.map(function(r) {
            var rar = SOUVENIR_RARITY_LABELS[r.rarity] || SOUVENIR_RARITY_LABELS.common;
            var name = isKo ? r.nameKo : r.nameEn;
            return '<div class="rewards-item">'
              + '<div class="rewards-item-emoji">' + r.emoji + '</div>'
              + '<span class="rewards-item-name">' + name + '</span>'
              + '<span class="rewards-item-rarity" style="color:' + rar.color + '">' + (isKo?rar.ko:rar.en) + '</span>'
            + '</div>';
          }).join('')
      + '</div>';

  var rankTitle = isKo ? '내 랭킹' : 'My Rank';
  var level = getExplorerLevel(totalPts, isKo);

  var html =
    '<div class="rewards-header">'
      + '<h3 class="rewards-title">' + title + '</h3>'
      + '<button class="modal-close-btn" onclick="closeSheet()">✕</button>'
    + '</div>'
    + '<div class="rewards-profile-row">'
      + '<div class="rewards-level-badge" style="background:' + level.color + '22;border-color:' + level.color + '55">'
        + '<span class="rewards-level-icon">' + level.icon + '</span>'
        + '<div>'
          + '<span class="rewards-level-title" style="color:' + level.color + '">' + level.title + '</span>'
          + '<span class="rewards-level-sub">' + (isKo?'탐험가 레벨':'Explorer Level') + '</span>'
        + '</div>'
      + '</div>'
      + '<div class="rewards-pts-badge">'
        + '<span class="rewards-pts-num">' + totalPts.toLocaleString() + '</span>'
        + '<span class="rewards-pts-label">💎 ' + ptsLbl + '</span>'
      + '</div>'
    + '</div>'
    + '<div class="rewards-progress-section">'
      + buildLevelProgressHtml(totalPts, isKo)
    + '</div>'
    + '<h4 class="rewards-collection-title">'
      + (isKo ? '🎁 기념품 컬렉션' : '🎁 Souvenir Collection')
      + '<span class="rewards-count-badge">' + rewards.length + '</span>'
    + '</h4>'
    + gridHtml;

  openDetail('🎖️', 'linear-gradient(135deg,#1e1b4b,#4c1d95,#7c3aed)', html);
}

function getExplorerLevel(pts, isKo) {
  if (pts >= 3000) return { icon:'🏆', title:isKo?'전설 탐험가':'Legendary Explorer', color:'#f59e0b', next:null,    threshold:3000 };
  if (pts >= 1500) return { icon:'💎', title:isKo?'마스터 탐험가':'Master Explorer',   color:'#8b5cf6', next:3000,   threshold:1500 };
  if (pts >= 700)  return { icon:'🌟', title:isKo?'고급 탐험가':'Expert Explorer',     color:'#3b82f6', next:1500,   threshold:700  };
  if (pts >= 250)  return { icon:'🗺️', title:isKo?'탐험가':'Explorer',                color:'#10b981', next:700,    threshold:250  };
  return               { icon:'🌱', title:isKo?'초보 탐험가':'Beginner Explorer',      color:'#6b7280', next:250,    threshold:0    };
}

function buildLevelProgressHtml(totalPts, isKo) {
  var level = getExplorerLevel(totalPts, isKo);
  if (!level.next) return '<p class="rewards-max-level">' + (isKo?'🎉 최고 레벨 달성!':'🎉 Max level reached!') + '</p>';
  var pct = Math.min(100, Math.round(((totalPts - level.threshold) / (level.next - level.threshold)) * 100));
  var nextLevel = getExplorerLevel(level.next, isKo);
  return '<div class="rewards-prog-row">'
    + '<span class="rewards-prog-cur">' + (isKo?level.title:level.title) + '</span>'
    + '<span class="rewards-prog-next">' + (isKo?nextLevel.title:nextLevel.title) + '</span>'
  + '</div>'
  + '<div class="rewards-prog-bar"><div class="rewards-prog-fill" style="width:' + pct + '%;background:' + level.color + '"></div></div>'
  + '<span class="rewards-prog-pct">' + pct + '% — ' + totalPts + ' / ' + level.next + ' ' + (isKo?'포인트':'pts') + '</span>';
}

// ── NFC Demo Tags ─────────────────────────────────────────────────────────────
const NFC_DEMO_TAGS = [
  { type:'location', id:0,  labelKo:'경복궁',           labelEn:'Gyeongbokgung Palace' },
  { type:'location', id:21, labelKo:'전주 한옥마을',    labelEn:'Jeonju Hanok Village' },
  { type:'location', id:27, labelKo:'경주 불국사',      labelEn:'Bulguksa Temple' },
  { type:'location', id:24, labelKo:'부산 감천문화마을', labelEn:'Gamcheon Culture Village' },
  { type:'location', id:9,  labelKo:'설악산 국립공원',  labelEn:'Seoraksan National Park' },
  { type:'location', id:19, labelKo:'순천만 습지',      labelEn:'Suncheonman Wetlands' },
  { type:'event',    id:'e0', labelKo:'보령 머드 축제', labelEn:'Boryeong Mud Festival' },
  { type:'event',    id:'e1', labelKo:'진해 벚꽃 축제', labelEn:'Jinhae Cherry Blossom' },
];

// ── NFC Enriched Content ───────────────────────────────────────────────────────
const NFC_ENRICHED = {
  'location_0': {
    gallery: ['🏯','🌿','🚪','👘','🌸','🎋','🏛️','🌅'],
    highlights: [
      { icon:'⏰', textKo:'매일 오전 9시 ~ 오후 6시 운영', textEn:'Open daily 9 AM – 6 PM' },
      { icon:'💰', textKo:'성인 ₩3,000 / 청소년 ₩1,500', textEn:'Adult ₩3,000 / Youth ₩1,500' },
      { icon:'👘', textKo:'한복 착용 시 무료 입장', textEn:'Free entry in traditional hanbok' },
      { icon:'🎧', textKo:'한국어·영어·중국어·일본어 오디오 가이드 제공', textEn:'Audio guides in 4 languages' },
    ],
    tipKo: '수문장 교대식은 오전 10시와 오후 2시에 진행됩니다. 미리 도착하세요!',
    tipEn: 'The Royal Guard Changing ceremony runs at 10 AM & 2 PM — arrive early!',
    nearbyPartnerIds: ['p0'],
  },
  'location_21': {
    gallery: ['🏘️','🍚','🎭','🏮','🎨','🛕','🌾','🍵'],
    highlights: [
      { icon:'🚶', textKo:'도보 여행 최적 — 24시간 개방', textEn:'Best explored on foot — open 24 hrs' },
      { icon:'🍚', textKo:'전주 비빔밥 발상지', textEn:'Birthplace of Jeonju bibimbap' },
      { icon:'🏯', textKo:'800여 채의 전통 한옥 보존', textEn:'800+ preserved traditional hanok houses' },
      { icon:'🎭', textKo:'탈춤·판소리 공연 상시 진행', textEn:'Regular mask dance & pansori performances' },
    ],
    tipKo: '골목 안쪽 작은 카페에서 전통 한과와 식혜를 꼭 맛보세요.',
    tipEn: 'Duck into the back alleys for traditional rice cake and sikhye at cozy tea houses.',
    nearbyPartnerIds: ['p3'],
  },
  'location_27': {
    gallery: ['🛕','🪨','🌲','🪷','🔔','🌙','🏞️','✨'],
    highlights: [
      { icon:'🏆', textKo:'유네스코 세계문화유산 등재', textEn:'UNESCO World Heritage Site' },
      { icon:'⏰', textKo:'계절별 운영 시간 상이 — 연중무휴', textEn:'Seasonal hours — open year-round' },
      { icon:'💰', textKo:'성인 ₩6,000', textEn:'Adult ₩6,000' },
      { icon:'🚌', textKo:'경주 시내에서 버스 10번 이용', textEn:'Bus No. 10 from Gyeongju city center' },
    ],
    tipKo: '석굴암은 불국사에서 셔틀버스로 20분 거리. 패키지 티켓 구입을 추천합니다.',
    tipEn: 'Seokguram Grotto is 20 min by shuttle from Bulguksa — buy a combo ticket.',
    nearbyPartnerIds: [],
  },
  'location_24': {
    gallery: ['🎨','🏘️','🌈','🖼️','🐟','🌊','📸','🎭'],
    highlights: [
      { icon:'🎨', textKo:'40여 개 골목에 벽화 예술 작품', textEn:'40+ alleys filled with vibrant murals' },
      { icon:'🚶', textKo:'도보 탐방 약 1~2시간', textEn:'1–2 hour walking exploration' },
      { icon:'📸', textKo:'포토 스팟 : 어린왕자 벽화, 물고기 계단', textEn:'Photo spots: Little Prince mural, fish stairs' },
      { icon:'☕', textKo:'골목 카페와 독립 서점 다수', textEn:'Indie cafes and bookshops throughout' },
    ],
    tipKo: '오전 일찍 방문하면 한산해서 사진 촬영하기 좋습니다.',
    tipEn: 'Visit early morning for the best photos without the tourist crowds.',
    nearbyPartnerIds: [],
  },
  'location_9': {
    gallery: ['🏔️','🍂','🌊','🦅','🌲','❄️','🏕️','🌄'],
    highlights: [
      { icon:'🏔️', textKo:'최고봉 대청봉 해발 1,708m', textEn:'Daecheongbong peak at 1,708 m' },
      { icon:'🍂', textKo:'가을 단풍 명소 (10월 최적)', textEn:'Spectacular autumn foliage (best in Oct)' },
      { icon:'🚌', textKo:'속초시외버스터미널에서 접근 가능', textEn:'Accessible from Sokcho Bus Terminal' },
      { icon:'⛺', textKo:'야영장 및 산악 대피소 운영', textEn:'Campsites and mountain shelters available' },
    ],
    tipKo: '케이블카를 이용해 권금성까지 오르면 설악산 전경을 쉽게 감상할 수 있습니다.',
    tipEn: 'Take the cable car to Gwongeumseong Fortress for panoramic views with minimal hiking.',
    nearbyPartnerIds: [],
  },
  'location_19': {
    gallery: ['🦢','🌾','🌅','🚣','🐦','🌿','🌙','🌊'],
    highlights: [
      { icon:'🦢', textKo:'철새 도래지 — 겨울 철새 10만여 마리', textEn:'Migratory bird haven — 100,000+ birds in winter' },
      { icon:'🌾', textKo:'드넓은 갈대밭 (가을 최적)', textEn:'Vast reed beds — stunning in autumn' },
      { icon:'⏰', textKo:'일출 & 일몰 감상 명소', textEn:'Premier sunrise & sunset viewing spot' },
      { icon:'🚣', textKo:'갯벌 체험·보트 투어 운영', textEn:'Mud flat tours and boat trips available' },
    ],
    tipKo: '해질 무렵 갈대밭에 반사되는 석양이 환상적입니다. 꼭 일몰 시간에 맞춰 방문하세요.',
    tipEn: 'The sunset reflecting through the reed beds is magical — time your visit accordingly.',
    nearbyPartnerIds: ['p4'],
  },
  'event_e0': {
    gallery: ['🪣','🏖️','🎉','💦','🎪','🤸','🌊','🎶'],
    highlights: [
      { icon:'📅', textKo:'매년 7월 대천해변에서 개최', textEn:'Held every July at Daecheon Beach' },
      { icon:'🎡', textKo:'머드 레슬링·슬라이드·스파 등 30여 개 프로그램', textEn:'30+ activities: mud wrestling, slides, spa' },
      { icon:'💰', textKo:'입장료 무료 (일부 유료 프로그램 별도)', textEn:'Free entry (some activities extra charge)' },
      { icon:'🏕️', textKo:'해변 캠핑장 운영, 숙박 예약 조기 마감', textEn:'Beach camping available — book accommodation early' },
    ],
    tipKo: '흰 옷을 입고 오면 머드가 더 잘 보여서 재미있습니다! 갈아입을 옷도 꼭 챙기세요.',
    tipEn: 'Wear white for maximum muddy fun — and definitely bring a change of clothes!',
    nearbyPartnerIds: [],
  },
  'event_e1': {
    gallery: ['🌸','🌺','🎎','🌷','📸','🎏','🍡','🌼'],
    highlights: [
      { icon:'📅', textKo:'매년 3월 말 ~ 4월 초 개최 (10일간)', textEn:'Late March – early April annually (10 days)' },
      { icon:'🌸', textKo:'진해 전역 380여만 그루 벚꽃', textEn:'3.8 million cherry trees across Jinhae' },
      { icon:'🚂', textKo:'경화역 벚꽃 터널 — 사진 명소', textEn:'Gyeonghwa Station tunnel — iconic photo spot' },
      { icon:'🎭', textKo:'군악대 퍼레이드·K-팝 공연 등 문화 행사', textEn:'Military band parades and K-pop performances' },
    ],
    tipKo: '주말은 매우 혼잡합니다. 가능하면 평일 오전 일찍 방문하세요.',
    tipEn: 'Weekends are extremely crowded — a weekday morning visit is much more peaceful.',
    nearbyPartnerIds: [],
  },
};

// ── NFC Travel History ─────────────────────────────────────────────────────────
function loadHistory() {
  try { return JSON.parse(localStorage.getItem('tapkorea_history') || '[]'); } catch(e) { return []; }
}
function saveHistory(hist) {
  localStorage.setItem('tapkorea_history', JSON.stringify(hist));
}
function addToTripHistory(type, idStr) {
  var hist = loadHistory();
  var key = type + '_' + idStr;
  // Remove duplicate if exists (push to front)
  hist = hist.filter(function(h) { return h.key !== key; });
  var item = getItemForNfc(type, idStr);
  if (!item) return;
  var isKo = currentLang === 'ko';
  hist.unshift({
    key: key, type: type, id: idStr,
    name: isKo ? item.nameKo : item.nameEn,
    emoji: item.emoji,
    scannedAt: Date.now(),
  });
  if (hist.length > 20) hist = hist.slice(0, 20);
  saveHistory(hist);
}
function getItemForNfc(type, idStr) {
  if (type === 'location') {
    return LOCATIONS.find(function(l) { return l.id === Number(idStr); }) || null;
  }
  if (type === 'event') {
    return EVENTS.find(function(e) { return e.id === idStr; }) || null;
  }
  return null;
}

// ── NFC Scanner Sheet ──────────────────────────────────────────────────────────
var nfcScanActive = false;
var nfcAbortController = null;

function openNfcScanner() {
  var inner = document.getElementById('nfcScanInner');
  if (!inner) return;
  inner.innerHTML = buildNfcScannerHtml();
  document.getElementById('nfcScanBackdrop').classList.add('open');
  document.getElementById('nfcScanSheet').classList.add('open');
}

function closeNfcScanner() {
  document.getElementById('nfcScanBackdrop').classList.remove('open');
  document.getElementById('nfcScanSheet').classList.remove('open');
  if (nfcAbortController) { try { nfcAbortController.abort(); } catch(e){} nfcAbortController = null; }
  nfcScanActive = false;
}

function buildNfcScannerHtml() {
  var isKo = currentLang === 'ko';
  var hist  = loadHistory();
  var demoTagsHtml = NFC_DEMO_TAGS.map(function(tag) {
    var label = isKo ? tag.labelKo : tag.labelEn;
    var item  = getItemForNfc(tag.type, String(tag.id));
    var emoji = item ? item.emoji : '📍';
    return '<button class="nfc-demo-tag" onclick="simulateNfcTag(\'' + tag.type + '\',\'' + tag.id + '\')">'
      + '<span class="nfc-demo-tag-emoji">' + emoji + '</span>'
      + '<span class="nfc-demo-tag-name">' + label + '</span>'
      + '</button>';
  }).join('');

  var histHtml = '';
  if (hist.length > 0) {
    var histTitle = isKo ? '최근 방문 기록' : 'Recent Scans';
    var histItems = hist.slice(0, 5).map(function(h) {
      var ago = formatAgo(h.scannedAt, isKo);
      return '<div class="nfc-hist-item" onclick="openNfcDetail(\'' + h.type + '\',\'' + h.id + '\')">'
        + '<span class="nfc-hist-emoji">' + h.emoji + '</span>'
        + '<div class="nfc-hist-info">'
          + '<span class="nfc-hist-name">' + h.name + '</span>'
          + '<span class="nfc-hist-ago">' + ago + '</span>'
        + '</div>'
        + '<span class="nfc-hist-arrow">›</span>'
      + '</div>';
    }).join('');
    histHtml = '<div class="nfc-hist-section"><h4 class="nfc-hist-title">' + histTitle + '</h4>' + histItems + '</div>';
  }

  var title    = isKo ? 'NFC 태그 스캔' : 'Scan NFC Tag';
  var subtitle = isKo ? '태그에 가까이 대거나 아래 데모를 눌러보세요' : 'Hold near a tag or try a demo below';
  var demoLbl  = isKo ? '데모 태그' : 'Demo Tags';
  var startLbl = isKo ? '스캔 시작' : 'Start Scanning';

  return '<div class="nfc-scan-header">'
    + '<h3 class="nfc-scan-title">' + title + '</h3>'
    + '<p class="nfc-scan-subtitle">' + subtitle + '</p>'
    + '</div>'
    + '<div class="nfc-ring-wrap">'
      + '<div class="nfc-ring" id="nfcRing">'
        + '<div class="nfc-ring-pulse"></div>'
        + '<div class="nfc-ring-pulse delay1"></div>'
        + '<span class="nfc-ring-icon">📲</span>'
      + '</div>'
    + '</div>'
    + '<button class="nfc-start-btn" onclick="startNfcScan()" id="nfcStartBtn">' + startLbl + '</button>'
    + '<h4 class="nfc-demo-title">' + demoLbl + '</h4>'
    + '<div class="nfc-demo-tags">' + demoTagsHtml + '</div>'
    + histHtml;
}

function formatAgo(ts, isKo) {
  var diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60)  return isKo ? '방금 전' : 'Just now';
  if (diff < 3600) { var m = Math.floor(diff/60); return isKo ? m+'분 전' : m+'m ago'; }
  if (diff < 86400) { var h = Math.floor(diff/3600); return isKo ? h+'시간 전' : h+'h ago'; }
  var d = Math.floor(diff/86400); return isKo ? d+'일 전' : d+'d ago';
}

// ── NFC Web API + Demo ─────────────────────────────────────────────────────────
function startNfcScan() {
  var btn = document.getElementById('nfcStartBtn');
  var ring = document.getElementById('nfcRing');
  if ('NDEFReader' in window) {
    nfcAbortController = new AbortController();
    var reader = new window.NDEFReader();
    reader.scan({ signal: nfcAbortController.signal }).then(function() {
      if (btn) btn.textContent = currentLang === 'ko' ? '스캔 중…' : 'Scanning…';
      if (ring) ring.classList.add('active');
      nfcScanActive = true;
      reader.addEventListener('reading', function(event) {
        var records = event.message.records;
        for (var i = 0; i < records.length; i++) {
          var rec = records[i];
          if (rec.recordType === 'url') {
            var url = new TextDecoder().decode(rec.data);
            var m = url.match(/tapkorea\/(location|event)\/(.+)/);
            if (m) { closeNfcScanner(); openNfcDetail(m[1], m[2]); return; }
          }
        }
      });
    }).catch(function() {
      showToast(currentLang === 'ko' ? 'NFC를 지원하지 않는 기기입니다' : 'NFC not supported on this device');
    });
  } else {
    showToast(currentLang === 'ko' ? '이 브라우저는 NFC를 지원하지 않습니다. 데모 태그를 사용해보세요.' : 'NFC not supported — try a demo tag below.');
  }
}

function simulateNfcTag(type, idStr) {
  closeNfcScanner();
  setTimeout(function() { openNfcDetail(type, String(idStr)); }, 300);
}

// ── NFC Detail Page ────────────────────────────────────────────────────────────
function openNfcDetail(type, idStr) {
  var item = getItemForNfc(type, idStr);
  if (!item) return;
  var enrichKey = type + '_' + idStr;
  var enriched = NFC_ENRICHED[enrichKey] || null;
  var nearby = [];
  if (enriched && enriched.nearbyPartnerIds) {
    nearby = enriched.nearbyPartnerIds.map(function(pid) {
      return PARTNERS.find(function(p) { return p.id === pid; });
    }).filter(Boolean);
  }
  var html = buildNfcDetailHtml(type, item, enriched, nearby);
  var inner = document.getElementById('nfcDetailInner');
  var page  = document.getElementById('nfcDetailPage');
  if (!inner || !page) return;
  inner.innerHTML = html;
  page.classList.add('open');
  addToTripHistory(type, idStr);
}

function closeNfcDetail() {
  var page = document.getElementById('nfcDetailPage');
  if (page) page.classList.remove('open');
}

function showNfcOnMap(type, idStr) {
  closeNfcDetail();
  var item = getItemForNfc(type, idStr);
  if (!item || !item.coords) return;
  if (leafletMap) {
    leafletMap.flyTo(item.coords, 15, { animate: true, duration: 1 });
    setTimeout(function() {
      if (type === 'location') openSpot(Number(idStr));
      else if (type === 'event') openEvent(idStr);
    }, 800);
  }
}

function buildNfcDetailHtml(type, item, enriched, nearby) {
  var isKo = currentLang === 'ko';
  var name = isKo ? item.nameKo : item.nameEn;
  var desc = isKo ? item.descKo : item.descEn;
  var gradient = item.gradient || 'linear-gradient(135deg,#1e3a5f,#2563eb)';

  // Header
  var galleryHtml = '';
  if (enriched && enriched.gallery) {
    galleryHtml = '<div class="nfc-gallery">'
      + enriched.gallery.map(function(em) {
          return '<div class="nfc-gallery-cell">' + em + '</div>';
        }).join('')
      + '</div>';
  }

  // Highlights
  var hlHtml = '';
  if (enriched && enriched.highlights && enriched.highlights.length) {
    hlHtml = '<div class="nfc-section">'
      + '<h4 class="nfc-section-title">' + (isKo ? '이런 곳이에요' : 'Highlights') + '</h4>'
      + '<ul class="nfc-highlights">'
      + enriched.highlights.map(function(h) {
          return '<li class="nfc-hl-item"><span class="nfc-hl-icon">' + h.icon + '</span>'
            + '<span>' + (isKo ? h.textKo : h.textEn) + '</span></li>';
        }).join('')
      + '</ul></div>';
  }

  // Local tip
  var tipHtml = '';
  if (enriched && (enriched.tipKo || enriched.tipEn)) {
    var tip = isKo ? enriched.tipKo : enriched.tipEn;
    tipHtml = '<div class="nfc-tip"><span class="nfc-tip-icon">💡</span><p>' + tip + '</p></div>';
  }

  // Nearby partners
  var partnerHtml = '';
  if (nearby && nearby.length > 0) {
    var partnerTitle = isKo ? '근처 파트너' : 'Nearby Partners';
    var cards = nearby.map(function(p) {
      var pName = isKo ? p.nameKo : p.nameEn;
      var pCat  = isKo ? p.catKo  : p.catEn;
      return '<div class="nfc-partner-card" onclick="closeNfcDetail();setTimeout(function(){openPartner(\'' + p.id + '\')},400)">'
        + '<div class="nfc-partner-header" style="background:' + p.gradient + '">' + p.emoji + '</div>'
        + '<div class="nfc-partner-info">'
          + '<span class="nfc-partner-name">' + pName + '</span>'
          + '<span class="nfc-partner-cat">' + pCat + '</span>'
        + '</div></div>';
    }).join('');
    partnerHtml = '<div class="nfc-section">'
      + '<h4 class="nfc-section-title">' + partnerTitle + '</h4>'
      + '<div class="nfc-partner-scroll">' + cards + '</div></div>';
  }

  // Type badge
  var badgeLabel = type === 'event'
    ? (isKo ? (item.catKo || '축제') : (item.catEn || 'Festival'))
    : (isKo ? '관광지' : 'Attraction');
  var badgeClass = type === 'event' ? 'badge-event' : 'badge-location';

  // CTA buttons
  var addTripLabel  = isKo ? '내 여행에 추가 ＋' : 'Add to My Trip ＋';
  var viewMapLabel  = isKo ? '지도에서 보기 🗺️' : 'View on Map 🗺️';
  var backLabel     = isKo ? '← 닫기' : '← Close';

  return '<div class="nfc-detail-header" style="background:' + gradient + '">'
    + '<button class="nfc-detail-back" onclick="closeNfcDetail()">' + backLabel + '</button>'
    + '<div class="nfc-detail-hero-emoji">' + item.emoji + '</div>'
    + '<div class="nfc-detail-hero-info">'
      + '<span class="nfc-detail-badge ' + badgeClass + '">' + badgeLabel + '</span>'
      + '<h2 class="nfc-detail-name">' + name + '</h2>'
    + '</div>'
  + '</div>'
  + '<div class="nfc-detail-body">'
    + '<p class="nfc-detail-desc">' + desc + '</p>'
    + galleryHtml
    + hlHtml
    + tipHtml
    + partnerHtml
    + '<div class="nfc-cta-row">'
      + '<button class="nfc-cta-btn nfc-cta-add" onclick="nfcAddToMyTrip(\'' + type + '\',\'' + idStr + '\')">' + addTripLabel + '</button>'
      + '<button class="nfc-cta-btn nfc-cta-map" onclick="showNfcOnMap(\'' + type + '\',\'' + idStr + '\')">' + viewMapLabel + '</button>'
    + '</div>'
  + '</div>';
}

function nfcAddToMyTrip(type, idStr) {
  if (type === 'location') {
    addLocationToMyPlan(Number(idStr));
  } else {
    var isKo = currentLang === 'ko';
    showToast(isKo ? '✅ 여행 기록에 저장되었습니다' : '✅ Saved to travel history');
    addToTripHistory(type, idStr);
  }
}

// ── Toast ─────────────────────────────────────────────────────────────────────
function showToast(msg) {
  var toast = document.getElementById('toast');
  if (!toast) return;
  if (toastTimer) clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2500);
}

// ── Bottom nav ────────────────────────────────────────────────────────────────
function setNavTab(tab) {
  document.querySelectorAll('.nav-item').forEach(function (el, i) {
    el.classList.toggle('active', ['explore','scan','saved','profile'][i] === tab);
  });
  if (tab==='scan')  openNfcScanner();
  if (tab==='saved') openMyPlanSheet();
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.map-page')) return;
  userPlan = loadPlanFromStorage();
  applyI18n();
  renderRegionGrid();
  var mapEl = document.getElementById('map');
  if (mapEl) mapEl.addEventListener('click', closeSearchPanel);
  renderUserReviewMarkers();
});
