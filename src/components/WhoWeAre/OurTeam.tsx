import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";
import LazyImage from "../common/LazyImage";

const OurTeam = () => {
  const tabs = Object.keys(data.team);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const teamMembers = data.team;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = 400 + 32; // width + gap
    const index = Math.round(scrollLeft / itemWidth);
    setScrollIndex(index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <div className="relative inline-block mb-14">
            <h2 className="text-4xl md:text-5xl text-dark tracking-tighter">
              Our Team
            </h2>
            <div className="absolute -bottom-7 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 md:gap-12 mb-16 border-b border-black/5 pb-4 overflow-x-auto hide-scrollbar whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setScrollIndex(0);
              }}
              className={`text-xl font-normal transition-all relative pb-2 ${
                activeTab === tab ? "text-primary" : "text-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Members Horizontal Scroll Container */}
        <div className="relative pb-24 group px-4 lg:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar overscroll-x-contain pb-12 cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: "none" }}
            >
              {teamMembers[activeTab as keyof typeof teamMembers]?.length > 0 ? (
                teamMembers[activeTab as keyof typeof teamMembers].map((member) => (
                  <div key={member.name} className="shrink-0 w-[85vw] md:w-[400px] snap-start">
                    <TeamCard member={member} />
                  </div>
                ))
              ) : (
                <div className="w-full py-20 text-center text-dark/30 italic font-medium">
                  Team details coming soon for {activeTab}...
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Scroll Progress Indicator (Green lines) */}
          <div className="flex justify-center gap-3 mt-4">
            {teamMembers[activeTab as keyof typeof teamMembers]?.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === scrollIndex ? "w-12 bg-primary" : "w-12 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[600px] w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-gray-100 overflow-hidden shadow-2xl border-4 border-white group">
          <LazyImage
            src={getImageUrl(member.image)}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            containerClassName="w-full h-full"
          />
          {/* Overlay Info */}
          <div className="absolute inset-x-0 bottom-0 p-8">
            <h3 className="text-2xl font-medium text-primary leading-none">
              {member.name}
            </h3>
            <p className="text-black mt-2">{member.role}</p>
            <div className="mt-4 flex items-center gap-2 text-white/70 text-sm uppercase tracking-wider">
              <span>Click to read bio</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back Side (The Bio) */}
        <div
          className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-white text-dark p-10 flex flex-col justify-center shadow-2xl border-4 border-gray-50"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="space-y-6 h-full overflow-y-auto hide-scrollbar py-4">
            <div>
              <h3 className="text-3xl font-medium text-primary leading-none">
                {member.name}
              </h3>
              <p className="text-black mt-2 uppercase tracking-widest text-sm">
                {member.role}
              </p>
            </div>

            <div className="w-12 h-1 bg-primary rounded-full" />

            <p className="text-lg text-dark/70 leading-relaxed">
              {member.bio}
            </p>

            <button className="mt-auto text-primary text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              View Photo
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
