import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="message">
      <Suspense fallback={<Loading />}>
        <h1>Message page</h1>
      </Suspense>
    </section>
  );
}
