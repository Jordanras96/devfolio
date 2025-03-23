"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface NavbarProps {
  show: boolean;
}

export function Navbar({ show }: NavbarProps) {
  const t = useTranslations("Navbar");

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className={cn(
            "fixed top-0 left-0 right-0 z-50",
            "bg-background/80 backdrop-blur-lg border-b",
            "py-3 px-6"
          )}
        >
          <div className="mx-auto container flex items-center justify-between">
            <div className="w-24">
              <Avatar
                className="h-16 w-16"
                aria-label="Photo de profil de Jordan Rasoloarison"
              >
                <AvatarImage src="/images/me/self.webp" fetchPriority="high" />
                <AvatarFallback>NRJ</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {t("title")}
            </h1>

            <div className="w-24 text-right">
              <span className="text-lg font-semibold">Jordan Rasoloarison</span>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
