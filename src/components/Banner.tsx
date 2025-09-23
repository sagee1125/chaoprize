import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
  { type: "image", src: "/banner/banner_1.avif" },
  { type: "image", src: "/banner/banner_2.avif" },
  { type: "video", src: "/banner/file.mp4" },
];

const Banner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* 媒體容器 */}
        <div className="w-full h-full relative overflow-hidden">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out
                        ${
                          index === current
                            ? "translate-x-0 z-10"
                            : index < current
                            ? "-translate-x-full z-0"
                            : "translate-x-full z-0"
                        }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`media-${index}`}
                  className="w-screen h-screen object-cover"
                />
              ) : (
                <video
                  src={process.env.PUBLIC_URL + item.src}
                  autoPlay
                  muted
                  loop
                  className="w-screen h-screen object-cover"
                />
              )}
            </div>
          ))}
        </div>

        {/* 左右箭頭 */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white z-20 p-2 rounded-full transition drop-shadow-lg"
        >
          <ChevronLeft className="w-12 h-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white z-20 p-2 rounded-full transition drop-shadow-lg"
        >
          <ChevronRight className="w-12 h-12" />
        </button>
      </div>

      {/* 圓點指示器 */}
      <div className="flex gap-3 w-full justify-center items-center z-20 py-8">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index <= current ? "bg-light" : "bg-[#AEAEAE]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
