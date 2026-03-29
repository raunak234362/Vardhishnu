import { motion } from "framer-motion";
import data from "../../data/data.json";

const Impact = () => {
  const { title, metrics } = data.impact;

  return (
    <section className="relative pt-16">
      {/* Wave/Card Header Overlapping Section */}
      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative Wave Pattern (CSS approximation) */}
          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-5">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#000"
                d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
              ></path>
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-dark mb-10 max-w-4xl relative z-10 leading-tight tracking-tighter">
            {title}
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-full relative z-10" />
        </motion.div>
      </div>

      {/* Metrics Section (Green Background) */}
      <div className="bg-primary -mt-24 pt-48 pb-24 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums">
                  {metric.value}
                </div>
                <div className="w-12 h-1 bg-white/40 mb-4" />
                <p className="text-white font-bold text-lg leading-snug">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
