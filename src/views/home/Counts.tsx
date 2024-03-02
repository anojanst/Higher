import { GraduationIcon } from "../../assets";
import { HOME_COUNTS_DATA } from "../../constants/homeConstants";

const Counts = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[2rem]">
      <div className="py-8 w-full flex items-center justify-center xl:gap-[5rem] sm:gap-[3rem] gap-4 md:px-[5rem] px-7">
        {HOME_COUNTS_DATA.map((item, index) => (
          <div className="count-box" key={index}>
            <h1>{item.count}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid place-items-center min-h-[30vh] w-full bg-primary-500 p-5 md:px-[5rem] px-7">
        <div className="max-w-[1400px] flex items-center justify-between gap-[2rem]">
          <div className="flex flex-col items-start justify-start md:gap-8 gap-4 md:w-[70%] w-full text-white">
            <h1 className="text-4xl font-bold">
              WE ARE CHANGING THE WAY PEOPLE CHOOSE
            </h1>
            <p>
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in luptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <img
            src={GraduationIcon}
            alt="graduationIcon"
            className="md:flex hidden w-[12rem] h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Counts;
