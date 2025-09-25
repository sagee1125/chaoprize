import React from "react";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { thePatronTrilingualText } from "./i18n";

export const ThePatron: React.FC = () => {
  const { lang } = useLanguage();
  const thePatronTexts = thePatronTrilingualText[lang];
  const { isMobile } = useSettings();

  return (
    <div
      className={`w-full h-full overflow-x-hidden pb-12 bg-lightBgc font-enzh`}
    >
      <SectionBanner title={thePatronTexts.title} />
      <div
        className="py-6 lg:py-24 flex flex-col gap-6 lg:gap-24 text-dark text-[10px] md:text-lg/7 !font-thin"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-0 px-6">
          <div className="h-full flex items-center my-auto bg-second text-white px-4 py-16 md:py-0 lg:px-12">
            <p>{thePatronTexts.description}</p>
          </div>
          <div className="h-full p-4 lg:px-0 md:py-20 mx-auto space-y-12">
            <img
              src={"/images/thepatron/iRead.avif"}
              alt={""}
              className="w-[300px] md:w-full h-auto object-cover"
            />
            <div className="flex justify-center">
              <a
                href="https://www.iread.org.cn/Home/IndexEn/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#b68b47] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider"
              >
                {thePatronTexts.learnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
