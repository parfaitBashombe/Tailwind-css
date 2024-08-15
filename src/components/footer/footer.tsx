import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer id='footer' className='bg-teal-700 text-white text-xl'>
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
                <h2>Acme Rocket-Powered Products, Inc.</h2>
                555 Astro Way<br/>
                Fairfield, New Jersey 1235-555<br/>
                Email: <Link href="mailto:inquiries@AcmeRockets.com">Inquiries@AcmeRockets.com</Link>
            </address>
        </section>
    </footer>
  )
}

export default Footer