import React, { useContext } from 'react'
import { Context } from '../context/context'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectItem = (details) => {
  const { darkMode, projectItemAnimation } = useContext(Context)
  return (
    <>
    <motion.div animate={projectItemAnimation} className={`sm:w-1/3 sm:mb-0 mb-6 sm:px-4 py-4 sm:py-10 transition-all duration-300 ease-in-out rounded-2xl`}>
      <div className={`h-full flex flex-col justify-center text-center rounded-2xl p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}>
        <img alt="testimonial" className={`w-full h-auto mb-2 sm:mb-4 object-cover object-center rounded-t-2xl shadow-lg inline-block`} src="wp.jpg" />
        <p className="opacity-70">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
        <span className={`inline-block mx-auto h-1 w-10 rounded ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} my-2
                              `}></span>
        <Link href={'/'}><a target='_blank' className={`${darkMode ? 'text-teal-500' : 'text-purple-600'} transition-all duration-300 ease-in-out hover:underline underline-offset-4 font-medium tracking-wider text-sm`}>HOLDEN CAULFIELD</a></Link>
      </div>
    </motion.div>
    </>
  )
}

export default ProjectItem