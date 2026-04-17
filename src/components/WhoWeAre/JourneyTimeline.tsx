import timeline from "../../assets/unkno.svg";
import timelineMobile from "../../assets/OurJourneyMobile.svg";
const JourneyTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-12">
          <div className="relative inline-block mb-8">
            <h2 className="text-[32px] text-dark tracking-tighter font-semibold lg:font-normal">
              Our Journey
            </h2>
            <div className="absolute -bottom-4 left-0 w-2/3 h-0.5 md:h-1 bg-primary rounded-full transition-all duration-300" />
          </div>
          <p className="text-dark/40 font-bold text-sm tracking-widest uppercase mb-10">
            Since 2013
          </p>

          {/* Core Activities List */}
          <div className="max-w-3xl space-y-2 text-[15px] sm:text-[15px] text-dark/80 leading-relaxed md:hidden">
            <div className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-dark/20 mt-2.5" />
              <p>
                Run Community Learning Centers for out-of-school children to
                prepare them for mainstream education.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-dark/20 mt-2.5" />
              <p>
                Rehabilitate and reintegrate child waste pickers and child
                labourers into society with dignity and care.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-dark/20 mt-2.5" />
              <p>
                Build grassroots leadership through our flagship Community
                Collectives program across multiple Indian states.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-dark/20 mt-2.5" />
              <p>
                Advocate for and strengthen child-friendly ecosystems through
                training, capacity building, and policy engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="relative overflow-x-auto no-scrollbar pb-10">
          <div className="flex items-center justify-center">
            {/* Desktop Timeline */}
            <img
              src={timeline}
              alt="Vardhishnu Journey Timeline"
              className="hidden md:block w-full lg:w-[80%] h-auto object-contain"
            />
            {/* Mobile Timeline */}
            <img
              src={timelineMobile}
              alt="Vardhishnu Journey Timeline Mobile"
              className="block md:hidden w-full h-auto object-contain px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
