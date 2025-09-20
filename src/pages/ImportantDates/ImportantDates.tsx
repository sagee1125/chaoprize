import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const ImportantDates: React.FC = () => {
  const { lang } = useLanguage();

  const importantDates = [
    {
      title: "Announcement of the Prize",
      date: "July 2025",
    },
    {
      title: "Nomination Starts",
      date: "1 August 2025",
    },
    {
      title: "Nomination Period",
      date: "1 August 2025 to 31 October 2025",
    },
    {
      title: "Awardee Selection",
      date: "November 2025 to March 2026",
    },
    {
      title: "Announcement of Results",
      date: "March 2026",
    },
    {
      title: "Award Presentation Ceremony",
      date: "8 May 2026",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-lightBgc
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="IMPORTANT DATES" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="space-y-12">
          <p className="text-lg md:text-3xl">
            Important Dates for the 2026 Award
          </p>

          <div className="text-lg">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-6 border-b border-main"
              >
                <span>{item.title}</span>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
          <p className="text-lg">
            The Faculty of Humanities of PolyU has the sole discretion to
            prescribe procedures or additional details other than those
            mentioned above as appropriate to suit specific circumstances,
            without prior notification.
            <br />
            <br />
            PolyU reserves the right to rescind or revoke the award in all of
            its conditions at any time if the awardee is found to have violated
            applicable laws or have engaged in conduct that is deemed harmful to
            the academic community or the general public, causing damages to
            PolyU's reputation as decided by the PolyU Chao Prize Organising
            Committee. Such decisions shall be at the sole discretion of PolyU
            and shall not be subject to appeal.
          </p>
        </div>
      </div>
    </div>
  );
};
