import React from "react";

const HowItWorks = () => {
  return ( 
    <div className="container mx-auto px-4 ">
      <section className="py-24 px-4  bg-accent rounded-[2.5rem]">
        <div className="max-w-6xl mx-auto">
          {/* heading */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-secondary/60 text-sm mb-3">
              How It Works
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
              Book Your Study Room In Minutes
            </h2>

            <p className="text-secondary/70 max-w-2xl mx-auto">
              Finding a productive study space has never been easier.
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* card */}
            <div className="bg-white rounded-[2rem] p-8 border border-secondary/10 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">
                Search Rooms
              </h3>

              <p className="text-secondary/70 leading-relaxed">
                Browse available study rooms with filters and amenities.
              </p>
            </div>

            {/* card */}
            <div className="bg-white rounded-[2rem] p-8 border border-secondary/10 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">
                Choose Time Slot
              </h3>

              <p className="text-secondary/70 leading-relaxed">
                Select your preferred booking date and study duration.
              </p>
            </div>

            {/* card */}
            <div className="bg-white rounded-[2rem] p-8 border border-secondary/10 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">
                Book Instantly
              </h3>

              <p className="text-secondary/70 leading-relaxed">
                Confirm your booking instantly and start studying peacefully.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
