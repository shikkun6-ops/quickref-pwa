import type { Dict } from "./types";

export const ko: Dict = {

  homeTitle: "메뉴",
  homeLead: "무엇을 하시겠습니까?",
  homeNote: "",
  homeTiles: {
    checkin: "기기 선택",
    start: "게임 시작",
    quit: "종료 방법",
    win: "당첨",
    trouble: "문제 해결",
    gameflow: "게임 흐름",
    backLabel: "뒤로",
    languageSelectLabel: "언어",
  },

  noticeTitle: "중요 안내",
  understandAndStart: "이해했습니다 — 시작",
  goBack: "뒤로",
  toLanguageSelect: "언어",

  noticeItems: [
    { src: "/icons/18plus.png", label: "18세 미만 입장 금지" },
    { src: "/icons/no-alchol.png", label: "음주 금지" },
    { src: "/icons/no-photo.png", label: "촬영 금지" },
    { src: "/icons/no-baggagecase.png", label: "대형 짐 반입 금지" },
    { src: "/icons/cash-only.png", label: "현금(엔화)만 사용 가능" },
  ],

  checkinTitle: "기기 선택",
  checkinLead: "예산, 확률, 기종에 따라 선택하세요",

  checkinSections: {
    rate: {
      title: "종류 및 공/코인 가격",
      chartTitle: "종류 및 가격",
      chartRows: [
        { kind: "P", label: "4엔" },
        { kind: "P", label: "1엔" },
        { kind: "S", label: "20엔" },
      ],
      body: [
        "파칭코(P)는 공 1개의 가격(예: 4엔, 1엔)에 따라 다릅니다. 빠르고 높은 리스크를 원하면 4엔, 편하게 즐기고 싶다면 1엔을 추천합니다.",
        "파치슬롯(S)은 보통 코인 1개당 20엔입니다. 일부 매장에서는 10엔, 5엔과 같은 저가 옵션도 있습니다.",
      ],
    },

    spec: {
      title: "게임 유형",
      chartTitle: "게임 유형",
      chartRows: [
        { kind: "P", label: "미들 타입" },
        { kind: "P", label: "라이트 타입" },
        { kind: "S", label: "노멀 타입" },
        { kind: "S", label: "AT 타입" },
      ],
      body: [
        "파칭코는 당첨 확률에 따라 나뉩니다. '라이트 타입'은 당첨 확률이 높지만 보상이 적습니다.",
        "파치슬롯은 시스템에 따라 나뉩니다. '노멀 타입'은 보너스 중심, 'AT 타입'은 게임 모드를 통해 코인을 늘립니다.",
        "일부 기기는 타이밍 기술(릴 정지)이 필요하지만, 초보자용 기기도 있습니다.",
        "자세한 내용은 메뉴의 'TIPS(게임 흐름)'를 참고하세요.",
      ],
    },

    facilities: {
      title: "기기 및 시스템 차이",
      chartTitle: "시스템 유형",
      chartRows: [
        { kind: "P", label: "박스 방식" },
        { kind: "P", label: "좌석 자동 정산 시스템" },
        { kind: "P", label: "스마트 파칭코" },
        { kind: "S", label: "코인 박스 방식" },
        { kind: "S", label: "스마트 슬롯" },
      ],
      body: [
        "파칭코:",
        "박스 방식: 공이 물리적으로 트레이에 쌓입니다.",
        "자동 정산 / 스마트 파칭코: 공이 디지털로 계산됩니다.",
        "파치슬롯:",
        "코인 박스 방식: 코인을 직접 다룹니다.",
        "스마트 슬롯: 코인이 디지털로 계산됩니다.",
      ],
    },
  },

playTitle: "게임 방법",

playPachinko: {
  title: "파칭코",
  lead: "기본 단계",
  steps: [
    {
      no: 1,
      title: "빈 기기에 앉기",
      imgSrc: "/play/pachinko/step1.png",
      imgAlt: "기기 사용 가능 여부 확인",
      overlayItems: [
        {
          x: "40%",
          y: "80%",
          label: "개인 물품 확인",
        },
      ],
      body: [],
    },
    {
      no: 2,
      title: "지폐 투입",
      imgSrc: "/play/pachinko/step2.png",
      imgAlt: "지폐 투입",
      overlayItems: [
        { x: "10%", y: "35%", label: "여기에 지폐 투입" },
      ],
      body: ["왼쪽 기기에 지폐를 넣으세요."],
    },
    {
      no: 3,
      title: "BALL 버튼 누르기",
      imgSrc: "/play/pachinko/step3.png",
      imgAlt: "버튼 누르기",
      body: ["공이 위쪽 트레이에 나옵니다."],
    },
    {
      no: 4,
      title: "핸들 돌리기",
      imgSrc: "/play/pachinko/step4.png",
      imgAlt: "핸들 조작",
      body: ["핸들을 시계 방향으로 돌려 세기를 조절하세요."],
    },
    {
      no: 5,
      title: "스타트 포켓을 노리기",
      imgSrc: "/play/pachinko/step5.png",
      imgAlt: "조준",
      overlayItems: [
        { x: "45%", y: "25%", label: "여기를 노리세요" },
        { x: "55%", y: "60%", label: "스타트 포켓" },
      ],
      body: [
        "공이 스타트 포켓에 들어가면 화면에서 추첨이 시작됩니다.",
      ],
    },
    {
      no: 6,
      title: "【당첨 시】",
      imgSrc: "/play/pachinko/winning.png",
      imgAlt: "당첨",
      overlayItems: [
        { x: "60%", y: "28%", label: "여기를 노리세요" },
        { x: "50%", y: "65%", label: "열린 입구로 넣기" },
      ],
      body: [
        "'오른쪽으로 발사' 지시에 따라 조작하세요.",
        "열린 입구로 계속 공을 넣으세요.",
        "중요: 공이 넘치지 않도록 레버를 사용하세요. 사용하지 않으면 막힐 수 있습니다.",
      ],
    },
    {
      no: 7,
      title: "공 배출을 잊지 마세요",
      imgSrc: "/play/pachinko/release lever.png",
      imgAlt: "공 배출",
      overlayItems: [
        { x: "60%", y: "87%", label: "이 레버 사용" },
      ],
      body: [
        "보너스 종료 후 레버를 원래 위치로 되돌리세요.",
      ],
    },
  ],
},

playPachislot: {
  title: "파치슬롯",
  lead: "기본 단계",
  steps: [
    {
      no: 1,
      title: "빈 기기에 앉기",
      imgSrc: "/play/pachislot/step1.png",
      imgAlt: "사용 가능 확인",
      overlayItems: [
        { x: "35%", y: "15%", label: "상단 선반 확인" },
        { x: "40%", y: "80%", label: "개인 물품 확인" },
      ],
      body: [
        "물건이 없는지 확인하고 상단 선반도 확인하세요.",
      ],
    },
    {
      no: 2,
      title: "지폐 투입 후 코인 사용",
      imgSrc: "/play/pachislot/step2.png",
      imgAlt: "지폐 및 코인",
      overlayItems: [
        { x: "70%", y: "10%", label: "①지폐 투입" },
        { x: "70%", y: "53%", label: "②COIN 버튼" },
        { x: "65%", y: "75%", label: "④코인 투입" },
        { x: "30%", y: "91%", label: "③코인이 아래 트레이에 나옴" },
      ],
      body: [
        "지폐를 넣고 COIN 버튼을 눌러 코인을 투입하세요.",
        "1회 플레이에는 코인 3개가 필요합니다.",
      ],
    },
    {
      no: 3,
      title: "MAX BET 후 레버 당기기",
      imgSrc: "/play/pachislot/step3.png",
      imgAlt: "플레이",
      overlayItems: [
        { x: "20%", y: "40%", label: "①MAX BET" },
        { x: "18%", y: "70%", label: "②레버 당기기" },
        { x: "42%", y: "85%", label: "③릴 정지" },
      ],
      body: [
        "MAX BET을 누르고 레버를 당긴 뒤 버튼으로 릴을 멈추세요.",
      ],
    },
    {
      no: 4,
      title: "심볼 정지",
      imgSrc: "/play/pachislot/step4.png",
      imgAlt: "릴 심볼",
      body: [
        "타이밍을 맞춰 원하는 위치에서 심볼을 멈추세요.",
      ],
    },
  ],
},

quitTitle: "게임 종료 방법",

quitIntroLead: "게임을 마치고 퇴장하거나 다른 기기로 이동하세요.",

quitIntroBody: [
  {
    type: "paragraph",
    parts: [
      {
        type: "text",
        text: "공이나 코인이 모두 없으면 잔액이 있는지 확인하세요. 잔액이 없다면 그대로 자리에서 일어나면 됩니다. 아직 교환 가능한 공이나 코인이 있다면 정산을 진행하세요."
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
  title: "파칭코",
  lead: "시스템에 따라 다릅니다",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "박스 방식",
      imgSrc: "/quit/pachinko/step1.png",
      imgAlt: "박스 방식",
      overlayItems: [
        { x: "45%", y: "17%", label: "직원 호출 후 공 정산" },
      ],
      body: [
        "중요: 잔액이 있다면 RETURN 버튼을 눌러 IC 카드를 가져가세요.",
        "① 기기 위의 호출 버튼을 눌러 직원을 부르세요.",
        "② 게임 종료 의사를 표시하세요 (손가락을 X 모양으로 교차).",
        "③ 직원이 공을 계산합니다.",
        "④ 영수증을 받고 카운터로 이동하세요.",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "좌석 자동 정산 시스템",
      imgSrc: "/quit/pachinko/step2.png",
      imgAlt: "정산 시스템",
      overlayItems: [
        { x: "35%", y: "45%", label: "RETURN 버튼" },
      ],
      body: [
        "① RETURN 버튼을 누르세요.",
        "② 잔액이 있는 IC 카드가 나옵니다.",
        "③ 카운터로 가거나 다른 기기로 이동하세요.",
      ],
    },
    {
      no: 3,
      kind: "image",
      title: "스마트 파칭코",
      imgSrc: "/quit/pachinko/step3.png",
      imgAlt: "스마트 파칭코",
      overlayItems: [
        { x: "43%", y: "18%", label: "①COUNT → ②RETURN" },
        { x: "55%", y: "50%", label: "①기기의 COUNT 버튼" },
        { x: "35%", y: "35%", label: "②좌측 RETURN 버튼" },
      ],
      body: [
        "① COUNT 버튼을 누르세요.",
        "② RETURN 버튼을 누르세요.",
        "③ IC 카드가 나옵니다.",
        "④ 카운터로 가거나 다른 기기로 이동하세요.",
      ],
    },
  ],
},

quitPachislot: {
  title: "파치슬롯",
  lead: "시스템에 따라 다릅니다",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "코인 박스 방식",
      imgSrc: "/quit/pachislot/step1.png",
      imgAlt: "코인 박스 방식",
      overlayItems: [
        { x: "43%", y: "18%", label: "직원 호출 후 코인 정산" },
      ],
      body: [
        "중요: 잔액이 있다면 RETURN 버튼을 눌러 IC 카드를 가져가세요.",
        "① 기기 위의 호출 버튼을 눌러 직원을 부르세요.",
        "② 게임 종료 의사를 표시하세요.",
        "③ 직원이 코인을 계산합니다.",
        "④ 영수증을 받고 카운터로 이동하세요.",
        "참고: 일부 매장은 셀프 정산도 가능하지만 직원에게 요청하는 것이 안전합니다.",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "스마트 슬롯",
      imgSrc: "/quit/pachislot/step2.png",
      imgAlt: "스마트 슬롯",
      overlayItems: [
        { x: "43%", y: "18%", label: "①COUNT → ②RETURN" },
        { x: "30%", y: "65%", label: "①기기의 COUNT 버튼" },
        { x: "30%", y: "40%", label: "②우측 RETURN 버튼" },
      ],
      body: [
        "① COUNT 버튼을 누르세요.",
        "② RETURN 버튼을 누르세요.",
        "③ IC 카드가 나옵니다.",
        "④ 카운터로 가거나 다른 기기로 이동하세요.",
      ],
    },
  ],
},

quitRefund: {
  title: "현금 환불",
  lead: "잔액이 있는 IC 카드가 필요합니다.",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "정산기에 IC 카드 삽입",
      imgSrc: "/quit/seisan.jpg",
      imgAlt: "정산기",
      body: [
        "IC 카드를 정산기에 넣으면 현금을 받을 수 있습니다.",
        "정산기는 보통 경품 카운터 근처에 있습니다.",
        "IC 카드가 없는 경우 아래를 참고하세요.",
        "① 박스 방식: RETURN 버튼을 눌러 IC 카드를 받으세요.",
        "② 자동 정산 시스템: 기기에서 RETURN 버튼을 누르세요.",
        "③ 스마트 기기: COUNT 후 RETURN을 눌러 IC 카드를 받으세요.",
      ],
    },
  ],
},

