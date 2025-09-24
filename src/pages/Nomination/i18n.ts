import { Language } from "../../context";

type NominationKeys =
  | "title"
  | "submissionNNomination"
  | "submissionNNominationDesc"
  | "nominationForm"
  | "download"
  | "nominationGuidelines"
  | "selection"
  | "selection_1"
  | "selection_2"
  | "selection_3"
  | "selection_2_1"
  | "selection_2_2";

export const nominationTrilingualText: Record<
  Language,
  Record<NominationKeys, string>
> = {
  [Language.EN]: {
    title: "NOMINATION",
    submissionNNomination: "Submission of Nomination",
    submissionNNominationDesc:
      "The nomination form should be completed in English.",
    nominationForm: "Nomination Form",
    download: "",
    nominationGuidelines: "Nomination Guidelines",
    selection: "Selection",
    selection_1:
      "The Faculty of Humanities will establish a Selection Committee responsible for shortlisting the candidates, appointing experts as reviewers, and confirming the awardees.",
    selection_2:
      "The Selection Committee consists of a Chairperson and at least four members. The members are appointed by the Dean of Faculty of Humanities on behalf of the Organising Committee of the Prize. The members of the Selection Committee are as follows:",
    selection_2_1: `<span style="font-weight: 700;">Chairperson</span>: Dean of the Faculty of Humanities, The Hong Kong Polytechnic University or his/her appointee`,
    selection_2_2: `<span style="font-weight: 700;">Members</span>: World-renowned scholars and academic leaders in the field`,
    selection_3:
      "The Selection Committee will make a shortlist from the valid nominations. Each shortlisted candidate will then be reviewed by at least three expert reviewers independently. These expert reviewers are eminent scholars or leaders in the field appointed by the Selection Committee. They will evaluate the candidate’s suitability for the award and make a recommendation to the Selection Committee. Upon receiving the recommendation from the expert reviewers, the Selection Committee will make a final decision.",
  },
  [Language.SC]: {
    title: "提名",
    submissionNNomination: "提名过程",
    submissionNNominationDesc: "详情请参阅英文版本。",
    nominationForm: "提名表格",
    download: "下载提名表格：",
    nominationGuidelines: "提名规则",
    selection: "遴选过程",
    selection_1:
      "人文学院将成立遴选委员会，负责拣选入围名单、委任专家评审并确定最终得奖者名单。",
    selection_2:
      "遴选委员会由一位主席和不少于四位委员组成，委员由「赵元任语言科学奖」筹备委员会经香港理工大学人文学院院长任命。遴选委员会成员如下：",
    selection_3:
      "遴选委员会从收到的有效提名中，拣选候选名单。每位候选人将由不少于三位专家进行独立评审。专家评审由遴选委员会委任，皆为国际顶尖学者和学术领袖。他们将各自就候选人的得奖资格作出评定，并分别向遴选委员提出建议。遴选委员会考虑专家建议后，确定最终得奖者名单。",
    selection_2_1: `主席：香港理工大学人文学院院长或其代表`,
    selection_2_2: `委员：由国际顶尖学者和学术领袖担任`,
  },
  [Language.TC]: {
    title: "提名",
    submissionNNomination: "提名過程",
    submissionNNominationDesc: "詳情請參閱英文版本。",
    nominationForm: "提名表格",
    download: "下載提名表格：",
    nominationGuidelines: "提名規則",
    selection: "遴選過程",
    selection_1:
      "人文學院將成立遴選委員會，負責揀選入圍名單、委任專家評審並確定最終得獎者名單。",
    selection_2:
      "遴選委員會由一位主席和不少於四位委員組成，委員由「趙元任語言科學獎」籌備委員會經香港理工大學人文學院院長任命。遴選委員會成員如下：",
    selection_3:
      "遴選委員會從收到的有效提名中，揀選候選名單。每位候選人將由不少於三位專家進行獨立評審。專家評審由遴選委員會委任，皆為國際頂尖學者和學術領袖。他們將各自就候選人的得獎資格作出評定，並分別向遴選委員提出建議。遴選委員會考慮專家建議後，確定最終得獎者名單。",
    selection_2_1: `主席：香港理工大學人文學院院長或其代表`,
    selection_2_2: `委員：由國際頂尖學者和學術領袖擔任`,
  },
};
