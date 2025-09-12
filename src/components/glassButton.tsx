import React from "react";

type Props = {
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const GlassmorphismButton = ({
  text = "Fluttertop Studio",
}: //   onClick,
Props) => {
  return (
    <div className="relative z-10 rounded-[999vw] bg-transparent pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]">
      <button
        className="glass-button all-unset cursor-pointer relative tap-highlight-color-transparent pointer-events-auto z-30 bg-gradient-to-r from-[rgba(255,255,255,0.05)] via-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] rounded-[999vw] shadow-[inset_0_0.125em_0.125em_rgba(0,0,0,0.05),inset_0_-0.125em_0.125em_rgba(255,255,255,0.5),0_0.25em_0.125em_-0.125em_rgba(0,0,0,0.2),0_0_0.1em_0.25em_inset_rgba(255,255,255,0.2),0_0_0_0_rgba(255,255,255,1)] backdrop-blur-[clamp(1px,0.125em,4px)] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]"
        // onClick={onClick}
      >
        <span className="relative block select-none font-medium text-base text-white antialiased text-shadow-[0em_0.25em_0.05em_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] px-6 py-3.5">
          {text}
        </span>
      </button>
      <div className="button-shadow absolute w-[calc(100%+2em)] h-[calc(100%+2em)] top-[-1em] left-[-1em] filter blur-[clamp(2px,0.125em,12px)] overflow-visible pointer-events-none"></div>

      <style>{`
        @property --angle-1 {
          syntax: "<angle>";
          inherits: false;
          initial-value: -75deg;
        }

        @property --angle-2 {
          syntax: "<angle>";
          inherits: false;
          initial-value: -45deg;
        }

        :root {
          --global--size: clamp(2rem, 4vw, 5rem);
          --anim--hover-time: 400ms;
          --anim--hover-ease: cubic-bezier(0.25, 1, 0.5, 1);
        }

        .button-shadow::after {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          border-radius: 999vw;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
          width: calc(100% - 2em - 0.25em);
          height: calc(100% - 2em - 0.25em);
          top: calc(2em - 0.5em);
          left: calc(2em - 0.875em);
          padding: 0.125em;
          box-sizing: border-box;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          transition: all var(--anim--hover-time) var(--anim--hover-ease);
          overflow: visible;
          opacity: 1;
        }

        .glass-button:hover {
          transform: scale(0.975);
          backdrop-filter: blur(0.01em);
          box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
            inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
            0 0.15em 0.05em -0.1em rgba(0, 0, 0, 0.25),
            0 0 0.05em 0.1em inset rgba(255, 255, 255, 0.5),
            0 0 0 0 rgba(255, 255, 255, 1);
        }

        .glass-button:hover span {
          text-shadow: 0.025em 0.025em 0.025em rgba(0, 0, 0, 0.12);
        }

        .glass-button span::after {
          content: "";
          display: block;
          position: absolute;
          z-index: 1;
          width: calc(100% - var(--border-width, 1px));
          height: calc(100% - var(--border-width, 1px));
          top: calc(0% + var(--border-width, 1px) / 2);
          left: calc(0% + var(--border-width, 1px) / 2);
          box-sizing: border-box;
          border-radius: 999vw;
          overflow: clip;
          background: linear-gradient(
            var(--angle-2),
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 40% 50%,
            rgba(255, 255, 255, 0) 55%
          );
          z-index: 3;
          mix-blend-mode: screen;
          pointer-events: none;
          background-size: 200% 200%;
          background-position: 0% 50%;
          background-repeat: no-repeat;
          transition: background-position calc(var(--anim--hover-time) * 1.25) var(--anim--hover-ease),
            --angle-2 calc(var(--anim--hover-time) * 1.25) var(--anim--hover-ease);
        }

        .glass-button:hover span::after {
          background-position: 25% 50%;
        }

        .glass-button:active span::after {
          background-position: 50% 15%;
          --angle-2: -15deg;
        }

        @media (hover: none) and (pointer: coarse) {
          .glass-button span::after,
          .glass-button:active span::after {
            --angle-2: -45deg;
          }
        }

        .glass-button::after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          border-radius: 999vw;
          width: calc(100% + var(--border-width, 1px));
          height: calc(100% + var(--border-width, 1px));
          top: calc(0% - var(--border-width, 1px) / 2);
          left: calc(0% - var(--border-width, 1px) / 2);
          padding: var(--border-width, 1px);
          box-sizing: border-box;
          background: conic-gradient(
              from var(--angle-1) at 50% 50%,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0) 5% 40%,
              rgba(0, 0, 0, 0.5) 50%,
              rgba(0, 0, 0, 0) 60% 95%,
              rgba(0, 0, 0, 0.5)
            ),
            linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          transition: all var(--anim--hover-time) var(--anim--hover-ease),
            --angle-1 500ms ease;
          box-shadow: inset 0 0 0 calc(var(--border-width, 1px) / 2) rgba(255, 255, 255, 0.5);
        }

        .glass-button:hover::after {
          --angle-1: -125deg;
        }

        .glass-button:active::after {
          --angle-1: -75deg;
        }

        @media (hover: none) and (pointer: coarse) {
          .glass-button::after,
          .glass-button:hover::after,
          .glass-button:active::after {
            --angle-1: -75deg;
          }
        }

        .glass-button-container:has(.glass-button:hover) .button-shadow {
          filter: blur(clamp(2px, 0.0625em, 6px));
        }

        .glass-button-container:has(.glass-button:hover) .button-shadow::after {
          top: calc(2em - 0.875em);
          opacity: 1;
        }

        .glass-button-container:has(.glass-button:active) {
          transform: rotate3d(1, 0, 0, 25deg);
        }

        .glass-button-container:has(.glass-button:active) .glass-button {
          box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
            inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
            0 0.125em 0.125em -0.125em rgba(0, 0, 0, 0.2),
            0 0 0.1em 0.25em inset rgba(255, 255, 255, 0.2),
            0 0.225em 0.05em 0 rgba(0, 0, 0, 0.05),
            0 0.25em 0 0 rgba(255, 255, 255, 0.75),
            inset 0 0.25em 0.05em 0 rgba(0, 0, 0, 0.15);
        }

        .glass-button-container:has(.glass-button:active) .button-shadow {
          filter: blur(clamp(2px, 0.125em, 12px));
        }

        .glass-button-container:has(.glass-button:active) .button-shadow::after {
          top: calc(2em - 0.5em);
          opacity: 0.75;
        }

        .glass-button-container:has(.glass-button:active) span {
          text-shadow: 0.025em 0.25em 0.05em rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </div>
  );
};

export default GlassmorphismButton;
