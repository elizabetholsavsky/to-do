import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function writeTodo(e) {
    setInputVal(e.target.value)
    console.log(inputVal);
  }

  function addTodo() {
    setTodos(prevTodos => [...prevTodos, inputVal]);
    console.log(todos);
  }

  return (
    <main>
      <h1>To Do List</h1>
      <div className="input-container">
        <input type="text" placeholder="Enter To Do" onChange={writeTodo}/>
        <button onClick={addTodo}>+</button>
      </div>
      <div className="container">
        {todos.map((todo) => {
            return (
            <div className="todo">
              <p>{todo}</p>
              <div className="actions">
                <input type="checkbox" />
                <button>Delete</button>
              </div>
            </div>
            );
          })}
        
      </div>
    </main>
  )
}

export default App
