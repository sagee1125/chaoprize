import React from "react";

interface PhotoModalProps {
  src: string;
  open: boolean;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  src,
  open,
  onClose,
}) => {
  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="w-[80vw] h-auto md:w-auto md:h-[50vh]  bg-black overflow-hidden flex items-center justify-center">
        <img
          src={src}
          alt=""
          className="w-full md:w-auto md:h-full object-contain"
        />
      </div>
    </div>
  );
};
