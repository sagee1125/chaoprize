import React from "react";
import { useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { laureatesTrilingualText } from "./i18n";

export const Laureates: React.FC = () => {
  const { lang } = useLanguage();
  const laureatesText = laureatesTrilingualText[lang];
  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner
        title={laureatesText.title}
        href={
          "https://www.polyu.edu.hk/fh/news-and-events/news/2024/the-first-yuen-ren-chao-prize-in-language-sciences-announced/?sc_lang=" +
          lang
        }
      />
      <div className="lg:px-[300px] px-4 flex flex-col gap-10 text-dark text-[10px] md:text-lg/7 !font-thin py-8 md:py-20">
        <img
          src={laureatesText.bannerImg}
          alt={``}
          className="w-full h-auto object-cover"
        />
        <div className="grid grid-cols-[1fr,2fr] gap-x-12 gap-y-20">
          <div>
            <img
              src={"/images/laureates/Prof_Peter_Hagoort.avif"}
              alt={``}
              className="w-full h-auto object-cover"
            />
            <p className="py-4 text-xl">{laureatesText.hagoort}</p>
          </div>
          <div className="space-y-4 px-8">
            <p className="text-3xl">{laureatesText.academicLeadership}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: laureatesText.hagoortAcademicLeadership,
              }}
            />
            <p className="text-3xl pt-6">
              {laureatesText.pioneeringContributions}
            </p>
            <p>{laureatesText.hagoortPioneeringContributions}</p>
            <p className="text-3xl pt-6">{laureatesText.recognitionAward}</p>
            <p>{laureatesText.hagoortRecognitionAward}</p>

            <video
              src={
                process.env.PUBLIC_URL +
                "/images/laureates/Prof_Peter_Hagoort.mp4"
              }
              autoPlay
              muted
              controls
              className="w-full h-auto object-cover py-8"
            />
          </div>
        </div>
        <hr className="border-dark bg-dark" />

        <div className="grid grid-cols-[1fr,2fr] gap-x-12 gap-y-20">
          <div>
            <img
              src={"/images/laureates/Prof_Wang.avif"}
              alt={``}
              className="w-full h-auto object-cover"
            />
            <p className="py-4 text-xl">{laureatesText.william}</p>
          </div>
          <div className="space-y-4 px-8">
            <p className="text-3xl">{laureatesText.academicLeadership}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: laureatesText.williamAcademicLeadership,
              }}
            />
            <p className="text-3xl pt-6">
              {laureatesText.pioneeringContributions}
            </p>
            <p>{laureatesText.williamPioneeringContributions}</p>
            <p className="text-3xl pt-6">{laureatesText.recognitionAward}</p>
            <p>{laureatesText.williamRecognitionAward}</p>

            <video
              src={process.env.PUBLIC_URL + "/images/laureates/Prof_Wang.mp4"}
              autoPlay
              muted
              controls
              className="w-full h-auto object-cover py-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
