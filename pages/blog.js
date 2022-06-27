import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/context'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import { client } from '../lib/sanityClient'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = ({ data, totalBlogs }) => {

  const [searchValue, setSearchValue] = useState('')
  const [currentCount, setCurrentCount] = useState(10)

  const onChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (searchValue.length != 0) {
      console.log(data[0])
      let newBlogsArray = [...data]
      for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().includes(searchValue.toLowerCase()) || data[i].author.name.toLowerCase().includes(searchValue.toLowerCase()) || data[i].metaData.toLowerCase().includes(searchValue.toLowerCase()) ||
          new Date(data[i]._createdAt).toLocaleString('en-US', {
            timeZone: 'IST',
            hour12: true,
            timeStyle: 'short',
            dateStyle: 'long',
          }).includes(searchValue.toLowerCase())) {
          continue
        }
        else {
          newBlogsArray.splice(i, 1)
          continue
        }
      }
      setBlogs(newBlogsArray)
    }

    else {
      setBlogs(data)
    }
  }, [searchValue])

  const { darkMode, setActive, blogs, setBlogs } = useContext(Context)
  useEffect(() => {
    if (data) {
      setBlogs(data)
    }
  }, [data])

  useEffect(() => {
    setActive('blog')
  }, [])

  const fetchMoreBlogs = async () => {
    let rawData = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/fetchBlogs`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ currentCount })
    })
    const parsedData = await rawData.json()
    if (parsedData.success) {
      setCurrentCount(currentCount + 10)
      for (let blog of parsedData.blogs) {
        data.push(blog)
      }
    }
  }

  return (
    <>
    <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
          background-color: ${darkMode ? 'rgb(17 24 39)' : 'rgb(255 255 255)'};
      }
      ::-webkit-scrollbar-button {
          display: none;
          width: 0;
          height: 0;
      }
      ::-webkit-scrollbar-corner {
          background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
          background-color: ${darkMode ? 'rgb(75 85 99)' : 'rgb(156 163 175)'};
          border: 2px solid ${darkMode ? 'rgb(75 85 99)' : 'rgb(156 163 175)'};
          border-radius: 10px;
          padding:2px
      }

      .scroll-hidden::-webkit-scrollbar {
        display:none
      }
      html {
        scroll-behavior: smooth;
      }
      `}</style>

    <div className={`${darkMode?'bg-gray-900':'bg-white'}`}>

      <Head>
        <title>sambhav-kaushik | blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${darkMode ? '/teal.svg' : '/purple.svg'}`} />
      </Head>


      {/* app  */}
      <div className={`relative z-10 min-h-screen w-full transition-all duration-300 ease-in-out ${darkMode ? 'text-teal-500' : 'text-purple-600'}`}>

        <div className="max-w-7xl w-full mx-auto">

          {/* navbar */}
          <Navbar />

          <main className='w-full min-h-screen transition-all duration-300 ease-in-out'>

            {/* blogs */}
            <div id='blogs' className="w-full pt-10 mb-10 overflow-hidden flex flex-col min-h-screen">

              <div className=" px-10 flex items-center w-full justify-between">
                <h1 className="text-2xl sm:text-4xl text-center font-bold mb-4 my-5 mr-4">Blogs</h1>
                <input onChange={onChange} type="text" placeholder='Search by title, date, metadata here' id="searchQuery" name="searchQuery" className={`transition-all duration-300 ease-in-out w-full border rounded-2xl text-base py-1 px-3 max-w-lg leading-8 outline-none focus:shadow-lg ${darkMode ? 'bg-gray-800 focus:border-teal-500 border-gray-800 text-white' : 'bg-slate-100 text-gray-900 focus:border-purple-600 border-slate-100'}`} />
              </div>

              <div className="px-10 pb-5 w-full">

                <section className={`${darkMode ? 'text-white' : 'text-gray-900'} body-font`}>
                  <div className="w-full py-4 mx-auto flex flex-col">
                    <InfiniteScroll
                      dataLength={currentCount}
                      next={fetchMoreBlogs}
                      hasMore={!(currentCount >= totalBlogs)}
                      loader={<AiOutlineLoading3Quarters className={`animate-spin mx-auto mt-4 mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`} size={32} />}
                      endMessage={
                        <>
                          <hr className={`mt-4 mx-auto opacity-70 border ${darkMode ? 'border-white' : 'border-gray-900'} w-64`} />
                        </>

                      }
                    >
                      {
                        blogs.length != 0 ?
                          blogs.map((blog) => {
                            return <BlogCard key={blog.slug.current} data={blog} />
                          })
                          :
                          <p className="sm:text-base text-sm text-center w-full mt-36">Oops! No blog to display.🤷‍♂️</p>
                      }
                    </InfiniteScroll>
                  </div>
                </section>

              </div>
            </div>


          </main>
        </div>

        {/* footer */}
        <p className="text-center font-bold pb-2">© 2022-till now | @SambhavKaushik</p>

      </div>

    </div>
    </>
  )
}

export async function getStaticProps(context) {
  let blogsArray = []
  let totalBlogs
  await client.fetch(`*[_type == "post"]{ title, slug, author->,'authorImg':author->image.asset->, 'mainImage':mainImage.asset->, categories[]->, body, metaData, _createdAt}`).then((blogs) => {
    totalBlogs = blogs.length
    blogsArray = blogs.splice(0, 10)
  })
  return {
    props: { data: JSON.parse(JSON.stringify(blogsArray)), totalBlogs },
  }
}

export default Blog