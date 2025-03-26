import { motion } from "framer-motion";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export const SocialLinks = () => {
  const socialLinks = useSocialLinks();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full bg-accent ${link.color}`}
          >
            <link.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};
