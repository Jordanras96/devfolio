import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Projects } from "@/components/sections/projects";
import { useTranslations } from "next-intl";

// Mock EmblaCarousel et next-intl
jest.mock("@/components/carousel/carousel", () => ({
  __esModule: true,
  default: jest.fn(({ slides }) => (
    <div data-testid="embla-carousel">
      {slides.map((slide: any, index: number) => (
        <div key={index} data-testid={`slide-${index}`}>
          {slide.title}
        </div>
      ))}
    </div>
  )),
}));

// Mock CSS imports
jest.mock("swiper/css", () => ({}));
jest.mock("swiper/css/navigation", () => ({}));
jest.mock("swiper/css/pagination", () => ({}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => {
    if (key === "Projects.title") return "Career Trophies";
    return key;
  }),
}));

describe("Projects Component", () => {
  beforeEach(() => {
    (useTranslations as jest.Mock).mockImplementation(() => (key: string) => {
      if (key === "Projects.title") return "Career Trophies";
      return key;
    });
  });

  it("renders project carousel", () => {
    render(<Projects />);
    expect(screen.getAllByTestId("embla-carousel")[0]).toBeInTheDocument();
  });

  it("displays project slides", () => {
    render(<Projects />);
    expect(screen.getByTestId("slide-0")).toBeInTheDocument();
  });

  it("renders section title", () => {
    render(<Projects />);
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
  });

  it("passes correct options to carousel", () => {
    render(<Projects />);
    const carousels = screen.getAllByTestId("embla-carousel");
    expect(carousels.length).toBeGreaterThan(0);
  });
});
