"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-accent/20">
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
          <ContactInfo />
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
}
