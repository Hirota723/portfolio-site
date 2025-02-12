import { motion } from "framer-motion";
import { socialLinks } from "@/constants/socialLinks";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex justify-center space-x-8"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
