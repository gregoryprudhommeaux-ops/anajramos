import { HomeView } from "@/components/views/home-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "home");

export default function Page() {
  return <HomeView locale="fr" />;
}
