import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s1={
        "name":"vidit",
        "year":"2 year"
    }
    const [state,setState]=useState(s1)
    const update=()=>{
      setTimeout(()=>{
          setState({
            "name":"varun",
            "year":"none"
           })
      },2000) 
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;