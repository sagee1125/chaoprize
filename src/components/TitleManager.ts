import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { type siteMapTranslationKeys, titleTrilingualText } from "./const";
import { useLanguage } from "../context";

const pathToKey: Record<string, siteMapTranslationKeys> = {
  "/": "home",
  "/abouttheprize": "aboutPrize",
  "/theorganiser": "organiser",
  "/thepatron": "patron",
  "/awards": "awards",
  "/laureates": "laureates",
  "/nomination": "nomination",
  "/importantdates": "importantDates",
  "/news": "news",
  "/gallery": "gallery",
  "/publications": "publications",
  "/contactus": "contactUs",
};

export const TitleManager = () => {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const key = pathToKey[location.pathname];
    if (key) {
      document.title = `${titleTrilingualText[lang][key]} | Chao Prize`;
    } else {
      document.title = "Chao Prize";
    }
  }, [location.pathname, lang]);

  return null;
};
