import { Button, Dropdown } from "../../components";
import BlueCircle from "../../assets/images/blue-ellipse.png";
import YellowCircle from "../../assets/images/yellow-ellipse.png";
import Study1 from "../../assets/images/study-1.jpg";
import Study2 from "../../assets/images/study-2.jpg";
import Study3 from "../../assets/images/study-3.jpg";
import Study4 from "../../assets/images/study-4.jpg";
import Study5 from "../../assets/images/study-5.jpg";

const HeroSection = () => {
  return (
    <section className="grid place-items-center min-h-screen w-full py-[1rem] relative">
      <div className="flex items-center justify-start w-full max-w-[1400px] relative">
        <form className="flex flex-col justify-start items-start relative gap-3 md:w-1/2 sm:w-2/3 w-full z-10">
          <h1 className="text-black xl:text-5xl md:text-4xl text-3xl font-bold">
            Find Your Dream Course
          </h1>
          <p className="text-black md:text-base text-sm">
            We have Thousands of courses Listed in the site from all over the
            island for you to choose. Use our search engine to filter out the
            course your heart desire.
          </p>
          <div className="heroForm-grid">
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Button text={"Search"} />
          </div>
        </form>
        <img
          src={YellowCircle}
          alt="blue-circle"
          className="absolute md:w-2/3 w-full max-h-[80vh] top-[-80%] -left-[30%] z-0"
        />
        <img
          src={BlueCircle}
          alt="blue-circle"
          className="absolute md:w-2/3 w-full max-h-[50vh] top-[40%] right-[20%] z-0"
        />
      </div>
      <div className="hero-container">
        <img src={Study1} alt="" className="hero-images image-1" />
        <img src={Study2} alt="" className="hero-images image-2" />
        <img src={Study3} alt="" className="hero-images image-3" />
        <img src={Study4} alt="" className="hero-images image-4" />
        <img src={Study5} alt="" className="hero-images image-5" />
      </div>
    </section>
  );
};

export default HeroSection;
