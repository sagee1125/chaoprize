import React from "react";
import Nav from "../Nav/Nav";
import { Language, useLanguage, useSettings } from "../../context";

export const Header: React.FC = () => {
  const { lang, switchLanguage } = useLanguage();
  const { isPC } = useSettings();

  const trilingualSwitch: Array<{ lang: Language; label: string }> = [
    {
      lang: Language.EN,
      label: "EN",
    },
    {
      lang: Language.TC,
      label: "繁",
    },
    {
      lang: Language.SC,
      label: "简",
    },
  ];

  if (isPC)
    return (
      <header className={`bg-white text-white shadow-md h-[180px] font-enzh`}>
        <div className="w-full h-full px-4 lg:px-14 my-auto pt-7 pb-3">
          <div className="flex h-full flex-row items-center">
            {/* Logo */}
            <div>
              <a href="/" target="_self">
                <img
                  src="/logo_en.avif"
                  alt="Chao Prize Logo"
                  className="h-auto lg:h-[140px] w-auto object-contain"
                  style={{ maxHeight: "140px" }}
                />
              </a>
            </div>

            <div className="w-full grow h-full w-full flex flex-col justify-between">
              <div className="flex-shrink-0 w-full flex justify-end gap-8">
                <a
                  href="https://www.polyu.edu.hk/fh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/polyu_logo.avif"
                    alt="Polyu Logo"
                    className="h-[40px] w-auto object-contain"
                    style={{ maxHeight: "40px" }}
                  />{" "}
                </a>

                <a
                  href="https://www.polyu.edu.hk/fh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="fh_logo.avif"
                    alt="Faculty of Human Logo"
                    className="h-[30px] w-auto object-contain"
                    style={{ maxHeight: "30px" }}
                  />
                </a>
              </div>
              <div className="flex">
                <Nav />
                <div className="flex gap-5">
                  {trilingualSwitch.map((item) => (
                    <button
                      key={item.lang}
                      onClick={() => switchLanguage(item.lang)}
                      className={
                        lang === item.lang ? "text-second" : "text-main"
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  // mobile version
  else
    return (
      <header className={`bg-white text-white shadow-md h-[128px] font-enzh`}>
        <div className="w-full h-full px-6 py-1">
          <div className="flex h-full flex-row items-center gap-12 md:gap-36">
            {/* Logo */}
            <div className="flex">
              <a href="/" target="_self">
                <img
                  src="/logo_en.avif"
                  alt="Chao Prize Logo"
                  className="max-h-[136px] w-auto object-contain"
                />
              </a>
            </div>

            <div className="w-full grow h-full w-full flex flex-col justify-between pt-6 pb-3">
              <div className="flex-shrink-0 w-full flex justify-end gap-4">
                <a
                  href="https://www.polyu.edu.hk/fh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/polyu_logo.avif"
                    alt="Polyu Logo"
                    className="max-h-[32px] w-auto object-contain"
                  />
                </a>

                <a
                  href="https://www.polyu.edu.hk/fh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="fh_logo.avif"
                    alt="Faculty of Human Logo"
                    className="max-h-[32px] w-auto object-contain"
                  />
                </a>
              </div>
              <div className="flex justify-end">
                <div className="flex gap-2 text-sm">
                  {trilingualSwitch.map((item) => (
                    <button
                      key={item.lang}
                      onClick={() => switchLanguage(item.lang)}
                      className={
                        lang === item.lang ? "text-second" : "text-main"
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                  <Nav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
};
