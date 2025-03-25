import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Contact } from "@/components/sections/contact";
import { toast } from "sonner";

// Mock next-intl, fetch et sonner
jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => {
    if (key === "Contact.title") return "Contact";
    if (key === "Contact.textHead") return "textHead";
    if (key === "Contact.textContent") return "textContent";
    if (key === "Contact.form.name") return "form.name";
    if (key === "Contact.form.email") return "form.email";
    if (key === "Contact.form.message") return "form.message";
    if (key === "Contact.btn") return "btn";
    if (key === "Contact.sending") return "sending";
    if (key === "Contact.successMessage") return "successMessage";
    if (key === "Contact.errorMessage") return "errorMessage";
    return key;
  }),
}));

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock global.fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
) as jest.Mock;

describe("Contact Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders contact form", () => {
    render(<Contact />);
    expect(screen.getByLabelText("form.name")).toBeInTheDocument();
    expect(screen.getByLabelText("form.email")).toBeInTheDocument();
    expect(screen.getByLabelText("form.message")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "btn" })).toBeInTheDocument();
  });

  it("validates form inputs", async () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: "btn" });

    // Submit without filling form
    fireEvent.click(submitButton);

    // Remplir le formulaire
    fireEvent.change(screen.getByLabelText("form.name"), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText("form.email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("form.message"), {
      target: { value: "This is a test message" },
    });

    // Soumettre à nouveau
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
    });
  });

  it("submits form successfully", async () => {
    render(<Contact />);

    // Remplir le formulaire
    fireEvent.change(screen.getByLabelText("form.name"), {
      target: { value: "Test User" },
    });
    fireEvent.change(screen.getByLabelText("form.email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("form.message"), {
      target: { value: "This is a test message" },
    });

    // Soumettre le formulaire
    fireEvent.click(screen.getByRole("button", { name: "btn" }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/send", expect.any(Object));
      expect(toast.success).toHaveBeenCalled();
    });
  });
});
