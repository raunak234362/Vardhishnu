import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const OurPresence = () => {
  const interventionAreas = ["Jalgaon", "Chopda", "Amalner"];
  const partnerOrgs = [
    {
      state: "Maharastra",
      cities: "Nagpur, Akola, Yawatmal, Beed, Osmanabad, Kolhapur",
    },
    { state: "Madhya Pradesh", cities: "Bhopal, Jhiri, Harda" },
    { state: "Bihar", cities: "Araria, Patna" },
    { state: "Uttar Pradesh", cities: "Mau, Adri, Varanasi" },
    { state: "Goa", cities: "Goa" },
    { state: "Gujrat", cities: "Mehsana, Ahmedabad" },
  ];

  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-dark tracking-tighter inline-block relative">
            Our Presence
            <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full transition-all duration-500 hover:w-full" />
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-black/5 aspect-4/3 flex flex-col relative group">
              <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 font-medium italic overflow-hidden">
                <div className="absolute inset-0 bg-[#f8f9fa] flex items-center justify-center text-dark/20 text-2xl font-black uppercase tracking-widest text-center px-10">
                  Interactive Map Area Placeholder
                </div>
              </div>

              {/* Fake Legend as seen in mockup */}
              <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-black/5 text-sm space-y-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-bold text-dark italic">
                    Vardhishnu Intervention Area
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-dark/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-dark" />
                  </div>
                  <span className="font-bold italic text-dark/70">
                    Partner Organizations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details Column */}
          <div className="w-full lg:w-2/5 space-y-12">
            {/* Intervention Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="text-2xl font-black text-dark italic">
                  Vardhishnu Intervention Area
                </h3>
              </div>
              <ul className="pl-14 space-y-2">
                {interventionAreas.map((city) => (
                  <li
                    key={city}
                    className="text-xl text-dark/50 list-disc marker:text-dark/20"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Partner Organizations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="text-2xl font-black text-dark italic">
                  Partner Organizations
                </h3>
              </div>
              <div className="pl-14 space-y-6">
                {partnerOrgs.map((org) => (
                  <div key={org.state}>
                    <span className="font-bold text-dark text-lg">
                      {org.state} :{" "}
                    </span>
                    <span className="text-dark/40 text-lg font-medium">
                      {org.cities}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
