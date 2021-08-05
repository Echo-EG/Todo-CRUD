import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () =>{


    const todos = useSelector((state) => state.todos);

    //     const initialState = {
    //     todosList: [{isSelected: false, label: 'First 1'}]
    // };

    return (
        <div className="doingContainer">
            {todos.map(
                (newTodo, index) => (
                    <TodoItem id={newTodo.id} title={newTodo.title} completed={newTodo.completed}/>)
                    // <TodoItem index={newTodo.id} key={newTodo.id} title={newTodo.title} completed={newTodo.completed}/>)
                    // <TodoItem isSelected={item.isSelected} label={item.label} deleteAction={handleDeleteItem}
                    //           key={index} index={index}/>)
            )}
        </div>
    );

}
export default TodoList;