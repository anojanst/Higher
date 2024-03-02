import { Button, Dropdown } from "../../components";
import React, { useState } from "react";
import {
  COURSE_TYPE_DATA,
  DISCIPLINE_TYPE_DATA,
  FORMAT_TYPE_DATA,
} from "../../constants/generalConstants";
import {
  BlueCircle,
  Study1,
  Study2,
  Study3,
  Study4,
  Study5,
  YellowCircle,
} from "../../assets";

interface ValuesType {
  courseType: string;
  disciplineType: string;
  formatType: string;
}

const initialFormValues: ValuesType = {
  courseType: "",
  disciplineType: "",
  formatType: "",
};

const HeroSection: React.FC = () => {
  const [values, setValues] = useState<ValuesType>(initialFormValues);

  const handleDropdownChange = (selectedValue: string, name: string) => {
    setValues({
      ...values,
      [name]: selectedValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    setValues(initialFormValues);
  };

  return (
    <section className="grid place-items-center h-screen w-full md:px-[5rem] px-7 py-8 relative -mt-20">
      <div className="flex items-center justify-start w-full max-w-[1400px] relative">
        <form
          className="flex flex-col justify-start items-start relative gap-3 md:w-1/2 sm:w-2/3 w-full z-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-black xl:text-5xl md:text-4xl text-3xl font-bold">
            Find Your Dream Course
          </h1>
          <p className="text-black md:text-base text-sm">
            We have Thousands of courses Listed in the site from all over the
            island for you to choose. Use our search engine to filter out the
            course your heart desire.
          </p>
          <div className="heroForm-grid">
            <Dropdown
              name="courseType"
              defaultValue="Select Course Type"
              options={COURSE_TYPE_DATA}
              value={values.courseType}
              onChange={handleDropdownChange}
            />
            <Dropdown
              name="disciplineType"
              defaultValue="Select Discipline Type"
              options={DISCIPLINE_TYPE_DATA}
              value={values.disciplineType}
              onChange={handleDropdownChange}
            />
            <Dropdown
              name="formatType"
              defaultValue="Select Format Type"
              options={FORMAT_TYPE_DATA}
              value={values.formatType}
              onChange={handleDropdownChange}
            />
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
