import { NextRequest, NextResponse } from "next/server";
import { getReviews, addReview } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const all = searchParams.get("all");
    const statusParam = searchParams.get("status") as "pending" | "approved" | "rejected" | null;

    if (all === "true") {
      const reviews = getReviews();
      return NextResponse.json({ success: true, reviews });
    }

    const reviews = getReviews(statusParam || "approved");
    return NextResponse.json({ success: true, reviews });
  } catch (err) {
    console.error("GET /api/reviews error:", err);
    return NextResponse.json({ success: false, error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { guestName, email, rating, title, comment, stayDate, consent } = body;

    // Validation
    if (!guestName || typeof guestName !== "string" || guestName.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Please provide a valid name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Please provide a valid email address." }, { status: 400 });
    }

    const numRating = Number(rating);
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
      return NextResponse.json({ success: false, error: "Please select a star rating between 1 and 5." }, { status: 400 });
    }

    if (!title || typeof title !== "string" || title.trim().length < 3) {
      return NextResponse.json({ success: false, error: "Please provide a review title." }, { status: 400 });
    }

    if (!comment || typeof comment !== "string" || comment.trim().length < 10) {
      return NextResponse.json({ success: false, error: "Review text must be at least 10 characters." }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Please check the consent box to submit your review." },
        { status: 400 }
      );
    }

    // Anti-spam honeypot check if present
    if (body.website_trap && body.website_trap.length > 0) {
      // Silently discard spam bot
      return NextResponse.json({ success: true, message: "Review submitted successfully." });
    }

    const created = addReview({
      guestName: guestName.trim(),
      email: email.trim().toLowerCase(),
      rating: numRating,
      title: title.trim(),
      comment: comment.trim(),
      stayDate: stayDate ? String(stayDate).trim() : undefined,
      consent: true,
      verifiedStay: false,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your review. It has been received and will be published upon management moderation.",
        reviewId: created.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    return NextResponse.json({ success: false, error: "Failed to submit review" }, { status: 500 });
  }
}
