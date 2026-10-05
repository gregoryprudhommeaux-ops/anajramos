import { ContactView } from "@/components/views/contact-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("cn", "contact");

export default function Page() {
  return <ContactView locale="cn" />;
}
