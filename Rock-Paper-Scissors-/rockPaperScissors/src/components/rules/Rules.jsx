import React, { useContext } from 'react'
import rules from "../../assets/images/image-rules.svg"
import rulescss from "./rulescss.module.css"
import { store } from '../../state'

const Rules = () => {
    const [state,dispatch] = useContext(store)

    const visiblemodule = state.visiblemodule

    const clicked = ()=>{
        dispatch({type:"MODULEVISIBILITY"})
    }
  return (
    <span className={rulescss[visiblemodule]}>
        <h1 className={rulescss.heading}>
            RULES 
            <button id="rule-module-close"aria-label="closes the rules module"className={rulescss.buttontop}type='button'onClick={clicked}>X</button>
        </h1>
        <img className={rulescss.image}src={rules}alt="a module that shows the rules"/>
        <button aria-labelledby="rule-module-close"className={rulescss.button}type='button'onClick={clicked}>X</button>
    </span>
  )
}

export default Rules
