import { Link } from "react-router-dom";
import {
  FIND_COURSE_URL,
  HOME_URL,
  INSTITUTES_URL,
} from "../constants/urlConstants";
import {
  MAIN_MENU_FIND_COURSE,
  MAIN_MENU_HOME,
  MAIN_MENU_INSTITUTES,
} from "../constants/generalConstants";

const Footer = () => {
  return (
    <footer className="flex flex-col md:gap-8 gap-4 items-center justify-center h-[12rem] w-full bg-black">
      <div className="flex justify-center items-center gap-8">
        <Link to={HOME_URL} className="text-white text-sm">
          {MAIN_MENU_HOME}
        </Link>
        <Link to={FIND_COURSE_URL} className="text-white text-sm">
          {MAIN_MENU_FIND_COURSE}
        </Link>
        <Link to={INSTITUTES_URL} className="text-white text-sm">
          {MAIN_MENU_INSTITUTES}
        </Link>
      </div>
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Higher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
