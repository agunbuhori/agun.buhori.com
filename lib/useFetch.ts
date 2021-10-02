import axios from 'axios'

export const http = axios.create({
    baseURL: "https://www.googleapis.com/blogger/v3/blogs/1874723781606441837/",
    params: {
        'key': 'AIzaSyBkYgF6vpuVgj7Qa3Vk2AOZFP5no7MwJOM'
    }
})