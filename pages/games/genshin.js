import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import GameCard from '../../components/gameCard'
import utilStyles from '../../styles/utils.module.css'
import gameStyles from '../../styles/game.module.css'
import load from '../../styles/loading.module.css'
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Genshin() {
  const [heroes, setHeroes] = useState(null);
  useEffect(()=>{
    async function cool(){
      try{
      const heroes = await fetch("https://api.genshin.dev/characters");
      const heroes1 = await heroes.json();
      setHeroes(heroes1);
    }catch(error){
      console.error(error);
    }
    }
    cool();
  })

  return(
    <Layout>
      <Head>
        <title>Matthew Mahoney | Genshin</title>
      </Head>
      <h1 className = {utilStyles.centerHeading}>
        Genshin Impact
      </h1>
      <p>This page is contentless until the genshin api's server comes back
      online. <br/>
      If you check your console you should see and error fetching data.</p>
      </Layout>
    )
}
