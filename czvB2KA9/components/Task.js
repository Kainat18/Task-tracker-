import React from 'react';



export default function Task(props){

   return ( 
      <div>
      
       {props.tasks.map((task , index)=>( 
       <div
       key={index}
       className={`task ${task.reminder ? 'reminder' : ''}`} 
       onDoubleClick={()=>props.Toggle(task.id)} >
       
      <h3>{task.text}
       <img 
       onClick={()=> props.onDelete(task.id)}  
       className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp6kBqmBAS0QYZLMELvGkn35SvYkDheLnTg&usqp=CAU" />
       </h3>
       
       <p>{task.day}</p>
       </div>
       ))}
    </div>
    )

}