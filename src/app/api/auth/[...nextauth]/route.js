import { login } from "@/services/auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        username: {
          label: "Username",
          placeholder: "00-0000",
        },
        password: {
          label: "Password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials.username || !credentials.password) {
            return null;
          }
          const form = {
            username: credentials.username,
            password: credentials.password,
          };
          const response = await login(form);
          const user = response.data;
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 5 * 60 * 60, // 1 hr
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(user) {
      if (user?.user?.status === 404) {
        throw new Error("404");
      }
      return user?.user?.status === 200;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
