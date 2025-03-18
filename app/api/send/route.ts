import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log("Requête reçue"); // Log pour vérifier que la route est appelée
  const { name, email, message } = await request.json();
  console.log("Données reçues:", { name, email, message }); // Log pour vérifier les données

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "riantsoa96@gmail.com",
      subject: `[DEVFOLIO] Nouveau message de ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    console.log("Réponse Resend:", data); // Log pour vérifier la réponse de Resend

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*", // Autorise toutes les origines
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Autorise les méthodes POST et OPTIONS
        "Access-Control-Allow-Headers": "Content-Type", // Autorise l'en-tête Content-Type
      },
    });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json(
      {
        error: "Échec de l'envoi du message",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
