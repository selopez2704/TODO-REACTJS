import React from 'react'
// import {TodoItem} from './TodoItem'
import './TodoList.css'



function TodoList(props){
    return(
        <section className='TodoList'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos.length && !props.searchValue) && props.onEmptyTodos()}
            {(!props.loading && !props.searchedTodos.length && props.searchValue) && props.onEmptySearchResults()}
            {props.searchedTodos.map(props.render)}
        </section>
    )
}

export{
    TodoList,
}