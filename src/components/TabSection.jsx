import { useContext } from "react"
import classes from "../styles/TabSection.module.css"
import { TodoTab } from "./TodoTab"
import { ThemeContext } from "../store/theme-context"

export const TabSection = () => {
    const theme = useContext(ThemeContext)
    const tabs = ['all', 'active', 'completed']

    return (
        <div className={`${classes.tabs} ${theme === 'light' ? classes.light : classes.dark}`}>
            {tabs.map(tab => {
                return <TodoTab key={tab} name={tab} />
            })}
        </div>
    )
}