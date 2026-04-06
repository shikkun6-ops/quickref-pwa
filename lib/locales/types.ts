export type NoticeItem = {
  src: string;
  label: string;
};

export type OverlayItem = {
  x: string;
  y: string;
  label: string;
};

export type PlaySectionDict = {
  title: string;
  lead?: string;
  steps: PlayStep[];
};

export type PlayStep = {
  no: number;
  title: string;
  body: string[];
  imgSrc: string;
  imgAlt: string;
  overlayItems?: OverlayItem[];
};

export type QuitSectionDict = {
  title: string;
  lead?: string;
  steps: QuitStep[];
};

export type QuitImageStep = {
  no: number;
  kind: "image";
  title: string;
  body: string[];
  imgSrc: string;
  imgAlt: string;
  overlayItems?: OverlayItem[];
};

export type QuitTableStep = {
  no: number;
  kind: "table";
  title: string;
  body: string[];
  table: StepTable;
};

export type QuitStep = QuitImageStep | QuitTableStep;

export type TextPart =
  | { type: "text"; text: string }
  | { type: "link"; text: string; targetId: string; external?: boolean }
  | { type: "embed"; targetId: string; external?: boolean };

export type ContentBlock = {
  type: "paragraph";
  parts: TextPart[];};

export type CheckinChartRow = {
   kind: "P" | "S";
   label: string; };

export type CheckinSection = {
   title: string;
   body: string[]; 
   chartTitle?: string; 
   chartRows: CheckinChartRow[]; };  

export type TableCell = {
  text: string;
};

export type TableRow = {
  cells: TableCell[];
};

export type StepTable = {
  headers: string[];
  rows: TableRow[];
};

export type WinImageStep = {
  no: number;
  kind: "image";
  title: string;
  body: string[];
  imgSrc: string;
  imgAlt: string;
  overlayItems?: OverlayItem[];
};

export type WinTableStep = {
  no: number;
  kind: "table";
  title: string;
  body: string[];
  table: StepTable;
};

export type WinStep = WinImageStep | WinTableStep;

export type GameflowSectionDict = {
  title: string;
  lead: string;
  steps: GameflowStep[];
};

export type GameflowStep = {
  no: number;
  title: string;
  body: string[];
  imgSrc: string;
  imgAlt: string;
  overlayItems?: OverlayItem[];
};

export type TroubleRichTextPart =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "link";
      text: string;
      targetId: string;
      external: boolean;
    };

export type TroubleBlock =
  | {
      type: "paragraph";
      parts: TroubleRichTextPart[];
    }
  | {
      type: "note";
      id: string;
      title: string;
      text: string;
    }
  | {
      type: "image";
      id: string;
      src: string;
      alt: string;
      overlayItems?: OverlayItem[];
      caption?: string;
    }
  | {
      type: "steps";
      items: {
        no: string;
        title: string;
        text: string;
      }[];
    };

export type TroubleItem = {
  id: string;
  question: string;
  answerTitle: string;
  blocks: TroubleBlock[];
};

export type TroubleDict = {
  title: string;
  leadParts: TroubleRichTextPart[];
  navAriaLabel: string;
  questionLabel: string;
  answerLabel: string;
  backToTop: string;
  backButton: string;
  items: TroubleItem[];
};

export type Dict = {
  // ----------------------------
  // Home
  // ----------------------------

  homeTitle: string;
  homeLead: string;
  homeNote: string;

  homeTiles: {
    checkin: string;
    start: string;
    quit: string;
    win: string;
    trouble: string;
    gameflow: string;
    backLabel: string;
    languageSelectLabel: string;
  };

  // ----------------------------
  // Notice
  // ----------------------------

  noticeTitle: string;
  understandAndStart: string;
  goBack: string;
  toLanguageSelect: string;
  noticeItems: NoticeItem[];

  // ----------------------------
  // Checkin
  // ----------------------------

  checkinTitle: string;
  checkinLead: string;

  checkinSections: {
    rate: CheckinSection;
    spec: CheckinSection;
    facilities: CheckinSection;
  };

  // ----------------------------
  // Simple Play (legacy labels)
  // ----------------------------

  playTitle: string;

  // ----------------------------
  // Detailed Play Sections
  // ----------------------------

  playPachinko: PlaySectionDict;
  playPachislot: PlaySectionDict;

  // ----------------------------
  // Quit Sections
  // ----------------------------

  quitTitle: string;
  quitIntroLead: string;
  quitIntroBody: ContentBlock[];
  quitPachinko: QuitSectionDict;
  quitPachislot: QuitSectionDict;
  quitRefund: QuitSectionDict;

  // ----------------------------
  // Win page
  // ----------------------------
  
  winTitle: string;
  winLead?: string;
  winSteps: WinStep[];

  // ----------------------------
  // Gameflow page
  // ----------------------------

  gameflowTitle: string;
  gameflowPachinkoTitle: string;
  gameflowPachinkoBody: string[];
  gameflowPachinkoAlt: string;

  gameflowPachislotTitle: string;
  gameflowPachislotBody: string[];
  gameflowPachislotAlt: string;

  gameflowPachinko: GameflowSectionDict;
  gameflowPachislot: GameflowSectionDict;

  // ----------------------------
  // Trouble Sections
  // ----------------------------

  trouble: TroubleDict;

  // ----------------------------
  // FixedNav Sections
  // ---------------------------- 

  navHome: string;
  navPlay: string;
  navQuit: string;
  navWin: string; 
  navTrouble: string;
  navGameflow: string;
  navBack: string;
};
