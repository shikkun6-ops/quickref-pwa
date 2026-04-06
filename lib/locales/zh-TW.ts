import type { Dict } from "./types";

export const zhTW: Dict = {

  homeTitle: "選單",
  homeLead: "你想做什麼？",
  homeNote: "",

  homeTiles: {
    checkin: "選擇機台",
    start: "開始遊戲",
    quit: "結束遊戲",
    win: "我贏了",
    trouble: "疑難排解",
    gameflow: "遊戲流程",
    backLabel: "返回",
    languageSelectLabel: "語言",
  },

  noticeTitle: "重要提醒",
  understandAndStart: "我已了解 — 開始",
  goBack: "返回",
  toLanguageSelect: "語言",

  noticeItems: [
    { src: "/icons/18plus.png", label: "未滿18歲禁止入場" },
    { src: "/icons/no-alchol.png", label: "禁止飲酒" },
    { src: "/icons/no-photo.png", label: "禁止拍照" },
    { src: "/icons/no-baggagecase.png", label: "禁止攜帶大型行李" },
    { src: "/icons/cash-only.png", label: "僅限現金（日圓）" },
  ],

  checkinTitle: "選擇機台",
  checkinLead: "依預算、中獎機率與機種選擇",

  checkinSections: {
    rate: {
      title: "類型與每球／每枚價格",
      chartTitle: "類型與價格",
      chartRows: [
        { kind: "P", label: "4日圓" },
        { kind: "P", label: "1日圓" },
        { kind: "S", label: "20日圓" },
      ],
      body: [
        "柏青哥（P）會依每顆鋼珠的價格不同（例如4日圓或1日圓）。如果想追求刺激與高風險體驗，建議選擇4日圓；如果想輕鬆遊玩，推薦1日圓。",
        "柏青嫂（S）通常每枚硬幣為20日圓，有些店鋪也提供10日圓或5日圓等較便宜的選項。",
      ],
    },

    spec: {
      title: "遊戲類型",
      chartTitle: "遊戲類型",
      chartRows: [
        { kind: "P", label: "中間型" },
        { kind: "P", label: "輕量型" },
        { kind: "S", label: "普通型" },
        { kind: "S", label: "AT機" },
      ],
      body: [
        "柏青哥機台依中獎機率不同而區分。「輕量型」中獎率較高，但獎勵較小。",
        "柏青嫂機台依遊戲系統不同而分類。「普通型」以中獎為主，「AT機」則透過類似加碼遊戲的模式增加出幣量。",
        "部分機台需要技巧（例如「停止轉輪」），但也有適合初學者的機台。",
        "詳細內容請從選單查看「TIPS（遊戲流程）」。",
      ],
    },

    facilities: {
      title: "設備與系統差異",
      chartTitle: "系統類型",
      chartRows: [
        { kind: "P", label: "球箱式" },
        { kind: "P", label: "座位計數系統" },
        { kind: "P", label: "智慧柏青哥" },
        { kind: "S", label: "硬幣箱式" },
        { kind: "S", label: "智慧柏青嫂" },
      ],
      body: [
        "柏青哥：",
        "球箱式：鋼珠實體累積於托盤中。",
        "計數系統／智慧柏青哥：鋼珠以數位方式計算。",
        "柏青嫂：",
        "硬幣箱式：硬幣需手動操作。",
        "智慧柏青嫂：以數位方式計算硬幣。",
      ],
    },
  },

  playTitle: "遊戲方式",

playPachinko: {
  title: "柏青哥",
  lead: "基本步驟",
  steps: [
    {
      no: 1,
      title: "坐在空機台",
      imgSrc: "/play/pachinko/step1.png",
      imgAlt: "確認機台是否可用",
      overlayItems: [
        {
          x: "40%",
          y: "80%",
          label: "確認是否有他人物品",
        },
      ],
      body: [],
    },
    {
      no: 2,
      title: "投入紙鈔",
      imgSrc: "/play/pachinko/step2.png",
      imgAlt: "投入紙鈔",
      overlayItems: [
        { x: "10%", y: "35%", label: "在此投入紙鈔" },
      ],
      body: ["請將紙鈔投入左側裝置。"],
    },
    {
      no: 3,
      title: "按下貸玉按鈕",
      imgSrc: "/play/pachinko/step3.png",
      imgAlt: "按下按鈕",
      body: ["鋼珠會出現在上方托盤。"],
    },
    {
      no: 4,
      title: "轉動把手",
      imgSrc: "/play/pachinko/step4.png",
      imgAlt: "轉動把手",
      body: ["順時針轉動把手以調整發射強度。"],
    },
    {
      no: 5,
      title: "瞄準起始口",
      imgSrc: "/play/pachinko/step5.png",
      imgAlt: "瞄準",
      overlayItems: [
        { x: "45%", y: "25%", label: "瞄準這裡" },
        { x: "55%", y: "60%", label: "起始口" },
      ],
      body: [
        "當鋼珠進入起始口後，螢幕會開始進行抽選。",
      ],
    },
    {
      no: 6,
      title: "【中獎時】",
      imgSrc: "/play/pachinko/winning.png",
      imgAlt: "中獎",
      overlayItems: [
        { x: "60%", y: "28%", label: "瞄準這裡" },
        { x: "50%", y: "65%", label: "打入開啟的入口" },
      ],
      body: [
        "依照畫面指示「向右發射」。",
        "持續將鋼珠打入開啟的入口。",
        "重要：請使用排出拉桿避免鋼珠溢出，否則可能會卡珠。",
      ],
    },
    {
      no: 7,
      title: "不要忘記釋放鋼珠",
      imgSrc: "/play/pachinko/release lever.png",
      imgAlt: "釋放鋼珠",
      overlayItems: [
        { x: "60%", y: "87%", label: "使用排出拉桿" },
      ],
      body: [
        "大獎結束後，請將拉桿恢復原位。",
      ],
    },
  ],
},

playPachislot: {
  title: "柏青嫂",
  lead: "基本步驟",
  steps: [
    {
      no: 1,
      title: "坐在空機台",
      imgSrc: "/play/pachislot/step1.png",
      imgAlt: "確認是否可用",
      overlayItems: [
        { x: "35%", y: "15%", label: "確認上方置物架" },
        { x: "40%", y: "80%", label: "確認是否有他人物品" },
      ],
      body: ["請確認沒有遺留物品，也要檢查上方置物架。"],
    },
    {
      no: 2,
      title: "投入紙鈔並取得硬幣",
      imgSrc: "/play/pachislot/step2.png",
      imgAlt: "投入並使用硬幣",
      overlayItems: [
        { x: "70%", y: "10%", label: "①投入紙鈔" },
        { x: "70%", y: "53%", label: "②按下貸幣按鈕" },
        { x: "65%", y: "75%", label: "④投入硬幣" },
        { x: "30%", y: "91%", label: "③硬幣會出現在下方托盤" },
      ],
      body: [
        "投入紙鈔後，按下貸幣按鈕，將硬幣放入投入口。",
        "每次遊戲需要3枚硬幣。",
      ],
    },
    {
      no: 3,
      title: "按下MAX BET並拉動拉桿",
      imgSrc: "/play/pachislot/step3.png",
      imgAlt: "遊戲操作",
      overlayItems: [
        { x: "20%", y: "40%", label: "①按下MAX BET" },
        { x: "18%", y: "70%", label: "②拉動拉桿" },
        { x: "42%", y: "85%", label: "③停止轉輪" },
      ],
      body: [
        "按下MAX BET，拉動拉桿，並用按鈕停止轉輪。",
      ],
    },
    {
      no: 4,
      title: "停止圖案",
      imgSrc: "/play/pachislot/step4.png",
      imgAlt: "轉輪圖案",
      body: [
        "嘗試用時機控制來停止圖案（需要一定技巧）。",
      ],
    },
  ],
},

quitTitle: "如何離開（結束遊戲）",

quitIntroLead: "結束遊戲並離開店內，或移動到其他機台。",

quitIntroBody: [
  {
    type: "paragraph",
    parts: [
      {
        type: "text",
        text: "如果已沒有鋼珠或硬幣，請先確認是否還有剩餘金額。如無餘額，即可離席。如果仍有足夠的鋼珠或硬幣可兌換獎品，請進行計數。"
      }
    ]
  },
  {
    type: "paragraph",
    parts: [
      { type: "embed", targetId: "/win#step-2", external: true }
    ]
  }
],

quitPachinko: {
  title: "柏青哥的離開方式",
  lead: "依系統類型而不同",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "球箱式",
      imgSrc: "/quit/pachinko/step1.png",
      imgAlt: "球箱式",
      overlayItems: [
        { x: "45%", y: "17%", label: "呼叫店員進行計數" },
      ],
      body: [
        "重要：若仍有現金餘額，請按返卻按鈕並取出IC卡。",
        "① 按下機台上方的呼叫按鈕呼叫店員。",
        "② 用手勢表示已結束（例如交叉食指）。",
        "③ 店員會幫您計算鋼珠。",
        "④ 領取收據後前往櫃檯。",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "座位計數系統",
      imgSrc: "/quit/pachinko/step2.png",
      imgAlt: "計數系統",
      overlayItems: [
        { x: "35%", y: "45%", label: "返卻按鈕" },
      ],
      body: [
        "① 按下返卻按鈕。",
        "② IC卡（含餘額）會退出。",
        "③ 將IC卡帶到櫃檯或移動到其他機台。",
      ],
    },
    {
      no: 3,
      kind: "image",
      title: "智慧柏青哥",
      imgSrc: "/quit/pachinko/step3.png",
      imgAlt: "智慧柏青哥",
      overlayItems: [
        { x: "43%", y: "18%", label: "①計數 → ②返卻" },
        { x: "55%", y: "50%", label: "①機台上的計數按鈕" },
        { x: "35%", y: "35%", label: "②左側裝置的返卻按鈕" },
      ],
      body: [
        "① 按下計數按鈕。",
        "② 按下返卻按鈕。",
        "③ IC卡會退出。",
        "④ 將IC卡帶到櫃檯或移動到其他機台。",
      ],
    },
  ],
},

