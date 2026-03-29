import timeline from "../../assets/image.png";

const JourneyTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-32">
          <h2 className="text-4xl text-dark tracking-tighter inline-block relative border-b-4 border-primary pb-2 rounded-sm">
            Our Journey
          </h2>
          <p className="mt-4 text-dark/40 font-bold text-sm tracking-widest uppercase">
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
