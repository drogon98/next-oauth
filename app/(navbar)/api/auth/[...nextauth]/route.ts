import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import SlackProvider from "next-auth/providers/slack";
import SpotifyProvider from "next-auth/providers/spotify";

export const handler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    // }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // LinkedInProvider({
    // Requires approval from linkedin team
    //   clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
    // }),
    // SlackProvider({
    //   //Requires https
    //   clientId: process.env.SLACK_CLIENT_ID ?? "",
    //   clientSecret: process.env.SLACK_CLIENT_SECRET ?? "",
    // }),
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    }),
  ],
});

export { handler as GET, handler as POST };
