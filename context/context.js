import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-hook-inview'

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {

  const router = useRouter()

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('cover')
// ---------------------------------------------------
  // animation states 
  // aboutImg
  const aboutImgAnimation = useAnimation()
  const [aboutImgRef, aboutImgInView] = useInView()
  const [aboutImgOnce, setAboutImgOnce] = useState(false)
  useEffect(() => {
    if(aboutImgInView==true){
      if(!aboutImgOnce==true){
      setAboutImgOnce(true)
      }
    }
  }, [aboutImgInView])
  useEffect(() => {
      if(aboutImgOnce==true){
          aboutImgAnimation.start({
            scale:1,
            transition:{duration:0.3}
          })
        }
        else{
          aboutImgAnimation.start({
            scale:0,
          })
    }
  }, [aboutImgOnce])

  // aboutText
const aboutTextAnimation = useAnimation()
  const [aboutTextRef, aboutTextInView] = useInView()
  const [aboutTextOnce, setAboutTextOnce] = useState(false)
  useEffect(() => {
    if(aboutTextInView==true){
      if(!aboutTextOnce==true){
      setAboutTextOnce(true)
      }
    }
  }, [aboutTextInView])
  useEffect(() => {
      if(aboutTextOnce==true){
          aboutTextAnimation.start({
            x:'0',
            opacity:1,
            transition:{duration:0.3}
          })
          console.log(aboutTextOnce)
        }
        else{
          aboutTextAnimation.start({
            x:'100vw',
            opacity:0,
          })
    }
  }, [aboutTextOnce])
  

  // const [aboutHeadingRef, aboutHeadingInView] = useInView()
  // const [aboutParaRef, aboutParaInView] = useInView()
  // const [projectRef, projectInView] = useInView()
  // const [contactRef, contactInView] = useInView()
// ------------------------------------------------------

// useEffects 
  useEffect(() => {
    console.log(router.pathname)
  }, [router])



  return (
    <Context.Provider value={{ router, darkMode, setDarkMode, menuOpen, setMenuOpen, isLoading, setIsLoading, progress, setProgress, active, setActive, aboutImgAnimation, aboutImgRef , aboutTextAnimation, aboutTextRef }}>
      {children}
    </Context.Provider>
  )
}