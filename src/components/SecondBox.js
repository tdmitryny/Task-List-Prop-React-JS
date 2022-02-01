import React, { useState } from 'react';
import { Form } from './Form'
//import { Task } from './Task'
import { generateId } from './Id'

const date = new Date().toLocaleDateString('en-EN');

export function SecondBox() {


    const [task, setTask] = useState([{
        id: generateId(),
        text: 'Hello React JS',
        date: date,

    }]);

    const [showID, setShowId] = useState(-1);
    const [inputText, setInputText] = useState('');
    const [inputTask, setInputTask] = useState({
        id: '',
        text: ''
    });


    //Task create
    const addTask = (newText) => {
        setTask((list) => [newText, ...list])
    }



    const editTask = () => {
        setTask(task.map((item) => {
            if (item.id === inputTask.id) item.text = inputText
            return item
        }))
    }

    //Remove task 
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id))
    }

    //Edit task

    // 1.Click shows input and hide task
    // 2.Press entering saving new task and revome preveus by updating Task

    const showInput = (item) => {
        setShowId(item.id);
        setInputTask({
            id: item.id,
        })
        editTask(item)
        setInputText(item.text)
    }

    const hideText = () => {
        setTask('')
    }

    //Change task
    const handleInputChnage = ({ target }) => {
        setInputText(target.value)

    }



    const inputEdit = (list) => {

        return <div className="Edit-form">
            <input
                value={inputText}
                onChange={handleInputChnage}
                type={(showID !== list.id) ? "hidden" : "text"}
            />

            <button onClick={showInput}>OK</button>
        </div>

    }

    return (
        <div className="SecondBox">
            <div className="SecondBox-inner">
                <p className="Titles">Create new task</p>
            </div>
            <Form onAdd={addTask} onHide={hideText} />
            <div className="Task-todo__box">
                <h2 className="Titles">to-do</h2>
                <ul className="Task-box">
                    {task.length > 0 ? task.map((list) => (
                        <li className="Task" key={list.id} list={list}>
                            <button className="btn-task" onClick={() => removeTask(list.id)}>🗑</button>
                            <button className="btn-task" onClick={() => removeTask(list.id)}>❌</button>
                            <button className="btn-task" onClick={() => showInput(list)}>🖋</button>
                            {

                                (showID !== list.id) ? list.text : inputEdit(list)

                            }


                            <p className="Date-input__list">{list.date}</p>
                        </li>

                    )) : 'No task to show'}
                </ul>
            </div>


        </div>
    )
}

export default SecondBox