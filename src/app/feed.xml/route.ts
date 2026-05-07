import { posts } from "@/data/posts";

const SITE_URL = "https://cinemaly.app";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822Date(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00.000Z`).toUTCString();
}

export function GET() {
  const newest = posts[0];
  const lastBuildDate = newest
    ? new Date(
        `${newest.lastModified ?? newest.date}T12:00:00.000Z`
      ).toUTCString()
    : new Date().toUTCString();

  const channelDescription =
    "Guides, comparisons, and travel stories about building cinematic, map-based trip documentation in your browser—no account, no cloud photo upload, and practical ideas for sharing routes and memories with Cinemaly.";

  const itemsXml = posts
    .map(
      (post) =>
        `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${rfc822Date(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml("Cinemaly Blog")}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
