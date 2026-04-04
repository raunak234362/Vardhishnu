import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const Supporters = () => {
  const supporters = [
    { name: "Wipro", logo: "v1774764884/1_Wipro_aobbu1.png" },
    { name: "UnLtd India", logo: "v1774764883/6_UnLtd_India5_pqqmbq.png" },
    {
      name: "Bhanwarlal & Kantabai Jain Foundation",
      logo: "v1774764884/10._Bhavarlal_Kantabai_Jain_Trust_qcajp1.jpg",
    },
    { name: "TFIx", logo: "v1774764886/5_TFIx_logo_ap0qad.png" },
    { name: "Palakneeti Pariwar", logo: "v1774764882/13_jtpiqk.jpg" },
    {
      name: "Azim Premji Foundation",
      logo: "v1774764881/2_Azim_Premji_Foundation_yxq4xa.png",
    },
    {
      name: "rupee",
      logo: "q_auto/f_auto/v1775332226/9ae241aa022442dcf0225728bb48e4fac91747e0_akblx9.png",
    },
    {
      name: "Jain Irrigation Systems",
      logo: "v1774764881/9._Jain_Irrigation_ensgt9.jpg",
    },
    {
      name: "Vega Chemicals",
      logo: "v1774764884/12_Vega_Chemicals_rlf1qs.jpg",
    },
    { name: "Acumen", logo: "v1774764883/3._Acumen_gx4vvd.png" },
    { name: "Nirman", logo: "v1774764885/7_Nirman_efsyox.jpg" },
    {
      name: "GAP",
      logo: "q_auto/f_auto/v1775332419/ae60e0f5266f185be06998c2c6f46c53dcc0a80b_mmwzwc.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20">
          <div className="relative inline-block mb-14">
            <h2 className="text-[32px] text-dark tracking-tighter">
              Supported & Accredited By
            </h2>
            <div className="absolute -bottom-7 left-0 w-1/3 h-1.5 bg-primary rounded-full transition-all duration-300" />
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
              className="w-full h-44 flex items-center justify-center p-4 hover:bg-gray-50/50 rounded-2xl transition-all duration-300 group"
            >
              <img
                src={
                  item.logo.startsWith("http")
                    ? item.logo
                    : getImageUrl(item.logo)
                }
                alt={item.name}
                className="max-w-[85%] max-h-[85%] object-contain transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
