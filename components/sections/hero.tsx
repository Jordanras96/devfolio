"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Layout, Server, Smartphone, Cloud } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const skillCategories = [
  {
    title: "Web Development",
    icon: Layout,
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    technologies: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
      },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    technologies: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

export function Hero() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const t = useTranslations("Me");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto px-6 py-20 md:py-32"
      >
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text">
                {t("name")}
              </span>
            </h1>
            {/* <p className="mb-8 text-xl text-muted-foreground">
              Développeur Fullstack & Mobile spécialisé dans la création
              d'applications web et mobiles modernes et performantes.
            </p> */}
            <p className="text-base md:text-lg text-muted-foreground dark:text-muted">
              {t("title")}
            </p>

            <p className="mt-2 text-pretty">
              <span>
                {t("summary.first")}
                <br />
              </span>
              <span>
                {t("summary.second")}
                <br />
              </span>
              <span>
                {t("summary.third")}
                <br />
              </span>
            </p>

            <div className="flex flex-wrap items-center mt-4">
              <p className="mr-2">{t("CTA")}</p>
              <Link
                href="#"
                className="mt-2 md:mt-0 md:ml-2 animate-pulse"
                passHref
              >
                <Button variant="default" className="h-8 md:h-9 px-3 md:px-4">
                  {t("button")}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-[300px] h-[300px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 overflow-hidden border-4 rounded-full border-blue-500/20 relative">
                <Image
                  src="/images/me/self.webp"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-full shadow-neomorph"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: isMobile ? 0.5 : 0.8,
            delay: isMobile ? 0.2 : 0.4,
          }}
          className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12 md:grid-cols-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="relative p-6 overflow-hidden rounded-lg bg-accent/50 backdrop-blur-sm group"
              onHoverStart={() => setHoveredCategory(category.title)}
              onHoverEnd={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: hoveredCategory === category.title ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className="w-8 h-8 mb-4" />
                <h3 className="font-semibold">{category.title}</h3>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredCategory === category.title ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                {category.technologies.map((tech) => (
                  <Image
                    key={tech.name}
                    src={tech.icon}
                    alt={tech.name}
                    width={8}
                    height={8}
                    className="w-8 h-8"
                    loading="lazy"
                    sizes="(max-width: 768px) 32px, 32px"
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
