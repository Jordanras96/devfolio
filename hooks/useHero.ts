import { useState, useEffect } from "react";
import { heroCategories } from "@/data/heroData";

interface OrbitIcon {
  name: string;
  icon: string;
  category: string;
}

interface OrbitPosition {
  x: number;
  y: number;
  angle: number;
}

export const useHero = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [orbitIcons, setOrbitIcons] = useState<OrbitIcon[]>([]);
  const [orbitRadius, setOrbitRadius] = useState(130);
  const [rotationAngle, setRotationAngle] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Fonction pour créer les positions des icônes en cercle
  const generateOrbitPositions = (
    count: number,
    radius: number,
    startAngle: number = 0
  ): OrbitPosition[] => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = startAngle + (i * 2 * Math.PI) / count;
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        angle,
      };
    });
  };

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
    heroCategories.forEach((category) => {
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

  return {
    hoveredCategory,
    setHoveredCategory,
    orbitIcons,
    iconPositions,
    heroCategories,
    isMobile,
  };
};
