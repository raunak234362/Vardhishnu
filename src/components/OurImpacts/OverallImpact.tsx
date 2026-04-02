import { motion } from "framer-motion";

const OverallImpact = () => {
  const impacts = [
    {
      label: "70",
      sub: "Spaces of Learning & Support Created",
      color: "bg-yellow-50/80 border-primary/20 hover:bg-yellow-100",
    },
    {
      label: "7000+",
      sub: "Overall Children Impacted",
      color: "bg-red-50/80 border-red-200/50 hover:bg-red-100",
    },
    {
      label: "300+",
      sub: "Children in Vardhishnu's project areas",
      color: "bg-yellow-50/80 border-primary/20 hover:bg-yellow-100",
    },
    {
      label: "7000",
      sub: "Children in partner organisations project areas",
      color: "bg-red-50/80 border-red-200/50 hover:bg-red-100",
    },
    {
      label: "3000",
      sub: "Children enrolled in schools",
      color: "bg-red-50/80 border-red-200/50 hover:bg-red-100",
    },
    {
      label: "2500",
      sub: "Children freed from clutches of child labor",
      color: "bg-yellow-50/80 border-primary/20 hover:bg-yellow-100",
    },
    {
      label: "33",
      sub: "Organisations Incubated",
      color: "bg-red-50/80 border-red-200/50 hover:bg-red-100",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-20 text-left">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm">
            Overall impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`p-10 rounded-[2.5rem] border-2 border-dashed min-h-[220px] flex flex-col justify-center gap-4 transition-all duration-300 group ${item.color}`}
            >
              <h3 className="text-4xl md:text-5xl tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                {item.label}
              </h3>
              <p className="text-dark/40 text-lg leading-snug">
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
