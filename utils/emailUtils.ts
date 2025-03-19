import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailParams) {
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

    return { success: true, data };
  } catch (error) {
    console.error("Erreur Resend:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur inconnue",
    };
  }
}
