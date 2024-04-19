"use client";
import useCurrentUser from "@/hooks/use-current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";

export default function Page() {
  const user = useCurrentUser();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-5">Profile Page</h1>
      <div className="flex items-center gap-5 border-b pb-10">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex mb-2 items-center gap-2">
            <h1 className="text-lg">{user?.username}</h1>
            <Button variant={"ghost"} className="flex items-center gap-2">
              <Edit2 width={13} height={13} />
              Edit Profile
            </Button>
          </div>
          <ul className="flex gap-5">
            <li>
              <h4>Post</h4>
            </li>
            <li>
              <h4>Follower</h4>
            </li>
            <li>
              <h4>Following</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
