"use client";
import {
  Globe,
  Home,
  MessageCircle,
  SearchIcon,
  SquarePlus,
  User,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/app/hooks/useCurrentUser";

export function NavLinks() {
  const pathname = usePathname();
  const currentUser = useCurrentUser();
  const router = useRouter();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Search",
      href: "/search",
      icon: SearchIcon,
      isActive: pathname.startsWith("/search"),
    },
    {
      label: "Explore",
      href: "/explore",
      icon: Globe,
      isActive: pathname.startsWith("/explore"),
    },
    {
      label: "Message",
      href: "/message",
      icon: MessageCircle,
      isActive: pathname.startsWith("/message"),
    },
    {
      label: "Create",
      href: "/create",
      icon: SquarePlus,
      isActive: pathname.startsWith("/create"),
    },
    {
      label: "Profile",
      href: `/profile/${currentUser?.name}`,
      icon: User,
      isActive: pathname.startsWith("/profile"),
    },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.href}
          onClick={() => router.push(item.href)}
          className={`${
            item.isActive
              ? "nav-item-active cursor-pointer"
              : "nav-item cursor-pointer"
          }`}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </li>
      ))}
    </ul>
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
