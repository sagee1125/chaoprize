import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const Nomination: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="NOMINATION" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">
            Submission of Nomination
          </p>
          <div className="text-[10px] md:text-lg/7">
            <p>The nomination form should be completed in English.</p>
            <ul className="pl-5 list-disc">
              <li>
                A resume of the nominee in no more than 10 pages (A4 pages)
                should be submitted along with this nomination form.
              </li>
              <li>
                Information beyond the tenth page will be treated only as
                supplementary material at the discretion of the Selection
                Committee.
              </li>
              <li>
                The nomination form should be returned to the Selection
                Committee by email at chao.prize@polyu.edu.hk no later than 31
                October 2025 (11:59pm, GMT+8).
              </li>
              <li>
                Successful nominations will be notified by email. If you have
                not received the acknowledgement by 17 November 2025, please
                contact the Faculty of Humanities through email
                (chao.prize@polyu.edu.hk) or phone (+852 3400 8224).
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-12 pb-8">
          <p className="underline text-lg md:text-3xl">Nomination Form</p>
          <div className="text-[10px] md:text-lg/7">
            <p>The nomination form should be completed in English.</p>
            <ul className="pl-5 list-disc">
              <li>
                The nomination form should be returned to the Selection
                Committee by email at{" "}
                <a className="underline" href="mailto:chao.prize@polyu.edu.hk">
                  chao.prize@polyu.edu.hk
                </a>{" "}
                no later than 31 October 2025 (11:59pm, GMT+8).
              </li>
              <li>
                Please inform the Selection Committee by email if the attachment
                size exceeds the allowable limit (20 MB).
              </li>
            </ul>
            <div className="space-y-2 mt-4">
              <button className="block bg-[#b68b47] w-[140px] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider">
                DOC
              </button>
              <button className="block bg-[#b68b47] w-[140px] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider">
                PDF
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">Nomination Guidelines</p>
          <div className="text-[10px] md:text-lg/7">
            <ul className="pl-5 list-disc">
              <li>
                Each nominator can only submit one nomination in each category.
              </li>
              <li>
                The nomination of a person who has passed away will not be
                considered.
              </li>
              <li>
                Self-nomination is acceptable if a letter of recommendation from
                a third party is provided.
              </li>
              <li>
                A nominee may be considered only if he/she has not previously
                won the prize in the same category.
              </li>
              <li>
                Appropriate actions will be taken to address conflicts of
                interest, if any, by the Organising Committee.
              </li>
              <li>
                A valid nomination submitted in a nomination year will only be
                considered for that year.
              </li>
              <li>Nominations must be made in the strictest confidence.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">Selection</p>
          <div className="text-[10px] md:text-lg/7">
            <ul className="pl-5 list-disc">
              <li>
                The Faculty of Humanities will establish a Selection Committee
                responsible for shortlisting the candidates, appointing experts
                as reviewers, and confirming the awardees.{" "}
              </li>
              <li>
                The Selection Committee consists of a Chairperson and at least
                four members. The members are appointed by the Dean of Faculty
                of Humanities on behalf of the Organising Committee of the
                Prize. The members of the Selection Committee are as follows:
                <ul className="pl-5 list-[circle]">
                  <li>
                    <span className="font-semibold">Chairperson</span>: Dean of
                    the Faculty of Humanities, The Hong Kong Polytechnic
                    University or his/her appointee
                  </li>
                  <li>
                    <span className="font-semibold">Members</span>:
                    World-renowned scholars and academic leaders in the field
                  </li>
                </ul>
              </li>
              <li>
                The Selection Committee will make a shortlist from the valid
                nominations. Each shortlisted candidate will then be reviewed by
                at least three expert reviewers independently. These expert
                reviewers are eminent scholars or leaders in the field appointed
                by the Selection Committee. They will evaluate the candidate’s
                suitability for the award and make a recommendation to the
                Selection Committee. Upon receiving the recommendation from the
                expert reviewers, the Selection Committee will make a final
                decision.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
