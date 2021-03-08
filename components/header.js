import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
const name = 'Matthew'
export default function Header({toggle}){

  return(
    <header className={styles.header}>
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
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <section className={utilStyles.linksLG}>
            <Link href = '/about-me'> About Me</Link>
            <Link href = '/interests'> Interests</Link>
            <Link href = '/games'> Games</Link>
          </section>
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
          <h2 className={utilStyles.headingLg}>
            <Link href = '/'>{name}</Link>
          </h2>
          <section className={utilStyles.linksMD}>
            <Link href = '/about-me'>   About Me</Link>
            <Link href = '/interests'>  Interests</Link>
            <Link href = '/games'>      Games</Link>
          </section>
        </>
      )}
    </header>
  )}
