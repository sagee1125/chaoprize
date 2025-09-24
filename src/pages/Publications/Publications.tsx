import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";
import { publicationTrilingualText } from "./i18n";

export const Publications: React.FC = () => {
  const { lang } = useLanguage();
  const publicationTexts = publicationTrilingualText[lang];
  const pubs = [
    {
      title: {
        en: "The Chao Prize 2024 Award Presentation Brochure",
        sc: "2024年赵元任语言科学奖典礼场刊",
        tc: "2024年趙元任語言科學獎典禮場刊",
      },
      image:
        "/images/publications/The-Chao-Prize-2024-Award-Presentation-Brochure.avif",
      link: "https://www.chaoprize.org/_files/ugd/e1a3ec_d7a9055ecd764ef19247e648136d0600.pdf",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner title={publicationTexts.title} />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="grid grid-cols-3 gap-6">
          {pubs.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={item.title}
              type={MediaType.Pdf}
              link={item.link}
              target="_blank"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
