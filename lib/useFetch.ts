import { useEffect, useState } from "react"
import axios, { AxiosError, AxiosResponse } from 'axios'

export const http = axios.create({
    baseURL: "https://www.googleapis.com/blogger/v3/blogs/1874723781606441837/"
})

http.defaults.params = {}
http.defaults.params['key'] = "AIzaSyBkYgF6vpuVgj7Qa3Vk2AOZFP5no7MwJOM"

export const useFetch = <R extends any = any>(uri: string) => {
    const [fetching, setFetching] = useState(true)
    const [data, setData] = useState<R>()
    const [error, setError] = useState<AxiosError>()

    useEffect(() => {
        http.get(uri).then((response: AxiosResponse<R>) => {
            setData(response.data)
            setFetching(false)
        }).catch((error: AxiosError) => {
            setError(error)
            setFetching(false)
        })
    }, [uri])

    return { fetching, data, error }
}