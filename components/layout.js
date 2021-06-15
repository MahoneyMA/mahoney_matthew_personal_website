import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons";
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
            <a><FontAwesomeIcon icon={faHome} size="2x" id="backToHome"></FontAwesomeIcon></a>
          </Link>

      )}
      </div>
    </div>
  )
}
