import React from "react";
import { Language, useLanguage } from "../../context";
import SectionBanner from "../../components/SectionBanner";

const ContactUs: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="CONTACT US" />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-24 text-dark text-[10px] md:text-lg/7 !font-thin">
        <div className="grid grid-cols-3 gap-3">
          <div>For enquiries, please contact us at</div>
          <div>
            <a href="mailto:chao.prize@polyu.edu.hk">chao.prize@polyu.edu.hk</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
