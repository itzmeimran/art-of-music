import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Exclusive Courses",
  description:
    "Explore All of our premium courses available here that will make you zero to hero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="dark" />
        {children}
      </body>
    </html>
  );
}
