import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const Awards: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="AWARDS" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-10 text-dark text-[10px] md:text-lg/7 !font-thin py-8 md:py-20">
        <p>
          Two awards will be given biennially, namely Lifetime Achievement Award
          and Early Career Contribution Award. The Prize will be presented by
          the President of The Hong Kong Polytechnic University. Consideration
          for the awards will be based on individuals’ contributions, regardless
          of their races, nationalities, genders and religious affiliations.
        </p>
        <div className="grid grid-cols-[1fr,2fr] gap-12">
          <div>
            <img
              src={"/images/awards/LAA-EN_3x.avif"}
              alt={``}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 px-8">
            <p>
              This award is conferred to a senior individual whose academic life
              has been devoted to language science studies and who has made
              long-term outstanding contributions to the field. The following
              requirements must be met:
            </p>
            <ul className="pl-5 list-disc">
              <li>
                The awardee must demonstrate sustained engagement in the study
                of language science;
              </li>
              <li>
                The awardee’s scholarship should have been widely acknowledged
                as pioneering and internationally acclaimed in language science
                research; and
              </li>
              <li>
                The awardee’s research findings should have led to major
                breakthroughs and have far-reaching impacts in the field around
                the world.
              </li>
            </ul>
          </div>

          <div>
            <img
              src={"/images/awards/ECCA-EN_3x.avif"}
              alt={``}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 px-8">
            <p>
              This award is conferred to a junior individual who has made
              outstanding contributions to language science. The following
              requirements must be met:
            </p>
            <ul className="pl-5 list-disc">
              <li>
                The awardee should pursue language science research and play an
                active and key role in the field;
              </li>
              <li>
                The awardee’s research findings should have resulted in
                breakthroughs in language science research at an international
                level;
              </li>
              <li>
                The awardee should be internationally recognised, and
                demonstrate outstanding leadership and impact to the field; and
              </li>
              <li>
                The awardee should be aged 45 or below* by the nomination
                deadline.
              </li>
            </ul>
            <p className="pl-5 ">
              *Aged 45 or below refers to individuals who have not yet reached
              their 46th birthday on the date of application deadline.
            </p>
          </div>

          <div className="text-lg md:text-3xl">Shared Awards</div>
          <div className=" px-8">
            <p>
              Both the Lifetime Achievement Award and the Early Career
              Contribution Award can be Shared Awards. In the case of a Shared
              Award, all the requirements must be met by all awardees.
            </p>
          </div>

          <div className="text-lg md:text-3xl">
            Number of Awards and Cash Prizes
          </div>
          <div className=" px-8">
            <p>
              Normally only one award can be given for each category during each
              prize cycle. The Prize comes with cash awards of US$100,000*
              (Lifetime Achievement) and US$50,000* (Early Career Contribution).
              The same Award can be given to a recipient only once in his or her
              lifetime. The awardees will be recognised at a ceremony held by
              The Hong Kong Polytechnic University, which will also feature a
              distinguished lecture in the Faculty of Humanities.
              <br />
              <br />
              *The Organiser reserves the right to adjust the prize amount and
              its distribution to awardees based on prevailing circumstances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
