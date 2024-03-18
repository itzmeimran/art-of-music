import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art of Music",
  description:
    "Explore the world of music with our Next.js website dedicated to all things melodic. Dive into the art of music with our collection of courses, tutorials, and resources. From mastering guitar fundamentals to advanced vocal training, our platform offers a comprehensive learning experience for musicians of all levels. Join our community and unleash your musical talent today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className='dark' />
        {children}
      </body>
    </html>
  );
}
