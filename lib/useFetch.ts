import axios from 'axios'

export const http = axios.create({
    baseURL: "https://www.googleapis.com/blogger/v3/blogs/1874723781606441837/",
    params: {
        'key': 'AIzaSyBDnsdAbwICO_6BvDKyU3Xqm1k3VpL4RRE'
    }
})
