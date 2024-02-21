import { useEffect } from "react";
import { courseApi } from "../../api/course";
// import { WEBSITE_TITLE } from "../../constant";
import { getConfig } from "../../getConfig";
import HeroSection from "./HeroSection";

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
    <section className="flex flex-col gap-8 mt-[-5rem] md:px-[5rem] px-7 overflow-x-hidden">
      <HeroSection />
    </section>
  );
}

export default Home;
