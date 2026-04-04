import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    {
      value: "33 Million",
      label: "Child labors in India - Census 2011",
      bgColor: "bg-red-50",
    },
    {
      value: "32 million children upto age of 13",
      label: "have never attended any school. - NSSO, 2014",
      bgColor: "bg-white border border-black/5",
    },
    {
      value: "56000 children die every year",
      label: "In slums due to malnutrition - Study in 2017",
      bgColor: "bg-red-50",
    },
    {
      value: "Every hour 6 child abuse cases",
      label:
        "abuse cases are reported. - The National Crime Record Bureau 2019",
      bgColor: "bg-white border border-black/5",
    },
    {
      value: "500% Crime against children",
      label: "have increased by 500% in last decade - CRY 2016",
      bgColor: "bg-red-50",
    },
    {
      value: "1.5 million girls",
      label: "Girls under 18 get married in India. - UNICEF",
      bgColor: "bg-white border border-black/5",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="mb-20 text-left">
          <h2 className="text-dark tracking-tighter inline-block relative">
            Statistics
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full transition-all duration-300" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-2xl min-h-[260px] flex flex-col justify-between shadow-sm transition-all duration-500 group ${
                stat.bgColor.includes("bg-white")
                  ? "bg-white border border-red-50"
                  : stat.bgColor
              }`}
            >
              <h2 className="text-dark leading-tight tracking-tight transition-colors duration-300 font-bold">
                {stat.value}
              </h2>
              <p className="text-dark/40 font-regular text-[20px] leading-relaxed max-w-[90%]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
