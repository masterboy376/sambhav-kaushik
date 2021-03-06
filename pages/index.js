import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Context } from '../context/context'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectItem from '../components/ProjectItem'
import Typewriter from 'typewriter-effect';
import { Doughnut } from 'react-chartjs-2'
import { Wave, Bitmoji } from '../components/Svgs'
import { motion } from 'framer-motion'
import { AiOutlineDownload } from 'react-icons/ai'
import Quicknav from '../components/Quicknav'
import LineChart from '../components/LineChart'
import Workflow from '../components/Workflow'
import { client } from '../lib/sanityClient'

export default function Home({data, cvUrl}) {

  const { setActive, darkMode, aboutImgAnimation, aboutImgRef, aboutTextAnimation, aboutTextRef, experiencePieAnimation, experiencePieRef, experiencePieSmAnimation, experiencePieSmRef, experienceTextAnimation, experienceTextRef, projectItemRef, homeRef, aboutRef, experienceRef, projectRef } = useContext(Context)

  useEffect(() => {
    setActive('home')
  }, [])
  

  return (
    <>
    {
      data && <>
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
      
      <div className={`${darkMode?'bg-gray-900':'bg-white'}`}>

      <Head>
        <title>sambhav-kaushik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${darkMode ? '/teal.svg' : '/purple.svg'}`} />
      </Head>

      {/* design  */}
      <Wave />

      {/* quiknav */}
      <Quicknav data={{facebook :data.facebook, instagram :data.instagram, twitter :data.twitter, linkedin :data.linkedin, github :data.github}}/>

      {/* app  */}
      <div className={`relative z-10 min-h-screen w-full transition-all duration-300 ease-in-out ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>

        <div className="max-w-7xl w-full mx-auto">

          <Navbar active={'home'} />

          <main className='w-full min-h-screen transition-all duration-300 ease-in-out'>

            {/* cover */}
            <div ref={homeRef} id='cover' className="w-full mb-10 mt-5 flex sm:flex-row sm:items-center sm:justify-evenly justify-center flex-col min-h-screen">

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex text-2xl font-bold sm:text-4xl flex-col justify-center px-10 py-5 w-full sm:w-1/2">

                <div className={`transition-all duration-300 ease-out`}><span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Hi, I&apos;m </span>{data.name}</div>
                <div className={`transition-all duration-300 ease-out`}><span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>I&apos;m </span><Typewriter
                  options={{
                    strings: data.coverSkills,
                    autoStart: true,
                    loop: true,
                  }}
                /></div>

                <Link href={`${cvUrl}?dl=sambhav-kaushik-cv.pdf`}>
                <a className={`my-5 flex items-center text-lg sm:text-xl font-bold ${darkMode ? 'text-teal-500' : 'text-purple-600'} transition-all duration-300 ease-in-out hover:underline underline-offset-4 cursor-pointer font-medium tracking-wider text-sm`}>Download my CV <AiOutlineDownload size={24} className={`ml-1`} /></a>
                </Link>

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
                    Looking forward to work with you. <Link href={`${cvUrl}?dl=sambhav-kaushik-cv.pdf`}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>Download</a></Link> my CV here.</span></p>
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
                            <Doughnut className='hover:scale-105 transition-all duration-300 ease-out' data={{labels:data.pieChart[0].labels, datasets:[{label:data.pieChart[0].datasets[0].label,data:data.pieChart[0].datasets[0].data, borderColor:data.pieChart[0].datasets[0].borderColor, backgroundColor:data.pieChart[0].datasets[0].backgroundColor, borderWidth:data.pieChart[0].datasets[0].borderWidth}]}} />
                          </motion.div> : ''}
                          {index == 1 ? <div className={`w-full py-5 text-sm ${darkMode ? 'text-white' : 'text-black'} sm:hidden block`}>
                            <LineChart data={data.lineChart} isSm={true} />
                          </div> : ''}
                          <br />
                        </div>
                      })}
                      Visit my <Link href={'/'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>LinkedIn</a></Link> or <Link href={'/'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>Github</a></Link> profile for more details or just <Link href={'#contact'}><a className={`hover:underline underline-offset-4 transition-all duration-300 ease-in-out cursor-pointer ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>contact</a></Link> me.</div></div>
                  </motion.div>

                  <div className={`w-full mt-4 ${darkMode ? 'text-white' : 'text-black'} sm:block hidden`}>
                    <LineChart data={data.lineChart} isSm={false} />
                  </div>

                </div>

                <div className="flex flex-row sm:flex-col justify-start items-start px-10 py-5 w-full sm:w-1/3 ">
                  <motion.div ref={experiencePieRef} animate={experiencePieAnimation} className="w-full hidden sm:block">
                    <Doughnut className='hover:scale-105 transition-all duration-300 ease-out' data={{labels:data.pieChart[0].labels, datasets:[{label:data.pieChart[0].datasets[0].label,data:data.pieChart[0].datasets[0].data, borderColor:data.pieChart[0].datasets[0].borderColor, backgroundColor:data.pieChart[0].datasets[0].backgroundColor, borderWidth:data.pieChart[0].datasets[0].borderWidth}]}} />
                  </motion.div>
                </div>

              </div>

              {/* workflow  */}
              <Workflow data={data.Workflow} />

            </div>

            {/* projects */}
            <div ref={projectRef} id='project' className="w-full pt-10 mb-10 overflow-hidden flex flex-col justify-center min-h-screen">
              <h1 className="text-2xl sm:text-4xl text-center font-bold mb-4 my-5">My Portfolio</h1>
              <div ref={projectItemRef} className="px-10 pb-5 w-full">

                <section className={`${darkMode ? 'text-white' : 'text-gray-900'} body-font`}>
                  <div className="w-full px-5 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">

                      {data.projects[0].img.map((img, index) => {
                        return <ProjectItem key={index} details={{img:img, body:data.projects[0].body[index], url:data.projects[0].url[index]}} />
                      })}

                    </div>
                  </div>
                </section>

              </div>
            </div>

          </main>
        </div>

        <Footer data={{facebook :data.facebook, instagram :data.instagram, twitter :data.twitter, linkedin :data.linkedin, github :data.github, location: data.location, contactNumber: data.contactNumber, emailAddress: data.emailAddress}} />

      </div>

    </div></>
    }
    </>
  )
}

export async function getStaticProps(context) {
  let result
  let cvUrl
  await client.fetch(`*[_type == "data"]{name, 'aboutImg':aboutImg.asset->.url, coverSkills, about, experience, lineChart, "projects":[{"img":projects[].img.asset->.url, "body":projects[].body, "url":projects[].url}], pieChart, facebook, instagram, twitter, linkedin, github, location, contactNumber, emailAddress}[]`).then((results) => {
    if(results[0]){
      result = results[0]
    }
  })
  await client.fetch(`*[_type == "resume"]{"fileUrl":cv.asset->url}[]`).then((results) => {
    if(results[0]){
      cvUrl = results[0].fileUrl
    }
  })
  return {
    props: { data: JSON.parse(JSON.stringify(result)), cvUrl },
  }
}
