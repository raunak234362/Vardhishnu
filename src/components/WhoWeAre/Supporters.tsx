import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const Supporters = () => {
  const supporters = [
    { name: "Wipro", img: "/assets/supporters/wipro.png" },
    { name: "UnLtd India", logo: "/assets/supporters/unltd.png" },
    {
      name: "Bhanwarlal & Kantabai Jain Foundation",
      logo: "/assets/supporters/jain-foundation.png",
    },
    { name: "TFIx", logo: "/assets/supporters/tfix.png" },
    { name: "Palakneeti Pariwar", logo: "/assets/supporters/palakneeti.png" },
    {
      name: "Azim Premji Foundation",
      logo: "/assets/supporters/azim-premji.png",
    },
    {
      name: "Jain Irrigation Systems",
      logo: "/assets/supporters/jain-irrigation.png",
    },
    { name: "Vega Chemicals", logo: "/assets/supporters/vega.png" },
    { name: "Acumen", logo: "/assets/supporters/acumen.png" },
    { name: "Nirman", logo: "/assets/supporters/nirman.png" },
    { name: "GAP", logo: "/assets/supporters/gap.png" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20 text-left">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative">
            Supported & Accredited By
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 items-center justify-items-center">
          {supporters.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="h-24 w-full flex items-center justify-center bg-gray-50/50 rounded-2xl border border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="text-dark/20 font-bold text-xs uppercase text-center px-4">
                  {item.name} Logo Space
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
