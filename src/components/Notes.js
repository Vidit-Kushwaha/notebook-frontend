import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes } = context
  return (
    <div>
      {
          notes.map((ele,key) => {
          return <NoteItem ele={ele} key={key} />
        })
      }
    </div>
  )
}

export default Notes
