"use client";
import useFindUser from "@/app/hooks/useFindUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/lib/definitions";
import { User as UserIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username")?.toString();

  const { data, error } = useFindUser(username);

  if (error) return <h1>{error.message}</h1>;

  return (
    <ul>
      {data &&
        data.map((user: User) => (
          <li
            className="grid gap-8 hover:bg-slate-50 rounded-sm duration-75 transition p-3"
            key={user.id}
          >
            <Link href={`/${user.name}`}>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src={`${user.image}`} alt="Avatar" />
                  <AvatarFallback>
                    <UserIcon />
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium leading-none">{user.name}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
