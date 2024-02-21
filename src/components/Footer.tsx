import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 items-center justify-center h-[12rem] w-full bg-black">
      <div className="flex justify-center items-center gap-8">
        <Link to="/" className="text-white text-sm">
          Home
        </Link>
        <Link to="/find-course" className="text-white text-sm">
          Find Your Course
        </Link>
        <Link to="/institutes" className="text-white text-sm">
          Institutes
        </Link>
      </div>
      <p className="text-white text-sm">
        © {new Date().getFullYear()} Higher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
