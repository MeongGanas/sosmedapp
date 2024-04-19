"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const user = useSession();
  return (
    <main>
      <h1></h1>
      {JSON.stringify(user)}
    </main>
  );
}
