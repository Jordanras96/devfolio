import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Testimonials } from "@/components/sections/testimonials";
import { useTranslations } from "next-intl";

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => {
    if (key === "Testimonials.title") return "Témoignages";
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

describe("Testimonials Component", () => {
  beforeEach(() => {
    (useTranslations as jest.Mock).mockImplementation(() => (key: string) => {
      if (key === "Testimonials.title") return "Témoignages";
      return key;
    });
  });

  it("renders testimonials section", () => {
    render(<Testimonials />);
    const titleElement = screen.getByRole("heading", { level: 2 });
    expect(titleElement).toBeInTheDocument();
  });

  it("displays testimonial content", () => {
    render(<Testimonials />);
    expect(screen.getByTestId("testimonial-text")).toBeInTheDocument();
  });

  it("navigates between testimonials", () => {
    render(<Testimonials />);
    const nextButton = screen.getByLabelText("Témoignage suivant");
    const prevButton = screen.getByLabelText("Témoignage précédent");

    const initialName = screen.getByTestId("testimonial-name").textContent;

    fireEvent.click(nextButton);
    expect(screen.getByTestId("testimonial-name").textContent).not.toBe(
      initialName
    );

    fireEvent.click(prevButton);
    expect(screen.getByTestId("testimonial-name").textContent).toBe(
      initialName
    );
  });

  it("is responsive", () => {
    setWindowWidth(500);
    render(<Testimonials />);
    const titleElement = screen.getByRole("heading", { level: 2 });
    expect(titleElement).toBeInTheDocument();
  });
});
