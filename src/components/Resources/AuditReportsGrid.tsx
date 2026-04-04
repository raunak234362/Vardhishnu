import { motion } from "framer-motion";

const auditReportsData = [
  { year: "2014-15", link: "https://drive.google.com/file/d/1D6Fil040BOeYxUYtNm_XnrkgvGQvbL73/view?usp=sharing" },
  { year: "2015-16", link: "https://drive.google.com/file/d/18ca6GlDmyiBXxH73e45XdN1h2dS7SCmd/view?usp=sharing" },
  { year: "2016-17", link: "https://drive.google.com/file/d/1u1IbICpGv53sy-YZzouKDCM-BKurEh_D/view?usp=sharing" },
  { year: "2017-18", link: "https://drive.google.com/file/d/1mu2eMIetGk8DC17B-AmdTIpzW3UzX09k/view?usp=sharing" },
  { year: "2018-19", link: "https://drive.google.com/file/d/1ACdXhyEx4fKZHndsFmipS7MP0XkDOSgm/view?usp=sharing" },
  { year: "2019-20", link: "https://drive.google.com/file/d/1hj5-q5vuxWe6mlNpwjLXv2Q4yJ3UWLYf/view?usp=sharing" },
  { year: "2020-21", link: "https://drive.google.com/file/d/1TMNblf3Uvoz7L2q_sTD3lHEMZESeK73N/view?usp=sharing" },
  { year: "2021-22", link: "https://drive.google.com/file/d/1TMNblf3Uvoz7L2q_sTD3lHEMZESeK73N/view?usp=sharing" },
  { year: "2022-23", link: "https://drive.google.com/file/d/1P9i1kBXRC0wSyrfDIcy3Z8x9KkqOog5r/view?usp=sharing" },
  { year: "2023-24", link: "https://drive.google.com/file/d/192J6kSxHXw-CS5HWMfU7HHbJTeJOsUPk/view?usp=drive_link" },
  { year: "2024-25", link: "https://drive.google.com/file/d/13NV1yvxWvoUFFuV4hzkG6nnnW3DJaFfU/view?usp=drive_link" },
];

const AuditReportsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom px-6">
        <div className="mb-16">
          <h2 className="text-[36px] font-bold text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-md">
            Audit Reports
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditReportsData.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-[12px] border border-primary/20 bg-white hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="text-[17px] font-bold text-dark/90 leading-tight">
                  Audited Reports_{report.year}.PDF
                </h3>
                <div className="">
                  <a
                    href={report.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-[15px] font-semibold hover:text-primary-dark transition-all duration-300 inline-block"
                  >
                    View Report
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditReportsGrid;
