import { Post } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      posts: Array<Post>;
    } & DefaultSession["user"];
  }
}
