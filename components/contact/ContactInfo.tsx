import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { contactData } from "@/data/contactData";
import { SocialLinks } from "./SocialLinks";

export const ContactInfo = () => {
  const formData = useTranslatedData("Contact", contactData);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="mb-4 text-2xl font-bold normal-case">
        {formData.textHead}
      </h3>
      <p className="normal-case text-muted-foreground">
        {formData.textContent}
      </p>

      <SocialLinks />

      <div className="flex items-center gap-4 text-muted-foreground">
        <Mail className="w-6 h-6" />
        <span>riantsoa96@gmail.com</span>
      </div>
    </motion.div>
  );
};
