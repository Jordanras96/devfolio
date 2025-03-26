"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { experiencesData } from "@/data/experienceData";

export function Experience() {
  const t = useTranslations("Experience");
  const experiences = useTranslatedData("Experience", experiencesData);

  return (
    <section id="experiences" className="py-20 relative overflow-hidden">
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

              <DialogContent
                data-testid="experience-dialog"
                className="sm:max-w-[425px]"
              >
                <DialogHeader>
                  <DialogTitle>{exp.company}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  {exp.role} - {exp.years}
                </DialogDescription>
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
