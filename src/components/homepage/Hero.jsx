import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4 min-h-[80vh] flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="w-full space-y-5 flex-1">
          <h1 className="text-4xl md:text-5xl font-bold pt-4 text-primary">
            Find Your Perfect Study Room. Build Your Focus.
          </h1>

          <p className="text-gray-500 text-lg font-medium">
            Discover quiet, private study spaces designed for deep
            concentration. Book instantly, study smarter, and achieve your
            academic goals with StudyNook.
          </p>

          <Link href="/rooms">
            <button className="px-6 py-3 bg-secondary text-white rounded-full flex items-center gap-2 hover:bg-white hover:text-secondary border border-secondary transition">
              Explore Rooms <AiOutlineArrowRight />
            </button>
          </Link>
        </div>

        {/* Right - Image */}
        <div className="w-full flex-1">
          <Image
            src="/hero.jpg"
            alt="Study Room"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
