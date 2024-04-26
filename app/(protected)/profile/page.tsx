import Loading from "@/components/loading";
import ProfileComponent from "@/components/protected/profile/ProfileComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="profile">
      <Suspense fallback={<Loading />}>
        <ProfileComponent />
      </Suspense>
    </section>
  );
}
