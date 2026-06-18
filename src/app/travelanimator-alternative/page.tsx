import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["travelanimator-alternative"];

export const metadata = createSeoLandingMetadata(page);

export default function TravelAnimatorAlternativePage() {
  return <SeoLandingPage page={page} />;
}
