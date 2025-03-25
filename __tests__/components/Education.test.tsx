import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Education } from "@/components/sections/education";
import { renderWithTranslations } from "../test-utils";

describe("Education Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with correct title", () => {
    renderWithTranslations(<Education />);
    expect(screen.getByText("Quests")).toBeInTheDocument();
  });

  it("displays education cards", () => {
    renderWithTranslations(<Education />);
    const cards = screen.getAllByTestId("education-card"); // Use data-testid instead
    expect(cards.length).toBeGreaterThan(0);
  });

  it("opens drawer when card is clicked", () => {
    renderWithTranslations(<Education />); // Use renderWithTranslations
    const firstCard = screen.getAllByTestId("education-card")[0];
    fireEvent.click(firstCard);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("displays correct details in drawer", () => {
    renderWithTranslations(<Education />); // Use renderWithTranslations
    const firstCard = screen.getAllByTestId("education-card")[0];
    fireEvent.click(firstCard);
    const degreeElements = screen.getAllByText(
      "Advanced Research Master in Mechatronics"
    );
    expect(degreeElements.length).toBeGreaterThan(0);
  });
});
