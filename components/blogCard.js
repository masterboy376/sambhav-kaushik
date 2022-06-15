import React, {useContext} from 'react'
import { Context } from '../context/context'
import Link from 'next/link'

const BlogCard = ({data}) => {
    const {darkMode}= useContext(Context)
  return (
    <div className={`w-full`}>
        <div className={`py-8 px-4 my-2 rounded-2xl shadow-lg flex flex-wrap sm:flex-nowrap ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className={`sm:w-1/4 w-full sm:mb-0 mb-4 flex-shrink-0 flex flex-col sm:border-none border-b ${darkMode?'border-white':'border-gray-900'} sm:pb-0 pb-4`}>
          <span className={`font-semibold title-font opacity-60 text-base sm:text-lg`}>By {data.author.name}</span>
          <span className={`mt-1 opacity-60 text-sm sm:text-base`}>On {new Date(data._createdAt).toLocaleString('en-US', {
                  timeZone: 'PST',
                  hour12: true,
                  timeStyle: 'short',
                  dateStyle: 'long',
                })}</span>
        </div>
        <div className={`sm:flex-grow`}>
          <h2 className={`text-lg sm:text-2xl font-medium title-font mb-2`}>{data.title}</h2>
          <p className={`text-sm sm:text-base leading-relaxed `}>{data.metaData}</p>
          <p className={`text-sm sm:text-base leading-relaxed mt-4`}><span className={`font-medium`}>Categories</span> :- {data.categories.map((category, index)=>{
            if(index==data.categories.length-1){
              return ` ${category.title}.`
            }
            else{
              return ` ${category.title},`
            }
          })}</p>
          <Link href={`/blogs/${data.slug.current}`}><a className={`inline-flex items-center mt-2 ${darkMode?'text-teal-500':'text-purple-600'} hover:underline underline-offset-4`}>Read More</a></Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard