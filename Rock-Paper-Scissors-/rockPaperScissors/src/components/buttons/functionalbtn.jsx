import React, { useContext} from 'react'
import functionalbtn from "./functionalbtn.module.css"
import { store } from '../../state'

const Functionalbtn = ({type}) => {

    const [state,dispatch] = useContext(store)
    const inlinetext = type == "rules" ? "RULES" : "PLAY AGAIN"
    
    const clicked = ()=>{

      type == "rules" ? dispatch({type:"MODULEVISIBILITY"}):"";
      if (type == "play-again"){
        dispatch({type:"RPSVISIBILITY"})
        dispatch({type:"RESULTSVISIBILITY"})
      }
    }
  return ( 
    <button type="button"
            className={functionalbtn[type]}
            onClick={clicked}
            aria-label={`${type} button`}
    >
        {inlinetext}
    </button>
  )
}

export default Functionalbtn
