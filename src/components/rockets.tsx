import React from 'react'
import Image from "next/image";
import rocketlaunch from '../../public/img/rocketlaunch.png'
import rocketman from '../../public/img/rocketman.png'
import rocketride from '../../public/img/rocketride.png'

const Rockets = () => {
  return (
  <>
    <section id="rockets" className="p-6 my-12 scroll-mt-20">
          <h2 className="text-4xl-font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
          </h2>

          <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <Image src={rocketman} alt="Explorer" className="w-1/2 mb-6" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$</p>
              <p className="sm:hidden text-2xl text-centr mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
            </li>

            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <Image src={rocketride} alt="Adventurer" className="w-1/2 mb-6" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$</p>
              <p className="sm:hidden text-2xl text-centr mt-2 text-slate-500 dark:text-slate-400">Best Selling Rocket!</p>
            </li>

            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white  dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
              <Image src={rocketlaunch} alt="Infinty" className="w-1/2 mb-6" />
              <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinty</h3>
              <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$$</p>
              <p className="sm:hidden text-2xl text-centr mt-2 text-slate-500 dark:text-slate-400">Luxury Starship</p>
            </li>
          </ul>
          
        </section> 
        
        <hr className="mx-auto bg-black dark:bg-white w-1/2" /> 
  </>
  )
}

export default Rockets