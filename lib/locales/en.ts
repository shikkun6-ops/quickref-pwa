import type { Dict } from "./types";

export const en: Dict = {

  homeTitle: "Menu",
  homeLead: "What do you want to do?",
  homeNote: "",
  homeTiles: {
    checkin: "Choose a Machine",
    start: "Start Playing",
    quit: "How to Quit",
    win: "I Won",
    trouble: "Troubleshooting",
    gameflow: "Game Flow",
    backLabel: "Back",
    languageSelectLabel: "Language",
  },

  noticeTitle: "Important Notice",
  understandAndStart: "I Understand — Start",
  goBack: "Back",
  toLanguageSelect: "Language",

  noticeItems: [
    { src: "/icons/18plus.png", label: "No entry under 18" },
    { src: "/icons/no-alchol.png", label: "No alcohol" },
    { src: "/icons/no-photo.png", label: "No photography" },
    { src: "/icons/no-baggagecase.png", label: "No large baggage" },
    { src: "/icons/cash-only.png", label: "Cash (Japanese yen) only" },
  ],

  checkinTitle: "Choose a Machine",
  checkinLead: "Select based on budget, odds, and machine type",

  checkinSections: {
    rate: {
      title: "Type & Cost per Ball/Coin",
      chartTitle: "Type & Cost",
      chartRows: [
        { kind: "P", label: "4 yen" },
        { kind: "P", label: "1 yen" },
        { kind: "S", label: "20 yen" },
      ],
      body: [
        "Pachinko (P) differs depending on the cost per ball (e.g., 4 yen or 1 yen). If you want a quick, high-risk experience, choose 4 yen. If you prefer a relaxed play style, 1 yen is recommended.",
        "Pachislot (S) usually costs 20 yen per coin. Some shops offer cheaper options like 10 yen or 5 yen.",
      ],
     },

    spec: {
      title: "Game Types",
      chartTitle: "Game Types",
      chartRows: [
        { kind: "P", label: "Middle" },
        { kind: "P", label: "Light" },
        { kind: "S", label: "Normal" },
        { kind: "S", label: "AT" },
      ],
      body: [
        "Pachinko machines vary by hit probability. 'Light type' machines have higher hit rates but smaller rewards.",
        "Pachislot machines vary by system. 'Normal' types rely on hitting bonus, while 'AT' types increase coins through bonus-like game modes.",
        "Some machines require timing skill ('stop the reels'), but beginner-friendly machines are also available.",
        "For more details, check 'TIPS(Game Flow)' from the menu.",
      ],
    },

    facilities: {
      title: "Machine & Facility Differences",
      chartTitle: "System Types",
      chartRows: [
        { kind: "P", label: "Ball Box Style" },
        { kind: "P", label: "In-seat Counting System" },
        { kind: "P", label: "Smart Pachinko" },
        { kind: "S", label: "Coin Box Style" },
        { kind: "S", label: "Smart Slot" },
      ],
      body: [
        "Pachinko:",
        "Ball box style: balls are collected physically in trays.",
        "Counting system / Smart Pachinko: balls are counted digitally.",
        "Pachislot:",
        "Coin box style: coins are handled manually.",
        "Smart slot: coins are counted digitally.",
      ],
    },
  },

  playTitle: "How to Play",

  playPachinko: {
    title: "Pachinko",
    lead: "Basic Steps",
    steps: [
      {
        no: 1,
        title: "Sit at an empty machine",
        imgSrc: "/play/pachinko/step1.png",
        imgAlt: "Check if the machine is available",
        overlayItems: [
          {
            x: "40%",
            y: "80%",
            label: "Check for personal belongings",
          },
        ],
        body: [],
      },
      {
      no: 2,
        title: "Insert bills",
        imgSrc: "/play/pachinko/step2.png",
        imgAlt: "Insert bills",
        overlayItems: [
          { x: "10%", y: "35%", label: "Insert bills here" },
        ],
        body: ["Insert bills into the left unit."],
      },
      {
      no: 3,
        title: "Press the BALL button",
        imgSrc: "/play/pachinko/step3.png",
        imgAlt: "Press button",
        body: ["Balls will appear in the upper tray."],
      },
      {
      no: 4,
        title: "Turn the handle",
        imgSrc: "/play/pachinko/step4.png",
        imgAlt: "Turn handle",
        body: ["Adjust the strength by turning the handle clockwise."],
      },
      {
      no: 5,
        title: "Aim for the start pocket",
        imgSrc: "/play/pachinko/step5.png",
        imgAlt: "Aim",
        overlayItems: [
          { x: "45%", y: "25%", label: "Aim here" },
          { x: "55%", y: "60%", label: "Start pocket" },
        ],
        body: [
          "When a ball enters the start pocket, the digital screen begins a lottery.",
        ],
      },
      {
      no: 6,
        title: "[When you hit a bonus]",
        imgSrc: "/play/pachinko/winning.png",
        imgAlt: "Winning",
	      overlayItems: [
        { x: "60%", y: "28%", 
        label: "Aim here" },
        { x: "50%", y: "65%", 
        label: "Into the open pocket" },
        ],
        body: [
          "Follow the instruction 'Shoot to the right'.",
          "Keep feeding balls into the open pocket.",
          "IMPORTANT: Use the release lever to avoid overflow. If you forget, the balls may get jammed.",
        ]
      },
      {
      no: 7,
        title: "Don't forget to release the balls",
        imgSrc: "/play/pachinko/release lever.png",
        imgAlt: "Release the balls",
        overlayItems: [
          { x: "60%", y: "87%", label: "Use release lever" },
        ],
        body: ["When the bonus ends, return the lever to its original position.",
        ],
      },
    ],
  },

  playPachislot: {
    title: "Pachislot",
    lead: "Basic Steps",
    steps: [
      {
      no: 1,
      title: "Sit at an empty machine",
      imgSrc: "/play/pachislot/step1.png",
      imgAlt: "Check availability",
	    overlayItems: [
        { x: "35%", y: "15%", 
          label: "Check the top shelf"},
        { x: "40%", y: "80%", 
          label: "Check for personal items"},
      ] ,
      body: ["Make sure no personal items are left. Also check the top shelf."],
      },
      {
      no: 2,
      title: "Insert bills and get coins",
      imgSrc: "/play/pachislot/step2.png",
      imgAlt: "Insert and use coins",
	    overlayItems: [
        { x: "70%", y: "10%", 
          label: "①Insert bills"},
        { x: "70%", y: "53%", 
          label: "②Press the COIN button"},
        { x: "65%", y: "75%", 
          label: "④Insert coins"},
        { x: "30%", y: "91%", 
          label: "③Coins will appear in the lower tray"},
      ] ,
      body: [
        "Insert bills, press the coin button, and put coins into the slot.",
        "3 coins are needed per spin.",
      ],
      },
      {
      no: 3,
      title: "Press MAX BET, then pull the lever",
      imgSrc: "/play/pachislot/step3.png",
      imgAlt: "Play",
	    overlayItems: [
        { x: "20%", y: "40%", 
          label: "①Press MAX BET "},
        { x: "18%", y: "70%", 
          label: "②Pull the lever"},
        { x: "42%", y: "85%", 
          label: "③Stop the reels"},
      ] ,
      body: [
        "Press MAX BET, pull the lever, and stop the reels with the buttons.",
      ],
      },
      {
      no: 4,
        title: "Stop symbols",
        imgSrc: "/play/pachislot/step4.png",
        imgAlt: "Reel symbols",
        body: ["Try to stop symbols intentionally (timing skill).",
        ],
      },
    ],
  },

quitTitle: "How to Quit (Finish Playing)",

quitIntroLead: "Finish playing and leave the store, or move to another machine.",

quitIntroBody: [
  {
    type: "paragraph",
    parts: [
      {
        type: "text",
        text: "If you have no balls or coins left, collect any remaining cash balance. If there is no balance, you can leave your seat. If you still have enough balls or coins for prizes, proceed to counting."
      }
    ]
  },
  {
    type: "paragraph",
    parts: [
      {type: "embed", targetId: "/win#step-2", external: true}
    ]
  }
],

quitPachinko: {
  title: "How to Quit Pachinko",
  lead: "Depends on the system type",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "Ball Box Style",
      imgSrc: "/quit/pachinko/step1.png",
      imgAlt: "Ball Box Style",
      overlayItems: [
        {x: "45%", y: "17%", label: "Call staff to count balls"},
      ],
      body: [
        "IMPORTANT: If you have remaining cash balance, press the RETURN button and take your IC card.",
        "① Press the call button above the machine to call staff.",
        "② Signal that you are done (e.g., cross your index fingers).",
        "③ Staff will count your balls.",
        "④ Take the receipt and go to the counter.",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "In-seat Counting System",
      imgSrc: "/quit/pachinko/step2.png",
      imgAlt: "Counting system",
      overlayItems: [
        { x: "35%", y: "45%", label: "RETURN button" },
      ],
      body: [
        "① Press the RETURN button.",
        "② Your IC card with balance will come out.",
        "③ Take it to the counter or move to another machine.",
      ],
    },
    {
      no: 3,
      kind: "image",
      title: "Smart Pachinko",
      imgSrc: "/quit/pachinko/step3.png",
      imgAlt: "Smart pachinko",
      overlayItems: [
        {x: "43%", y: "18%", label: "①COUNT → ②RETURN"},
      	{x: "55%", y: "50%", 
          label: "①COUNT button on the machine"},
        {x: "35%", y: "35%", 
          label: "②RETURN button on the left unit"},
      ],
      body: [
        "① Press the COUNT button.",
        "② Press the RETURN button.",
        "③ Your IC card will come out.",
        "④ Take it to the counter or move to another machine.",
      ],
    },
   ],
 },

