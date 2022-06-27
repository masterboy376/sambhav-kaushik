import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../context/context'

const LineChart = ({ data, isSm }) => {
    const { darkMode, experienceBarAnimation, experienceBarRef, experienceBarSmAnimation, experienceBarSmRef } = useContext(Context)

    return (
        <div ref={isSm ? experienceBarSmRef : experienceBarRef} className="flex flex-col w-full">
            {
                data && data.map((item,index) => {
                    return <div key={index} className={`w-full flex flex-col py-1 my-1  rounded-3xl hover:scale-x-105 transition-all duration-300 ease-out`}>
                        <p className="mb-2">{item.title}</p>
                        <div className={`w-full ${darkMode?'bg-gray-700':'bg-slate-100'}`}>
                            <div className={`${item.width}`}>
                                <motion.div animate={isSm ? experienceBarSmAnimation : experienceBarAnimation} className={`w-full ${item.color} h-0.5 transition-all duration-300`}></motion.div>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default LineChart