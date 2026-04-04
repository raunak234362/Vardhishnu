import impactData from "../../data/impact.json";
import { motion } from "framer-motion";
import trophy from "../../assets/unknown.svg";

const Felicitations = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-10 text-left">
          <h2 className="text-dark font-semibold tracking-tighter inline-block relative">
            Felicitations
            <div className="absolute -bottom-6 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-6">
          {impactData.felicitations.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <img src={trophy} alt="" />
              </div>
              <p className="text-dark/70 font-bold leading-relaxed pt-1 tracking-tight">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Felicitations;