winTitle: "경품 교환",
winLead: "당첨을 축하합니다!",

winSteps: [
  {
    no: 1,
    kind: "image",
    title: "두 가지 경품",
    body: [
      "경품은 '특수 경품'(매장 밖 교환소에서 현금으로 교환 가능)과 '일반 경품'(과자, 음료 등)으로 나뉩니다.",
    ],
    imgSrc: "/win/prize.png",
    imgAlt: "경품 종류",
    overlayItems: [
      { x: "40%", y: "17%", label: "두 가지 경품" },
      { x: "20%", y: "40%", label: "특수 경품" },
      { x: "65%", y: "40%", label: "대 / 중 / 소" },
      { x: "20%", y: "75%", label: "일반 경품" },
    ],
  },
  {
    no: 2,
    kind: "table",
    title: "최소 교환 수량",
    body: [
      "중요: 매장마다 최소 교환 기준이 있습니다.",
    ],
    table: {
      headers: ["종류", "최소 수량", "예시"],
      rows: [
        {
          cells: [
            { text: "P 4엔" },
            { text: "250개" },
            { text: "박스 약 1/4" },
          ],
        },
        {
          cells: [
            { text: "P 1엔" },
            { text: "1000개" },
            { text: "박스 1개" },
          ],
        },
        {
          cells: [
            { text: "S 20엔" },
            { text: "50개" },
            { text: "직접 세기" },
          ],
        },
      ],
    },
  },
  {
    no: 3,
    kind: "image",
    title: "카운터로 이동",
    body: [
      "영수증 또는 IC 카드를 직원에게 건네세요.",
    ],
    imgSrc: "/win/counter.png",
    imgAlt: "카운터",
    overlayItems: [],
  },
  {
    no: 4,
    kind: "image",
    title: "카운터에서의 대화",
    body: [
      "일반적인 대화: ① '전부 교환하시겠습니까?' → '네' ② '남은 금액은 경품을 선택하세요' → 선택",
      "헷갈릴 경우 이 화면을 보여주세요. 모든 것을 특수 경품으로 교환하고 나머지는 직원에게 맡긴다는 의미입니다.",
    ],
    imgSrc: "/win/exchange.png",
    imgAlt: "경품 선택",
    overlayItems: [],
  },
  {
    no: 5,
    kind: "image",
    title: "교환소 찾기",
    body: [
      "특수 경품을 매장 밖 교환소로 가져가면 현금으로 교환됩니다.",
      "중요: 당일에만 교환 가능합니다. 법적 이유로 직원은 위치를 알려줄 수 없습니다. 다른 손님을 따라가면 찾을 수 있습니다. 도쿄에서는 사진의 간판이 도움이 됩니다.",
    ],
    imgSrc: "/win/TUC.png",
    imgAlt: "교환소",
    overlayItems: [],
  },
],

