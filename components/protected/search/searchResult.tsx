"use client";
import useFindUser from "@/app/hooks/useFindUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/lib/definitions";
import { User as UserIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username")?.toString();
  const { data, isLoading, error } = useFindUser(username);

  return (
    <Card x-chunk="dashboard-01-chunk-5">
      <CardHeader>
        {username && <CardTitle>Result of {username}</CardTitle>}
        {!username && <CardTitle>No user search</CardTitle>}
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
      </CardHeader>

      {data &&
        data.map((user: User) => (
          <CardContent className="grid gap-8" key={user.id}>
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src={`${user.image}`} alt="Avatar" />
                <AvatarFallback>
                  <UserIcon />
                </AvatarFallback>
              </Avatar>
              <p className="text-sm font-medium leading-none">{user.name}</p>
            </div>
          </CardContent>
        ))}
    </Card>
  );
}
