import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
export default function Interests() {
  return(
    <Layout>
      <Head>
       <title>Interests</title>
      </Head>
      <section className = {utilStyles.centerHeading}>
        Interests
      </section>
      <p>hi</p>
    </Layout>
  )
}
