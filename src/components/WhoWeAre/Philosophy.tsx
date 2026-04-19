import { getImageUrl } from "../../utils/imageUrl";

const Philosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Main Background Container */}
        <div className="relative rounded-xl overflow-hidden min-h-[600px] shadow-2xl flex items-center p-6 md:p-12 lg:p-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={getImageUrl("q_auto/f_auto/v1774764816/DSCN2417_uhljsa.jpg")}
              alt="Philosophy background"
              className="w-full h-full object-cover object-top"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Unified Card for Mobile / Stepped Panels for Desktop */}
            <div className="bg-white/85 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none shadow-2xl md:shadow-none w-full md:w-auto">
              {/* 1. Heading Box */}
              <div
                className="md:bg-white md:px-18 md:py-2 md:rounded-t-xl relative z-30 inline-block mb-6 md:mb-0"
              >
                <h2 className="md:text-[32px] text-[24px] text-dark font-bold md:font-semibold tracking-tight">
                  Our Guiding Philosophy
                </h2>
                <div className="w-16 h-0.5 md:h-1 bg-primary mt-3 md:mt-1 rounded-full" />
              </div>

              {/* 2. Main Description Box */}
              <div
                className="md:bg-white md:p-10 md:py-10 md:px-14 md:rounded-xl md:shadow-xl w-full lg:w-[100%] md:-mt-2 relative z-20 ml-0"
              >
                <div className="space-y-2 md:space-y-4 max-w-5xl">
                  <p className="text-[18px] md:text-[16px] text-dark leading-relaxed">
                    We are rooted in Ubuntu – "I am because we are."
                  </p>
                  <p className="text-[17px] md:text-[16px] text-dark leading-relaxed">
                    Our mission is not just to protect vulnerable children, but
                    to transform entire communities into safe, nurturing, and
                    self-sustaining environments where children can learn, grow,
                    and lead with confidence
                  </p>
                </div>
              </div>

              {/* 3. Quote Box */}
              <div
                className="md:bg-white p-0 md:p-10 md:rounded-2xl w-full lg:w-[55%] md:self-end mt-8 md:-mt-16 relative z-30 md:ml-auto"
              >
                <p className="text-[17px] md:text-[16px] text-dark text-center leading-snug">
                  At Vardhishnu, we're not just changing lives—we're changing
                  the way the world sees every child.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
