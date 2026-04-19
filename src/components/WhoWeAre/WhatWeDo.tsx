import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const WhatWeDo = () => {
  return (
    <div className="bg-white">
      {/* What We Do Section */}
      <section className="py-24 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="relative inline-block mb-4">
                <h2 className="text-[32px] text-dark font-medium tracking-tighter">
                  What We Do
                </h2>
                <div className="absolute -bottom-7 left-0 w-1/3 h-0.5 md:h-1 bg-primary rounded-full transition-all duration-300" />
              </div>
              <p className="text-[16px] text-dark leading-relaxed max-w-xl mt-10 ">
                Our core focus areas include education, child protection, and
                community empowerment. We enable children to transition from
                streets and exploitative labour into safe learning spaces and
                formal schools. But our work doesn't stop there—we actively
                partner with communities to build long-term, systemic change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-xl"
            >
              <div className="aspect-video lg:aspect-5/3 rounded-3xl bg-gray-100 overflow-hidden shadow-xl">
                <img
                  src={getImageUrl("v1774764803/8_Our_story_vgsnnk.jpg")}
                  alt=""
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Through our programs Section */}
      <section className="py-10 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2xl"
            >
              <div className="rounded-3xl bg-gray-100 overflow-hidden shadow-xl">
                <img
                  src={getImageUrl(
                    "v1774764792/503506027_2982689175234089_6150840370846881877_n_fu8rvs.jpg",
                  )}
                  alt=""
                  className="object-contain scale-1.5"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="relative inline-block mb-4">
                <h2 className="text-[32px] text-dark font-medium tracking-tighter">
                  Through our programs, we
                </h2>
                <div className="absolute -bottom-7 left-0 w-1/3 h-1.5 bg-primary rounded-full transition-all duration-300" />
              </div>
              <ul className="space-y-4 mt-10">
                {[
                  "Run Community Learning Centers for out-of-school children to prepare them for mainstream education.",
                  "Rehabilitate and reintegrate child waste pickers and child labourers into society with dignity and care.",
                  "Build grassroots leadership through our flagship Community Collectives program across multiple Indian states.",
                  "Advocate for and strengthen child-friendly ecosystems through training, capacity building, and policy engagement.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[16px] text-dark"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
