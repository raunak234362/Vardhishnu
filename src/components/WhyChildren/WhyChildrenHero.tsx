import { motion } from "framer-motion";
import appData from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";

const WhyChildrenHero = () => {
  const { title, introduction, rights } = appData.whychildren;

  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="space-y-10 text-dark tracking-tighter inline-block relative pr-10">
                {title}
                <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full transition-all duration-300 " />
                {/* Floating Pin on Heading */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white z-20">
                  <img
                    src={getImageUrl("v1774764839/Vinod_Chaudhari_scendr.jpg")}
                    className="w-full h-full object-cover"
                    alt="pin"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-glow" />
                  </div>
                </div>
              </h2>
            </div>

            <div className="space-y-6 text-dark/70 text-[16px] font-medium leading-relaxed">
              <p>{introduction}</p>

              <ul className="space-y-4">
                {rights.map((right, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-dark tracking-tight">
                        {right.title}
                      </strong>
                      , {right.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10"
          >
            <img
              src={getImageUrl("v1774764831/Vardhishnu_4_xag2oq.jpg")}
              alt="Landfill Child Documentary"
              className="w-full object-cover grayscale brightness-90 contrast-110 h-[500px]"
            />
            {/* Overlay for aesthetic consistency */}
            <div className="absolute inset-0 bg-dark/5 pointer-events-none" />

            {/* Floating Pin on Image */}
            <div className="absolute top-12 left-12 w-12 h-12 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white z-20">
              <img
                src={getImageUrl("v1774764839/Vinod_Chaudhari_scendr.jpg")}
                className="w-full h-full object-cover"
                alt="pin"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white shadow-glow" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChildrenHero;