gameflowTitle: "파칭코의 재미는?",

gameflowPachinkoTitle: "연속 당첨을 노려라!",
gameflowPachinkoBody: [
  "파칭코의 재미는 연속 당첨에 있습니다. 보너스가 계속 이어질 수 있습니다. 이를 이해하기 위해 게임 흐름을 살펴봅시다."
],
gameflowPachinkoAlt: "파칭코 게임 흐름 예시",

gameflowPachislotTitle: "기술로 승부!",
gameflowPachislotBody: [
  "파치슬롯의 재미는 릴을 정확한 타이밍에 멈추는 기술입니다. 이 기술이 당첨 확률에 직접 영향을 줍니다. 게임 흐름을 살펴봅시다."
],
gameflowPachislotAlt: "파치슬롯 게임 흐름 예시",

gameflowPachinko: {
  title: "파칭코",
  lead: "게임 흐름 / 연속 당첨을 노려라!",
  steps: [
    {
      no: 1,
      title: "연속 당첨 구조",
      imgSrc: "/flow/pflow.png",
      imgAlt: "연속 당첨 구조",
      overlayItems: [
        { x: "20%", y: "4%", label: "게임 흐름 예시" },
        { x: "40%", y: "13%", label: "일반 모드 (추첨)" },
        { x: "65%", y: "42%", label: "고확률 모드" },
        { x: "50%", y: "62%", label: "보너스" },
        { x: "40%", y: "87%", label: "시단 모드" },
      ],
      body: [
        "보너스는 일반 모드 또는 고확률 모드 등 다양한 경로로 발생합니다.",
        "고확률 모드(확변)는 당첨 확률을 높입니다.",
        "시단 모드는 확률은 같지만 게임 속도가 빨라집니다.",
        "이러한 모드가 이어지면 연속 당첨이 발생합니다.",
      ],
    },
    {
      no: 2,
      title: "예: 미들 타입 (에반게리온)",
      imgSrc: "/flow/Evangelion_Roaring for future.png",
      imgAlt: "미들 타입 예시",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "에반게리온 흐름",
      imgSrc: "/flow/Eva_flow.png",
      imgAlt: "에반게리온 흐름",
      overlayItems: [
        { x: "40%", y: "13%", label: "일반 모드" },
        { x: "50%", y: "35%", label: "보너스" },
        { x: "45%", y: "65%", label: "찬스 타임" },
        { x: "40%", y: "87%", label: "임팩트 모드" },
      ],
      body: ["보너스(Bonus) 당첨 후, **Impact Mode(확률 변동 모드)**에 진입할 수 있으며, 연속 당첨(연속 승리)을 기대할 수 있습니다。",
      "・보너스 확률：1/319.7 ・Impact Mode 중 보너스 확률：1/99.4（320번 이내에 반드시 당첨되는 것은 아닙니다）・Impact Mode 진입률：約70% ・지속률：81% ・10라운드 보너스：約1,500발"
],
    },
    {
      no: 4,
      title: "예: 라이트 타입 (바다 이야기)",
      imgSrc: "/flow/PA_BigSeaStory5.jpg",
      imgAlt: "라이트 타입 예시",
      body: [],
    },
    {
      no: 5,
      title: "바다 이야기 흐름",
      imgSrc: "/flow/agnes_flow.png",
      imgAlt: "바다 이야기 흐름",
      overlayItems: [
        { x: "45%", y: "13%", label: "일반 모드" },
        { x: "45%", y: "30%", label: "유타임" },
        { x: "40%", y: "51%", label: "보너스 + 확변" },
        { x: "50%", y: "71%", label: "찬스 타임" },
        { x: "40%", y: "87%", label: "행복 찬스" },
      ],
      body: ["보너스(Bonus) 후에는 반드시 **Short-time mode(시단)**에 들어가며, 구슬을 줄이지 않고 계속 플레이할 수 있습니다。",
      "・보너스 확률：1/99.9 ・확률 변동 중 보너스 확률：1/19.5（100번 이내에 반드시 당첨되는 것은 아닙니다）・6라운드 보너스：約648발 ・보너스 후：・확률 변동 10회 ・Short-time mode 40회"
],
    },
  ],
},

