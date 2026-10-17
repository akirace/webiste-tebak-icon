import React from "react";

interface GooglePlayButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GooglePlayButton({
  size = "md",
  className = "",
}: GooglePlayButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-2.5",
    md: "px-5 py-2.5 text-sm gap-3",
    lg: "px-6 py-3.5 text-base gap-3.5",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <a
      href="https://play.google.com/store/apps"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Tebak Icon di Google Play Store"
      className={`inline-flex items-center justify-center font-medium text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-violet-500/60 rounded-xl shadow-lg shadow-black/40 hover:shadow-violet-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${sizeClasses[size]} ${className}`}
    >
      {/* Google Play Vector Logo */}
      <svg
        className={`${iconSizes[size]} flex-shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.608 1.613A1.5 1.5 0 0 0 3 2.87v18.26a1.5 1.5 0 0 0 .608 1.257l.07.054 10.23-10.23v-.242L3.678 1.56l-.07.053Z"
          fill="url(#gp-blue)"
        />
        <path
          d="M17.316 15.617 13.908 12.21v-.243l3.41-3.407.077.044 4.04 2.296c1.154.656 1.154 1.729 0 2.385l-4.04 2.288-.079.044Z"
          fill="url(#gp-yellow)"
        />
        <path
          d="m13.908 12.21-10.23 10.23a1.272 1.272 0 0 0 1.63.055l12.086-6.878-3.486-3.407Z"
          fill="url(#gp-red)"
        />
        <path
          d="M13.908 11.967 17.394 8.56 5.308 1.682a1.272 1.272 0 0 0-1.63.055l10.23 10.23Z"
          fill="url(#gp-green)"
        />
        <defs>
          <linearGradient
            id="gp-blue"
            x1="12.72"
            y1="2.793"
            x2="-2.012"
            y2="17.525"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset="0.007" stopColor="#00A1FF" />
            <stop offset="0.26" stopColor="#00BEFF" />
            <stop offset="0.512" stopColor="#00D2FF" />
            <stop offset="0.76" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="gp-yellow"
            x1="22.188"
            y1="12.088"
            x2=".228"
            y2="12.088"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFE000" />
            <stop offset="0.409" stopColor="#FFBD00" />
            <stop offset="0.775" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient
            id="gp-red"
            x1="15.111"
            y1="13.414"
            x2="-6.326"
            y2="34.851"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient
            id="gp-green"
            x1="1.956"
            y1="-3.468"
            x2="9.605"
            y2="4.181"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#32A071" />
            <stop offset="0.069" stopColor="#2DA771" />
            <stop offset="0.476" stopColor="#15CF74" />
            <stop offset="0.801" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-[10px] tracking-wider uppercase text-zinc-400 font-semibold">
          TEMUKAN DI
        </span>
        <span className="font-bold tracking-tight text-white font-sans text-[15px] sm:text-[16px]">
          Google Play
        </span>
      </div>
    </a>
  );
}
