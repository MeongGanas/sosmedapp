import Loading from "@/components/loading";
import HomeComponent from "@/components/protected/home/HomeComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="home">
      <Suspense fallback={<Loading />}>
        <HomeComponent />
      </Suspense>
    </section>
  );
}
