import "@testing-library/jest-dom";
import React from "react";

// Mock pour window.requestIdleCallback qui est utilisé dans certains composants
window.requestIdleCallback = function (
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
) {
  return setTimeout(
    () => callback({ didTimeout: false, timeRemaining: () => 0 }),
    1
  ) as unknown as number;
};

// Mock pour les méthodes window non supportées dans JSDOM
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Créer un HOC pour wrapper les composants motion
const createMotionComponent = (Component: string) => {
  return ({ children, ...props }: any) => {
    // Filtrer les props animation-related
    const filteredProps: any = {};
    Object.keys(props).forEach((key) => {
      if (
        ![
          "initial",
          "animate",
          "exit",
          "transition",
          "whileHover",
          "whileTap",
          "whileInView",
          "whileFocus",
          "whileDrag",
          "viewport",
          "variants",
          "onHoverStart",
          "onHoverEnd",
        ].includes(key)
      ) {
        filteredProps[key] = props[key];
      }
    });

    return React.createElement(Component, filteredProps, children);
  };
};

// Mock pour framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: createMotionComponent("div"),
    form: createMotionComponent("form"),
    button: createMotionComponent("button"),
    a: createMotionComponent("a"),
    section: createMotionComponent("section"),
    h1: createMotionComponent("h1"),
    h2: createMotionComponent("h2"),
    h3: createMotionComponent("h3"),
    p: createMotionComponent("p"),
    span: createMotionComponent("span"),
  },
  AnimatePresence: ({ children }: any) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
    animateSync: jest.fn(),
  }),
}));

// Mock pour window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock pour next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage(props: any) {
    // Convertir les props booléens en string pour éviter les warnings React
    const finalProps = { ...props };
    if (typeof finalProps.fill === "boolean")
      finalProps.fill = finalProps.fill.toString();
    if (typeof finalProps.priority === "boolean")
      finalProps.priority = finalProps.priority.toString();

    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement("img", {
      ...finalProps,
      alt: finalProps.alt || "",
    });
  },
}));

// Un test basique pour éviter l'erreur "Your test suite must contain at least one test"
describe("Jest Setup", () => {
  it("loads correctly", () => {
    expect(true).toBe(true);
  });
});
