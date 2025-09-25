import React from "react";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";
import { galleryTrilingualText } from "./i18n";

export const AwardPresentationCeremony: React.FC = () => {
  const { lang } = useLanguage();
  const galleryTexts = galleryTrilingualText[lang];
  const { isMobile } = useSettings();

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
    <div className={`w-full h-full overflow-x-hidden bg-white font-enzh`}>
      <SectionBanner title={galleryTexts.awardPresentationCeremony} />
      <div
        className="py-8 lg:py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin px-6 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {photos.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={{
                en: "",
                tc: "",
                sc: "",
              }}
              type={MediaType.Award}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
