/**
 * "Most Watched" auto-updating section, powered by the YouTube Data API v3.
 *
 * Setup:
 * 1. Get a free API key (see README.md for step-by-step instructions).
 * 2. Paste it below as YT_API_KEY.
 * 3. Re-upload this file to GitHub — Vercel redeploys automatically.
 *
 * How it works: on every page load, the browser asks YouTube for this
 * channel's uploaded videos + view counts, sorts them by view count,
 * and renders the top ones into the #most-watched-grid container.
 * No manual editing needed when new videos are published.
 */

const YT_API_KEY = "AIzaSyBQtlPf7nlyKrDsChAm_WMtfS_SRhL7vl8";
const YT_CHANNEL_UPLOADS_PLAYLIST = "UUGfVKOgzqAayGEfzDxHOSCw"; // NUMARU Japan (@yudaiogajapan) uploads playlist
const YT_MAX_VIDEOS = 9; // how many cards to show

async function fetchMostWatched() {
  const grid = document.getElementById("most-watched-grid");
  if (!grid) return;

  if (!YT_API_KEY || YT_API_KEY === "YOUR_YOUTUBE_API_KEY_HERE") {
    grid.innerHTML =
      '<p style="color:var(--text-dim);grid-column:1/-1;">YouTube APIキーが未設定です。youtube-feed.js内のYT_API_KEYを設定してください。</p>';
    return;
  }

  try {
    // 1. Get recent uploaded video IDs from the channel's uploads playlist
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YT_CHANNEL_UPLOADS_PLAYLIST}&key=${YT_API_KEY}`
    );
    const playlistData = await playlistRes.json();
    if (playlistData.error) throw new Error(playlistData.error.message);

    const videoIds = playlistData.items
      .map((item) => item.snippet.resourceId.videoId)
      .join(",");

    // 2. Get view counts + thumbnails for those videos
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${YT_API_KEY}`
    );
    const videosData = await videosRes.json();
    if (videosData.error) throw new Error(videosData.error.message);

    // 3. Sort by view count, descending
    const sorted = videosData.items
      .map((v) => ({
        id: v.id,
        title: v.snippet.title,
        thumbnail: v.snippet.thumbnails.high
          ? v.snippet.thumbnails.high.url
          : v.snippet.thumbnails.default.url,
        views: parseInt(v.statistics.viewCount, 10) || 0,
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, YT_MAX_VIDEOS);

    // 4. Render into the grid
    grid.innerHTML = sorted
      .map(
        (v) => `
      <div class="card">
        <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener" style="display:block;color:inherit;text-decoration:none;">
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
  } catch (err) {
    console.error("YouTube fetch failed:", err);
    grid.innerHTML = `<p style="color:var(--text-dim);grid-column:1/-1;">動画の読み込みに失敗しました（${escapeHtml(
      err.message
    )}）。API キーの設定を確認してください。</p>`;
  }
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

document.addEventListener("DOMContentLoaded", fetchMostWatched);
