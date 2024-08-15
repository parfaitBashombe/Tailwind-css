import React from "react";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return <header className="bg-teal-700 text-white sticky top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
      <h1 className="text-3xl font-medium">
        <Link href="#hero">🚀 Acme Rockets</Link>
      </h1>
      <div>
        <button id="hamburger-button" className="text-3xl sm:hidden focus:outline-none">&#9776;</button>
      </div>
      <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
        <Link href="#rockets" className="hover:opacity-90">Our Rockets</Link>
        <Link href="#testimonials" className="hover:opacity-90">Testimonials</Link>
        <Link href="#contacts" className="hover:opacity-90">Contact Us</Link>
      </nav>
    </section>
  </header>;
};

export default Navbar;
