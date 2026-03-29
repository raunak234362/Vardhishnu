import { motion } from "framer-motion";

const ImpactHero = () => {
  const images = [
    "/assets/impact/1.jpg",
    "/assets/impact/2.jpg",
    "/assets/impact/3.jpg",
    "/assets/impact/4.jpg",
    "/assets/impact/5.jpg",
  ];

  return (
    <section className="pt-32 pb-0 bg-white overflow-hidden text-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-8 mb-16 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-medium text-dark leading-tight tracking-tight">
            This is the impact{" "}
            <span
              className="text-primary italic px-2 text-5xl md:text-7xl align-middle"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              you
            </span>{" "}
            helped us achieve in 2024-25
          </h1>

          <div className="w-full h-1 bg-primary/40 rounded-full max-w-4xl mx-auto" />

          <p className="text-dark/50 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We've been able to make a positive impact on the lives of so many
            children, all thanks to your unwavering support.
          </p>
        </motion.div>

        <div className="relative pt-20 pb-40">
          {/* Light green/yellow curved background decoration */}
          <div className="absolute inset-0 bg-primary/10 rounded-[100%] scale-x-150 translate-y-32 z-0" />

          <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4">
            {images.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative w-36 h-48 md:w-56 md:h-72 rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white bg-white"
                style={{
                  marginTop: index % 2 === 0 ? "0" : "60px",
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 italic text-[10px] p-4 text-center">
                  Impact Photo {index + 1}
                </div>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
