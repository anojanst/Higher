import { Link } from "react-router-dom";
import { Button } from "../components";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import {
  MAIN_MENU_FIND_COURSE,
  MAIN_MENU_HOME,
  MAIN_MENU_INSTITUTES,
} from "../constants/generalConstants";
import {
  FIND_COURSE_URL,
  HOME_URL,
  INSTITUTES_URL,
} from "../constants/urlConstants";
import { HigherLogoSVG } from "../assets";

interface NavbarProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  return (
    <nav className="sticky top-0 bg-white-500 flex w-full justify-center items-center h-20 md:px-[5rem] px-7 py-5 z-[99] shadow-lg">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <Link to={HOME_URL}>
          <img
            src={HigherLogoSVG}
            alt="Higher SVG"
            className="w-36 h-auto object-cover"
          />
        </Link>

        <div
          className="lg:hidden grid place-items-center text-[1.8rem] cursor-pointer"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <FaBars />
        </div>

        <div className="lg:flex hidden justify-center items-center gap-10">
          <Link to={HOME_URL} className="navLink">
            {MAIN_MENU_HOME}
          </Link>
          <Link to={FIND_COURSE_URL} className="navLink">
            {MAIN_MENU_FIND_COURSE}
          </Link>
          <Link to={INSTITUTES_URL} className="navLink">
            {MAIN_MENU_INSTITUTES}
          </Link>
        </div>
        <LinkScroll
          to="register-form"
          smooth={true}
          duration={500}
          className="lg:grid hidden place-items-center cursor-pointer"
        >
          <Button text="Register Your Institute" width="25rem" />
        </LinkScroll>
      </div>
    </nav>
  );
};

export default Navbar;
