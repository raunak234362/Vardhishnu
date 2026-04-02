import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const ImpactHero = () => {
  const images = [
    "https://res.cloudinary.com/di7aduhjv/image/upload/v1774764825/Copy_of_DSCN2562_ckry92.jpg",
    "https://res.cloudinary.com/di7aduhjv/image/upload/v1774765440/2._Home_Page_2_vahlkz.jpg",
    "https://res.cloudinary.com/di7aduhjv/image/upload/v1774765433/_DSC6957_paziba.jpg",
    "https://res.cloudinary.com/di7aduhjv/image/upload/v1774764820/Copy_of_IMG_3697_pajplc.jpg",
    "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto,f_auto,a_-90/v1774764824/Copy_of_IMG_3782_gkurvp.jpg",
  ];

  return (
    <section className="pt-10 pb-0 bg-white overflow-hidden text-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-8 mb-16 px-4"
        >
          <h1 className="text-4xl md:text-6xl text-dark leading-tight tracking-tight">
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

        <div className="relative pt-5 pb-40">
          {/* Light green/yellow curved background decoration */}
          <div className="absolute inset-0 bg-primary/20 rounded-[100%] scale-x-150 translate-y-32 z-0" />

          <div className="relative z-10 grid grid-cols-5 justify-center items-center gap-4 md:gap-8 px-4">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative w-36 h-48 md:w-64 md:h-56 rounded-2xl overflow-hidden shadow-2xl group bg-white"
                style={{
                  marginTop: index % 2 === 0 ? "0" : "60px",
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                <img
                  src={getImageUrl(img)}
                  alt={`Impact Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
