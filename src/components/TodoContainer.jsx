import Todo from './Todo.jsx';

const TodoContainer = ({todos, deleteTodo}) => {
    return (
        <div className="container">
            {todos.map((todo, index) => {
                return (
                <Todo
                    key={index}
                    todo={todo}
                    index={index}
                    deleteTodo={deleteTodo}
                />
                );
                })}
        </div>
    )
}

export default TodoContainer