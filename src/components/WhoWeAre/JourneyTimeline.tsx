import timeline from "../../assets/image.png";

const JourneyTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-32">
          <div className="relative inline-block mb-14">
            <h2 className="text-4xl md:text-5xl text-dark tracking-tighter">
              Our Journey
            </h2>
            <div className="absolute -bottom-7 left-0 w-2/3 h-1.5 bg-primary rounded-full transition-all duration-300" />
          </div>
          <p className="mt-2 text-dark/40 font-bold text-sm tracking-widest uppercase">
            Since 2013
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative overflow-x-auto no-scrollbar pb-10">
          <div className="flex items-center justify-start min-w-[1200px]">
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
