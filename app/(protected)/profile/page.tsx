import PostsList from "@/components/protected/profile/PostsList";
import ProfileSection from "@/components/protected/profile/ProfileSection";
import { Suspense } from "react";

export default async function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-5">Profile Page</h1>
      <ProfileSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </section>
  );
}
