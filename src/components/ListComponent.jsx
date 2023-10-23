import { FormComponent } from "./FormComponent"
import { ToDoComponent } from "./ToDoComponent"
import { useState } from "react";

export function ListComponent() {

    const [tasks, setTasks] = useState([])

    const addTasks = task => {
        if(task.text.trim()) {
            task.text = task.text.trim()
            const updatedTasks = [task, ...tasks]
            setTasks(updatedTasks)
        }
    }

    const deleteTask = id => {
      const updatedTasks = tasks.filter(tasks => tasks.id !== id)
      setTasks(updatedTasks)
    }

    const completeTask = id => {
      const updatedTasks = tasks.map(tasks => {
        if(tasks.id === id) {
          tasks.completed = !tasks.completed
        }
        return tasks
      })
      setTasks(updatedTasks)
    }

  return (
    <>
      <FormComponent onSubmit={addTasks}/>
      <div className="to-do-list-container">
        {
            tasks.map((tasks) =>
            <ToDoComponent 
            key={tasks.id}
            id={tasks.id}
            text={tasks.text}
            completed={tasks.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}/>
            )
        }
      </div>
    </>
  );
}
