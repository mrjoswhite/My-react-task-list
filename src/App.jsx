import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;