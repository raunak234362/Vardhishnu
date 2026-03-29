import { motion } from "framer-motion";
import data from "../../data/data.json";

const OurPrograms = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-dark tracking-tight">
          {data.programs.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.programs.items.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[50vh] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl"
            >
              {/* Background Image Space */}
              <div className="absolute inset-0 z-0">
                {/* Fallback space for user added image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 italic bg-black/10">
                  {program.name} Image Space
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-primary text-2xl font-bold mb-3">
                  {program.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="self-start text-primary font-bold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
