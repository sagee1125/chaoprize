import { Language } from "../../context";

type TranslationKeys =
  | "privacyPolicy"
  | "termsOfUse"
  | "accessibility"
  | "sitemap"
  | "copyRight";

export const trilingualText: Record<
  Language,
  Record<TranslationKeys, string>
> = {
  [Language.EN]: {
    privacyPolicy: "Privacy Policy Statement",
    termsOfUse: "Terms of Use",
    accessibility: "Accessibility",
    sitemap: "Sitemap",
    copyRight:
      "Copyright © 2025 Faculty of Humanities, The Hong Kong Polytechnic University. All Rights Reserved.",
  },
  [Language.SC]: {
    copyRight: "© 2025 版权属香港理工大学人文学院所有",

    privacyPolicy: "隐私权政策声明",
    termsOfUse: "使用条款",
    accessibility: "无障碍网页",
    sitemap: "网站指南",
  },
  [Language.TC]: {
    copyRight: "© 2025 版權屬香港理工大學人文學院所有",
    privacyPolicy: "私隱政策聲明",
    termsOfUse: "使用條款",
    accessibility: "無障礙網頁",
    sitemap: "網站指南",
  },
};
