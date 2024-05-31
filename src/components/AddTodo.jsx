import { useState } from "react"
import { Card } from "./Card"
import classes from "../styles/AddTodo.module.css"
import { useDispatch } from "../store/items-context"

export const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (input !== '') {
            dispatch({type: 'add', text: input})
            setInput('')
        }
    }

    return (
        <Card>
            <form onSubmit={submitHandler} className={classes.form} action="">
                <div className={classes.circle} />
                <input 
                    onChange={inputChangeHandler}
                    value={input}
                    className={classes.input}
                    type="text"
                    placeholder="Create a new todo..."
                />
            </form>
        </Card>
    )
}