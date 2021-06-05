import React, {useState,useRef} from "react"
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons";

function Navbar(){
  const [getActive, setActiveState] = useState(false);
  function handleClick(){
    setActiveState(getActive === true ? false : true);
  };
  return(
    <>
      <div className = {styles.navbar}>
        <FontAwesomeIcon icon={faBars} size="2x" onClick = {handleClick}></FontAwesomeIcon>
      </div>
      <div id = "navbar" className={getActive?styles.links:styles.hidden}>
        <Link href = "/"                 className={styles.link}>Home</Link>
        <Link href='/about-me/education' className={styles.link}>Education</Link>
        <Link href = '/interests'        className={styles.link}>Interests</Link>
        <Link href = '/games'            className={styles.link}>Games</Link>
      </div>
    </>
  )
}
  export default Navbar
