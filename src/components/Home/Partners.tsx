import { motion } from "framer-motion";
import data from "../../data/data.json";

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl mb-12 text-dark tracking-tight text-center md:text-left">
          Accredited & Supported By
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-32 rounded-2xl bg-[#f8f9fa] border border-black/5 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 group"
            >
              {/* Logo Placeholder */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-full h-full text-center flex items-center justify-center font-bold text-dark/30 group-hover:text-primary transition-colors italic">
                  {partner.name} Logo
                </div>
              </div>
            </motion.div>
          ))}
          {/* Third and Fourth Placeholder as in mockup or for symmetry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-32 rounded-2xl bg-[#f8f9fa] border border-black/5 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 group"
          >
            <div className="w-full h-full text-center flex items-center justify-center font-bold text-dark/30 group-hover:text-primary transition-colors italic">
              Third Partner Logo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
