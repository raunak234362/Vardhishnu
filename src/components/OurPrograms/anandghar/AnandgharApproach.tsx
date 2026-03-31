import { motion, useScroll, useTransform } from "framer-motion";
import { getImageUrl } from "../../../utils/imageUrl";
import data from "../../../data/anandghar.json";
import LazyImage from "../../common/LazyImage";
import * as icons from "lucide-react";
import { useRef } from "react";

const AnandgharApproach = () => {
  const modelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: modelRef,
    offset: ["start center", "end center"],
  });

  const xPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "100%", "200%"],
  );

  // Opacity for step labels
  const step1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.5, 1, 0.5],
  );
  const step3Opacity = useTransform(scrollYProgress, [0.8, 1], [0.5, 1]);

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
            <div className="aspect-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
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
      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-16">
            {data.whatWeDo.title}
          </h2>

          <div className="space-y-10 mb-16">
            {data.whatWeDo.items.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="mt-2.5 w-3 h-3 rounded-full bg-primary shrink-0" />
                <p className="text-xl text-dark/80 leading-relaxed font-semibold">
                  <span className="text-dark font-bold">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xl text-dark/60 italic font-medium">
            {data.whatWeDo.footer}
          </p>
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
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
              {data.holisticModel.title}
            </h2>
            <div className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-2xl text-dark/80 leading-relaxed font-semibold max-w-5xl">
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
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
              {data.ourModel.title}
            </h2>
            <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
          </div>

          {/* Progress Bar Header */}
          <div className="bg-gray-100 rounded-full h-14 w-full mb-16 flex items-center px-2 relative overflow-hidden shadow-inner font-bold text-dark/70 text-base md:text-xl">
            {/* Moving Green Bar */}
            <motion.div
              style={{ x: xPosition }}
              className="absolute left-2 top-2 bottom-2 w-[calc(33.33%-1rem)] bg-primary rounded-full z-10"
            />

            <div className="flex-1 flex items-center justify-center relative z-20 transition-colors duration-500">
              <motion.span
                style={{
                  opacity: step1Opacity,
                  color: useTransform(
                    step1Opacity,
                    [0.5, 1],
                    ["#1a1a1a", "#ffffff"],
                  ),
                }}
              >
                Step 1
              </motion.span>
            </div>
            <div className="w-8 flex justify-center text-dark/30 z-20 font-bold">
              &gt;
            </div>
            <div className="flex-1 flex items-center justify-center relative z-20 transition-colors duration-500">
              <motion.span
                style={{
                  opacity: step2Opacity,
                  color: useTransform(
                    step2Opacity,
                    [0.8, 1],
                    ["#1a1a1a", "#ffffff"],
                  ),
                }}
              >
                Step 2
              </motion.span>
            </div>
            <div className="w-8 flex justify-center text-dark/30 z-20 font-bold">
              &gt;
            </div>
            <div className="flex-1 flex items-center justify-center relative z-20 transition-colors duration-500">
              <motion.span
                style={{
                  opacity: step3Opacity,
                  color: useTransform(
                    step3Opacity,
                    [0.8, 1],
                    ["#1a1a1a", "#ffffff"],
                  ),
                }}
              >
                Step 3
              </motion.span>
            </div>
          </div>

          {/* Model Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.ourModel.steps.map((step, idx) => (
              <motion.div
                key={idx}
                style={{
                  scale: useTransform(
                    scrollYProgress,
                    [idx * 0.33, idx * 0.33 + 0.15, idx * 0.33 + 0.33],
                    [0.95, 1.05, 0.95],
                  ),
                  borderColor: useTransform(
                    scrollYProgress,
                    [idx * 0.33, idx * 0.33 + 0.15, idx * 0.33 + 0.33],
                    ["#f3f4f6", "#a6ce39", "#f3f4f6"],
                  ),
                }}
                className={`p-10 rounded-4xl h-full bg-white border-2 border-gray-100 shadow-sm transition-shadow duration-500 hover:shadow-md`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-dark">{step.id}</h3>
                </div>
                <ul className="space-y-6">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-lg text-dark/80 leading-snug font-semibold flex items-start gap-2"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Values Section */}
      <div className="container-custom py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
              {data.values.title}
            </h2>
            <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
          </div>

          <div className="bg-white rounded-[4rem] border-2 border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-4 md:p-8 flex flex-wrap items-center justify-around gap-8 md:gap-4 max-w-5xl mx-auto">
            {data.values.items.map((value, idx) => {
              const iconName = value.icon
                .split("-")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join("") as keyof typeof icons;
              const Icon = (icons[iconName] as any) || icons.Heart;

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
                  <span className="text-3xl font-black text-dark tracking-tighter">
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

      <div className="relative py-24 px-4 sm:px-0 mt-24">
        {/* Background blob element */}
        <div className="absolute top-0 right-0 w-3/4 h-[80%] bg-primary/5 rounded-bl-[100px] sm:rounded-bl-[300px] -z-10" />

        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-dark inline-block relative">
              {data.gallery.title}
              <div className="absolute -bottom-4 left-0 w-2/3 h-1.5 bg-primary rounded-full" />
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
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-8 sm:p-12">
                  <p className="text-primary font-handwritten text-4xl md:text-5xl leading-tight drop-shadow-2xl max-w-sm transition-transform duration-500 group-hover:-translate-y-2">
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
