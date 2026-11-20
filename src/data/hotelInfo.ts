export interface RoomType {
  id: string;
  name: string;
  amharicName: string;
  tagline: string;
  image: string;
  gallery: string[];
  description: string;
  capacity: {
    adults: number;
    children: number;
  };
  bedType: string;
  sizeM2: number;
  priceNote: string;
  verifiedPrice?: number; // In ETB or USD (only shown if confirmed)
  amenities: string[];
  features: string[];
  isAvailable: boolean;
}

export interface DestinationItem {
  id: string;
  name: string;
  amharicName: string;
  category: string;
  distance: string;
  duration: string;
  description: string;
  highlights: string[];
  practicalTips: string;
  image: string;
}

export const HOTEL_INFO = {
  name: "Dib Anbessa Hotel",
  amharicName: "ድብ አንበሳ ሆቴል",
  historicalTitle: "Bear Lion Hotel",
  establishedNotice: "One of Bahir Dar's most established landmark hotels",
  ratingStars: 3,
  totalRooms: 60,
  generalManager: {
    name: "Yidersal Mengistu",
    title: "General Manager",
    experience: "Over 10 years of professional hospitality leadership in Bahir Dar",
    quote: "The hospitality industry is my life's favorite calling. True warmth, personal dignity, and heartfelt service are what we give every guest who enters Dib Anbessa.",
  },
  contact: {
    address: "A3 Highway / Lake Street, Bahir Dar, Ethiopia",
    neighborhood: "Near St. George Church & Blue Nile Bridge, Bahir Dar",
    coordinates: {
      lat: 11.5945,
      lng: 37.3905,
    },
    phones: [
      { label: "Main Desk / Landline", number: "+251 58 220 1436" },
      { label: "Direct Mobile / Guest Hub", number: "+251 946 456 212" },
      { label: "Reservation Hotline", number: "+251 98 211 7777" },
    ],
    emails: [
      { label: "General Inquiries", address: "info@dibanbessahotel.com" },
      { label: "Reservations", address: "reservations@dibanbessahotel.com" },
    ],
    operatingHours: "24 Hours Front Desk & Guest Services",
  },
  dining: {
    restaurantName: "Galleria Restaurant",
    amharicRestaurantName: "ጋለሪያ የምግብ አዳራሽ",
    barName: "Dib Anbessa Classic Bar & Lounge",
    amharicBarName: "ድብ አንበሳ ባርና ላውንጅ",
    hours: {
      breakfast: "6:30 AM – 10:30 AM",
      lunch: "12:00 PM – 3:30 PM",
      dinner: "6:30 PM – 10:30 PM",
      bar: "10:00 AM – Midnight",
      roomService: "Available 24 Hours",
    },
    specialties: [
      "Freshly Sourced Lake Tana Fish (Pan-crisped tilapia and Nile perch with regional herbs & fresh lime)",
      "Traditional Ethiopian Shared Feasts (Doro Wat, Tibs, and fasting assortments with fresh Injera)",
      "Roast Chicken & International Banquets with garden-fresh produce",
      "Traditional Ethiopian Coffee Ceremony served with frankincense",
      "Fine spirits, Ethiopian Rift Valley wines, and chilled beers",
    ],
  },
  facilities: [
    {
      id: "shuttle",
      title: "Roundtrip Airport Shuttle & 4x4 Excursion Transport",
      amharicTitle: "የአውሮፕላን ማረፊያ እና የጉዞ መኪና አገልግሎት",
      description: "Dedicated airport transfers to and from Dejazmach Belay Zeleke Airport (BJR), plus rugged 4x4 vehicles for Lake Tana & Blue Nile Falls excursions.",
      icon: "Car",
    },
    {
      id: "dining",
      title: "Galleria Restaurant & Bar Lounge",
      amharicTitle: "ጋለሪያ ሬስቶራንት እና ባር",
      description: "Generous multi-level dining hall serving authentic Lake Tana fish specialties, Ethiopian national dishes, and full beverage service.",
      icon: "UtensilsCrossed",
    },
    {
      id: "courtyard",
      title: "Courtyard Garden & Fountain Terrace",
      amharicTitle: "የአትክልት ስፍራ እና ፏፏቴ",
      description: "A private inner garden surrounded by tropical palm trees, cypress foliage, and a soothing central fountain for peaceful relaxation.",
      icon: "Trees",
    },
    {
      id: "conference",
      title: "Conference & Meeting Facilities",
      amharicTitle: "የስብሰባ እና የዝግጅት አዳራሽ",
      description: "Spacious event hall accommodating corporate seminars, regional assemblies, workshops, and private receptions with audiovisual support.",
      icon: "Users",
    },
    {
      id: "wifi",
      title: "Complimentary Wi-Fi",
      amharicTitle: "ነፃ ፈጣን የኢንተርኔት አገልግሎት",
      description: "Wireless internet connectivity across the lobby, restaurant, bar, and guest rooms to keep you connected with family or business.",
      icon: "Wifi",
    },
    {
      id: "frontdesk",
      title: "24-Hour Reception & Travel Concierge",
      amharicTitle: "የ24 ሰዓት የእንግዳ መቀበያ",
      description: "Attentive day-and-night guest assistance, luggage storage, safe deposit, and booking coordination for boat trips to island monasteries.",
      icon: "Clock",
    },
    {
      id: "parking",
      title: "Secure On-Site Parking",
      amharicTitle: "አስተማማኝ የመኪና ማቆሚያ",
      description: "Ample enclosed parking lot within the hotel compound with 24-hour perimeter security personnel.",
      icon: "ShieldCheck",
    },
    {
      id: "housekeeping",
      title: "Daily Housekeeping & Laundry",
      amharicTitle: "የዕለት ተዕለት የክፍል ጽዳትና የልብስ እጥበት",
      description: "Thorough daily room cleaning, fresh linens, turndown service, and prompt in-house laundry and pressing services.",
      icon: "Sparkles",
    },
  ],
  externalReviews: [
    {
      platform: "Expedia",
      url: "https://www.expedia.com/Bahir-Dar-Hotels-Dib-Anbessa-Hotel-Bahir-Dar.h17463873.Hotel-Information",
      description: "Read verified traveler reviews and property information on Expedia.",
      badge: "Verified Listing",
    },
    {
      platform: "Google Hotels",
      url: "https://www.google.com/travel/hotels/entity/ChoI77e5yrX7v7WUARoNL2cvMTFmc21nbHdfbBAB",
      description: "Explore traveler ratings, authentic guest photos, and location insights on Google Maps & Google Travel.",
      badge: "Official Location",
    },
    {
      platform: "Hotels.com",
      url: "https://www.hotels.com/ho17463873/dib-anbessa-hotel-bahir-dar-ethiopia/",
      description: "Check guest feedback and accommodation details on Hotels.com.",
      badge: "Partner Profile",
    },
    {
      platform: "Guest Hub (The Guide)",
      url: "https://theguide.tab.travel/hub/yxzxc/dib-anbessa-hotel/",
      description: "Direct guest information hub hosted by Tab Travel featuring property details and team contacts.",
      badge: "Direct Guest Hub",
    },
  ],
};

