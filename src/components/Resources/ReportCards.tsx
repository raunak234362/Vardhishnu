import { motion } from "framer-motion";
import { FileText, PieChart } from "lucide-react";

const ReportCards = () => {
  const reports = [
    {
      title: "Annual Report",
      icon: <PieChart className="w-10 h-10 text-black" />,
      description:
        "A comprehensive overview of our year—highlighting key initiatives, impact metrics, success stories, and financial transparency. It reflects our commitment to accountability and the progress we’ve made in empowering communities.",
      link: "https://drive.google.com/file/d/1aFOvh4K12Fl3CpZc9x2jEcmaogbKOQGB/view?usp=drive_link",
    },
    {
      title: "Audit Reports",
      icon: <FileText className="w-10 h-10 text-black" />,
      description:
        "Detailed financial reports that ensure transparency and compliance. These documents provide insights into our financial practices, reinforcing trust with our stakeholders and demonstrating responsible use of resources.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container-custom px-6 lg:px-20">
        <div className="mb-20 text-left">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm mb-4">
            Explore all our resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 lg:p-14 rounded-lg border border-primary  bg-primary/5 hover:bg-white hover:border-primary/40 hover:shadow-2xl transition-all duration-500 overflow-hidden group flex flex-col items-start gap-8"
            >
              <div className="shrink-0 w-20 h-20 rounded-4xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {report.icon}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl text-dark tracking-tighter">
                  {report.title}
                </h3>
                <p className="text-dark/60 font-medium text-lg leading-relaxed max-w-xl">
                  {report.description}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={report.link}
                  className="inline-block text-primary text-xl tracking-tight hover:border-primary transition-all duration-300 transform hover:translate-x-1"
                >
                  View Report
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportCards;
