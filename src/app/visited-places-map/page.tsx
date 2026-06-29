import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["visited-places-map"];

export const metadata = createSeoLandingMetadata(page);

export default function VisitedPlacesMapPage() {
  return <SeoLandingPage page={page} />;
}
