import impactData from "../../data/impact.json";
import { motion } from "framer-motion";
import LazyImage from "../common/LazyImage";

const MediaFeatures = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-20 text-left">
          <h2 className="text-dark font-semibold tracking-tighter inline-block relative">
            As Featured In
            <div className="absolute -bottom-6 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center">
          {impactData.featured_in.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center"
              >
                <LazyImage
                  src={media.logo}
                  alt={media.name}
                  className="max-w-[180px] md:max-w-[240px] h-auto object-contain transition-all opacity-80 hover:opacity-100"
                  containerClassName="w-full flex items-center justify-center"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
