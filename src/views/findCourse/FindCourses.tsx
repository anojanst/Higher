import Study1 from "../../assets/images/study-1.jpg";
import Study2 from "../../assets/images/study-4.jpg";
import Study3 from "../../assets/images/study-3.jpg";
import BlueCircle from "../../assets/images/blue-ellipse.png";
import YellowCircle from "../../assets/images/yellow-ellipse.png";

import { Helmet } from "react-helmet";
import SidebarFilter from "./SidebarFilter";
import SearchResults from "./SearchResults";
import { useState } from "react";

const FindCourses = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Find Your Courses</title>
      </Helmet>
      <main className="w-full min-h-screen flex flex-col items-center md:px-[5rem] sm:px-7 px-3 overflow-x-hidden">
        <header className="relative w-full flex flex-col items-start justify-start max-w-[1400px] gap-4 2xl:py-8 py-0 2xl:mt-[4rem] mt-4">
          <img
            src={YellowCircle}
            alt="yellowCircle"
            className="absolute top-[-50%] left-[-20%] z-0 w-[50%]"
          />
          <h1 className="text-black xl:text-5xl md:text-4xl text-3xl font-bold md:mt-[4rem] mt-4">
            Find Your Dream Course
          </h1>
          <p className="text-black md:text-lg text-sm md:w-1/2 w-full">
            We have Thousands of courses Listed in the site from all over the
            island for you to choose. Use our search engine to filter out the
            course your heart desire.
          </p>
          <img
            src={BlueCircle}
            alt="blueCircle"
            className="absolute top-[-90%] left-[-20%] z-0 w-[100%]"
          />
          <div className="absolute h-max lg:flex hidden items-center justify-center gap-8 right-[-10%] 2xl:top-[-90%] top-[-98%]">
            <img
              src={Study1}
              alt="img1"
              className="find-header-img mt-[9rem]"
            />
            <img
              src={Study2}
              alt="img2"
              className="find-header-img mt-[17rem]"
            />
            <img
              src={Study3}
              alt="img3"
              className="find-header-img mt-[5rem]"
            />
          </div>
        </header>
        <section className="relative w-full max-w-[1400px] flex items-start justify-center gap-8 2xl:mt-16 mt-8 lg:py-16 py-4 z-10">
          {!isFilterOpen && <SidebarFilter setIsOpen={setIsFilterOpen} />}
          <SearchResults setIsOpen={setIsFilterOpen} />
        </section>
        {isFilterOpen && (
          <SidebarFilter isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
        )}
      </main>
    </>
  );
};

export default FindCourses;
