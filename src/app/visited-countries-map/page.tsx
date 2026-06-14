import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["visited-countries-map"];

export const metadata = createSeoLandingMetadata(page);

export default function VisitedCountriesMapPage() {
  return <SeoLandingPage page={page} />;
}
