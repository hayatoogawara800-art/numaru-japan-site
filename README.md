# NUMARU Japan Website (Prototype)

Static HTML prototype for the NUMARU Japan website, styled after abroadinjapan.com.

## Pages

- `index.html` — Home
- `category_mockup.html` — Category: Quitting Salaryman Life
- `category-food.html` — Category: Japanese Food
- `category-countryside.html` — Category: Countryside
- `category-vlog.html` — Category: Real Life Vlog
- `category-izu.html` — Category: Izu Renovation (coming soon)
- `article_mockup.html` — Sample article detail page
- `youtube-feed.js` — Powers the "Most Watched" auto-updating section on the home page

## "Most Watched" section (auto-updates from YouTube)

The home page has a "Most Watched" section that automatically pulls the channel's videos from YouTube and sorts them by view count — no manual editing needed when new videos are published.

This requires a free YouTube Data API v3 key.

1. Go to https://console.cloud.google.com/ and sign in with your Google account (the same one that owns the YouTube channel, or any Google account).
2. Create a new project (top bar → "Select a project" → "New Project"). Give it any name, e.g. "numaru-japan-site".
3. Go to "APIs & Services" → "Library", search for "YouTube Data API v3", and click "Enable".
4. Go to "APIs & Services" → "Credentials" → "Create Credentials" → "API key". Copy the key that appears.
5. (Recommended) Click "Edit API key" on the key you just made, and under "Application restrictions" choose "Websites" / "HTTP referrers", then add your site's URL (e.g. `https://numaru-japan-site4.vercel.app/*`). This stops other sites from using your key.
6. Open `youtube-feed.js` and replace `YOUR_YOUTUBE_API_KEY_HERE` with the key you copied.
7. Re-upload the changed `youtube-feed.js` to GitHub. Vercel redeploys automatically.

The free tier covers 10,000 requests/day, which is far more than a small site needs.

## Local preview

No build step is required. Either open `index.html` directly in a browser, or run:

```
npm run dev
```

## Deployment

This is a plain static site (no framework, no build command). It deploys on Vercel as-is — see the deployment steps provided separately.
