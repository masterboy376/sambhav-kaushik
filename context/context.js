import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
  
    const router = useRouter()

    const [darkMode, setDarkMode] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      router.events.on('routeChangeComplete',()=>{
        setProgress(100)
        setIsLoading(false)
      })
    }, [router])
    


  return (
    <Context.Provider value={{router, darkMode, setDarkMode, menuOpen, setMenuOpen, isLoading, setIsLoading, progress, setProgress }}>
      {children}
    </Context.Provider>
  )
}