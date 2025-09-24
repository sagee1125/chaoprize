import { Language } from "../../context";

type LaureatesKeys =
  | "title"
  | "bannerImg"
  | "academicLeadership"
  | "pioneeringContributions"
  | "recognitionAward"
  | "Hagoort"
  | "HagoortAcademicLeadership"
  | "HagoortPioneeringContributions"
  | "HagoortRecognitionAward";

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
    Hagoort: "Prof. Peter Hagoort",
    HagoortAcademicLeadership: `<span style="font-weight: 700;">Prof. Hagoort</span> is Director of the Max Planck Institute for Psycholinguistics (since November 2006), and the Founding Director of the Donders Institute, Centre for Cognitive Neuroimaging (DCCN, 1999). In addition, he is a Professor in Cognitive Neuroscience at the Radboud University Nijmegen. His own research interests relate to the domain of the human language faculty and how it is instantiated in the brain. In his research, he applies neuroimaging techniques such as ERP, MEG, PET and fMRI to investigate the language system and its impairments in aphasia, dyslexia and autism. Prof. Hagoort is a recipient of the Spinoza Prize and the Heymans Prize. He is an elected member of the Royal Netherlands Academy of Arts and Sciences, the Academia Europaea, and the US National Academy of Sciences.`,
    HagoortPioneeringContributions:
      "Prof. Hagoort was the first to identify and characterise the P600 (a measurable response in the brain) as a marker of syntactic processing (Hagoort & Brown, Language and Cognitive Processes, 1993). Using multimodal methods (EEG, fMRI), he demonstrated that world knowledge is immediately integrated into sentence comprehension, challenging the standard assumption that sentence meaning is first determined and then its truth value is assessed (Hagoort et al., Science, 2004). Most recently, he found that catecholamine-related neurotransmitters can influence language processing (Tan & Hagoort, Cerebral Cortex, 2020) – this is the first study to show a neuropharmacological effect on semantic processing during sentence comprehension. He has also led the field in theorising about the neurobiology of language and developing testable models. He has developed influential theories aimed at solving the difficult binding problem for language, proposing that the left inferior gyrus plays a critical role in unification (Hagoort, TICS, 2005) and demonstrating that this unification process and neurobiological models of language processing must move beyond the classical Wernicke-Lichtheim-Geschwind model (Hagoort, Frontiers in Psychology, 2013; Hagoort, Science, 2019). His MUC (memory, unification, and control) model has been highly influential. He has also moved the field forward by urging researchers to investigate the operation of language “in its full glory” such as co-speech gestures and conversational interactions.",
    HagoortRecognitionAward:
      "Prof. Hagoort received the Yuen Ren Chao Prize in Language Science for his distinguished contributions to the interdisciplinary studies in cognitive neuroscience and the understanding of human language processing in the brain.",
  },
  [Language.SC]: {
    title: "得奖者",
    bannerImg: "/images/laureates/lifetime_award_SC_5_3x.avif",
    academicLeadership: "学术领导力",
    pioneeringContributions: "先驱贡献",
    recognitionAward: "表彰与奖励",
    Hagoort: "Peter Hagoort教授",
    HagoortAcademicLeadership: `<span style="font-weight: 700;">Peter Hagoort</span>教授自2006年11月起担任马克斯普朗克心理语言学研究所所长，也是Donders研究所认知神经影像中心的创始人（DCCN，1999年）。此外，他也是奈梅亨拉德堡大学的认知神经科学教授。其个人研究兴趣主要是人类的语言能力以及它在大脑中的认知神经机制。Hagoort教授应用ERP、MEG、PET和fMRI等多种神经影像技术来研究语言系统及其在失语症、阅读障碍和自闭症中的表现。Hagoort教授曾获斯宾诺莎奖和海曼斯奖。他也获选为荷兰皇家艺术与科学学院、欧洲科学院和美国国家科学院的院士。`,
    HagoortPioneeringContributions:
      "Hagoort教授是首位识别及描述P600 (註:一项大脑反应的电生理结果) 作为句法处理标记的学者（Hagoort & Brown，Language and Cognitive Processes，1993）。他使用多模态方法（EEG，fMRI）证明外界的知识会即时融入人们对句子的理解中，打破了先确定句子的意义才评估该句子真实价值的经典假设（Hagoort等，Science，2004）。最近，他发现了儿茶酚胺相关的神经递质可以影响语言的处理过程（Tan & Hagoort，Cerebral Cortex，2020）， 这是首项显示神经药理效应如何影响句子理解过程中语义加工的研究。他还引领了语言神经生物学的理论性研究和模型的可测试发展，提出了极具影响力的语言整合理论。他指出，左侧颞下回在整合语言的过程发挥着关键作用（Hagoort，TICS，2005），并展示这种整合过程和语言处理的神经生物学模型必须跨越传统的Wernicke-Lichtheim-Geschwind模型理论（Hagoort，Frontiers in Psychology，2013; Hagoort，Science，2019）。他的MUC（记忆、整合和控制）模型在语言科学领域影响非凡。他还促使研究人员在他的研究成果上探讨语言的整体运作模式（包括共语手势，对话交互等），带动了该领域整体向前发展。",
    HagoortRecognitionAward:
      "Hagoort教授因其在认知神经科学的跨学科研究以及对人类语言理解的神经机制而做出的杰出贡献，荣获本届之「赵元任语言科学奖」。",
  },
  [Language.TC]: {
    title: "得獎者",
    bannerImg: "/images/laureates/lifetime award_TC_3_3x.avif",
    academicLeadership: "學術領導力",
    pioneeringContributions: "先驅貢獻",
    recognitionAward: "表彰與獎勵",
    Hagoort: "Peter Hagoort教授",
    HagoortAcademicLeadership: `<span style="font-weight: 700;">Peter Hagoort教授</span>自2006年11月起擔任馬克斯普朗克心理語言學研究所所長，也是Donders研究所認知神經影像中心的創始人（DCCN，1999年）。此外，他也是奈梅亨拉德堡大學的認知神經科學教授。其個人研究興趣主要是人類的語言能力以及它在大腦中的認知神經機制。Hagoort教授應用ERP、MEG、PET和fMRI等多種神經影像技術來研究語言系統及其在失語症、閱讀障礙和自閉症中的表現。Hagoort教授曾獲斯賓諾莎獎和海曼斯獎。他也獲選為荷蘭皇家藝術與科學學院、歐洲科學院和美國國家科學院的院士。`,
    HagoortPioneeringContributions:
      "Hagoort教授是首位識別及描述P600 (註:一項大腦反應的電生理結果) 作為句法處理標記的學者（Hagoort & Brown，Language and Cognitive Processes，1993）。他使用多模態方法（EEG，fMRI）證明外界的知識會即時融入人們對句子的理解中，打破了先確定句子的意義才評估該句子真實價值的經典假設（Hagoort等，Science，2004）。最近，他發現了兒茶酚胺相關的神經遞質可以影響語言的處理過程（Tan & Hagoort，Cerebral Cortex，2020）， 這是首項顯示神經藥理效應如何影響句子理解過程中語義加工的研究。他還引領了語言神經生物學的理論性研究和模型的可測試發展，提出了極具影響力的語言整合理論。他指出，左側顳下回在整合語言的過程發揮著關鍵作用（Hagoort，TICS，2005），並展示這種整合過程和語言處理的神經生物學模型必須跨越傳統的Wernicke-Lichtheim-Geschwind模型理論（Hagoort，Frontiers in Psychology，2013; Hagoort，Science，2019）。他的MUC（記憶、整合和控制）模型在語言科學領域影響非凡。他還促使研究人員在他的研究成果上探討語言的整體運作模式（包括共語手勢，對話交互等），帶動了該領域整體向前發展。",
    HagoortRecognitionAward:
      "Hagoort教授因其在認知神經科學的跨學科研究以及對人類語言理解的神經機制而做出的傑出貢獻，榮獲本屆之「趙元任語言科學獎」。",
  },
};
