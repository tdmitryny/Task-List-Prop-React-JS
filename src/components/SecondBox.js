import React, { useState, useEffect } from 'react';
import { Form } from './Form'
//import { Task } from './Task'
import { generateId } from './Id'

//const date = new Date().toLocaleDateString('en-EN');



export function SecondBox() {
    const [seconds, setSeconds] = useState(0)
    const [task, setTask] = useState([{
        id: generateId(),
        text: 'Hello React JS',
        second: seconds,

        //date: date,

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

        return () => clearInterval(interval);
    }, [seconds])



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

    //Changing timer function
    // const editTimer = () => {
    //     setTask(task.map((item) => {
    //         if (item.second === seconds) return seconds

    //     }))
    // }

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
                    {task.length > 0 ? task.map((list) => (
                        <li className="Task" key={list.id} >
                            <button className="btn-task" onClick={() => removeTask(list.id)}>✅</button>
                            <button className="btn-task" onClick={() => removeTask(list.id)}>🗑</button>
                            <button className="btn-task" onClick={() => removeTask(list.id)}>❌</button>
                            <button className="btn-task" onClick={() => showInput(list)}>🖋</button>
                            {

                                (showID !== list.id) ? list.text : inputEdit(list)


                            }


                            <p className="Date-input__list" >{list.second}</p>

                        </li>

                    )) : 'No task to show'}
                </ul>
                <h2 className="Titles">complete</h2>
                <p>Test clicks {seconds}</p>

                <h2 className="Titles">incomplete</h2>
            </div>


        </div>
    )
}

export default SecondBox