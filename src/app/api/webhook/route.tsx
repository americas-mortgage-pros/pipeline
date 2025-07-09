import { NextRequest, NextResponse } from "next/server";

type WebhookContact = {
  first_name: string;
  last_name: string;
  [key: string]: any;
};

let contacts: WebhookContact[] = [];

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: WebhookContact = await req.json();

    if (!body.first_name || !body.last_name) {
      return NextResponse.json(
        { error: "Missing name fields" },
        { status: 400 }
      );
    }

    contacts.push(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ contacts });
}
