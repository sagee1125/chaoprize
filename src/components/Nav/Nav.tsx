import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSitemap } from "../../utils";
import { Language, useLanguage } from "../../context";

const Nav: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { lang } = useLanguage();
  const sitemap = useSitemap();

  return (
    <nav
      className={`text-main w-full space-x-6  items-center relative flex justify-center font-enzh`}
      onMouseLeave={() => setHovered(null)}
    >
      <div
        className={`flex px-8 py-4 relative ${
          lang === Language.EN ? "space-x-6" : "space-x-12"
        }`}
      >
        {sitemap.map((col) => (
          <div
            key={col.title}
            className="relative"
            onMouseEnter={() => setHovered(col.title)}
          >
            <a
              href={col.self || "#"}
              className="inline-flex items-center gap-1"
            >
              <span
                className={`
          relative after:content-[''] after:absolute after:left-0 after:bottom-0
          after:h-[1px] after:w-full after:bg-current after:origin-left
          after:transition-transform after:duration-300
          ${hovered === col.title ? "after:scale-x-100" : "after:scale-x-0"}
        `}
              >
                {col.title}
              </span>

              {col.links.length > 0 && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    hovered === col.title ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </a>
          </div>
        ))}

        {/* 下拉框，寬度等於整個 nav */}
        {hovered &&
          sitemap.find((col) => col.title === hovered)?.links.length! > 0 && (
            <div className="absolute left-0 top-full w-full h-[200px] bg-white/80 text-black shadow-lg z-50 overflow-auto">
              <ul className="flex flex-col p-4 gap-2">
                {sitemap
                  .find((col) => col.title === hovered)!
                  .links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          text-main hover:text-second relative
                          after:content-[''] after:absolute after:left-0 after:bottom-0
                          after:h-[1px] after:w-full after:bg-current after:origin-left
                          after:scale-x-0 after:transition-transform after:duration-300
                          hover:after:scale-x-100
                        "
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
      </div>
    </nav>
  );
};

export default Nav;
