// components/LoadingWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Loader } from "@/components/3d/Loader";
import { LocaleProvider } from "./LocaleProvider";
import { AbstractIntlMessages } from "next-intl";

// Utiliser un type générique plus précis pour les messages
interface InitialMessages {
  [key: string]: string | AbstractIntlMessages; // Spécifier les types possibles
}

export function LoadingWrapper({
  initialMessages,
}: {
  initialMessages: InitialMessages; // Remplacer 'any' par l'interface
}) {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowNavbar(latest > window.innerHeight * 0.8);
    });
  }, [scrollY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Délai de 5 secondes

    return () => clearTimeout(timer); // Nettoyage
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <LocaleProvider initialMessages={initialMessages}>
      <Navbar show={showNavbar} />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </LocaleProvider>
  );
}
