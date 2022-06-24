import React, {useContext} from 'react'
import { motion } from 'framer-motion'
import { Context } from '../context/context'
import { GiBrain, GiNotebook } from 'react-icons/gi'
import { FaAssistiveListeningSystems, FaLaptopCode, FaCheckCircle } from 'react-icons/fa'

const Workflow = () => {
    const { experienceWorkflowAnimation, experienceWorkflowRef, darkMode } = useContext(Context)

  return (
    <section ref={experienceWorkflowRef} className={`${darkMode ? 'text-white' : 'text-gray-900'} body-font`}>
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
              </section>
  )
}

export default Workflow