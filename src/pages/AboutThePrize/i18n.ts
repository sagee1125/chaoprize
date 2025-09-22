import { Language } from "../../context";

type AboutPrizeKeys = "title" | "intro";

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
  },
};
