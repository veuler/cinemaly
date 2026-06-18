import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["anim8map-alternative"];

export const metadata = createSeoLandingMetadata(page);

export default function Anim8mapAlternativePage() {
  return <SeoLandingPage page={page} />;
}
