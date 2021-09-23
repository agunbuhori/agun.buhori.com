import React, { useCallback, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import style from '../styles/index.module.sass'
import { Code, Codesandbox, Facebook, GitHub, Linkedin, Mail, Twitter } from 'react-feather'
import Blog from '../components/Blog'
import Profile from '../components/Profile'
import Portfolio from '../components/Portfolio'

const Header = () => {

  const links = [
    {component: <GitHub color="white"/>, link: 'https://github.com/agunbuhori'},
    {component: <Codesandbox color="white"/>, link: 'https://codesandbox.io/u/agunbuhori'},
    {component: <Code color="white"/>, link: 'https://hackerrank.com/agunbuhori'},
    {component: <Linkedin color="white"/>, link: 'https://linkedin.com/in/agunbuhori'},
    {component: <Twitter color="white"/>, link: 'https://twitter.com/agunbuhori'},
    {component: <Facebook color="white"/>, link: 'https://facebook.com/agunbhr'}
  ]

  return (
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
}

const Tab = ({active, changeTab}: {active: number, changeTab: Function}) => {
  const tabs = ["Blog", "My Profile", "Portfolio"]
  return (
    <div className="mb-5 w-full flex justify-center">
      {tabs.map((tab, index) => (
        <a href="javascript:void(0)" onClick={() => changeTab(index)} key={index} className={'border-b-2 transition-all p-2 text-lg font-bold ' + (active == index ? 'text-yellow-200 border-yellow-200' : 'text-gray-500 border-gray-500')}>{tab}</a>
      ))}
    </div>
  )
}

const TabMemo = React.memo(Tab)

const Home: NextPage = () => {
  const [active, setActive] = useState(0)

  const changeTab = useCallback((id) => {
    setActive(id)
  }, [])

  return (
    <div>
      <Head>
        <title>Agun Buhori</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        <Header/>
        <TabMemo active={active} changeTab={changeTab}/>
        {active == 0 && <Blog/>}
        {active == 1 && <Profile/>}
        {active == 2 && <Portfolio/>}
      </div>
    </div>
  )
}

export default Home
