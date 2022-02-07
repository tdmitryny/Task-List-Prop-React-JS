import React, { useState, useEffect } from 'react';

export function Task({ showID, seconds, list, onChangeStatus, onRemoveTask, onShowInput, onInputEdit }) {





    return (
        <li className="Task" key={list.id}>
            <button className="btn-task" onClick={() => onChangeStatus(list)}>✅</button>
            <button className="btn-task" onClick={() => onRemoveTask(list.id)}>🗑</button>
            <button className="btn-task" >❌</button>
            <button className="btn-task" onClick={() => onShowInput(list)}>🖋</button>
            {

                (showID !== list.id) ? list.text : onInputEdit(list)

            }
            <p className="Date-input__list" >{seconds - list.CreateSecond}</p>
        </li>
    )
}

export default Task




