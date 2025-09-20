import { Language } from "../context";

export const sitemap = [
  {
    title: "INTRODUCTION",
    links: [
      { label: "ABOUT THE PRIZE", href: "/abouttheprize" },
      { label: "THE ORGANISER", href: "/theorganiser" },
      { label: "THE PATRON", href: "/thepatron" },
    ],
  },
  {
    title: "AWARDS & LAUREATES",
    links: [
      { label: "AWARDS", href: "/awards" },
      { label: "LAUREATES", href: "/laureates" },
    ],
  },
  {
    title: "NOMINATION",
    links: [
      { label: "NOMINATION", href: "/nomination" },
      { label: "IMPORTANT DATES", href: "/importantdates" },
    ],
  },
  {
    title: "MEDIA",
    links: [
      { label: "NEWS", href: "/news" },
      { label: "GALLERY", href: "/gallery" },
      { label: "PUBLICATIONS", href: "/publications" },
    ],
  },
  {
    title: "CONTACT US",
    self: "/contactus",
    links: [], // 無列身
  },
];

type TranslationKeys =
  | "introduction"
  | "aboutPrize"
  | "organiser"
  | "patron"
  | "awardsLaureates"
  | "awards"
  | "laureates"
  | "nomination"
  | "importantDates"
  | "media"
  | "news"
  | "gallery"
  | "publications"
  | "contactUs";

export const sitemapTrilingualText: Record<
  Language,
  Record<TranslationKeys, string>
> = {
  [Language.EN]: {
    introduction: "INTRODUCTION",
    aboutPrize: "ABOUT THE PRIZE",
    organiser: "THE ORGANISER",
    patron: "THE PATRON",
    awardsLaureates: "AWARDS & LAUREATES",
    awards: "AWARDS",
    laureates: "LAUREATES",
    nomination: "NOMINATION",
    importantDates: "IMPORTANT DATES",
    media: "MEDIA",
    news: "NEWS",
    gallery: "GALLERY",
    publications: "PUBLICATIONS",
    contactUs: "CONTACT US",
  },
  [Language.SC]: {
    introduction: "介绍",
    aboutPrize: "关于奖项",
    organiser: "主办单位",
    patron: "赞助人",
    awardsLaureates: "奖项与得奖者",
    awards: "奖项",
    laureates: "得奖者",
    nomination: "提名",
    importantDates: "重要日期",
    media: "媒体",
    news: "最新消息",
    gallery: "媒体库",
    publications: "出版物",
    contactUs: "联络我们",
  },
  [Language.TC]: {
    introduction: "介紹",
    aboutPrize: "關於獎項",
    organiser: "主辦單位",
    patron: "贊助人",
    awardsLaureates: "獎項與得獎者",
    awards: "獎項",
    laureates: "得獎者",
    nomination: "提名",
    importantDates: "重要日期",
    media: "媒體",
    news: "最新消息",
    gallery: "媒體庫",
    publications: "出版物",
    contactUs: "聯絡我們",
  },
};