quitPachislot: {
  title: "How to Quit Pachislot",
  lead: "Depends on the system type",
  steps: [
    {
      no: 1,
      kind: "image",
      title: " Coin Box Style",
      imgSrc: "/quit/pachislot/step1.png",
      imgAlt: "Coin Box Style",
      overlayItems: [
        {x: "43%", y: "18%", label: "Call staff to count coins"},
      ],
      body: [
        "IMPORTANT: If you have remaining cash balance, press the RETURN button and take your IC card.",
        "① Press the call button above the machine to call staff.",
        "② Signal that you are done.",
        "③ Staff will count your coins.",
        "④ Take the receipt and go to the counter.",
        "NOTE: Some shops have self-service counters, but asking staff is recommended.",
      ],
    },
    {
      no: 2,
      kind: "image",
      title: "Smart Slot",
      imgSrc: "/quit/pachislot/step2.png",
      imgAlt: "Smart slot",
      overlayItems: [
        {x: "43%", y: "18%", label: "①COUNT → ②RETURN"},
      	{x: "30%", y: "65%", 
          label: "①COUNT button on the machine"},
        {x: "30%", y: "40%", 
          label: "②RETURN button on the right unit"},
      ],
      body: [
        "① Press the COUNT button.",
        "② Press the RETURN button.",
        "③ Your IC card will come out.",
        "④ Take it to the counter or move to another machine.",
      ],
    },
  ],
},

