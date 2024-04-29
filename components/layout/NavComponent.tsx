"use client";
import {
  Globe,
  Home,
  MessageCircle,
  SearchIcon,
  SquarePlus,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/app/hooks/useCurrentUser";

export function NavLinks() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isExploreActive = pathname.startsWith("/explore");
  const isSearchActive = pathname.startsWith("/search");
  const isMessageActive = pathname.startsWith("/message");
  const isCreateActive = pathname.startsWith("/create");
  const isProfileActive = pathname.startsWith("/[username]");
  const currentUser = useCurrentUser();

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
        href="/search"
        className={`${isSearchActive ? "nav-item-active" : "nav-item"}`}
      >
        <SearchIcon className="h-4 w-4" />
        Search
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
        href={`${currentUser?.name}`}
        className={`${isProfileActive ? "nav-item-active" : "nav-item"}`}
      >
        <User className="h-4 w-4" />
        Profile
      </Link>
    </>
  );
}

export function LogoutButton() {
  return (
    <Button
      className="w-full flex gap-2 items-center"
      onClick={() => signOut()}
    >
      <LogOut className="h-5 w-5" />
      Logout
    </Button>
  );
}
