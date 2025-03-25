// __tests__/components/Skills.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Skills } from "@/components/sections/skills";
import { renderWithTranslations } from "../test-utils";

jest.mock("@/components/ui/tooltip", () => ({
  Tooltip: ({ children }: any) => children,
  TooltipContent: ({ children }: any) => <div>{children}</div>,
  TooltipProvider: ({ children }: any) => <div>{children}</div>,
  TooltipTrigger: ({ children }: any) => <div>{children}</div>,
}));

describe("Skills Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all skill categories", () => {
    renderWithTranslations(<Skills />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("DevOps")).toBeInTheDocument();
  });

  it("renders section title", () => {
    renderWithTranslations(<Skills />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Skills" })
    ).toBeInTheDocument();
  });

  it("renders technology icons", () => {
    renderWithTranslations(<Skills />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBeGreaterThan(0);
  });
});
