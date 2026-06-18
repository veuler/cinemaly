import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["animatemytravel-alternative"];

export const metadata = createSeoLandingMetadata(page);

export default function AnimateMyTravelAlternativePage() {
  return <SeoLandingPage page={page} />;
}
