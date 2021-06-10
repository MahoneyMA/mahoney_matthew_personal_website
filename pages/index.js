import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div  className = {utilStyles.container}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/metered-manual.png" />
        <meta
          name="description"
          content="A website coded completely by Matthew Mahoney using React and Next.js"
        />
      </Head>
      <div>
        <p className={utilStyles.heading2Xl}>
          Hi I'm Matthew.
        </p>
        <p className={utilStyles.headingLg}>
          I am a recent college graduate and aspiring sofware engineer and
          web developer. I am currently updating this website as a means of
          improving my web development skills and centralizing a place where I
          can explore and enjoy some of my hobbies.
        </p>
        <p className={utilStyles.headingLg}>
          If you are a potential employer, You can find more details or contact
          me on <a href= "https://www.linkedin.com/in/matthew-mahoney-4275b6190/" style={{textDecorationLine: "underline"}}>LinkedIn
          </a> or <a href="https://github.com/MahoneyMA" style={{textDecorationLine: "underline"}}> Github</a>
        </p>
      </div>
    </Layout>
    </div>
  )
}
