import React, { useContext } from 'react'
import { Context } from '../context/context'
import { BsFillBrightnessHighFill, BsFillBrightnessLowFill, BsFillMenuAppFill, BsFillInfoCircleFill, BsEnvelopeFill, BsBriefcaseFill } from 'react-icons/bs'
import { AiOutlineClose, AiFillHome, AiFillProject } from 'react-icons/ai'
import LoadingBar from 'react-top-loading-bar'
import {YellowLogo, PurpleLogo} from '../components/svgs'

const Navbar = ({ active }) => {
    const { darkMode, setDarkMode, menuOpen, setMenuOpen, setIsLoading, isLoading, progress, setProgress, router } = useContext(Context)
    
    return (
        <>
            <LoadingBar
                color={darkMode?'#ffee58':`#8e24aa`}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
                loaderSpeed={500}
                height={2}
            />

                {/* overlay */}
                <div className={`${darkMode?'bg-gray-900':'bg-white'} transition-all duration-300 ease-in-out flex items-center justify-center ${isLoading ? '-translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-full h-screen z-50`}>
                    
                {/* loader logo */}
                <div className="mr-2 transition-all animate-spin duration-300 ease-in-out">
                    {darkMode?
                <YellowLogo />
                :
                <PurpleLogo />
                    }
                </div>
                    
                </div>

{/* nav */}
            <div className={`z-20 relative max-w-7xl w-full flex mx-auto justify-between items-center max-w-8xl px-4 py-3 mb-2 ${darkMode ? 'bg-gradient-to-r from-[#1a1807] to-gray-900 text-yellow-400' : 'bg-gradient-to-r from-purple-300 to-white text-purple-600'}`} >

                <button onClick={() => {
                    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
                }} className={`rounded-full ${darkMode ? 'shadow-yellow-400/40' : 'shadow-purple-600/50'} shadow-lg p-2 sm:hidden block ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} transition-all duration-300 ease-in-out hover:scale-110`}>{!menuOpen ? <BsFillMenuAppFill size={24} /> : <AiOutlineClose size={24} />}</button>

                {/* logo */}
                <div className="mr-2 transition-all duration-300 ease-in-out">
                    {darkMode?
                <YellowLogo/>
                :
                <PurpleLogo/>
                    }
                </div>

                <div className="hidden sm:flex flex-1 items-center">
                    <a onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/')
                        }, 500);
                    }} className={`ml-8 flex items-center transition-all duration-300 ease-in-out cursor-pointer font-bold ${active == 'home' ? `${darkMode ? 'bg-[#5e5e5e80]':'bg-[#e2e2e280]'} rounded-xl px-4 py-2` : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><AiFillHome className='mr-2' size={16} /> Home</a>

                    <a onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/about')
                        }, 500);
                    }} className={`flex items-center ml-8 transition-all duration-300 ease-in-out cursor-pointer font-bold ${active == 'about' ? `${darkMode ? 'bg-[#5e5e5e80]':'bg-[#e2e2e280]'} rounded-xl px-4 py-2` : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsFillInfoCircleFill className='mr-2' size={16} /> About</a>

                    <a onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/experience')
                        }, 500);
                    }} className={`flex items-center ml-8 transition-all duration-300 ease-in-out cursor-pointer font-bold ${active == 'experience' ? `${darkMode ? 'bg-[#5e5e5e80]':'bg-[#e2e2e280]'} rounded-xl px-4 py-2` : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsBriefcaseFill className='mr-2' size={16} /> Experience</a>

                    <a onClick={() => {
                        setIsLoading(true)
                        setTimeout(() => {
                            router.push('/project')
                        }, 500);
                    }} className={`flex items-center ml-8 transition-all duration-300 ease-in-out cursor-pointer font-bold ${active == 'project' ? `${darkMode ? 'bg-[#5e5e5e80]':'bg-[#e2e2e280]'} rounded-xl px-4 py-2` : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><AiFillProject className='mr-2' size={16} /> Projects</a>
                    <a onClick={() => {
                        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
                    }} className={`flex items-center cursor-pointer ml-8 transition-all duration-300 ease-in-out font-bold ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsEnvelopeFill className='mr-2' size={16} /> Contact</a>
                </div>
                <button onClick={() => {
                    darkMode ? setDarkMode(false) : setDarkMode(true)
                }} className={`rounded-full ${darkMode ? 'shadow-yellow-400/40' : 'shadow-purple-600/50'} shadow-lg p-2 ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} transition-all duration-300 ease-in-out hover:scale-110`}>{darkMode ? <BsFillBrightnessHighFill size={24} /> : <BsFillBrightnessLowFill size={24} />}</button>
            </div>


            {/* menu */}
            <div className={`absolute left-0 top-0 ${darkMode ? 'bg-gradient-to-r from-[#1a1807] to-gray-900 text-yellow-400' : 'bg-gradient-to-r from-purple-300 to-white text-purple-600'} rounded-xl ${darkMode ? 'shadow-yellow-400/40' : 'shadow-purple-600/50'} sm:hidden flex flex-col transition-all duration-300 ease-in-out ${menuOpen ? 'relative -translate-y-0 shadow-lg' : '-translate-y-full'} w-screen z-10 h-auto `}>
                <a onClick={() => {
                    setIsLoading(true)
                    setMenuOpen(false)
                    setTimeout(() => {
                        router.push('/')
                    }, 500);
                }} className={`flex items-center justify-center transition-all duration-300 ease-in-out my-4 text-center font-bold ${active == 'home' ? 'underline underline-offset-8' : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><AiFillHome className='mr-2' size={16} /> Home</a>
                <a onClick={() => {
                    setIsLoading(true)
                    setMenuOpen(false)
                    setTimeout(() => {
                        router.push('/about')
                    }, 500);
                }} className={`flex items-center justify-center transition-all duration-300 ease-in-out my-4 text-center font-bold ${active == 'about' ? 'underline underline-offset-8' : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsFillInfoCircleFill className='mr-2' size={16} /> About</a>
                <a onClick={() => {
                    setIsLoading(true)
                    setMenuOpen(false)
                    setTimeout(() => {
                        router.push('/experience')
                    }, 500);
                }} className={`flex items-center justify-center transition-all duration-300 ease-in-out my-4 text-center font-bold ${active == 'experience' ? 'underline underline-offset-8' : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsBriefcaseFill className='mr-2' size={16} /> Experience</a>
                <a onClick={() => {
                    setIsLoading(true)
                    setMenuOpen(false)
                    setTimeout(() => {
                        router.push('/project')
                    }, 500);
                }} className={`flex items-center justify-center transition-all duration-300 ease-in-out my-4 text-center font-bold ${active == 'project' ? 'underline underline-offset-8' : ``} ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><AiFillProject className='mr-2' size={16} /> Projects</a>
                <a onClick={() => {
                    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })
                    setMenuOpen(false)
                }} className={`flex items-center justify-center transition-all duration-300 ease-in-out my-4 text-center font-bold ${darkMode ? 'hover:text-yellow-500' : 'hover:text-purple-800'}`}><BsEnvelopeFill className='mr-2' size={16} /> Contact</a>
            </div>
        </>
    )
}

export default Navbar