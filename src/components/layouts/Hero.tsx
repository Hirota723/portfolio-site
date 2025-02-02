"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-[0.2em] leading-tight"
        >
          KOKI HIROTA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 tracking-[0.5em] uppercase"
        >
          Engineer Portfolio.
        </motion.p>
        <SocialLinks />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-lg mt-10"
            onClick={() => {
              document
                .getElementById("profile")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Profile
            <ArrowDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
