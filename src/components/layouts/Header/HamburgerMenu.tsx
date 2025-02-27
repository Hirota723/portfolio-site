import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 w-full bg-background py-4 shadow-md"
        >
          <div className="flex flex-col space-y-4 px-4">
            <NavLinks onClick={() => setIsOpen(false)} className="py-2" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HamburgerMenu;
