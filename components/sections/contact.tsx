"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const t = useTranslations("Contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      toast.success(t("successMessage"));
      setFormState({ name: "", email: "", message: "" });
    } catch {
      toast.error(t("errorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  const contactData = [
    {
      textHead: t("textHead"),
      textContent: t("textContent"),
      nameForm: t("form.name"),
      emailForm: t("form.email"),
      messageForm: t("form.message"),
      btn: t("btn"),
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jordanras96",
      color: "hover:text-gray-100",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/JordanRiantsoa",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jordanrasoloarison",
      color: "hover:text-blue-600",
    },
  ];

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-20 bg-accent/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-6 mx-auto max-w-7xl"
      >
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
          Contact
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="mb-4 text-2xl font-bold normal-case">
              {contactData[0].textHead}
            </h3>
            <p className="normal-case text-muted-foreground">
              {contactData[0].textContent}
            </p>

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
            <div className="flex items-center gap-4 text-muted-foreground">
              <Mail className="w-6 h-6" />
              <span>riantsoa96@gmail.com</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="space-y-2"
            >
              <label htmlFor="name" className="text-sm font-medium normal-case">
                {contactData[0].nameForm}
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg bg-accent/50 border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                required
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="space-y-2"
            >
              <label
                htmlFor="email"
                className="text-sm font-medium normal-case"
              >
                {contactData[0].emailForm}
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg bg-accent/50 border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                required
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              whileFocus="focus"
              className="space-y-2"
            >
              <label
                htmlFor="message"
                className="text-sm font-medium normal-case"
              >
                {contactData[0].messageForm}
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-accent/50 border border-accent focus:outline-none focus:ring-2 focus:ring-pink-500/50 min-h-[150px]"
                required
              />
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
              {isLoading ? t("sending") : contactData[0].btn}
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
