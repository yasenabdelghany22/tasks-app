import MyTasks from './components/MyTasks.tsx'
import TasksHeader from './components/TasksHeader.tsx'
import TasksNav from './components/TasksNav.tsx'
import TasksList from './components/TasksList.tsx'
import TasksForm from './components/TasksForm.tsx'
import {useState} from "react";
import type {Filter} from './types'

function App() {
    const [filter, setFilter] = useState<Filter>('')
    return (
        <MyTasks>
            <TasksHeader />
            <TasksNav filter={filter} setFilter={setFilter} />
            <TasksList filter={filter} />
            <TasksForm />
        </MyTasks>
    )
}

export default App
