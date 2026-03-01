import { NextRequest, NextResponse } from "next/server";

const mockSubscribers = [
  {
    id: "1",
    email: "mario.rossi@example.com",
    name: "Mario Rossi",
    subscribedAt: "2025-11-10T08:30:00Z",
    status: "active",
  },
  {
    id: "2",
    email: "laura.bianchi@example.com",
    name: "Laura Bianchi",
    subscribedAt: "2025-12-01T14:20:00Z",
    status: "active",
  },
  {
    id: "3",
    email: "giuseppe.verdi@example.com",
    name: "Giuseppe Verdi",
    subscribedAt: "2026-01-05T10:00:00Z",
    status: "active",
  },
  {
    id: "4",
    email: "anna.ferrari@example.com",
    name: "Anna Ferrari",
    subscribedAt: "2026-01-15T16:45:00Z",
    status: "unsubscribed",
  },
  {
    id: "5",
    email: "paolo.conti@example.com",
    name: "Paolo Conti",
    subscribedAt: "2026-02-01T09:10:00Z",
    status: "active",
  },
  {
    id: "6",
    email: "elena.romano@example.com",
    name: "Elena Romano",
    subscribedAt: "2026-02-14T12:30:00Z",
    status: "active",
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function GET() {
  const activeSubscribers = mockSubscribers.filter(
    (s) => s.status === "active"
  );

  return NextResponse.json(
    {
      success: true,
      subscribers: mockSubscribers,
      total: mockSubscribers.length,
      active: activeSubscribers.length,
    },
    { headers: corsHeaders() }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || typeof body.email !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "L'indirizzo email è obbligatorio.",
        },
        { status: 400, headers: corsHeaders() }
      );
    }

    const email = body.email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "L'indirizzo email non è valido.",
        },
        { status: 400, headers: corsHeaders() }
      );
    }

    const existingSubscriber = mockSubscribers.find(
      (s) => s.email.toLowerCase() === email
    );

    if (existingSubscriber && existingSubscriber.status === "active") {
      return NextResponse.json(
        {
          success: false,
          error: "Questo indirizzo email è già iscritto alla newsletter.",
        },
        { status: 409, headers: corsHeaders() }
      );
    }

    const newSubscriber = {
      id: String(Date.now()),
      email,
      name: body.name || "",
      subscribedAt: new Date().toISOString(),
      status: "active" as const,
    };

    return NextResponse.json(
      {
        success: true,
        subscriber: newSubscriber,
        message: "Iscrizione alla newsletter avvenuta con successo! Grazie per esserti iscritto.",
      },
      { status: 201, headers: corsHeaders() }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Formato della richiesta non valido.",
      },
      { status: 400, headers: corsHeaders() }
    );
  }
}
