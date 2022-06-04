import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/context'
import Link from 'next/link'
import { BsFillBrightnessHighFill, BsFillBrightnessLowFill, BsFillMenuAppFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import Quicknav from './Quicknav'
import {Logo} from './Svgs'

const Navbar = () => {

    const { darkMode, setDarkMode, menuOpen, setMenuOpen, navSm, displayFixed, navInit, displayFixedAnimation } = useContext(Context)

    return (
        <>
            {/* <Quicknav /> */}
            <motion.div animate={displayFixedAnimation} className={`w-full z-50 backdrop-blur-sm ${darkMode ? `${displayFixed ? 'bg-[#26323880]' : 'bg-gray-900'}` : `${displayFixed ? 'bg-[#e2e8f080]' : 'bg-white'}`} transition-all duration-300 ease-out`}>

                {/* nav */}
                <motion.div variants={navInit} initial="hidden" animate="visible" className={`relative z-20 w-full px-4 py-2 flex justify-between max-w-7xl mx-auto items-center ${darkMode ? 'text-teal-500' : 'text-purple-600'}`} >

                    <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} onClick={() => { setMenuOpen(!menuOpen) }} className={`rounded-full shadow-lg p-2 sm:hidden block ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}>{!menuOpen ? <BsFillMenuAppFill size={24} /> : <AiOutlineClose size={24} />}</motion.button>

                    {/* logo */}
                    <div className="mr-2 transition-all duration-300 ease-in-out">
                        <Logo/>
                    </div>

                    <div className="hidden sm:flex flex-1 items-center justify-end">

                        <Link href={'/'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Home</a></Link>

                        <Link href={'/#about'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>About</a></Link>

                        <Link href={'/#experience'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Experience</a></Link>

                        <Link href={'/#project'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Projects</a></Link>

                        <Link href={'#contact'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Contact</a></Link>

                        <Link href={'/blog'}><a className={`mr-8 font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Blogs</a></Link>

                    </div>

                    <motion.button whileHover={{ scale: 1.1, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} onClick={() => { setDarkMode(!darkMode) }} className={`rounded-full shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}>{darkMode ? <BsFillBrightnessHighFill size={24} /> : <BsFillBrightnessLowFill size={24} />}</motion.button>

                </motion.div>


                {/* menu */}
                <AnimatePresence initial={false} exitBeforeEnter={true}>
                    {
                        menuOpen && <motion.div variants={navSm} initial="hidden" animate="visible" exit="exit" className={`top-0 left-0 ${darkMode ? 'text-teal-500' : 'text-purple-600'} rounded-xl pb-2 sm:hidden flex flex-col  z-0 w-screen h-auto `}>

                            <Link href={'/'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Home</a></Link>

                            <Link href={'/#about'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>About</a></Link>

                            <Link href={'/#experience'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Experience</a></Link>

                            <Link href={'/#project'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}'}`}>Projects</a></Link>

                            <Link href={'#contact'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Contact</a></Link>

                            <Link href={'/blog'}><a onClick={() => { setMenuOpen(false) }} className={`my-2 text-center w-full font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'hover:text-teal-500' : 'hover:text-purple-600'}`}>Blogs</a></Link>

                        </motion.div>
                    }
                </AnimatePresence>

            </motion.div>
        </>
    )
}

export default Navbar