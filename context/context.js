import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-hook-inview'

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {

  const router = useRouter()

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [active, setActive] = useState('home')

  // sections ref
  const [homeRef, homeInView] = useInView()
  const [aboutRef, aboutInView] = useInView()
  const [experienceRef, experienceInView] = useInView()
  const [projectRef, projectInView] = useInView()
  const [contactRef, contactInView] = useInView()
  const [blogRef, blogInView] = useInView()

  const dataPie = {
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
  };
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
            x:'0',
            opacity:1,
            transition:{duration:0.5}
          })
        }
        else{
          aboutImgAnimation.start({
            x:'-100vw',
            opacity:0
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
            transition:{duration:0.5}
          })
        }
        else{
          aboutTextAnimation.start({
            x:'100vw',
            opacity:0,
          })
    }
  }, [aboutTextOnce])
  
  // experiencePie
  const experiencePieAnimation = useAnimation()
  const [experiencePieRef, experiencePieInView] = useInView()
  const [experiencePieOnce, setExperiencePieOnce] = useState(false)
  useEffect(() => {
    if(experiencePieInView==true){
      if(!experiencePieOnce==true){
      setExperiencePieOnce(true)
      }
    }
  }, [experiencePieInView])
  useEffect(() => {
      if(experiencePieOnce==true){
          experiencePieAnimation.start({
            scale:1,
            transition:{duration:0.5}
          })
        }
        else{
          experiencePieAnimation.start({
            scale:0,
          })
    }
  }, [experiencePieOnce])

  // experiencePieSm
  const experiencePieSmAnimation = useAnimation()
  const [experiencePieSmRef, experiencePieSmInView] = useInView()
  const [experiencePieSmOnce, setExperiencePieSmOnce] = useState(false)
  useEffect(() => {
    if(experiencePieSmInView==true){
      if(!experiencePieSmOnce==true){
      setExperiencePieSmOnce(true)
      }
    }
  }, [experiencePieSmInView])
  useEffect(() => {
      if(experiencePieSmOnce==true){
          experiencePieSmAnimation.start({
            scale:1,
            transition:{duration:0.5}
          })
        }
        else{
          experiencePieSmAnimation.start({
            scale:0,
          })
    }
  }, [experiencePieSmOnce])

  // experienceText
  const experienceTextAnimation = useAnimation()
  const [experienceTextRef, experienceTextInView] = useInView()
  const [experienceTextOnce, setExperienceTextOnce] = useState(false)
  useEffect(() => {
    if(experienceTextInView==true){
      if(!experienceTextOnce==true){
      setExperienceTextOnce(true)
      }
    }
  }, [experienceTextInView])
  useEffect(() => {
      if(experienceTextOnce==true){
          experienceTextAnimation.start({
            x:'0',
            transition:{duration:0.5}
          })
        }
        else{
          experienceTextAnimation.start({
            x:'-100vw',
          })
    }
  }, [experienceTextOnce])

  // experienceWorkflow
  const experienceWorkflowAnimation = useAnimation()
  const [experienceWorkflowRef, experienceWorkflowInView] = useInView()
  const [experienceWorkflowOnce, setExperienceWorkflowOnce] = useState(false)
  useEffect(() => {
    if(experienceWorkflowInView==true){
      if(!experienceWorkflowOnce==true){
      setExperienceWorkflowOnce(true)
      }
    }
  }, [experienceWorkflowInView])
  useEffect(() => {
      if(experienceWorkflowOnce==true){
          experienceWorkflowAnimation.start({
            x:'0',
            transition:{duration:0.5}
          })
        }
        else{
          experienceWorkflowAnimation.start({
            x:'-100vw',
          })
    }
  }, [experienceWorkflowOnce])

  // experienceBar
  const experienceBarAnimation = useAnimation()
  const [experienceBarRef, experienceBarInView] = useInView()
  const [experienceBarOnce, setExperienceBarOnce] = useState(false)
  useEffect(() => {
    if(experienceBarInView==true){
      if(!experienceBarOnce==true){
      setExperienceBarOnce(true)
      }
    }
  }, [experienceBarInView])
  useEffect(() => {
      if(experienceBarOnce==true){
          experienceBarAnimation.start({
            width:'auto',
            transition:{duration:0.5}
          })
        }
        else{
          experienceBarAnimation.start({
            width:'0',
          })
    }
  }, [experienceBarOnce])

  // experienceBarSm
  const experienceBarSmAnimation = useAnimation()
  const [experienceBarSmRef, experienceBarSmInView] = useInView()
  const [experienceBarSmOnce, setExperienceBarSmOnce] = useState(false)
  useEffect(() => {
    if(experienceBarSmInView==true){
      if(!experienceBarSmOnce==true){
      setExperienceBarSmOnce(true)
      }
    }
  }, [experienceBarSmInView])
  useEffect(() => {
      if(experienceBarSmOnce==true){
          experienceBarSmAnimation.start({
            width:'auto',
            transition:{duration:0.5}
          })
        }
        else{
          experienceBarSmAnimation.start({
            width:'0',
          })
    }
  }, [experienceBarSmOnce])

  // projectItem
  const projectItemAnimation = useAnimation()
  const [projectItemRef, projectItemInView] = useInView()
  const [projectItemOnce, setProjectItemOnce] = useState(false)
  useEffect(() => {
    if(projectItemInView==true){
      if(!projectItemOnce==true){
      setProjectItemOnce(true)
      }
    }
  }, [projectItemInView])
  useEffect(() => {
      if(projectItemOnce==true){
          projectItemAnimation.start({
            scale:1,
            transition:{duration:0.5}
          })
        }
        else{
          projectItemAnimation.start({
            scale:0,
          })
    }
  }, [projectItemOnce])

  // contactForm
  const contactFormAnimation = useAnimation()
  const [contactFormRef, contactFormInView] = useInView()
  const [contactFormOnce, setContactFormOnce] = useState(false)
  useEffect(() => {
    if(contactFormInView==true){
      if(!contactFormOnce==true){
      setContactFormOnce(true)
      }
    }
  }, [contactFormInView])
  useEffect(() => {
      if(contactFormOnce==true){
          contactFormAnimation.start({
            x:'0',
            opacity:1,
            transition:{duration:0.5}
          })
        }
        else{
          contactFormAnimation.start({
            x:'100vw',
            opacity:0,
          })
    }
  }, [contactFormOnce])

  // contactDetail
  const contactDetailAnimation = useAnimation()
  const [contactDetailRef, contactDetailInView] = useInView()
  const [contactDetailOnce, setContactDetailOnce] = useState(false)
  useEffect(() => {
    if(contactDetailInView==true){
      if(!contactDetailOnce==true){
      setContactDetailOnce(true)
      }
    }
  }, [contactDetailInView])
  useEffect(() => {
      if(contactDetailOnce==true){
          contactDetailAnimation.start({
            x:'0',
            opacity:1,
            transition:{duration:0.5}
          })
        }
        else{
          contactDetailAnimation.start({
            x:'-100vw',
            opacity:0,
          })
    }
  }, [contactDetailOnce])

