import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const Gallery: React.FC = () => {
  const { lang } = useLanguage();

  const photos = [
    {
      title: "Launch Ceremony",
      image: "/images/gallery/60-JCR67151.avif",
      link: "/gallery-launchceremony",
      target: "_self" as "_blank" | "_self",
    },
    {
      title: "Award Presentation Ceremony",
      image: "/images/gallery/HEI_9822.avif",
      link: "/gallery-awardpresentationceremony",
      target: "_self" as "_blank" | "_self",
    },
  ];

  const videos = [
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/thumb-e1a3ec.avif",
      title: "Chao Prize Presentation Ceremony",
      videoSrc: "/images/gallery/Chao-Prize-Presentation-Ceremony.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/e1a3ec_04.avif",
      title: "Prof. Peter Hagoort’s Acceptance Speech",
      videoSrc: "/images/gallery/Prof-Peter-Hagoort-Acceptance-Speech.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail: "/images/gallery/e1a3ec_37.jpg",
      title: "Chao Prize Launch Ceremony",
      videoSrc: "/images/gallery/Chao-Prize-Launch-Ceremony.mp4",
    },
    {
      type: MediaType.Video,
      thumbnail:
        "/images/gallery/Laureate-Prof-William-Shiyuan-Wang-Acceptance-Speech.avif",
      title: "Laureate Prof. William Shiyuan Wang’s Acceptance Speech",
      videoSrc:
        "/images/gallery/Laureate-Prof-William-Shiyuan-Wang-Acceptance-Speech.mp4",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner title="GALLERY" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div>
          <p className="text-lg md:text-3xl pb-6">Photos</p>
          <div className="grid grid-cols-3 gap-6">
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
          <p className="text-lg md:text-3xl pb-6">Videos</p>
          <div className="grid grid-cols-3 gap-6">
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
