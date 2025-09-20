import { useLanguage, Language } from "../context";

/**
 * translations: Record<Language, Record<string, string>>
 */
export const useTranslation = (
  translations: Record<Language, Record<string, string>>
) => {
  const { lang } = useLanguage();

  /**
   * t(key) => 根據當前語言返回對應翻譯
   */
  const t = (key: string): string => {
    return translations[lang]?.[key] || key;
  };

  /**
   * getAllTranslations() => 返回當前語言的整個翻譯物件
   */
  const getAllTranslations = (): Record<string, string> => {
    return translations[lang] || {};
  };

  return { t, getAllTranslations };
};
