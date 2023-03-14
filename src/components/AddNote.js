import React, { useContext, useState } from 'react'
import noteContext from '../contexts/notes/noteContext'

function AddNote() {
    const context=useContext(noteContext);
    const {addNote}=context;
   const [note,setNote]= useState({title:"",description:"",tag:""});

   const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value})
   }

   const handelClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag.length===0 ? "general":note.tag)
        setNote({title:"",description:"",tag:""})
   }
    return (
        <form onSubmit={handelClick}>
            <div className="my-3">
                <label  htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" onChange={onChange} value={note.title}  minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description}  minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" onChange={onChange} value={note.tag}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddNote
