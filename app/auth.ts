import { createUser } from "@/api-service/user/createUser";
import { getUserByEmail } from "@/api-service/user/getUserByEmail";
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    jwt: async ({ user, token }: { user: User; token: JWT }) => {
      if (user) {
        let userDb = await getUserByEmail(user.email!);
        if (!userDb) {
          userDb = await createUser({
            email: user.email!,
            id: user.id!,
            image: user.image ?? "unknown",
            name: user.name!,
          });
        }
        console.log(userDb);
        token.role = userDb.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
