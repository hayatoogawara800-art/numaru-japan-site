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
    status: "published", // text + real photos confirmed; traveler count and roles confirmed by NUMARU (2025-09-16)
    title: "A Day in the Saitama Countryside With Two Polish Brothers and Their Belgian Friend",
    category: ["Nature", "Day Trip"],
    location: "Nagatoro & Kawagoe, Saitama",
    meetingPoint: "Shinjuku (pickup) → Nagatoro → Kawagoe",
    date: "2025-09-03",
    duration: "10 hours",
    startEnd: "10:00–20:00",
    nationality: "Poland / Belgium",
    // Confirmed by NUMARU: 3 travelers total. Two of the three (Poland) are
    // brothers; the third (Belgium) is a close friend traveling with them.
    travelers: 3,
    ageRange: "mid-to-late 20s",
    heroImage: "nagatoro-hero-riverside-group.jpg",
    quickOverviewNote: "A 10-hour countryside day trip from Tokyo, moving between the old streets of Kawagoe and the river rock formations of Nagatoro, with a hot spring at the end of the day.",
    story: {
      opening: "They wanted a full day away from Tokyo — real nature, small-town streets, and none of the usual crowds. So we met at Shinjuku at 10am and spent the next ten hours moving between two very different sides of Saitama.",
      whoWeMet: null,
      whyThisPlace: "Kawagoe is barely half an hour from central Tokyo but feels like a different era — a preserved Edo-period street lined with clay-walled warehouses and a wooden bell tower that's still rung by hand. Nagatoro, another hour or so further out, trades that for river valleys and flat rock formations along the Arakawa. Together the two gave the group a real contrast to the Tokyo they'd already seen.",
      experience: "The afternoon started in Nagatoro, on the iwadatami — the long, flat rock formations that line the Arakawa river — watching the traditional boats drift past. Along the way, the group picked up kyuri no ichihonzuke: a whole cucumber, pickled and served ice-cold on a stick, a local specialty that caught all three of them off guard. After a stop for sushi, the day shifted to Kawagoe's old town as evening set in, ending at the wooden Toki no Kane bell tower under a sky that had turned completely orange. The day itself ended at a hot spring — a proper reset after ten hours on the move.",
      localDetails: "Kyuri no ichihonzuke — a whole pickled cucumber served cold on a stick — is sold from small stands around Nagatoro and the wider Chichibu area. It's the kind of hyper-local snack that doesn't show up on most \"what to eat in Japan\" lists, and it only really comes up if you're walking the streets with someone who already knows to look for it.",
      travelerReaction: "\"It didn't feel like a typical tour at all — more like spending the day with a good friend! We laughed, shared stories, and enjoyed every moment together. Exploring the countryside and relaxing in the hot spring felt so special, and I'll definitely remember this day for a long time.\"",
      numaruPerspective: "Most people who come to Japan spend their days moving between neighborhoods in central Tokyo. But some of the best days we've had with travelers happen once we leave the city behind entirely. This was one of those days — no checklist, just two brothers and a good friend, some countryside air, and a hot spring at the end of it."
    },
    gallery: [
      "nagatoro-kawagoe-bell-tower-group.jpg",
      "nagatoro-iwadatami-landscape.jpg",
      "nagatoro-cucumber-snack.jpg",
      "nagatoro-group-closing.jpg"
    ]
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
    status: "published", // text drafted from IG post (@numarujapan, 湯島天満宮, 2025-11-26); real photos added 2025-09-16
    title: "A Conversation-First Afternoon in Tokyo With Three Friends From Ukraine",
    category: ["Culture", "Local Life"],
    location: "Akihabara & Ueno, Tokyo",
    meetingPoint: "Akihabara Station",
    date: "2025-11-17",
    duration: "4 hours",
    startEnd: "14:00–18:00",
    nationality: "Ukraine",
    travelers: 3,
    ageRange: "30s–40s",
    heroImage: "akihabara-hero-yushima-shrine.jpg",
    quickOverviewNote: "A conversation-focused afternoon moving from Akihabara through a quiet shrine, Ueno Park, and an izakaya dinner.",
    story: {
      opening: "They met us at Akihabara Station with four hours to spend. By their own account afterward, they weren't just there to see places — they wanted to talk, ask questions, and actually understand what they were looking at.",
      whoWeMet: "A close group of three friends from Ukraine.",
      whyThisPlace: "Akihabara draws people in for the electronics and anime stores, but four hours is enough to go further than that. So instead of stopping there, we moved on foot toward Ueno.",
      experience: "Across the four hours, the afternoon moved through: Ameyoko, the shopping street next to Ueno, for its lively market and local, unpolished atmosphere; a quiet shrine — Yushima Tenmangu, with its rows of white lanterns and red banners — where the crowds thinned out and we could slow down; Ueno Park, decked out for the season with Christmas lights and a small lineup of Santa Claus statues, for open green space after the density of the shopping streets; an izakaya dinner, where most of the actual conversation happened; and a walk through an older, traditional part of town, on streets that still look like an earlier Tokyo.",
      localDetails: "Yushima Tenmangu is easy to miss if you don't already know it's there — a shrine known for its wisteria and plum blossoms, tucked a short walk from Ueno's busier streets, and usually far quieter than the shrines most first-time visitors get taken to.",
      travelerReaction: "\"Thanks a lot for the tour — and even more for the conversations and for answering all our questions. We spent the day discovering Tokyo not only through its sights, but through stories, culture, and genuine dialogue... A conversation-focused tour that helped us understand so many different aspects of Japan. Every moment felt meaningful.\"",
      numaruPerspective: "Akihabara and Ueno both show up on almost every Tokyo itinerary, usually as two separate stops squeezed between bigger sights. What made this afternoon different wasn't the places themselves — it was treating four hours as one unhurried conversation that happened to move through a market, a shrine, a park, and a dinner table. That's usually what people remember, more than the name of the shrine."
    },
    gallery: [
      "akihabara-shrine-selfie.jpg",
      "akihabara-ueno-park-christmas.jpg",
      "akihabara-izakaya-dinner.jpg",
      "akihabara-group-closing.jpg"
    ]
  }
];
