import Loading from "@/components/loading";
import SearchResult from "@/components/protected/search/searchResult";
import Searchbar from "@/components/protected/search/searchbar";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="search">
      <Suspense fallback={<Loading />}>
        <Searchbar />
        <SearchResult />
      </Suspense>
    </section>
  );
}
