import React, {useState,useRef} from "react"
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons";

function TopNav(){
  const [getActive, setActiveState] = useState(false);
  function toggleNav(){
    setActiveState(getActive === true ? false : true);
  };

  return(
      <div id = "myTopNav" className= {styles.topnav}>
        <Link href = "/" className={styles.active}>Home</Link>
        <Link href ='/about-me/education'>Education</Link>
        <Link href = '/interests'        >Interests</Link>
        <Link href = '/games'            >Games</Link>
        <FontAwesomeIcon icon={faBars} className = {styles.icon} size="2x" onClick = {toggleNav}></FontAwesomeIcon>
      </div>
  )}

  export default TopNav
