import { AddTodo } from "./AddTodo"
import { TodoControl } from "./TodoControl"
import { TodoList } from "./TodoList"
import classes from "../styles/TodoSection.module.css"
import { Card } from "./Card"

export const TodoSection = () => {
    return (
        <div className={classes.section}>
            <AddTodo />
            <Card>
                <TodoList />
                <TodoControl />
            </Card>
        </div>
    )
}