quitRefund: {
  title: "Cash Refund",
  lead: "You need an IC card with your balance.",
  steps: [
    {
      no: 1,
      kind: "image",
      title: "Insert IC card into the machine",
      imgSrc: "/quit/seisan.jpg",
      imgAlt: "Payment machine",
      body: [
        "Insert the IC card into the payment machine to get your cash.",
        "The machine is usually near the prize counter.",
        "If you don't have your IC card, see below.",
        "① For Ball Box (Coin Box) style, press RETURN and take your IC card.",
        "② For Counting systems, press RETURN on the machine.",
        "③ For Smart Pachinko and Smart Slot, Press COUNT on the machine, then press RETURN on the unit. Take your IC card.",
        
      ],
    },
  ],
},

winTitle: "Prize Exchange",
winLead: "Congratulations on your win!",

winSteps: [
    {
      no: 1,
      kind: "image",
      title: "Two types of prizes",
      body: [
        "There are special prizes (can be exchanged for cash at a separate exchange shop outside the store) and regular prizes (snacks, drinks, etc.).",
      ],
      imgSrc: "/win/prize.png",
      imgAlt: "Prize types",
      overlayItems: [
        { x: "40%", y: "17%", 
          label: "Two types of prizes"},
        { x: "20%", y: "40%", 
          label: "special prizes" },
        { x: "65%", y: "40%", 
          label: "Large/Medium/Small " },
        { x: "20%", y: "75%", 
          label: "regular prizes" },
        ],
    },
   {
      no: 2,
      kind: "table",
      title: "Minimum exchange amount",
      body: [
        "IMPORTANT: Each shop has a minimum exchange requirement.",
      ],
      table: {
      headers: ["Type", "Minimum", "Example"],
      rows: [
        {
          cells: [
          { text: "P 4 yen" },
          { text: "250 balls" },
          { text: "About 1/4 of a box" },
          ],
        },
        {
          cells: [
          { text: "P 1 yen" },
          { text: "1000 balls" },
          { text: "1 box" },
         ],
       },
       {
          cells: [
          { text: "S 20 yen" },
          { text: "50 coins" },
          { text: "Count them" },
          ],
        },
      ],
     },
    },
    {
      no: 3,
      kind: "image",
      title: "Go to the counter",
      body: [
        "Give your receipt or IC card to the staff.",
      ],
      imgSrc: "/win/counter.png",
      imgAlt: "Counter",
      overlayItems: [],
    },
    {
      no: 4,
      kind: "image",
      title: "Interaction at the counter",
      body: [
        "Typical conversation:① 'Exchange all?' → 'Yes'② 'Please choose prizes for the remaining amount' → Choose items", 
        "If it's confusing, show this image. It means: exchange everything for special prizes, and let the staff choose the rest."
      ],
      imgSrc: "/win/exchange.png",
      imgAlt: "Choose prize",
      overlayItems: [],
    },
    {
      no: 5,
      kind: "image",
      title: "Find exchange shop",
      body: [
        "Take special prizes to the exchange shop outside. They exchange special prizes for cash.",
        "IMPORTANT: Must be exchanged on the same day. Staff are not allowed to tell you the location due to legal reasons. Follow other customers then you may find it. In Tokyo, the sign in this picture may help you find it.",
      ],
      imgSrc: "/win/TUC.png",
      imgAlt: "Exchange shop",
      overlayItems: [],
    },
  ],

