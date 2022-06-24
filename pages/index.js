import React, { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../context/context'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectItem from '../components/ProjectItem'
import Typewriter from 'typewriter-effect';
import Bg from '../components/Bg'
import { Doughnut } from 'react-chartjs-2'
import { Wave, Bitmoji } from '../components/Svgs'
import { motion } from 'framer-motion'
import { AiOutlineDownload } from 'react-icons/ai'
import Quicknav from '../components/Quicknav'
import LineChart from '../components/LineChart'
import Workflow from '../components/Workflow'

const data = {
  name: 'Sambhav Kaushik',
  coverSkills: ['a Full-stack Web developer', 'a UI/UX designer', 'an App developer', 'a Data manager', 'a Logo designer', 'a 3-D modeler', 'an Animator', 'a Programmer'],
  aboutImg:"/photo2.jpg",
  about: ['I am a Software Developer located in India. I have always been interested in learning modern technologies and using them to create some awsome real world projects.', 'I am a well organised person, a problem solver, a good planner and a deep thinker. While working on a project, my primary goal is to create the best possible project at the lowest possible cost of development. For acomplishing this task I use multiple open source, and sometimes paid, tools. With this I have been able to to deliver the best user experience, at the same time, keeping the code base clean, readable and easily managable.'],
  experience: ["Since beginning my journey as a software developer nearly 2 years ago, I've done work on multiple, small, medium and large scale, projects, and collaborated with talented people to gain and exchange knowledge.", "I create successful multi-platform web and mobile apps that are fast, user friendly, and built with best practices. The main areas of my expertise is Full-stack development (front-end as well as back-end web development), Native mobile app development, UI/UX designing, Databases, Cloud computing, Blockchain, Logics and Algorithems, Cyber sequrity.", "I use multiple tools (like HTML/CSS, Javascript, Python, Java, C++, Solidity, TailwinCSS, Bootstrap, ReactJS, NextJS, NodeJS, Express, Flask, Django, MongoDB, Sanity, PostgreDB, Stapi, etc) for development to make the process easy to understand, quick and scalable. I also have some experience of working with some web builders (like Wordpress, Shopify and others)."],
  pieChart: {
    labels: ['Java', 'JavaScript', 'Python', 'HTML/CSS', 'C++', 'Solidity'],
    datasets: [
      {
        label: '# of Votes',
        data: [5, 30, 25, 15, 10, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  },
  lineChart: [
    {
      title:'UX/UI designing | Web animation',
      width:'w-10/12',
      color:'bg-green-500',
    },
    {
      title:'Full-stack web development | Logics and Algorithems',
      width:'w-full',
      color:'bg-red-500',
    },
    {
      title:'App development',
      width:'w-11/12',
      color:'bg-cyan-500',
    },
    {
      title:'Logo designing | 3D modelling | Video animation',
      width:'w-8/12',
      color:'bg-violet-500',
    },
    {
      title:'Database | Blockchain | Cloud computing | Cyber sequrity',
      width:'w-10/12',
      color:'bg-orange-500',
    },
  ],
  projects: [
    {
      img: '/evergoods.png',
      body: 'This is a modern looking E-Commerce website with great user experience and modern features.',
      url: 'https://evergoods.vercel.app/'
    },
    {
      img: '/uniswap.png',
      body: 'This is a Web 3.0 app which allow you to send crypto currency to other wallets.',
      url: 'https://uniswap-chi.vercel.app/'
    },
    {
      img: '/nft-lister.png',
      body: 'A simple website to display your nft artworks.',
      url: 'https://nft-lister.vercel.app/'
    }
  ]
}

export default function Home() {

  const { darkMode, aboutImgAnimation, aboutImgRef, aboutTextAnimation, aboutTextRef, experiencePieAnimation, experiencePieRef, experiencePieSmAnimation, experiencePieSmRef, experienceTextAnimation, experienceTextRef, experienceWorkflowAnimation, experienceWorkflowRef, projectItemRef, dataPie, homeRef, aboutRef, experienceRef, projectRef } = useContext(Context)

  return (
    <div>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
          background-color: ${darkMode ? 'rgb(17 24 39)' : 'rgb(255 255 255)'};
      }
      ::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
      }
      ::-webkit-scrollbar-corner {
          background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
          background-color: ${darkMode ? 'rgb(75 85 99)' : 'rgb(156 163 175)'};
          border: 2px solid ${darkMode ? 'rgb(75 85 99)' : 'rgb(156 163 175)'};
          border-radius: 10px;
          padding:2px
      }

      .scroll-hidden::-webkit-scrollbar {
        display:none
      }
      html {
        scroll-behavior: smooth;
      }
      `}</style>

      <Head>
        <title>sambhav-kaushik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${darkMode ? '/teal.svg' : '/purple.svg'}`} />
        <link rel="stylesheet" href={`${darkMode ? '../styles/darkscroll.css' : '../styles/lightscroll.css'}`} />
      </Head>

      {/* bg */}
      <Bg />

      {/* design  */}
      <Wave />

      {/* quiknav */}
      <Quicknav />

      {/* app  */}
      <div className={`relative z-10 min-h-screen w-full transition-all duration-300 ease-in-out ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>

        <div className="max-w-7xl w-full mx-auto">

          <Navbar active={'home'} />

          <main className='w-full min-h-screen transition-all duration-300 ease-in-out'>

            {/* cover */}
            <div ref={homeRef} id='cover' className="w-full mb-10 mt-5 flex sm:flex-row sm:items-center sm:justify-evenly justify-center flex-col min-h-screen">

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex text-2xl font-bold sm:text-4xl flex-col justify-center px-10 py-5 w-full sm:w-1/2">

                <div className={`transition-all duration-300 ease-out`}><span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Hi, I'm </span>{data.name}</div>
                <div className={`transition-all duration-300 ease-out`}><span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>I'm </span><Typewriter
                  options={{
                    strings: data.coverSkills,
                    autoStart: true,
                    loop: true,
                  }}
                /></div>

                <Link href={'/SOP.pdf'} ><a download target='_blank' className={`my-5 flex items-center text-lg sm:text-xl font-bold ${darkMode ? 'text-teal-500' : 'text-purple-600'} transition-all duration-300 ease-in-out hover:underline underline-offset-4 cursor-pointer font-medium tracking-wider text-sm`}>Download my CV <AiOutlineDownload size={24} className={`ml-1`} /></a></Link>

              </motion.div>
              <div className="w-full sm:w-1/2 py-5 max-w-sm mx-auto px-10">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="w-full">
                  <div className={`${darkMode ? 'bg-teal-100' : 'bg-purple-100'} w-auto h-auto p-4 rounded-2xl flex items-center justify-center`}>
                    <Bitmoji />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* about  */}
            <div ref={aboutRef} id='about' className="w-full pt-10 mb-10 flex items-center justify-center sm:flex-row flex-col min-h-screen">

              <div ref={aboutImgRef} className={`sm:w-1/2 w-11/12 mx-auto p-10 border-b border-l ${darkMode ? 'border-teal-500' : 'border-purple-600'}  max-w-sm mx-auto`}>
                <motion.img animate={aboutImgAnimation} className={`w-full rounded-lg`} src={data.aboutImg} alt="" />
              </div>

              <div ref={aboutTextRef} className={`w-full sm:w-1/2`}>
                <motion.div ref={aboutTextRef} animate={aboutTextAnimation} className="my-auto flex flex-col justify-start px-10 py-5 w-full">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 transition-all duration-300 ease-out">About Me</h1>
                  <p className={`text-sm:w-1/3 sm:text-base transition-all duration-300 ease-out`}><span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {data.about.map((aboutPara, index) => {
                      return <span key={index}>
                        {aboutPara}
                        <br />
                        <br />
                      </span>
                    })}
                    Looking forward to work with you. <Link href={'/SOP.pdf'}><a download target={'_blank'} className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>Download</a></Link> my CV here.</span></p>
                </motion.div>
              </div>
            </div>

            {/* experience  */}
            <div ref={experienceRef} id='experience' className=" w-full pt-10 mb-10 overflow-hidden ">
              <div className="flex sm:flex-row sm:items-center flex-col w-full">
                <div ref={experienceTextRef} className="w-full sm:w-2/3 px-10 py-5">
                  <motion.div animate={experienceTextAnimation} className=''>
                    <h1 className="sm:text-4xl text-2xl font-bold mb-4">My Experience {'&'} skills</h1>
                    <div className="text-sm:w-1/3 sm:text-base"><div className={`${darkMode ? 'text-white' : 'text-black'}`}>
                      {data.experience.map((experiencePara, index) => {
                        return <div key={index}>
                          {experiencePara}
                          <br />
                          {index == 0 ? <motion.div ref={experiencePieSmRef} animate={experiencePieSmAnimation} className="w-full sm:hidden block py-5 max-w-sm sm:w-1/3 mx-auto">
                            <Doughnut className='hover:scale-105 transition-all duration-300 ease-out' data={dataPie} />
                          </motion.div> : ''}
                          {index == 1 ? <div className={`w-full py-5 text-sm ${darkMode ? 'text-white' : 'text-black'} sm:hidden block`}>
                            {/* <div ref={experienceBarSmRef} className="flex flex-col w-full">
                              <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                                <p className="mb-2">UX/UI designing | Web animation</p>
                                <div className="w-full bg-gray-700">
                                  <div className='w-10/12'>
                                    <motion.div animate={experienceBarSmAnimation} className={`w-full bg-green-500 h-0.5 transition-all duration-300`}></motion.div>
                                  </div>
                                </div>
                              </div>
                              <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                                <p className="mb-2">Full-stack web development | Logics and Algorithems</p>
                                <div className="w-full bg-gray-700">
                                  <div className='w-full'>
                                    <motion.div animate={experienceBarSmAnimation} className={`w-full bg-red-500 h-0.5 transition-all duration-300`}></motion.div>
                                  </div>
                                </div>
                              </div>
                              <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                                <p className="mb-2">App development</p>
                                <div className="w-full bg-gray-700">
                                  <div className='w-11/12'>
                                    <motion.div animate={experienceBarSmAnimation} className={`w-full bg-cyan-500 h-0.5 transition-all duration-300`}></motion.div>
                                  </div>
                                </div>
                              </div>
                              <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                                <p className="mb-2">Logo designing | 3D modelling | Video animation</p>
                                <div className="w-full bg-gray-700">
                                  <div className='w-8/12'>
                                    <motion.div animate={experienceBarSmAnimation} className={`w-full bg-violet-500 h-0.5 transition-all duration-300`}></motion.div>
                                  </div>
                                </div>
                              </div>
                              <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                                <p className="mb-2">Database | Blockchain | Cloud computing | Cyber sequrity</p>
                                <div className="w-full bg-gray-700">
                                  <div className='w-10/12'>
                                    <motion.div animate={experienceBarSmAnimation} className={`w-full bg-orange-500 h-0.5 transition-all duration-300`}></motion.div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                    <LineChart data={data.lineChart} isSm={true} />

                          </div> : ''}
                          <br />
                        </div>
                      })}
                      Visit my <Link href={'/'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>LinkedIn</a></Link> or <Link href={'/'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>Github</a></Link> profile for more details or just <Link href={'#contact'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>contact</a></Link> me.</div></div>
                  </motion.div>

                  <div className={`w-full mt-4 ${darkMode ? 'text-white' : 'text-black'} sm:block hidden`}>
                    {/* <div ref={experienceBarRef} className="flex flex-col w-full">
                      <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">UX/UI designing | Web animation</p>
                        <div className="w-full bg-gray-700">
                          <div className='w-10/12'>
                            <motion.div animate={experienceBarAnimation} className={`w-full bg-green-500 h-0.5 transition-all duration-300`}></motion.div>
                          </div>
                        </div>
                      </div>
                      <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">Full-stack web development | Logics and Algorithems</p>
                        <div className="w-full bg-gray-700">
                          <div className='w-full'>
                            <motion.div animate={experienceBarAnimation} className={`w-full bg-red-500 h-0.5 transition-all duration-300`}></motion.div>
                          </div>
                        </div>
                      </div>
                      <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">App development</p>
                        <div className="w-full bg-gray-700">
                          <div className='w-11/12'>
                            <motion.div animate={experienceBarAnimation} className={`w-full bg-cyan-500 h-0.5 transition-all duration-300`}></motion.div>
                          </div>
                        </div>
                      </div>
                      <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">Logo designing | 3D modelling | Video animation</p>
                        <div className="w-full bg-gray-700">
                          <div className='w-8/12'>
                            <motion.div animate={experienceBarAnimation} className={`w-full bg-violet-500 h-0.5 transition-all duration-300`}></motion.div>
                          </div>
                        </div>
                      </div>
                      <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">Database | Blockchain | Cloud computing | Cyber sequrity</p>
                        <div className="w-full bg-gray-700">
                          <div className='w-10/12'>
                            <motion.div animate={experienceBarAnimation} className={`w-full bg-orange-500 h-0.5 transition-all duration-300`}></motion.div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <LineChart data={data.lineChart} isSm={false} />
                  </div>

                </div>

                <div className="flex flex-row sm:flex-col justify-start items-start px-10 py-5 w-full sm:w-1/3 ">
                  <motion.div ref={experiencePieRef} animate={experiencePieAnimation} className="w-full hidden sm:block">
                    <Doughnut className='hover:scale-105 transition-all duration-300 ease-out' data={data.pieChart} />
                  </motion.div>
                </div>

              </div>

{/* workflow  */}
              {/* <section ref={experienceWorkflowRef} className={`${darkMode ? 'text-white' : 'text-gray-900'} body-font`}>
                <motion.div animate={experienceWorkflowAnimation} className="px-5 py-5 mx-auto flex flex-col items-start flex-wrap">

                  <p className={`text-lg mb-2 ${darkMode ? 'text-teal-500' : 'text-purple-600'} text-center font-medium w-full`}>My Workflow</p>


                  <div className="flex relative py-5 w-full sm:items-center sm:w-1/2 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className={`h-full w-1 ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} pointer-events-none`}></div>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${darkMode ? 'text-white bg-teal-500' : 'text-white bg-purple-600'} relative z-10 title-font font-medium text-sm`}>1</div>
                    <div className="flex-grow sm:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className={`flex-shrink-0 w-16 h-16 shadow-lg ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-100  text-purple-600'} rounded-full inline-flex items-center justify-center`}>
                        <FaAssistiveListeningSystems size={32} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className={`font-medium title-font mb-1 text-xl`}>Understand</h2>
                        <p className="leading-relaxed">My workflow starts with listening and understanding the problem carefully.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative py-5 w-full sm:items-center sm:w-1/2 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className={`h-full w-1 ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} pointer-events-none`}></div>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${darkMode ? 'text-white bg-teal-500' : 'text-white bg-purple-600'} relative z-10 title-font font-medium text-sm`}>2</div>
                    <div className="flex-grow sm:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className={`flex-shrink-0 w-16 h-16 shadow-lg ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-100  text-purple-600'} rounded-full inline-flex items-center justify-center`}>
                        <GiBrain size={32} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className={`font-medium title-font mb-1 text-xl`}>Figure out</h2>
                        <p className="leading-relaxed">I figure out all the possible solution and plausible difficulties ahead.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative py-5 w-full sm:items-center sm:w-1/2 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className={`h-full w-1 ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} pointer-events-none`}></div>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${darkMode ? 'text-white bg-teal-500' : 'text-white bg-purple-600'} relative z-10 title-font font-medium text-sm`}>3</div>
                    <div className="flex-grow sm:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className={`flex-shrink-0 w-16 h-16 shadow-lg ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-100  text-purple-600'} rounded-full inline-flex items-center justify-center`}>
                        <GiNotebook size={32} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className={`font-medium title-font mb-1 text-xl`}>Action Plan</h2>
                        <p className="leading-relaxed">Then I make a plan and choose the tools to solve a problem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative py-5 w-full sm:items-center sm:w-1/2 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className={`h-full w-1 ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} pointer-events-none`}></div>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${darkMode ? 'text-white bg-teal-500' : 'text-white bg-purple-600'} relative z-10 title-font font-medium text-sm`}>4</div>
                    <div className="flex-grow sm:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className={`flex-shrink-0 w-16 h-16 shadow-lg ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-100  text-purple-600'} rounded-full inline-flex items-center justify-center`}>
                        <FaLaptopCode size={32} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className={`font-medium title-font mb-1 text-xl`}>Execution</h2>
                        <p className="leading-relaxed">Afterwards, I execute the plan efficiently.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex relative py-5 w-full sm:items-center sm:w-1/2 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                      <div className={`h-full w-1 ${darkMode ? 'bg-teal-500' : 'bg-purple-600'} pointer-events-none`}></div>
                    </div>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center ${darkMode ? 'text-white bg-teal-500' : 'text-white bg-purple-600'} relative z-10 title-font font-medium text-sm`}>5</div>
                    <div className="flex-grow sm:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className={`flex-shrink-0 w-16 h-16 shadow-lg ${darkMode ? 'bg-gray-800 text-teal-500' : 'bg-slate-100  text-purple-600'} rounded-full inline-flex items-center justify-center`}>
                        <FaCheckCircle size={32} />
                      </div>
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className={`font-medium title-font mb-1 text-xl`}>Completion</h2>
                        <p className="leading-relaxed">Finally, I test the product and deliver it.</p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </section> */}
              <Workflow/>

            </div>

            {/* semi-projects */}
            <div ref={projectRef} id='project' className="w-full pt-10 mb-10 overflow-hidden flex flex-col justify-center min-h-screen">
              <h1 className="text-2xl sm:text-4xl text-center font-bold mb-4 my-5">My Portfolio</h1>
              <div ref={projectItemRef} className="px-10 pb-5 w-full">

                <section className={`${darkMode ? 'text-white' : 'text-gray-900'} body-font`}>
                  <div className="w-full px-5 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">

                      {data.projects.map((project, index) => {
                        return <ProjectItem key={index} details={project} />
                      })}

                    </div>
                  </div>
                </section>

              </div>
            </div>

          </main>
        </div>

        <Footer />

      </div>

    </div>
  )
}
