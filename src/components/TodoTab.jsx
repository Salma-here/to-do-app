import { useContext } from "react"
import classes from "../styles/TodoTab.module.css"
import { ThemeContext } from "../store/theme-context"
import { useDispatch, useTab } from "../store/items-context"

export const TodoTab = ({ name }) => {
    const theme = useContext(ThemeContext)
    const tab = useTab()
    const dispatch = useDispatch()

    let classStr = classes.tab + ' '
    classStr += theme === 'dark' ? classes.dark : classes.light
    classStr += tab === name ? ' ' + classes.active : ''

    return (
        <button onClick={e => dispatch({ type: 'switch-tab', tab: name })} className={classStr}>{name}</button>
    )
}