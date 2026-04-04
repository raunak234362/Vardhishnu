import timeline from "../../assets/unkno.svg";

const JourneyTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-32">
          <div className="relative inline-block mb-14">
            <h2 className="text-[32px] text-dark tracking-tighter">
              Our Journey
            </h2>
            <div className="absolute -bottom-7 left-0 w-1/3 h-1 bg-primary rounded-full transition-all duration-300" />
          </div>
          <p className=" text-dark/40 font-bold text-sm tracking-widest uppercase">
            Since 2013
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative overflow-x-auto no-scrollbar pb-10">
          <div className="flex items-center justify-start">
            <img
              src={timeline}
              alt="Vardhishnu Journey Timeline"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
