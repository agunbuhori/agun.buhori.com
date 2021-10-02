import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { BlogResult } from '../interfaces/Blog'
import { formatDate } from '../lib/helpers'
import { http } from '../lib/useFetch'
import { AxiosResponse } from 'axios'
import { NextPage } from 'next'

const BlogFetching = () => (
  <div className="border border-yellow-200 border-opacity-25 shadow rounded-lg p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 bg-yellow-200 opacity-25 rounded w-full"></div>
        <div className="h-4 bg-yellow-200 opacity-25 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
)

const Index: NextPage = () => {
  const [fetching, setFetching] = useState(true)
  const [blog, setBlog] = useState<BlogResult>()

  useEffect(() => {
    http.get('posts').then((response: AxiosResponse<BlogResult>) => {
      setFetching(false)
      setBlog(response.data)
    })
  }, [])
  
  if (fetching) return <BlogFetching/>
  

  return (
    <div className="space-y-3">
      <Head>
          <title>Agun Buhori</title>
      </Head>

      {blog?.items.map((item, index) => (
        <Link key={index} passHref href={'/read/'+item.id}>
          <div data-aos="fade-up" className="rounded-lg border-2 border-yellow-200 p-4 transition-all hover:border-yellow-200 cursor-pointer">
            <h4 className="font-bold text-xl text-yellow-200 hover:text-yellow-200 transition-all">{item.title}</h4>
            <span className="text-gray-200 text-sm">{item.author.displayName}, {formatDate(item.published)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Index