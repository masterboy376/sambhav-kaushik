import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../context/context'
import {Wave} from '../components/svgs'

const Bg = (url) => {

  const { darkMode } = useContext(Context)

  return (
    <div>
      <div className={`fixed top-0 left-0 w-full h-screen z-0 ${darkMode ? 'bg-gray-900 text-teal-500' : 'bg-white text-purple-600'}`}>
      
    </div>
    </div>
  )
}

export default Bg