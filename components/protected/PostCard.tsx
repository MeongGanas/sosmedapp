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
import { User } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
}

interface Post {
  id: string;
  userId: string;
  image: string;
  caption: string | null;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export default function PostCard({ post }: { post: Post }) {
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
                  <User className="w-4 h-4" />
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
