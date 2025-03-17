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

export function Education() {
  const [selectedEdu, setSelectedEdu] = useState<number | null>(null);

  const t = useTranslations("Education");

  const educationData = [
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

  return (
    <section className="py-20 relative bg-accent/20">
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
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
              onClick={() => setSelectedEdu(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
              <motion.div
                className="relative bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 overflow-hidden cursor-pointer"
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
                <div className="mb-4">
                  <GraduationCap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.years}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* <Drawer.Root open={selectedEdu !== null} onOpenChange={() => setSelectedEdu(null)}>
          <Drawer.Content className="bg-background p-6">
            {selectedEdu !== null && (
              <div className="max-w-2xl mx-auto">
                <Drawer.Header>
                  <Drawer.Title className="text-2xl font-bold">
                    {education[selectedEdu].degree}
                  </Drawer.Title>
                  <Drawer.Description className="text-muted-foreground">
                    {education[selectedEdu].institution} - {education[selectedEdu].year}
                  </Drawer.Description>
                </Drawer.Header>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    {education[selectedEdu].description}
                  </p>
                </div>
              </div>
            )}
          </Drawer.Content>
        </Drawer.Root> */}
        <Drawer
          open={selectedEdu !== null}
          onOpenChange={() => setSelectedEdu(null)}
        >
          {/* <DrawerTrigger></DrawerTrigger> */}
          {selectedEdu !== null && (
            <DrawerContent className="bg-background p-6">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold">
                  {" "}
                  {educationData[selectedEdu].degree}
                </DrawerTitle>
                <DrawerDescription className="text-muted-foreground">
                  {educationData[selectedEdu].school} -{" "}
                  {educationData[selectedEdu].years}{" "}
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    {educationData[selectedEdu].description}
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
