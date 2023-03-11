import React from 'react'

function NoteItem(props) {
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body d-flex justify-content-around ">
                    <h5 className="card-title ms-2">{props.ele.title}</h5>
                    <div>
                        <i className="fa-solid fa-trash ms-4" />
                        <i className="fa-regular fa-pen-to-square ms-3" />
                    </div>
                </div>
                <div>
                    <p className="card-text px-4">{props.ele.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
