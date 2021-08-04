import React, {useState} from "react";
import {TodoItem} from "./components/TodoItem";

const App = () => {

    const [currentLabel, setCurrentLable] = useState('')

    const [list, setList] = useState([
        {isSelected: true, label: 'First'},
        {isSelected: false, label: 'Second'},
        {isSelected: false, label: 'Third'},
        {isSelected: false, label: 'Fourh'},
        {isSelected: false, label: 'First'},
        {isSelected: false, label: 'First'},
        {isSelected: false, label: 'First'},
        {isSelected: false, label: 'First'},
        {isSelected: false, label: 'First'},
    ])

    const addTask = () => {

        list.push({isSelected: false, label: currentLabel})
        setList(list)
        setCurrentLable('')
    }

    const handleInputChange = (event) => {
        const {value} = event.target
        setCurrentLable(value)
    }

    const handleDeleteItem = (params) => {
        const newList = list.filter((item,index) => index!==params)

        setList(newList)
    }


    return (
        <div className="container">
            <div className="toDoContainer">
                <h1>To-do-list</h1>
                <input name="todo" id="mainInput" type="text" onChange={handleInputChange} value={currentLabel}/>
                <button onClick={addTask} id="addButton">Add</button>
            </div>
            <div className="doingContainer">
                {list.map(
                    (item, index) => (
                        <TodoItem isSelected={item.isSelected} label={item.label} deleteAction={handleDeleteItem}
                                  key={index} index={index}/>)
                )}
            </div>

        </div>
    );
}

export default App;
