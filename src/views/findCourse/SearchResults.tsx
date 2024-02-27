import { CourseOverview } from "../../components";
import { SampleSearchResults } from "../../constant";
import { FaFilter } from "react-icons/fa";

interface SidebarFilterProps {
  setIsOpen: (isOpen: boolean) => void;
}

const SearchResults: React.FC<SidebarFilterProps> = ({ setIsOpen }) => {
  return (
    <section className="w-full bg-primary-600">
      <header className="flex items-center lg:justify-start justify-between w-full text-xl bg-primary-500 text-white sm:mb-4 mb-1">
        <h1 className="lg:text-xl text-base p-2 sm:px-4 px-2">
          Search Results
        </h1>
        <span
          className="lg:hidden flex items-center justify-center gap-2 bg-secondary-500 p-2 sm:px-4 px-2 text-base cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaFilter />
          Filters
        </span>
      </header>
      <div className="flex flex-col sm:gap-4 gap-2 sm:p-4 p-1">
        {SampleSearchResults.map((item, index) => (
          <CourseOverview
            key={index}
            title={item.title}
            description={item.description}
            discipline={item.discipline}
            courseType={item.courseType}
            formatType={item.formatType}
            instituionLogo={item.institutionLogo}
            institutionName={item.institutionName}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
