import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./app/schema/schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateForm = LoginSchema.safeParse(credentials);

        if (validateForm.success) {
          const { email, password } = validateForm.data;

          const existingUser = await getUserByEmail(email);
          if (!existingUser || !existingUser.password) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            existingUser.password
          );

          if (passwordMatch) return existingUser;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
