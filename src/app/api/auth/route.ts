import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    // Hotel Admin Master Passcode
    if (password === "dibanbessa2026" || password === "admin123") {
      const response = NextResponse.json({
        success: true,
        message: "Authentication successful",
      });
      // Set simple secure session cookie
      response.cookies.set("dah_admin_session", "authenticated_manager", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
      return response;
    }

    return NextResponse.json(
      { success: false, error: "Incorrect administrative password." },
      { status: 401 }
    );
  } catch (err) {
    console.error("POST /api/auth error:", err);
    return NextResponse.json({ success: false, error: "Authentication failed" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("dah_admin_session");
  return response;
}
