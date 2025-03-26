export interface Experience {
  company: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  frontend: string;
  backend: string;
  server: string;
  years: string;
  side: "left" | "right";
}

export const experiencesData = (t: (key: string) => string): Experience[] => [
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
