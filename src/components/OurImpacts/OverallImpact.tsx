import { motion } from "framer-motion";
import Counter from "../common/Counter";

const OverallImpact = () => {
  const impacts = [
    {
      label: "70",
      sub: "Spaces of Learning & Support Created",
      className: "bg-[#f9fde6] border-[#e0e9b4]",
    },
    {
      label: "7000+",
      sub: "Overall Children Impacted",
      className: "bg-[#fff3f1] border-[#f9dbd6]",
    },
    {
      label: "300+",
      sub: "Children in Vardhishnu's project areas",
      className: "bg-[#f9fde6] border-[#e0e9b4]",
    },
    {
      label: "7000",
      sub: "Children in partner organisations project areas",
      className: "bg-[#fff3f1] border-[#f9dbd6]",
    },
    {
      label: "3000",
      sub: "Children enrolled in schools",
      className: "bg-[#fff3f1] border-[#f9dbd6] lg:col-span-5",
    },
    {
      label: "2500",
      sub: "Children freed from clutches of child labor",
      className: "bg-[#f9fde6] border-[#e0e9b4] lg:col-span-4",
    },
    {
      label: "33",
      sub: "Organisations Incubated",
      className: "bg-[#fff3f1] border-[#f9dbd6] lg:col-span-3",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration matching the design */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[30%] bg-primary/5 rounded-[100%] scale-x-150 translate-y-1/2 z-0" /> */}

      <div className="container-custom px-6 lg:px-20 relative z-10">
        <div className="mb-14 text-left">
          <h2 className="text-[36px] font-semibold text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-md">
            Overall impact
          </h2>
        </div>

        {/* Row 1 - 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {impacts.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`p-10 rounded-[24px] border-2 border-dashed min-h-[250px] flex flex-col justify-between transition-all duration-300 group ${item.className} hover:shadow-2xl hover:scale-[1.02] bg-linear-to-br from-white/40 to-transparent`}
            >
              <h3 className="text-[42px] font-bold tracking-tight leading-none text-dark/90">
                <Counter value={item.label} />
              </h3>
              <p className="text-dark/50 text-[18px] font-medium leading-[1.3] pt-8">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 - 3 items with custom spans to fill row nicely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 relative">
          {impacts.slice(4).map((item, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.05 }}
              className={`p-10 rounded-[24px] border-2 border-dashed min-h-[250px] flex flex-col justify-between transition-all duration-300 group ${item.className} hover:shadow-2xl hover:scale-[1.02] bg-linear-to-br from-white/40 to-transparent`}
            >
              <h3 className="text-[42px] font-bold tracking-tight leading-none text-dark/90">
                <Counter value={item.label} />
              </h3>
              <p className="text-dark/50 text-[18px] font-medium leading-[1.3] pt-8">
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
