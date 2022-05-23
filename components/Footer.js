import React, { useContext } from 'react'
import Link from 'next/link'
import { Context } from '../context/context'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdCall, MdAlternateEmail, MdLocationOn } from 'react-icons/md'
import { motion } from 'framer-motion'

const Footer = () => {
    const { darkMode } = useContext(Context)



    return (
        <footer id='contact' className='max-w-7xl mx-auto'>
            <h1 className="text-3xl sm:text-4xl text-center font-bold mb-4">Contact Me</h1>

            <p className="flex items-center justify-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-200'}`}> <MdLocationOn size={24} /> </button> Uttrakhand, India</p>
            <p className="flex items-center justify-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-200'}`}> <MdCall size={24} /> </button>+91-6397511127</p>
            <p className="flex items-center justify-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-200'}`}> <MdAlternateEmail size={24} /> </button> masterboy376@gamil.com</p>

            <h2 className=" text-lg text-center my-2 font-medium title-font">Or</h2>

            <div className={`relative sm:flex-row flex-col flex mx-auto justify-between items-center max-w-8xl w-full px-4 py-6`}>

                <div className={`flex px-8 sm:px-2 flex-col mx-auto sm:w-1/2 w-full pb-6 sm:pb-0`}>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                        <input type="text" placeholder='eg: Sambhav Kaushik' id="name" name="name" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800' : 'bg-slate-200 focus:border-purple-600 border-slate-200'}`} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                        <input type="email" placeholder='eg: abc@gamil.com' id="email" name="email" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800' : 'bg-slate-200 focus:border-purple-600 border-slate-200'}`} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                        <textarea id="message" placeholder='eg: Hi there ...' name="message" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800' : 'bg-slate-200 focus:border-purple-600 border-slate-200'}`}></textarea>
                    </div>
                    <motion.button whileHover={{ scale: 1.05, transition: { duration: 0.3 }, }} whileTap={{ scale: 0.9 }} className={`w-2/3 mx-auto transition-all duration-300 ease-in-out ${darkMode ? 'text-gray-900 hover:bg-teal-600 bg-teal-500' : 'text-white hover:bg-purple-700 bg-purple-600'} border-0 py-2 px-6 rounded-2xl text-2xl`}>Send</motion.button>

                </div>

                <div className="px-8 sm:px-2 w-full sm:w-1/2">
                    <div className='mx-auto w-full border rounded-2xl border-teal-500 h-64 sm:h-96 pb-6 sm:pb-0'></div>
                </div>

            </div>


            <div className={`relative flex mx-auto justify-center items-center w-full px-8 py-4`}>

                <div className="flex items-center">
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}><BsFacebook size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsInstagram size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsTwitter size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsLinkedin size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsGithub size={24} /></p></Link>
                </div>

            </div>
            <p className="text-center font-bold pb-2">© 2022-till now | @SambhavKaushik</p>
        </footer>
    )
}

export default Footer