import { AboutView } from "@/components/views/about-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("cn", "about");

export default function Page() {
  return <AboutView locale="cn" />;
}
