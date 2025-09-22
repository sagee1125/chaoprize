import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { aboutPrizeTrilingualText } from "./i18n";

export const AboutThePrize: React.FC = () => {
  const { lang } = useLanguage();
  const aboutPrizeTexts = aboutPrizeTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title={aboutPrizeTexts.title} />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark text-[10px] md:text-lg/7 !font-thin">
        <div className="grid grid-cols-2">
          <div className="pr-4 md:pr-10 py-10 flex my-auto">
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

        <div className="grid grid-cols-[1fr,3fr]">
          <div className="text-lg md:text-3xl">Aims</div>
          <div className="pl-5">
            <ul className="list-disc space-y-1">
              <li>To commemorate the legacy of Professor Yuen Ren Chao</li>
              <li>
                To recognise distinguished contributions made by researchers in
                the field
              </li>
              <li>
                To inspire future generations of scholars and students in
                language science research
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-[1fr,3fr]">
          <div className="text-lg md:text-3xl">
            Language
            <br />
            Science
          </div>
          <div>
            Language is a hallmark of human evolution and an indispensable tool
            for human communication. It facilitates the accumulation of
            knowledge and wisdom across the millennia leading to the
            civilisations we have today. Language scientists examine languages
            from multiple perspectives using interdisciplinary scientific
            approaches. Their scientific findings can be applied in many areas,
            from enhancing communication to treating speech disorders. During
            the past few decades, language science research has experienced
            rapid growth in the context of modern scientific enterprises. With
            the advent of language technologies and pervasive digital
            applications, tremendous strides have been made, new frontiers have
            been established, and more exciting opportunities have emerged for
            language scientists.
          </div>
        </div>

        <div>
          <video
            src={"/images/aboutThePrize/aboutThePrize.mp4"}
            autoPlay
            muted
            loop
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="grid grid-cols-[1fr,3fr]">
          <div className="text-lg md:text-3xl">The Logo</div>
          <div>
            The free flowing ribbon-liked “C” represents the continuation and
            evolution of Chao’s wisdom in Language Science. Red and gold suggest
            noble and devotion.
          </div>
        </div>
      </div>
    </div>
  );
};
