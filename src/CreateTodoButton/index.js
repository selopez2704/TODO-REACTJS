import React from 'react'
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton= ()=>{
        props.setOpenModal(prevState=>!prevState);
    }
    return(
        <button className='CreateTodoButton' title='Add a new TODO' onClick={()=>onClickButton()}>
            +
        </button>
    )
}

export{
    CreateTodoButton,
}