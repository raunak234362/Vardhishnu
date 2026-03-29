import impactData from "../../data/impact.json";
import { motion } from "framer-motion";

const Awards = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-16 text-left">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm">
            Awards
          </h2>
        </div>

        <div className="space-y-4">
          {impactData.awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 py-6 border-b border-black/5 last:border-0 hover:bg-gray-50 transition-colors px-4 rounded-xl group"
            >
              <div className="md:col-span-5">
                <h4 className="text-lg text-dark leading-tight group-hover:text-primary transition-colors">
                  {award.name}
                </h4>
              </div>
              <div className="md:col-span-6">
                <p className="text-dark/40 font-medium text-sm">{award.by}</p>
              </div>
              <div className="md:col-span-1 text-right">
                <span className="text-dark tracking-tight bg-primary/10 px-3 py-1 rounded-full text-sm">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
