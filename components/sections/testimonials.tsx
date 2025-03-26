"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { testimonialsData } from "@/data/testimonialsData";

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonialsDataUse = useTranslatedData(
    "Testimonials",
    testimonialsData
  );

  const { currentIndex, handlePrev, handleNext, setAutoplay, goToSlide } =
    useCarousel({
      itemsLength: testimonialsDataUse.length,
      autoplayInterval: 3000,
    });

  const { controls } = useScrollAnimation();

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

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            data-testid="testimonial-carousel"
          >
            <Quote className="absolute text-primary/20 w-20 h-20 -top-4 -left-4" />

            <p
              className="text-lg mb-6 relative z-10"
              data-testid="testimonial-text"
            >
              {testimonialsDataUse[currentIndex].text}
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
                data-testid="testimonial-avatar"
              >
                <Image
                  src={testimonialsDataUse[currentIndex].image}
                  alt={testimonialsDataUse[currentIndex].name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              </motion.div>

              <motion.div>
                <h3
                  className="font-semibold text-lg"
                  data-testid="testimonial-name"
                >
                  {testimonialsDataUse[currentIndex].name}
                </h3>
                <p className="text-muted-foreground">
                  {testimonialsDataUse[currentIndex].role}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsDataUse.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  goToSlide(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-violet-500"
                    : "bg-violet-500/20"
                }`}
                aria-label={`Témoignage ${index + 1}`}
                data-testid="pagination-dot"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
