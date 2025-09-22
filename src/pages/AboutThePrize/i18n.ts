import { Language } from "../../context";

type AboutPrizeKeys =
  | "title"
  | "intro"
  | "aim"
  | "commemorate"
  | "recognise"
  | "inspireFuture"
  | "languageDsc"
  | "languageScience"
  | "logo"
  | "logoDsc";

export const aboutPrizeTrilingualText: Record<
  Language,
  Record<AboutPrizeKeys, string>
> = {
  [Language.EN]: {
    title: "ABOUT THE PRIZE",
    intro: `The Yuen Ren Chao Prize in Language Science (The Prize), organised
              by The Hong Kong Polytechnic University (PolyU), is an
              international award that honours scholars and researchers who have
              made distinguished contributions to language science. The prize is
              named after the late 
              <span style="text-decoration:underline;">
                <a
                  href="https://en.wikipedia.org/wiki/Yuen_Ren_Chao"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Professor Yuen Ren Chao
                </a>
              </span>
              (1892–1982) who is widely regarded as the Father of Modern Chinese
              Language Studies. Professor Chao was a distinguished linguist and
              talented humanistic scholar, poet, composer, translator and
              educator whose influences have impacted scholars in China, Asia
              and around the world. His significant academic contributions cover
              the total spectrum of language science, ranging from highly
              technical linguistic theory to practical applications in language
              teaching. These 
              <span style="text-decoration:underline;">
                <a
                  href="https://julac-hkpu.primo.exlibrisgroup.com/discovery/collectionDiscovery?vid=852JULAC_HKPU:HKPU&amp;collectionId=81388159710003411"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  contributions
                </a>
              </span> 
              have left an indelible mark on humanities research and education
              in general.`,
    aim: "Aim",
    commemorate: "To commemorate the legacy of Professor Yuen Ren Chao",
    recognise:
      "To recognise distinguished contributions made by researchers in the field",
    inspireFuture:
      "To inspire future generations of scholars and students in language science research",
    languageScience: "Language<br />Science",
    languageDsc:
      "Language is a hallmark of human evolution and an indispensable tool for human communication. It facilitates the accumulation of knowledge and wisdom across the millennia leading to the civilisations we have today. Language scientists examine languages from multiple perspectives using interdisciplinary scientific approaches. Their scientific findings can be applied in many areas, from enhancing communication to treating speech disorders. During the past few decades, language science research has experienced rapid growth in the context of modern scientific enterprises. With the advent of language technologies and pervasive digital applications, tremendous strides have been made, new frontiers have been established, and more exciting opportunities have emerged for language scientists.",
    logo: "The Logo",
    logoDsc:
      "The free flowing ribbon-liked “C” represents the continuation and evolution of Chao’s wisdom in Language Science. Red and gold suggest noble and devotion.",
  },
  [Language.SC]: {
    title: "关于奖项",
    intro: `「赵元任语言科学奖」是由香港理工大学发起与颁发的国际殊荣，旨在表扬在语言科学研究方面有杰出贡献的学者和研究者。奖项以现代中国语言学之父<span style="text-decoration:underline;"><a
                  href="https://en.wikipedia.org/wiki/Yuen_Ren_Chao"
                  target="_blank"
                  rel="noreferrer noopener"
                >趙元任</a></span>（1892–1982）教授命名，以纪念他对语言科学所做的重大贡献。赵元任教授不仅是国际知名的语言学家，也是才华横溢的人文学者、诗人、作曲家、翻译家和教育家，影响力遍及中国、亚洲以至全球。其语言学研究范围既全面又广泛，涵盖专业语言学理论至语言教学实践应用，影响深远，<span style="text-decoration:underline;"><a
                  href="https://julac-hkpu.primo.exlibrisgroup.com/discovery/collectionDiscovery?vid=852JULAC_HKPU:HKPU&amp;collectionId=81388159710003411"
                  target="_blank"
                  rel="noreferrer noopener"
                >贡献殊伟​</a></span>。`,
    aim: "目的",
    commemorate: "紀念趙元任教授的學術貢獻",
    recognise: "表彰在語言科學領域有傑出貢獻的研究者",
    inspireFuture: "鼓勵新一代研究語言科學的學者和學生",
    languageScience: "語言科學",
    languageDsc:
      "語言是人類進化的標記，也是人類溝通不可或缺的工具。語言是知識和智慧的載體，經年累月造就了今天的文明。語言科學家運用跨學科的研究方法，從多角度剖析語言。他們的科研成果不僅能促進人類在知識和智慧層面上的交流和傳承，還可直接應用於治療人類溝通障礙等問題。近數十年來，在科技的帶動下，語言科學研究一日千里。隨著科技發展，數碼技術日益普及，語言科學家在多個研究領域均取得重大突破，並開拓嶄新的領域，展現前所未見的機遇。",

    logo: "商標設計",
    logoDsc:
      "隨意流動如緞帶形狀的「C」代表趙元任教授在語言科學方面智慧的延續和演進。紅色和金色象徵高尚和奉獻。",
  },
  [Language.TC]: {
    title: "關於獎項",
    intro: `「趙元任語言科學獎」是由香港理工大學發起與頒發國際殊榮，旨在表揚在語言科學研究方面有傑出貢獻的學者和研究者。獎項以現代中國語言學之父<span style="text-decoration:underline;"><a
                  href="https://en.wikipedia.org/wiki/Yuen_Ren_Chao"
                  target="_blank"
                  rel="noreferrer noopener"
                >趙元任</a></span>（1892–1982）教授命名，以紀念他對語言科學所做的重大貢獻。趙元任教授不僅是國際知名的語言學家，也是才華橫溢的人文學者、詩人、作曲家、翻譯家和教育家，影響力遍及中國、亞洲以至全球。其語言學研究範圍既全面又廣泛，涵蓋專業語言學理論至語言教學實踐應用，影響深遠，<span style="text-decoration:underline;"><a
                  href="https://julac-hkpu.primo.exlibrisgroup.com/discovery/collectionDiscovery?vid=852JULAC_HKPU:HKPU&amp;collectionId=81388159710003411"
                  target="_blank"
                  rel="noreferrer noopener"
                >貢獻殊偉</a></span>。`,
    aim: "目的",
    commemorate: "纪念赵元任教授的学术贡献",
    recognise: "表彰在语言科学领域有杰出贡献的研究者 ",
    inspireFuture: "鼓励新一代研究语言科学的学者和学生",
    languageScience: "语言科学",
    languageDsc:
      "语言是人类进化的标记，也是人类沟通不可或缺的工具。语言是知识和智慧的载体，经年累月造就了今天的文明。语言科学家运用跨学科的研究方法，从多角度剖析语言。他们的科研成果不仅能促进人类在知识和智慧层面上的交流和传承，还可直接应用于治疗人类沟通障碍等问题。近数十年来，在科技的带动下，语言科学研究一日千里。随着科技发展，数码技术日益普及，语言科学家在多个研究领域均取得重大突破，并开拓崭新的领域，展现前所未见的机遇。",
    logo: "商标设计",
    logoDsc:
      "随意流动如缎带形状的「C」代表赵元任教授在语言科学方面智慧的延续和演进。红色和金色象征高尚和奉献。",
  },
};
