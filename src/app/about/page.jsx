import React from "react";
import Image from "next/image";
import { FaUsers, FaBuilding, FaClock, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "About Us | Study Nook",
  description: "Find quiet study rooms, book instantly, and boost your productivity.",
};

const About = () => {
  return (
    <div>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-secondary font-semibold uppercase tracking-widest mb-4">
                About Us
              </p>

              <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                Modern Meeting Rooms For Your Team & Business
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We provide premium quality meeting and conference rooms for
                startups, businesses, remote teams, and professionals. Our goal
                is to make workspace booking simple, fast, and comfortable.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:scale-105 transition">
                  Explore Rooms
                </button>

                <button className="px-8 py-3 border border-secondary text-secondary rounded-full font-semibold hover:bg-secondary hover:text-white transition">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                alt="about"
                width={700}
                height={700}
                className="rounded-3xl shadow-2xl object-cover h-[500px]"
              />

              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-3xl p-6 border border-secondary/10">
                <h1 className="text-4xl font-bold text-secondary">500+</h1>
                <p className="text-gray-600 mt-2">Successful Bookings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Us
              </h1>

              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer high-quality workspaces with modern facilities to help
                your meetings become more productive and professional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6">
                  <FaBuilding />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Premium Rooms
                </h1>

                <p className="text-gray-600">
                  Modern and stylish meeting rooms with premium facilities.
                </p>
              </div>

              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6">
                  <FaUsers />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Team Friendly
                </h1>

                <p className="text-gray-600">
                  Spacious rooms suitable for meetings, workshops, and events.
                </p>
              </div>

              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6">
                  <FaClock />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Easy Booking
                </h1>

                <p className="text-gray-600">
                  Quick and hassle-free booking system for all users.
                </p>
              </div>

              {/* Card */}
              <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6">
                  <FaCheckCircle />
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                  Trusted Service
                </h1>

                <p className="text-gray-600">
                  Hundreds of customers trust our workspace solutions daily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-secondary rounded-[40px] p-10 lg:p-20 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h1 className="text-5xl font-bold mb-3">100+</h1>
                <p className="text-lg">Meeting Rooms</p>
              </div>

              <div>
                <h1 className="text-5xl font-bold mb-3">500+</h1>
                <p className="text-lg">Happy Customers</p>
              </div>

              <div>
                <h1 className="text-5xl font-bold mb-3">24/7</h1>
                <p className="text-lg">Customer Support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
