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
          <h2 className="text-4xl font-black text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm mb-6">
            Conferences
          </h2>
          <p className="text-dark/50 font-medium text-sm leading-relaxed max-w-2xl">
            We have proudly presented about our work in following conferences:
          </p>
        </div>

        <div className="space-y-4">
          {impactData.conferences.map((conf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 md:p-10 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                {/* Status Dot & Date Section */}
                <div className="flex items-center gap-6 shrink-0 md:min-w-[280px]">
                  <div
                    className="w-4 h-4 rounded-full border-4 bg-white"
                    style={{ borderColor: colors[index % colors.length] }}
                  />
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-dark tracking-tighter">
                      {conf.date}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-dark/60 leading-tight">
                        {conf.month}
                      </span>
                      <span
                        className="text-[10px] font-black uppercase tracking-wider"
                        style={{ color: colors[index % colors.length] }}
                      >
                        {conf.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vertical Divider for Desktop */}
                <div className="hidden md:block h-12 w-[2px] bg-gray-100" />

                {/* Title Section */}
                <div className="flex-1 text-left md:text-right">
                  <p
                    className="text-sm md:text-base font-bold leading-relaxed max-w-3xl md:ml-auto"
                    style={{ color: colors[index % colors.length] }}
                  >
                    <span className="font-black italic">‘{conf.title}’</span>{" "}
                    {conf.org}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
