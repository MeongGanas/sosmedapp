import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import db from "./lib/db";
import { getUserById } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async session({ token, session }) {
      if (token.sub) {
        const existingUser = await getUserById(token.sub);

        if (!existingUser) return session;

        session.user = existingUser;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return null;

      return token;
    },
  },
});
