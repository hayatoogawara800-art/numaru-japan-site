/**
 * Auto-populates a category page's article grid with real videos pulled
 * from the channel via the YouTube Data API v3, filtered by keyword match
 * on the video title, with working pagination (Prev / page numbers / Next).
 *
 * Long vs. Short handling:
 *  - "Long" videos (duration > SHORT_MAX_SECONDS) are always included if
 *    their title matches the category's keywords.
 *  - "Short" videos (duration <= SHORT_MAX_SECONDS, YouTube's own Shorts
 *    cutoff) are only included if they're performing well — specifically,
 *    their view count is at or above the median view count of all Shorts
 *    on the channel. Underperforming Shorts are filtered out.
 *
 * Setup:
 * 1. Each category page sets `window.CATEGORY_CONFIG = { tag, keywords }`
 *    in an inline <script> before this file is loaded.
 * 2. The page needs three elements with these IDs:
 *      #category-grid       - the article card grid
 *      #category-pagination - the pager buttons container
 *      #category-count      - the "N articles" label (optional)
 * 3. Re-upload this file (and the category pages) to GitHub — Vercel
 *    redeploys automatically.
 *
 * How it works: on page load, the browser pages through the channel's
 * entire uploads playlist, fetches duration + view count for every video,
 * keeps only videos whose title matches this category's keywords (applying
 * the Long/Short rule above), sorts by newest first, and renders them in
 * pages of PAGE_SIZE with real, working pagination.
 */

const YT_API_KEY = "AIzaSyBQtlPf7nlyKrDsChAm_WMtfS_SRhL7vl8";
const YT_CHANNEL_UPLOADS_PLAYLIST = "UUGfVKOgzqAayGEfzDxHOSCw"; // NUMARU Japan (@yudaiogajapan) uploads playlist
const PAGE_SIZE = 6;
const MAX_PLAYLIST_PAGES = 6; // 6 x 50 = up to 300 videos scanned
const SHORT_MAX_SECONDS = 180; // YouTube's current Shorts length cutoff (3 min)

let allMatchedVideos = [];
let currentPage = 1;

async function fetchAllChannelVideos() {
  let videos = [];
  let pageToken = "";
  for (let i = 0; i < MAX_PLAYLIST_PAGES; i++) {
    const url =
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YT_CHANNEL_UPLOADS_PLAYLIST}&key=${YT_API_KEY}` +
      (pageToken ? `&pageToken=${pageToken}` : "");
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);

    videos = videos.concat(
      data.items.map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
      }))
    );

    if (!data.nextPageToken) break;
    pageToken = data.nextPageToken;
  }
  return videos;
}

function parseISODuration(iso) {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  return hours * 3600 + minutes * 60 + seconds;
}

async function fetchVideoDetails(ids) {
  const details = {};
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${batch.join(
      ","
    )}&key=${YT_API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    data.items.forEach((item) => {
      details[item.id] = {
        durationSeconds: parseISODuration(item.contentDetails.duration),
        viewCount: parseInt(item.statistics.viewCount, 10) || 0,
      };
    });
  }
  return details;
}

function matchesCategory(title, keywords) {
  const t = title.toLowerCase();
  return keywords.some((kw) => t.includes(kw.toLowerCase()));
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

function renderPage(page) {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  const tag = window.CATEGORY_CONFIG.tag;
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = allMatchedVideos.slice(start, start + PAGE_SIZE);

  if (pageItems.length === 0) {
    grid.innerHTML =
      '<p style="color:var(--text-dim);grid-column:1/-1;">No videos found for this category yet.</p>';
    return;
  }

  grid.innerHTML = pageItems
    .map(
      (v) => `
    <div class="card">
      <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" style="display:block;color:inherit;text-decoration:none;">
        <div class="card-img">
          <span class="card-tag">${escapeHtml(tag)}</span>
          <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="">
        </div>
        <div class="card-body">
          <h3>${escapeHtml(v.title)}</h3>
          <div class="card-meta">${formatRelativeTime(v.publishedAt)}</div>
        </div>
      </a>
    </div>
  `
    )
    .join("");
}

function renderPagination(page) {
  const pagination = document.getElementById("category-pagination");
  if (!pagination) return;
  const totalPages = Math.max(1, Math.ceil(allMatchedVideos.length / PAGE_SIZE));

  let html = "";
  html += `<div class="page-btn${page === 1 ? " disabled" : ""}" data-page="${page - 1}">←</div>`;

  const startPage = Math.max(1, Math.min(page - 2, totalPages - 4));
  const firstPage = Math.max(1, startPage);
  const lastPage = Math.min(totalPages, firstPage + 4);
  for (let p = firstPage; p <= lastPage; p++) {
    html += `<div class="page-btn${p === page ? " active" : ""}" data-page="${p}">${p}</div>`;
  }

  html += `<div class="page-btn${page === totalPages ? " disabled" : ""}" data-page="${page + 1}">→</div>`;
  pagination.innerHTML = html;

  pagination.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = parseInt(btn.dataset.page, 10);
      if (!target || target < 1 || target > totalPages || target === currentPage) return;
      currentPage = target;
      renderPage(currentPage);
      renderPagination(currentPage);
      const hero = document.querySelector(".cat-hero");
      if (hero) hero.scrollIntoView({ behavior: "smooth" });
    });
  });
}

async function initCategoryFeed() {
  const grid = document.getElementById("category-grid");
  const config = window.CATEGORY_CONFIG;
  if (!grid || !config) return;

  if (!YT_API_KEY || YT_API_KEY === "YOUR_YOUTUBE_API_KEY_HERE") {
    grid.innerHTML =
      '<p style="color:var(--text-dim);grid-column:1/-1;">YouTube APIキーが未設定です。youtube-category-feed.js内のYT_API_KEYを設定してください。</p>';
    return;
  }

  grid.innerHTML = '<p style="color:var(--text-dim);grid-column:1/-1;">Loading videos...</p>';

  try {
    const basics = await fetchAllChannelVideos();
    const details = await fetchVideoDetails(basics.map((v) => v.id));

    const enriched = basics.map((v) => {
      const d = details[v.id] || { durationSeconds: 0, viewCount: 0 };
      return {
        ...v,
        durationSeconds: d.durationSeconds,
        viewCount: d.viewCount,
        isShort: d.durationSeconds > 0 && d.durationSeconds <= SHORT_MAX_SECONDS,
      };
    });

    // "Performing well" threshold for Shorts: median view count across
    // every Short on the channel (not just this category).
    const shortViewCounts = enriched
      .filter((v) => v.isShort)
      .map((v) => v.viewCount)
      .sort((a, b) => a - b);
    const shortsMedian =
      shortViewCounts.length > 0 ? shortViewCounts[Math.floor(shortViewCounts.length / 2)] : 0;

    allMatchedVideos = enriched
      .filter((v) => matchesCategory(v.title, config.keywords))
      .filter((v) => !v.isShort || v.viewCount >= shortsMedian)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    const countEl = document.getElementById("category-count");
    if (countEl) {
      countEl.textContent = `${allMatchedVideos.length} article${allMatchedVideos.length === 1 ? "" : "s"}`;
    }

    currentPage = 1;
    renderPage(currentPage);
    renderPagination(currentPage);
  } catch (err) {
    console.error("YouTube fetch failed:", err);
    grid.innerHTML = `<p style="color:var(--text-dim);grid-column:1/-1;">動画の読み込みに失敗しました（${escapeHtml(
      err.message
    )}）。API キーの設定を確認してください。</p>`;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", initCategoryFeed);
