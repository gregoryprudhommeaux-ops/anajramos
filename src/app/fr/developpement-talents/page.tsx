import { TalentView } from "@/components/views/talent-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("fr", "talent");

export default function Page() {
  return <TalentView locale="fr" />;
}
