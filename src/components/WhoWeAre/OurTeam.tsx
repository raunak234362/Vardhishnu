import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";

const OurTeam = () => {
  const tabs = Object.keys(data.team);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const teamMembers = data.team;

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-dark tracking-tighter inline-block relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {teamMembers[activeTab as keyof typeof teamMembers]?.length > 0 ? (
              teamMembers[activeTab as keyof typeof teamMembers].map(
                (member) => <TeamCard key={member.name} member={member} />,
              )
            ) : (
              <div className="col-span-full py-20 text-center text-dark/30 italic font-medium">
                Team details coming soon for {activeTab}...
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }: { member: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[550px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-gray-100 overflow-hidden shadow-2xl border-4 border-white">
          <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
            Member Photo Placeholder
          </div>
          {/* Overlay Info */}
          <div className="absolute inset-x-0 bottom-0 p-8 bg-black/40 backdrop-blur-md">
            <h3 className="text-2xl font-black text-primary italic leading-none">
              {member.name}
            </h3>
            <p className="text-white/80 font-bold mt-1">{member.role}</p>
          </div>
        </div>

        {/* Back Side (The Bio) */}
        <div
          className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-dark text-white p-10 flex flex-col justify-center shadow-2xl overflow-y-auto no-scrollbar"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-primary italic leading-none">
                {member.name}
              </h3>
              <p className="text-white/50 font-bold mt-2">{member.role}</p>
            </div>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              {member.bio}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurTeam;
