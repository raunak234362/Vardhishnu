import { motion } from "framer-motion";

const OurProgramHero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764802/10_Photo_a9ufru.jpg"
          alt="Our Programs Hero"
          className="w-full h-full object-cover object-top grayscale blur-xs brightness-90 contrast-125 bg-blur-xl"
        />
      </div>

      <div className="container-custom relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-white text-[40px] tracking-tight drop-shadow-lg">
            Our Programs
          </h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-primary text-3xl md:text-[80.9px] font-bold italic leading-[1.2]! max-w-5xl mx-auto drop-shadow-2xl font-handwritten"
          >
            Creating lasting impact through education, health, and community programs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProgramHero;
