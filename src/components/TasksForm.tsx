import { useState } from 'react'
import { useTasks } from '../context/TasksProvider.tsx'

export default function TasksForm() {
    const [newTask, setNewTask] = useState('')
    const { dispatch } = useTasks()
    return (
        <form
            className="mt-10 flex flex-col-reverse sm:flex-row-reverse gap-4 sm:gap-5"
            onSubmit={(e) => {
                e.preventDefault()
                if (newTask === '') {
                    return
                }
                dispatch({ type: 'ADD_TASK', payload: newTask })
                setNewTask('')
            }}
        >
            <button
                disabled={newTask === ''}
                type="submit"
                className="sm:w-[34%] h-[78px] rounded-sm bg-crimson text-white text-sm font-medium disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson"
            >
                Add
            </button>
            <label className="flex-1">
                <span className="sr-only">Task title</span>
                <input
                    value={newTask}
                    onChange={(e) => {
                        setNewTask(e.target.value)
                    }}
                    type="text"
                    placeholder="Task title"
                    className="w-full h-[78px] rounded-sm border border-neutral-200 px-5 text-base font-light placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-crimson"
                />
            </label>
        </form>
    )
}
