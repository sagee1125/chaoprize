import React from "react";
import { nominationTrilingualText } from "./i18n";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const Nomination: React.FC = () => {
  const { lang } = useLanguage();
  const nominationTexts = nominationTrilingualText[lang];
  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc font-enzh`}
    >
      <SectionBanner title={nominationTexts.title} />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">
            {nominationTexts.submissionNNomination}
          </p>
          <div className="text-[10px] md:text-lg/7 md:min-h-[180px]">
            <p>{nominationTexts.submissionNNominationDesc}</p>
            {lang === Language.EN && (
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
            )}
          </div>
        </div>

        <div className="space-y-12 pb-8">
          <p className="underline text-lg md:text-3xl">
            {nominationTexts.nominationForm}
          </p>

          <div className="text-[10px] md:text-lg/7">
            {lang !== Language.EN ? (
              <div className="space-y-6">
                <p>{nominationTexts.submissionNNominationDesc}</p>
                <p>{nominationTexts.download}</p>
              </div>
            ) : (
              <ul className="pl-5 list-disc">
                <li>
                  The nomination form should be returned to the Selection
                  Committee by email at{" "}
                  <a
                    className="underline"
                    href="mailto:chao.prize@polyu.edu.hk"
                  >
                    chao.prize@polyu.edu.hk
                  </a>{" "}
                  no later than 31 October 2025 (11:59pm, GMT+8).
                </li>
                <li>
                  Please inform the Selection Committee by email if the
                  attachment size exceeds the allowable limit (20 MB).
                </li>
              </ul>
            )}

            <div className="space-y-2 mt-4">
              {/* Nomination Form - Yuen Ren Chao Prize in Language Sciences 2026.docx */}
              <a
                href="/docs/Nomination-Form-2026.docx"
                download="Nomination Form - Yuen Ren Chao Prize in Language Sciences 2026.docx"
                className="block bg-[#b68b47] w-[140px] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider flex justify-center items-center"
              >
                DOC
              </a>

              <a
                href="https://www.chaoprize.org/_files/ugd/e1a3ec_be364cf99edd440eae5a00b7e68af089.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#b68b47] w-[140px] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider flex justify-center items-center"
              >
                PDF
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">
            {nominationTexts.nominationGuidelines}
          </p>
          <div className="text-[10px] md:text-lg/7 md:min-h-[200px]">
            {lang === Language.EN ? (
              <ul className="pl-5 list-disc">
                <li>
                  Each nominator can only submit one nomination in each
                  category.
                </li>
                <li>
                  The nomination of a person who has passed away will not be
                  considered.
                </li>
                <li>
                  Self-nomination is acceptable if a letter of recommendation
                  from a third party is provided.
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
            ) : (
              <p>{nominationTexts.submissionNNominationDesc}</p>
            )}
          </div>
        </div>

        <div className="space-y-12">
          <p className="underline text-lg md:text-3xl">
            {nominationTexts.selection}
          </p>
          <div className="text-[10px] md:text-lg/7">
            <ul className="pl-5 list-disc">
              <li>{nominationTexts.selection_1}</li>
              <li>
                {nominationTexts.selection_2}
                <ul className="pl-5 list-[circle]">
                  <li
                    dangerouslySetInnerHTML={{
                      __html: nominationTexts.selection_2_1,
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: nominationTexts.selection_2_2,
                    }}
                  />
                </ul>
              </li>
              <li>{nominationTexts.selection_3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