gameflowTitle: "What Makes Pachinko Fun?",

gameflowPachinkoTitle: "Aim for Consecutive Wins!",
gameflowPachinkoBody: [
      "The fun of pachinko comes from consecutive wins, where bonuses can continue one after another. To understand this feature, let's look at the game flow."
],
gameflowPachinkoAlt: "Pachinko game flow example",

gameflowPachislotTitle: "Win with Skill!",
gameflowPachislotBody: [
      "The fun of pachislot lies in stopping the reels at the right timing. This skill directly affects your chances of winning. Let's take a look at the game flow."
],
gameflowPachislotAlt: "Pachislot game flow example",
  
gameflowPachinko: {
  title: "Pachinko",
  lead: "Game Flow / Aim for Consecutive Wins!",
  steps: [
    {
      no: 1,
      title: "How Consecutive Wins Work",
      imgSrc: "/flow/pflow.png",
      imgAlt: "Consecutive wins system",
      overlayItems: [
        { x: "20%", y: "4%", label: "Game flow example" },
        { x: "40%", y: "13%", label: "Normal mode (drawing)" },
        { x: "65%", y: "42%", label: "High-probability mode" },
        { x: "50%", y: "62%", label: "Bonus" },
        { x: "40%", y: "87%", label: "Short-time mode" },
      ],
      body: [
        "Bonuses can occur through different routes, such as during normal play or high-probability mode.",
        "High-probability mode (Kakuhen) increases the chance of hitting a bonus.",
        "Short-time mode (Jitan) keeps the same probability but speeds up the game.",
        "When these modes continue, bonuses can occur repeatedly, creating consecutive wins.",
      ],
    },
    {
      no: 2,
      title: "Example: Middle Type Machine (Evangelion)",
      imgSrc: "/flow/Evangelion_Roaring for future.png",
      imgAlt: "Middle type example",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "Evangelion Game Flow",
      imgSrc: "/flow/Eva_flow.png",
      imgAlt: "Evangelion flow",
      overlayItems: [
        { x: "40%", y: "13%", label: "Normal mode" },
        { x: "50%", y: "35%", label: "Bonus" },
        { x: "45%", y: "65%", label: "Chance Time (Jitan)" },
        { x: "40%", y: "87%", label: "Impact Mode (Kakuhen)" },
      ],
      body: ["After hitting a bonus, there is a chance to enter Impact Mode (probability change mode), where consecutive wins (“winning streaks”) can be expected.",
      "Bonus probability: 1 in 319.7 / Bonus probability during Impact Mode: 1 in 99.4 (This does not guarantee a win within 320 spins.) / Impact Mode entry rate: approx. 70% / Continuation rate: 81% / Payout for a 10-round bonus: approx. 1,500 balls"],
    },
    {
      no: 4,
      title: "Example: Light Type Machine (Sea Story)",
      imgSrc: "/flow/PA_BigSeaStory5.jpg",
      imgAlt: "Light type example",
      body: [],
    },
    {
      no: 5,
      title: "Sea Story Game Flow",
      imgSrc: "/flow/agnes_flow.png",
      imgAlt: "Sea Story flow",
      overlayItems: [
        { x: "45%", y: "13%", label: "Normal mode" },
        { x: "45%", y: "30%", label: "Yutime (short-time mode)" },
        { x: "40%", y: "51%", label: "Bonus + High-probability mode" },
        { x: "50%", y: "71%", label: "Chance Time" },
        { x: "40%", y: "87%", label: "Happiness Chance" },
      ],
      body: ["After every bonus, a Short-time mode (Jitan) is guaranteed, allowing players to continue playing without losing balls.",
      "Bonus probability: 1 in 99.9 / Bonus probability during probability change mode: 1 in 19.5 (This does not guarantee a win within 100 spins.) / Payout for a 6-round bonus: approx. 648 balls / After a bonus: 10 spins of probability change mode / followed by 40 spins of Short-time mode"],
    },
  ],
},

