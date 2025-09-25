import React from "react";
import { useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { aboutPrizeTrilingualText } from "./i18n";

export const AboutThePrize: React.FC = () => {
  const { lang } = useLanguage();
  const aboutPrizeTexts = aboutPrizeTrilingualText[lang];
  const { isMobile } = useSettings();

  return (
    <div
      className={`w-full h-full overflow-x-hidden pb-12 bg-lightBgc font-enzh`}
    >
      <SectionBanner title={aboutPrizeTexts.title} />
      <div
        className="flex flex-col gap-12 lg:gap-24 text-dark text-[10px] md:text-lg/7 !font-thin"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div className="grid grid-cols-2">
          <div className="px-4 md:pr-10 py-10 flex my-auto">
            <p dangerouslySetInnerHTML={{ __html: aboutPrizeTexts.intro }} />
          </div>
          <div>
            <img
              src={"/images/aboutThePrize/aboutThePrize.avif"}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr,3fr] px-4 lg:px-0">
          <div className="text-lg md:text-3xl">{aboutPrizeTexts.aim}</div>
          <div className="pl-5">
            <ul className="list-disc space-y-1">
              <li>{aboutPrizeTexts.commemorate}</li>
              <li>{aboutPrizeTexts.recognise}</li>
              <li>{aboutPrizeTexts.inspireFuture}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-[1fr,3fr] px-4 lg:px-0">
          <div
            className="text-lg md:text-3xl"
            dangerouslySetInnerHTML={{
              __html: aboutPrizeTexts.languageScience,
            }}
          />

          <div>{aboutPrizeTexts.languageDsc}</div>
        </div>

        <div>
          <video
            src={
              process.env.PUBLIC_URL + "/images/aboutThePrize/aboutThePrize.mp4"
            }
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-[1fr,3fr] px-4 lg:px-0">
          <div className="text-lg md:text-3xl">{aboutPrizeTexts.logo}</div>
          <div>{aboutPrizeTexts.logoDsc}</div>
        </div>
      </div>
    </div>
  );
};
