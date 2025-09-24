import { Language } from "../../context";

type LaureatesKeys =
  | "title"
  | "bannerImg"
  | "academicLeadership"
  | "pioneeringContributions"
  | "recognitionAward"
  | "hagoort"
  | "hagoortAcademicLeadership"
  | "hagoortPioneeringContributions"
  | "hagoortRecognitionAward"
  | "william"
  | "williamAcademicLeadership"
  | "williamPioneeringContributions"
  | "williamRecognitionAward";

export const laureatesTrilingualText: Record<
  Language,
  Record<LaureatesKeys, string>
> = {
  [Language.EN]: {
    title: "LAUREATES",
    bannerImg: "/images/laureates/lifetime_award_EN_5_3x.avif",
    academicLeadership: "Academic Leadership",
    pioneeringContributions: "Pioneering Contributions",
    recognitionAward: "Recognition and Award",
    hagoort: "Prof. Peter Hagoort",
    hagoortAcademicLeadership: `<span style="font-weight: 700;">Prof. Hagoort</span> is Director of the Max Planck Institute for Psycholinguistics (since November 2006), and the Founding Director of the Donders Institute, Centre for Cognitive Neuroimaging (DCCN, 1999). In addition, he is a Professor in Cognitive Neuroscience at the Radboud University Nijmegen. His own research interests relate to the domain of the human language faculty and how it is instantiated in the brain. In his research, he applies neuroimaging techniques such as ERP, MEG, PET and fMRI to investigate the language system and its impairments in aphasia, dyslexia and autism. Prof. Hagoort is a recipient of the Spinoza Prize and the Heymans Prize. He is an elected member of the Royal Netherlands Academy of Arts and Sciences, the Academia Europaea, and the US National Academy of Sciences.`,
    hagoortPioneeringContributions:
      "Prof. Hagoort was the first to identify and characterise the P600 (a measurable response in the brain) as a marker of syntactic processing (Hagoort & Brown, Language and Cognitive Processes, 1993). Using multimodal methods (EEG, fMRI), he demonstrated that world knowledge is immediately integrated into sentence comprehension, challenging the standard assumption that sentence meaning is first determined and then its truth value is assessed (Hagoort et al., Science, 2004). Most recently, he found that catecholamine-related neurotransmitters can influence language processing (Tan & Hagoort, Cerebral Cortex, 2020) – this is the first study to show a neuropharmacological effect on semantic processing during sentence comprehension. He has also led the field in theorising about the neurobiology of language and developing testable models. He has developed influential theories aimed at solving the difficult binding problem for language, proposing that the left inferior gyrus plays a critical role in unification (Hagoort, TICS, 2005) and demonstrating that this unification process and neurobiological models of language processing must move beyond the classical Wernicke-Lichtheim-Geschwind model (Hagoort, Frontiers in Psychology, 2013; Hagoort, Science, 2019). His MUC (memory, unification, and control) model has been highly influential. He has also moved the field forward by urging researchers to investigate the operation of language “in its full glory” such as co-speech gestures and conversational interactions.",
    hagoortRecognitionAward:
      "Prof. Hagoort received the Yuen Ren Chao Prize in Language Science for his distinguished contributions to the interdisciplinary studies in cognitive neuroscience and the understanding of human language processing in the brain.",
    william: "Prof. William Shiyuan Wang",
    williamAcademicLeadership: `<span style="font-weight: 700;">Prof. Wang</span> was born and grew up in China. He received his PhD in Linguistics from the University of Michigan. He served as a Professor of Linguistics at the University of California at Berkeley for more than 30 years, where he supervised over 30 PhD dissertations. He was the first to initiate a course on the biological foundation of language. He was also the first to use computers to compile a large database to study the historical development of Chinese dialects. He founded the Journal of Chinese Linguistics in 1973 and served as its Editor-in-Chief until 2018. He was elected President of the International Association of Chinese Linguistics when it was founded in 1992 in Singapore. He has served as a visiting professor in India, Italy, Japan, and Sweden. After relocation to Hong Kong, he taught as Chair Professor of Language Engineering at the City University of Hong Kong, and as Research Professor at the Chinese University of Hong Kong. He has served as member of several panels at the Hong Kong Research Grants Council. He is now Chair Professor of Language and Cognitive Sciences in the Department of Chinese and Bilingual Studies at The Hong Kong Polytechnic University, Professor Emeritus of the University of California at Berkeley, and Academician of Academia Sinica.`,
    williamPioneeringContributions:
      "Prof. Wang’s early interest in evolutionary theory, both biological and cultural, provided the basis of a theory of lexical diffusion, according to which variants of a language compete at different levels, and surviving variants persist into future generations. Recently, his interests have extended to the cognitive neuroscience of language across the lifespan, especially ageing. His honours include awards from the Guggenheim Foundation, the Fulbright Commission, resident fellowships for advanced studies at Stanford, Bellagio (Italy), Kyoto; Fellow of the Linguistic Society of America; Lifetime Achievement Award from the Shanghai Anthropological Society, Honorary Professor of Peking University, among others, Honorary Doctor of Humane Letters from the University of Chicago, and Honorary Degree of Doctor of Humanities honoris causa from University of Macau.",
    williamRecognitionAward:
      "Prof. Wang received the Yuen Ren Chao Prize in Language Science for his distinguished contributions to the interdisciplinary studies in Chinese linguistics, evolutionary linguistics, and the cognitive neuroscience of language and ageing.",
  },
  [Language.SC]: {
    title: "得奖者",
    bannerImg: "/images/laureates/lifetime_award_SC_5_3x.avif",
    academicLeadership: "学术领导力",
    pioneeringContributions: "先驱贡献",
    recognitionAward: "表彰与奖励",
    hagoort: "Peter Hagoort教授",
    hagoortAcademicLeadership: `<span style="font-weight: 700;">Peter Hagoort</span>教授自2006年11月起担任马克斯普朗克心理语言学研究所所长，也是Donders研究所认知神经影像中心的创始人（DCCN，1999年）。此外，他也是奈梅亨拉德堡大学的认知神经科学教授。其个人研究兴趣主要是人类的语言能力以及它在大脑中的认知神经机制。Hagoort教授应用ERP、MEG、PET和fMRI等多种神经影像技术来研究语言系统及其在失语症、阅读障碍和自闭症中的表现。Hagoort教授曾获斯宾诺莎奖和海曼斯奖。他也获选为荷兰皇家艺术与科学学院、欧洲科学院和美国国家科学院的院士。`,
    hagoortPioneeringContributions:
      "Hagoort教授是首位识别及描述P600 (註:一项大脑反应的电生理结果) 作为句法处理标记的学者（Hagoort & Brown，Language and Cognitive Processes，1993）。他使用多模态方法（EEG，fMRI）证明外界的知识会即时融入人们对句子的理解中，打破了先确定句子的意义才评估该句子真实价值的经典假设（Hagoort等，Science，2004）。最近，他发现了儿茶酚胺相关的神经递质可以影响语言的处理过程（Tan & Hagoort，Cerebral Cortex，2020）， 这是首项显示神经药理效应如何影响句子理解过程中语义加工的研究。他还引领了语言神经生物学的理论性研究和模型的可测试发展，提出了极具影响力的语言整合理论。他指出，左侧颞下回在整合语言的过程发挥着关键作用（Hagoort，TICS，2005），并展示这种整合过程和语言处理的神经生物学模型必须跨越传统的Wernicke-Lichtheim-Geschwind模型理论（Hagoort，Frontiers in Psychology，2013; Hagoort，Science，2019）。他的MUC（记忆、整合和控制）模型在语言科学领域影响非凡。他还促使研究人员在他的研究成果上探讨语言的整体运作模式（包括共语手势，对话交互等），带动了该领域整体向前发展。",
    hagoortRecognitionAward:
      "Hagoort教授因其在认知神经科学的跨学科研究以及对人类语言理解的神经机制而做出的杰出贡献，荣获本届之「赵元任语言科学奖」。",
    william: "王士元教授",
    williamAcademicLeadership:
      "王士元教授于中国出生及成长，在密西根大学取得语言学博士学位。曾任柏克莱加州大学语言学教授达30余年，并指导30多篇博士论文。他率先开始教授关于语言的生物基础的课程，并首度运用电脑建立起中国方言的数据库以研究汉语的演变。1973年创办《中国语言学报》并任主编至2018年，1992年国际中国语言学学会于新加坡成立时，当选为首届会长。曾在印度、义大利、日本和瑞典任客座教授。1996年移居香港后，历任香港城市大学语言工程讲座教授、香港中文大学研究教授，曾多次担任港研资局学科小组的成员。现为香港理工大学中文及双语学系语言与认知科学讲座教授、柏克莱加州大学荣休教授及中研院院士。",
    williamPioneeringContributions:
      "他早期对演化论的兴趣，包括生物演化及文化演化，奠定了词汇扩散理论的基础。他提出语言的各个变体在不同层次上相互竞争，胜出的变体则能传播到后代。近年来，他的研究兴趣拓展到从认知神经科学角度探索人类一生中的语言发展，尤其关注老年化的相关议题。王教授曾获多项殊荣，包括古根汉基金会和富布赖特委员会的研究奖助；史丹福、义大利贝拉乔和京都高等研究院的驻院奖助；上海人类学会终身成就奖、以及包括北京大学在内的多所大学的荣誉教授、美国语言学会会士、芝加哥大学荣誉人文博士学位及澳门大学荣誉人文学博士学位。",
    williamRecognitionAward:
      "王教授因其在中国语言学、演化语言学、认知神经语言学和老年化的跨学科研究的杰出贡献，荣获本届之「赵元任语言科学奖」。",
  },
  [Language.TC]: {
    title: "得獎者",
    bannerImg: "/images/laureates/lifetime award_TC_3_3x.avif",
    academicLeadership: "學術領導力",
    pioneeringContributions: "先驅貢獻",
    recognitionAward: "表彰與獎勵",
    hagoort: "Peter Hagoort教授",
    hagoortAcademicLeadership: `<span style="font-weight: 700;">Peter Hagoort教授</span>自2006年11月起擔任馬克斯普朗克心理語言學研究所所長，也是Donders研究所認知神經影像中心的創始人（DCCN，1999年）。此外，他也是奈梅亨拉德堡大學的認知神經科學教授。其個人研究興趣主要是人類的語言能力以及它在大腦中的認知神經機制。Hagoort教授應用ERP、MEG、PET和fMRI等多種神經影像技術來研究語言系統及其在失語症、閱讀障礙和自閉症中的表現。Hagoort教授曾獲斯賓諾莎獎和海曼斯獎。他也獲選為荷蘭皇家藝術與科學學院、歐洲科學院和美國國家科學院的院士。`,
    hagoortPioneeringContributions:
      "Hagoort教授是首位識別及描述P600 (註:一項大腦反應的電生理結果) 作為句法處理標記的學者（Hagoort & Brown，Language and Cognitive Processes，1993）。他使用多模態方法（EEG，fMRI）證明外界的知識會即時融入人們對句子的理解中，打破了先確定句子的意義才評估該句子真實價值的經典假設（Hagoort等，Science，2004）。最近，他發現了兒茶酚胺相關的神經遞質可以影響語言的處理過程（Tan & Hagoort，Cerebral Cortex，2020）， 這是首項顯示神經藥理效應如何影響句子理解過程中語義加工的研究。他還引領了語言神經生物學的理論性研究和模型的可測試發展，提出了極具影響力的語言整合理論。他指出，左側顳下回在整合語言的過程發揮著關鍵作用（Hagoort，TICS，2005），並展示這種整合過程和語言處理的神經生物學模型必須跨越傳統的Wernicke-Lichtheim-Geschwind模型理論（Hagoort，Frontiers in Psychology，2013; Hagoort，Science，2019）。他的MUC（記憶、整合和控制）模型在語言科學領域影響非凡。他還促使研究人員在他的研究成果上探討語言的整體運作模式（包括共語手勢，對話交互等），帶動了該領域整體向前發展。",
    hagoortRecognitionAward:
      "Hagoort教授因其在認知神經科學的跨學科研究以及對人類語言理解的神經機制而做出的傑出貢獻，榮獲本屆之「趙元任語言科學獎」。",
    william: "王士元教授",
    williamAcademicLeadership:
      "王士元教授於中國出生及成長，在密西根大學取得語言學博士學位。曾任柏克萊加州大學語言學教授達30餘年，並指導30多篇博士論文。他率先開始教授關於語言的生物基礎的課程，並首度運用電腦建立起中國方言的數據庫以研究漢語的演變。1973年創辦《中國語言學報》並任主編至2018年，1992年國際中國語言學學會於新加坡成立時，當選為首屆會長。曾在印度、義大利、日本和瑞典任客座教授。1996年移居香港後，歷任香港城市大學語言工程講座教授、香港中文大學研究教授，曾多次擔任香港研資局學科小組的成員。現為香港理工大學中文及雙語學系語言與認知科學講座教授、柏克萊加州大學榮休教授及中研院院士。",
    williamPioneeringContributions:
      "他早期對演化論的興趣，包括生物演化及文化演化，奠定了詞彙擴散理論的基礎。他提出語言的各個變體在不同層次上相互競爭，勝出的變體則能傳播到後代。近年來，他的研究興趣拓展到從認知神經科學角度探索人類一生中的語言發展，尤其關注老年化的相關議題。王教授曾獲多項殊榮，包括古根漢基金會和富布賴特委員會的研究獎助；史丹福、義大利貝拉喬和京都高等研究院的駐院獎助；上海人類學會終身成就獎、以及包括北京大學在內的多所大學的榮譽教授、美國語言學會會士、芝加哥大學榮譽人文博士學位及澳門大學榮譽人文學博士學位。",
    williamRecognitionAward:
      "王教授因其在中國語言學、演化語言學、認知神經語言學和老年化的跨學科研究的傑出貢獻，榮獲本屆之「趙元任語言科學獎」。",
  },
};
