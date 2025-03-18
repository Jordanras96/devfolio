import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour gérer les requêtes OPTIONS (pré-vol CORS)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Autoriser toutes les origines (à adapter en production)
      "Access-Control-Allow-Methods": "POST, OPTIONS", // Méthodes autorisées
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // En-têtes autorisés
    },
  });
}

// Fonction pour gérer les requêtes POST
export async function POST(request: Request) {
  // Vérifiez l'origine de la requête (optionnel, pour renforcer la sécurité)
  const origin = request.headers.get("origin");
  const allowedOrigins = ["https://votre-domaine.com", "http://localhost:3000"]; // Ajoutez vos domaines autorisés

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse("Origine non autorisée", { status: 403 });
  }

  // Traitez le corps de la requête
  const { name, email, message } = await request.json();

  try {
    // Envoyez l'e-mail via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "riantsoa96@gmail.com",
      subject: `[DEVFOLIO] Nouveau message de ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Réponse réussie
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*", // Autoriser l'origine de la requête
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Échec de l'envoi du message",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": origin || "*", // Autoriser l'origine de la requête
          "Content-Type": "application/json",
        },
      }
    );
  }
}
