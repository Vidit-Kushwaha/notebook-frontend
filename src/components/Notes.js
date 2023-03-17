import React, { useContext, useEffect, useState ,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../contexts/notes/noteContext'
import NoteItem from './NoteItem';

function Notes() {

  const ref=useRef(null);
  const context = useContext(noteContext);
  const { notes, getNote, editNote } = context;
  const [note,setNote]= useState({id:"",etitle:"",edescription:"",etag:"general"});
  const navigate=useNavigate()
 
  useEffect(() => {
    if(localStorage.getItem('token'))
    getNote();
    else{
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  //opening modal and asign it data of on which it is clicked
  const updateNote=(currentNote)=>{
   ref.current.click();
   setNote({id:currentNote._id,etitle: currentNote.title,edescription: currentNote.description, etag: currentNote.tag })
  }

  const onChange=(e)=>{
    setNote({...note,[e.target.name]: e.target.value})
   }

   //editing note into ui and server
   const refClose=useRef(null)
   const handelClick=(e)=>{
        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click();
        e.preventDefault();
   }

  return (
    <>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="my-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
              <button type="button" className="btn btn-primary" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handelClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='row'>
        {
        notes.length > 0 ? (notes.map((note, index) => (
          <div className="col-md-4 my-2" key={index}>
            <NoteItem ele={note} updateNote={updateNote}/>
          </div>
        ))) : <div className="d-flex justify-content-center fw-bold fs-1">No Notes available</div>}
      </div>
    </>
  );
}

export default Notes
