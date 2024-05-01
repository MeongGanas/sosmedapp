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
import Link from "next/link";

export function ExplorePostCard({ post }: { post: Post }) {
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
        <DialogHeader className="flex flex-col sm:flex-row gap-4">
          <div className="w-full flex justify-center">
            <Image src={post.image} width={200} height={200} alt={post.id} />
          </div>
          <div className="w-full">
            <div className="flex items-center mb-2 gap-2">
              <Avatar className="w-10 h-10">
                {post.user.image && <AvatarImage src={`${post.user.image}`} />}
                <AvatarFallback>
                  <UserIcon className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <DialogTitle>
                <Link href={`/profile/${post.user.name}`}>
                  {post.user.name}
                </Link>
              </DialogTitle>
            </div>
            <DialogDescription className="text-base text-left">
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
        <DialogHeader className="flex flex-col sm:flex-row gap-4">
          <div className="w-full flex justify-center">
            <Image src={post.image} width={200} height={200} alt={post.id} />
          </div>
          <div className="w-full">
            <div className="flex items-center mb-2 gap-2">
              <Avatar className="w-10 h-10">
                {user.image && <AvatarImage src={`${user.image}`} />}
                <AvatarFallback>
                  <UserIcon className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <DialogTitle>
                <Link href={`/${user.name}`}>{user.name}</Link>
              </DialogTitle>
            </div>
            <DialogDescription className="text-base text-left">
              {post.caption}
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
