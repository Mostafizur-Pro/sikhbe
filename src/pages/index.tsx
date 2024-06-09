import HeroSection from "@/components/HomePage/HeroSection";
import HeroFAQ from "@/components/HomePage/HeroFAQ";

const Home = () => {
  return (
    <div className="bg-main text-white">
      <HeroSection />
      <div className="pb-10">
        <HeroFAQ />
      </div>
    </div>
  );
};

export default Home;
