import { AxiosResponse } from "axios"
import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { formatDate } from "../../components/Blog"
import { Blog, BlogResult, Item } from "../../interfaces/Blog"
import { http } from "../../lib/useFetch"
import style from '../../styles/index.module.sass'

const PostFetching = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-2 py-1">
        <div className="h-6 bg-yellow-100 rounded w-full"></div>
        <div className="h-4 bg-yellow-100 rounded w-3/4"></div>
        <div className="space-y-2 pt-6">
          <div className="h-2 bg-gray-400 rounded"></div>
          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
          <div className="h-2 bg-gray-400 rounded"></div>
          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
          <div className="h-2 bg-gray-400 rounded"></div>
          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
          <div className="h-2 bg-gray-400 rounded"></div>
          <div className="h-2 bg-gray-400 rounded w-5/6"></div>

        </div>
      </div>
    </div>
  )
}

const Post: NextPage = () => {
  const router = useRouter()
  const [fetching, setFetching] = useState(true)
  const [post, setPost] = useState<Item>()
  
  useEffect(() => {
    if (router.query.post) {
      http.get('posts/'+router.query.post).then((response: AxiosResponse<Item>) => {
        document.title = response.data.title
        setPost(response.data)
        setFetching(false)
      })
    }
  }, [router.query])
  
  return (
    <div className={style.wrapper}>
      {fetching && <PostFetching/>}
      {! fetching && (
        <>
          <h1 className="text-4xl font-extrabold text-yellow-200 bh-font">{post?.title}</h1>
          <span className="text-gray-300">{post?.author.displayName}, {formatDate(''+post?.published)}</span>

          <div className="mt-10 text-gray-50" dangerouslySetInnerHTML={{__html: ''+post?.content}}></div>
        </>
      )}
    </div>
  )
}

export default Post
