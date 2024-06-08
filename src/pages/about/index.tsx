import AboutTeam from "@/components/AboutPage/AboutTeam";
import Cover from "@/components/Cover/Cover";

const About = () => {
  return (
    <div className="container mx-auto bg-main text-white">
      <Cover title={"About Us"} title2={"About-us"} />
      <AboutTeam />
      {/* <AboutPage/> */}
    </div>
  );
};

export default About;
