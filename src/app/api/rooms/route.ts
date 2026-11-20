import { NextRequest, NextResponse } from "next/server";
import { getStoredRooms, updateStoredRoom } from "@/lib/db";

export async function GET() {
  const rooms = getStoredRooms();
  return NextResponse.json({ success: true, rooms });
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing room id" }, { status: 400 });
    }

    const updated = updateStoredRoom(id, updates);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Room not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, room: updated });
  } catch (err) {
    console.error("PATCH /api/rooms error:", err);
    return NextResponse.json({ success: false, error: "Failed to update room" }, { status: 500 });
  }
}
