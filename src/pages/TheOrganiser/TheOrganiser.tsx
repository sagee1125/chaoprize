import React from "react";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { theOrganizeTrilingualText } from "./i18n";

export const TheOrganiser: React.FC = () => {
  const { lang } = useLanguage();
  const theOrganizeTexts = theOrganizeTrilingualText[lang];
  const { isMobile } = useSettings();

  return (
    <div className={`w-full h-full overflow-x-hidden bg-lightBgc font-enzh`}>
      <SectionBanner title={theOrganizeTexts.title} />
      <div
        className="py-12 lg:py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin px-4 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div>
          <img
            src={"/images/theorganiser/FHO_HHB.avif"}
            alt={``}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>{theOrganizeTexts.description}</div>
      </div>
    </div>
  );
};
