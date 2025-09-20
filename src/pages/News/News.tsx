import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const News: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="NEWS" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20"></div>
    </div>
  );
};
