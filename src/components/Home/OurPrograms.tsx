import { motion } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";

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
              className="group relative h-[70vh] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={getImageUrl(program.image)}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-primary text-3xl font-bold mb-3">
                  {program.name}
                </h3>
                <p className="text-white/90 text-lg font-semibold leading-relaxed mb-6">
                  {program.description}
                </p>
                <button className="self-end text-primary font-bold hover:underline flex items-center text-right gap-2 group-hover:gap-3 text-lg transition-all">
                  Read More
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
