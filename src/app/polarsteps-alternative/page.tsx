import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["polarsteps-alternative"];

export const metadata = createSeoLandingMetadata(page);

export default function PolarstepsAlternativePage() {
  return <SeoLandingPage page={page} />;
}
