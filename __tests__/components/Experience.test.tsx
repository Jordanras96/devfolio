import React from "react";
import { screen, within } from "@testing-library/react";
import { Experience } from "@/components/sections/experience";
import { renderWithTranslations } from "../test-utils";
import userEvent from "@testing-library/user-event";

describe("Experience Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with correct title", () => {
    renderWithTranslations(<Experience />);
    expect(screen.getByText("War Stories")).toBeInTheDocument();
  });

  it("renders all experience items", () => {
    renderWithTranslations(<Experience />);

    // Vérifie qu'il y a bien 5 éléments d'expérience
    const companies = screen.getAllByText(/Company Name/);
    expect(companies.length).toBe(1);

    const roles = screen.getAllByText("Developer Role");
    expect(roles.length).toBe(3);
  });

  it("shows details when experience item is clicked", async () => {
    const user = userEvent.setup();
    renderWithTranslations(<Experience />);

    const firstExperience = screen.getAllByText("Oltek Studio")[0];
    await user.click(firstExperience);

    const dialog = await screen.findByTestId("experience-dialog");

    // Check that the description is present (no need to match an exact id)
    expect(
      within(dialog).getByText("Full-Stack Developer - Dec 2023 - Jan 2025")
    ).toBeInTheDocument();
    expect(
      within(dialog).getByText("longDescription for Oltek")
    ).toBeInTheDocument();
    expect(within(dialog).getByText("Next.js, React")).toBeInTheDocument();
    expect(within(dialog).getByText("Node.js, Express")).toBeInTheDocument();
    expect(within(dialog).getByText("Docker")).toBeInTheDocument();
  });
});
