import { motion } from "framer-motion";
import data from "../../data/data.json";
import HomePageWave from "../../assets/HomePageWave.svg";
import Counter from "../common/Counter";

const Impact = () => {
  const { title, metrics } = data.impact;

  return (
    <section className="relative pt-16">
      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-12 md:p-28 shadow-xl overflow-hidden relative"
        >
          {/* Decorative Wave Pattern (CSS approximation) */}
          <div className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply">
            <img
              src={HomePageWave}
              alt=""
              className="w-full h-full object-cover object-right scale-[1.05]"
            />
          </div>

          <h2 className="text-dark mb-10 text-left font-semibold relative z-10 leading-tight tracking-wider">
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
                className="flex flex-col items-center md:items-center text-center md:text-left"
              >
                <div className="text-[40px] md:text-[40px] font-semibold text-white mb-2 tabular-nums">
                  <Counter value={metric.value} />
                </div>
                <div className="w-12 h-1 bg-black mb-4" />
                <p className="text-white text-lg leading-snug">
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
