import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Context } from '../context/context'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdCall, MdAlternateEmail, MdLocationOn } from 'react-icons/md'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';

const Footer = ({data}) => {
    const { darkMode, contactFormAnimation, contactFormRef, contactDetailAnimation, contactDetailRef, isSending, setIsSending, contactRef } = useContext(Context)

    const [formDetails, setFormDetails] = useState({ name: '', email: '', message: '', 'g-recaptcha-response': '' })

    const onChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
    }

    function onChangeRecaptcha(captchaValue) {
        setFormDetails({ ...formDetails, ['g-recaptcha-response']: captchaValue })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)
        await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formDetails, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then(function (response) {
                toast.success('Successfully sent the message.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { 'backgroundColor': `${darkMode ? '#1f2937' : '#f1f5f9'}`, 'color': `${darkMode ? 'white' : '#111827'}` }
                })
            }, function (error) {
                toast.error('Successfully sent the message.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { 'backgroundColor': `${darkMode ? '#1f2937' : '#f1f5f9'}`, 'color': `${darkMode ? 'white' : '#111827'}` }
                })
            });
        setIsSending(false)
        window.grecaptcha.reset();
        setFormDetails({ name: '', email: '', message: '', 'g-recaptcha-response': '' })
    }

    return (
        <>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <footer ref={contactRef} id='contact' className='max-w-7xl min-h-screen mx-auto pt-12 sm:pt-10'>
                <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2">Contact Me</h1>

                <div className={`relative sm:flex-row flex-col flex mx-auto justify-between items-center max-w-8xl w-full px-4 py-6`}>

                    <div ref={contactDetailRef} className="px-8 sm:px-2 w-full sm:w-1/2 self-start">
                        <motion.p animate={contactDetailAnimation} className="flex items-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}> <MdLocationOn size={24} /> </button> {data.location}</motion.p>
                        <motion.p animate={contactDetailAnimation} className="flex items-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}> <MdCall size={24} /> </button> {data.contactNumber}</motion.p>
                        <motion.p animate={contactDetailAnimation} className="flex items-center py-2"><button disabled={true} className={`rounded-full mr-2 shadow-lg p-2 ${darkMode ? 'bg-gray-800' : 'bg-slate-100'}`}> <MdAlternateEmail size={24} /> </button> {data.emailAddress}</motion.p>
                    </div>

                    <h2 className=" text-lg text-center my-2 font-medium title-font sm:hidden">Or</h2>

                    <div ref={contactFormRef} className={`flex px-8 sm:px-2 flex-col mx-auto sm:w-1/2 w-full pb-6 sm:pb-0 mt-2`}>

                        <form id='contactForm' onSubmit={onSubmit} className=''>

                            <motion.h2 animate={contactFormAnimation} className=" text-lg mb-2 font-medium title-font">Message Form</motion.h2>

                            <motion.div animate={contactFormAnimation} className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                                <input onChange={onChange} type="text" placeholder='eg: Sambhav Kaushik' id="name" name="name" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800 text-white' : 'bg-slate-100 text-gray-900 focus:border-purple-600 border-slate-100'}`} />
                            </motion.div>
                            <motion.div animate={contactFormAnimation} className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm ">Email</label>
                                <input onChange={onChange} type="email" placeholder='eg: abc@gamil.com' id="email" name="email" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800 text-white' : 'bg-slate-100 text-gray-900 focus:border-purple-600 border-slate-100'}`} />
                            </motion.div>
                            <motion.div animate={contactFormAnimation} className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm ">Message</label>
                                <textarea onChange={onChange} id="message" placeholder='eg: Hi there ...' name="message" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800 text-white' : 'bg-slate-100 text-gray-900 focus:border-purple-600 border-slate-100'}`}></textarea>
                            </motion.div>
                            <motion.div animate={contactFormAnimation} className="relative w-full flex justify-center mb-4">
                                <ReCAPTCHA
                                    className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                    onChange={onChangeRecaptcha}
                                />
                            </motion.div>
                            <motion.button animate={contactFormAnimation} whileHover={{ scale: 1.05, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} type='submit' className={`w-full mx-auto transition-all duration-300 ease-in-out ${darkMode ? 'text-gray-900 hover:bg-teal-600 bg-teal-500' : 'text-white hover:bg-purple-700 bg-purple-600'} border-0 py-2 px-6 rounded-2xl text-2xl`}>{isSending?'Sending in progress...':'Send'}</motion.button>

                        </form>

                    </div>

                </div>

                <div className={`relative flex mx-auto justify-center items-center w-full px-8 py-4`}>

                    <div className="flex items-center">
                        <Link href={data.facebook}><a target="_blank"><motion.p whileHover={{ scale: 1.2, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out cursor-pointer`}><BsFacebook size={24} /></motion.p></a></Link>
                        <Link href={data.instagram}><a target="_black"><motion.p whileHover={{ scale: 1.2, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out ml-4 cursor-pointer`}><BsInstagram size={24} /></motion.p></a></Link>
                        <Link href={data.twitter}><a target="_black"><motion.p whileHover={{ scale: 1.2, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out ml-4 cursor-pointer`}><BsTwitter size={24} /></motion.p></a></Link>
                        <Link href={data.linkedin}><a target="_black"><motion.p whileHover={{ scale: 1.2, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out ml-4 cursor-pointer`}><BsLinkedin size={24} /></motion.p></a></Link>
                        <Link href={data.github}><a target="_black"><motion.p whileHover={{ scale: 1.2, transition: { duration: 0.1 }, }} whileTap={{ scale: 0.9 }} className={`${darkMode ? 'text-gray-400 hover:text-teal-500' : 'text-gray-700 hover:text-purple-600'} transition-all duration-300 ease-in-out ml-4 cursor-pointer`}><BsGithub size={24} /></motion.p></a></Link>
                    </div>

                </div>
                <p className="text-center font-bold pb-2">© 2022-till now | @SambhavKaushik</p>
            </footer>
        </>
    )
}

export default Footer