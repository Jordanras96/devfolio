"use client";

import { useTranslations } from "next-intl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";

// Logos des technologies (URL en couleurs)
const logos = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  zustand:
    "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://img.icons8.com/color/480/express-js.png",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  aws: "https://img.icons8.com/color/480/amazon-web-services.png",
  cicd: "https://img.icons8.com/color/480/git.png",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  nestjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
};

const categories = [
  {
    title: "frontend",
    technologies: [
      { name: "React", logoUrl: logos.react },
      { name: "Next.js", logoUrl: logos.nextjs },
      { name: "TypeScript", logoUrl: logos.typescript },
      { name: "Redux", logoUrl: logos.redux },
      { name: "Zustand", logoUrl: logos.zustand },
      { name: "Tailwind CSS", logoUrl: logos.tailwind },
    ],
  },
  {
    title: "backend",
    technologies: [
      { name: "Node.js", logoUrl: logos.nodejs },
      { name: "Express", logoUrl: logos.express },

      { name: "Python", logoUrl: logos.python },
      { name: "GraphQL", logoUrl: logos.graphql },
    ],
  },
  {
    title: "database",
    technologies: [
      { name: "PostgreSQL", logoUrl: logos.postgresql },
      { name: "MongoDB", logoUrl: logos.mongodb },
      { name: "SQL", logoUrl: logos.sql },
      { name: "Redis", logoUrl: logos.redis },
      { name: "Prisma", logoUrl: logos.prisma },
    ],
  },
  {
    title: "devops",
    technologies: [
      { name: "Docker", logoUrl: logos.docker },
      { name: "AWS", logoUrl: logos.aws },
      { name: "CI/CD", logoUrl: logos.cicd },
      { name: "Linux", logoUrl: logos.linux },
      { name: "Nginx", logoUrl: logos.nginx },
    ],
  },
];

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section className="relative py-20">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
          {t("title")}
        </h2>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-background/50 border"
              >
                <h3 className="text-xl font-bold mb-6 text-center">
                  {t(`technologies.${category.title}.title`)}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.technologies.map((tech, index) => (
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
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
