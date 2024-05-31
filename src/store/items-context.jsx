import { createContext, useContext, useReducer } from "react";

export const ItemsContext = createContext(null)
export const ItemsDispatchContext = createContext(null)

export const ItemsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemsReducer, initialState)

    return (
        <ItemsContext.Provider value={state}>
            <ItemsDispatchContext.Provider value={dispatch}>
                {children}
            </ItemsDispatchContext.Provider>
        </ItemsContext.Provider>
    )
}

export const useItems = () => {
    return useContext(ItemsContext).items
}

export const useTab = () => {
    return useContext(ItemsContext).tab
}

export const useDispatch = () => {
    return useContext(ItemsDispatchContext)
}

const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return {
                ...state, items: [
                    ...state.items,
                    {
                        id: nextId++,
                        title: action.text,
                        done: false
                    }
                ]
            }
        }
        case 'remove': {
            return { ...state, items: state.items.filter(x => x.id !== action.id) }
        }
        case 'toggle-done': {
            // const nextItems = items.map(x => {
            //     if (x.id === action.id) {
            //         x.done = !x.done
            //     }
            //     return x
            // })
            // return nextItems
            const toggleIndex = state.items.findIndex(x => x.id === action.id)
            const item = { ...state.items[toggleIndex] }
            item.done = !item.done
            const nextItems = [...state.items]
            nextItems[toggleIndex] = item
            return { ...state, items: nextItems }
        }
        case 'remove-completed': {
            return { ...state, items: state.items.filter(x => !x.done) }
        }
        case 'replace': {
            const idx1 = state.items.findIndex(x => x.id === action.id1)
            const idx2 = state.items.findIndex(x => x.id === action.id2)
            const item1 = { ...state.items[idx1] }
            const item2 = { ...state.items[idx2] }
            const nextItems = [...state.items]
            nextItems[idx1] = item2
            nextItems[idx2] = item1
            return { ...state, items: nextItems }
        }
        case 'switch-tab': {
            return { ...state, tab: action.tab }
        }
        default: {
            return state
        }
    }
}

const initialItems = [
    {
        id: 1,
        title: "Jog around the park 3x",
        done: true
    },
    {
        id: 2,
        title: "Complete online Javascript course",
        done: false
    },
    {
        id: 3,
        title: "10 minutes meditation",
        done: false
    }
]

const initialState = {
    items: initialItems,
    tab: 'all'
}

let nextId = 4