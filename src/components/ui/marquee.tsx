import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  speed?: number; // 滾動速度，數字越小越快
  children: React.ReactNode;
}

export default function Marquee({
  pauseOnHover = true,
  speed = 20,
  children,
  className = "",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`relative overflow-hidden whitespace-nowrap ${className}`}
    >
      <div
        className={`flex animate-marquee`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>

      {/* hover 暫停效果 */}
      <style>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        ${
          pauseOnHover
            ? `
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `
            : ""
        }
      `}</style>
    </div>
  );
}
