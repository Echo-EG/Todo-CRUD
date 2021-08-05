import {createSlice} from "@reduxjs/toolkit";

// import {list, setList} from "../App";



// const [list, setList] = useState([])
// setList(action.payload)


// const initialState = {
//     todosList: [{isSelected: false, label: 'First 1'}]
// };

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
         saveTodo: (state, action) => {
             const newTodo = {
                 id: Date.now(),
                 title: action.payload.title,
                 completed: false,
             };
             state.push(newTodo);
        },

        toggleComplete : (state, action) => {
            const index = state.findIndex(
                (todos) => todos.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },

        deleteTodo: (state, action) =>{
            return state.filter((todos)=> todos.id !== action.payload.id);
        }
    },
});


export const {saveTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export const selecTodoList = state => state.todos.todoList;
export default todoSlice.reducer;