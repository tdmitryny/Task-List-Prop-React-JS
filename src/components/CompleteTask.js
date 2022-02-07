import React from 'react'

export function CompleteTask({ list, onRemoveTask }) {
    return (
        <li className="Task" key={list.id} >
            <button className="btn-task" onClick={() => onRemoveTask(list.id)}>🗑</button>
            {list.text}
        </li>
    )
}

export default CompleteTask
