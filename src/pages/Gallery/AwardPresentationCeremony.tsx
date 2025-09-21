import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const AwardPresentationCeremony: React.FC = () => {
  const { lang } = useLanguage();

  const photos = [
    {
      image: "/images/gallery/Prof-Peter-Hagoort_Award_Presentation.avif",
    },
    {
      image: "/images/gallery/HEI_98223.avif",
    },
    {
      image: "/images/gallery/HEI_9917.avif",
    },
    {
      image: "/images/gallery/HEI_9618.avif",
    },
    {
      image: "/images/gallery/HEI_9362.avif",
    },

    {
      image: "/images/gallery/HEI_9017.avif",
    },
    {
      image: "/images/gallery/HEI_9006.avif",
    },

    {
      image: "/images/gallery/HEI_8578.avif",
    },

    {
      image: "/images/gallery/HEI_8027.avif",
    },

    {
      image: "/images/gallery/HEI_8543.avif",
    },
    {
      image: "/images/gallery/HEI_7897.avif",
    },
    {
      image: "/images/gallery/HEI_2297.avif",
    },

    {
      image: "/images/gallery/HEI_7470.avif",
    },
    {
      image: "/images/gallery/HEI_7814.avif",
    },
    {
      image: "/images/gallery/HEI_1855.avif",
    },

    {
      image: "/images/gallery/HEI_1111.avif",
    },
    {
      image: "/images/gallery/HEI_1272.avif",
    },
    {
      image: "/images/gallery/HEI_1545.avif",
    },
    {
      image: "/images/gallery/HEI_1767.avif",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="AWARD PRESENTATION CEREMONY" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="grid grid-cols-3 gap-6">
          {photos.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={""}
              type={MediaType.Award}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
