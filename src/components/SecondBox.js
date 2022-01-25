import React, { useState } from 'react';
import { Form } from './Form'
//import { Task } from './Task'
import { generateId } from './Id'


export function SecondBox() {

    const [task, setTask] = useState([{
        id: generateId(),
        text: '',

    },
    {
        id: generateId(),
        text: 'Hello React JS',

    }]);

    const [show, setShow] = useState(false);
    const [inputText, setInputText] = useState('');
    const [inputTask, setInputTask] = useState([{
        text: '',
    }]);


    //Task create
    const addTask = (newText) => {
        setTask((list) => [newText, ...list])
    }

    //Post and edit text
    const editInputTask = (input) => {
        setInputTask((inTask) => [input, ...inTask])
    }

    //Remove task  🗑
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id))
    }

    //Edit task

    // 1.Click shows input and hide task
    // 2.Press entering saving new task and revome preveus by updating Task

    const showInput = (e) => {
        setShow(show ? false : true); //setted to false
        setInputTask({ text: inputText }) //Start from this

    }

    const hideText = () => {
        setTask('')
    }

    //Change task
    const handleInputChnage = ({ target }) => {
        setInputText(target.value)

    }

    //Edit task
    // const editTask = (e) => {
    //     e.preventDefault();
    //     const editText = {
    //         text: inputText,
    //     };
    //     addInputTask(editText);
    //     inputText('')

    // }

    const inputEdit = () => {

        return <div className="Edit-form">
            <input
                value={inputText}
                onChange={handleInputChnage}
                type={!show ? "hidden" : "text"}
            />

            <button onClick={showInput}>OK</button>
        </div>

    }

    return (
        <div className="SecondBox">
            <div className="SecondBox-inner">
                <p>Create new task</p>
            </div>
            <Form onAdd={addTask} onHide={hideText} />
            <ul className="Task-box">
                {task.length > 0 ? task.map((list) => (
                    <li className="Task" key={list.id} list={list}>
                        <button className="btn-task" onClick={() => removeTask(list.id)}>🗑</button>
                        <button className="btn-task" onClick={() => removeTask(list.id)}>❌</button>
                        <button className="btn-task" onClick={() => showInput()}>🖊</button>
                        {

                            !show ? list.text || inputText : inputEdit()

                        }
                    </li>
                    //<Task key={list.id} list={list} />
                )) : 'No task to show'}
            </ul>
            {inputText}

        </div>
    )
}

export default SecondBox
