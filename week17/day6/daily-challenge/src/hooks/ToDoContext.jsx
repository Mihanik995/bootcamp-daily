import {createContext, useContext, useReducer} from "react";
import uuid4 from "uuid4";

const ToDoContext = createContext(null)

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: uuid4(),
                text: action.text,
                completed: false
            }]
        case 'remove':
            return state.filter((item) => item.id !== action.id)
        case 'mark-completed':
            return state.map((item) => {
                return item.id === action.id
                    ? {...item, completed: true}
                    : item
            })
        case 'edit':
            return state.map((item) => {
                return item.id === action.id
                    ? {...item, text: action.newText}
                    : item
            })
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}

export default function ({children}) {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <ToDoContext value={{state, dispatch}}>
            {children}
        </ToDoContext>
    )
}

export function useToDoContext() {
    return useContext(ToDoContext)
}