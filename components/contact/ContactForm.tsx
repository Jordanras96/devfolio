import { useContactForm } from "@/features/contact/hooks/useContactForm";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { contactData } from "@/data/contactData";

export const ContactForm = () => {
  const { register, errors, isLoading, onSubmit } = useContactForm();
  const t = useTranslations("Contact");
  const formData = useTranslatedData("Contact", contactData);

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <motion.div
        variants={inputVariants}
        whileFocus="focus"
        className="space-y-2"
      >
        <label
          htmlFor="name"
          className="text-sm font-medium normal-case"
          id="name-label"
        >
          {formData.nameForm}
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg bg-accent/50 border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          aria-labelledby="name-label"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={inputVariants}
        whileFocus="focus"
        className="space-y-2"
      >
        <label htmlFor="email" className="text-sm font-medium normal-case">
          {formData.emailForm}
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg bg-accent/50 border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </motion.div>

      <motion.div
        variants={inputVariants}
        whileFocus="focus"
        className="space-y-2"
      >
        <label htmlFor="message" className="text-sm font-medium normal-case">
          {formData.messageForm}
        </label>
        <textarea
          {...register("message")}
          id="message"
          className="w-full px-4 py-2 rounded-lg bg-accent/50 border border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50 min-h-[150px]"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white normal-case transition-opacity rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
        }`}
      >
        {isLoading ? t("sending") : formData.btn}
        <Send className="w-4 h-4" />
      </motion.button>
    </motion.form>
  );
};
