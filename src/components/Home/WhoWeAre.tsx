import { motion } from "framer-motion";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-[80%] aspect-4/5 rounded-4xl bg-gray-100 overflow-hidden border-4 border-white shadow-2xl z-10"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic">
                <img
                  src={getImageUrl(
                    "v1774764793/504814787_2982689451900728_4503794757455454996_n_v8c686.jpg",
                  )}
                  alt="Who We Are - Vardhishnu"
                  className="w-full h-full object-right"
                />
              </div>

              {/* Overlapping Icon/Badge */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl z-30 ring-8 ring-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-[12%] -right-4 w-[30%] aspect-3/4 rounded-4xl overflow-hidden shadow-2xl z-20 bg-gray-200"
            >
              <img
                src={getImageUrl("v1774765447/25_wekfwc.jpg")}
                alt="Vardhishnu Child"
                className="w-full h-full -rotate-90 object-contain scale-[1.5]"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-dark tracking-tight">
                {data.about.title}
              </h2>
              <div className="space-y-6 text-lg text-dark/70 leading-relaxed mb-8">
                <p>{data.about.description}</p>
                <p>
                  Our journey began with a simple but powerful question: What
                  does it take to build a world where no child is left behind?
                </p>
                <button className="text-primary font-bold hover:underline">
                  Read More
                </button>
              </div>

              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1">
                {data.about.cta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
