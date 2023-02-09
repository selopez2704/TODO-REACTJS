import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch(){
    const {setSearchValue}=React.useContext(TodoContext);
    
    const onSearchValueChange = (event)=>{
        // console.log(searchValue);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            className='TodoSearch' 
            placeholder='What are you looking for?'
            onChange={onSearchValueChange}
            />
    )
}

export{
    TodoSearch,
}