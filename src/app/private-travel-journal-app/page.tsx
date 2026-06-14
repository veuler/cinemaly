import SeoLandingPage, {
  createSeoLandingMetadata,
} from "@/components/SeoLandingPage";
import { seoLandingPages } from "@/data/seoLandingPages";

const page = seoLandingPages["private-travel-journal-app"];

export const metadata = createSeoLandingMetadata(page);

export default function PrivateTravelJournalAppPage() {
  return <SeoLandingPage page={page} />;
}
