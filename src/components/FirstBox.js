import React from 'react';
import { TaskLists } from './TaskLists';

export function FirstBox() {
    return (
        <div className="FirstBox">
            <div className="Title-box">
                <h1 className="Title-inner">💡The Better Task</h1>
            </div>
            <TaskLists />
        </div>
    )
}

export default FirstBox
