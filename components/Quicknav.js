import React, { useContext } from 'react'
import Link from 'next/link'
import { Context } from '../context/context'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Quicknav = ({data}) => {

    const { darkMode } = useContext(Context)

    return (
        <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>

            <div className="flex-col justify-center fixed top-32 left-2 z-20 flex">
                <Link href={data.facebook}><a target="_blank" className={`${darkMode ? 'text-white' : 'text-gray-900'}  mb-20 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300`}><BsFacebook size={20} /></a></Link>
                <Link href={data.instagram}><a target="_blank" className={`${darkMode ? 'text-white' : 'text-gray-900'}  mb-20 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300`}><BsInstagram size={20} /></a></Link>
                <Link href={data.twitter}><a target="_blank" className={`${darkMode ? 'text-white' : 'text-gray-900'}  mb-20 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300`}><BsTwitter size={20} /></a></Link>
                <Link href={data.linkedin}><a target="_blank" className={`${darkMode ? 'text-white' : 'text-gray-900'}  mb-20 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300`}><BsLinkedin size={20} /></a></Link>
                <Link href={data.github}><a target="_blank" className={`${darkMode ? 'text-white' : 'text-gray-900'}  mb-20 cursor-pointer hover:opacity-60 transition-all ease-in-out duration-300`}><BsGithub size={20} /></a></Link>
            </div>

            <div className={`flex absolute top-96 -right-56 sm:-right-64 -rotate-90 z-40`}>
                <Link href={'#contact'}><p className={`ml-6 mb-0 pb-0 transition-all duration-300 ease-in-out animate-bounce hover:opacity-60 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center cursor-pointer font-medium`}><AiOutlineArrowLeft className={`mr-1`} size={24} />Contact Me</p></Link>
                <Link href={'#project'}><p className={`ml-6 mb-0 pb-0 transition-all duration-300 ease-in-out animate-bounce hover:opacity-60 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center cursor-pointer font-medium`}><AiOutlineArrowLeft className={`mr-1`} size={24} />My Work</p></Link>
                <Link href={'#experience'}><p className={`ml-6 mb-0 pb-0 transition-all duration-300 ease-in-out animate-bounce hover:opacity-60 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center cursor-pointer font-medium`}><AiOutlineArrowLeft className={`mr-1`} size={24} />My Experience</p></Link>
                <Link href={'#about'}><p className={`ml-6 mb-0 pb-0 transition-all duration-300 ease-in-out animate-bounce hover:opacity-60 text-sm sm:text-base ${darkMode ? 'text-white' : 'text-gray-900'} flex items-center cursor-pointer font-medium`}><AiOutlineArrowLeft className={`mr-1`} size={24} />About Me</p></Link>
            </div>

        </motion.div>
        </>
    )
}

export default Quicknav