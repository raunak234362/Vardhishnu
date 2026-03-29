import { motion } from "framer-motion";

const Commitment = () => {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-dark leading-[1.15] tracking-tight">
              At Vardhishnu, we believe that every{" "}
              <span className="text-primary italic">child</span> deserves a
              safe, secure, and happy childhood, regardless of the
              socio-economic conditions they are born into.
            </h2>

            <h2 className="text-3xl md:text-5xl font-bold text-dark leading-[1.15] tracking-tight">
              We are <span className="text-primary italic">committed</span> to
              giving every child a fair chance to stand up, take control of
              their life, and live with dignity.
            </h2>
          </div>

          <div className="pt-8 mb-24">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-1 bg-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 text-left relative">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-black text-dark tracking-tighter uppercase inline-block relative border-b-4 border-primary pb-2 rounded-sm">
                OUR VISION
              </h3>
              <p className="text-xl md:text-2xl font-bold text-dark/70 leading-snug">
                Every child will have a safe, secure and happy childhood
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:mt-32"
            >
              <h3 className="text-3xl font-black text-dark tracking-tighter uppercase inline-block relative border-b-4 border-primary pb-2 rounded-sm">
                OUR MISSION
              </h3>
              <p className="text-xl md:text-2xl font-bold text-dark/70 leading-snug">
                To create an eco-system of safe and joyful spaces of learning &
                support for children by collaborating with individuals,
                institutions & initiatives
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment;
