import { Language } from "../../context";

type ThePatronKeys = "title" | "description" | "learnMore";

export const thePatronTrilingualText: Record<
  Language,
  Record<ThePatronKeys, string>
> = {
  [Language.EN]: {
    title: "THE PATRON",
    description:
      "The Shenzhen iRead Foundation was established in 2010 with the vision that high-quality children's reading builds a better future. The Foundation is dedicated to promoting the development of children’s reading and help raise lifelong readers. iRead’s work includes curating high-quality book lists for children aged 0 to 12, promoting early reading through the programme Reading Start, supporting NGOs working with rural and migrant children’s reading, and funding basic and applied research on children’s reading. With the International Board on Books for Young People (IBBY), iRead established the international award IBBY-iRead Outstanding Reading Promoter Award.",
    learnMore: "Learn More",
  },
  [Language.SC]: {
    title: "赞助人",
    description:
      "深圳市爱阅公益基金会成立于2010年，以“高品质儿童阅读推动美好未来”为愿景，致力于推动儿童阅读的发展及儿童阅读品质的提升，让每一个孩子享受阅读的乐趣，成为终身阅读者。基金会的项目包括为0至12岁孩子推荐优秀童书的书目研制项目，推动早期儿童阅读的“阅芽计划”，支持乡村和流动儿童阅读的“阅林计划”，资助儿童阅读理论和实践研究的“阅耕计划”等。爱阅公益与国际儿童读物联盟（IBBY）共同设立了国际阅读奖项IBBY-iRead爱阅人物奖。",
    learnMore: "了解更多",
  },
  [Language.TC]: {
    title: "贊助人",
    description:
      "深圳市愛閱公益基金會成立於2010年，以“高品質兒童閱讀推動美好未來”為願景，致力於推動兒童閱讀的發展及兒童閱讀品質的提升，讓每一個孩子享受閱讀的樂趣，成為終身閱讀者。基金會的項目包括為0至12歲孩子推薦優秀童書的書目研製項目，推動早期兒童閱讀的“閱芽計劃”，支持鄉村和流動兒童閱讀的“閱林計劃”，資助兒童閱讀理論和實踐研究的“閱耕計劃”等。愛閱公益與國際兒童讀物聯盟（IBBY）共同設立了國際閱讀獎項IBBY-iRead愛閱人物獎。",
    learnMore: "了解更多",
  },
};