quitPachislot: {
  title: "柏青嫂的離開方式",
  lead: "依系統類型而不同",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "硬幣箱式",
      imgSrc: "/quit/pachislot/step1.png",
      imgAlt: "硬幣箱式",
      overlayItems: [
        { x: "43%", y: "18%", label: "呼叫店員進行計數" },
      ],
      body: [
        "重要：若仍有現金餘額，請按RETURN按鈕並取出IC卡。",
        "① 按下機台上方的呼叫按鈕呼叫店員。",
        "② 表示已結束遊戲。",
        "③ 店員會幫您計算硬幣。",
        "④ 領取收據後前往櫃檯。",
        "補充：部分店鋪設有自助櫃檯，但建議向店員確認。",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "智慧柏青嫂",
      imgSrc: "/quit/pachislot/step2.png",
      imgAlt: "智慧柏青嫂",
      overlayItems: [
        { x: "43%", y: "18%", label: "①計數 → ②返卻" },
        { x: "30%", y: "65%", label: "①機台上的計數按鈕" },
        { x: "30%", y: "40%", label: "②右側裝置的返卻按鈕" },
      ],
      body: [
        "① 按下計數按鈕。",
        "② 按下返卻按鈕。",
        "③ IC卡會退出。",
        "④ 將IC卡帶到櫃檯或移動到其他機台。",
      ],
    },
  ],
},

