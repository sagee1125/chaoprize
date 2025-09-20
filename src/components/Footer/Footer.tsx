import React from "react";
import { fb, ig, spotify, ytb } from "./const";
import { Language, useLanguage } from "../../context";
import { trilingualText } from "./i18n";
import { useSitemap } from "../../utils";

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const sitemap = useSitemap();

  const platforms: Array<{ icon: React.ReactNode; href: string }> = [
    {
      icon: ig,
      href: "https://www.instagram.com/polyufh/",
    },
    {
      icon: fb,
      href: "https://www.facebook.com/hkpolyu.humanities",
    },
    {
      icon: spotify,
      href: "https://open.spotify.com/show/2R9yAXTeVhFcB0sC1bt4DD?si=x3BDZPzeStWqwayMPLLd4Q&nd=1&dlsi=6651747f9c914973",
    },
    {
      icon: ytb,
      href: "https://www.youtube.com/@polyufacultyofhumanities/videos",
    },
  ];

  const otherInfo: Array<{
    label: string;
    href: string;
    target: "_blank" | "_self";
  }> = [
    {
      label: trilingualText[lang].privacyPolicy,
      href: "https://www.polyu.edu.hk/privacy-policy-statement/",
      target: "_blank",
    },
    {
      label: trilingualText[lang].termsOfUse,
      href: "https://www.polyu.edu.hk/terms-of-use/",
      target: "_blank",
    },
    {
      label: trilingualText[lang].accessibility,
      href: "",
      target: "_blank",
    },
    {
      label: trilingualText[lang].sitemap,
      href: "/sitemap",
      target: "_self",
    },
  ];
  return (
    <footer
      className={`w-screen bg-bcg ${
        lang === Language.EN ? "font-en" : "font-zh"
      }`}
    >
      <div
        className="
          mx-auto 
          max-w-[1280px] 
          w-full 
          md:py-[100px] md:px-0
          flex flex-col justify-start items-start
          h-auto md:min-h-[650px]
        "
      >
        <div className="lg:py-[24px] lg:px-[40px] space-y-[48px] w-full">
          <div className="w-full flex justify-between">
            <a href="/" target="_self">
              <img
                src="/logo_sm.avif"
                alt="Chao Prize Logo"
                className="w-auto lg:w-[128px] h-auto object-contain"
                style={{ maxHeight: "140px" }}
              />
            </a>
            {/* media */}
            <div className="flex gap-4">
              {platforms.map((media, index) => (
                <a
                  href={media.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-main w-full py-6">
            <div className="mx-auto w-[1200px] w-full grid grid-cols-1 sm:grid-cols-5 gap-8">
              {sitemap.map((col) => (
                <div key={col.title} className="flex flex-col items-start">
                  {/* 列頭 */}
                  <h3 className="mb-2">{col.title}</h3>
                  {/* 分界線 */}
                  <hr className="w-full border-t-1 border-main mb-6 mt-4 pr-8" />
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

          <div className="text-main w-full py-2 space-y-2">
            <div className="mx-auto w-[1200px] w-full flex gap-10 text-base tracking-tight">
              {otherInfo.map((info) => {
                if (info.href)
                  return (
                    <a href={info.href} target={info.target}>
                      <span>{info.label}</span>
                    </a>
                  );
                else return <span>{info.label}</span>;
              })}
            </div>
            <span className="block">{trilingualText[lang].copyRight}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
