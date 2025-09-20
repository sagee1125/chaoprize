import React from "react";
import { Language, useLanguage } from "../../context";
import SectionBanner from "../../components/SectionBanner";

const TheOrganiser: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="THE ORGANISER" />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin">
        <div>
          <img
            src={"/images/theorganiser/FHO_HHB.avif"}
            alt={``}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          The Faculty of Humanities at The Hong Kong Polytechnic University is
          the initiator and host of the Yuen Ren Chao Prize, with the generous
          consent of Professor Chao’s family. The Faculty aims to create
          synergies across language, communication, history, culture, and
          technology in education and research, highlighting both the discovery
          and the transfer of knowledge. The Faculty’s language science research
          encompasses a wide range of areas. With world-class scholars and a
          critical mass of researchers in the broader discipline, it has a
          strong focus on Chinese linguistics, language science and technology,
          English language communication, speech therapy and bilingual language
          studies and translation. Our scholars aspire to carry forward the
          legacy of Professor Chao in the pursuit of language science research
          and education. The establishment of the Yuen Ren Chao Prize further
          reinforces the Faculty’s commitment to upholding the PolyU motto, “To
          learn and to apply, for the benefit of mankind” (開物成務 勵學利民),
          contributing to knowledge discovery, knowledge transfer, and social
          advancement.
        </div>
      </div>
    </div>
  );
};

export default TheOrganiser;