quitRefund: {
  title: "現金退款",
  lead: "需要持有含餘額的IC卡。",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "將IC卡插入結算機",
      imgSrc: "/quit/seisan.jpg",
      imgAlt: "結算機",
      body: [
        "將IC卡插入結算機即可領取現金。",
        "機器通常設置在獎品櫃檯附近。",
        "若沒有IC卡，請參考以下方式取得：",
        "① 球箱（硬幣箱）方式：按返卻並取出IC卡。",
        "② 計數系統：在機台上按返卻。",
        "③ 智慧柏青哥／智慧柏青嫂：先按計數，再按返卻，取出IC卡。",
      ],
    },
  ],
},

winTitle: "獎品兌換",
winLead: "恭喜中獎！",

winSteps: [
  {
    no: 1,
    kind: "image",
    title: "兩種獎品",
    body: [
      "獎品分為「特殊獎品」（可於店外的兌換所換現金）與「一般獎品」（零食、飲料等）。",
    ],
    imgSrc: "/win/prize.png",
    imgAlt: "獎品種類",
    overlayItems: [
      { x: "40%", y: "17%", label: "兩種獎品" },
      { x: "20%", y: "40%", label: "特殊獎品" },
      { x: "65%", y: "40%", label: "大／中／小" },
      { x: "20%", y: "75%", label: "一般獎品" },
    ],
  },
  {
    no: 2,
    kind: "table",
    title: "最低兌換數量",
    body: [
      "重要：每家店都有最低兌換數量的限制。",
    ],
    table: {
      headers: ["類型", "最低數量", "參考"],
      rows: [
        {
          cells: [
            { text: "P 4日圓" },
            { text: "250顆鋼珠" },
            { text: "約1/4箱" },
          ],
        },
        {
          cells: [
            { text: "P 1日圓" },
            { text: "1000顆鋼珠" },
            { text: "1箱" },
          ],
        },
        {
          cells: [
            { text: "S 20日圓" },
            { text: "50枚硬幣" },
            { text: "請自行計數" },
          ],
        },
      ],
    },
  },
  {
    no: 3,
    kind: "image",
    title: "前往櫃檯",
    body: [
      "將收據或IC卡交給店員。",
    ],
    imgSrc: "/win/counter.png",
    imgAlt: "櫃檯",
    overlayItems: [],
  },
  {
    no: 4,
    kind: "image",
    title: "櫃檯對話",
    body: [
      "常見對話：①「全部兌換嗎？」→「是」②「剩餘金額請選擇獎品」→自行選擇",
      "如果覺得困難，可以出示此畫面，表示：全部兌換為特殊獎品，其餘交由店員處理。",
    ],
    imgSrc: "/win/exchange.png",
    imgAlt: "選擇獎品",
    overlayItems: [],
  },
  {
    no: 5,
    kind: "image",
    title: "尋找兌換所",
    body: [
      "將特殊獎品帶到店外的兌換所，可換成現金。",
      "重要：必須當日兌換。由於法律規定，店員不能告知兌換所位置。可跟隨其他客人前往。在東京，可參考圖中的招牌尋找。",
    ],
    imgSrc: "/win/TUC.png",
    imgAlt: "兌換所",
    overlayItems: [],
  },
],

