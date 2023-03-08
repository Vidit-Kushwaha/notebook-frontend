import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notes=[
        {
          "_id": "64035c8efa8519cf99346c10",
          "user": "640319e56e0c2d716915bff4",
          "title": "how about now",
          "description": "this is for me only",
          "tag": "General",
          "date": "2023-03-04T14:58:22.177Z",
          "__v": 0
        },
        {
          "_id": "64035c8ffa8519cf99346c12",
          "user": "640319e56e0c2d716915bff4",
          "title": "how about now",
          "description": "this is for me only",
          "tag": "General",
          "date": "2023-03-04T14:58:23.110Z",
          "__v": 0
        },
        {
          "_id": "64035c8ffa8519cf99346c14",
          "user": "640319e56e0c2d716915bff4",
          "title": "how about now",
          "description": "this is for me only",
          "tag": "General",
          "date": "2023-03-04T14:58:23.179Z",
          "__v": 0
        },
        {
          "_id": "64035c8ffa8519cf99346c16",
          "user": "640319e56e0c2d716915bff4",
          "title": "how about now",
          "description": "this is for me only",
          "tag": "General",
          "date": "2023-03-04T14:58:23.435Z",
          "__v": 0
        }
      ]
    const [note,setNote]=useState(notes)
    
    return(
        <NoteContext.Provider value={{note,setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;