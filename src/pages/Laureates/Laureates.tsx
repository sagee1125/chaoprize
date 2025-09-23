import React from "react";
import { useLanguage } from "../../context";
import { SectionBanner } from "../../components";
import { laureatesTrilingualText } from "./i18n";

export const Laureates: React.FC = () => {
  const { lang } = useLanguage();
  const laureatesText = laureatesTrilingualText[lang];
  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white font-enzh`}
    >
      <SectionBanner
        title={laureatesText.title}
        href={
          "https://www.polyu.edu.hk/fh/news-and-events/news/2024/the-first-yuen-ren-chao-prize-in-language-sciences-announced/?sc_lang=" +
          lang
        }
      />
      <div className="lg:px-[300px] px-4 flex flex-col gap-10 text-dark text-[10px] md:text-lg/7 !font-thin py-8 md:py-20">
        <img
          src={laureatesText.bannerImg}
          alt={``}
          className="w-full h-auto object-cover"
        />
        <div className="grid grid-cols-[1fr,2fr] gap-x-12 gap-y-20">
          <div>
            <img
              src={"/images/laureates/Prof_Peter_Hagoort.avif"}
              alt={``}
              className="w-full h-auto object-cover"
            />
            <p className="py-4 text-xl">{laureatesText.Hagoort}</p>
          </div>
          <div className="space-y-4 px-8">
            <p className="text-3xl">{laureatesText.academicLeadership}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: laureatesText.HagoortAcademicLeadership,
              }}
            />
            <p className="text-3xl pt-6">
              {laureatesText.pioneeringContributions}
            </p>
            <p>{laureatesText.HagoortPioneeringContributions}</p>
            <p className="text-3xl pt-6">Recognition and Award</p>
            <p>
              Prof. Hagoort received the Yuen Ren Chao Prize in Language Science
              for his distinguished contributions to the interdisciplinary
              studies in cognitive neuroscience and the understanding of human
              language processing in the brain.
            </p>

            <video
              src={
                process.env.PUBLIC_URL +
                "/images/laureates/Prof_Peter_Hagoort.mp4"
              }
              autoPlay
              muted
              controls
              className="w-full h-auto object-cover py-8"
            />
          </div>
        </div>
        <hr className="border-dark bg-dark" />

        <div className="grid grid-cols-[1fr,2fr] gap-x-12 gap-y-20">
          <div>
            <img
              src={"/images/laureates/Prof_Wang.avif"}
              alt={``}
              className="w-full h-auto object-cover"
            />
            <p className="py-4 text-xl">Prof. William Shiyuan Wang</p>
          </div>
          <div className="space-y-4 px-8">
            <p className="text-3xl">{laureatesText.academicLeadership}</p>
            <p>
              <span className="font-bold">Prof. Wang</span> was born and grew up
              in China. He received his PhD in Linguistics from the University
              of Michigan. He served as a Professor of Linguistics at the
              University of California at Berkeley for more than 30 years, where
              he supervised over 30 PhD dissertations. He was the first to
              initiate a course on the biological foundation of language. He was
              also the first to use computers to compile a large database to
              study the historical development of Chinese dialects. He founded
              the Journal of Chinese Linguistics in 1973 and served as its
              Editor-in-Chief until 2018. He was elected President of the
              International Association of Chinese Linguistics when it was
              founded in 1992 in Singapore. He has served as a visiting
              professor in India, Italy, Japan, and Sweden. After relocation to
              Hong Kong, he taught as Chair Professor of Language Engineering at
              the City University of Hong Kong, and as Research Professor at the
              Chinese University of Hong Kong. He has served as member of
              several panels at the Hong Kong Research Grants Council. He is now
              Chair Professor of Language and Cognitive Sciences in the
              Department of Chinese and Bilingual Studies at The Hong Kong
              Polytechnic University, Professor Emeritus of the University of
              California at Berkeley, and Academician of Academia Sinica.
            </p>
            <p className="text-3xl pt-6">
              {laureatesText.pioneeringContributions}
            </p>
            <p>
              Prof. Wang’s early interest in evolutionary theory, both
              biological and cultural, provided the basis of a theory of lexical
              diffusion, according to which variants of a language compete at
              different levels, and surviving variants persist into future
              generations. Recently, his interests have extended to the
              cognitive neuroscience of language across the lifespan, especially
              ageing. His honours include awards from the Guggenheim Foundation,
              the Fulbright Commission, resident fellowships for advanced
              studies at Stanford, Bellagio (Italy), Kyoto; Fellow of the
              Linguistic Society of America; Lifetime Achievement Award from the
              Shanghai Anthropological Society, Honorary Professor of Peking
              University, among others, Honorary Doctor of Humane Letters from
              the University of Chicago, and Honorary Degree of Doctor of
              Humanities honoris causa from University of Macau.
            </p>
            <p className="text-3xl pt-6">Recognition and Award</p>
            <p>
              Prof. Wang received the Yuen Ren Chao Prize in Language Science
              for his distinguished contributions to the interdisciplinary
              studies in Chinese linguistics, evolutionary linguistics, and the
              cognitive neuroscience of language and ageing.
            </p>

            <video
              src={process.env.PUBLIC_URL + "/images/laureates/Prof_Wang.mp4"}
              autoPlay
              muted
              controls
              className="w-full h-auto object-cover py-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
