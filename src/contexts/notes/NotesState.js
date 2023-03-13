import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = []
  const [notes, setNotes] = useState(noteInitial);

  //geting a note from data base using auth-token
  const getNote = async () => {
    const url = `${host}/api/notes/fetchnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzE5ZTU2ZTBjMmQ3MTY5MTViZmY0In0sImlhdCI6MTY3NzkzMTc3N30.elNASmzeD64vEYKx-SrvadU6zEQt63fXQMttaPkNh3E"
      },
    });
    const json = await response.json()
    setNotes(json);
    return json;
  }

  //Adding note
  const addNote = async (title, description, tag) => {

    const url = `${host}/api/notes/addnotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzE5ZTU2ZTBjMmQ3MTY5MTViZmY0In0sImlhdCI6MTY3NzkzMTc3N30.elNASmzeD64vEYKx-SrvadU6zEQt63fXQMttaPkNh3E"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    setNotes(notes.concat(json))
    console.log(json)
  }

  //Deleting note
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzE5ZTU2ZTBjMmQ3MTY5MTViZmY0In0sImlhdCI6MTY3NzkzMTc3N30.elNASmzeD64vEYKx-SrvadU6zEQt63fXQMttaPkNh3E"
      }
    });
    const json = await response.json();
    console.log(json)
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)
  }

  //Editing note
  const editNote = async (id, title, description, tag) => {

    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMzE5ZTU2ZTBjMmQ3MTY5MTViZmY0In0sImlhdCI6MTY3NzkzMTc3N30.elNASmzeD64vEYKx-SrvadU6zEQt63fXQMttaPkNh3E"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json =await response.json();
    console.log(json)

    //logic to edit in client side
    const newNotes=JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag=tag
        break;
      }
    }
    setNotes(newNotes)
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;