"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useLogos } from "@/hooks/useLogos";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Technology {
  name: string;
  logoUrl: string;
}

interface Section {
  title: string;
  technologies: Technology[];
}

interface Category {
  title: string;
  sections?: Section[];
  technologies?: Technology[];
}

export function Skills() {
  const t = useTranslations("Skills");
  const { skillCategories, getImageClass } = useLogos();
  const { controls } = useScrollAnimation();

  return (
    <section id="skills" className="relative py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="px-6 mx-auto max-w-7xl"
      >
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
          {t("title")}
        </h2>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category: Category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-background/50 border"
              >
                <h3 className="text-xl font-bold mb-6 text-center">
                  {t(`technologies.${category.title}.title`)}
                </h3>
                {category.sections ? (
                  <div className="space-y-6">
                    {category.sections.map((section: Section) => (
                      <div key={section.title}>
                        <h4 className="text-lg font-semibold mb-3 text-center">
                          {t(
                            `technologies.${category.title}.sections.${section.title}.title`
                          )}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                          {section.technologies.map(
                            (tech: Technology, index: number) => (
                              <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="flex items-center justify-center w-16 h-16 p-2 rounded-lg backdrop-blur-sm hover:bg-accent/20 transition-all">
                                      <Image
                                        fill
                                        src={tech.logoUrl}
                                        alt={tech.name}
                                        className={`w-8 h-8 object-contain ${getImageClass(
                                          tech.name
                                        )}`}
                                      />
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{tech.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : category.technologies ? (
                  <div className="flex flex-wrap justify-center gap-4">
                    {category.technologies.map(
                      (tech: Technology, index: number) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="flex items-center justify-center w-16 h-16 p-2 rounded-lg backdrop-blur-sm hover:bg-accent/20 transition-all">
                                <Image
                                  fill
                                  src={tech.logoUrl}
                                  alt={tech.name}
                                  className={`w-8 h-8 object-contain ${getImageClass(
                                    tech.name
                                  )}`}
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      )
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </TooltipProvider>
      </motion.div>
    </section>
  );
}
