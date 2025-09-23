import { Language } from "../../context";

type AboutPrizeKeys = "title" | "description";

export const theOrganizeTrilingualText: Record<
  Language,
  Record<AboutPrizeKeys, string>
> = {
  [Language.EN]: {
    title: "THE ORGANISER",
    description: `The Faculty of Humanities at The Hong Kong Polytechnic University is the initiator and host of the Yuen Ren Chao Prize, with the generous consent of Professor Chao’s family. The Faculty aims to create synergies across language, communication, history, culture, and technology in education and research, highlighting both the discovery and the transfer of knowledge. The Faculty’s language science research encompasses a wide range of areas. With world-class scholars and a critical mass of researchers in the broader discipline, it has a strong focus on Chinese linguistics, language science and technology, English language communication, speech therapy and bilingual language studies and translation. Our scholars aspire to carry forward the legacy of Professor Chao in the pursuit of language science research and education. The establishment of the Yuen Ren Chao Prize further reinforces the Faculty’s commitment to upholding the PolyU motto, “To learn and to apply, for the benefit of mankind” (開物成務 勵學利民), contributing to knowledge discovery, knowledge transfer, and social advancement.`,
  },
  [Language.SC]: {
    title: "主办单位",
    description: `承蒙赵元任家属允准，香港理工大学人文学院得以创立「赵元任语言科学奖」，并成为主办单位。理大人文学院是语言、传意、历史、文化和科技之教学与研究荟萃之地，同时强调知识的探索与转移。其语言科学研究涵盖领域广泛，甚具影响力；多位享誉国际的学者和专家云集学院之内，精研中国语言学、语言科学及技术、英语语言传意、言语治疗、双语语言研究及翻译学等范畴的重要课题。学院秉承赵元任教授对语言学的贡献和研究精神，积极开拓语言科学的教研发展。 「赵元任语言科学奖」的设立秉持香港理工大学校训——「开物成务，励学利民」的精神，将推进和提升相关领域世界级的研究水平和应用，为人类福祉作出贡献。`,
  },
  [Language.TC]: {
    title: "主辦單位",
    description: `承蒙趙元任家屬允准，香港理工大學人文學院得以創立「趙元任語言科學獎」，並成為主辦單位。理大人文學院是語言、傳意、歷史、文化和科技之教學與研究薈萃之地，同時強調知識的探索與轉移。其語言科學研究涵蓋領域廣泛，甚具影響力；多位享譽國際的學者和專家雲集學院之內，精研中國語言學、語言科學及技術、英語語言傳意、言語治療、雙語語言研究及翻譯學等範疇的重要課題。學院秉承趙元任教授對語言學的貢獻和研究精神，積極開拓語言科學的教研發展。「趙元任語言科學獎」的設立秉持香港理工大學校訓——「開物成務，勵學利民」的精神，將推進和提升相關領域世界級的研究水平和應用，為人類福祉作出貢獻。`,
  },
};
