import React, { useState } from "react";
import {
  albumIcon,
  MediaType,
  mediaTypeTrilingualText,
  newIcon,
  pdfIcon,
  photoIcon,
  videoIcon,
  viewTrilingualText,
} from "./const";
import { VideoModal } from "./VideoModal";
import { CirclePlay } from "lucide-react";
import { PhotoModal } from "./PhotoModal";
import { useLanguage, useSettings } from "../../context";
import { getCurrentText } from "../../utils";

export type TrilingualText = {
  en: string;
  tc: string;
  sc: string;
};
type MediaContainerProps = {
  type: MediaType;
  title: TrilingualText;
  description?: TrilingualText;
  thumbnail: string;
  link?: string;
  videoSrc?: string;
  target?: "_blank" | "_self";
  videoPreview?: boolean;
};

export const MediaContainer: React.FunctionComponent<MediaContainerProps> = (
  props: MediaContainerProps
) => {
  const {
    title,
    thumbnail,
    type,
    link,
    target = "_blank",
    description,
    videoSrc,
    videoPreview = false,
  } = props;
  const { lang } = useLanguage();

  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const { isMobile } = useSettings();

  const [isPlaying, setIsPlaying] = useState(false);
  // const [hover, setHover] = useState(false);

  const iconMap: Record<MediaType, React.ReactNode> = {
    [MediaType.News]: newIcon,
    [MediaType.Pdf]: pdfIcon,
    [MediaType.Video]: videoIcon,
    [MediaType.Album]: albumIcon,
    [MediaType.Photo]: photoIcon,
    [MediaType.Award]: photoIcon,
  };
  const icon = iconMap[type];

  const handleOpenVideoModal = (): void => {
    setOpenVideoModal(true);
  };
  const handleOpenPhotoModal = (): void => {
    setOpenPhotoModal(true);
  };
  const typeText = mediaTypeTrilingualText[lang][type];
  const viewText = viewTrilingualText[lang].view;
  const titleText = getCurrentText(title, lang);
  const descriptionText = description ? getCurrentText(description, lang) : "";
  if ([MediaType.News, MediaType.Pdf].includes(type))
    return (
      <div className="w-full flex flex-col space-y-0">
        {/* 上方圖片 */}
        <div
          className="w-full relative overflow-hidden"
          style={{ paddingTop: "50%" }}
        >
          <a
            href={link}
            {...(target === "_blank"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { target: "_self" })}
          >
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
          className="w-full relative border-b border-r border-l border-main/20 text-[8px] md:text-lg"
          style={{ paddingTop: isMobile ? "70%" : "50%" }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-1 md:p-4">
            <div className="overflow-hidden">
              <div className="flex items-center gap-1 md:gap-3 text-second">
                {icon}
                {typeText}
              </div>

              <p
                className={`overflow-hidden display-[-webkit-box] -webkit-box-orient-vertical ${
                  description ? "line-clamp-1 pt-2 md:pb-1" : "line-clamp-2"
                }`}
              >
                {titleText}
              </p>
              {description && (
                <p className="line-clamp-1 pb-2 hidden md:block">
                  {descriptionText}
                </p>
              )}
            </div>
            <a
              href={link}
              {...(target === "_blank"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { target: "_self" })}
              className="px-3 py-1 md:px-8 
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
            >
              {viewText}
            </a>
          </div>
        </div>
      </div>
    );

  if (type === MediaType.Video)
    return (
      <>
        <div className="w-full flex flex-col space-y-0">
          {/* 上方圖片 */}
          <div
            className="w-full relative overflow-hidden border border-black/20"
            style={{ paddingTop: "50%" }}
          >
            {videoPreview ? (
              // <video
              //   src={videoSrc}
              //   poster={thumbnail}
              //   onMouseEnter={() => setHover(true)}
              //   onMouseLeave={() => setHover(false)}
              //   controls={hover}
              //   className="absolute top-0 left-0 w-full h-full object-cover"
              // />

              <>
                {!isPlaying ? (
                  // 顯示縮略圖 + 中間播放 icon
                  <div
                    className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img
                      src={thumbnail}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {/* 中間播放 icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CirclePlay
                        strokeWidth={1.5}
                        className="w-8 h-8 md:w-16 md:h-16 text-white opacity-100 hover:opacity-80 transition-opacity"
                      />
                    </div>
                  </div>
                ) : (
                  // 顯示影片
                  <video
                    src={process.env.PUBLIC_URL + videoSrc}
                    controls
                    autoPlay
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                )}
              </>
            ) : (
              <img
                role="button"
                onClick={handleOpenVideoModal}
                src={thumbnail}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover
                         transition-transform duration-[600ms] ease-in-out hover:scale-105"
              />
            )}
          </div>

          {/* 下方子元素，高度與上方相同 */}
          <div
            className="w-full relative border-b border-r border-l border-main/20 text-[8px] md:text-lg"
            style={{ paddingTop: isMobile ? "70%" : "50%" }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-1 md:p-4">
              <div>
                <div className="flex items-center gap-1 md:gap-3  text-second">
                  {icon}
                  {typeText}
                </div>
                <p className="line-clamp-1 pt-2 md:pb-1">{titleText}</p>
                <p className="line-clamp-1 pb-2 hidden md:block">
                  {descriptionText}
                </p>
              </div>
              <button
                onClick={handleOpenVideoModal}
                className="px-3 py-1 md:px-8  
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
              >
                {viewText}
              </button>
            </div>
          </div>
        </div>

        {videoSrc && (
          <VideoModal
            src={videoSrc}
            open={openVideoModal}
            onClose={() => {
              setOpenVideoModal(false);
            }}
          />
        )}
      </>
    );

  if (type === MediaType.Album)
    return (
      <>
        <div className="w-full flex flex-col space-y-0">
          {/* 上方圖片 */}
          <div
            className="w-full relative overflow-hidden border border-black/20"
            style={{ paddingTop: "50%" }}
          >
            <a
              href={link}
              {...(target === "_blank"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { target: "_self" })}
            >
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
            className="w-full relative border-b border-r border-l border-main/20 text-[8px] md:text-lg"
            style={{ paddingTop: isMobile ? "70%" : "50%" }}
          >
            <div className="absolute top-0 left-0 w-full h-full items-start flex flex-col justify-between p-1 md:p-4">
              <div>
                {" "}
                <div className="flex items-center gap-1 md:gap-3  text-second">
                  {icon}
                  {typeText}
                </div>
                <p className="line-clamp-1 md:py-2">{titleText}</p>
              </div>
              <a
                href={link}
                {...(target === "_blank"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { target: "_self" })}
                className="px-3 py-1 md:px-8 
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
              >
                {viewText}
              </a>
            </div>
          </div>
        </div>
      </>
    );

  if ([MediaType.Photo, MediaType.Award].includes(type))
    return (
      <>
        <div className="w-full flex flex-col space-y-0">
          {/* 上方圖片 */}
          <div
            className="w-full relative overflow-hidden border border-black/20"
            style={{ paddingTop: "50%" }}
          >
            <img
              src={thumbnail}
              alt=""
              role="button"
              onClick={handleOpenPhotoModal}
              className="absolute top-0 left-0 w-full h-full object-cover
                         transition-transform duration-[600ms] ease-in-out hover:scale-105"
            />
          </div>

          <div
            className="w-full relative border-b border-r border-l border-main/20 text-[8px] md:text-base"
            style={{ paddingTop: isMobile ? "40%" : "25%" }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-1 md:px-4 md:pb-4">
              <div className="flex items-center gap-1 md:gap-3  text-second">
                {icon}
                {typeText}
              </div>

              <button
                onClick={handleOpenPhotoModal}
                className="px-3 py-1 md:px-8  
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
              >
                {viewText}
              </button>
            </div>
          </div>
        </div>

        {thumbnail && (
          <PhotoModal
            src={thumbnail}
            open={openPhotoModal}
            onClose={() => {
              setOpenPhotoModal(false);
            }}
          />
        )}
      </>
    );

  return (
    <div className="w-full flex flex-col space-y-0">
      {/* 上方圖片 */}
      <div
        className="w-full relative overflow-hidden"
        style={{ paddingTop: "50%" }}
      >
        <a
          href={link}
          {...(target === "_blank"
            ? { target: "_blank", rel: "noopener noreferrer" }
            : { target: "_self" })}
        >
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
        className="w-full relative border-b border-r border-l border-main/20 text-[8px] md:text-lg"
        style={{ paddingTop: isMobile ? "70%" : "50%" }}
      >
        <div className="absolute top-0 left-0 w-full h-full items-start justify-start p-1 md:p-4">
          <div className="flex items-center gap-3 text-second">
            {icon}
            {typeText}
          </div>
          <p className="line-clamp-2 py-2">{titleText}</p>
          <a
            href={link}
            {...(target === "_blank"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { target: "_self" })}
            className="px-3 py-1 md:px-8  
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
          >
            {viewText}
          </a>
        </div>
      </div>
    </div>
  );
};
