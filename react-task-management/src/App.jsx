import React from 'react';
import { Routes, Route } from 'react-router';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import './App.css'

function App() {
  const tasks = [
    { id: 1, title: "Foundations", description: "Learn JavaScript foundations (i.e. arrays, functions, strings, etc.)"},
    { id: 2, title: "Unit 1: Frontend Development", description: "Learn advanced JavaScript, HTML, CSS, and React"},
    { id: 3, title: "Unit 2: Backend Development", description: "Learn about Java, databases, servers, etc."}
  ];

  return (
    <div>
      <Routes>
        <Route path='/' element={<TaskList tasks={tasks} />} />
        <Route path='/task/:id' element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </div>
  )
}

export default App;