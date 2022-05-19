import React, {useContext,useEffect, useState} from 'react'
import { Context } from '../context/context'
import {BiUpArrow} from 'react-icons/bi'

const Top = () => {
    const {darkMode}=useContext(Context)
    const [display, setDisplay] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{window.scrollY>25?setDisplay(true):setDisplay(false)})
    }, [])
    
  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out ${display?'translate-x-0':'translate-x-20'}`}>
        <button onClick={() => {
                    window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
                }} className={`rounded-full ${darkMode ? 'shadow-yellow-400/40' : 'shadow-purple-600/50'} shadow-lg p-2 ${darkMode ? 'bg-gray-600' : 'bg-slate-200'} transition-all duration-300 ease-in-out hover:scale-110`}><BiUpArrow size={24}/></button>
    </div>
  )
}

export default Top