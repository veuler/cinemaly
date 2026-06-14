import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["travel-capsule-file"];

export const metadata = createSeoLandingMetadata(page);

export default function TravelCapsuleFilePage() {
  return <SeoLandingPage page={page} />;
}
