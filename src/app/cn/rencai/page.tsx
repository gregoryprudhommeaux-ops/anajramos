import { TalentView } from "@/components/views/talent-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("cn", "talent");

export default function Page() {
  return <TalentView locale="cn" />;
}
