import React from 'react';



const Task = ({ task, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    onEdit(task.id);
  };
  

  return (
    <div className='completed'>
      <input type="checkbox" checked={task.completed} readOnly />
      <span>{task.name}</span>
      
    </div>
  )
}

export default Task;