gameflowPachislot: {
  title: "Pachislot",
  lead: "Game Flow / Win with Skill!",
  steps: [
    {
      no: 1,
      title: "Flow to Bonus",
      imgSrc: "/flow/sflow.png",
      imgAlt: "Flow to bonus",
      overlayItems: [
        { x: "20%", y: "4%", label: "Game flow example" },
        { x: "30%", y: "13%", label: "Normal mode (drawing)" },
        { x: "65%", y: "42%", label: "Chance zone" },
        { x: "45%", y: "62%", label: "Bonus" },
        { x: "30%", y: "87%", label: "AT Rush" },
      ],
      body: [
        "Bonuses can occur through different routes, such as normal play or entering a chance zone.",
        "The system of chance zones, bonuses, and AT Rush differs depending on the machine.",
        "In a chance zone, the probability of entering a bonus increases.",
        "During AT Rush, small wins continue, allowing you to increase your coins.",
      ],
    },
    {
      no: 2,
      title: "Example: Normal Type (My Juggler V)",
      imgSrc: "/flow/MyJuggler.jpg",
      imgAlt: "My Juggler V",
      overlayItems: [],
      body: [],
    },
    {
      no: 3,
      title: "My Juggler Game Flow",
      imgSrc: "/flow/jugflow.png",
      imgAlt: "Juggler flow",
      overlayItems: [
        { x: "30%", y: "13%", label: "Normal mode" },
        { x: "45%", y: "72%", label: "Bonus" },
      ],
      body: [
        "A simple game with no LCD animations or complex mini-games—players focus only on hitting bonuses.",
        "During normal play, aim for the cherry symbol on the left reel / When a bonus is triggered, the “GOGO!” lamp lights up / Then align the 7 symbols on the reels / Bonus payout: up to approx. 240 coins",
      ],
    },
    {
      no: 4,
      title: "Example: AT Type (Monkey Turn V)",
      imgSrc: "/flow/MonkeyTurnV.jpg",
      imgAlt: "Monkey Turn",
      overlayItems: [],
      body: [],
    },
    {
      no: 5,
      title: "Monkey Turn Game Flow",
      imgSrc: "/flow/monkey_flow.png",
      imgAlt: "Monkey Turn flow",
      overlayItems: [
        { x: "30%", y: "13%", label: "Normal mode" },
        { x: "65%", y: "37%", label: "Mini game" },
        { x: "45%", y: "58%", label: "Chance zone" },
        { x: "30%", y: "87%", label: "AT Rush" },
      ],
      body: [
        "The game is based on simulated boat race outcomes.",
        "No need for timing skill / By winning races, players increase the chance of entering AT Rush mode / During AT Rush, small wins occur continuously (similar to bonuses), allowing players to steadily increase their coin count",
      ],
    },
  ],
},

