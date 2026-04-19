import { motion } from "framer-motion";
import Counter from "../common/Counter";

const OverallImpact = () => {
  const impacts = [
    {
      label: "70",
      sub: "Spaces of Learning & Support Created",
      className: "bg-[#fdf6b2] border-[#fde047] col-span-1 lg:col-span-3",
    },
    {
      label: "7000+",
      sub: "Overall Children Impacted",
      className: "bg-[#ffd9d4] border-[#f9bdb5] col-span-1 lg:col-span-3",
    },
    {
      label: "300+",
      sub: "Children in Vardhishnu's project areas",
      className: "bg-[#fdf6b2] border-[#fde047] col-span-1 lg:col-span-3",
    },
    {
      label: "7000",
      sub: "Children in partner organisations project areas",
      className: "bg-[#ffd9d4] border-[#f9bdb5] col-span-1 lg:col-span-3",
    },
    {
      label: "3000",
      sub: "Children enrolled in schools",
      className: "bg-[#ffd9d4] border-[#f9bdb5] col-span-1 lg:col-span-5",
    },
    {
      label: "2500",
      sub: "Children freed from clutches of child labor",
      className: "bg-[#fdf6b2] border-[#fde047] col-span-1 lg:col-span-4",
    },
    {
      label: "33",
      sub: "Organisations Incubated",
      className: "bg-[#ffd9d4] border-[#f9bdb5] col-span-2 lg:col-span-3",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom px-6 lg:px-20 relative z-10">
        <div className="mb-14 text-left">
          <h2 className="text-[32px] font-semibold text-dark tracking-tighter inline-block relative">
            Overall impact
            <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`p-6 md:p-10 rounded-[24px] border-2 border-dashed min-h-[200px] md:min-h-[250px] flex flex-col justify-between group ${item.className}`}
            >
              <h3 className="text-[24px] md:text-[42px] font-bold tracking-tight leading-none text-dark/90 text-left">
                <Counter value={item.label} />
              </h3>
              <p className="text-dark/50 text-[20px] md:text-[18px] font-medium leading-[1.3] pt-4 md:pt-8 text-left">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverallImpact;
