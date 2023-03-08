import React,{useContext} from 'react'
import noteContext from '../contexts/notes/noteContext'

function Home() {
  const context=useContext(noteContext);
  const {note, setNote}=context
  return (
    <div class="container">
      this is home
      {
        note.map((ele)=>{
        return  ele.title
        })
      }
    </div>
  )
}

export default Home
