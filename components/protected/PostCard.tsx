import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserIcon } from "lucide-react";
import { Post, User } from "@/lib/definitions";

export function ExplorePostCard({ post }: { post: Post }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full h-full max-h-[300px] flex items-center bg-black justify-center">
          <Image
            src={post.image}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            alt={post.id}
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row gap-4">
          <Image src={post.image} width={200} height={200} alt={post.id} />
          <div>
            <div className="flex items-center mb-2 gap-2">
              <Avatar className="w-10 h-10">
                {post.user.image && <AvatarImage src={post.user.image} />}
                <AvatarFallback>
                  <UserIcon className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <DialogTitle>{post.user.name}</DialogTitle>
            </div>
            <DialogDescription className="text-base">
              {post.caption}
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function ProfilePostCard({ post, user }: { post: Post; user: User }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-full h-full max-h-[300px] flex items-center bg-black justify-center">
          <Image
            src={post.image}
            width={200}
            height={200}
            alt={post.id}
            className="w-full h-full object-cover"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-row gap-4">
          <Image src={post.image} width={200} height={200} alt={post.id} />
          <div>
            <div className="flex items-center mb-2 gap-2">
              <Avatar className="w-10 h-10">
                {user.image && <AvatarImage src={`${user.image}`} />}
                <AvatarFallback>
                  <UserIcon className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <DialogTitle>{user.name}</DialogTitle>
            </div>
            <DialogDescription className="text-base">
              {post.caption}
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
