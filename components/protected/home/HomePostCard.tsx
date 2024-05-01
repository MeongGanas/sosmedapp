import { User as UserIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserWithPost } from "@/lib/definitions";
import { useRouter } from "next/navigation";

export default function HomePostCard({ user }: { user: UserWithPost }) {
  const router = useRouter();
  return (
    <div className="mx-auto w-96 mb-3 border">
      <div className="flex gap-4 p-3 items-center">
        <Avatar className="w-12 h-12">
          {user.image && <AvatarImage src={user.image} />}
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        </Avatar>
        <button onClick={() => router.push(`/profile/${user.name}`)}>
          {user.name}
        </button>
      </div>
      <Image
        src={user.posts[0].image}
        width={200}
        height={200}
        alt={user.name}
        className="w-full"
      />
      <div className="p-3">
        <p>{user.posts[0].caption}</p>
      </div>
    </div>
  );
}
