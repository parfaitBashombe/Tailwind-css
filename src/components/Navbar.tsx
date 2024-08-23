'use client';

import React, { useState } from "react";
import Link from "next/link";


const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenedMenu = (): void => {
    setOpen(true);
  }

  const onClosedMenu = (): void => {
    setOpen(false);
  }

  return <header className="bg-teal-700 text-white sticky top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
      <h1 className="text-3xl font-medium">
        <Link href="#hero">🚀 Acme Rockets</Link>
      </h1>
      <div>
        <button onClick={onOpenedMenu} className="text-3xl md:hidden cursor-pointer">&#9776;</button>
      </div>
      <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
        <Link href="#rockets" className="hover:opacity-90">Our Rockets</Link>
        <Link href="#testimonials" className="hover:opacity-90">Testimonials</Link>
        <Link href="#contacts" className="hover:opacity-90">Contact Us</Link>
      </nav>
    </section>
