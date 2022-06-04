import React, {useContext} from 'react'
import { Context } from '../context/context'

const BlogCard = () => {
    const {darkMode}= useContext(Context)
  return (
    <div>
        <div className={`py-8 px-4 my-2 rounded-2xl flex flex-wrap sm:flex-nowrap ${darkMode ? 'bg-[#26323880]' : 'bg-[#e2e8f080]'}`}>
        <div className={`sm:w-64 sm:mb-0 mb-4 flex-shrink-0 flex flex-col`}>
          <span className={`font-semibold title-font opacity-80 text-base sm:text-lg`}>CATEGORY</span>
          <span className={`mt-1 opacity-80 text-sm sm:text-base`}>12 Jun 2019</span>
        </div>
        <div className={`sm:flex-grow`}>
          <h2 className={`text-lg sm:text-2xl font-medium title-font mb-2`}>Bitters hashtag waistcoat fashion axe chia unicorn</h2>
          <p className={`text-sm sm:text-base leading-relaxed `}>Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
          <a className={`inline-flex items-center mt-4 ${darkMode?'text-teal-500':'text-purple-600'}`}>Learn More
            {/* <svg className={`w-4 h-4 ml-2`} viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg> */}
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard