"use server";

import type { ContactFormData } from "@/features/contact/types/contact.types";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

export async function sendEmail(data: ContactFormData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "Erreur: RESEND_API_KEY n'est pas définie dans l'environnement",
      { env: process.env.NODE_ENV }
    );
    throw new Error("Configuration du serveur incorrecte: clé API manquante");
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "riantsoa96@gmail.com",
      subject: `[DEVFOLIO] Nouveau message de ${data.name}`,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }) as React.ReactElement,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error) {
    console.error("Erreur Resend:", error);
    throw new Error(error instanceof Error ? error.message : "Erreur inconnue");
  }
}
