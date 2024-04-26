"use client";
import Follow from "@/components/protected/profile/Follow";
import PostsList from "@/components/protected/profile/PostsList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User } from "lucide-react";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { useUserPosts } from "@/app/hooks/usePosts";

export default function ProfileComponent() {
  const user = useCurrentUser();
  const { data, isLoading, error } = useUserPosts(user?.id);
  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Profile Page</h1>
      <div className="flex items-center gap-5 border-b pb-10 mb-5">
        <Avatar className="w-16 h-16">
          {user?.image && <AvatarImage src={user?.image} />}
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex mb-2 items-center gap-2">
            <h1 className="text-lg">{user?.name}</h1>
            <Button variant={"outline"} className="flex items-center gap-2">
              <Edit2 width={13} height={13} />
              Edit Profile
            </Button>
          </div>
          <Follow id={user?.id} posts={data} postLoading={isLoading} />
        </div>
      </div>
      <PostsList posts={data} isLoading={isLoading} error={error} />
    </>
  );
}
