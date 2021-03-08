import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import GameCard from '../components/gameCard'
import utilStyles from '../styles/utils.module.css'
import gameStyles from '../styles/game.module.css'
import React from 'react'

export default class Games extends React.Component {

  state = {
    loading: true,
    games:null,
    heroes:null,
  };

  async componentDidMount(){
    const url = "https://api.opendota.com/api/players/103266538/recentMatches";
    const url1 = "https://api.opendota.com/api/heroes";
    const games = await fetch(url);
    const gameData = await games.json();
    const heroes = await fetch(url1);
    const heroesData =await heroes.json();
    this.setState({games: gameData, heroes: heroesData, loading: false});
  }
  render(){
  return(
    <Layout>
      <Head>
        <title>Games</title>
      </Head>
      <section className = {utilStyles.centerHeading}>
        Dota
      </section>
      <h2>My Most Recent Matches</h2>
      <div className = {gameStyles.gameList}>
      {this.state.loading && !this.state.games && !this.state.heroes ? (
          <div>loading...</div>
          ):(
            <>
              {this.state.games.map((game,index) =>(
                <GameCard key = {index} game = {game} heroes = {this.state.heroes}/>
              ))}
            </>
          )}
      </div>
      </Layout>
    )
  }
}
