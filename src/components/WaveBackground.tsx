"use client";
import React from "react";

interface WaveBackgroundProps {
  opacity?: number;
  variant?: "default" | "light" | "dark";
}

const WaveBackground = ({
  opacity = 0.2,
  variant = "default",
}: WaveBackgroundProps) => {
  const getGradientColors = () => {
    switch (variant) {
      case "light":
        return {
          gradient1: {
            stop1: { color: "#9CA3AF", opacity: 0.6 },
            stop2: { color: "#6B7280", opacity: 0.4 },
            stop3: { color: "#4B5563", opacity: 0.3 },
          },
          gradient2: {
            stop1: { color: "#10B981", opacity: 0.2 },
            stop2: { color: "#059669", opacity: 0.15 },
            stop3: { color: "#047857", opacity: 0.1 },
          },
        };
      case "dark":
        return {
          gradient1: {
            stop1: { color: "#4B5563", opacity: 0.9 },
            stop2: { color: "#374151", opacity: 0.7 },
            stop3: { color: "#1F2937", opacity: 0.5 },
          },
          gradient2: {
            stop1: { color: "#10B981", opacity: 0.4 },
            stop2: { color: "#059669", opacity: 0.3 },
            stop3: { color: "#047857", opacity: 0.2 },
          },
        };
      default:
        return {
          gradient1: {
            stop1: { color: "#6B7280", opacity: 0.8 },
            stop2: { color: "#4B5563", opacity: 0.6 },
            stop3: { color: "#374151", opacity: 0.4 },
          },
          gradient2: {
            stop1: { color: "#10B981", opacity: 0.3 },
            stop2: { color: "#059669", opacity: 0.2 },
            stop3: { color: "#047857", opacity: 0.1 },
          },
        };
    }
  };

  const colors = getGradientColors();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated SVG Waves */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          viewBox="0 0 1200 800"
          className="absolute inset-0 w-full h-full"
          style={{ opacity }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id={`waveGradient1-${variant}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
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
            <linearGradient
              id={`waveGradient2-${variant}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
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

          {/* First Wave - Moving horizontally */}
          <path
            d="M0,200 C300,100 600,300 900,200 C1000,150 1100,250 1200,200 L1200,800 L0,800 Z"
            fill={`url(#waveGradient1-${variant})`}
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          {/* Second Wave - Different speed */}
          <path
            d="M0,350 C200,250 400,450 600,350 C800,250 1000,450 1200,350 L1200,800 L0,800 Z"
            fill={`url(#waveGradient1-${variant})`}
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -30,10; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          {/* Third Wave - Green accent */}
          <path
            d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
            fill={`url(#waveGradient2-${variant})`}
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,-20; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Floating wave overlays with CSS animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-gray-600/10 via-green-500/5 to-gray-600/10 transform rotate-2 scale-150 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-80 bg-gradient-to-l from-gray-700/8 via-green-600/4 to-gray-700/8 transform -rotate-1 scale-110 animate-pulse"></div>
      </div>
    </div>
  );
};

export default WaveBackground;
