import { useState } from "react";
import { Button, CheckBox, FormInput } from "../../components";
import { DisciplineData } from "../../constant";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdClose } from "react-icons/md";

interface SidebarFilterProps {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({ isOpen, setIsOpen }) => {
  const numberOfFilters = 5; // according to the filters' counts

  const [filterOpen, setFilterOpen] = useState<boolean[]>(
    Array(numberOfFilters).fill(true)
  );

  const handleClick = (id: number) => {
    setFilterOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside
      className={`${
        isOpen
          ? "lg:hidden flex absolute top-16 left-0 z-20 h-max min-h-[160vh] bg-white-500 px-4 py-8 lg:justify-center justify-start"
          : "lg:flex hidden justify-center"
      } flex-col items-center  lg:max-w-[17rem] w-full gap-8`}
    >
      <header className="lg:hidden flex w-full justify-between items-center text-3xl font-semibold">
        Filters
        <span
          className="grid place-items-center text-black cursor-pointer"
          onClick={toggleSidebar}
        >
          <MdClose />
        </span>
      </header>
      <div className="flex flex-col w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(0)}>
          Disciplines
          {filterOpen[0] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[0] && (
          <>
            {DisciplineData.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center justify-start w-full px-4 py-2 cursor-pointer hover:bg-gray-500"
              >
                <img
                  src={item.src}
                  alt={`discipline_${index}`}
                  className="w-7 h-7 object-contain"
                />
                <p className="text-[13px] text-black">{item.title}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(1)}>
          Format
          {filterOpen[1] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[1] && (
          <div className="flex flex-col w-[85%] gap-2">
            <CheckBox label="Part Time" />
            <CheckBox label="Full Time" />
          </div>
        )}
      </div>

      <div className="flex-center flex-col w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(2)}>
          Course Type
          {filterOpen[2] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[2] && (
          <div className="flex flex-col w-[85%] gap-2">
            <CheckBox label="Diploma" />
            <CheckBox label="Higher National Diploma" />
            <CheckBox label="Graduate Degree" />
            <CheckBox label="Postgraduate Degree" />
          </div>
        )}
      </div>

      <div className="flex-center flex-col w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(3)}>
          Location
          {filterOpen[3] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[3] && (
          <FormInput placeHolder="Enter Your Location" width="90%" />
        )}
      </div>

      <div className="flex-center flex-col w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(4)}>
          Institute
          {filterOpen[4] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[4] && (
          <FormInput placeHolder="Enter Institute Name" width="90%" />
        )}
      </div>

      <div className="flex-center flex-col w-full">
        <h1 className="find-filter-heading" onClick={() => handleClick(5)}>
          Course Fee
          {filterOpen[5] ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </h1>
        {filterOpen[5] && (
          <div className="flex-center gap-4 w-[90%]">
            <FormInput placeHolder="Min" />
            <FormInput placeHolder="Max" />
          </div>
        )}
      </div>
      <div className="flex w-full">
        <Button text="Filter Results" width="100%" />
      </div>
    </aside>
  );
};

export default SidebarFilter;
