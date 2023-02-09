import './TodoForm.css'
import React from "react";
import { TodoContext } from "../TodoContext";


function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {createTodo,setOpenModal}=React.useContext(TodoContext);

    const onChangeTextArea=(event)=>{
        setNewTodoValue(event.target.value);
    }

    const onCancel=()=>{
        setOpenModal(prevState=>!prevState);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        createTodo(newTodoValue);
        setOpenModal(prevState=>!prevState);

    }

    return(
        <form onSubmit={onSubmit}>
            <label>Type a new TODO</label>
            <textarea 
                // value={newTodoValue}
                onChange={onChangeTextArea}
                placeholder="Type here..."
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    CANCEL
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button--add'
                >
                    ACCEPT
                </button>
            </div>
        </form>
    )
    
}
export{TodoForm}