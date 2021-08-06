import React, { useEffect} from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync} from "../../redux/slice";

const TodoList = () =>{

    const dispatch = useDispatch();
    const todos = useSelector((state) => {

        return state.todos
    });

    //     const initialState = {
    //     todosList: [{isSelected: false, label: 'First 1'}]
    // };

    return (
        <div className="doingContainer">
            {todos.map(
                (newTodo) => (
                    <TodoItem id={newTodo.id} title={newTodo.title} completed={newTodo.completed}/>)
                    // <TodoItem index={newTodo.id} key={newTodo.id} title={newTodo.title} completed={newTodo.completed}/>)
                    // <TodoItem isSelected={item.isSelected} label={item.label} deleteAction={handleDeleteItem}
                    //           key={index} index={index}/>)
            )}
        </div>
    );

}
export default TodoList;