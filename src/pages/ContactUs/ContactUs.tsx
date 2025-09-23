import React from "react";
import { useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { contactUsTrilingualText } from "./i18n";

export const ContactUs: React.FC = () => {
  const { lang } = useLanguage();
  const contactUsTexts = contactUsTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc font-enzh`}
    >
      <SectionBanner title={contactUsTexts.title} />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-24 text-dark text-[10px] md:text-lg/7 !font-thin">
        <div className="grid grid-cols-3 gap-3">
          <div>{contactUsTexts.description}</div>
          <div>
            <a href="mailto:chao.prize@polyu.edu.hk">chao.prize@polyu.edu.hk</a>
          </div>
        </div>
      </div>
    </div>
  );
};
