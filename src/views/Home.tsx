import { useEffect } from "react";
import { courseApi } from "../api/course";
import { WEBSITE_TITLE } from "../constant";
import { getConfig } from "../getConfig";

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
  }, []);

  return (
    <>
      <h1>{WEBSITE_TITLE}</h1>
    </>
  );
}

export default Home;
