import { Language } from "../../context";

type AboutPrizeKeys = "title" | "description" | "button";

export const aboutPrizeTrilingualText: Record<
  Language,
  Record<AboutPrizeKeys, string>
> = {
  [Language.EN]: {
    title: "ABOUT THE PRIZE",
    description: `The Yuen Ren Chao Prize in Language Science, organised by<br />
The Hong Kong Polytechnic University (PolyU), is an international<br />
award that honours scholars and researchers who have made<br />
distinguished contributions to language science.`,
    button: "Learn More",
  },
  [Language.SC]: {
    title: "关于奖项",
    description: `「赵元任语言科学奖」是由香港理工大学发起与颁发的一项国际殊荣，<br />
旨在表彰在语言科学研究方面有杰出贡献的学者和研究者。`,
    button: "了解更多",
  },
  [Language.TC]: {
    title: "關於獎項",
    description: `「趙元任語言科學獎」是由香港理工大學發起與頒發的一項國際殊榮，<br />
旨在表揚在語言科學研究方面有傑出貢獻的學者和研究者。`,
    button: "了解更多",
  },
};

type AwardsKeys =
  | "title"
  | "description"
  | "nomination"
  | "importantDates"
  | "nominationUpperCase"
  | "photoLeft"
  | "photoRight";

export const awardsTrilingualText: Record<
  Language,
  Record<AwardsKeys, string>
> = {
  [Language.EN]: {
    title: "AWARDS & LAUREATES",
    photoLeft: "/images/homepage/LAA-EN_3x.avif",
    photoRight: "/images/homepage/ECCA-EN_3x.avif",
    description: `Two awards will be given biennially, namely<br />
Lifetime Achievement Award and Early Career Contribution Award.`,
    nomination: "Nomination",
    nominationUpperCase: "NOMINATION",
    importantDates: "Important Dates",
  },
  [Language.SC]: {
    title: "奖项与得奖者",
    photoLeft: "/images/homepage/LAA-SC_3x.avif",
    photoRight: "/images/homepage/ECCA-SC_3x.avif",
    description: `每两年颁发一次，设有「终身成就奖」及「杰出青年学者奖」两个奖项。`,
    nomination: "提名",
    nominationUpperCase: "提名",
    importantDates: "重要日期",
  },
  [Language.TC]: {
    title: "獎項與得獎者",
    photoLeft: "/images/homepage/LAA-TC_3x.avif",
    photoRight: "/images/homepage/ECCA-TC_3x.avif",
    description: `每兩年頒發一次，設有「終身成就獎」及「傑出青年學者獎」兩個獎項。`,
    nomination: "提名",
    nominationUpperCase: "提名",
    importantDates: "重要日期",
  },
};

type MediaKeys =
  | "title"
  | "newsTitle"
  | "newsSubtitle"
  | "newsSubtitleLeft"
  | "view"
  | "galleryTitle"
  | "gallerySubtitle"
  | "gallerySubtitleLeft"
  | "publicationsTitle"
  | "publicationsSubtitle"
  | "publicationsSubtitleLeft";

export const mediaTrilingualText: Record<
  Language,
  Record<MediaKeys, string>
> = {
  [Language.EN]: {
    title: "MEDIA",
    newsTitle: "NEWS",
    newsSubtitle: "First Yuen Ren Chao Prize in Language ",
    newsSubtitleLeft: "Science Announced",
    view: "View",
    galleryTitle: "GALLERY",
    gallerySubtitle: "Chao Prize Presentation",
    gallerySubtitleLeft: "Ceremony",
    publicationsTitle: "PUBLICATIONS",
    publicationsSubtitle: "The Chao Prize 2024 Award Presentation",
    publicationsSubtitleLeft: "Brochure",
  },
  [Language.SC]: {
    title: "媒体",
    newsTitle: "最新消息",
    newsSubtitle: "首届「赵元任语言科学奖」得奖结果...",
    newsSubtitleLeft: "",
    view: "查看",
    galleryTitle: "影像库",
    gallerySubtitle: "赵元任语言科学奖颁奖典礼",
    gallerySubtitleLeft: "",
    publicationsTitle: "出版物",
    publicationsSubtitle: "2024年赵元任语言科学奖典礼手册",
    publicationsSubtitleLeft: "",
  },
  [Language.TC]: {
    title: "媒體",
    newsTitle: "最新消息",
    newsSubtitle: "首屆「趙元任語言科學獎」得獎結果...",
    newsSubtitleLeft: "",
    view: "查看",
    galleryTitle: "影像庫",
    gallerySubtitle: "趙元任語言科學獎頒獎典禮",
    gallerySubtitleLeft: "",
    publicationsTitle: "出版物",
    publicationsSubtitle: "2024年趙元任語言科學獎典禮手冊",
    publicationsSubtitleLeft: "",
  },
};
