import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks((tasks) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedList = tasks.filter((_, i) => i !== index);
    setTasks(updatedList);
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[(index, +1)],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className="add-btn" onClick={addNewTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-up-btn" onClick={() => moveUp(index)}>
              ⬆️
            </button>
            <button className="move-down-btn" onClick={() => moveDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
