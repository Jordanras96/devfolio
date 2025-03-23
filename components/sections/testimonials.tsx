"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Testimonials() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

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
          "/images/testimonials/466827119_1770310247133442_8891819088441267840_n.webp",
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
    setIsClient(true);

    const handleAnimation = () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(handleAnimation);
    } else {
      setTimeout(handleAnimation, 200);
    }
  }, [controls]);

  // Effet pour l'animation infinie
  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Démarrer l'intervalle immédiatement
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % testimonialsData.length
        );
      }, 3000);
    }

    // Nettoyer l'intervalle lors du démontage
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonialsData.length]); // Assurez-vous que ces dépendances sont correctes

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const animationProps = isMobile
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: controls,
        transition: { duration: 0.5 },
      };

  if (!isClient) {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-6" {...animationProps}>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
          {t("title")}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Boutons de navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 z-20 md:-ml-8">
            <button
              onClick={handlePrev}
              className="bg-card/80 backdrop-blur-sm border border-accent rounded-full p-2 hover:bg-card/100 transition-all"
              aria-label="Témoignage précédent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 z-20 md:-mr-8">
            <button
              onClick={handleNext}
              className="bg-card/80 backdrop-blur-sm border border-accent rounded-full p-2 hover:bg-card/100 transition-all"
              aria-label="Témoignage suivant"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.7 },
            }}
            className="bg-card/50 backdrop-blur-sm border border-accent rounded-lg p-8 relative min-h-[300px] flex flex-col justify-between"
          >
            <Quote className="absolute text-primary/20 w-20 h-20 -top-4 -left-4" />

            <p className="text-lg mb-6 relative z-10">
              {testimonialsData[currentIndex].text}
            </p>

            <motion.div
              className="flex items-center gap-4 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                className="w-16 h-16 rounded-full overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              </motion.div>

              <motion.div>
                <h3 className="font-semibold text-lg">
                  {testimonialsData[currentIndex].name}
                </h3>
                <p className="text-muted-foreground">
                  {testimonialsData[currentIndex].role}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-violet-500"
                    : "bg-violet-500/20"
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
