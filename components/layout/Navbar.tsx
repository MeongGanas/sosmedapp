"use client";
import Link from "next/link";
import {
  Globe,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Nfc,
  Search,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Logout from "@/actions/auth/logout";

export default function Navbar({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isExploreActive = pathname.startsWith("/explore");

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Nfc className="h-6 w-6" />
              SosmedApp
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLinks />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <LogoutButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 mb-3 text-lg font-semibold"
                >
                  <Nfc className="h-6 w-6" />
                  SosmedApp
                </Link>
                <NavLinks />
              </nav>
              <div className="mt-auto">
                <LogoutButton />
              </div>
            </SheetContent>
          </Sheet>
          <div
            className={`w-full flex-1 ${isExploreActive ? "block" : "hidden"}`}
          >
            <form className="md:flex md:justify-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search username..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-96"
                />
              </div>
            </form>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavLinks() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isExploreActive = pathname.startsWith("/explore");
  const isMessageActive = pathname.startsWith("/message");
  const isProfileActive = pathname.startsWith("/profile");

  return (
    <>
      <Link
        href="/"
        className={`${isHomeActive ? "nav-item-active" : "nav-item"}`}
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="/explore"
        className={`${isExploreActive ? "nav-item-active" : "nav-item"}`}
      >
        <Globe className="h-4 w-4" />
        Explore{" "}
      </Link>
      <Link
        href="/message"
        className={`${isMessageActive ? "nav-item-active" : "nav-item"}`}
      >
        <MessageCircle className="h-4 w-4" />
        Message
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        href="/profile"
        className={`${isProfileActive ? "nav-item-active" : "nav-item"}`}
      >
        <User className="h-4 w-4" />
        Profile
      </Link>
    </>
  );
}

function LogoutButton() {
  return (
    <form action={Logout}>
      <Button className="w-full flex gap-2 items-center" type="submit">
        <LogOut className="h-5 w-5" />
        Logout
      </Button>
    </form>
  );
}