trouble: {
  title: "Trouble Guide",

  leadParts: [
    { type: "text", text: "Here are help cards you can show staff and answers to common questions." },
    { type: "text", text: " To call staff, press the " },
    {
      type: "link",
      text: "call button above the machine",
      targetId: "call-staff",
      external: false
    },
    { type: "text", text: "." },
  ],

  navAriaLabel: "Trouble list",
  questionLabel: "Q",
  answerLabel: "Answer",
  backToTop: "Back to questions",
  backButton: "Menu",
  items: [
  {
      id: "money-not-accepted",
      question: "Bills are rejected",
      answerTitle: "When bills are not accepted",
      blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Try another bill. If it still doesn't work, call staff and show this." },
      ],
    },
    {
      type: "image",
      id: "bill-unacceptable-image",
      src: "/help/unit malfunction.png",
      alt: "Bill not accepted",
      caption: "",
    },
  ],
},
{
  id: "ball-not-launched",
  question: "Balls are not launching",
  answerTitle: "When balls won't launch",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Are balls in the upper tray? If they still won't launch even when turning the handle fully, call staff and show this." },
      ],
    },
    {
      type: "image",
      id: "ball-not-launched-image",
      src: "/help/ball not launched.png",
      alt: "Ball issue",
      caption: "",
    },
  ],
},
{
  id: "ball-got-stuck",
  question: "Balls are stuck",
  answerTitle: "When balls don't fall properly",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "There may be a problem with the pins. Call staff and show this." },
      ],
    },
    {
      type: "image",
      id: "ball-got-stuck-image",
      src: "/help/ball got stuck.png",
      alt: "Ball stuck",
      caption: "",
    },
  ],
},
{
  id: "another-box",
  question: "Balls are overflowing",
  answerTitle: "Request another box",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Call staff and show this. They will bring another box and stack it behind your seat." },
      ],
    },
    {
      type: "image",
      id: "another-box-image",
      src: "/help/box please.png",
      alt: "Need another box",
      caption: "",
    },
  ],
},
{
  id: "take-break",
  question: "Take a break",
  answerTitle: "When you want to leave your seat for a while",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Call staff and show this. A break tag will be placed. Please return within the allowed time." },
      ],
    },
    {
      type: "image",
      id: "take-break-image",
      src: "/help/take a break.png",
      alt: "Take a break",
      caption: "",
    },
  ],
},
{
  id: "special-prize",
  question: "I have many balls! Can I get cash?",
  answerTitle: "Exchange for special prizes",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Do you have enough balls or coins to exchange? Do you have your receipt or IC card? Show this to the staff at the counter." },
      ],
    },
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "If you don't know how to exchange, " },
        {
          type: "link",
          text: "see what to do after winning",
          targetId: "/win#step-2",
          external: true
        },
        { type: "text", text: "." }
      ]
    },
    {
      type: "image",
      id: "special-prize-image",
      src: "/help/exchange.png",
      alt: "Exchange for special prize",
      caption: "",
    },
  ],
},
{
  id: "something-wrong",
  question: "Am I in trouble?",
  answerTitle: "When there is a misunderstanding",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Call staff and show this. They will help resolve the situation." },
      ],
    },
    {
      type: "image",
      id: "something-wrong-image",
      src: "/help/wrong.png",
      alt: "Help needed",
      caption: "",
    },
  ],
},
{
  id: "someone-playing",
  question: "Someone took my seat",
  answerTitle: "When someone is using your reserved seat",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Call staff and show this. They will help resolve it." },
      ],
    },
    {
      type: "image",
      id: "someone-playing-image",
      src: "/help/reserved.png",
      alt: "Reserved seat",
      caption: "",
    },
  ],
},
{
  id: "which-side",
  question: "Which side is the bill unit?",
  answerTitle: "Where to insert bills",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Generally, pachinko machines have the bill unit on the left, and pachislot machines on the right." },
      ],
    },
  ],
},
{
  id: "where-rent-button",
  question: "Where is the BALL button?",
  answerTitle: "Location of the BALL button",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "It depends on the system." },
      ],
    },
    {
      type: "steps",
      items: [
        { no: "1", title: "Ball Box Style", text: "On the bill unit." },
        { no: "2", title: "In-seat Counting System", text: "Near the front right of the machine." },
        { no: "3", title: "Smart machines", text: "On the bill unit." },
      ],
    },
    {
      type: "image",
      id: "where-rent-button-image",
      src: "/help/rent.png",
      alt: "BALL button",
      caption: "",
    }
  ],
},
{
  id: "where-refund-button",
  question: "Where is the RETURN button?",
  answerTitle: "Location of the RETURN button",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "It depends on the system." },
      ],
    },
    {
      type: "steps",
      items: [
        { no: "1", title: "Ball Box Style", text: "On the bill unit." },
        { no: "2", title: "In-seat Counting System", text: "Near the front right of the machine." },
        { no: "3", title: "Smart machines", text: "On the bill unit. IMPORTANT: Press COUNT first when quitting." },
      ],
    },
    {
      type: "image",
      id: "where-refund-button-image",
      src: "/help/refund.png",
      alt: "RETURN button",
      caption: "Pressing RETURN will issue an IC card with your balance.",
    },
    {
      type: "image",
      id: "count-button-image",
      src: "/quit/pachinko/count.png",
      alt: "COUNT button",
      caption: "Press COUNT first to transfer your ball data to the unit.",
    },
  ],
},
{
  id: "alert",
  question: "Warning appears during play",
  answerTitle: "How to handle warnings",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Check the message or sound carefully." },
      ],
    },
    {
      type: "steps",
      items: [
        {
          no: "1",
          title: "Shoot to the right (during bonus)",
          text: "Follow the instruction and shoot balls to the right side.",
        },
        {
          no: "2",
          title: "Release balls",
          text: "If balls overflow, use the release lever to move them down.",
        },
        {
          no: "3",
          title: "Return to normal play",
          text: "After the bonus, aim back to the left side.",
        },
      ],
    },
    {
      type: "image",
      id: "alert-shoot-right-image",
      src: "/help/shoot right.png",
      alt: "shoot right",
      caption: " Shoot to the right (during bonus)",
    },
    {
      type: "image",
      id: "alert-release-tray-image",
      src: "/play/pachinko/release lever.png",
      alt: "release balls",
      overlayItems: [
            { x: "60%", y: "87%", label: "Use this lever" },
      ],
      caption: " If balls overflow, use the release lever to move them down.",
    },
  ],
},
{
  id:"stop-reels",
  question: "I can't stop the reels as I want",
  answerTitle: "About timing skill",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "Stopping symbols requires timing skill. During a bonus, only certain symbols can be stopped. If you can't do it, ask nearby players. Staff are not allowed to help." },
      ],
    },
    {
      type: "image",
      id: "stop-reels-image",
      src: "/help/meoshi.png",
      alt: "Timing skill",
      caption: "",
    },
  ],
},
{
  id: "whats-going-on",
  question: "I don't understand what's happening",
  answerTitle: "When you're confused",
  blocks: [
    {
      type: "paragraph",
      parts: [
        { type: "text", text: "You may want to ask someone nearby. Show this." },
      ],
    },
    {
      type: "image",
      id: "whats-going-on-image",
      src: "/help/what next.png",
      alt: "What should I do?",
      caption: "",
    },
  ],
},
{
  id: "call-staff",
  question: "Call staff",
  answerTitle: "Press the call button above the machine",
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
      alt: "Call button",
      caption: "",
    },
   ],
  },
 ],
},

  navHome: "Menu",
  navPlay: "Play",
  navQuit: "Quit",
  navWin: "Win",
  navTrouble: "Trouble",
  navGameflow: "Game Flow",
  navBack: "Back",
};