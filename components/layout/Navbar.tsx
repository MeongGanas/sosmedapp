"use client";

import Link from "next/link";
import { Menu, Nfc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks, LogoutButton } from "./NavComponent";

export function Navbar() {
  return (
    <div className="hidden border-r bg-[#fefffc] md:block sticky top-0 h-screen">
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
  );
}

export function Sidenav() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-[#fefffc] px-4 sticky top-0 z-10 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
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
    </header>
  );
}
