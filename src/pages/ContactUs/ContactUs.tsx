import React from "react";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { contactUsTrilingualText } from "./i18n";

export const ContactUs: React.FC = () => {
  const { lang } = useLanguage();
  const contactUsTexts = contactUsTrilingualText[lang];
  const { isMobile } = useSettings();

  return (
    <div className={`w-full h-full overflow-x-hidden bg-lightBgc font-enzh`}>
      <SectionBanner title={contactUsTexts.title} />
      <div
        className="py-8 lg:py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin px-6 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        {" "}
        <div className="grid grid-cols-3 gap-3">
          <div>{contactUsTexts.description}</div>
          <a href="mailto:chao.prize@polyu.edu.hk">chao.prize@polyu.edu.hk</a>
        </div>
      </div>
    </div>
  );
};
