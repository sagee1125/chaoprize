import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const News: React.FC = () => {
  const { lang } = useLanguage();

  const newsItems = [
    {
      title:
        "PolyU Presents Lifetime Achievement Award to Two Distinguished Scholars at the Inaugural Ceremony for the Yuen Ren Chao Prize in Language Sciences",
      image:
        "/images/news/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars.avif",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars",
    },
    {
      title:
        "International Symposium on Language Sciences (ISLS) 2024 Successfully Held",
      image:
        "/images/news/international-symposium-on-language-sciences-isls-2024-successfully-held.jpg",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/international-symposium-on-language-sciences-isls-2024-successfully-held/",
    },
    {
      title:
        "iRead Foundation Makes Donation to PolyU to Support the Yuen Ren Chao Prize in Language Sciences and to Advance Scientific Research in the Field",
      image:
        "/images/news/iread-foundation-makes-donation-to-polyu-to-support-the-yuen-ren-chao-prize-in-language-sciences.jpg",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/iread-foundation-makes-donation-to-polyu-to-support-the-yuen-ren-chao-prize-in-language-sciences/",
    },
    {
      title:
        "PolyU Launches Yuen Ren Chao Prize in Language Sciences Recognising Outstanding Scholars in the Field",
      image:
        "/images/news/polyu-launches-yuen-ren-chao-prize-in-language-sciences-recognising-outstanding-scholars.avif",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2023/polyu-launches-yuen-ren-chao-prize-in-language-sciences-recognising-outstanding-scholars/",
    },
    {
      title: "First Yuen Ren Chao Prize in Language Sciences Announced",
      image:
        "/images/news/the-first-yuen-ren-chao-prize-in-language-sciences-announced.png",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/the-first-yuen-ren-chao-prize-in-language-sciences-announced/",
    },
  ];

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="NEWS" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-24 text-dark !font-thin py-8 md:py-20">
        <div className="grid grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <MediaContainer
              key={i}
              thumbnail={item.image}
              title={item.title}
              type={MediaType.News}
              link={item.link}
            />
          ))}
        </div>

        {/* <div>
          <p className="text-lg md:text-3xl">Professor Chao's Influence</p>
        </div> */}
      </div>
    </div>
  );
};
