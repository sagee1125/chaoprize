import React from "react";
import { type ImportantDateItem, importantDatesTrilingualText } from "./i18n";
import { useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const ImportantDates: React.FC = () => {
  const { lang } = useLanguage();
  const importantDatesTexts = importantDatesTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc font-enzh`}
    >
      <SectionBanner title={importantDatesTexts.title as string} />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="space-y-12">
          <p className="text-lg md:text-3xl">
            {importantDatesTexts.description as string}
          </p>

          <div className="text-lg">
            {(importantDatesTexts.importantDates as ImportantDateItem[]).map(
              (item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-6 border-b border-main"
                >
                  <span>{item.title}</span>
                  <span>{item.date}</span>
                </div>
              )
            )}
          </div>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: importantDatesTexts.soleDiscretion as string,
            }}
          />
        </div>
      </div>
    </div>
  );
};
