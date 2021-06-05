import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import GameCard from '../components/gameCard'
import utilStyles from '../styles/utils.module.css'
import gameStyles from '../styles/game.module.css'
import load from '../styles/loading.module.css'
import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function Games() {


  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);
  const [offset, setOffset] = useState(0);
  const [activeURL, setURL] = useState("https://api.opendota.com/api/players/103266538/matches?limit=5&offset=0")
  const [limit,setLimit] = useState(5);
  let url11 = `https://api.opendota.com/api/players/103266538/matches?limit=${limit}&offset=${offset}`
//Makes an api call to load the hero data of dota 2 from an external source.
//Should only load the hero data once.
  const heroesURL = "https://api.opendota.com/api/heroes";
  useEffect(()=>{
    async function getHeroes(){
      const hero =  await fetch(heroesURL);
      const heroesData = await hero.json();
      setHeroes(heroesData);
    }
    getHeroes();
  },[loading])

//Loads 5 games worth of data, based on the current state of offset.
//Everytime the url changes, the effect executes.
  let url = "https://api.opendota.com/api/players/103266538/matches?limit=5&offset=";
  useEffect(()=>{
    async function getGames(){
      const gamer = await fetch(url11);
      const gameData = await gamer.json();
      setGames(gameData);
    }
    getGames();
  },[url11]);

//Checks to see if the hero data and inital game data are loaded, and if they are,
//changes to false, allowing the content of the page to render.
  useEffect(()=>{
    if(games && heroes){
      setLoading(false);
    }
  });

//Everytime the offset changes, remake the url link to get data from.
  useEffect(()=>{
    setURL(url+(offset*5))
  },[offset])

  return(
    <Layout>
      <Head>
        <title>Matthew Mahoney | Games</title>
      </Head>
      <h1 className = {utilStyles.centerHeading}>
        Dota
      </h1>
      <h2>My Most Recent Matches</h2>
      <div className = {gameStyles.gameList}>
      {loading ? (
        <>
          <div className={load.lds_ring}><div></div><div></div><div></div><div></div></div>
        </>
        ):(
            <>
              {games.map((game,index) =>(
                <GameCard key = {index} game = {game} heroes = {heroes}/>
              ))}
            </>
          )}
      </div>
      <div className ={gameStyles.nav}>
        <FontAwesomeIcon icon={faArrowLeft} size="2x"
           onClick={()=>setOffset(offset > 0 ? offset - 1:offset)}></FontAwesomeIcon>
         <div className ={gameStyles.page}>{offset + 1}</div>
        <FontAwesomeIcon icon={faArrowRight} size="2x"
           onClick={()=>setOffset(offset < 9 ?offset + 1:offset)}></FontAwesomeIcon>
      </div>
      </Layout>
    )
}
