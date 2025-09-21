import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const Gallery: React.FC = () => {
  const { lang } = useLanguage();

  const pubs = [
    {
      title: "The Chao Prize 2024 Award Presentation Brochure",
      image:
        "/images/publications/The -Chao-Prize-2024-Award-Presentation-Brochure.avif",
      link: "https://www.chaoprize.org/_files/ugd/e1a3ec_d7a9055ecd764ef19247e648136d0600.pdf",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="PUBLICATIONS" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="grid grid-cols-3 gap-6">
          {pubs.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={item.title}
              type={MediaType.Pdf}
              link={item.link}
              target="_self"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
