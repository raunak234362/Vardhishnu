import {
  Users,
  RefreshCw,
  ShieldCheck,
  Check,
  MapPin,
  ExternalLink,
  Repeat,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils/imageUrl";
import communityData from "../../../data/community_collectives.json";
import LazyImage from "../../common/LazyImage";

interface Member {
  name: string;
  org: string;
  image: string | string[];
  location: string;
  focus: string;
  about?: string;
}

const CommunityCollectives = () => {
  const [activeTab, setActiveTab] = useState("Current Cohort");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const currentCohort =
    communityData.cohorts[activeTab as keyof typeof communityData.cohorts] ||
    [];

  // Hardcoded statistics to match design
  const stats = {
    initiatives: 33,
    states: 7,
    leaders: 36,
    gender: {
      male: 66.7,
      female: 33.3,
    },
    geo: {
      Urban: 20,
      "Semi-Urban": 10,
      Rural: 40,
      Tribal: 30,
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white">
      {/* Hero Header with handwritten overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-gray-100">
            <LazyImage
              src="https://res.cloudinary.com/di7aduhjv/image/upload/q_auto/f_auto/v1775153922/community_collection.jpg_rri4dw.jpg"
              alt="Community Collectives Hero"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
        </div>
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center lg:items-end lg:justify-start lg:p-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-handwritten text-7xl md:text-9xl lg:text-[10rem] drop-shadow-2xl"
          >
            Community Collectives
          </motion.h1>
        </div>
      </div>

      {/* Intro & What we do Section */}
      <div className="py-24 container-custom">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 lg:mb-48">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <h2 className="text-5xl md:text-6xl lg:text-5xl text-dark tracking-tight leading-[1.1]">
              Community Collectives <br />
              Nurturing Grassroots <br />
              Changemakers
            </h2>

            <p className="text-xl text-dark/70 leading-relaxed max-w-xl">
              Join our one-year incubation program empowering grassroots leaders
              to create lasting change in their communities through education
              and mentorship.
            </p>

            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 text-xl font-semibold rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              Register Interest
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <LazyImage
                src={getImageUrl("v1774764806/3._Home_k41tzn.jpg", "q_auto,f_auto")}
                alt="Community Group"
                className="w-full h-full object-cover scale-[1.1]"
              />
            </div>
          </motion.div>
        </div>

        {/* What we do */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative min-h-[650px]"
          >
            <div className="absolute top-0 right-4 w-[65%] aspect-4/5 rounded-2xl overflow-hidden shadow-2xl z-0">
              <LazyImage
                src={getImageUrl("v1774764800/IMG_0715_z4vkar.jpg", "q_auto,f_auto")}
                alt="Community Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-48 lg:top-56 left-4 w-[65%] aspect-4/5 rounded-2xl overflow-hidden shadow-2xl z-10 transition-transform hover:scale-[1.02] duration-500">
              <LazyImage
                src={getImageUrl("v1774764799/17_dpe7on.jpg", "q_auto,f_auto")}
                alt="Planning Session"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <h2 className="text-5xl md:text-6xl text-dark tracking-tight">
              What we do?
            </h2>

            <div className="space-y-8 text-xl leading-relaxed">
              <p>
                Community Collectives is a one-year incubation program designed
                to share our experience in building community learning spaces.
              </p>
              <p>
                We support grassroots leaders, individuals, and early-stage
                initiatives working with children from economically
                disadvantaged backgrounds—equipping them with the skills,
                resources, and visibility needed to scale their impact.
              </p>
              <p>
                Our unique incubation model helps participants kick-start their
                journey, strengthen their work, and achieve meaningful outcomes
                efficiently and sustainably.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Who can Apply Section */}
      <div className="py-24 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative inline-block mb-10 mt-40">
            <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
              Who can Apply?
            </h2>
            <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-xl">
            We're looking for passionate individuals ready to make a lasting
            difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-primary rounded-lg p-10 space-y-8 flex flex-col items-start shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-2">
              <Users size={40} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-dark leading-tight">
                We invite applications from
              </h3>
              <div className="w-14 h-1 bg-primary" />
            </div>
            <ul className="space-y-4 text-lg list-disc pl-5">
              <li>
                Individuals, initiatives, or organisations working with—or
                aspiring to work with—children from economically disadvantaged
                backgrounds
              </li>
              <li>Preferably based in non-metro areas across country</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-primary rounded-lg p-10 space-y-8 flex flex-col items-start shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-2">
              <RefreshCw size={36} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-dark leading-tight">
                Eligibility & Expectations
              </h3>
              <div className="w-14 h-1 bg-primary" />
            </div>
            <ul className="space-y-4 text-lg list-disc pl-5">
              <li>Willingness to work with children at least 2 days a week</li>
              <li>
                Commitment to continue working with children for at least 2
                years after the incubation ends
              </li>
              <li>
                Availability to attend all in-person training workshops,
                participate in field visits, regular follow-ups, and webinars
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-primary rounded-lg p-10 space-y-8 flex flex-col items-start shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-2">
              <ShieldCheck size={36} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-dark leading-tight">
                For Ideation-Stage Applicants
              </h3>
              <div className="w-14 h-1 bg-primary" />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                If you're at an early stage or still ideating:
              </p>
              <ul className="space-y-4 text-lg list-disc pl-5">
                <li>
                  You must initiate on-ground work within the first 6 months of
                  incubation (before the second residential workshop)
                </li>
                <li>
                  Submit a detailed 6-month action plan as part of your onboarding
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Incubation Support Structure */}
      <div className="py-24 container-custom">
        <div className="mb-16">
          <div className="relative inline-block mb-10">
            <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
              Incubation Support Structure
            </h2>
            <div className="absolute -bottom-3 left-0 w-1/4 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-xl">
            Comprehensive support throughout your journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-4xl p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-8">
                1
              </div>
              <h3 className="text-2xl text-dark font-bold mb-4">
                Residential Training Workshops
              </h3>
              <p className="text-pink-600 mb-8 uppercase tracking-wider text-sm">
                4 Residential Workshops of 4 Days Each
              </p>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Through three fully-funded residential workshops, we dive deep
                  into the heart of building impactful learning spaces.
                </p>
                <p className="text-dark">These immersive sessions focus on:</p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    Teaching-learning practices that truly connect with children
                  </li>
                  <li>
                    Designing meaningful content tailored for diverse learning
                    needs
                  </li>
                  <li>
                    Strengthening administration and governance to build
                    sustainable and effective organisations
                  </li>
                  <li>
                    Getting pitch ready - Proposal Writing, budgeting,
                    pitch-presentation
                  </li>
                  <li>Fundraising</li>
                  <li>Personal wellbeing and leadership</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#FFF3E0] text-[#D97706] rounded-lg flex items-center justify-center text-2xl font-bold mb-8">
                4
              </div>
              <h3 className="text-2xl text-dark font-bold mb-4">
                Networking & Resource Sharing
              </h3>
              <p className="text-[#D97706] mb-8 text-lg font-medium">
                Be Part of a Growing Community
              </p>
              <ul className="space-y-4 text-lg leading-relaxed list-disc pl-5">
                <li>
                  Connect with like-minded changemakers and gain access to a
                  larger ecosystem of partner organizations.
                </li>
                <li>
                  Upon successful completion of the incubation year, you'll join
                  our alumni network—a vibrant community of grassroots leaders
                  and organizations across the state, working together to drive
                  lasting change.
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-4xl p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-8">
                2
              </div>
              <h3 className="text-2xl text-dark font-bold mb-4">
                Field Visits
              </h3>
              <p className="text-indigo-600 mb-8 uppercase tracking-wider text-sm">
                2 Field Visits of 3 Days Each
              </p>
              <p className="text-lg leading-relaxed">
                We provide on-ground support through two field visits during the
                incubation year, offering hands-on guidance, feedback, and
                mentoring to strengthen implementation and stay aligned with
                your vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-4xl p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-8">
                3
              </div>
              <h3 className="text-2xl text-dark font-bold mb-4">Webinars</h3>
              <p className="text-green-600 mb-8 uppercase tracking-wider text-sm">
                8 Theme based webinars
              </p>
              <p className="text-lg leading-relaxed">
                Designed around the emerging needs of the cohort, these webinars
                are led by senior leaders from diverse social
                organizations—offering insights, strategies, and shared
                experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-4xl p-10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-8">
                5
              </div>
              <h3 className="text-2xl text-dark font-bold mb-4">
                Monthly Support Calls
              </h3>
              <p className="text-lg leading-relaxed">
                Get personalized guidance through monthly check-ins with our
                team—designed to strengthen your program and support you in
                building a sustainable, long-term movement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Post Incubation Support */}
      <div className="py-24 container-custom">
        <div className="relative inline-block mb-16">
          <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
            Post Incubation Support
          </h2>
          <div className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              title: "Unheard Voices - Pitch Event",
              description:
                "A unique pitching event that gives you the stage to directly present your work to donors, funders, and CSR representatives—amplifying grassroots voices and unlocking new opportunities for support and collaboration.",
            },
            {
              title: "Alumni Retreat",
              description:
                "Come together once a year to reconnect, rejuvenate, and reflect—celebrating progress, sharing stories, and strengthening bonds within the alumni community.",
            },
            {
              title: "Community Katta",
              description:
                "Be part of a vibrant online space where current cohort members and alumni come together to share, learn, and grow—building solidarity and sparking collective action.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white shadow-xl rounded-2xl p-8 pt-20 border border-gray-50 flex flex-col"
            >
              <div className="absolute top-0 left-0 right-10 h-16 bg-primary rounded-tl-2xl rounded-br-[3rem] p-4 flex items-center">
                <h3 className="text-black font-medium leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-dark/70 leading-relaxed mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Capacity Building Workshops",
              description:
                "Join specialized workshops led by Vardhishnu's knowledge partners—designed not just for you, but also for your team members, to strengthen skills and deepen your collective impact.",
            },
            {
              title: "Need-Based Webinars",
              description:
                "Need-based webinars led by domain experts, offering timely insights and practical guidance tailored to your challenges on the ground.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[31%] relative bg-white shadow-xl rounded-2xl p-8 pt-20 border border-gray-50"
            >
              <div className="absolute top-0 left-0 right-10 h-16 bg-primary rounded-tl-2xl rounded-br-[3rem] p-4 flex items-center">
                <h3 className="text-black font-medium leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <p className="text-dark/70 font-medium leading-relaxed mt-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selection Process Section */}
      <div className="py-24 container-custom">
        <div className="relative inline-block mb-24">
          <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
            Selection Process
          </h2>
          <div className="absolute -bottom-6 left-0 w-1/3 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="space-y-0 relative">
          <div className="absolute left-4 top-0 bottom-0  bg-gray-100 lg:left-6" />
          {[
            {
              title: "Application Form",
              status: "checked",
              text: "We start our application process in the month of March. Interested people can apply online through application form. The application form is an opportunity for us to get to know you. Through the application, we will understand your inspiration, why you want to join and why you would be a strong fit for the program.",
            },
            {
              title: "Telephonic Interview",
              status: "checked",
              text: "Here we will ask some follow-up questions based on the information provided in the application form to gain further information about your initiative. This will helpful in our evaluation.",
            },
            {
              title: "Final Panel Selection",
              status: "pending",
              text: "Here you will attain 2 day in-person selection round and where you will take part in group discussions and also complete a short problem solving activity, present your work in front of others. You will also have a hour-long personal interview with one of our team members.",
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-16 pb-20 last:pb-0"
            >
              <div
                className={`absolute left-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 transition-colors duration-500 ${
                  step.status === "checked"
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-white"
                }`}
              >
                {step.status === "checked" ? (
                  <Check size={24} strokeWidth={3} />
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl text-dark">{step.title}</h3>
                <p className="text-lg md:text-xl text-dark/70 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collective Impact Section */}
      <div className="py-24 container-custom">
        <div className="relative inline-block mb-16">
          <h2 className="text-3xl md:text-5xl text-dark tracking-tight">
            Collective Impact
          </h2>
          <div className="absolute -bottom-6 left-0 w-1/2 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-24 text-center px-4">
          {[
            { val: stats.states.toString(), label: "States" },
            {
              val: stats.initiatives.toString(),
              label: "Initiatives Incubated",
            },
            {
              val: stats.leaders.toString(),
              label: "Grassroot Leaders Nurtured",
            },
            { val: "65+", label: "Safe & Joyful spaces created" },
            { val: "6000+", label: "Children Impacted" },
          ].map((m, i) => (
            <div key={i} className="space-y-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl text-primary">{m.val}</span>
                <div className="w-10 h-1 bg-black mt-2" />
              </div>
              <p className="text-lg text-dark leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Geographic Spread */}
          <div className="bg-white rounded-4xl p-10 border border-gray-100 shadow-xl flex flex-col items-center">
            <h3 className="text-3xl text-dark font-semibold mb-10 w-full text-center tracking-tight">
              Geographic Spread
            </h3>
            <div className="relative w-72 h-72 mb-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {[10, 20, 30, 40, 50].map((r) => (
                  <circle
                    key={r}
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="0.5"
                  />
                ))}
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "circOut" }}
                  d="M 50 50 L 67.5 19.7 A 35 35 0 0 1 84.2 57.3 Z"
                  fill="#6A9A01"
                  style={{ originX: "50px", originY: "50px" }}
                />
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "circOut", delay: 0.1 }}
                  d="M 50 50 L 89.1 58.3 A 40 40 0 0 1 30 84.6 Z"
                  fill="#A3CE31"
                  style={{ originX: "50px", originY: "50px" }}
                />
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                  d="M 50 50 L 26 91.6 A 48 48 0 0 1 45 2.2 Z"
                  fill="#DCF888"
                  style={{ originX: "50px", originY: "50px" }}
                />
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
                  d="M 50 50 L 47.4 25.1 A 25 25 0 0 1 62.5 28.4 Z"
                  fill="#C6F12B"
                  style={{ originX: "50px", originY: "50px" }}
                />
              </svg>
            </div>
            <div className="w-full max-w-[260px] space-y-5">
              {[
                {
                  label: "Urban",
                  val: stats.geo.Urban.toString(),
                  color: "#6A9A01",
                },
                {
                  label: "Semi-Urban",
                  val: stats.geo["Semi-Urban"].toString(),
                  color: "#C6F12B",
                },
                {
                  label: "Rural",
                  val: stats.geo.Rural.toString(),
                  color: "#DCF888",
                },
                {
                  label: "Tribal",
                  val: stats.geo.Tribal.toString(),
                  color: "#A3CE31",
                },
              ].map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: l.color }}
                    />
                    <span className="text-dark text-xl">{l.label}</span>
                  </div>
                  <span className="text-dark text-xl font-bold">{l.val}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gender Spread */}
          <div className="bg-white rounded-4xl p-10 border border-gray-100 shadow-xl flex flex-col items-center">
            <h3 className="text-3xl text-dark font-semibold mb-10 w-full text-center">
              Gender - Entrepreneurs
            </h3>
            <div className="relative w-72 h-72 mb-10 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full transform -rotate-90 overflow-visible"
              >
                {[10, 20, 30, 40, 50].map((r) => (
                  <circle
                    key={r}
                    cx="50"
                    cy="50"
                    r={r}
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="0.5"
                  />
                ))}
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  d="M 50 50 L 72.5 11 A 45 45 0 1 1 5 50 Z"
                  fill="#A3CE31"
                  style={{ originX: "50px", originY: "50px" }}
                />
                <motion.path
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "circOut", delay: 0.3 }}
                  d="M 50 50 L 20 50 A 30 30 0 0 1 65 24 Z"
                  fill="#DCF888"
                  style={{ originX: "50px", originY: "50px" }}
                />
              </svg>
            </div>
            <div className="space-y-6 w-full pt-6 px-10">
              {[
                {
                  label: "Male",
                  val: stats.gender.male.toString(),
                  color: "#A3CE31",
                },
                {
                  label: "Females",
                  val: stats.gender.female.toString(),
                  color: "#DCF888",
                },
              ].map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                  className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-5 h-5 rounded-full border border-gray-100"
                      style={{ backgroundColor: l.color }}
                    />
                    <span className="text-dark text-xl">{l.label}</span>
                  </div>
                  <span className="text-dark text-xl font-bold">{l.val}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA Section */}
      <div className="py-24 container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-lg p-12 lg:p-20 text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-dark leading-tight">
            Applications for the 2026 Cohort Are Now Closed
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-lg leading-relaxed">
            <p>
              The submission window for application to 2026 cohort is now
              closed.
            </p>
            <p>
              If you are interested in applying for the program; kindly register
              your interest for next year here.
            </p>
          </div>
          <button className="btn-primary mx-auto mt-4 px-15 py-4 text-xl rounded-lg shadow-xl shadow-primary/20">
            Register Interest
          </button>
        </motion.div>
      </div>

      {/* Our Cohort Section */}
      <div className="py-24 container-custom">
        <div className="relative inline-block mb-10">
          <h2 className="text-4xl md:text-5xl text-dark tracking-tight">
            Our Cohort
          </h2>
          <div className="absolute -bottom-3 left-0 w-12 h-1.5 bg-primary rounded-full" />
        </div>

        {/* Tabs - Pill container */}
        <div className="flex justify-start mb-16">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full border border-gray-100 shadow-sm w-full max-w-full overflow-x-auto hide-scrollbar">
            {[
              "Current Cohort",
              "2024-25",
              "2023-24",
              "2022-23",
              "2021-22",
              "2020-21",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-8 py-3 rounded-full text-lg transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-primary text-white font-medium shadow-md"
                    : "text-dark hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Badge Indicator on a line */}
        <div className="relative flex justify-center mb-16 px-4">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
          <div className="relative px-12 py-3 bg-white border border-gray-200 text-dark font-medium rounded-full shadow-sm text-lg whitespace-nowrap">
            {activeTab === "Current Cohort" ? (
              "Current Cohort"
            ) : (
              <>
                Cohort -{" "}
                {(() => {
                  const year = activeTab;
                  const startYear = parseInt(year.split("-")[0]);
                  return startYear - 2020 + 1;
                })()}{" "}
                {activeTab}
              </>
            )}
          </div>
        </div>

        {/* Cohort Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {currentCohort.map((member: Member, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                {member.image && (
                  <>
                    {Array.isArray(member.image) ? (
                      <div className="flex h-full w-full">
                        {member.image.map((img, idx) => (
                          <LazyImage
                            key={idx}
                            src={getImageUrl(img)}
                            alt={`${member.name} ${idx + 1}`}
                            className="w-1/2 h-full object-cover group-hover:scale-[1.1] transition-transform duration-700"
                          />
                        ))}
                      </div>
                    ) : (
                      <LazyImage
                        src={getImageUrl(member.image)}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-700"
                      />
                    )}
                  </>
                )}
              </div>

              <div className="p-10 space-y-6 flex-grow flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-dark/60 text-lg">{member.org}</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 text-dark/70">
                    <div className="mt-1.5 p-1 bg-primary/10 rounded-lg text-primary">
                      <MapPin size={18} />
                    </div>
                    <span className="text-lg leading-snug">
                      {member.location}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 text-dark/70">
                    <div className="mt-1.5 p-1 bg-orange-50 rounded-lg text-orange-500">
                      <Repeat size={18} />
                    </div>
                    <span className="text-lg leading-snug">{member.focus}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <button className="flex items-center gap-2 font-bold text-lg hover:gap-3 transition-all text-primary/80">
                    <ExternalLink size={20} />
                    <span>Learn more</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-1 rounded-full border-2 border-dark/20 hover:border-dark hover:bg-gray-100 transition-all z-20 group"
              >
                <X
                  size={20}
                  className="text-dark/40 group-hover:text-dark transition-colors"
                />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
                    <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-xl shrink-0 border-4 border-gray-50 bg-gray-50">
                      {Array.isArray(selectedMember.image) ? (
                        <div className="flex h-full w-full">
                          {selectedMember.image.map((img, idx) => (
                            <LazyImage
                              key={idx}
                              src={getImageUrl(img)}
                              alt={`${selectedMember.name} ${idx + 1}`}
                              className="w-1/2 h-full object-cover"
                            />
                          ))}
                        </div>
                      ) : (
                        <LazyImage
                          src={getImageUrl(selectedMember.image)}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="space-y-5 grow pt-2">
                      <div>
                        <h2 className="text-4xl font-bold text-dark tracking-tight">
                          {selectedMember.name}
                        </h2>
                        <p className="text-2xl text-dark/60 font-medium">
                          {selectedMember.org}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-3 text-dark/70 font-semibold">
                          <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                            <MapPin size={20} />
                          </div>
                          <span className="text-lg">
                            {selectedMember.location}
                          </span>
                        </div>
                        <div className="flex items-start gap-3 text-dark/70 font-semibold">
                          <div className="mt-1 p-1.5 bg-orange-50 rounded-lg text-orange-500 shrink-0">
                            <Repeat size={20} />
                          </div>
                          <span className="text-lg leading-snug">
                            {selectedMember.focus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative inline-block">
                      <h3 className="text-2xl font-bold text-dark">About</h3>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
                    </div>
                    <div className="text-lg text-dark/80 leading-relaxed font-medium space-y-4 pt-2">
                      {selectedMember.about
                        ?.split("\n")
                        .map((para: string, i: number) => (
                          <p key={i}>{para}</p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CommunityCollectives;
