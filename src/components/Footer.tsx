import React from "react";

export const footerColumns = [
  {
    title: "INTRODUCTION",
    links: [
      { label: "ABOUT THE PRIZE", href: "/abouttheprize" },
      { label: "THE ORGANISER", href: "/theorganiser" },
      { label: "THE PATRON", href: "/thepatron" },
    ],
  },
  {
    title: "AWARDS & LAUREATES",
    links: [
      { label: "AWARDS", href: "/awards" },
      { label: "LAUREATES", href: "/laureates" },
    ],
  },
  {
    title: "NOMINATION",
    links: [
      { label: "NOMINATION", href: "/nomination" },
      { label: "IMPORTANT DATES", href: "/importantdates" },
    ],
  },
  {
    title: "MEDIA",
    links: [
      { label: "NEWS", href: "/news" },
      { label: "GALLERY", href: "/gallery" },
      { label: "PUBLICATIONS", href: "/publications" },
    ],
  },
  {
    title: "CONTACT US",
    self: "/contactus",
    links: [], // 無列身
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-bcg">
      <div
        className="
          mx-auto 
          max-w-[1280px] 
          w-full 
          md:py-[120px] md:px-0
          flex flex-col justify-start items-start
          h-auto md:h-[650px]
        "
      >
        <div className="lg:py-[70px] lg:px-[40px]">
          <div className="w-full">
            <a href="/" target="_self">
              <img
                src="/logo_sm.avif"
                alt="Chao Prize Logo"
                className="w-auto lg:w-[128px] h-auto object-contain"
                style={{ maxHeight: "140px" }}
              />
            </a>
          </div>
          <div className="text-main font-en w-full mt-8">
            <div className="mx-auto w-[1200px] w-full grid grid-cols-1 sm:grid-cols-5 gap-8">
              {footerColumns.map((col) => (
                <div key={col.title} className="flex flex-col items-start">
                  {/* 列頭 */}
                  <h3 className="mb-2">{col.title}</h3>
                  {/* 分界線 */}
                  <hr className="w-full border-t-1 border-main mb-4" />
                  {/* 列身 */}
                  <ul className="flex flex-col justify-start items-start gap-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
