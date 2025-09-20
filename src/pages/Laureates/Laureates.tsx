import React from "react";
import { Language, useLanguage } from "../../context";
import { SectionBanner } from "../../components";

export const Laureates: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`w-full max-w-screen overflow-x-hidden pb-12 bg-white
                    ${lang === Language.EN ? "font-en" : "font-zh"}`}
    >
      <SectionBanner title="LAUREATES" />
      <div className="lg:px-[300px] px-4 flex flex-col gap-10 text-dark text-[10px] md:text-lg/7 !font-thin py-8 md:py-20">
        <img
          src={"/images/laureates/lifetime_award_EN_5_3x.avif"}
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
            <p className="py-4 text-xl">Prof. Peter Hagoort</p>
          </div>
          <div className="space-y-4 px-8">
            <p className="text-3xl">Academic Leadership</p>
            <p>
              <span className="font-bold">Prof. Hagoort</span> is Director of
              the Max Planck Institute for Psycholinguistics (since November
              2006), and the Founding Director of the Donders Institute, Centre
              for Cognitive Neuroimaging (DCCN, 1999). In addition, he is a
              Professor in Cognitive Neuroscience at the Radboud University
              Nijmegen. His own research interests relate to the domain of the
              human language faculty and how it is instantiated in the brain. In
              his research, he applies neuroimaging techniques such as ERP, MEG,
              PET and fMRI to investigate the language system and its
              impairments in aphasia, dyslexia and autism. Prof. Hagoort is a
              recipient of the Spinoza Prize and the Heymans Prize. He is an
              elected member of the Royal Netherlands Academy of Arts and
              Sciences, the Academia Europaea, and the US National Academy of
              Sciences.
            </p>
            <p className="text-3xl pt-6">Pioneering Contributions</p>
            <p>
              Prof. Hagoort was the first to identify and characterise the P600
              (a measurable response in the brain) as a marker of syntactic
              processing (Hagoort & Brown, Language and Cognitive Processes,
              1993). Using multimodal methods (EEG, fMRI), he demonstrated that
              world knowledge is immediately integrated into sentence
              comprehension, challenging the standard assumption that sentence
              meaning is first determined and then its truth value is assessed
              (Hagoort et al., Science, 2004). Most recently, he found that
              catecholamine-related neurotransmitters can influence language
              processing (Tan & Hagoort, Cerebral Cortex, 2020) – this is the
              first study to show a neuropharmacological effect on semantic
              processing during sentence comprehension. He has also led the
              field in theorising about the neurobiology of language and
              developing testable models. He has developed influential theories
              aimed at solving the difficult binding problem for language,
              proposing that the left inferior gyrus plays a critical role in
              unification (Hagoort, TICS, 2005) and demonstrating that this
              unification process and neurobiological models of language
              processing must move beyond the classical
              Wernicke-Lichtheim-Geschwind model (Hagoort, Frontiers in
              Psychology, 2013; Hagoort, Science, 2019). His MUC (memory,
              unification, and control) model has been highly influential. He
              has also moved the field forward by urging researchers to
              investigate the operation of language “in its full glory” such as
              co-speech gestures and conversational interactions.
            </p>
            <p className="text-3xl pt-6">Recognition and Award</p>
            <p>
              Prof. Hagoort received the Yuen Ren Chao Prize in Language Science
              for his distinguished contributions to the interdisciplinary
              studies in cognitive neuroscience and the understanding of human
              language processing in the brain.
            </p>

            <video
              src={"/images/laureates/Prof_Peter_Hagoort.mp4"}
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
            <p className="text-3xl">Academic Leadership</p>
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
            <p className="text-3xl pt-6">Pioneering Contributions</p>
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
              src={"/images/laureates/Prof_Wang.mp4"}
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
