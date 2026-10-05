import { SearchView } from "@/components/views/search-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("cn", "search");

export default function Page() {
  return <SearchView locale="cn" />;
}
