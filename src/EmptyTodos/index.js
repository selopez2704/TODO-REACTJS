import './EmptyTodos.css'
import React from 'react';

function EmptyTodos() {
    
    return (
    <div className='Empty-grandParent-Container'>
        <div className='Empty-Container'>
            <div className='Empty-Icon'>
                <i className="fa-solid fa-box-open fa-8x"></i>
            </div>
            <p className='Empty-Text'>Create a new TODO clicking the plus button</p>
        </div>
    </div>
    )
}

export { EmptyTodos }


