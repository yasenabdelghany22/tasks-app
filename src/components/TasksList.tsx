import TaskList from './TaskList.tsx'
import {useTasks} from "../context/TasksProvider.tsx";
import type {Filter, Task} from '../types'

const filters: Record<Filter, (task: Task) => boolean> = {
    '': () => true,
    'done': (task) => task.isCompleted,
    'not done': (task) => !task.isCompleted,
}

export default function TasksList({ filter }: { filter: Filter }) {
    const { tasks } = useTasks()
    return (
        <ul className="mt-12 space-y-10">
            {tasks.filter(filters[filter]).map((task) => (
                <TaskList key={task.id} task={task} />
            ))}
        </ul>
    )
}
