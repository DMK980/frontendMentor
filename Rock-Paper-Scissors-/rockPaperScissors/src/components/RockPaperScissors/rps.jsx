import React, { useContext } from 'react'
import rockpaperscissors from "./rockpaperscissors.module.css"
import triangle from "../../assets/images/bg-triangle.svg"
import Gamebuttons from '../buttons/Gamebuttons'
import { store } from '../../state'

const RockPaperScissors = () => {
  const [state,dispatch] = useContext(store)
  const {visiblerps} = state
  return (
    <section className={rockpaperscissors[visiblerps]}>
        {/* triangle svg */}
        <div className={rockpaperscissors.trianglecontainer}> 
            <img className={rockpaperscissors.trianglesvg}src={triangle}alt='background image connecting the game buttons'/>
        </div>
        {/* paper svg */}
        <Gamebuttons symbol="paper"/>
        {/* rock svg */}
        <Gamebuttons symbol="rock"/>
        {/* scissors svg */}
        <Gamebuttons symbol="scissors"/>
    </section>
  )
}

export default RockPaperScissors