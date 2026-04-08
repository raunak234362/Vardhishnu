import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const WhoWeAreHero = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-dark/40 font-medium tracking-wide uppercase text-[20px]">
                Who we are
              </span>
              <h1 className="text-[32px] text-dark md:font-normal font-semibold mt-4 leading-tight tracking-tighter">
                Creating hope, impacting lives globally
              </h1>
              <p className="text-[16px] text-dark leading-relaxed mt-6 max-w-xl">
                We work to make quality education accessible to every
                child—empowering them with knowledge, skills, and opportunities
                for a brighter future.
              </p>
            </motion.div>

            {/* Smaller Landscape Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-video rounded-xl bg-gray-100 overflow-hidden shadow-xl"
            >
              <img src={getImageUrl("v1774765442/15_wwlmn7.jpg")} alt="" />
            </motion.div>
          </div>

          {/* Large Main Image Placeholder */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[65vh] rounded-xl overflow-hidden shadow-2xl"
            >
              <img src={getImageUrl("v1774765444/18_to8rpy.jpg")} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
