"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sendEmail } from "@/utils/emailUtils";

const resend = new Resend(process.env.RESEND_API_KEY);

resend.domains.create({ name: "jordanrasoloarison.devfolio" });
resend.domains.get(
  "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC16W0R4SK/pl0XHJpX+dhQQOFkBZtP0SuGDawNuBxpbwSwMNvLTbU2YPZ/QbJxzcGcQu5OkPhoiHMOv9fUqog2rdjKbAUWABGXk00LIqKEpYp38pQZk3lfBanAxW2oltajO52NT/udXUEg6jxQGmXjgloqeLiwhKYOkwsyGu8PHwIDAQAB"
);
resend.domains.verify(
  "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC16W0R4SK/pl0XHJpX+dhQQOFkBZtP0SuGDawNuBxpbwSwMNvLTbU2YPZ/QbJxzcGcQu5OkPhoiHMOv9fUqog2rdjKbAUWABGXk00LIqKEpYp38pQZk3lfBanAxW2oltajO52NT/udXUEg6jxQGmXjgloqeLiwhKYOkwsyGu8PHwIDAQAB"
);
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
  const allowedOrigins = [
    "https://devfolio-jade.vercel.app/",
    "http://localhost:3000",
  ]; // Ajoutez vos domaines autorisés

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse("Origine non autorisée", { status: 403 });
  }

  // Traitez le corps de la requête
  const { name, email, message } = await request.json();

  const response = await sendEmail({ name, email, message });

  if (!response.success) {
    return NextResponse.json({ error: response.error }, { status: 500 });
  }

  return NextResponse.json(response.data, { status: 200 });
}
