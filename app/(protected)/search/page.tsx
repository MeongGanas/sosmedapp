"use client";
import Loading from "@/components/loading";
import Searchbar from "@/components/protected/search/searchbar";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="search">
      <Suspense fallback={<Loading />}>
        <Searchbar />
      </Suspense>
    </section>
  );
}
