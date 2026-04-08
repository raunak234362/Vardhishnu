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
              <h2 className="space-y-10 text-dark md:font-regular font-semibold tracking-tighter inline-block relative pr-10">
                {title}
                <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full transition-all duration-300 " />
                {/* Floating Pin on Heading */}
              
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
            className="relative rounded-xl overflow-hidden shadow-2xl z-10"
          >
            <img
              src={getImageUrl("v1774764831/Vardhishnu_4_xag2oq.jpg")}
              alt="Landfill Child Documentary"
              className="w-full object-cover grayscale brightness-90 contrast-110 h-[500px]"
            />
            {/* Overlay for aesthetic consistency */}
            <div className="absolute inset-0 bg-dark/5 pointer-events-none" />

          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChildrenHero;
