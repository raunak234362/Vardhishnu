import { motion } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";
import LazyImage from "../common/LazyImage";

const Partners = () => {
  // Duplicate partners for seamless marquee effect
  const marqueeItems = [...data.partners, ...data.partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <h2 className="mb-16 text-dark tracking-tight text-center md:text-left">
          Accredited & Supported By
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Logo Marquee Container */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40, // Adjust speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="shrink-0 flex items-center justify-center w-40 md:w-80 h-48 p-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <LazyImage
                src={getImageUrl(partner.logo)}
                alt={partner.name}
                className="h-36 w-auto object-contain transition-all duration-300"
                containerClassName="inline-block"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for cleaner edge transitions */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Partners;
