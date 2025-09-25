import React from "react";
import { type ImportantDateItem, importantDatesTrilingualText } from "./i18n";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";

export const ImportantDates: React.FC = () => {
  const { lang } = useLanguage();
  const importantDatesTexts = importantDatesTrilingualText[lang];
  const { isMobile } = useSettings();

  return (
    <div className={`w-full h-full overflow-x-hidden bg-lightBgc font-enzh`}>
      <SectionBanner title={importantDatesTexts.title as string} />
      <div
        className="py-12 lg:py-24 flex flex-col gap-12 text-dark/80 text-[10px] md:text-lg/7 !font-thin px-8 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div className="space-y-6 md:space-y-12">
          <p className="text-sm md:text-2xl lg:text-3xl">
            {importantDatesTexts.description as string}
          </p>

          <div className="text-sm md:text-lg">
            {(importantDatesTexts.importantDates as ImportantDateItem[]).map(
              (item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 md:py-6 border-b border-main/50 md:border-main"
                >
                  <span>{item.title}</span>
                  <span>{item.date}</span>
                </div>
              )
            )}
          </div>
          <p
            className="text-sm md:text-lg"
            dangerouslySetInnerHTML={{
              __html: importantDatesTexts.soleDiscretion as string,
            }}
          />
        </div>
      </div>
    </div>
  );
};
