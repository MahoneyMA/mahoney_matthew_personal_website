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
        <Link href = '/interests'        >Interests</Link>
        <div className = {styles.dropdown}>
          <div className = {styles.dropbtn}>Games</div>
          <div className = {styles.dropdownContent}>
            <Link href = '/games/genshin'>Genshin</Link>
            <Link href = '/games/dota'>Dota2</Link>
          </div>
        </div>

    </div>


  )}

  export default TopNav
