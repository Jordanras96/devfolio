export interface Education {
  school: string;
  degree: string;
  description: string;
  years: string;
}

export const educationData = (t: (key: string) => string): Education[] => [
  {
    school: t("certificates.mechatronics.school"),
    degree: t("certificates.mechatronics.degree"),
    description: t("certificates.mechatronics.description"),
    years: "2021 - 2023",
  },
  {
    school: t("certificates.automation.school"),
    degree: t("certificates.automation.degree"),
    description: t("certificates.automation.description"),
    years: "2015 - 2020",
  },
  {
    school: t("certificates.react.school"),
    degree: t("certificates.react.degree"),
    description: t("certificates.react.description"),
    years: "2022 - 2023",
  },
  {
    school: t("certificates.fullstack.school"),
    degree: t("certificates.fullstack.degree"),
    description: t("certificates.fullstack.description"),
    years: "2022 - 2023",
  },
];
