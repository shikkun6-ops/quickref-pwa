import type { Dict } from "./types";

export const ja: Dict = {

  homeTitle: "メニュー",
  homeLead: "知りたい項目を選んでください。",
  homeNote:"",
  homeTiles: {
    checkin: "台選び",
    start: "はじめる",
    quit: "やめる",
    win: "勝った",
    trouble: "トラブル",
    gameflow: "ゲームの流れ",
    backLabel: "戻る",
    languageSelectLabel: "言語選択へ",
  },

  noticeTitle: "重要なお知らせ",
  understandAndStart: "理解しました — スタート",
  goBack: "戻る",
  toLanguageSelect: "言語選択へ",

  noticeItems: [
    { src: "/icons/18plus.png", label: "18歳未満入場不可" },
    { src: "/icons/no-alchol.png", label: "飲酒禁止" },
    { src: "/icons/no-photo.png", label: "撮影禁止" },
    { src: "/icons/no-baggagecase.png", label: "大きな荷物禁止" },
    { src: "/icons/cash-only.png", label: "現金（円）のみ" },
  ],

  checkinTitle: "入店したら遊ぶ台を選びます",
  checkinLead: "投資金額と当たりやすさ、設備の違いなどで選びます",
  
  checkinSections: {
    rate: {
      title: "タイプと貸玉料",
      chartTitle: "タイプと貸玉料",
      chartRows:[
        {kind: "P",label:"4円"},
        {kind: "P",label:"1円"},
        {kind: "S",label:"20円"},],
      body:[
        "パチンコ（Ｐ）は1玉あたりの料金（例：4円、1円）で遊び方が変わります。短い時間で運試しするなら4円。ゆっくり遊ぶなら1円がおすすめです。",
        "パチスロ（Ｓ）は1枚あたりの料金（例：20円）が一般的です。店によっては１枚10円や5円という変則的な貸玉料もあります。",
      ],
     },

    spec: {
      title: "ゲームスペック",
      chartTitle: "ゲームスペック",
      chartRows:[
        {kind: "P",label:"ミドル"},
        {kind: "P",label:"甘デジ"},
        {kind: "S",label:"ノーマル"},
        {kind: "S",label:"AT"},],
      body: [
        "パチンコ（Ｐ）は「ミドル」「甘デジ」など、大当り確率の違いでゲーム性が変わります。大当り確率が高めの「甘デジ」は大当たりのときの賞球数は少なくなります。",
        "パチスロ（Ｓ）は「ノーマル」「ＡＴ」など、大当たりの仕組みが異なります。ノーマルタイプは、大当たりを引くまで打ち続けるものです。一方、ＡＴタイプは、小ゲームや小役（小枚数を得られる特別な図柄）を狙いながら、枚数を増やしていくゲーム性です。いずれもリール上の図柄を自ら揃える「目押し」の技術が必要ですが、必要のないものもおすすめです。",
        "さらに詳しく知りたい場合は、「MENU」ホーム画面から「TIPS」ゲームフローを参照ください。",
      ],
    },

    facilities: {
      title: "その他、設備などの違い",
      chartTitle: "設備の違い",
      chartRows:[
        {kind: "P",label:"玉箱スタイル"},
        {kind: "P",label:"各台計数機"},
        {kind: "P",label:"スマパチ"},
        {kind: "S",label:"玉箱スタイル"},
        {kind: "S",label:"スマスロ"},],
      body: [
        "パチンコ（Ｐ)：",
        "玉箱スタイルは、賞球を直接玉箱で受けます。",
        "各台計数機やスマパチは、電子的に賞球数が計数され、記録されます。",
        "パチスロ（Ｓ）：",
        "玉箱スタイルは、手でメダルを投入し、獲得したメダルは玉箱に貯めます。",
        "スマスロは、電子的に賞球数が計数され、記録されます。。",
      ],
    },
  },

  playTitle: "遊び方",
  
  playPachinko: {
    title: "Pachinko",
    lead: "基本の流れ",
    steps: [
     {
      no: 1,
      title: "空き台に座る",
      imgSrc: "/play/pachinko/step1.png",
      imgAlt: "私物があったら空いてません",
      overlayItems:  [
        { x: "40%", y: "80%", 
          label: "遊技機周辺にハンカチやたばこ、飲み物などはありませんか？"},
      ] ,
      body: [],
    
    },
    {
      no: 2,
      title: "紙幣を投入する",
      imgSrc: "/play/pachinko/step2.png",
      imgAlt: "紙幣を投入する",
      overlayItems: [
        { x: "10%", y: "35%", 
          label: "紙幣を投入"},
      ] ,
      body: ["遊技機左側のユニットに紙幣を入れます。"],
    },
    {
      no: 3,
      title: "貸玉ボタンを押す",
      imgSrc: "/play/pachinko/step3.png",
      imgAlt: "貸玉ボタンを押す",
      body: ["貸玉（球貸）ボタンを押すと、玉が上皿に出ます。"],
    },
    {
      no: 4,
      title: "ハンドルを回して玉を弾く",
      imgSrc: "/play/pachinko/step4.png",
      imgAlt: "ハンドルを回して玉を弾く",
      body: ["通常は右下にあるハンドルを時計回りに少しずつ回して弾く強さを調整します。",
             ],
    },
    {
      no: 5,
      title: "狙ったところへ弾く",
      imgSrc: "/play/pachinko/step5.png",
      imgAlt: "狙ったところへ弾く",
      overlayItems: [
        { x: "45%", y: "25%", 
        label: "この辺りを狙う" },
        { x: "60%", y: "60%", 
        label: "スタートチャッカー" },
      ],
      body: ["左上の辺りを狙い、中央下部のスタートチャッカーに玉が入ると、液晶の図柄が抽選を始めます。"],
    },
    {
      no: 6,
      title: "[大当たりを引いたら]",
      imgSrc: "/play/pachinko/winning.png",
      imgAlt: "大当たりを引いたら",
      overlayItems: [
        { x: "60%", y: "28%", 
        label: "この辺りを狙う" },
        { x: "60%", y: "62%", 
        label: "アタッカーへ玉を入れる" },
      ],
      body: ["大当たりを引くと、液晶画面にも「⇒右打ち」と表示されます。玉を右側まで弾いて、大当たり中に開閉するアタッカーへ玉をどんどん入れていきます。",
             "★★重要★★",
             "大当たり中は玉抜きレバーを操作して、上皿に溢れてくる玉を下皿へ落としてください。これを忘れると、玉が詰まってしまいます。",
            ]
    },
    {
      no: 7,
      title: "[玉抜きレバーを引くのを忘れずに]",
      imgSrc: "/play/pachinko/release lever.png",
      imgAlt: "玉抜き",
      overlayItems: [
        { x: "60%", y: "87%", 
        label: "レバーを操作する" },
      ],
      body: ["大当たりが終了したら、玉抜きレバーを戻します。",
            ]
    },
    ],
  },

  playPachislot: {
    title: "Pachislot",
    lead: "基本の流れ",
    steps: [
       {
      no: 1,
      title: "空き台に座る",
      imgSrc: "/play/pachislot/step1.png",
      imgAlt: "私物があったら空いてません",
      overlayItems: [
        { x: "35%", y: "15%", 
          label: "上の棚も確認してください"},
        { x: "40%", y: "80%", 
          label: "遊技機周辺に私物はありませんか？"},
      ] ,
      body: ["ハンカチやタバコ、飲み物など私物があったら空いてません。上部の棚も確認してください。"],
    
    },
    {
      no: 2,
      title: "紙幣を投入して、出てきたメダルを投入口へ入れる",
      imgSrc: "/play/pachislot/step2.png",
      imgAlt: "紙幣を投入⇒メダルを投入口へ",
      overlayItems: [
        { x: "70%", y: "10%", 
          label: "①紙幣はここへ"},
        { x: "70%", y: "53%", 
          label: "②貸メダルボタンを押す"},
        { x: "65%", y: "75%", 
          label: "④メダルを投入口へ"},
        { x: "30%", y: "91%", 
          label: "③メダルは下皿に排出される"},
      ] ,
      body:  ["①遊技機右側のユニットに紙幣を入れます。②貸メダルボタンを押します。③下皿に出てきたメダルを、メダル投入口に入れます。",
             "1回リールを回す為に3枚のメダルが必要です。通常はまとめて50枚程を先に投入しておきます。"]
,
    },
    {
      no: 3,
      title: "MAX BETボタンを押してレバーを下げる",
      imgSrc: "/play/pachislot/step3.png",
      imgAlt: "MAX BETボタンを押す",
      overlayItems: [
        { x: "20%", y: "40%", 
          label: "①MAX BETボタンを押す"},
        { x: "18%", y: "70%", 
          label: "②レバーを下げる"},
        { x: "42%", y: "85%", 
          label: "③ストップボタンでリールの回転を止める"},
      ] ,
      body: ["①MAX BETボタンを押します。②レバーを下げます③ストップボタンを押して、３つのリールをそれぞれ止めます。"],
    },
    {
      no: 4,
      title: "リールの図柄配列",
      imgSrc: "/play/pachislot/step4.png",
      imgAlt: "リールの図柄配列",
      overlayItems: [] ,
      body:   ["リールの図柄配列を参考に「目押し」してみましょう。"],
    },
    ],
  },

 quitTitle: "やめ方(遊技を終了する)",
  quitIntroLead: "遊技を終了して退店する。または他の台に移動する。",
  quitIntroBody: [
  {
    type: "paragraph",
    parts: [
      { type: "text", text: "玉やメダルが残っていなければ、現金残高の返金を受けましょう。現金も残高が無ければそのまま離席します。玉やメダルが景品交換できるだけ残っていたら、玉やメダルを計数しましょう。"        
       }
    ]
  },
  {
    type: "paragraph",
    parts: [
      { type: "embed", targetId: "/win#step-2", external: true}
    ]
  }
],

quitPachinko: {
    title: "Pachinko",
    lead: "設備タイプによって違う",
    steps: [
     {
      no: 1,
      kind: "image",
      title: "玉箱スタイルの場合",
      imgSrc: "/quit/pachinko/step1.png",
      imgAlt: "玉箱スタイルの場合",
      overlayItems:  [
        { x: "45%", y: "17%", 
          label: "店員を呼んで玉を計数する"},
      ] ,
      body: ["★★重要★★現金投入残高があるときは、遊技機左手前の「返却」ボタンを押して、現金残高の記録されたＩＣカードをします。",
             "①遊技機の上にある台ランプの「呼出」ボタンを押して、店員を呼びます。②遊技終了の合図（例えば、両手の人差し指を交差させる）をして、玉を計数してもらいます。",
             "③玉数を記録したレシートを受け取り、カウンターへ行きます。",
             ],
    },
    {
      no: 2,
      kind: "image",
      title: "各台計数機の場合",
      imgSrc: "/quit/pachinko/step2.png",
      imgAlt: "各台計数機の場合",
      overlayItems: [
        { x: "35%", y: "45%", 
          label: "返却ボタン"},
      ] ,
      body: ["①遊技機右手前にある「返却ボタン」を押すと、持ち玉や現金投入残高が記録されたICカードが、遊技機左側のユニットから出てきます。",
             "②これを持ってカウンターへ。（または他の台へ移動）"],
    },
    {
      no: 3,
      kind: "image",
      title: "スマパチの場合",
      imgSrc: "/quit/pachinko/step3.png",
      imgAlt: "スマパチの場合",
      overlayItems: [
        { x: "45%", y: "18%", 
          label: "①「計数」⇒②「返却」"},
        { x: "60%", y: "50%", 
          label: "①遊技機にある「計数」ボタン"},
        { x: "30%", y: "35%", 
          label: "②ユニットにある「返却」ボタン"},
      ] ,

      body: ["①遊技機にある「計数」ボタンを押します。②遊技機左側のユニットにある「返却」ボタンを押します。③持ち玉や現金投入残高が記録されたICカードが出てきます。",
             "④これを持ってカウンターへ。（または他の台へ移動）"],
    },
   ],
 },

  quitPachislot: {
    title: "Pachislot",
    lead: "設備タイプによって違う",
    steps: [
       {
      no: 1,
      kind: "image",
      title: "玉箱スタイルの場合",
      imgSrc: "/quit/pachislot/step1.png",
      imgAlt: "玉箱スタイルの場合",
      overlayItems: [
        { x: "45%", y: "18%", 
          label: "店員を呼んでメダルを計数する"},
      ] ,
      body: ["★★重要★★現金投入残高があるときは、遊技機右側のユニットで「返却」ボタンを押して、ICカードを取得します。",
             "①遊技機の上にある台ランプの「呼出」ボタンを押して、店員を呼びます。②遊技終了の合図（例えば、両手の人差し指を交差させる）をして、メダルを計数してもらいます。",
             "③メダル数を記録したレシートを受け取り、カウンターへ行きます。",
             "★参考★店舗によっては自分で計数する「セルフ計数機」を置いているところもありますが、その場合でも店員に計数をお願いしましょう。"],
    },
    {
      no: 2,
      kind: "image",
      title: "スマスロの場合",
      imgSrc: "/quit/pachislot/step2.png",
      imgAlt: "スマスロの場合",
      overlayItems: [
        { x: "45%", y: "18%", 
          label: "①「計数」⇒②「返却」"}, 
        { x: "30%", y: "65%", 
          label: "①遊技機にある「計数」ボタン"},
        { x: "30%", y: "40%", 
          label: "②ユニットにある「返却」ボタン"},
      ] ,
      body: ["①遊技機にある「計数」ボタンを押します。②遊技機左側のユニットにある「返却」ボタンを押します。③持ちメダルや現金投入残高が記録されたICカードが出てきます。",
             "④これを持ってカウンターへ。（または他の台へ移動）"],
    },
    ],
  },
  
  quitRefund: {
    title: "現金精算",
    lead: "現金残高を記録したICカードが必要です。",
    steps: [
       {
      no: 1,
      kind: "image",
      title: "精算機にICカードを入れる",
      imgSrc: "/quit/seisan.jpg",
      imgAlt: "精算機",
      overlayItems: [] ,
      body: ["①玉箱スタイルの場合は、現金を投入したユニットの「返却」ボタンを押して、ＩＣカードを抜き取ります。",
             "②パチンコの各台計数機の場合は、遊技機にある「返却」ボタンを押して、ＩＣカードを抜き取ります。", 
             "③スマパチ、スマスロの場合は、遊技機にある「計数」ボタンを押してから、ユニットにある「返却」ボタンを押して、ＩＣカードを抜き取ります。",   
             "このＩＣカードを精算機に入れて返金手続きを行います。精算機は景品カウンターの近くにあります。",
             ], 
    },
  ],
},

winTitle: "景品交換",
winLead: "初勝利おめでとう！",
winSteps: [
  {
    no: 1,
    kind: "image",
    title: "景品には２種類あります",
    body: [
      "店舗外の景品買取所で現金に換えられる特殊景品と店舗内で菓子や飲料に交換できる一般景品があります。",
    ],
    imgSrc: "/win/prize.png",
    imgAlt: "景品は２種類",
    overlayItems: [
       { x: "40%", y: "17%", 
          label: "２種類の景品"},
        { x: "20%", y: "40%", 
          label: "特殊景品" },
        { x: "65%", y: "40%", 
          label: "大・中・小がある" },
        { x: "20%", y: "75%", 
          label: "一般景品" },
    ],
  },
  {
    no: 2,
    kind: "table",
    title: "景品交換できる玉・メダル数",
    body: ["★★重要★★",
      "店舗によって交換できる景品の下限が異なります。下限未満の玉やメダルは交換できません。"
    ],
    table: {
      headers: ["タイプ", "最小数", "見分け方"],
      rows: [
        {
          cells: [
            { text: "Ｐ４円" },
            { text: "250玉" },
            { text: "玉箱の1/4程度" }
          ]
        },
        {
          cells: [
            { text: "Ｐ１円" },
            { text: "1,000玉" },
            { text: "玉箱１箱程度" }
          ]
        },
        {
          cells: [
            { text: "Ｓ２０円" },
            { text: "50枚" },
            { text: "数えてみて" }
          ]
        }
      ]
    }
  },
  {
    no: 3,
    kind: "image",
    title: "景品カウンターへ向かう",
    body: [
      "計数したレシートか、ICカードをカウンタースタッフに渡します。特殊景品に交換した残りの玉やメダルは、店内で一般景品に交換できます。" 
    ],
    imgSrc: "/win/counter.png",
    imgAlt: "景品カウンター",
    overlayItems: [],
  },
  {
    no: 4,
    kind: "image",
    title: "景品交換のやり取り",
    body: [
      "一般的なやり取り①「すべて交換しますか？」⇒「はい」②「〇〇玉分をお好きなものと交換ください」⇒選んで交換",
      "面倒に感じたら、この画像を見せて。特殊景品にすべて換えて、余りは任せるって書いてあるから。"
    ],
    imgSrc: "/win/exchange.png",
    imgAlt: "景品を選ぶ",
    overlayItems: [],
  },
  {
    no: 5,
    kind: "image",
    title: "景品買取所を探す",
    body: [
      "特殊景品を受け取ったら、景品買取所へ向かう。景品買取所では、窓口の受付箱に特殊景品を入れると、現金に換えてくれる。",
      "★★重要★★その日のうちに換えないと無効になるので注意。",
      "店舗の外にあって、日本の法律上、店員は場所を教えられない。他の客の後をついていけば、だいたいは見つかる。東京都内なら、画像にあるような看板が目印。",
    ],
    imgSrc: "/win/TUC.png",
    imgAlt: "景品買取所",
    overlayItems: [],
  },
],

  gameflowTitle: "パチンコの楽しさとは？",
  gameflowPachinkoTitle: "パチンコは「連チャン」を狙え！",
  gameflowPachinkoBody: ["パチンコの楽しさは、大当たりが連続する、いわゆる「連チャン」というゲームの特性があるからです。この特性を理解する為に、ゲームフローを見てみましょう。"],
  gameflowPachinkoAlt: "パチンコのゲームフロー例",
  gameflowPachislotTitle: "パチスロは「目押し」で攻めろ！",
  gameflowPachislotBody: ["パチスロの楽しさは、自分で狙った図柄を止める、いわゆる「目押し」によってゲームを攻略することです。実力の有無で勝率が変わります。ゲームフローを見てみましょう。"],
  gameflowPachislotAlt: "パチスロのゲームフロー例",
  
  gameflowPachinko: {
    title: "Pachinko",
    lead: "パチンコのゲームフロー/ 「連チャン」を狙え！",
    steps: [
     {
      no: 1,
      title: "「連チャン」のしくみ",
      imgSrc: "/flow/pflow.png",
      imgAlt: "「連チャン」のしくみ",
      overlayItems:  [
        { x: "20%", y: "4%", 
          label: "ゲームフロー例"},
        { x: "40%", y: "13%", 
          label: "通常時(抽選中)"},
        { x: "65%", y: "42%", 
          label: "確変", },
        { x: "50%", y: "62%", 
          label: "大当たり"},
        { x: "40%", y: "87%", 
          label: "時短", },
      ] ,
      body: ["「大当たり」は、通常時の抽選や確変中の抽選など、様々なルートで発生します。",
             "「確変」(確率変動)は、通常時よりも抽選確率が高くなる状態をいいます。",
             "「時短」(時間短縮)は、通常時と同じ抽選確率ですが、抽選スピードが速くなる状態をいいます。",
             "「確変」や「時短」が連続的に発生することで大当たりが連続する「連チャン」が起こります。",
      ],
    },
    {
      no: 2,
      title: "ミドルタイプの代表機種「新世紀エヴァンゲリオン～未来への咆哮～」",
      imgSrc: "/flow/Evangelion_Roaring for future.png",
      imgAlt: "ミドルタイプ例",
      overlayItems: [] ,
      body: [],
    },
    {
      no: 3,
      title: "エヴァンゲリオンのゲームフロー",
      imgSrc: "/flow/Eva_flow.png",
      imgAlt: "エヴァのゲームフロー",
      overlayItems: [
        { x: "40%", y: "13%", 
          label: "通常時(抽選中)"},
        { x: "50%", y: "35%", 
          label: "大当たり"},
        { x: "45%", y: "65%", 
          label: "CHANCE TIME（時短）", },
        { x: "40%", y: "87%", 
          label: "IMPACT MODE（確変）", },
      ] ,
      body: ["大当たり後のImpact Mode（確変）への進展で、大当たりの継続（連チャン）が期待できる。大当たり確率は1/319.7。確変時の大当たり確率は1/99.4。（320回目に必ず当選するというわけではありません）Impact Mode突入率が約70%、継続率が81%。10ラウンド大当たりの出玉は1,500玉。"],
    },
    {
      no: 4,
      title: "甘デジタイプの代表機種「ＰＡ大海物語５」",
      imgSrc: "/flow/PA_BigSeaStory5.jpg",
      imgAlt: "甘デジタイプ例",
      body: [],
    },
    {
      no: 5,
      title: "大海物語のゲームフロー",
      imgSrc: "/flow/agnes_flow.png",
      imgAlt: "大海のゲームフロー",
      overlayItems: [
        { x: "45%", y: "13%", 
        label: "通常時(抽選中)" },
        { x: "45%", y: "30%", 
        label: "遊タイム（時短）" },
        { x: "40%", y: "51%", 
        label: "ボーナス（大当たり＋確変）" },
        { x: "50%", y: "71%", 
        label: "チャンスタイム（時短）" },
        { x: "40%", y: "87%", 
        label: "ハピネスチャンス（時短）" },
      ],
      body: ["大当たり後に必ず時短があり、玉を減らさずに遊技が楽しめる。大当たり確率は1/99.9。確変時の大当たり確率は1/19.5。（100回目に必ず当選するというわけではありません）6ラウンド大当たりの出玉は648玉で、確変10回、時短40回が大当たり後に続く。"],
    },
   ],
  },

  gameflowPachislot: {
    title: "Pachislot",
    lead: "パチスロのゲームフロー/ 「目押し」で攻めろ！",
    steps: [
       {
      no: 1,
      title: "ボーナスまでの流れ",
      imgSrc: "/flow/sflow.png",
      imgAlt: "ボーナスまでの流れ",
      overlayItems: [
        { x: "20%", y: "4%", 
          label: "ゲームフロー例"},
        { x: "30%", y: "13%", 
          label: "通常時(抽選中)"},
        { x: "65%", y: "42%", 
          label: "チャンスゾーン"},
        { x: "45%", y: "62%", 
          label: "ボーナス"},
        { x: "30%", y: "87%", 
          label: "ＡＴラッシュ"},
      ] ,
      body: ["ボーナスの出現は、通常時の抽選やチャンスゾーンへの突入など、様々なルートがあります。",
             "チャンスゾーンやボーナス、ＡＴラッシュなどのしくみは、遊技機ごとに異なります。",
             "チャンスゾーンでは、ボーナス突入の確率が上がります。",
             "ＡＴラッシュは、ボーナスと同じように、小当たりが連続してメダル数を増やすことができます。"
      ],
    
    },
    {
      no: 2,
      title: "ノーマルタイプの代表機種「マイジャグラーⅤ」",
      imgSrc: "/flow/MyJuggler.jpg",
      imgAlt: "マイジャグラーⅤ",
      overlayItems: [] ,
      body: [],
    },
    {
      no: 3,
      title: "マイジャグラーのゲームフロー",
      imgSrc: "/flow/jugflow.png",
      imgAlt: "マイジャグラーのゲームフロー",
      overlayItems: [
        { x: "30%", y: "13%", 
          label: "通常時(抽選中)"},
        { x: "45%", y: "72%", 
          label: "ボーナス"},
      ] ,
      body: ["液晶画面の演出や複雑なミニゲームなどの一切無い、ボーナスを狙うだけのゲーム性。通常時は左リールにチェリーの図柄を狙う。ボーナス当選するとリール下のGOGO!ランプが点灯。ここでリールに７を揃える。ボーナスは最大で約240枚の獲得が期待できる。"],
    },
    {
      no: 4,
      title: "ＡＴタイプの代表機種「モンキーターンⅤ」",
      imgSrc: "/flow/MonkeyTurnV.jpg",
      imgAlt: "モンキーターン",
      overlayItems: [] ,
      body:  [],
    },
    {
      no: 5,
      title: "モンキーターンのゲームフロー",
      imgSrc: "/flow/monkey_flow.png",
      imgAlt: "リールの図柄配列",
      overlayItems: [
        { x: "30%", y: "13%", 
          label: "通常時(抽選中)"},
        { x: "65%", y: "37%", 
          label: "ミニゲーム"},
        { x: "45%", y: "58%", 
          label: "チャンスゾーン"},
        { x: "30%", y: "87%", 
          label: "ＡＴラッシュ"},] ,
      body:  ["ゲームは、実際のボートレースでの勝敗を模している。目押し不要で、レースで勝利を重ねながら、ＡＴラッシュに突入する確率を上げる。ＡＴラッシュ中は、ボーナスと同じように、小当たりが連続してメダル数を増やすことができる。"],
    },
    ],
  },

trouble: {
  title: "Trouble Guide",
  leadParts: [
  { type: "text", text: "困ったときに店員に伝えるヘルプカードや、よくある質問はこちら。" },
  { type: "text", text: " 店員を呼ぶときは、遊技機の上にある" },
  {
    type: "link",
    text: "台ランプの呼出ボタン",
    targetId: "call-staff",
    external: false
  },
  { type: "text", text: "を押してください。" },
],
  navAriaLabel: "トラブル項目一覧",
  questionLabel: "Q",
  answerLabel: "Answer",
  backToTop: "上の質問一覧へ戻る",
  backButton: "Menu",
  items: [
    {
      id: "money-not-accepted",
      question: "紙幣が戻される",
      answerTitle: "紙幣が認識されないとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "他の紙幣を試してみて。解決しなければ店員を呼んでこれを見せて。" },
          ],
        },
        {
          type: "image",
          id: "bill-unacceptable-image",
          src: "/help/unit malfunction.png",
          alt: "読み取り不良?",
          caption: "",
        },
      ],
    },
    {
      id: "ball-not-launched",
      question: "玉が打てない",
      answerTitle: "玉がとばないとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "玉は上皿にある？ハンドルをいっぱいに回しても打てないなら、店員を呼んでこれを見せて。" },
          ],
        },
        {
          type: "image",
          id: "ball-not-launched-image",
          src: "/help/ball not launched.png",
          alt: "玉とび不良?",
          caption: "",
        },
      ],
    },
    {
      id: "ball-got-stuck",
      question: "玉が引っかかった",
      answerTitle: "玉がうまく落ちないとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "釘が悪い。店員を呼んでこれを見せて。" },
            {
              type: "link",
              text: "",
              targetId: "ball-got-stuck-image",
              external: false
            },
            { type: "text", text: "" },
          ],
        },
        {
          type: "image",
          id: "ball-got-stuck-image",
          src: "/help/ball got stuck.png",
          alt: "玉掛かり",
          caption: "",
        },
      ],
    },
    {
      id: "another-box",
      question: "玉箱に玉があふれそう",
      answerTitle: "代わりの玉箱をもらう",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "店員を呼んでこれを見せて。いっぱいになった玉箱は店員が席の後ろに積んでくれる。" },
          ],
        },
        {
          type: "image",
          id: "another-box-image",
          src: "/help/box please.png",
          alt: "玉箱ください",
          caption: "",
        },
      ],
    },
    {
      id: "take-break",
      question: "中断して休憩したい",
      answerTitle: "10分以上離席して休憩したいとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "店員を呼んでこれを見せて。「休憩札」が掲示されます。時間内には戻って。" },
          ],
        },
        {
          type: "image",
          id: "take-break-image",
          src: "/help/take a break.png",
          alt: "休憩札ください",
          caption: "",
        },
      ],
    },
    {
      id: "special-prize",
      question: "玉がたくさん！換金できる？",
      answerTitle: "玉は特殊景品に交換しよう",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "景品に交換できる玉数以上ありますか?計数したレシートかユニットから出されたICカードはもってますか?カウンターで店員にこれを見せて。" },
          ],
        },
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "交換方法が分からない場合は " },
            {
          type: "link",
          text: "勝った後の手順を見る",
          targetId: "/win#step-2",
          external: true
            },
            { type: "text", text: " を確認してください。" }
          ]
        },
        {
          type: "image",
          id: "special-prize-image",
          src: "/help/exchange.png",
          alt: "特殊景品に交換",
          caption: "",
        },
      ],
    },
    {
      id: "something-wrong",
      question: "私、怒られてます？",
      answerTitle: "言動で何か勘違いされたとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "店員を呼んでこれを見せて。仲裁してくれる。" },
          ],
        },
        {
          type: "image",
          id: "something-wrong-image",
          src: "/help/wrong.png",
          alt: "店員さん、教えて",
          caption: "",
        },
      ],
    },
    {
      id: "someone-playing",
      question: "席を取られました",
      answerTitle: "私物を置いて席を確保してたのに、誰かが遊んでるとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "店員を呼んでこれを見せて。仲裁してくれる。" },
          ],
        },
        {
          type: "image",
          id: "someone-playing-image",
          src: "/help/reserved.png",
          alt: "私の確保した席です",
          caption: "",
        },
      ],
    },
    {
      id: "which-side",
      question: "紙幣を入れるユニットは左右どっち？",
      answerTitle: "紙幣を入れるユニットは左右どっち？",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "一般的には、パチンコは左側のユニットに紙幣を入れます。パチスロは右側のユニットに紙幣を入れます。" },
          ],
        },
      ],
    },
    {
      id: "where-rent-button",
      question: "貸玉ボタンはどこ？",
      answerTitle: "貸玉ボタンの位置",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "設備によって異なります。" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              no: "1",
              title: "玉箱スタイル",
              text: "紙幣を入れたユニットに貸玉ボタンがあります。",
            },
            {
              no: "2",
              title: "パチンコの各台計数機スタイル",
              text: "遊技機の右手前辺りに貸玉ボタンがあります。",
            },
            {
              no: "3",
              title: "スマパチ、スマスロスタイル",
              text: "紙幣を入れたユニットに貸玉ボタンがあります。",
            },
          ],
        },
        {
          type: "image",
          id: "where-rent-button-image",
          src: "/help/rent.png",
          alt: "貸玉ボタン",
          caption: "",
        }
      ],
    },
    {
      id: "where-refund-button",
      question: "返却ボタンはどこ？",
      answerTitle: "返却ボタンの位置",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "設備によって異なります。" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              no: "1",
              title: "玉箱スタイル",
              text: "紙幣を入れたユニットに返却ボタンがあります。",
            },
            {
              no: "2",
              title: "パチンコの各台計数機スタイル",
              text: "遊技機の右手前辺りに返却ボタンがあります。"
            },
            {
              no: "3",
              title: "スマパチ、スマスロスタイル",
              text: "紙幣を入れたユニットに返却ボタンがあります。★★重要★★やめるときは先に遊技機にある計数ボタンを押します。",
            },
          ],
        },
        {
          type: "image",
          id: "where-refund-button-image",
          src: "/help/refund.png",
          alt: "返却ボタン",
          caption: "返却ボタンを押すと、持ち玉や現金投入残高が記録されたICカードが出てきます。",
        },
        {
          type: "image",
          id: "count-button-image",
          src: "/quit/pachinko/count.png",
          alt: "計数ボタン",
          caption: "計数ボタンを押すと、持ち玉情報がユニットに移動します。これを先に押さないと、持ち玉が計算されません。",
        },
      ],
    },
    {
      id: "alert",
      question: "遊技中に警告表示や警告音声が出た",
      answerTitle: "パチンコ遊技中の警告対処法",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "液晶への警告表示や音声を見分けましょう。" },
          ],
        },
        {
          type: "steps",
          items: [
            {
              no: "1",
              title: "大当たりしたときの警告（右打ち）",
              text: "液晶に右打ち表示が表示されてませんか？玉を強く弾いて、右側に玉を打ちましょう",
            },
            {
              no: "2",
              title: "大当たりしたときの警告（玉抜き）",
              text: "上皿の玉があふれてませんか？上皿の手前辺りに玉を下皿に抜くレバーがあります。大当たり中は、玉を下皿に抜きます。大当たり終了後はレバーを戻します。"
            },
            {
              no: "3",
              title: "大当たりが終了したときの警告",
              text: "液晶に元に戻せと表示されてませんか？大当たりが終了して通常モードに戻ったら、玉の狙い場所は、左上に戻します。",
            },
          ],
        },
        {
          type: "image",
          id: "alert-shoot-right-image",
          src: "/help/shoot right.png",
          alt: "右打ち警告",
          caption: "大当たり中は右側に玉を打ちましょう",
        },
        {
          type: "image",
          id: "alert-release-tray-image",
          src: "/play/pachinko/release lever.png",
          alt: "玉抜き警告",
          overlayItems: [
            { x: "60%", y: "87%", label: "レバーを操作する" },
          ],
          caption: "大当たり中は玉を抜きましょう",
        },
      ],
    },
    {
      id: "stop-reels",
      question: "パチスロの狙った図柄で止まらない",
      answerTitle: "狙った図柄で「目押し」がうまくできないとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "実は状況によって止められる図柄は限られてます。「ボーナス」の場合は、決まった図柄が止められるようになります。「ボーナス」が確定しても、「目押し」で図柄を止められなければ、「ボーナス」が発動しません。両隣のお客さんにお願いしてみて。日本の法律では店員は助けてあげられない。" },
          ],
        },
        {
          type: "image",
          id: "stop-reels-image",
          src: "/help/meoshi.png",
          alt: "目押し",
          caption: "",
        },
      ],
    },
    {
      id: "whats-going-on",
      question: "何が起こってるのかわからない",
      answerTitle: "ゲームが進行しているが、何が起こっているのかわからないとき",
      blocks: [
        {
          type: "paragraph",
          parts: [
            { type: "text", text: "隣の人に聞くのが早いかも知れません。これを見せて。" },
          ],
        },
        {
          type: "image",
          id: "whats-going-on-image",
          src: "/help/what next.png",
          alt: "どうするの？",
          caption: "",
        },
      ],
    },
    {
      id: "call-staff",
      question: "店員を呼ぶ",
      answerTitle: "遊技台の上にある台ランプの呼出ボタンを押してください。",
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
          alt: "台ランプ呼出ボタン",
          caption: "",
        },
      ],
    },
  ],
},

  navHome: "ホーム",
  navPlay: "遊ぶ",
  navQuit: "やめる",
  navWin: "勝った",
  navTrouble: "トラブル",
  navGameflow: "ゲームの流れ",
  navBack: "戻る",
};
