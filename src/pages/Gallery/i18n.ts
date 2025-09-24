import { Language } from "../../context";

type GalleryKeys =
  | "title"
  | "photos"
  | "videos"
  | "launchCeremony"
  | "awardPresentationCeremony";

export const galleryTrilingualText: Record<
  Language,
  Record<GalleryKeys, string>
> = {
  [Language.EN]: {
    title: "GALLERY",
    photos: `Photos`,
    videos: "Videos",
    launchCeremony: "LAUNCH CEREMONY",
    awardPresentationCeremony: "AWARD PRESENTATION CEREMONY",
  },
  [Language.SC]: {
    title: "影像库",
    photos: `照片`,
    videos: "视频",
    launchCeremony: "赵元任语言科学奖成立典礼",
    awardPresentationCeremony: "赵元任语言科学奖颁奖典礼",
  },
  [Language.TC]: {
    title: "影像庫",
    photos: `照片`,
    videos: "視頻",
    launchCeremony: "趙元任語言科學獎成立典禮",
    awardPresentationCeremony: "趙元任語言科學獎成立典禮",
  },
};
