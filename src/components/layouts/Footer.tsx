"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-accent/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mb-6 p-3 sm:p-2 rounded-full bg-background hover:bg-accent transition-colors"
            aria-label="トップへ戻る"
          >
            <ArrowUp className="w-8 h-8 sm:w-6 sm:h-6" />
          </motion.button>
          <p className="text-base sm:text-sm text-muted-foreground text-center">
            © KOKI HIROTA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
