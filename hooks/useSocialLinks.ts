import { Github, Twitter, Linkedin } from "lucide-react";

export interface SocialLink {
  icon: typeof Github | typeof Twitter | typeof Linkedin;
  href: string;
  color: string;
}

export const useSocialLinks = (): SocialLink[] => {
  return [
    {
      icon: Github,
      href: "https://github.com/Jordanras96",
      color: "hover:text-gray-100",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/JordanRiantsoa",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jordanrasoloarison",
      color: "hover:text-blue-600",
    },
  ];
};
