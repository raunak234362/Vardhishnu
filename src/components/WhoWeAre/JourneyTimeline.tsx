import { motion } from "framer-motion";
import timeline from "../../assets/image.png";
const JourneyTimeline = () => {
  const milestones = [
    {
      year: "2013",
      text: "Registered as Society & Conducted Socio-Economic Analysis of Waste Pickers",
      position: "bottom",
      colors: { top: "#8BC34A", bottom: "#FF6F00" },
    },
    {
      year: "2014",
      text: "Anandghar started in Mehrun area of Jalgaon",
      position: "top",
      colors: { top: "#E53935", bottom: "#FF6F00" },
    },
    {
      year: "2016",
      text: "1st batch of 16 children got enrolled in schools",
      position: "bottom",
      colors: { top: "#1E88E5", bottom: "#8E24AA" },
    },
    {
      year: "2020",
      text: "Anandghar Community Collectives Started",
      position: "top",
      colors: { top: "#FB8C00", bottom: "#7CB342" },
    },
    {
      year: "2024",
      text: "Running 5 Anandghar in Jalgaon, Chopda & Amalner",
      position: "bottom",
      colors: { top: "#D32F2F", bottom: "#FDD835" },
    },
    {
      year: "2025",
      text: "33 partnerships across 7 states of India. Impacted 7000+ children",
      position: "top",
      colors: { top: "#8E24AA", bottom: "#3949AB" },
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold tracking-tight relative inline-block">
            Our Journey
            <span className="absolute -bottom-2 left-0 w-20 h-[3px] bg-green-500 rounded-full" />
          </h2>
          <p className="mt-4 text-gray-400 text-sm">Since 2013</p>
        </div>

        {/* Scrollable Container */}
        <div className="relative overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start min-w-[1200px] px-10">
            <img src={timeline} alt=""  className="w-7xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;