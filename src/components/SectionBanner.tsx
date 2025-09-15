import React from "react";

interface SectionBannerProps {
  title: React.ReactNode;
  // optional: allow passing additional classNames if needed later
  className?: string;
}

export default function SectionBanner({
  title,
  className = "",
}: SectionBannerProps) {
  return (
    <section
      className={`w-screen h-[40vh] relative overflow-hidden ${className}`}
    >
      <img
        src="/banner/section_banner.png"
        alt="section banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative h-full flex items-start">
        <div className="px-[12vh] pt-[10vh] !font-light">
          <h1 className="text-dark !font-en text-2xl md:text-[56px] leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
