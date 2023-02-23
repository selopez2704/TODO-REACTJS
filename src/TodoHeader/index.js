import React from 'react';

function TodoHeader({children,loading}) {
    console.log(React.Children.toArray(children))
    return(
        <header>
            {
                React.Children.toArray(children)
                    .map(child=>React.cloneElement(child,{loading:loading}))
            } 
        </header>
    )
}

export{
    TodoHeader
}