import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'
export const siteTitle = "Matthew's Personal Website"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Header toggle = {home}/>
      <main className = {styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
