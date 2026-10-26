import TaskList from './TaskList.tsx'
import { useTasks } from '../context/TasksProvider.tsx'
import type { Filter, Task } from '../types'
import DeleteDialogAlert from './DeleteDialogAlert.tsx'
import EditDialog from './EditDialog.tsx'
import { useState } from 'react'

const filters: Record<Filter, (task: Task) => boolean> = {
    '': () => true,
    done: (task) => task.isCompleted,
    'not done': (task) => !task.isCompleted,
}

export default function TasksList({ filter }: { filter: Filter }) {
    const { tasks } = useTasks()
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)
    return (
        <>
            <ul className="mt-12 space-y-10">
                {tasks.filter(filters[filter]).map((task) => (
                    <TaskList
                        key={task.id}
                        task={task}
                        openDeleteDialog={(task) => {
                            setSelectedTask(task)
                            setOpen(true)
                        }}
                        openEditDialog={(task) => {
                            setSelectedTask(task)
                            setEditOpen(true)
                        }}
                    />
                ))}
            </ul>

            {selectedTask && (
                <>
                    <EditDialog
                        key={selectedTask.id}
                        open={editOpen}
                        setOpen={setEditOpen}
                        task={selectedTask}
                    />
                    <DeleteDialogAlert
                        open={open}
                        setOpen={setOpen}
                        task={selectedTask}
                    />
                </>
            )}
        </>
    )
}
