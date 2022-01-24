import React, { useState } from 'react';
import { Form } from './Form'
//import { Task } from './Task'
import { generateId } from './Id'


export function SecondBox() {

    const [task, setTask] = useState([{
        id: generateId(),
        text: '',
        random: null,
    },
    {
        id: generateId(),
        text: 'Hello React JS',
        random: null,
    }]);
    const [show, setShow] = useState(false)


    //Task create
    const addTask = (newText) => {
        setTask((list) => [newText, ...list])
    }

    //Remove task  🗑
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id))
    }

    //Edit task

    // 1.Click shows input and hide task
    // 2.Press entering saving new task and revome preveus by updating Task

    const showInput = () => {
        setShow(show ? false : true)

    }
    const hideText = () => {
        setTask('')
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

                            !show ? list.text :


                                <form className="Edit-form">
                                    <input type={!show ? "hidden" : "text"}></input>
                                </form>
                        }
                    </li>
                    //<Task key={list.id} list={list} />
                )) : 'No task to show'}
            </ul>


        </div>
    )
}

export default SecondBox
