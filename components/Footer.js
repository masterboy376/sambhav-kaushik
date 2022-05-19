import React, { useContext } from 'react'
import Link from 'next/link'
import { Context } from '../context/context'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
    const { darkMode, setIsLoading, router } = useContext(Context)

    return (
        <footer className='max-w-7xl mx-auto'>
            <div className={`relative sm:flex-row flex-col flex z-30 mx-auto justify-between items-center max-w-8xl w-full px-4 py-3`}>

                <div className={`flex px-8 sm:px-0 flex-col mx-auto sm:w-1/2 w-full border-b pb-6 sm:border-none sm:pb-0 ${darkMode ? 'border-yellow-400' : 'border-purple-600'}`}>
                <h1 className="text-3xl sm:text-4xl text-center font-bold mb-4 hover:scale-x-105 transition-all duration-300 ease-out cursor-pointer">Contact Me</h1>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                        <input type="text" placeholder='eg: Sambhav Kaushik' id="name" name="name" className={`transition-all duration-300 ease-in-out w-full focus:scale-105 w-full  rounded-2xl ${darkMode ? 'focus:shadow-yellow-400/40' : 'focus:shadow-purple-600/50'} focus:shadow-lg text-base outline-none  py-1 px-3 leading-8 transition-all ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} duration-200 ease-in-out`} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                        <input type="email" placeholder='eg: abc@gamil.com' id="email" name="email" className={`transition-all duration-300 ease-in-out w-full focus:scale-105 w-full  rounded-2xl ${darkMode ? 'focus:shadow-yellow-400/40' : 'focus:shadow-purple-600/50'} focus:shadow-lg text-base outline-none  py-1 px-3 leading-8 transition-all ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} duration-200 ease-in-out`} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                        <textarea id="message" placeholder='eg: Hi there ...' name="message" className={`transition-all duration-300 ease-in-out w-full focus:scale-105 rounded-2xl ${darkMode ? 'focus:shadow-yellow-400/40' : 'focus:shadow-purple-600/50'} focus:shadow-lg text-base outline-none  py-1 px-3 leading-8 transition-all ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} duration-200 ease-in-out`}></textarea>
                    </div>
                    <button className={`transition-all duration-300 ease-in-out font-bold hover:scale-105 ${darkMode ? 'hover:bg-yellow-500 bg-yellow-400 text-gray-900' : 'bg-purple-600 hover:bg-purple-700 text-white'} border-0 py-2 px-6 focus:outline-none rounded-2xl text-2xl`}>Send</button>
                    <h2 className=" text-lg text-center my-1 font-medium title-font">Or</h2>
                    <p className="text-center">Phone: +91-6397511127</p>
                    <p className="text-center">Email: masterboy376@gamil.com</p>
                </div>


            </div>
            <div className={`relative sm:flex-row flex-col flex z-30 mx-auto justify-between items-center w-full px-8 py-4`}>
                <div className={`flex justify-between max-w-xs sm:w-1/2 w-full mb-6 sm:mt-0 sm:border-none`}>
                    <a onClick={()=>{
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/')
                        }, 500);
                    }} className={`sm:mr-2 cursor-pointer mr-0 my-2 text-center hover:underline underline-offset-4' ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-700'}`}>Home</a>
                    <a onClick={()=>{
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/about')
                        }, 500);
                    }} className={`sm:mr-2 cursor-pointer mr-0 my-2 text-center hover:underline underline-offset-4' ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-700'}`}>About</a>
                    <a onClick={()=>{
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/experience')
                        }, 500);
                    }} className={`sm:mr-2 cursor-pointer mr-0 my-2 text-center hover:underline underline-offset-4' ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-700'}`}>Experience</a>
                    <a onClick={()=>{
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/project')
                        }, 500);
                    }} className={`sm:mr-2 cursor-pointer mr-0 my-2 text-center hover:underline underline-offset-4' ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-700'}`}>Projects</a>
                </div>
                <div className="flex items-center">
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer`}><BsFacebook size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsInstagram size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsTwitter size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsLinkedin size={24} /></p></Link>
                    <Link href={'/'}><p className={`${darkMode ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out hover:scale-110 ml-4 cursor-pointer`}><BsGithub size={24} /></p></Link>
                </div>
            </div>
            <p className="text-center font-bold pb-2">© 2022-till now | @SambhavKaushik</p>
        </footer>
    )
}

export default Footer