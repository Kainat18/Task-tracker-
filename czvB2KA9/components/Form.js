import React from 'react';


export default function Form(props){
    const[text , setText] =React.useState('')
    const[day , setDay] =React.useState('')
    const[reminder , setReminder] =React.useState(false)
     
     
     function onSubmit(e){
         e.preventDefault()
         
         if(!text){
             alert('Add text')
             return
         }
         
         props.onAdd({text , day , reminder})
         setTask('')
         setDay('')
         setReminder(false)
         
     }
     
     
    
    return(
        <form className="add-form" onSubmit={onSubmit}>
        
       <div className="form-control">
       <label>Task</label>
       <input 
       type="text" 
       placeholder="Add Task"
       value={text}
       onChange={(e)=> setText(e.target.value)}
       />
       </div>
       
       <div className="form-control">
       <label>Day & Time</label>
       <input 
       type="text" 
       placeholder="Add Day and Time"
       value={day}
       onChange={(e)=> setDay(e.target.value)}
       />
       </div>
       
       <div className="form-control">
       <label>Set Reminder</label>
       <input 
       type="checkbox"
       value={reminder}
       checked={reminder}
       onChange={(e)=> setReminder(e.currentTarget.checked)}
       />
       </div>
    
      <input 
      className="button" 
      type="submit" 
      value="Save Task" />
      
        </form>
    )
}
