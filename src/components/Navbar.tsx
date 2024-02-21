import { Link } from "react-router-dom";
import { Button } from "../components";
import HigherSVG from "../assets/svgs/higher.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white-500 flex w-full justify-center items-center h-20 md:px-[5rem] px-7 py-5">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <Link to="/">
          <img
            src={HigherSVG}
            alt="Higher SVG"
            className="w-36 h-auto object-cover"
          />
        </Link>

        <div className="lg:hidden grid place-items-center text-[1.8rem]">
          <FaBars />
        </div>

        <div className="lg:flex hidden justify-center items-center gap-10">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/find-courses" className="navLink">
            Find Your Courses
          </Link>
          <Link to="/institutes" className="navLink">
            Institutes
          </Link>
        </div>
        <div className="lg:grid hidden place-items-center">
          <Button text="Register Your Institute" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
