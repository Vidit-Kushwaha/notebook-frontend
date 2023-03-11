import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

function Home() {
  
  return (
    <div className="container">
      <AddNote/>
      <div className="col my-3">
        <Notes/>
      </div>
    </div>
  )
}

export default Home
