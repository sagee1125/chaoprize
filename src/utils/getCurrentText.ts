import { TrilingualText } from "../components/MediaContainer";
import { Language } from "../context";

export const getCurrentText = (
  trilingualText: TrilingualText,
  lang: Language
): string => {
  switch (lang) {
    case Language.EN:
      return trilingualText.en;
    case Language.TC:
      return trilingualText.tc;
    case Language.SC:
      return trilingualText.sc;
    default:
      return trilingualText.en;
  }
};
