import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Interests({allPostsData}) {
  return(
    <Layout>
      <Head>
       <title>Matthew Mahoney | Interests</title>
      </Head>
      <section className = {utilStyles.centerHeading}>
        Interests
      </section>
      <p>Various articles and blog posts written by me.</p>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
       <ul className={utilStyles.list}>
         {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {date}
            </small>
            </li>
         ))}
       </ul>
     </section>
    </Layout>
  )
}