gameflowTitle: "柏青哥的樂趣是什麼？",

gameflowPachinkoTitle: "挑戰連續中獎！",
gameflowPachinkoBody: [
  "柏青哥的樂趣在於連續中獎，也就是大獎可以接連出現。為了理解這個機制，讓我們看看遊戲流程。"
],
gameflowPachinkoAlt: "柏青哥遊戲流程示意",

gameflowPachislotTitle: "用技術取勝！",
gameflowPachislotBody: [
  "柏青嫂的樂趣在於準確停止轉輪的技巧。這個技巧會直接影響中獎機率。讓我們來看看遊戲流程。"
],
gameflowPachislotAlt: "柏青嫂遊戲流程示意",

gameflowPachinko: {
  title: "柏青哥",
  lead: "遊戲流程／挑戰連續中獎！",
  steps: [
    {
      no: 1,
      title: "連續中獎的機制",
      imgSrc: "/flow/pflow.png",
      imgAlt: "連續中獎機制",
      overlayItems: [
        { x: "20%", y: "4%", label: "流程示意" },
        { x: "40%", y: "13%", label: "通常模式（抽選）" },
        { x: "65%", y: "42%", label: "高機率模式" },
        { x: "50%", y: "62%", label: "大獎" },
        { x: "40%", y: "87%", label: "時短模式" },
      ],
      body: [
        "大獎可能透過不同路徑發生，例如在通常模式或高機率模式中。",
        "高機率模式（確變）會提高中獎機率。",
        "時短模式（時短）則維持相同機率但加快遊戲節奏。",
        "當這些模式持續時，就會產生連續中獎。",
      ],
    },
    {
      no: 2,
      title: "範例：中間型機台（福音戰士）",
      imgSrc: "/flow/Evangelion_Roaring for future.png",
      imgAlt: "中間型範例",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "福音戰士流程",
      imgSrc: "/flow/Eva_flow.png",
      imgAlt: "福音戰士流程",
      overlayItems: [
        { x: "40%", y: "13%", label: "通常模式" },
        { x: "50%", y: "35%", label: "大獎" },
        { x: "45%", y: "65%", label: "Chance Time（時短）" },
        { x: "40%", y: "87%", label: "Impact Mode（確變）" },
      ],
      body: ["中獎（Bonus）後，有機會進入 Impact Mode（機率變動模式），可期待連續中獎（連續獲勝）。",
      "・中獎機率：1/319.7 ・Impact Mode 中的中獎機率：1/99.4 （並不代表在320次內一定會中獎） ・Impact Mode 突入率：約70% ・持續率：81% ・10回合中獎：約1,500顆球"],
    },
    {
      no: 4,
      title: "範例：輕量型機台（海物語）",
      imgSrc: "/flow/PA_BigSeaStory5.jpg",
      imgAlt: "輕量型範例",
      body: [],
    },
    {
      no: 5,
      title: "海物語流程",
      imgSrc: "/flow/agnes_flow.png",
      imgAlt: "海物語流程",
      overlayItems: [
        { x: "45%", y: "13%", label: "通常模式" },
        { x: "45%", y: "30%", label: "遊タイム（時短）" },
        { x: "40%", y: "51%", label: "大獎＋確變" },
        { x: "50%", y: "71%", label: "Chance Time" },
        { x: "40%", y: "87%", label: "幸福機會" },
      ],
      body: ["每次中獎（Bonus）後，必定進入 Short-time mode（時短），可以在不減少球數的情況下持續遊玩。",
        "・中獎機率：1/99.9 ・機率變動時的中獎機率：1/19.5 （並不代表在100次內一定會中獎） ・6回合中獎：約648顆球 ・中獎後： 　・機率變動模式 10次 　・時短模式 40次"
      ],
    },
  ],
},

