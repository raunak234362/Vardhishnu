import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/imageUrl";

const ProgramList = () => {
  const programs = [
    {
      title: "Anandghar",
      description:
        "Community learning centers for children from vulnerable backgrounds to connect, share and reflect.",
      points: [
        "Nurturing academic skills",
        "School Enrolment & sustenance",
        "Hygiene & Physical well-being",
      ],
      link: "/our-programs/anandghar-approach",
      image:
        "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764807/2._Home_vlsogu.jpg",
    },
    {
      title: "Anandghar Fellowship",
      description:
        "The idea is to create spaces of learning & support for street children specially child waste pickers and child labors. It is achieved through community learning centers; known as 'Anandghar (A Home of Happiness)'.",
      points: [
        "Nurturing academic skills",
        "School Enrolment & sustenance",
        "Hygiene & Physical well-being",
      ],
      link: "/our-programs/anandghar-fellowship",
      image:
        "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764806/4._Home_td2lvq.jpg",
    },
    {
      title: "Community Collectives",
      description:
        "One year unique support program for grass-root initiatives with limited or no exposure of changing developmental landscape.",
      points: [
        "Nurturing academic skills",
        "School Enrolment & sustenance",
        "Hygiene & Physical well-being",
      ],
      link: "/our-programs/community-collectives",
      image:
        "https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1774764806/3._Home_k41tzn.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="mb-20 text-left">
          <h2 className=" text-dark tracking-tighter inline-block relative">
            Programs
            <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          </h2>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-black/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] p-5 gap-0 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-[300px] w-full lg:h-full overflow-hidden rounded-2xl">
                  <img
                    src={getImageUrl(program.image)}
                    alt={program.title}
                    className={`w-full h-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105 ${index === 1 ? "object-[60%_20%]" : ""}`}
                  />
                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-primary/0 hover:bg-primary/5 transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="w-full p-10 lg:p-16 flex flex-col justify-center space-y-8">
                  <div>
                    <h2 className=" text-dark tracking-tighter mb-4 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h2>
                    <p className="text-dark/50 font-medium leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <ul className="space-y-4">
                    {program.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-dark/80 font-regular tracking-tight"
                      >
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      to={program.link}
                      className="inline-block text-primary text-lg tracking-tight border-b-2 border-primary/20 hover:border-primary transition-all duration-300 transform hover:translate-x-1"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramList;
