import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["director-mode"];

export const metadata = createSeoLandingMetadata(page);

export default function DirectorModePage() {
  return <SeoLandingPage page={page} />;
}
