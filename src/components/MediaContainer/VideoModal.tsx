import React, { useRef } from "react";

interface VideoModalProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  src,
  open,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      videoRef.current?.pause();
      onClose();
    }
  };

  const handlePlayClick = () => {
    videoRef.current?.play();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="w-[80vw] h-auto md:w-auto md:h-[40vh] bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={process.env.PUBLIC_URL + src}
          className="w-full md:w-auto md:h-full cursor-pointer"
          controls
          autoPlay
          onClick={handlePlayClick}
        />
      </div>
    </div>
  );
};
