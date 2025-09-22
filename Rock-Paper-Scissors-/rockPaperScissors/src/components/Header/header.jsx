import React, { useContext,useEffect} from 'react'
import header from "./header.module.css"
import { store } from '../../state'

const Header = () => {
  let [state,dispatch] = useContext(store)
  let {score} = state;

  return (
    <header className={header.header}>
        <h1 className={header.textheading}aria-label='main heading'>ROCK<br></br>PAPER<br></br>SCISSORS</h1>
        <section className={header.score}>
            <h4 className={header.scoreheader}>SCORE</h4>
            <h2 className={header.scorenumber}>{score}</h2>
        </section>
    </header>
  )
}

export default Header
