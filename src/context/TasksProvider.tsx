import {
    createContext,
    type Dispatch,
    type ReactNode,
    use,
    useMemo,
} from 'react'
import type { Task } from '../types'
import useLocalStorage from '../hooks/LocalStorage.tsx'
import type { Action } from '../reducers/TodosReducer.tsx'

const TasksContext = createContext<{
    tasks: Task[]
    dispatch: Dispatch<Action>
} | null>(null)

export default function TasksProvider({ children }: { children: ReactNode }) {
    const [tasks, dispatch] = useLocalStorage('tasks', [])

    const value = useMemo(() => ({ tasks, dispatch }), [dispatch, tasks])

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    )
}

export const useTasks = () => {
    const ctx = use(TasksContext)
    if (!ctx) throw new Error('useTasks must be used inside TasksProvider')
    return ctx
}