gameflowPachislot: {
  title: "파치슬롯",
  lead: "게임 흐름 / 기술로 승부!",
  steps: [
    {
      no: 1,
      title: "보너스 흐름",
      imgSrc: "/flow/sflow.png",
      imgAlt: "보너스 흐름",
      overlayItems: [
        { x: "20%", y: "4%", label: "게임 흐름 예시" },
        { x: "30%", y: "13%", label: "일반 모드" },
        { x: "65%", y: "42%", label: "찬스 존" },
        { x: "45%", y: "62%", label: "보너스" },
        { x: "30%", y: "87%", label: "AT 러시" },
      ],
      body: [
        "보너스는 일반 모드나 찬스 존을 통해 진입합니다.",
        "찬스 존, 보너스, AT 러시 구조는 기기마다 다릅니다.",
        "찬스 존에서는 보너스 확률이 올라갑니다.",
        "AT 러시에서는 작은 당첨이 계속 이어져 코인을 늘릴 수 있습니다.",
      ],
    },
    {
      no: 2,
      title: "예: 노멀 타입 (마이 저글러 V)",
      imgSrc: "/flow/MyJuggler.jpg",
      imgAlt: "마이 저글러",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "저글러 흐름",
      imgSrc: "/flow/jugflow.png",
      imgAlt: "저글러 흐름",
      overlayItems: [
        { x: "30%", y: "13%", label: "일반 모드" },
        { x: "45%", y: "72%", label: "보너스" },
      ],
      body: [
        "LCD 연출이나 복잡한 미니게임이 없는 단순한 게임으로, 보너스 당첨에 집중합니다。",
      	"・평상시에는 왼쪽 릴의 체리 심볼을 노립니다 ・보너스 당첨 시 GOGO! 램프가 점등됩니다 ・릴에 7을 맞추면 보너스 획득 ・최대 약240枚 코인 획득 가능",
      ],
    },
    {
      no: 4,
      title: "예: AT 타입 (몽키턴 V)",
      imgSrc: "/flow/MonkeyTurnV.jpg",
      imgAlt: "몽키턴",
      overlayItems: [],
      body: [],
    },
    {
      no: 5,
      title: "몽키턴 흐름",
      imgSrc: "/flow/monkey_flow.png",
      imgAlt: "몽키턴 흐름",
      overlayItems: [
        { x: "30%", y: "13%", label: "일반 모드" },
        { x: "65%", y: "37%", label: "미니 게임" },
        { x: "45%", y: "58%", label: "찬스 존" },
        { x: "30%", y: "87%", label: "AT 러시" },
      ],
      body: [
        "실제 보트 레이스 결과를 기반으로 한 게임입니다。",
        "・timing skill（타이밍 맞추기 기술）이 필요 없음 ・승리를 통해 AT Rush 모드 진입 확률 상승 ・AT Rush 중에는 작은 당첨이 연속되어 코인이 증가 ",
      ],
    },
  ],
},

