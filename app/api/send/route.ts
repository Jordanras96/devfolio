import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

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

    res.status(200).json(data);
  } catch (error) {
    console.error("Erreur Resend:", error);
    res.status(500).json({
      error: "Échec de l'envoi du message",
      details: error instanceof Error ? error.message : "Erreur inconnue",
    });
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
