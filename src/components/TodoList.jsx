import { TodoItem } from "./TodoItem"
import { useItems, useTab } from "../store/items-context"

export const TodoList = () => {
    const items = useItems()
    const tab = useTab()
    
    let showItems = [...items]
    if (tab === 'active') {
        showItems = items.filter(x => !x.done)
    }
    else if (tab === 'completed') {
        showItems = items.filter(x => x.done)
    }


    return (
        <ul>
            {showItems.map(item => <TodoItem key={item.id} item={item} />)}
        </ul>
    )
}