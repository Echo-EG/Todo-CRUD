import {createSlice} from "@reduxjs/toolkit";
import {TodoItem} from "../components/TodoItem";
// import {list, setList} from "../App";
import {useState} from "react";

// const [list, setList] = useState([])
// setList(action.payload)

const initialState = {
    todosList: [{isSelected: false, label: 'First 1'}]
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        saveTodo: (state, action) => {

        }
    }
});


export const {saveTodo} = todoSlice.actions;
export const selecTodoList = state => state.todos.todolist
export default todoSlice.reducer;