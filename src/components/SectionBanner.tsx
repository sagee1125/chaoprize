import React from "react";

interface SectionBannerProps {
  title: React.ReactNode;
  // optional: allow passing additional classNames if needed later
  className?: string;
  href?: string;
}

export const SectionBanner: React.FunctionComponent<SectionBannerProps> = (
  props: SectionBannerProps
) => {
  const { title, className, href } = props;
  return (
    <section
      className={`w-screen h-[10vh] md:h-[20vh] lg:h-[40vh] relative overflow-hidden ${className}`}
    >
      <img
        src="/banner/section_banner.png"
        alt="section banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative h-full flex items-start">
        <div className="p-[2vh] md:px-[12vh] md:py-[8vh] !font-extralight">
          {!href ? (
            <h1 className="text-dark !font-en text-2xl mt-[2vh] md:text-[56px] leading-tight">
              {title}
            </h1>
          ) : (
            <a
              className="text-dark !font-en text-2xl mt-[2vh] md:text-[56px] leading-tight"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1>{title}</h1>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
