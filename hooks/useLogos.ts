import { useTranslatedData } from "./useTranslatedData";
import { getSkillCategories } from "@/data/skillsData";

export const useLogos = () => {
  const skillCategories = useTranslatedData("Skills", getSkillCategories);

  const invertLogos = ["Symfony", "Express.js", "Socket.io"];

  const getImageClass = (techName: string): string => {
    return invertLogos.includes(techName) ? "invert" : "";
  };

  return {
    skillCategories,
    getImageClass,
  };
};
