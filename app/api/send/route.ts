import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "riantsoa96@gmail.com",
      subject: `[DEVFOLIO] Nouveau message de ${name}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return NextResponse.json(
      {
        error: "Échec de l'envoi du message",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
