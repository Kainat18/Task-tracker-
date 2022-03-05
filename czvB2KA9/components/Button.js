import React from 'react';


export default function Button(props){
    return(
        <div>
        <button className="btn" onClick={props.onClick}>Add </button>
        </div>
    )
}