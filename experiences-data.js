/**
 * NUMARU Japan — Experience articles (Column > Experience Stories)
 *
 * This file is the single source of truth for every "we took a traveler
 * here" story on the site. experience.html reads one entry from this array
 * by `?slug=` and renders the full article. column.html reads this same
 * array to list only entries with status "published" as cards.
 *
 * HOW TO ADD A NEW STORY:
 * 1. Duplicate one of the objects below.
 * 2. Fill in every field. Fields that need real material (photos, quotes,
 *    what actually happened) are marked "NEED INFO" — do not invent facts,
 *    replace the placeholder once the real material is sent.
 * 3. Set status to "published" only once the story sections are real and
 *    the images have been swapped from placeholders.
 * 4. Never add phone numbers, personal Instagram/WhatsApp DM links, full
 *    names of travelers, or any other contact/identifying detail. Nationality,
 *    an approximate age range, and traveler count are fine; that's it.
 *
 * PRICING NOTE: We deliberately do not publish historical prices we charged.
 * Pricing isn't finalized yet (internal target: ~¥5,000 gross profit per
 * hour), so no price appears in the public article — CTA points to
 * Instagram DM instead of a checkout/price.
 */

window.EXPERIENCES = [
  {
    slug: "shibuya-half-day",
    status: "draft", // flip to "published" once story sections below are filled from real material
    title: "NEED INFO — working title: A Half Day in Shibuya", // draft title, replace once story angle is set
    category: ["Tokyo"],
    location: "Shibuya, Tokyo",
    meetingPoint: "Shibuya",
    date: "2025-08-01",
    duration: "3 hours",
    startEnd: "13:00–16:00",
    nationality: "Israel",
    travelers: 2,
    ageRange: null, // NEED INFO
    heroImage: null, // NEED INFO — real photo from this tour
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null, // NEED INFO — what did they ask for / what problem were we solving
      whoWeMet: null, // NEED INFO — interests, purpose of trip, first time in Japan?
      whyThisPlace: null, // NEED INFO
      experience: null, // NEED INFO — timeline of what actually happened
      localDetails: null, // NEED INFO
      travelerReaction: null, // NEED INFO — only real quotes, never invented
      numaruPerspective: null // NEED INFO
    },
    gallery: [] // NEED INFO
  },
  {
    slug: "ueno-first-afternoon",
    status: "draft",
    title: "NEED INFO — working title: Showing Ueno to a First-Time Visitor",
    category: ["Local Life"],
    location: "Ueno, Tokyo",
    meetingPoint: "Ueno",
    date: "2025-08-16",
    duration: "2.5 hours",
    startEnd: "12:00–14:30",
    nationality: "Canada",
    travelers: 1,
    ageRange: "20s",
    heroImage: null,
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null,
      whoWeMet: null,
      whyThisPlace: null,
      experience: null,
      localDetails: null,
      travelerReaction: null,
      numaruPerspective: null
    },
    gallery: []
  },
  {
    slug: "nagatoro-day-trip",
    status: "draft",
    title: "NEED INFO — working title: A Full Day Outside Tokyo in Nagatoro",
    category: ["Nature", "Day Trip"],
    location: "Nagatoro, Saitama",
    meetingPoint: "Shinjuku (pickup) → Nagatoro",
    date: "2025-09-03",
    duration: "10 hours",
    startEnd: "10:00–20:00",
    nationality: "Poland / Belgium",
    travelers: 3,
    ageRange: "mid-20s",
    heroImage: null,
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null,
      whoWeMet: null,
      whyThisPlace: null,
      experience: null,
      localDetails: null,
      travelerReaction: null,
      numaruPerspective: null
    },
    gallery: []
  },
  {
    slug: "ueno-music-tour",
    status: "draft",
    title: "NEED INFO — working title: A Music-Loving Traveler in Ueno",
    category: ["Music"],
    location: "Ueno, Tokyo",
    meetingPoint: "Ueno Station, Park Exit",
    date: "2025-09-26",
    duration: "3 hours",
    startEnd: "13:00–16:00",
    nationality: "Poland",
    travelers: 1,
    ageRange: null,
    heroImage: null,
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null,
      whoWeMet: null,
      whyThisPlace: null,
      experience: null,
      localDetails: null,
      travelerReaction: null,
      numaruPerspective: null
    },
    gallery: []
  },
  {
    slug: "daikoku-night-tokyo",
    status: "draft",
    title: "NEED INFO — working title: Daikoku After Dark",
    category: ["Night Tokyo"],
    location: "Daikoku Parking Area, Yokohama",
    meetingPoint: "Shinjuku Gyoen (pickup) → Daikoku",
    date: "2025-10-09",
    duration: "3.5 hours",
    startEnd: "16:30–20:00",
    nationality: "France",
    travelers: 3,
    ageRange: "mid-20s",
    heroImage: null,
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null,
      whoWeMet: null,
      whyThisPlace: null,
      experience: null,
      localDetails: null,
      travelerReaction: null,
      numaruPerspective: null
    },
    gallery: []
  },
  {
    slug: "akihabara-ueno",
    status: "draft",
    title: "NEED INFO — working title: Akihabara and Ueno in One Afternoon",
    category: ["Culture", "Local Life"],
    location: "Akihabara & Ueno, Tokyo",
    meetingPoint: "Akihabara Station",
    date: "2025-11-17",
    duration: "4 hours",
    startEnd: "14:00–18:00",
    nationality: "Ukraine",
    travelers: 3,
    ageRange: "30s–40s",
    heroImage: null,
    quickOverviewNote: "NEED INFO",
    story: {
      opening: null,
      whoWeMet: null,
      whyThisPlace: null,
      experience: null,
      localDetails: null,
      travelerReaction: null,
      numaruPerspective: null
    },
    gallery: []
  }
];
