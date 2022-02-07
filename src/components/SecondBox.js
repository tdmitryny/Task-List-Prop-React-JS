import React, { useState, useEffect } from 'react';
import { Form } from './Form'
import { Task } from './Task'
import { generateId } from './Id'

//const date = new Date().toLocaleDateString('en-EN');



export function SecondBox() {
    const [seconds, setSeconds] = useState(0);
    const [task, setTask] = useState([{
        id: generateId(),
        text: 'Hello React JS',
        status: 'todo',//todo, complete, uncomplete 
        CreateSecond: seconds,



    }]);

    const [showID, setShowId] = useState(-1);
    const [inputText, setInputText] = useState('');
    const [inputTask, setInputTask] = useState({
        id: '',
        text: ''
    });


    //Set timer

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(time => time + 1)
        }, 1000)

        setTask(task.map((item) => {
            if (seconds - item.CreateSecond > 10 && item.status !== "complete") item.status = "incomplete"
            return item
        }))

        return () => clearInterval(interval);
    }, [seconds])



    //Task create
    const addTask = (newText) => {
        let newObj = Object.assign({}, newText, { status: 'todo', CreateSecond: seconds })
        setTask((list) => [newObj, ...list])
    }


    const editTask = () => {
        setTask(task.map((item) => {
            if (item.id === inputTask.id) item.text = inputText
            return item
        }))
    }



    const changeStatusToComplete = (list) => {
        setTask(task.map((item) => {
            if (item.id === list.id) item.status = "complete"
            return item
        }))
    }



    //Remove task 
    const removeTask = (id) => {
        setTask(task.filter((list) => list.id !== id))
    }

    //Edit task
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
                <h2 className="Titles">Create new task</h2>
            </div>
            <Form onAdd={addTask} onHide={hideText} />
            <div className="Task-todo__box">
                <h2 className="Titles">to-do</h2>
                <ul className="Task-box">
                    {
                        task.length > 0 ? task.map((list) => (list.status === 'todo' &&
                            <Task key={list.id}
                                onChangeStatus={changeStatusToComplete}
                                onRemoveTask={removeTask}
                                onShowInput={showInput}
                                onInputEdit={inputEdit}
                                list={list}
                                seconds={seconds}
                                showID={showID}

                            />

                        )) : 'No task to show'}
                </ul>

                <h2 className="Titles">complete</h2>
                <ul className="Task-box">
                    {task.length > 0 ? task.map((list) => (list.status === 'complete' &&
                        <li className="Task" key={list.id} >
                            <button className="btn-task" onClick={() => removeTask(list.id)}>🗑</button>
                            {list.text}
                        </li>
                    )) : 'No task to show'}
                </ul>
                <h2 className="Titles">incomplete</h2>
                <ul className="Task-box">
                    {task.length > 0 ? task.map((list) => (list.status === 'incomplete' &&
                        <li className="Task" key={list.id} >
                            <button className="btn-task" onClick={() => removeTask(list.id)}>🗑</button>
                            <button className="btn-task">⌛️</button>
                            {list.text}
                        </li>
                    )) : 'No task to show'}
                </ul>
            </div>


        </div>
    )
}

export default SecondBox