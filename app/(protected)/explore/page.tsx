import Loading from "@/components/loading";
import AllPosts from "@/components/protected/explore/AllPosts";
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
