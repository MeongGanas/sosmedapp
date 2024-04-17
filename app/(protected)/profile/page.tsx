import { auth } from "@/auth";

export default async function Page() {
  const user = await auth();
  return (
    <main>
      <h1>Profile page</h1>
      {JSON.stringify(user)}
    </main>
  );
}
