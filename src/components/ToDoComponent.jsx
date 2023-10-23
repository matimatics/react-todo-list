import {AiOutlineCloseCircle} from "react-icons/ai" 

export function ToDoComponent({ id, text, completed, deleteTask, completeTask }) {
    return (
        <div className={completed ? 'to-do-container completed' : 'to-do-container'}>
            <div className="to-do-text"
            onClick={() => completeTask(id)}>
                { text }
            </div>
            <div 
            className="to-do-icons-container"
            onClick={() => deleteTask(id)}>
                <AiOutlineCloseCircle className="to-do-icon"/>
            </div>
        </div>
    )
}
