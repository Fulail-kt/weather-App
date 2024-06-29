import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="w-72 mt-3 p-3 border rounded-lg shadow-xl">
      <h1 className="text-xl font-bold mb-2 text-center text-gray-300">Todo List</h1>
      <div className="flex mb-2 text-xs gap-2">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a new todo"
          className="flex-grow text-xs px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleAddTodo}
          className="px-2 py-1 text-xs bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2 text-xs">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center text-start border p-1 rounded">
            <div className='overflow-x-auto w-full  flex no-scroll'>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mr-2  form-checkbox h-5 w-5 text-blue-600"
                />
                <span className={`flex-grow ${todo.completed ? 'line-through overflow-auto text-green-800' : 'text-gray-300'}`}>
                  {todo.text}
                </span>
            </div>
            <button 
              onClick={() => handleDeleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;