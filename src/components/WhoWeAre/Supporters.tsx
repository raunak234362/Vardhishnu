import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUrl";

const LogoItem = ({
  item,
  index,
}: {
  item: { name: string; logo: string };
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="min-w-[150px] md:min-w-[200px] flex items-center justify-center p-2 md:p-4 hover:bg-gray-50/50 rounded-2xl transition-all duration-300 group"
  >
    <img
      src={item.logo.startsWith("http") ? item.logo : getImageUrl(item.logo)}
      alt={item.name}
      className="max-w-[100%] md:max-w-[90%] max-h-[80px] md:max-h-[110px] object-contain transition-all duration-500 group-hover:scale-105"
    />
  </motion.div>
);

const Supporters = () => {
  const supporters = [
    { name: "Acumen", logo: "v1774764883/3._Acumen_gx4vvd.png" },
    {
      name: "Azim Premji Foundation",
      logo: "v1774764881/2_Azim_Premji_Foundation_yxq4xa.png",
    },
    {
      name: "Jain Irrigation Systems",
      logo: "v1774764881/9._Jain_Irrigation_ensgt9.jpg",
    },
    {
      name: "Change Engine",
      logo: "v1774764879/5.1_Change_Engine_p1lwmz.webp",
    },
    {
      name: "System+",
      logo: "v1774764887/8_Systems_Plus_phby1a.png",
    },
    {
      name: "Vega Chemicals",
      logo: "v1774764884/12_Vega_Chemicals_rlf1qs.jpg",
    },
    {
      name: "Molygraph",
      logo: "v1774764878/14_wpeur3.png",
    },
    {
      name: "Esmech",
      logo: "v1776691561/15._Esmech_4C_negativ_kr8lly_so1sli.webp",
    },
    { name: "Wipro", logo: "v1774764884/1_Wipro_aobbu1.png" },
    { name: "UnLtd India", logo: "v1774764883/6_UnLtd_India5_pqqmbq.png" },
    {
      name: "Bhanwarlal & Kantabai Jain Foundation",
      logo: "v1774764884/10._Bhavarlal_Kantabai_Jain_Trust_qcajp1.jpg",
    },
    { name: "TFIx", logo: "v1774764886/5_TFIx_logo_ap0qad.png" },
    { name: "Palakneeti Pariwar", logo: "v1774764882/13_jtpiqk.jpg" },
    { name: "Nirman", logo: "v1774764885/7_Nirman_efsyox.jpg" },
    {
      name: "Gratitude Network",
      logo: "v1774764880/4_Gratitude_Network_ebpqg3.png",
    },

    {
      name: "Inside Dynamic",
      logo: "v1776612045/3ea01b8aaec254a5c47fc6107b1b049bbd769d3f_hs2l7g.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container-custom">
        <div className="mb-10 md:mb-24 flex flex-col items-center">
          <div className="relative inline-block text-center">
            <h2 className="text-[28px] md:text-[32px] text-dark tracking-tighter font-semibold">
              Supported & Accredited By
            </h2>
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-primary rounded-full" />
          </div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {/* Row 1: 4 items */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {supporters.slice(0, 4).map((item, index) => (
              <LogoItem key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Row 2: 2 items */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {supporters.slice(4, 6).map((item, index) => (
              <LogoItem key={item.name} item={item} index={index + 4} />
            ))}
          </div>

          {/* Row 3: 3 items */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {supporters.slice(6, 9).map((item, index) => (
              <LogoItem key={item.name} item={item} index={index + 6} />
            ))}
          </div>

          {/* Row 4: 5 items */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-8">
            {supporters.slice(9, 14).map((item, index) => (
              <LogoItem key={item.name} item={item} index={index + 9} />
            ))}
          </div>

          {/* Row 5: 2 items */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {supporters.slice(14, 16).map((item, index) => (
              <LogoItem key={item.name} item={item} index={index + 14} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
