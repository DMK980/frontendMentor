import React, { useContext, useEffect} from 'react'
import results from "./results.module.css"
import Gamebuttons from '../buttons/Gamebuttons';
import { store } from '../../state';
import Functionalbtn from '../buttons/functionalbtn';

const Results = () => {
    const [state,dispatch] = useContext(store)
    let {userpick,comppick,visibleresults,winstatus} = state
    let userwinner =  winstatus == "YOU WIN" ? "winner":"notset";
    let compwinner = winstatus == "YOU LOSE" ? "compwinner" :"notset";
  return (
    <section className={results[visibleresults]}> 
        <div className={`${results.leftsidecontainer} ${results.symbolcontainers}`}>
            <div className={`${results.usersymbol} ${results.symbols} ${results[`${userwinner}`]}`}>
                <Gamebuttons symbol={userpick} clickable={false}/>
            </div> 
            <h3 className={results.subheader}>YOU PICKED</h3>
        </div>
        <div className={`${results.rightsidecontainer} ${results.symbolcontainers}`}>
            <div className={`${results.compsymbol} ${results.symbols} ${results[`${compwinner}`]}`}>
                <Gamebuttons symbol = {comppick} clickable={false}visibilitycss={"animate"}/>
            </div>
            <h3 className={results.subheader}>THE HOUSE PICKED</h3>
        </div>
        <div className={results.announcement}>
            <h1 className={results.header}>{state.winstatus}</h1>
            <Functionalbtn type="play-again"/>
        </div>
    </section>
  )
}

export default Results
