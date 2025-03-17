"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";

// const testimonials = [
//   {
//     name: "Dr Sahalanirina Harison Rasamimanana",
//     role: "Médecin chef (Spécialiste en chirurgie)",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
//     text: "Un développeur exceptionnel avec une grande capacité d'adaptation et d'innovation. Son expertise technique et sa créativité ont été des atouts majeurs pour notre équipe.",
//   },
//   {
//     name: "Tojo Eugene",
//     role: "CTO de Webzay",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
//     text: "Un développeur exceptionnel avec une grande capacité d'adaptation et d'innovation. Son expertise technique et sa créativité ont été des atouts majeurs pour notre équipe.",
//   },
//   {
//     name: "Juanito Fock",
//     role: "Délégué médical",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
//     text: "En tant que délégué médical, la gestion des rendez-vous devenait un vrai casse-tête. [Votre Nom] a créé un système de gestion de rendez-vous sur mesure qui a grandement simplifié mon travail. Le système est facile à utiliser, fiable et parfaitement adapté à mes besoins. Je suis vraiment reconnaissant pour leur professionnalisme et la qualité de leur travail.",
//   },
//   {
//     name: "Mamy Dimbison",
//     role: "Auto entrepreneur",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
//     text: "J'avais besoin d'un tableau de bord pour gérer mes commandes de poules pondeuses, et [Votre Nom] a dépassé toutes mes attentes. Le tableau de bord est intuitif, efficace et m'a fait gagner un temps précieux. [Votre Nom] a parfaitement compris les besoins de mon entreprise et a fourni une solution qui a considérablement augmenté ma productivité. Je suis ravi des résultats !",
//   },
// ];

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
      {/* <section className="relative py-20 overflow-hidden"> */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative px-6 mx-auto max-w-7xl"
      >
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text">
          {t("title")}
        </h2>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors ml-4"
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
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors mr-4"
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

          <motion.div
            key={currentIndex}
            animate={controls}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 mb-6 overflow-hidden rounded-full ring-4 ring-violet-500/20">
              <motion.img
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].name}
                className="object-cover w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <Quote className="w-12 h-12 mb-6 text-violet-500/50" />

            <motion.blockquote
              className="max-w-2xl mb-6 text-xl text-center min-h-[200px] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {testimonialsData[currentIndex].text}
            </motion.blockquote>

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
