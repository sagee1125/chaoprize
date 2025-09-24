import { Language } from "../../context";

type PublicationKeys = "title";

export const publicationTrilingualText: Record<
  Language,
  Record<PublicationKeys, string>
> = {
  [Language.EN]: {
    title: "PUBLICATIONS",
  },
  [Language.SC]: {
    title: "出版物",
  },
  [Language.TC]: {
    title: "出版物",
  },
};
