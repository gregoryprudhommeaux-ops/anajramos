import { SearchView } from "@/components/views/search-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "search");

export default function Page() {
  return <SearchView locale="en" />;
}
