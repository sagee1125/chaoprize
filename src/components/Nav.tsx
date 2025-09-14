import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Nav: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="text-main !font-en space-x-6 w-full">
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:scale-x-0 after:bg-current 
                       after:origin-left after:transition-transform after:duration-300 
                       hover:after:scale-x-100 inline-flex items-center gap-1"
        onMouseEnter={() => setHovered("INTRODUCTION")}
        onMouseLeave={() => setHovered(null)}
      >
        INTRODUCTION
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            hovered === "INTRODUCTION" ? "rotate-180" : "rotate-0"
          }`}
        />
      </a>
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:scale-x-0 after:bg-current 
                       after:origin-left after:transition-transform after:duration-300 
                       hover:after:scale-x-100 inline-flex items-center gap-1"
        onMouseEnter={() => setHovered("AWARDS AND LAUREATES")}
        onMouseLeave={() => setHovered(null)}
      >
        AWARDS AND LAUREATES{" "}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            hovered === "AWARDS AND LAUREATES" ? "rotate-180" : "rotate-0"
          }`}
        />
      </a>
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:scale-x-0 after:bg-current 
                       after:origin-left after:transition-transform after:duration-300 
                       hover:after:scale-x-100 inline-flex items-center gap-1"
        onMouseEnter={() => setHovered("NOMINATION")}
        onMouseLeave={() => setHovered(null)}
      >
        NOMINATION{" "}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            hovered === "NOMINATION" ? "rotate-180" : "rotate-0"
          }`}
        />
      </a>
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:scale-x-0 after:bg-current 
                       after:origin-left after:transition-transform after:duration-300 
                       hover:after:scale-x-100 inline-flex items-center gap-1"
        onMouseEnter={() => setHovered("MEDIA")}
        onMouseLeave={() => setHovered(null)}
      >
        MEDIA
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            hovered === "MEDIA" ? "rotate-180" : "rotate-0"
          }`}
        />
      </a>
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:scale-x-0 after:bg-current 
                       after:origin-left after:transition-transform after:duration-300 
                       hover:after:scale-x-100 inline-flex items-center gap-1"
        onMouseEnter={() => setHovered("CONTACT US")}
        onMouseLeave={() => setHovered(null)}
      >
        CONTACT US{" "}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            hovered === "CONTACT US" ? "rotate-180" : "rotate-0"
          }`}
        />
      </a>
    </nav>
  );
};

export default Nav;
