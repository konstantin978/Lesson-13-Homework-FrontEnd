import React, { useContext } from "react"
import { ActionTypes, ITodo } from "../lib/types"
import { ToDoContext } from "../lib/context"
import { remove, update } from '../lib/api.ts'

interface Props {
    todo: ITodo
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {

    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("No context")
    }

    const { dispatch } = context
    const classes = todo.completed ? 'item completed' : 'item'

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('remove')
        remove(todo.id)
            .then(() => {
                dispatch({ type: ActionTypes.removeTodo, payload: todo.id })
            })
    }

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('update')
        update(todo.id, { ...todo, completed: !todo.completed })
            .then(() => {
                dispatch({ type: ActionTypes.updateTodo, payload: todo.id })
            })
    }

    return <div className={classes}>
        <p>{todo.text}</p>
        <div>
            <button onClick={handleUpdate}>Done</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    </div>
}