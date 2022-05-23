import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import { BiUpArrow } from 'react-icons/bi'
import { motion, AnimatePresence } from 'framer-motion'

const Top = () => {
  const { darkMode } = useContext(Context)
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => { window.scrollY > 25 ? setDisplay(true) : setDisplay(false) })
  }, [])

  const dropIn = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: "10vw",
      opacity: 0,
    },
  };

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
      {display && <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className={`fixed bottom-4 right-4 z-50`}>
        <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} onClick={() => {
          window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
        }} className={`rounded-full shadow-lg p-2 ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-200 text-purple-600'}`}><BiUpArrow size={24} /></motion.button>
      </motion.div>}
      </AnimatePresence>
    </>
  )
}

export default Top