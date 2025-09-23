import React from "react";
import Banner from "../../components/Banner";
import { Language, useLanguage } from "../../context";
import { importantDatesIcon, nominationIcon } from "./const";
import {
  aboutPrizeTrilingualText,
  awardsTrilingualText,
  mediaTrilingualText,
} from "./i18n";

export const Home: React.FC = () => {
  const { lang } = useLanguage();
  const aboutPrizeTexts = aboutPrizeTrilingualText[lang];
  const awardsTexts = awardsTrilingualText[lang];
  const mediaText = mediaTrilingualText[lang];

  const marqueeImgs = [
    "/banner/5-JCR67431.jpg",
    "/banner/99-JDC_8557.jpg",
    "/banner/154-JCR67468.jpg",
    "/banner/HEI_1111.jpg",
    "/banner/HEI_8543.jpg",
    "/banner/HEI_9006.jpg",
  ];

  const awardsLaureatesImages = [
    "/images/homepage/LAA-EN_3x.avif",
    "/images/homepage/ECCA-EN_3x.avif",
  ];

  const nominationSection = [
    {
      label: awardsTexts.nomination,
      icon: nominationIcon,
      href: "/nomination",
    },
    {
      label: awardsTexts.importantDates,
      icon: importantDatesIcon,
      href: "/importantdates",
    },
  ];

  const mediaSection = [
    {
      cate: mediaText.newsTitle,
      img: "/images/homepage/ChaoPrize_Result_1st_r3c.avif",
      label: mediaText.newsSubtitle,
      desc: mediaText.newsSubtitleLeft,
      href: "/news",
      viewWebsite:
        "https://www.polyu.edu.hk/fh/news-and-events/news/2024/the-first-yuen-ren-chao-prize-in-language-sciences-announced/?sc_lang=en",
    },
    {
      cate: mediaText.galleryTitle,
      img: "/images/homepage/HEI_9822.avif",
      label: mediaText.gallerySubtitle,
      desc: mediaText.gallerySubtitleLeft,
      href: "/gallery",
    },
    {
      cate: mediaText.publicationsTitle,
      img: "/images/homepage/ChaoPrize_2024.avif",
      label: mediaText.publicationsSubtitle,
      desc: mediaText.publicationsSubtitleLeft,
      href: "https://www.chaoprize.org/_files/ugd/e1a3ec_d7a9055ecd764ef19247e648136d0600.pdf",
    },
  ];
  return (
    <div
      className={`flex flex-col items-center w-full max-w-screen overflow-x-hidden pb-12 font-enzh`}
    >
      <Banner />

      <div className="w-full mx-auto text-center text-main py-12 px-4 !font-thin">
        <a href="/abouttheprize" target="_self">
          <p className="text-5xl my-10 text-dark">{aboutPrizeTexts.title}</p>
        </a>
        <p
          className="mb-6 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: aboutPrizeTexts.description }}
        />
        {/* Learn More button */}
        <a
          href="/abouttheprize"
          className="inline-block bg-[#b68b47] hover:bg-main text-white px-6 py-3 font-medium transition-colors tracking-wider"
        >
          {aboutPrizeTexts.button}
        </a>
      </div>

      <div className="p-8">
        <ImageMarquee imgs={marqueeImgs} speed={48} />
      </div>

      <div className="w-full mx-auto text-center text-main py-12 px-4 !font-thin">
        <p className="text-5xl my-10 text-dark">{awardsTexts.title}</p>
        <p className="mb-10 leading-relaxed text-lg">
          {awardsTexts.description}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {awardsLaureatesImages.map((src, idx) => (
            <div
              key={idx}
              className="w-[300px] h-auto md:w-[540px] md:h-[368px] overflow-hidden cursor-pointer transform transition-transform ease-in-out duration-[700ms] hover:scale-105"
            >
              <a href="/awards" target="_self">
                <img
                  src={src}
                  alt={`home-${idx}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  mx-auto text-center text-main py-12 px-4 !font-thin">
        <p className="text-5xl my-10 text-dark">
          {awardsTexts.nominationUpperCase}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {nominationSection.map((item, idx) => (
            <div
              key={idx}
              className="bg-lightBgc w-[300px] h-[300px] md:w-[540px] md:h-[368px] 
                        overflow-hidden flex flex-col justify-center items-center gap-4"
            >
              <div>{item.icon}</div>
              <a
                className="text-lg md:text-4xl"
                href={item.href}
                target="_self"
              >
                {item.label}
              </a>
              <a
                href={item.href}
                target="_self"
                className="inline-block bg-[#b68b47] hover:bg-main text-white px-6 py-3 font-medium transition-colors tracking-wider"
              >
                {aboutPrizeTexts.button}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-8 md:px-[240px] w-full mx-auto text-center text-main py-12 px-4 !font-thin">
        <p className="text-5xl my-10 text-dark">{mediaText.title}</p>
        <div className="w-full grid grid-cols-3 gap-4 md:gap-8">
          {mediaSection.map((item, idx) => (
            <div
              key={idx}
              className="w-full text-[10px]
                        overflow-hidden flex flex-col justify-start items-center"
            >
              <div>
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <a href={item.href} className="md:text-base py-4 text-main">
                {item.cate}
              </a>
              <span className="md:text-base">{item.label}</span>
              <span className="md:text-base">{item.desc}</span>

              {item.viewWebsite ? (
                <a
                  href={item.viewWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#b68b47] hover:bg-main text-white 
                        py-1 px-3 my-2 md:my-4 md:text-base md:px-6 md:py-2
                        transition-colors tracking-wider"
                >
                  {mediaText.view}
                </a>
              ) : (
                <div
                  className="inline-block bg-[#b68b47] hover:bg-main text-white 
                        py-1 px-3 my-2 md:my-4 md:text-base md:px-6 md:py-2
                        transition-colors tracking-wider"
                >
                  {mediaText.view}{" "}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ImageMarquee({
  imgs,
  speed = 30,
}: {
  imgs: string[];
  speed?: number; // 數字越小越快
}) {
  return (
    <div className="relative overflow-hidden w-full group">
      <div
        className="flex animate-marquee gap-8"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* 第一組圖片 */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img1-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* 第二組圖片（複製一份，實現無縫循環） */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img2-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* 第三組圖片（複製一份，實現無縫循環） */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img3-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
