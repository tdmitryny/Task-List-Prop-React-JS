import React, { useState } from 'react';
import { generateId } from './Id'


export function Form(props) {

    const [text, setText] = useState('')

    const handelChnage = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: generateId(),
            taskIn: text,
        };

        props.inChange(newItem);
        setText('');

    };


    return (
        <div className="Form">
            <form className="form-inner" onSubmit={handleSubmit}>
                <label className="text-label">Title:</label>
                <input
                    value={text}
                    onChange={handelChnage}
                    className="text-input"
                    type="text"
                    id="title"
                    name="task"
                    placeholder="Start your task" />
                {/* <label className="text-label">Due Day:</label>
                <input className="date-input" type="date" name="date" min="2022-01-01" /> */}
                <input className="btn-form" type="submit" value="Create Task" />
            </form>
        </div>
    )
}

export default Form
