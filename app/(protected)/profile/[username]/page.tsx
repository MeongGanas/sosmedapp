import Loading from "@/components/loading";
import ProfileComponent from "@/components/protected/profile/ProfileComponent";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="user-profile">
      <Suspense fallback={<Loading />}>
        <ProfileComponent />
      </Suspense>
    </section>
  );
}
