import Loading from "@/components/loading";
import AllPosts from "@/components/protected/explore/allPosts";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="explore">
      <Suspense fallback={<Loading />}>
        <AllPosts />
      </Suspense>
    </section>
  );
}
