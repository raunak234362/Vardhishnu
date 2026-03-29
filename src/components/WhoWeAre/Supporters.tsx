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
      name: "Jain Irrigation Systems",
      logo: "v1774764881/9._Jain_Irrigation_ensgt9.jpg",
    },
    { name: "Vega Chemicals", logo: "v1774764884/12_Vega_Chemicals_rlf1qs.jpg" },
    { name: "Acumen", logo: "v1774764883/3._Acumen_gx4vvd.png" },
    { name: "Nirman", logo: "v1774764885/7_Nirman_efsyox.jpg" },
    { name: "GAP", logo: "v1774764879/5.1_Change_Engine_p1lwmz.webp" },
  ];

  return (
    <section className="py-24 bg-white px-8">
      <div className="container-custom">
        <div className="mb-20 text-left px-8">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm mb-4">
            Supported & Accredited By
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center">
          {supporters.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full h-48 flex items-center justify-center p-6 border border-black/5 rounded-[3rem] bg-gray-50/50 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <img
                src={getImageUrl(item.logo)}
                alt={item.name}
                className="max-w-full max-h-full object-contain transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
