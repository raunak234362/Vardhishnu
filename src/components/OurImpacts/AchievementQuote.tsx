import { motion } from "framer-motion";

const AchievementQuote = () => {
  return (
    <section className="py-15 bg-white text-center">
      <div className="container-custom px-6 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Subtle quote marks could be added here if desired */}
          <p className="text-[24px] font-medium text-dark/70 leading-[1.6]">
            "<span className="text-primary">Vardhishnu</span> has been
            part of the National Report on “Documentation & Compilation of the
            best practices of Sustainable Development as propounded by Pt. Deen
            Dayal Upadhaya”, by Ministry of Culture, Government of India among
            200 best practices across India.”"
          </p>

          {/* <div className="mt-12 w-24 h-1 bg-primary/20 mx-auto rounded-full" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementQuote;
