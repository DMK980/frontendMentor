import { createContext } from "react"
// Iniial State
export const initialState = {
    score : 0,
    visiblemodule : "containerHidden",
    visiblerps : "maincontainer",
    visibleresults : "maincontainerHidden",
    winstatus : "",
    userpick : "",
    comppick : "",
    numberofgamesplayed : 0
}

export const store = createContext()

// Reducer
export const reducer = (state,action) => {
    switch(action.type){
        // Score logic
      case "ADD":
        return {...state,score: action.payload}
      case "MINUS":
        return {...state,score: action.payload}
        // Rules Module visibility logic
      case "MODULEVISIBILITY":
        if (state.visiblemodule == "containerHidden"){
            return {
                ...state,
                visiblemodule: "containerVisible"
            }
        } else if(state.visiblemodule == "containerVisible"){
            return {
                ...state,
                visiblemodule: "containerHidden"
            }
        }
        // Rock Paper Scissors controls visibility logic
      case "RPSVISIBILITY":
        if (state.visiblerps == "maincontainer"){
            return {
                ...state,
                visiblerps: "maincontainerHidden"
            }
        } else if(state.visiblerps == "maincontainerHidden"){
            return {
                ...state,
                visiblerps: "maincontainer"
            }
        }
        // Results UI visibility
      case "RESULTSVISIBILITY":
        if (state.visibleresults == "maincontainerHidden"){
            return {
                ...state,
                visibleresults: "maincontainer"
            }
        } else {
            return {
                ...state,
                visibleresults : "maincontainerHidden"
            }
        }
        // Win status update win lose or draw
      case "WINSTATUS":
        return {...state,winstatus : action.payload}
        // User selects 
      case "USERPICK":
        return {...state,userpick : action.payload}
        // computer selects
      case "COMPPICK":
        return {...state,comppick : action.payload}
      case "GAMEPLAYED":
        return {...state,numberofgamesplayed : action.payload}
      case "SETWINNER":
        return {...state,winner : action.payload}
    }
  }

