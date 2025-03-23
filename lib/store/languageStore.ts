import { create } from "zustand";
import { useLocale } from "next-intl";
import { useEffect } from "react";

interface LanguageState {
  locale: string;
  displayValue: string;
  setGlobalLocale: (locale: string) => void;
  toggleDisplayValue: () => void;
  switchLocale: () => Promise<void>;
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  locale: "en",
  displayValue: "English",
  setGlobalLocale: (newLocale: string) => set({ locale: newLocale }),
  toggleDisplayValue: () =>
    set((state) => ({
      displayValue: state.displayValue === "English" ? "Français" : "English",
      locale: state.locale === "en" ? "fr" : "en",
    })),
  switchLocale: async () => {
    const newLocale = get().locale === "en" ? "fr" : "en";
    set({
      locale: newLocale,
      displayValue: newLocale === "en" ? "English" : "Français",
    });
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  },
}));

// Hook personnalisé pour initialiser et utiliser le store
export const useLanguageToggle = () => {
  const currentLocale = useLocale();
  const {
    locale: storeLocale,
    displayValue,
    setGlobalLocale,
    toggleDisplayValue,
  } = useLanguageStore();

  useEffect(() => {
    const savedLocale =
      typeof window !== "undefined" ? localStorage.getItem("locale") : null;

    if (savedLocale) {
      setGlobalLocale(savedLocale);
    } else if (storeLocale !== currentLocale) {
      setGlobalLocale(currentLocale);
    }
  }, [currentLocale, storeLocale, setGlobalLocale]);

  const toggleLanguage = async () => {
    const newLocale = storeLocale === "fr" ? "en" : "fr";
    toggleDisplayValue();
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;

    try {
      await import(`@/public/locales/${newLocale}.json`);
    } catch (error) {
      console.error("Erreur lors du chargement des messages:", error);
    }
  };

  return {
    locale: storeLocale,
    displayValue,
    switchLocale: toggleLanguage,
  };
};
