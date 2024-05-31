import { useContext } from "react"
import classes from "../styles/TodoItem.module.css"
import CrossIcon from "../assets/icon-cross.svg"
import CheckIcon from "../assets/icon-check.svg"
import { ThemeContext } from "../store/theme-context"
import { useDispatch } from "../store/items-context"


export const TodoItem = ({ item }) => {
    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()

    const dragStartHandler = (e) => {
        e.dataTransfer.setData("text/plain", item.id)
    }

    const dragOverHandler = e => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const dropHandler = e => {
        e.preventDefault()
        const data = +e.dataTransfer.getData("text/plain")
        if (data !== item.id)
            dispatch({type: 'replace', id1: data, id2: item.id})
    }



    let classStr = classes.item
    classStr += item.done ? " " + classes.done : ""
    classStr += theme === "dark" ? " " + classes.dark : " " + classes.light

    return (
        <li
            className={classStr}
            draggable
            onDragStart={dragStartHandler}
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
        >
            <div className={classes.left}>
                <span onClick={e => dispatch({ type: 'toggle-done', id: item.id })} className={classes.box}>
                    <img className={classes.check} src={CheckIcon} />
                </span>
                <span className={classes.text}>{item.title}</span>
            </div>
            <button onClick={e => dispatch({ type: 'remove', id: item.id })}>
                <img className={classes.cross} src={CrossIcon} alt="" />
            </button>
        </li>
    )
}