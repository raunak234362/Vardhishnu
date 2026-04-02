import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const Supporters = () => {
  const supporters = [
    { name: "Wipro", logo: "v1774764884/1_Wipro_aobbu1.png" },
    { name: "Azim Premji Foundation", logo: "v1774764881/2_Azim_Premji_Foundation_yxq4xa.png" },
    { name: "Acumen", logo: "v1774764883/3._Acumen_gx4vvd.png" },
    { name: "Systems Plus", logo: "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764887/8_Systems_Plus_phby1a.png" },
    { name: "Gratitude Network", logo: "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764880/4_Gratitude_Network_ebpqg3.png" },
    { name: "UnLtd India", logo: "v1774764883/6_UnLtd_India5_pqqmbq.png" },
    { name: "TFIx", logo: "v1774764886/5_TFIx_logo_ap0qad.png" },
    { name: "Bhanwarlal & Kantabai Jain Foundation", logo: "v1774764884/10._Bhavarlal_Kantabai_Jain_Trust_qcajp1.jpg" },
    { name: "Jain Irrigation Systems", logo: "v1774764881/9._Jain_Irrigation_ensgt9.jpg" },
    { name: "Palakneeti Pariwar", logo: "v1774764882/13_jtpiqk.jpg" },
    { name: "Vega Chemicals", logo: "v1774764884/12_Vega_Chemicals_rlf1qs.jpg" },
    { name: "Nirman", logo: "v1774764885/7_Nirman_efsyox.jpg" },
    { name: "GAP", logo: "v1774764879/5.1_Change_Engine_p1lwmz.webp" },
    { name: "Partner 14", logo: "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764878/14_wpeur3.png" },
    { name: "Esmech", logo: "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764878/15._Esmech_4C_negativ_kr8lly.tiff" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20">
          <div className="relative inline-block mb-14">
            <h2 className="text-4xl md:text-5xl text-dark tracking-tighter">
              Supported & Accredited By
            </h2>
            <div className="absolute -bottom-7 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center">
          {supporters.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full h-32 flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:bg-gray-50/50 rounded-2xl transition-all duration-300 group"
            >
              <img
                src={item.logo.startsWith('http') ? item.logo : getImageUrl(item.logo)}
                alt={item.name}
                className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
