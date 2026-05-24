import React from "react";

const StatsSection = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="bg-secondary py-20 px-4 rounded-[2.5rem] overflow-hidden relative">
        {/* background blur */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* heading */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-3">
              Study Nook Stats
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by Students Every Day
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              Thousands of students use Study Nook to discover peaceful and
              productive study environments.
            </p>
          </div>

          {/* stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                500+
              </h3>

              <p className="text-white/70 font-medium">Study Rooms</p>
            </div>

            {/* card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                1.2K+
              </h3>

              <p className="text-white/70 font-medium">Bookings Made</p>
            </div>

            {/* card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                300+
              </h3>

              <p className="text-white/70 font-medium">Active Students</p>
            </div>

            {/* card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-center hover:-translate-y-1 transition duration-300">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                98%
              </h3>

              <p className="text-white/70 font-medium">Positive Reviews</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
