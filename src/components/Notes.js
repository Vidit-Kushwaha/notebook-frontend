import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem';

function Notes() {
  const context = useContext(noteContext);
  const { notes } = context
  return (

    <div className='row'>
      {
          notes.map((ele,key) => {
          return <div className="col-md-4 my-2">
          <NoteItem ele={ele} key={key} />
          </div>
        })
      }
         </div>
  )
}

export default Notes
