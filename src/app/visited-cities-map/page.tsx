import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["visited-cities-map"];

export const metadata = createSeoLandingMetadata(page);

export default function VisitedCitiesMapPage() {
  return <SeoLandingPage page={page} />;
}
