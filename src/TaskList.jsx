import React from 'react'

const tasks=['Learn react','Practice coding','Build projects']
const handleTasks = ()=>{
    console.log(tasks)
}

const handleClick =(task)=>{
    console.log(`You clicked on ${task}`)
}
const TaskList = () => {
  return (
    <div>
        <h1>Task List</h1>
        <button onClick={handleTasks}>Get Tasks</button>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=>handleClick(task)} >Click Me</button>
                        </li>
                    
                ))
            }
        </ul>
    </div>
  )
}

export default TaskList