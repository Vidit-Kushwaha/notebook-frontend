import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'

function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { ele, updateNote } = props;
    return (
        <div className="card my-2">
            <div className="card-body d-flex justify-content-around ">
                <h5 className="card-title ms-2">{ele.title}</h5>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {ele.tag}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    <div>
                        <i className="fa-solid fa-trash ms-4" onClick={() => { deleteNote(ele._id) }} />
                        <i className="fa-regular fa-pen-to-square ms-3" onClick={() => { updateNote(ele) }} />
                    </div>
            </div>
            <div>
                <p className="card-text px-4">{props.ele.description}</p>
            </div>
        </div>
    )
}

export default NoteItem
