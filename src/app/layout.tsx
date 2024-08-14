import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Rockets from "@/components/rockets";
import Testimonials from "@/components/testimonials/testimonials"
import Contacts from "@/components/contacts/contacts"
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
    <html lang="en" className="sm:scroll-smooth">
      <body className="{poppins.className} min-h-screen bg-white dark:text-white dark:bg-black">
        <Navbar />
        {children}
        <Rockets/>
        <Testimonials/>
        <Contacts/>
      </body>
    </html>
  );
};

export default RootLayout;
