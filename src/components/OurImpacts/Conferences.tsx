import impactData from "../../data/impact.json";
import { motion } from "framer-motion";

const Conferences = () => {
  const colors = [
    "#5D5FEF", // Purple/Blue
    "#00BA88", // Green
    "#00D1FF", // Sky Blue
    "#FF7A00", // Orange
    "#00A3FF", // Blue
    "#00C6AE", // Teal Green
    "#00D1FF", // Sky Blue
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-12 text-left">
          <h2 className="text-4xl  text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm mb-6">
            Conferences
          </h2>
          <p className="text-dark/50 text-xl leading-relaxed">
            We have proudly presented about our work in following conferences:
          </p>
        </div>

        <div className="space-y-6">
          {impactData.conferences.map((conf, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 md:p-8 bg-white border border-gray-100 rounded-sm hover:shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  {/* Left Side: Date Info */}
                  <div className="flex items-center gap-5 shrink-0">
                    {/* Status Ring */}
                    <div 
                      className="w-4 h-4 rounded-full border-2 bg-transparent shrink-0" 
                      style={{ borderColor: color }}
                    />
                    
                    {/* Date Block */}
                    <div className="flex items-center gap-4">
                      <span className="text-4xl text-dark tracking-tighter whitespace-nowrap">
                        {conf.date}
                      </span>
                      <div className="flex flex-col text-sm md:text-base">
                        {conf.month && (
                          <span className="text-dark/50 font-medium">
                            {conf.month}
                          </span>
                        )}
                        <span 
                          className="font-medium"
                          style={{ color }}
                        >
                          {conf.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Conference Content */}
                  <div className="flex-1">
                    <p 
                      className="text-lg md:text-xl leading-relaxed"
                      style={{ color }}
                    >
                      <span>‘{conf.title}’</span>
                      <span className="opacity-80 ml-2">
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
