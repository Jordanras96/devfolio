"use server";
import { NextResponse } from "next/server";
// import { emailService } from "@/services/email";
import { sendEmail } from "@/services/email";
import { validationService } from "@/services/validation/validationService";
import { errorHandler } from "@/utils/error/errorHandler";

// Fonction pour gérer les requêtes POST
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = await validationService.validate(body);
    await sendEmail(validatedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    return errorHandler.handleApiError(error);
  }
}
