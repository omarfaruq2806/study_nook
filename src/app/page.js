import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import LatestRoom from "@/components/homepage/LatestRoom";
import StatsSection from "@/components/homepage/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <LatestRoom></LatestRoom>
      <StatsSection></StatsSection>
      <HowItWorks></HowItWorks>
    </>
  );
}
