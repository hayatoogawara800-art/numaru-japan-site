/**
 * NUMARU Japan — SEO Guide articles (Column > Guides)
 *
 * This is the second content type in Column, alongside Experience Stories
 * (experiences-data.js). Guides are NOT tied to a real trip with a real
 * traveler — they're general-knowledge, SEO-oriented listicle guides aimed
 * at a specific reader segment, generated from the content strategy in
 * numaru-japan-traffic-content-prompt.md (see outputs folder history).
 *
 * guide.html reads one entry from this array by `?slug=` and renders the
 * full article. column.html reads this same array (merged with
 * experiences-data.js) to list "published" guides as cards alongside
 * Experience Stories.
 *
 * RULES (same as Experience Stories):
 * - No invented specific business names/prices/hours presented as verified
 *   fact. Keep claims general ("many stalls charge under ¥500") or mark
 *   [NEED INFO] before publishing anything more specific.
 * - No personal/identifying info.
 * - Prices as ranges only, never a confident single number.
 * - CTA always points to Instagram DM or an internal site link — never a
 *   confirmed booking/price flow.
 *
 * KEYWORD DISCLAIMER: primaryKeyword / secondaryKeywords below are working
 * hypotheses based on general long-tail search patterns and season, NOT
 * pulled from live Search Console / Google Trends data (no such connector
 * is available yet). Re-validate before scaling past this test batch.
 */

