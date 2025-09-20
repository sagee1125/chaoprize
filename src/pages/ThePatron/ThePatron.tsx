import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const ThePatron: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="THE PATRON" />
      <div className="lg:px-[300px] px-4 py-24 flex flex-col gap-12 text-[10px] md:text-lg/7 !font-thin">
        <div className="grid grid-cols-2">
          <div className="px-2 md:px-16 h-full flex items-center my-auto bg-second text-white">
            <p>
              The Shenzhen iRead Foundation was established in 2010 with the
              vision that high-quality children's reading builds a better
              future. The Foundation is dedicated to promoting the development
              of children’s reading and help raise lifelong readers. iRead’s
              work includes curating high-quality book lists for children aged 0
              to 12, promoting early reading through the programme Reading
              Start, supporting NGOs working with rural and migrant children’s
              reading, and funding basic and applied research on children’s
              reading. With the International Board on Books for Young People
              (IBBY), iRead established the international award IBBY-iRead
              Outstanding Reading Promoter Award.
            </p>
          </div>
          <div className="h-full px-16 py-20 mx-auto space-y-12">
            <img
              src={"/images/thepatron/iRead.avif"}
              alt={""}
              className="max-w-[380px] h-auto object-cover"
            />
            <div className="flex justify-center">
              <a
                href="https://www.iread.org.cn/Home/IndexEn/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#b68b47] hover:bg-main text-white px-3 py-2 font-medium transition-colors tracking-wider"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
