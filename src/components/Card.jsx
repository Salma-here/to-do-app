import { useContext } from "react"
import classes from "../styles/Card.module.css"
import { ThemeContext } from "../store/theme-context"

export const Card = ({ children }) => {
    const theme = useContext(ThemeContext)
    let classStr = classes.card + " "
    classStr += theme === "dark" ? classes.dark : classes.light

    return (
        <div className={classStr}>
            {children}
        </div>
    )
}