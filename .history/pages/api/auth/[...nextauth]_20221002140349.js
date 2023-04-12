import { Session } from "inspector";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID,
      clientSecret: process.env.Google_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async Session({ Session, token, user }) {
      Session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowercase();
    },
  },
};

export default NextAuth(authOptions);
