import { NextRequest, NextResponse } from "next/server";
import { getEnquiries, addEnquiry } from "@/lib/db";

export async function GET() {
  try {
    const enquiries = getEnquiries();
    return NextResponse.json({ success: true, enquiries });
  } catch (err) {
    console.error("GET /api/enquiries error:", err);
    return NextResponse.json({ success: false, error: "Failed to retrieve enquiries" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType,
      airportPickup,
      lakeExcursion,
      notes,
    } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Please enter your full name." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json({ success: false, error: "Please provide a valid telephone number." }, { status: 400 });
    }

    if (!checkIn || !checkOut) {
      return NextResponse.json({ success: false, error: "Please select both check-in and check-out dates." }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return NextResponse.json({ success: false, error: "Invalid date format." }, { status: 400 });
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { success: false, error: "Check-out date must be after check-in date." },
        { status: 400 }
      );
    }

    const guestCount = Math.max(1, Number(guests) || 1);

    // Anti-spam check
    if (body.company_trap && body.company_trap.length > 0) {
      return NextResponse.json({
        success: true,
        referenceNumber: "DAH-2026-SPAM",
        message: "Enquiry received.",
      });
    }

    const enquiry = addEnquiry({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      checkIn,
      checkOut,
      guests: guestCount,
      roomType: roomType || "any",
      airportPickup: Boolean(airportPickup),
      lakeExcursion: Boolean(lakeExcursion),
      notes: notes ? String(notes).trim() : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your booking enquiry has been registered with Dib Anbessa Hotel.",
        referenceNumber: enquiry.referenceNumber,
        enquiry,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/enquiries error:", err);
    return NextResponse.json({ success: false, error: "Failed to submit booking enquiry" }, { status: 500 });
  }
}
