import { motion, useScroll } from "framer-motion";
import { getImageUrl } from "../../../utils/imageUrl";
import data from "../../../data/anandghar.json";
import LazyImage from "../../common/LazyImage";
import * as icons from "lucide-react";
import { useRef } from "react";

const StepCard = ({
  step,
  idx,
}: {
  step: { id: string; items: string[] };
  idx: number;
}) => {
  const isFirst = idx === 0;
  const isLast = idx === 2;

  return (
    <div
      className={`p-10 h-full bg-[#f3f4f6] ${
        isFirst ? "rounded-l-2xl" : isLast ? "rounded-r-2xl" : "rounded-none"
      } border-r border-white/50 last:border-r-0`}
    >
      <ul className="space-y-6">
        {step.items.map((item, i) => (
          <li
            key={i}
            className="text-[16px] text-dark/80 leading-relaxed font-regular"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AnandgharApproach = () => {
  const modelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: modelRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="bg-white">
      {/* ... Hero and other sections ... */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <LazyImage
          src={getImageUrl(data.hero.image)}
          alt="AnandGhar Hero"
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent flex items-center justify-center lg:items-end lg:justify-start lg:px-20 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-handwritten text-[80px] font-bold drop-shadow-2xl"
          >
            AnandGhar
          </motion.h1>
        </div>
      </div>

      <div className="container-custom py-24">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-dark tracking-tight">
                {data.approach.title}
              </h2>
              {/* <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" /> */}
            </div>

            <div className="space-y-8">
              {data.approach.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[16px] text-dark/80 leading-relaxed max-w-4xl"
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
            className="w-full lg:w-[40%] lg:-mt-48 relative z-20"
          >
            <div className="aspect-3/4 rounded-xl overflow-hidden shadow-2xl">
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

      {/* What We Do Section */}
      <div className="container-custom py-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=""
        >
          <h2 className=" text-dark mb-16">{data.whatWeDo.title}</h2>

          <div className="space-y-10 mb-16">
            {data.whatWeDo.items.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="mt-2.5 w-3 h-3 rounded-full bg-primary shrink-0" />
                <p className="text-[16px] text-dark/80 leading-relaxed">
                  <span className="text-dark">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[16px] text-dark/80">{data.whatWeDo.footer}</p>
        </motion.div>
      </div>

      {/* Holistic Model Section */}
      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-10">
            <h2 className=" text-dark tracking-tight">
              {data.holisticModel.title}
            </h2>
            {/* <div className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-primary rounded-full" /> */}
          </div>
          <p className="text-[16px] text-dark/80 leading-relaxed max-w-5xl">
            {data.holisticModel.description}
          </p>
        </motion.div>
      </div>

      {/* Our Model Section */}
      <div className="container-custom py-24" ref={modelRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-10">
            <h2 className=" text-dark tracking-tight">{data.ourModel.title}</h2>
            <div className="absolute -bottom-6 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
          </div>

          {/* Progress Indicator Container */}
          <div className="mx-auto mb-10 px-4">
            {/* Step Labels Above the Bar */}
            <div className="flex mb-4 text-xs md:text-[14px] font-medium tracking-wide text-dark/40">
              {["Step 1", "Step 2", "Step 3"].map((label, i) => (
                <div key={i} className="flex-1 text-center">
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Segmented Progress Bar */}
            <div className="grid grid-cols-3 gap-2 h-2.5 w-full">
              <div className="bg-primary rounded-full relative flex items-center">
                <div className="absolute -right-1 z-10 text-[10px] text-dark/20 font-bold">
                  {" "}
                  &gt;{" "}
                </div>
              </div>
              <div className="bg-[#f0f2f5] rounded-full relative flex items-center">
                <div className="absolute -right-1 z-10 text-[10px] text-dark/20 font-bold">
                  {" "}
                  &gt;{" "}
                </div>
              </div>
              <div className="bg-[#f0f2f5] rounded-full" />
            </div>
          </div>

          {/* Model Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
            {data.ourModel.steps.map((step, idx) => (
              <StepCard key={idx} step={step} idx={idx} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Values Section */}
      <div className="container-custom py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-16">
            <h2 className=" text-dark tracking-tight">{data.values.title}</h2>
            <div className="absolute -bottom-6 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="bg-white rounded-[4rem] border-2 border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-4 md:p-8 flex flex-wrap items-center justify-around gap-8 md:gap-4 mx-auto">
            {data.values.items.map((value, idx) => {
              const iconName = value.icon
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join("") as keyof typeof icons;
              const Icon =
                (icons as unknown as Record<string, React.ElementType>)[
                  iconName
                ] || icons.Heart;

              const colors = [
                "bg-orange-50 text-orange-600",
                "bg-amber-50 text-amber-600",
                "bg-purple-50 text-purple-600",
                "bg-green-50 text-green-600",
              ];
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div
                    className={`p-4 rounded-2xl rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-sm ${
                      colors[idx % colors.length]
                    }`}
                  >
                    <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <Icon size={28} strokeWidth={2.5} />
                    </div>
                  </div>
                  <span className="text-3xl text-dark tracking-tighter">
                    {value.name}
                  </span>
                  {idx < data.values.items.length - 1 && (
                    <div className="hidden lg:block h-12 w-px bg-gray-200 ml-4" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="container-custom py-24 px-4 sm:px-0 mt-24 relative overflow-hidden">
        {/* Design Background Section */}
        <div className="absolute inset-0 bg-primary/10 rounded-[4rem] -z-10" />

        <div className="p-2">
          <div className="mb-20">
            <h2 className="text-dark inline-block relative">
              {data.gallery.title}
              <div className="absolute -bottom-6 left-0 w-2/3 h-1.5 bg-primary rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {data.gallery.images.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-xl group shadow-2xl ${
                  idx === 0 || idx === 5
                    ? "h-[600px] md:h-[800px] md:row-span-2"
                    : "h-[300px] md:h-[380px]"
                }`}
              >
                <LazyImage
                  src={getImageUrl(item.image)}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  containerClassName="w-full h-full"
                />
                <div className="absolute justify-center inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 sm:p-12">
                  <p className="text-primary font-handwritten text-center text-[60px] leading-tight drop-shadow-2xl max-w-sm transition-transform duration-500 group-hover:-translate-y-2">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnandgharApproach;
