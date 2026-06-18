import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["travel-map-replay-alternative"];

export const metadata = createSeoLandingMetadata(page);

export default function TravelMapReplayAlternativePage() {
  return <SeoLandingPage page={page} />;
}
