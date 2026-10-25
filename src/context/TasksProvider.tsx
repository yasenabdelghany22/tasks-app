import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    use,
    useMemo,
} from 'react'
import type { Task } from '../types'
import useLocalStorage from '../hooks/LocalStorage.tsx'

const TasksContext = createContext<{
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
} | null>(null)

export default function TasksProvider({ children }: { children: ReactNode }) {
    // const [tasks, setTasks] = useState<Task[]>([
    //     {
    //         id: uuid4(),
    //         name: 'Task 1',
    //         description: 'Task 1 description',
    //         isCompleted: false
    //     },
    //     {
    //         id: uuid4(),
    //         name: 'Task 2',
    //         description: 'Task 2 description',
    //         isCompleted: true
    //     },
    //     {
    //         id: uuid4(),
    //         name: 'Task 3',
    //         description: 'Task 3 description',
    //         isCompleted: false
    //     }
    // ])
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])

    const value = useMemo(() => ({ tasks, setTasks }), [setTasks, tasks])

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    )
}

export function useTasks() {
    const ctx = use(TasksContext)
    if (!ctx) throw new Error('useTasks must be used inside TasksProvider')
    return ctx
}
