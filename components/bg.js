import React, { useContext } from 'react'
import { Context } from '../context/context'
import { motion } from 'framer-motion'

const Bg = () => {

  const { darkMode } = useContext(Context)

  return (
    <>

      <div className={`fixed top-0 left-0 w-full h-screen z-0 ${darkMode ? 'bg-gray-900 text-teal-500' : 'bg-white text-purple-600'}`}>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} >
          <div className="absolute top-32 left-60 w-10 h-10 opacity-50 border-8 border-red-500 rounded-full"></div>
          <div className="absolute bottom-24 right-72 sm:right-20 w-10 h-10 opacity-50 border-8 border-yellow-500"></div>
          <div className="absolute bottom-20 left-72 sm:left-96 opacity-50 w-0 h-0 border-b-green-600 border-b-[50px] border-r-transparent border-r-[25px] border-l-transparent border-l-[25px]"></div>
          <div className="absolute top-24 right-72 sm:right-96 w-10 h-5 opacity-50 bg-blue-500 rounded-full "></div>
        </motion.div>

      </div>

    </>
  )
}

export default Bg