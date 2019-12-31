import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, removeTodo}){
  return(
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through': ''}}>
      {todo.text}
      <button onClick={()=>completeTodo(index)}> Complete</button>
      <button onClick={()=>removeTodo(index)}>X</button>
    </div>
  )
}
function TodoForm({addTodo}){
  const [value, setValue] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
        className="input"
        value={value || ''}
        placeholder="Add Todo ..."
        onChange={(e) => setValue(e.target.value)}/>
    </form>
  )
}


function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn About React',
      isCompleted: false
    },
    {
      text: 'Break num 1',
      isCompleted: false
    },
    {
      text: 'Meeting one',
      isCompleted: false
    }
  ]);
  const addTodo = (text) => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos)
  }
  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }
  const removeTodo = index =>{
    const newTodos = todos.filter(task=> todos.indexOf(task) !== index);
    setTodos(newTodos);
  }
  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
