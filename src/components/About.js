import React, { useContext, useEffect } from 'react'
import noteContext from '../contexts/notes/noteContext'

function About() {
    const a=useContext(noteContext);
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line
    },[])
  return (
    <div>
      This is about section {a.state.name} <hr/> {a.state.year}
    </div>
  )
}

export default About
