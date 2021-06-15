import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'
export const siteTitle = "Matthew's Personal Website"

export default function Layout({ children, home }) {
  return (
    <div>
      <Header toggle = {home}/>
      <main className = {styles.main}>{children}</main>
      <div className={styles.backToHome}>
      {!home && (
          <Link href="/">
            <a>← Back to home</a>
          </Link>

      )}
      </div>
    </div>
  )
}