trouble: {
  title: "문제 해결 가이드",

  leadParts: [
    { type: "text", text: "직원에게 보여줄 수 있는 도움 카드와 자주 발생하는 문제 해결 방법입니다." },
    { type: "text", text: " 직원을 부르려면 " },
    {
      type: "link",
      text: "기기 위의 호출 버튼",
      targetId: "call-staff",
      external: false
    },
    { type: "text", text: "을 누르세요." },
  ],

  navAriaLabel: "문제 목록",
  questionLabel: "Q",
  answerLabel: "답변",
  backToTop: "질문으로 돌아가기",
  backButton: "메뉴",

  items: [
    {
      id: "money-not-accepted",
      question: "지폐가 들어가지 않음",
      answerTitle: "지폐가 인식되지 않을 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "다른 지폐를 시도해 보세요. 계속 안 되면 직원에게 보여주세요." },
          ],
        },
        {
          type: "image",
          id: "bill-unacceptable-image",
          src: "/help/unit malfunction.png",
          alt: "지폐 문제",
          caption: "",
        },
      ],
    },

    {
      id: "ball-not-launched",
      question: "공이 발사되지 않음",
      answerTitle: "공이 나오지 않을 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "위쪽 트레이에 공이 있나요? 핸들을 끝까지 돌려도 나오지 않으면 직원에게 보여주세요." },
          ],
        },
        {
          type: "image",
          id: "ball-not-launched-image",
          src: "/help/ball not launched.png",
          alt: "공 문제",
          caption: "",
        },
      ],
    },

    {
      id: "ball-got-stuck",
      question: "공이 막힘",
      answerTitle: "공이 떨어지지 않을 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "핀 문제일 수 있습니다. 직원에게 보여주세요." },
          ],
        },
        {
          type: "image",
          id: "ball-got-stuck-image",
          src: "/help/ball got stuck.png",
          alt: "공 막힘",
          caption: "",
        },
      ],
    },

    {
      id: "another-box",
      question: "공이 넘침",
      answerTitle: "새 박스 요청",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "직원에게 보여주세요. 새로운 박스를 가져다줍니다." },
          ],
        },
        {
          type: "image",
          id: "another-box-image",
          src: "/help/box please.png",
          alt: "박스 요청",
          caption: "",
        },
      ],
    },

    {
      id: "take-break",
      question: "잠시 자리 비움",
      answerTitle: "잠시 떠날 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "직원에게 보여주세요. 자리 표시가 놓입니다. 정해진 시간 내에 돌아오세요." },
          ],
        },
        {
          type: "image",
          id: "take-break-image",
          src: "/help/take a break.png",
          alt: "자리 비움",
          caption: "",
        },
      ],
    },

    {
      id: "special-prize",
      question: "공이 많아요, 현금으로 바꿀 수 있나요?",
      answerTitle: "특수 경품 교환",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "교환 가능한 수량이 있나요? 영수증이나 IC 카드가 있나요? 카운터에서 보여주세요." },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "방법을 모르면 " },
            {
              type: "link",
              text: "당첨 후 절차",
              targetId: "/win#step-2",
              external: true
            },
            { type: "text", text: "를 확인하세요." }
          ]
        },
        {
          type: "image",
          id: "special-prize-image",
          src: "/help/exchange.png",
          alt: "경품 교환",
          caption: "",
        },
      ],
    },

    {
      id: "something-wrong",
      question: "문제가 생긴 것 같아요",
      answerTitle: "오해가 있을 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "직원에게 보여주세요. 상황을 해결해줍니다." },
          ],
        },
        {
          type: "image",
          id: "something-wrong-image",
          src: "/help/wrong.png",
          alt: "도움 필요",
          caption: "",
        },
      ],
    },

    {
      id: "someone-playing",
      question: "누군가 내 자리에 앉았어요",
      answerTitle: "자리 문제가 있을 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "직원에게 보여주세요. 해결해줍니다." },
          ],
        },
        {
          type: "image",
          id: "someone-playing-image",
          src: "/help/reserved.png",
          alt: "자리 문제",
          caption: "",
        },
      ],
    },

    {
      id: "which-side",
      question: "지폐 투입구는 어디인가요?",
      answerTitle: "지폐 넣는 위치",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "일반적으로 파칭코는 왼쪽, 파치슬롯은 오른쪽입니다." },
          ],
        },
      ],
    },

    {
      id: "where-rent-button",
      question: "BALL 버튼은 어디인가요?",
      answerTitle: "BALL 버튼 위치",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "시스템에 따라 다릅니다." },
          ],
        },
        {
          type: "steps",
          items: [
            { no: "1", title: "박스 방식", text: "지폐 투입기에 있음" },
            { no: "2", title: "자동 정산", text: "기기 오른쪽 앞쪽" },
            { no: "3", title: "스마트", text: "지폐 투입기에 있음" },
          ],
        },
        {
          type: "image",
          id: "where-rent-button-image",
          src: "/help/rent.png",
          alt: "BALL 버튼",
          caption: "",
        }
      ],
    },

    {
      id: "where-refund-button",
      question: "RETURN 버튼은 어디인가요?",
      answerTitle: "RETURN 버튼 위치",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "시스템에 따라 다릅니다." },
          ],
        },
        {
          type: "steps",
          items: [
            { no: "1", title: "박스 방식", text: "지폐 투입기에 있음" },
            { no: "2", title: "자동 정산", text: "기기 오른쪽 앞쪽" },
            { no: "3", title: "스마트", text: "지폐 투입기. 종료 시 COUNT 먼저" },
          ],
        },
        {
          type: "image",
          id: "where-refund-button-image",
          src: "/help/refund.png",
          alt: "RETURN 버튼",
          caption: "RETURN을 누르면 IC 카드가 나옵니다.",
        },
        {
          type: "image",
          id: "count-button-image",
          src: "/quit/pachinko/count.png",
          alt: "COUNT 버튼",
          caption: "COUNT를 먼저 눌러 데이터를 이동하세요.",
        },
      ],
    },

    {
      id: "alert",
      question: "플레이 중 경고 표시",
      answerTitle: "경고 대응 방법",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "화면이나 소리를 잘 확인하세요." },
          ],
        },
        {
          type: "steps",
          items: [
            {
              no: "1",
              title: "오른쪽 발사",
              text: "지시에 따라 오른쪽으로 발사하세요.",
            },
            {
              no: "2",
              title: "공 배출",
              text: "넘치면 레버를 사용하세요.",
            },
            {
              no: "3",
              title: "원래대로",
              text: "보너스 종료 후 왼쪽으로 조정하세요.",
            },
          ],
        },
        {
          type: "image",
          id: "alert-shoot-right-image",
          src: "/help/shoot right.png",
          alt: "오른쪽 발사",
          caption: "",
        },
        {
          type: "image",
          id: "alert-release-tray-image",
          src: "/play/pachinko/release lever.png",
          alt: "공 배출",
          overlayItems: [
            { x: "60%", y: "87%", label: "이 레버 사용" },
          ],
          caption: "",
        },
      ],
    },

    {
      id: "stop-reels",
      question: "릴을 원하는 대로 멈출 수 없음",
      answerTitle: "타이밍 기술",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "릴 정지는 타이밍 기술입니다. 어려우면 주변 사람에게 물어보세요." },
          ],
        },
        {
          type: "image",
          id: "stop-reels-image",
          src: "/help/meoshi.png",
          alt: "타이밍",
          caption: "",
        },
      ],
    },

    {
      id: "whats-going-on",
      question: "상황을 이해할 수 없음",
      answerTitle: "혼란스러울 때",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "주변 사람에게 보여주세요." },
          ],
        },
        {
          type: "image",
          id: "whats-going-on-image",
          src: "/help/what next.png",
          alt: "도움 요청",
          caption: "",
        },
      ],
    },

    {
      id: "call-staff",
      question: "직원 호출",
      answerTitle: "기기 위 호출 버튼을 누르세요",
      blocks: [
        {
          type: "image",
          id: "call-staff",
          src: "/help/call.png",
          alt: "호출 버튼",
          caption: "",
        },
      ],
    },
  ],
},

navHome: "메뉴",
navPlay: "플레이",
navQuit: "종료",
navWin: "당첨",
navTrouble: "문제 해결",
navGameflow: "게임 흐름",
navBack: "뒤로",
};
