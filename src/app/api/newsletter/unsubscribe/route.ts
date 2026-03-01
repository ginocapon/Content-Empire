import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "L'indirizzo email è obbligatorio.",
        },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "L'indirizzo email non è valido.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Disiscrizione avvenuta con successo. Non riceverai più le nostre newsletter.",
      email,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Formato della richiesta non valido.",
      },
      { status: 400 }
    );
  }
}
