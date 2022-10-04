import React, {useState} from "react";
import Task from "./Task.js"

function TaskList({ tasks }) {

  const [myTasks, setMyTasks] = useState(tasks)

  function onDeleteTask(text) {
    const updatedTasks = myTasks.filter((task) => task.text !== text)
    setMyTasks(updatedTasks)
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {myTasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
