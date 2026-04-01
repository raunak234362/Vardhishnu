import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";
import LazyImage from "../common/LazyImage";

const OurTeam = () => {
  const tabs = Object.keys(data.team);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const teamMembers = data.team;

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative">
            Our Team
            <div className="absolute -bottom-3 left-0 w-2/3 h-1 bg-primary rounded-full transition-all duration-300 hover:w-full" />
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 md:gap-12 mb-16 border-b border-black/5 pb-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-bold transition-all relative pb-2 ${
                activeTab === tab
                  ? "text-primary"
                  : "text-dark/40 hover:text-dark/70"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 col-span-full"
            >
              {teamMembers[activeTab as keyof typeof teamMembers]?.length >
              0 ? (
                teamMembers[activeTab as keyof typeof teamMembers].map(
                  (member) => <TeamCard key={member.name} member={member} />,
                )
              ) : (
                <div className="col-span-full py-20 text-center text-dark/30 italic font-medium">
                  Team details coming soon for {activeTab}...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
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
          <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/80 via-black/40 to-transparent pt-20">
            <h3 className="text-2xl font-black text-primary italic leading-none">
              {member.name}
            </h3>
            <p className="text-white font-bold mt-2">{member.role}</p>
            <div className="mt-4 flex items-center gap-2 text-white/60 text-sm font-semibold uppercase tracking-wider">
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
          className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-dark text-white p-10 flex flex-col justify-center shadow-2xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="space-y-6 h-full overflow-y-auto no-scrollbar py-4">
            <div>
              <h3 className="text-3xl font-black text-primary italic leading-none">
                {member.name}
              </h3>
              <p className="text-primary-dark font-bold mt-2 uppercase tracking-widest text-sm">
                {member.role}
              </p>
            </div>

            <div className="w-12 h-1 bg-primary rounded-full" />

            <p className="text-lg text-white/90 leading-relaxed font-medium">
              {member.bio}
            </p>

            <button className="mt-auto text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all pt-4">
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
