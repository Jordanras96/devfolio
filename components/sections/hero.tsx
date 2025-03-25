"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Layout, Server, Smartphone, Cloud, Database } from "lucide-react";
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
      {
        name: "Axios",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-original.svg",
      },
      {
        name: "React Query",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Router",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "webpack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      },
      {
        name: "Babel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
      },
      {
        name: "PWA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pwa/pwa-original.svg",
      },
      {
        name: "jasmine",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original.svg",
      },
      {
        name: "Jest",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-original.svg",
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
  {
    title: "Database",
    icon: Database,
    technologies: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
];

// Fonction pour créer les positions des icônes en cercle
const generateOrbitPositions = (
  count: number,
  radius: number,
  startAngle: number = 0
) => {
  return Array.from({ length: count }).map((_, i) => {
    const angle = startAngle + (i * 2 * Math.PI) / count;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      angle,
    };
  });
};

// Définir l'interface pour les icônes en orbite
interface OrbitIcon {
  name: string;
  icon: string;
  category: string;
}

export function Hero() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [orbitIcons, setOrbitIcons] = useState<OrbitIcon[]>([]);
  const [orbitRadius, setOrbitRadius] = useState(130);
  const [rotationAngle, setRotationAngle] = useState(0);
  const t = useTranslations("Me");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Effet combiné pour l'animation de rotation et l'ajustement du rayon
  useEffect(() => {
    // Ajustement du rayon de l'orbite en fonction de la taille de l'écran
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setOrbitRadius(100);
      } else if (width < 768) {
        setOrbitRadius(120);
      } else {
        setOrbitRadius(130);
      }
    };

    handleResize(); // Initialiser
    window.addEventListener("resize", handleResize);

    // Sélection optimisée des technologies pour l'orbite
    const selectedTechs = new Set<string>(); // Pour éviter les doublons
    const techIcons: OrbitIcon[] = [];

    // Fonction pour ajouter une technologie unique à notre sélection
    const addTech = (
      tech: { name: string; icon: string },
      category: string
    ) => {
      if (!selectedTechs.has(tech.name)) {
        selectedTechs.add(tech.name);
        techIcons.push({
          name: tech.name,
          icon: tech.icon,
          category,
        });
      }
    };

    // Sélectionner des technologies représentatives de chaque catégorie
    skillCategories.forEach((category) => {
      // Prendre une technologie aléatoire de chaque catégorie pour plus de variété
      const randomIndex = Math.floor(
        Math.random() * category.technologies.length
      );
      addTech(category.technologies[randomIndex], category.title);

      // Optionnellement ajouter une seconde technologie si la catégorie en a plusieurs
      if (category.technologies.length > 1 && techIcons.length < 8) {
        const secondIndex = (randomIndex + 1) % category.technologies.length;
        addTech(category.technologies[secondIndex], category.title);
      }
    });

    setOrbitIcons(techIcons);

    // Animation de rotation avec requestAnimationFrame pour de meilleures performances
    let animationId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      if (lastTime === 0) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      setRotationAngle((prev) => (prev + delta * 0.00005) % (2 * Math.PI));
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Nettoyage propre
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      lastTime = 0;
    };
  }, []);

  // Calculer les positions des icônes en orbite
  const iconPositions = generateOrbitPositions(
    orbitIcons.length,
    orbitRadius,
    rotationAngle
  );

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] md:min-h-screen overflow-hidden bg-background"
    >
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
                href="#contact"
                className="mt-2 md:mt-0 md:ml-2 animate-pulse"
                passHref
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
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

              {/* Icônes en orbite */}
              {orbitIcons.map((tech, index) => {
                const position = iconPositions[index];
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center shadow-md"
                    style={{
                      left: `calc(50% + ${position.x}px - 20px)`,
                      top: `calc(50% + ${position.y}px - 20px)`,
                    }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </motion.div>
                );
              })}
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
          {skillCategories
            .filter(
              (category) =>
                category.title !== "Database" && category.title !== "Backend"
            )
            .map((category) => (
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
