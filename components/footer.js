import React from "react"
import Link from 'next/link'
import styles from '../styles/footer.module.css'
const name = 'Matthew Mahoney'

export default function Footer(){

  return(
    <div className = {styles.footer}>
      <p>Website design done entirely by {name}</p>
      <ul className = {styles.bottomNav}>
        <li><Link href= '/'><a>home</a></Link></li>
        <li><Link href= '/education'><a>education</a></Link></li>
        <li><Link href= '/interests/blog'><a>blog</a></Link></li>
        <li><Link href= '/interests/dota'><a>dota</a></Link></li>
      </ul>
    </div>

  )}
