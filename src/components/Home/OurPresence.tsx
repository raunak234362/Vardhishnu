import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Mapp from "../../assets/Mapp.svg";
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

        <div className="flex flex-col lg:flex-row items-center gap-10 w-full mb-24">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full bg-white rounded-[4rem] p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={Mapp}
                alt="map"
                className="w-[85%] h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Location Details Column */}
          <div className="w-full lg:w-[40%] space-y-16 pl-0 lg:pl-10">
            {/* Intervention Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative text-[#1A3C00] w-fit">
                  <MapPin size={32} fill="#070707" color="070707" />
                  <div className="absolute top-[7.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                <h3 className="text-dark text-[20px]">
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
                <div className="relative text-[#1A3C00] w-fit">
                  <MapPin size={32} color="#2E5600" fill="#2E5600" />
                  <div className="absolute top-[7.5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                <h3 className="text-dark text-[20px]">Partner Organizations</h3>
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
