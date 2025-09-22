import React, { useContext,useEffect } from 'react'
import gamebuttons from "./gamebuttons.module.css"
import papersvg from "../../assets/images/icon-paper.svg"
import rocksvg from "../../assets/images/icon-rock.svg"
import scissorssvg from "../../assets/images/icon-scissors.svg"
import { store } from '../../state'

const Gamebuttons = ({symbol,clickable = true,visibilitycss}) => {

  const [state,dispatch] = useContext(store)
  let {userpick,comppick,score,numberofgamesplayed} = state

  // logic to make component reusable across the application
  const selection = symbol == "paper" ? papersvg : symbol == "rock" ? rocksvg : scissorssvg;
  // main game logic
  const clicked = ()=>{
    if (clickable){
      let symbols = ["paper","scissors","rock"]
      let pick = symbols[Math.floor(Math.random()*3)]
      dispatch({type:"USERPICK",payload:symbol})
      dispatch({type:"COMPPICK",payload:pick})
      dispatch({type:"GAMEPLAYED",payload:++numberofgamesplayed})
      dispatch({type:"RPSVISIBILITY"})
      dispatch({type:"RESULTSVISIBILITY"})
    }
  }
  useEffect(() => {
    // Winstatus update
    // draw
    if (userpick == comppick){
      dispatch({type:"WINSTATUS",payload:"DRAW"})
    }
    // lose 
    if ((userpick == "paper" && comppick =="scissors") || (userpick == "rock" && comppick == "paper") || (userpick == "scissors" && comppick == "rock")){
        dispatch({type:"WINSTATUS",payload:"YOU LOSE"})   
        // reduce score 
        if(score > 0){
          dispatch({type:"MINUS",payload:--score})
        }   
    }
    // Win
    if ((userpick == "paper" && comppick =="rock") || (userpick == "rock" && comppick == "scissors") || (userpick == "scissors" && comppick == "paper")){
        dispatch({type:"WINSTATUS",payload:"YOU WIN"})
        // add score
        if(score >= -1){
          dispatch({type:"ADD",payload:++score})
        }
    }
  }, [numberofgamesplayed]);
  
  return (
    <button type="button"
            className={`${gamebuttons[symbol]} ${gamebuttons.btncontainer} ${gamebuttons[visibilitycss]}`}
            onClick={clicked}
            aria-label={`button to select ${symbol}`}
    >
        <img className={`${gamebuttons[`${symbol}svg`]} ${gamebuttons.svg}`}
             src={selection} 
             alt={`image of a ${symbol}`}
        /> 
    </button>
  ) 
}

export default Gamebuttons
