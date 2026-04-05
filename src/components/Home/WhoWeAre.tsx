import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils/imageUrl";
import LazyImage from "../common/LazyImage";
import iconGrop from "../../assets/Groupicon.svg"
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
              className="rounded-xl bg-gray-100 overflow-hidden  z-10"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium italic">
                <LazyImage
                  src={getImageUrl(
                    "v1774764793/504814787_2982689451900728_4503794757455454996_n_v8c686.jpg",
                  )}
                  alt="Who We Are - Vardhishnu"
                  className="w-[30vw] h-[60vh] object-cover object-right"
                />
              </div>

              {/* Overlapping Icon/Badge */}
              <div className="absolute top-8 left-14 w-16 h-16 rounded-full flex items-center justify-center text-white z-30">
               <img src={iconGrop} alt="" className="h-16"/>
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="absolute -bottom-[12%] -right-4 w-[30%] aspect-3/4 rounded-xl overflow-hidden z-20 bg-gray-200"
            >
              <LazyImage
                src={getImageUrl("v1774765447/25_wekfwc.jpg")}
                alt="Vardhishnu Child"
                className="w-full h-full -rotate-90 object-contain scale-[1.5]"
                containerClassName="w-full h-full"
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
              <div className="relative inline-block mb-12">
                <h2 className="text-dark tracking-tight">{data.about.title}</h2>
                <div className="absolute -bottom-4 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
              </div>
              <div className="space-y-6 text-[16px] text-dark leading-relaxed mb-8">
                <p>{data.about.description}</p>
                <p>
                  Our journey began with a simple but powerful question: What
                  does it take to build a world where no child is left behind?
                </p>
                <Link
                  to="/who-we-are"
                  className="text-primary font-bold hover:underline"
                >
                  Read More
                </Link>
              </div>

              <Link
                to="/who-we-are"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-md font-bold transition-all shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
              >
                {data.about.cta}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
