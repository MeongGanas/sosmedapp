import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User } from "lucide-react";
import ProfileStats from "./ProfileStats";
import { Suspense } from "react";
import { getAllPostsById } from "@/data/post";

export default async function ProfileSection() {
  const session = await auth();

  return (
    <>
      <div className="flex items-center gap-5 border-b pb-10 mb-5">
        <Avatar className="w-20 h-20">
          {session?.user?.image && <AvatarImage src={session?.user?.image} />}
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex mb-2 items-center gap-2">
            <h1 className="text-lg">{session?.user?.name}</h1>
            <Button variant={"outline"} className="flex items-center gap-2">
              <Edit2 width={13} height={13} />
              Edit Profile
            </Button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ProfileStats />
          </Suspense>
        </div>
      </div>
    </>
  );
}
