import fs from "fs";
import path from "path";
import { ROOMS_DATA, RoomType } from "@/data/hotelInfo";

export interface Review {
  id: string;
  guestName: string;
  email: string; // kept private
  rating: number; // 1 to 5
  title: string;
  comment: string;
  stayDate?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  consent: boolean;
  verifiedStay?: boolean;
}

export interface BookingEnquiry {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  airportPickup?: boolean;
  lakeExcursion?: boolean;
  notes?: string;
  status: "new" | "contacted" | "confirmed" | "archived";
  createdAt: string;
}

export interface HotelSettings {
  phones: string[];
  emails: string[];
  address: string;
  announcement?: string;
  maintenanceNotice?: string;
  galleriaOpen: boolean;
}

interface DatabaseSchema {
  reviews: Review[];
  enquiries: BookingEnquiry[];
  rooms: RoomType[];
  settings: HotelSettings;
}

const DB_PATH = path.join(process.cwd(), "src", "data", "storage.json");

// Default seed data
const SEED_DATA: DatabaseSchema = {
  reviews: [
    {
      id: "rev-1",
      guestName: "Abebe Kassahun",
      email: "abebe.k@example.com",
      rating: 5,
      title: "Warm Ethiopian hospitality and peaceful garden",
      comment:
        "Dib Anbessa Hotel is a genuine classic in Bahir Dar. The hand-carved woodwork in the rooms, the quiet courtyard fountain, and the warm service by the front desk team made our stay truly memorable. The fresh Lake Tana fish at Galleria Restaurant was prepared to perfection.",
      stayDate: "October 2026",
      status: "approved",
      createdAt: "2026-10-24T14:30:00.000Z",
      consent: true,
      verifiedStay: true,
    },
    {
      id: "rev-2",
      guestName: "Marcus Schneider",
      email: "marcus.s@example.com",
      rating: 5,
      title: "Authentic character, not a soulless corporate hotel",
      comment:
        "If you want to experience real Ethiopian hospitality and classic architecture with character, this is the place. The curved balconies overlooking the palm avenue, the traditional art in the lobby, and the helpful staff who arranged our Blue Nile Falls trip made it a highlight of our trip.",
      stayDate: "September 2026",
      status: "approved",
      createdAt: "2026-09-18T11:15:00.000Z",
      consent: true,
      verifiedStay: true,
    },
    {
      id: "rev-3",
      guestName: "Selamawit Tadesse",
      email: "selam.t@example.com",
      rating: 4,
      title: "Clean rooms, historic atmosphere, and great central location",
      comment:
        "The hotel has an established charm you rarely find today. Spacious rooms with comfortable beds and nice balconies. Very convenient to walk to the market and quick drive to the lake boat departure point. The staff greeted us with warm smiles every day.",
      stayDate: "November 2026",
      status: "approved",
      createdAt: "2026-11-05T09:45:00.000Z",
      consent: true,
      verifiedStay: true,
    },
  ],
  enquiries: [
    {
      id: "enq-101",
      referenceNumber: "DAH-2026-8491",
      fullName: "Dawit Worku",
      email: "dawit.worku@example.com",
      phone: "+251 91 123 4567",
      checkIn: "2026-12-15",
      checkOut: "2026-12-18",
      guests: 2,
      roomType: "heritage-carved-wood",
      airportPickup: true,
      lakeExcursion: true,
      notes: "Arriving on afternoon Ethiopian Airlines flight from Addis Ababa. Requesting quiet room.",
      status: "contacted",
      createdAt: "2026-11-19T08:20:00.000Z",
    },
  ],
  rooms: ROOMS_DATA,
  settings: {
    phones: ["+251 58 220 1436", "+251 946 456 212", "+251 98 211 7777"],
    emails: ["info@dibanbessahotel.com", "reservations@dibanbessahotel.com"],
    address: "A3 Highway / Lake Street, near St. George Church, Bahir Dar, Ethiopia",
    announcement: "Welcome to Dib Anbessa Hotel — Classic Hospitality on Lake Tana.",
    galleriaOpen: true,
  },
};

export function getDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const dir = path.dirname(DB_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DB_PATH, JSON.stringify(SEED_DATA, null, 2), "utf-8");
      return SEED_DATA;
    }
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading database file, returning seed data:", err);
    return SEED_DATA;
  }
}

export function saveDatabase(data: DatabaseSchema): boolean {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing database file:", err);
    return false;
  }
}

// Review operations
export function getReviews(status?: "pending" | "approved" | "rejected"): Review[] {
  const db = getDatabase();
  if (!status) return db.reviews;
  return db.reviews.filter((r) => r.status === status);
}

export function addReview(newRev: Omit<Review, "id" | "createdAt" | "status">): Review {
  const db = getDatabase();
  const review: Review = {
    ...newRev,
    id: `rev-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    status: "pending", // all direct submissions start as pending
    createdAt: new Date().toISOString(),
  };
  db.reviews.unshift(review);
  saveDatabase(db);
  return review;
}

export function updateReviewStatus(id: string, status: "pending" | "approved" | "rejected"): Review | null {
  const db = getDatabase();
  const idx = db.reviews.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  db.reviews[idx].status = status;
  saveDatabase(db);
  return db.reviews[idx];
}

export function deleteReview(id: string): boolean {
  const db = getDatabase();
  const initialLen = db.reviews.length;
  db.reviews = db.reviews.filter((r) => r.id !== id);
  if (db.reviews.length !== initialLen) {
    saveDatabase(db);
    return true;
  }
  return false;
}

// Enquiry operations
export function getEnquiries(): BookingEnquiry[] {
  const db = getDatabase();
  return db.enquiries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addEnquiry(enq: Omit<BookingEnquiry, "id" | "referenceNumber" | "createdAt" | "status">): BookingEnquiry {
  const db = getDatabase();
  const randNum = Math.floor(1000 + Math.random() * 9000);
  const enquiry: BookingEnquiry = {
    ...enq,
    id: `enq-${Date.now()}`,
    referenceNumber: `DAH-2026-${randNum}`,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  db.enquiries.unshift(enquiry);
  saveDatabase(db);
  return enquiry;
}

export function updateEnquiryStatus(
  id: string,
  status: "new" | "contacted" | "confirmed" | "archived"
): BookingEnquiry | null {
  const db = getDatabase();
  const idx = db.enquiries.findIndex((e) => e.id === id);
  if (idx === -1) return null;
  db.enquiries[idx].status = status;
  saveDatabase(db);
  return db.enquiries[idx];
}

// Rooms operations
export function getStoredRooms(): RoomType[] {
  const db = getDatabase();
  return db.rooms || ROOMS_DATA;
}

export function updateStoredRoom(id: string, updates: Partial<RoomType>): RoomType | null {
  const db = getDatabase();
  const idx = db.rooms.findIndex((r) => r.id === id);
  if (idx === -1) return null;
  db.rooms[idx] = { ...db.rooms[idx], ...updates };
  saveDatabase(db);
  return db.rooms[idx];
}

// Settings operations
export function getStoredSettings(): HotelSettings {
  const db = getDatabase();
  return db.settings;
}

export function updateStoredSettings(updates: Partial<HotelSettings>): HotelSettings {
  const db = getDatabase();
  db.settings = { ...db.settings, ...updates };
  saveDatabase(db);
  return db.settings;
}
