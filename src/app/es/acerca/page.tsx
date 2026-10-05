import { AboutView } from "@/components/views/about-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("es", "about");

export default function Page() {
  return <AboutView locale="es" />;
}