gameflowPachislot: {
  title: "柏青嫂",
  lead: "遊戲流程／用技術取勝！",
  steps: [
    {
      no: 1,
      title: "進入大獎的流程",
      imgSrc: "/flow/sflow.png",
      imgAlt: "大獎流程",
      overlayItems: [
        { x: "20%", y: "4%", label: "流程示意" },
        { x: "30%", y: "13%", label: "通常模式（抽選）" },
        { x: "65%", y: "42%", label: "機會區" },
        { x: "45%", y: "62%", label: "大獎" },
        { x: "30%", y: "87%", label: "AT Rush" },
      ],
      body: [
        "大獎可透過不同路徑進入，例如通常模式或機會區。",
        "機會區、大獎與AT Rush的系統依機台而不同。",
        "在機會區中，進入大獎的機率會提高。",
        "在AT Rush期間，小獎會持續發生，使硬幣數增加。",
      ],
    },
    {
      no: 2,
      title: "範例：普通型（My Juggler V）",
      imgSrc: "/flow/MyJuggler.jpg",
      imgAlt: "My Juggler V",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "Juggler流程",
      imgSrc: "/flow/jugflow.png",
      imgAlt: "Juggler流程",
      overlayItems: [
        { x: "30%", y: "13%", label: "通常模式" },
        { x: "45%", y: "72%", label: "大獎" },
      ],
      body: [
        "沒有液晶演出或複雜小遊戲的簡單玩法，只需專注於大獎（Bonus）。",
        "・平常遊戲時，瞄準左側轉輪的櫻桃圖案　・中獎時，下方的 GOGO! 燈會亮起　・將轉輪對齊7圖案　・中獎最多可獲得約240枚代幣",
      ],
    },
    {
      no: 4,
      title: "範例：AT型（Monkey Turn V）",
      imgSrc: "/flow/MonkeyTurnV.jpg",
      imgAlt: "Monkey Turn",
      overlayItems: [],
      body: [],
    },
    {
      no: 5,
      title: "Monkey Turn流程",
      imgSrc: "/flow/monkey_flow.png",
      imgAlt: "Monkey Turn流程",
      overlayItems: [
        { x: "30%", y: "13%", label: "通常模式" },
        { x: "65%", y: "37%", label: "小遊戲" },
        { x: "45%", y: "58%", label: "機會區" },
        { x: "30%", y: "87%", label: "AT Rush" },
      ],
      body: [
        "遊戲模擬真實的賽艇比賽結果。",
        "・不需要 timing skill（手動對準技巧）・透過勝利提升進入 AT Rush 模式的機率 ・在 AT Rush 中，小獎會連續發生，逐步增加代幣數量",],
    },
  ],
},

