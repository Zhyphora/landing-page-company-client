/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useId } from "react";

interface WaveBackgroundProps {
  opacity?: number;
  variant?: "default" | "light" | "dark";
  direction?: "left" | "right"; // scroll direction
  speed?: number; // seconds for the front layer (lower = faster)
  tiltDeg?: number; // rotate waves (deg)
  amplitude?: number; // scaleY factor for wave height
  offsetY?: number; // vertical offset (px)
}

const WaveBackground = ({
  opacity = 0.3,
  variant = "default",
  direction = "left",
  speed = 40,
  tiltDeg = 0,
  amplitude = 1,
  offsetY = 0,
}: WaveBackgroundProps) => {
  const uid = useId();

  const getGradientColors = () => {
    switch (variant) {
      case "light":
        return {
          gradient1: {
            stop1: { color: "#000000", opacity: 0.15 },
            stop2: { color: "#1F2937", opacity: 0.1 },
            stop3: { color: "#374151", opacity: 0.05 },
          },
          gradient2: {
            stop1: { color: "#000000", opacity: 0.2 },
            stop2: { color: "#111827", opacity: 0.15 },
            stop3: { color: "#1F2937", opacity: 0.1 },
          },
        };
      case "dark":
        return {
          gradient1: {
            stop1: { color: "#0B0F19", opacity: 0.85 },
            stop2: { color: "#111827", opacity: 0.6 },
            stop3: { color: "#1F2937", opacity: 0.45 },
          },
          gradient2: {
            stop1: { color: "#22C55E", opacity: 0.35 },
            stop2: { color: "#16A34A", opacity: 0.25 },
            stop3: { color: "#064E3B", opacity: 0.18 },
          },
        };
      default:
        return {
          gradient1: {
            stop1: { color: "#000000", opacity: 0.4 },
            stop2: { color: "#111827", opacity: 0.3 },
            stop3: { color: "#1F2937", opacity: 0.2 },
          },
          gradient2: {
            stop1: { color: "#000000", opacity: 0.3 },
            stop2: { color: "#0F172A", opacity: 0.2 },
            stop3: { color: "#1E293B", opacity: 0.1 },
          },
        };
    }
  };

  const colors = getGradientColors();
  const grad1Id = `waveGradient1-${variant}-${uid}`;
  const grad2Id = `waveGradient2-${variant}-${uid}`;

  const animName = direction === "right" ? "moveRight" : "moveLeft";
  const dur1 = `${Math.max(8, speed)}s`;
  const dur2 = `${Math.max(12, Math.round(speed * 1.5))}s`;
  const dur3 = `${Math.max(18, Math.round(speed * 2.25))}s`;
  const parentTransform = `rotate(${tiltDeg}deg) scaleY(${amplitude}) translateY(${offsetY}px)`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 1200 800"
          className="absolute inset-0 w-full h-full"
          style={{ opacity }}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
          role="presentation"
        >
          <defs>
            <linearGradient id={grad1Id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: colors.gradient1.stop1.color,
                  stopOpacity: colors.gradient1.stop1.opacity,
                }}
              />
              <stop
                offset="50%"
                style={{
                  stopColor: colors.gradient1.stop2.color,
                  stopOpacity: colors.gradient1.stop2.opacity,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: colors.gradient1.stop3.color,
                  stopOpacity: colors.gradient1.stop3.opacity,
                }}
              />
            </linearGradient>
            <linearGradient id={grad2Id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  stopColor: colors.gradient2.stop1.color,
                  stopOpacity: colors.gradient2.stop1.opacity,
                }}
              />
              <stop
                offset="50%"
                style={{
                  stopColor: colors.gradient2.stop2.color,
                  stopOpacity: colors.gradient2.stop2.opacity,
                }}
              />
              <stop
                offset="100%"
                style={{
                  stopColor: colors.gradient2.stop3.color,
                  stopOpacity: colors.gradient2.stop3.opacity,
                }}
              />
            </linearGradient>
          </defs>

          {/* Layer 1 - Seamless horizontal scroll */}
          <g
            style={{
              transform: parentTransform as any,
              transformOrigin: "600px 400px",
            }}
          >
            <g
              className="will-change-transform"
              style={{ animation: `${animName} ${dur1} linear infinite` }}
            >
              <path
                d="M0,320 C300,260 900,380 1200,320 L1200,800 L0,800 Z"
                fill={`url(#${grad1Id})`}
              />
              <g transform="translate(1200,0)">
                <path
                  d="M0,320 C300,260 900,380 1200,320 L1200,800 L0,800 Z"
                  fill={`url(#${grad1Id})`}
                />
              </g>
            </g>
          </g>

          {/* Layer 2 - Slower parallax */}
          <g
            style={{
              transform: parentTransform as any,
              transformOrigin: "600px 400px",
            }}
          >
            <g
              className="will-change-transform"
              style={{
                animation: `${animName} ${dur2} linear infinite`,
                opacity: 0.85,
              }}
            >
              <path
                d="M0,420 C250,360 950,480 1200,420 L1200,800 L0,800 Z"
                fill={`url(#${grad1Id})`}
              />
              <g transform="translate(1200,0)">
                <path
                  d="M0,420 C250,360 950,480 1200,420 L1200,800 L0,800 Z"
                  fill={`url(#${grad1Id})`}
                />
              </g>
            </g>
          </g>

          {/* Layer 3 - Long wavelength, deepest */}
          <g
            style={{
              transform: parentTransform as any,
              transformOrigin: "600px 400px",
            }}
          >
            <g
              className="will-change-transform"
              style={{
                animation: `${animName} ${dur3} linear infinite`,
                opacity: 0.6,
              }}
            >
              <path
                d="M0,560 C400,520 800,600 1200,560 L1200,800 L0,800 Z"
                fill={`url(#${grad2Id})`}
              />
              <g transform="translate(1200,0)">
                <path
                  d="M0,560 C400,520 800,600 1200,560 L1200,800 L0,800 Z"
                  fill={`url(#${grad2Id})`}
                />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Additional flowing overlays for smoother effect */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-0 w-[150%] h-32 bg-gradient-to-r from-transparent via-white/7 to-transparent transform rotate-1"
          style={{
            animation: "wave-flow-1 18s ease-in-out infinite",
            borderRadius: "50% 50% 0 0",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[140%] h-24 bg-gradient-to-l from-transparent via-white/6 to-transparent transform -rotate-1"
          style={{
            animation: "wave-flow-2 22s ease-in-out infinite",
            borderRadius: "0 0 50% 50%",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[160%] h-28 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent transform rotate-0.5"
          style={{
            animation: "wave-flow-3 26s ease-in-out infinite",
            borderRadius: "50%",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes wave-flow-1 {
          0%,
          100% {
            transform: translateX(-30%) rotate(1deg) scaleX(1);
          }
          33% {
            transform: translateX(10%) rotate(1.5deg) scaleX(1.1);
          }
          66% {
            transform: translateX(30%) rotate(0.5deg) scaleX(0.9);
          }
        }

        @keyframes wave-flow-2 {
          0%,
          100% {
            transform: translateX(30%) rotate(-1deg) scaleY(1);
          }
          50% {
            transform: translateX(-30%) rotate(-1.5deg) scaleY(1.2);
          }
        }

        @keyframes wave-flow-3 {
          0%,
          100% {
            transform: translateX(-40%) rotate(0.5deg) scale(1);
          }
          25% {
            transform: translateX(-10%) rotate(1deg) scale(1.1);
          }
          75% {
            transform: translateX(40%) rotate(0deg) scale(0.95);
          }
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1200px);
          }
        }
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(1200px);
          }
        }
      `}</style>
    </div>
  );
};

export default WaveBackground;
