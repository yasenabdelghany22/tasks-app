import { type ReactNode } from 'react'
import TasksProvider from '../context/TasksProvider.tsx'

export default function MyTasks({ children }: { children: ReactNode }) {
    return (
        <TasksProvider>
            <main className="w-full max-w-160 bg-white sm:rounded-lg px-6 sm:px-8 pt-4 pb-6 min-h-screen sm:min-h-0">
                {children}
            </main>
        </TasksProvider>
    )
}
