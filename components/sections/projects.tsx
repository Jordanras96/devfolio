"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { projectsData as projectsDataFactory } from "@/data/projectsData";
import EmblaCarousel from "../carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations("Projects");
  const projectsDataUse = useTranslatedData("Projects", projectsDataFactory);

  const { handlePrev, handleNext } = useCarousel({
    itemsLength: projectsDataUse.length,
    autoplayInterval: 5000,
  });

  const OPTIONS: EmblaOptionsType = {
    loop: true,
    skipSnaps: true,
    align: "start",
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-accent/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          {t("title")}
        </h2>
        <div data-testid="embla-carousel" className="relative">
          <EmblaCarousel
            slides={projectsDataUse}
            options={OPTIONS}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
