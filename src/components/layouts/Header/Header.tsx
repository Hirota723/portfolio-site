"use client";

import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold">
            Portfolio
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu */}
          <HamburgerMenu />
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
