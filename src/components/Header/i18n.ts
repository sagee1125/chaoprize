import { Language } from "../../context";

export type TranslationKeys = "en" | "tc";

export const translations: Record<Language, Record<TranslationKeys, string>> = {
  [Language.EN]: {
    en: "EN",
    tc: "Welcome to our platform!",
  },
  [Language.SC]: {
    en: "EN",
    tc: "欢迎来到我们的平台！",
  },
  [Language.TC]: {
    en: "EN",
    tc: "歡迎來到我們的平台！",
  },
};
