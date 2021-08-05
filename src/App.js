import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {saveTodo} from "./redux/slice";
import TodoList from "./components/TodoItem/TodoList";



const App = () => {

    const [title, setTitle] = useState('');
    
    const handleInputChange = (event) => {
        const {value} = event.target
        setTitle(value)
    }

    const dispatch = useDispatch();
    

    

    const addTask = (event) =>{
        event.preventDefault(); 
        dispatch(
            saveTodo({
                title: title,
            })
        );
    };

    return (
        <div className="container" >
            <div className="toDoContainer">
                <h1>To-do-list</h1>
                <input name="todo" id="mainInput" type="text" value={title}  onChange={handleInputChange} />
                <button onClick={addTask}  id="addButton">Add</button>
            </div>
            <TodoList />
        </div>
    );
}


export default App;
