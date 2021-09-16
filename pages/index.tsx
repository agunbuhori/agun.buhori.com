import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import style from '../styles/index.module.sass'
import { useFetch } from '../lib/useFetch'
import { BlogResult, Item } from '../interfaces/Blog'
import { formatDate } from '../components/Blog'
import { Codesandbox, Facebook, GitHub, Linkedin, Twitter } from 'react-feather'


const Header = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl bh-font text-yellow-200">Agun Buhori</h1>
      <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
      <div className="my-6 flex w-full space-x-4 justify-center">
        <a href="https://github.com/agunbuhori" target="_blank" rel="noreferrer">
          <GitHub color="white"/>
        </a>
        <a href="https://codesandbox.io/u/agunbuhori" target="_blank" rel="noreferrer">
          <Codesandbox color="white"/>
        </a>
        <a href="https://linkedin.com/in/agunbuhori" target="_blank" rel="noreferrer">
          <Linkedin color="white"/>
        </a>
        <a href="https://twitter.com/agunbuhori" target="_blank" rel="noreferrer">
          <Twitter color="white"/>
        </a>
        <a href="https://facebook.com/agunbhr" target="_blank" rel="noreferrer">
          <Facebook color="white"/>
        </a>
      </div>
    </div>
  )
}

const BlogFetching = () => {
  return (
    <div className="border border-gray-300 shadow rounded-lg p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-400 rounded"></div>
            <div className="h-2 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blog = ({blog, fetching}: {blog: Item[] | undefined, fetching: boolean}) => {
  if (fetching) return <BlogFetching/>

  return (
    <div className="space-y-3">
      {blog?.map((item, index) => (
        <Link key={index} passHref href={'/read/'+item.id}>
          <div className="rounded-lg border border-yellow-200 p-4 hover:shadow-lg cursor-pointer">
            <h4 className="font-bold text-xl text-yellow-200">{item.title}</h4>
            <span className="text-gray-300">{item.author.displayName}, {formatDate(item.published)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

const Home: NextPage = () => {
  const {fetching, data: blog} = useFetch<BlogResult>('posts')

  return (
    <div>
      <Head>
        <title>Agun Buhori</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        <Header/>
        <Blog blog={blog?.items} fetching={fetching}/>
      </div>
    </div>
  )
}

export default Home
