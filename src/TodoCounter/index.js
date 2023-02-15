import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';



function TodoCounter({totalTodos,completedTodos}) {
    return (


        <div className='TodoCounter-grandContainer'>
            <div>
                <aside className="responsive-banner first">
                    <div className="container-envelope">
                        <svg className="cirle-a" height="160" width="160">
                            <circle cx="80" cy="80" r="80" />
                        </svg>
                        <svg className="cirle-b" height="60" width="60">
                            <circle cx="30" cy="30" r="30" />
                        </svg>
                        <svg className="cirle-c" height="600" width="600">
                            <circle cx="300" cy="300" r="300" />
                        </svg>
                        <svg className="cirle-d" height="60" width="60">
                            <circle cx="30" cy="30" r="30" />
                        </svg>
                    </div>
                </aside>
            </div>
            <div className='TodoCounter-text'>TODO list created with React JS</div>
            <div className='TodoCounter-container'>
                <div className='container-completed'>
                    <div className='Icon-completed'>
                        {completedTodos}
                    </div>
                    <div className='counter-text'>Done</div>
                </div>
                <div className='container-total'>
                    <div className='Icon-total'>
                        {totalTodos}
                    </div>
                    <div className='counter-text'>Total</div>
                </div>
            </div>

        </div>
    )
}

export {
    TodoCounter,
}