export const APP_STORE_URL =
  "https://apps.apple.com/us/app/cinemaly/id6763919834";

export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.veulerv.cinemaly";

export const DOWNLOAD_PAGE_URL = "https://cinemaly.app/download";

export const storeLinks = {
  ios: APP_STORE_URL,
  android: GOOGLE_PLAY_URL,
  download: DOWNLOAD_PAGE_URL,
} as const;

export type StorePlatform = "ios" | "android";

type StoreTrackingOptions = {
  platform: StorePlatform;
  campaign?: string;
  content?: string;
};

export function getTrackedStoreUrl(
  baseUrl: string,
  { platform, campaign = "download", content = "store_button" }: StoreTrackingOptions,
) {
  if (!baseUrl.trim()) return "";

  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", "cinemaly_site");
  url.searchParams.set("utm_medium", "seo");
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_content", `${content}_${platform}`);

  return url.toString();
}
