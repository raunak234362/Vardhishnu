import impactData from "../../data/impact.json";
import { motion } from "framer-motion";

const DateBlock = ({ date, month, location, color }: { date: string; month?: string; location: string; color: string }) => (
  <div className="flex items-center gap-4">
    <span className="text-3xl md:text-4xl text-dark tracking-tight font-medium min-w-[3rem]">
      {date}
    </span>
    <div className="flex flex-col select-none">
      {month && (
        <span className="text-xs text-dark/60 whitespace-nowrap">
          {month}
        </span>
      )}
      <span 
        className="text-[10px] md:text-xs font-bold tracking-tight uppercase"
        style={{ color }}
      >
        {location}
      </span>
    </div>
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
    <section className="py-24 bg-white relative">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-5xl text-dark tracking-tighter inline-block relative mb-6">
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
                className="p-6 md:p-8 bg-white border border-gray-100 rounded-sm hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
                  {/* Left Side: Ring & Dates */}
                  <div className="flex items-center gap-6 shrink-0">
                    <div 
                      className="w-3 h-3 rounded-full border-2 bg-transparent shrink-0" 
                      style={{ borderColor: color }}
                    />
                    
                    {isDualDate ? (
                      <div className="flex items-center gap-6">
                        {dualDates.map((d, i) => {
                          const [dPart, ...mPart] = d.split(" ");
                          return (
                            <div key={i} className="flex items-center gap-6">
                              <DateBlock 
                                date={dPart}
                                month={mPart.join(" ")}
                                location={conf.location}
                                color={color}
                              />
                              {i === 0 && <span className="text-4xl text-dark/30 font-light">&ndash;</span>}
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
                  <div className="flex-1 lg:pl-12">
                    <p 
                      className="text-base md:text-lg leading-relaxed font-medium"
                      style={{ color }}
                    >
                      <span>‘{conf.title}’</span>
                      <span className="opacity-80 font-normal ml-2">
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
