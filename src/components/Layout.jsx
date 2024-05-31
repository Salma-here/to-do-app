import { useContext } from "react"
import classes from "../styles/Layout.module.css"
import SunIcon from "../assets/icon-sun.svg"
import MoonIcon from "../assets/icon-moon.svg"
import { ThemeContext } from "../store/theme-context"


export const Layout = ({ children, onToggleTheme }) => {
    const theme = useContext(ThemeContext)
    const themeIcon = theme === "dark" ? SunIcon : MoonIcon

    let classStr = classes.layout + " "
    classStr += theme === "dark" ? classes.dark : classes.light

    return (
        <div className={classStr}>
            <div className={classes.content}>
                <header className={classes.header}>
                    <span className={classes.logo}>TODO</span>
                    <button onClick={onToggleTheme} className={classes.theme}>
                        <img className={classes['theme-img']} src={themeIcon} />
                    </button>
                </header>
                {children}
                <footer className={classes.footer}>Drag and drop to reorder list.</footer>
            </div>
        </div>
    )
}