import { useState } from 'react';
import './App.css';

function App() {

  return (
    <main>
      <h1>To Do List</h1>
      <div className="input-container">
        <input id="input to-do" type="text" placeholder=''/>
        <button id="add-todo">+</button>
      </div>
      <div className="container">
        <div className="todo">
          <p>Write Code</p>
          <div className="actions">
            <input type="checkbox" />
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
