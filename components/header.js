import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Navbar from "./navBar.js"
import TopNav from './topNav.js'
const name = 'Matthew'

export default function Header({toggle}){

  return(
    <header className={styles.header}>
        <TopNav/>
      {toggle ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
        </>
      ) : (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={name}
          />
        </>
      )}
      <h2 className={utilStyles.heading2Xl}>
        <Link href = '/'>{name}</Link>
      </h2>


    </header>
  )}
