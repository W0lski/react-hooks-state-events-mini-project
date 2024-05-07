import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasksToDisplay, setTasksToDisplay]= useState(TASKS);
  
  function handleCategoryClick(category){
    setTasksToDisplay(TASKS.filter(task => {
      if (category==="All")return true;
      return task.category === category;
    }));
  }

  function handleDeleteClick(text){
    setTasksToDisplay(tasksToDisplay.filter(task => !(task.text=== text)));
  }

  function onTaskormSubmit (e){
    setTasksToDisplay([...tasksToDisplay,e]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleCategoryClick={handleCategoryClick}
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskormSubmit}
      />
      <TaskList 
        tasks={tasksToDisplay} 
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}

export default App;