export const ROOMS_DATA: RoomType[] = [
  {
    id: "classic-twin",
    name: "Classic Twin Bedroom",
    amharicName: "ክላሲክ ባለ ሁለት አልጋ ክፍል",
    tagline: "Comfortable twin accommodation with private balcony and traditional warmth",
    image: "/images/hotel/room-twin-classic-petals.webp",
    gallery: [
      "/images/hotel/room-twin-classic-petals.webp",
      "/images/hotel/exterior-property-hub-cover.jpg",
      "/images/hotel/courtyard-garden-fountain.webp",
    ],
    description:
      "A spacious, serene guest room outfitted with two comfortable twin beds, padded leatherette headboard, decorative carpet, and fresh floral touches upon arrival. Large glass doors open to a private balcony with gentle Bahir Dar breezes.",
    capacity: { adults: 2, children: 1 },
    bedType: "2 Twin Beds",
    sizeM2: 26,
    priceNote: "Rates available upon enquiry — confirmed directly by management",
    amenities: [
      "Private Balcony with City / Courtyard Views",
      "Private En-suite Bathroom with Hot Shower",
      "Complimentary Bottled Water Daily",
      "Flat-Screen TV with Satellite Channels",
      "Daily Housekeeping & Fresh Linens",
      "High-Speed Wi-Fi Access",
      "Comfortable Reading Lamps & Nightstand",
      "24-Hour Room Service Available",
    ],
    features: [
      "Twin bed layout ideal for colleagues or friends",
      "Generous natural lighting through full-height balcony door",
      "Quiet wing positioning overlooking the inner courtyard",
    ],
    isAvailable: true,
  },
  {
    id: "heritage-carved-wood",
    name: "Heritage Carved Wood Double",
    amharicName: "ባህላዊ የተቀረጸ ድርብ ክፍል",
    tagline: "Distinctive Ethiopian woodcraft paired with restful comfort and vintage seating",
    image: "/images/hotel/room-heritage-carved-wood.webp",
    gallery: [
      "/images/hotel/room-heritage-carved-wood.webp",
      "/images/hotel/lobby-timber-fresco-screen.webp",
      "/images/hotel/reception-grand-staircase.webp",
    ],
    description:
      "Showcasing the authentic artisanal heritage of Ethiopia, this room features a magnificent hand-carved mahogany headboard with traditional geometric archways. Draped in crisp white sheets with golden woven Ethiopian runners and paired with vintage upholstered armchairs.",
    capacity: { adults: 2, children: 1 },
    bedType: "1 Queen Bed or 2 Joint Doubles",
    sizeM2: 28,
    priceNote: "Rates available upon enquiry — confirmed directly by management",
    amenities: [
      "Handcrafted Ethiopian Carved Wood Bedstead",
      "Traditional Woven Cotton Accents (Gabi/Netela style)",
      "Vintage Lounge Armchairs & Coffee Corner",
      "Private Balcony with Avenue / Garden Perspective",
      "Private Bathroom with Rainfall Showerhead",
      "Complimentary Bottled Spring Water",
      "Flat-Screen TV & Wi-Fi",
      "Luggage Wardrobe and Vanity Table",
    ],
    features: [
      "One-of-a-kind handcrafted timber headboard with Ethiopian motifs",
      "Serene atmosphere celebrating classic Ethiopian hospitality",
      "Dedicated seating area for writing or reading",
    ],
    isAvailable: true,
  },
  {
    id: "deluxe-terracotta",
    name: "Deluxe Terracotta King Room",
    amharicName: "ዴሉክስ ቴራኮታ ኪንግ ክፍል",
    tagline: "Expanded comfort featuring tufted leatherette styling and dedicated work lounge",
    image: "/images/hotel/room-deluxe-terracotta.webp",
    gallery: [
      "/images/hotel/room-deluxe-terracotta.webp",
      "/images/hotel/bar-classic-lounge.webp",
      "/images/hotel/exterior-night-illuminated.webp",
    ],
    description:
      "Our premier individual double room boasting an expansive tufted terracotta leatherette headboard, clean tiled flooring, private study desk with comfortable seating, and personalized in-room refreshments. Floor-to-ceiling drapery ensures tranquil rest after a day exploring Lake Tana.",
    capacity: { adults: 2, children: 1 },
    bedType: "1 King or Large Queen Bed",
    sizeM2: 32,
    priceNote: "Rates available upon enquiry — confirmed directly by management",
    amenities: [
      "Expansive King Size Bed with Premium Mattress",
      "Padded Terracotta Leatherette Headboard",
      "Dedicated Writing Desk with Lamp & Ergonomic Chair",
      "In-Room Beverage & Wine Service Chiller Set",
      "Private En-Suite Bathroom with Bathrobes & Slippers",
      "Flat-Screen TV with International News & Sports",
      "High-Speed Wi-Fi Connectivity",
      "Blackout Privacy Curtains & Balcony Access",
    ],
    features: [
      "Generous floor space suited for business travelers or couples",
      "Dedicated executive writing desk and charging ports",
      "Private balcony with elevated view",
    ],
    isAvailable: true,
  },
  {
    id: "executive-suite",
    name: "Executive Balcony Suite",
    amharicName: "ኤግዚክዩቲቭ ሰፊ በረንዳ ያለው ስዊት",
    tagline: "Expansive multi-space comfort with private panoramic balcony and lounge area",
    image: "/images/hotel/exterior-palms-facade.webp",
    gallery: [
      "/images/hotel/exterior-palms-facade.webp",
      "/images/hotel/room-deluxe-terracotta.webp",
      "/images/hotel/dining-banquet-spread.webp",
    ],
    description:
      "Positioned along the hotel's distinctive curved facade, the Executive Balcony Suite offers superior living space, an adjoining parlor lounge area, and an expansive curved balcony overlooking the palm avenue of Bahir Dar. Ideal for extended stays, families, or guests desiring elevated comfort.",
    capacity: { adults: 3, children: 2 },
    bedType: "1 King Bed + Convertible Sofa / Twin",
    sizeM2: 44,
    priceNote: "Rates available upon enquiry — confirmed directly by management",
    amenities: [
      "Panoramic Curved Balcony with Palm Views",
      "Separate Living Lounge with Velvet Armchairs",
      "Spacious Wardrobes and Luggage Storage",
      "Luxury En-Suite Bathroom with Full Bath Amenities",
      "Complimentary Morning Coffee or Tea Service",
      "Fast Wi-Fi & Large Flat-Screen TV",
      "Daily Fruit Basket & Spring Water",
      "Priority Excursion & Airport Shuttle Coordination",
    ],
    features: [
      "Prime location on the upper tier of the hotel's curved architecture",
      "Sweeping views of Bahir Dar's main avenue and courtyard trees",
      "Separate entertaining space for visitors or meetings",
    ],
    isAvailable: true,
  },
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "lake-tana",
    name: "Lake Tana & Island Monasteries",
    amharicName: "የጣና ሐይቅ እና ጥንታዊ ገዳማት",
    category: "Historical & UNESCO Heritage",
    distance: "1.2 km from Hotel (to main boat port)",
    duration: "Half-day or Full-day boat excursion",
    description:
      "Ethiopia's largest lake and the sacred reservoir of the Blue Nile. Over 20 historic monasteries dating from the 14th to 17th centuries are sheltered on its secluded islands and peninsulas, decorated with vivid biblical wall paintings and holding sacred imperial treasures.",
    highlights: [
      "Ura Kidane Mihret monastery with breathtaking circular painted frescoes",
      "Kibran Gabriel and Dega Estifanos historical treasury",
      "Pelicans, African fish eagles, and hippopotamuses along the papyrus reeds",
      "Traditional papyrus tankwa boats gliding across the serene water",
    ],
    practicalTips:
      "Boats depart regularly from the nearby Bahir Dar jetty. Our hotel front desk can connect you with licensed local boat captains and experienced multilingual guides.",
    image: "/images/hotel/dining-lake-tana-fish.webp",
  },
  {
    id: "blue-nile-falls",
    name: "Blue Nile Falls (Tis Issat)",
    amharicName: "ጥስ እሳት (የዓባይ ፏፏቴ)",
    category: "Natural Wonder",
    distance: "30 km southeast of Bahir Dar",
    duration: "3 to 4 hours roundtrip including walk",
    description:
      "Known locally as 'Tis Issat' ('The Smoke of Fire'), these magnificent waterfalls mark where the waters of Lake Tana tumble over dramatic basalt cliffs down into the Blue Nile Gorge. Walking across the 17th-century Portuguese stone bridge remains an unforgettable Ethiopian journey.",
    highlights: [
      "Spectacular 45-meter high cascading waterfalls through the gorge",
      "Historic Portuguese stone bridge dating from the 1620s",
      "Scenic walking trail through lush rural villages and farmland",
      "Vibrant rainbows forming constantly in the mist above the pool",
    ],
    practicalTips:
      "Comfortable walking shoes are recommended. Our hotel's dedicated 4x4 excursion vehicle is available for reliable private transfers directly to the trailhead.",
    image: "/images/hotel/exterior-front-safari-patrol.webp",
  },
  {
    id: "cultural-market",
    name: "Bahir Dar Central Cultural Market",
    amharicName: "የባሕር ዳር ባህላዊ ገበያ",
    category: "Culture & Local Life",
    distance: "800 meters from Hotel (walking distance)",
    duration: "1 to 2 hours",
    description:
      "A vibrant, bustling open-air market showcasing the finest artisanal craftsmanship of Gojjam and Amhara. Browse hand-woven white cotton Habesha Kemis, colorful woven mesobs (table baskets), authentic Ethiopian spices (berbere, shiro), and traditional musical instruments.",
    highlights: [
      "Artisan cotton weavers creating custom embroidery (Tilet)",
      "Traditional hand-carved wooden stools, crosses, and drums",
      "Fragrant spice alleyways filled with mountain herbs and organic honey",
      "Vibrant interaction with friendly local residents and artisans",
    ],
    practicalTips:
      "Saturday is the biggest market day, but local cultural stalls are open daily. Polite bargaining is customary and welcomed.",
    image: "/images/hotel/bahir-dar-market-culture.webp",
  },
  {
    id: "bezawit-hill",
    name: "Bezawit Palace & Sunset Viewpoint",
    amharicName: "የበዛዊት ቤተ መንግሥት እና የተራራ እይታ",
    category: "Scenic Panorama",
    distance: "6.5 km from Hotel",
    duration: "1.5 hours",
    description:
      "Perched on a high hill south of the town, this viewpoint overlooks the former royal palace of Emperor Haile Selassie. From the summit, you take in an unparalleled panoramic vista of Bahir Dar town, the vast expanse of Lake Tana, and the dramatic point where the Blue Nile gently exits the lake.",
    highlights: [
      "Panoramic 360-degree vista of Lake Tana and the Blue Nile source",
      "Spectacular sunset viewpoint over the Ethiopian highlands",
      "Historic vantage point overlooking the imperial retreat",
      "Peaceful hilltop breeze and birdwatching opportunities",
    ],
    practicalTips:
      "The best time to visit is late afternoon around 5:00 PM to watch the sunset paint the lake in golden hues.",
    image: "/images/hotel/exterior-palms-facade.webp",
  },
];
