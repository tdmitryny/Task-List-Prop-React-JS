import React, { useState } from 'react';
import crossAdd from '../assets/crossAdd.svg';
import { generateId } from './Id';
import { SecondBox } from './SecondBox';

export function TaskLists() {

    const [todo, setTodo] = useState([{
        id: generateId(),
        text: 'Work task',
    }]);

    const [inputTodoText, setInputTodoText] = useState('');

    //const [typeTask, setTypeTask] = useState('Create New Task');


    // const showInputType = () => {
    //     setTypeTask(<form onSubmit={onSubmit}>
    //         <div className="Edit-form__first-box">
    //             <input
    //                 value={inputTodoText}
    //                 onChange={(e) => setInputTodoText(e.target.value)}
    //                 type={"text"}
    //             />
    //             <input type="submit" value="Ok" />
    //         </div>
    //     </form>)
    // }


    const onSubmit = (e) => {
        e.preventDefault()
        if (inputTodoText.length > 0) {

            const updated = {
                id: generateId(),
                text: inputTodoText,
            }

            addNewTask(updated)
            setInputTodoText('');
        } else {
            alert('Please add task');
        }
    }

    //Ad new todo list
    const addNewTask = (task) => {
        setTodo([...todo, task])
    }

    //Remove todo
    const removeTodo = (id) => {
        setTodo(todo.filter((list) => list.id !== id))
    }


    return (
        <div className="First-box-component">
            <div className="Alltasks">
                <div className="All-lists">
                    <p className="List-name">All</p>


                    <ul className="Lists">

                        {todo.map((list) => (
                            <li className="List" key={list.id}><a className="List__link" href="#">{list.text}</a><button className="btn-list" onClick={() => removeTodo(list.id)}>🗑</button></li>
                        ))}

                    </ul>
                    <div className="Add-new-list">
                        <button className="btn-newlist" ><img src={crossAdd} alt="cross" /></button>
                        <div className="Newlist"></div>
                        <form onSubmit={onSubmit}>
                            <div className="Edit-form__first-box">
                                <input
                                    value={inputTodoText}
                                    onChange={(e) => setInputTodoText(e.target.value)}
                                    type={"text"}
                                    placeholder="Type your task"
                                />
                                <input type="submit" value="Ok" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <p className="copyright">&#169; All Rights Reserved “The Better Task”</p>
        </div>
    )
}

export default TaskLists
