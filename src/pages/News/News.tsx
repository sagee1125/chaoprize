import React from "react";
import { newsTrilingualText } from "./i18n";
import { Language, useLanguage, useSettings } from "../../context";
import {
  maxMobileContainer,
  maxPCContainer,
  SectionBanner,
} from "../../components";
import { MediaContainer } from "../../components/MediaContainer";
import { MediaType } from "../../components/MediaContainer/const";

export const News: React.FC = () => {
  const { lang } = useLanguage();
  const newsTexts = newsTrilingualText[lang];
  const { isMobile } = useSettings();

  const newsItems = [
    {
      title: {
        en: "PolyU Presents Lifetime Achievement Award to Two Distinguished Scholars ...", //  at the Inaugural Ceremony for the Yuen Ren Chao Prize in Language Sciences
        sc: "理大颁发首届「赵元任语言科学奖」 两位杰出学者荣获终身成就奖",
        tc: "理大頒發首屆「趙元任語言科學獎」 兩位傑出學者榮獲終身成就獎",
      },
      image:
        "/images/news/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars.avif",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/polyu-presents-lifetime-achievement-award-to-two-distinguished-scholars",
    },
    {
      title: {
        en: "International Symposium on Language Sciences (ISLS) 2024 Successfully Held",
        sc: "2024年度国际语言科学研讨会成功举办",
        tc: "2024年度國際語言科學研討會成功舉辦",
      },
      image:
        "/images/news/international-symposium-on-language-sciences-isls-2024-successfully-held.jpg",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/international-symposium-on-language-sciences-isls-2024-successfully-held/",
    },
    {
      title: {
        en: "iRead Foundation Makes Donation to PolyU to Support the Yuen Ren Chao Prize in Language Sciences and to Advance Scientific Research in the Field",
        sc: "理大获爱阅公益基金会捐赠支持「赵元任语言科学奖」 携手推动语言科学...",
        tc: "理大獲愛閱公益基金會捐贈支持「趙元任語言科學獎」 攜手推動語言科學...",
      },
      image:
        "/images/news/iread-foundation-makes-donation-to-polyu-to-support-the-yuen-ren-chao-prize-in-language-sciences.jpg",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/iread-foundation-makes-donation-to-polyu-to-support-the-yuen-ren-chao-prize-in-language-sciences/",
    },
    {
      title: {
        en: "PolyU Launches Yuen Ren Chao Prize in Language Sciences Recognising... ", // Outstanding Scholars in the Field
        sc: "理大成立 「 赵元任语言科学奖 」 表扬杰出语言科学学者",
        tc: "理大成立 「 趙元任語言科學獎 」 表揚傑出語言科學學者",
      },
      image:
        "/images/news/polyu-launches-yuen-ren-chao-prize-in-language-sciences-recognising-outstanding-scholars.avif",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2023/polyu-launches-yuen-ren-chao-prize-in-language-sciences-recognising-outstanding-scholars/",
    },
    {
      title: {
        en: "First Yuen Ren Chao Prize in Language Sciences Announced",
        sc: "首届「赵元任语言科学奖」得奖结果揭晓",
        tc: "首屆「趙元任語言科學獎」得獎結果揭曉",
      },
      image:
        "/images/news/the-first-yuen-ren-chao-prize-in-language-sciences-announced.png",
      link: "https://www.polyu.edu.hk/fh/news-and-events/news/2024/the-first-yuen-ren-chao-prize-in-language-sciences-announced/",
    },
  ];

  const influenceItems = [
    {
      type: MediaType.Video,
      title: {
        en: "Professor Ovid Jyh-Lang Tzeng",
        sc: "曾志朗教授",
        tc: "曾志朗教授",
      },
      desc: {
        en: "Institute of Linguistics...",
        sc: "中央研究院语言研究所",
        tc: "中央研究院語言研究所",
      },
      image: "/images/news/Professor-Ovid-Jyh-Lang-Tzeng.avif",
      videoSrc: "/images/news/Professor-Ovid-Jyh-Lang-Tzeng.mp4",
    },
    {
      type: MediaType.Pdf,
      title: {
        en: "Professor Chen Zhongmin",
        sc: "李壬癸教授",
        tc: "李壬癸教授",
      },
      desc: {
        en: "Institute of Linguistics, Academia Sinica",
        sc: "中央研究院语言研究所",
        tc: "中央研究院語言研究所",
      },
      image: "/images/news/Prof-Li-Paul-Jen-kuei.avif",
      link: "https://www.polyu.edu.hk/fh/docdrive/ScholarSharingProf.PaulLi.pdf",
      target: "_blank" as "_blank" | "_self",
    },

    {
      type: MediaType.Video,
      title: {
        en: "Professor Ovid Jyh-Lang Tzeng",
        sc: "陈忠民教授",
        tc: "陳忠敏教授",
      },
      desc: {
        en: "Fudan University",
        sc: "复旦大学",
        tc: "復旦大學",
      },
      image: "/images/news/Professor-Chen-Zhongmin.avif",
      videoSrc: "/images/news/Professor-Chen-Zhongmin.mp4",
    },

    {
      type: MediaType.Video,
      title: {
        en: "Professor Shi Feng",
        sc: "石峰教授",
        tc: "石峰教授",
      },
      desc: {
        en: "Nankai University",
        sc: "南开大学",
        tc: "南開大學",
      },
      image: "/images/news/Professor-Shi-Feng.avif",
      videoSrc: "/images/news/Professor-Shi-Feng.mp4",
    },
    {
      type: MediaType.Video,
      title: {
        en: "Dr Peter Zhou",
        sc: "周彼得博士",
        tc: "周欣平博士",
      },
      desc: {
        en: "University of California, Berkeley",
        sc: "美国加州大学柏克莱分校图书馆",
        tc: "美國加州大學柏克萊分校圖書館",
      },
      image: "/images/news/Dr-Peter-Zhou.avif",
      videoSrc: "/images/news/Dr-Peter-Zhou.mp4",
    },
    {
      type: MediaType.Video,
      title: {
        en: "Dr Cheung Kwan Hin",
        sc: "张君轩博士",
        tc: "張君軒博士",
      },

      desc: {
        en: "Former Head of Department of ...",
        sc: "前理大中文及双语语言学系主任",
        tc: "前理大中文及雙語語言學系主任",
      },
      image: "/images/news/Dr-Cheung-Kwan-Hin.avif",
      videoSrc: "/images/news/Dr-Cheung-Kwan-Hin.mp4",
    },
  ];

  return (
    <div className={`w-full h-full overflow-x-hidden bg-white font-enzh`}>
      <SectionBanner title={newsTexts.title} />
      <div
        className="py-8 lg:py-24 flex flex-col gap-12 text-dark text-[10px] md:text-lg/7 !font-thin px-6 lg:px-0"
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        {" "}
        <div className="grid grid-cols-3 gap-2 md:gap-6">
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
          <p className="text-lg md:text-3xl pb-6">{newsTexts.influence}</p>
          <div className="grid grid-cols-3 gap-2 md:gap-6">
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
