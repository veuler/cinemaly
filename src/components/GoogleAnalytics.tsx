import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

const GA_MEASUREMENT_ID = "G-KH66NBT6TZ";

export default function GoogleAnalytics() {
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
