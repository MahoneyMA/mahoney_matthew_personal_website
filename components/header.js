import React, {useState} from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import Navbar from "./navBar.js"
import TopNav from './topNav.js'
const name = 'Matthew Mahoney'

export default function Header({toggle}){

  return(
    <header className={styles.darkHeader}>
        <TopNav/>
      {toggle ? (
        <>
          <Image
            src="/images/me.jpg"
            className={styles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
        </>
      ) : (
        <>
          <Image
            src="/images/me.jpg"
            className={styles.borderCircle}
            height={108}
            width={108}
            alt={name}
          />
        </>
      )}
      <h2 className={styles.heading2Xl}>
        <Link href = '/'>{name}</Link>
      </h2>
    </header>
  )}
