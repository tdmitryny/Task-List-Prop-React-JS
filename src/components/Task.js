import React from 'react';



export function Task({ task }) {


    return (
        <div className="Task">
            <ul>

                <li>{task.taskIn}</li>
                <li>Hellow</li>
            </ul>

        </div>
    )
}

export default Task
