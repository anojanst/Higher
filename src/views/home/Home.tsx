import { useEffect } from "react";
import { courseApi } from "../../api/course";
// import { WEBSITE_TITLE } from "../../constant";
import { getConfig } from "../../getConfig";
import HeroSection from "./HeroSection";
import Counts from "./Counts";
import Discipline from "./Discipline";
import RegisterForm from "./RegisterForm";

const config = getConfig();

function Home() {
  const api = courseApi({
    baseUrl: config.apiUrl,
  });

  useEffect(() => {
    api.sampleApi().then((data) => {
      if (typeof data === "string") {
        console.log(data);
      } else {
        console.log("success");
      }
    });
  }, [api]);

  return (
    <section className="flex flex-col gap-8 overflow-x-hidden">
      <HeroSection />
      <Counts />
      <Discipline />
      <RegisterForm />
    </section>
  );
}

export default Home;
