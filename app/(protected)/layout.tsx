"use server"
import { auth } from "@/auth";
import { Sidenav, Navbar } from "@/components/layout/Navbar";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Navbar />
        <div className="flex flex-col">
          <Sidenav />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
