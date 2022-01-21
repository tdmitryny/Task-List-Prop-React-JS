import React, { useState } from 'react';
import Form from './Form';
//import Task from './Task'
import { generateId } from './Id'
import { Task } from './Task'


export function SecondBox() {


    const [task, setTask] = useState({
        id: generateId(),
        taskIn: '',
    })


    const addItem = (newTask) => {
        setTask((item) => [newTask, ...item]);
    }



    return (
        <div className="SecondBox">
            <div className="SecondBox-inner">
                <p>Create new task</p>
                <Form inChange={addItem} />
                {task.map((list) => (<Task key={list.id} list={task} />))}

            </div>

        </div>
    )
}

export default SecondBox
