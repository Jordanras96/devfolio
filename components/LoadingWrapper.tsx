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
  // const [isLoading, setIsLoading] = useState(false); // Désactiver le loader initial
  const { scrollY } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);
  const [mountedComponents, setMountedComponents] = useState({
    hero: true,
    experience: false,
    education: false,
    skills: false,
    projects: false,
    testimonials: false,
    contact: false,
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowNavbar(latest > window.innerHeight * 0.8);

      // Charger progressivement les composants au défilement
      if (latest > window.innerHeight * 0.3 && !mountedComponents.experience) {
        setMountedComponents((prev) => ({ ...prev, experience: true }));
      }
      if (latest > window.innerHeight * 0.6 && !mountedComponents.education) {
        setMountedComponents((prev) => ({ ...prev, education: true }));
      }
      if (latest > window.innerHeight * 0.9 && !mountedComponents.skills) {
        setMountedComponents((prev) => ({ ...prev, skills: true }));
      }
      if (latest > window.innerHeight * 1.2 && !mountedComponents.projects) {
        setMountedComponents((prev) => ({ ...prev, projects: true }));
      }
      if (
        latest > window.innerHeight * 1.5 &&
        !mountedComponents.testimonials
      ) {
        setMountedComponents((prev) => ({ ...prev, testimonials: true }));
      }
      if (latest > window.innerHeight * 1.8 && !mountedComponents.contact) {
        setMountedComponents((prev) => ({ ...prev, contact: true }));
      }
    });
  }, [scrollY, mountedComponents]);

  return (
    <LocaleProvider initialMessages={initialMessages}>
      <Navbar show={showNavbar} />
      <Hero />
      {mountedComponents.experience && <Experience />}
      {mountedComponents.education && <Education />}
      {mountedComponents.skills && <Skills />}
      {mountedComponents.projects && <Projects />}
      {mountedComponents.testimonials && <Testimonials />}
      {mountedComponents.contact && <Contact />}
    </LocaleProvider>
  );
}
