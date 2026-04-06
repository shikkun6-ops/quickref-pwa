import type { Lang } from "../lang";
import type {
  Dict,
  NoticeItem,
  PlayStep,
  PlaySectionDict,
  QuitStep,
  QuitSectionDict,
  WinStep,
  WinImageStep,
  WinTableStep,
  OverlayItem,
  GameflowStep,
  GameflowSectionDict, 
} from "./types";

import { ja } from "./ja";
import { en } from "./en";
import { zhTW } from "./zh-TW";
import { ko } from "./ko";

const dict: Record<Lang, Dict> = {
  ja,
  en,
  "zh-TW": zhTW,
  ko,
};

export type {
  Dict,
  NoticeItem,
  PlayStep,
  PlaySectionDict,
  QuitStep,
  QuitSectionDict,
  WinStep,
  WinImageStep,
  WinTableStep,
  OverlayItem,
  GameflowStep,
  GameflowSectionDict, 
};

export function t(lang: Lang): Dict {
  return dict[lang];
}