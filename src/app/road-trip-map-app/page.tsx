import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["road-trip-map-app"];

export const metadata = createSeoLandingMetadata(page);

export default function RoadTripMapAppPage() {
  return <SeoLandingPage page={page} />;
}
