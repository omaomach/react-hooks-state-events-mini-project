import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [buttonFilter, setButtonFilter] = useState("All")

  const updatedTasks = taskList.filter((task)=> {
    if (buttonFilter === "All") {
      return true
    }else {
      return task.text === buttonFilter
    }
  })

  function taskFormSubmit(newTask) {
    const updateTasks = [...updatedTasks, newTask]
    setTaskList(updateTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} buttonFilter={buttonFilter} setButtonFilter={setButtonFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskFormSubmit}/>
      <TaskList tasks={updatedTasks}/>
    </div>
  );
}

export default App;
