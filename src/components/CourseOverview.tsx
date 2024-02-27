import { CheckBox } from ".";

interface CourseOverviewProps {
  key: number;
  title: string;
  description: string;
  formatType: string;
  courseType: string;
  discipline: string;
  instituionLogo: string;
  institutionName: string;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({
  key,
  title,
  description,
  discipline,
  courseType,
  formatType,
  instituionLogo,
  institutionName,
}) => {
  return (
    <div
      className="w-full flex flex-col bg-white-500 sm:rounded-2xl rounded-lg md:p-5 p-3 gap-4"
      key={key}
    >
      <div className="flex md:flex-row flex-col items-start justify-between">
        <div className="md:w-4/6 w-full flex flex-col gap-3">
          <CheckBox label="Add to Compare" />
          <h1 className="md:text-3xl text-2xl font-bold -mt-2">{title}</h1>
          {/* above medium screens */}
          <p className="md:flex hidden text-sm">{description}</p>
        </div>
        <div className="flex flex-col md:items-end items-start justify-end md:w-[30%] w-full gap-1 md:mt-0 mt-2">
          <img
            src={instituionLogo}
            alt={institutionName}
            className="md:w-[7rem] w-16 md:h-[3.5rem] h-8 object-cover"
          />
          <h1 className="md:text-xl text-lg font-bold text-end">
            {institutionName}
          </h1>
          {/* below medium screens */}
          <p className="md:hidden flex sm:text-sm text-xs">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-start md:gap-4 gap-2 sm:text-sm text-xs">
        <p>{discipline}</p>
        <span className="w-[2px] bg-secondary-500 h-5"></span>
        <p>{courseType}</p>
        <span className="w-[2px] bg-secondary-500 h-5"></span>
        <p>{formatType}</p>
      </div>
    </div>
  );
};

export default CourseOverview;
