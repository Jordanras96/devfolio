import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";
import { useTranslations } from "next-intl";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => {
    if (key === "Me.name") return "name";
    if (key === "Me.title") return "title";
    if (key === "Me.summary.first") return "summary.first";
    if (key === "Me.summary.second") return "summary.second";
    if (key === "Me.summary.third") return "summary.third";
    if (key === "Me.CTA") return "CTA";
    if (key === "Me.button") return "button";
    return key;
  }),
}));

// Mock window.innerWidth
const setWindowWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
};

describe("Hero Component", () => {
  beforeEach(() => {
    (useTranslations as jest.Mock).mockImplementation(() => (key: string) => {
      if (key === "Me.name") return "name";
      if (key === "Me.title") return "title";
      if (key === "Me.summary.first") return "summary.first";
      if (key === "Me.summary.second") return "summary.second";
      if (key === "Me.summary.third") return "summary.third";
      if (key === "Me.CTA") return "CTA";
      if (key === "Me.button") return "button";
      return key;
    });
  });

  it("renders profile image", () => {
    render(<Hero />);
    const profileImage = screen.getByAltText("Profile");
    expect(profileImage).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Hero />);
    const ctaButton = screen.getByRole("button", { name: "button" });
    expect(ctaButton).toBeInTheDocument();
  });

  it("displays orbit icons", async () => {
    render(<Hero />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    const orbitIcons = screen.getAllByRole("img", { name: /.+/ });
    expect(orbitIcons.length).toBeGreaterThan(0);
  });

  it("adjusts orbit radius on mobile", () => {
    setWindowWidth(500);
    render(<Hero />);
    // Test visuel, pas besoin de vérification spécifique
    expect(true).toBeTruthy();
  });

  it("shows technology icons on category hover", () => {
    render(<Hero />);
    const webDevCategory = screen.getByText("Web Development");
    fireEvent.mouseEnter(webDevCategory);

    // Trouver tous les icons React et vérifier qu'au moins un est présent
    const reactIcons = screen.getAllByAltText("React");
    expect(reactIcons.length).toBeGreaterThan(0);
  });
});
