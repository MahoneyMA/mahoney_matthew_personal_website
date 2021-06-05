import React, {useState, useRef} from "react"
import Link from 'next/link'
import Image from 'next/image'
import accordion from '../styles/game.module.css'
import textStyle from '../styles/text.module.css'
const name = 'Matthew'
function GameCard(props){

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);

  function handleClick(e){
    setActiveState(setActive === "" ? ":active" : "");
    setHeightState(
      setActive === ":active" ? "0px": `${content.current.scrollHeight}px`
    );

  }

  const hero_id = props.game.hero_id;
  const hero = props.heroes.find(element => element.id === hero_id);
  const game = props.game;
  const start_time = new Date(game.start_time * 1000);
  const minutes = parseInt(game.duration/60,10);
  const seconds = (game.duration%60 < 10 ? "0"+game.duration%60 : game.duration%60)

  return(
    <section>
    <button className={accordion.accordion} onClick = {handleClick}>
      <a className={textStyle.bold}>
        {game.player_slot < 128 && game.radiant_win ||
         game.player_slot >=128 && !game.radiant_win ? ('WIN'):('LOSE')}
      </a>
        {' '}Hero: {hero.localized_name}
        {' '}KDA: {game.kills}/{game.deaths}/{game.assists}
    </button>
        <div
          ref = {content}
          style = {{maxHeight: `${setHeight}`}}
          className={accordion.panel}
          >
          <div> {start_time.toString()}</div>
          <div> Match Length:{' '+minutes}:{seconds}</div>
        </div>

      </section>
    )
}

export default GameCard;