// navbar animation 
const displayFixedAnimation = useAnimation()
    const [displayFixed, setDisplayFixed] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => { window.scrollY > 70 ? setDisplayFixed(true) : setDisplayFixed(false) })
    }, [])

    useEffect(() => {
        if (displayFixed) {
            displayFixedAnimation.set({
                y: "-100vh",
            })
            displayFixedAnimation.start({
                y: "0",
                position: 'fixed',
                zIndex: 50,
                top: 0,
                left: 0,
                transition: {
                    duration: 1,
                },
            })
        }
        else {
            displayFixedAnimation.start({
                position: 'relative',
                transition: {
                    duration: 0.5,
                },
            })
        }
    }, [displayFixed])


    const navSm = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        exit: {
            y: "-100vh",
            opacity: 0,
        },
    };

    const navInit = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        }
    };

// ------------------------------------------------------

// useEffects
useEffect(() => {
  if(homeInView){
    setActive('home')
  }
  else if(aboutInView){
    setActive('about')
  }
  else if(experienceInView){
    setActive('experience')
  }
  else if(projectInView){
    setActive('project')
  }
  else if(contactInView){
    setActive('contact')
  }
  else if(blogInView){
    setActive('blog')
  }

}, [homeInView, aboutInView, experienceInView, projectInView, contactInView, blogInView])


// ------------------------------------------------------

//function

// ------------------------------------------------------


  return (
    <Context.Provider value={{ router, darkMode, setDarkMode, menuOpen, setMenuOpen, isSending, setIsSending, aboutImgAnimation, aboutImgRef , aboutTextAnimation, aboutTextRef, experiencePieAnimation, experiencePieRef, experiencePieSmAnimation, experiencePieSmRef, experienceTextAnimation, experienceTextRef, experienceWorkflowAnimation, experienceWorkflowRef, experienceBarAnimation, experienceBarRef, experienceBarSmAnimation, experienceBarSmRef, projectItemAnimation, projectItemRef, contactFormAnimation, contactFormRef, contactDetailAnimation, contactDetailRef, dataPie, navSm, displayFixed, navInit, displayFixedAnimation, homeRef, aboutRef, experienceRef, projectRef, blogRef, contactRef, active, blogs, setBlogs }}>
      {children}
    </Context.Provider>
  )
}