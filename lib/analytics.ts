"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export type AppLang = "ja" | "en" | "zh-TW" | "ko";

export type MenuItem =
  | "checkin"
  | "play"
  | "quit"
  | "win"
  | "trouble"
  | "gameflow";

function isGtagReady() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (!isGtagReady()) return;
  window.gtag!("event", eventName, params);
}

export function trackLanguageSelected(language: AppLang) {
  trackEvent("language_selected", {
    language,
    from_page: "language_select",
  });
}

export function trackMenuItemClicked(
  language: AppLang,
  menuItem: MenuItem,
  targetPath: string,
  fromPage?: string
) {
  trackEvent("menu_item_clicked", {
    language,
    menu_item: menuItem,
    target_path: targetPath,
    from_page: fromPage,
  });
}

export function trackTroubleQuestionOpened(
  language: AppLang,
  questionId: string,
  questionLabel: string
) {
  trackEvent("trouble_question_opened", {
    language,
    question_id: questionId,
    question_label: questionLabel,
  });
}

export type FixedNavItem =
  | "home"
  | "play"
  | "quit"
  | "win"
  | "trouble"
  | "gameflow"
  | "back";

export function trackFixedNavClicked(
  language: AppLang,
  navItem: FixedNavItem,
  targetPath: string,
  fromPage?: string
) {
  trackEvent("fixed_nav_clicked", {
    language,
    nav_item: navItem,
    target_path: targetPath,
    from_page: fromPage,
  });
}