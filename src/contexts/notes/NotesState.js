import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const noteInitial=[
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
        },
      ]
    const [notes,setNotes]=useState(noteInitial);

    //Adding note
    const addNote=(title,description,tag)=>{
      const n=[{
        "_id": "64035c8efa8519cf99346c1d0",
        "user": "640319e56e0c2d716915bff4",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-03-04T14:58:22.177Z",
        "__v": 0
      },]
      setNotes(notes.concat(n)) 
    }

    //Deleting note
    const deleteNote=(id)=>{
      console.log("delete "+id)
     const newNote= notes.filter((note)=>{ return note._id!==id})
      setNotes(newNote)
    }
    //Editing note
    const editNote=(id)=>{

    }

    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;