// src/__tests__/test-utils.tsx
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { mockTranslations } from "./test-utils/mockTranslations";

// Type pour les namespaces de traduction
type TranslationNamespace = keyof typeof mockTranslations;

// Helper pour accéder aux traductions mockées
export const t = (namespace: TranslationNamespace, key: string): string => {
  const keys = key.split(".");
  let value: any = mockTranslations[namespace];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) return key;
  }

  return value || key;
};

// Mock réutilisable de useTranslations
export const mockUseTranslations =
  (namespace: TranslationNamespace) => (key: string) =>
    t(namespace, key);

// Configuration de renderWithTranslations
export function renderWithTranslations(
  ui: React.ReactElement,
  locale: string = "en"
): RenderResult {
  return render(
    <NextIntlClientProvider
      locale={locale}
      messages={mockTranslations}
      now={new Date()}
      timeZone="UTC"
    >
      {ui}
    </NextIntlClientProvider>
  );
}

// Mock complet pour next-intl
jest.mock("next-intl", () => {
  const actual = jest.requireActual("next-intl");
  return {
    ...actual,
    useTranslations: jest.fn((namespace: string) =>
      mockUseTranslations(namespace as TranslationNamespace)
    ),
  };
});

// Mock amélioré pour framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      // Filtrer les props spécifiques à framer-motion
      const { whileInView, whileHover, ...filteredProps } = props;
      return <div {...filteredProps}>{children}</div>;
    },
    // Ajouter d'autres éléments au besoin
    section: ({ children, ...props }: any) => {
      const { whileInView, whileHover, ...filteredProps } = props;
      return <section {...filteredProps}>{children}</section>;
    },
  },
  AnimatePresence: ({ children }: any) => children,
}));