window.GUIDES = [
  {
    slug: "cheap-eats-tokyo-under-1000-yen",
    // Pulled back to draft: no real NUMARU photo matches this specific list
    // (it doesn't overlap with a documented trip like the others below), and
    // we don't use generic stock "Japan-ish" photos on this site. Re-publish
    // once we have real photos of an actual cheap-eats outing, or narrow the
    // article to a specific real place we've photographed.
    status: "draft",
    segment: "budget-2030",
    segmentLabel: "For budget-conscious travelers",
    primaryKeyword: "cheap eats tokyo under 1000 yen",
    secondaryKeywords: ["budget food tokyo 2026", "where to eat cheap in tokyo as a tourist", "tokyo food under $7"],
    category: ["Local Life", "Tokyo"],
    title: "Where a Full Meal in Tokyo Still Costs Under ¥1,000 (2026 Guide)",
    metaDescription: "Tokyo doesn't have to be expensive. Here are 5 real neighborhoods where a full, satisfying meal still costs under ¥1,000 — no tourist markup required.",
    heroImage: null,
    hook: "Tokyo has a reputation for being expensive, and parts of it are. But the neighborhoods where locals actually eat on a weekday lunch break tell a different story — standing soba counters, market alleys, and convenience-store-adjacent chains where a full meal still comes in under ¥1,000. As more travelers plan Japan trips around tighter budgets in 2026, these are the areas worth knowing before you land.",
    items: [
      {
        heading: "Ameyoko Market, Ueno",
        body: "Ameyoko is a shopping street between Ueno and Okachimachi stations, and it's one of the few places in central Tokyo where street food, seafood stalls, and small standing bars sit side by side at genuinely local prices. It's loud, a little chaotic, and exactly the kind of unpolished atmosphere budget travelers say they came to Japan for rather than a curated food court."
      },
      {
        heading: "Standing soba and udon counters near major stations",
        body: "Almost every major JR station in Tokyo has at least one standing soba or udon counter tucked near the ticket gates, aimed at commuters who need lunch in under ten minutes. A bowl typically runs in the ¥350–¥600 range. They're not designed for tourists, which is exactly why they're worth seeking out — no English menu, no wait, no markup."
      },
      {
        heading: "Conveyor-belt sushi chains",
        body: "Kaiten-zushi (conveyor-belt sushi) chains are a genuinely Japanese way to eat well on a budget, with plates typically starting around ¥100–¥150. Chains have locations across nearly every ward in Tokyo, and eating at one is as much a cultural experience as it is a budget move."
      },
      {
        heading: "Convenience store meals, upgraded",
        body: "It's become a running joke among longer-term visitors that Japanese convenience stores (konbini) have better food than they have any right to. Onigiri, fresh sandwiches, and hot counter food at 7-Eleven, FamilyMart, or Lawson can make for a genuinely good, filling meal for a few hundred yen — useful to know on days when a sit-down meal isn't in the plan."
      },
      {
        heading: "Local shotengai (shopping streets)",
        body: "Nearly every residential Tokyo neighborhood has its own shotengai — a covered, old-school shopping street with small family-run restaurants that have been serving the same set menus for decades. They rarely show up in guidebooks because they're not built for tourists, which is exactly what makes them worth a detour if you're near one."
      }
    ],
    numaruPerspective: "We hear the same question a lot from travelers before they land: \"is Tokyo going to blow my budget?\" The honest answer is that it can, if you only eat where the guidebooks point. The places above are where the city actually eats on a normal day, and they tend to be both cheaper and more interesting than the alternative.",
    ctaText: "Want to know which of these fits your actual itinerary? Message us on Instagram and we'll point you in the right direction. For more real food spots we've actually eaten at, see our Japanese Food category.",
    ctaHref: "category-food.html?utm_source=column&utm_segment=budget-2030&utm_article=cheap-eats-tokyo-under-1000-yen",
    ctaLabel: "See our Japanese Food category",
    tags: ["Local Life", "Tokyo"]
  },
  {
    slug: "quiet-tokyo-shrines-locals-visit",
    status: "published",
    segment: "culture-curious",
    segmentLabel: "For culture & history lovers",
    primaryKeyword: "hidden shrines tokyo locals actually visit",
    secondaryKeywords: ["quiet temples tokyo no crowds", "off the beaten path tokyo culture", "yushima tenmangu tokyo"],
    category: ["Culture"],
    title: "5 Tokyo Shrines Locals Visit That Most Tourists Walk Right Past",
    metaDescription: "Skip the crowds at Senso-ji. These 5 shrines and quiet cultural spots in Tokyo are where locals actually go — and most visitors never hear about them.",
    // Real photo reuse: this is the same Yushima Tenmangu we visited and
    // photographed for the Akihabara & Ueno experience story — genuinely
    // the place this item talks about, not a generic stand-in.
    heroImage: "akihabara-hero-yushima-shrine.jpg",
    hook: "Tokyo's best-known shrines and temples are worth seeing, but they're also the reason so many visitors leave feeling like they experienced Japan through a crowd of other tourists' shoulders. The quieter alternative is real, and it's not hidden — it's just not marketed. Here are five spots that reward a little extra walking.",
    items: [
      {
        heading: "Yushima Tenmangu, Ueno",
        body: "Yushima Tenmangu is a shrine known for its wisteria and plum blossoms, a short walk from Ueno's busier streets and usually far quieter than the shrines most first-time visitors get taken to. Rows of white lanterns and red banners make it visually striking without needing a festival day to justify the visit. We actually walked a small group through here as part of a longer afternoon — you can read that story in our Akihabara & Ueno column piece.",
        photo: "akihabara-shrine-selfie.jpg"
      },
      {
        heading: "Neighborhood shrines with no name recognition",
        body: "Nearly every Tokyo neighborhood has at least one small shrine that never appears on a \"top things to do\" list, tucked between apartment buildings or at the end of a residential side street. These aren't secret in the sense of being hard to find — they're just not built for tourism, which is exactly what makes the atmosphere different."
      },
      {
        heading: "Old shitamachi (old-town) streets",
        body: "Areas that retain their shitamachi character — narrow lanes, older wooden buildings, small family-run shops — give a sense of pre-modern Tokyo that the reconstructed \"historic\" districts built for tourists don't quite replicate. They're best explored slowly and without a fixed checklist."
      },
      {
        heading: "Craft and artisan workshops",
        body: "Tokyo still has working artisans — woodblock printers, knife sharpeners, textile dyers — many of whom operate out of small storefronts rather than tourist-facing studios. Finding them usually takes a local pointing you in the right direction rather than a search engine."
      },
      {
        heading: "University campuses with public-facing culture",
        body: "Some of Tokyo's national universities have public galleries, museums, or open campus areas connected to their arts programs, and they're free or nearly free to walk through. They're a low-key way to see a side of Japanese cultural life that isn't performed for visitors."
      }
    ],
    numaruPerspective: "The shrines everyone's heard of are famous for a reason, but \"famous\" and \"representative of daily Japanese life\" aren't the same thing. The quieter spots are usually where you actually get a sense of how these places function when no one's taking a photo of them.",
    ctaText: "If you want a full afternoon built around this kind of quieter, culture-first pace, message us on Instagram — this is close to what we actually plan for guests. You can also read the full story of a real afternoon like this in our Akihabara & Ueno piece.",
    ctaHref: "experience.html?slug=akihabara-ueno&utm_source=column&utm_segment=culture-curious&utm_article=quiet-tokyo-shrines-locals-visit",
    ctaLabel: "Read the Akihabara & Ueno story",
    tags: ["Culture", "Local Life"]
  },
  {
    slug: "easy-nature-day-trips-from-tokyo",
    status: "published",
    segment: "nature-daytrip",
    segmentLabel: "For a day away from the city",
    primaryKeyword: "easy day trip from tokyo no car needed",
    secondaryKeywords: ["nature day trip tokyo train", "nagatoro day trip from tokyo", "countryside near tokyo one day"],
    category: ["Nature", "Day Trip"],
    title: "5 Easy Day Trips From Tokyo When You Just Need to See Trees",
    metaDescription: "You don't need a rental car to get out of Tokyo. These 5 nature day trips are reachable by train and worth the full day away from the city.",
    // Real photo reuse: the actual Nagatoro riverside group shot from our
    // real 10-hour Nagatoro & Kawagoe trip — this is the first item below.
    heroImage: "nagatoro-hero-riverside-group.jpg",
    hook: "A week of neon and train announcements is enough to make anyone want a day that's mostly sky, trees, and water. The good news is that real countryside isn't far from Tokyo, and most of it doesn't require a car — just a train ticket and a full day.",
    items: [
      {
        heading: "Nagatoro, Saitama",
        body: "Nagatoro sits about two hours from central Tokyo and trades the city entirely for river valleys and the iwadatami — long, flat rock formations that line the Arakawa river. It's a full-day trip rather than a half-day detour, but that's part of the appeal: enough time to actually slow down rather than rush between two stops. We took a small group here for a full ten-hour day — the real story, photos included, is in our Nagatoro column piece.",
        photo: "nagatoro-iwadatami-landscape.jpg"
      },
      {
        heading: "Kawagoe, Saitama",
        body: "Kawagoe is barely half an hour from central Tokyo but feels like a different era, with a preserved Edo-period street lined with clay-walled warehouses and a wooden bell tower that's still rung by hand. It pairs well with a nature-focused day trip further out, since it's easy to fit in on the way back toward Tokyo."
      },
      {
        heading: "Lake Kawaguchi and the Fuji Five Lakes, Yamanashi",
        body: "For travelers who want a genuine Mt. Fuji view without a multi-day itinerary, the Fuji Five Lakes area in Yamanashi is reachable in a long day trip from Tokyo, with lake-side paths and mountain scenery that don't require any real hiking to enjoy."
      },
      {
        heading: "Okutama, Western Tokyo",
        body: "Okutama is technically still within Tokyo's prefectural borders, but it feels nothing like it — mountains, a reservoir, and hiking trails that range from easy walks to genuine day hikes. It's the closest real nature to central Tokyo without leaving the prefecture."
      },
      {
        heading: "Kamakura, Kanagawa",
        body: "Kamakura mixes coastline with temple culture and old hiking trails connecting its shrines, making it one of the more flexible day trips depending on whether you want a beach afternoon, a temple walk, or both."
      }
    ],
    numaruPerspective: "Most people who come to Japan spend their whole trip moving between Tokyo neighborhoods. Some of the best days we've had with travelers happen once we leave the city behind entirely — no checklist, just open space and a slower pace for a few hours.",
    ctaText: "If a day like this fits what you're looking for, message us on Instagram and we can talk through which of these actually matches your trip. Or see the full account of a real countryside day trip below.",
    ctaHref: "experience.html?slug=nagatoro-day-trip&utm_source=column&utm_segment=nature-daytrip&utm_article=easy-nature-day-trips-from-tokyo",
    ctaLabel: "Read the Nagatoro day trip story",
    tags: ["Nature", "Day Trip"]
  },
  {
    slug: "tokyo-night-scenes-not-shibuya",
    status: "published",
    segment: "nightlife-subculture",
    segmentLabel: "For night owls & subculture fans",
    primaryKeyword: "tokyo night spots not shibuya",
    secondaryKeywords: ["daikoku pa car meet tokyo", "unique nightlife tokyo off the beaten path", "japan car culture spots"],
    category: ["Night Tokyo", "Music"],
    title: "5 Tokyo Night Scenes That Have Nothing to Do With Shibuya Crossing",
    metaDescription: "Shibuya Crossing at night is a photo op. These 5 Tokyo night scenes are where actual subcultures gather — car meets, underground music, and more.",
    // Real photo reuse: the actual Daikoku PA video thumbnail — the first
    // item below is literally this trip, filmed and published by NUMARU.
    heroImage: "https://img.youtube.com/vi/y9X0C1CJ8w8/maxresdefault.jpg",
    hook: "Shibuya Crossing at night is worth seeing once, but it's a photo op more than an experience. The more interesting version of Tokyo after dark happens in scattered, specific places where a genuine subculture — not a tourist crowd — actually gathers.",
    items: [
      {
        heading: "Daikoku Parking Area, Yokohama",
        body: "Daikoku PA is a rest stop on the Yokohama Bayshore Route that's been a nighttime gathering spot for car enthusiasts for decades, and it's the closest real-world reference point most car culture fans have for \"Tokyo Drift.\" It's a public parking area, not an organized event — anyone can drive up on any given night. We actually went and asked the Japanese car owners there why they keep coming back — the full story (and video) is in our Daikoku PA column piece."
      },
      {
        heading: "Koenji, for underground live music",
        body: "Koenji has a long-running reputation as one of Tokyo's centers for underground and DIY music venues, with small live houses that rarely appear on mainstream \"Tokyo nightlife\" lists."
      },
      {
        heading: "Golden Gai, Shinjuku",
        body: "Golden Gai is a small grid of narrow alleys packed with tiny, individually-run bars, many seating only a handful of people. It's touristed enough to be known, but the individual bars themselves still function as genuine neighborhood spots rather than performances for visitors."
      },
      {
        heading: "Nakano Broadway at night",
        body: "Nakano Broadway is better known as a daytime destination for collectibles and subculture shopping, but the surrounding area at night has its own quieter, more local energy once the day-trip crowd has cleared out."
      },
      {
        heading: "Late-night ramen counters",
        body: "Tokyo's genuine late-night food culture happens at small ramen counters that don't open until the evening and stay busy well past midnight, serving a mix of shift workers, night owls, and the occasional traveler who wandered in at the right time."
      }
    ],
    numaruPerspective: "Daikoku shows up in enough car culture content online that it's easy to assume what you're seeing is staged. It isn't — it's a parking area that a certain crowd still shows up to, night after night, for reasons that are more personal than most people expect once you actually ask.",
    ctaText: "Curious which of these fits a night out on your trip? Message us on Instagram. You can also watch the actual video from our night at Daikoku PA below.",
    ctaHref: "experience.html?slug=daikoku-night-tokyo&utm_source=column&utm_segment=nightlife-subculture&utm_article=tokyo-night-scenes-not-shibuya",
    ctaLabel: "Watch the Daikoku PA story",
    tags: ["Night Tokyo", "Music"]
  },
  {
    slug: "tokyo-first-time-visitor-questions-answered",
    // Pulled back to draft: this is general first-timer Q&A, not tied to a
    // specific photographed place or trip, so there's no real NUMARU photo
    // that genuinely matches it — and we don't use generic stock "Japan-ish"
    // photos on this site. Re-publish once we have a real photo that fits
    // (e.g. a candid shot of a first-time traveler somewhere in Tokyo), or
    // narrow this to a specific real outing we've documented.
    status: "draft",
    segment: "first-timer-family",
    segmentLabel: "For first-time visitors",
    primaryKeyword: "tokyo first time visitor tips 2026",
    secondaryKeywords: ["what to know before visiting tokyo first time", "tokyo travel tips honest", "is tokyo overwhelming for first timers"],
    category: ["Tokyo", "Local Life"],
    title: "5 Things First-Time Visitors to Tokyo Always Ask Us, Answered Honestly",
    metaDescription: "The honest answers to what first-time visitors to Tokyo actually ask us before landing — no exaggeration, no scare tactics.",
    heroImage: null,
    hook: "Every first-time visitor to Tokyo asks some version of the same handful of questions before they land. Most travel content either overpromises (\"Tokyo will change your life\") or overwarns (\"you'll get lost and no one will help you\"). Here's what we actually tell people.",
    items: [
      {
        heading: "\"Is Tokyo going to be too overwhelming?\"",
        body: "It can feel intense for the first day or two — the volume of signage, the size of stations — but it settles quickly. Tokyo is also unusually easy to navigate once you understand that most of it is organized around train lines rather than street names."
      },
      {
        heading: "\"Do I need to speak Japanese?\"",
        body: "No, though a handful of polite phrases go a long way. Most major stations, restaurants, and stores in central Tokyo have enough English signage or picture menus to get by, and translation apps handle the rest."
      },
      {
        heading: "\"Is it actually safe?\"",
        body: "Yes, by most measures more so than what many first-time visitors are used to. That said, \"safe\" doesn't mean there are no rules to be aware of — quiet-hours norms on trains, for instance, are taken more seriously than in many other major cities."
      },
      {
        heading: "\"How much should I actually budget per day?\"",
        body: "This varies enormously depending on travel style, but a mid-range traveler covering food, local transport, and casual sightseeing can get by more affordably than Tokyo's reputation suggests, especially if a few meals come from the budget-friendly spots locals actually use rather than tourist-district restaurants."
      },
      {
        heading: "\"Should I plan every day in advance?\"",
        body: "Less than you'd think. Tokyo rewards some unplanned wandering, and over-scheduling tends to produce the \"checklist tourism\" feeling that a lot of first-time visitors say they wanted to avoid."
      }
    ],
    numaruPerspective: "Most of the anxiety first-time visitors have about Tokyo comes from either exaggerated warnings or exaggerated hype — the reality in the middle is a lot more manageable, and honestly more interesting, than either version.",
    ctaText: "If you're planning a first trip and want it built around what actually fits you rather than a generic checklist, message us on Instagram. You can also browse real stories from people we've spent time with in Tokyo in our Column section.",
    ctaHref: "column.html?utm_source=column&utm_segment=first-timer-family&utm_article=tokyo-first-time-visitor-questions-answered",
    ctaLabel: "Browse more Column stories",
    tags: ["Tokyo", "Local Life"]
  }
];
