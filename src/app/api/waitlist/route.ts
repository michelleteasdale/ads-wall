import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, locale } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (process.env.MONGODB_URI) {
      const { connectDB } = await import("@/lib/db/mongoose");
      const { Waitlist } = await import("@/lib/db/models/Waitlist");
      await connectDB();
      await Waitlist.create({ email, source, locale });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      "code" in error &&
      (error as { code: number }).code === 11000
    ) {
      return NextResponse.json({ success: true, message: "Already registered" });
    }
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
