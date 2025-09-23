import { Language } from "../../context";

type AwardKeys =
  | "title"
  | "intro"
  | "lifetimeAchievementAwardIntro"
  | "lifetimeAchievementAwardImg"
  | "lifetimeAchievementAward_1"
  | "lifetimeAchievementAward_2"
  | "lifetimeAchievementAward_3"
  | "earlyCareerContributionAwardIntro"
  | "earlyCareerContributionAwardImg"
  | "earlyCareerContributionAward_1"
  | "earlyCareerContributionAward_2"
  | "earlyCareerContributionAward_3"
  | "earlyCareerContributionAward_4"
  | "below_45"
  | "sharedAwards"
  | "sharedAwardsIntro"
  | "numberOfAwards"
  | "numberOfAwardsIntro"
  | "numberOfAwardsIntroPlus";

export const awardTrilingualText: Record<
  Language,
  Record<AwardKeys, string>
> = {
  [Language.EN]: {
    title: "AWARDS",
    intro:
      "Two awards will be given biennially, namely Lifetime Achievement Award and Early Career Contribution Award. The Prize will be presented by the President of The Hong Kong Polytechnic University. Consideration for the awards will be based on individuals’ contributions, regardless of their races, nationalities, genders and religious affiliations.",

    // Lifetime Achievement Award
    lifetimeAchievementAwardIntro:
      "This award is conferred to a senior individual whose academic life has been devoted to language science studies and who has made long-term outstanding contributions to the field. The following requirements must be met:",
    lifetimeAchievementAwardImg: "/images/awards/LAA-EN_3x.avif",
    lifetimeAchievementAward_1:
      "The awardee must demonstrate sustained engagement in the study of language science;",
    lifetimeAchievementAward_2:
      "The awardee’s scholarship should have been widely acknowledged as pioneering and internationally acclaimed in language science research; and",
    lifetimeAchievementAward_3:
      "The awardee’s research findings should have led to major breakthroughs and have far-reaching impacts in the field around the world.",

    // Early Career Contribution Award
    earlyCareerContributionAwardIntro:
      "This award is conferred to a junior individual who has made outstanding contributions to language science. The following requirements must be met:",
    earlyCareerContributionAwardImg: "/images/awards/ECCA-EN_3x.avif",
    earlyCareerContributionAward_1:
      "The awardee should pursue language science research and play an active and key role in the field;",
    earlyCareerContributionAward_2:
      "The awardee’s research findings should have resulted in breakthroughs in language science research at an international level;",
    earlyCareerContributionAward_3:
      "The awardee should be internationally recognised, and demonstrate outstanding leadership and impact to the field; and",
    earlyCareerContributionAward_4:
      "The awardee should be aged 45 or below* by the nomination deadline.",
    below_45:
      "*Aged 45 or below refers to individuals who have not yet reached their 46th birthday on the date of application deadline.",

    sharedAwards: "Shared Awards",
    sharedAwardsIntro:
      "Both the Lifetime Achievement Award and the Early Career Contribution Award can be Shared Awards. In the case of a Shared Award, all the requirements must be met by all awardees.",
    numberOfAwards: "Number of Awards and Cash Prizes",
    numberOfAwardsIntro:
      "Normally only one award can be given for each category during each prize cycle. The Prize comes with cash awards of US$100,000* (Lifetime Achievement) and US$50,000* (Early Career Contribution). The same Award can be given to a recipient only once in his or her lifetime. The awardees will be recognised at a ceremony held by The Hong Kong Polytechnic University, which will also feature a distinguished lecture in the Faculty of Humanities.",
    numberOfAwardsIntroPlus:
      "*The Organiser reserves the right to adjust the prize amount and its distribution to awardees based on prevailing circumstances.",
  },
  [Language.SC]: {
    title: "奖项",
    intro:
      "每两年颁发一次，设有「终身成就奖」及「杰出青年学者奖」两个奖项，由香港理工大学校长颁授。得奖者无分种族、国籍、语言、性别、宗教信仰，机会均等。",

    // Lifetime Achievement Award
    lifetimeAchievementAwardIntro:
      "旨在表扬毕生致力于语言科学研究并长期作出卓越贡献的学者或研究者。得奖者需符合以下条件：",
    lifetimeAchievementAwardImg: "/images/awards/LAA-SC_3x.avif",
    lifetimeAchievementAward_1: "对语言科学坚持不懈进行研究；",
    lifetimeAchievementAward_2:
      "在语言科学研究上具国际领导地位和获得广泛认可；及",
    lifetimeAchievementAward_3:
      "其研究成果对全球语言科学研究发展带来重大突破和深远影响",

    // Early Career Contribution Award
    earlyCareerContributionAwardIntro:
      "旨在表扬在语言科学研究方面作出杰出贡献的青年学者或研究者。得奖者需符合以下条件：",
    earlyCareerContributionAwardImg: "/images/awards/ECCA-SC_3x.avif",
    earlyCareerContributionAward_1:
      "活跃于语言科学研究并在该领域发挥领导作用；",
    earlyCareerContributionAward_2:
      "其研究成果对全球语言科学研究发展带来重大突破；",
    earlyCareerContributionAward_3:
      "具备国际认可的学术地位，并在其研究领域展现卓越的领导力和影响力；及",
    earlyCareerContributionAward_4: "在提名限期时为45*岁或以下。",
    below_45: "*在提名截止日期时未满46岁",

    sharedAwards: "共享奖项",
    sharedAwardsIntro:
      "「终身成就奖」及「杰出青年学者奖」均可由多于一位人士共享。所有得奖者必须符合所有得奖条件。",
    numberOfAwards: "奖金及奖项人数",
    numberOfAwardsIntro:
      "「终身成就奖」和「杰出青年学者奖」的得奖者将分别获颁发美金100,000* 元和美金50,000* 元的奖金，原则上每个奖项的获奖人数每届不多于一人。得奖者不能重复获颁同一奖项。得奖者需出席香港理工大学所举办的颁奖典礼及相关活动，并担任人文学院杰出讲座系列讲者。",
    numberOfAwardsIntroPlus:
      "*主办单位可按照届时具体情况决定奖金及其分配的具体细节。",
  },
  [Language.TC]: {
    title: "獎項",
    intro:
      "每兩年頒發一次，設有「終身成就獎」及「傑出青年學者獎」兩個獎項，由香港理工大學校長頒授。評選的原則主要考慮候選人的貢獻，無分種族、國籍、語言、性別、宗教信仰。",

    // Lifetime Achievement Award
    lifetimeAchievementAwardIntro:
      "旨在表揚畢生致力於語言科學研究並長期作出卓越貢獻的學者或研究者。得獎者需符合以下條件：",
    lifetimeAchievementAwardImg: "/images/awards/LAA-TC_3x.avif",
    lifetimeAchievementAward_1: "對語言科學堅持不懈進行研究；",
    lifetimeAchievementAward_2:
      "在語言科學研究上具國際領導地位和獲得廣泛認可；及",
    lifetimeAchievementAward_3:
      "其研究成果對全球語言科學研究發展帶來重大突破和深遠影響。",

    // Early Career Contribution Award
    earlyCareerContributionAwardIntro:
      "旨在表揚在語言科學研究方面作出傑出貢獻的青年學者或研究者。得獎者需符合以下條件：",
    earlyCareerContributionAwardImg: "/images/awards/ECCA-TC_3x.avif",
    earlyCareerContributionAward_1:
      "活躍於語言科學研究並在該領域發揮領導作用；",
    earlyCareerContributionAward_2:
      "其研究成果對全球語言科學研究發展帶來重大突破；",
    earlyCareerContributionAward_3:
      "具備國際認可的學術地位，並在其研究領域展現卓越的領導力和影響力；及",
    earlyCareerContributionAward_4: "在提名限期時為45*歲或以下。",
    below_45: "*在提名截止日期時未滿46歲",

    sharedAwards: "共享獎項",
    sharedAwardsIntro:
      "「終身成就獎」及「傑出青年學者獎」均可由多於一位人士共享。所有得獎者必須符合所有得獎條件。",
    numberOfAwards: "獎金及獎項人數",
    numberOfAwardsIntro:
      "「終身成就獎」和「傑出青年學者獎」的得獎者將分別獲頒發美金100,000* 元和美金50,000* 元的獎金，原則上每個獎項的獲獎人數每屆不多於一人。得獎者不能重複獲頒同一獎項。得獎者需出席香港理工大學所舉辦的頒獎典禮及相關活動，並擔任人文學院傑出講座系列講者。",
    numberOfAwardsIntroPlus:
      "*主辦單位可按照屆時具體情況決定獎金及其分配的具體細節。",
  },
};
