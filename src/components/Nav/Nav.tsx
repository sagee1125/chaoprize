import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSitemap } from "../../utils";
import { Language, useLanguage, useSettings } from "../../context";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import { Menu, Close, KeyboardArrowDown } from "@mui/icons-material";

const Nav: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { isPC } = useSettings();
  const { lang } = useLanguage();
  const sitemap = useSitemap();
  const [openMobileNav, setOpenMobileNav] = useState(false);
  // 用陣列 index 記錄展開狀態
  const [openMap, setOpenMap] = useState<boolean[]>(
    Array(sitemap.length).fill(false)
  );

  const toggle = (index: number): void => {
    setOpenMap((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  if (isPC)
    return (
      <nav
        className={`text-main w-full items-center relative flex justify-center font-enzh`}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          className={`flex py-4 px-3 relative justify-between ${
            lang === Language.EN ? "w-[800px]" : "w-[500px]"
          }`}
        >
          {sitemap.map((col, idx) => (
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

              {/* 下拉框：只在當前 hover 顯示，寬度自適應父元素 */}
              {hovered === col.title && col.links.length > 0 && (
                <div className="absolute left-0 top-full min-w-full z-50">
                  <ul className="flex flex-col py-4 gap-2 whitespace-nowrap">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-main hover:text-second relative whitespace-nowrap"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* 下拉框：背景等寬 nav，內容對齊 hovered item */}
          {hovered &&
            sitemap.find((col) => col.title === hovered)?.links.length! > 0 && (
              <div className="absolute left-0 top-full w-full h-[102px] bg-white/80 text-black shadow-lg z-40 overflow-auto">
                {/* <ul className="flex flex-col pt-6 pb-4 px-3 gap-2 whitespace-nowrap overflow-visible">
                  {sitemap
                    .find((col) => col.title === hovered)!
                    .links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="
                          text-main hover:text-second relative overflow-visible whitespace-nowrap
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
                </ul> */}
              </div>
            )}
        </div>
      </nav>
    );
  else
    return (
      <>
        <IconButton onClick={() => setOpenMobileNav(true)} className="!p-[2px]">
          <Menu />
        </IconButton>
        <Drawer
          anchor="right"
          open={openMobileNav}
          onClose={() => setOpenMobileNav(false)}
        >
          <div style={{ width: 400, padding: 10 }}>
            <div className="flex justify-end">
              <IconButton onClick={() => setOpenMobileNav(false)} size="large">
                <Close />
              </IconButton>
            </div>

            <List>
              {sitemap.map((col, index) => {
                const hasLinks = col.links.length > 0;
                const expandable = col.links.length > 1;

                return (
                  <div key={index}>
                    <ListItemButton
                      onClick={() => expandable && toggle(index)}
                      component={col.self ? "a" : "div"}
                      href={col.self}
                      className="flex justify-between group no-underline"
                    >
                      <span
                        className={`no-underline !font-enzh !text-main relative inline-block
                          after:absolute after:-bottom-[2px] after:left-0 after:h-[1px] 
                          after:bg-dark after:transition-all after:duration-300 after:origin-left 
                          group-hover:after:w-full
                          ${openMap[index] ? "after:w-full" : "after:w-0"}`}
                      >
                        {col.title}
                      </span>
                      {expandable && (
                        <IconButton size="small">
                          <KeyboardArrowDown
                            style={{
                              transform: openMap[index]
                                ? "rotate(-180deg)"
                                : "rotate(0deg)",
                              transition: "0.3s",
                            }}
                          />
                        </IconButton>
                      )}
                    </ListItemButton>

                    {hasLinks && (
                      <Collapse
                        in={openMap[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding sx={{ pl: 1 }}>
                          {col.links.map((link) => (
                            <ListItemButton
                              key={link.href}
                              component="a"
                              href={link.href}
                              className="group"
                            >
                              <span
                                className="!font-enzh !text-main relative
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[1px] after:bg-second
                  after:transition-all after:duration-300
                  after:origin-left after:w-0
                  group-hover:!text-second
                  group-hover:after:w-full"
                              >
                                {link.label}
                              </span>
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </div>
                );
              })}
            </List>
          </div>
        </Drawer>
      </>
    );
};

export default Nav;
