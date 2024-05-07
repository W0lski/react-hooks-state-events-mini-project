import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
   const [task, setTask] = useState({
    text:"",
    category:"code",
   },);

   const categroyOptions = categories.map(category => {
    if(category === "All")
      return true;
      return(<option key={category}>{category}</option>)
   })

   function handleTaskChange(e){
      setTask({...task,[e.target.name]:e.target.value})
   }

   function handleFormSubmit(e){
    e.preventDefault();
    onTaskFormSubmit(task);
    setTask({...task,text:""})
   }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={task.text} 
          onChange={handleTaskChange} />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={task.category} 
          onChange={handleTaskChange}
        >
          {categroyOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;