import { motion } from "framer-motion";

const OurJourney = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Overlapping Images Column */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center lg:justify-start">
            {/* Top Back Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[85%] aspect-square rounded-4xl bg-gray-200 overflow-hidden border-8 border-white shadow-xl z-10"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 italic">
                Back Image Space
              </div>
            </motion.div>

            {/* Overlapping Bottom Front Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-10 right-0 lg:-right-10 w-[60%] aspect-3/4 rounded-4xl bg-gray-300 overflow-hidden border-8 border-white shadow-2xl z-20"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                Front Image Space
              </div>
            </motion.div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter">
                  Our Journey
                </h2>
                <div className="absolute -bottom-2 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300 hover:w-full" />
              </div>

              <div className="space-y-6 text-lg text-dark/70 leading-relaxed font-medium">
                <p>
                  Founded in the heart of Jalgaon, Maharashtra, Vardhishnu is
                  more than just a non-profit. We are a movement of hope—a
                  growing community of changemakers committed to building
                  inclusive, compassionate, and resilient ecosystems for
                  children from the most marginalized backgrounds.
                </p>
                <p>
                  At Vardhishnu, we believe that every child deserves a
                  childhood—safe, joyful, and full of possibilities. We work
                  directly with vulnerable children, including child waste
                  pickers, child labourers, and those at risk of dropping out of
                  school, ensuring that their circumstances do not define their
                  future.
                </p>
                <p>
                  Our journey began with a simple but powerful question: What
                  does it take to build a world where no child is left behind?
                </p>
                <p>
                  From the slums and dumping grounds of Jalgaon to rural hamlets
                  and underserved communities, we go where help is most
                  needed—and stay until change becomes sustainable.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
