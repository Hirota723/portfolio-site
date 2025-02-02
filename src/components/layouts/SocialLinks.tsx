import { motion } from "framer-motion";
import { Github, Twitter, BookOpen } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/Hirota723",
    label: "GitHub",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    url: "https://x.com/koki_hiro0723",
    label: "X",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    url: "https://qiita.com/Hirota723",
    label: "Qiita",
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex justify-center space-x-8 mb-6"
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
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
