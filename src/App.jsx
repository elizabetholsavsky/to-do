import { useState, useEffect } from 'react';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';
import './App.css';

function App() {
  // initialize state to the value from local storage or an empty array if it doesn't exist
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputVal, setInputVal] = useState("");

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal !== "") {
      setTodos(prevTodos => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function deleteTodo(todoIndex) {
    setTodos(prevTodos =>
      prevTodos.filter((_, prevTodoIndex) => prevTodoIndex !== todoIndex)
    );
  }

  // update local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer 
        inputVal={inputVal} 
        writeTodo={writeTodo} 
        addTodo={addTodo}
      />
      <TodoContainer
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
