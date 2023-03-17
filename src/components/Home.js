import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddNote from './AddNote'
import Notes from './Notes'

function Home() {
 const navigate=useNavigate()
 useEffect(()=>{
  localStorage.getItem('token')==="" && navigate('/login')
 },[])
  return (
    
    <div className="container">
      <AddNote />
      <Notes />
    </div>
    
  )
}

export default Home
