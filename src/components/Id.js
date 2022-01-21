import React from 'react'


let nextId = 0
export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
}

export default generateId
