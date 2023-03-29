import React from 'react'
import './TodoSearch.css'

function TodoSearch({setSearchValue,loading}){
    
    const onSearchValueChange = (event)=>{
        // console.log(searchValue);
        setSearchValue(event.target.value);
    }

    return(
        <input 
            className='TodoSearch' 
            placeholder='What are you looking for?'
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}

export{
    TodoSearch,
}