import React from "react";
import { fb, ig, spotify, ytb } from "./const";
import { useLanguage, useSettings } from "../../context";
import { trilingualText } from "./i18n";
import { useSitemap } from "../../utils";
import { maxMobileContainer, maxPCContainer } from "../Container";

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const sitemap = useSitemap();
  const { isMobile } = useSettings();
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
    <footer className={`w-screen bg-bcg font-enzh py-12 lg:py-24 px-6 lg:px-0`}>
      <div
        style={{
          ...(!isMobile ? maxPCContainer : maxMobileContainer),
        }}
      >
        <div className="lg:py-[24px] space-y-[48px] w-full">
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
          <div className="text-main w-full py-3 lg:py-6">
            <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
              {sitemap.map((col, i) => (
                <div key={i} className="flex flex-col items-start">
                  {/* 列頭 */}
                  <h3 className="mb-2 text-base">{col.title}</h3>
                  {/* 分界線 */}
                  <hr className="w-full border-t-1 border-main mb-2 lg:mb-6 lg:mt-4 pr-8" />
                  {/* 列身 */}
                  <ul className="flex flex-col justify-start items-start gap-2">
                    {col.links.length > 0 ? (
                      <>
                        {col.links.map((link) => (
                          <li key={link.label} className="text-xs lg:text-base">
                            <a href={link.href}>{link.label}</a>
                          </li>
                        ))}
                      </>
                    ) : (
                      <a
                        href="mailto:chao.prize@polyu.edu.hk"
                        className="text-xs lg:text-base"
                      >
                        chao.prize@polyu.edu.hk
                      </a>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-main w-full py-2 space-y-2">
            <div className="mx-auto w-full flex gap-10 text-base tracking-tight">
              {otherInfo.map((info, i) => {
                if (info.href)
                  return (
                    <a href={info.href} key={i} target={info.target}>
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
