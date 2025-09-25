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

export const Gallery: React.FC = () => {
  const { lang } = useLanguage();
  const galleryTexts = galleryTrilingualText[lang];
  const { isMobile } = useSettings();

  const photos = [
    {
      title: {
        en: "Launch Ceremony",
        tc: "​趙元任語言科學獎成立典禮",
        sc: "赵元任语言科学奖成立典礼",
      },
      image: "/images/gallery/60-JCR67151.avif",
      link: "/gallery-launchceremony",
      target: "_self" as "_blank" | "_self",
    },
    {
      title: {
        en: "Award Presentation Ceremony",
        tc: "趙元任語言科學獎頒獎典禮",
        sc: "赵元任语言科学奖颁奖典礼",
      },
      image: "/images/gallery/HEI_9822.avif",
      link: "/gallery-awardpresentationceremony",
      target: "_self" as "_blank" | "_self",
    },
  ];

  const videos = [
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/thumb-e1a3ec.avif",
      title: {
        en: "Chao Prize Presentation Ceremony",
        tc: "趙元任語言科學獎頒獎典禮",
        sc: "赵元任语言科学奖颁奖典礼",
      },
      videoSrc: "/images/gallery/Chao-Prize-Presentation-Ceremony.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/e1a3ec_04.avif",
      title: {
        en: "Prof. Peter Hagoort’s Acceptance Speech",
        tc: "得獎者Peter Hagoort 教授得獎感言",
        sc: "得奖者 Peter Hagoort 教授的得奖感言",
      },
      videoSrc: "/images/gallery/Prof-Peter-Hagoort-Acceptance-Speech.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/e1a3ec_37.jpg",
      title: {
        en: "Chao Prize Launch Ceremony",
        tc: "趙元任語言科學獎頒獎典禮",
        sc: "赵元任语言科学奖启动仪式",
      },
      videoSrc: "/images/gallery/Chao-Prize-Launch-Ceremony.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail:
        "/images/gallery/Laureate-Prof-William-Shiyuan-Wang-Acceptance-Speech.avif",
      title: {
        en: "Laureate Prof. William Shiyuan Wang’s Acceptance Speech",
        tc: "得獎者王世元教授得獎感言",
        sc: "得奖者王世元教授得奖感言",
      },
      videoSrc:
        "/images/gallery/Laureate-Prof-William-Shiyuan-Wang-Acceptance-Speech.mp4",
    },
  ];

  return (
    <div className={`w-full h-full overflow-x-hidden bg-white font-enzh`}>
      <SectionBanner title={galleryTexts.title} />
      <div
        className="py-8 lg:py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin px-6 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div>
          <p className="text-lg md:text-3xl pb-6">{galleryTexts.photos}</p>
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {photos.map((item, i) => (
              <MediaContainer
                key={i}
                thumbnail={item.image}
                title={item.title}
                type={MediaType.Album}
                link={item.link}
                target={item.target}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg md:text-3xl pb-6">{galleryTexts.videos}</p>
          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {videos.map((item, i) => (
              <MediaContainer
                key={i}
                title={item.title}
                type={MediaType.Video}
                thumbnail={item.thumbnail}
                videoPreview
                videoSrc={item.videoSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
