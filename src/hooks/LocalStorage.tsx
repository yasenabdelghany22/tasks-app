import { useEffect, type Dispatch, useReducer } from 'react'
import TodosReducer from '../reducers/TodosReducer.tsx'

type State = Parameters<typeof TodosReducer>[0]
type Action = Parameters<typeof TodosReducer>[1]

function useLocalStorage(
    key: string,
    initialValue: State,
): [State, Dispatch<Action>] {
    const [value, dispatch] = useReducer(
        TodosReducer,
        initialValue,
        (initial: State): State => {
            if (typeof window === 'undefined') return initial
            try {
                const saved = window.localStorage.getItem(key)
                return saved !== null ? (JSON.parse(saved) as State) : initial
            } catch {
                return initial
            }
        },
    )

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch {
            // Ignore quota or private-mode errors
        }
    }, [key, value])

    return [value, dispatch]
}

export default useLocalStorage
