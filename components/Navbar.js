import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/context'
import Link from 'next/link'
import { BsFillBrightnessHighFill, BsFillBrightnessLowFill, BsFillMenuAppFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {

    const { darkMode, setDarkMode, menuOpen, setMenuOpen, active, setActive } = useContext(Context)

    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: "-100vh",
            opacity: 0,
        },
    };

    return (
        <div className={`transition-all duration-1000 ease-out`}>

            {/* nav */}
            <div className={`relative z-20 w-full px-4 py-2 flex justify-between items-center ${darkMode ? 'bg-gray-900 text-teal-500' : 'bg-white text-purple-600'}`} >

                <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} onClick={() => {setMenuOpen(!menuOpen)}} className={`rounded-full shadow-lg p-2 sm:hidden block ${darkMode ? 'bg-gray-800' : 'bg-slate-200'}`}>{!menuOpen ? <BsFillMenuAppFill size={24} /> : <AiOutlineClose size={24} />}</motion.button>

                {/* logo */}
                <div className="mr-2 transition-all duration-300 ease-in-out">
                    <p className="text-3xl font-bold">SK</p>
                </div>

                <div className="hidden sm:flex flex-1 items-center justify-end">

                    <Link href={'#cover'}><a onClick={()=>{setActive('cover')}} className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'cover' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Home</a></Link>

                    <a onClick={()=>{setActive('about')}} href={'#about'} className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'about' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>About</a>

                    <a onClick={()=>{setActive('experience')}} href={'#experience'} className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'experience' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Experience</a>

                    <a onClick={()=>{setActive('project')}} href={'#project'} className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'project' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Projects</a>

                    <a onClick={()=>{setActive('contact')}} href={'#contact'} className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'contact' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Contact</a>

                </div>

                <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} onClick={() => { setDarkMode(!darkMode) }} className={`rounded-full shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-200'}`}>{darkMode ? <BsFillBrightnessHighFill size={24} /> : <BsFillBrightnessLowFill size={24} />}</motion.button>

            </div>


            {/* menu */}
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {
                    menuOpen && <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className={`top-0 left-0 ${darkMode ? 'bg-gray-900 text-teal-500' : 'bg-white text-purple-600'} rounded-xl pb-2 sm:hidden flex flex-col  z-0 w-screen h-auto `}>

                        <a href={'#cover'} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'home' ? `${darkMode ? 'text-teal-600' : 'text-purple-500 '}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Home</a>

                        <a href={'#about'} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'about' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>About</a>

                        <a href={'#experience'} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'experience' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Experience</a>

                        <a href={'#project'} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'project' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'}` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}'}`}>Projects</a>

                        <a href={'#contact'} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${active == 'experience' ? `${darkMode ? 'text-teal-500' : 'text-purple-600'} px-4 py-2` : ``} ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Contact</a>

                    </motion.div>
                }
            </AnimatePresence>

        </div>
    )
}

export default Navbar