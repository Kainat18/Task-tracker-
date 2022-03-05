import React from 'react';
import Header from './components/Header';
import Task from './components/Task';
import Form from './components/Form'


export default function App(){
    const [showAddTask , setShowAddTask] = React.useState(false)
    const [tasks , setTasks] = React.useState([
     {
         id: 1,
         text: "Doctor's Appointment",
         day: '5th March at 2:30 pm',
         reminder: true,
     },   
    {
         id: 2,
         text: "Meeting at Office",
         day: '7th March at 1:30 pm',
         reminder: false,
     } ,  
    
        {
         id: 3,
         text: "Shopping",
         day: '10th March at 4:30 pm',
         reminder: true,
     },   
    ])
    
    function addTask(task){
        const id = Math.floor(Math.random()* 10000) +1
       const newTask={id , ...task}
       setTasks([...tasks , newTask])
    }
    
    function Delete(id){
        setTasks(tasks.filter((task)=> task.id !== id))
    }
    
    function Toggle(id){
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : 'task'))
        
    }
    function Add(){
        setShowAddTask(!showAddTask)
    }
    
    return(
        <div className="main">
        <Header add ={Add}/>
        {showAddTask && <Form onAdd={addTask}/>}
        <Task tasks={tasks} 
        key={tasks.id}
        onDelete={Delete}
        Toggle={Toggle}
        /> 
         
        </div>
        
    )
}