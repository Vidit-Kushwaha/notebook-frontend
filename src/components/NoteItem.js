import React, {useContext} from 'react'
import noteContext from '../contexts/notes/noteContext'

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote}=context;
    return (
            <div className="card my-2">
                <div className="card-body d-flex justify-content-around ">
                    <h5 className="card-title ms-2">{props.ele.title}</h5>
                    <div>
                        <i className="fa-solid fa-trash ms-4" onClick={()=>{deleteNote(props.ele._id)}} />
                        <i className="fa-regular fa-pen-to-square ms-3" />
                    </div>
                </div>
                <div>
                    <p className="card-text px-4">{props.ele.description}</p>
                </div>
            </div>
    )
}

export default NoteItem
