import React from 'react'
import Link from 'next/link'


const Footer = () => {

    const date=new Date()
    const year=date.getFullYear()

  return (
    <footer id='footer' className='bg-teal-700 text-white text-xl'>
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
                <h2>Acme Rocket-Powered Products, Inc.</h2>
                555 Astro Way<br/>
                Fairfield, New Jersey 1235-555<br/>
                Email: <Link href="mailto:inquiries@AcmeRockets.com">Inquiries@AcmeRockets.com</Link><br/>
                Phone: <Link href="tel:+2431999999">(+2) 431999999</Link>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label='footer'>
                <Link href="#rockets" className='hover:opacity-90'>Our Rockets</Link>
                <Link href="#testimonials" className='hover:opacity-90'>Testimonials</Link>
                <Link href="#contacts" className='hover:opacity-90'>Contact Us</Link>
            </nav>
            <div className="flex flex-col sm:gap-2">
                <p className="text-right">Copyright &copy; <span id="year">{year}</span></p>
                <p className="text-right">All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer