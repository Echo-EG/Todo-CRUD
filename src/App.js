import React, {useState} from "react";
import {TodoItem} from "./components/TodoItem";
import {useDispatch} from "react-redux";
import {saveTodo} from "./redux/slice";
import {useSelector} from "react-redux";
import {selecTodoList} from "./redux/slice";


const App = () => {

    const [currentLabel, setCurrentLable] = useState('')

    const dispatch = useDispatch();
    const {todosList} = useSelector((state) => state.todos);


    const addTodo = () => {
        // dispatch(saveTodo({
        //     item: list,
        //     done: false,
        //     id: Date.now()
        // }))
    }

    const addTask = () => {
        //
        // list.push({isSelected: false, label: currentLabel})
        // setList(list)
        // setCurrentLable('')
    }

    const handleInputChange = (event) => {
        const {value} = event.target
        setCurrentLable(value)
    }

    const handleDeleteItem = (params) => {
        // const newList = list.filter((item,index) => index!==params)
        //
        // setList(newList)
    }

// debugger
    return (
        <div className="container">
            <div className="toDoContainer">
                <h1>To-do-list</h1>
                <input name="todo" id="mainInput" type="text" onChange={handleInputChange} value={currentLabel}/>
                <button onClick={addTask} id="addButton">Add</button>
            </div>
            <div className="doingContainer">
                {todosList.map(
                    (item, index) => (
                        <TodoItem isSelected={item.isSelected} label={item.label} deleteAction={handleDeleteItem}
                                  key={index} index={index}/>)
                )}
            </div>

        </div>
    );
}

export default App;
