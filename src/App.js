import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import DoneList from './components/DoneList';
import TodoListCreate from './components/TodoListCreate';
import TodoListDelete from './components/TodoListDelete';

function App() {

  const [todos, setTodos] = useState([])
  const [name, setName] = useState(null)

  function setTodoList(data) {
    setName(data)
  }
  function delelteList() {
    setName(null);
    setTodos([]);
  }
  function handleCreate(data) {
    if (!data.text.trim()) {
      alert('할 일을 입력해주세요.')
      return;
    }
    setTodos((todos) => [...todos, data])
  }

  function handleDelete(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleUpdate(id, data) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...data } : todo
      )
    );
  }


  return (
    <div className="App">
      {name === null ? (
        <TodoListCreate onCreateList={setTodoList} />
      ) : (
        <>
          <div className='list-header'>
            <h1>{name}님의 Todo - List</h1>
            <TodoListDelete onDeleteList={delelteList}/>

          </div>
          <TodoForm onCreate={handleCreate} />
          <div className='lists-container'>
            <div className='TodoList'>
              <TodoList items={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
            </div>
            <div className='DoneList'>
              <DoneList items={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
            </div>
          </div>
        </>
      )}
    </div>)
}
export default App;
