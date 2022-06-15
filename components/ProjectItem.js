import React, { useContext } from 'react'
import { Context } from '../context/context'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectItem = ({ details }) => {
  const { darkMode, projectItemAnimation } = useContext(Context)
  return (
    <>
      <motion.div animate={projectItemAnimation} whileHover={{ scale: 1.1, transition: { duration: 0.1 }, }} className={`sm:w-1/3 mx-auto max-w-xs sm:max-w-sm sm:mb-0 mb-6 sm:px-4 py-4 sm:py-10 transition-all duration-300 ease-in-out rounded-2xl`}>
        <div className={`h-full flex flex-col justify-between text-center rounded-2xl p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}>
          <div className="w-full-flex flex-col">
            <img alt="testimonial" className={`w-full h-auto mb-2 sm:mb-4 object-cover object-center rounded-t-2xl shadow-lg inline-block`} src={details.img} />
            <p className="opacity-70">{details.body}</p>
          </div>
          <div className="w-full flex flex-col">
            <span className={`inline-block mx-auto h-1 w-10 rounded ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} my-2`}></span>
            <Link href={details.url}><a target='_blank' className={`${darkMode ? 'text-teal-500' : 'text-purple-600'} transition-all duration-300 ease-in-out hover:underline underline-offset-4 font-medium tracking-wider text-sm`}>VISIT NOW</a></Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectItem