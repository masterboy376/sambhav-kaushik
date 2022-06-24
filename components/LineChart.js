import React, {useContext} from 'react'
import { motion } from 'framer-motion'
import { Context } from '../context/context'

const LineChart = ({data, isSm}) => {
    const { experienceBarAnimation, experienceBarRef, experienceBarSmAnimation, experienceBarSmRef } = useContext(Context)

  return (
    <div ref={isSm? experienceBarSmRef : experienceBarRef} className="flex flex-col w-full">
        {
            data && data.map((item)=>{
                return <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                <p className="mb-2">{item.title}</p>
                <div className="w-full bg-gray-700">
                  <div className={`${item.width}`}>
                    <motion.div animate={isSm? experienceBarSmAnimation : experienceBarAnimation} className={`w-full ${item.color} h-0.5 transition-all duration-300`}></motion.div>
                  </div>
                </div>
              </div>
            })
        }
                              {/* <div className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
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
                              </div> */}

                            </div>
  )
}

export default LineChart