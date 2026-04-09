import impactData from "../../data/impact.json";
import { motion } from "framer-motion";

const DateBlock = ({ date, month, location, color }: { date: string; month?: string; location: string; color: string }) => (
  <div className="flex flex-col select-none">
    <span className="text-4xl md:text-5xl font-bold text-dark tracking-tight leading-none">
      {date}
    </span>
    {month && (
      <span className="text-sm md:text-base text-dark/50 font-medium mt-1">
        {month}
      </span>
    )}
    <span 
      className="text-xs md:text-sm font-bold uppercase mt-1"
      style={{ color }}
    >
      {location}
    </span>
  </div>
);

const Conferences = () => {
  const colors = [
    "#5D5FEF", // Purple/Blue
    "#00BA88", // Green
    "#00D1FF", // Sky Blue
    "#EA580C", // Orange
    "#0EA5E9", // Blue
    "#10B981", // Teal Green
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-16 text-left">
          <h2 className="text-dark font-semibold tracking-tighter inline-block relative mb-6">
            Conferences
            <div className="absolute -bottom-6 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </h2>
          <p className="text-dark/50 text-xl leading-relaxed mt-4">
            We have proudly presented about our work in following conferences:
          </p>
        </div>

        <div className="space-y-4">
          {impactData.conferences.map((conf, index) => {
            const color = colors[index % colors.length];
            
            // Special handling for dual dates like "30 Jan, 2018 - 04 Feb, 2019"
            const isDualDate = conf.date.includes(" - ") && conf.date.length > 20;
            const dualDates = isDualDate ? conf.date.split(" - ") : [];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 md:p-10 bg-white border border-gray-100 rounded-sm hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`flex flex-col ${isDualDate ? 'lg:flex-col' : 'lg:flex-row'} items-start gap-8 lg:gap-16`}>
                  {/* Left Side: Ring & Dates */}
                  <div className="flex items-start gap-6 shrink-0">
                    <div 
                      className={`w-4 h-4 rounded-full border-4 bg-white shrink-0 mt-2 ${isDualDate ? 'translate-y-20' : ''}`} 
                      style={{ borderColor: color }}
                    />
                    
                    {isDualDate ? (
                      <div className="flex flex-col gap-4">
                        {dualDates.map((d, i) => {
                          const parts = d.trim().split(" ");
                          const dPart = parts[0];
                          const mPart = parts.slice(1).join(" ");
                          return (
                            <div key={i} className="flex flex-col">
                              {i === 1 && <span className="text-3xl font-bold text-dark my-1">—</span>}
                              <div className="flex flex-col">
                                <span className="text-4xl md:text-5xl font-bold text-dark leading-none">{dPart}</span>
                                <span className="text-sm md:text-base text-dark/50 font-medium mt-1">{mPart}</span>
                                <span className="text-xs md:text-sm font-bold uppercase mt-1" style={{ color }}>{conf.location}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <DateBlock 
                        date={conf.date}
                        month={conf.month}
                        location={conf.location}
                        color={color}
                      />
                    )}
                  </div>

                  {/* Right Side: Content */}
                  <div className={`flex-1 ${isDualDate ? 'lg:pl-0' : 'lg:pl-12 lg:pt-1'}`}>
                    <p 
                      className="text-lg md:text-xl leading-relaxed font-medium"
                      style={{ color }}
                    >
                      <span className="font-semibold">{conf.title}</span>
                      <span className="opacity-80 font-normal ml-3">
                        {conf.org}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
