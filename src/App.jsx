import { useState } from 'react';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';
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
      <InputContainer 
        inputVal={inputVal} 
        writeTodo={writeTodo} 
        addTodo={addTodo}
      />
      <TodoContainer
        todos={todos}
        deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
