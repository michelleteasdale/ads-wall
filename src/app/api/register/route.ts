import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/mongoose";
import { User } from "@/lib/db/models/User";
import { signToken, setSessionCookie } from "@/lib/auth";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = [
      "firstName", "lastName", "email", "phone", "dateOfBirth",
      "street", "city", "country", "postalCode", "password",
    ];

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (body.password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await User.findOne({ email: body.email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(body.password, 12);

    const user = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email.toLowerCase(),
      phone: body.phone,
      dateOfBirth: body.dateOfBirth,
      street: body.street,
      city: body.city,
      country: body.country,
      postalCode: body.postalCode,
      passwordHash,
    });

    const token = signToken({ userId: user._id.toString(), email: user.email });
    await setSessionCookie(token);

    sendWelcomeEmail(user.email, user.firstName).catch(() => {});

    return NextResponse.json({ success: true, user: { id: user._id, firstName: user.firstName, email: user.email } });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
