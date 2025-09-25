import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Language, useLanguage, useSettings } from "../context";

type BannerKeys = "lineOne" | "lineTwo" | "firstPhoto";

const bannerTrilingualText: Record<Language, Record<BannerKeys, string>> = {
  [Language.EN]: {
    lineOne: "Inaugural Ceremony for the Yuen Ren",
    lineTwo: `Chao Prize in Language Science`,
    firstPhoto: "/banner/banner_1.avif",
  },
  [Language.SC]: {
    lineOne: "首届「赵元任语言科学奖」",
    lineTwo: ``,
    firstPhoto: "/banner/banner_1_SC.avif",
  },
  [Language.TC]: {
    lineOne: "首屆「趙元任語言科學獎",
    lineTwo: ``,
    firstPhoto: "/banner/banner_1_TC.avif",
  },
};

const Banner: React.FC = () => {
  const { isMobile } = useSettings();
  const { lang } = useLanguage();

  const bannerTexts = bannerTrilingualText[lang];

  const [current, setCurrent] = useState(0);

  const mediaItems = [
    {
      type: "image",
      content: (
        <img
          src={process.env.PUBLIC_URL + bannerTexts.firstPhoto}
          className={`w-screen ${
            !isMobile ? "h-screen" : "h-[60vh]"
          } object-cover`}
        />
      ),
    },
    {
      type: "image",
      content: !isMobile ? (
        <div className="relative w-screen">
          <a
            href={
              "https://www.polyu.edu.hk/fh/news-and-events/news/2024/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars/?sc_lang=" +
              lang
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/banner/banner_2.avif"}
              className={`w-screen h-screen object-cover`}
            />
            {/* 遮罩層 */}
            <div
              className={`absolute bottom-0 left-0 w-full h-1/2
            bg-gradient-to-t from-black/80 to-black/0 flex items-center justify-start`}
            >
              <div className="text-left text-white px-6 md:px-24 text-sm md:text-[56px] space-y-16 py-6">
                <p>{bannerTexts.lineOne}</p>
                {bannerTexts.lineTwo && <p>{bannerTexts.lineTwo}</p>}
              </div>
            </div>
          </a>
        </div>
      ) : (
        <div className="relative w-screen h-[60vh] overflow-hidden flex items-center justify-center bg-black">
          <a
            href={
              "https://www.polyu.edu.hk/fh/news-and-events/news/2024/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars/?sc_lang=" +
              lang
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/banner/banner_2_mobile.avif"}
              className="w-screen h-auto object-contain"
            />

            {/* 上遮罩層 */}
            <div
              className={`absolute top-0 left-0 w-full h-[20vh]
    bg-gradient-to-t from-black/0 via-black/80 to-black/100 flex items-center justify-start`}
            />

            {/* 下遮罩層 */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[20vh]
      bg-gradient-to-t from-black/100 via-black/90 to-black/0 flex items-end justify-start`}
            />

            <div
              className={`absolute bottom-0 left-0 w-full h-[20vh] flex items-end justify-start`}
            >
              <div className="text-left text-white px-6 lg:px-24 text-sm lg:text-[56px] space-y-3 py-6">
                <p>{bannerTexts.lineOne}</p>
                {bannerTexts.lineTwo && <p>{bannerTexts.lineTwo}</p>}
              </div>
            </div>
          </a>
        </div>
      ),
    },
    {
      type: "video",
      content: (
        <video
          src={process.env.PUBLIC_URL + "/banner/file.mp4"}
          autoPlay
          muted
          loop
          className={`w-screen ${
            !isMobile ? "h-screen" : "h-[60vh]"
          } object-cover`}
        />
      ),
    },
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div
        className={`relative w-screen ${
          !isMobile ? "h-screen" : "h-[60vh]"
        } overflow-hidden`}
      >
        {/* 媒體容器 */}
        <div className="w-full h-full relative overflow-hidden">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
                        ${
                          index === current
                            ? "translate-x-0 z-10"
                            : index < current
                            ? "-translate-x-full z-0"
                            : "translate-x-full z-0"
                        }`}
            >
              {item.content}
            </div>
          ))}
        </div>

        {/* 左右箭頭 */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white z-20 p-2 rounded-full transition drop-shadow-lg"
        >
          <ChevronLeft className="w-16 h-16 drop-shadow-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white z-20 p-2 rounded-full transition drop-shadow-lg"
        >
          <ChevronRight className="w-16 h-16 drop-shadow-xl" />
        </button>
      </div>

      {/* 圓點指示器 */}
      <div className="flex gap-3 w-full justify-center items-center z-20 py-3 md:py-8">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index <= current ? "bg-light" : "bg-[#AEAEAE]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
