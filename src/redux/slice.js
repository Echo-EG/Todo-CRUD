import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// import {list, setList} from "../App";



// ===========================================


const todoSlice = createSlice({
    name: 'todos',
    initialState: JSON.parse(localStorage.getItem('todos')) || [],
    reducers:{
         saveTodo: (state, action) => {
             const newTodo = {
                 id: Date.now(),
                 title: action.payload.title,
                 completed: false,
             };
             state.push(newTodo);
             localStorage.setItem('todos', JSON.stringify(state))
        },

        toggleComplete : (state, action) => {
            const index = state.findIndex(
                (todos) => todos.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
            localStorage.setItem('todos', JSON.stringify(state))
        },

        deleteTodo: (state, action) =>{
             const result= state.filter((todos)=> todos.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(result))
            return result
        }
    },
});


export const {saveTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export const selecTodoList = state => state.todos.todoList;
export default todoSlice.reducer;