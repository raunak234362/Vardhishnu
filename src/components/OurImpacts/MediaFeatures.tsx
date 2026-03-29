import impactData from "../../data/impact.json";
import { motion } from "framer-motion";

const MediaFeatures = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-16 text-left">
          <h2 className="text-4xl font-black text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm mb-4">
            As Featured In
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-items-center opacity-70 group-hover:opacity-100 transition-opacity">
          {impactData.featured_in.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full flex items-center justify-center p-8 border border-black/5 rounded-4xl bg-gray-50/50 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-32"
            >
              <div className="text-2xl font-black text-dark tracking-tighter uppercase grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                {media.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
