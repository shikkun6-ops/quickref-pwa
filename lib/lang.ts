export const LANGS = [
    { code: "ja", label: "日本語" },
    { code: "en", label: "English" },
    { code: "zh-TW", label: "繁體中文" },
    { code: "ko", label: "한국어" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export function isLang(value: string): value is Lang {
  return LANGS.some((l) => l.code === value);
}