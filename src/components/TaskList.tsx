import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'
import type { Task } from '../types'
import { useTasks } from '../context/TasksProvider.tsx'
import { Done } from '@mui/icons-material'

export default function TaskList({ task, openDeleteDialog, openEditDialog }: {
    task: Task,
    openDeleteDialog: (task: Task) => void,
    openEditDialog: (task: Task) => void,
}) {
    const { tasks, setTasks } = useTasks()

    return (
        <li className="flex items-center justify-between gap-4 bg-indigo-task text-white rounded-sm px-5 py-5 min-h-[100px]">
            <div>
                <p
                    className={`text-xl font-normal leading-tight ${task.isCompleted ? 'line-through opacity-70' : ''}`}
                >
                    {task.name}
                </p>
                <p className="text-sm font-light mt-1 text-white/90">
                    {task.description}
                </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
                <button
                    onClick={() => {
                        setTasks(
                            tasks.map((t) =>
                                t.id === task.id
                                    ? { ...t, isCompleted: !t.isCompleted }
                                    : t,
                            ),
                        )
                    }}
                    aria-label="Mark as done"
                    className={`grid place-items-center w-14 h-14 rounded-full border-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        task.isCompleted
                            ? 'bg-leaf border-leaf text-white'
                            : 'bg-white border-leaf/90 text-leaf'
                    }`}
                >
                    {task.isCompleted ? <DoneOutlinedIcon /> : <Done />}
                </button>
                <button
                    onClick={() => openEditDialog(task)}
                    aria-label="Edit task"
                    className="grid place-items-center w-14 h-14 rounded-full bg-white border-[3px] border-white/70 ring-1 ring-denim/40 text-denim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <EditOutlinedIcon />
                </button>
                <button
                    onClick={() => openDeleteDialog(task)}
                    aria-label="Delete task"
                    className="grid place-items-center w-14 h-14 rounded-full bg-white border-[3px] border-brick text-brick focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    <DeleteOutlinedIcon />
                </button>
            </div>
        </li>
    )
}
