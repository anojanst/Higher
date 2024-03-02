import { Outlet } from "react-router-dom";
import { Footer, Navbar, MobileNav } from "../components";
import { useState } from "react";

export const PublicLayout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <main>
      <Navbar
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <Outlet />
      <Footer />
    </main>
  );
};
