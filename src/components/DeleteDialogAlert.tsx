import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import type {Task} from "../types";
import {useTasks} from "../context/TasksProvider.tsx";

export default function DeleteDialogAlert({open, setOpen, task} : {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    task: Task
}) {
    const { tasks, setTasks } = useTasks()
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-description"
        >
            <DialogTitle id="delete-dialog-title">Delete this task?</DialogTitle>
            <DialogContent>
                <DialogContentText id="delete-dialog-description">
                    Are you sure you want to delete "{task.name}"? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => {
                    setTasks(tasks.filter((t) => t.id !== task.id))
                    setOpen(false)
                }} color="error" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}
