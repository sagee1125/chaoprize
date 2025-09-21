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

  const influenceItems = [
    {
      type: MediaType.Video,
      title: "Professor Ovid Jyh-Lang Tzeng",
      desc: "Institute of Linguistics...",
      image: "/images/news/Professor-Ovid-Jyh-Lang-Tzeng.avif",
      videoSrc: "/images/news/Professor-Ovid-Jyh-Lang-Tzeng.mp4",
    },
    {
      type: MediaType.Pdf,
      title: "Professor Chen Zhongmin",
      desc: "Institute of Linguistics, Academia Sinica",
      image: "/images/news/Prof-Li-Paul-Jen-kuei.avif",
      link: "https://www.polyu.edu.hk/fh/docdrive/ScholarSharingProf.PaulLi.pdf",
      target: "_blank" as "_blank" | "_self",
    },

    {
      type: MediaType.Video,
      title: "Professor Ovid Jyh-Lang Tzeng",
      desc: "Fudan University",
      image: "/images/news/Professor-Chen-Zhongmin.avif",
      videoSrc: "/images/news/Professor-Chen-Zhongmin.mp4",
    },

    {
      type: MediaType.Video,
      title: "Professor Shi Feng",
      desc: "Nankai University",
      image: "/images/news/Professor-Shi-Feng.avif",
      videoSrc: "/images/news/Professor-Shi-Feng.mp4",
    },
    {
      type: MediaType.Video,
      title: "Dr Peter Zhou",
      desc: "University of California, Berkeley",
      image: "/images/news/Dr-Peter-Zhou.avif",
      videoSrc: "/images/news/Dr-Peter-Zhou.mp4",
    },
    {
      type: MediaType.Video,
      title: "Dr Cheung Kwan Hin",
      desc: "Former Head of Department of ...",
      image: "/images/news/Dr-Cheung-Kwan-Hin.avif",
      videoSrc: "/images/news/Dr-Cheung-Kwan-Hin.mp4",
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
              target={"_blank"}
            />
          ))}
        </div>

        <div>
          <p className="text-lg md:text-3xl pb-6">Professor Chao's Influence</p>
          <div className="grid grid-cols-3 gap-6">
            {influenceItems.map((item, i) => (
              <MediaContainer
                key={i}
                thumbnail={item.image}
                title={item.title}
                description={item.desc}
                type={item.type}
                link={item.link}
                target={item.target}
                videoSrc={item.videoSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
