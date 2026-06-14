import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["travel-map-video-maker"];

export const metadata = createSeoLandingMetadata(page);

export default function TravelMapVideoMakerPage() {
  return <SeoLandingPage page={page} />;
}
