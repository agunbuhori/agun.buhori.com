import React from 'react'
import { BlogResult } from '../interfaces/Blog'
import Link from 'next/link'
import { formatDate } from '../lib/helpers'
import { useFetch } from '../lib/useFetch'
import { GetStaticProps, InferGetStaticPropsType } from 'next'


const BlogFetching = () => (
  <div className="border border-yellow-200 border-opacity-25 shadow rounded-lg p-4 w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-yellow-200 opacity-25 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-600 rounded"></div>
          <div className="h-2 bg-gray-600 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
)
  

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {fetching, data: blog} = useFetch<BlogResult>('posts')
  
  if (fetching) return <BlogFetching/>

  return (
    <div className="space-y-3">
      <h1>{props.todos}</h1> 
      {blog?.items.map((item, index) => (
        <Link key={index} passHref href={'/read/'+item.id}>
          <div data-aos="fade-up" className="rounded-lg border-2 border-yellow-200 p-4 transition-all hover:border-yellow-300 cursor-pointer">
            <h4 className="font-bold text-xl text-yellow-200 hover:text-yellow-300 transition-all">{item.title}</h4>
            <span className="text-gray-200 text-sm">{item.author.displayName}, {formatDate(item.published)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = (context) => ({
  
  props: {
    todos: 'hahaha'
  }

})

export default Blog