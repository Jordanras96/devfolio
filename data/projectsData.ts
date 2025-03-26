export interface Projects {
  title: string;
  tag: string;
  description: string;
  frontend: string;
  backend: string;
  database: string;
  devops: string;
  image: string;
  confidential: boolean;
}

export const projectsData = (t: any) => [
  {
    title: t("projects.vaknakonekta.title"),
    tag: t("projects.vaknakonekta.tag"),
    description: t("projects.vaknakonekta.description"),
    frontend: t("projects.vaknakonekta.technologies.Frontend"),
    backend: t("projects.vaknakonekta.technologies.Backend"),
    database: t("projects.vaknakonekta.technologies.Database"),
    devops: t("projects.vaknakonekta.technologies.DevOps"),
    image: "/images/gallery/vaknakonekta-1.webp",
    confidential: false,
  },
  {
    title: t("projects.restaurant.title"),
    tag: t("projects.restaurant.tag"),
    description: t("projects.restaurant.description"),
    frontend: t("projects.restaurant.technologies.Frontend"),
    backend: t("projects.restaurant.technologies.Backend"),
    database: t("projects.restaurant.technologies.Database"),
    devops: t("projects.restaurant.technologies.DevOps"),
    image: "/images/gallery/restaurant-1.webp",
    confidential: false,
  },
  {
    title: t("projects.microSaaS.title"),
    tag: t("projects.microSaaS.tag"),
    description: t("projects.microSaaS.description"),
    frontend: t("projects.microSaaS.technologies.Frontend"),
    backend: t("projects.microSaaS.technologies.Backend"),
    database: t("projects.microSaaS.technologies.Database"),
    devops: t("projects.microSaaS.technologies.DevOps"),
    image: "/images/gallery/microsaas-1.png",
    confidential: true,
  },
  {
    title: t("projects.dental.title"),
    tag: t("projects.dental.tag"),
    description: t("projects.dental.description"),
    frontend: t("projects.dental.technologies.Frontend"),
    backend: t("projects.dental.technologies.Backend"),
    database: t("projects.dental.technologies.Database"),
    devops: t("projects.dental.technologies.DevOps"),
    image: "/images/gallery/dentalclinic-1.webp",
    confidential: false,
  },
  {
    title: t("projects.plate.title"),
    tag: t("projects.plate.tag"),
    description: t("projects.plate.description"),
    frontend: t("projects.plate.technologies.Frontend"),
    backend: t("projects.plate.technologies.Backend"),
    database: t("projects.plate.technologies.Database"),
    devops: t("projects.plate.technologies.DevOps"),
    image: "/images/gallery/dishware-1.png",
    confidential: true,
  },
];
