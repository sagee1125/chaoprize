import React from "react";
import { useSettings } from "../../hooks";

export const ScrollTopButton: React.FC = () => {
  const { isPC } = useSettings();

  const onClick = (): void => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    const main = document.getElementById("main-menu");
    if (main) {
      main.focus();
    }
  };
  return (
    <div
      style={{
        width: isPC ? "48px" : "32px",
        height: isPC ? "48px" : "32px",
        background: "transparent",
        borderRadius: "100%",
        position: "fixed",
        bottom: "48px",
        right: "18px",
        zIndex: 1000,
      }}
    >
      <button
        className="flex w-full h-full justify-center items-center cursor-pointer"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="23.3 21.5 156.2 156.2"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="23.3 21.5 156.2 156.2"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g>
            <path
              fill={"#B68B47"}
              d="M135.3 88.3l-33.1-33.1-33.3 33.4 3.9 3.9 26.6-26.7-.5 78 5.5.1.5-78.1 26.5 26.4 3.9-3.9z"
            ></path>
            <path
              fill={"#B68B47"}
              d="M101.4 177.7c-43.1 0-78.1-35-78.1-78.1s35-78.1 78.1-78.1 78.1 35 78.1 78.1-35 78.1-78.1 78.1zm0-150.7c-40 0-72.6 32.6-72.6 72.6s32.6 72.6 72.6 72.6c40 0 72.6-32.6 72.6-72.6S141.4 27 101.4 27z"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
};
