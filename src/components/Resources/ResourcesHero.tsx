import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const ResourcesHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src={getImageUrl("v1774765432/IMG_7970_xjrcnp.jpg")} alt="" />
      </div>

      <div className="container-custom relative z-20 text-center px-6 mt-[15%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-white text-[40px] font-medium tracking-tight drop-shadow-2xl">
            Resources
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-primary text-[80.9px] font-medium italic drop-shadow-2xl font-handwritten"
          >
            From Care to Change
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesHero;
