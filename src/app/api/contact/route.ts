import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, locale } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    if (process.env.MONGODB_URI) {
      const { connectDB } = await import("@/lib/db/mongoose");
      const { Contact } = await import("@/lib/db/models/Contact");
      await connectDB();
      await Contact.create({ name, email, message, locale });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
