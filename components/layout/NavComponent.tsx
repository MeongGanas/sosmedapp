"use client";
import {
  Globe,
  Home,
  MessageCircle,
  Search,
  SquarePlus,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function Searchbar() {
  const pathname = usePathname();
  const isExploreActive = pathname.startsWith("/explore");

  return (
    <div className={`w-full flex-1 ${isExploreActive ? "block" : "hidden"}`}>
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
  );
}

export function NavLinks() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isExploreActive = pathname.startsWith("/explore");
  const isMessageActive = pathname.startsWith("/message");
  const isCreateActive = pathname.startsWith("/create");
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
        href="/create"
        className={`${isCreateActive ? "nav-item-active" : "nav-item"}`}
      >
        <SquarePlus className="h-4 w-4" />
        Create
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

export function LogoutButton() {
  const onClick = () => {
    signOut();
  };

  return (
    <Button className="w-full flex gap-2 items-center" onClick={onClick}>
      <LogOut className="h-5 w-5" />
      Logout
    </Button>
  );
}