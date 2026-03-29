import { motion } from "framer-motion";

const WhyChildrenHero = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-black text-dark tracking-tighter inline-block relative">
                Our Journey
                <div className="absolute -bottom-3 left-0 w-2/3 h-1 bg-primary rounded-full" />
              </h2>
            </div>

            <div className="space-y-6 text-dark/70 font-medium leading-relaxed">
              <p>
                According to the United Nations Convention on the Rights of the
                Child (UNCRC), which India ratified in 1992, every child is
                entitled to fundamental rights that must be respected and upheld
                by both governments and citizens.
              </p>

              <ul className="space-y-4">
                <li>
                  <strong className="text-dark font-black tracking-tight">
                    Right to Survival
                  </strong>
                  , which ensures a child’s right to be born, and to access
                  food, shelter, clothing, healthcare, and live a life with
                  dignity;
                </li>
                <li>
                  <strong className="text-dark font-black tracking-tight">
                    Right to Protection
                  </strong>
                  , which safeguards children from all forms of violence,
                  neglect, abuse—both physical and sexual—as well as protection
                  from harmful substances like drugs;
                </li>
                <li>
                  <strong className="text-dark font-black tracking-tight">
                    Right to Participation
                  </strong>
                  , which recognizes children’s freedom to express their views,
                  access information, form associations, and take part in
                  decisions that affect them directly;
                </li>
                <li>
                  <strong className="text-dark font-black tracking-tight">
                    Right to Development
                  </strong>
                  , which guarantees access to education, opportunities to
                  learn, relax, play, and develop emotionally, mentally, and
                  physically.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-square bg-gray-100 shadow-2xl"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-xl p-12 text-center">
              Landfill Child Documentary Photo Space
            </div>
            {/* Overlay for aesthetic consistency */}
            <div className="absolute inset-0 bg-dark/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChildrenHero;
