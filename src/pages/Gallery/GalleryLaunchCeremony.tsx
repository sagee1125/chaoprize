import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const GalleryLaunchCeremony: React.FC = () => {
  const { lang } = useLanguage();

  const photos = [
    {
      image: "/images/gallery/165-JDC_6834.avif",
    },
    {
      image: "/images/gallery/160-JCR66943.avif",
    },
    {
      image: "/images/gallery/159-JCR66939.avif",
    },
    {
      image: "/images/gallery/109-JDC_8968.avif",
    },
    {
      image: "/images/gallery/154-JCR67468.avif",
    },
    {
      image: "/images/gallery/99-JDC_8557.avif",
    },
    {
      image: "/images/gallery/93-JCR67222.avif",
    },
    {
      image: "/images/gallery/60-JCR67152.avif",
    },

    {
      image: "/images/gallery/16-JCR67014.avif",
    },

    {
      image: "/images/gallery/10-JDC_6867.avif",
    },
    {
      image: "/images/gallery/5-JCR67431.avif",
    },
    {
      image: "/images/gallery/4-JCR67420.avif",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner title="GALLERY" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="grid grid-cols-3 gap-6">
          {photos.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={""}
              type={MediaType.Photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
