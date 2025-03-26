import { NextResponse } from "next/server";

export const errorHandler = {
  handleApiError(error: unknown) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  },
};
