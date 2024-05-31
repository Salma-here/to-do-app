import classes from "../styles/TodoControl.module.css"
import { useContext } from "react"
import { ThemeContext } from "../store/theme-context"
import { useDispatch, useItems } from "../store/items-context"
import { TabSection } from "./TabSection"


export const TodoControl = () => {
    const theme = useContext(ThemeContext)
    const items = useItems()
    const dispatch = useDispatch()

    let classStr = classes.container + " "
    classStr += theme === "dark" ? classes.dark : classes.light

    const itemsNum = items.filter(x => !x.done).length
    const itemsNumStr = `${itemsNum} item${itemsNum > 1 ? 's' : ''} left` 


    return (
        <div className={classStr}>
            <div className={classes.number}>{itemsNumStr}</div>
            <TabSection />
            <div>
                <button onClick={e => dispatch({ type: 'remove-completed' })} className={classes.btn}>Clear Completed</button>
            </div>
        </div>
    )
}