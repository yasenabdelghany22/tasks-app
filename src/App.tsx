import MyTasks from './components/MyTasks.tsx'
import TasksHeader from './components/TasksHeader.tsx'
import TasksNav from './components/TasksNav.tsx'
import TasksList from './components/TasksList.tsx'
import TasksForm from './components/TasksForm.tsx'

function App() {
    return (
        <MyTasks>
            <TasksHeader />
            <TasksNav />
            <TasksList />
            <TasksForm />
        </MyTasks>
    )
}

export default App
