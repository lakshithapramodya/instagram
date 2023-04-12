import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "229511632148-8p3lmr9ksukf3kd70horootaj4vlf3c5.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "auth/sigin",
  },
};

export default NextAuth(authOptions);
