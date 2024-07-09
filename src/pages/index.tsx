import HeroSection from "@/components/HomePage/HeroSection";
import HeroFAQ from "@/components/HomePage/HeroFAQ";
import TechnologyLearn from "@/components/HomePage/TechnologyLearn";
import LearningCenter from "@/components/HomePage/LearningCenter";
import WhatTheySay from "@/components/HomePage/WhatTheySay";

const Home = () => {
  return (
    <div className="bg-main text-white">
      <HeroSection />
      <LearningCenter />
      <TechnologyLearn />
      <div className="pb-10">
        <HeroFAQ />
      </div>
      <div
        className="pb-10"
        style={{
          backgroundColor: "rgba(245, 245, 254, 0.03)",
        }}
      >
        <WhatTheySay />
      </div>
    </div>
  );
};

export default Home;
