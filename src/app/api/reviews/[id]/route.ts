import { NextRequest, NextResponse } from "next/server";
import { updateReviewStatus, deleteReview } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid status value" }, { status: 400 });
    }

    const updated = updateReviewStatus(id, status);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, review: updated });
  } catch (err) {
    console.error("PATCH /api/reviews/[id] error:", err);
    return NextResponse.json({ success: false, error: "Failed to update review" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ok = deleteReview(id);
    if (!ok) {
      return NextResponse.json({ success: false, error: "Review not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Review deleted successfully" });
  } catch (err) {
    console.error("DELETE /api/reviews/[id] error:", err);
    return NextResponse.json({ success: false, error: "Failed to delete review" }, { status: 500 });
  }
}
