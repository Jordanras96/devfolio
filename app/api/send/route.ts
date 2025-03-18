import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio <contact@votredomaine.com>",
      to: "riantsoa96@gmail.com",
      subject: `Nouveau message de ${body.name}`,
      react: EmailTemplate(body) as React.ReactElement,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      throw new Error("Échec de l'envoi via Resend");
    }

    return NextResponse.json(
      {
        success: true,
        emailId: data?.id,
      },
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      {
        error: "Échec de l'envoi",
        details: error instanceof Error ? error.message : error,
      },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}
