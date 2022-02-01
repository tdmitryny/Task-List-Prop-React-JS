import React, { useState } from 'react';
import { Form } from './Form'
//import { Task } from './Task'
import { generateId } from './Id'


export function SecondBox() {

    const [task, setTask] = useState([{
        id: generateId(),
        text: 'Hello React JS',

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

    //Post and edit text
    // const editInputTask = (input) => {
    //     setInputTask((inTask) => [input, ...inTask])
    // }

    const editTask = () => {
        setTask(task.map((item) => {
            if (item.id === inputTask.id) item.text = inputText
            return item
        }))
    }

    //Remove task  рџ—‘
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id))
    }

    //Edit task

    // 1.Click shows input and hide task
    // 2.Press entering saving new task and revome preveus by updating Task

    const showInput = (item) => {
        setShowId(item.id); //setted to false
        setInputTask({
            id: item.id,
        }) //Start from this    
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
                <p>Create new task</p>
            </div>
            <Form onAdd={addTask} onHide={hideText} />
            <ul className="Task-box">
                {task.length > 0 ? task.map((list) => (
                    <li className="Task" key={list.id} list={list}>
                        <button className="btn-task" onClick={() => removeTask(list.id)}>рџ—‘</button>
                        <button className="btn-task" onClick={() => removeTask(list.id)}>вќЊ</button>
                        <button className="btn-task" onClick={() => showInput(list)}>рџ–Љ</button>
                        {

                            (showID !== list.id) ? list.text : inputEdit(list)

                        }
                    </li>
                    //<Task key={list.id} list={list} />
                )) : 'No task to show'}
            </ul>
            {/* {inputText} */}

        </div>
    )
}

export default SecondBox