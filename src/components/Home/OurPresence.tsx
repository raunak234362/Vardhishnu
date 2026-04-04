import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

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
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative">
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
            <div className="">
              <img src={getImageUrl("v1774774560/Map_rhitgi.png")} alt="map" />
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
                <div className="relative text-[#1A3C00] w-fit">
                  <MapPin size={32} fill="currentColor" />
                  <div className="absolute top-[7.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                <h3 className="text-dark">Vardhishnu Intervention Area</h3>
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
                <div className="relative text-[#1A3C00] w-fit">
                  <MapPin size={32} fill="currentColor" />
                  <div className="absolute top-[7.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                <h3 className="text-dark ">Partner Organizations</h3>
              </div>
              <div className="pl-14 space-y-6">
                {partnerOrgs.map((org) => (
                  <div key={org.state}>
                    <span className="text-dark text-lg">{org.state} : </span>
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
