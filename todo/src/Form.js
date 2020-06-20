import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/Reducer";

export default function Todos() {
  
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState("");

  const handleChanges = (e) => {
    setForm (e.target.value)
  };
  
  return (
    <div className="container">
      <div>
        <form onSubmit={(e) => {e.preventDefault()
                dispatch({ type: "ADD_TODO", payload: form });
              }}
              >
          <div>
          <div>New To-Do</div>
            <input type="text" value={form} onChange={handleChanges}  />
              
          

            
          </div>
          <br />
          <div><button>Add</button> </div>
        </form>
      </div>
      {todo.map((t, idx) => (
      <div key={t.text} onClick={() => dispatch({ type: "TOGGLE_TODOS",idx })} 
      style={{textDecoration: (t.completed = "line-through") }} > {t.item} </div> ))}

      
    </div>
  );
}