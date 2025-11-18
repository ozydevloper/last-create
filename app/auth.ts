import { createUser } from "@/api-service/user/createUser";
import { getUserByEmail } from "@/api-service/user/getUserByEmail";
import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: async ({ user }: { user: User }) => {
      const isExist = await getUserByEmail(user?.email ?? "");

      if (isExist) {
        console.log("ada");
      } else {
        if (user.id && user.email && user.image && user.name) {
          await createUser({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }
      }
      return true;
    },
  },
});
