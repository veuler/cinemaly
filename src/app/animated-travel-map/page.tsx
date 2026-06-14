import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["animated-travel-map"];

export const metadata = createSeoLandingMetadata(page);

export default function AnimatedTravelMapPage() {
  return <SeoLandingPage page={page} />;
}
