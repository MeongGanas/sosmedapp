"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/use-current-user";
import { Edit2, User } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const user = useCurrentUser();

  return (
    <section>
      <h1 className="font-bold text-2xl mb-5">Profile Page</h1>
      <div className="flex items-center gap-5 border-b pb-10 mb-5">
        <Avatar className="w-20 h-20">
          {user?.image && <AvatarImage src={user?.image} />}
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex mb-2 items-center gap-2">
            <h1 className="text-lg">{user?.name}</h1>
            <Button variant={"ghost"} className="flex items-center gap-2">
              <Edit2 width={13} height={13} />
              Edit Profile
            </Button>
          </div>
          <ul className="flex gap-5">
            <li>
              <h4>{user?.posts.length} Post</h4>
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

      <div className="grid grid-cols-3 gap-2">
        {user?.posts &&
          user?.posts.map((post) => (
            <div className="w-full h-full flex items-center bg-black justify-center">
              <Image src={post.image} width={300} height={300} alt={post.id} />
            </div>
          ))}
      </div>
    </section>
  );
}
