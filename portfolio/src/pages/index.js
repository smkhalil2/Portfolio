import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <>
    <Head>
				<title>Shadi&#39;s Portfolio</title>
				<meta name="description" content="Shadi&#39;s Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link href="/dist/output.css" rel="stylesheet"></link> */}
				{/* <link rel="icon" href="/favicon.jpeg" /> */}
				
				</Head>

        {/* Content */}
        <div>
          <Hero />
          <Projects /> 
          <Contact />
        </div>
    
    </>
  )
}
