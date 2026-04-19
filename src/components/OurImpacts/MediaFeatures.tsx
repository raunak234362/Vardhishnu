import impactData from "../../data/impact.json";
import { motion } from "framer-motion";
import LazyImage from "../common/LazyImage";

const MediaFeatures = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-20 px-6 lg:px-20 text-left">
          <h2 className="text-dark font-semibold tracking-tighter inline-block relative">
            As Featured In
            <div className="absolute -bottom-6 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          {/* Logo Marquee Container */}
          <motion.div
            className="flex items-center gap-10 md:gap-24 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20, // Adjust speed from user snippet
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...impactData.featured_in, ...impactData.featured_in, ...impactData.featured_in].map((media, index) => (
              <div
                key={`${media.name}-${index}`}
                className="shrink-0 flex items-center justify-center w-52 md:w-72 h-32 md:h-40 p-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <a
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="opacity-70 transition-opacity flex items-center justify-center w-full h-full"
                  >
                    <LazyImage
                      src={media.logo}
                      alt={media.name}
                      className="h-16 md:h-24 w-auto object-contain"
                      containerClassName="w-full flex items-center justify-center"
                    />
                  </motion.div>
                </a>
              </div>
            ))}
          </motion.div>

          {/* Gradient Fades for cleaner edge transitions */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
