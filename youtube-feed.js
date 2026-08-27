/**
 * Homepage YouTube feeds, powered by the YouTube Data API v3:
 *  - "Latest Stories"  -> #latest-grid   (newest uploads, auto-tagged by category)
 *  - "Most Watched"    -> #most-watched-grid (top uploads by view count)
 *
 * Setup:
 * 1. Get a free API key (see README.md for step-by-step instructions).
 * 2. Paste it below as YT_API_KEY.
 * 3. Re-upload this file to GitHub — Vercel redeploys automatically.
 *
 * How it works: on every page load, the browser asks YouTube for this
 * channel's recent uploaded videos (snippet + stats + duration), then
 * builds both sections from that single fetch. No manual editing needed
 * when new videos are published.
 *
 * Long/Short + "performing well" rule (same as the category pages):
 * all long-form videos are eligible; Shorts only make the Latest Stories
 * list if their view count is at/above the median view count of the
 * Shorts in this batch.
 */

const YT_API_KEY = "AIzaSyBQtlPf7nlyKrDsChAm_WMtfS_SRhL7vl8";
const YT_CHANNEL_UPLOADS_PLAYLIST = "UUGfVKOgzqAayGEfzDxHOSCw"; // NUMARU Japan (@yudaiogajapan) uploads playlist
const YT_MAX_VIDEOS = 9; // how many cards to show per section
const SHORT_MAX_SECONDS = 180;

// Cache the homepage's fetched video batch for up to 1 hour, so repeat
// visits / reloads within that window don't re-spend YouTube API quota.
const HOMEPAGE_VIDEOS_CACHE_KEY = "numaru_yt_homepage_videos_v1";
const CACHE_MAX_AGE_MS = 60 * 60 * 1000; // 1 hour

function getCached(key, maxAgeMs) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.timestamp !== "number" || !Array.isArray(parsed.data)) return null;
    if (Date.now() - parsed.timestamp > maxAgeMs) return null;
    return parsed.data;
  } catch (e) {
    return null;
  }
}

function setCached(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  } catch (e) {
    // localStorage unavailable (private browsing, storage full, etc.) — fine to skip caching.
  }
}

// Keyword groups used to auto-tag each video for the "Latest Stories" cards.
// Order matters: the first group whose keywords match the title wins.
const LATEST_TAG_GROUPS = [
  {
    tag: "Quitting Salaryman Life",
    keywords: ["quit", "salaryman", "zero income", "harassment", "zangyo", "overtime", "burned me out", "no choice", "workplace"],
  },
  {
    tag: "Real Life Vlog",
    keywords: ["leaving japan", "living together", "typhoon", "shibuya", "pachinko", "meeting someone", "random salaryman", "casino", "morning routine"],
  },
  {
    tag: "Japanese Food",
    keywords: ["eat", "food", "breakfast", "sushi", "cooking", "chef", "sake", "brewery"],
  },
  {
    tag: "Countryside",
    keywords: ["countryside", "grandma", "great-grandma", "rural", "hiroshima", "okinawa", "shizuoka", "escaped"],
  },
];
const DEFAULT_TAG = "Real Life Vlog";

function parseISODuration(iso) {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  return hours * 3600 + minutes * 60 + seconds;
}

function tagForTitle(title) {
  const t = title.toLowerCase();
  const group = LATEST_TAG_GROUPS.find((g) => g.keywords.some((kw) => t.includes(kw.toLowerCase())));
  return group ? group.tag : DEFAULT_TAG;
}

function formatRelativeTime(dateStr) {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  }
  if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

function firstDescriptionLine(desc) {
  if (!desc) return "";
  const line = desc.split("\n")[0].trim();
  if (line.length <= 100) return line;
  return line.slice(0, 97).trim() + "…";
}

