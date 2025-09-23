import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { theOrganizeTrilingualText } from "./i18n";

export const TheOrganiser: React.FC = () => {
  const { lang } = useLanguage();
  const aboutPrizeTexts = theOrganizeTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title={aboutPrizeTexts.title} />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin">
        <div>
          <img
            src={"/images/theorganiser/FHO_HHB.avif"}
            alt={``}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>{aboutPrizeTexts.description}</div>
      </div>
    </div>
  );
};
