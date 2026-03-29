import { motion } from "framer-motion";
import { getImageUrl } from "../../../utils/imageUrl";
import data from "../../../data/anandghar.json";
import LazyImage from "../../common/LazyImage";

const AnandgharApproach = () => {
  return (
    <section className="bg-white">
      {/* Hero Header with handwritten overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <LazyImage
          src={getImageUrl(data.hero.image)}
          alt="AnandGhar Hero"
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center lg:items-end lg:justify-start lg:p-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-handwritten text-7xl md:text-9xl lg:text-[10rem] drop-shadow-2xl"
          >
            AnandGhar
          </motion.h1>
        </div>
      </div>

      <div className="container-custom py-24">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
                {data.approach.title}
              </h2>
              <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
            </div>

            <div className="space-y-8">
              {data.approach.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl text-dark/80 leading-relaxed font-semibold max-w-2xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Overlapping Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 lg:-mt-48 relative z-20"
          >
            <div className="aspect-3/4 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <LazyImage
                src={getImageUrl(data.approach.sideImage)}
                alt="Our approach image"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnandgharApproach;
