import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const slides = data.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);


  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={getImageUrl(slides[currentSlide].background)}
            alt={slides[currentSlide].headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50"></div>
        </motion.div>
      </AnimatePresence>

      <div className=" mx-auto z-10 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-center items-center gap-5 pt-64"
          >
            <h1 className="text-3xl md:text-5xl font-normal mb-2 tracking-tighter">
              {slides[currentSlide].headline}
            </h1>
            <h2 className="text-3xl md:text-9xl font-handwritten text-primary mb-8 drop-shadow-lg">
              {slides[currentSlide].subheadline}
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black rounded-full px-10 py-5 text-xl group shadow-2xl flex items-center gap-3">
                <Play
                  size={24}
                  className="group-hover:scale-110 transition-transform fill-current"
                />
                <span className="font-bold uppercase tracking-wider">
                  {slides[currentSlide].cta}
                </span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation */}
      {/* <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition-all text-white backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 transition-all text-white backdrop-blur-sm"
        >
          <ChevronRight size={24} aria-label="Next Slide" />
        </button>
      </div> */}

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-10 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentSlide ? 1 : -1);
              setCurrentSlide(i);
            }}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentSlide === i ? "w-12 bg-primary" : "w-12 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
