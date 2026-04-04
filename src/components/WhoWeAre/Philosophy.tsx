import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Main Background Container */}
        <div className="relative rounded-[3rem] overflow-hidden min-h-[600px] shadow-2xl flex items-center p-6 md:p-12 lg:p-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={getImageUrl("v1774764808/DSCN2397_gfciqt.jpg")}
              alt="Philosophy background"
              className="w-full h-full object-cover"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Stepped Content Panels */}
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            {/* 1. Heading Box (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white px-18 py-2 rounded-t-xl relative z-30 inline-block"
            >
              <h2 className="text-[32px] text-dark font-semibold tracking-wide">
                Our Guiding Philosophy
              </h2>
              <div className="w-16 h-1 bg-[#97BD3E]" />
            </motion.div>

            {/* 2. Main Description Box (Center overlapping) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 md:p-14 rounded-xl shadow-xl w-full lg:w-[100%] -mt-6 relative z-20 ml-0"
            >
              <div className="space-y-4 max-w-5xl">
                <p className="text-[16px] text-dark leading-relaxed font-medium">
                  We are rooted in Ubuntu – "I am because we are."
                </p>
                <p className="text-[16px] text-dark leading-relaxed">
                  Our mission is not just to protect vulnerable children, but to
                  transform entire communities into safe, nurturing, and
                  self-sustaining environments where children can learn, grow,
                  and lead with confidence
                </p>
              </div>
            </motion.div>

            {/* 3. Quote Box (Bottom Right Overlapping) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 md:p-10 rounded-2xl w-full lg:w-[55%] self-end -mt-16 relative z-30 ml-auto border-l-0"
            >
              <p className="text-[16px] text-dark text-center leading-tight font-medium">
                At Vardhishnu, we're not just changing lives—we're changing the
                way the world sees every child.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
