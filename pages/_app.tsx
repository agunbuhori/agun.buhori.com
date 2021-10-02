import '../styles/tailwind.css'
import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import React, { useEffect } from 'react'
import { Code, Codesandbox, Facebook, GitHub, Linkedin, Mail, Twitter } from 'react-feather'
import { useRouter } from 'next/dist/client/router'

const firebaseConfig = {
  apiKey: "AIzaSyBkYgF6vpuVgj7Qa3Vk2AOZFP5no7MwJOM",
  authDomain: "agunbuhori-project.firebaseapp.com",
  databaseURL: "https://agunbuhori-project.firebaseio.com",
  projectId: "agunbuhori-project",
  storageBucket: "agunbuhori-project.appspot.com",
  messagingSenderId: "242254988151",
  appId: "1:242254988151:web:00d78f6baadd0315859772",
  measurementId: "G-X79EY5R3EZ"
}

const app = initializeApp(firebaseConfig)

const links = [
  {component: <GitHub color="white"/>, link: 'https://github.com/agunbuhori'},
  {component: <Codesandbox color="white"/>, link: 'https://codesandbox.io/u/agunbuhori'},
  {component: <Code color="white"/>, link: 'https://hackerrank.com/agunbuhori'},
  {component: <Linkedin color="white"/>, link: 'https://linkedin.com/in/agunbuhori'},
  {component: <Twitter color="white"/>, link: 'https://twitter.com/agunbuhori'},
  {component: <Facebook color="white"/>, link: 'https://facebook.com/agunbhr'},
  {component: <Mail color="white"/>, link: 'mailto:agun.buhori@gmail.com'}
]

const Header = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-4xl bh-font text-yellow-200">Agun Buhori</h1>
    <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
    
    <div className="my-6 flex w-full space-x-4 justify-center">
      {links.map((link, index) => (
        <a href={link.link} target="_blank" rel="noreferrer" key={index}>
          {link.component}
        </a>
      ))}
    </div>
  </div>
)

const tabs = [
  {link: '/', title: 'Blog'},
  {link: '/profile', title: 'Profile'},
  {link: '/portfolio', title: 'Portfolio'}
]


const Tab = () => {
  const router = useRouter()

  return (
    <div className="mb-5 w-full flex justify-center">
      {tabs.map((tab, index) => (
        <Link key={index} passHref href={tab.link}>
          <span className={'border-b-2 transition-all p-2 text-lg font-bold '+ (router.pathname == tab.link ? 'text-yellow-200 border-yellow-200' : 'text-gray-500 border-gray-500 cursor-pointer')}>{tab.title}</span>
        </Link>
      ))}
    </div>
    )
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    getAnalytics(app)
  }, [])
  const router = useRouter()

  return (
    <div className="py-6 px-6 md:px-0 max-w-screen-sm mx-auto">
      <Header/>
      <Tab/>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
