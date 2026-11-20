import { NextRequest, NextResponse } from "next/server";
import { updateEnquiryStatus } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    if (!status || !["new", "contacted", "confirmed", "archived"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid status value" }, { status: 400 });
    }

    const updated = updateEnquiryStatus(id, status);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err) {
    console.error("PATCH /api/enquiries/[id] error:", err);
    return NextResponse.json({ success: false, error: "Failed to update enquiry" }, { status: 500 });
  }
}
