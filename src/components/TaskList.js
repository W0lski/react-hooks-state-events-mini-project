import React from "react";
import Task  from "./Task";

function TaskList({tasks,handleDeleteClick}) {
  let tasklist=tasks.map(task=>{
    const {category, text} = task;
    return(
      <Task key={text} category={category} text={text} deleteTask={handleDeleteClick} />
    )
  })
  return (
    <div className="tasks">
      
      {tasklist}
    </div>
  );
}

export default TaskList;