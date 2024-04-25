"use client";
import Loading from "@/components/loading";
import CreatePostForm from "@/components/protected/CreatePostForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <section id="create">
      <Suspense fallback={<Loading />}>
        <CreatePostForm />
      </Suspense>
    </section>
  );
}
