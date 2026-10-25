import TaskList from './TaskList.tsx'
import {useTasks} from "../context/TasksProvider.tsx";

export default function TasksList({ filter }: {filter: string }) {
    const { tasks } = useTasks()
    return (
        <ul className="mt-12 space-y-10">
            {tasks.filter((task) => {
                if (filter === '') {
                    return task
                }else if (filter === 'done') {
                    return task.isCompleted
                }else {
                    return !task.isCompleted
                }
            })
                .map((task) => (<TaskList key={task.id} task={task} />))}
        </ul>
    )
}
