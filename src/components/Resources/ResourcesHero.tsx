import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const ResourcesHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 md:bg-black/60 z-10" />
        <img 
          src={getImageUrl("v1774765432/IMG_7970_xjrcnp.jpg")} 
          alt="Resources Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-2 md:space-y-4"
        >
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight drop-shadow-lg">
            Resources
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col"
          >
            <span className="text-primary text-[60px] md:text-[80px] lg:text-[100px] font-medium italic leading-tight drop-shadow-2xl font-handwritten">
              Transforming
            </span>
            <span className="text-primary text-[60px] md:text-[80px] lg:text-[100px] font-medium italic leading-none md:leading-tight drop-shadow-2xl font-handwritten -mt-4 md:-mt-6">
              Communities
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesHero;
