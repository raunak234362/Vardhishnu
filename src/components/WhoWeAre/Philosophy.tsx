import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="relative rounded-[3rem] overflow-hidden aspect-16/6 md:aspect-16/5 bg-gray-100 shadow-2xl group min-h-[500px] flex items-center justify-center">
          {/* Background Image Space */}
          <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/20 transition-all duration-700">
            <div className="w-full h-full flex items-center justify-center text-gray-400 italic font-black text-4xl uppercase tracking-[1em] opacity-10">
              Philosophy Background Image Space
            </div>
          </div>

          <div className="container absolute inset-0 flex items-center justify-center lg:justify-start px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-14 lg:p-16 rounded-[2.5rem] shadow-2xl relative z-10 max-w-4xl border border-black/5"
            >
              <div className="relative inline-block mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tighter">
                  Our Guiding Philosophy
                </h2>
                <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300 hover:w-full" />
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-black text-dark/80 leading-relaxed max-w-3xl">
                  We are rooted in Ubuntu – "I am because we are." Our mission
                  is not just to protect vulnerable children, but to transform
                  entire communities into safe, nurturing, and self-sustaining
                  environments where children can learn, grow, and lead with
                  confidence
                </p>

                <div className="flex justify-end pt-8">
                  <p className="text-dark font-black text-xl italic max-w-md text-right leading-tight">
                    At Vardhishnu, we’re not just changing lives—we’re changing
                    the way the world sees every child.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
