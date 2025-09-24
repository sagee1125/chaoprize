import { Language } from "../../context";

type NewsKeys = "title" | "influence";

export const newsTrilingualText: Record<Language, Record<NewsKeys, string>> = {
  [Language.EN]: {
    title: "NEWS",
    influence: `Professor Chao's Influence`,
  },
  [Language.SC]: {
    title: "最新消息",
    influence: `赵教授的影响`,
  },
  [Language.TC]: {
    title: "最新消息",
    influence: `趙元任教授的影響`,
  },
};
