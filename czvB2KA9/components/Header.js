import React from 'react';
import Button from './Button';




export default function Header(props){
    return(
        <div className="container">
        <h1>Task Tracker</h1>
        <Button onClick={props.add}/>
        
        </div>
        
    )
}

/* *way of styling in inline Js*
<h1 style={{color: 'purple' ,backgroundColor: 'black'}}>Task Tracker</h1>
Or
<h1 style={headStyle}></h1>
const headStyle ={
    color: 'purple' ,
    backgroundColor: 'black',
}
*/