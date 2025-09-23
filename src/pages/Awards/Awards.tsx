import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { awardTrilingualText } from "./i18n";

export const Awards: React.FC = () => {
  const { lang } = useLanguage();
  const awardTexts = awardTrilingualText[lang];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner title={awardTexts.title} />
      <div className="lg:px-[300px] px-4 flex flex-col gap-10 text-dark text-[10px] md:text-lg/7 !font-thin py-8 md:py-20">
        <p>{awardTexts.intro}</p>
        <div className="grid grid-cols-[1fr,2fr] gap-12">
          <div>
            <img
              src={awardTexts.lifetimeAchievementAwardImg}
              alt={``}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 px-8">
            <p>{awardTexts.lifetimeAchievementAwardIntro}</p>
            <ul className="pl-5 list-disc">
              <li>{awardTexts.lifetimeAchievementAward_1}</li>
              <li>{awardTexts.lifetimeAchievementAward_2}</li>
              <li>{awardTexts.lifetimeAchievementAward_3}</li>
            </ul>
          </div>

          <div>
            <img
              src={awardTexts.earlyCareerContributionAwardImg}
              alt={``}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 px-8">
            <p>{awardTexts.earlyCareerContributionAwardIntro}</p>
            <ul className="pl-5 list-disc">
              <li>{awardTexts.earlyCareerContributionAward_1}</li>
              <li>{awardTexts.earlyCareerContributionAward_2}</li>
              <li>{awardTexts.earlyCareerContributionAward_3}</li>
              <li>{awardTexts.earlyCareerContributionAward_4}</li>
            </ul>
            <p className="pl-5">{awardTexts.below_45}</p>
          </div>

          <div className="text-lg md:text-3xl">{awardTexts.sharedAwards}</div>
          <div className=" px-8">
            <p>{awardTexts.sharedAwardsIntro}</p>
          </div>

          <div className="text-lg md:text-3xl">{awardTexts.numberOfAwards}</div>
          <div className=" px-8">
            <p>
              {awardTexts.numberOfAwardsIntro}
              <br />
              <br />
              {awardTexts.numberOfAwardsIntroPlus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
