import React from "react";
import Banner from "../../components/Banner";

const Homepage: React.FC = () => {
  const imgs = [
    "/banner/5-JCR67431.jpg",
    "/banner/99-JDC_8557.jpg",
    "/banner/154-JCR67468.jpg",
    "/banner/HEI_1111.jpg",
    "/banner/HEI_8543.jpg",
    "/banner/HEI_9006.jpg",
  ];
  return (
    <div className="flex flex-col items-center font-en w-full max-w-screen overflow-x-hidden">
      <Banner />

      <div className="max-w-3xl mx-auto text-center text-main py-12 px-4 !font-thin">
        <p className="text-5xl my-4">ABOUT THE PRIZE</p>
        <p className="mb-6 leading-relaxed">
          The Yuen Ren Chao Prize in Language Science, organised by
          <br />
          The Hong Kong Polytechnic University (PolyU), is an international
          <br />
          award that honours scholars and researchers who have made
          <br />
          distinguished contributions to language science.
        </p>
        {/* Learn More button */}
        <a
          href="/abouttheprize"
          className="inline-block bg-[#b68b47] hover:bg-main text-white px-6 py-3 font-medium transition-colors"
        >
          Learn More
        </a>
      </div>

      <div className="p-8">
        <ImageMarquee imgs={imgs} speed={48} />
      </div>

      <div className="max-w-3xl mx-auto text-center text-main py-12 px-4 !font-thin">
        <p className="text-5xl my-4">AWARDS & LAUREATES</p>
        <p className="mb-6 leading-relaxed">
          Two awards will be given biennially, namely Lifetime Achievement Award
          and Early Career Contribution Award.
        </p>
      </div>
    </div>
  );
};

export default Homepage;

function ImageMarquee({
  imgs,
  speed = 30,
}: {
  imgs: string[];
  speed?: number; // 數字越小越快
}) {
  return (
    <div className="relative overflow-hidden w-full group">
      <div
        className="flex animate-marquee gap-8"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* 第一組圖片 */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img1-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* 第二組圖片（複製一份，實現無縫循環） */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img2-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* 第三組圖片（複製一份，實現無縫循環） */}
        <div className="flex shrink-0 gap-8">
          {imgs.map((src, i) => (
            <div
              key={`img3-${i}`}
              className="w-[400px] h-[250px] overflow-hidden mx-2"
            >
              <img
                src={src}
                alt={`marquee-${i}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
