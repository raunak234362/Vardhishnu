import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import LazyImage from "../../common/LazyImage";
import { getImageUrl } from "../../../utils/imageUrl";

const AnandgharFellowship = () => {
  const [activeTab, setActiveTab] = useState<"current" | "alumni">("current");
  const [selectedFellow, setSelectedFellow] = useState<any | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = useState({ left: 0, width: 0 });

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    setScrollInfo({ left: scrollLeft, width: clientWidth });
  };

  // Attach non-passive wheel listener for scroll hijacking
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setScrollInfo({
        left: 0,
        width: scrollRef.current.clientWidth,
      });
    }

    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Logic: If scrolling down and not at end, OR scrolling up and not at start, hijack it.
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;
      const isAtStart = container.scrollLeft <= 10;

      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeTab]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const itemWidth = 380 + 40; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -itemWidth : itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fellows = {
    current: [
      {
        name: "Vijaya Randhe",
        role: "Center Lead",
        image: getImageUrl(
          "v1774765808/Vijaya_Randhe_2_etlswt.jpg",
          "a_-90,c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Bhimsing Pawra",
        role: "Fellow - Educator",
        image: getImageUrl(
          "v1774764848/Bhimsing_zq6rl6.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Lalita Mavaskar",
        role: "Fellow - Educator",
        image: getImageUrl(
          "v1774764849/Lalita_hlqs89.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Ashish Gajbhar",
        role: "Fellow - Educator",
        image: getImageUrl(
          "v1774764845/Ashish_Gajbhar_xnginz.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Sakshi Khure",
        role: "Fellow - Educator",
        image: getImageUrl(
          "v1774979844/Pasted_image_dml2tl.png",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Rutik Bhongade",
        role: "Fellow - Educator",
        image: getImageUrl(
          "v1774764850/Rutik_gkjdpf.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
    ],
    alumni: [
      {
        name: "Monali Gedekar",
        role: "Working with Vardhishnu",
        image: getImageUrl(
          "v1774764851/Monali_Gedekar_2023-25_lnwruq.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Ritika Deote",
        role: "Working with Vardhishnu",
        image: getImageUrl(
          "v1774764855/Ritika_Deote_oxpwsk.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Shital Raut",
        role: "Pursuing M.A. in Azim Premji University",
        image: getImageUrl(
          "v1774764850/Sheetal_b8etat.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Nisha Meshram",
        role: "Pursuing M.A. in Azim Premji University",
        image: getImageUrl(
          "v1774765803/Nisha_Masram_2021-23_mjf3wi.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Manisha Yawalkar",
        role: "Homemaker",
        image: getImageUrl(
          "v1774765804/Manisha_Yawalkar_2022-24_jv0wr3.jpg",
          "a_-90,c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Aditi Patil",
        role: "Pursuing M.A. in Azim Premji University",
        image: getImageUrl(
          "v1774765811/Aditi_Patil_2022-24_ukw69w.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Savita Wagh",
        role: "Homemaker",
        image: getImageUrl(
          "v1774765809/Savita_Wagh_2022-23_zjv9hp.jpg",
          "c_fill,w_800,h_1000",
        ),
      },
      {
        name: "Mangala Jadhav",
        role: "Homemaker",
        image: getImageUrl(
          "v1774765805/Mangala_Jadhav_202-22_wseyph.jpg",
          "a_-90,c_fill,w_800,h_1000",
        ),
      },
    ],
  };

  const faqs = [
    {
      question: "What is the Anandghar Fellowship?",
      answer:
        "The Anandghar Fellowship is a two-year full-time commitment where fellows work on the ground to provide educational support and create safe spaces for children from marginalized communities.",
    },
    {
      question: "Who can apply?",
      answer:
        "Young graduates from any discipline who are passionate about social change and ready to work in challenging community environments can apply.",
    },
    {
      question: "Do I need to know Marathi or any local language?",
      answer:
        "While proficiency in Marathi is highly beneficial as our primary operations are in Maharashtra, we also value candidates from diverse linguistic backgrounds who are willing to learn and adapt.",
    },
    {
      question: "Is this a paid fellowship?",
      answer:
        "Yes, fellows receive a monthly stipend to cover their living expenses during the two-year tenure.",
    },
    {
      question: "Where will I stay during my fellowship tenure?",
      answer:
        "Vardhishnu assists fellows in finding safe and affordable accommodation near their assigned community learning centers.",
    },
    {
      question: "What support will I get during the Fellowship?",
      answer:
        "Fellows receive regular training, mentorship, and pedagogical support to help them navigate their roles effectively.",
    },
    {
      question: "Where will I be placed?",
      answer:
        "Placement happens in our community learning centers located in urban or semi-urban areas where street children and child laborers reside.",
    },
    {
      question: "What happens after the Fellowship?",
      answer:
        "After the fellowship, our alumni pursue varied paths including higher education at prestigious universities, working with other NGOs, or continuing their journey with Vardhishnu.",
    },
    {
      question: "What makes the Anandghar Fellowship unique?",
      answer:
        "Our fellowship is unique because of its deep immersion into the lives of children from the most vulnerable backgrounds, focusing on holistic development rather than just academics.",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Header with handwritten overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-gray-100">
          {/* Placeholder for Hero Image */}
          <LazyImage
            src={getImageUrl("v1774764790/22_czv8va.jpg")}
            alt="AnandGhar Fellowship Hero"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 flex items-end justify-center lg:items-end lg:justify-start lg:p-20 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary px-30 font-handwritten font-bold text-[80px] md:text-9xl lg:text-8xl drop-shadow-2xl"
          >
            AnandGhar Fellowship
          </motion.h1>
        </div>
      </div>

      <div className="container-custom py-10 md:py-24">
        {/* Our Approach Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-[24px] font-semibold md:text-5xl tracking-tight">
                Our Approach
              </h2>
              {/* <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" /> */}
            </div>

            <div className="space-y-8">
              <p className="text-[16px] md:text-[20px] text-dark font-outfit leading-relaxed max-w-2xl py-2">
                "If we want to reach real peace in the world, we should start
                educating our children." – Mahatma Gandhi
              </p>

              <p className="text-[16px] md:text-[20px] text-dark leading-relaxed font-outfit max-w-2xl">
                In India, UNICEF estimates there are nearly 11 million street
                children. Many of them live and work on the streets, struggling
                to survive while facing exploitation and abuse. Solving this
                challenge requires sustained, determined, and compassionate
                action.
              </p>

              <p className="text-[16px] md:text-[20px] text-dark leading-relaxed font-outfit max-w-2xl">
                The Anandghar Fellowship invites young graduates who are:
              </p>

              <ul className="space-y-6">
                {[
                  "Ready to walk the path of service envisioned by Mahatma Gandhi",
                  "Willing to challenge themselves and explore different aspects of the education system",
                  "Committed to going beyond academics and classroom to address the holistic needs of children & communities",
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-2 w-3 h-3 rounded-full bg-primary shrink-0" />
                    <p className="text-[16px] md:text-[20px] text-dark font-outfit leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <p className="text-[16px] md:text-[20px] text-dark leading-relaxed font-outfit max-w-2xl">
                  This is your chance to embark on a two-year journey that is as
                  challenging as it is rewarding—a journey where you'll use your
                  knowledge and skills to transform the lives of some of the
                  poorest and most vulnerable children.
                </p>

                <p className="text-[16px] md:text-[20px] text-dark leading-relaxed font-outfit max-w-2xl">
                  Join us, and help build a future where every child has the
                  chance to learn, grow, and live with dignity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Overlapping Portrait Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 lg:-mt-48 relative z-20"
          >
            <div className="aspect-3/4 rounded-xl bg-gray-100 overflow-hidden shadow-2xl">
              {/* Side Image Placeholder */}
              <LazyImage
                src={getImageUrl("v1774764806/4._Home_td2lvq.jpg")}
                alt="Our approach image"
                className="w-full h-full object-cover object-right"
                containerClassName="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* What is Fellowship Section */}
        <div className="flex flex-col lg:flex-row-reverse items-start lg:h-[70vh] h-auto gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-[24px] md:text-5xl text-dark font-semibold tracking-tight leading-tight">
                What is the Anandghar Fellowship?
              </h2>
              <div className="absolute md:-bottom-18 -bottom-10 left-0 w-1/5 h-0.5 md:h-1 bg-primary rounded-full" />
            </div>

            <p className="text-[14px] md:text-[20px] text-dark leading-relaxed font-outfit lg:py-20 py-8">
              The Anandghar Fellowship is not just a program—it's a two-year,
              life-changing journey into the heart of India's grassroots.
              Through our Community Learning Centers, you'll create safe, joyful
              spaces where children from most marginalized communities can
              learn, dream, and reclaim their childhood.
            </p>
          </motion.div>

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block w-full lg:w-[35%]"
          >
            <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden shadow-2xl ">
              {/* Left Image Placeholder */}
              <LazyImage
                src={getImageUrl("v1774764800/IMG_0715_z4vkar.jpg")}
                alt="What is Fellowship image"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* As a Fellow Section */}
        <div className="lg:mb-20 mb-10">
          <p className="text-[14px] md:text-[20px] text-dark/60 mb-8">
            As a Fellow, you will:
          </p>
          <div className="space-y-10 max-w-100%">
            {[
              {
                title: "Create impact where it matters most",
                description:
                  "Design and lead daily teaching-learning sessions, engage with communities, and coordinate with schools to ensure every child's well-being.",
              },
              {
                title: "Face challenges head-on",
                description:
                  "Experience the realities of children living in difficult circumstances, and develop the skills, empathy, and determination to solve them.",
              },
              {
                title: "Be the bridge",
                description:
                  "Build trust and collaboration among parents, community members, school, govt agencies and society at large.",
              },
              {
                title: "Grow as a leader",
                description:
                  "Learn to envision, plan, execute, reflect, and be part of something bigger than yourself.",
              },
              {
                title: "Lead with love",
                description:
                  "embody leadership grounded in compassion, respect, and unwavering belief in every child's potential.",
              },
            ].map((duty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-4 h-4 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-[14px] md:text-[18px] text-dark/70 font-outfit leading-relaxed">
                  <span className="text-dark font-semibold">{duty.title}</span>{" "}
                  — {duty.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-[14px] md:text-[20px] text-dark font-outfit  max-w-100%">
            This isn't just about teaching—it's about building futures, breaking
            cycles of injustice, and becoming part of something bigger than
            yourself.
          </p>
        </div>

        {/* Applications Open CTA */}
        <div className="py-15 text-center mb-15">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-[24px] md:text-[32px] md:text-4xl text-dark font-semibold font-outfit tracking-tight">
              Applications for the 2026 Cohort Are Now{" "}
              <span className="text-primary font-bold">Open</span>!
            </h2>
            <div className="">
              <p className="text-[14px] md:text-xl text-dark/50 font-outfit leading-relaxed">
                The submission window for application to 2026 cohort are now
                open.
              </p>
              <p className="text-[14px] md:text-xl text-dark/60 font-outfit leading-relaxed">
                If you are interested in applying for the program, kindly
                register your interest for next year here.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/1otKnuaVdILxOjVk4N4IGYsxUUmFdA8NVywRxx0ZJ4DI/viewform?edit_requested=true&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto w-fit px-20 flex items-center justify-center py-4 font-[600] text-xl rounded-lg shadow-xl shadow-primary/20 cursor-pointer"
            >
              Register
            </a>
          </motion.div>
        </div>

        {/* Selection Process Section */}
        <div className="relative mb-15 lg:mb-40 px-10 lg:px-0 max-w-100% mx-auto">
          <div className="relative inline-block mb-20">
            <h2 className="text-[24px] md:text-5xl font-semibold font-outfit tracking-tight">
              Our Selection Process
            </h2>
            <div className="absolute -bottom-8 left-0 w-1/4 h-0.5 md:h-1 bg-primary" />
          </div>

          <div className="flex flex-col">
            {/* Step 1: The Application Form */}
            <div className="flex justify-end lg:pr-12 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-[45%] relative"
              >
                <div className="absolute -left-12 lg:-left-20 top-2 lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-2">
                  <Check size={typeof window !== "undefined" && window.innerWidth < 1024 ? 13 : 20} strokeWidth={3} />
                </div>

                <div className="hidden lg:block absolute top-6 left-[-120%] w-[100%] h-[250px] pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 250"
                    fill="none"
                  >
                    <path
                      d="M500 0.5 H 50.5 C 22.8858 0.5 0.5 22.8858 0.5 50.5 V 255.5"
                      strokeWidth={3}
                      stroke="#d1d5db"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[24px] md:text-[32px] font-semibold text-dark font-outfit">
                    The Application Form
                  </h3>
                  <div className="w-16 h-0.5 md:h-1 bg-[#a3c639]" />
                  <p className="text-[16px] md:text-[20px] text-dark font-outfit leading-relaxed">
                    The application form helps us get to know you. Please be
                    specific, clear, and honest in your responses. It should
                    reflect why you want to join Vardhishnu and why you'd be a
                    strong fit for the Fellowship. Incomplete applications will
                    not be considered.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:h-[200px] h-12" />

            {/* Step 2: The Phone Interview */}
            <div className="flex justify-start lg:pl-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-[45%] relative"
              >
                <div className="absolute -left-12 lg:-left-20 top-2 lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-20">
                  <Check size={typeof window !== "undefined" && window.innerWidth < 1024 ? 13 : 20} strokeWidth={3} />
                </div>

                <div className="hidden lg:block absolute top-0 left-full w-[100%] h-[250px] pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 250"
                    fill="none"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    transform="matrix(-1,0,0,1,0,0)"
                  >
                    <path
                      d="M500 0.5 H 50.5 C 22.8858 0.5 0.5 22.8858 0.5 50.5 V 255.5"
                      strokeWidth={3}
                      stroke="#d1d5db"
                      strokeDasharray="10 10"
                    ></path>
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[24px] md:text-[32px] font-semibold text-dark font-outfit">
                    The Phone Interview
                  </h3>
                  <div className="w-16 h-0.5 md:h-1 bg-[#a3c639]" />
                  <p className="text-[16px] md:text-[20px] text-dark font-outfit leading-relaxed">
                    After reviewing your application, we may invite you for a
                    one-hour phone interview to clarify details and gather
                    additional information for our evaluation.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:h-40 h-12" />

            {/* Step 3: Final Panel Selection */}
            <div className="flex justify-end lg:pr-12 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-[45%] relative"
              >
                <div className="absolute -left-12 lg:-left-20 top-2 lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-20">
                  <Check size={typeof window !== "undefined" && window.innerWidth < 1024 ? 13 : 20} strokeWidth={3} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-[24px] md:text-[32px] font-semibold text-dark font-outfit">
                    Final Panel Selection
                  </h3>
                  <div className="w-16 h-0.5 md:h-1 bg-[#a3c639]" />
                  <p className="text-[16px] md:text-[20px] text-dark font-outfit leading-relaxed">
                    In the final stage, you will attend a 2-day in-person
                    selection round. This includes group discussions, a short
                    problem-solving activity with a presentation, and a one-hour
                    personal interview with a team member.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Anandghar Fellows Section */}
        <div className="mb-40 ">
          <div className="inline-block relative mb-12">
            <h2 className="text-[24px] md:text-[32px] text-dark tracking-tight">
              Anandghar Fellows
            </h2>
            <div className="absolute -bottom-7 left-0 md:w-1/4 md:h-1 h-0.5 w-1/2 bg-primary rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex gap-12 mb-20">
            <button
              onClick={() => setActiveTab("current")}
              className={`text-[12px] md:text-[20px] transition-all ${
                activeTab === "current"
                  ? "text-primary"
                  : "text-dark/40 hover:text-dark/60"
              }`}
            >
              Current Cohort
            </button>
            <button
              onClick={() => setActiveTab("alumni")}
              className={`text-[12px] md:text-[20px] transition-all ${
                activeTab === "alumni"
                  ? "text-primary"
                  : "text-dark/40 hover:text-dark/60"
              }`}
            >
              Our Alumni
            </button>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="relative group/scroll">
            {/* Navigation Arrows */}
            <div className="absolute top-[47%] -left-6 md:-left-8 -translate-y-1/2 z-20 hidden lg:block">
              <button
                onClick={() => scroll("left")}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 group/btn active:scale-95"
              >
                <ChevronLeft className="w-8 h-8 text-black" />
              </button>
            </div>
            <div className="absolute top-[47%] -right-6 md:-right-8 -translate-y-1/2 z-20 hidden lg:block">
              <button
                onClick={() => scroll("right")}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 group/btn active:scale-95"
              >
                <ChevronRight className="w-8 h-8 text-black" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="overflow-x-auto pb-16 hide-scrollbar scroll-smooth"
              onScroll={handleScroll}
            >
              <div className="flex gap-10 w-max px-2 py-4">
                {fellows[activeTab].map((fellow, idx) => (
                  <motion.div
                    key={fellow.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="w-[250px] md:w-[380px] shrink-0 bg-white rounded-xl overflow-hidden shadow-2xl shadow-dark/5 border border-gray-50 flex flex-col group hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedFellow(fellow)}
                  >
                    <div className="md:aspect-4/5 aspect-4/3 overflow-hidden">
                      <LazyImage
                        src={fellow.image}
                        alt={fellow.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                        containerClassName="w-full h-full"
                      />
                    </div>
                    <div className="p-0 md:p-10 space-y-2">
                      <h4 className="md:text-[20px] text-[16px] font-semibold font-outfit text-dark/90 tracking-tight">
                        {fellow.name}
                      </h4>
                      <p className="md:text-[16px] text-[14px] text-dark/40 font-outfit font-medium tracking-wide">
                        {fellow.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dynamic Scroll Indicator based on OurTeam pattern */}
            {fellows[activeTab].length > 3 && (
              <div className="flex justify-center gap-3 mt-8">
                {fellows[activeTab].map((_, idx) => {
                  const itemWidth = 380 + 40; // card width + gap
                  const itemStart = idx * itemWidth;
                  const itemEnd = itemStart + 380;
                  const isVisible =
                    itemStart < scrollInfo.left + scrollInfo.width - 50 &&
                    itemEnd > scrollInfo.left + 50;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        scrollRef.current?.scrollTo({
                          left: idx * itemWidth,
                          behavior: "smooth",
                        });
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        isVisible ? "w-16 bg-primary" : "w-12 bg-gray-200"
                      }`}
                      aria-label={`Go to fellow ${idx + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Member Details Modal */}
        <AnimatePresence>
          {selectedFellow && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFellow(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Close Button - Circled */}
                {/* <button
                  onClick={() => setSelectedFellow(null)}
                  className="absolute top-6 right-6 p-1 rounded-full border-2 border-dark/20 hover:border-dark hover:bg-gray-100 transition-all z-20 group"
                >
                  <X size={20} className="text-dark/40 group-hover:text-dark transition-colors" />
                </button> */}

                <div className="overflow-y-auto no-scrollbar">
                  <div className="p-8 md:p-12">
                    {/* Header Info */}
                    <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
                      <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-xl shrink-0 border-4 border-gray-50">
                        <img
                          src={selectedFellow.image}
                          alt={selectedFellow.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="space-y-5 grow pt-2">
                        <div>
                          <h2 className="text-4xl text-dark tracking-tight">
                            {selectedFellow.name}
                          </h2>
                          <p className="text-2xl text-dark/60 font-medium">
                            {selectedFellow.role}
                          </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          <div className="flex items-center gap-3 text-dark/70 font-semibold">
                            <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                              <MapPin size={20} />
                            </div>
                            <span className="text-lg">Vardhishnu Center</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About Content - Optional if we had it */}
                    {selectedFellow.about && (
                      <div className="space-y-6">
                        <div className="relative inline-block">
                          <h3 className="text-2xl font-bold text-dark">
                            About
                          </h3>
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
                        </div>
                        <div className="text-lg text-dark/80 leading-relaxed font-medium space-y-4 pt-2">
                          {selectedFellow.about
                            ?.split("\n")
                            .map((para: string, i: number) => (
                              <p key={i}>{para}</p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <div className="">
          <div className="inline-block relative mb-16">
            <h2 className="text-[24px] md:text-[32px] text-dark tracking-tight">
              Frequently asked Questions
            </h2>
            <div className="absolute -bottom-7 left-0 w-1/5 md:w-1/4 h-0.5 md:h-1 bg-primary rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-[16px] md:text-[20px] font-outfit font-semibold text-dark/80 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-dark/40 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[14px] md:text-[16px] text-dark/60 leading-relaxed font-regular">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnandgharFellowship;
