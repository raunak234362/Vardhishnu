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
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-0">
            {/* Top Panel: Title & Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full lg:w-[75%] border border-black/5"
            >
              <div className="relative inline-block mb-6">
                <h2 className="text-3xl md:text-5xl  text-dark tracking-tighter">
                  Our Guiding Philosophy
                </h2>
                <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full" />
              </div>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-dark leading-relaxed font-medium">
                  We are rooted in Ubuntu – "I am because we are."
                </p>
                <p className="text-lg md:text-xl text-dark leading-relaxed font-medium">
                  Our mission is not just to protect vulnerable children, but to
                  transform entire communities into safe, nurturing, and
                  self-sustaining environments where children can learn, grow,
                  and lead with confidence.
                </p>
              </div>
            </motion.div>

            {/* Bottom Panel: Signature Quote */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl w-full lg:w-[65%] self-end -mt-8 md:-mt-12 border border-black/5 relative z-20"
            >
              <p className="text-lg md:text-2xl text-dark text-center lg:text-right leading-tight">
                "At Vardhishnu, we're not just changing lives—we're changing the
                way the world sees every child."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
