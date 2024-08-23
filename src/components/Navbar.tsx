

    <section onClick={() => onClosedMenu()} id="mobile-menu" className={`absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu ${open? "flex": "hidden"}`}>
      <button className="text-8xl self-end px-6">
        &times;
      </button>
      <nav className="flex flex-col h-screen items-center py-8" aria-label="mobile">
        <Link href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</Link>
        <Link href="#rockets" className="w-full text-center py-6 hover:opacity-90">Our Rockets</Link>
        <Link href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</Link>
        <Link href="#contacts" className="w-full text-center py-6 hover:opacity-90">Contact Us</Link>
        <Link href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</Link>
      </nav>
    </section>
  </header>;
};

export default Navbar;
