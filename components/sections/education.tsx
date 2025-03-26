"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
// import { Drawer } from "@/components/ui/drawer";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  // DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { educationData } from "@/data/educationData";

export function Education() {
  const [selectedEdu, setSelectedEdu] = useState<number | null>(null);

  const t = useTranslations("Education");
  const education = useTranslatedData("Education", educationData);

  return (
    <section id="education" className="py-20 relative bg-accent/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t("title")}
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group h-full"
              onClick={() => setSelectedEdu(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              <motion.div
                className="relative bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 overflow-hidden cursor-pointer h-full flex flex-col"
                data-testid="education-card"
                whileHover={{
                  scale: 1.02,
                  boxShadow: [
                    "0 0 0 0 rgba(168, 85, 247, 0.4)",
                    "0 0 0 10px rgba(168, 85, 247, 0)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 0.7,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                {/* Header avec l'icône */}
                <div className="header mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </div>

                {/* Contenu principal */}
                <h3 className="text-xl font-bold mb-2 flex-1">{edu.degree}</h3>

                {/* Footer avec les informations secondaires */}
                <div className="footer mt-auto">
                  <p className="text-muted-foreground mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.years}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <Drawer
          open={selectedEdu !== null}
          onOpenChange={() => setSelectedEdu(null)}
        >
          {selectedEdu !== null && (
            <DrawerContent className="bg-background p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold">
                  {education[selectedEdu].degree}
                </DrawerTitle>
                <DrawerDescription className="text-muted-foreground">
                  {education[selectedEdu].school} -{" "}
                  {education[selectedEdu].years}
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    {education[selectedEdu].description}
                  </p>
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Fermer</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          )}
        </Drawer>
      </motion.div>
    </section>
  );
}
