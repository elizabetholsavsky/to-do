const InputContainer = ({ inputVal, writeTodo, addTodo }) => {
        return (
            <div className="input-container">
                <input type="text" placeholder="Enter To Do" value={inputVal} onChange={writeTodo}/>
                <button onClick={addTodo}>+</button>
            </div>
        )
}
export default InputContainer