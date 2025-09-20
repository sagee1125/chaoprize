import React from "react";
import { albumIcon, MediaType, newIcon, pdfIcon, videoIcon } from "./const";

interface MediaContainerProps {
  type: MediaType;
  title: string;
  thumbnail: string;
  link: string;
}

export const MediaContainer: React.FunctionComponent<MediaContainerProps> = (
  props: MediaContainerProps
) => {
  const { title, thumbnail, type, link } = props;
  const iconMap: Record<MediaType, React.ReactNode> = {
    [MediaType.News]: newIcon,
    [MediaType.Pdf]: pdfIcon,
    [MediaType.Video]: videoIcon,
    [MediaType.Album]: albumIcon,
  };
  const icon = iconMap[type];
  return (
    <div className="w-full flex flex-col space-y-0">
      {/* 上方圖片 */}
      <div
        className="w-full relative overflow-hidden"
        style={{ paddingTop: "50%" }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={thumbnail}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover
                         transition-transform duration-[600ms] ease-in-out hover:scale-105"
          />
        </a>
      </div>

      {/* 下方子元素，高度與上方相同 */}
      <div
        className="w-full relative border-b border-r border-l border-light/70"
        style={{ paddingTop: "50%" }}
      >
        <div className="absolute top-0 left-0 w-full h-full items-start justify-start p-4">
          <div className="flex items-center gap-3 text-second">
            {icon}
            {type}
          </div>
          <p className="text-[10px] md:text-lg line-clamp-2 py-2">{title}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-main text-main hover:bg-main hover:text-white px-8 py-2 font-medium transition-colors tracking-wider"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};
