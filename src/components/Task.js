import React, { useState, useEffect } from 'react';


export function Task({ showID, list, onChangeStatus, onRemoveTask, onShowInput, onInputEdit }) {

    //const date = new Date().toLocaleDateString('en-EN');

    return (
        //Todo task
        <>
            <li className="Task" key={list.id}>
                <button className="btn-task" onClick={() => onChangeStatus(list)}>✅</button>
                <button className="btn-task" onClick={() => onRemoveTask(list.id)}>🗑</button>
                <button className="btn-task" >❌</button>
                <button className="btn-task" onClick={() => onShowInput(list)}>🖋</button>
                {

                    (showID !== list.id) ? list.text : onInputEdit(list)

                }
                {/* Passing date from second box */}
                <p className="Date-input__list" >{list.date}</p>
            </li>




        </>




    )
}

export default Task




