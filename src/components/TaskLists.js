import React from 'react';
import trash from '../assets/trash.svg';
import crossAdd from '../assets/crossAdd.svg';

export function TaskLists() {
    return (
        <div className="First-box-component">
            <div className="Alltasks">
                <div className="All-lists">
                    <p className="List-name">All</p>
                    <ul className="Lists">
                        <li className="List">Organaze Desktop<button className="btn-list"><img src={trash} alt="trash can" /></button></li>
                    </ul>
                    <div className="Add-new-list">
                        <button className="btn-newlist"><img src={crossAdd} alt="cross" /></button>
                        <div className="Newlist">Create New List</div>
                    </div>
                </div>

            </div>
            <p className="copyright">&#169; All Rights Reserved “The Better Task”</p>
        </div>
    )
}

export default TaskLists
