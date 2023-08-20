import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import { handler } from "@/app/(navbar)/api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(handler);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
