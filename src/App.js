import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addHandler = () => {
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo(""); // Clear the input field
    }
  };

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
   
  const deleteHandler=(id)=>{
    const updatedTodo=todos.filter((tod)=>tod.id!==id);
    setTodos(updatedTodo)


  }
 const  editHandler=(id)=>{

 }
  return (
    <div className="App">
      <label>Enter todo</label>
      <input onChange={changeHandler} type="text" value={todo} />
      <button onClick={addHandler}>Add todo</button>
      <div>
        <h1>
          <ul>
            {todos.map((a) => (
              <li key={a.id}>{a.todo}<button onClick={()=>deleteHandler(a.id)}></button>
             < button onClick={()=>editHandler(a.id)}></button></li>
            ))}
          </ul>
        </h1>
      </div>
    </div>
  );
}

export default App;

