"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EmblaCarousel from "../carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";

export function Projects() {
  const t = useTranslations("Projects");

  const projectsData = useMemo(
    () => [
      {
        title: t("projects.vaknakonekta.title"),
        tag: t("projects.vaknakonekta.tag"),
        description: t("projects.vaknakonekta.description"),
        frontend: t("projects.vaknakonekta.technologies.FrontEnd"),
        backend: t("projects.vaknakonekta.technologies.BackEnd"),
        server: t("projects.vaknakonekta.technologies.Server"),
        database: t("projects.vaknakonekta.technologies.Database"),
        image: "/images/gallery/vaknakonekta-1.webp",
        confidential: false,
      },
      {
        title: t("projects.restaurant.title"),
        tag: t("projects.restaurant.tag"),
        description: t("projects.restaurant.description"),
        frontend: t("projects.restaurant.technologies.FrontEnd"),
        backend: t("projects.restaurant.technologies.BackEnd"),
        server: t("projects.restaurant.technologies.Server"),
        database: t("projects.restaurant.technologies.Database"),
        image: "/images/gallery/restaurant-1.webp",
        confidential: false,
      },
      {
        title: t("projects.microSaaS.title"),
        tag: t("projects.microSaaS.tag"),
        description: t("projects.microSaaS.description"),
        frontend: t("projects.microSaaS.technologies.FrontEnd"),
        backend: t("projects.microSaaS.technologies.BackEnd"),
        server: t("projects.microSaaS.technologies.Server"),
        database: t("projects.microSaaS.technologies.Database"),
        image: "/images/gallery/microsaas-1.png",
        confidential: true,
      },
      {
        title: t("projects.dental.title"),
        tag: t("projects.dental.tag"),
        description: t("projects.dental.description"),
        frontend: t("projects.dental.technologies.FrontEnd"),
        backend: t("projects.dental.technologies.BackEnd"),
        server: t("projects.dental.technologies.Server"),
        database: t("projects.dental.technologies.Database"),
        image: "/images/gallery/dentalclinic-1.webp",
        confidential: false,
      },
      {
        title: t("projects.plate.title"),
        tag: t("projects.plate.tag"),
        description: t("projects.plate.description"),
        frontend: t("projects.plate.technologies.FrontEnd"),
        backend: t("projects.plate.technologies.BackEnd"),
        server: t("projects.plate.technologies.Server"),
        database: t("projects.plate.technologies.Database"),
        image: "/images/gallery/dishware-1.png",
        confidential: true,
      },
    ],
    [t]
  );

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
        <div data-testid="embla-carousel">
          <EmblaCarousel slides={projectsData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
}
