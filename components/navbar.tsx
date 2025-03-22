"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavbarProps {
  show: boolean;
}

export function Navbar({ show }: NavbarProps) {
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
          <div className="mx-auto flex items-center justify-around">
            <Avatar
              className="h-16 w-16"
              aria-label="Photo de profil de Jordan Rasoloarison"
            >
              <Image
                src="/images/me/self.webp"
                sizes="(max-width: 768px) 64px, 64px"
                alt="Photo de profil"
                fill
                priority
                fetchPriority="high"
              />
            </Avatar>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Développeur Web
            </h2>

            <span className="text-lg font-semibold text-center">
              Jordan Ny Riantsoa Rasoloarison
            </span>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
