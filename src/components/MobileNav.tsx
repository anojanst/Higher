import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Button } from ".";
import { MdClose } from "react-icons/md";

interface MobileNavProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  const handleMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav
      className={`${
        isMobileNavOpen ? "lg:hidden grid place-items-center fixed" : "hidden"
      } w-full z-[100] h-full bg-white-500 top-0 left-0`}
    >
      <span
        className="absolute top-4 right-4 text-[2.3rem] cursor-pointer"
        onClick={handleMobileNav}
      >
        <MdClose />
      </span>
      <div className="flex flex-col gap-8 w-[90%] max-w-[500px]">
        <Link to="/" className="mobile-link" onClick={handleMobileNav}>
          Home
        </Link>
        <Link
          to="/find-courses"
          className="mobile-link"
          onClick={handleMobileNav}
        >
          Find Your Courses
        </Link>
        <Link
          to="/institutes"
          className="mobile-link"
          onClick={handleMobileNav}
        >
          Institutes
        </Link>
        <LinkScroll
          to="register-form"
          onClick={handleMobileNav}
          smooth={true}
          duration={500}
          className="w-full grid place-items-center bg-secondary-500 rounded-lg cursor-pointer"
        >
          <Button text="Register Your Institute" width="25rem" />
        </LinkScroll>
      </div>
    </nav>
  );
};

export default MobileNav;
