import React, { useContext, useState } from 'react'
import noteContext from '../contexts/notes/noteContext'

function AddNote() {
    const context=useContext(noteContext);
    const {addNote}=context;
   const [note,setNote]= useState({title:"",description:"",tag:"general"});

   const onChange=(e)=>{
    setNote({...note,[e.target.name]:[ e.target.value]})
   }

   const handelClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
   }
    return (
        <form>
            <div className="my-3">
                <label  htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handelClick}>Submit</button>
        </form>
    )
}

export default AddNote
