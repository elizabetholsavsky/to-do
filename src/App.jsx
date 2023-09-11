import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function writeTodo(e) {
    setInputVal(e.target.value)
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos(prevTodos => [...prevTodos, inputVal]);
      setInputVal("")
    }
  }

  function deleteTodo(todoIndex) {
    setTodos((prevTodos) => 
    prevTodos.filter((prevTodo, prevTodoIndex) => {
      return prevTodoIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>To Do List</h1>
      <div className="input-container">
        <input type="text" placeholder="Enter To Do" value={inputVal} onChange={writeTodo}/>
        <button onClick={addTodo}>+</button>
      </div>
      <div className="container">
        {todos.map((todo, index) => {
            return (
            <div className="todo" key={index}>
              <p>{todo}</p>
              <div className="actions">
                <input type="checkbox" />
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </div>
            );
          })}
        
      </div>
    </main>
  )
}

export default App
