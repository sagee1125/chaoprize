import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { thePatronTrilingualText } from "./i18n";

export const ThePatron: React.FC = () => {
  const { lang } = useLanguage();
  const thePatronTexts = thePatronTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc font-enzh`}
    >
      <SectionBanner title={thePatronTexts.title} />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-12 text-[10px] md:text-lg/7 !font-thin">
        <div className="grid grid-cols-2">
          <div className="px-2 md:px-16 h-full flex items-center my-auto bg-second text-white">
            <p>{thePatronTexts.description}</p>
          </div>
          <div className="h-full px-16 py-20 mx-auto space-y-12">
            <img
              src={"/images/thepatron/iRead.avif"}
              alt={""}
              className="max-w-[380px] h-auto object-cover"
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
