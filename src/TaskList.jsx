import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Aprender a Programar React', completed: false },
    { id: 2, name: 'Aprender a Programar MongoDb', completed: true },
    { id: 3, name: 'Aprender a Programar Javascrip', completed: false },
    { id: 1, name: 'Aprender a Programar Angular', completed: false },
    { id: 2, name: 'Aprender a Programar Sql', completed: true },
    { id: 3, name: 'Aprender a Programar Java', completed: false },
  ]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: tasks.length + 1,
        name: newTask,
        completed: false,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Ingresa Nuevo Tema" />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;