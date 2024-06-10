import HeroSection from "@/components/HomePage/HeroSection";
import HeroFAQ from "@/components/HomePage/HeroFAQ";
import TechnologyLearn from "@/components/HomePage/TechnologyLearn";

const Home = () => {
  return (
    <div className="bg-main text-white">
      <HeroSection />
      <TechnologyLearn />
      <div className="pb-10">
        <HeroFAQ />
      </div>
    </div>
  );
};

export default Home;
