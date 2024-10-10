import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FliesBg from "@/components/FliesBg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "wizfolio",
  description: "a NextJS app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
        <FliesBg />
      </body>
    </html>
  );
}
