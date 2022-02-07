import React from 'react'

export function IncompleteTask({ list, onRemoveTask }) {
    return (
        <li className="Task" key={list.id}>
            <button className="btn-task" onClick={() => onRemoveTask(list.id)}>🗑</button>
            <button className="btn-task">⌛️</button>
            {list.text}
        </li>
    )
}

export default IncompleteTask
