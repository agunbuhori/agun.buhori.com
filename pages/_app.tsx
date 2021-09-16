import '../styles/tailwind.css'
import '../styles/globals.sass'
import type { AppProps } from 'next/app'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
