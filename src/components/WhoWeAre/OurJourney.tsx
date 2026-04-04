import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const OurJourney = () => {
  return (
    <section className="py-10 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Overlapping Images Column */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-start justify-end pr-10">
            {/* Top Right Back Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-[85%] aspect-square rounded-[2.5rem] bg-gray-200 overflow-hidden shadow-2xl z-10"
            >
              <img
                src={getImageUrl("v1774777352/Pasted_image_uq8vhz.png")}
                alt="Woman and child"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Bottom Left Front Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: -30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-10 left-0 lg:-left-6 w-[50%] aspect-square rounded-[2.5rem] bg-gray-300 overflow-hidden shadow-2xl z-20 "
            >
              <img
                src={getImageUrl("v1774777319/Pasted_image_uvedgk.png")}
                alt="Group with children"
                className="w-full h-full object-cover"
              />
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
                <h2 className="text-[32px] text-dark tracking-tighter ">
                  Our Journey
                </h2>
                <div className="absolute -bottom-7 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300 hover:w-full mt-4" />
              </div>

              <div className="space-y-6 mt-10 text-[16px] text-dark leading-relaxed ">
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
