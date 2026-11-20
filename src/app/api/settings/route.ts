import { NextRequest, NextResponse } from "next/server";
import { getStoredSettings, updateStoredSettings } from "@/lib/db";

export async function GET() {
  const settings = getStoredSettings();
  return NextResponse.json({ success: true, settings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = updateStoredSettings(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch (err) {
    console.error("POST /api/settings error:", err);
    return NextResponse.json({ success: false, error: "Failed to update settings" }, { status: 500 });
  }
}
