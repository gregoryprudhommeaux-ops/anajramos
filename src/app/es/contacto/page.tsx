import { ContactView } from "@/components/views/contact-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es", "contact");

export default function Page() {
  return <ContactView locale="es" />;
}
