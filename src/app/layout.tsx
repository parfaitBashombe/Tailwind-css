import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500"],
});

export const metadata: Metadata = {
  title: "Tutorial Code",
  description: "This is a tutorial",
  keywords: ["coding", "next"],
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="{poppins.className}min-h-screen bg-black dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