function formatViews(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

async function fetchHomepageFeeds() {
  const latestGrid = document.getElementById("latest-grid");
  const mostWatchedGrid = document.getElementById("most-watched-grid");
  if (!latestGrid && !mostWatchedGrid) return;

  if (!YT_API_KEY || YT_API_KEY === "YOUR_YOUTUBE_API_KEY_HERE") {
    const msg =
      '<p style="color:var(--text-dim);grid-column:1/-1;">YouTube APIキーが未設定です。youtube-feed.js内のYT_API_KEYを設定してください。</p>';
    if (latestGrid) latestGrid.innerHTML = msg;
    if (mostWatchedGrid) mostWatchedGrid.innerHTML = msg;
    return;
  }

  try {
    let enriched = getCached(HOMEPAGE_VIDEOS_CACHE_KEY, CACHE_MAX_AGE_MS);

    if (!enriched) {
      // 1. Get recent uploaded video IDs from the channel's uploads playlist
      const playlistRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YT_CHANNEL_UPLOADS_PLAYLIST}&key=${YT_API_KEY}`
      );
      const playlistData = await playlistRes.json();
      if (playlistData.error) throw new Error(playlistData.error.message);

      const videoIds = playlistData.items
        .map((item) => item.snippet.resourceId.videoId)
        .join(",");

      // 2. Get view counts, duration + thumbnails for those videos
      const videosRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${YT_API_KEY}`
      );
      const videosData = await videosRes.json();
      if (videosData.error) throw new Error(videosData.error.message);

      enriched = videosData.items.map((v) => {
        const durationSeconds = parseISODuration(v.contentDetails.duration);
        return {
          id: v.id,
          title: v.snippet.title,
          description: v.snippet.description || "",
          publishedAt: v.snippet.publishedAt,
          thumbnail: v.snippet.thumbnails.high ? v.snippet.thumbnails.high.url : v.snippet.thumbnails.default.url,
          views: parseInt(v.statistics.viewCount, 10) || 0,
          durationSeconds,
          isShort: durationSeconds > 0 && durationSeconds <= SHORT_MAX_SECONDS,
        };
      });

      setCached(HOMEPAGE_VIDEOS_CACHE_KEY, enriched);
    }

    // "Most Watched": simple top-N by view count (unchanged behavior).
    if (mostWatchedGrid) {
      const topWatched = [...enriched].sort((a, b) => b.views - a.views).slice(0, YT_MAX_VIDEOS);
      mostWatchedGrid.innerHTML = topWatched
        .map(
          (v) => `
        <div class="card">
          <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" class="card-link">
            <div class="card-img">
              <img src="${v.thumbnail}" alt="">
            </div>
            <div class="card-body">
              <h3>${escapeHtml(v.title)}</h3>
              <div class="card-footer">
                <div class="card-meta">${formatViews(v.views)} views</div>
                <span class="card-tag">Most Watched</span>
              </div>
            </div>
          </a>
        </div>
      `
        )
        .join("");
    }

    // "Latest Stories": newest first, Shorts only included if performing
    // well (view count at/above the median of Shorts in this batch).
    if (latestGrid) {
      const shortViewCounts = enriched
        .filter((v) => v.isShort)
        .map((v) => v.views)
        .sort((a, b) => a - b);
      const shortsMedian = shortViewCounts.length > 0 ? shortViewCounts[Math.floor(shortViewCounts.length / 2)] : 0;

      const latest = enriched
        .filter((v) => !v.isShort || v.views >= shortsMedian)
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, YT_MAX_VIDEOS);

      latestGrid.innerHTML = latest
        .map(
          (v) => `
        <div class="card">
          <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" class="card-link">
            <div class="card-img">
              <img src="${v.thumbnail}" alt="">
            </div>
            <div class="card-body">
              <h3>${escapeHtml(v.title)}</h3>
              <p>${escapeHtml(firstDescriptionLine(v.description))}</p>
              <div class="card-footer">
                <div class="card-meta">${formatRelativeTime(v.publishedAt)}</div>
                <span class="card-tag">${escapeHtml(tagForTitle(v.title))}</span>
              </div>
            </div>
          </a>
        </div>
      `
        )
        .join("");
    }
  } catch (err) {
    console.error("YouTube fetch failed:", err);
    const msg = `<p style="color:var(--text-dim);grid-column:1/-1;">動画の読み込みに失敗しました（${escapeHtml(
      err.message
    )}）。API キーの設定を確認してください。</p>`;
    if (latestGrid) latestGrid.innerHTML = msg;
    if (mostWatchedGrid) mostWatchedGrid.innerHTML = msg;
  }
}

document.addEventListener("DOMContentLoaded", fetchHomepageFeeds);
