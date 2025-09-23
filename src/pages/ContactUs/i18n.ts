import { Language } from "../../context";

type ContactUsKeys = "title" | "description";

export const contactUsTrilingualText: Record<
  Language,
  Record<ContactUsKeys, string>
> = {
  [Language.EN]: {
    title: "CONTACT US",
    description: `For enquiries, please contact us at`,
  },
  [Language.SC]: {
    title: "联络我们",
    description: `有关奖项查询`,
  },
  [Language.TC]: {
    title: "聯絡我們",
    description: `有關獎項查詢`,
  },
};
