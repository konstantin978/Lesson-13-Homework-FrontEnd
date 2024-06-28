import React, { useContext, useState } from "react"
import { add } from "../lib/api"
import { ToDoContext } from "../lib/context"
import { ActionTypes } from "../lib/types"

export const AddToDo: React.FC = () => {

    const context = useContext(ToDoContext)
    if (!context) {
        throw new Error("No context")
    }

    const [text, setText] = useState('')
    const { dispatch } = context

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        add({ text, completed: false })
            .then(res => {
                dispatch({ type: ActionTypes.addTodo, payload: res })
                setText('')
            })
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Save</button>
        </form>
    </div>
}