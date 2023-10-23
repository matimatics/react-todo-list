import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function FormComponent(props) {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSend = e => {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      text: input,
      completed: false
      }
      props.onSubmit(newToDo)
      setInput('')
  }

  return (
    <form 
    className="to-do-form"
    onSubmit={handleSend}>
      <input 
      className="to-do-input" 
      type="text" 
      placeholder="Add a new task" 
      name="text" 
      onChange={handleChange}
      value={input}/>
      <button 
      className="to-do-button">
        Add new
        </button>
    </form>
  );
}
