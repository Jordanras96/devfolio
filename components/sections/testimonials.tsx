"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function Testimonials() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = useTranslations("Testimonials");

  const testimonialsData = useMemo(
    () => [
      {
        name: t("person.harison.name"),
        role: t("person.harison.role"),
        image:
          "/images/testimonials/364115805_7638561546183583_139268431628256637_n.webp",
        text: t("person.harison.text"),
      },
      {
        name: t("person.tojo.name"),
        role: t("person.tojo.role"),
        image:
          "images//testimonials/466827119_1770310247133442_8891819088441267840_n.webp",
        text: t("person.tojo.text"),
      },
      {
        name: t("person.juanito.name"),
        role: t("person.juanito.role"),
        image: "/images/testimonials/1516983291878.webp",
        text: t("person.juanito.text"),
      },
      {
        name: t("person.mamy.name"),
        role: t("person.mamy.role"),
        image: "/images/testimonials/rado.jpg",
        text: t("person.mamy.text"),
      },
    ],
    [t]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialsData]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.5 },
    });
  }, [currentIndex, controls]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative min-h-100vh box-border overflow-hidden bg-background py-20">
      {/* Background grid and gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Main content container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative px-6 mx-auto max-w-7xl"
      >
        {/* Section title */}
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
          {t("title")}
        </h2>

        {/* Testimonials slider */}
        <div className="relative">
          {/* Testimonial content */}
          <motion.div
            key={currentIndex}
            animate={controls}
            className="flex flex-col items-center"
          >
            {/* Container for image and buttons (mobile layout) */}
            <div className="relative w-full flex justify-center items-center mb-6">
              {/* Previous button */}
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors z-10"
                aria-label={t("previous")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-violet-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              {/* Testimonial image */}
              <div className="w-24 h-24 overflow-hidden rounded-full ring-4 ring-violet-500/20">
                <motion.img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="object-cover w-full h-full"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Next button */}
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors z-10"
                aria-label={t("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-violet-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Quote icon */}
            <Quote className="w-12 h-12 mb-6 text-violet-500/50" />

            {/* Testimonial text */}
            <motion.blockquote
              className="max-w-2xl mb-6 text-xl text-center min-h-[200px] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {testimonialsData[currentIndex].text}
            </motion.blockquote>

            {/* Testimonial name and role */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-bold">
                {testimonialsData[currentIndex].name}
              </h3>
              <p className="text-muted-foreground">
                {testimonialsData[currentIndex].role}
              </p>
            </motion.div>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-violet-500"
                    : "bg-violet-500/20"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
