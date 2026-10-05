import { CollaborationView } from "@/components/views/collaboration-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("cn", "collaboration");

export default function Page() {
  return <CollaborationView locale="cn" />;
}
