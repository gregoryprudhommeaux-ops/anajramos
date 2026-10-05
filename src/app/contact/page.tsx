import { ContactView } from "@/components/views/contact-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactView locale="en" />;
}
