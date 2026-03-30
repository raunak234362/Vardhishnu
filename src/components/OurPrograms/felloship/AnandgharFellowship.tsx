import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AnandgharFellowship = () => {
  const [activeTab, setActiveTab] = useState<"current" | "alumni">("current");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Attach non-passive wheel listener for scroll hijacking
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Logic: If scrolling down and not at end, OR scrolling up and not at start, hijack it.
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
      const isAtStart = container.scrollLeft <= 10;
      
      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeTab]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fellows = {
    current: [
      { name: "Vijaya Randhe", role: "Center Lead", image: "" },
      { name: "Bhimsing Pawra", role: "Fellow - Educator", image: "" },
      { name: "Lalita Mavaskar", role: "Fellow - Educator", image: "" },
      { name: "Ashish Gajbhar", role: "Fellow - Educator", image: "" },
      { name: "Sakshi Khure", role: "Fellow - Educator", image: "" },
      { name: "Rutik Bhongade", role: "Fellow - Educator", image: "" },
    ],
    alumni: [
      { name: "Monali Gedekar", role: "Working with Vardhishnu", image: "" },
      { name: "Ritika Deote", role: "Working with Vardhishnu", image: "" },
      { name: "Shital Raut", role: "Pursuing M.A. in Azim Premji University", image: "" },
      { name: "Nisha Meshram", role: "Pursuing M.A. in Azim Premji University", image: "" },
      { name: "Manisha Yawalkar", role: "Homemaker", image: "" },
      { name: "Aditi Patil", role: "Pursuing M.A. in Azim Premji University", image: "" },
      { name: "Savita Wagh", role: "Homemaker", image: "" },
      { name: "Mangala Jadhav", role: "Homemaker", image: "" },
    ]
  };

  const faqs = [
    { question: "What is the Anandghar Fellowship?", answer: "The Anandghar Fellowship is a two-year full-time commitment where fellows work on the ground to provide educational support and create safe spaces for children from marginalized communities." },
    { question: "Who can apply?", answer: "Young graduates from any discipline who are passionate about social change and ready to work in challenging community environments can apply." },
    { question: "Do I need to know Marathi or any local language?", answer: "While proficiency in Marathi is highly beneficial as our primary operations are in Maharashtra, we also value candidates from diverse linguistic backgrounds who are willing to learn and adapt." },
    { question: "Is this a paid fellowship?", answer: "Yes, fellows receive a monthly stipend to cover their living expenses during the two-year tenure." },
    { question: "Where will I stay during my fellowship tenure?", answer: "Vardhishnu assists fellows in finding safe and affordable accommodation near their assigned community learning centers." },
    { question: "What support will I get during the Fellowship?", answer: "Fellows receive regular training, mentorship, and pedagogical support to help them navigate their roles effectively." },
    { question: "Where will I be placed?", answer: "Placement happens in our community learning centers located in urban or semi-urban areas where street children and child laborers reside." },
    { question: "What happens after the Fellowship?", answer: "After the fellowship, our alumni pursue varied paths including higher education at prestigious universities, working with other NGOs, or continuing their journey with Vardhishnu." },
    { question: "What makes the Anandghar Fellowship unique?", answer: "Our fellowship is unique because of its deep immersion into the lives of children from the most vulnerable backgrounds, focusing on holistic development rather than just academics." },
  ];

  return (
    <section className="bg-white">
      {/* Hero Header with handwritten overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-gray-100">
           {/* Placeholder for Hero Image
           <LazyImage
            src={getImageUrl("v1774770398/Hero1_lrgfwj.png")} 
            alt="AnandGhar Fellowship Hero"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          /> 
          */}
        </div>
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center lg:items-end lg:justify-start lg:p-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-handwritten text-7xl md:text-9xl lg:text-[10rem] drop-shadow-2xl"
          >
            AnandGhar Fellowship
          </motion.h1>
        </div>
      </div>

      <div className="container-custom py-24">
        {/* Our Approach Section */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
                Our Approach
              </h2>
              <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-primary rounded-full" />
            </div>

            <div className="space-y-8">
              <p className="text-2xl text-dark/80 italic font-medium leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
                "If we want to reach real peace in the world, we should start educating our children." – Mahatma Gandhi
              </p>
              
              <p className="text-xl text-dark/70 leading-relaxed font-semibold max-w-2xl">
                In India, UNICEF estimates there are nearly 11 million street children. Many of them live and work on the streets, struggling to survive while facing exploitation and abuse. Solving this challenge requires sustained, determined, and compassionate action.
              </p>

              <p className="text-xl text-dark/70 leading-relaxed font-semibold max-w-2xl">
                The Anandghar Fellowship invites young graduates who are:
              </p>

              <ul className="space-y-6">
                {[
                  "Ready to walk the path of service envisioned by Mahatma Gandhi",
                  "Willing to challenge themselves and explore different aspects of the education system",
                  "Committed to going beyond academics and classroom to address the holistic needs of children & communities"
                ].map((point, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-2 w-3 h-3 rounded-full bg-primary shrink-0" />
                    <p className="text-lg text-dark/70 font-semibold leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <p className="text-xl text-dark/70 leading-relaxed font-semibold max-w-2xl">
                  This is your chance to embark on a two-year journey that is as challenging as it is rewarding—a journey where you'll use your knowledge and skills to transform the lives of some of the poorest and most vulnerable children.
                </p>

                <p className="text-xl text-dark/70 leading-relaxed font-semibold max-w-2xl">
                  Join us, and help build a future where every child has the chance to learn, grow, and live with dignity.
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
            <div className="aspect-3/4 rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl border-4 border-white">
              {/* Side Image Placeholder */}
              {/* <LazyImage
                src={getImageUrl("SIDE_IMAGE_ID")}
                alt="Our approach image"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              /> */}
            </div>
          </motion.div>
        </div>

        {/* What is Fellowship Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24 mb-40">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="relative inline-block mb-10">
              <h2 className="text-4xl md:text-5xl text-dark tracking-tight leading-tight">
                What is the Anandghar Fellowship?
              </h2>
              <div className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
            </div>

            <p className="text-xl text-dark/70 leading-relaxed font-semibold">
              The Anandghar Fellowship is not just a program—it's a two-year, life-changing journey into the heart of India's grassroots. Through our Community Learning Centers, you'll create safe, joyful spaces where children from most marginalized communities can learn, dream, and reclaim their childhood.
            </p>
          </motion.div>

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            <div className="aspect-square lg:aspect-4/5 rounded-[3rem] bg-gray-100 overflow-hidden shadow-2xl border-4 border-white">
              {/* Left Image Placeholder */}
              {/* <LazyImage
                src={getImageUrl("LEFT_IMAGE_ID")}
                alt="What is Fellowship image"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              /> */}
            </div>
          </motion.div>
        </div>

        {/* As a Fellow Section */}
        <div className="mb-15">
          <p className="text-2xl text-dark/60 mb-12">As a Fellow, you will:</p>
          <div className="space-y-10 max-w-100%">
            {[
              {
                title: "Create impact where it matters most",
                description: "Design and lead daily teaching-learning sessions, engage with communities, and coordinate with schools to ensure every child's well-being."
              },
              {
                title: "Face challenges head-on",
                description: "Experience the realities of children living in difficult circumstances, and develop the skills, empathy, and determination to solve them."
              },
              {
                title: "Be the bridge",
                description: "Build trust and collaboration among parents, community members, school, govt agencies and society at large."
              },
              {
                title: "Grow as a leader",
                description: "Learn to envision, plan, execute, reflect, and be part of something bigger than yourself."
              },
              {
                title: "Lead with love",
                description: "embody leadership grounded in compassion, respect, and unwavering belief in every child's potential."
              }
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
                <p className="text-xl text-dark/70 font-semibold leading-relaxed">
                  <span className="text-dark">{duty.title}</span> — {duty.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-2xl text-dark/70  max-w-100%">
            This isn't just about teaching—it's about building futures, breaking cycles of injustice, and becoming part of something bigger than yourself.
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
            <h2 className="text-2xl md:text-4xl text-dark font-semibold tracking-tight">
              Applications for the 2026 Cohort Are Now <span className="text-primary font-bold">Open!</span>
            </h2>
            <div className="">
              <p className="text-xl text-dark/60 leading-relaxed">
                The submission window for application to 2026 cohort are now open.
              </p>
              <p className="text-xl text-dark/60 leading-relaxed">
                If you are interested in applying for the program, kindly register your interest for next year here.
              </p>
            </div>
            <button className="btn-primary mx-auto px-20 flex items-center justify-center py-4 text-xl rounded-lg shadow-xl shadow-primary/20 cursor-pointer">
              Register
            </button>
          </motion.div>
        </div>

        {/* Selection Process Section */}
        <div className="relative mb-24 lg:mb-40 px-10 lg:px-0 max-w-7xl mx-auto">
          <div className="relative inline-block mb-20">
            <h2 className="text-3xl md:text-5xl text-dark tracking-tight">
              Our Selection Process
            </h2>
            <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full" />
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
                <div className="absolute -left-16 lg:-left-20 top-2 w-10 h-10 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-20 border-4 border-white">
                  <Check size={20} strokeWidth={3} />
                </div>
                
                <div className="hidden lg:block absolute top-6 right-full w-[100%] h-[250px] pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 500 250" fill="none" preserveAspectRatio="none">
                    <path
                      d="M 500 0 H 100 Q 20 0 20 60 V 250"
                      stroke="#d1d5db"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-4xl text-dark">The Application Form</h3>
                  <div className="w-16 h-1.5 bg-[#a3c639]" />
                  <p className="text-xl text-dark/70 leading-relaxed">
                    The application form helps us get to know you. Please be specific, clear, and honest in your responses. It should reflect why you want to join Vardhishnu and why you'd be a strong fit for the Fellowship. Incomplete applications will not be considered.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="h-32 lg:h-40" />

            {/* Step 2: The Phone Interview */}
            <div className="flex justify-start lg:pl-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-[45%] relative"
              >
                <div className="absolute -left-16 lg:-left-20 top-2 w-10 h-10 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-20 border-4 border-white">
                  <Check size={20} strokeWidth={3} />
                </div>

                <div className="hidden lg:block absolute top-6 left-full w-[100%] h-[250px] pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 500 250" fill="none" preserveAspectRatio="none">
                    <path
                      d="M 0 0 H 400 Q 480 0 480 60 V 250"
                      stroke="#d1d5db"
                      strokeWidth="3"
                      strokeDasharray="10 10"
                    />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="text-4xl text-dark">The Phone Interview</h3>
                  <div className="w-16 h-1.5 bg-[#a3c639]" />
                  <p className="text-xl text-dark/70 leading-relaxed">
                    After reviewing your application, we may invite you for a one-hour phone interview to clarify details and gather additional information for our evaluation.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="h-32 lg:h-40" />

            {/* Step 3: Final Panel Selection */}
            <div className="flex justify-end lg:pr-12 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-[45%] relative"
              >
                <div className="absolute -left-16 lg:-left-20 top-2 w-10 h-10 rounded-full bg-[#3ac2ba] flex items-center justify-center text-white shadow-lg z-20 border-4 border-white">
                  <Check size={20} strokeWidth={3} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-4xl text-dark">Final Panel Selection</h3>
                  <div className="w-16 h-1.5 bg-[#a3c639]" />
                  <p className="text-xl text-dark/70 leading-relaxed">
                    In the final stage, you will attend a 2-day in-person selection round. This includes group discussions, a short problem-solving activity with a presentation, and a one-hour personal interview with a team member.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Anandghar Fellows Section */}
        <div className="mb-40 max-w-7xl mx-auto px-10 lg:px-0">
          <div className="inline-block relative mb-12">
            <h2 className="text-3xl md:text-5xl text-dark tracking-tight">Anandghar Fellows</h2>
            <div className="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex gap-8 mb-16 border-b border-gray-100">
            <button
              onClick={() => setActiveTab("current")}
              className={`pb-4 text-lg font-medium transition-all relative ${
                activeTab === "current" ? "text-primary" : "text-dark/40 hover:text-dark/60"
              }`}
            >
              Current Cohort
              {activeTab === "current" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("alumni")}
              className={`pb-4 text-lg font-medium transition-all relative ${
                activeTab === "alumni" ? "text-primary" : "text-dark/40 hover:text-dark/60"
              }`}
            >
              Our Alumni
              {activeTab === "alumni" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />
              )}
            </button>
          </div>

          {/* Horizontal Scroll Area */}
          <div className="relative group">
            <div 
              ref={scrollRef}
              className="overflow-x-auto pb-12 hide-scrollbar scroll-smooth"
              onScroll={(e) => {
                const target = e.currentTarget;
                const scrollPercent = (target.scrollLeft / (target.scrollWidth - target.clientWidth)) * 100;
                const indicator = document.getElementById("fellow-scroll-indicator");
                if (indicator) {
                  const segments = indicator.children;
                  const activeIdx = Math.min(Math.floor((scrollPercent / 100) * segments.length), segments.length - 1);
                  Array.from(segments).forEach((seg, i) => {
                    (seg as HTMLElement).style.backgroundColor = i === activeIdx ? "#a3c639" : "#e5e7eb";
                  });
                }
              }}
            >
              <div className="flex gap-8 w-max">
                {fellows[activeTab].map((fellow, idx) => (
                  <motion.div
                    key={fellow.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-[300px] flex-shrink-0"
                  >
                    <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                      <div className="w-full h-full bg-gray-200" /> {/* Placeholder for image */}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-bold text-dark">{fellow.name}</h4>
                      <p className="text-dark/60 font-medium">{fellow.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Custom Scroll Indicator (the 5 segments from ref image) */}
            <div className="flex justify-center mt-8">
              <div id="fellow-scroll-indicator" className="flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-1.5 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: i === 0 ? "#a3c639" : "#e5e7eb" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-10 lg:px-0 mb-40">
          <div className="inline-block relative mb-16">
            <h2 className="text-3xl md:text-5xl text-dark tracking-tight">Frequently asked Questions</h2>
            <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-primary rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-bold text-dark/80 group-hover:text-primary transition-colors">
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
                      <p className="pb-8 text-lg text-dark/60 leading-relaxed font-medium">
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
