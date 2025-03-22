"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

// Fonction pour gérer les requêtes POST
export async function POST(request: Request) {
  // Vérification de l'API key avant toute opération
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "Erreur: RESEND_API_KEY n'est pas définie dans l'environnement",
      { env: process.env.NODE_ENV }
    );
    return NextResponse.json(
      {
        success: false,
        error: "Configuration du serveur incorrecte: clé API manquante",
      },
      { status: 500 }
    );
  }

  // Initialisation de Resend avec l'API key vérifiée
  const resend = new Resend(apiKey);

  try {
    // Extraction des données de la requête
    const { name, email, message } = await request.json();

    // Préparation et envoi de l'email
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "riantsoa96@gmail.com",
      subject: `[DEVFOLIO] Nouveau message de ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
