import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function AboutMe() {
  return(
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section className = {utilStyles.centerHeading}>
        About Me
      </section>
      <p>It was a joke, a banter, you piece of idiot</p>
    </Layout>
  )
}
