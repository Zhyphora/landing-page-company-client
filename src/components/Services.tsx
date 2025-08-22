import React from "react";
import Image from "next/image";
import { FaChartLine, FaCode, FaMagnifyingGlass } from "react-icons/fa6";

type ServiceType = {
  icon: IconName;
  iconType: "react-icon";
  title: string;
  desc: string;
};

const services: ServiceType[] = [
  {
    icon: "FaChartLine",
    iconType: "react-icon",
    title: "Branding",
    desc: "It's the pillar of your presence. How your customers recognize you and know what you stand for.",
  },
  {
    icon: "FaCode",
    iconType: "react-icon",
    title: "Web & App Development",
    desc: "From your website to your mobile app, we build modern, responsive, and user-friendly digital solutions.",
  },
  {
    icon: "FaMagnifyingGlass",
    iconType: "react-icon",
    title: "SEO",
    desc: "Boost your online visibility and drive organic traffic with strategic search engine optimization that gets results.",
  },
];

type IconName = "FaChartLine" | "FaCode" | "FaMagnifyingGlass";

const renderIcon = (iconName: IconName) => {
  const iconProps = "w-12 h-12 text-gray-800";

  switch (iconName) {
    case "FaChartLine":
      return <FaChartLine className={iconProps} />;
    case "FaCode":
      return <FaCode className={iconProps} />;
    case "FaMagnifyingGlass":
      return <FaMagnifyingGlass className={iconProps} />;
    default:
      return null;
  }
};
const Services = () => {
  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 mb-8">Here's what we can do for you:</p>
        <div className="flex flex-col sm:flex-row gap-12 justify-between">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex-1 flex flex-col items-center text-center gap-8"
            >
              {/* Render icon berdasarkan type */}
              {service.iconType === "react-icon" ? (
                renderIcon(service.icon as IconName)
              ) : (
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
              )}
              <h3 className="font-bold text-xl text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base max-w-xs leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
