import React from 'react';
import { trash } from '../assets/logo';

export function TaskLists() {
    return (
        <div className="Alltasks">
            <div className="All-lists">
                <p className="List-name">All</p>
                <ul className="Lists">
                    <li className="List">Organaze Desktop<button className="btn-list">{trash}</button></li>
                </ul>
                <div className="Newlist">Create New List</div>
            </div>
        </div>
    )
}

export default TaskLists
