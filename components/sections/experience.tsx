"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export function Experience() {
  const t = useTranslations("Experience");
  const experiences = [
    {
      company: t("experiences.oltek.company"),
      role: t("experiences.oltek.role"),

      shortDescription: t("experiences.oltek.shortDescription"),
      longDescription: t("experiences.oltek.longDescription"),
      frontend: t("experiences.oltek.technologies.FrontEnd"),
      backend: t("experiences.oltek.technologies.BackEnd"),
      server: t("experiences.oltek.technologies.Server"),
      years: "Dec 2023 - Jan 2025",
      side: "right",
    },
    {
      company: t("experiences.hospital.company"),
      role: t("experiences.hospital.role"),
      shortDescription: t("experiences.hospital.shortDescription"),
      longDescription: t("experiences.hospital.longDescription"),
      frontend: t("experiences.hospital.technologies.FrontEnd"),
      backend: t("experiences.hospital.technologies.BackEnd"),
      server: t("experiences.hospital.technologies.Server"),
      years: "Nov 2022 - Sep 2023",
      side: "left",
    },
    {
      company: t("experiences.local.company"),
      role: t("experiences.local.role"),
      shortDescription: t("experiences.local.shortDescription"),
      longDescription: t("experiences.local.longDescription"),
      frontend: t("experiences.local.technologies.FrontEnd"),
      backend: t("experiences.local.technologies.BackEnd"),
      server: t("experiences.local.technologies.Server"),
      years: "Jul 2021 - Aug 2022",
      side: "right",
    },
    {
      company: t("experiences.ysquad.company"),
      role: t("experiences.ysquad.role"),
      shortDescription: t("experiences.ysquad.shortDescription"),
      longDescription: t("experiences.ysquad.longDescription"),
      frontend: t("experiences.ysquad.technologies.FrontEnd"),
      backend: t("experiences.ysquad.technologies.BackEnd"),
      server: t("experiences.ysquad.technologies.Server"),
      years: "Jan 2020 - May 2022",
      side: "left",
    },
    {
      company: t("experiences.imperial.company"),
      role: t("experiences.imperial.role"),
      shortDescription: t("experiences.imperial.shortDescription"),
      longDescription: t("experiences.imperial.longDescription"),
      frontend: t("experiences.imperial.technologies.FrontEnd"),
      backend: t("experiences.imperial.technologies.BackEnd"),
      server: t("experiences.imperial.technologies.Server"),
      years: "Apr 2019 - Oct 2019",
      side: "right",
    },
  ];
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {t("title")}
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-cyan-500 to-blue-500 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: exp.side === "right" ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 cursor-pointer ${
                    exp.side === "right" ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      exp.side === "right" ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-muted-foreground mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {exp.shortDescription}
                    </p>
                  </div>

                  <div className="relative z-10 bg-background rounded-full p-2 sm:p-3 border-2 border-cyan-500">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                  </div>

                  <div className="flex-1">
                    <div
                      className={`flex items-center gap-2 ${
                        exp.side === "right" ? "" : "justify-end"
                      }`}
                    >
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {exp.years}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{exp.company}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground">{exp.years}</p>
                  </div>
                  <p className="text-muted-foreground">{exp.longDescription}</p>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm text-primary font-semibold">
                      Frontend:
                      <p className="text-muted-foreground font-normal">
                        {exp.frontend}
                      </p>
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      Backend:
                      <p className="text-muted-foreground font-normal">
                        {exp.backend}
                      </p>
                    </div>
                    <div className="text-sm text-primary font-semibold">
                      Server:
                      <p className="text-muted-foreground font-normal">
                        {exp.server}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
