import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../context/context'

const Bg = (url) => {

  const { darkMode } = useContext(Context)

  return (
    <div>
      <canvas class={`fixed z-0 w-full h-screen top-0 left-0 ${darkMode ? 'bg-gradient-to-r from-[#1a1807] to-gray-900 text-yellow-400' : 'bg-gradient-to-r from-purple-300 to-white text-purple-600'}`}></canvas>
    </div>
  )
}

export default Bg