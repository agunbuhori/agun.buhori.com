import { AxiosResponse } from "axios"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { Item } from "../../interfaces/Blog"
import { http } from "../../lib/useFetch"
import Head from 'next/head'
import { formatDate } from "../../lib/helpers"

const PostFetching = () => (
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-2 py-1">
      <div className="h-6 bg-yellow-200 opacity-25 rounded w-full"></div>
      <div className="h-4 bg-yellow-200 opacity-25 rounded w-3/4"></div>
      <div className="space-y-2 pt-6">
        <div className="h-2 bg-gray-600 rounded"></div>
        <div className="h-2 bg-gray-600 rounded w-5/6"></div>
        <div className="h-2 bg-yellow-200 opacity-25 rounded"></div>
        <div className="h-2 bg-gray-600 rounded w-5/6"></div>
        <div className="h-2 bg-gray-600 rounded"></div>
        <div className="h-2 bg-yellow-200 opacity-25 rounded w-5/6"></div>
        <div className="h-2 bg-gray-600 rounded"></div>
        <div className="h-2 bg-gray-600 rounded w-5/6"></div>
      </div>
    </div>
  </div>
)

const Post: NextPage = () => {
  const router = useRouter()
  const [fetching, setFetching] = useState(true)
  const [post, setPost] = useState<Item>()
  
  useEffect(() => {
    if (router.query.post) {
      http.get('posts/'+router.query.post).then((response: AxiosResponse<Item>) => {
        setPost(response.data)
        setFetching(false)
      })
    }
  }, [router.query])

  if (fetching) {
    return <PostFetching/>
  }
  
  return (
    <div>
      <Head>
        <title>{post?.title ?? 'Loading...'}</title>
      </Head>

      <h1 className="text-4xl font-extrabold text-yellow-200 bh-font">{post?.title}</h1>
      <span className="text-gray-300 text-sm">{post?.author.displayName}, {formatDate(''+post?.published)}</span>
      <div className="mt-6 text-gray-50 article" dangerouslySetInnerHTML={{__html: ''+post?.content}}></div>
    </div>
  )
}

export default Post
