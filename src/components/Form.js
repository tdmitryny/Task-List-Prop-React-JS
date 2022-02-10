import React, { useState, useEffect } from 'react';
import { generateId } from './Id'



export function Form(props) {


    const [text, setText] = useState('');
    const [date, setDate] = useState(''); //Set value date here



    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.length > 0) {
            const newTextChange = {
                id: generateId(),
                text: text,
                date: date,
            };
            props.onAdd(newTextChange);
            setText('');

        } else {
            alert('Please type your task')
        }


    };



    return (
        <div className="Form">
            <form className="form-inner" onSubmit={handleSubmit} >
                <label className="text-label">Title:</label>
                <input
                    className="text-input"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    type="text"
                    id="title"
                    name="task"
                    placeholder="Start your task" />
                <label className="text-label">Due Day:</label>
                <input className="date-input"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    type="date"
                    name="date"
                    min="01-01-2022"
                    max="01-01-2030"


                />
                <input className="btn-form" type="submit" value="Create Task" />
            </form>
        </div>
    )
}

export default Form