trouble: {
  title: "疑難排解指南",

  leadParts: [
    { type: "text", text: "以下提供可向店員出示的協助卡，以及常見問題的解答。" },
    { type: "text", text: " 若需要呼叫店員，請按下" },
    {
      type: "link",
      text: "機台上方的呼叫按鈕",
      targetId: "call-staff",
      external: false
    },
    { type: "text", text: "。" },
  ],

  navAriaLabel: "問題列表",
  questionLabel: "Q",
  answerLabel: "解答",
  backToTop: "返回問題列表",
  backButton: "選單",

  items: [
    {
      id: "money-not-accepted",
      question: "紙鈔無法使用",
      answerTitle: "紙鈔無法投入時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請嘗試其他紙鈔。如果仍然無法使用，請呼叫店員並出示此畫面。" },
          ],
        },
        {
          type: "image",
          id: "bill-unacceptable-image",
          src: "/help/unit malfunction.png",
          alt: "紙鈔無法使用",
          caption: "",
        },
      ],
    },
    {
      id: "ball-not-launched",
      question: "鋼珠無法發射",
      answerTitle: "鋼珠無法發射時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "上方托盤是否有鋼珠？如果把手已轉到底仍無法發射，請呼叫店員並出示此畫面。" },
          ],
        },
        {
          type: "image",
          id: "ball-not-launched-image",
          src: "/help/ball not launched.png",
          alt: "鋼珠問題",
          caption: "",
        },
      ],
    },
    {
      id: "ball-got-stuck",
      question: "鋼珠卡住了",
      answerTitle: "鋼珠無法順利掉落時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "可能是釘子問題。請呼叫店員並出示此畫面。" },
          ],
        },
        {
          type: "image",
          id: "ball-got-stuck-image",
          src: "/help/ball got stuck.png",
          alt: "鋼珠卡住",
          caption: "",
        },
      ],
    },
    {
      id: "another-box",
      question: "鋼珠快滿出來了",
      answerTitle: "需要新的箱子",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請呼叫店員並出示此畫面。他們會提供新的箱子並放在座位後方。" },
          ],
        },
        {
          type: "image",
          id: "another-box-image",
          src: "/help/box please.png",
          alt: "需要新箱子",
          caption: "",
        },
      ],
    },
    {
      id: "take-break",
      question: "想暫時離開",
      answerTitle: "暫時離席時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請呼叫店員並出示此畫面。會為您放置離席標示。請在規定時間內返回。" },
          ],
        },
        {
          type: "image",
          id: "take-break-image",
          src: "/help/take a break.png",
          alt: "暫時離開",
          caption: "",
        },
      ],
    },
    {
      id: "special-prize",
      question: "我有很多鋼珠，可以換現金嗎？",
      answerTitle: "兌換特殊獎品",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "鋼珠或硬幣是否足夠兌換？是否持有收據或IC卡？請在櫃檯向店員出示此畫面。" },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "如果不知道如何兌換，" },
            {
              type: "link",
              text: "請參考中獎後的流程",
              targetId: "/win#step-2",
              external: true
            },
            { type: "text", text: "。" }
          ]
        },
        {
          type: "image",
          id: "special-prize-image",
          src: "/help/exchange.png",
          alt: "兌換特殊獎品",
          caption: "",
        },
      ],
    },
    {
      id: "something-wrong",
      question: "是不是發生問題了？",
      answerTitle: "發生誤會時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請呼叫店員並出示此畫面，他們會協助處理。" },
          ],
        },
        {
          type: "image",
          id: "something-wrong-image",
          src: "/help/wrong.png",
          alt: "需要協助",
          caption: "",
        },
      ],
    },
    {
      id: "someone-playing",
      question: "有人坐了我的位置",
      answerTitle: "有人使用您保留的座位時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請呼叫店員並出示此畫面，他們會協助處理。" },
          ],
        },
        {
          type: "image",
          id: "someone-playing-image",
          src: "/help/reserved.png",
          alt: "保留座位",
          caption: "",
        },
      ],
    },
    {
      id: "which-side",
      question: "投幣機在哪一側？",
      answerTitle: "紙鈔投入位置",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "一般來說，柏青哥在左側，柏青嫂在右側。" },
          ],
        },
      ],
    },
    {
      id: "where-rent-button",
      question: "貸玉按鈕在哪裡？",
      answerTitle: "貸玉按鈕位置",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "依系統而不同。" },
          ],
        },
        {
          type: "steps",
          items: [
            { no: "1", title: "球箱式", text: "在投幣機上。" },
            { no: "2", title: "座位計數系統", text: "在機台右前方附近。" },
            { no: "3", title: "智慧機台", text: "在投幣機上。" },
          ],
        },
        {
          type: "image",
          id: "where-rent-button-image",
          src: "/help/rent.png",
          alt: "貸玉按鈕",
          caption: "",
        }
      ],
    },

    {
      id: "where-refund-button",
      question: "返卻按鈕在哪裡？",
      answerTitle: "返卻按鈕位置",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "依系統而不同。" },
          ],
        },
        {
          type: "steps",
          items: [
            { no: "1", title: "球箱式", text: "在投幣機上。" },
            { no: "2", title: "座位計數系統", text: "在機台右前方附近。" },
            { no: "3", title: "智慧機台", text: "在投幣機上。重要：離開時請先按COUNT。" },
          ],
        },
        {
          type: "image",
          id: "where-refund-button-image",
          src: "/help/refund.png",
          alt: "返卻按鈕",
          caption: "按下返卻會發出含餘額的IC卡。",
        },
        {
          type: "image",
          id: "count-button-image",
          src: "/quit/pachinko/count.png",
          alt: "計數按鈕",
          caption: "請先按計數將資料轉移到裝置。",
        },
      ],
    },

    {
      id: "alert",
      question: "遊戲中出現警告",
      answerTitle: "警告處理方式",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "請仔細查看畫面或聲音提示。" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              no: "1",
              title: "向右發射（中獎時）",
              text: "依照指示將鋼珠向右側發射。",
            },
            {
              no: "2",
              title: "釋放鋼珠",
              text: "若鋼珠溢出，請使用拉桿將其移動。",
            },
            {
              no: "3",
              title: "恢復正常遊戲",
              text: "中獎結束後，請將方向調回左側。",
            },
          ],
        },
        {
          type: "image",
          id: "alert-shoot-right-image",
          src: "/help/shoot right.png",
          alt: "向右發射",
          caption: "中獎時請向右發射",
        },
        {
          type: "image",
          id: "alert-release-tray-image",
          src: "/play/pachinko/release lever.png",
          alt: "釋放鋼珠",
          overlayItems: [
            { x: "60%", y: "87%", label: "使用此拉桿" },
          ],
          caption: "若鋼珠溢出，請使用拉桿移動。",
        },
      ],
    },

    {
      id: "stop-reels",
      question: "無法停止轉輪",
      answerTitle: "關於目押（時機技巧）",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "停止圖案需要技巧。在大獎期間只能停止特定圖案。如果無法操作，可詢問附近玩家，店員無法協助。" },
          ],
        },
        {
          type: "image",
          id: "stop-reels-image",
          src: "/help/meoshi.png",
          alt: "目押技巧",
          caption: "",
        },
      ],
    },

    {
      id: "whats-going-on",
      question: "我不知道發生什麼事",
      answerTitle: "感到困惑時",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "可詢問附近玩家，並出示此畫面。" },
          ],
        },
        {
          type: "image",
          id: "whats-going-on-image",
          src: "/help/what next.png",
          alt: "接下來怎麼做？",
          caption: "",
        },
      ],
    },

    {
      id: "call-staff",
      question: "呼叫店員",
      answerTitle: "請按機台上方的呼叫按鈕",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "" },
            {
              type: "link",
              text: "",
              targetId: "call-staff",
              external: false
            },
            { type: "text", text: "" },
          ],
        },
        {
          type: "image",
          id: "call-staff",
          src: "/help/call.png",
          alt: "呼叫按鈕",
          caption: "",
        },
      ],
    },
  ],
},

  navHome: "首頁",
  navPlay: "開始遊戲", 
  navQuit: "結束遊戲", 
  navWin: "我贏了",
  navTrouble: "疑難排解", 
  navGameflow: "遊戲流程",
  navBack: "返回",
};
