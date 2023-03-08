import React from 'react'

function NoteItem(props) {
    return (
            <div className="card my-3 " style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.ele.title}</h5>
                        <p className="card-text">{props.ele.description}</p>
                    </div>
            </div>
    )
}

export default NoteItem
