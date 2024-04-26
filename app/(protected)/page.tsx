import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="home">
      <Suspense fallback={<Loading />}>
        <h1>Home Page</h1>
      </Suspense>
    </section>
  );
}
