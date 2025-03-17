// components/LocaleProvider.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import gsap from "gsap";
import { NextIntlClientProvider } from "next-intl";

interface LocaleContextType {
  locale: string;
  switchLocale: (newLocale: string) => Promise<void>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleMessages {
  [key: string]: string | LocaleMessages;
}

interface LocaleProviderProps {
  children: React.ReactNode;
  initialMessages: LocaleMessages;
}

export function LocaleProvider({
  children,
  initialMessages,
}: LocaleProviderProps) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
    import(`@/public/locales/${savedLocale}.json`)
      .then((m) => setMessages(m.default))
      .catch(console.error);
  }, []);

  const switchLocale = async (newLocale: string) => {
    try {
      const newMessages = (await import(`@/public/locales/${newLocale}.json`))
        .default;
      setLocale(newLocale);
      setMessages(newMessages);
      localStorage.setItem("locale", newLocale);
      document.documentElement.lang = newLocale;

      gsap.to(".lang-btn", {
        scale: 0.9,
        rotation: 10,
        duration: 0.1,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(".lang-btn", {
            scale: 1,
            rotation: 0,
            duration: 0.2,
            ease: "power2.out",
          });
        },
      });
    } catch (error) {
      console.error("Erreur lors du changement de langue:", error);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          className={cn(
            "lang-btn transition-all duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
          onClick={() => switchLocale(locale === "en" ? "fr" : "en")}
        >
          <Globe className="w-4 h-4 mr-2" />
          {locale === "en" ? "EN" : "FR"}
        </Button>
      </div>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleSwitcher() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error(
      "useLocaleSwitcher doit être utilisé dans un LocaleProvider"
    );
  }
  return context;
}
