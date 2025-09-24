import { Language } from "../../context";

type ImportantDatesKeys =
  | "title"
  | "description"
  | "importantDates"
  | "soleDiscretion";

export type ImportantDateItem = {
  title: string;
  date: string;
};

export const importantDatesTrilingualText: Record<
  Language,
  Record<ImportantDatesKeys, string | ImportantDateItem[]>
> = {
  [Language.EN]: {
    title: "IMPORTANT DATES",
    description: "Important Dates for the 2026 Award",
    importantDates: [
      { title: "Announcement of the Prize", date: "July 2025" },
      { title: "Nomination Starts", date: "1 August 2025" },
      { title: "Nomination Period", date: "1 August 2025 to 31 October 2025" },
      { title: "Awardee Selection", date: "November 2025 to March 2026" },
      { title: "Announcement of Results", date: "March 2026" },
      { title: "Award Presentation Ceremony", date: "8 May 2026" },
    ],
    soleDiscretion:
      "The Faculty of Humanities of PolyU has the sole discretion to prescribe procedures or additional details other than those mentioned above as appropriate to suit specific circumstances, without prior notification.<br /><br />PolyU reserves the right to rescind or revoke the award in all of its conditions at any time if the awardee is found to have violated applicable laws or have engaged in conduct that is deemed harmful to the academic community or the general public, causing damages to PolyU's reputation as decided by the PolyU Chao Prize Organising Committee. Such decisions shall be at the sole discretion of PolyU and shall not be subject to appeal.",
  },
  [Language.SC]: {
    title: "重要日期",
    description: "2026 年奖项重要日期",
    importantDates: [
      { title: "公布奖项", date: "2025年7月" },
      { title: "提名开始", date: "2025年8月1日" },
      { title: "提名期", date: "2025年8月1日至2025年10月31日" },
      { title: "遴选工作", date: "2025年11月至2026年3月" },
      { title: "公布结果", date: "2026年3月" },
      { title: "颁奖典礼", date: "2026年5月8日" },
    ],
    soleDiscretion:
      "理大人文学院有权根据具体情况，酌情制定除上述程序以外的其他程序或其他细节。<br />在任何情况下，若得奖者被发现违反法律，或从事被认为损害学术界或公众利益之行为，或对香港理工大学(理大)的名誉造成损害，并经理大「赵元任语言科学奖」筹备委员会确定，理大保留撤销或取消得奖者之奖项及其所获得之奖金的最终决定权，得奖者不得上诉。",
  },
  [Language.TC]: {
    title: "重要日期",
    description: "2026 年獎項重要日期",
    importantDates: [
      { title: "公佈獎項", date: "2025年7月" },
      { title: "提名開始", date: "2025年8月1日" },
      { title: "提名期", date: "2025年8月1日至2025年10月31日" },
      { title: "遴選工作", date: "2025年11月至2026年3月" },
      { title: "公佈結果", date: "2026年3月" },
      { title: "頒獎典禮", date: "2026年5月8日" },
    ],
    soleDiscretion:
      "理大人文學院有權根據具體情況，酌情制定除上述程序以外的其他程序或其他細節。<br />在任何情況下，若得獎者被發現違反法律，或從事被認為損害學術界或公眾利益之行為，或對香港理工大學(理大)的名譽造成損害，並經理大「趙元任語言科學獎」籌備委員會確定，理大保留撤銷或取消得獎者之獎項及其所獲得之獎金的最終決定權，得獎者不得上訴。",
  },
};
