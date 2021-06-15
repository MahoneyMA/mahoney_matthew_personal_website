import {useState} from "react"
import Link from 'next/link'
import styles from '../styles/header.module.css'
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
        <div className = {styles.dropdown}>
          <div className = {styles.dropbtn}>Interests</div>
          <div className = {styles.dropdownContent}>
            <Link href = '/interests/dota'>Dota 2</Link>
            <Link href = '/interests/blog'>Blog</Link>
          </div>
        </div>

    </div>


  )}

  export default TopNav
