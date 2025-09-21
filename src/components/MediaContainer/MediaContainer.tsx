import React, { useState } from "react";
import { albumIcon, MediaType, newIcon, pdfIcon, videoIcon } from "./const";
import { VideoModal } from "./VideoModal";
import { CirclePlay } from "lucide-react";

interface MediaContainerProps {
  type: MediaType;
  title: string;
  description?: string;
  thumbnail: string;
  link?: string;
  videoSrc?: string;
  target?: "_blank" | "_self";
  videoPreview?: boolean;
}

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

  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [hover, setHover] = useState(false);

  const iconMap: Record<MediaType, React.ReactNode> = {
    [MediaType.News]: newIcon,
    [MediaType.Pdf]: pdfIcon,
    [MediaType.Video]: videoIcon,
    [MediaType.Album]: albumIcon,
  };
  const icon = iconMap[type];

  const handleOpenVideoModal = (): void => {
    setOpenVideoModal(true);
  };
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
          className="w-full relative border-b border-r border-l border-light/70 text-[8px] md:text-lg"
          style={{ paddingTop: "50%" }}
        >
          <div className="absolute top-0 left-0 w-full h-full items-start justify-start p-1 md:p-4">
            <div className="flex items-center gap-1 md:gap-3  text-second">
              {icon}
              {type}
            </div>
            <p
              className={`${
                description
                  ? "line-clamp-1 md:pt-2 md:pb-1"
                  : "line-clamp-1 md:line-clamp-2 md:py-2"
              }`}
            >
              {title}
            </p>
            {description && (
              <p className="line-clamp-1 pb-2 hidden md:block">{description}</p>
            )}
            <a
              href={link}
              {...(target === "_blank"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { target: "_self" })}
              className="px-3 py-1 md:px-8 md:py-2 
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
            >
              View
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
                    src={videoSrc}
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
            className="w-full relative border-b border-r border-l border-light/70 text-[8px] md:text-lg"
            style={{ paddingTop: "50%" }}
          >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-1 md:p-4">
              <div>
                <div className="flex items-center gap-1 md:gap-3  text-second">
                  {icon}
                  {type}
                </div>
                <p className="line-clamp-1 md:pt-2 md:pb-1">{title}</p>
                <p className="line-clamp-1 pb-2 hidden md:block">
                  {description}
                </p>
              </div>
              <button
                onClick={handleOpenVideoModal}
                className="px-3 py-1 md:px-8 md:py-2 
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
              >
                View
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
            className="w-full relative border-b border-r border-l border-light/70 text-[8px] md:text-lg"
            style={{ paddingTop: "50%" }}
          >
            <div className="absolute top-0 left-0 w-full h-full items-start flex flex-col justify-between p-1 md:p-4">
              <div>
                {" "}
                <div className="flex items-center gap-1 md:gap-3  text-second">
                  {icon}
                  {type}
                </div>
                <p className="line-clamp-1 md:py-2">{title}</p>
              </div>
              <a
                href={link}
                {...(target === "_blank"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { target: "_self" })}
                className="px-3 py-1 md:px-8 md:py-2  flex-end
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
              >
                View
              </a>
            </div>
          </div>
        </div>
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
        className="w-full relative border-b border-r border-l border-light/70 text-[8px] md:text-lg"
        style={{ paddingTop: "50%" }}
      >
        <div className="absolute top-0 left-0 w-full h-full items-start justify-start p-1 md:p-4">
          <div className="flex items-center gap-3 text-second">
            {icon}
            {type}
          </div>
          <p className="line-clamp-2 py-2">{title}</p>
          <a
            href={link}
            {...(target === "_blank"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : { target: "_self" })}
            className="px-3 py-1 md:px-8 md:py-2 
                          inline-block border border-main text-main hover:bg-main 
                          hover:text-white font-medium transition-colors tracking-wider"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};
